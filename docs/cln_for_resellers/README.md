# CLN For Resellers


[Registration](/registration/)
[IP Licenses Management](/ip_licenses_management/)
[Server Accounts and Spacewalk Account Management](/cloudlinux_spacewalk_account_m/)
[Deposit Top Up](/deposit_top_up/)
[Autopayments](/autopayments/)
[Invoices](/invoices2/)

## Registration


Please contact our billing team to assist you with registration at [None](/cdn-cgi/l/email-protection#06646f6a6a6f686146656a6973626a6f68737e2865696b) .

The process of reseller registration differs from customer registration. Go to reseller registration page [https://cln.cloudlinux.com/console/register/reseller](https://cln.cloudlinux.com/console/register/reseller) and fill in the required forms.
Step 1 — choose the initial deposit amount and click _Next_ .
![](/images/clnresellerregistrationstep1_zoom90.png)

Step 2 — carefully read and accept reseller agreement.
Step 3 — configure payment details and click _Submit payment and continue_ . **Note that right after clicking ** **_Submit_** ** the whole deposit amount will be withdrawn from an account selected as ** **_Current Payment Method_** **.**
![](/images/clnresellerregistrationstep3_zoom90.png)

Step 4 — specify your account login, password, email for billing, and other required information and click _ Sign in_ . You will find your login and password in your welcome email. After activation, you can log in to the CLN.

## IP Licenses Management


IP license allows to register server only by it's IP (without a need to create a key and use it during registration).
IP Licenses page allows resellers to add and remove IP licenses.
Click required product at the top menu and then _IP Licenses_ at the left sidebar.
![](/images/clniplicense_zoom60.png)

The table contains the following information:

IP — an IP address of the activated server
Hostname — a hostname of the server
Added —  a date when a server with this IP was activated
Last check-in — the date of the last successful [server check-in](/terminology.htm#checkin/)
Type —  license type for this server
Actions

The following actions are available:

Filter servers list by IP and product type. Click _ IP_ and select an IP, or click _Product Type_ and select a product.
Search in the list by a specific query. Type a search query in the search field to show specific servers.
Remove IP from using this license. Tick IP(s) and click _Bin_ icon in the IP line or above the table for bulk action.
Add IP to this license. Click _Add IP_ button. On the opened pop-up specify IP and product type (for Imunify360 licenses only) and click _Add IP_ to complete the action or _Cancel_ to close the pop-up.
Activate backup. Click ![](/images/clnactivatebackup.png) . On the opened pop-up specify backup size and datacenter and click _Create_ to complete the action or Cancel to close the pop-up.
![](/images/clncreatebackup_zoom70.png)
Manage backup. Click ![](/images/clnmanagebackup.png) . On the opened pop-up click _Go to the backup management_ to go to backup management system interface (opens in a new tab) or click _Cancel_ to close the pop-up.


## Server Accounts and Spacewalk Account Management


To manage accounts using Spacewalk system via CLN UI, click _ CloudLinux OS_ at the top menu and then click _ Server accounts_ on the left sidebar.
![](/images/clnserveraccounts_zoom60.png)

The following data is available:

Total licenses on account — a total number of CloudLinux licenses on this account
Unused licenses — number of licenses with no server attached
License cost —  the cost of licenses per month

The table contains the following information:

Login — Spacewalk server account login
First name — server owner first name
Last name — server owner last name
Company — server company-owner name
Email
Limited/used — total/used number of licenses
Actions

The following actions are available:

Add server account. To do so, click _Add account_ . The Add server account pop-up opens.

![](/images/clnaddserveracc_zoom90.png)

Fill in the form and click _ Add Account_ to complete the action or _Cancel_ to close the pop-up.

Edit server account. To do so, click ![](/images/clnedit.png) . Edit server account pop-up opens. To save changes, click _ Save account_ or click _Cancel_ to close the pop-up.
Remove server account. To do so, click ![](/images/clnremove.png) . Remove account pop-up opens. To confirm removing, click _Remove account_ or click _Cancel_ to close the pop-up.
View server account details. To do so, click server login in the _Login_ column, the server account details page opens.

![](/images/clnserveraccinfo_zoom60.png)

The following data is available:

System 0/0 — limit and used
Email
Name — a name of server owner
Company — company-owner name

The table contains the following information:

Token — a unique identifier for a key
Created — the token (key) creation date
Usage — number of servers registered on this key
Actions

The following actions are available:

Create key. To do so, click _Create key_ button. A created key will be added to the table automatically without any notification.
Remove key. To do so, click ![](/images/clnremove.png) . Key removing pop-up opens. Confirm the action by clicking _Remove_ or click _Cancel_ to close the pop-up.


## Deposit Top Up


Deposit top up feature is available for reseller’s accounts. Go to Billing → Balance and Top Up.

![](/images/clndeposittopup_zoom60.png)

To add funds via your PayPal account, click _Proceed to Checkout_ . You will be redirected to PayPall checkout page. Fill in _Price per item_ and click _Continue_ , then proceed with PayPal.

If a reseller adds the Payment method, he will be able to "top up" the deposit.

![](/images/clntopup.png)



## Autopayments


Autopayments feature is available for reseller’s accounts. Go to Billing → Payment Methods → Autopayment.

![](/images/clnautopayments_zoom60.png)

The following autopayment types are available:

Auto add funds — when balance is below $100 it is replenished to the specified amount
Auto repay (default option) — once your balance becomes negative, your card will be automatically charged. Minimal charge is $20
Do not add funds automatically

When you have selected and configured autopayment type, click _Save_ .



## Invoices


Go to Billing → Invoices. There is a table with all invoices and appropriate information.

![](/images/clnresellerinvoices_zoom60.png)

The table contains the following columns:

Invoice id — unique invoice number
Created — the date when invoice was created
Type —  payment type
`o` Payment received — invoice is already payed
`o` Refund — you have a debt on your account. Please pay the invoice.
`o` Invoice —  invoice is issued. Please pay the invoice.
Pay period — invoice period
Total — the total amount of money you have to pay
Balance — amount of money on your account
Actions
![](/images/clniconshow.png) — open invoice in a pop-up (you can download it)
 ![](/images/clnicondownload.png) — open invoice in a new tab (you can download it)

Click ![](/images/clnarrow.png) near invoice id to show detailed bill information:

Title — license name
Quantity — licenses quantity
SubTotal — the price for that number of licenses


