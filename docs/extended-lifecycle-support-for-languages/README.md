# Extended Lifecycle Support for Languages

## Extended Lifecycle Support for PHP

Extended Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows to continue running Linux server vulnerability-free. 

### Supported OS

TuxCare provides Extended Lifecycle Support through four years after the EOL date.

| OS                                    | Version                                  |
| :-----------------------------------: | :--------------------------------------: |
| CentOS, CloudLinux, OracleLinux, etc. | 6.x 64-bit, 7.x 64-bit, 8.x 64-bit       |
| AlmaLinux                             | 8.x 64-bit                               |
| Ubuntu                                | 16.04 64-bit, 18.04 64-bit, 20.04 64-bit |

### Supported versions

**CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.:** 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1

**Ubuntu:** 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1

### Installation instructions of yum repositories

#### RHEL based systems

1. Download an installer script:

```
wget https://repo.cloudlinux.com/php-els/install-php-els-repo.sh
```

2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.

```
sh install-php-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.

```
yum info alt-php73

Available Packages
Name        : alt-php73
Arch        : x86_64
Epoch       : 1
Version     : 7.3.33
Release     : 5.2.el7
Size        : 22 k
Repo        : php-els/7
Summary     : PHP scripting language for creating dynamic web sites
URL         : http://www.php.net/
License     : PHP and LGPLv2 and LGPLv2+
Description : PHP is an HTML-embedded scripting language.
```

**How to install packages:**

- Each version of PHP individually or all versions at once can be installed.
- Standard commands to install each version separately can be used. For example, installing alt-php73:

```
yum install alt-php73*
```

To install all versions at the same time, use group:

```
yum groupinstall alt-php
```

#### Ubuntu

Download an installer script:

```
wget https://repo.cloudlinux.com/php-els/install-php-els-ubuntu-repo.sh
```

Run the installer script with keys:

```
bash install-php-els-ubuntu-repo.sh --license-key XXX-XXXXXXXXXXXX
```

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual apt upgrade command.

```
apt-cache show alt-php73-cli

