function initiateParallax() {
    $(window).width() >= 1024 && $.stellar({
        horizontalScrolling: !1,
        verticalScrolling: !0,
        responsive: !0,
        positionProperty: "transform",
        scrollProperty: "scroll",
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !1,
        hideElement: function(t) {
            t.hide()
        },
        showElement: function(t) {
            t.show()
        }
    })
}

function resizeFullscreen() {
	var height = $(window).height();
	if(jQuery(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
    var t = $(window).height() - $("#nav-main").height();
    $(window).width();
    t < 660 && (t = 660), screenHeight = t, $(".fullscreen").css({
        height: height
    })
}

function resizeHeader() {
    var t, e = $(window).height() - $("#nav-main").height(),
        i = $(window).width();
    e < 660 && (e = i <= 660 ? 660 : 960), t = i <= 1440 ? 300 : i <= 1100 ? 200 : i <= 660 ? 0 : 400;
    var n = e + t;
	var height = $(window).height();
	if(jQuery(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
    $(".fullscreen-header").css({
        height: height
    })
}

function resizeViewport() {
    var t, e = $(window).height() - $("#nav-main").height(),
        i = $(window).width();
    e < 660 && (e = i <= 660 ? 660 : 960), t = i <= 1440 ? 300 : i <= 1100 ? 200 : i <= 660 ? 0 : 400;
    var n = e + t;
	var height = $(window).height();
	if(jQuery(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
    $(".srbt-viewport").css({
        height: height
    })
}

function positionSliderControls() {
	var height = $(window).height();
	if(jQuery(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
    var t = $(window).height(),
        e = t / 2,
        i = $(".hero-pager").height() / 2,
        n = e - i;
    t > 660 ? $(".hero-pager").css({
        top: height
    }) : $(".hero-pager").css("top", "247px")
}

function fade() {
    $(".fade-element, .srbt-scrollview").each(function() {
        var t = $(this),
            e = t[0].hasAttribute("srbt-scrollview-offset") ? parseInt(t.attr("srbt-scrollview-offset")) : 5,
            i = t.offset().top + e,
            n = $(window).scrollTop() + $(window).innerHeight();
        i < n && t.addClass("fadein srbt-inview")
    })
}

function isMobile() {
    return mywindow.innerWidth() < 990
}

function videodeo() {
    isMobile() || $(".video-container").each(function() {
        var t = $(this),
            e = $("video", t);
        e.length && (e[0].load(), e.on("canplay", function() {
            t.addClass("srbt-canplay"), setTimeout(function() {
                e[0].play()
            }, 250)
        }))
    })
}

function expandAnimation() {
    $(".expansion-animation").each(function() {
        var t = $(this).offset().top + 150,
            e = $(window).scrollTop() + $(window).innerHeight();
        t < e && $(this).removeClass("expand")
    })
}

function onDocumentReady(t) {
    function e() {
        var t = $(window).height() - $("#nav-main").height();
        $(window).width();
        t < 400 && (t = 400), sliderHeight = t + 400, $("#work-hero .srbt-viewport").css({
            height: sliderHeight
        })
    }

    function i() {}

    function n() {
        $(".work-fade-element").each(function() {
            var t = $(this).offset().top + 150,
                e = $(window).scrollTop() + $(window).innerHeight();
            $(this).offset().top;
            t < e ? $(this).addClass("work-fadein") : t > e && $(this).removeClass("work-fadein")
        })
    }

    function r() {
        var t = "#work-filter",
            e = ".filter-button";
        $(e).click(function() {
            $(this).hasClass("active") ? ($(e).removeClass("active"), $(t).removeClass("active")) : ($(e).removeClass("active"), $(t).removeClass("active"), $(this).addClass("active"), $(t).addClass("active"))
        })
    }

    function o() {
        var t = ".button-title",
            e = ".option",
            i = ".work-grid";
        $(e).click(function() {
            function n() {
                var t = $(".trigger").text();
                $(i).each(function(e, i) {
                    console.log(t), $(this).hasClass(t) && $(this).removeClass("hideme")
                })
            }
            if ($(this).hasClass("selected"));
            else {
                var r = $(this).text();
                $(i).addClass("hideme"), $(".all").removeClass("selected"), $(e).removeClass("selected"), $(e).removeClass("trigger"), $(i).removeClass("selected"), $(i).addClass("work-fadein"), $(t).text(r), $(this).addClass("selected"), $(this).addClass("trigger"), $(window).width() < 1024 && $(".filter-button").click(), setTimeout(n, 900), $(i).each(function(t, e) {
                    $(this).hasClass(r) ? $(this).addClass("selected") : $(this).addClass("hideme")
                })
            }
        }), $(".all").click(function() {
            function n() {
                $(i).removeClass("hideme")
            }
            var r = $(this).text();
            $(".all").addClass("selected"), $(i).addClass("hideme"), $(e).removeClass("selected"), $(i).removeClass("selected"), $(t).text(r), $(window).height() < 720 && $(".filter-button").click(), setTimeout(n, 900)
        })
    }
    $("#work-hero-slider").bxSlider({
        touchEnabled: !1,
        mode: "horizontal",
        pagerCustom: "#work-hero .srbt-pager-custom",
        nextSelector: $("#work-hero .srbt-next-control"),
        prevSelector: $("#work-hero .srbt-prev-control"),
        nextText: "next",
        prevText: "prev",
        infiniteLoop: !0
    }), $("#stat-slider").bxSlider({
        touchEnabled: !0,
        mode: "horizontal",
        pagerCustom: "#work-work .srbt-pager-custom",
        nextSelector: $("#work-work .srbt-next-control"),
        prevSelector: $("#work-work .srbt-prev-control"),
        nextText: "next",
        prevText: "prev",
        infiniteLoop: !0,
        auto: !0
    }), $("#stat-slider-2").bxSlider({
        touchEnabled: !0,
        mode: "horizontal",
        pagerCustom: "#work-work .srbt-pager-custom",
        nextSelector: $("#work-work .srbt-next-control"),
        prevSelector: $("#work-work .srbt-prev-control"),
        nextText: "next",
        prevText: "prev",
        infiniteLoop: !0,
        auto: !0
    }), $(window).resize(function() {
        e(), n(), i()
    }), e(), fade(), n(), i(), r(), o(), $(window).scroll(function() {
        fade(), n()
    })
}
window.Typekit || (window.Typekit = {}), window.Typekit.config = {
        a: "2680626",
        c: [".tk-proxima-nova", '"proxima-nova",sans-serif'],
        f: "//use.typekit.net/c/b4a39e/1w;proxima-nova,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,2clzCL:W:i1,2clzCB:W:i3,2clzCG:W:i4,2clzCD:W:i5,2clzCJ:W:i6,2clzC6:W:i7,2clzCK:W:n1,2clzC9:W:n3,2clzCF:W:n4,2clzCC:W:n5,2clzCH:W:n6,2clzC5:W:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf4195b2a62ac2abccc2253da0ff4783e8b08ad496e9da219aabb35f4ad4175e16a91e9e2536dd7e63870f697a4109ca0b74ee8c08d3d613baede8f57b9ef2f7addd763ae50b708a481015adf0b9aa0cb597791cf6e4e1f89ba5b45d7c0fd3e1eec6e66918ee86a9f38d8c8572aa369eb",
        fi: [139, 140, 171, 172, 173, 174, 175, 176, 5474, 5475, 25136, 25137],
        fn: ["proxima-nova", ["i1", "i3", "i4", "i5", "i6", "i7", "n1", "n3", "n4", "n5", "n6", "n7"]],
        ht: "tk",
        js: "1.14.8",
        k: "//use.typekit.net/{id}.js",
        kt: "tjr1spk",
        l: "typekit",
        p: "//p.typekit.net/p.gif?s=1&k=tjr1spk&ht=tk&h={host}&f=139.140.171.172.173.174.175.176.5474.5475.25136.25137&a=2680626&_={_}",
        ps: 1,
        w: "tjr1spk"
    },
    function(t, e, i) {
        function n(t, e, i) {
            return t.call.apply(t.bind, arguments)
        }

        function r(t, e, i) {
            if (!t) throw Error();
            if (2 < arguments.length) {
                var n = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var i = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(i, n), t.apply(e, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function o(t, e, i) {
            return o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : r, o.apply(null, arguments)
        }

        function s() {
            this.N = this.O = this.I = this.L = this.M = !0
        }

        function a() {
            var t = [{
                name: "font-family",
                value: Ce.c[Pe + 1]
            }];
            this.g = [Ce.c[Pe]], this.b = t
        }

        function l(t) {
            for (var e = t.g.join(","), i = [], n = 0; n < t.b.length; n++) {
                var r = t.b[n];
                i.push(r.name + ":" + r.value + ";")
            }
            return e + "{" + i.join("") + "}"
        }

        function c(t) {
            this.b = t
        }

        function u(t, e) {
            this.g = t, this.b = e
        }

        function h(t, e) {
            this.b = t, this.g = e
        }

        function f(t) {
            this.b = t
        }

        function d(t, e) {
            return e
        }

        function p() {
            this.b = this.g = -1
        }

        function g(t, e, i) {
            return jt[e](t, e, i)
        }

        function m(t) {
            this.b = t
        }

        function v(t, e) {
            for (var i = [], n = 0; n < e.length; n++) i.push(e[n].toString());
            return {
                format: t,
                extras: i
            }
        }

        function y(t) {
            var e = new Image(1, 1),
                i = !1;
            e.src = t, e.onload = function() {
                i = !0, e.onload = null
            }, setTimeout(function() {
                i || (e.src = "about:blank", e.onload = null)
            }, 3e3)
        }

        function _(t, e, i, n, r, o, s) {
            this.b = t, this.B = e, this.F = i, this.D = n, this.v = r, this.o = o, this.K = s
        }

        function w(t, e, i, n) {
            this.b = null != t ? t : null, this.g = null != e ? e : null, this.h = null != i ? i : null, this.s = null != n ? n : null
        }

        function x(t, e) {
            return t.b > e.b || t.b === e.b && t.g > e.g || t.b === e.b && t.g === e.g && t.h > e.h ? 1 : t.b < e.b || t.b === e.b && t.g < e.g || t.b === e.b && t.g === e.g && t.h < e.h ? -1 : 0
        }

        function b(t, e) {
            return -1 === x(t, e)
        }

        function T(t, e) {
            return 0 === x(t, e) || 1 === x(t, e)
        }

        function S(t, e) {
            return 0 === x(t, e) || -1 === x(t, e)
        }

        function k(t, e) {
            return 0 === x(t, e)
        }

        function C(t) {
            t = $t.exec(t);
            var e = null,
                i = null,
                n = null,
                r = null;
            return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (i = parseInt(t[2], 10)), null !== t[3] && t[3] && (n = parseInt(t[3], 10)), null !== t[4] && t[4] && (r = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new w(e, i, n, r)
        }

        function P(t) {
            return "Safari" === t.getName() && "AppleWebKit" === t.F || "Unknown" === t.getName() && "AppleWebKit" === t.F && ("iPhone" === t.v || "iPad" === t.v || "iPod" === t.v)
        }

        function O(t) {
            return "Chrome" === t.getName() && T(t.B, new w(6)) && S(t.B, new w(35))
        }

        function A(t) {
            return "Chrome" === t.getName() && T(t.B, new w(36))
        }

        function E(t) {
            return "BuiltinBrowser" === t.getName()
        }

        function D(t) {
            return "Windows" === t.v
        }

        function R(t) {
            return D(t) && T(t.o, new w(6, 1))
        }

        function M(t) {
            return D(t) && k(t.o, new w(5, 1)) || D(t) && k(t.o, new w(5, 2)) || D(t) && k(t.o, new w(6, 0)) || R(t)
        }

        function N(t) {
            return "Macintosh" === t.v && (T(t.o, new w(10, 4)) || null === t.o.b)
        }

        function L(t, e) {
            return e.M && ("iPhone" === t.v || "iPod" === t.v) && T(t.o, new w(4, 2)) && b(t.o, new w(5))
        }

        function I(t, e) {
            return e.M && ("iPhone" === t.v || "iPod" === t.v) && T(t.o, new w(5))
        }

        function z(t, e) {
            return e.L && "iPad" === t.v && T(t.o, new w(4, 2)) && b(t.o, new w(5))
        }

        function F(t, e) {
            return e.L && "iPad" === t.v && T(t.o, new w(5))
        }

        function j(t, e) {
            return e.I && "Android" === t.v
        }

        function B(t, e) {
            return j(t, e) && T(t.o, new w(2, 2)) && b(t.o, new w(3, 1))
        }

        function $(t, e) {
            return j(t, e) && T(t.o, new w(3, 1)) && b(t.o, new w(4, 1))
        }

        function q(t) {
            return "Linux" === t.v || "Ubuntu" === t.v
        }

        function H(t) {
            var e = U(t.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            return "" !== e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = U(t.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" !== t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
        }

        function W(t) {
            var e = U(t.b, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (e || (e = U(t.b, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = U(t.b, /(iPhone )?OS ([\d_]+)/, 2))) return e;
            if (e = U(t.b, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
                for (var e = e.split(/\s/), i = 0; i < e.length; i += 1)
                    if (/^[\d\._]+$/.test(e[i])) return e[i];
            return (t = U(t.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
        }

        function X() {
            var t = Qt,
                e = "Unknown",
                i = C(U(t.b, /Presto\/([\d\w\.]+)/, 1)),
                n = C(W(t)),
                r = V(t.g);
            if (null !== i.b ? e = "Presto" : (-1 != t.b.indexOf("Gecko") && (e = "Gecko"), i = C(U(t.b, /rv:([^\)]+)/, 1))), -1 != t.b.indexOf("Opera Mini/")) {
                var o = C(U(t.b, /Opera Mini\/([\d\.]+)/, 1));
                return new _("OperaMini", o, e, i, H(t), n, r)
            }
            return -1 != t.b.indexOf("Version/") && (o = C(U(t.b, /Version\/([\d\.]+)/, 1)), null !== o.b) ? new _("Opera", o, e, i, H(t), n, r) : (o = C(U(t.b, /Opera[\/ ]([\d\.]+)/, 1)), null !== o.b ? new _("Opera", o, e, i, H(t), n, r) : new _("Opera", new w, e, i, H(t), n, r))
        }

        function Y() {
            var t = Qt,
                e = H(t),
                i = C(W(t)),
                n = C(U(t.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
                r = "Unknown",
                o = new w,
                o = "Unknown";
            return /OPR\/[\d.]+/.test(t.b) ? r = "Opera" : -1 != t.b.indexOf("Chrome") || -1 != t.b.indexOf("CrMo") || -1 != t.b.indexOf("CriOS") ? r = "Chrome" : /Silk\/\d/.test(t.b) ? r = "Silk" : "BlackBerry" == e || "Android" == e ? r = "BuiltinBrowser" : -1 != t.b.indexOf("PhantomJS") ? r = "PhantomJS" : -1 != t.b.indexOf("Safari") ? r = "Safari" : -1 != t.b.indexOf("AdobeAIR") ? r = "AdobeAIR" : -1 != t.b.indexOf("PlayStation") && (r = "BuiltinBrowser"), "BuiltinBrowser" == r ? o = "Unknown" : "Silk" == r ? o = U(t.b, /Silk\/([\d\._]+)/, 1) : "Chrome" == r ? o = U(t.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.b.indexOf("Version/") ? o = U(t.b, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == r ? o = U(t.b, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == r ? o = U(t.b, /OPR\/([\d.]+)/, 1) : "PhantomJS" == r && (o = U(t.b, /PhantomJS\/([\d.]+)/, 1)), o = C(o), new _(r, o, "AppleWebKit", n, e, i, V(t.g))
        }

        function U(t, e, i) {
            return (t = t.match(e)) && t[i] ? t[i] : ""
        }

        function V(t) {
            if (t.documentMode) return t.documentMode
        }

        function G(t) {
            this.b = t || "-"
        }

        function Q(t, e, i, n) {
            if (e = t.b.createElement(e), i)
                for (var r in i) i.hasOwnProperty(r) && ("style" == r ? e.style.cssText = i[r] : e.setAttribute(r, i[r]));
            return n && e.appendChild(t.b.createTextNode(n)), e
        }

        function K(t, i, n) {
            t = t.b.getElementsByTagName(i)[0], t || (t = e.documentElement), t.insertBefore(n, t.lastChild)
        }

        function Z(t, e) {
            t.b.body ? e() : t.b.addEventListener ? t.b.addEventListener("DOMContentLoaded", e) : t.b.attachEvent("onreadystatechange", function() {
                "interactive" != t.b.readyState && "complete" != t.b.readyState || e()
            })
        }

        function J(t) {
            t.parentNode && t.parentNode.removeChild(t)
        }

        function tt(t, e, i) {
            e = e || [], i = i || [];
            for (var n = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
                for (var o = !1, s = 0; s < n.length; s += 1)
                    if (e[r] === n[s]) {
                        o = !0;
                        break
                    } o || n.push(e[r])
            }
            for (e = [], r = 0; r < n.length; r += 1) {
                for (o = !1, s = 0; s < i.length; s += 1)
                    if (n[r] === i[s]) {
                        o = !0;
                        break
                    } o || e.push(n[r])
            }
            t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function et(t, e) {
            for (var i = t.className.split(/\s+/), n = 0, r = i.length; n < r; n++)
                if (i[n] == e) return !0;
            return !1
        }

        function it(t) {
            if ("string" == typeof t.m) return t.m;
            var e = t.g.location.protocol;
            return "about:" == e && (e = t.h.location.protocol), "https:" == e ? "https:" : "http:"
        }

        function nt(t) {
            return t.g.location.hostname || t.h.location.hostname
        }

        function rt(t, e, i, n) {
            function r() {
                f && c && u && (f(h), f = null)
            }

            function o(t) {
                for (var i = 0; i < l.length; i++)
                    if (l[i].href && -1 !== l[i].href.indexOf(e)) return void t();
                setTimeout(function() {
                    o(t)
                }, 0)
            }

            function s(t) {
                for (var i = 0; i < l.length; i++)
                    if (l[i].href && -1 !== l[i].href.indexOf(e) && (l[i].media && "all" === l[i].media || "all" === l[i].media.mediaText)) return void t();
                setTimeout(function() {
                    s(t)
                }, 0)
            }
            var a = Q(t, "link", {
                    rel: "stylesheet",
                    href: e,
                    media: n ? "only x" : "all"
                }),
                l = t.b.styleSheets,
                c = !1,
                u = !n,
                h = null,
                f = i || null;
            Wt ? (a.onload = function() {
                c = !0, r()
            }, a.onerror = function() {
                c = !0, h = Error("Stylesheet failed to load"), r()
            }) : setTimeout(function() {
                c = !0, r()
            }, 0), K(t, "head", a), n && o(function() {
                a.media = "all", s(function() {
                    u = !0, r()
                })
            })
        }

        function ot(t, e, i) {
            var n = t.b.getElementsByTagName("head")[0];
            if (n) {
                var r = Q(t, "script", {
                        src: e
                    }),
                    o = !1;
                r.onload = r.onreadystatechange = function() {
                    o || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o = !0, i && i(null), r.onload = r.onreadystatechange = null, "HEAD" == r.parentNode.tagName && n.removeChild(r))
                }, n.appendChild(r), setTimeout(function() {
                    o || (o = !0, i && i(Error("Script load timeout")))
                }, 5e3)
            }
        }

        function st(t, e) {
            this.b = t, this.h = t.g.document.documentElement, this.u = e, this.g = new G("-"), this.w = !1 !== e.events, this.m = !1 !== e.classes
        }

        function at(t) {
            if (t.m) {
                var e = et(t.h, t.g.s("wf", "active")),
                    i = [],
                    n = [t.g.s("wf", "loading")];
                e || i.push(t.g.s("wf", "inactive")), tt(t.h, i, n)
            }
            lt(t, "inactive")
        }

        function lt(t, e, i) {
            t.w && t.u[e] && (i ? t.u[e](i.getName(), ft(i)) : t.u[e]())
        }

        function ct(t, e) {
            this.h = t, this.g = 4, this.b = "n";
            var i = (e || "n4").match(/^([nio])([1-9])$/i);
            i && (this.b = i[1], this.g = parseInt(i[2], 10))
        }

        function ut(t) {
            return dt(t) + " " + (t.g + "00") + " 300px " + ht(t.h)
        }

        function ht(t) {
            var e = [];
            t = t.split(/,\s*/);
            for (var i = 0; i < t.length; i++) {
                var n = t[i].replace(/['"]/g, ""); - 1 != n.indexOf(" ") || /^\d/.test(n) ? e.push("'" + n + "'") : e.push(n)
            }
            return e.join(",")
        }

        function ft(t) {
            return t.b + t.g
        }

        function dt(t) {
            var e = "normal";
            return "o" === t.b ? e = "oblique" : "i" === t.b && (e = "italic"), e
        }

        function pt(t, e) {
            this.b = t, this.m = e, this.h = {}, this.g = {}
        }

        function gt(t, e, i) {
            for (var n, r = [], o = t.b.split(",")[0].replace(/"|'/g, ""), s = t.G(), a = [], l = {}, c = 0; c < s.length; c++) n = s[c], 0 < n.length && !l[n] && (l[n] = !0, a.push(n));
            i = i.b ? i.b(o, a, r) : a, t.h[e] = i, t.g[e] = r
        }

        function mt(t, e) {
            for (var i = t.G(e), n = t.g[e] || [], r = [], o = 0; o < i.length; o++) r.push(new ct(t.b, i[o]));
            for (o = 0; o < n.length; o++)
                if (i = n[o].b, i !== t.b)
                    for (var s = n[o].G(), a = 0; a < s.length; a++) r.push(new ct(i, s[a]));
            return r
        }

        function vt(t, e) {
            this.b = t, this.h = e, this.g = Q(this.b, "span", {
                "aria-hidden": "true"
            }, this.h)
        }

        function yt(t) {
            K(t.b, "body", t.g)
        }

        function _t(t) {
            return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + ht(t.h) + ";" + ("font-style:" + dt(t) + ";font-weight:" + (t.g + "00") + ";")
        }

        function wt(t, e, i, n, r, o, s) {
            this.H = t, this.R = e, this.b = i, this.g = n, this.C = s || "BESbswy", this.h = {}, this.S = r || 3e3, this.J = o || null, this.A = this.w = this.u = this.m = null, this.m = new vt(this.b, this.C), this.u = new vt(this.b, this.C), this.w = new vt(this.b, this.C), this.A = new vt(this.b, this.C), t = new ct(this.g.getName() + ",serif", ft(this.g)), t = _t(t), this.m.g.style.cssText = t, t = new ct(this.g.getName() + ",sans-serif", ft(this.g)), t = _t(t), this.u.g.style.cssText = t, t = new ct("serif", ft(this.g)), t = _t(t), this.w.g.style.cssText = t, t = new ct("sans-serif", ft(this.g)), t = _t(t), this.A.g.style.cssText = t, yt(this.m), yt(this.u), yt(this.w), yt(this.A)
        }

        function xt() {
            if (null === Yt) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(t.navigator.userAgent);
                Yt = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
            }
            return Yt
        }

        function bt(t, e, i) {
            for (var n in Xt)
                if (Xt.hasOwnProperty(n) && e === t.h[Xt[n]] && i === t.h[Xt[n]]) return !0;
            return !1
        }

        function Tt(t) {
            var e, i = t.m.g.offsetWidth,
                n = t.u.g.offsetWidth;
            (e = i === t.h.serif && n === t.h["sans-serif"]) || (e = xt() && bt(t, i, n)), e ? zt() - t.P >= t.S ? xt() && bt(t, i, n) && (null === t.J || t.J.hasOwnProperty(t.g.getName())) ? kt(t, t.H) : kt(t, t.R) : St(t) : kt(t, t.H)
        }

        function St(t) {
            setTimeout(o(function() {
                Tt(this)
            }, t), 50)
        }

        function kt(t, e) {
            setTimeout(o(function() {
                J(this.m.g), J(this.u.g), J(this.w.g), J(this.A.g), e(this.g)
            }, t), 0)
        }

        function Ct(t, e, i, n, r, o) {
            this.m = t, this.h = e, this.g = n, this.b = i, this.w = r || 3e3, this.u = o || void 0
        }

        function Pt(t, e, i) {
            this.b = t, this.g = e, this.h = 0, this.A = this.w = !1, this.C = i
        }

        function Ot(t) {
            0 == --t.h && t.w && (t.A ? (t = t.g, t.m && tt(t.h, [t.g.s("wf", "active")], [t.g.s("wf", "loading"), t.g.s("wf", "inactive")]), lt(t, "active")) : at(t.g))
        }

        function At(t, e) {
            this.m = t, this.b = e, this.g = []
        }

        function Et(t, e, i) {
            e = t.m.s({
                id: encodeURIComponent(e)
            }), ot(t.b, e, i)
        }

        function Dt(t, e) {
            if (0 !== t.g.length) {
                for (var i = new st(t.b, e), n = !1, r = 0; r < t.g.length; r++) t.g[r].init(), n = n || t.g[r].supportsConfiguredBrowser();
                if (n)
                    for (i.m && tt(i.h, [i.g.s("wf", "loading")]), lt(i, "loading"), i = 0; i < t.g.length; i++) n = t.g[i], n.supportsConfiguredBrowser() && n.load(null, i == t.g.length - 1, e);
                else at(i);
                t.g = []
            }
        }

        function Rt() {
            this.g = 0, this.b = null
        }

        function Mt(t) {
            return t.g++,
                function() {
                    t.g--, Lt(t)
                }
        }

        function Nt(t, e) {
            t.b = e, Lt(t)
        }

        function Lt(t) {
            0 == t.g && t.b && (t.b(), t.b = null)
        }

        function It(t) {
            this.b = t, this.g = "x", this.w = this.H = null, this.h = [], this.m = [], this.C = this.u = null, this.A = !1
        }
        if (!e.querySelector) return void(e.documentElement.className += " wf-inactive");
        var zt = Date.now || function() {
            return +new Date
        };
        c.prototype.toString = function() {
            return encodeURIComponent(nt(this.b))
        }, u.prototype.toString = function() {
            for (var t = [], e = 0; e < this.b.length; e++)
                for (var i = this.b[e], n = i.G(), i = i.G(this.g), r = 0; r < n.length; r++) {
                    var o;
                    t: {
                        for (o = 0; o < i.length; o++)
                            if (n[r] === i[o]) {
                                o = !0;
                                break t
                            } o = !1
                    }
                    t.push(o ? 1 : 0)
                }
            for (t = t.join(""), t = t.replace(/^0+/, ""), e = [], n = t.length; 0 < n; n -= 4) e.unshift(parseInt(t.slice(0 > n - 4 ? 0 : n - 4, n), 2).toString(16));
            return e.join("")
        }, h.prototype.G = function() {
            return this.g
        }, p.prototype.start = function() {
            this.g = (new Date).getTime(), this.b = -1
        };
        var Ft = {
                V: "a",
                $: "d",
                U: "i",
                W: "j",
                T: "k",
                Z: "l",
                NONE: "x"
            },
            jt = {};
        jt.a = jt.d = jt.l = jt.j = function() {
            return []
        }, jt.i = function(t, e, i) {
            return [new c(t), new u(e, i)]
        }, jt.k = function(t) {
            return [new c(t)]
        };
        var Bt = {};
        Bt.i = new f(function(t, e, i) {
            for (var n = 0; n < e.length; n += 1) {
                var r, o = e[n];
                r = o, r = t.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + r, i.push(new h(r, [o]))
            }
            for (t = {}, o = 0; o < e.length; o++) i = e[o], n = i.charAt(1), (t[n] || (t[n] = [])).push(i);
            for (i = [
                    [4, 3, 2, 1, 5, 6, 7, 8, 9],
                    [7, 8, 9, 6, 5, 4, 3, 2, 1]
                ], n = [], o = 0; o < i.length; o++) {
                r = i[o];
                for (var s = 0; s < r.length; s++) {
                    var a = r[s];
                    if (t[a]) {
                        n = n.concat(t[a]);
                        break
                    }
                }
            }
            for (i = n, n = {}, t = [], o = 0; o < i.length; o++) r = i[o], n[r] || (n[r] = !0, t.push(r));
            for (i = [], n = 0; n < e.length; n++)
                for (o = e[n], r = 0; r < t.length; r++) s = t[r], s == o && i.push(s);
            return i
        }), m.prototype.s = function(t, e) {
            var i = t || {},
                n = this.b.replace(/\{\/?([^*}]*)(\*?)\}/g, function(t, e, n) {
                    return n && i[e] ? "/" + i[e].join("/") : i[e] || ""
                });
            return n.match(/^\/\//) && (n = (e ? "http:" : "https:") + n), n.replace(/\/*\?*($|\?)/, "$1")
        }, _.prototype.getName = function() {
            return this.b
        };
        var $t = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        w.prototype.toString = function() {
            return [this.b, this.g || "", this.h || "", this.s || ""].join("")
        };
        var qt = {
                a: function(t, e) {
                    return "Safari" === t.getName() && "AppleWebKit" === t.F && T(t.D, new w(525, 13)) && b(t.D, new w(534, 50)) && (M(t) || N(t)) || E(t) && (B(t, e) || j(t, e) && T(t.o, new w(4, 1))) || e.I && "Silk" === t.getName() && b(t.B, new w(2)) && (B(t, e) || N) || e.I && "Silk" === t.getName() && T(t.B, new w(2)) && j(t, e) && T(t.o, new w(4, 1)) || P(t) && (z(t, e) || L(t, e)) || O(t) && (z(t, e) || L(t, e)) || A(t) && (z(t, e) || L(t, e)) || "AdobeAIR" === t.getName() && T(t.B, new w(2, 5)) && (D(t) && null === t.o.b || q(t) || N(t))
                },
                d: function(t, e) {
                    return O(t) && (M(t) || q(t) || N(t) || j(t, e) || "CrOS" === t.v || "CrKey" === t.v || F(t, e) || I(t, e)) || A(t) && (F(t, e) || I(t, e)) || "Gecko" === t.F && 1 === x(t.D, new w(1, 9, 1)) && S(t.D, new w(38)) && (M(t) || q(t) || N(t) || j(t, e)) || "Safari" === t.getName() && "AppleWebKit" === t.F && T(t.D, new w(534, 50)) && (M(t) || N(t)) || P(t) && (F(t, e) || I(t, e)) || "Opera" === t.getName() && T(t.B, new w(11, 10)) && S(t.B, new w(22)) && (M(t) || q(t) || N(t) || j(t, e)) || "MSIE" === t.getName() && 9 <= t.K && (R(t) || D(t) && k(t.o, new w(6, 0))) || "Edge" === t.getName() && R(t) || "MSIE" === t.getName() && e.O && "Windows Phone" === t.v && T(t.o, new w(8)) || E(t) && (e.N && "BlackBerry" === t.v && T(t.o, new w(10)) || q(t))
                },
                j: function(t, e) {
                    return E(t) && $(t, e) || e.I && "Silk" === t.getName() && T(t.B, new w(2)) && ($(t, e) || q(t))
                },
                i: function(t) {
                    return "MSIE" === t.getName() && T(t.B, new w(6, 0)) && (void 0 === t.K || 9 > t.K) && M(t)
                },
                l: function(t, e) {
                    return A(t) && (M(t) || q(t) || N(t) || j(t, e) || "CrOS" === t.v || "CrKey" === t.v) || "Gecko" === t.F && T(t.D, new w(39)) && (M(t) || q(t) || N(t) || j(t, e)) || "Opera" === t.getName() && T(t.B, new w(23)) && (M(t) || q(t) || N(t) || j(t, e))
                },
                x: function() {
                    return !1
                }
            },
            Ht = new _("Unknown", new w, "Unknown", new w, "Unknown", new w, (void 0));
        G.prototype.s = function(t) {
            for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
            return e.join(this.b)
        };
        var Wt = !!t.FontFace;
        ct.prototype.getName = function() {
            return this.h
        }, pt.prototype.G = function(t) {
            return t ? (this.h[t] || this.m).slice(0) : this.m.slice(0)
        };
        var Xt = {
                Y: "serif",
                X: "sans-serif"
            },
            Yt = null;
        wt.prototype.start = function() {
            this.h.serif = this.w.g.offsetWidth, this.h["sans-serif"] = this.A.g.offsetWidth, this.P = zt(), Tt(this)
        }, Ct.prototype.start = function() {
            function t() {
                zt() - n >= i.w ? i.h(i.g) : e.fonts.load(ut(i.g), i.u).then(function(e) {
                    1 <= e.length ? i.m(i.g) : setTimeout(t, 25)
                }, function() {
                    i.h(i.g)
                })
            }
            var e = this.b.g.document,
                i = this,
                n = zt();
            t()
        };
        var Ut = null;
        Pt.prototype.m = function(t) {
            var e = this.g;
            e.m && tt(e.h, [e.g.s("wf", t.getName(), ft(t).toString(), "active")], [e.g.s("wf", t.getName(), ft(t).toString(), "loading"), e.g.s("wf", t.getName(), ft(t).toString(), "inactive")]), lt(e, "fontactive", t), this.A = !0, Ot(this)
        }, Pt.prototype.u = function(t) {
            var e = this.g;
            if (e.m) {
                var i = et(e.h, e.g.s("wf", t.getName(), ft(t).toString(), "active")),
                    n = [],
                    r = [e.g.s("wf", t.getName(), ft(t).toString(), "loading")];
                i || n.push(e.g.s("wf", t.getName(), ft(t).toString(), "inactive")), tt(e.h, n, r)
            }
            lt(e, "fontinactive", t), Ot(this)
        }, At.prototype.h = function(t) {
            this.g.push(t)
        }, At.prototype.load = function(t, e) {
            var i = t,
                n = e || {};
            if ("string" == typeof i ? i = [i] : i && i.length || (n = i || {}, i = []), i.length)
                for (var r = this, o = i.length, s = 0; s < i.length; s++) Et(this, i[s], function() {
                    0 === --o && Dt(r, n)
                });
            else Dt(this, n)
        }, It.prototype.supportsConfiguredBrowser = function() {
            return "x" !== this.g
        }, It.prototype.init = function() {
            if (0 < this.m.length) {
                for (var t = [], i = 0; i < this.m.length; i++) t.push(l(this.m[i]));
                var i = this.b,
                    t = t.join(""),
                    n = Q(this.b, "style");
                n.setAttribute("type", "text/css"), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(e.createTextNode(t)), K(i, "head", n)
            }
        }, It.prototype.load = function(e, i, n) {
            function r() {}
            var s = this,
                a = n || {},
                l = a.contextPath || ".",
                c = a.hostname || this.C;
            e = a.timeout, n = !!a.async;
            var u = !1 !== a.events,
                h = null,
                _ = new p,
                w = new p,
                x = new Rt;
            if (a.active && (r = a.active), a.active = function() {
                    if (w.b = (new Date).getTime(), s.J) {
                        var e = s.J,
                            i = -1 !== _.g && -1 !== _.b ? _.b - _.g : -1,
                            n = -1 !== w.g && -1 !== w.b ? w.b - w.g : -1,
                            o = new m("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),
                            a = encodeURIComponent((t.__adobewebfontsappname__ || e.app || "").toString().substr(0, 20)),
                            l = encodeURIComponent(nt(s.b)),
                            c = [],
                            u = [];
                        t.Typekit.fonts || (t.Typekit.fonts = []);
                        for (var u = t.Typekit.fonts, h = 0; h < e.b.length; h++) {
                            for (var f = !1, d = 0; d < u.length; d++)
                                if (e.b[h] === u[d]) {
                                    f = !0;
                                    break
                                } f || (c.push(e.b[h]), u.push(e.b[h]))
                        }
                        c.length && y(o.s({
                            service: e.m,
                            token: e.u,
                            app: a,
                            hosting: e.h,
                            host: l,
                            variations: c.join("."),
                            account: e.g,
                            stylesheetLoadTime: i,
                            fontLoadTime: n,
                            version: e.version,
                            _: (+new Date).toString()
                        }))
                    }
                    r()
                }, h = new st(this.b, a), this.g) {
                for (var a = Bt[this.g] || new f(d), b = 0; b < this.h.length; b++) gt(this.h[b], this.g, a);
                if (this.u && (a = g(this.b, this.g, this.h), a = v(this.g, a), a.contextPath = l, c && (a.hostname = c), l = this.u.s(a, !!this.A && "https:" !== it(this.b)), _.start(), rt(this.b, l, Mt(x), n)), u) {
                    for (var T = [], S = {}, k = new Pt(this.b, h, e), b = 0; b < this.h.length; b++) T = T.concat(mt(this.h[b], this.g));
                    for (b = 0; b < T.length; b++) S[T[b].getName()] = "BESbswy";
                    Nt(x, function() {
                        _.b = (new Date).getTime(), w.start(), Z(s.b, function() {
                            var e = T,
                                n = {},
                                r = S || {};
                            if (0 === e.length && i) at(k.g);
                            else {
                                k.h += e.length, i && (k.w = i);
                                var s, a = [];
                                for (s = 0; s < e.length; s++) {
                                    var l = e[s],
                                        c = r[l.getName()],
                                        u = k.g,
                                        h = l;
                                    u.m && tt(u.h, [u.g.s("wf", h.getName(), ft(h).toString(), "loading")]), lt(u, "fontloading", h), u = null, null === Ut && (Ut = !!t.FontFace && (!(h = /Gecko.*Firefox\/(\d+)/.exec(t.navigator.userAgent)) || 42 < parseInt(h[1], 10))), u = Ut ? new Ct(o(k.m, k), o(k.u, k), k.b, l, k.C, c) : new wt(o(k.m, k), o(k.u, k), k.b, l, k.C, n, c), a.push(u)
                                }
                                for (s = 0; s < a.length; s++) a[s].start()
                            }
                        })
                    })
                }
            }
        };
        var Vt, Gt, Qt = new function() {
            var t = e;
            this.b = navigator.userAgent, this.g = t
        };
        if (-1 != Qt.b.indexOf("MSIE") || -1 != Qt.b.indexOf("Trident/")) {
            var Kt = Qt,
                Zt = H(Kt),
                Jt = C(W(Kt)),
                te = null,
                ee = null,
                ie = null,
                ne = U(Kt.b, /Trident\/([\d\w\.]+)/, 1),
                re = V(Kt.g),
                te = C(-1 != Kt.b.indexOf("MSIE") ? U(Kt.b, /MSIE ([\d\w\.]+)/, 1) : U(Kt.b, /rv:([\d\w\.]+)/, 1));
            "" !== ne ? (ee = "Trident", ie = C(ne)) : (ee = "Unknown", ie = new w), Gt = new _("MSIE", te, ee, ie, Zt, Jt, re)
        } else {
            var oe;
            if (-1 != Qt.b.indexOf("Edge/")) {
                var se = Qt,
                    ae = H(se),
                    le = C(W(se)),
                    ce = C(U(se.b, /Edge\/([\d\w\.]+)/, 1));
                oe = new _("Edge", ce, "Edge", ce, ae, le, V(se.g))
            } else {
                var ue;
                if (-1 != Qt.b.indexOf("Opera")) ue = X();
                else {
                    var he;
                    if (/OPR\/[\d.]+/.test(Qt.b)) he = Y();
                    else {
                        var fe;
                        if (/AppleWeb(K|k)it/.test(Qt.b)) fe = Y();
                        else {
                            var de;
                            if (-1 != Qt.b.indexOf("Gecko")) {
                                var pe = Qt,
                                    ge = "Unknown",
                                    me = new w,
                                    ve = C(W(pe)); - 1 != pe.b.indexOf("Firefox") ? (ge = "Firefox", me = C(U(pe.b, /Firefox\/([\d\w\.]+)/, 1))) : -1 != pe.b.indexOf("Mozilla") && (ge = "Mozilla");
                                var ye = C(U(pe.b, /rv:([^\)]+)/, 1));
                                de = new _(ge, me, "Gecko", ye, H(pe), ve, V(pe.g))
                            } else de = Ht;
                            fe = de
                        }
                        he = fe
                    }
                    ue = he
                }
                oe = ue
            }
            Gt = oe
        }
        Vt = Gt;
        var _e = new function() {
            var e = t;
            this.g = this.h = e, this.b = this.g.document
        };
        if (t.Typekit || (t.Typekit = {}), !t.Typekit.load) {
            var we = t.Typekit.config || {},
                xe = null;
            we.k && (xe = new m(we.k));
            var be = new At(xe, _e);
            t.Typekit.load = function() {
                be.load.apply(be, arguments)
            }, t.Typekit.addKit = function() {
                be.h.apply(be, arguments)
            }
        }
        var Te, Se, ke, Ce = t.Typekit.config || {};
        ke = new It(_e), ke.J = new function() {
            var t = Ce.ht,
                e = Ce.fi,
                i = Ce.a,
                n = Ce.kt,
                r = Ce.js,
                o = Ce.l;
            this.m = Ce.ps, this.h = t, this.b = e || [], this.g = i || null, this.u = n || null, this.version = r || null, this.app = o || null
        }, Se = new s, Se.M = !Ce.si, Se.L = !Ce.st, Se.I = !Ce.sa, Se.O = !Ce.sw, Se.N = !Ce.sb, ke.w = Se, Ce.ds && (ke.A = Ce.ds), Ce.f && (Te = new m(Ce.f), ke.u = Te), Ce.hn && (ke.C = Ce.hn);
        var Pe;
        if (Ce.fn)
            for (Pe = 0; Pe < Ce.fn.length; Pe += 2) ke.h.push(new pt(Ce.fn[Pe], Ce.fn[Pe + 1]));
        if (Ce.c)
            for (Pe = 0; Pe < Ce.c.length; Pe += 2) ke.m.push(new a);
        ke.H = Vt;
        var Oe;
        t: {
            var Ae, Ee = ke.H,
                De = new s,
                Re = ke.w || De;
            for (Ae in Ft) {
                var Me = Ft[Ae];
                if (qt[Me] && qt[Me](Ee, Re)) {
                    Oe = Me;
                    break t
                }
            }
            for (Ae in Ft)
                if (Me = Ft[Ae], qt[Me] && qt[Me](Ee, De)) {
                    Oe = "x";
                    break t
                } Oe = "k"
        }
        if (ke.g = Oe, t.Typekit.addKit(ke), t.WebFont) try {
            t.Typekit.load()
        } catch (Ne) {}
    }(this, document), window.Modernizr = function(t, e, i) {
        function n(t) {
            _.cssText = t
        }

        function r(t, e) {
            return n(x.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var r = t[n];
                if (!s(r, "-") && _[r] !== i) return "pfx" != e || r
            }
            return !1
        }

        function l(t, e, n) {
            for (var r in t) {
                var s = e[t[r]];
                if (s !== i) return n === !1 ? t[r] : o(s, "function") ? s.bind(n || e) : s
            }
            return !1
        }

        function c(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + T.join(n + " ") + n).split(" ");
            return o(e, "string") || o(e, "undefined") ? a(r, e) : (r = (t + " " + S.join(n + " ") + n).split(" "), l(r, e, i))
        }
        var u, h, f, d = "2.6.3",
            p = {},
            g = !0,
            m = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            _ = y.style,
            w = ":)",
            x = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            b = "Webkit Moz O ms",
            T = b.split(" "),
            S = b.toLowerCase().split(" "),
            k = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            P = [],
            O = P.slice,
            A = function(t, i, n, r) {
                var o, s, a, l, c = e.createElement("div"),
                    u = e.body,
                    h = u || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = r ? r[n] : v + (n + 1), c.appendChild(a);
                return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(h)), s = i(c, t), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), m.style.overflow = l), !!s
            },
            E = function(e) {
                var i = t.matchMedia || t.msMatchMedia;
                if (i) return i(e).matches;
                var n;
                return A("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                    n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), n
            },
            D = {}.hasOwnProperty;
        f = o(D, "undefined") || o(D.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return D.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = O.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var r = function() {};
                        r.prototype = e.prototype;
                        var o = new r,
                            s = e.apply(o, i.concat(O.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return e.apply(t, i.concat(O.call(arguments)))
                };
            return n
        }), C.backgroundsize = function() {
            return c("backgroundSize")
        }, C.borderradius = function() {
            return c("borderRadius")
        }, C.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, C.opacity = function() {
            return r("opacity:.55"), /^0.55$/.test(_.opacity)
        }, C.cssanimations = function() {
            return c("animationName")
        }, C.fontface = function() {
            var t;
            return A('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
                var r = e.getElementById("smodernizr"),
                    o = r.sheet || r.styleSheet,
                    s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0])
            }), t
        }, C.generatedcontent = function() {
            var t;
            return A(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, C.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(k.svg, "svg").createSVGRect
        };
        for (var R in C) f(C, R) && (h = R.toLowerCase(), p[h] = C[R](), P.push((p[h] ? "" : "no-") + h));
        return p.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) f(t, n) && p.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), p[t] !== i) return p;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), p[t] = e
                }
                return p
            }, n(""), y = u = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function r(t) {
                    var e = m[t[p]];
                    return e || (e = {}, g++, t[p] = g, m[g] = e), e
                }

                function o(t, i, n) {
                    if (i || (i = e), u) return i.createElement(t);
                    n || (n = r(i));
                    var o;
                    return o = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), o.canHaveChildren && !f.test(t) ? n.frag.appendChild(o) : o
                }

                function s(t, i) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    i = i || r(t);
                    for (var o = i.frag.cloneNode(), s = 0, a = n(), l = a.length; s < l; s++) o.createElement(a[s]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return v.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = r(t);
                    return v.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || a(t, n), t
                }
                var c, u, h = t.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    g = 0,
                    m = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        c = !0, u = !0
                    }
                }();
                var v = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: s
                };
                t.html5 = v, l(e)
            }(this, e), p._version = d, p._prefixes = x, p._domPrefixes = S, p._cssomPrefixes = T, p.mq = E, p.testProp = function(t) {
                return a([t])
            }, p.testAllProps = c, p.testStyles = A, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + P.join(" ") : ""), p
    }(this, this.document),
    function(t, e, i) {
        function n(t) {
            return "[object Function]" == m.call(t)
        }

        function r(t) {
            return "string" == typeof t
        }

        function o() {}

        function s(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = v.shift();
            y = 1, t ? t.t ? p(function() {
                ("c" == t.t ? f.injectCss : f.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, i, n, r, o, l, c) {
            function u(e) {
                if (!d && s(h.readyState) && (_.r = d = 1, !y && a(), h.onload = h.onreadystatechange = null, e)) {
                    "img" != t && p(function() {
                        x.removeChild(h)
                    }, 50);
                    for (var n in C[i]) C[i].hasOwnProperty(n) && C[i][n].onload()
                }
            }
            var c = c || f.errorTimeout,
                h = e.createElement(t),
                d = 0,
                m = 0,
                _ = {
                    t: n,
                    s: i,
                    e: o,
                    a: l,
                    x: c
                };
            1 === C[i] && (m = 1, C[i] = []), "object" == t ? h.data = i : (h.src = i, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                u.call(this, m)
            }, v.splice(r, 0, _), "img" != t && (m || 2 === C[i] ? (x.insertBefore(h, w ? null : g), p(u, c)) : C[i].push(h))
        }

        function c(t, e, i, n, o) {
            return y = 0, e = e || "j", r(t) ? l("c" == e ? T : b, t, e, this.i++, i, n, o) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
        }

        function u() {
            var t = f;
            return t.loader = {
                load: c,
                i: 0
            }, t
        }
        var h, f, d = e.documentElement,
            p = t.setTimeout,
            g = e.getElementsByTagName("script")[0],
            m = {}.toString,
            v = [],
            y = 0,
            _ = "MozAppearance" in d.style,
            w = _ && !!e.createRange().compareNode,
            x = w ? d : g.parentNode,
            d = t.opera && "[object Opera]" == m.call(t.opera),
            d = !!e.attachEvent && !d,
            b = _ ? "object" : d ? "script" : "img",
            T = d ? "script" : b,
            S = Array.isArray || function(t) {
                return "[object Array]" == m.call(t)
            },
            k = [],
            C = {},
            P = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        f = function(t) {
            function e(t) {
                var e, i, n, t = t.split("!"),
                    r = k.length,
                    o = t.pop(),
                    s = t.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: t
                    };
                for (i = 0; i < s; i++) n = t[i].split("="), (e = P[n.shift()]) && (o = e(o, n));
                for (i = 0; i < r; i++) o = k[i](o);
                return o
            }

            function s(t, r, o, s, a) {
                var l = e(t),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = n(r) ? r : r[t] || r[s] || r[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, r, o, s, a) : (C[l.url] ? l.noexec = !0 : C[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(r) || n(c)) && o.load(function() {
                    u(), r && r(l.origUrl, a, s), c && c(l.origUrl, a, s), C[l.url] = 2
                })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (r(t)) i || (h = function() {
                            var t = [].slice.call(arguments);
                            f.apply(this, t), d()
                        }), s(t, h, e, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!i && !--a && (n(h) ? h = function() {
                                var t = [].slice.call(arguments);
                                f.apply(this, t), d()
                            } : h[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), d()
                                }
                            }(f[l])), s(t[l], h, e, l, c))
                    } else !i && d()
                }
                var a, l, c = !!t.test,
                    u = t.load || t.both,
                    h = t.callback || o,
                    f = h,
                    d = t.complete || o;
                i(c ? t.yep : t.nope, !!u), u && i(u)
            }
            var l, c, h = this.yepnope.loader;
            if (r(t)) s(t, 0, h, 0);
            else if (S(t))
                for (l = 0; l < t.length; l++) c = t[l], r(c) ? s(c, 0, h, 0) : S(c) ? f(c) : Object(c) === c && a(c, h);
            else Object(t) === t && a(t, h)
        }, f.addPrefix = function(t, e) {
            P[t] = e
        }, f.addFilter = function(t) {
            k.push(t)
        }, f.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() {
            e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
        }, 0)), t.yepnope = u(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, r, l, c) {
            var u, h, d = e.createElement("script"),
                r = r || f.errorTimeout;
            d.src = t;
            for (h in n) d.setAttribute(h, n[h]);
            i = c ? a : i || o, d.onreadystatechange = d.onload = function() {
                !u && s(d.readyState) && (u = 1, i(), d.onload = d.onreadystatechange = null)
            }, p(function() {
                u || (u = 1, i(1))
            }, r), l ? d.onload() : g.parentNode.insertBefore(d, g)
        }, t.yepnope.injectCss = function(t, i, n, r, s, l) {
            var c, r = e.createElement("link"),
                i = l ? a : i || o;
            r.href = t, r.rel = "stylesheet", r.type = "text/css";
            for (c in n) r.setAttribute(c, n[c]);
            s || (g.parentNode.insertBefore(r, g), p(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, ! function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e()
    }(this, function(t, e, i) {
        return function() {
            "use strict";
            var t, e, i;
            this.ScrollReveal = function() {
                function n(i) {
                    return "undefined" == typeof this || Object.getPrototypeOf(this) !== n.prototype ? new n(i) : (t = this, t.tools = new e, t.isSupported() ? (t.tools.extend(t.defaults, i || {}), r(t.defaults), t.store = {
                        elements: {},
                        containers: []
                    }, t.sequences = {}, t.history = [], t.uid = 0, t.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), t)
                }

                function r(e) {
                    var i = e.container;
                    return i && "string" == typeof i ? e.container = window.document.querySelector(i) : (i && !t.tools.isNode(i) && (console.log("ScrollReveal: Invalid container provided, using <html> instead."), e.container = null), null == i && (e.container = window.document.documentElement), e.container)
                }

                function o() {
                    return ++t.uid
                }

                function s(e, i) {
                    e.config ? e.config = t.tools.extendClone(e.config, i) : e.config = t.tools.extendClone(t.defaults, i), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X", "top" !== e.config.origin && "left" !== e.config.origin || (e.config.distance = "-" + e.config.distance)
                }

                function a(t) {
                    var e = window.getComputedStyle(t.domEl);
                    t.styles || (t.styles = {
                        transition: {},
                        transform: {},
                        computed: {}
                    }, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = e.opacity, e.transition && "all 0s ease 0s" != e.transition ? t.styles.computed.transition = e.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = l(t, 0), t.styles.transition.delayed = l(t, t.config.delay), t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", c(t), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", c(t)
                }

                function l(t, e) {
                    var i = t.config;
                    return "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; "
                }

                function c(t) {
                    var e = t.config,
                        i = t.styles.transform;
                    parseInt(e.distance) && (i.initial += " translate" + e.axis + "(" + e.distance + ")", i.target += " translate" + e.axis + "(0)"), e.scale && (i.initial += " scale(" + e.scale + ")", i.target += " scale(1)"), e.rotate.x && (i.initial += " rotateX(" + e.rotate.x + "deg)", i.target += " rotateX(0)"), e.rotate.y && (i.initial += " rotateY(" + e.rotate.y + "deg)", i.target += " rotateY(0)"), e.rotate.z && (i.initial += " rotateZ(" + e.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + e.opacity + ";", i.target += "; opacity: " + t.styles.computed.opacity + ";"
                }

                function u(e) {
                    var i = e.config.container;
                    i && -1 == t.store.containers.indexOf(i) && t.store.containers.push(e.config.container), t.store.elements[e.id] = e
                }

                function h(e, i, n) {
                    var r = {
                        selector: e,
                        config: i,
                        interval: n
                    };
                    t.history.push(r)
                }

                function f() {
                    if (t.isSupported()) {
                        g();
                        for (var e = 0; e < t.store.containers.length; e++) t.store.containers[e].addEventListener("scroll", d), t.store.containers[e].addEventListener("resize", d);
                        t.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), t.initialized = !0)
                    }
                    return t
                }

                function d() {
                    i(g)
                }

                function p() {
                    var e, i, n, r;
                    t.tools.forOwn(t.sequences, function(o) {
                        r = t.sequences[o], e = !1;
                        for (var s = 0; s < r.elemIds.length; s++) n = r.elemIds[s], i = t.store.elements[n], S(i) && !e && (e = !0);
                        r.active = e
                    })
                }

                function g() {
                    var e, i;
                    p(), t.tools.forOwn(t.store.elements, function(n) {
                        i = t.store.elements[n], e = _(i), y(i) ? (e ? i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.delayed) : i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.instant), v("reveal", i, e), i.revealing = !0, i.seen = !0, i.sequence && m(i, e)) : w(i) && (i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.initial + i.styles.transition.instant), v("reset", i), i.revealing = !1)
                    })
                }

                function m(e, i) {
                    var n = 0,
                        r = 0,
                        o = t.sequences[e.sequence.id];
                    o.blocked = !0, i && "onload" == e.config.useDelay && (r = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
                        started: new Date
                    }, e.sequence.timer.clock = window.setTimeout(function() {
                        o.blocked = !1, e.sequence.timer = null, d()
                    }, Math.abs(o.interval) + r - n)
                }

                function v(t, e, i) {
                    var n = 0,
                        r = 0,
                        o = "after";
                    switch (t) {
                        case "reveal":
                            r = e.config.duration, i && (r += e.config.delay), o += "Reveal";
                            break;
                        case "reset":
                            r = e.config.duration, o += "Reset"
                    }
                    e.timer && (n = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {
                        started: new Date
                    }, e.timer.clock = window.setTimeout(function() {
                        e.config[o](e.domEl), e.timer = null
                    }, r - n)
                }

                function y(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return i.active && !i.blocked && !e.revealing && !e.disabled
                    }
                    return S(e) && !e.revealing && !e.disabled
                }

                function _(e) {
                    var i = e.config.useDelay;
                    return "always" === i || "onload" === i && !t.initialized || "once" === i && !e.seen
                }

                function w(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return !i.active && e.config.reset && e.revealing && !e.disabled
                    }
                    return !S(e) && e.config.reset && e.revealing && !e.disabled
                }

                function x(t) {
                    return {
                        width: t.clientWidth,
                        height: t.clientHeight
                    }
                }

                function b(t) {
                    if (t && t !== window.document.documentElement) {
                        var e = T(t);
                        return {
                            x: t.scrollLeft + e.left,
                            y: t.scrollTop + e.top
                        }
                    }
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                }

                function T(t) {
                    var e = 0,
                        i = 0,
                        n = t.offsetHeight,
                        r = t.offsetWidth;
                    do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
                    return {
                        top: e,
                        left: i,
                        height: n,
                        width: r
                    }
                }

                function S(t) {
                    function e() {
                        var e = c + a * s,
                            i = u + l * s,
                            n = h - a * s,
                            d = f - l * s,
                            p = o.y + t.config.viewOffset.top,
                            g = o.x + t.config.viewOffset.left,
                            m = o.y - t.config.viewOffset.bottom + r.height,
                            v = o.x - t.config.viewOffset.right + r.width;
                        return m > e && n > p && i > g && v > d
                    }

                    function i() {
                        return "fixed" === window.getComputedStyle(t.domEl).position
                    }
                    var n = T(t.domEl),
                        r = x(t.config.container),
                        o = b(t.config.container),
                        s = t.config.viewFactor,
                        a = n.height,
                        l = n.width,
                        c = n.top,
                        u = n.left,
                        h = c + a,
                        f = u + l;
                    return e() || i()
                }
                return n.prototype.defaults = {
                    origin: "bottom",
                    distance: "20px",
                    duration: 500,
                    delay: 0,
                    rotate: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    opacity: 0,
                    scale: .9,
                    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
                    container: null,
                    mobile: !0,
                    reset: !1,
                    useDelay: "always",
                    viewFactor: .2,
                    viewOffset: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    afterReveal: function(t) {},
                    afterReset: function(t) {}
                }, n.prototype.isSupported = function() {
                    var t = document.documentElement.style;
                    return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t
                }, n.prototype.reveal = function(e, i, n, l) {
                    var c, d, p, g, m, v;
                    if (c = i && i.container ? r(i) : t.defaults.container, d = t.tools.isNode(e) ? [e] : Array.prototype.slice.call(c.querySelectorAll(e)), !d.length) return console.log('ScrollReveal: reveal on "' + e + '"" failed, no elements found.'), t;
                    i && "number" == typeof i && (n = i, i = {}), n && "number" == typeof n && (v = o(), m = t.sequences[v] = {
                        id: v,
                        interval: n,
                        elemIds: [],
                        active: !1
                    });
                    for (var y = 0; y < d.length; y++) g = d[y].getAttribute("data-sr-id"), g ? p = t.store.elements[g] : (p = {
                        id: o(),
                        domEl: d[y],
                        seen: !1,
                        revealing: !1
                    }, p.domEl.setAttribute("data-sr-id", p.id)), m && (p.sequence = {
                        id: m.id,
                        index: m.elemIds.length
                    }, m.elemIds.push(p.id)), s(p, i || {}), a(p), u(p), t.tools.isMobile() && !p.config.mobile || !t.isSupported() ? (p.domEl.setAttribute("style", p.styles.inline), p.disabled = !0) : p.revealing || p.domEl.setAttribute("style", p.styles.inline + p.styles.transform.initial);
                    return !l && t.isSupported() && (h(e, i), t.initTimeout && window.clearTimeout(t.initTimeout), t.initTimeout = window.setTimeout(f, 0)), t
                }, n.prototype.sync = function() {
                    if (t.history.length && t.isSupported()) {
                        for (var e = 0; e < t.history.length; e++) {
                            var i = t.history[e];
                            t.reveal(i.selector, i.config, i.interval, !0)
                        }
                        f()
                    } else console.log("ScrollReveal: sync failed, no reveals found.");
                    return t
                }, n
            }(), e = function() {
                function t() {}
                return t.prototype.isObject = function(t) {
                    return null !== t && "object" == typeof t && t.constructor == Object
                }, t.prototype.isNode = function(t) {
                    return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                }, t.prototype.forOwn = function(t, e) {
                    if (!this.isObject(t)) throw new TypeError('Expected "object", but received "' + typeof t + '".');
                    for (var i in t) t.hasOwnProperty(i) && e(i)
                }, t.prototype.extend = function(t, e) {
                    return this.forOwn(e, function(i) {
                        this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i]
                    }.bind(this)), t
                }, t.prototype.extendClone = function(t, e) {
                    return this.extend(this.extend({}, t), e)
                }, t.prototype.isMobile = function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }, t
            }(), i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
        }.call(this), this.ScrollReveal
    }), ! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = ot.type(t);
            return "function" !== i && !ot.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t, e, i) {
            if (ot.isFunction(e)) return ot.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (gt.test(e)) return ot.filter(e, t, i);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function(t) {
                return J.call(e, t) > -1 !== i
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = {};
            return ot.each(t.match(xt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function s() {
            G.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
        }

        function a() {
            this.expando = ot.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(Ot, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Pt.test(i) ? ot.parseJSON(i) : i)
                    } catch (r) {}
                    Ct.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c(t, e, i, n) {
            var r, o = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return ot.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                u = (ot.cssNumber[e] || "px" !== c && +l) && Et.exec(ot.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], i = i || [], u = +l || 1;
                do o = o || ".5", u /= o, ot.style(t, e, u + c); while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
        }

        function u(t, e) {
            var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], i) : i
        }

        function h(t, e) {
            for (var i = 0, n = t.length; n > i; i++) kt.set(t[i], "globalEval", !e || kt.get(e[i], "globalEval"))
        }

        function f(t, e, i, n, r) {
            for (var o, s, a, l, c, f, d = e.createDocumentFragment(), p = [], g = 0, m = t.length; m > g; g++)
                if (o = t[g], o || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (Nt.exec(o) || ["", ""])[1].toLowerCase(), l = It[a] || It._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], f = l[0]; f--;) s = s.lastChild;
                ot.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
            } else p.push(e.createTextNode(o));
            for (d.textContent = "", g = 0; o = p[g++];)
                if (n && ot.inArray(o, n) > -1) r && r.push(o);
                else if (c = ot.contains(o.ownerDocument, o), s = u(d.appendChild(o), "script"), c && h(s), i)
                for (f = 0; o = s[f++];) Lt.test(o.type || "") && i.push(o);
            return d
        }

        function d() {
            return !0
        }

        function p() {
            return !1
        }

        function g() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function m(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) m(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = p;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) {
                return ot().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function() {
                ot.event.add(this, e, r, n, i)
            })
        }

        function v(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function _(t) {
            var e = Wt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            var i, n, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (kt.hasData(t) && (o = kt.access(t), s = kt.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                        for (i = 0, n = c[r].length; n > i; i++) ot.event.add(e, r, c[r][i])
                }
                Ct.hasData(t) && (a = Ct.access(t), l = ot.extend({}, a), Ct.set(e, l))
            }
        }

        function x(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Mt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function b(t, e, i, n) {
            e = K.apply([], e);
            var r, o, s, a, l, c, h = 0,
                d = t.length,
                p = d - 1,
                g = e[0],
                m = ot.isFunction(g);
            if (m || d > 1 && "string" == typeof g && !nt.checkClone && Ht.test(g)) return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = g.call(this, r, o.html())), b(o, e, i, n)
            });
            if (d && (r = f(e, t[0].ownerDocument, !1, t, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
                for (s = ot.map(u(r, "script"), y), a = s.length; d > h; h++) l = r, h !== p && (l = ot.clone(l, !0, !0), a && ot.merge(s, u(l, "script"))), i.call(t[h], l, h);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, ot.map(s, _), h = 0; a > h; h++) l = s[h], Lt.test(l.type || "") && !kt.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Xt, "")))
            }
            return t
        }

        function T(t, e, i) {
            for (var n, r = e ? ot.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || ot.cleanData(u(n)), n.parentNode && (i && ot.contains(n.ownerDocument, n) && h(u(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function S(t, e) {
            var i = ot(e.createElement(t)).appendTo(e.body),
                n = ot.css(i[0], "display");
            return i.detach(), n
        }

        function k(t) {
            var e = G,
                i = Ut[t];
            return i || (i = S(t, e), "none" !== i && i || (Yt = (Yt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Yt[0].contentDocument, e.write(), e.close(), i = S(t, e), Yt.detach()), Ut[t] = i), i
        }

        function C(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || Qt(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), i && !nt.pixelMarginRight() && Gt.test(s) && Vt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function P(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function O(t) {
            if (t in ne) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
                if (t = ie[i] + e, t in ne) return t
        }

        function A(t, e, i) {
            var n = Et.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function E(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += ot.css(t, i + Dt[o], !0, r)), n ? ("content" === i && (s -= ot.css(t, "padding" + Dt[o], !0, r)), "margin" !== i && (s -= ot.css(t, "border" + Dt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Dt[o], !0, r), "padding" !== i && (s += ot.css(t, "border" + Dt[o] + "Width", !0, r)));
            return s
        }

        function D(e, i, n) {
            var r = !0,
                o = "width" === i ? e.offsetWidth : e.offsetHeight,
                s = Qt(e),
                a = "border-box" === ot.css(e, "boxSizing", !1, s);
            if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= o || null == o) {
                if (o = C(e, i, s), (0 > o || null == o) && (o = e.style[i]), Gt.test(o)) return o;
                r = a && (nt.boxSizingReliable() || o === e.style[i]), o = parseFloat(o) || 0
            }
            return o + E(e, i, n || (a ? "border" : "content"), r, s) + "px"
        }

        function R(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = kt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Rt(n) && (o[s] = kt.access(n, "olddisplay", k(n.nodeName)))) : (r = Rt(n), "none" === i && r || kt.set(n, "olddisplay", r ? i : ot.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function M(t, e, i, n, r) {
            return new M.prototype.init(t, e, i, n, r)
        }

        function N() {
            return t.setTimeout(function() {
                re = void 0
            }), re = ot.now()
        }

        function L(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Dt[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function I(t, e, i) {
            for (var n, r = (j.tweeners[e] || []).concat(j.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function z(t, e, i) {
            var n, r, o, s, a, l, c, u, h = this,
                f = {},
                d = t.style,
                p = t.nodeType && Rt(t),
                g = kt.get(t, "fxshow");
            i.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = ot.css(t, "display"), u = "none" === c ? kt.get(t, "olddisplay") || k(t.nodeName) : c, "inline" === u && "none" === ot.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", h.always(function() {
                d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n], se.exec(r)) {
                    if (delete e[n], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        p = !0
                    }
                    f[n] = g && g[n] || ot.style(t, n)
                } else c = void 0;
            if (ot.isEmptyObject(f)) "inline" === ("none" === c ? k(t.nodeName) : c) && (d.display = c);
            else {
                g ? "hidden" in g && (p = g.hidden) : g = kt.access(t, "fxshow", {}), o && (g.hidden = !p), p ? ot(t).show() : h.done(function() {
                    ot(t).hide()
                }), h.done(function() {
                    var e;
                    kt.remove(t, "fxshow");
                    for (e in f) ot.style(t, e, f[e])
                });
                for (n in f) s = I(p ? g[n] : 0, n, h), n in g || (g[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function F(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (n = ot.camelCase(i), r = e[n], o = t[i], ot.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = ot.cssHooks[n], s && "expand" in s) {
                    o = s.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = r)
                } else e[n] = r
        }

        function j(t, e, i) {
            var n, r, o = 0,
                s = j.prefilters.length,
                a = ot.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = re || N(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {},
                        easing: ot.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: re || N(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = ot.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (F(u, c.opts.specialEasing); s > o; o++)
                if (n = j.prefilters[o].call(c, t, u, c.opts)) return ot.isFunction(n.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(n.stop, n)), n;
            return ot.map(u, I, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function $(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(xt) || [];
                if (ot.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function q(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, ot.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                s = t === Ce;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function H(t, e) {
            var i, n, r = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function W(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in a)
                    if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    } if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function X(t, e, i, n) {
            var r, o, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s)
                    for (r in c)
                        if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        } if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function Y(t, e, i, n) {
            var r;
            if (ot.isArray(e)) ot.each(e, function(e, r) {
                i || Ee.test(t) ? n(t, r) : Y(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== ot.type(e)) n(t, e);
            else
                for (r in e) Y(t + "[" + r + "]", e[r], i, n)
        }

        function U(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var V = [],
            G = t.document,
            Q = V.slice,
            K = V.concat,
            Z = V.push,
            J = V.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            rt = "2.2.2",
            ot = function(t, e) {
                return new ot.fn.init(t, e)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ct = function(t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: rt,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return ot.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: Z,
            sort: V.sort,
            splice: V.splice
        }, ot.extend = ot.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], n = t[e], s !== n && (c && n && (ot.isPlainObject(n) || (r = ot.isArray(n))) ? (r ? (r = !1, o = i && ot.isArray(i) ? i : []) : o = i && ot.isPlainObject(i) ? i : {}, s[e] = ot.extend(c, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, ot.extend({
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || it.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(at, "ms-").replace(lt, ct)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, r = 0;
                if (i(t))
                    for (n = t.length; n > r && e.call(t[r], r, t[r]) !== !1; r++);
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ot.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : J.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, n) {
                var r, o, s = 0,
                    a = [];
                if (i(t))
                    for (r = t.length; r > s; s++) o = e(t[s], s, n), null != o && a.push(o);
                else
                    for (s in t) o = e(t[s], s, n), null != o && a.push(o);
                return K.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), ot.isFunction(t) ? (n = Q.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(Q.call(arguments)))
                }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
            },
            now: Date.now,
            support: nt
        }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = V[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var ut = function(t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, c, h, d, p = e && e.ownerDocument,
                    g = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
                if (!n && ((e ? e.ownerDocument || e : B) !== R && D(e), e = e || R, N)) {
                    if (11 !== g && (c = vt.exec(t)))
                        if (r = c[1]) {
                            if (9 === g) {
                                if (!(s = e.getElementById(r))) return i;
                                if (s.id === r) return i.push(s), i
                            } else if (p && (s = p.getElementById(r)) && F(e, s) && s.id === r) return i.push(s), i
                        } else {
                            if (c[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i
                        } if (x.qsa && !X[t + " "] && (!L || !L.test(t))) {
                        if (1 !== g) p = e, d = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(_t, "\\$&") : e.setAttribute("id", a = j), h = k(t), o = h.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + f(h[o]);
                            d = h.join(","), p = yt.test(t) && u(e.parentNode) || e
                        }
                        if (d) try {
                            return Z.apply(i, p.querySelectorAll(d)), i
                        } catch (m) {} finally {
                            a === j && e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(at, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > b.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[j] = !0, t
            }

            function r(t) {
                var e = R.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
            }

            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function f(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function d(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = q++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, o)
                } : function(e, i, s) {
                    var a, l, c, u = [$, o];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (c = e[j] || (e[j] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === $ && a[1] === o) return u[2] = a[2];
                                if (l[n] = u, u[2] = t(e, i, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, i, n) {
                for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                return n
            }

            function m(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
                return s
            }

            function v(t, e, i, r, o, s) {
                return r && !r[j] && (r = v(r)), o && !o[j] && (o = v(o, s)), n(function(n, s, a, l) {
                    var c, u, h, f = [],
                        d = [],
                        p = s.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : m(v, f, t, a, l),
                        _ = i ? o || (n ? t : p || r) ? [] : s : y;
                    if (i && i(y, _, a, l), r)
                        for (c = m(_, d), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[d[u]] = !(y[d[u]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = _.length; u--;)(h = _[u]) && c.push(y[u] = h);
                                o(null, _ = [], c, l)
                            }
                            for (u = _.length; u--;)(h = _[u]) && (c = o ? tt(n, h) : f[u]) > -1 && (n[c] = !(s[c] = h))
                        }
                    } else _ = m(_ === s ? _.splice(p, _.length) : _), o ? o(null, s, _, l) : Z.apply(s, _)
                })
            }

            function y(t) {
                for (var e, i, n, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), c = d(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), u = [function(t, i, n) {
                        var r = !o && (n || i !== O) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = b.relative[t[a].type]) u = [d(p(u), i)];
                    else {
                        if (i = b.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                            for (n = ++a; r > n && !b.relative[t[n].type]; n++);
                            return v(a > 1 && p(u), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && f(t))
                        }
                        u.push(i)
                    } return p(u)
            }

            function _(t, i) {
                var r = i.length > 0,
                    o = t.length > 0,
                    s = function(n, s, a, l, c) {
                        var u, h, f, d = 0,
                            p = "0",
                            g = n && [],
                            v = [],
                            y = O,
                            _ = n || o && b.find.TAG("*", c),
                            w = $ += null == y ? 1 : Math.random() || .1,
                            x = _.length;
                        for (c && (O = s === R || s || c); p !== x && null != (u = _[p]); p++) {
                            if (o && u) {
                                for (h = 0, s || u.ownerDocument === R || (D(u), a = !N); f = t[h++];)
                                    if (f(u, s || R, a)) {
                                        l.push(u);
                                        break
                                    } c && ($ = w)
                            }
                            r && ((u = !f && u) && d--, n && g.push(u))
                        }
                        if (d += p, r && p !== d) {
                            for (h = 0; f = i[h++];) f(g, v, s, a);
                            if (n) {
                                if (d > 0)
                                    for (; p--;) g[p] || v[p] || (v[p] = Q.call(l));
                                v = m(v)
                            }
                            Z.apply(l, v), c && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && ($ = w, O = y), g
                    };
                return r ? n(s) : s
            }
            var w, x, b, T, S, k, C, P, O, A, E, D, R, M, N, L, I, z, F, j = "sizzle" + 1 * new Date,
                B = t.document,
                $ = 0,
                q = 0,
                H = i(),
                W = i(),
                X = i(),
                Y = function(t, e) {
                    return t === e && (E = !0), 0
                },
                U = 1 << 31,
                V = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                K = G.push,
                Z = G.push,
                J = G.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ht = new RegExp(ot),
                ft = new RegExp("^" + nt + "$"),
                dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                _t = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                bt = function() {
                    D()
                };
            try {
                Z.apply(G = J.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
            } catch (Tt) {
                Z = {
                    apply: G.length ? function(t, e) {
                        K.apply(t, J.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            x = e.support = {}, S = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : B;
                return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, M = R.documentElement, N = !S(R), (i = R.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", bt, !1) : i.attachEvent && i.attachEvent("onunload", bt)), x.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function(t) {
                    return t.appendChild(R.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = mt.test(R.getElementsByClassName), x.getById = r(function(t) {
                    return M.appendChild(t).id = j, !R.getElementsByName || !R.getElementsByName(j).length
                }), x.getById ? (b.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, b.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete b.find.ID, b.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), b.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, b.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && N ? e.getElementsByClassName(t) : void 0
                }, I = [], L = [], (x.qsa = mt.test(R.querySelectorAll)) && (r(function(t) {
                    M.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || L.push(".#.+[+~]")
                }), r(function(t) {
                    var e = R.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = mt.test(z = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                    x.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), I.push("!=", ot)
                }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), e = mt.test(M.compareDocumentPosition), F = e || mt.test(M.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Y = e ? function(t, e) {
                    if (t === e) return E = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === R || t.ownerDocument === B && F(B, t) ? -1 : e === R || e.ownerDocument === B && F(B, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return E = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !o) return t === R ? -1 : e === R ? 1 : r ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === o) return s(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? s(a[n], l[n]) : a[n] === B ? -1 : l[n] === B ? 1 : 0
                }, R) : R
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== R && D(t), i = i.replace(ut, "='$1']"), x.matchesSelector && N && !X[i + " "] && (!I || !I.test(i)) && (!L || !L.test(i))) try {
                    var n = z.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return e(i, R, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== R && D(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== R && D(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && V.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : x.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (E = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(Y), E) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
            }, T = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += T(e);
                return i
            }, b = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, u, h, f, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (f = m, h = f[j] || (f[j] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), c = u[t] || [], d = c[0] === $ && c[1], _ = d && c[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (_ = d = 0) || p.pop();)
                                        if (1 === f.nodeType && ++_ && f === e) {
                                            u[t] = [$, d, _];
                                            break
                                        }
                                } else if (y && (f = e, h = f[j] || (f[j] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), c = u[t] || [], d = c[0] === $ && c[1], _ = d), _ === !1)
                                    for (;
                                        (f = ++d && f && f[g] || (_ = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && (h = f[j] || (f[j] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), u[t] = [$, _]), f !== e)););
                                return _ -= r, _ === n || _ % n === 0 && _ / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[j] ? o(i) : o.length > 1 ? (r = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = o(t, i), s = r.length; s--;) n = tt(t, r[s]), t[n] = !(e[n] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = C(t.replace(at, "$1"));
                        return r[j] ? n(function(t, e, i, n) {
                            for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(wt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === M
                    },
                    focus: function(t) {
                        return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, b.pseudos.nth = b.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[w] = l(w);
            return h.prototype = b.filters = b.pseudos, b.setFilters = new h, k = e.tokenize = function(t, i) {
                var n, r, o, s, a, l, c, u = W[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], c = b.preFilter; a;) {
                    n && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (s in b.filter) !(r = dt[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
            }, C = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = X[t + " "];
                if (!o) {
                    for (e || (e = k(t)), i = e.length; i--;) o = y(e[i]), o[j] ? n.push(o) : r.push(o);
                    o = X(t, _(r, n)), o.selector = t
                }
                return o
            }, P = e.select = function(t, e, i, n) {
                var r, o, s, a, l, c = "function" == typeof t && t,
                    h = !n && k(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && N && b.relative[o[1].type]) {
                        if (e = (b.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                        if ((l = b.find[a]) && (n = l(s.matches[0].replace(wt, xt), yt.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = n.length && f(o), !t) return Z.apply(i, n), i;
                            break
                        }
                }
                return (c || C(t, h))(n, e, !N, i, !e || yt.test(t) && u(e.parentNode) || e), i
            }, x.sortStable = j.split("").sort(Y).join("") === j, x.detectDuplicates = !!E, D(), x.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(R.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        ot.find = ut, ot.expr = ut.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ut.uniqueSort, ot.text = ut.getText, ot.isXMLDoc = ut.isXML, ot.contains = ut.contains;
        var ht = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && ot(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            ft = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            dt = ot.expr.match.needsContext,
            pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [n] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (ot.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) ot.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && dt.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = ot.fn.init = function(t, e, i) {
                var n, r;
                if (!t) return this;
                if (i = i || mt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), pt.test(n[1]) && ot.isPlainObject(e))
                            for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        yt.prototype = ot.fn, mt = ot(G);
        var _t = /^(?:parents|prev(?:Until|All))/,
            wt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            has: function(t) {
                var e = ot(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (ot.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], s = dt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ht(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return ht(t, "parentNode", i)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return ht(t, "nextSibling")
            },
            prevAll: function(t) {
                return ht(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return ht(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return ht(t, "previousSibling", i)
            },
            siblings: function(t) {
                return ft((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ft(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || ot.merge([], t.childNodes)
            }
        }, function(t, e) {
            ot.fn[t] = function(i, n) {
                var r = ot.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = ot.filter(n, r)), this.length > 1 && (wt[t] || ot.uniqueSort(r), _t.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var xt = /\S+/g;
        ot.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : ot.extend({}, t);
            var e, i, n, r, s = [],
                a = [],
                l = -1,
                c = function() {
                    for (r = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (i && !e && (l = s.length - 1, a.push(i)), function n(e) {
                            ot.each(e, function(e, i) {
                                ot.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== ot.type(i) && n(i)
                            })
                        }(arguments), i && !e && c()), this
                    },
                    remove: function() {
                        return ot.each(arguments, function(t, e) {
                            for (var i;
                                (i = ot.inArray(e, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? ot.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], i || (s = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, ot.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ot.Deferred(function(i) {
                                ot.each(e, function(e, o) {
                                    var s = ot.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ot.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, ot.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    n[o[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    o = Q.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    c = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(c(r, i, e)).done(c(r, n, o)).fail(l.reject) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var bt;
        ot.fn.ready = function(t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (bt.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
            }
        }), ot.ready.promise = function(e) {
            return bt || (bt = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), bt.promise(e)
        }, ot.ready.promise();
        var Tt = function(t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === ot.type(i)) {
                    r = !0;
                    for (a in i) Tt(t, e, a, i[a], !0, o, s)
                } else if (void 0 !== n && (r = !0, ot.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(ot(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
            },
            St = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!St(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, ot.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        ot.isArray(e) ? n = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? n = [e, r] : (n = r, n = n in o ? [n] : n.match(xt) || [])), i = n.length;
                        for (; i--;) delete o[n[i]]
                    }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ot.isEmptyObject(e)
            }
        };
        var kt = new a,
            Ct = new a,
            Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ot = /[A-Z]/g;
        ot.extend({
            hasData: function(t) {
                return Ct.hasData(t) || kt.hasData(t)
            },
            data: function(t, e, i) {
                return Ct.access(t, e, i)
            },
            removeData: function(t, e) {
                Ct.remove(t, e)
            },
            _data: function(t, e, i) {
                return kt.access(t, e, i)
            },
            _removeData: function(t, e) {
                kt.remove(t, e)
            }
        }), ot.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Ct.get(o), 1 === o.nodeType && !kt.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = ot.camelCase(n.slice(5)), l(o, n, r[n])));
                        kt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Ct.set(this, t)
                }) : Tt(this, function(e) {
                    var i, n;
                    if (o && void 0 === e) {
                        if (i = Ct.get(o, t) || Ct.get(o, t.replace(Ot, "-$&").toLowerCase()), void 0 !== i) return i;
                        if (n = ot.camelCase(t), i = Ct.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
                    } else n = ot.camelCase(t), this.each(function() {
                        var i = Ct.get(this, n);
                        Ct.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Ct.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Ct.remove(this, t)
                })
            }
        }), ot.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = kt.get(t, e), i && (!n || ot.isArray(i) ? n = kt.access(t, e, ot.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = ot.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = ot._queueHooks(t, e),
                    s = function() {
                        ot.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return kt.get(t, i) || kt.access(t, i, {
                    empty: ot.Callbacks("once memory").add(function() {
                        kt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), ot.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = ot.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = kt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Et = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
            Dt = ["Top", "Right", "Bottom", "Left"],
            Rt = function(t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            Mt = /^(?:checkbox|radio)$/i,
            Nt = /<([\w:-]+)/,
            Lt = /^$|\/(?:java|ecma)script/i,
            It = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td;
        var zt = /<|&#?\w+;/;
        ! function() {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                i = G.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ft = /^key/,
            jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Bt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, d, p, g, m = kt.get(t);
                if (m)
                    for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                            return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(xt) || [""], c = e.length; c--;) a = Bt.exec(e[c]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (h = ot.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = ot.event.special[d] || {}, u = ot.extend({
                        type: d,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && ot.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = l[d]) || (f = l[d] = [], f.delegateCount = 0, h.setup && h.setup.call(t, n, p, s) !== !1 || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), ot.event.global[d] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, d, p, g, m = kt.hasData(t) && kt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(xt) || [""], c = e.length; c--;)
                        if (a = Bt.exec(e[c]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (h = ot.event.special[d] || {}, d = (n ? h.delegateType : h.bindType) || d, f = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
                            s && !f.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || ot.removeEvent(t, d, m.handle), delete l[d])
                        } else
                            for (d in l) ot.event.remove(t, d + e[c], i, n, !0);
                    ot.isEmptyObject(l) && kt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = ot.event.fix(t);
                var e, i, n, r, o, s = [],
                    a = Q.call(arguments),
                    l = (kt.get(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), n[r] && n.push(o);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        } return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[ot.expando]) return t;
                var e, i, n, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = jt.test(r) ? this.mouseHooks : Ft.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    }
                }
            }
        }, ot.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, ot.Event = function(t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            constructor: ot.Event,
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === n || ot.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), ot.fn.extend({
            on: function(t, e, i, n) {
                return m(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return m(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ot(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    ot.event.remove(this, t, i, e)
                })
            }
        });
        var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            qt = /<script|<style|<link/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Wt = /^true\/(.*)/,
            Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
            htmlPrefilter: function(t) {
                return t.replace($t, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = ot.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (s = u(a), o = u(t), n = 0, r = o.length; r > n; n++) x(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || u(t), s = s || u(a), n = 0, r = o.length; r > n; n++) w(o[n], s[n]);
                    else w(t, a);
                return s = u(a, "script"), s.length > 0 && h(s, !l && u(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = ot.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (St(i)) {
                        if (e = i[kt.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, e.handle);
                            i[kt.expando] = void 0
                        }
                        i[Ct.expando] && (i[Ct.expando] = void 0)
                    }
            }
        }), ot.fn.extend({
            domManip: b,
            detach: function(t) {
                return T(this, t, !0)
            },
            remove: function(t) {
                return T(this, t)
            },
            text: function(t) {
                return Tt(this, function(t) {
                    return void 0 === t ? ot.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return b(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return b(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return b(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return b(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(u(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ot.clone(this, t, e)
                })
            },
            html: function(t) {
                return Tt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !qt.test(t) && !It[(Nt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ot.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (ot.cleanData(u(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return b(this, arguments, function(e) {
                    var i = this.parentNode;
                    ot.inArray(this, t) < 0 && (ot.cleanData(u(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ot.fn[t] = function(t) {
                for (var i, n = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), ot(r[s])[e](i), Z.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Yt, Ut = {
                HTML: "block",
                BODY: "block"
            },
            Vt = /^margin/,
            Gt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
            Qt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Kt = function(t, e, i, n) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = i.apply(t, n || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            Zt = G.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(s);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Zt.removeChild(s)
            }
            var i, n, r, o, s = G.createElement("div"),
                a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(nt, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), r
                },
                reliableMarginLeft: function() {
                    return null == n && e(), o
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(G.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Zt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Zt.removeChild(s), a.removeChild(i), e
                }
            }))
        }();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ie = ["Webkit", "O", "Moz", "ms"],
            ne = G.createElement("div").style;
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = C(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = ot.camelCase(e),
                        l = t.style;
                    return e = ot.cssProps[a] || (ot.cssProps[a] = O(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = Et.exec(i)) && r[1] && (i = c(t, e, r), o = "number"), void(null != i && i === i && ("number" === o && (i += r && r[3] || (ot.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = O(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = C(t, e, n)), "normal" === r && e in ee && (r = ee[e]), "" === i || i ? (o = parseFloat(r), i === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function(t, e) {
            ot.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function() {
                        return D(t, e, n)
                    }) : D(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r, o = n && Qt(t),
                        s = n && E(t, e, n, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                    return s && (r = Et.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = ot.css(t, e)), A(t, i, s)
                }
            }
        }), ot.cssHooks.marginLeft = P(nt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), ot.cssHooks.marginRight = P(nt.reliableMarginRight, function(t, e) {
            return e ? Kt(t, {
                display: "inline-block"
            }, C, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ot.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Dt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, Vt.test(t) || (ot.cssHooks[t + e].set = A)
        }), ot.fn.extend({
            css: function(t, e) {
                return Tt(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (ot.isArray(e)) {
                        for (n = Qt(t), r = e.length; r > s; s++) o[e[s]] = ot.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return R(this, !0)
            },
            hide: function() {
                return R(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Rt(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = M, M.prototype = {
            constructor: M,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ot.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = M.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ot.fx = M.prototype.init, ot.fx.step = {};
        var re, oe, se = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        ot.Animation = ot.extend(j, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return c(i.elem, t, Et.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(xt);
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], j.tweeners[i] = j.tweeners[i] || [], j.tweeners[i].unshift(e)
                },
                prefilters: [z],
                prefilter: function(t, e) {
                    e ? j.prefilters.unshift(t) : j.prefilters.push(t)
                }
            }), ot.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: i || !i && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !ot.isFunction(e) && e
                };
                return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    ot.isFunction(n.old) && n.old.call(this), n.queue && ot.dequeue(this, n.queue)
                }, n
            }, ot.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Rt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = ot.isEmptyObject(t),
                        o = ot.speed(e, i, n),
                        s = function() {
                            var e = j(this, ot.extend({}, t), o);
                            (r || kt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = ot.timers,
                            s = kt.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && ae.test(r) && n(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                        !e && i || ot.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = kt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            o = ot.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function(t, e) {
                var i = ot.fn[e];
                ot.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, r)
                }
            }), ot.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ot.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), ot.timers = [], ot.fx.tick = function() {
                var t, e = 0,
                    i = ot.timers;
                for (re = ot.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || ot.fx.stop(), re = void 0
            }, ot.fx.timer = function(t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                t.clearInterval(oe), oe = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function(e, i) {
                return e = ot.fx ? ot.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                    var r = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
            }();
        var le, ce = ot.expr.attrHandle;
        ot.fn.extend({
            attr: function(t, e) {
                return Tt(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : (n = ot.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(xt);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = ot.propFix[i] || i, ot.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), le = {
            set: function(t, e, i) {
                return e === !1 ? ot.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ce[e] || ot.find.attr;
            ce[e] = function(t, e, n) {
                var r, o;
                return n || (o = ce[e], ce[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, ce[e] = o), r
            }
        });
        var ue = /^(?:input|select|textarea|button)$/i,
            he = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(t, e) {
                return Tt(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ot.propFix[t] || t]
                })
            }
        }), ot.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ue.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        });
        var fe = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, B(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (r = B(i), n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = ot.trim(n), r !== a && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, B(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (r = B(i), n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            a = ot.trim(n), r !== a && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(i) {
                    ot(this).toggleClass(t.call(this, i, B(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i)
                        for (n = 0, r = ot(this), o = t.match(xt) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = B(this), e && kt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : kt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + B(i) + " ").replace(fe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var de = /\r/g,
            pe = /[\x20\t\r\n\f]+/g;
        ot.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = ot.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(de, "") : null == i ? "" : i)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === r) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ot.nodeName(i.parentNode, "optgroup"))) {
                                if (e = ot(i).val(), o) return e;
                                s.push(e)
                            } return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = ot.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = ot.inArray(ot.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ge = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
            trigger: function(e, i, n, r) {
                var o, s, a, l, c, u, h, f = [n || G],
                    d = it.call(e, "type") ? e.type : e,
                    p = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(d + ot.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[ot.expando] ? e : new ot.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ot.makeArray(i, [e]), h = ot.event.special[d] || {}, r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!r && !h.noBubble && !ot.isWindow(n)) {
                        for (l = h.delegateType || d, ge.test(l + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (n.ownerDocument || G) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (s = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || d, u = (kt.get(s, "events") || {})[e.type] && kt.get(s, "handle"), u && u.apply(s, i), u = c && s[c], u && u.apply && St(s) && (e.result = u.apply(s, i), e.result === !1 && e.preventDefault());
                    return e.type = d, r || e.isDefaultPrevented() || h._default && h._default.apply(f.pop(), i) !== !1 || !St(n) || c && ot.isFunction(n[d]) && !ot.isWindow(n) && (a = n[c], a && (n[c] = null), ot.event.triggered = d, n[d](), ot.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = ot.extend(new ot.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                ot.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
            }
        }), ot.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? ot.event.trigger(t, e, i, !0) : void 0
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ot.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), nt.focusin = "onfocusin" in t, nt.focusin || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                ot.event.simulate(e, t.target, ot.event.fix(t))
            };
            ot.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = kt.access(n, e);
                    r || n.addEventListener(t, i, !0), kt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = kt.access(n, e) - 1;
                    r ? kt.access(n, e, r) : (n.removeEventListener(t, i, !0), kt.remove(n, e))
                }
            }
        });
        var me = t.location,
            ve = ot.now(),
            ye = /\?/;
        ot.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, ot.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (n) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), i
        };
        var _e = /#.*$/,
            we = /([?&])_=[^&]*/,
            xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Te = /^(?:GET|HEAD)$/,
            Se = /^\/\//,
            ke = {},
            Ce = {},
            Pe = "*/".concat("*"),
            Oe = G.createElement("a");
        Oe.href = me.href, ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: me.href,
                type: "GET",
                isLocal: be.test(me.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Pe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, ot.ajaxSettings), e) : H(ot.ajaxSettings, t)
            },
            ajaxPrefilter: $(ke),
            ajaxTransport: $(Ce),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var c, h, y, _, x, T = i;
                    2 !== w && (w = 2, l && t.clearTimeout(l), r = void 0, s = a || "", b.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (_ = W(f, b, n)), _ = X(f, _, b, c), c ? (f.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (ot.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, h = _.data, y = _.error, c = !y)) : (y = T, !e && T || (T = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (i || T) + "", c ? g.resolveWith(d, [h, T, b]) : g.rejectWith(d, [b, T, y]), b.statusCode(v), v = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [b, f, c ? h : y]), m.fireWith(d, [b, T]), u && (p.trigger("ajaxComplete", [b, f]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var r, o, s, a, l, c, u, h, f = ot.ajaxSetup({}, i),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
                    g = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    v = f.statusCode || {},
                    y = {},
                    _ = {},
                    w = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!a)
                                    for (a = {}; e = xe.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return w || (t = _[i] = _[i] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return r && r.abort(e), n(0, e), this
                        }
                    };
                if (g.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || me.href) + "").replace(_e, "").replace(Se, me.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(xt) || [""], null == f.crossDomain) {
                    c = G.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = Oe.protocol + "//" + Oe.host != c.protocol + "//" + c.host
                    } catch (T) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), q(ke, f, i, b), 2 === w) return b;
                u = ot.event && f.global, u && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Te.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (ye.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = we.test(o) ? o.replace(we, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), f.ifModified && (ot.lastModified[o] && b.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && b.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers) b.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (f.beforeSend.call(d, b, f) === !1 || 2 === w)) return b.abort();
                x = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[h](f[h]);
                if (r = q(Ce, f, i, b)) {
                    if (b.readyState = 1, u && p.trigger("ajaxSend", [b, f]), 2 === w) return b;
                    f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                        b.abort("timeout")
                    }, f.timeout));
                    try {
                        w = 1, r.send(y, n)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, i) {
                return ot.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function(t, e) {
            ot[e] = function(t, i, n, r) {
                return ot.isFunction(i) && (r = r || n, n = i, i = void 0), ot.ajax(ot.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, ot.isPlainObject(t) && t))
            }
        }), ot._evalUrl = function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(t) {
                var e;
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ot(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ot.isFunction(t);
                return this.each(function(i) {
                    ot(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(t) {
            return !ot.expr.filters.visible(t)
        }, ot.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ae = /%20/g,
            Ee = /\[\]$/,
            De = /\r?\n/g,
            Re = /^(?:submit|button|image|reset|file)$/i,
            Me = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) Y(i, t[i], e, r);
            return n.join("&").replace(Ae, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Me.test(this.nodeName) && !Re.test(t) && (this.checked || !Mt.test(t))
                }).map(function(t, e) {
                    var i = ot(this).val();
                    return null == i ? null : ot.isArray(i) ? ot.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(De, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Ne = {
                0: 200,
                1223: 204
            },
            Le = ot.ajaxSettings.xhr();
        nt.cors = !!Le && "withCredentials" in Le, nt.ajax = Le = !!Le, ot.ajaxTransport(function(e) {
            var i, n;
            return nt.cors || Le && !e.crossDomain ? {
                send: function(r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ne[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (i) throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ot.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = ot("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ie = [],
            ze = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ie.pop() || ot.expando + "_" + ve++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = e.jsonp !== !1 && (ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ze, "$1" + r) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || ot.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Ie.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), ot.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || G;
            var n = pt.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = f([t], e, r), r && r.length && ot(r).remove(), ot.merge([], n.childNodes))
        };
        var Fe = ot.fn.load;
        ot.fn.load = function(t, e, i) {
            if ("string" != typeof t && Fe) return Fe.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(s, o || [t.responseText, e, t])
                })
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ot.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function(t) {
            return ot.grep(ot.timers, function(e) {
                return t === e.elem
            }).length
        }, ot.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, c, u = ot.css(t, "position"),
                    h = ot(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, ot.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                return o ? (e = o.documentElement, ot.contains(e, n) ? (r = n.getBoundingClientRect(), i = U(o), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || Zt
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            ot.fn[t] = function(n) {
                return Tt(this, function(t, n, r) {
                    var o = U(t);
                    return void 0 === r ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }), ot.each(["top", "left"], function(t, e) {
            ot.cssHooks[e] = P(nt.pixelPosition, function(t, i) {
                return i ? (i = C(t, e), Gt.test(i) ? ot(t).position()[e] + "px" : i) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                ot.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || r === !0 ? "margin" : "border");
                    return Tt(this, function(e, i, n) {
                        var r;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? ot.css(e, i, s) : ot.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), ot.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var je = t.jQuery,
            Be = t.$;
        return ot.noConflict = function(e) {
            return t.$ === ot && (t.$ = Be), e && t.jQuery === ot && (t.jQuery = je), ot
        }, e || (t.jQuery = t.$ = ot), ot
    }),
    function(t, e, i, n) {
        function r(e, i) {
            this.element = e, this.options = t.extend({}, s, i), this._defaults = s, this._name = o, this.init()
        }
        var o = "stellar",
            s = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function(t) {
                    t.hide()
                },
                showElement: function(t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function(t) {
                        return t.scrollLeft()
                    },
                    setLeft: function(t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function(t) {
                        return t.scrollTop()
                    },
                    setTop: function(t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function(t) {
                        return parseInt(t.css("left"), 10) * -1
                    },
                    getTop: function(t) {
                        return parseInt(t.css("top"), 10) * -1
                    }
                },
                margin: {
                    getLeft: function(t) {
                        return parseInt(t.css("margin-left"), 10) * -1
                    },
                    getTop: function(t) {
                        return parseInt(t.css("margin-top"), 10) * -1
                    }
                },
                transform: {
                    getLeft: function(t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? parseInt(e.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                    },
                    getTop: function(t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? parseInt(e.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function(t, e) {
                        t.css("left", e)
                    },
                    setTop: function(t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function(t, e, i, n, r) {
                        t[0].style[u] = "translate3d(" + (e - i) + "px, " + (n - r) + "px, 0)"
                    }
                }
            },
            c = function() {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = t("script")[0].style,
                    r = "";
                for (e in n)
                    if (i.test(e)) {
                        r = e.match(i)[0];
                        break
                    } return "WebkitOpacity" in n && (r = "Webkit"), "KhtmlOpacity" in n && (r = "Khtml"),
                    function(t) {
                        return r + (r.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }(),
            u = c("transform"),
            h = t("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== n,
            f = h ? function(t, e, i) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": i
                })
            } : function(t, e, i) {
                t.css("background-position", e + " " + i)
            },
            d = h ? function(t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function(t) {
                return t.css("background-position").split(" ")
            },
            p = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            };
        r.prototype = {
            init: function() {
                this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function() {
                this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function() {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function() {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function() {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function() {
                var e = this,
                    i = a[e.options.scrollProperty],
                    n = l[e.options.positionProperty],
                    r = i.setLeft,
                    o = i.setTop;
                this._setScrollLeft = "function" == typeof r ? function(t) {
                    r(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof o ? function(t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setPosition = n.setPosition || function(t, i, r, o, s) {
                    e.options.horizontalScrolling && n.setLeft(t, i, r), e.options.verticalScrolling && n.setTop(t, o, s)
                }
            },
            _handleWindowLoadAndResize: function() {
                var i = this,
                    n = t(e);
                i.options.responsive && n.bind("load." + this.name, function() {
                    i.refresh()
                }), n.bind("resize." + this.name, function() {
                    i._detectViewport(), i.options.responsive && i.refresh()
                })
            },
            refresh: function(i) {
                var n = this,
                    r = n._getScrollLeft(),
                    o = n._getScrollTop();
                (!i || !i.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
                }), this._setScrollLeft(r), this._setScrollTop(o)
            },
            _detectViewport: function() {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== n;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function() {
                var e = this;
                this._getScrollLeft(), this._getScrollTop();
                if (this.particles !== n)
                    for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(i) {
                    var r, o, s, a, l, c, u, h, f, d = t(this),
                        p = 0,
                        g = 0,
                        m = 0,
                        v = 0;
                    if (d.data("stellar-elementIsActive")) {
                        if (d.data("stellar-elementIsActive") !== this) return
                    } else d.data("stellar-elementIsActive", this);
                    e.options.showElement(d), d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")), d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")), d.data("stellar-startingTop", d.css("top"))), s = d.position().left, a = d.position().top, l = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), c = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), h = d.offset().left - l, f = d.offset().top - c, d.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (p = m, g = v, u = e, !1) : (m += e.position().left, void(v += e.position().top))
                    }), r = d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : e.horizontalOffset, o = d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: d,
                        $offsetParent: u,
                        isFixed: "fixed" === d.css("position"),
                        horizontalOffset: r,
                        verticalOffset: o,
                        startingPositionLeft: s,
                        startingPositionTop: a,
                        startingOffsetLeft: h,
                        startingOffsetTop: f,
                        parentOffsetLeft: p,
                        parentOffsetTop: g,
                        stellarRatio: d.data("stellar-ratio") !== n ? d.data("stellar-ratio") : 1,
                        width: d.outerWidth(!0),
                        height: d.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function() {
                var e, i = this,
                    r = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                    var e, s, a, l, c, u, h, p = t(this),
                        g = d(p),
                        m = 0,
                        v = 0,
                        y = 0,
                        _ = 0;
                    if (p.data("stellar-backgroundIsActive")) {
                        if (p.data("stellar-backgroundIsActive") !== this) return
                    } else p.data("stellar-backgroundIsActive", this);
                    p.data("stellar-backgroundStartingLeft") ? f(p, p.data("stellar-backgroundStartingLeft"), p.data("stellar-backgroundStartingTop")) : (p.data("stellar-backgroundStartingLeft", g[0]), p.data("stellar-backgroundStartingTop", g[1])), a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), c = p.offset().left - a - r, u = p.offset().top - l - o, p.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (m = y, v = _, h = e, !1) : (y += e.position().left, void(_ += e.position().top))
                    }), e = p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : h !== n && h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : i.horizontalOffset, s = p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : h !== n && h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                        $element: p,
                        $offsetParent: h,
                        isFixed: "fixed" === p.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: s,
                        startingValueLeft: g[0],
                        startingValueTop: g[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                        startingPositionLeft: p.position().left,
                        startingPositionTop: p.position().top,
                        startingOffsetLeft: c,
                        startingOffsetTop: u,
                        parentOffsetLeft: m,
                        parentOffsetTop: v,
                        stellarRatio: p.data("stellar-background-ratio") === n ? 1 : p.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function() {
                var t, e, i, n, r;
                for (r = this.particles.length - 1; r >= 0; r--) t = this.particles[r], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (r = this.backgrounds.length - 1; r >= 0; r--) n = this.backgrounds[r], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), f(n.$element, n.startingValueLeft, n.startingValueTop)
            },
            destroy: function() {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function() {
                var i = this,
                    n = t(e);
                n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                    i.horizontalOffset = i.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                    i.verticalOffset = i.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function() {
                var t, e, i, n, r, o, s, a, l, c, u = this._getScrollLeft(),
                    h = this._getScrollTop(),
                    d = !0,
                    p = !0;
                if (this.currentScrollLeft !== u || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = u, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (u + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = o - t.startingPositionLeft + t.startingOffsetLeft) : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (s = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = s - t.startingPositionTop + t.startingOffsetTop) : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : u) && a < (t.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), p && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (u + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, r = this.options.verticalScrolling ? (h + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, f(i.$element, n, r)
                }
            },
            _handleScrollEvent: function() {
                var t = this,
                    e = !1,
                    i = function() {
                        t._repositionElements(), e = !1
                    },
                    n = function() {
                        e || (p(i), e = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, n), n()
            },
            _startAnimationLoop: function() {
                var t = this;
                this._animationLoop = function() {
                    p(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[o] = function(e) {
            var i = arguments;
            return e === n || "object" == typeof e ? this.each(function() {
                t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
                var n = t.data(this, "plugin_" + o);
                n instanceof r && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
            }) : void 0
        }, t[o] = function(i) {
            var n = t(e);
            return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
        }, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = r
    }(jQuery, this, document), ! function(t) {
        var e = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "srbt-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            ariaLive: !0,
            ariaHidden: !0,
            keyboardEnabled: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            stopAutoOnClick: !1,
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            shrinkItems: !1,
            onSliderLoad: function() {
                return !0
            },
            onSlideBefore: function() {
                return !0
            },
            onSlideAfter: function() {
                return !0
            },
            onSlideNext: function() {
                return !0
            },
            onSlidePrev: function() {
                return !0
            },
            onSliderResize: function() {
                return !0
            }
        };
        t.fn.bxSlider = function(n) {
            if (0 === this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(n)
            }), this;
            var r = {},
                o = this,
                s = t(window).width(),
                a = t(window).height();
            if (!t(o).data("bxSlider")) {
                var l = function() {
                        t(o).data("bxSlider") || (r.settings = t.extend({}, e, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {
                            index: r.settings.startSlide
                        }, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode && function() {
                            for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                                if (void 0 !== t.style[e[i]]) return r.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
                            return !1
                        }(), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function() {
                            t(this).data("origStyle", t(this).attr("style"))
                        }), c())
                    },
                    c = function() {
                        var e = r.children.eq(r.settings.startSlide);
                        o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="srbt-viewport"></div></div>'), r.viewport = o.parent(), r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"), r.loader = t('<div class="srbt-loading" />'), r.viewport.prepend(r.loader), o.css({
                            width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto",
                            position: "relative"
                        }), r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"), r.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), r.viewport.parent().css({
                            maxWidth: d()
                        }), r.settings.pager || r.settings.controls || r.viewport.parent().css({
                            margin: "0 auto 0px"
                        }), r.children.css({
                            "float": "horizontal" === r.settings.mode ? "left" : "none",
                            listStyle: "none",
                            position: "relative"
                        }), r.children.css("width", p()), "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" === r.settings.mode && (r.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), r.children.eq(r.settings.startSlide).css({
                            zIndex: r.settings.slideZIndex,
                            display: "block"
                        })), r.controls.el = t('<div class="srbt-controls" />'), r.settings.captions && S(), r.active.last = r.settings.startSlide === m() - 1, r.settings.video && o.fitVids(), ("all" === r.settings.preloadImages || r.settings.ticker) && (e = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && b(), r.settings.auto && r.settings.autoControls && T(), r.settings.pager && x(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), u(e, h)
                    },
                    u = function(e, i) {
                        var n = e.find('img:not([src=""]), iframe').length,
                            r = 0;
                        return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function() {
                            t(this).one("load error", function() {
                                ++r === n && i()
                            }).each(function() {
                                this.complete && t(this).load()
                            })
                        })
                    },
                    h = function() {
                        if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
                            var e = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
                                i = r.children.slice(0, e).clone(!0).addClass("srbt-clone"),
                                n = r.children.slice(-e).clone(!0).addClass("srbt-clone");
                            r.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n)
                        }
                        r.loader.remove(), y(), "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(f()), o.redrawSlider(), r.settings.onSliderLoad.call(o, r.active.index), r.initialized = !0, r.settings.responsive && t(window).bind("resize", W), r.settings.auto && r.settings.autoStart && (m() > 1 || r.settings.autoSlideForOnePage) && N(), r.settings.ticker && L(), r.settings.pager && E(r.settings.startSlide), r.settings.controls && M(), r.settings.touchEnabled && !r.settings.ticker && j(), r.settings.keyboardEnabled && !r.settings.ticker && t(document).keydown(F)
                    },
                    f = function() {
                        var e = 0,
                            n = t();
                        if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)
                            if (r.carousel) {
                                var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * v();
                                for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
                            } else n = r.children.eq(r.active.index);
                        else n = r.children;
                        return "vertical" === r.settings.mode ? (n.each(function(i) {
                            e += t(this).outerHeight()
                        }), r.settings.slideMargin > 0 && (e += r.settings.slideMargin * (r.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get()), "border-box" === r.viewport.css("box-sizing") ? e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), e
                    },
                    d = function() {
                        var t = "100%";
                        return r.settings.slideWidth > 0 && (t = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), t
                    },
                    p = function() {
                        var t = r.settings.slideWidth,
                            e = r.viewport.width();
                        if (0 === r.settings.slideWidth || r.settings.slideWidth > e && !r.carousel || "vertical" === r.settings.mode) t = e;
                        else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
                            if (e > r.maxThreshold) return t;
                            e < r.minThreshold ? t = (e - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides : r.settings.shrinkItems && (t = Math.floor((e + r.settings.slideMargin) / Math.ceil((e + r.settings.slideMargin) / (t + r.settings.slideMargin)) - r.settings.slideMargin))
                        }
                        return t
                    },
                    g = function() {
                        var t = 1,
                            e = null;
                        return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? t = r.settings.minSlides : r.viewport.width() > r.maxThreshold ? t = r.settings.maxSlides : (e = r.children.first().width() + r.settings.slideMargin, t = Math.floor((r.viewport.width() + r.settings.slideMargin) / e)) : "vertical" === r.settings.mode && (t = r.settings.minSlides), t
                    },
                    m = function() {
                        var t = 0,
                            e = 0,
                            i = 0;
                        if (r.settings.moveSlides > 0)
                            if (r.settings.infiniteLoop) t = Math.ceil(r.children.length / v());
                            else
                                for (; e < r.children.length;) ++t, e = i + g(), i += r.settings.moveSlides <= g() ? r.settings.moveSlides : g();
                        else t = Math.ceil(r.children.length / g());
                        return t
                    },
                    v = function() {
                        return r.settings.moveSlides > 0 && r.settings.moveSlides <= g() ? r.settings.moveSlides : g()
                    },
                    y = function() {
                        var t, e, i;
                        r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (e = r.children.last(), t = e.position(), _(-(t.left - (r.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (i = r.children.length - r.settings.minSlides, t = r.children.eq(i).position(), _(-t.top, "reset", 0)) : (t = r.children.eq(r.active.index * v()).position(), r.active.index === m() - 1 && (r.active.last = !0), void 0 !== t && ("horizontal" === r.settings.mode ? _(-t.left, "reset", 0) : "vertical" === r.settings.mode && _(-t.top, "reset", 0)))
                    },
                    _ = function(e, i, n, s) {
                        var a, l;
                        r.usingCSS ? (l = "vertical" === r.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(r.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                            t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D())
                        }) : D()) : "reset" === i ? o.css(r.animProp, l) : "ticker" === i && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                            t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), _(s.resetValue, "reset", 0), I())
                        }) : (_(s.resetValue, "reset", 0), I()))) : (a = {}, a[r.animProp] = e, "slide" === i ? o.animate(a, n, r.settings.easing, function() {
                            D()
                        }) : "reset" === i ? o.css(r.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function() {
                            _(s.resetValue, "reset", 0), I()
                        }))
                    },
                    w = function() {
                        for (var e = "", i = "", n = m(), o = 0; n > o; o++) i = "", r.settings.buildPager && t.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (i = r.settings.buildPager(o), r.pagerEl.addClass("srbt-custom-pager")) : (i = o + 1, r.pagerEl.addClass("srbt-default-pager")), e += '<div class="srbt-pager-item"><a href="" data-slide-index="' + o + '" class="srbt-pager-link">' + i + "</a></div>";
                        r.pagerEl.html(e)
                    },
                    x = function() {
                        r.settings.pagerCustom ? r.pagerEl = t(r.settings.pagerCustom) : (r.pagerEl = t('<div class="srbt-pager" />'), r.settings.pagerSelector ? t(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("srbt-has-pager").append(r.pagerEl), w()), r.pagerEl.on("click touchend", "a", A)
                    },
                    b = function() {
                        r.controls.next = t('<a class="srbt-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = t('<a class="srbt-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click touchend", k), r.controls.prev.bind("click touchend", C), r.settings.nextSelector && t(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && t(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = t('<div class="srbt-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("srbt-has-controls-direction").append(r.controls.directionEl))
                    },
                    T = function() {
                        r.controls.start = t('<div class="srbt-controls-auto-item"><a class="srbt-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = t('<div class="srbt-controls-auto-item"><a class="srbt-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = t('<div class="srbt-controls-auto" />'), r.controls.autoEl.on("click", ".srbt-start", P), r.controls.autoEl.on("click", ".srbt-stop", O), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? t(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("srbt-has-controls-auto").append(r.controls.autoEl), R(r.settings.autoStart ? "stop" : "start")
                    },
                    S = function() {
                        r.children.each(function(e) {
                            var i = t(this).find("img:first").attr("title");
                            void 0 !== i && ("" + i).length && t(this).append('<div class="srbt-caption"><span>' + i + "</span></div>")
                        })
                    },
                    k = function(t) {
                        t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
                    },
                    C = function(t) {
                        t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
                    },
                    P = function(t) {
                        o.startAuto(), t.preventDefault()
                    },
                    O = function(t) {
                        o.stopAuto(), t.preventDefault()
                    },
                    A = function(e) {
                        var i, n;
                        e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== r.active.index && o.goToSlide(n)))
                    },
                    E = function(e) {
                        var i = r.children.length;
                        return "short" === r.settings.pagerType ? (r.settings.maxSlides > 1 && (i = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(e + 1 + r.settings.pagerShortSeparator + i)) : (r.pagerEl.find("a").removeClass("active"), void r.pagerEl.each(function(i, n) {
                            t(n).find("a").eq(e).addClass("active")
                        }))
                    },
                    D = function() {
                        if (r.settings.infiniteLoop) {
                            var t = "";
                            0 === r.active.index ? t = r.children.eq(0).position() : r.active.index === m() - 1 && r.carousel ? t = r.children.eq((m() - 1) * v()).position() : r.active.index === r.children.length - 1 && (t = r.children.eq(r.children.length - 1).position()), t && ("horizontal" === r.settings.mode ? _(-t.left, "reset", 0) : "vertical" === r.settings.mode && _(-t.top, "reset", 0))
                        }
                        r.working = !1, r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)
                    },
                    R = function(t) {
                        r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[t]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.srbt-" + t + ")").addClass("active"))
                    },
                    M = function() {
                        1 === m() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === m() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
                    },
                    N = function() {
                        r.settings.autoDelay > 0 ? setTimeout(o.startAuto, r.settings.autoDelay) : (o.startAuto(), t(window).focus(function() {
                            o.startAuto()
                        }).blur(function() {
                            o.stopAuto()
                        })), r.settings.autoHover && o.hover(function() {
                            r.interval && (o.stopAuto(!0), r.autoPaused = !0)
                        }, function() {
                            r.autoPaused && (o.startAuto(!0), r.autoPaused = null)
                        })
                    },
                    L = function() {
                        var e, i, n, s, a, l, c, u, h = 0;
                        "next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("srbt-clone")) : (o.prepend(r.children.clone().addClass("srbt-clone")), e = r.children.first().position(), h = "horizontal" === r.settings.mode ? -e.left : -e.top), _(h, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && (r.usingCSS ? (s = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function() {
                            i = o.css("-" + r.cssPrefix + "-transform"), n = parseFloat(i.split(",")[s]), _(n, "reset", 0)
                        }, function() {
                            u = 0, r.children.each(function(e) {
                                u += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                            }), a = r.settings.speed / u, l = "horizontal" === r.settings.mode ? "left" : "top", c = a * (u - Math.abs(parseInt(n))), I(c)
                        })) : r.viewport.hover(function() {
                            o.stop()
                        }, function() {
                            u = 0, r.children.each(function(e) {
                                u += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                            }), a = r.settings.speed / u, l = "horizontal" === r.settings.mode ? "left" : "top", c = a * (u - Math.abs(parseInt(o.css(l)))), I(c)
                        })), I()
                    },
                    I = function(t) {
                        var e, i, n, s = t ? t : r.settings.speed,
                            a = {
                                left: 0,
                                top: 0
                            },
                            l = {
                                left: 0,
                                top: 0
                            };
                        "next" === r.settings.autoDirection ? a = o.find(".srbt-clone").first().position() : l = r.children.first().position(), e = "horizontal" === r.settings.mode ? -a.left : -a.top, i = "horizontal" === r.settings.mode ? -l.left : -l.top, n = {
                            resetValue: i
                        }, _(e, "ticker", s, n)
                    },
                    z = function(e) {
                        var i = t(window),
                            n = {
                                top: i.scrollTop(),
                                left: i.scrollLeft()
                            },
                            r = e.offset();
                        return n.right = n.left + i.width(), n.bottom = n.top + i.height(), r.right = r.left + e.outerWidth(), r.bottom = r.top + e.outerHeight(), !(n.right < r.left || n.left > r.right || n.bottom < r.top || n.top > r.bottom)
                    },
                    F = function(t) {
                        var e = document.activeElement.tagName.toLowerCase(),
                            i = "input|textarea",
                            n = new RegExp(e, ["i"]),
                            r = n.exec(i);
                        if (null == r && z(o)) {
                            if (39 === t.keyCode) return k(t), !1;
                            if (37 === t.keyCode) return C(t), !1
                        }
                    },
                    j = function() {
                        r.touch = {
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            }
                        }, r.viewport.bind("touchstart MSPointerDown pointerdown", B), r.viewport.on("click", ".bxslider a", function(t) {
                            r.viewport.hasClass("click-disabled") && (t.preventDefault(), r.viewport.removeClass("click-disabled"))
                        })
                    },
                    B = function(t) {
                        if (r.controls.el.addClass("disabled"), r.working) t.preventDefault(), r.controls.el.removeClass("disabled");
                        else {
                            r.touch.originalPos = o.position();
                            var e = t.originalEvent,
                                i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
                            r.touch.start.x = i[0].pageX, r.touch.start.y = i[0].pageY, r.viewport.get(0).setPointerCapture && (r.pointerId = e.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)), r.viewport.bind("touchmove MSPointerMove pointermove", q), r.viewport.bind("touchend MSPointerUp pointerup", H), r.viewport.bind("MSPointerCancel pointercancel", $)
                        }
                    },
                    $ = function(t) {
                        _(r.touch.originalPos.left, "reset", 0), r.controls.el.removeClass("disabled"), r.viewport.unbind("MSPointerCancel pointercancel", $), r.viewport.unbind("touchmove MSPointerMove pointermove", q), r.viewport.unbind("touchend MSPointerUp pointerup", H), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
                    },
                    q = function(t) {
                        var e = t.originalEvent,
                            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                            n = Math.abs(i[0].pageX - r.touch.start.x),
                            o = Math.abs(i[0].pageY - r.touch.start.y),
                            s = 0,
                            a = 0;
                        3 * n > o && r.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && r.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (a = i[0].pageX - r.touch.start.x, s = r.touch.originalPos.left + a) : (a = i[0].pageY - r.touch.start.y, s = r.touch.originalPos.top + a), _(s, "reset", 0))
                    },
                    H = function(t) {
                        r.viewport.unbind("touchmove MSPointerMove pointermove", q), r.controls.el.removeClass("disabled");
                        var e = t.originalEvent,
                            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                            n = 0,
                            s = 0;
                        r.touch.end.x = i[0].pageX, r.touch.end.y = i[0].pageY, "fade" === r.settings.mode ? (s = Math.abs(r.touch.start.x - r.touch.end.x), s >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === r.settings.mode ? (s = r.touch.end.x - r.touch.start.x, n = r.touch.originalPos.left) : (s = r.touch.end.y - r.touch.start.y, n = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && s > 0 || r.active.last && 0 > s) ? _(n, "reset", 200) : Math.abs(s) >= r.settings.swipeThreshold ? (0 > s ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : _(n, "reset", 200)), r.viewport.unbind("touchend MSPointerUp pointerup", H), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
                    },
                    W = function(e) {
                        if (r.initialized)
                            if (r.working) window.setTimeout(W, 10);
                            else {
                                var i = t(window).width(),
                                    n = t(window).height();
                                (s !== i || a !== n) && (s = i, a = n, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index))
                            }
                    },
                    X = function(t) {
                        var e = g();
                        r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(t, t + e).attr("aria-hidden", "false"))
                    },
                    Y = function(t) {
                        return 0 > t ? r.settings.infiniteLoop ? m() - 1 : r.active.index : t >= m() ? r.settings.infiniteLoop ? 0 : r.active.index : t
                    };
                return o.goToSlide = function(e, i) {
                    var n, s, a, l, c = !0,
                        u = 0,
                        h = {
                            left: 0,
                            top: 0
                        },
                        d = null;
                    if (r.oldIndex = r.active.index, r.active.index = Y(e), !r.working && r.active.index !== r.oldIndex) {
                        if (r.working = !0, c = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index), "undefined" != typeof c && !c) return r.active.index = r.oldIndex, void(r.working = !1);
                        "next" === i ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (c = !1) : "prev" === i && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (c = !1)), r.active.last = r.active.index >= m() - 1, (r.settings.pager || r.settings.pagerCustom) && E(r.active.index), r.settings.controls && M(), "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== f() && r.viewport.animate({
                            height: f()
                        }, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({
                            zIndex: 0
                        }), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function() {
                            t(this).css("zIndex", r.settings.slideZIndex), D()
                        })) : (r.settings.adaptiveHeight && r.viewport.height() !== f() && r.viewport.animate({
                            height: f()
                        }, r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (d = r.children.eq(r.children.length - 1), h = d.position(), u = r.viewport.width() - d.outerWidth()) : (n = r.children.length - r.settings.minSlides, h = r.children.eq(n).position()) : r.carousel && r.active.last && "prev" === i ? (s = 1 === r.settings.moveSlides ? r.settings.maxSlides - v() : (m() - 1) * v() - (r.children.length - r.settings.maxSlides), d = o.children(".srbt-clone").eq(s), h = d.position()) : "next" === i && 0 === r.active.index ? (h = o.find("> .srbt-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : e >= 0 && (l = e * parseInt(v()), h = r.children.eq(l).position()), "undefined" != typeof h ? (a = "horizontal" === r.settings.mode ? -(h.left - u) : -h.top, _(a, "slide", r.settings.speed)) : r.working = !1), r.settings.ariaHidden && X(r.active.index * v())
                    }
                }, o.goToNextSlide = function() {
                    if (r.settings.infiniteLoop || !r.active.last) {
                        var t = parseInt(r.active.index) + 1;
                        o.goToSlide(t, "next")
                    }
                }, o.goToPrevSlide = function() {
                    if (r.settings.infiniteLoop || 0 !== r.active.index) {
                        var t = parseInt(r.active.index) - 1;
                        o.goToSlide(t, "prev")
                    }
                }, o.startAuto = function(t) {
                    r.interval || (r.interval = setInterval(function() {
                        "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                    }, r.settings.pause), r.settings.autoControls && t !== !0 && R("stop"))
                }, o.stopAuto = function(t) {
                    r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && t !== !0 && R("start"))
                }, o.getCurrentSlide = function() {
                    return r.active.index
                }, o.getCurrentSlideElement = function() {
                    return r.children.eq(r.active.index)
                }, o.getSlideElement = function(t) {
                    return r.children.eq(t)
                }, o.getSlideCount = function() {
                    return r.children.length
                }, o.isWorking = function() {
                    return r.working
                }, o.redrawSlider = function() {
                    r.children.add(o.find(".srbt-clone")).outerWidth(p()), r.viewport.css("height", f()), r.settings.ticker || y(), r.active.last && (r.active.index = m() - 1), r.active.index >= m() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && (w(), E(r.active.index)), r.settings.ariaHidden && X(r.active.index * v())
                }, o.destroySlider = function() {
                    r.initialized && (r.initialized = !1, t(".srbt-clone", this).remove(), r.children.each(function() {
                        void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                    }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), t(".srbt-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && t(window).unbind("resize", W), r.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider"))
                }, o.reloadSlider = function(e) {
                    void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
                }, l(), t(o).data("bxSlider", this), this
            }
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, r) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
        },
        easeInQuad: function(t, e, i, n, r) {
            return n * (e /= r) * e + i
        },
        easeOutQuad: function(t, e, i, n, r) {
            return -n * (e /= r) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, r) {
            return n * (e /= r) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, r) {
            return -n * ((e = e / r - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, r) {
            return -n * Math.cos(e / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, r) {
            return n * Math.sin(e / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i
        },
        easeInExpo: function(t, e, i, n, r) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, r) {
            return e == r ? i + n : n * (-Math.pow(2, -10 * e / r) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, r) {
            return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, r) {
            return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, r) {
            return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s)) + i
        },
        easeOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / s) + n + i
        },
        easeInOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= r / 2)) return i + n;
            if (s || (s = .3 * r * 1.5), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return e < 1 ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * (e /= r) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, n, r) {
            return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i
        },
        easeOutBounce: function(t, e, i, n, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * n * e * e + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, r) {
            return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i
        }
    }), ! function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var r = 0, o = e.length; o > r; r++) e[r][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.invokeAll("enable")
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            r = window.Waypoint,
            o = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete n[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || r.isTouch) && (e.didScroll = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            r.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var n = e[i],
                    r = n.newScroll > n.oldScroll,
                    o = r ? n.forward : n.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = n.oldScroll < a.triggerPoint,
                        c = n.newScroll >= a.triggerPoint,
                        u = l && c,
                        h = !l && !c;
                    (u || h) && (a.queueTrigger(o), t[a.group.id] = a.group)
                }
            }
            for (var f in t) t[f].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, r = t.length; r > n; n++) t[n].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var o in t) {
                var s = t[o];
                for (var a in this.waypoints[o]) {
                    var l, c, u, h, f, d = this.waypoints[o][a],
                        p = d.options.offset,
                        g = d.triggerPoint,
                        m = 0,
                        v = null == g;
                    d.element !== d.element.window && (m = d.adapter.offset()[s.offsetProp]), "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p), d.options.offset.indexOf("%") > -1 && (p = Math.ceil(s.contextDimension * p / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = m + l - p, c = g < s.oldScroll, u = d.triggerPoint >= s.oldScroll, h = c && u, f = !c && !u, !v && h ? (d.queueTrigger(s.backward), n[d.group.id] = d.group) : !v && f ? (d.queueTrigger(s.forward), n[d.group.id] = d.group) : v && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), n[d.group.id] = d.group)
                }
            }
            return r.requestAnimationFrame(function() {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, e.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            o && o(), e.refreshAll()
        }, r.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e)
        }, r.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            r = window.Waypoint;
        i.prototype.add = function(t) {
            this.waypoints.push(t)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    r = "up" === i || "left" === i;
                n.sort(r ? e : t);
                for (var o = 0, s = n.length; s > o; o += 1) {
                    var a = n[o];
                    (a.options.continuous || o === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints),
                n = i === this.waypoints.length - 1;
            return n ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, i.prototype.remove = function(t) {
            var e = r.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(t) {
            return n[t.axis][t.name] || new i(t)
        }, r.Group = i
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
            t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
            t[n] = e[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    n = arguments[0];
                return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                    var r = t.extend({}, n, {
                        element: this
                    });
                    "string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), i.push(new e(r))
                }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    o = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                    },
                    s = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    c = a.isArray,
                    u = o.prototype = i.to({}, .1, {}),
                    h = [];
                o.version = "1.18.2", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || o)
                        for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                    return this
                }, u.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, o, l, c, u, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        g = this._totalTime,
                        m = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > y || 0 >= t && t >= -1e-7 || y === s && "isPause" !== this.data) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (c = this._time / v, u = this._easeType, h = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === h ? c *= c : 2 === h ? c *= c * c : 3 === h ? c *= c * c * c : 4 === h && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / v)), p === this._time && !i && m === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = g, this._rawPrevTime = y, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0))
                }, o.to = function(t, e, i) {
                    return new o(t, e, i)
                }, o.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                }, o.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                }, o.staggerTo = o.allTo = function(t, e, s, a, u, f, d) {
                    a = a || 0;
                    var p, g, m, v, y = 0,
                        _ = [],
                        w = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || s.callbackScope || this, f || h)
                        },
                        x = s.cycle,
                        b = s.startAt && s.startAt.cycle;
                    for (c(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        g = {};
                        for (v in s) g[v] = s[v];
                        if (x && r(g, t, m), b) {
                            b = g.startAt = {};
                            for (v in s.startAt) b[v] = s.startAt[v];
                            r(g.startAt, t, m)
                        }
                        g.delay = y + (g.delay || 0), m === p && u && (g.onComplete = w), _[m] = new o(t[m], e, g), y += a
                    }
                    return _
                }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
                }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
                }, o.delayedCall = function(t, e, i, n, r) {
                    return new o(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function(t, e) {
                    return new o(t, 0, e)
                }, o.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(f(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    d = o.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                o.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = d(0 != r),
                        c = l.length,
                        u = i && n && r;
                    for (a = 0; c > a; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, o.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, s, u, h, f, d = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), c(t))
                            for (h = t.length; --h > -1;) o.killChildTweensOf(t[h], e);
                        else {
                            r = [];
                            for (u in d)
                                for (s = d[u].target.parentNode; s;) s === t && (r = r.concat(d[u].tweens)), s = s.parentNode;
                            for (f = r.length, h = 0; f > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, s, a = d(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return o.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, o.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, o.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = n._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    c = o.lazyTweens,
                    u = o.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    p = s.pauseCallback = function() {},
                    g = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.18.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, r) {
                    var o = n.repeat && h.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, m.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && h.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, m.staggerTo = function(t, e, r, o, s, l, c, u) {
                    var h, p, m = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), o = o || 0, 0 > o && (t = g(t), t.reverse(), o *= -1), p = 0; p < t.length; p++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && d(h.startAt, t, p)), v && d(h, t, p), m.to(t[p], e, h, p * o);
                    return this.add(m, s)
                }, m.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, m.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, m.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s = new n(t),
                        a = s._timeline;
                    for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, m.add = function(r, o, s, a) {
                    var c, u, h, f, d, p;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, c = o, u = r.length, h = 0; u > h; h++) l(f = r[h]) && (f = new n({
                                tweens: f
                            })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (d = this, p = d.rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, r) {
                    var o = i.delayedCall(0, p, n, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, r) {
                    var o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, s, a, l, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        g = this._startTime,
                        m = this._timeScale,
                        v = this._paused;
                    if (t >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), f = this._time, f >= p)
                            for (n = this._first; n && (s = n._next, f === this._time && (!this._paused || v));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, f === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = s
                            }
                        this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, m.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    o = e._internals,
                    s = o.lazyTweens,
                    a = o.lazyRender,
                    l = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.18.2", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, o, s = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) s[r] = i[r];
                    return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new e(this, n, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart")
                    }, o
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, l, c, u, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._duration,
                        m = this._time,
                        v = this._totalTime,
                        y = this._startTime,
                        _ = this._timeScale,
                        w = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === r) && w !== t && this._first && (u = !0, w > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === g && w !== r && (w > 0 || 0 > t && w >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, c = "onReverseComplete") : w >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else if (0 === g && 0 > w && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & b),
                            S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            P = this._rawPrevTime,
                            O = this._time;
                        if (this._totalTime = b * g, this._cycle < b ? T = !T : this._totalTime += g, this._time = m, this._rawPrevTime = 0 === g ? w - 1e-4 : w, this._cycle = b, this._locked = !0, m = T ? 0 : g, this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (S && (m = T ? g + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = O, this._totalTime = k, this._cycle = C, this._rawPrevTime = P
                    }
                    if (!(this._time !== m && this._first || i || u || f)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), d = this._time, d >= m)
                        for (n = this._first; n && (l = n._next, d === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, d === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                if (f === n) {
                                    for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (y === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this._callback(c)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    o = _gsScope._gsDefine.globals,
                    s = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            o = {},
                            s = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            c = (e + i) / 2,
                            u = (i + n) / 2,
                            h = (l + c) / 2,
                            f = (c + u) / 2,
                            d = (f - h) / 8;
                        return r.b = l + (t - l) / 4, o.b = h + d, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - d, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    c = function(t, r, o, s, a) {
                        var c, u, h, f, d, p, g, m, v, y, _, w, x, b = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (c = 0; b > c; c++) d = t[T], u = d.a, h = d.d, f = t[T + 1].d, a ? (_ = e[c], w = i[c], x = (w + _) * r * .25 / (s ? .5 : n[c] || .5), p = h - (h - u) * (s ? .5 * r : 0 !== _ ? x / _ : 0), g = h + (f - h) * (s ? .5 * r : 0 !== w ? x / w : 0), m = h - (p + ((g - p) * (3 * _ / (_ + w) + .5) / 4 || 0))) : (p = h - (h - u) * r * .5, g = h + (f - h) * r * .5, m = h - (p + g) / 2), p += m, g += m, d.c = v = p, 0 !== c ? d.b = S : d.b = S = d.a + .6 * (d.c - d.a), d.da = h - u, d.ca = v - u, d.ba = S - u, o ? (y = l(u, S, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = g;
                        d = t[T], d.b = S, d.c = S + .4 * (d.d - S), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = S - d.a, o && (y = l(d.a, S, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    u = function(t, n, r, o) {
                        var a, l, c, u, h, f, d = [];
                        if (o)
                            for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
                        if (a = t.length - 2, 0 > a) return d[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), d;
                        for (l = 0; a > l; l++) c = t[l][n], u = t[l + 1][n], d[l] = new s(c, 0, 0, u), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                        return d[l] = new s(t[l][n], 0, 0, t[l + 1][n]), d
                    },
                    h = function(t, o, s, l, h, f) {
                        var d, p, g, m, v, y, _, w, x = {},
                            b = [],
                            T = f || t[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == o && (o = 1);
                        for (p in t[0]) b.push(p);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], _ = !0, d = b.length; --d > -1;)
                                if (p = b[d], Math.abs(T[p] - w[p]) > .05) {
                                    _ = !1;
                                    break
                                } _ && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, d = b.length; --d > -1;) p = b[d], r[p] = -1 !== h.indexOf("," + p + ","), x[p] = u(t, p, r[p], f);
                        for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                        if (!l) {
                            for (d = b.length; --d > -1;)
                                if (r[p])
                                    for (g = x[b[d]], y = g.length - 1, m = 0; y > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m], n[m] = (n[m] || 0) + v * v;
                            for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                        }
                        for (d = b.length, m = s ? 4 : 1; --d > -1;) p = b[d], g = x[p], c(g, o, s, l, r[p]), _ && (g.splice(0, m), g.splice(g.length - m, m));
                        return x
                    },
                    f = function(t, e, i) {
                        e = e || "soft";
                        var n, r, o, a, l, c, u, h, f, d, p, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (f in t[0]) y.push(f);
                        for (c = y.length; --c > -1;) {
                            for (f = y[c], g[f] = l = [], d = 0, h = t.length, u = 0; h > u; u++) n = null == i ? t[u][f] : "string" == typeof(p = t[u][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && u > 1 && h - 1 > u && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                            for (h = d - m + 1, d = 0, u = 0; h > u; u += m) n = l[u], r = l[u + 1], o = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[d++] = p = 3 === m ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            l.length = d
                        }
                        return g
                    },
                    d = function(t, e, i) {
                        for (var n, r, o, s, a, l, c, u, h, f, d, p = 1 / i, g = t.length; --g > -1;)
                            for (f = t[g], o = f.a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) c = p * u, h = 1 - c, n = r - (r = (c * c * s + 3 * h * (c * a + h * l)) * c), d = g * i + u - 1, e[d] = (e[d] || 0) + n * n
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = e - 1,
                            h = [],
                            f = [];
                        for (i in t) d(t[i], s, e);
                        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, f[o] = l, o === u && (c += l, o = n / e >> 0, h[o] = f, a[o] = c, l = 0, f = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: h
                        }
                    },
                    g = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, o, s, a, l = e.values || [],
                                c = {},
                                u = l[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in u) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var g = p(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) n = d[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = d[o][2], this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, o, s, a, l, c, u, h, f = this._segCount,
                                d = this._func,
                                p = this._target,
                                g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (c = f - 1; c > r && (this._l2 = u[++r]) <= e;);
                                    this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                    for (c = h.length - 1; c > r && (this._s2 = h[++r]) <= e;);
                                    this._s1 = h[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), d[o] ? p[o](l) : p[o] = l;
                            if (this._autoRotate) {
                                var m, v, y, _, w, x, b, T = this._autoRotate;
                                for (r = T.length; --r > -1;) o = T[r][2], x = T[r][3] || 0, b = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], m = this._beziers[T[r][1]], s && m && (s = s[i], m = m[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = m.a + (m.b - m.a) * a, w = m.b + (m.c - m.b) * a, y += (w - y) * a, w += (m.c + (m.d - m.c) * a - w) * a, l = g ? Math.atan2(w - y, _ - v) * b + x : this._initialRotations[r], d[o] ? p[o](l) : p[o] = l)
                            }
                        }
                    }),
                    m = g.prototype;
                g.bezierThrough = h, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                    return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, g._cssRegister = function() {
                    var t = o.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, o, s, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new g;
                                var c, u, h, f = e.values,
                                    d = f.length - 1,
                                    p = [],
                                    m = {};
                                if (0 > d) return a;
                                for (c = 0; d >= c; c++) h = i(t, f[c], s, a, l, d !== c), p[c] = h.end;
                                for (u in e) m[u] = e[u];
                                return m.values = p, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != h.end.x && [
                                    ["x", "y", "rotation", c, !1]
                                ]), m.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform), l._onInitTween(h.proxy, m, s._tween), a
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, o, s = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = s.prototype = new t("css");
                c.constructor = s, s.version = "1.18.2", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var u, h, f, d, p, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    b = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    M = Math.PI / 180,
                    N = 180 / Math.PI,
                    L = {},
                    I = document,
                    z = function(t) {
                        return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) : I.createElement(t)
                    },
                    F = z("div"),
                    j = z("img"),
                    B = s._internals = {
                        _specialProps: l
                    },
                    $ = navigator.userAgent,
                    q = function() {
                        var t = $.indexOf("Android"),
                            e = z("a");
                        return f = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === t || Number($.substr(t + 8, 1)) > 3), p = f && Number($.substr($.indexOf("Version/") + 8, 1)) < 6, d = -1 !== $.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    H = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    Y = "",
                    U = function(t, e) {
                        e = e || F;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], X = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    V = I.defaultView ? I.defaultView.getComputedStyle : function() {},
                    G = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return q || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || V(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : H(t)
                    },
                    Q = B.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, c, u = A.test(i),
                            h = t,
                            f = F.style,
                            d = 0 > n;
                        if (d && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = t.parentNode || I.body, l = h._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                f[u ? "width" : "height"] = n + r
                            }
                            h.appendChild(F), a = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(F), u && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = a / n * 100), 0 !== a || o || (a = Q(t, i, n, r, !0))
                        }
                        return d ? -a : a
                    },
                    K = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    Z = function(t, e) {
                        var i, n, r, o = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || kt === r) && (o[r.replace(C, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || St === i) && (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(C, O)] = e[i]);
                        return q || (o.opacity = H(t)), n = zt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Pt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    J = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            c = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(_, "") ? o : 0 : K(t, s), void 0 !== c[s] && (a = new pt(c, s, c[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            o = r.length;
                        for (i = i || V(t, null); --o > -1;) n -= parseFloat(G(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ot = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    st = function(t, e, i, n) {
                        var r, o, s, a, l, c = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), c > a && a > -c && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ct = s.parseColor = function(t, e) {
                        var i, n, r, o, s, a, l, c, u, h, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(m), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(v)
                                    } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(s + 1 / 3, n, r), i[1] = lt(s, n, r), i[2] = lt(s - 1 / 3, n, r);
                                else i = t.match(m) || at.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = at.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), l = (c + u) / 2, c === u ? s = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === n ? (r - o) / h + (o > r ? 6 : 0) : c === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ut = function(t, e) {
                        var i, n, r, o = t.match(ht) || [],
                            s = 0,
                            a = o.length ? "" : t;
                        for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = ct(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (c in at) ht += "|" + c + "\\b";
                ht = new RegExp(ht + ")", "gi"), s.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ht.lastIndex = 0, ht.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ut(t[0], e), t[1] = ut(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                var ft = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(ht) || [""])[0] : "",
                            s = t.split(o).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = s.length,
                            h = u > 0 ? s[0].replace(m, "") : "";
                        return u ? r = e ? function(t) {
                            var e, f, d, p;
                            if ("number" == typeof t) t += h;
                            else if (n && R.test(t)) {
                                for (p = t.replace(R, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                                return p.join(",")
                            }
                            if (e = (t.match(ht) || [o])[0], f = t.split(e).join("").match(y) || [], d = f.length, u > d--)
                                for (; ++d < u;) f[d] = i ? f[(d - 1) / 2 | 0] : s[d];
                            return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, f;
                            if ("number" == typeof t) t += h;
                            else if (n && R.test(t)) {
                                for (o = t.replace(R, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                                return o.join(",")
                            }
                            if (e = t.match(y) || [], f = e.length, u > f--)
                                for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : s[f];
                            return a + e.join(c) + l
                        } : function(t) {
                            return t
                        }
                    },
                    dt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    pt = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, c = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : c > e && e > -c && (e = 0), l.t[l.p] = e, l = l._next;
                        if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                            for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = r
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    gt = (B._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, c, u, h = n,
                            f = {},
                            d = {},
                            p = i._transform,
                            g = L;
                        for (i._transform = null, L = e, n = u = i.parse(t, e, n, r), L = g, o && (i._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (n.type <= 1 && (a = n.p, d[a] = n.s + n.c, f[a] = n.s, o || (c = new pt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, d[a] = n.data[l], f[a] = n[l], o || (c = new pt(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: d,
                            firstMPT: c,
                            pt: u
                        }
                    }, B.CSSPropTween = function(t, e, n, r, s, a, l, c, u, h, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof gt || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
                    }),
                    mt = function(t, e, i, n, r, o) {
                        var s = new gt(t, e, i, n - i, r, (-1), o);
                        return s.b = i, s.e = s.xs0 = n, s
                    },
                    vt = s.parseComplex = function(t, e, i, n, r, o, s, a, l, c) {
                        i = i || o || "", s = new gt(t, e, 0, 0, s, c ? 2 : 1, null, (!1), a, i, n), n += "";
                        var h, f, d, p, g, y, _, w, x, b, T, S, k, C = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            O = C.length,
                            A = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(R, ", ").split(" "), P = P.join(" ").replace(R, ", ").split(" "), O = C.length), O !== P.length && (C = (o || "").split(" "), O = C.length), s.plugin = l, s.setRatio = c, ht.lastIndex = 0, h = 0; O > h; h++)
                            if (p = C[h], g = P[h], w = parseFloat(p), w || 0 === w) s.appendXtra("", w, rt(g, w), g.replace(v, ""), A && -1 !== g.indexOf("px"), !0);
                            else if (r && ht.test(p)) S = "," === g.charAt(g.length - 1) ? ")," : ")", k = -1 !== g.indexOf("hsl") && q, p = ct(p, k), g = ct(g, k), x = p.length + g.length > 6, x && !q && 0 === g[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[h]).join("transparent")) : (q || (x = !1), k ? s.appendXtra(x ? "hsla(" : "hsl(", p[0], rt(g[0], p[0]), ",", !1, !0).appendXtra("", p[1], rt(g[1], p[1]), "%,", !1).appendXtra("", p[2], rt(g[2], p[2]), x ? "%," : "%" + S, !1) : s.appendXtra(x ? "rgba(" : "rgb(", p[0], g[0] - p[0], ",", !0, !0).appendXtra("", p[1], g[1] - p[1], ",", !0).appendXtra("", p[2], g[2] - p[2], x ? "," : S, !0), x && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (g.length < 4 ? 1 : g[3]) - p, S, !1))), ht.lastIndex = 0;
                        else if (y = p.match(m)) {
                            if (_ = g.match(v), !_ || _.length !== y.length) return s;
                            for (d = 0, f = 0; f < y.length; f++) T = y[f], b = p.indexOf(T, d), s.appendXtra(p.substr(d, b - d), Number(T), rt(_[f], T), "", A && "px" === p.substr(b + T.length, 2), 0 === f), d = b + T.length;
                            s["xs" + s.l] += p.substr(d)
                        } else s["xs" + s.l] += s.l ? " " + g : g;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (S = s.xs0 + s.data.s, h = 1; h < s.l; h++) S += s["xs" + h] + s.data["xn" + h];
                            s.e = S + s["xs" + h]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    yt = 9;
                for (c = gt.prototype, c.l = c.pr = 0; --yt > 0;) c["xn" + yt] = 0, c["xs" + yt] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new gt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var _t = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    wt = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new _t(o[n], e)
                    },
                    xt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            wt(t, {
                                parser: function(t, i, n, r, o, s, c) {
                                    var u = a.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, c)) : (W("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                c = _t.prototype, c.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, c, u, h, f = this.keyword;
                    if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : f && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && (u = e.indexOf(f), h = i.indexOf(f), u !== h && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === u && (a[s] += " " + f)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return vt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, c.parse = function(t, e, i, n, o, s, a) {
                    return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function(t, e, i) {
                    wt(t, {
                        parser: function(t, n, r, o, s, a, l) {
                            var c = new gt(t, r, 0, 0, s, 2, r, (!1), i);
                            return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                        },
                        priority: i
                    })
                }, s.useSVGTransformAttr = f || d;
                var bt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    St = U("transform"),
                    kt = X + "transform",
                    Ct = U("transformOrigin"),
                    Pt = null !== U("perspective"),
                    Ot = B.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !Pt) && (s.defaultForce3D || "auto")
                    },
                    At = window.SVGElement,
                    Et = function(t, e, i) {
                        var n, r = I.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Dt = I.documentElement,
                    Rt = function() {
                        var t, e, i, n = g || /Android/i.test($) && !window.chrome;
                        return I.createElementNS && !n && (t = Et("svg", Dt), e = Et("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[St] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && Pt), Dt.removeChild(t)), n
                    }(),
                    Mt = function(t, e, i, n, r) {
                        var o, a, l, c, u, h, f, d, p, g, m, v, y, _, w = t._gsTransform,
                            x = It(t, !0);
                        w && (y = w.xOrigin, _ = w.yOrigin), (!n || (o = n.split(" ")).length < 2) && (f = t.getBBox(), e = nt(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = c = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), n && x !== Lt && (h = x[0], f = x[1], d = x[2], p = x[3], g = x[4], m = x[5], v = h * p - f * d, a = c * (p / v) + u * (-d / v) + (d * m - p * g) / v, l = c * (-f / v) + u * (h / v) - (h * m - f * g) / v, c = i.xOrigin = o[0] = a, u = i.yOrigin = o[1] = l), w && (r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (a = c - y, l = u - _, w.xOffset += a * x[0] + l * x[2] - a, w.yOffset += a * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    Nt = function(t) {
                        return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Lt = [1, 0, 0, 1, 0, 0],
                    It = function(t, e) {
                        var i, n, r, o, s, a = t._gsTransform || new Ot,
                            l = 1e5;
                        if (St ? n = G(t, kt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(E), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Nt(t)) && (i && -1 !== (t.style[St] + "").indexOf("matrix") && (n = t.style[St], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Lt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], yt = r.length; --yt > -1;) o = Number(r[yt]), r[yt] = (s = o - (o |= 0)) ? (s * l + (0 > s ? -.5 : .5) | 0) / l + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    zt = B.getTransform = function(t, i, n, o) {
                        if (t._gsTransform && n && !o) return t._gsTransform;
                        var a, l, c, u, h, f, d = n ? t._gsTransform || new Ot : new Ot,
                            p = d.scaleX < 0,
                            g = 2e-5,
                            m = 1e5,
                            v = Pt ? parseFloat(G(t, Ct, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            y = parseFloat(s.defaultTransformPerspective) || 0;
                        if (d.svg = !(!t.getBBox || !Nt(t)), d.svg && (Mt(t, G(t, Ct, r, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), bt = s.useSVGTransformAttr || Rt), a = It(t), a !== Lt) {
                            if (16 === a.length) {
                                var _, w, x, b, T, S = a[0],
                                    k = a[1],
                                    C = a[2],
                                    P = a[3],
                                    O = a[4],
                                    A = a[5],
                                    E = a[6],
                                    D = a[7],
                                    R = a[8],
                                    M = a[9],
                                    L = a[10],
                                    I = a[12],
                                    z = a[13],
                                    F = a[14],
                                    j = a[11],
                                    B = Math.atan2(E, L);
                                d.zOrigin && (F = -d.zOrigin, I = R * F - a[12], z = M * F - a[13], F = L * F + d.zOrigin - a[14]), d.rotationX = B * N, B && (b = Math.cos(-B), T = Math.sin(-B), _ = O * b + R * T, w = A * b + M * T, x = E * b + L * T, R = O * -T + R * b, M = A * -T + M * b, L = E * -T + L * b, j = D * -T + j * b, O = _, A = w, E = x), B = Math.atan2(-C, L), d.rotationY = B * N, B && (b = Math.cos(-B), T = Math.sin(-B), _ = S * b - R * T, w = k * b - M * T, x = C * b - L * T, M = k * T + M * b, L = C * T + L * b, j = P * T + j * b, S = _, k = w, C = x), B = Math.atan2(k, S), d.rotation = B * N, B && (b = Math.cos(-B), T = Math.sin(-B), S = S * b + O * T, w = k * b + A * T, A = k * -T + A * b, E = C * -T + E * b, k = w), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(S * S + k * k) * m + .5 | 0) / m, d.scaleY = (Math.sqrt(A * A + M * M) * m + .5 | 0) / m, d.scaleZ = (Math.sqrt(E * E + L * L) * m + .5 | 0) / m, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = I, d.y = z, d.z = F, d.svg && (d.x -= d.xOrigin - (d.xOrigin * S - d.yOrigin * O), d.y -= d.yOrigin - (d.yOrigin * k - d.xOrigin * A))
                            } else if ((!Pt || o || !a.length || d.x !== a[4] || d.y !== a[5] || !d.rotationX && !d.rotationY) && (void 0 === d.x || "none" !== G(t, "display", i))) {
                                var $ = a.length >= 6,
                                    q = $ ? a[0] : 1,
                                    H = a[1] || 0,
                                    W = a[2] || 0,
                                    X = $ ? a[3] : 1;
                                d.x = a[4] || 0, d.y = a[5] || 0, c = Math.sqrt(q * q + H * H), u = Math.sqrt(X * X + W * W), h = q || H ? Math.atan2(H, q) * N : d.rotation || 0, f = W || X ? Math.atan2(W, X) * N + h : d.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (p ? (c *= -1, f += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (u *= -1, f += 0 >= f ? 180 : -180)), d.scaleX = c, d.scaleY = u, d.rotation = h, d.skewX = f, Pt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = y, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * q + d.yOrigin * W), d.y -= d.yOrigin - (d.xOrigin * H + d.yOrigin * X))
                            }
                            d.zOrigin = v;
                            for (l in d) d[l] < g && d[l] > -g && (d[l] = 0)
                        }
                        return n && (t._gsTransform = d, d.svg && (bt && t.style[St] ? e.delayedCall(.001, function() {
                            $t(t.style, St)
                        }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), d
                    },
                    Ft = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * M,
                            o = r + n.skewX * M,
                            s = 1e5,
                            a = (Math.cos(r) * n.scaleX * s | 0) / s,
                            l = (Math.sin(r) * n.scaleX * s | 0) / s,
                            c = (Math.sin(o) * -n.scaleY * s | 0) / s,
                            u = (Math.cos(o) * n.scaleY * s | 0) / s,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -c, c = -i, e = f.filter, h.filter = "";
                            var d, p, m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== f.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                b = n.x + m * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (d = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, p = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, b += d - (d * a + p * l), T += p - (d * c + p * u)), y ? (d = m / 2, p = v / 2, _ += ", Dx=" + (d - (d * a + p * l) + b) + ", Dy=" + (p - (d * c + p * u) + T) + ")") : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(D, _) : h.filter = _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === _.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                                var S, k, C, P = 8 > g ? 1 : -1;
                                for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + T), yt = 0; 4 > yt; yt++) k = et[yt], S = f[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, k, parseFloat(S), S.replace(w, "")) || 0, C = i !== n[k] ? 2 > yt ? -n.ieOffsetX : -n.ieOffsetY : 2 > yt ? d - n.ieOffsetX : p - n.ieOffsetY, h[k] = (n[k] = Math.round(i - C * (0 === yt || 2 === yt ? 1 : P))) + "px"
                            }
                        }
                    },
                    jt = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, c, u, h, f, p, g, m, v, y, _, w, x, b, T, S, k = this.data,
                            C = this.t.style,
                            P = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            E = k.scaleX,
                            D = k.scaleY,
                            R = k.scaleZ,
                            N = k.x,
                            L = k.y,
                            I = k.z,
                            z = k.svg,
                            F = k.perspective,
                            j = k.force3D;
                        if (((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !I && !F && !A && !O && 1 === R || bt && z || !Pt) return void(P || k.skewX || z ? (P *= M, T = k.skewX * M, S = 1e5, e = Math.cos(P) * E, r = Math.sin(P) * E, i = Math.sin(P - T) * -D, o = Math.cos(P - T) * D, T && "simple" === k.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, o *= y, k.skewY && (e *= y, r *= y)), z && (N += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, L += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset, bt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), N += .01 * k.xPercent * g.width, L += .01 * k.yPercent * g.height), g = 1e-6, g > N && N > -g && (N = 0), g > L && L > -g && (L = 0)), w = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + N + "," + L + ")", z && bt ? this.t.setAttribute("transform", "matrix(" + w) : C[St] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : C[St] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + D + "," + N + "," + L + ")");
                        if (d && (g = 1e-4, g > E && E > -g && (E = R = 2e-5), g > D && D > -g && (D = R = 2e-5), !F || k.z || k.rotationX || k.rotationY || (F = 0)), P || k.skewX) P *= M, m = e = Math.cos(P), v = r = Math.sin(P), k.skewX && (P -= k.skewX * M, m = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (y = Math.tan(k.skewX * M), y = Math.sqrt(1 + y * y), m *= y, v *= y, k.skewY && (e *= y, r *= y))), i = -v, o = m;
                        else {
                            if (!(A || O || 1 !== R || F || z)) return void(C[St] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + L + "px," + I + "px)" + (1 !== E || 1 !== D ? " scale(" + E + "," + D + ")" : ""));
                            e = o = 1, i = r = 0
                        }
                        c = 1, n = s = a = l = u = h = 0, f = F ? -1 / F : 0, p = k.zOrigin, g = 1e-6, x = ",", b = "0", P = A * M, P && (m = Math.cos(P), v = Math.sin(P), a = -v, u = f * -v, n = e * v, s = r * v, c = m, f *= m, e *= m, r *= m), P = O * M, P && (m = Math.cos(P), v = Math.sin(P), y = i * m + n * v, _ = o * m + s * v, l = c * v, h = f * v, n = i * -v + n * m, s = o * -v + s * m, c *= m, f *= m, i = y, o = _), 1 !== R && (n *= R, s *= R, c *= R, f *= R), 1 !== D && (i *= D, o *= D, l *= D, h *= D), 1 !== E && (e *= E, r *= E, a *= E, u *= E), (p || z) && (p && (N += n * -p, L += s * -p, I += c * -p + p), z && (N += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, L += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset), g > N && N > -g && (N = b), g > L && L > -g && (L = b), g > I && I > -g && (I = 0)), w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > e && e > -g ? b : e) + x + (g > r && r > -g ? b : r) + x + (g > a && a > -g ? b : a), w += x + (g > u && u > -g ? b : u) + x + (g > i && i > -g ? b : i) + x + (g > o && o > -g ? b : o), O || A || 1 !== R ? (w += x + (g > l && l > -g ? b : l) + x + (g > h && h > -g ? b : h) + x + (g > n && n > -g ? b : n), w += x + (g > s && s > -g ? b : s) + x + (g > c && c > -g ? b : c) + x + (g > f && f > -g ? b : f) + x) : w += ",0,0,0,0,1,0,", w += N + x + L + x + I + x + (F ? 1 + -I / F : 1) + ")", C[St] = w
                    };
                c = Ot.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var c, u, h, f, d, p, g, m, v, y, _ = t._gsTransform,
                            w = t.style,
                            x = 1e-6,
                            b = Tt.length,
                            T = l,
                            S = {},
                            k = "transformOrigin";
                        if (l.display ? (f = G(t, "display"), w.display = "block", c = zt(t, r, !0, l.parseTransform), w.display = f) : c = zt(t, r, !0, l.parseTransform), n._transform = c, "string" == typeof T.transform && St) f = F.style, f[St] = T.transform, f.display = "block", f.position = "absolute", I.body.appendChild(F), u = zt(F, null, !1), I.body.removeChild(F), u.perspective || (u.perspective = c.perspective), null != T.xPercent && (u.xPercent = ot(T.xPercent, c.xPercent)), null != T.yPercent && (u.yPercent = ot(T.yPercent, c.yPercent));
                        else if ("object" == typeof T) {
                            if (u = {
                                    scaleX: ot(null != T.scaleX ? T.scaleX : T.scale, c.scaleX),
                                    scaleY: ot(null != T.scaleY ? T.scaleY : T.scale, c.scaleY),
                                    scaleZ: ot(T.scaleZ, c.scaleZ),
                                    x: ot(T.x, c.x),
                                    y: ot(T.y, c.y),
                                    z: ot(T.z, c.z),
                                    xPercent: ot(T.xPercent, c.xPercent),
                                    yPercent: ot(T.yPercent, c.yPercent),
                                    perspective: ot(T.transformPerspective, c.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (f in m) T[f] = m[f];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (u.x = 0, u.xPercent = ot(T.x, c.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (u.y = 0, u.yPercent = ot(T.y, c.yPercent)), u.rotation = st("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : c.rotation, c.rotation, "rotation", S), Pt && (u.rotationX = st("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : c.rotationX || 0, c.rotationX, "rotationX", S), u.rotationY = st("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : c.rotationY || 0, c.rotationY, "rotationY", S)), u.skewX = null == T.skewX ? c.skewX : st(T.skewX, c.skewX), u.skewY = null == T.skewY ? c.skewY : st(T.skewY, c.skewY), (h = u.skewY - c.skewY) && (u.skewX += h, u.rotation += h)
                        }
                        for (Pt && null != T.force3D && (c.force3D = T.force3D, g = !0), c.skewType = T.skewType || c.skewType || s.defaultSkewType, p = c.force3D || c.z || c.rotationX || c.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == T.scale || (u.scaleZ = 1); --b > -1;) i = Tt[b], d = u[i] - c[i], (d > x || -x > d || null != T[i] || null != L[i]) && (g = !0, o = new gt(c, i, c[i], d, o), i in S && (o.e = S[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return d = T.transformOrigin, c.svg && (d || T.svgOrigin) && (v = c.xOffset, y = c.yOffset, Mt(t, nt(d), u, T.svgOrigin, T.smoothOrigin), o = mt(c, "xOrigin", (_ ? c : u).xOrigin, u.xOrigin, o, k), o = mt(c, "yOrigin", (_ ? c : u).yOrigin, u.yOrigin, o, k), (v !== c.xOffset || y !== c.yOffset) && (o = mt(c, "xOffset", _ ? v : c.xOffset, c.xOffset, o, k), o = mt(c, "yOffset", _ ? y : c.yOffset, c.yOffset, o, k)), d = bt ? null : "0px 0px"), (d || Pt && p && c.zOrigin) && (St ? (g = !0, i = Ct, d = (d || G(t, i, r, !1, "50% 50%")) + "", o = new gt(w, i, 0, 0, o, (-1), k), o.b = w[i], o.plugin = a, Pt ? (f = c.zOrigin, d = d.split(" "), c.zOrigin = (d.length > 2 && (0 === f || "0px" !== d[2]) ? parseFloat(d[2]) : f) || 0, o.xs0 = o.e = d[0] + " " + (d[1] || "50%") + " 0px", o = new gt(c, "zOrigin", 0, 0, o, (-1), o.n), o.b = f, o.xs0 = o.e = c.zOrigin) : o.xs0 = o.e = d) : nt(d + "", c)), g && (n._transformType = c.svg && bt || !p && 3 !== this._transformType ? 2 : 3), o
                    },
                    prefix: !0
                }), wt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), wt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, s, a) {
                        e = this.format(e);
                        var l, c, u, h, f, d, p, g, m, v, y, _, w, x, b, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = U(S[c])), f = h = G(t, S[c], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), d = u = l[c], p = parseFloat(f), _ = f.substr((p + "").length), w = "=" === d.charAt(1), w ? (g = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), g *= parseFloat(d), y = d.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(d), y = d.substr((g + "").length)), "" === y && (y = n[i] || _), y !== _ && (x = Q(t, "borderLeft", p, _), b = Q(t, "borderTop", p, _), "%" === y ? (f = x / m * 100 + "%", h = b / v * 100 + "%") : "em" === y ? (T = Q(t, "borderLeft", 1, "em"), f = x / T + "em", h = b / T + "em") : (f = x + "px", h = b + "px"), w && (d = parseFloat(f) + g + y, u = parseFloat(h) + g + y)), s = vt(k, S[c], f + " " + h, d + " " + u, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), wt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c, u, h, f, d = "background-position",
                            p = r || V(t, null),
                            m = this.format((p ? g ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (f = G(t, "backgroundImage").replace(P, ""), f && "none" !== f)) {
                            for (a = m.split(" "), l = v.split(" "), j.setAttribute("src", f), c = 2; --c > -1;) m = a[c], u = -1 !== m.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[c] = u ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(t.style, m, v, o, s)
                    },
                    formatter: nt
                }), wt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), wt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), wt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), wt("transformStyle", {
                    prefix: !0
                }), wt("backfaceVisibility", {
                    prefix: !0
                }), wt("userSelect", {
                    prefix: !0
                }), wt("margin", {
                    parser: dt("marginTop,marginRight,marginBottom,marginLeft")
                }), wt("padding", {
                    parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), wt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c;
                        return 9 > g ? (l = t.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), wt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), wt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), wt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), wt("borderWidth", {
                    parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), wt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, o) {
                        var s = t.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new gt(s, a, 0, 0, r, (-1), i, (!1), 0, s[a], e)
                    }
                });
                var Bt = function(t) {
                    var e, i = this.t,
                        n = i.filter || G(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                };
                wt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(G(t, "opacity", r, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), q ? o = new gt(l, "opacity", a, e - a, o) : (o = new gt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Bt), c && (o = new gt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var $t = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    qt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                wt("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var c, u, h, f, d, p = t.getAttribute("class") || "",
                            g = t.style.cssText;
                        if (s = o._classNamePT = new gt(t, n, 0, 0, s, 2), s.setRatio = qt, s.pr = -11, i = !0, s.b = p, u = Z(t, r), h = t._gsClassPT) {
                            for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = J(t, u, Z(t), l, f), t.setAttribute("class", p), s.data = c.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, c.difs, s, a)
                    }
                });
                var Ht = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, s = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ct : l[i].p), $t(s, i);
                        r && ($t(s, St), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (wt("clearProps", {
                        parser: function(t, e, n, r, o) {
                            return o = new gt(t, n, 0, 0, o, 2), o.setRatio = Ht, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), yt = c.length; yt--;) xt(c[yt]);
                c = s.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = V(t, ""), o = this._overwriteProps;
                    var c, d, g, m, v, y, _, w, x, T = t.style;
                    if (h && "" === T.zIndex && (c = G(t, "zIndex", r), ("auto" === c || "" === c) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, c = Z(t, r), T.cssText = m + ";" + e, c = J(t, c, Z(t)).difs, !q && b.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, T.cssText = m), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, St ? f && (h = !0, "" === T.zIndex && (_ = G(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, g = d; g && g._next;) g = g._next;
                        w = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, g), w.setRatio = St ? jt : Ft, w.data = this._transform || zt(t, r, !0), w.tween = a, w.pr = -1, o.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (y = d._next, g = m; g && g.pr > d.pr;) g = g._next;
                            (d._prev = g ? g._prev : v) ? d._prev._next = d: m = d, (d._next = g) ? g._prev = d : v = d, d = y
                        }
                        this._firstPT = m
                    }
                    return !0
                }, c.parse = function(t, e, i, o) {
                    var s, a, c, h, f, d, p, g, m, v, y = t.style;
                    for (s in e) d = e[s], a = l[s], a ? i = a.parse(t, d, s, this, i, o, e) : (f = G(t, s, r) + "", m = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && S.test(d) ? (m || (d = ct(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = vt(y, s, f, d, !0, "transparent", i, 0, o)) : !m || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = parseFloat(f), p = c || 0 === c ? f.substr((c + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (c = it(t, s, r), p = "px") : "left" === s || "top" === s ? (c = K(t, s, r), p = "px") : (c = "opacity" !== s ? 0 : 1, p = "")), v = m && "=" === d.charAt(1), v ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), g = d.replace(w, "")) : (h = parseFloat(d), g = m ? d.replace(w, "") : ""), "" === g && (g = s in n ? n[s] : p), d = h || 0 === h ? (v ? h + c : h) + g : e[s], p !== g && "" !== g && (h || 0 === h) && c && (c = Q(t, s, c, p), "%" === g ? (c /= Q(t, s, 100, "%") / 100, e.strictUnits !== !0 && (f = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= Q(t, s, 1, g) : "px" !== g && (h = Q(t, s, h, g), g = "px"), v && (h || 0 === h) && (d = h + c + g)), v && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== y[s] && (d || d + "" != "NaN" && null != d) ? (i = new gt(y, s, h || c || 0, 0, i, (-1), s, (!1), 0, f, d), i.xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : f) : W("invalid " + s + " tween value: " + e[s]) : (i = new gt(y, s, c, h - c, i, 0, s, u !== !1 && ("px" === g || "zIndex" === s), 0, f, d), i.xs0 = g)) : i = vt(y, s, f, d, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, c.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, c._enableTransforms = function(t) {
                    this._transform = this._transform || zt(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Wt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Wt, n.data = this
                }, c._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, c._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var Xt = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Xt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(Z(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Xt(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, s, a, l = e.to(t, i, n),
                        c = [l],
                        u = [],
                        h = [],
                        f = [],
                        d = e._internals.reservedProps;
                    for (t = l._targets || l.target, Xt(t, u, f), l.render(i, !0, !0), Xt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (o = J(f[r], u[r], h[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) d[s] && (o[s] = n[s]);
                            a = {};
                            for (s in o) a[s] = u[r][s];
                            c.push(e.fromTo(f[r], i, a, o))
                        } return c
                }, t.activate([s]), s
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = 1;
                    for (s = o.length; --s > -1;)
                        for (t = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, o, s, a, l, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = s - o, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= c, a !== a % (c / 2) && (a = 0 > a ? a + c : a - c)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * c) % c - (a / c | 0) * c : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * c) % c - (a / c | 0) * c)), (a > u || -u > a) && (this._addTween(t, n, o, o + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    c = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    u = t.register || function() {},
                    h = function(t, e, i, n, r) {
                        var o = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return u(o, t), o
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    p = h("Back", d("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    g = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = g.prototype = new t;
                return m.constructor = g, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
                    return new g(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, h = 0 | (e.points || 20), d = h, p = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = p ? Math.random() : 1 / h * d, n = m ? m.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = o * o * .5 * v) : (o = 2 * (1 - i), r = o * o * .5 * v), p ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), d = h; --d > -1;) s = c[d], a = new f(s.x, s.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", c("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", c("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", c("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", c("SineOut", function(t) {
                    return Math.sin(t * a)
                }), c("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), c("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, o, s, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                c = l("com.greensock"),
                u = 1e-10,
                h = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                d = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                g = function(n, r, o, s) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(c) {
                        for (var u, h, f, d, m, v = r.length, y = v; --v > -1;)(u = p[r[v]] || new g(r[v], [])).gsClass ? (a[v] = u.gsClass, y--) : c && u.sc.push(this);
                        if (0 === y && o)
                            for (h = ("com.greensock." + n).split("."), f = h.pop(), d = l(h.join("."))[f] = this.gsClass = o.apply(o, a), s && (i[f] = d, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return d
                                }) : n === e && m && (module.exports = d)), v = 0; v < this.sc.length; v++) this.sc[v].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = c._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                w = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                x = w.map = {},
                b = w.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (o = l[u], r = n ? v("easing." + o, null, !0) : c.easing[o] || {}, s = h.length; --s > -1;) a = h[s], x[o + "." + a] = x[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = w.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, b(new w(null, null, 1, r), o, "easeOut", !0), b(new w(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), b(new w(null, null, 3, r), o, "easeInOut");
            x.linear = c.easing.Linear.easeIn, x.swing = c.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, l, c = this._listeners[t],
                    u = 0;
                for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1;) o = c[l], o.c === e && o.s === i ? c.splice(l, 1) : 0 === u && o.pr < r && (u = l + 1);
                c.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                P = C();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], k = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, o, l, c = this,
                    h = C(),
                    d = !(e === !1 || !S) && "auto",
                    p = 500,
                    g = 33,
                    m = "tick",
                    v = function(t) {
                        var e, s, a = C() - P;
                        a > p && (h += a - g), P += a, c.time = (P - h) / 1e3, e = c.time - l, (!i || e > 0 || t === !0) && (c.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(v)), s && c.dispatchEvent(m)
                    };
                T.call(c), c.time = c.frame = 0, c.tick = function() {
                    v(!0)
                }, c.lagSmoothing = function(t, e) {
                    p = t || 1 / u, g = Math.min(e, p, 0)
                }, c.sleep = function() {
                    null != r && (d && k ? k(r) : clearTimeout(r), n = f, r = null, c === s && (a = !1))
                }, c.wake = function(t) {
                    null !== r ? c.sleep() : t ? h += -P + (P = C()) : c.frame > 10 && (P = C() - p + 5), n = 0 === i ? f : d && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (l - c.time) + 1 | 0)
                    }, c === s && (a = !0), v(2)
                }, c.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), d = t, void c.fps(i)) : d
                }, c.fps(t), setTimeout(function() {
                    "auto" === d && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                }, 1500)
            }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
            var O = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    a || s.wake();
                    var i = this.vars.useFrames ? Y : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = O.ticker = new c.Ticker, o = O.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var A = function() {
                a && C() - P > 2e3 && s.wake(), setTimeout(A, 2e3)
            };
            A(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, i) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, o._enabled = function(t, e) {
                return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && G(), this.render(t, e, !1), N.length && G())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || s.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var E = v("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = E.prototype = new O, o.constructor = E, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, n) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? X[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                        for (this._targets = s = h(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(h(o))) : (this._siblings[r] = Q(o, this, !1), 1 === l && this._siblings[r].length > 1 && Z(o, this, null, 1, this._siblings[r])) : (o = s[r--] = D.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                R = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                M = function(t, e) {
                    var i, n = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!$[i] || $[i] && $[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = D.prototype = new O, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.18.2", D.defaultEase = o._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = s, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                s.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                L = {},
                I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                z = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function(t, e, i, n) {
                    var r, o, s, a, l, c, u, h = [t, e],
                        f = 0,
                        d = "",
                        p = 0;
                    for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(I) || [], o = e.match(I) || [], n && (n._next = null, n.blob = 1, h._firstPT = n), l = o.length, a = 0; l > a; a++) u = o[a], c = e.substr(f, e.indexOf(u, f) - f), d += c || !a ? c : ",", f += c.length, p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === r[a] || r.length <= a ? d += u : (d && (h.push(d), d = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: s,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), f += u.length;
                    return d += e.substr(f), d && h.push(d), h.setRatio = z, h
                },
                j = function(t, e, i, n, r, o, s, a) {
                    var l, c, u = "get" === i ? t[e] : i,
                        h = typeof t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === h,
                            pg: 0,
                            n: r || e,
                            r: o,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                        };
                    return "number" !== h && ("function" === h && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), d.s = u = s ? t[c](s) : t[c]()), "string" == typeof u && (s || isNaN(u)) ? (d.fp = s, l = F(u, n, a || D.defaultStringFilter, d), d = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : f || (d.s = parseFloat(u), d.c = parseFloat(n) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                B = D._internals = {
                    isArray: d,
                    isSelector: R,
                    lazyTweens: N,
                    blobDif: F
                },
                $ = D._plugins = {},
                q = B.tweenLookup = {},
                H = 0,
                W = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Y = O._rootFramesTimeline = new E,
                U = O._rootTimeline = new E,
                V = 30,
                G = B.lazyRender = function() {
                    var t, e = N.length;
                    for (L = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    N.length = 0
                };
            U._startTime = s.time, Y._startTime = s.frame, U._active = Y._active = !0, setTimeout(G, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (N.length && G(), U.render((s.time - U._startTime) * U._timeScale, !1, !1), Y.render((s.frame - Y._startTime) * Y._timeScale, !1, !1), N.length && G(), s.frame >= V) {
                    V = s.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in q) {
                        for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete q[i]
                    }
                    if (i = U._first, (!i || i._paused) && D.autoSleep && !Y._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", O._updateRoot);
            var Q = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (q[o || (t._gsTweenID = o = "t" + H++)] || (q[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = q[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return q[o].tweens
                },
                K = function(t, e, i, n) {
                    var r, o, s = t.vars.onOverwrite;
                    return s && (r = s(t, e, i, n)), s = D.onOverwrite, s && (o = s(t, e, i, n)), r !== !1 && o !== !1
                },
                Z = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var c, h = e._startTime + u,
                        f = [],
                        d = 0,
                        p = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || J(e, 0, p), 0 === J(a, c, p) && (f[d++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((p || !a._initted) && h - a._startTime <= 2e-10 || (f[d++] = a)));
                    for (o = d; --o > -1;)
                        if (a = f[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !K(a, e)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        } return s
                },
                J = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * u > o - e ? u : (o += t.totalDuration() / t._timeScale / r) > e + u ? 0 : o - e - u
                };
            o._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o) W[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, o.easeParams) : x[c] || D.defaultEase : D.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && D._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, r) {
                var o, s, a, l, c, u;
                if (null == e) return !1;
                L[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && $.css && this.vars.autoCSS !== !1 && M(this.vars, e);
                for (o in this.vars)
                    if (u = this.vars[o], W[o]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if ($[o] && (l = new $[o])._onInitTween(e, this.vars[o], this)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: l._priority
                        }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = j.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Z(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > c || 0 >= t && t >= -1e-7 || c === u && "isPause" !== this.data) && c !== t && (i = !0, c > u && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        f = this._easeType,
                        d = this._easePower;
                    (1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), 1 === f ? this.ratio = 1 - h : 2 === f ? this.ratio = h : .5 > t / l ? this.ratio = h / 2 : this.ratio = 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, N.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && s !== u && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, o, s, a, l, c, u, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (o in c) a[o] && (h || (h = []), h.push(o));
                            if ((h || !t) && !K(this, i, e, h)) return !1
                        }
                        for (o in c)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (a || s.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, o;
                if ((d(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = Q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (o = tt.prototype, tt.version = "1.18.0", tt.API = 2, o._firstPT = null, o._addTween = j, o.setRatio = z, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, o, s, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && ($[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = s.prototype = new tt(i);
                    a.constructor = s, s.API = t.API;
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return s.version = t.version, tt.activate([s]), s
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (o in p) p[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
            var n, r, o, s, a, l, c, u, h = {
                    css: {}
                },
                f = {
                    css: {}
                },
                d = {
                    css: {}
                },
                p = {
                    css: {}
                },
                g = _gsScope._gsDefine.globals,
                m = {},
                v = document,
                y = v.documentElement || {},
                _ = function(t) {
                    return v.createElementNS ? v.createElementNS("http://www.w3.org/1999/xhtml", t) : v.createElement(t)
                },
                w = _("div"),
                x = [],
                b = function() {
                    return !1
                },
                T = 180 / Math.PI,
                S = 999999999999999,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                C = !(v.addEventListener || !v.all),
                P = v.createElement("div"),
                O = [],
                A = {},
                E = 0,
                D = /^(?:a|input|textarea|button|select)$/i,
                R = 0,
                M = -1 !== navigator.userAgent.toLowerCase().indexOf("android"),
                N = 0,
                L = {},
                I = {},
                z = function(t) {
                    if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
                    var i, n = [],
                        r = t.length;
                    for (i = 0; i !== r; n.push(t[i++]));
                    return n
                },
                F = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                j = function() {
                    for (var t = O.length; --t > -1;) O[t]()
                },
                B = function(t) {
                    O.push(t), 1 === O.length && e.ticker.addEventListener("tick", j, this, !1, 1)
                },
                $ = function(t) {
                    for (var i = O.length; --i > -1;) O[i] === t && O.splice(i, 1);
                    e.to(q, 0, {
                        overwrite: "all",
                        delay: 15,
                        onComplete: q
                    })
                },
                q = function() {
                    O.length || e.ticker.removeEventListener("tick", j);
                },
                H = function(t, e) {
                    var i;
                    for (i in e) void 0 === t[i] && (t[i] = e[i]);
                    return t
                },
                W = function() {
                    return null != window.pageYOffset ? window.pageYOffset : null != v.scrollTop ? v.scrollTop : y.scrollTop || v.body.scrollTop || 0
                },
                X = function() {
                    return null != window.pageXOffset ? window.pageXOffset : null != v.scrollLeft ? v.scrollLeft : y.scrollLeft || v.body.scrollLeft || 0
                },
                Y = function(t, e) {
                    Mt(t, "scroll", e), V(t.parentNode) || Y(t.parentNode, e)
                },
                U = function(t, e) {
                    Nt(t, "scroll", e), V(t.parentNode) || U(t.parentNode, e)
                },
                V = function(t) {
                    return !(t && t !== y && t !== v && t !== v.body && t !== window && t.nodeType && t.parentNode)
                },
                G = function(t, e) {
                    var i = "x" === e ? "Width" : "Height",
                        n = "scroll" + i,
                        r = "client" + i,
                        o = v.body;
                    return Math.max(0, V(t) ? Math.max(y[n], o[n]) - (window["inner" + i] || y[r] || o[r]) : t[n] - t[r])
                },
                Q = function(t) {
                    var e = V(t),
                        i = G(t, "x"),
                        n = G(t, "y");
                    e ? t = I : Q(t.parentNode), t._gsMaxScrollX = i, t._gsMaxScrollY = n, t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0
                },
                K = function(t, e) {
                    return t = t || window.event, m.pageX = t.clientX + v.body.scrollLeft + y.scrollLeft, m.pageY = t.clientY + v.body.scrollTop + y.scrollTop, e && (t.returnValue = !1), m
                },
                Z = function(t) {
                    return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t
                },
                J = function(t, e) {
                    var i, r, o, s = t.style;
                    if (void 0 === s[e]) {
                        for (o = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5, i = e.charAt(0).toUpperCase() + e.substr(1); --r > -1 && void 0 === s[o[r] + i];);
                        if (0 > r) return "";
                        n = 3 === r ? "ms" : o[r], e = n + i
                    }
                    return e
                },
                tt = function(t, e, i) {
                    var n = t.style;
                    n && (void 0 === n[e] && (e = J(t, e)), null == i ? n.removeProperty ? n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(e) : void 0 !== n[e] && (n[e] = i))
                },
                et = v.defaultView ? v.defaultView.getComputedStyle : b,
                it = /(?:Left|Right|Width)/i,
                nt = /(?:\d|\-|\+|=|#|\.)*/g,
                rt = function(t, e, i, n, r) {
                    if ("px" === n || !n) return i;
                    if ("auto" === n || !i) return 0;
                    var o, s = it.test(e),
                        a = t,
                        l = w.style,
                        c = 0 > i;
                    return c && (i = -i), "%" === n && -1 !== e.indexOf("border") ? o = i / 100 * (s ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + st(t, "position", !0) + ";line-height:0;", "%" !== n && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || v.body, l[s ? "width" : "height"] = i + n), a.appendChild(w), o = parseFloat(w[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(w), 0 !== o || r || (o = rt(t, e, i, n, !0))), c ? -o : o
                },
                ot = function(t, e) {
                    if ("absolute" !== st(t, "position", !0)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        n = st(t, "margin" + i, !0);
                    return t["offset" + i] - (rt(t, e, parseFloat(n), (n + "").replace(nt, "")) || 0)
                },
                st = function(t, e, i) {
                    var n, r = (t._gsTransform || {})[e];
                    return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (n = et(t)) ? (r = n.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()), r = r || n.length ? r : n[e]) : t.currentStyle && (r = t.currentStyle[e]), "auto" !== r || "top" !== e && "left" !== e || (r = ot(t, e)), i ? r : parseFloat(r) || 0)
                },
                at = function(t, e, i) {
                    var n = t.vars,
                        r = n[i],
                        o = t._listeners[e];
                    "function" == typeof r && r.apply(n[i + "Scope"] || n.callbackScope || t, n[i + "Params"] || [t.pointerEvent]), o && t.dispatchEvent(e)
                },
                lt = function(t, e) {
                    var i, n, r, o = Z(t);
                    return o ? Ot(o, e) : void 0 !== t.left ? (r = bt(e), {
                        left: t.left - r.x,
                        top: t.top - r.y,
                        width: t.width,
                        height: t.height
                    }) : (n = t.min || t.minX || t.minRotation || 0, i = t.min || t.minY || 0, {
                        left: n,
                        top: i,
                        width: (t.max || t.maxX || t.maxRotation || 0) - n,
                        height: (t.max || t.maxY || 0) - i
                    })
                },
                ct = function() {
                    if (!v.createElementNS) return s = 0, void(a = !1);
                    var t, e, i, n, r = _("div"),
                        o = v.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        u = _("div"),
                        h = r.style,
                        f = v.body || y;
                    v.body && ft && (h.position = u.style.position = "absolute", f.appendChild(u), u.appendChild(r), h.height = "10px", n = r.offsetTop, u.style.border = "5px solid red", c = n !== r.offsetTop, f.removeChild(u)), h = o.style, o.setAttributeNS(null, "width", "400px"), o.setAttributeNS(null, "height", "400px"), o.setAttributeNS(null, "viewBox", "0 0 400 400"), h.display = "block", h.boxSizing = "border-box", h.border = "0px solid red", h.transform = "none", r.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", f.appendChild(r), r.appendChild(o), i = o.createSVGPoint().matrixTransform(o.getScreenCTM()), e = i.y, r.scrollTop = 100, i.x = i.y = 0, i = i.matrixTransform(o.getScreenCTM()), l = e - i.y < 100.1 ? 0 : e - i.y - 150, r.removeChild(o), f.removeChild(r), f.appendChild(o), t = o.getScreenCTM(), e = t.e, h.border = "50px solid red", t = o.getScreenCTM(), 0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (s = 1, a = !0) : (s = e !== t.e ? 1 : 0, a = 1 !== t.a), f.removeChild(o)
                },
                ut = "" !== J(w, "perspective"),
                ht = J(w, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                ft = J(w, "transform"),
                dt = ft.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                pt = {},
                gt = {},
                mt = window.SVGElement,
                vt = function(t) {
                    return !!(mt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                yt = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                _t = [],
                wt = [],
                xt = function(t) {
                    if (!t.getBoundingClientRect || !t.parentNode || !ft) return {
                        offsetTop: 0,
                        offsetLeft: 0,
                        scaleX: 1,
                        scaleY: 1,
                        offsetParent: y
                    };
                    if (Ht.cacheSVGData !== !1 && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame) return t._gsCache;
                    var i, n, r, o, c, u, h, f, d, p, g, m, _ = t,
                        w = Tt(t);
                    if (w.lastUpdate = e.ticker.frame, t.getBBox && !w.isSVGRoot) {
                        for (_ = t.parentNode, i = t.getBBox(); _ && "svg" !== (_.nodeName + "").toLowerCase();) _ = _.parentNode;
                        return o = xt(_), w.offsetTop = i.y * o.scaleY, w.offsetLeft = i.x * o.scaleX, w.scaleX = o.scaleX, w.scaleY = o.scaleY, w.offsetParent = _ || y, w
                    }
                    for (r = w.offsetParent, r === v.body && (r = y), wt.length = _t.length = 0; _ && (c = st(_, ft, !0), "matrix(1, 0, 0, 1, 0, 0)" !== c && "none" !== c && "translate3d(0px, 0px, 0px)" !== c && (wt.push(_), _t.push(_.style[ft]), _.style[ft] = "none"), _ !== r);) _ = _.parentNode;
                    for (n = r.getBoundingClientRect(), c = t.getScreenCTM(), f = t.createSVGPoint(), h = f.matrixTransform(c), f.x = f.y = 10, f = f.matrixTransform(c), w.scaleX = (f.x - h.x) / 10, w.scaleY = (f.y - h.y) / 10, void 0 === s && ct(), w.borderBox && !a && t.getAttribute("width") && (o = et(t) || {}, d = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth) || 0, p = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) || 0, g = parseFloat(o.width) || 0, m = parseFloat(o.height) || 0, w.scaleX *= (g - d) / g, w.scaleY *= (m - p) / m), l ? (i = t.getBoundingClientRect(), w.offsetLeft = i.left - n.left, w.offsetTop = i.top - n.top) : (w.offsetLeft = h.x - n.left, w.offsetTop = h.y - n.top), w.offsetParent = r, u = wt.length; --u > -1;) wt[u].style[ft] = _t[u];
                    return w
                },
                bt = function(t, i) {
                    if (i = i || {}, !t || t === y || !t.parentNode || t === window) return {
                        x: 0,
                        y: 0
                    };
                    var n = et(t),
                        r = ht && n ? n.getPropertyValue(ht) : "50% 50%",
                        o = r.split(" "),
                        s = -1 !== r.indexOf("left") ? "0%" : -1 !== r.indexOf("right") ? "100%" : o[0],
                        a = -1 !== r.indexOf("top") ? "0%" : -1 !== r.indexOf("bottom") ? "100%" : o[1];
                    return ("center" === a || null == a) && (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), t.getBBox && vt(t) ? (t._gsTransform || (e.set(t, {
                        x: "+=0",
                        overwrite: !1
                    }), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), r = t.getBBox(), i.x = t._gsTransform.xOrigin - r.x, i.y = t._gsTransform.yOrigin - r.y) : (t.getBBox && !t.offsetWidth && -1 !== (s + a).indexOf("%") && (t = t.getBBox(), t = {
                        offsetWidth: t.width,
                        offsetHeight: t.height
                    }), i.x = -1 !== s.indexOf("%") ? t.offsetWidth * parseFloat(s) / 100 : parseFloat(s), i.y = -1 !== a.indexOf("%") ? t.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), i
                },
                Tt = function(t) {
                    if (Ht.cacheSVGData !== !1 && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame) return t._gsCache;
                    var i, n = t._gsCache = t._gsCache || {},
                        r = et(t),
                        o = t.getBBox && vt(t),
                        s = "svg" === (t.nodeName + "").toLowerCase();
                    if (n.isSVG = o, n.isSVGRoot = s, n.borderBox = "border-box" === r.boxSizing, n.computedStyle = r, s)(n.offsetParent = t.offsetParent) || (i = t.parentNode || y, i.insertBefore(w, t), n.offsetParent = w.offsetParent || y, i.removeChild(w));
                    else if (o) {
                        for (i = t.parentNode; i && "svg" !== (i.nodeName + "").toLowerCase();) i = i.parentNode;
                        n.offsetParent = i
                    }
                    return n
                },
                St = function(t, e, i, n) {
                    if (t === window || !t || !t.style || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    var r, o, a, l, u, h, f, d, p, g, m, _, w, x, b = t._gsCache || Tt(t),
                        T = t.parentNode,
                        S = T._gsCache || Tt(T),
                        k = b.computedStyle,
                        C = b.isSVG ? S.offsetParent : T.offsetParent;
                    return r = b.isSVG && -1 !== (t.style[ft] + "").indexOf("matrix") ? t.style[ft] : k ? k.getPropertyValue(dt) : t.currentStyle ? t.currentStyle[ft] : "1,0,0,1,0,0", t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (r = t.getAttribute("transform")), r = (r + "").match(/(?:\-|\b)[\d\-\.e]+\b/g) || [1, 0, 0, 1, 0, 0], r.length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]), n ? r[4] = r[5] = 0 : b.isSVG && (u = t._gsTransform) && (u.xOrigin || u.yOrigin) && (r[0] = parseFloat(r[0]), r[1] = parseFloat(r[1]), r[2] = parseFloat(r[2]), r[3] = parseFloat(r[3]), r[4] = parseFloat(r[4]) - (u.xOrigin - (u.xOrigin * r[0] + u.yOrigin * r[2])), r[5] = parseFloat(r[5]) - (u.yOrigin - (u.xOrigin * r[1] + u.yOrigin * r[3]))), e && (void 0 === s && ct(), a = b.isSVG || b.isSVGRoot ? xt(t) : t, b.isSVG ? (l = t.getBBox(), g = S.isSVGRoot ? {
                        x: 0,
                        y: 0
                    } : T.getBBox(), a = {
                        offsetLeft: l.x - g.x,
                        offsetTop: l.y - g.y,
                        offsetParent: b.offsetParent
                    }) : b.isSVGRoot ? (m = parseInt(k.borderTopWidth, 10) || 0, _ = parseInt(k.borderLeftWidth, 10) || 0, w = (r[0] - s) * _ + r[2] * m, x = r[1] * _ + (r[3] - s) * m, h = e.x, f = e.y, d = h - (h * r[0] + f * r[2]), p = f - (h * r[1] + f * r[3]), r[4] = parseFloat(r[4]) + d, r[5] = parseFloat(r[5]) + p, e.x -= d, e.y -= p, h = a.scaleX, f = a.scaleY, e.x *= h, e.y *= f, r[0] *= h, r[1] *= f, r[2] *= h, r[3] *= f, yt || (e.x += w, e.y += x)) : !c && t.offsetParent && (e.x += parseInt(st(t.offsetParent, "borderLeftWidth"), 10) || 0, e.y += parseInt(st(t.offsetParent, "borderTopWidth"), 10) || 0), o = T === y || T === v.body, r[4] = Number(r[4]) + e.x + (a.offsetLeft || 0) - i.x - (o ? 0 : T.scrollLeft || 0), r[5] = Number(r[5]) + e.y + (a.offsetTop || 0) - i.y - (o ? 0 : T.scrollTop || 0), T && "fixed" === st(t, "position", k) && (r[4] += X(), r[5] += W()), T && T !== y && C === a.offsetParent && (r[4] -= T.offsetLeft || 0, r[5] -= T.offsetTop || 0, c || !T.offsetParent || b.isSVG || b.isSVGRoot || (r[4] -= parseInt(st(T.offsetParent, "borderLeftWidth"), 10) || 0, r[5] -= parseInt(st(T.offsetParent, "borderTopWidth"), 10) || 0))), r
                },
                kt = function(t, e) {
                    if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    for (var i, n, r, o, s, a, l, c, u = bt(t, pt), h = bt(t.parentNode, gt), f = St(t, u, h);
                        (t = t.parentNode) && t.parentNode && t !== y;) u = h, h = bt(t.parentNode, u === pt ? gt : pt), l = St(t, u, h), i = f[0], n = f[1], r = f[2], o = f[3], s = f[4], a = f[5], f[0] = i * l[0] + n * l[2], f[1] = i * l[1] + n * l[3], f[2] = r * l[0] + o * l[2], f[3] = r * l[1] + o * l[3], f[4] = s * l[0] + a * l[2] + l[4], f[5] = s * l[1] + a * l[3] + l[5];
                    return e && (i = f[0], n = f[1], r = f[2], o = f[3], s = f[4], a = f[5], c = i * o - n * r, f[0] = o / c, f[1] = -n / c, f[2] = -r / c, f[3] = i / c, f[4] = (r * a - o * s) / c, f[5] = -(i * a - n * s) / c), f
                },
                Ct = function(t, e, i, n, r) {
                    t = Z(t);
                    var o = kt(t, !1, r),
                        s = e.x,
                        a = e.y;
                    return i && (bt(t, e), s -= e.x, a -= e.y), n = n === !0 ? e : n || {}, n.x = s * o[0] + a * o[2] + o[4], n.y = s * o[1] + a * o[3] + o[5], n
                },
                Pt = function(t, e, i) {
                    var n = t.x * e[0] + t.y * e[2] + e[4],
                        r = t.x * e[1] + t.y * e[3] + e[5];
                    return t.x = n * i[0] + r * i[2] + i[4], t.y = n * i[1] + r * i[3] + i[5], t
                },
                Ot = function(t, e, i) {
                    if (!(t = Z(t))) return null;
                    e = Z(e);
                    var n, r, o, s, a, l, c, u, h, f, d, p, g, m, _, w, x, b, T, S, k, P, O = t.getBBox && vt(t);
                    if (t === window) s = W(), r = X(), o = r + (y.clientWidth || t.innerWidth || v.body.clientWidth || 0), a = s + ((t.innerHeight || 0) - 20 < y.clientHeight ? y.clientHeight : t.innerHeight || v.body.clientHeight || 0);
                    else {
                        if (void 0 === e || e === window) return t.getBoundingClientRect();
                        n = bt(t), r = -n.x, s = -n.y, O ? (p = t.getBBox(), g = p.width, m = p.height) : t.offsetWidth ? (g = t.offsetWidth, m = t.offsetHeight) : (k = et(t), g = parseFloat(k.width), m = parseFloat(k.height)), o = r + g, a = s + m, "svg" !== t.nodeName.toLowerCase() || C || (_ = xt(t), P = _.computedStyle || {}, b = (t.getAttribute("viewBox") || "0 0").split(" "), T = parseFloat(b[0]), S = parseFloat(b[1]), w = parseFloat(P.borderLeftWidth) || 0, x = parseFloat(P.borderTopWidth) || 0, o -= g - (g - w) / _.scaleX - T, a -= m - (m - x) / _.scaleY - S, r -= w / _.scaleX - T, s -= x / _.scaleY - S, k && (o += (parseFloat(P.borderRightWidth) + w) / _.scaleX, a += (x + parseFloat(P.borderBottomWidth)) / _.scaleY))
                    }
                    return t === e ? {
                        left: r,
                        top: s,
                        width: o - r,
                        height: a - s
                    } : (l = kt(t), c = kt(e, !0), u = Pt({
                        x: r,
                        y: s
                    }, l, c), h = Pt({
                        x: o,
                        y: s
                    }, l, c), f = Pt({
                        x: o,
                        y: a
                    }, l, c), d = Pt({
                        x: r,
                        y: a
                    }, l, c), r = Math.min(u.x, h.x, f.x, d.x), s = Math.min(u.y, h.y, f.y, d.y), L.x = L.y = 0, i && bt(e, L), {
                        left: r + L.x,
                        top: s + L.y,
                        width: Math.max(u.x, h.x, f.x, d.x) - r,
                        height: Math.max(u.y, h.y, f.y, d.y) - s
                    })
                },
                At = function(t) {
                    return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                },
                Et = function(t) {
                    var e, i, n, r = [],
                        o = t.length;
                    for (e = 0; o > e; e++)
                        if (i = t[e], At(i))
                            for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                        else i && 0 !== i.length && r.push(i);
                    return r
                },
                Dt = "ontouchstart" in y && "orientation" in window,
                Rt = function(t) {
                    for (var e = t.split(","), i = (void 0 !== w.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== w.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), n = {}, r = 8; --r > -1;) n[e[r]] = i[r], n[i[r]] = e[r];
                    return n
                }("touchstart,touchmove,touchend,touchcancel"),
                Mt = function(t, e, i, n) {
                    t.addEventListener ? t.addEventListener(Rt[e] || e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
                },
                Nt = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(Rt[e] || e, i) : t.detachEvent && t.detachEvent("on" + e, i)
                },
                Lt = function(t, e) {
                    for (var i = t.length; --i > -1;)
                        if (t[i].identifier === e) return !0;
                    return !1
                },
                It = function(t) {
                    r = t.touches && R < t.touches.length, Nt(t.target, "touchend", It)
                },
                zt = function(t) {
                    r = t.touches && R < t.touches.length, Mt(t.target, "touchend", It)
                },
                Ft = function(t, e, i, n, r, o) {
                    var s, a, l, c = {};
                    if (e)
                        if (1 !== r && e instanceof Array) {
                            for (c.end = s = [], l = e.length, a = 0; l > a; a++) s[a] = e[a] * r;
                            i += 1.1, n -= 1.1
                        } else "function" == typeof e ? c.end = function(i) {
                            return e.call(t, i) * r
                        } : c.end = e;
                    return (i || 0 === i) && (c.max = i), (n || 0 === n) && (c.min = n), o && (c.velocity = 0), c
                },
                jt = function(t) {
                    var e;
                    return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !D.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || jt(t.parentNode))
                },
                Bt = function(t, e) {
                    for (var i, n = t.length; --n > -1;) i = t[n], i.ondragstart = i.onselectstart = e ? null : b, tt(i, "userSelect", e ? "text" : "none")
                },
                $t = function() {
                    var t, e = v.createElement("div"),
                        i = v.createElement("div"),
                        n = i.style,
                        r = v.body || w;
                    return n.display = "inline-block", n.position = "relative", e.style.cssText = i.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", e.appendChild(i), r.appendChild(e), u = i.offsetHeight + 18 > e.scrollHeight, n.width = "100%", ft || (n.paddingRight = "500px", t = e.scrollLeft = e.scrollWidth - e.clientWidth, n.left = "-90px", t = t !== e.scrollLeft), r.removeChild(e), t
                }(),
                qt = function(t, i) {
                    t = Z(t), i = i || {};
                    var n, r, o, s, a, l, c = v.createElement("div"),
                        h = c.style,
                        f = t.firstChild,
                        d = 0,
                        p = 0,
                        g = t.scrollTop,
                        m = t.scrollLeft,
                        y = t.scrollWidth,
                        _ = t.scrollHeight,
                        w = 0,
                        x = 0,
                        b = 0;
                    ut && i.force3D !== !1 ? (a = "translate3d(", l = "px,0px)") : ft && (a = "translate(", l = "px)"), this.scrollTop = function(t, e) {
                        return arguments.length ? void this.top(-t, e) : -this.top()
                    }, this.scrollLeft = function(t, e) {
                        return arguments.length ? void this.left(-t, e) : -this.left()
                    }, this.left = function(n, r) {
                        if (!arguments.length) return -(t.scrollLeft + p);
                        var o = t.scrollLeft - m,
                            s = p;
                        return (o > 2 || -2 > o) && !r ? (m = t.scrollLeft, e.killTweensOf(this, !0, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-m), void(i.onKill && i.onKill())) : (n = -n, 0 > n ? (p = n - .5 | 0, n = 0) : n > x ? (p = n - x | 0, n = x) : p = 0, (p || s) && (a ? this._suspendTransforms || (h[ft] = a + -p + "px," + -d + l) : h.left = -p + "px", $t && p + w >= 0 && (h.paddingRight = p + w + "px")), t.scrollLeft = 0 | n, void(m = t.scrollLeft))
                    }, this.top = function(n, r) {
                        if (!arguments.length) return -(t.scrollTop + d);
                        var o = t.scrollTop - g,
                            s = d;
                        return (o > 2 || -2 > o) && !r ? (g = t.scrollTop, e.killTweensOf(this, !0, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-g), void(i.onKill && i.onKill())) : (n = -n, 0 > n ? (d = n - .5 | 0, n = 0) : n > b ? (d = n - b | 0, n = b) : d = 0, (d || s) && (a ? this._suspendTransforms || (h[ft] = a + -p + "px," + -d + l) : h.top = -d + "px"), t.scrollTop = 0 | n, void(g = t.scrollTop))
                    }, this.maxScrollTop = function() {
                        return b
                    }, this.maxScrollLeft = function() {
                        return x
                    }, this.disable = function() {
                        for (f = c.firstChild; f;) s = f.nextSibling, t.appendChild(f), f = s;
                        t === c.parentNode && t.removeChild(c)
                    }, this.enable = function() {
                        if (f = t.firstChild, f !== c) {
                            for (; f;) s = f.nextSibling, c.appendChild(f), f = s;
                            t.appendChild(c), this.calibrate()
                        }
                    }, this.calibrate = function(e) {
                        var i, s, a = t.clientWidth === n;
                        g = t.scrollTop, m = t.scrollLeft, (!a || t.clientHeight !== r || c.offsetHeight !== o || y !== t.scrollWidth || _ !== t.scrollHeight || e) && ((d || p) && (i = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), (!a || e) && (h.display = "block", h.width = "auto", h.paddingRight = "0px", w = Math.max(0, t.scrollWidth - t.clientWidth), w && (w += st(t, "paddingLeft") + (u ? st(t, "paddingRight") : 0))), h.display = "inline-block", h.position = "relative", h.overflow = "visible", h.verticalAlign = "top", h.width = "100%", h.paddingRight = w + "px", u && (h.paddingBottom = st(t, "paddingBottom", !0)), C && (h.zoom = "1"), n = t.clientWidth, r = t.clientHeight, y = t.scrollWidth, _ = t.scrollHeight, x = t.scrollWidth - n, b = t.scrollHeight - r, o = c.offsetHeight, h.display = "block", (i || s) && (this.left(i), this.top(s)))
                    }, this.content = c, this.element = t, this._suspendTransforms = !1, this.enable()
                },
                Ht = function(n, s) {
                    t.call(this, n), n = Z(n), o || (o = g.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = F(s || {}), this.target = n, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!s.allowEventDefault;
                    var a, l, c, u, m, _, w, b, O, D, L, j, q, W, X, G, J, et, it, nt, rt, ot, ct, ut, ht, ft, dt, pt, gt, mt, vt, yt, _t, wt = (s.type || (C ? "top,left" : "x,y")).toLowerCase(),
                        xt = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("y"),
                        bt = -1 !== wt.indexOf("rotation"),
                        Tt = bt ? "rotation" : xt ? "x" : "left",
                        St = xt ? "y" : "top",
                        Pt = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("left") || "scroll" === wt,
                        Ot = -1 !== wt.indexOf("y") || -1 !== wt.indexOf("top") || "scroll" === wt,
                        At = s.minimumMovement || 2,
                        Et = this,
                        It = z(s.trigger || s.handle || n),
                        $t = {},
                        Wt = 0,
                        Xt = !1,
                        Yt = s.clickableTest || jt,
                        Vt = function(t) {
                            if (Et.autoScroll && (Xt || Et.isDragging && et)) {
                                var e, i, r, o, s, a, c, u, h = n,
                                    f = 15 * Et.autoScroll;
                                for (Xt = !1, I.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != y.scrollTop ? y.scrollTop : v.body.scrollTop, I.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != y.scrollLeft ? y.scrollLeft : v.body.scrollLeft, o = Et.pointerX - I.scrollLeft, s = Et.pointerY - I.scrollTop; h && !i;) i = V(h.parentNode), e = i ? I : h.parentNode, r = i ? {
                                    bottom: Math.max(y.clientHeight, window.innerHeight || 0),
                                    right: Math.max(y.clientWidth, window.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : e.getBoundingClientRect(), a = c = 0, Ot && (u = e._gsMaxScrollY - e.scrollTop, 0 > u ? c = u : s > r.bottom - 40 && u ? (Xt = !0, c = Math.min(u, f * (1 - Math.max(0, r.bottom - s) / 40) | 0)) : s < r.top + 40 && e.scrollTop && (Xt = !0, c = -Math.min(e.scrollTop, f * (1 - Math.max(0, s - r.top) / 40) | 0)), c && (e.scrollTop += c)), Pt && (u = e._gsMaxScrollX - e.scrollLeft, 0 > u ? a = u : o > r.right - 40 && u ? (Xt = !0, a = Math.min(u, f * (1 - Math.max(0, r.right - o) / 40) | 0)) : o < r.left + 40 && e.scrollLeft && (Xt = !0, a = -Math.min(e.scrollLeft, f * (1 - Math.max(0, o - r.left) / 40) | 0)), a && (e.scrollLeft += a)), i && (a || c) && (window.scrollTo(e.scrollLeft, e.scrollTop), se(Et.pointerX + a, Et.pointerY + c)), h = e
                            }
                            if (et) {
                                var d = Et.x,
                                    p = Et.y,
                                    g = 1e-6;
                                g > d && d > -g && (d = 0), g > p && p > -g && (p = 0), bt ? (gt.data.rotation = Et.rotation = d, gt.setRatio(1)) : l ? (Ot && l.top(p), Pt && l.left(d)) : xt ? (Ot && (gt.data.y = p), Pt && (gt.data.x = d), gt.setRatio(1)) : (Ot && (n.style.top = p + "px"), Pt && (n.style.left = d + "px")), !b || t || yt || (yt = !0, at(Et, "drag", "onDrag"), yt = !1)
                            }
                            et = !1
                        },
                        Gt = function(t, i) {
                            var r, o = Et.x,
                                s = Et.y;
                            n._gsTransform || !xt && !bt || e.set(n, {
                                x: "+=0",
                                overwrite: !1
                            }), xt ? (Et.y = n._gsTransform.y, Et.x = n._gsTransform.x) : bt ? Et.x = Et.rotation = n._gsTransform.rotation : l ? (Et.y = l.top(), Et.x = l.left()) : (Et.y = parseInt(n.style.top, 10) || 0, Et.x = parseInt(n.style.left, 10) || 0), !nt && !rt || i || (nt && (r = nt(Et.x), r !== Et.x && (Et.x = r, bt && (Et.rotation = r))), rt && (r = rt(Et.y), r !== Et.y && (Et.y = r))), (o !== Et.x || s !== Et.y) && Vt(!0), t || at(Et, "throwupdate", "onThrowUpdate")
                        },
                        Qt = function() {
                            var t, e, i, r;
                            w = !1, l ? (l.calibrate(), Et.minX = D = -l.maxScrollLeft(), Et.minY = j = -l.maxScrollTop(), Et.maxX = O = Et.maxY = L = 0, w = !0) : s.bounds && (t = lt(s.bounds, n.parentNode), bt ? (Et.minX = D = t.left, Et.maxX = O = t.left + t.width, Et.minY = j = Et.maxY = L = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (t = s.bounds, Et.minX = D = t.minX, Et.minY = j = t.minY, Et.maxX = O = t.maxX, Et.maxY = L = t.maxY) : (e = lt(n, n.parentNode), Et.minX = D = st(n, Tt) + t.left - e.left, Et.minY = j = st(n, St) + t.top - e.top, Et.maxX = O = D + (t.width - e.width), Et.maxY = L = j + (t.height - e.height)), D > O && (Et.minX = O, Et.maxX = O = D, D = Et.minX), j > L && (Et.minY = L, Et.maxY = L = j, j = Et.minY), bt && (Et.minRotation = D, Et.maxRotation = O), w = !0), s.liveSnap && (i = s.liveSnap === !0 ? s.snap || {} : s.liveSnap, r = i instanceof Array || "function" == typeof i, bt ? (nt = ne(r ? i : i.rotation, D, O, 1), rt = null) : (Pt && (nt = ne(r ? i : i.x || i.left || i.scrollLeft, D, O, l ? -1 : 1)), Ot && (rt = ne(r ? i : i.y || i.top || i.scrollTop, j, L, l ? -1 : 1))))
                        },
                        Kt = function() {
                            Et.isThrowing = !1, at(Et, "throwcomplete", "onThrowComplete")
                        },
                        Zt = function() {
                            Et.isThrowing = !1
                        },
                        Jt = function(t, e) {
                            var i, r, a, c;
                            t && o ? (t === !0 && (i = s.snap || {}, r = i instanceof Array || "function" == typeof i, t = {
                                resistance: (s.throwResistance || s.resistance || 1e3) / (bt ? 10 : 1)
                            }, bt ? t.rotation = Ft(Et, r ? i : i.rotation, O, D, 1, e) : (Pt && (t[Tt] = Ft(Et, r ? i : i.x || i.left || i.scrollLeft, O, D, l ? -1 : 1, e || "x" === Et.lockedAxis)), Ot && (t[St] = Ft(Et, r ? i : i.y || i.top || i.scrollTop, L, j, l ? -1 : 1, e || "y" === Et.lockedAxis)))), Et.isThrowing = !0, c = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - Et.edgeResistance + .2 : s.overshootTolerance, Et.tween = a = o.to(l || n, {
                                throwProps: t,
                                ease: s.ease || g.Power3.easeOut,
                                onComplete: Kt,
                                onOverwrite: Zt,
                                onUpdate: s.fastMode ? at : Gt,
                                onUpdateParams: s.fastMode ? [Et, "onthrowupdate", "onThrowUpdate"] : x
                            }, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === c ? 0 : .5 : s.minDuration, c), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), Gt(!0, !0), Et.endX = Et.x, Et.endY = Et.y, bt && (Et.endRotation = Et.x), a.play(0), Gt(!0, !0), l && (l._suspendTransforms = !1))) : w && Et.applyBounds()
                        },
                        te = function() {
                            var t, e, i, r, o, s, a, l, h, f = ut || [1, 0, 0, 1, 0, 0];
                            ut = kt(n.parentNode, !0), Et.isPressed && f.join(",") !== ut.join(",") && (t = f[0], e = f[1], i = f[2], r = f[3], o = f[4], s = f[5], a = t * r - e * i, l = c * (r / a) + u * (-i / a) + (i * s - r * o) / a, h = c * (-e / a) + u * (t / a) + -(t * s - e * o) / a, u = l * ut[1] + h * ut[3] + ut[5], c = l * ut[0] + h * ut[2] + ut[4]), ut[1] || ut[2] || 1 != ut[0] || 1 != ut[3] || 0 != ut[4] || 0 != ut[5] || (ut = null)
                        },
                        ee = function() {
                            var t = 1 - Et.edgeResistance;
                            te(), l ? (Qt(), _ = l.top(), m = l.left()) : (ie() ? (Gt(!0, !0), Qt()) : Et.applyBounds(), bt ? (J = Ct(n, {
                                x: 0,
                                y: 0
                            }), Gt(!0, !0), m = Et.x, _ = Et.y = Math.atan2(J.y - u, c - J.x) * T) : (dt = n.parentNode ? n.parentNode.scrollTop || 0 : 0, pt = n.parentNode ? n.parentNode.scrollLeft || 0 : 0, _ = st(n, St), m = st(n, Tt))), w && t && (m > O ? m = O + (m - O) / t : D > m && (m = D - (D - m) / t), bt || (_ > L ? _ = L + (_ - L) / t : j > _ && (_ = j - (j - _) / t)))
                        },
                        ie = function() {
                            return Et.tween && Et.tween.isActive()
                        },
                        ne = function(t, e, i, n) {
                            return "function" == typeof t ? function(r) {
                                var o = Et.isPressed ? 1 - Et.edgeResistance : 1;
                                return t.call(Et, r > i ? i + (r - i) * o : e > r ? e + (r - e) * o : r) * n
                            } : t instanceof Array ? function(n) {
                                for (var r, o, s = t.length, a = 0, l = S; --s > -1;) r = t[s], o = r - n, 0 > o && (o = -o), l > o && r >= e && i >= r && (a = s, l = o);
                                return t[a]
                            } : isNaN(t) ? function(t) {
                                return t
                            } : function() {
                                return t * n
                            }
                        },
                        re = function(t) {
                            var i, r;
                            if (a && !Et.isPressed && t && !("mousedown" === t.type && k() - ft < 30 && Rt[Et.pointerEvent.type])) {
                                if (ht = ie(), Et.pointerEvent = t, Rt[t.type] ? (ct = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : v, Mt(ct, "touchend", ae), Mt(ct, "touchmove", oe), Mt(ct, "touchcancel", ae), Mt(v, "touchstart", zt)) : (ct = null, Mt(v, "mousemove", oe)), vt = null, Mt(v, "mouseup", ae), t && t.target && Mt(t.target, "mouseup", ae), ot = Yt.call(Et, t.target) && !s.dragClickables) return Mt(t.target, "change", ae), at(Et, "press", "onPress"), void Bt(It, !0);
                                if (mt = !(!ct || Pt === Ot || l || Et.vars.allowNativeTouchScrolling === !1) && (Pt ? "y" : "x"), C ? t = K(t, !0) : mt || Et.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = X = t.changedTouches[0], G = t.identifier) : t.pointerId ? G = t.pointerId : X = G = null, R++, B(Vt), u = Et.pointerY = t.pageY, c = Et.pointerX = t.pageX, (mt || Et.autoScroll) && Q(n.parentNode), !Et.autoScroll || bt || l || !n.parentNode || n.getBBox || !n.parentNode._gsMaxScrollX || P.parentNode || (P.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(P)), ee(), ut && (i = c * ut[0] + u * ut[2] + ut[4], u = c * ut[1] + u * ut[3] + ut[5], c = i), Et.tween && Et.tween.kill(), Et.isThrowing = !1, e.killTweensOf(l || n, !0, $t), l && e.killTweensOf(n, !0, {
                                        scrollTo: 1
                                    }), Et.tween = Et.lockedAxis = null, (s.zIndexBoost || !bt && !l && s.zIndexBoost !== !1) && (n.style.zIndex = Ht.zIndex++), Et.isPressed = !0, b = !(!s.onDrag && !Et._listeners.drag), !bt)
                                    for (r = It.length; --r > -1;) tt(It[r], "cursor", s.cursor || "move");
                                at(Et, "press", "onPress")
                            }
                        },
                        oe = function(t) {
                            var e, i, n, o, s = t;
                            if (a && !r && Et.isPressed && t) {
                                if (Et.pointerEvent = t, e = t.changedTouches) {
                                    if (t = e[0], t !== X && t.identifier !== G) {
                                        for (o = e.length; --o > -1 && (t = e[o]).identifier !== G;);
                                        if (0 > o) return
                                    }
                                } else if (t.pointerId && G && t.pointerId !== G) return;
                                if (C) t = K(t, !0);
                                else {
                                    if (ct && mt && !vt && (i = t.pageX, n = t.pageY, ut && (o = i * ut[0] + n * ut[2] + ut[4], n = i * ut[1] + n * ut[3] + ut[5], i = o), vt = Math.abs(i - c) > Math.abs(n - u) && Pt ? "x" : "y", Et.vars.lockAxisOnTouchScroll !== !1 && (Et.lockedAxis = "x" === vt ? "y" : "x", "function" == typeof Et.vars.onLockAxis && Et.vars.onLockAxis.call(Et, s)), M && mt === vt)) return void ae(s);
                                    Et.allowEventDefault || mt && (!vt || mt === vt) || s.cancelable === !1 || (s.preventDefault(), s.preventManipulation && s.preventManipulation())
                                }
                                Et.autoScroll && (Xt = !0), se(t.pageX, t.pageY)
                            }
                        },
                        se = function(t, e) {
                            var i, n, r, o, s, a, l = 1 - Et.dragResistance,
                                h = 1 - Et.edgeResistance;
                            Et.pointerX = t, Et.pointerY = e, bt ? (o = Math.atan2(J.y - e, t - J.x) * T, s = Et.y - o, Et.y = o, s > 180 ? _ -= 360 : -180 > s && (_ += 360), r = m + (_ - o) * l) : (ut && (a = t * ut[0] + e * ut[2] + ut[4], e = t * ut[1] + e * ut[3] + ut[5], t = a), n = e - u, i = t - c, At > n && n > -At && (n = 0), At > i && i > -At && (i = 0), (Et.lockAxis || Et.lockedAxis) && (i || n) && (a = Et.lockedAxis, a || (Et.lockedAxis = a = Pt && Math.abs(i) > Math.abs(n) ? "y" : Ot ? "x" : null, a && "function" == typeof Et.vars.onLockAxis && Et.vars.onLockAxis.call(Et, Et.pointerEvent)), "y" === a ? n = 0 : "x" === a && (i = 0)), r = m + i * l, o = _ + n * l), nt || rt ? (nt && (r = nt(r)), rt && (o = rt(o))) : w && (r > O ? r = O + (r - O) * h : D > r && (r = D + (r - D) * h), bt || (o > L ? o = L + (o - L) * h : j > o && (o = j + (o - j) * h))), bt || (r = Math.round(r), o = Math.round(o)), (Et.x !== r || Et.y !== o && !bt) && (bt ? Et.endRotation = Et.x = Et.endX = r : (Ot && (Et.y = Et.endY = o), Pt && (Et.x = Et.endX = r)), et = !0, !Et.isDragging && Et.isPressed && (Et.isDragging = !0, at(Et, "dragstart", "onDragStart")))
                        },
                        ae = function(t, i) {
                            if (a && Et.isPressed && (!t || null == G || i || !(t.pointerId && t.pointerId !== G || t.changedTouches && !Lt(t.changedTouches, G)))) {
                                Et.isPressed = !1;
                                var r, o, l, c, u = t,
                                    h = Et.isDragging;
                                if (ct ? (Nt(ct, "touchend", ae), Nt(ct, "touchmove", oe), Nt(ct, "touchcancel", ae), Nt(v, "touchstart", zt)) : Nt(v, "mousemove", oe), Nt(v, "mouseup", ae), t && t.target && Nt(t.target, "mouseup", ae), et = !1, P.parentNode && P.parentNode.removeChild(P), ot) return t && Nt(t.target, "change", ae), Bt(It, !1), at(Et, "release", "onRelease"), at(Et, "click", "onClick"), void(ot = !1);
                                if ($(Vt), !bt)
                                    for (o = It.length; --o > -1;) tt(It[o], "cursor", s.cursor || "move");
                                if (h && (Wt = N = k(), Et.isDragging = !1), R--, t) {
                                    if (C && (t = K(t, !1)), r = t.changedTouches, r && (t = r[0], t !== X && t.identifier !== G)) {
                                        for (o = r.length; --o > -1 && (t = r[o]).identifier !== G;);
                                        if (0 > o) return
                                    }
                                    Et.pointerEvent = u, Et.pointerX = t.pageX, Et.pointerY = t.pageY
                                }
                                return u && !h ? (ht && (s.snap || s.bounds) && Jt(s.throwProps), at(Et, "release", "onRelease"), M && "touchmove" === u.type || (at(Et, "click", "onClick"), c = u.target || u.srcElement || n, ft = k(), e.delayedCall(1e-5, function() {
                                    ft !== _t && Et.enabled() && !Et.isPressed && (c.click ? c.click() : v.createEvent && (l = v.createEvent("MouseEvents"), l.initMouseEvent("click", !0, !0, window, 1, Et.pointerEvent.screenX, Et.pointerEvent.screenY, Et.pointerX, Et.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(l)))
                                }))) : (Jt(s.throwProps), C || Et.allowEventDefault || !u || !s.dragClickables && Yt.call(Et, u.target) || !h || mt && (!vt || mt !== vt) || u.cancelable === !1 || (u.preventDefault(), u.preventManipulation && u.preventManipulation()), at(Et, "release", "onRelease")), h && at(Et, "dragend", "onDragEnd"), !0
                            }
                        },
                        le = function(t) {
                            if (t && Et.isDragging) {
                                var e = t.target || t.srcElement || n.parentNode,
                                    i = e.scrollLeft - e._gsScrollX,
                                    r = e.scrollTop - e._gsScrollY;
                                (i || r) && (c -= i, u -= r, e._gsScrollX += i, e._gsScrollY += r, se(Et.pointerX, Et.pointerY))
                            }
                        },
                        ce = function(t) {
                            var e = k(),
                                i = 40 > e - ft,
                                n = 40 > e - Wt;
                            return i && _t !== ft ? void(_t = ft) : void((Et.isPressed || n || i) && (t.preventDefault ? (t.preventDefault(), (i || n && Et.vars.suppressClickOnDrag !== !1) && t.stopImmediatePropagation()) : t.returnValue = !1, t.preventManipulation && t.preventManipulation()))
                        };
                    it = Ht.get(this.target), it && it.kill(), this.startDrag = function(t) {
                        re(t), Et.isDragging || (Et.isDragging = !0, at(Et, "dragstart", "onDragStart"))
                    }, this.drag = oe, this.endDrag = function(t) {
                        ae(t, !0)
                    }, this.timeSinceDrag = function() {
                        return Et.isDragging ? 0 : (k() - Wt) / 1e3
                    }, this.hitTest = function(t, e) {
                        return Ht.hitTest(Et.target, t, e)
                    }, this.getDirection = function(t, e) {
                        var i, n, r, s, a, l, c = "velocity" === t && o ? t : "object" != typeof t || bt ? "start" : "element";
                        return "element" === c && (a = Ut(Et.target), l = Ut(t)), i = "start" === c ? Et.x - m : "velocity" === c ? o.getVelocity(this.target, Tt) : a.left + a.width / 2 - (l.left + l.width / 2), bt ? 0 > i ? "counter-clockwise" : "clockwise" : (e = e || 2, n = "start" === c ? Et.y - _ : "velocity" === c ? o.getVelocity(this.target, St) : a.top + a.height / 2 - (l.top + l.height / 2), r = Math.abs(i / n), s = 1 / e > r ? "" : 0 > i ? "left" : "right", e > r && ("" !== s && (s += "-"), s += 0 > n ? "up" : "down"), s)
                    }, this.applyBounds = function(t) {
                        var e, i, n;
                        return t && s.bounds !== t ? (s.bounds = t, Et.update(!0)) : (Gt(!0), Qt(), w && (e = Et.x, i = Et.y, w && (e > O ? e = O : D > e && (e = D), i > L ? i = L : j > i && (i = j)), (Et.x !== e || Et.y !== i) && (n = !0, Et.x = Et.endX = e, bt ? Et.endRotation = e : Et.y = Et.endY = i, et = !0, Vt()), Et.isThrowing && (n || Et.endX > O || Et.endX < D || Et.endY > L || Et.endY < j) && Jt(s.throwProps, n)), Et)
                    }, this.update = function(t, e) {
                        var i = Et.x,
                            r = Et.y;
                        return te(), t ? Et.applyBounds() : (et && e && Vt(), Gt(!0)), Et.isPressed && (Pt && Math.abs(i - Et.x) > .01 || Ot && Math.abs(r - Et.y) > .01 && !bt) && ee(), Et.autoScroll && (Q(n.parentNode), Xt = !0, Vt()), Et
                    }, this.enable = function(t) {
                        var r, c, u;
                        if ("soft" !== t) {
                            for (c = It.length; --c > -1;) u = It[c], Mt(u, "mousedown", re), Mt(u, "touchstart", re), Mt(u, "click", ce, !0), bt || tt(u, "cursor", s.cursor || "move"), tt(u, "touchCallout", "none"), tt(u, "touchAction", Pt === Ot || l ? "none" : Pt ? "pan-y" : "pan-x");
                            Bt(It, !1)
                        }
                        return Y(Et.target, le), a = !0, o && "soft" !== t && o.track(l || n, xt ? "x,y" : bt ? "rotation" : "top,left"), l && l.enable(), n._gsDragID = r = "d" + E++, A[r] = this, l && (l.element._gsDragID = r), e.set(n, {
                            x: "+=0",
                            overwrite: !1
                        }), gt = {
                            t: n,
                            data: C ? W : n._gsTransform,
                            tween: {},
                            setRatio: C ? function() {
                                e.set(n, q)
                            } : i._internals.setTransformRatio || i._internals.set3DTransformRatio
                        }, Et.update(!0), Et
                    }, this.disable = function(t) {
                        var e, i, r = Et.isDragging;
                        if (!bt)
                            for (e = It.length; --e > -1;) tt(It[e], "cursor", null);
                        if ("soft" !== t) {
                            for (e = It.length; --e > -1;) i = It[e], tt(i, "touchCallout", null), tt(i, "touchAction", null), Nt(i, "mousedown", re), Nt(i, "touchstart", re), Nt(i, "click", ce);
                            Bt(It, !0), ct && (Nt(ct, "touchcancel", ae), Nt(ct, "touchend", ae), Nt(ct, "touchmove", oe)), Nt(v, "mouseup", ae), Nt(v, "mousemove", oe)
                        }
                        return U(n, le), a = !1, o && "soft" !== t && o.untrack(l || n, xt ? "x,y" : bt ? "rotation" : "top,left"), l && l.disable(), $(Vt), Et.isDragging = Et.isPressed = ot = !1, r && at(Et, "dragend", "onDragEnd"), Et
                    }, this.enabled = function(t, e) {
                        return arguments.length ? t ? Et.enable(e) : Et.disable(e) : a
                    }, this.kill = function() {
                        return Et.isThrowing = !1, e.killTweensOf(l || n, !0, $t), Et.disable(), delete A[n._gsDragID], Et
                    }, -1 !== wt.indexOf("scroll") && (l = this.scrollProxy = new qt(n, H({
                        onKill: function() {
                            Et.isPressed && ae(null)
                        }
                    }, s)), n.style.overflowY = Ot && !Dt ? "auto" : "hidden", n.style.overflowX = Pt && !Dt ? "auto" : "hidden", n = l.content), s.force3D !== !1 && e.set(n, {
                        force3D: !0
                    }), bt ? $t.rotation = 1 : (Pt && ($t[Tt] = 1), Ot && ($t[St] = 1)), bt ? (q = p, W = q.css, q.overwrite = !1) : xt && (q = Pt && Ot ? h : Pt ? f : d, W = q.css, q.overwrite = !1), this.enable()
                },
                Wt = Ht.prototype = new t;
            Wt.constructor = Ht, Wt.pointerX = Wt.pointerY = 0, Wt.isDragging = Wt.isPressed = !1, Ht.version = "0.14.3", Ht.zIndex = 1e3, Mt(v, "touchcancel", function() {}), Mt(v, "contextmenu", function(t) {
                var e;
                for (e in A) A[e].isPressed && A[e].endDrag()
            }), Ht.create = function(t, i) {
                "string" == typeof t && (t = e.selector(t));
                for (var n = t && 0 !== t.length ? At(t) ? Et(t) : [t] : [], r = n.length; --r > -1;) n[r] = new Ht(n[r], i);
                return n
            }, Ht.get = function(t) {
                return A[(Z(t) || {})._gsDragID]
            }, Ht.timeSinceDrag = function() {
                return (k() - N) / 1e3
            };
            var Xt = {},
                Yt = function(t) {
                    var e, i, n = 0,
                        r = 0;
                    for (t = Z(t), e = t.offsetWidth, i = t.offsetHeight; t;) n += t.offsetTop, r += t.offsetLeft, t = t.offsetParent;
                    return {
                        top: n,
                        left: r,
                        width: e,
                        height: i
                    }
                },
                Ut = function(t, e) {
                    if (t === window) return Xt.left = Xt.top = 0, Xt.width = Xt.right = y.clientWidth || t.innerWidth || v.body.clientWidth || 0, Xt.height = Xt.bottom = (t.innerHeight || 0) - 20 < y.clientHeight ? y.clientHeight : t.innerHeight || v.body.clientHeight || 0, Xt;
                    var i = t.pageX !== e ? {
                        left: t.pageX - X(),
                        top: t.pageY - W(),
                        right: t.pageX - X() + 1,
                        bottom: t.pageY - W() + 1
                    } : t.nodeType || t.left === e || t.top === e ? C ? Yt(t) : Z(t).getBoundingClientRect() : t;
                    return i.right === e && i.width !== e ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : i.width === e && (i = {
                        width: i.right - i.left,
                        height: i.bottom - i.top,
                        right: i.right,
                        left: i.left,
                        bottom: i.bottom,
                        top: i.top
                    }), i
                };
            return Ht.hitTest = function(t, e, i) {
                if (t === e) return !1;
                var n, r, o, s = Ut(t),
                    a = Ut(e),
                    l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
                return l || !i ? !l : (o = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, n = {
                        left: Math.max(s.left, a.left),
                        top: Math.max(s.top, a.top)
                    }, n.width = Math.min(s.right, a.right) - n.left,
                    n.height = Math.min(s.bottom, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (o ? (i *= .01, r = n.width * n.height, r >= s.width * s.height * i || r >= a.width * a.height * i) : n.width > i && n.height > i))
            }, P.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ht
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), require("../plugins/CSSPlugin.js"), module.exports = e())
    }("Draggable");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t, e, i, n, r = {
            scale: 1,
            shadowOffset: 1,
            fillPatternOffset: 1,
            offset: 1,
            fill: 2,
            stroke: 2,
            shadowColor: 2
        },
        o = {},
        s = {},
        a = /(\d|\.)+/g,
        l = /(?:_cw|_ccw|_short)/,
        c = _gsScope._gsDefine.globals.com.greensock.plugins,
        u = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        h = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        f = function(t) {
            if ("" === t || null == t || "none" === t) return u.transparent;
            if (u[t]) return u[t];
            if ("number" == typeof t) return [t >> 16, t >> 8 & 255, 255 & t];
            if ("#" === t.charAt(0)) return 4 === t.length && (t = "#" + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2) + t.charAt(3) + t.charAt(3)), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t];
            if ("hsl" === t.substr(0, 3)) {
                t = t.match(a);
                var e = Number(t[0]) % 360 / 360,
                    i = Number(t[1]) / 100,
                    n = Number(t[2]) / 100,
                    r = .5 >= n ? n * (i + 1) : n + i - n * i,
                    o = 2 * n - r;
                return t.length > 3 && (t[3] = Number(t[3])), t[0] = h(e + 1 / 3, o, r), t[1] = h(e, o, r), t[2] = h(e - 1 / 3, o, r), t
            }
            for (var s = t.match(a) || u.transparent, l = s.length; --l > -1;) s[l] = Number(s[l]);
            return s
        },
        d = function(t, e, i, n) {
            this.getter = e, this.setter = i;
            var r = f(t[e]());
            this.proxy = {
                r: r[0],
                g: r[1],
                b: r[2],
                a: r.length > 3 ? r[3] : 1
            }, n && (this._next = n, n._prev = this)
        },
        p = [],
        g = function() {
            var i = p.length;
            if (0 !== i) {
                for (; --i > -1;) p[i].draw(), p[i]._gsDraw = !1;
                p.length = 0
            } else t.removeEventListener("tick", g), e = !1
        },
        m = function(t, e) {
            var i = "x" === e ? "y" : "x",
                n = "_gs_" + t;
            o[t] = function() {
                return this["get" + t]()[e]
            }, s[t] = function(r) {
                var o = this["get" + t](),
                    s = this[n];
                return s || (s = this[n] = {}), s[e] = r, s[i] = o[i], this[t](s), this
            }
        },
        v = function(t, e) {
            return function(i) {
                return arguments.length ? e(i) : t()
            }
        },
        y = function(t, e) {
            var i, n, a, l, c = [];
            for (i in e)
                if (n = e[i], "bezier" !== i && "autoDraw" !== i && "set" !== i.substr(0, 3) && void 0 === t[i] && (c.push(i), delete e[i], i = "set" + i.charAt(0).toUpperCase() + i.substr(1), e[i] = n), r[i]) {
                    if (1 === r[i]) return e[i + "X"] = e[i + "Y"] = e[i], delete e[i], y(t, e);
                    !t[i] && s[i] && (l = t.prototype || t, l[i] = v(o[i], s[i]))
                } else if ("bezier" === i)
                for (n = n instanceof Array ? n : n.values || [], a = n.length; --a > -1;) 0 === a ? c = c.concat(y(t, n[a])) : y(t, n[a]);
            return c
        },
        _ = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        };
    for (n in r) 1 === r[n] && (m(n, "x"), m(n, "y"));
    var w = _gsScope._gsDefine.plugin({
        propName: "kinetic",
        API: 2,
        version: "0.5.2",
        init: function(e, n, o) {
            var s, a, u, h, p, g;
            if (!i && (i = parseInt(Kinetic.version.split(".")[0], 10) < 5)) throw "The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";
            this._overwriteProps = y(e, n), this._target = e, this._layer = n.autoDraw !== !1 ? e.getLayer() : null, !t && this._layer && (t = o.constructor.ticker);
            for (s in n) {
                if (a = n[s], 2 === r[s]) h = this._firstSP = new d(e, s, s, this._firstSP), a = f(a), h.proxy.r !== a[0] && this._addTween(h.proxy, "r", h.proxy.r, a[0], s), h.proxy.g !== a[1] && this._addTween(h.proxy, "g", h.proxy.g, a[1], s), h.proxy.b !== a[2] && this._addTween(h.proxy, "b", h.proxy.b, a[2], s), (a.length > 3 || 1 !== h.proxy.a) && h.proxy.a !== a[3] && this._addTween(h.proxy, "a", h.proxy.a, a.length > 3 ? a[3] : 1, s);
                else if ("bezier" === s) {
                    if (p = c.BezierPlugin, !p) throw "BezierPlugin not loaded";
                    p = this._bezier = new p, "object" == typeof a && a.autoRotate === !0 && (a.autoRotate = ["x", "y", "rotation", 0, !1]), p._onInitTween(e, a, o), this._overwriteProps = this._overwriteProps.concat(p._overwriteProps), this._addTween(p, "setRatio", 0, 1, s)
                } else if ("rotation" !== s && "rotationDeg" !== s || "string" != typeof a || !l.test(a)) a instanceof Array ? this._initArrayTween(e[s](), a, s) : "autoDraw" !== s && (u = "get" + s.substr(3), this._addTween(e, s, ("function" == typeof e[s] ? e["get" !== u && "function" == typeof e[u] ? u : s]() : e[s]) || 0, a, s));
                else {
                    if (g = c.DirectionalRotationPlugin, !g) throw "DirectionalRotationPlugin not loaded";
                    g = this._directionalRotation = new g, u = {
                        useRadians: !1
                    }, u[s] = a, g._onInitTween(e, u, o), this._addTween(g, "setRatio", 0, 1, s)
                }
                this._overwriteProps.push(s)
            }
            return !0
        },
        kill: function(t) {
            return t = _(t), y(this._target, t), this._bezier && this._bezier._kill(t), this._directionalRotation && this._directionalRotation._kill(t), this._super._kill.call(this, t)
        },
        round: function(t, e) {
            return t = _(t), y(this._target, t), this._bezier && this._bezier._roundProps(t, e), this._super._roundProps.call(this, t, e)
        },
        set: function(i) {
            this._super.setRatio.call(this, i);
            var n, r, o, s, a, l, c = this._firstSP,
                u = this._layer,
                h = this._arrayTweens;
            if (c)
                for (a = this._target; c;) l = c.proxy, a[c.setter]((1 !== l.a ? "rgba(" : "rgb(") + (0 | l.r) + ", " + (0 | l.g) + ", " + (0 | l.b) + (1 !== l.a ? ", " + l.a : "") + ")"), c = c._next;
            if (h) {
                for (n = h.length; --n > -1;) r = h[n], s = r.s + r.c * i, r.a[r.i] = 1e-6 > s && s > -1e-6 ? 0 : s;
                for (o in this._arrayProps) this._target[o](this._arrayProps[o])
            }
            u && !u._gsDraw && (p.push(u), u._gsDraw = !0, e || (t.addEventListener("tick", g), e = !0))
        }
    });
    n = w.prototype, n._initArrayTween = function(t, e, i) {
        this._arrayTweens || (this._arrayTweens = [], this._arrayProps = {});
        for (var n, r, o = t.length, s = this._arrayTweens; --o > -1;) n = t[o], r = e[o], n !== r && s.push({
            a: t,
            i: o,
            s: n,
            c: r - n
        });
        s.length && (this._arrayProps[i] = t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var SocialShareKit = function() {
    function t(t) {
        return _(t).share()
    }

    function e(t) {
        "loading" != document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function() {
            "loading" != document.readyState && t()
        })
    }

    function i(t) {
        return document.querySelectorAll(t)
    }

    function n(t, e) {
        for (var i = 0; i < t.length; i++) e(t[i], i)
    }

    function r(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, function() {
            i.call(t)
        })
    }

    function o(t, e, i) {
        t.removeEventListener ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
    }

    function s(t) {
        return t.className.match(x)
    }

    function a(t) {
        var e = t || window.event;
        return e.preventDefault ? e.preventDefault() : (e.returnValue = !1, e.cancelBubble = !0), e.currentTarget || e.srcElement
    }

    function l(t) {
        var e = 575,
            i = 400,
            n = document.documentElement.clientWidth / 2 - e / 2,
            r = (document.documentElement.clientHeight - i) / 2,
            o = "status=1,resizable=yes,width=" + e + ",height=" + i + ",top=" + r + ",left=" + n,
            s = window.open(t, "", o);
        return s.focus(), s
    }

    function c(t, e, i) {
        var n, r = p(t, e, i),
            o = u(t, e, i, r),
            s = "undefined" != typeof r.title ? r.title : h(e),
            a = "undefined" != typeof r.text ? r.text : f(e),
            l = r.image ? r.image : d("og:image"),
            c = "undefined" != typeof r.via ? r.via : d("twitter:site"),
            g = {
                shareUrl: o,
                title: s,
                text: a,
                image: l,
                via: c,
                options: t,
                shareUrlEncoded: function() {
                    return encodeURIComponent(this.shareUrl)
                }
            };
        switch (e) {
            case "facebook":
                n = "https://www.facebook.com/share.php?u=" + g.shareUrlEncoded();
                break;
            case "twitter":
                n = "https://twitter.com/intent/tweet?url=" + g.shareUrlEncoded() + "&text=" + encodeURIComponent(s + (a && s ? " - " : "") + a), c && (n += "&via=" + c.replace("@", ""));
                break;
            case "google-plus":
                n = "https://plus.google.com/share?url=" + g.shareUrlEncoded();
                break;
            case "pinterest":
                n = "https://pinterest.com/pin/create/button/?url=" + g.shareUrlEncoded() + "&description=" + encodeURIComponent(a), l && (n += "&media=" + encodeURIComponent(l));
                break;
            case "tumblr":
                n = "https://www.tumblr.com/share/link?url=" + g.shareUrlEncoded() + "&name=" + encodeURIComponent(s) + "&description=" + encodeURIComponent(a);
                break;
            case "linkedin":
                n = "https://www.linkedin.com/shareArticle?mini=true&url=" + g.shareUrlEncoded() + "&title=" + encodeURIComponent(s) + "&summary=" + encodeURIComponent(a);
                break;
            case "vk":
                n = "https://vkontakte.ru/share.php?url=" + g.shareUrlEncoded();
                break;
            case "email":
                n = "mailto:?subject=" + encodeURIComponent(s) + "&body=" + encodeURIComponent(s + "\n" + o + "\n\n" + a + "\n")
        }
        return g.networkUrl = n, t.onBeforeOpen && t.onBeforeOpen(i, e, g), g.networkUrl
    }

    function u(t, e, i, n) {
        return n = n || p(t, e, i), n.url || window.location.href
    }

    function h(t) {
        var e;
        return "twitter" == t && (e = d("twitter:title")), e || document.title
    }

    function f(t) {
        var e;
        return "twitter" == t && (e = d("twitter:description")), e || d("description")
    }

    function d(t, e) {
        var n, r = i("meta[" + (e ? e : 0 === t.indexOf("og:") ? "property" : "name") + '="' + t + '"]');
        return r.length && (n = r[0].getAttribute("content") || ""), n || ""
    }

    function p(t, e, i) {
        var n, r, o, s, a = ["url", "title", "text", "image"],
            l = {},
            c = i.parentNode;
        "twitter" == e && a.push("via");
        for (s in a) r = a[s], o = "data-" + r, n = i.getAttribute(o) || c.getAttribute(o) || (t[e] && "undefined" != typeof t[e][r] ? t[e][r] : t[r]), "undefined" != typeof n && (l[r] = n);
        return l
    }

    function g(t, e) {
        var i = document.createElement("div");
        i.innerHTML = e, i.className = "ssk-num", t.appendChild(i)
    }

    function m(t, e, i, n) {
        var r, o, s, a = encodeURIComponent(e);
        switch (t) {
            case "facebook":
                r = "https://graph.facebook.com/?id=" + a, o = function(t) {
                    return n(t.shares ? t.shares : 0)
                };
                break;
            case "twitter":
                i && i.twitter && i.twitter.countCallback && i.twitter.countCallback(e, n);
                break;
            case "google-plus":
                return r = "https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ", s = '[{"method":"pos.plusones.get","id":"p","params":{"id":"' + e + '","userId":"@viewer","groupId":"@self","nolog":true},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]', o = function(t) {
                    if (t = JSON.parse(t), t.length) return n(t[0].result.metadata.globalCounts.count)
                }, void v(r, o, s);
            case "linkedin":
                r = "https://www.linkedin.com/countserv/count/share?url=" + a, o = function(t) {
                    return n(t.count)
                };
                break;
            case "pinterest":
                r = "https://api.pinterest.com/v1/urls/count.json?url=" + a, o = function(t) {
                    return n(t.count)
                };
                break;
            case "vk":
                r = "https://vk.com/share.php?act=count&url=" + a, o = function(t) {
                    return n(t)
                }
        }
        r && o && y(t, r, o, s)
    }

    function v(t, e, i) {
        var n = new XMLHttpRequest;
        n.onreadystatechange = function() {
            4 === this.readyState && this.status >= 200 && this.status < 400 && e(this.responseText)
        }, n.open("POST", t, !0), n.setRequestHeader("Content-Type", "application/json"), n.send(i)
    }

    function y(t, e, i) {
        var n = "cb_" + t + "_" + Math.round(1e5 * Math.random()),
            r = document.createElement("script");
        return window[n] = function(t) {
            try {
                delete window[n]
            } catch (e) {}
            document.body.removeChild(r), i(t)
        }, "vk" == t ? window.VK = {
            Share: {
                count: function(t, e) {
                    window[n](e)
                }
            }
        } : "google-plus" == t && (window.services = {
            gplus: {
                cb: window[n]
            }
        }), r.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + n, document.body.appendChild(r), !0
    }
    var _, w, x = /(twitter|facebook|google-plus|pinterest|tumblr|vk|linkedin|email)/,
        b = "*|*";
    return w = function(t) {
        var e = t || {},
            n = e.selector || ".ssk";
        this.nodes = i(n), this.options = e
    }, w.prototype = {
        share: function() {
            function t(t) {
                var e, i = a(t),
                    n = s(i),
                    r = n[0];
                if (n && (e = c(f, r, i))) {
                    if (window.twttr && i.getAttribute("href").indexOf("twitter.com/intent/") !== -1) return void i.setAttribute("href", e);
                    if ("email" != r) {
                        var o = l(e);
                        if (f.onOpen && f.onOpen(i, r, e, o), f.onClose) var u = window.setInterval(function() {
                            o.closed !== !1 && (window.clearInterval(u), f.onClose(i, r, e, o))
                        }, 250)
                    } else document.location = e
                }
            }

            function i() {
                var t, e;
                for (t in d) e = t.split(b),
                    function(t) {
                        m(e[0], e[1], f, function(e) {
                            for (var i in t) g(t[i], e)
                        })
                    }(d[t])
            }
            var h = this.nodes,
                f = this.options,
                d = {};
            return e(function() {
                h.length && (n(h, function(e) {
                    var i, n = s(e);
                    n && (o(e, "click", t), r(e, "click", t), e.parentNode.className.indexOf("ssk-count") !== -1 && (n = n[0], i = n + b + u(f, n, e), i in d || (d[i] = []), d[i].push(e)))
                }), i())
            }), this.nodes
        }
    }, _ = function(t) {
        return new w(t)
    }, {
        init: t
    }
}();
window.SocialShareKit = SocialShareKit,
    function(t) {
        function e() {
            i(), n()
        }

        function i() {
            t("#mobile-button").on("click", function() {
                var e = t("#mobile-navigation");
                e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            }), t("#mobile-navigation #nav-links li").on("click", function() {
                var e = t("#mobile-navigation");
                e.hasClass("active") && e.removeClass("active")
            }), t("#menu_btn").on("click", function() {
                var e = t("#main_navigation");
                e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            }), t("html").click(function() {
                var e = t("#main_navigation");
                t(e).removeClass("active")
            }), t("#main_navigation").click(function(t) {
                t.stopPropagation()
            })
        }

        function n() {
            var e = ".menu-option",
                i = ".nav-image";
            t(e).attr("background-id");
            t(".menu-option").hover(function() {
                var e = t(this).attr("background-id");
                t(i + "[background-id=" + e + "]").addClass("active")
            }, function() {
                var e = t(this).attr("background-id");
                t(i + "[background-id=" + e + "]").removeClass("active")
            })
        }
        t(document).ready(e)
    }(jQuery), jQuery(document).ready(function(t) {
        function e(e) {
            var i = t('.dest[page-slide="' + e + '"]').offset().top,
                n = i - menuHeight;
            htmlbody.stop().animate({
                scrollTop: n
            }, 500, "easeInOutQuint")
        }

        function i() {
            var e = t(window).width();
            t(".fade-in").each(function() {
                e >= 990 && 1 == t(this).css("opacity") && t(this).fadeTo(600, 0), e <= 990 && 0 == t(this).css("opacity") && t(this).fadeTo(600, 1)
            })
        }

        function n() {
            var e = t(window).width();
            e <= 990 && t(".fade-in").css("opacity", "1");
			var height = $(window).height();
			if(jQuery(window).width() > 1024){
				height = $(window).height() * 1.154;
			}
            e < 330 && (e = 330), t(".fullscreen").css({
                height: height
            })
        }
        jQuery.fn.exists = function() {
            return this.length > 0
        }, "undefined" != typeof SocialShareKit && SocialShareKit.init(), "undefined" != typeof browserCheck && "ie9" == browserCheck && (bravePlaceholder(), t(".addpl").on("focus", function() {
            var e = t(this).attr("id");
            t(this).val() == defaultTextHolder[e] && t(this).val("")
        }), t(".addpl").on("blur", function() {
            var e = t(this).attr("id");
            "" == t(this).val() && t(this).val(defaultTextHolder[e])
        })), destination = t(".dest"), destinationUp = t(".destup"), menuHeight = t("#main_navigation").height(), mywindow = t(window), htmlbody = t("html,body");
        var r = t(".slide-link");
        mywindow.scroll(function() {
            0 == mywindow.scrollTop() && t('.sub-navigation li[page-slide="2"]').removeClass("active")
        }), r.click(function(i) {
            i.preventDefault(), dataslide = t(this).attr("page-slide"), e(dataslide)
        }), resizeFullscreen(), resizeHeader(), fade(), expandAnimation(), i(), n(), resizeFullscreen(), resizeHeader(), fade(), initiateParallax(), positionSliderControls(), resizeViewport(), videodeo(), t(window).scroll(function() {
            fade(), expandAnimation()
        }), t(window).resize(function() {
            n(), slideOffset = t("#home-hero").height(), resizeFullscreen(), fade(), resizeHeader(), expandAnimation(), t.stellar("refresh"), positionSliderControls(), resizeViewport()
        }), t(document).ready(e), t("#testimonial_slider").bxSlider({
            touchEnabled: !0,
            mode: "fade",
            auto: true,
			autoHover: true,
			autoControls: true,
            pause: 8e3,
            infiniteLoop: !0,
        })
    });
var lastScrollTop = 0;
$(window).scroll(function(t) {
    if ($("#navigation").hasClass("fixed")) {
        var e = $(this).scrollTop();
        e > lastScrollTop ? $("#nav-logo").addClass("active") : $("#nav-logo").removeClass("active"), lastScrollTop = e
    }
});
var pageFadeInTime = 500,
    pageFadeOutTime = 500;
$(function() {
    $("a").click(function(t) {
        function e() {
            $(location).attr("href", n)
        }
        var i = jQuery(this).attr("href");
        if (jQuery(this).hasClass("prevent-default") && t.preventDefault(), "_blank" == jQuery(this).attr("target")) {
            t.preventDefault();
            var n = $(this).attr("href");
            return void window.open(n, "_blank")
        }
        if ((!(i.indexOf("#") >= 0) || jQuery(this).hasClass("loader-link")) && "" != i) {
            t.preventDefault(), $("#loader-screen").addClass("active");
            var n = $(this).attr("href");
            setTimeout(e, 500)
        }
    })
}), $(function() {
    setTimeout(function() {
        $("#loader-screen").removeClass("active"), $(document.body).addClass("srbt-loaded")
    }, 1e3)
}), "undefined" == typeof window.HTMLImports ? jQuery(document).ready(onDocumentReady) : window.addEventListener("HTMLImportsLoaded", onDocumentReady);
