NAT介绍
===

## Summary

0. network address translation
1. 当请求通过路由器或者防火墙时，修改IP封包里面的来源ip或者目标ip的技术
2. 使得主机之间的通信变得复杂，降低通信效率
3. 为了解决ipv4地址不足的方法，或者用于内外网隔离

### 基本网络地址转换（Basic NAT）

也可以叫NAT或者静态NAT。只是转换ip，不支持端口映射。
因为改变了ip，所以封装数据包时，必须重新计算校验和。

| 内网IP | 外网IP |
| --- | --- |
| 192.168.1.55 | 219.152.168.222 |
| 192.168.1.59 | 219.152.168.223 |
| 192.168.1.155 | 219.152.168.224 |

### 网络地址端口转换（NAPT）

支持端口的映射，允许多台主机共享一个公网IP地址

1. 原地址转换
2. 目的地址转换

两种结合起来，实现双向通信。

| 内网IP | 外网IP |
| --- | --- |
| 192.168.1.55:5566 | 219.152.168.222:9200 |
| 192.168.1.59:80 | 219.152.168.222:9201 |
| 192.168.1.59:4465 | 219.152.168.222:9202 |

## 不同类型的NAT

注意下面的图中，左边是内部地址，右边是外部地址

1. 完全圆锥型NAT, Full cone NAT, 也叫一对一(one-to-one) NAT
> 一旦一个内部地址（iAddr:port）映射到外部地址（eAddr:port），所有发自iAddr:port的包都经由eAddr:port向外发送。任意外部主机都能通过给eAddr:port发包到达iAddr:port（注：port不需要一样）
> ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Full_Cone_NAT.svg/400px-Full_Cone_NAT.svg.png)
> 这种是完全互通

2. 受限圆锥型NAT（Address-Restricted cone NAT）
> 1. 内部客户端必须首先发送数据包到对方（IP=X.X.X.X），然后才能接收来自X.X.X.X的数据包。在限制方面，唯一的要求是数据包是来自X.X.X.X。
> 2. 内部地址（iAddr:port1）映射到外部地址（eAddr:port2），所有发自iAddr:port1的包都经由eAddr:port2向外发送。外部主机（hostAddr:any）能通过给eAddr:port2发包到达iAddr:port1。（注：any指外部主机源端口不受限制，但是目的端口必须是port2。只有外部主机数据包的目的IP 为 内部客户端的所映射的外部ip，且目的端口为port2时数据包才被放行。）
> 
> ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Restricted_Cone_NAT.svg/400px-Restricted_Cone_NAT.svg.png)
> 就是限制内部必须先发送数据出去，才可以接受

3. 端口受限圆锥型NAT（Port-Restricted cone NAT）
> 类似受限制錐形NAT（Restricted cone NAT），但是还有端口限制。
> 1. 一旦一个内部地址（iAddr:port1）映射到外部地址（eAddr:port2），所有发自iAddr:port1的包都经由eAddr:port2向外发送。
> 2. 在受限圆锥型NAT基础上增加了外部主机源端口必须是固定的。
> 
> ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_Restricted_Cone_NAT.svg/400px-Port_Restricted_Cone_NAT.svg.png)
> 限制内部，接受数据时，还需要匹配上端口

4. 對稱NAT（Symmetric NAT）
> 1. 每一個來自相同內部IP與端口，到一個特定目的地地址和端口的請求，都映射到一個獨特的外部IP地址和端口。
>     1. 同一內部IP與端口發到不同的目的地和端口的信息包，都使用不同的映射
> 2. 只有曾经收到过内部主机数据的外部主机，才能够把封包发回
> 
> ![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Symmetric_NAT.svg/400px-Symmetric_NAT.svg.png)
> 最严格的NAT

## 其它用途

1. 负载均衡：目的地址转换NAT可以重定向一些服务器的连接到其他随机选定的服务器。
2. 失效终结：目的地址转换NAT可以用来提供高可靠性的服务。如果一个系统有一台通过路由器访问的关键服务器，一旦路由器检测到该服务器宕机，它可以使用目的地址转换NAT透明的把连接转移到一个备份服务器上。
3. 透明代理：NAT可以把连接到因特网的HTTP连接重定向到一个指定的HTTP代理服务器以缓存数据和过滤请求。一些因特网服务提供商就使用这种技术来减少带宽的使用而不用让他们的客户配置他们的浏览器支持代理连接。

## NAT穿越

### UDP路由验证(UDP打洞)

让位于NAT后的两台主机都与处于公共地址空间的、众所周知的第三台服务器相连，然后，一旦NAT设备建立好UDP状态信息就转为直接通信，并寄希望于NAT设备会在分组其实是从另外一个主机传送过来的情况下仍然保持当前状态。

这项技术需要一个圆锥型NAT设备才能够正常工作。对称型NAT不能使用这项技术。

这项技术在P2P软件和VoIP电话领域被广泛采用。它是Skype用以绕过防火墙和NAT设备的技术之一。

#### 算法：
假设有两台分别处于各自的私有网络中的主机：A和B；N1和N2是两个网络的NAT设备，分别拥有IP地址P1和P2；S是一个使用了一个众所周知的、从全球任何地方都能访问得到的IP地址的公共服务器

1. A和B分别和S建立UDP连接；NAT设备N1和N2创建UDP转换状态并分配临时的外部端口号
2. S检查UDP包，看A和B的端口是否是正在被使用的（否则的话N1和N2应该是应用了端口随机分配，这会让路由验证变得更麻烦）
3. 如果端口不是随机化的，那么A和B各自选择端口X和Y，并告知S。S会让A发送UDP包到P2:Y，让B发送UDP包到P1:X
4. A和B通过转换好的IP地址和端口直接联系到对方的NAT设备；

### STUN（Session Traversal Utilities for NAT，NAT会话穿越应用程序）

红色重点代表STUN失败

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/STUN_Algorithm3.svg/614px-STUN_Algorithm3.svg.png)


## 参考

1. [NAT](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2)
2. [NAT穿越](https://zh.wikipedia.org/wiki/NAT%E7%A9%BF%E9%80%8F)