# Terminology


* **Check-in** — is an event when the server with the installed product pings CLN and sends the information about its availability and state.
* **Default Activation Key** — it is a general activation key displayed all over CLN interface for quick access to it.
* **IP Range** — it is a range of IP addresses that are allowed for a particular activation key. Servers with IPs that are not in the range will not be activated with this activation key.
* **Server License** — this is a product license that allows to activate it on the servers. For example, 3 server license means it is possible to active one copy of product on one server.
* **Server Limits** — a number of servers that can be registered with a particular key.
* **License Type** — a type of server license that is used in Imunify360 and determines a limit of  server users. Among other products, Imunify360 has different types of server licenses:
    * **Single User** — good for servers with only one user in the system;
    * **Up to 30 users** — good for servers with users quantity less than 30 or equal;
    * **Up to 250 users** — good for servers with users quantity less than 250 or equal;
    * **Unlimited** — good for servers with users quantity more than 250.
* **User** —  a registered user on the installed server:
    * For cPanel, Plesk, and DirectAdmin hosting panels it calculates the number of users in it, excluding system users.
    * For standalone installation, it calculates users with UID equal or more than 500 in CentOS 6 and UID equal or more than 1000 in CentOS 7.


