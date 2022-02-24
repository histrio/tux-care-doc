# Live Patching Services

As part of Live Patching Services, TuxCare provides the following:

* KernelCare Enterprise
* LibraryCare
* KernelCare for IOT
* QEMUCare
* DatabaseCare (Available in Q3 2021)


## KernelCare Enterprise

### Introduction
KernelCare Enterprise is a live kernel patching service that provides security patches and bugfixes for a range of popular Linux kernels that can be installed without rebooting the system

### Benefits
Today, system administrators have to reboot a server to apply the latest kernel updates. These updates are necessary to prevent security issues. Due to downtime associated with reboots, however, such updates are often delayed, pushed into the darkest hours of the night. It is common for server owners to not update their systems for months or even years and to run vulnerable systems to avoid downtime. Managed service providers face the problem of having to schedule downtime and then updating and rebooting thousands of servers in a short period of time, straining resources. KernelCare solves this update and reboot issue by providing live kernel patching without the need for a reboot

### Key Features
* Rebootless Linux Kernel Patching & Custom Patching
* Works On-prem & in the cloud
* Private patch server for gated infrastructures - ePortal
* Out-of-the-box integration with patch management & vulnerability assessment tools

### Getting trial license

You will need a trial activation key to be able to use the KernelCare Enterprise. The trial license subscription will work for 30 days.

If you have any issues getting activation key or if you have any questions regarding using your trial subscription – contact [sales@cloudlinux.com](mailto:sales@cloudlinux.com) and we will help.

### Installation

