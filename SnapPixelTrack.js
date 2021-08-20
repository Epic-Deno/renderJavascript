 (function (e, t, n) {
    if (e.snaptr) return; var a = e.snaptr = function () { a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments) };
    a.queue = []; var s = 'script'; r = t.createElement(s); r.async = !0;
    r.src = n; var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
})(window, document,
    'https://sc-static.net/scevent.min.js');

snaptr('init', 'd9266d09-a3ee-41d7-99bc-3c643fa12b40', {
    'user_email': 'aodourcosmetics@gmail.com'
});

snaptr('track', 'PAGE_VIEW');
