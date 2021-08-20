# Live Patching Services

As part of Live Patching Services, TuxCare provides the following:

* KernelCare Enterprise
* LibraryCare
* KernelCare for IOT
* QEMUCare (Available in Q3 2021)
* DatabaseCare (Available in Q3 2021)


## KernelCare Enterprise

Automated live patching for Linux kernels with centralized management and common automation and vulnerability management tools integration.

* rebootless Linux kernel patching and custom patching. For a complete list of supported kernels and patches, [visit this page](https://patches.kernelcare.com/)
* private patch server for gated infrastructures – [ePortal](https://docs.kernelcare.com/kernelcare-enterprise/)
* out-of-the-box integration with patch management and vulnerability assessment tools

## LibraryCare

Formerly known as KernelCare+, LibraryCare detect and updates shared libraries in-memory without disrupting the applications using them.

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

:::warning Note
Available in Q3 2021
:::

QEMUCare – virtualization patching for cloud providers, VPS hosters, or any other company with QEMU based virtualization systems. It keeps infrastructure patched without disrupting virtual tenants’ systems.

### How QEMUCare works

* An agent is installed on each virtualization host which installs patches directly from the QEMUCare repository.
* In an ePortal environment, your Virtualization Hosts communicate with the QEMUCare ePortal server that acts as an intermediary.

You can [sign up for early access here](https://tuxcare.com/live-patching-services/qemucare/#features).

For more information about QEMUCare, [visit this page](https://tuxcare.com/live-patching-services/qemucare/).

## DataBaseCare

:::warning Note
Available in Q3 2021
:::

DataBaseCare provides live patching for MySQL, MariaDB, PostgreSQL and other enterprise databases. It keeps your applications running while your database backend is being updated, enhancing security, availability and compliance.

### How DataBaseCare works

* An agent is installed on Database Servers which installs patches directly from our repository. 
* This agent is used to distribute and apply patches across all TuxCare products, so if you use more than one, you will still only have one agent running.

[Contact TuxCare team for a free trial](https://tuxcare.com/live-patching-services/databasecare/#DBCare-contact-form).

For more information about DataBaseCare, [visit this page](https://tuxcare.com/live-patching-services/databasecare/).
