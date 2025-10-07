function FindProxyForURL(url, host)
{
    var ip = myIpAddress();
    // Force device to "use" that as proxy, so you can see it in logs
    return "PROXY " + ip + ":8888";
}
