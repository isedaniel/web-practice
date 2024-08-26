Article: How the web works
Author: mdn

**Objective.** Provide a simplified view of what happens when you open a webpage
in a browser.

**Computers.** In internet, computers can be either **clients** or **servers**.

**Client.** The web user connected to internet. A user send **requests** to a
**server**.

**Server.** Computer that store web services, like webpages, sites, apps. The
server send **responses** to the client's **requests**.

**Internet connection.** Is the infrastructure to send and receive **data**.

**TCP/IP.** Refers to the Transmission Control Protocol and Internet Protocol.
These are **communication protocols**, that define *how* the **data** should be 
sent and received across the internet.

**DNS.** The Domain Name System, an *address book* for the websites. Whenever 
you type a **web address** in a **browser**, it will look for the website's 
**IP** in the **DNS**.

**HTTP.** The Hypertext Transfer Protocol is an **application protocol**, that
specifies the **language** for **clients** and **servers** to *speak* to 
eachother.

**Component files.** Are the different files that made the website. These can
be classified in two main types: the **code files**, built from **HTML**, 
**CSS** and **JavaScript**; and the **assets**, other data such as images, 
music, video, PDFs, and so on.

**When you type a web address.** 

1. The **browser** *goes* to the **DNS** server, and find the **IP**.
2. The **browser** *sends* and **HTTP request** to the **server**, asking for a
copy of the website for the **client**. All the **data** is sent using the 
**TCP/IP** protocol.
3. If the **server** *approves* the **request**: sends back a **200 OK** message
with  