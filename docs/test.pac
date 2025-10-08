function FindProxyForURL(url, host) {
    var OneProxy = "PROXY 172.29.136.138:3128";
    var resolved = dnsResolve("172.29.136.138");
    var ip = myIpAddress();
    if (ip == "172.23.224.124") {
        return OneProxy;
    } else {
        return "SOCKS 172.29.136.138:10809";
    }
}
