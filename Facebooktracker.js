 $(document).ready(function () {

            !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) :
                        n.queue.push(arguments);
                };

                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";

                n.queue = [];
                t = b.createElement(e);
                t.async = !0;

                t.src = v;
                s = b.getElementsByTagName(e)[0];

                s.parentNode.insertBefore(t, s);
            })(
                window,
                document,
                "script",

                "https://connect.facebook.net/en_US/fbevents.js"
            );

            fbq("init", "274372196397914");

            //Loreal Pixel
            fbq("init", "233288417983651");
            fbq("init", "368150364182862");
            fbq('init', '350350159443083');
            fbq("init", "1308024856280296")
            fbq('init', '342634080328055');

            // fbq('trackSingle', '233288417983651', 'Purchase');
            // fbq('trackSingle', '368150364182862', 'Purchase');

            fbq("trackSingle", "274372196397914", "PageView");
            fbq("trackSingle", "1308024856280296", "PageView");
            fbq('trackSingle', '342634080328055', 'PageView');
            fbq('trackSingle', '350350159443083', 'PageView');


            // savyour start


            !function () {
                "savyour" in window || (window.savyour = function () {
                    window.savyour.q.push(arguments)
                }, window.savyour.q = []);
                const n = document.createElement("script");
                n.src = "https://affiliate.savyour.com.pk/sap.min.js", n.async = !0, n.defer = !0;
                const t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(n, t)
            }();
            savyour('init', '5247367478726f6c66366b4a6e614d586c57774c63773d3d');

            // savyour end
        });