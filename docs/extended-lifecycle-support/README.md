# Extended Lifecycle Support

TuxCare provides Extended Lifecycle Support for major enterprise Linux distributions past the EOL date.

Extended Lifecycle Support is currently available for the following operating systems:

* CentOS 6
* Oracle Linux 6
* Ubuntu 16.04 LTS


:::tip Note
Support for Debian is under development.
:::


### List of supported packages

Extended Lifecycle Support Service by TuxCare includes updates to the kernel and other critical packages:

|**Packages**|**Packages**|**Packages**|**Packages**|
|:-:|:-:|:-:|:-:|
|glibc<br>openssh<br>openssl<br>zlib<br>httpd<br>mysql<br>php<br>userspace packages<br>acl<br>acpid<br>at<br>attr<br>audit<br>authconfig<br>basesystem<br>bash<br>bc|blktrace<br>bridge-utils<br>busybox<br>bzip2<br>crash<br>cyrus-imapd<br>cyrus-sasl<br>db4-utils<br>device-mapper<br>dhclient<br>dhcpv6<br>dmidecode<br>dos2unix<br>dovecot<br>ed<br>gcc<br>gd|gdb<br>glib2<br>groff<br>info<br>iptstate<br>logrotate<br>lslk<br>lvm2<br>makedev<br>nfs4-acl-tools<br>nfs-utils<br>nspr<br>ntp<br>opensp<br>pam<br>perl<br>procmail|procps<br>python<br>rcs<br>rds-tools<br>rhnlib<br>rsync<br>rsyslog<br>setroubleshoot<br>setserial<br>setup<br>sos<br>stunnel<br>tzdata<br>vim<br>wget<br>yum-metadata-parser<br>yum-rhn-plugin|

## CentOS 6

### Introduction

:::warning
You do not need ELS for CentOS 6 subscription if you are already using CloudLinux OS 6. Find more information [here](https://docs.cln.cloudlinux.com/billing/#cloudlinux-os-6-extended-lifecycle-support)
:::

CentOS 6 extended support allows you to continue running your CentOS 6 server after the end of CentOS 6 support in November 2020.

TuxCare provides CentOS 6 extended support through the year 2024.

CentOS 6 extended support doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.

We provide continual updates for Apache, PHP, MySQL, Glibc, OpenSSL, OpenSSH, and cPanel.

#### Supported packages

| Packages | Packages | Packages | Packages |
| :------: | :------: | :------: | :------: |
|glibc<br>openssh<br>openssl<br>zlib<br>httpd<br>mysql<br>php<br>acl<br>acpid<br>at<br>attr<br>audit<br>authconfig<br>basesystem<br>bash<br>bc<br>blktrace|bridge-utils<br>busybox<br>bzip2<br>crash<br>cyrus-imapd<br>cyrus-sasl<br>db4-utils<br>device-mapper<br>dhclient<br>dhcpv6<br>dmidecode<br>dos2unix<br>dovecot<br>ed<br>gcc<br>gd<br>gdb|glib2<br>groff<br>info<br>Iptstate<br>logrotate<br>lslk<br>lvm2<br>makedev<br>nfs4-acl-tools<br>nfs-utils<br>nspr<br>ntp<br>opens<br>pam<br>perl<br>procmail<br>procps|python<br>rcs<br>rds-tools<br>rhnlib<br>rsync<br>rsyslog<br>setroubleshoot<br>setserial<br>setup<br>sos<br>stunnel<br>tzdata<br>vim<br>wget<br>yum-metadata-parser<br>yum-rhn-plugin|

:::warning
There are no trials available for CentOS Extended Lifecycle Support
:::

### Enabling CentOS 6 ELS repository (if you are not using local mirror)

To enable the CentOS 6 ELS repository on a server, follow these steps:

1. Download an installer script:

```
wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py
```

2. Run the installer script with an activation key:

```
python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

3. The script will create the `/etc/yum.repos.d/centos6-els.repo` yum repository config file and install the `centos-els-release` package containing the repository PGP key.

   * To ensure that installation has been completed successfully, run the following command:

    ```
    rpm -q centos-els-release
    ```
    It should return the installed package name and version:
    
    ```
    centos-els-release-6-6.10.1.el6.x86_64 
    ```

4. After this, you will be able to install updates from the repository using a regular `yum upgrade` command.

```
yum update sudo 
```


### Switching to use only ELS mirrors

Starting from the `centos-els-release-6-6.10.2.el6` version (released on 2020-09-08) our `centos-els-release` package will obsolete the `centos-release` package in order to switch clients to use our CentOS ELS repositories instead of upstream ones.

Basically, the `base`, `updates`, `extras`, `centosplus`, `contrib`, and `fasttrack` repositories will be reconfigured for our mirrors.

Already registered users will receive this update from our `centos6-els` repository with the following commands:

```
yum clean all
yum upgrade centos-els-release
```

For newly registered servers the updated package will be installed automatically by our installer script.

To ensure that installation has been completed successfully run the following command:

```
rpm -q centos-els-release
```

It should return the installed package name and version:

```
centos-els-release-6-6.10.2.el6.x86_64
```

Additionally, you can use the `yumdownloader` tool from the `yum-utils` package to verify that our repositories are used:

```
~]# yumdownloader --urls mc
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
https://repo.cloudlinux.com/centos/6/os/x86_64//Packages/mc-4.7.0.2-6.el6.x86_64.rpm
```

Here we can see that yum will use our host `repo.cloudlinux.com` instead of a CentOS mirror.

### How to create CentOS 6 ELS mirror

We provide an opportunity to create local mirrors of our centos6-els repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager.


Use `rsync` to create a local mirror.


To create a local mirror of repo with centos6-els security updates you need to use `rsync://repo.cloudlinux.com/CENTOS6ELS/`