Package: alt-php73-cli
Source: php
Version: 7.3.18-1
Architecture: amd64
Maintainer: Sergey Fokin <sfokin@cloudlinux.com>
Installed-Size: 51694
Depends: libbz2-1.0, libc6 (>= 2.14), libcurl3 (>= 7.44.0), libgmp10, libreadline6 (>= 6.0), libssl1.0.0 (>= 1.0.2~beta3), libsystemd0, libxml2 (>= 2.9.0), zlib1g (>= 1:1.1.4), alt-php73-common (= 7.3.18-1), libcurl4-openssl-dev, libnghttp2-14
Homepage: http://www.php.net/
Priority: optional
Section: libs
Filename: pool/main/p/php/alt-php73-cli_7.3.18-1_amd64.deb
Size: 10247916
SHA256: 6f107e60684695b6261871a5540c4742eb6e86befe767ab313d1eacda023e5bb
SHA1: e8e7d6ab06470cbda5f5ef65a48c7c527ff52e9b
MD5sum: d6c664d4f4b229c1e6727804888f6079
Description: command-line interpreter for the PHP scripting language.
Description-md5: 0d83f7bf7177d3376a59b73890c8494d
```

**How to install packages:**

- Each version of PHP individually or all versions at once can be installed.
- Standard commands to install each version separately can be used. For example, installing alt-php73:
```
apt-get install alt-php73*
```
To install all versions at the same time, it is necessary to use the alt-php meta-package:
```
apt-get install alt-php
```

### Installation instructions of a local mirror

We provide the ability to create local mirrors of PHP for ELS updates.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com).

To create a local mirror of the repository with security updates via `rsync`, use the following:

```
rsync://repo.cloudlinux.com/PHP_ELS/
```

Example of creating a local mirror for all supported OS versions:

```bash
rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/ .
```

Example of creating a local mirror for a specific OS version:

```bash
rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/el6/ .
```

Use one of the suggested options to specify the OS:

| Option      | OS                                                      |
| :---------: | :-----------------------------------------------------: |
| el6	      | CentOS 6, CloudLinux 6, OracleLinux 6, etc.             |
| el7         | CentOS 6, CloudLinux 6, OracleLinux 6, etc.             |
| el8         | AlmaLinux6, CentOS 6, CloudLinux 6, OracleLinux 6, etc. |
| ubuntu16.04 | Ubuntu 16.04 |
| ubuntu18.04 | Ubuntu 18.04 |
| ubuntu20.04 | Ubuntu 20.04 |

### OVAL data

#### Introduction

This section contains information about available ELS for PHP OVAL streams that can be used for partner application integration.

Currently, we provide OVAL data for the following OS versions:

* EL 6 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 7 (CentOS, CloudLinux, OracleLinux, etc.)
* EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.)
* Ubuntu 16.04
* Ubuntu 18.04
* Ubuntu 20.04

#### TuxCare PHP ELS OVAL Streams

* EL 6: [https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml)
* EL 7: [https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml)
* EL 8: [https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml](https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml)
* Ubuntu 16.04: [https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml)
* Ubuntu 18.04: [https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml)
* Ubuntu 20.04: [https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml](https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml)

#### How to use OVAL

1. Install OpenSCAP
    * for rpm systems:
    ```bash
    yum install openscap openscap-utils scap-security-guide -y
    ```
    * for  deb systems:
    ```bash
    apt-get install libopenscap8 -y
    ```
2. Download OVAL stream:
```bash
wget https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml
```
3. Run scanning:
```bash
oscap oval eval --results result.xml --report report.xml centos6-els-php-oval.xml
```

### PHP extensions list

#### PHP 5.1 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
| bcmath<br>big_int<br>bitset<br>bz2_filter<br>coin_acceptor<br>crack<br>dba<br>dbase<br>dom<br>doublemetaphone<br>gd<br>geoip|gmagick<br>gnupg<br>haru<br>huffman<br>idn<br>igbinary<br>imagick<br>imap<br>inclued<br>inotify<br>interbase<br>ioncube_loader|ldap<br>lzf<br>mbstring<br>mcrypt<br>memcache<br>msgpack<br>ncurses<br>odbc<br>pdo<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)|pdo_odbc<br>pdo_pgsqlpdo_sqlite<br>pgsql<br>phalcon<br>quickhash<br>radius<br>redis<br>snmp<br>soap<br>sockets<br>ssh2<br>stats<br>stem<br>sybase_ct|sysvmsg<br>sysvsem<br>sysvshm<br>tidy<br>timezonedb<br>translit<br>xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl|

#### PHP 5.2 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apc<br>apm<br>ares<br>bcmath<br>bcompiler<br>big_int<br>bitset<br>bloomy<br>bz2_filter<br>coin_acceptor<br>crack<br>dba<br>dbase<br>dbx<br>dom<br>doublemetaphone<br>enchant<br>fileinfo<br>gd<br>gender<br>geoip|geos<br>gmagick<br>gnupg<br>haru<br>hidef<br>htscanner<br>http<br>huffman<br>idn<br>igbinary<br>imagick<br>imap<br>inclued<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>json<br>ldap<br>lzf<br>mailparse|mbstring<br>mcrypt<br>memcache<br>memcached<br>mongo<br>msgpack<br>mssql<br>ncurses<br>oauth<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon<br>phar<br>posix<br>pspell|quickhash<br>radius<br>rar<br>recode<br>redis<br>rsync<br>snmp<br>soap<br>sockets<br>spl_types<br>sqlite<br>ssh2<br>stats<br>stem<br>stomp<br>sybase_ct<br>sysvmsg<br>sysvsem<br>sysvshm<br>tidy<br>timezonedb<br>translit<br>uploadprogress|uuid<br>wddx<br>xdebug<br>xhprof<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xrange<br>xsl<br>yaf<br>yaz<br>ZendGuardLoader<br>zip|

#### PHP 5.3 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apc<br>apcu<br>apm<br>ares<br>bcmath<br>bcompiler<br>big_int<br>bitset<br>bloomy<br>bz2_filter<br>coin_acceptor<br>crack<br>dba<br>dbase<br>dbx<br>dom<br>doublemetaphone<br>eio<br>enchant<br>fileinfo<br>functional<br>gd<br>gender<br>geoip|geos<br>gmagick<br>gnupg<br>haru<br>hidef<br>htscanner<br>http<br>huffman<br>idn<br>igbinary<br>imagick<br>imap<br>inclued<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>libevent<br>lzf<br>mailparse<br>mbstring|mcrypt<br>memcache<br>memcached<br>mongo<br>msgpack<br>mssql<br>mysqlnd<br>ncurses<br>nd_mysql<br>nd_mysqli<br>nd_pdo_mysql<br>oauth<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon<br>phar<br>posix|propro<br>pspell<br>quickhash<br>radius<br>raphf<br>rar<br>recode<br>redis<br>rsync<br>snmp<br>soap<br>sockets<br>solr<br>spl_types<br>sqlite<br>ssh2<br>stats<br>stem<br>stomp<br>sybase_ct<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways|tidy<br>timezonedb<br>trader<br>translit<br>uploadprogress<br>uri_template<br>uuid<br>wddx<br>weakref<br>xdebug<br>xhprof<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xrange<br>xsl<br>yaf<br>yaml<br>yaz<br>ZendGuardLoader<br>zip<br>zmq|


#### PHP 5.4 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apc<br>apcu<br>apm<br>ares<br>bcmath<br>big_int<br>bitset<br>bz2_filter<br>dba<br>dbase<br>dbx<br>dom<br>doublemetaphone<br>eio<br>enchant<br>fileinfo<br>functional<br>gd<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>haru|hidef<br>htscanner<br>http<br>igbinary<br>imagick<br>imap<br>inclued<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>libevent<br>libsodium<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongo<br>mongodb|msgpack<br>mssql<br>mysqlnd<br>ncurses<br>nd_mysql<br>nd_mysqli<br>nd_pdo_mysql<br>oauth<br>oci8 - only EL6, EL7 (not EL8)<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon<br>phar<br>posix<br>propro<br>pspell|quickhash<br>radius<br>raphf<br>rar<br>recode<br>redis<br>rsync<br>snmp<br>soap<br>sockets<br>solr<br>spl_types<br>ssh2<br>stats<br>stem<br>stomp<br>sybase_ct<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways<br>tidy<br>timezonedb<br>trader|translit<br>uploadprogress<br>uri_template<br>uuid<br>wddx<br>weakref<br>xdebug<br>xhprof<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xrange<br>xsl<br>yaf<br>yaml<br>yaz<br>ZendGuardLoader<br>zip<br>zmq|

#### PHP 5.5 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>apm<br>ares<br>bcmath<br>big_int<br>bitset<br>bz2_filter<br>dba<br>dbase<br>dbx<br>dom<br>doublemetaphone<br>eio<br>enchant<br>file<br>info<br>gd<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>haru|hidef<br>htscanner<br>http<br>igbinary<br>imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>lib<br>event<br>libsodium<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongo|mongodb<br>msgpack<br>mssql<br>mysqlnd<br>ncurses<br>nd_mysql<br>nd_mysqli<br>nd_pdo_mysql<br>oauth<br>oci8 - only EL6, EL7 (not EL8)<br>odbc<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon<br>phar|posix<br>propro<br>pspell<br>quickhash<br>radius<br>raphf<br>rar<br>recode<br>redis<br>rsync<br>snmp<br>soap<br>sockets<br>solr<br>spl_types<br>ssh2<br>stats<br>stem<br>stomp<br>sybase_ct<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways<br>tidy|timezonedb<br>trader<br>translit<br>uploadprogress<br>uri_template<br>uuid<br>wddx<br>weakref<br>xdebug<br>xhprof<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xrange<br>xsl<br>yaf<br>yaml<br>yaz<br>ZendGuardLoader<br>zip<br>zmq|


#### PHP 5.6 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>apm<br>ares<br>bcmath<br>big_int<br>bitset<br>bz2_filter<br>dba<br>dbase<br>dbx<br>dom<br>doublemetaphone<br>eio<br>enchant<br>file<br>info<br>gd<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>haru|htscanner<br>http<br>igbinary<br>imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>libevent<br>libsodium<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongo|mongodb<br>msgpack<br>mssql<br>mysqlnd<br>ncurses<br>nd_mysql<br>nd_mysqli<br>nd_pdo_mysql<br>oauth<br>oci8 - only EL6, EL7 (not EL8)<br>odbc<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci - only EL6, EL7 (not EL8)<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon<br>phar<br>posix|propro<br>pspell<br>quickhash<br>radius<br>raphf<br>rar<br>recode<br>redis<br>rsync<br>snmp<br>soap<br>sockets<br>solr<br>spl_types<br>ssh2<br>stats<br>stem<br>stomp<br>sybase_ct<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways|tidy<br>timezonedb<br>trader<br>translit<br>uploadprogress<br>uri_template<br>uuid<br>wddx<br>weakref<br>xdebug<br>xhprof<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xrange<br>xsl<br>yaml<br>yaz<br>ZendGuardLoader<br>zip<br>zmq|


#### PHP 7.0 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>bcmath<br>bitset<br>dba<br>dbase<br>dom<br>eio<br>enchant<br>fileinfo<br>gd<br>gearman<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>htscanner<br>http|igbinary<br>imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>libsodium<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb|mysqlnd<br>nd_mysqli<br>nd_pdo_mysql<br>newrelic<br>oauth<br>oci8 - only EL6, EL7 (not EL8)<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv<br>pgsql<br>phalcon|phar<br>posix<br>propro<br>pspell<br>psr<br>raphf<br>rar<br>recode<br>redis<br>rrd<br>snmp<br>soap<br>sockets<br>solr<br>ssh2<br>stats<br>swoole<br>sysvmsg<br>sysvsem|sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7 (not EL8)<br>wddx<br>xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl<br>yaf<br>yaml<br>yaz<br>zip<br>zmq|

#### PHP 7.1 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>bcmath<br>dba<br>dbase<br>dom<br>eio<br>enchant<br>fileinfo<br>gd<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>htscanner<br>http<br>igbinary|imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>libsodium<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb|mysqlnd<br>nd_mysqli<br>nd_pdo_mysql<br>newrelic<br>oauth<br>oci8<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv<br>pgsql<br>phalcon|phar<br>posix<br>propro<br>pspell<br>psr<br>raphf<br>rar<br>recode<br>redis<br>snmp<br>soap<br>sockets<br>solr<br>ssh2<br>stats<br>swoole<br>sysvmsg<br>sysvsem|sysvshm<br>tideways - only EL8 (not EL6, EL7)<br>tideways_xhprof - only EL6, EL7 (not EL8)<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7 (not EL8)<br>wddx|xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl<br>yaf<br>yaml<br>yaz - only EL6, EL7 (not EL8)<br>zip<br>zmq|

#### PHP 7.2 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|amqp<br>apcu<br>bcmath<br>dba<br>dbase<br>dom<br>eio<br>enchant<br>fileinfo<br>gd<br>gearman<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>http<br>igbinary|imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>leveldb<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb<br>mysqlnd|nd_mysqli<br>nd_pdo_mysql<br>newrelic<br>oauth<br>oci8<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv<br>pgsql<br>phalcon<br>phar|posix<br>propro<br>pspell<br>psr<br>raphf<br>recode<br>redis<br>rrd<br>snmp<br>soap<br>sockets<br>sodium<br>solr<br>sqlsrv<br>ssh2<br>stats<br>swoole<br>sysvmsg|sysvsem<br>sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7 (not EL8)<br>wddx|xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl<br>yaml<br>yaz<br>zip<br>zmq|


#### PHP 7.3 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|amqp<br>apcu<br>bcmath<br>dba<br>dbase<br>dom<br>eio<br>enchant<br>fileinfo<br>gd<br>gearman<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>http|igbinary<br>imagick<br>imap<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>leveldb<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached|mongodb<br>mysqlnd<br>nd_mysqli<br>nd_pdo_mysql<br>newrelic<br>oauth<br>oci8<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv|pgsql<br>phalcon<br>phar<br>posix<br>propro<br>pspell<br>psr<br>raphf<br>recode<br>redis<br>rrd<br>snmp<br>soap<br>sockets<br>sodium<br>solr<br>sqlsrv<br>ssh2|stats<br>swoole<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7 (not EL8)|wddx<br>xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl<br>yaml<br>yaz<br>zip<br>zmq|


#### PHP 7.4 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>bcmath<br>dba<br>dbase<br>dom<br>eio<br>enchant<br>fileinfo<br>gd<br>gearman<br>gender<br>geoip<br>geos<br>gmagick<br>gnupg<br>grpc<br>http|igbinary<br>imagick<br>imap<br>inotify<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>luasandbox - only EL6, EL7 (not EL8)<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb|mysqlnd<br>nd_mysqli<br>nd_pdo_mysql<br>newrelic<br>oauth<br>oci8<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv|pgsql<br>phalcon<br>phar<br>posix<br>propro<br>pspell<br>psr<br>raphf<br>redis<br>rrd<br>snmp<br>soap<br>sockets<br>sodium<br>solr<br>ssh2<br>stats|swoole<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7 (not EL8)|xdebug<br>xmlreader<br>xmlrpc<br>xmlwriter<br>xsl<br>yaml<br>yaz<br>zip<br>zmq|


#### PHP 8.0 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|apcu<br>bcmath<br>dba<br>dbase<br>dom<br>enchant<br>ffi - only EL7, EL8<br>fileinfo<br>gd<br>gearman<br>geoip<br>gmagick<br>gnupg - only EL7<br>grpc<br>igbinary<br>imagick|imap<br>inotify<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb<br>mysqlnd<br>nd_mysqli|nd_pdo_mysql<br>newrelic<br>oauth<br>oci8<br>odbc<br>opcache<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv<br>pgsql<br>phalcon|phar<br>posix<br>pspell<br>psr<br>raphf<br>redis<br>rrd<br>snmp<br>soap<br>sockets<br>sodium<br>solr<br>ssh2<br>swoole<br>sysvmsg<br>sysvsem|sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid<br>vips - only EL6, EL7<br>xdebug<br>xmlreader|xmlrpc - only EL7, EL8<br>xmlwriter<br>xsl<br>yaml<br>yaz<br>zip<br>zmq|


#### PHP 8.1 extensions

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
|amqp<br>apcu<br>bcmath<br>dba<br>dbase<br>dom<br>enchant<br>ffi - only EL7, EL8<br>fileinfo<br>gd<br>geoip<br>gmagick<br>gmp<br>gnupg - only EL7<br>grpc- - only EL7, EL8<br>igbinary|imagick<br>imap<br>inotify<br>intl<br>ioncube_loader<br>jsmin<br>json<br>ldap<br>lzf<br>mailparse<br>mbstring<br>mcrypt<br>memcache<br>memcached<br>mongodb<br>mysqlnd|nd_mysqli<br>nd_pdo_mysql<br>oauth<br>oci8<br>odbc<br>opcache<br>pdo<br>pdo_dblib<br>pdo_firebird<br>pdo_oci<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pdo_sqlsrv<br>pgsql<br>phalcon|phar<br>posix<br>pspell<br>psr<br>raphf<br>redis<br>snmp<br>soap<br>sockets<br>sodium<br>sqlite3<br>sqlsrv|ssh2<br>swoole<br>sysvmsg<br>sysvsem<br>sysvshm<br>tideways_xhprof<br>tidy<br>timezonedb<br>trader<br>uploadprogress<br>uuid|vips - only EL6, EL7<br>xdebug<br>xmlreader<br>xmlrpc - only EL7, EL8<br>xmlwriter<br>xsl<br>yaf<br>yaml<br>zip<br>zmq|

### How to use PHP-ELS


When you deploy an updated version of PHP through PHP ELS, using your system’s regular update tool (yum, dnf, apt), the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.


**The *bin* files:**

```javascript
[root@localhost ~]# ll /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```


