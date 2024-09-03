Title: How does the internet work?
Author: cs.fyi
Date: 16 Feb 2023

## Basic Concepts

**Packet.** 
Small piece of data that is transmitted over the internet.

**Router.** 
Device that directs packets between different networks.

**Protocol.**
Set of rules that specifies how exchange data between devices,
allow devices from different manufacturers to communicate seamlessly.

**IP Address.** 
A unique identifier, 
four 8-bit numbers separated by periods, 
assigned to every device in a network,
serves to route packets to the correct device
e. g. 192.168.0.8.

**Ports.**
A identifier for a service or application on a device,
an 16-bit number,
usually paired with an **IP Address**,
e. g. 443.

**Socket.**
A combination of an **IP Address** and a **Port** number,
represents and endpoint for communication,
used to establish connections between devices and transfer data,
e. g. 192.168.0.8:443.

**Connection.**
Established between two **sockets**,
when two devices agree to communicate,
during the establishment process,
the devices negotiate parameters,
like maximun segment size,
determining how the data will be transmitted.

**Domain name.**
A human-readable name,
that identifies a webresources.

**DNS.**
Domain Name System,
service that receives a domain name and returns the correct IP Address.

**HTTP.**
HyperText Transfer Protocol,
protocol for client-server communication, 
using Hipermedia documents.

**HTTPS.**
HTTP Secure,
Encrypted version of **HTTP**.

**SSL/TLS.**
Secure Socket Layer/Transpor Layer Security,
protocol to secure communication over internet,
used in **HTTPS**.

**SSL/TLS Certificates.**
Used to  establish trust between client and server,
contains information about the server,
signed by a **third-party Certificate Authority**.

**Handshake.**
Process between client and server,
negotiation of the encryption algorithm,
and other parameters for secure connection.

**UDP.**
User Datagram Protocol.