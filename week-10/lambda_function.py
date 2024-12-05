import json
import urllib3
import os


def lambda_handler(event, context):
    # Discord Webhook URL should be set in Lambda environment variables
    DISCORD_WEBHOOK_URL = os.environ["DISCORD_WEBHOOK_URL"]

    # Initialize HTTP client
    http = urllib3.PoolManager()

    # Parse the SNS message
    sns_message = event["Records"][0]["Sns"]
    message = json.loads(sns_message["Message"])

    # Extract alarm details
    alarm_name = message["AlarmName"]
    alarm_description = message["AlarmDescription"]
    new_state = message["NewStateValue"]
    reason = message["NewStateReason"]
    timestamp = message["StateChangeTime"]

    # Set color based on alarm state
    color = (
        0xFF0000 if new_state == "ALARM" else 0x00FF00
    )  # Red for ALARM, Green for OK

    # Create Discord message embed
    discord_message = {
        "embeds": [
            {
                "title": f"AWS CloudWatch Alarm: {alarm_name}",
                "description": alarm_description,
                "color": color,
                "fields": [
                    {"name": "State", "value": new_state, "inline": True},
                    {"name": "Reason", "value": reason, "inline": False},
                    {"name": "Time", "value": timestamp, "inline": False},
                ],
            }
        ]
    }

    try:
        # Send message to Discord
        response = http.request(
            "POST",
            DISCORD_WEBHOOK_URL,
            body=json.dumps(discord_message).encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )

        return {
            "statusCode": response.status,
            "body": json.dumps("Successfully sent message to Discord"),
        }

    except Exception as e:
        print(e)
        raise e