***Modules* and *pecl* extensions:**

```javascript
ls /opt/alt/phpXY/usr/lib64/php/modules/
ZendGuardLoader.so  imagick.so         oci8.so          stem.so
amqp.so             imap.so            odbc.so          stomp.so
apc.so              inclued.so         opcache.so       suhosin.so
apcu.so             inotify.so         pdf.so           sybase_ct.so
apm.so              interbase.so       pdo.so           sysvmsg.so
ares.so             intl.so            pdo_dblib.so     sysvsem.so
bcmath.so           ioncube_loader.so  pdo_firebird.so  sysvshm.so
big_int.so          ixed.5.4.lin       pdo_mysql.so     tideways.so
bitset.so           jsmin.so           pdo_oci.so       tidy.so
brotli.so           json.so            pdo_odbc.so      timezonedb.so
bz2_filter.so       ldap.so            pdo_pgsql.so     trader.so
dba.so              libevent.so        pdo_sqlite.so    translit.so
dbase.so            libsodium.so       pgsql.so         uploadprogress.so
dbx.so              luasandbox.so      phalcon.so       uri_template.so
dom.so              lzf.so             phar.so          uuid.so
doublemetaphone.so  mailparse.so       posix.so         wddx.so
eaccelerator.so     mbstring.so        propro.so        weakref.so
eio.so              mcrypt.so          pspell.so        xcache.so
enchant.so          memcache.so        quickhash.so     xcache_3.so
fileinfo.so         memcached.so       radius.so        xdebug.so
functional.so       mongo.so           raphf.so         xhprof.so
gd.so               mongodb.so         rar.so           xmlreader.so
gender.so           msgpack.so         recode.so        xmlrpc.so
geoip.so            mssql.so           redis.so         xmlwriter.so
geos.so             mysql.so           rsync.so         xrange.so
gmagick.so          mysqli.so          snmp.so          xsl.so
gnupg.so            mysqlnd.so         soap.so          yaf.so
haru.so             ncurses.so         sockets.so       yaml.so
hidef.so            nd_mysql.so        solr.so          yaz.so
htscanner.so        nd_mysqli.so       spl_types.so     zip.so
http.so             nd_pdo_mysql.so    ssh2.so          zmq.so
igbinary.so         oauth.so           stats.so
```