KernelCare Enterprise is compatible with 64-bit versions of AlmaLinux/CloudLinuxOS/CentOS/RHEL 6,7 and 8, Oracle Linux 6 and 7, Amazon Linux 1 and 2, Virtuozzo/PCS/OpenVZ 2.6.32, Debian 8,9 and 10, Proxmox VE 5 and 6, Virt-SIG/Xen4CentOS 6 and 7, Ubuntu 14.04, 15.04 and 16.04 kernels. The list of compatible kernels can be found on the following link: [https://patches.kernelcare.com/](https://patches.kernelcare.com/) .

To install KernelCare Enterprise, run:

```
curl -s -L https://kernelcare.com/installer | bash
```

or:

```
wget -qq -O - https://kernelcare.com/installer | bash
```

If you are using IP-based license, nothing else required to be done.

If you are using key-based license, run:

```
$ /usr/bin/kcarectl --register KEY
```

`KEY` is the registration key code string provided when you sign up for purchase or trial of the product.

If you are experiencing **_Key limit reached_** error after the end of the trial period you should first, unregister the server by running:

```
kcarectl --unregister
```

To check if patches applied, run:

```
$ /usr/bin/kcarectl --info
```

The software will automatically check for new patches every 4 hours.

If you would like to run update manually:

```
$ /usr/bin/kcarectl --update
```

To check current kernel compatibility with KernelCare, use the following [script](https://raw.githubusercontent.com/iseletsk/kernelchecker/master/py/kc-compat.py) by running:

```
curl -s -L https://kernelcare.com/checker | python
```

or:

```
wget -qq -O - https://kernelcare.com/checker | python
```

### Update 

To update the agent package to the latest version use: 

* For rpm-based distributives (CentOS, RedHat, etc):

```
yum install -y kernelcare
```

* For apt-based distributives (Debian, Ubuntu, etc):

```
apt-get install kernelcare
```

### Uninstalling


To uninstall KernelCare Enterprise, do the the following:

_For CloudLinux, CentOS, RHEL, Virtuozzo, OpenVZ:_

```
$ yum remove kernelcare
```

_For Ubuntu, Debian, Proxmox VE:_

```
apt-get remove kernelcare
```
```
dpkg --remove kernelcare
```

This will also unlink the system from its activation key (provided there is network connectivity to the CLN Portal). However, you'll need to remove the license from the CLN Portal manually if you don't plan to use the service anymore.


### Switching from Ksplice

To switch from Ksplice to KernelCare Enterprise, use the following script that uninstalls Ksplice and installs KernelCare Enterprise instead.

It will automatically detect and abort if the system is not 64-bit (as KernelCare Enterprise doesn't support it).

It will also detects when Ksplice module cannot be uninstalled and retries multiple times.

Download the script here: [https://patches.kernelcare.com/ksplice2kcare](https://patches.kernelcare.com/ksplice2kcare).

Run the command:

```
$ bash ksplice2kcare $KERNELCARE_KEY$
```

The key can be created/retrieved in KernelCare Enterprise Keys section of CLN.

If you want to use IP based licenses, run:

```
$ bash ksplice2kcare IP
```

You have to add IP license for that server, and it is just two letters: IP, not the actual IP.

By default the script will attempt 3 times to uninstall Ksplice, waiting 60 seconds in between. You can run it using `nohup` if you don't want to wait.

You can change that by editing the script and changing `RETRY` and `SLEEP` values.

The script will exit with exit code `0` and message _Done_ on success. Otherwise, it will produce exit code `-1`.

Complete log file can be found at `/var/log/ksplice2kcare.log`.

#### Canonical Livepatch

KernelCare Enterprise is not compatible with Canonical Livepatch and should not be used on the same system.

### Basic management


To disable automatic updates, edit the file `/etc/sysconfig/kcare/kcare.conf`

```
AUTO_UPDATE=False 
```

To check the updated ('effective') version, run:

```
$ /usr/bin/kcarectl --uname 
```

We provide convenience script `/usr/bin/kcare-uname` that has same syntax as `uname`.

To see applied patches, run:

```
$ /usr/bin/kcarectl --patch-info 
```


### Command line tools


`/usr/bin/kcarectl` - Manage KernelCare Enterprise patches for your kernel.

`/usr/bin/kcare-uname` - Print certain system information.

#### kcarectl

| | |
|-|-|
|`-i, --info` | Display information about patches installed by KernelCare Enterprise.|
|`-u, --update ` | Download latest patches, and apply them to current kernel.|
|`--smart-update  [since 1.6] ` | The same as --update, but uses [UPDATE_POLICY](/live-patching-services/#config-options) to decide where to get patches.|
|`--unload` | Unload patches.|
|`--auto-update` | Check if update is needed and update.|
|`--patch-info` | Lists applied patches.|
|`--force  [since 2.3] ` | When used with update, forces applying the patch even if unable to freeze some threads.|
|`--uname` | Prints safe kernel version.|
|`--license-info` | Output current license info.|
|`--register KEY` | Register using KernelCare Enterprise Key.|
|`--register-autoretry [since 2.5]` | If registration fails retries registration indefinitely.|
|`--unregister` | Unregister from KernelCare Enterprise for Key based servers.|
|`--userspace-update [PATCHES]` | Download latest patches and apply them to the corresponding userspace processes. Сan be set so that only certain types of patches are applied.|
|`--test` | Try test builds instead of production builds (deprecated, use --prefix=test instead).|
|`--prefix` | Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)|
|`--version` | Print KernelCare Enterprise version.|
|`--import-key PATH` | Import gpg key.|
|`--set-monitoring-key` | Set monitoring key for IP based licenses. 16 to 32 characters, alphanumeric only [version 2.1+]|
|`--freezer  [since 2.3] ` | none: don't freeze any threads; full: freeze all threads; smart: freezes only threads that need to be frozen for patching. If option is not selected, best freezer method is chosen automatically.|
|`--check [since 2.4-1]` | Check if new patchset is available, without updating. Exit code 0 means there is a new kernel. 1 when there is no new kernel.|
|`--doctor [since 2.6]` | Send a report to the TuxCare support staff for diagnostics.|
|`--set-patch-type extra ` | To enable extra patches.|
|`--set-patch-type free` | To enable free patches.|
|`--set-sticky-patch SET_STICKY_PATCH` | Set patch to stick to date in format DDMMYY or retrieve it from KEY if set to KEY (no support for ePortal). Empty to unstick. More info at [Sticky Patches](/live-patching-services/#sticky-patches).|
|`--tag COMMAND` | Adds an extra _Tag_ field for a server. COMMAND is a user-defined parameter.|

:::tip Note
Currenlty available userspace patch types are `libs` and `qemu`. To apply patches only for shared libraries, use `--userspace-update libs`.
:::

#### kcare-uname


Print certain system information.  With no OPTION, same as `-s`.

| | |
|-|-|
|`-a, --all` | print all information in the following order, except omit `-p` and `-i` if unknown|
|`-s, --kernel-name` | print the kernel name|
|`-n, --nodename` | print the network node hostname|
|`-r, --kernel-release` | print the kernel release|
|`-v, --kernel-version` | print the kernel version|
|`-m, --machine` | print the machine hardware name|
|`-p, --processor` | print the processor type or `unknown`|
|`-i, --hardware-platform` | print the hardware platform or `unknown`|
|`-o, --operating-system` | print the operating system|
|`--help` | display this help and exit|
|`--version` | output version information and exit|


#### kernelcare doctor

This tool collects essential information about the KernelCare environment and sends it to the support team.

```
# kcarectl --doctor
Generating report...
Uploading...
Key: FRWf74Zw11111111.83991334-1111-1111-1111-681ddd653e5f
Please, provide above mentioned key to KernelCare Support Team

```

The command generates a report and prints out the ID which could be linked to a support ticket.

:::tip Note
If there was some connection problem during report uploading, the report will be stored locally as `/root/cl-report`. This file should be sent to the support team manually.
:::

### Config options


A `kcarectl` behavior can be configured using `/etc/sysconfig/kcare/kcare.conf`

| | |
|-|-|
|`AUTO_UPDATE=YES|NO` | `YES` - enable auto-update; `NO` - disable auto-update.|
|`chkconfig kcare off` | Disable auto-update after restart.|
|`PATCH_METHOD=normal|nofreeze|smart` | `Normal` - (default) use freezer;<br>`Nofreeze` - don't use freezer to freeze processes;<br> `Smart` - smart freezer freezes only threads that need to be frozen for patching [kernelcare 2.3+].|
|`PATCH_SERVER` | Server to use to download patches.|
|`REGISTRATION_URL` | Licensing server.|
|`PREFIX=prefix` | Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)|
|`UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [since 1.6] ` | Depending on the policy, on server startup, use:<br>`REMOTE` - (default) patches from patch server.<br>`LOCAL` - only locally cached patches, if none cached (caching is done automatically) - do nothing.<br>`LOCAL_FIRST` - see if locally cached patches exist, and load them. If not, try getting them from remote server.|
|`IGNORE_UNKNOWN_KERNEL=True|False` `[since 2.5-4]` | Don't provide notification if unknown kernel on auto-update.|
|`LOAD_KCARE_SYSCTL [since 2.7-1]` | Controls if `/etc/sysconfig/kcare/sysctl.conf` will be loaded on patchset load. True by default.|
|`--set-patch-type extra` | To enable extra patches.|
|`--set-patch-type free` | To enable free patches.|
|`STICKY_PATCH=KEY` | Retrieve sticky patch from `KEY` (see CLN, Key Edit); not supported for IP based servers or ePortal.|
|`STICKY_PATCH=DDMMYY` | Stick patch to a particular date. More info at [Sticky Patches](/live-patching-services/#sticky-patches).|
|`REPORT_FQDN=True|False` | Force using Fully Qualified Domain as a hostname. False by default.|
|`FORCE_GID=N`|Use this group ID for symlink protection patch. By default, it's 48 (default Apache user GID) or 99 (`nobody` user)|
|`USERSPACE_PATCHES=libs,qemu`| Define which userspace patches will be applyed by default|


### Disabling some patches

Some patches might affect the work of the system, and we created a way to disable them.

This is done via the `sysctl` command.

When new patchset loads, KernelCare Enterprise sysctl options get reset. To prevent that we added a file:

`/etc/sysconfig/kcare/sysctl.conf`

Options in this file will be loaded automatically on new patchset load.

To disable loading this options, specify:

`LOAD_KCARE_SYSCTL=0` in `/etc/sysconfig/kcare/kcare.conf`

To disable the patch, set the corresponding kcare option to `1`.

Patches that can be disabled:

| | |
|-|-|
|Patch |  _sysctl_ option|
|CVE-2015-5157 | kcare_modify_ldt|


# Extra patchset

::: tip Note
KernelCare Enterprise 2.12-5 or higher
:::

KernelCare Enterprise Extra patchset includes all the security fixes from KernelCare Enterprise for AlmaLinux, CentOS 6, CentOS 7, and CentOS 8 as well as symlink protection and IPSet bugfix for CentOS 6.

To enable extra patches and apply patch, run:

```
kcarectl --set-patch-type extra --update
```

To enable extra patches without update, run:

```
kcarectl --set-patch-type extra
```

The ‘extra’ patch will be applied on the next automatic update.

To see details, run:

```
kcarectl --patch-info
```

You should see something similar to:

```
OS: centos6
kernel: kernel-2.6.32-696.6.3.el6
time: 2017-07-31 22:46:22
uname: 2.6.32-696.6.3.el6
 
kpatch-name: 2.6.32/symlink-protection.patch
kpatch-description: symlink protection // If you see this patch, it mean that you can enable symlink protection.
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/symlink-protection.kpatch-1.patch
kpatch-description: symlink protection (kpatch adaptation)
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/ipset-fix-list-shrinking.patch
kpatch-description: fix ipset list shrinking for no reason
kpatch-kernel: N/A
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://bugs.centos.org/view.php?id=13499
```
To enable Symlink Owner Match Protection, add the following line:

`fs.enforce_symlinksifowner=1`

to `/etc/sysconfig/kcare/sysctl.conf`.

And run:

```
sysctl -w fs.enforce_symlinksifowner=1
```


### Sticky patches

:::tip Note
This functionality is not available for ePortal customers. If you are using ePortal, please use [Feeds](/eportal/#feed-management) instead.
:::

Sometimes you don't want to use the latest patches, but you'd like to control which patches are get installed instead. For example, you have tested the patch released on 25th of May 2018 and want to use that patch across all servers.

You can do it by setting `STICKY_PATCH=250518` (ddmmyy format) in `/etc/sysconfig/kcare/kcare.conf`
This guarantees that when `kcarectl --update` or `kcarectl --auto-update` is called, you will get patches from that date and not the newest patches.

With `STICKY_PATCH` you can go back as far as 60 days.

Alternatively, you can set `STICKY_PATCH=KEY`
This way you can control the date from which patches will be applied using KernelCare keys in CLN.
On update, the actual date will be retrieved from CLN (from Key settings) for the key used to register a particular server (not supported for IP based servers).

This is very useful if you want to test patches in QA first and later roll them out to production without doing any changes on the systems.

Here is how you can do that:

* Set `STICKY_PATCH=KEY` on all your servers.
* Register QA servers with one KEY, and Production servers with ANOTHER key.
* Then, stop new updates for Production servers. In CLN set `Sticky Tag` to `yesterday`. You can do it by editing KEY in CLN in DDMMYY format.
* Now, for example, let's use patches as of 03052018 (DDMMYY format). Set them for your QA server key. On the next auto-update, your QA servers will get those patches (auto-updates are typically every 4 hours).

Once you are happy with this patches, set the same Sticky Tag for Production servers key. In 4 hours your production servers should be updated to the same patches that QA servers were.

:::tip Note
You can choose any date within the last 60 days. You cannot choose today's date or date in the future.
:::


#### How to find a proper sticky patch name

Let's assume that you have some kernel patch that you want to "stick" with. All you need is to find a proper label for that patch.

![sticky-proper-label](/images/sticky-proper-label.png)

As you can see, the patch was released at 2020-09-16. And if apply label's date format, it becomes `16092020` that will be the sticky patch value.


### Scanner Interface

#### Issue description

Commonly used security scanners can still see CVEs even if they are patched by KernelCare Enterprise. It turns out that all their decisions about CVE are based on:

* currently installed (or not) kernel packages
* uname information

#### How to use

It’s rather simple. New scan results after installing a package and applying a patchset should not show any kernel CVEs that are handled by KernelCare Enterprise.

For example, Nessus for an old kernel shows a bunch of detected CVEs

![](/images/scanner-manipulation-before.png)

After patches were applied, there are no kernel-related CVEs

![](/images/scanner-manipulation-after.png)


### UEFI Secure Boot Support


:::Note
This feature is an early stage of adoption. Not all the distribution will be able to support. 
:::


This new functionality lets KernelCare work on systems with secure boot set up in their UEFI firmware. We are going to add a public certificate to the MOK (Machine Owner Keys) database that KernelCare will use to sign modules.

The latest KernelCare package contains a public certificate and will be available in the `/usr/libexec/kcare/kernelcare_pub.der`. For older versions, it could be downloaded from the [https://patches.kernelcare.com/kernelcare_pub.der](https://patches.kernelcare.com/kernelcare_pub.der) to that location.

For example:

``` bash
curl -o /usr/libexec/kcare/kernelcare_pub.der https://patches.kernelcare.com/kernelcare_pub.der

```


1. Use `mokutil` as root to add this new MOK to the UEFI firmware. 

```bash
$ mokutil --import /usr/libexec/kcare/kernelcare_pub.der
 input password:
 input password again:
```

It doesn't have a MOK password, and `mokutil` will ask you to create one. The password is temporary and will be used on the next boot. 

2. Reboot your machine to enter the MOK manager EFI utility.

  First, go down to the 'Enroll Mok': 

![alt text](/images/uefi-enroll-mok.png "Select Enroll MOK")

Then the firmware gives you the option of viewing the new MOK or continuing. Let's continue. 

![alt text](/images/uefi-continue.png "Select Continue")

It then asks you to confirm the enrollment.

![alt text](/images/uefi-yes.png "Select Yes")

Then you will need to enter the password you used when running `mokutil --import`. 

![alt text](/images/uefi-password.png "Enter the password")

Finally, the firmware will ask you to reboot. 

![alt text](/images/uefi-ok.png  "Select OK")

3. Verify the key has been loaded by finding it in the output of the following command:

``` bash
$ mokutil --list-enrolled | egrep -i 'SHA1|Issuer'

```

In some cases the enrolled key will not be shown but could be verified by the following command:

```bash
$ dmesg | grep -i 'cloud linux' 
[   0.722149] EFI: Loaded cert 'Cloud Linux Software, Inc: Kernel Module Signing Key: 12ff0613c0f80cfba3b2f8eba71ebc27c5a76170' linked to '.system_keyring'
```

That's it. Now you should be able to apply patches as usual.

To get more information about signing kernel modules for secure boot, see
[https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel).




## LibraryCare

Formerly known as KernelCare+, LibraryCare detect and updates shared libraries in-memory without disrupting the applications using them.

### Introduction
LibraryCare is a patching tool for shared libraries and detecting library-related vulnerabilities. Its patches the library files in memory without rebooting.

### Benefits
Today in a lot of organizations, it's very challenging to get approval for maintenance windows that are required to reboot servers and restart an application. There are multiple applications running on a single server today shared the Glibc and OpenSSL libraries. 

Even if they’re patched manually, without a reboot, shared libraries may contain vulnerabilities. When libraries are updated on disk, old unpatched files can persist in a server’s memory. What’s more, vulnerability scanners don’t detect these old unpatched library files in memory. With LibraryCare the local server libraries are fully protected against all knows attackers and vulnerability

### Key Features
* Rebootless Library Patching
* Avoid rebooting the application
* Support OpenSSL & Glibc

### Getting trial license

You will need a trial activation key to be able to use the KernelCare Enterprise. The trial license subscription will work for 30 days.

If you have any issues getting activation key or if you have any questions regarding using your trial subscription – contact [sales@cloudlinux.com](mailto:sales@cloudlinux.com) and we will help.

### Supported operating systems

LibraryCare patching is now available for the following operating systems:

* CentOS/RHEL/CloudLinux OS 7
* CloudLinux OS 8
* AlmaLinux 8
* Oracle Linux 7
* Oracle Linux 8
* Debian 9/10
* Ubuntu 16.04/18.04
* Proxmox VE 6
* Scientific Linux

### Installation and upgrade

Userspace processes patching feature is available in the KernelCare package.

### Usage

To apply the available patches to all userspace processes, run the following command:

```
$ kcarectl --lib-update
```

To gather information about what processes were patched, run the following command:

```
$ kcarectl --lib-info
```

To gather information about applyed patches, run the following command:

```
$ kcarectl --lib-patch-info
```

To unpatch all involved processes, run the following command:

```
$ kcarectl --lib-unload
```

#### Blacklisting

If you need to avoid patching of some particular process it could be done by blacklist defining. Default one is located in the `/var/lib/libcare/blacklist` and contains a package-provided list. You can overwrite those values by creating the `/var/cache/kcare/userspace/blacklist` file with the higher priority.

#### Auto update

Userspace patching cron job is disabled by default. To enable it, run the following command:

```
libcare-cron init
```

### Troubleshooting

#### Auditd logs

The LibraryCare tools heavily use a `ptrace` syscall and, in case of `auditd` trace it's calls, there will be a lot of records in a log. There is a rule that provided by kernelcare package and located here: `/etc/audit/rules.d/kernelcare.rules`. It will exclue kernelcare processes from audit.

**Note**: no such rule is provided for `el6` due to old `autditd` restrictions. There is a command that will add such rule in runtime:

```
auditctl -l | grep kcare | cut -d' ' -f2- | xargs -t -L1 -r auditctl -d && pgrep libcare-server | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcarever | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcare
```

It removes all currently enabled KernelCare rules and adds a new one by LibraryCare's process ID.


### Unpatched Library Detector (UChecker)

#### Description

UChecker is a scanner that checks network Linux servers and detects out-of-date libraries both on disk and in memory. KernelCare’s open-source scanner will find false negatives by correctly reporting vulnerable libraries running in memory that could be reported as updated by other scanners.

The UChecker (originated from "userspace checker") works with all modern Linux Distributions, it is free and open-source, distributed under the GNU General Public License.

#### How UChecker works

This activity diagram shows how UChecker works:

![](/images/uchecker.jpg)

#### Usage

To scan your systems, run the following command:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo python
```

You will receive the following output:

```
[*] Process httpd[15516] linked to the `libc-2.17.so` that is not up to date.

You may want to update libraries above and restart corresponding processes.

KernelCare+ allows to resolve such issues with no process downtime. To find 
out more, please, visit https://lp.kernelcare.com/kernelcare-early-access?
```

The following information is available in the output:

* Process ID
* Process Name


#### Troubleshooting

To verbose output, you can choose a logging level: `ERROR`, `WARNING`, `INFO`, and `DEBUG`.

For example:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo LOGLEVEL=debug python
```

To learn more, visit the [UChecker Github page](https://github.com/cloudlinux/kcare-uchecker).


## KernelCare for IOT

Provides live security patching for ARM64-based embedded systems for enterprise IoT users and original equipment manufacturers.

For the list of supported distributions and chipsets, [visit this page](https://tuxcare.com/live-patching-services/kernelcare-iot/).

### How KernelCare IoT works

* The KernelCare team is constantly monitoring security mailing lists to check for vulnerabilities. As soon as one is found, the team prepares a patch and then sends it to distribution servers.
* An agent will run a process on your device, checking with the distribution servers every 4 hours until it finds a new patch and then safely apply it to the running kernel without needing to stop it.
* A special kernel module is used to apply the patches. It first loads the update into the kernel address space, then it places relocations on the original code/data to make sure the code block doesn’t execute during the update. Once finished, it will safely switch the execution path from the original to the updated code and then make sure the old code will never run again.
* KernelCare does all of this instantly, automatically, and without service interruptions.

For more information about KernelCare for IOT, [visit this page](https://tuxcare.com/live-patching-services/kernelcare-iot/).

## QEMUCare

QEMUCare – virtualization patching for cloud providers, VPS hosters, or any other company with QEMU based virtualization systems. It keeps infrastructure patched without disrupting virtual tenants’ systems.

### How QEMUCare works

* An agent is installed on each virtualization host which installs patches directly from the QEMUCare repository.
* In an ePortal environment, your Virtualization Hosts communicate with the QEMUCare ePortal server that acts as an intermediary.

### QEMU PatchSet Deployment

Starting from version 1.25, ePortal supports the QEMU patchset management. It
is accessible from the `Patches / QEMUcare` navigation item. QEMU patches
use the same Patch Source credentials, and you don't need to perform additional
configuration.

![](/images/eportal-qemu-feed.png)

User interface for the QEMU patch management is the same as for KernelCare patches, and you
can refer the [PatchSet Deployment](https://docs.tuxcare.com/eportal/#patchset-deployment) documentation.

#### CLI to install the latest patchsets

To update the default feed, run the following command:

```
kc.eportal qemu update
```

To update the `test` feed, run the following command:

```
kc.eportal qemu update --feed test
```

To update all auto-feeds, run the following command:

```
kc.eportal qemu auto-update
```

#### CLI to deploy patchset from archive

```
~$ kc.eportal qemu deploy --help
usage: kc.eportal qemu deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

For example:

```
kc.eportal qemu deploy --feed test /tmp/U20210818_01-qemu.tar.bz2
```

This command will deploy and enable the `U20210818_01-qemu` patchset in to the `test` feed.


## DataBaseCare

DataBaseCare is available for Beta testing! Sign up [here](https://tuxcare.com/live-patching-services/databasecare/).

### Introduction
DatabaseCare is a Live Patching service for MariaDB. DatabaseCare keeps your applications running while your database backend is updated, enhancing database performance, reliability, security, and compliance.

### Benefits
Database Patching is done for fixing bugs, improving system performance, and reducing the number of vulnerabilities but there is a huge impact and effort required for these activities. With DatabaseCare, it applies the patch in memory without requiring any downtime on the database. 

Live patching applies fast security updates without the need to wait for maintenance windows - in fact, organizations deploying DatabaseCare can completely eliminate most maintenance windows on database systems and still be more secure than before.

### Key Features
* Support MariaDB at the moment
* Avoid failover database in High Availability environments
* Avoiding workload migration during the downtime 

### How DataBaseCare works

* An agent is installed on Database Servers which installs patches directly from our repository. 
* This agent is used to distribute and apply patches across all TuxCare products, so if you use more than one, you will still only have one agent running.

For more information about DataBaseCare, [visit this page](https://tuxcare.com/live-patching-services/databasecare/).
