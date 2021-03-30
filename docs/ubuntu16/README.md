# Ubuntu 16.04 ELS Extended Support

## Introduction

Ubuntu 16.04 extended support from CloudLinux allows you to continue running your Ubuntu 16.04 server after the end of Ubuntu 16.04 support in April 2021.

CloudLinux provides Ubuntu 16.04 extended support through the year 2025.

Ubuntu 16.04 extended support from CloudLinux doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.


## Installing Ubuntu 16.04 ELS repository

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


## Creating a local Ubuntu mirror

We provide an opportunity to create local mirrors of our `ubuntu16.04-els` repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or at [sales@cloudlinux.com](mailto:sales@cloudlinux.com).

Use `rsync` to create a local mirror.

To create a local mirror of the repository with the `Ubuntu-ELS` security updates, you need to use `rsync://repo.cloudlinux.com/UBUNTU1604ELS/`.

For example:

```
rsync -avSHP --delete rsync://repo.cloudlinux.com/UBUNTU1604ELS/
```

## Outbound firewall settings


In order to use ELS for Ubuntu, you need to open TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com
* els-rollout.cloudlinux.com