**Running code on a specific version through the CLI:**

```javascript
[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
```

**Location of *ini* config files:**

```javascript
[root@localhost ~]# ls /opt/alt/phpXY/etc/php.d.all/
40-leveldb.ini        mailparse.ini     redis.ini
40-snuffleupagus.ini  mbstring.ini      rrd.ini
40-vld.ini            mcrypt.ini        snmp.ini
amqp.ini              memcache.ini      snuffleupagus-default.rules
apcu.ini              memcached.ini     soap.ini
bcmath.ini            mongodb.ini       sockets.ini
dba.ini               mysqli.ini        sodium.ini
dbase.ini             mysqlnd.ini       solr.ini
dom.ini               nd_mysqli.ini     sourceguardian.ini
eio.ini               nd_pdo_mysql.ini  sqlsrv.ini
enchant.ini           newrelic.ini      ssh2.ini
ffmpeg.ini            oauth.ini         stats.ini
fileinfo.ini          oci8.ini          swoole.ini
gd.ini                odbc.ini          sysvmsg.ini
gearman.ini           opcache.ini       sysvsem.ini
gender.ini            pdf.ini           sysvshm.ini
geoip.ini             pdo.ini           tideways_xhprof.ini
geos.ini              pdo_dblib.ini     tidy.ini
gmagick.ini           pdo_firebird.ini  timezonedb.ini
gnupg.ini             pdo_mysql.ini     trader.ini
grpc.ini              pdo_oci.ini       uploadprogress.ini
http.ini              pdo_odbc.ini      uuid.ini
igbinary.ini          pdo_pgsql.ini     vips.ini
imagick.ini           pdo_sqlite.ini    xdebug.ini
imap.ini              pdo_sqlsrv.ini    xmlreader.ini
inotify.ini           pgsql.ini         xmlrpc.ini
intl.ini              phalcon4.ini      xmlwriter.ini
ioncube_loader.ini    phar.ini          xsl.ini
jsmin.ini             posix.ini         yaml.ini
json.ini              propro.ini        yaz.ini
ldap.ini              pspell.ini        zip.ini
luasandbox.ini        psr.ini           zmq.ini
lzf.ini               raphf.ini
```

