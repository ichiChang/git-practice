# 110306068 資管四 張奕奇 HW4

1. [https://richard.nccumisoj.online](https://richard.nccumisoj.online)

2. goDaddy，以前上網路課的時候老師有提到過，所以選擇在這買

3. DNS 的 A record 就是把 domain name 對應到 ip 位址，也就是有人 access 該 domain name 的時候，DNS server 會回傳這個 ip 位址，讓瀏覽器去這個 ip 找資料

4. NS record 定義了這個 domain name 的 authoritative DNS servers，代表這個 DNS server 對這個 domain name 有管理的權限

5. Domain Name vs FQDN vs URL
   - Domain Name:
     - 網站的基本名稱
     - 例如 `nccumisoj.online`
   - FQDN:
     - 完整的域名，包含所有層級
     - 例如 `www.nccumisoj.online.`
   - URL:
     - 完整的網址、包含 protocol, domain name, path
     - 例如 `https://www.nccumisoj.online/test`
6. http 是明文傳輸，有資料被盜或是假資料的可能性，因此要用 https 比較安全，另外，建立憑證也可以避免被釣魚網站冒充