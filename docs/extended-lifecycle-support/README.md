# Extended Lifecycle Support

[Extended Lifecycle Support](https://tuxcare.com/extended-lifecycle-support/) (ELS) from TuxCare allows you to continue running your Linux server after the operating system’s end of life.

If you want support for other versions of distributions, simply add the other packages to the support covered by your SLA. If you have any questions please read our [FAQ’s section](https://tuxcare.com/faq/). For suggestions, please contact [sales@tuxcare.com](mailto:sales@cloudlinux.com). 

### Duration of support 

TuxCare provides Extended Lifecycle Support through four years after the EOL date.

|Distribution   | EOL           | ELS          |
| :---:         | :----:        | :---:        |
| CentOS 6.     | December 2020 | December 2024|
| OracleLinux 6 | December 2020 | December 2024|
| Ubuntu 16.04  | April 2021    | April 2025   |
| CentOS 8.4    | January 2022  | January 2026 |
| CentOS 8.5.   | January 2022  | January 2026 |


### Supported packages

TuxCare continually updates kernel, Apache, PHP, Glibc, OpenSSL, OpenSSH, and Python packages.

### How to get information about updates

You can subscribe to receiving updates using our [CVE dashboard](https://cve.tuxcare.com/). Here you can find detailed information about our progress against each CVE, information about the CVE, details of any known cases of exploitation of the CVE, etc.

If you have any suggestions on making the dashboard better and more convenient, please contact [sales@tuxcare.com](mailto:sales@cloudlinux.com).

You can also subscribe to the [TuxCare Blog](https://blog.tuxcare.com/) and receive more detailed analysis of vulnerabilities we patch, as well as other cybersecurity content produced by the members of the TuxCare team.

### Migration to ELS

TuxCare’s Extended Lifecycle Support service doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.

### How to install the ELS repository

To install the Extended Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key.
The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

In order to use Extended Lifecycle Support, you will need to open TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com

## Installation instructions of yum repositories

### CentOS 6 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py
```

2. Run the installer script with keys:

```
python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

The installation script registers the server in the CLN with the key, adds a PGP key to the server, and switches clients to use our CentOS repositories instead of the upstream ones. So basically, the base, updates, extras, centosplus, contrib, and fasttrack repositories will all be reconfigured for our mirrors.

3. Verify that the installation was successful

To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info of an available package. If you can see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example: 

```
[els@centos6 ~]# python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXX
Get dist name... centos
Check that repository isn't created... Ok
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos6-els.repo... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/centos-els-release.repo... Ok
Install necessarily packages (['centos-els-release'])... Ok
Removing repo file /etc/yum.repos.d/centos-els-release.repo... Ok

[els@centos6 ~]# yum info els-define

Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.6 k
Repo        : centos6-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release file
```

### OracleLinux 6 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
```

2. Run the installer script with keys:

```
python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:   

```
yum info els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example: 


```
[els@oraclelinux6 ~]# python install-oraclelinux-els-repo.py --license-key XXXX-XXXXXXX
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/oraclelinux-els.repo... Ok
Save GPG key to /etc/pki/rpm-gpg/RPM-GPG-KEY-CloudLinux... Ok
Import Cloudlinux GPG... 



[els@oraclelinux6 ~]# yum info els-define

Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.7 k
Repo        : oraclelinux-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release files
```


### Ubuntu 16.04 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu-els-repo.py
```

2. Run the installer script with keys:

```
python install-ubuntu-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

The installation script registers the server in the CLN with the key, adds PGP key to the server


3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:

```
apt-cache show els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example: 

```
[els@ubuntu16 ~]# python install-ubuntu-els-repo.py --license-key XXXX-XXXXXXXXX
Get dist name... Ubuntu
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Save repo file to /etc/apt/sources.list.d/ubuntu-els.list... Ok
Add Cloudlinux gpg key to apt... Ok
Cleaning repository cache... Ok


[els@ubuntu16 ~]# apt-cache show els-define
Package: els-define
Version: 1-1.0.1
Architecture: amd64
Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
Installed-Size: 10
Homepage: https://tuxcare.com/extended-lifecycle-support/
Priority: optional
Section: utils
Filename: pool/main/e/els-define/els-define_1-1.0.1_amd64.deb
Size: 1302
SHA256: a6b68c43c88a148ecc4806d0b4eb309deb5af418c8e1d0ea980fd453f5aec8dd
SHA1: 4907b9796c40327dbd45ecf2fd0806a32e2c24bd
MD5sum: 42f69c642c27052b15e4470533fdab62
Description: ELS define package for Ubuntu 16.04
Description-md5: 39e3bb446b4c63607f8f0358484545bf
```

### CentOS 8 ELS

1. Download an installer script:

  * For CentOS 8.4:
  
  ```
  wget https://repo.cloudlinux.com/el8-els/centos8.4-els/install-centos8.4-els-repo.sh
  ```

  * For CentOS 8.5:

  ```
  wget https://repo.cloudlinux.com/el8-els/centos8.5-els/install-centos8.5-els-repo.sh
  ```

2. Run the installer script with keys:

  * For CentOS 8.4:

  ```
  sh install-centos8.4-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```
  
  * For CentOS 8.5:

  ```
  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```
  
  The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@centos8_5 ~]#  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXX
This server is not CentOS Linux release 8.5


[els@centos8_5 ~]# yum info els-define

Available Packages
Name         : els-define
Version      : 1
Release      : 1.0.3.el8
Architecture : x86_64
Size         : 7.0 k
Source       : els-define-1-1.0.3.el8.src.rpm
Repository   : centos8.5-els
Summary      : CentOS Server els-release file
License      : GPLv2
Description  : CentOS Server els-release file
```

## Installation instructions of a local mirror with ELS updates

We provide the ability to create local mirrors of Extended Lifecycle Support updates.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@cloudlinux.com). To create a local mirror of the repository with security updates via `rsync`, you need to use one of the following.

### CentOS 6 ELS

To create a local mirror with security updates of repo with centos6-els security updates, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6ELS/
```

To create a local mirror of CentOS mirrors, use the following:

```
rsync://repo.cloudlinux.com/CENTOS6/
```

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/ .
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/ .
```

### OracleLinux 6 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following: 

```
rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/ .
```

### Ubuntu 16.04 ELS

To create a local mirror of the repository with security updates via `rsync`, use the following: 

```
rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/ .
```

### CentOS 8 ELS

To create a local mirror of the repository with security updates via rsync, use the following: 

* For CentOS 8.4:

```
rsync://repo.cloudlinux.com/CENTOS84_ELS/
```

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS84_ELS/ .
```

* For CentOS 8.5:

```
rsync://repo.cloudlinux.com/CENTOS85_ELS/
```

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS85_ELS/ .
```

## OVAL data

### Introduction

This section contains information about available AlmaLinux OS and TuxCare OVAL streams that can be used for partner application integration.

Currently, we provide OVAL data for the following products:

* AlmaLinux OS 8 and 9
* CentOS 6 ELS
* Oracle Linux 6 ELS
* CentOS 8 ELS
* KernelCare live patching that currently provides OVAL data for the following distributions:
  * Debian: 7-11
  * Ubuntu: all LTS versions starting from 14.04
  * RHEL: 5-8
  * AlmaLinux: 8
  * CentOS: 6-8
  * CentOS 6 ELS

### AlmaLinux OS OVAL streams

The supported AlmaLinux OS versions and their public OVAL streams are listed below:

AlmaLinux OS 8:

* [https://security.almalinux.org/oval/org.almalinux.alsa-8.xml.bz2](https://security.almalinux.org/oval/org.almalinux.alsa-8.xml.bz2)
* [https://security.almalinux.org/oval/org.almalinux.alsa-8.xml](https://security.almalinux.org/oval/org.almalinux.alsa-8.xml)

AlmaLinux OS 9:

* [https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2](https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2)
* [https://security.almalinux.org/oval/org.almalinux.alsa-9.xml](https://security.almalinux.org/oval/org.almalinux.alsa-9.xml)

### TuxCare ELS

* CentOS 6: [https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml](https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml)
* Oracle Linux 6: [https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml](https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml)
* CentOS 8.5: [https://repo.cloudlinux.com/centos8.5-els/centos85-oval-preview.xml](https://repo.cloudlinux.com/centos8.5-els/centos85-oval-preview.xml)
* Ubuntu & other platforms will be available soon.
