function FindProxyForURL(url, host) {
    var OneProxy = "PROXY 172.29.136.138:3128";
    //var resolved = dnsResolve("172.29.136.138");
    // var fqdnResolved = dnsResolve("www.google.com")
    var ip = myIpAddress();
    if(ip == "172.23.224.241") {
        return OneProxy;
    }
    if(isInNet(myIpAddress(), "172.23.224.0", "255.255.255.0") && ip == "172.23.224.124") {
            return OneProxy;
        } else {
            return "SOCKS 172.29.136.139:10809";
        }
    
    /*if(isInNet(myIpAddress(), "172.18.237.0", "255.255.255.0")) {
        return OneProxy;
    } else {
        return "SOCKS 172.29.136.139:10809";
    }*/
}
