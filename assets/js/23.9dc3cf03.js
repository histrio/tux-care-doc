(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{357:function(e,t,s){"use strict";s.r(t);var a=s(32),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"centos-extended-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-extended-support","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS Extended Support")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("CentOS 6 extended support from CloudLinux allows you to continue running your CentOS 6 server after the end of CentOS 6 support in November 2020.")]),e._v(" "),s("p",[e._v("CloudLinux provides CentOS 6 extended support through the year of 2024.")]),e._v(" "),s("p",[e._v("CentOS 6 extended support from CloudLinux doesn't require migration. You just run an installer script that add a new repository file. No reboot is necessary.")]),e._v(" "),s("p",[e._v("We provide continual updates for Apache, PHP, MySQL, Glibc, OpenSSL, OpenSSH, and cPanel. See the full list of supported packages "),s("a",{attrs:{href:"https://cloudlinux.com/extended-supported-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("A free 30-day trial for 5 servers or less is available by request. Complete the form "),s("a",{attrs:{href:"https://www.cloudlinux.com/extended-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" or contact "),s("a",{attrs:{href:"mailto:sales@cloudlinux.com"}},[e._v("sales@cloudlinux.com")]),e._v(" and we'll get you setup.")]),e._v(" "),s("h2",{attrs:{id:"enable-centos-6-els-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-centos-6-els-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable CentOS 6 ELS Repository")]),e._v(" "),s("p",[e._v("To enable the CentOS 6 ELS repository on a server, follow these steps:")]),e._v(" "),s("ol",[s("li",[e._v("Download an installer script:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Run the installer script with one of the trial keys:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("The script will create the "),s("code",[e._v("/etc/yum.repos.d/centos6-els.repo")]),e._v(" yum repository config file and install the "),s("code",[e._v("centos-els-release")]),e._v(" package containing the repository PGP key.")]),e._v(" "),s("ul",[s("li",[e._v("To ensure that installation has been completed successfully, run the following command:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpm -q centos-els-release\n")])])]),s("p",[e._v("It should return the installed package name and version:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("centos-els-release-6-6.10.1.el6.x86_64 \n")])])])]),e._v(" "),s("li",[s("p",[e._v("After this, you will be able to install updates from the repository using a regular "),s("code",[e._v("yum upgrade")]),e._v(" command.")])])]),e._v(" "),s("p",[e._v("Currently, the repository contains only a single "),s("code",[e._v("centos-els-release")]),e._v(" package and intended for demonstration purposes. We are going to populate it with real updates later. You will be able to receive a new real key in CLN that will allow you to receive real updates as soon as we will be ready to populate them.")]),e._v(" "),s("h2",{attrs:{id:"switching-to-els-mirrors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switching-to-els-mirrors","aria-hidden":"true"}},[e._v("#")]),e._v(" Switching to ELS mirrors")]),e._v(" "),s("p",[e._v("Starting from the "),s("code",[e._v("centos-els-release-6-6.10.2.el6")]),e._v(" version (released on 2020-09-08) our "),s("code",[e._v("centos-els-release")]),e._v(" package will obsolete the "),s("code",[e._v("centos-release")]),e._v(" package in order to switch clients to use our CentOS ELS repositories instead of upstream ones. Basically, the "),s("code",[e._v("base")]),e._v(", "),s("code",[e._v("updates")]),e._v(", "),s("code",[e._v("extras")]),e._v(", "),s("code",[e._v("centosplus")]),e._v(", "),s("code",[e._v("contrib")]),e._v(", and "),s("code",[e._v("fasttrack")]),e._v(" repositories will be reconfigured for our mirrors.")]),e._v(" "),s("p",[e._v("Already registered users will receive this update from our "),s("code",[e._v("centos6-els")]),e._v(" repository with the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yum clean all\nyum upgrade centos-els-release\n")])])]),s("p",[e._v("For newly registered servers the updated package will be installed automatically by our installer script.")]),e._v(" "),s("p",[e._v("To ensure that installation has been completed successfully run the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpm -q centos-els-release\n")])])]),s("p",[e._v("It should return the installed package name and version:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("centos-els-release-6-6.10.2.el6.x86_64\n")])])]),s("p",[e._v("Additionally, you can use the "),s("code",[e._v("yumdownloader")]),e._v(" tool from the "),s("code",[e._v("yum-utils")]),e._v(" package to verify that our repositories are used:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("~]# yumdownloader --urls mc\nLoaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\nhttps://repo.cloudlinux.com/centos/6/os/x86_64//Packages/mc-4.7.0.2-6.el6.x86_64.rpm\n")])])]),s("p",[e._v("Here we can see that yum will use our host repo.cloudlinux.com instead of a CentOS mirror.")]),e._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")])])},[],!1,null,null,null);t.default=r.exports}}]);