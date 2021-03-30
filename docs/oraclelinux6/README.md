# Oracle Linux 6 Extended Support

## Introduction

Oracle Linux 6 extended support from CloudLinux allows you to continue running your Oracle Linux 6 server after the end of Oracle Linux 6 support in March 2021.

CloudLinux provides Oracle Linux 6 extended support through the year 2025.

Oracle Linux 6 extended support from CloudLinux doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.


## Installing Oracle Linux 6 ELS repository

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


## Creating a local Oracle Linux mirror

We provide an opportunity to create local mirrors of our `oraclelinux6-els` repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or at [sales@cloudlinux.com](mailto:sales@cloudlinux.com).

Use `rsync` to create a local mirror.

To create a local mirror of the repository with the `oraclelinux6-els` security updates, you need to use `rsync://repo.cloudlinux.com/ORALINUX6ELS/`.

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/ORALINUX6ELS/
```

## Outbound firewall settings


In order to use ELS for Oracle Linux, you need to open TCP port 443 to the following destinations:

* cln.cloudlinux.com
* repo.cloudlinux.com
* els-rollout.cloudlinux.com
