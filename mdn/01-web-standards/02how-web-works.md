# 1.1 How the web works

## Article: How the web works

Author: mdn

**Objective.** Provide a simplified view of what happens when you open a webpage
in a browser.

**Client.** The user's computer connected to internet. A user send **requests** 
to a **server**.

**Server.** Computer that store web services, like webpages, apps. The
server send **responses** to the client's **requests**.

**TCP/IP.** Refers to the Transmission Control Protocol and Internet Protocol.
These are **communication protocols**, that define *how* the **data** should be 
sent and received across the internet.

**DNS.** The Domain Name System, an *address book* for the websites. Whenever 
you type a **web address** in a **browser**, it will look for the website's 
**IP** in the **DNS**. The real direction of a website is a number called 
**IP address**, but it is not easy to remember. 

**HTTP.** The Hypertext Transfer Protocol is an **application protocol**, that
specifies the **language** for **clients** and **servers** to *speak* to 
eachother.

**Component files.** The different files that make the website. These can be 
classified in two main types: the **code files**, built from **HTML**, 
**CSS** and **JavaScript**; and the **assets**, other data such as images, 
music, video, PDFs.

**When you type a web address.** 

1. The **browser** *asks* the **DNS** server for the **IP address**.
2. With the **IP**, the **browser** *sends* the **HTTP request** to the **server**, asking for a copy of the website for the **client**. 
3. If the **server** *approves* the **request**: sends back a **200 OK** message with the **website**. All the **data** is *sent* and *received* following the **TCP/IP** protocol.
4. The **browser** *assembles* and *displays* the **web page**.

**Order in which component files are parsed.** **Browser** *sends* **request** 
for an **HTML** file. That **HTML** contains `<link>` elements referring to 
exernal **CSS** files and `<script>` elements, referring to **JavaScript** 
files. The **browser** parses the files and generates an in-memory **DOM** tree
for the **HTML**, a **CSSDOM** for the **CSS**, and compile and execute the 
**JavaScript**. With the parsing, it produces a visual representation of the 
page in the screen.

## Article: How the web works: a primer for newcomers to web development (or anyone, really)

Author: Preethi Kasireddy

Url: https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/

### Part 1: How the web works

**Client-server model.** The **client** send **request** to the **server**, it 
*runs* internal processes and *returns* a **response**.

**IP address.** A numerical identifier for a device on a **TCP/IP** network. 
Made of four *8-bit integers*, e. g. 244.155.65.2.

**ISP.** Internet Service Provider. The middle man between **client** and
**server**. The **ISP** does the **DNS** lookup.

**Port Number.** A *16-bit integer* that identifies a port on a **server**. 
Always associated with an **IP address**, e. g. 244.155.65.2:443.

**URL.** Uniform Resource Locators. URLs identify a particular web resource.
E. g. https://github.com/, contains the **protocol** (https), the **hostname** 
(github.com) and the **filename** (in this case, '/' *asks* for the index).

**DOM.** Document Object Model. Is a tree representation of an **HTML** 
document. Each **HTML element** is a **node**.

### Part 2: Structure of a Web App

**Basic web app configuration.** Three main components: a **client**, a 
**sever** and a **database**. 

**Client.** The user interface. Usually involves 1. a web page **structure** in **HTML**; 2. the **look and feel**, in **CSS**; 3. and ways of managing 
**interaction**, in **JavaScript**.
Some of the processes can be handled in the "client-side" **JavaScript**.

**Server.** Listens for **requests** from the **clients**. Whenever it gets one,
it *elaborate* and *sends* a **response**.

**Database.** A storage system. With the adecquate permission, can be easily 
accessed, managed and updated. 

**Load balancer.** *Route* clients' **requests** to different **servers** in the
fastest and most efficient manner. **DNS** usually points to a 
**load balancer**. Crucial for **scalability**.

**Services.** A **server** that only *interacts* with other **servers**. As the 
app grows in functionality, it could be difficult to mantain. To handle this, 
*each* **functionality** is *decoupled* in a self-contained **service**. A 
This allows **teams** *within* a **company** to *work independently*.

**CDN.** Content Delivery Networks. A large distributed system of "proxy" 
**servers**, that acts as intermediary between **client** and **server**. 
Contains copy of most used **component files**, to lower **latency**.

### Part 3: HTTP and REST



### Part 4: Code examples of client-server interactions