**Location of *default.ini*:**

```javascript
ls /opt/alt/phpXY/etc/php.d/default.ini
```

**Listing enabled modules on a specific version:**

```javascript
[root@localhost ~]# /opt/alt/php73/usr/bin/php -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
```

**Enabling a module through the CLI:**

```javascript
[root@localhost ~]# /opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
igbinary
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
```

As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments.

## Extended Lifecycle Support for Python

Extended Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python 2.7 version for AlmaLinux 9. This allows to continue running Linux server vulnerability-free.

### Installation instructions of yum repositories

1. Download an installer script:

```bash
wget https://repo.cloudlinux.com/python-els/install-python-els-repo.sh
```
2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds a PGP key and adds repository to the server.
```bash
sh install-python-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```
3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.
```bash
yum info python2

Available Packages
Name         : python2
Version      : 2.7.18
Release      : 10.el9.tuxcare.els1
Architecture : x86_64
Size         : 43 k
Source       : python2-2.7.18-10.el9.tuxcare.els1.src.rpm
Repository   : python-els
Summary      : An interpreted, interactive, object-oriented programming language
URL          : https://www.python.org/
License      : Python
Description  : Python 2 is an old version of the language that is incompatible
             : with the 3.x line of releases.
```
4. To install python, it's necessary to enable the CodeReady Builder(CRB) repository, which contains the `gdbm` package.
```bash
yum install python2 --enablerepo crb
```
Once installed, you can use python2 in the usual way.
```python
$ python2
Python 2.7.18 (default, Jun 30 2022, 00:00:00)
[GCC 11.2.1 20220127 (Red Hat 11.2.1-9)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> print "Hello, World!"
Hello, World!
```

### Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.
To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com).

To create a local mirror of the repository with security updates via `rsync`, use the following:

```bash
rsync://repo.cloudlinux.com/PYTHON_ELS/
```

Example of creating a local mirror for all supported OS versions:

```bash
rsync  -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
```

### OVAL data

#### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration.
Currently, we provide OVAL data for AlmaLinux 9.

#### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

#### How to use OVAL

1. Install OpenSCAP:
```bash
yum install openscap openscap-utils scap-security-guide -y
```
2. Download OVAL stream:
```bash
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
```
3. Run scanning:
```bash
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
```