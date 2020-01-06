# Dashboard


Dashboard helps quickly navigate to user's _Products_. It includes the following tabs:

* [Products](/dashboard/#products)
* [Servers](/dashboard/#servers)
* [CloudLinux Backup](/dashboard/#cloudlinux-backup)


## Products


Click _Dashboard_. You will be redirected to the _Products_ page.

![](/images/dashboard_zoom70.png)

On the _Products_ page you can see all your products.

The following actions are available:

* **Create activation key/Activation Key**. Activation Key is a string of numbers and letters used to activate a product. If an activation key is not created yet, you can do it by clicking _Create activation key_. A new key will be created and displayed. To copy an activation key to clipboard, just click on it.
* **Add Licenses** — shortcut to [Product Purchase](/purchase/#purchase) page.
* **Manage Product** — shortcut to [Product Activation Keys](/dashboard/#cloudlinux-os-activation-keys) page.
* **Read more** — click to get more information about the product.


### Trial Activation


On the _Product_ tab a user can activate a trial license if trial product hasn't been activated yet.

![](/images/freetrial_zoom70.png)

Just click _Free Trial_ and proceed with trial activation instructions.

Also, a user is able to activate trial license from the _Purchase_ page.

![](/images/fretrialpurchase_zoom70.png)

### CloudLinux OS Activation Keys


Click _CloudLinux OS_ at the top menu to go to _CloudLinux OS Activation Keys_ page. Here you can see server licenses used/limits.

![](/images/cloudlinuxosactivationkeys_zoom70.png)

The following actions are available:

* **Copy a [Default Activation Key](/terminology/#terminology) to a clipboard**. To do so, click _Copy_ below the default key.
* **Generate a new Activation Key**. To do so, click _Generate new activation key_. Specify the number of servers and some notes if any and click _Save Changes_ to confirm the action or _Cancel_ to close the popup.
* **[Manage servers](/billing/#overview-products)**.
* **[Add server licenses or buy](/purchase/#purchase)**, if only trial product is activated.
* **Remove unused server licenses**. Click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm the action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
* **Go to [Activation Key Details page](/dashboard/#cloudlinux-activation-key-details-page)**. To do so, click a specific activation key in the table.

The table with a list of all CloudLinux OS Activation Keys has the following columns:

* **Activation key** — activation key string. Click activation key to go to Activation Key Details page.
 ***IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).
  
The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited
* **search for an activation key** — type a search query and the table will filter a list of keys
* **delete one or several activation keys** — tick one or several activation keys or the checkbox in the table header (to select all) and click _Bin_ icon. In the popup, click _Remove_ to confirm the action or _Cancel_ to close popup.


:::tip Note
Default Activation Key cannot be deleted.
:::

#### CloudLinux Spacewalk


Spacewalk is an open-source systems management solution for system provisioning, patching, and configuration.

If a user bought a license directly via CLN UI (not via vendors), he can use Spacewalk to manage his servers when they have been activated with the activation key.

To get to Spacewalk, go to _CloudLinux OS → Activation Keys_. On the left sidebar menu click _Open Servers_ panel, the CloudLinux Spacewalk application opens in a new tab.

![](/images/clnuispacewalk_zoom70.png)

#### CloudLinux Activation Key Details Page



On the _CloudLinux OS Activation Keys_ page click an activation key string in the table to go to _CloudLinux Activation Key Details_ page.

![](/images/cloudlinuxactivationkeysdetails_zoom70.png)

This page contains the following information:

* **activation key** itself is displayed on the blue background; to copy it to clipboard just click it
* **servers (used/limits)** — number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits)
* **note** — any information you’ve added to this activation key.


The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key and enter some notes for your own needs so that you can easily find an activation key when there are a lot of different keys. To apply changes click _Save Changes_ or _Cancel_ to close the popup.

    ![](/images/editactivationkey.png)


* **Remove key**. Click _Remove Activation Key_ button. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.
    :::tip Note
    You cannot delete a default activation key.
    :::

    ![](/images/removeactivationkey.png)


Below, there is a table with all servers activated with this activation key.

The table contains the following columns:

* **Server name** — a host name of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Last check-in** — a date of last successful server [check-in](/terminology/#terminology) .

The following actions are available:

* **Filter servers** list by date of registration. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search** in the list by a specific text. Type a search query in the search field to show specific servers.
* **Remove** a server from this activation key. In this case, a server will not be able to use CloudLinux OS anymore. To do that, tick server(s) and click _Bin_ icon above the table.


### KernelCare Activation Keys


Click _KernelCare_ at the top menu to go to _KernelCare Activation Keys_ page. Here you can see server licenses (used/limits).

![](/images/kcactivationkeypage_zoom70.png)

There are two types of KernelCare licenses available: IP-based and key-based. IP-based license can only be used by IP address it is issued to, while key-based licenses can be migrated to another server within the IP range defined for the key.

#### Key-based licenses

Every KernelCare customer gets a default activation key upon license purchase. You can have multiple activation key in your account, however the overall number of licensed servers cannot exceed the number of purchased licenses.

The following actions are available:

* **Copy a Default Activation Key**. Click a key to copy it to a clipboard.
* **Generate a new Activation Key**. Click _Generate new activation key_. In an opened popup specify _Server quantity limit_, _IP range limit_, _Sticky tag_, and add some _Notes_, if any, and click _Save Changes_ to confirm the action or _Cancel_ to close the popup.
    ![](/images/kceditpng.png)
* **[Manage servers](/billing/#overview-products)**.
* **[Add server licenses](/purchase/#purchase)**.
* **Remove unused server licenses** . Click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
* **Go to [Activation Key Details](/dashboard/#kernelcare-activation-key-details-page) page**. To do so, click a specific activation key in the table.

The table with a list of of all KernelCare Activation Keys contains the following columns:

* **Activation key** — an activation key string. Click an activation key to go to [Activation Key Details](/dashboard/#kernelcare-activation-key-details-page) page.
* **IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited;
* **search for an activation key** — type a search query and the table will filter a list of keys;
* **delete one or several activation keys** — tick one or several activation keys or the checkbox in the table header (to select all) and click _Bin_ icon. In the popup, click _Remove_ to confirm the action or _Cancel_ to close popup.

:::tip Note
Default Activation Key cannot be deleted.
:::

#### KernelCare Activation Key Details Page

On the _KernelCare Activation Keys_ page click an activation key in the table to go to _KernelCare Activation Key Details_ page.

![](/images/kernelcareactivationkeydetails_zoom70.png)

This page contains the following information:

* An **activation key** itself is displayed on the blue background; to copy it to a clipboard just click it;
* **Servers (used/limits** ) — number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits);
* **Note** — any information you’ve added to this activation key.
* **Sticky tag** — when the _Sticky Tag_ feature is enabled for particular servers, all such servers will get patches only released before the date specified in the _Sticky tag_ field.


The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key, change IP range limit, manage sticky tags (see [Patch management with CLN portal (Sticky Tag)](/dashboard/#patch-management-with-cln-portal-sticky-tag)), and enter some notes. To apply changes click _Save Changes_ or _Cancel_ to close the popup.
* **Remove key**. Click _Remove Activation Key_ button to  remove an activation key with all the associated servers. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.

:::tip Note
You cannot delete a default activation key.
:::

![](/images/kcremovekey.png)

Below, there is a table with all servers activated with this activation key.

The table contains the following columns:

* **Server name** — a hostname of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Effective Kernel** —  a version of kernel used.
* **Last check-in** — the date of last successful server [check-in](/terminology/#terminology).

The following actions are available:

* **Filter servers list** by date of registration. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search** in the list by a specific query. Type a search query in the search field to show specific servers.
* **Remove a server from this activation key**. In this case, a server will not be able to use KernelCare anymore. To do so, tick server(s) and click _Bin_ icon above the table.

#### Patch management with CLN portal (Sticky Tag)


The best way to handle QA and Production environments is to use Sticky Tag feature of KernelCare activation keys issued from CloudLinux Network (CLN) portal.

To use this tag, go to _CLN portal → KernelCare tab → click a key to edit → click Edit Key_.

You should provide a separate key for each environment and set them to a particular sticky tag which is actually the date to which all the servers in an environment have to be patched.

![](/images/kcstickytag.png)

The date in _Sticky tag_ field can be any date from May 28, 2018 up to one day before today.

To use Sticky Tag feature on the servers to be patched, run:

```
$ /usr/bin/kcarectl --set-sticky-patch=KEY
```

Alternatively, you can do the same by adding ` STICKY_PATCH=KEY` to `/etc/sysconfig/kcare/kcare.conf` file.

:::warning Warning
Do not replace the KEY word with the actual KernelCare license key used to register the server.
:::

When the Sticky Tag feature is enabled for particular servers, all such servers will get patches only released before the date specified in the _Sticky tag_ field.

This way, you can add new patches to all the servers in some environment (i.e. registered with the same KernelCare license key) by updating only a single field in the CLN portal.

#### KernelCare Monitoring

#### Built-in monitoring

Systems protected by KernelCare can be monitored by means of CloudLinux Network (CLN) portal available at [https://cln.cloudlinux.com](https://cln.cloudlinux.com).

Click _KernelCare activation key_ to see the list of servers activated with it. Servers marked with exclamation mark do not have the latest KernelCare patches installed.

![](/images/kckeymonit_zoom70.png)

#### KernelCare monitoring API

It is possible to integrate KernelCare status monitoring with any third-party monitoring system that supports REST API.

* The query syntax for key-based licenses is: `https://cln.cloudlinux.com/api/kcare/nagios/{key_id}`
* The query syntax for IP-based licenses (resellers) is: `https://cln.cloudlinux.com/api/kcare/nagios-res/{login}/{token}`

The latest CloudLinux REST API description is available at [https://cln.cloudlinux.com/clweb/downloads/cloudlinux-rest-api.pdf](https://cln.cloudlinux.com/clweb/downloads/cloudlinux-rest-api.pdf)

### Imunify360 License Types


Click _Imunify360_ at the top menu to go to _Imunify360 License Types_ page.

![](/images/im360licensetypes_zoom70.png)

Here you can see all available license types, buy and manage them.

The following license types are available:

* **Single User** — good for servers with only one [user](/terminology/#terminology) in the system
* **Up to 30 users** — good for servers with users quantity less than 30 or equal
* **Up to 250 users** — good for servers with users quantity less than 250 or equal
* **Unlimited** — good for servers with users quantity more than 250
To buy desired license type, click _Buy server licenses_ button. You will be redirected to [Purchase](/purchase/#purchase) page.

A license card includes the following information:

* **Server licenses** — activated/limit;
* **Activation key** itself. To copy activation key to clipboard, click it.

The following actions are available to manage a license.

* **Add server license** — click _Add server license_ button, you will be redirected to [Purchase](/purchase/#purchase) page.
* **Remove unused server licenses** — click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
:::tip Note
If you have only one license then after the deletion, you will not have any licenses purchased and the product will be deleted from your account.
:::
* **Manage servers** — click _Manage servers_ button. You will be redirected to _[Billing →  Overview → Products page](/billing/#overview-products)_.
* **Manage activation keys** — click _Manage Activation keys_. You will be redirected to [Imunify360 Activation Keys](/dashboard/#imunify360-activation-keys) page.

#### Imunify360 Activation Keys


Click _Imunify360_ at the top menu, then click _Activation Keys_ on the left menu to go to _Imunify360 Activation Keys_ page.

![](/images/imunify360activationkeys_zoom70.png)

Here you can see the table with a list of all Imunify360 Activation Keys. It contains the following columns:

* **Activation key** — activation key string. Click activation key to go to [Activation Key Details](/dashboard/#imunify360-activation-key-details-page) page.
* **License type** — a type of Imunify360 license for certain key. See [all available license types](/dashboard/#imunify360-license-types).
* **IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited;
* **filter keys by license type** — click _License Type_ and tick desired type(s);
* **search for an activation key** — type a search query and the table will filter a list of keys;
* **delete one or several activation keys** — tick one or several activation keys, or the checkbox in the table header (to select all) and click _Bin_ icon. On the popup click _Remove_ to confirm the action or _Cancel_ to close popup.


:::tip Not
Default Activation Key cannot be deleted.
:::

#### Imunify360 License Type Activation Keys

Click Imunify360 at the top menu then _Activation Keys → desired type of license (Single User, Up to 30 users, Up to 250 users, Unlimited)_ on the left menu to go to _Imunify360 License Type Activation Keys_.

![](/images/im360upto30activationkey_zoom70.png)

This page contains the following information:

* An **activation key** itself is displayed on a blue background; to copy it to a clipboard just click it.
* **Server licenses (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **Generate a new activation key** — click _Generate new activation key_. Create activation key popup opens. Set number of servers to be activated with this key or tick unlimited. Enter some notes, if any. Click _Save Changes_ to generate a new key or _Cancel_ to close the popup. The new generated key is displayed in the table.
* **Manage servers** — click _Manage servers_ button, you will be redirected to [ Billing → Overview → Products page](/billing/#overview-products).
* **Add server licenses** — click _Add server licenses_, you will be redirected to [Purchase](/purchase/#purchase) page.
* **Remove unused server licenses** — click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.

:::tip Note
If you have only one license then after the deletion, you will not have any licenses purchased and the product will be deleted from your account.
:::

Below, there is a table with all activation keys. The table contains the following columns:

* **Activation key** — click activation key string to go to [Activation Key Details](/dashboard/#imunify360-activation-key-details-page) page.
* **License Type** — a type of Imunify360 license (Single User, Up to 30 users, Up to 250 users, Unlimited).
* **[IP Range](/terminology/#terminology)** — a range of IP addresses for a particular activation key.
* **Note** — any notes to a particular activation key.
* **Servers (used/limits)** —  a number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits).

The following actions are available:

* **Filter keys list by server limits**. Click _Server Limits_ and specify a number of servers or tick _Unlimited_.
* **Filter keys list by license type**. Click _License Type_ and tick desired types.
* **Search** in the list by a specific query. Type a search query in the search field to show specific keys.
* **Remove activation key**. Tick key(s) and click _Bin_ icon above the table. The Remove popup opens. Confirm the action by clicking _Remove_ or click _Cancel_ to close the popup.

:::tip Note
Removing activation key will deactivate the product on connected servers.
:::

:::tip Note
You cannot delete the default activation key.
:::

#### Imunify360 Activation Key Details Page


On the _Imunify360 Activation Keys_ page click an activation key string in the table to go to _Imunify360 Activation Key Details_ page.

![](/images/imunify360activationkeydetails_zoom70.png)

This page contains the following information:

* An **activation key** itself is displayed on a blue background; to copy it to a clipboard just click it;
* **Servers (used/limits)** — a number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits);
* **Note** — any information you’ve added to this activation key.

The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key and enter some notes. To apply changes, click _Save Changes_ or _Cancel_ to close the popup.
    ![](/images/im360editactivationkey.png)
* **Remove key**. Click _Remove Activation Key_ button. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.

:::tip Note
* You cannot delete a default activation key.
* Removing the activation key will deactivate the product on connected servers.
:::

Below, there is a table with all servers activated with this activation key. The table contains the following columns:

* **Server name** — a hostname of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Last check-in** — the date of the last successful server [check-in](/terminology/#terminology).
  
The following actions are available:

* **Filter servers list by the date of registration**. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search in the list by specific query**. Type a search query in the search field to show specific servers.
* **Remove a server from this activation key**. In this case, a server will not be protected by Imunify360 anymore. To do that, tick server(s) and click _Bin_ icon above the table.

## Servers


Click _Dashboard → Servers_ to go to _All Servers_ page. A list of all servers with activated products belonged to this account is available.

![](/images/allserverspng_zoom70.png)

The table includes all servers that have been activated in all products within the account. The table contains the following columns:

* **Server name** — server hostname;
* **IP** — server IP address;
* **Installed products** — shows a logo of a product activated on a server.

Click a server name to show server details:

* **Product and activation key** used to register that server
* **Registered** — a date when a server was activated. A server sends this information to CLN
* **Last check-in** — the last date when a server successfully responded to check-in
* **Effective Kernel** — displays the version of kernel used (only for KernelCare). Click the version to go to [https://patches.kernelcare.com/](https://patches.kernelcare.com/) 
* **Change License Type** —  allows to change the type of the Imunify360 license (only for Imunify360). Click _Change License Type_ to open change popup specify a new license type. Confirm the action by clicking _Change_ or click _Cancel_ to close the popup.

:::tip Note
When you have changed the server license successfully, you need to get a new activation key and activate Imunify360 on the server using [CLI command](https://docs.imunify360.com/command_line_interface/#register) (register). Otherwise, Imunify360 will not be registered and activated, and will not work on the server.
:::

![](/images/imunify360changeserverlisencetype.png)

The following actions are available:

* **Filter by product** — click _Product_ button and select one or more products;
* **Filter by date of registration** — click _Registered date_ to display a calendar where you can pick a date or a period to filter by.
* **Filter by any search query** — type a query. A search is performed in _Server name_ and _Activation key_ entities.
* **Buy server license** — click _Buy Server Licenses_ button, you will be redirected to the [Purchase](/purchase/#purchase) page.

### Server groups

The _Server groups_ feature allows you to add servers in one group and perform global actions on this group (and thereby on all servers included in this group).

#### How to create a group

* Go to _Servers_ and select a required product, then click _Manage server groups_
    
    ![](/images/manage_server_groups.png)
  
* Click _Create your first group_ or _Create new group_

    ![](/images/create_group.png)

* Type a group name and description if needed

    ![](/images/new_group.png)

* Then click _Save_ to apply changes or click _Cancel_ to close the popup.
* Close the popup.

#### How to remove a group

* Go to _Servers_ and click _Manage server groups_

    ![](/images/manage_group.png)

* Select a group and click _Bin_ (![](/images/bin.png))
* When the group is removed you can close the popup

#### How to add a server to a group

* Go to _Servers_ and select a required product. Click ![](/images/plus.png) in the _Group_ column.

    ![](/images/add_server.png)

* Choose a group from the list or create a new one by typing its name

    ![](/images/add_item.png)

* Click _Add to group_ to apply changes or click _Cancel_ to close the popup
* You will see that the server is added to the group

    ![](/images/added_result.png)

* Or for group action, select servers in the list and click _Add to server group_.

    ![](/images/add_mass_action.png)

#### How to remove a server from a group

* Go to _Servers_ and click _Manage server groups_

    ![](/images/manage_group.png)

* Scroll to _Servers_ and click ![](/images/cross.png) for a server to be removed from the group

    ![](/images/remove_server.png)

* Then click _Save_ to apply changes or click _Cancel_ to close the popup
* Close the popup

#### How to move a server from one group to another

* Go to _Servers_, select server(s) in the list and click _Add to server group_

    ![](/images/add_mass_action.png)

* Choose a group or create a new one and click _Add to group_

    ![](/images/move_to_another_group.png)

* The server(s) will be moved to another group 

  





## CloudLinux Backup


Available only if CLoudLinux Backup is purchased and activated.

Click _CL Backup_ in the main header menu to go to _CloudLinux Backup_ page. Here you can see a table with all your backups for CloudLinux products.

![](/images/newclnclbackup_zoom70.png)

The table includes  the following columns:

* **Server name** — a name of the server with backup
* **Server IP** —  displays the IP of the server with backup
* **Region** —  server location
* **Used, GB** — backup space used in GB
* **Total, GB** — total backup space in GB
* **Actions**:
    * **Edit** —  click to manage the backup. In the opened popup click _Go to the backup management_, the backup management application opens in a new tab
    * **Resize** — click to change the backup space. In the opened popup add or remove the Gbs and click _Resize_ to apply or _Cancel_ to close the popup.
    * **Deactivate** — click to remove the backup.
    :::tip Note
    Backup files cannot be restored after deactivation.
    :::
    In the opened popup confirm the action by clicking _Remove_ or click _Cancel_ to close the popup.
    * **Relink** —  for a backup not associated with a server. Click to connect a backup to a specific server. Confirm the action in the popup or click _Cancel_ to close the popup.

