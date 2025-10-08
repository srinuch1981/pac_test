function FindProxyForURL(url, host) {
    var OneProxy = "PROXY 172.29.136.138:3128";
    var resolved = dnsResolve("172.29.136.138");
    var fqdnResolved = dnsResolve("www.google.com")
    var ip = myIpAddress();
    if (ip == "127.0.0.1" && !fqdnResolved) {
        return OneProxy;
    } else {
        return "SOCKS 172.29.136.138:10809";
    }
}
