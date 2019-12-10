!function (o) {
    function e(o, e) {
        if ((o = o || {}).colorType) {
            var r = "color-purple";
            9 == o.colorType && 7 == o.qualityNum && (r = "color-orange");
            var t = {
                1: "color-white",
                3: "color-orange",
                5: "color-green",
                6: "color-blue",
                7: "color-red",
                8: "color-yellow",
                9: r
            }[o.colorType || 1];
            return e && (t = "bg-" + t),
                t
        }
        return ""
    }
    function r(o, e, r) {
        if ((o = o || {}).Quality || o.quality) {
            if (1 == e)
                var t = {
                    1: "color-white",
                    2: "color-yellow",
                    3: "color-green",
                    4: "color-blue",
                    5: "color-red",
                    6: "color-purple",
                    7: "color-orange"
                };
            else
                t = {
                    0: "color-white",
                    1: "color-yellow",
                    2: "color-green",
                    3: "color-blue",
                    4: "color-red",
                    5: "color-purple",
                    6: "color-purple"
                };
            var n = t[o.Quality || o.quality];
            return r && (n = "bg-" + n),
                n
        }
        return ""
    }
    o.role_mixin = function (o) {
        san_mixin(o, {
            initData: function () {
                return {
                    ResUrl: window.ResUrl || "",
                    ResUrlVer: window.ResUrlVer || ""
                }
            },
            toThousands: function (o, e) {
                var r = ((o = o || 0) + "").split(".");
                function t(o) {
                    return o.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
                }
                return t(r[0]) + (1 < r.length && e ? "." + t(r[1]) : "")
            },
            getItemValue: function (o, e) {
                var r = o.hasOwnProperty("default") ? o.default : 0;
                return e.hasOwnProperty(o.v) && (r = e[o.v]),
                    o.hasOwnProperty("p") && (r = o.p(r)),
                    r
            },
            filters: {
                toThousands: function (o) {
                    return this.toThousands(o)
                },
                default: function (o, e) {
                    return "" === (r = o) || null == r ? e : o;
                    var r
                }
            },
            getColorByColorType: e,
            getColorByQuality: r,
            showPopupPage: function (o, r) {
                var t, n = $("#TipsBox"), e = $("#roleDetailContainer"), l = .9 * $(window).height();
                function i() {
                    n.hide(),
                        n.html("")
                }
                e.on("mouseenter", o, function () {
                    t && clearTimeout(t);
                    var o = $(this).attr("data-tips")
                        , e = new r({
                            data: {
                                data: JSON.parse(o)
                            }
                        });
                    document.getElementById("TipsBox").innerHTML = "",
                        e.attach(document.getElementById("TipsBox")),
                        e.el.style.maxHeight = l + "px",
                        adjust_tips_position($(this), n)
                }),
                    e.on("mouseleave", o, function () {
                        n && n.height() > l ? t = setTimeout(i, 200) : i()
                    }),
                    n.on("mouseenter", function () {
                        t && clearTimeout(t)
                    }),
                    n.on("mouseleave", function () {
                        i()
                    })
            },
            stringifyData: function (o) {
                return JSON.stringify(o)
            }
        })
    }
        ,
        o.pupup_mixin = function (o) {
            san_mixin(o, {
                initData: function () {
                    return {
                        ResUrl: window.ResUrl || "",
                        ResUrlVer: window.ResUrlVer || ""
                    }
                },
                computed: {
                    tips: function () {
                        return this.data.get("data").tooltip
                    }
                },
                getColorByColorType: e,
                getColorByQuality: r,
                g_parse_desc: function (o) {
                    return g_parse_desc(o)
                }
            })
        }
}(window);