To create a local mirror of CentOS 6 you need to use `rsync://repo.cloudlinux.com/CENTOS6/`

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/
```

### Outbound firewall settings

In order to use ELS for CentOS, you need to opent TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com
* els-rollout.cloudlinux.com

## Oracle Linux 6

### Introduction

Oracle Linux 6 extended support allows you to continue running your Oracle Linux 6 server after the end of Oracle Linux 6 support in March 2021.

TuxCare provides Oracle Linux 6 extended support through the year 2025.

Oracle Linux 6 extended support doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.


### Installing Oracle Linux 6 ELS repository

To install the Oracle Linux 6 ELS repository on a server, follow these steps:

1. Download an installer script:

```
wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
```

2. Run the installer script with one of the trial keys:

```
python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

3. The installation script registers the server in the CLN with the key, receives the token and adds the yum-repository with the  token.
4. The script will create the `/etc/yum.repos.d/oraclelinux-els.repo` yum repository config file and add the PGP key.

   * To ensure that installation has been completed successfully, run the following command:

    ```
    yum info curl | grep els
    ```
    It should return the release of an available package and ELS repo.
    
    ```
    Release     : 55.el6.cloudlinux.ol.els6
    Repo        : oraclelinux6-els
    ```

5. After this, you will be able to install updates from the repository using a regular `yum upgrade` command.


### Creating a local Oracle Linux mirror

We provide an opportunity to create local mirrors of our `oraclelinux6-els` repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager.

Use `rsync` to create a local mirror.

To create a local mirror of the repository with the `oraclelinux6-els` security updates, you need to use `rsync://repo.cloudlinux.com/ORALINUX6ELS/`.

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

### Outbound firewall settings


In order to use ELS for Oracle Linux 6, you need to open TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com
* els-rollout.cloudlinux.com


## Ubuntu 16.04 LTS

### Introduction

Ubuntu 16.04 extended support allows you to continue running your Ubuntu 16.04 server after the end of Ubuntu 16.04 support in April 2021.

TuxCare provides Ubuntu 16.04 extended support through the year 2025.

Ubuntu 16.04 extended support doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.


### Installing Ubuntu 16.04 ELS repository

To install the Ubuntu 16.04 ELS repository on a server, follow these steps:

1. Download an installer script:

```
wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu-els-repo.py
```

2. Run the installer script with one of the trial keys:

```
python install-ubuntu-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

3. The installation script registers the server in the CLN with the key, receives the token and adds the apt-repository with the  token.
4. The script will create the `/etc/apt/sources.list.d/ubuntu-els.list` repository config file and add the PGP key.

   * To ensure that installation has been completed successfully, run the following command:

    ```
    apt search tmpreaper | grep cloudlinux
    tmpreaper/unknown,now 1.6.13+nmu2-1.cloudlinux amd64 [residual-config]
    ```
    It should return the version and release of an available package and ELS repo.


### Creating a local Ubuntu mirror

We provide an opportunity to create local mirrors of our `ubuntu16.04-els` repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager.

Use `rsync` to create a local mirror.

To create a local mirror of the repository with the `Ubuntu-ELS` security updates, you need to use `rsync://repo.cloudlinux.com/UBUNTU1604ELS/`.

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

### Outbound firewall settings


In order to use ELS for Ubuntu, you need to open TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com
* els-rollout.cloudlinux.com
