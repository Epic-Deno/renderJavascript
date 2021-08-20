 window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-835343819");
gtag("config", "AW-623961244");// Loread 

/*GTM*/
(function (a, s, y, n, c, h, i, d, e) {
    s.className += " " + y;
    h.start = 1 * new Date();
    h.end = i = function () {
        s.className = s.className.replace(RegExp(" ?" + y), "");
    };
    (a[n] = a[n] || []).hide = h;
    setTimeout(function () {
        i();
        h.end = null;
    }, c);
    h.timeout = c;
})(window, document.documentElement, "async-hide", "dataLayer", 0.1, {
    "GTM-TP66SJ8": true,
});