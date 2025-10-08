function FindProxyForURL(url, host) {
    var OneProxy = "PROXY 172.29.136.138:3128";
    var resolved = dnsResolve("172.29.136.138");
    var fqdnResolved = dnsResolve("www.google.com")
    var ip = myIpAddress();
    if (!fqdnResolved) {
        return OneProxy;
    } else {
        return "SOCKS 172.29.136.139:10809";
    }
}
