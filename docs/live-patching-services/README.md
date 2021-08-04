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

### How LibraryCare works

1. **The patch is created by the KernelCare team**.

    A library’s source code–both original and patched–are translated into assembly language. These files are compared, and the new patched code is put in a new section of the same ELF file. After the code is compiled and linked, the patch is extracted from the resulting binaries. The patch files are extracted from the ELF sections.
2. **The patch is uploaded to the patch server**.

    The binary files are treated as a single patch, which is then uploaded to a dedicated KernelCare patch server. The patch server then distributes the patch to customers’ servers.
3. **The patch is downloaded to the local agent**.

    An agent program on each local server, `lcarectl`, “talks to” the patch server, which looks for known libraries on the local server. The agent program then downloads the patch needed for each library present on the local server.
4. **The patch is applied to the local server**.

    Using Linux APIs, memory near a library is allocated, and the patch is copied into it. After ensuring that no threads are executing the old library code, the agent program reroutes calls from old code to the new patched versions via unconditional jumps.

For the LibraryCare technical documentation, [visit this page](https://docs.kernelcare.com/kernelcare-plus/).


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
