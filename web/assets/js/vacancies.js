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
		hideElement: function (t) {
			t.hide()
		},
		showElement: function (t) {
			t.show()
		}
	})
}

function resizeFullscreen() {
	var t = $(window).height() - $("#main_navigation").height();
	$(window).width();
	var height = $(window).height();
	if($(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
	t < 660 && (t = 660), screenHeight = t, $(".fullscreen").css({
		height: height
	})
}

function resizeHeader() {
	var t, e = $(window).height() - $("#main_navigation").height(),
		n = $(window).width();
	e < 660 && (e = n <= 660 ? 660 : 960), t = n <= 1440 ? 300 : n <= 1100 ? 200 : n <= 660 ? 0 : 400;
	var i = e + t;
	var height = $(window).height();
	if($(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
	$(".fullscreen-header").css({
		height: height
	})
}

function resizeViewport() {
	var t, e = $(window).height() - $("#main_navigation").height(),
		n = $(window).width();
	e < 660 && (e = n <= 660 ? 660 : 960), t = n <= 1440 ? 300 : n <= 1100 ? 200 : n <= 660 ? 0 : 400;
	var i = e + t;
	var height = $(window).height();
	if($(window).width() > 1024){
		height = $(window).height() * 1.154;
	}
	$(".srbt-viewport").css({
		height: height
	})
}

function positionSliderControls() {
	var t = $(window).height(),
		e = t / 2,
		n = $(".hero-pager").height() / 2,
		i = e - n;
	t > 660 ? $(".hero-pager").css({
		top: i
	}) : $(".hero-pager").css("top", "247px")
}

function fade() {
	$(".fade-element, .srbt-scrollview").each(function () {
		var t = $(this),
			e = t[0].hasAttribute("srbt-scrollview-offset") ? parseInt(t.attr("srbt-scrollview-offset")) : 5,
			n = t.offset().top + e,
			i = $(window).scrollTop() + $(window).innerHeight();
		n < i && t.addClass("fadein srbt-inview")
	})
}

function isMobile() {
	return mywindow.innerWidth() < 990
}

function videodeo() {
	isMobile() || $(".video-container").each(function () {
		var t = $(this),
			e = $("video", t);
		e.length && (e[0].load(), e.on("canplay", function () {
			t.addClass("srbt-canplay"), setTimeout(function () {
				e[0].play()
			}, 250)
		}))
	})
}

function expandAnimation() {
	$(".expansion-animation").each(function () {
		var t = $(this).offset().top + 150,
			e = $(window).scrollTop() + $(window).innerHeight();
		t < e && $(this).removeClass("expand")
	})
}

function onDocumentReady(t) {
	function e() {
		return {
			_position: window.BRV_POSITION,
			_submittedAt: window.location.href,
			_adoration: n()
		}
	}

	function n() {
		var t = ["amazing", "incredible", "beautiful", "awesome", "most amazing", "stupendous", "gorgeous", "marvelous", "wonderful", "unbelievably outstanding", "most awe inspiring thing that I've ever seen,", "stunning", "magnificent", "dazzling", "delightful", "ravishing", "excellent", "splendid", "mind blowing", "straight dope", "super fresh", "beastmode", "swanky", "astounding"],
			e = Math.floor(Math.random() * t.length);
		return t[e]
	}

	function i() {
		var t = document.getElementById("map-brave"),
			e = {
				center: new google.maps.LatLng(27.95887, (-82.459986)),
				zoom: 14,
				scrollwheel: !1,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: !0
			},
			n = new google.maps.Map(t, e);
		n.set("styles", [{
			featureType: "road",
			stylers: [{
				saturation: -100
			}, {
				lightness: -53
			}]
		}, {
			featureType: "landscape",
			stylers: [{
				saturation: -100
			}, {
				lightness: -82
			}]
		}, {
			featureType: "administrative",
			stylers: [{
				saturation: -100
			}, {
				lightness: -81
			}]
		}, {
			featureType: "poi",
			stylers: [{
				saturation: -100
			}, {
				lightness: -88
			}]
		}, {
			featureType: "transit",
			stylers: [{
				saturation: -100
			}, {
				lightness: -67
			}]
		}, {
			featureType: "water",
			stylers: [{
				saturation: -100
			}, {
				lightness: -89
			}]
		}]);
		var i = new google.maps.LatLng(27.95887, (-82.459986)),
			r = new google.maps.Marker({
				position: i,
				title: "0"
			});
		r.setMap(n), r.setIcon("http://dev.bravepeople.co/assets/img/2x/map-marker.png")
	}
	angular.module("brvppl.career", ["planner.util"]).run(["$http", "$rootScope", "$timeout", function (t, n, i) {
		var r = n.contact = e();
		n.currentView = "form", n.submit = function (o) {
			o.$invalid || (console.log("submit", r, o), n.currentView = "submitting", t.post("/hire-me-submission/", r).then(function () {
				n.currentView = "success", i(function () {
					r = n.contact = e(), n.currentView = "form"
				}, 3e3)
			})["catch"](function (t) {
				n.currentView = "error", console.error(t), i(function () {
					n.currentView = "form"
				}, 2500)
			}))
		}
	}]), angular.bootstrap(document, ["brvppl.career"]), $("#careers-hero-slider").bxSlider({
		touchEnabled: 0,
		mode: "horizontal",
		pagerCustom: "#careers-hero .srbt-pager-custom",
		nextSelector: $("#careers-hero .srbt-next-control"),
		prevSelector: $("#careers-hero .srbt-prev-control"),
		nextText: "next",
		prevText: "prev",
		infiniteLoop: !0
	}), $(window).resize(function () {}), i()
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
	function (t, e, n) {
		function i(t, e, n) {
			return t.call.apply(t.bind, arguments)
		}

		function r(t, e, n) {
			if (!t) throw Error();
			if (2 < arguments.length) {
				var i = Array.prototype.slice.call(arguments, 2);
				return function () {
					var n = Array.prototype.slice.call(arguments);
					return Array.prototype.unshift.apply(n, i), t.apply(e, n)
				}
			}
			return function () {
				return t.apply(e, arguments)
			}
		}

		function o(t, e, n) {
			return o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : r, o.apply(null, arguments)
		}

		function s() {
			this.N = this.O = this.I = this.L = this.M = !0
		}

		function a() {
			var t = [{
				name: "font-family",
				value: Ce.c[ke + 1]
			}];
			this.g = [Ce.c[ke]], this.b = t
		}

		function l(t) {
			for (var e = t.g.join(","), n = [], i = 0; i < t.b.length; i++) {
				var r = t.b[i];
				n.push(r.name + ":" + r.value + ";")
			}
			return e + "{" + n.join("") + "}"
		}

		function u(t) {
			this.b = t
		}

		function c(t, e) {
			this.g = t, this.b = e
		}

		function f(t, e) {
			this.b = t, this.g = e
		}

		function h(t) {
			this.b = t
		}

		function p(t, e) {
			return e
		}

		function d() {
			this.b = this.g = -1
		}

		function g(t, e, n) {
			return Ft[e](t, e, n)
		}

		function m(t) {
			this.b = t
		}

		function v(t, e) {
			for (var n = [], i = 0; i < e.length; i++) n.push(e[i].toString());
			return {
				format: t,
				extras: n
			}
		}

		function y(t) {
			var e = new Image(1, 1),
				n = !1;
			e.src = t, e.onload = function () {
				n = !0, e.onload = null
			}, setTimeout(function () {
				n || (e.src = "about:blank", e.onload = null)
			}, 3e3)
		}

		function b(t, e, n, i, r, o, s) {
			this.b = t, this.B = e, this.F = n, this.D = i, this.v = r, this.o = o, this.K = s
		}

		function w(t, e, n, i) {
			this.b = null != t ? t : null, this.g = null != e ? e : null, this.h = null != n ? n : null, this.s = null != i ? i : null
		}

		function x(t, e) {
			return t.b > e.b || t.b === e.b && t.g > e.g || t.b === e.b && t.g === e.g && t.h > e.h ? 1 : t.b < e.b || t.b === e.b && t.g < e.g || t.b === e.b && t.g === e.g && t.h < e.h ? -1 : 0
		}

		function _(t, e) {
			return -1 === x(t, e)
		}

		function $(t, e) {
			return 0 === x(t, e) || 1 === x(t, e)
		}

		function T(t, e) {
			return 0 === x(t, e) || -1 === x(t, e)
		}

		function S(t, e) {
			return 0 === x(t, e)
		}

		function C(t) {
			t = qt.exec(t);
			var e = null,
				n = null,
				i = null,
				r = null;
			return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (n = parseInt(t[2], 10)), null !== t[3] && t[3] && (i = parseInt(t[3], 10)), null !== t[4] && t[4] && (r = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new w(e, n, i, r)
		}

		function k(t) {
			return "Safari" === t.getName() && "AppleWebKit" === t.F || "Unknown" === t.getName() && "AppleWebKit" === t.F && ("iPhone" === t.v || "iPad" === t.v || "iPod" === t.v)
		}

		function E(t) {
			return "Chrome" === t.getName() && $(t.B, new w(6)) && T(t.B, new w(35))
		}

		function A(t) {
			return "Chrome" === t.getName() && $(t.B, new w(36))
		}

		function O(t) {
			return "BuiltinBrowser" === t.getName()
		}

		function P(t) {
			return "Windows" === t.v
		}

		function M(t) {
			return P(t) && $(t.o, new w(6, 1))
		}

		function N(t) {
			return P(t) && S(t.o, new w(5, 1)) || P(t) && S(t.o, new w(5, 2)) || P(t) && S(t.o, new w(6, 0)) || M(t)
		}

		function D(t) {
			return "Macintosh" === t.v && ($(t.o, new w(10, 4)) || null === t.o.b)
		}

		function R(t, e) {
			return e.M && ("iPhone" === t.v || "iPod" === t.v) && $(t.o, new w(4, 2)) && _(t.o, new w(5))
		}

		function L(t, e) {
			return e.M && ("iPhone" === t.v || "iPod" === t.v) && $(t.o, new w(5))
		}

		function I(t, e) {
			return e.L && "iPad" === t.v && $(t.o, new w(4, 2)) && _(t.o, new w(5))
		}

		function j(t, e) {
			return e.L && "iPad" === t.v && $(t.o, new w(5))
		}

		function F(t, e) {
			return e.I && "Android" === t.v
		}

		function z(t, e) {
			return F(t, e) && $(t.o, new w(2, 2)) && _(t.o, new w(3, 1))
		}

		function q(t, e) {
			return F(t, e) && $(t.o, new w(3, 1)) && _(t.o, new w(4, 1))
		}

		function B(t) {
			return "Linux" === t.v || "Ubuntu" === t.v
		}

		function H(t) {
			var e = X(t.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
			return "" !== e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = X(t.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" !== t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
		}

		function V(t) {
			var e = X(t.b, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
			if (e || (e = X(t.b, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = X(t.b, /(iPhone )?OS ([\d_]+)/, 2))) return e;
			if (e = X(t.b, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
				for (var e = e.split(/\s/), n = 0; n < e.length; n += 1)
					if (/^[\d\._]+$/.test(e[n])) return e[n];
			return (t = X(t.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
		}

		function W() {
			var t = Qt,
				e = "Unknown",
				n = C(X(t.b, /Presto\/([\d\w\.]+)/, 1)),
				i = C(V(t)),
				r = Y(t.g);
			if (null !== n.b ? e = "Presto" : (-1 != t.b.indexOf("Gecko") && (e = "Gecko"), n = C(X(t.b, /rv:([^\)]+)/, 1))), -1 != t.b.indexOf("Opera Mini/")) {
				var o = C(X(t.b, /Opera Mini\/([\d\.]+)/, 1));
				return new b("OperaMini", o, e, n, H(t), i, r)
			}
			return -1 != t.b.indexOf("Version/") && (o = C(X(t.b, /Version\/([\d\.]+)/, 1)), null !== o.b) ? new b("Opera", o, e, n, H(t), i, r) : (o = C(X(t.b, /Opera[\/ ]([\d\.]+)/, 1)), null !== o.b ? new b("Opera", o, e, n, H(t), i, r) : new b("Opera", new w, e, n, H(t), i, r))
		}

		function U() {
			var t = Qt,
				e = H(t),
				n = C(V(t)),
				i = C(X(t.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
				r = "Unknown",
				o = new w,
				o = "Unknown";
			return /OPR\/[\d.]+/.test(t.b) ? r = "Opera" : -1 != t.b.indexOf("Chrome") || -1 != t.b.indexOf("CrMo") || -1 != t.b.indexOf("CriOS") ? r = "Chrome" : /Silk\/\d/.test(t.b) ? r = "Silk" : "BlackBerry" == e || "Android" == e ? r = "BuiltinBrowser" : -1 != t.b.indexOf("PhantomJS") ? r = "PhantomJS" : -1 != t.b.indexOf("Safari") ? r = "Safari" : -1 != t.b.indexOf("AdobeAIR") ? r = "AdobeAIR" : -1 != t.b.indexOf("PlayStation") && (r = "BuiltinBrowser"), "BuiltinBrowser" == r ? o = "Unknown" : "Silk" == r ? o = X(t.b, /Silk\/([\d\._]+)/, 1) : "Chrome" == r ? o = X(t.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.b.indexOf("Version/") ? o = X(t.b, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == r ? o = X(t.b, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == r ? o = X(t.b, /OPR\/([\d.]+)/, 1) : "PhantomJS" == r && (o = X(t.b, /PhantomJS\/([\d.]+)/, 1)), o = C(o), new b(r, o, "AppleWebKit", i, e, n, Y(t.g))
		}

		function X(t, e, n) {
			return (t = t.match(e)) && t[n] ? t[n] : ""
		}

		function Y(t) {
			if (t.documentMode) return t.documentMode
		}

		function G(t) {
			this.b = t || "-"
		}

		function Q(t, e, n, i) {
			if (e = t.b.createElement(e), n)
				for (var r in n) n.hasOwnProperty(r) && ("style" == r ? e.style.cssText = n[r] : e.setAttribute(r, n[r]));
			return i && e.appendChild(t.b.createTextNode(i)), e
		}

		function K(t, n, i) {
			t = t.b.getElementsByTagName(n)[0], t || (t = e.documentElement), t.insertBefore(i, t.lastChild)
		}

		function Z(t, e) {
			t.b.body ? e() : t.b.addEventListener ? t.b.addEventListener("DOMContentLoaded", e) : t.b.attachEvent("onreadystatechange", function () {
				"interactive" != t.b.readyState && "complete" != t.b.readyState || e()
			})
		}

		function J(t) {
			t.parentNode && t.parentNode.removeChild(t)
		}

		function tt(t, e, n) {
			e = e || [], n = n || [];
			for (var i = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
				for (var o = !1, s = 0; s < i.length; s += 1)
					if (e[r] === i[s]) {
						o = !0;
						break
					}
				o || i.push(e[r])
			}
			for (e = [], r = 0; r < i.length; r += 1) {
				for (o = !1, s = 0; s < n.length; s += 1)
					if (i[r] === n[s]) {
						o = !0;
						break
					}
				o || e.push(i[r])
			}
			t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
		}

		function et(t, e) {
			for (var n = t.className.split(/\s+/), i = 0, r = n.length; i < r; i++)
				if (n[i] == e) return !0;
			return !1
		}

		function nt(t) {
			if ("string" == typeof t.m) return t.m;
			var e = t.g.location.protocol;
			return "about:" == e && (e = t.h.location.protocol), "https:" == e ? "https:" : "http:"
		}

		function it(t) {
			return t.g.location.hostname || t.h.location.hostname
		}

		function rt(t, e, n, i) {
			function r() {
				h && u && c && (h(f), h = null)
			}

			function o(t) {
				for (var n = 0; n < l.length; n++)
					if (l[n].href && -1 !== l[n].href.indexOf(e)) return void t();
				setTimeout(function () {
					o(t)
				}, 0)
			}

			function s(t) {
				for (var n = 0; n < l.length; n++)
					if (l[n].href && -1 !== l[n].href.indexOf(e) && (l[n].media && "all" === l[n].media || "all" === l[n].media.mediaText)) return void t();
				setTimeout(function () {
					s(t)
				}, 0)
			}
			var a = Q(t, "link", {
					rel: "stylesheet",
					href: e,
					media: i ? "only x" : "all"
				}),
				l = t.b.styleSheets,
				u = !1,
				c = !i,
				f = null,
				h = n || null;
			Vt ? (a.onload = function () {
				u = !0, r()
			}, a.onerror = function () {
				u = !0, f = Error("Stylesheet failed to load"), r()
			}) : setTimeout(function () {
				u = !0, r()
			}, 0), K(t, "head", a), i && o(function () {
				a.media = "all", s(function () {
					c = !0, r()
				})
			})
		}

		function ot(t, e, n) {
			var i = t.b.getElementsByTagName("head")[0];
			if (i) {
				var r = Q(t, "script", {
						src: e
					}),
					o = !1;
				r.onload = r.onreadystatechange = function () {
					o || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o = !0, n && n(null), r.onload = r.onreadystatechange = null, "HEAD" == r.parentNode.tagName && i.removeChild(r))
				}, i.appendChild(r), setTimeout(function () {
					o || (o = !0, n && n(Error("Script load timeout")))
				}, 5e3)
			}
		}

		function st(t, e) {
			this.b = t, this.h = t.g.document.documentElement, this.u = e, this.g = new G("-"), this.w = !1 !== e.events, this.m = !1 !== e.classes
		}

		function at(t) {
			if (t.m) {
				var e = et(t.h, t.g.s("wf", "active")),
					n = [],
					i = [t.g.s("wf", "loading")];
				e || n.push(t.g.s("wf", "inactive")), tt(t.h, n, i)
			}
			lt(t, "inactive")
		}

		function lt(t, e, n) {
			t.w && t.u[e] && (n ? t.u[e](n.getName(), ht(n)) : t.u[e]())
		}

		function ut(t, e) {
			this.h = t, this.g = 4, this.b = "n";
			var n = (e || "n4").match(/^([nio])([1-9])$/i);
			n && (this.b = n[1], this.g = parseInt(n[2], 10))
		}

		function ct(t) {
			return pt(t) + " " + (t.g + "00") + " 300px " + ft(t.h)
		}

		function ft(t) {
			var e = [];
			t = t.split(/,\s*/);
			for (var n = 0; n < t.length; n++) {
				var i = t[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? e.push("'" + i + "'") : e.push(i)
			}
			return e.join(",")
		}

		function ht(t) {
			return t.b + t.g
		}

		function pt(t) {
			var e = "normal";
			return "o" === t.b ? e = "oblique" : "i" === t.b && (e = "italic"), e
		}

		function dt(t, e) {
			this.b = t, this.m = e, this.h = {}, this.g = {}
		}

		function gt(t, e, n) {
			for (var i, r = [], o = t.b.split(",")[0].replace(/"|'/g, ""), s = t.G(), a = [], l = {}, u = 0; u < s.length; u++) i = s[u], 0 < i.length && !l[i] && (l[i] = !0, a.push(i));
			n = n.b ? n.b(o, a, r) : a, t.h[e] = n, t.g[e] = r
		}

		function mt(t, e) {
			for (var n = t.G(e), i = t.g[e] || [], r = [], o = 0; o < n.length; o++) r.push(new ut(t.b, n[o]));
			for (o = 0; o < i.length; o++)
				if (n = i[o].b, n !== t.b)
					for (var s = i[o].G(), a = 0; a < s.length; a++) r.push(new ut(n, s[a]));
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

		function bt(t) {
			return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + ft(t.h) + ";" + ("font-style:" + pt(t) + ";font-weight:" + (t.g + "00") + ";")
		}

		function wt(t, e, n, i, r, o, s) {
			this.H = t, this.R = e, this.b = n, this.g = i, this.C = s || "BESbswy", this.h = {}, this.S = r || 3e3, this.J = o || null, this.A = this.w = this.u = this.m = null, this.m = new vt(this.b, this.C), this.u = new vt(this.b, this.C), this.w = new vt(this.b, this.C), this.A = new vt(this.b, this.C), t = new ut(this.g.getName() + ",serif", ht(this.g)), t = bt(t), this.m.g.style.cssText = t, t = new ut(this.g.getName() + ",sans-serif", ht(this.g)), t = bt(t), this.u.g.style.cssText = t, t = new ut("serif", ht(this.g)), t = bt(t), this.w.g.style.cssText = t, t = new ut("sans-serif", ht(this.g)), t = bt(t), this.A.g.style.cssText = t, yt(this.m), yt(this.u), yt(this.w), yt(this.A)
		}

		function xt() {
			if (null === Ut) {
				var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(t.navigator.userAgent);
				Ut = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
			}
			return Ut
		}

		function _t(t, e, n) {
			for (var i in Wt)
				if (Wt.hasOwnProperty(i) && e === t.h[Wt[i]] && n === t.h[Wt[i]]) return !0;
			return !1
		}

		function $t(t) {
			var e, n = t.m.g.offsetWidth,
				i = t.u.g.offsetWidth;
			(e = n === t.h.serif && i === t.h["sans-serif"]) || (e = xt() && _t(t, n, i)), e ? It() - t.P >= t.S ? xt() && _t(t, n, i) && (null === t.J || t.J.hasOwnProperty(t.g.getName())) ? St(t, t.H) : St(t, t.R) : Tt(t) : St(t, t.H)
		}

		function Tt(t) {
			setTimeout(o(function () {
				$t(this)
			}, t), 50)
		}

		function St(t, e) {
			setTimeout(o(function () {
				J(this.m.g), J(this.u.g), J(this.w.g), J(this.A.g), e(this.g)
			}, t), 0)
		}

		function Ct(t, e, n, i, r, o) {
			this.m = t, this.h = e, this.g = i, this.b = n, this.w = r || 3e3, this.u = o || void 0
		}

		function kt(t, e, n) {
			this.b = t, this.g = e, this.h = 0, this.A = this.w = !1, this.C = n
		}

		function Et(t) {
			0 == --t.h && t.w && (t.A ? (t = t.g, t.m && tt(t.h, [t.g.s("wf", "active")], [t.g.s("wf", "loading"), t.g.s("wf", "inactive")]), lt(t, "active")) : at(t.g))
		}

		function At(t, e) {
			this.m = t, this.b = e, this.g = []
		}

		function Ot(t, e, n) {
			e = t.m.s({
				id: encodeURIComponent(e)
			}), ot(t.b, e, n)
		}

		function Pt(t, e) {
			if (0 !== t.g.length) {
				for (var n = new st(t.b, e), i = !1, r = 0; r < t.g.length; r++) t.g[r].init(), i = i || t.g[r].supportsConfiguredBrowser();
				if (i)
					for (n.m && tt(n.h, [n.g.s("wf", "loading")]), lt(n, "loading"), n = 0; n < t.g.length; n++) i = t.g[n], i.supportsConfiguredBrowser() && i.load(null, n == t.g.length - 1, e);
				else at(n);
				t.g = []
			}
		}

		function Mt() {
			this.g = 0, this.b = null
		}

		function Nt(t) {
			return t.g++,
				function () {
					t.g--, Rt(t)
				}
		}

		function Dt(t, e) {
			t.b = e, Rt(t)
		}

		function Rt(t) {
			0 == t.g && t.b && (t.b(), t.b = null)
		}

		function Lt(t) {
			this.b = t, this.g = "x", this.w = this.H = null, this.h = [], this.m = [], this.C = this.u = null, this.A = !1
		}
		if (!e.querySelector) return void(e.documentElement.className += " wf-inactive");
		var It = Date.now || function () {
			return +new Date
		};
		u.prototype.toString = function () {
			return encodeURIComponent(it(this.b))
		}, c.prototype.toString = function () {
			for (var t = [], e = 0; e < this.b.length; e++)
				for (var n = this.b[e], i = n.G(), n = n.G(this.g), r = 0; r < i.length; r++) {
					var o;
					t: {
						for (o = 0; o < n.length; o++)
							if (i[r] === n[o]) {
								o = !0;
								break t
							}
						o = !1
					}
					t.push(o ? 1 : 0)
				}
			for (t = t.join(""), t = t.replace(/^0+/, ""), e = [], i = t.length; 0 < i; i -= 4) e.unshift(parseInt(t.slice(0 > i - 4 ? 0 : i - 4, i), 2).toString(16));
			return e.join("")
		}, f.prototype.G = function () {
			return this.g
		}, d.prototype.start = function () {
			this.g = (new Date).getTime(), this.b = -1
		};
		var jt = {
				V: "a",
				$: "d",
				U: "i",
				W: "j",
				T: "k",
				Z: "l",
				NONE: "x"
			},
			Ft = {};
		Ft.a = Ft.d = Ft.l = Ft.j = function () {
			return []
		}, Ft.i = function (t, e, n) {
			return [new u(t), new c(e, n)]
		}, Ft.k = function (t) {
			return [new u(t)]
		};
		var zt = {};
		zt.i = new h(function (t, e, n) {
			for (var i = 0; i < e.length; i += 1) {
				var r, o = e[i];
				r = o, r = t.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + r, n.push(new f(r, [o]))
			}
			for (t = {}, o = 0; o < e.length; o++) n = e[o], i = n.charAt(1), (t[i] || (t[i] = [])).push(n);
			for (n = [
					[4, 3, 2, 1, 5, 6, 7, 8, 9],
					[7, 8, 9, 6, 5, 4, 3, 2, 1]
				], i = [], o = 0; o < n.length; o++) {
				r = n[o];
				for (var s = 0; s < r.length; s++) {
					var a = r[s];
					if (t[a]) {
						i = i.concat(t[a]);
						break
					}
				}
			}
			for (n = i, i = {}, t = [], o = 0; o < n.length; o++) r = n[o], i[r] || (i[r] = !0, t.push(r));
			for (n = [], i = 0; i < e.length; i++)
				for (o = e[i], r = 0; r < t.length; r++) s = t[r], s == o && n.push(s);
			return n
		}), m.prototype.s = function (t, e) {
			var n = t || {},
				i = this.b.replace(/\{\/?([^*}]*)(\*?)\}/g, function (t, e, i) {
					return i && n[e] ? "/" + n[e].join("/") : n[e] || ""
				});
			return i.match(/^\/\//) && (i = (e ? "http:" : "https:") + i), i.replace(/\/*\?*($|\?)/, "$1")
		}, b.prototype.getName = function () {
			return this.b
		};
		var qt = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
		w.prototype.toString = function () {
			return [this.b, this.g || "", this.h || "", this.s || ""].join("")
		};
		var Bt = {
				a: function (t, e) {
					return "Safari" === t.getName() && "AppleWebKit" === t.F && $(t.D, new w(525, 13)) && _(t.D, new w(534, 50)) && (N(t) || D(t)) || O(t) && (z(t, e) || F(t, e) && $(t.o, new w(4, 1))) || e.I && "Silk" === t.getName() && _(t.B, new w(2)) && (z(t, e) || D) || e.I && "Silk" === t.getName() && $(t.B, new w(2)) && F(t, e) && $(t.o, new w(4, 1)) || k(t) && (I(t, e) || R(t, e)) || E(t) && (I(t, e) || R(t, e)) || A(t) && (I(t, e) || R(t, e)) || "AdobeAIR" === t.getName() && $(t.B, new w(2, 5)) && (P(t) && null === t.o.b || B(t) || D(t))
				},
				d: function (t, e) {
					return E(t) && (N(t) || B(t) || D(t) || F(t, e) || "CrOS" === t.v || "CrKey" === t.v || j(t, e) || L(t, e)) || A(t) && (j(t, e) || L(t, e)) || "Gecko" === t.F && 1 === x(t.D, new w(1, 9, 1)) && T(t.D, new w(38)) && (N(t) || B(t) || D(t) || F(t, e)) || "Safari" === t.getName() && "AppleWebKit" === t.F && $(t.D, new w(534, 50)) && (N(t) || D(t)) || k(t) && (j(t, e) || L(t, e)) || "Opera" === t.getName() && $(t.B, new w(11, 10)) && T(t.B, new w(22)) && (N(t) || B(t) || D(t) || F(t, e)) || "MSIE" === t.getName() && 9 <= t.K && (M(t) || P(t) && S(t.o, new w(6, 0))) || "Edge" === t.getName() && M(t) || "MSIE" === t.getName() && e.O && "Windows Phone" === t.v && $(t.o, new w(8)) || O(t) && (e.N && "BlackBerry" === t.v && $(t.o, new w(10)) || B(t))
				},
				j: function (t, e) {
					return O(t) && q(t, e) || e.I && "Silk" === t.getName() && $(t.B, new w(2)) && (q(t, e) || B(t))
				},
				i: function (t) {
					return "MSIE" === t.getName() && $(t.B, new w(6, 0)) && (void 0 === t.K || 9 > t.K) && N(t)
				},
				l: function (t, e) {
					return A(t) && (N(t) || B(t) || D(t) || F(t, e) || "CrOS" === t.v || "CrKey" === t.v) || "Gecko" === t.F && $(t.D, new w(39)) && (N(t) || B(t) || D(t) || F(t, e)) || "Opera" === t.getName() && $(t.B, new w(23)) && (N(t) || B(t) || D(t) || F(t, e))
				},
				x: function () {
					return !1
				}
			},
			Ht = new b("Unknown", new w, "Unknown", new w, "Unknown", new w, (void 0));
		G.prototype.s = function (t) {
			for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
			return e.join(this.b)
		};
		var Vt = !!t.FontFace;
		ut.prototype.getName = function () {
			return this.h
		}, dt.prototype.G = function (t) {
			return t ? (this.h[t] || this.m).slice(0) : this.m.slice(0)
		};
		var Wt = {
				Y: "serif",
				X: "sans-serif"
			},
			Ut = null;
		wt.prototype.start = function () {
			this.h.serif = this.w.g.offsetWidth, this.h["sans-serif"] = this.A.g.offsetWidth, this.P = It(), $t(this)
		}, Ct.prototype.start = function () {
			function t() {
				It() - i >= n.w ? n.h(n.g) : e.fonts.load(ct(n.g), n.u).then(function (e) {
					1 <= e.length ? n.m(n.g) : setTimeout(t, 25)
				}, function () {
					n.h(n.g)
				})
			}
			var e = this.b.g.document,
				n = this,
				i = It();
			t()
		};
		var Xt = null;
		kt.prototype.m = function (t) {
			var e = this.g;
			e.m && tt(e.h, [e.g.s("wf", t.getName(), ht(t).toString(), "active")], [e.g.s("wf", t.getName(), ht(t).toString(), "loading"), e.g.s("wf", t.getName(), ht(t).toString(), "inactive")]), lt(e, "fontactive", t), this.A = !0, Et(this)
		}, kt.prototype.u = function (t) {
			var e = this.g;
			if (e.m) {
				var n = et(e.h, e.g.s("wf", t.getName(), ht(t).toString(), "active")),
					i = [],
					r = [e.g.s("wf", t.getName(), ht(t).toString(), "loading")];
				n || i.push(e.g.s("wf", t.getName(), ht(t).toString(), "inactive")), tt(e.h, i, r)
			}
			lt(e, "fontinactive", t), Et(this)
		}, At.prototype.h = function (t) {
			this.g.push(t)
		}, At.prototype.load = function (t, e) {
			var n = t,
				i = e || {};
			if ("string" == typeof n ? n = [n] : n && n.length || (i = n || {}, n = []), n.length)
				for (var r = this, o = n.length, s = 0; s < n.length; s++) Ot(this, n[s], function () {
					0 === --o && Pt(r, i)
				});
			else Pt(this, i)
		}, Lt.prototype.supportsConfiguredBrowser = function () {
			return "x" !== this.g
		}, Lt.prototype.init = function () {
			if (0 < this.m.length) {
				for (var t = [], n = 0; n < this.m.length; n++) t.push(l(this.m[n]));
				var n = this.b,
					t = t.join(""),
					i = Q(this.b, "style");
				i.setAttribute("type", "text/css"), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)), K(n, "head", i)
			}
		}, Lt.prototype.load = function (e, n, i) {
			function r() {}
			var s = this,
				a = i || {},
				l = a.contextPath || ".",
				u = a.hostname || this.C;
			e = a.timeout, i = !!a.async;
			var c = !1 !== a.events,
				f = null,
				b = new d,
				w = new d,
				x = new Mt;
			if (a.active && (r = a.active), a.active = function () {
					if (w.b = (new Date).getTime(), s.J) {
						var e = s.J,
							n = -1 !== b.g && -1 !== b.b ? b.b - b.g : -1,
							i = -1 !== w.g && -1 !== w.b ? w.b - w.g : -1,
							o = new m("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),
							a = encodeURIComponent((t.__adobewebfontsappname__ || e.app || "").toString().substr(0, 20)),
							l = encodeURIComponent(it(s.b)),
							u = [],
							c = [];
						t.Typekit.fonts || (t.Typekit.fonts = []);
						for (var c = t.Typekit.fonts, f = 0; f < e.b.length; f++) {
							for (var h = !1, p = 0; p < c.length; p++)
								if (e.b[f] === c[p]) {
									h = !0;
									break
								}
							h || (u.push(e.b[f]), c.push(e.b[f]))
						}
						u.length && y(o.s({
							service: e.m,
							token: e.u,
							app: a,
							hosting: e.h,
							host: l,
							variations: u.join("."),
							account: e.g,
							stylesheetLoadTime: n,
							fontLoadTime: i,
							version: e.version,
							_: (+new Date).toString()
						}))
					}
					r()
				}, f = new st(this.b, a), this.g) {
				for (var a = zt[this.g] || new h(p), _ = 0; _ < this.h.length; _++) gt(this.h[_], this.g, a);
				if (this.u && (a = g(this.b, this.g, this.h), a = v(this.g, a), a.contextPath = l, u && (a.hostname = u), l = this.u.s(a, !!this.A && "https:" !== nt(this.b)), b.start(), rt(this.b, l, Nt(x), i)), c) {
					for (var $ = [], T = {}, S = new kt(this.b, f, e), _ = 0; _ < this.h.length; _++) $ = $.concat(mt(this.h[_], this.g));
					for (_ = 0; _ < $.length; _++) T[$[_].getName()] = "BESbswy";
					Dt(x, function () {
						b.b = (new Date).getTime(), w.start(), Z(s.b, function () {
							var e = $,
								i = {},
								r = T || {};
							if (0 === e.length && n) at(S.g);
							else {
								S.h += e.length, n && (S.w = n);
								var s, a = [];
								for (s = 0; s < e.length; s++) {
									var l = e[s],
										u = r[l.getName()],
										c = S.g,
										f = l;
									c.m && tt(c.h, [c.g.s("wf", f.getName(), ht(f).toString(), "loading")]), lt(c, "fontloading", f), c = null, null === Xt && (Xt = !!t.FontFace && (!(f = /Gecko.*Firefox\/(\d+)/.exec(t.navigator.userAgent)) || 42 < parseInt(f[1], 10))), c = Xt ? new Ct(o(S.m, S), o(S.u, S), S.b, l, S.C, u) : new wt(o(S.m, S), o(S.u, S), S.b, l, S.C, i, u), a.push(c)
								}
								for (s = 0; s < a.length; s++) a[s].start()
							}
						})
					})
				}
			}
		};
		var Yt, Gt, Qt = new function () {
			var t = e;
			this.b = navigator.userAgent, this.g = t
		};
		if (-1 != Qt.b.indexOf("MSIE") || -1 != Qt.b.indexOf("Trident/")) {
			var Kt = Qt,
				Zt = H(Kt),
				Jt = C(V(Kt)),
				te = null,
				ee = null,
				ne = null,
				ie = X(Kt.b, /Trident\/([\d\w\.]+)/, 1),
				re = Y(Kt.g),
				te = C(-1 != Kt.b.indexOf("MSIE") ? X(Kt.b, /MSIE ([\d\w\.]+)/, 1) : X(Kt.b, /rv:([\d\w\.]+)/, 1));
			"" !== ie ? (ee = "Trident", ne = C(ie)) : (ee = "Unknown", ne = new w), Gt = new b("MSIE", te, ee, ne, Zt, Jt, re)
		} else {
			var oe;
			if (-1 != Qt.b.indexOf("Edge/")) {
				var se = Qt,
					ae = H(se),
					le = C(V(se)),
					ue = C(X(se.b, /Edge\/([\d\w\.]+)/, 1));
				oe = new b("Edge", ue, "Edge", ue, ae, le, Y(se.g))
			} else {
				var ce;
				if (-1 != Qt.b.indexOf("Opera")) ce = W();
				else {
					var fe;
					if (/OPR\/[\d.]+/.test(Qt.b)) fe = U();
					else {
						var he;
						if (/AppleWeb(K|k)it/.test(Qt.b)) he = U();
						else {
							var pe;
							if (-1 != Qt.b.indexOf("Gecko")) {
								var de = Qt,
									ge = "Unknown",
									me = new w,
									ve = C(V(de)); - 1 != de.b.indexOf("Firefox") ? (ge = "Firefox", me = C(X(de.b, /Firefox\/([\d\w\.]+)/, 1))) : -1 != de.b.indexOf("Mozilla") && (ge = "Mozilla");
								var ye = C(X(de.b, /rv:([^\)]+)/, 1));
								pe = new b(ge, me, "Gecko", ye, H(de), ve, Y(de.g))
							} else pe = Ht;
							he = pe
						}
						fe = he
					}
					ce = fe
				}
				oe = ce
			}
			Gt = oe
		}
		Yt = Gt;
		var be = new function () {
			var e = t;
			this.g = this.h = e, this.b = this.g.document
		};
		if (t.Typekit || (t.Typekit = {}), !t.Typekit.load) {
			var we = t.Typekit.config || {},
				xe = null;
			we.k && (xe = new m(we.k));
			var _e = new At(xe, be);
			t.Typekit.load = function () {
				_e.load.apply(_e, arguments)
			}, t.Typekit.addKit = function () {
				_e.h.apply(_e, arguments)
			}
		}
		var $e, Te, Se, Ce = t.Typekit.config || {};
		Se = new Lt(be), Se.J = new function () {
			var t = Ce.ht,
				e = Ce.fi,
				n = Ce.a,
				i = Ce.kt,
				r = Ce.js,
				o = Ce.l;
			this.m = Ce.ps, this.h = t, this.b = e || [], this.g = n || null, this.u = i || null, this.version = r || null, this.app = o || null
		}, Te = new s, Te.M = !Ce.si, Te.L = !Ce.st, Te.I = !Ce.sa, Te.O = !Ce.sw, Te.N = !Ce.sb, Se.w = Te, Ce.ds && (Se.A = Ce.ds), Ce.f && ($e = new m(Ce.f), Se.u = $e), Ce.hn && (Se.C = Ce.hn);
		var ke;
		if (Ce.fn)
			for (ke = 0; ke < Ce.fn.length; ke += 2) Se.h.push(new dt(Ce.fn[ke], Ce.fn[ke + 1]));
		if (Ce.c)
			for (ke = 0; ke < Ce.c.length; ke += 2) Se.m.push(new a);
		Se.H = Yt;
		var Ee;
		t: {
			var Ae, Oe = Se.H,
				Pe = new s,
				Me = Se.w || Pe;
			for (Ae in jt) {
				var Ne = jt[Ae];
				if (Bt[Ne] && Bt[Ne](Oe, Me)) {
					Ee = Ne;
					break t
				}
			}
			for (Ae in jt)
				if (Ne = jt[Ae], Bt[Ne] && Bt[Ne](Oe, Pe)) {
					Ee = "x";
					break t
				}
			Ee = "k"
		}
		if (Se.g = Ee, t.Typekit.addKit(Se), t.WebFont) try {
			t.Typekit.load()
		} catch (De) {}
	}(this, document), window.Modernizr = function (t, e, n) {
		function i(t) {
			b.cssText = t
		}

		function r(t, e) {
			return i(x.join(t + ";") + (e || ""))
		}

		function o(t, e) {
			return typeof t === e
		}

		function s(t, e) {
			return !!~("" + t).indexOf(e)
		}

		function a(t, e) {
			for (var i in t) {
				var r = t[i];
				if (!s(r, "-") && b[r] !== n) return "pfx" != e || r
			}
			return !1
		}

		function l(t, e, i) {
			for (var r in t) {
				var s = e[t[r]];
				if (s !== n) return i === !1 ? t[r] : o(s, "function") ? s.bind(i || e) : s
			}
			return !1
		}

		function u(t, e, n) {
			var i = t.charAt(0).toUpperCase() + t.slice(1),
				r = (t + " " + $.join(i + " ") + i).split(" ");
			return o(e, "string") || o(e, "undefined") ? a(r, e) : (r = (t + " " + T.join(i + " ") + i).split(" "), l(r, e, n))
		}
		var c, f, h, p = "2.6.3",
			d = {},
			g = !0,
			m = e.documentElement,
			v = "modernizr",
			y = e.createElement(v),
			b = y.style,
			w = ":)",
			x = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
			_ = "Webkit Moz O ms",
			$ = _.split(" "),
			T = _.toLowerCase().split(" "),
			S = {
				svg: "http://www.w3.org/2000/svg"
			},
			C = {},
			k = [],
			E = k.slice,
			A = function (t, n, i, r) {
				var o, s, a, l, u = e.createElement("div"),
					c = e.body,
					f = c || e.createElement("body");
				if (parseInt(i, 10))
					for (; i--;) a = e.createElement("div"), a.id = r ? r[i] : v + (i + 1), u.appendChild(a);
				return o = ["­", '<style id="s', v, '">', t, "</style>"].join(""), u.id = v, (c ? u : f).innerHTML += o, f.appendChild(u), c || (f.style.background = "", f.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(f)), s = n(u, t), c ? u.parentNode.removeChild(u) : (f.parentNode.removeChild(f), m.style.overflow = l), !!s
			},
			O = function (e) {
				var n = t.matchMedia || t.msMatchMedia;
				if (n) return n(e).matches;
				var i;
				return A("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
					i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
				}), i
			},
			P = {}.hasOwnProperty;
		h = o(P, "undefined") || o(P.call, "undefined") ? function (t, e) {
			return e in t && o(t.constructor.prototype[e], "undefined")
		} : function (t, e) {
			return P.call(t, e)
		}, Function.prototype.bind || (Function.prototype.bind = function (t) {
			var e = this;
			if ("function" != typeof e) throw new TypeError;
			var n = E.call(arguments, 1),
				i = function () {
					if (this instanceof i) {
						var r = function () {};
						r.prototype = e.prototype;
						var o = new r,
							s = e.apply(o, n.concat(E.call(arguments)));
						return Object(s) === s ? s : o
					}
					return e.apply(t, n.concat(E.call(arguments)))
				};
			return i
		}), C.backgroundsize = function () {
			return u("backgroundSize")
		}, C.borderradius = function () {
			return u("borderRadius")
		}, C.textshadow = function () {
			return "" === e.createElement("div").style.textShadow
		}, C.opacity = function () {
			return r("opacity:.55"), /^0.55$/.test(b.opacity)
		}, C.cssanimations = function () {
			return u("animationName")
		}, C.fontface = function () {
			var t;
			return A('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
				var r = e.getElementById("smodernizr"),
					o = r.sheet || r.styleSheet,
					s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
				t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
			}), t
		}, C.generatedcontent = function () {
			var t;
			return A(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
				t = e.offsetHeight >= 3
			}), t
		}, C.svg = function () {
			return !!e.createElementNS && !!e.createElementNS(S.svg, "svg").createSVGRect
		};
		for (var M in C) h(C, M) && (f = M.toLowerCase(), d[f] = C[M](), k.push((d[f] ? "" : "no-") + f));
		return d.addTest = function (t, e) {
				if ("object" == typeof t)
					for (var i in t) h(t, i) && d.addTest(i, t[i]);
				else {
					if (t = t.toLowerCase(), d[t] !== n) return d;
					e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), d[t] = e
				}
				return d
			}, i(""), y = c = null,
			function (t, e) {
				function n(t, e) {
					var n = t.createElement("p"),
						i = t.getElementsByTagName("head")[0] || t.documentElement;
					return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
				}

				function i() {
					var t = v.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function r(t) {
					var e = m[t[d]];
					return e || (e = {}, g++, t[d] = g, m[g] = e), e
				}

				function o(t, n, i) {
					if (n || (n = e), c) return n.createElement(t);
					i || (i = r(n));
					var o;
					return o = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), o.canHaveChildren && !h.test(t) ? i.frag.appendChild(o) : o
				}

				function s(t, n) {
					if (t || (t = e), c) return t.createDocumentFragment();
					n = n || r(t);
					for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++) o.createElement(a[s]);
					return o
				}

				function a(t, e) {
					e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
						return v.shivMethods ? o(n, t, e) : e.createElem(n)
					}, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (t) {
						return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(v, e.frag)
				}

				function l(t) {
					t || (t = e);
					var i = r(t);
					return v.shivCSS && !u && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || a(t, i), t
				}
				var u, c, f = t.html5 || {},
					h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					d = "_html5shiv",
					g = 0,
					m = {};
				! function () {
					try {
						var t = e.createElement("a");
						t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function () {
							e.createElement("a");
							var t = e.createDocumentFragment();
							return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
						}()
					} catch (n) {
						u = !0, c = !0
					}
				}();
				var v = {
					elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: f.shivCSS !== !1,
					supportsUnknownElements: c,
					shivMethods: f.shivMethods !== !1,
					type: "default",
					shivDocument: l,
					createElement: o,
					createDocumentFragment: s
				};
				t.html5 = v, l(e)
			}(this, e), d._version = p, d._prefixes = x, d._domPrefixes = T, d._cssomPrefixes = $, d.mq = O, d.testProp = function (t) {
				return a([t])
			}, d.testAllProps = u, d.testStyles = A, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + k.join(" ") : ""), d
	}(this, this.document),
	function (t, e, n) {
		function i(t) {
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
			y = 1, t ? t.t ? d(function () {
				("c" == t.t ? h.injectCss : h.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
			}, 0) : (t(), a()) : y = 0
		}

		function l(t, n, i, r, o, l, u) {
			function c(e) {
				if (!p && s(f.readyState) && (b.r = p = 1, !y && a(), f.onload = f.onreadystatechange = null, e)) {
					"img" != t && d(function () {
						x.removeChild(f)
					}, 50);
					for (var i in C[n]) C[n].hasOwnProperty(i) && C[n][i].onload()
				}
			}
			var u = u || h.errorTimeout,
				f = e.createElement(t),
				p = 0,
				m = 0,
				b = {
					t: i,
					s: n,
					e: o,
					a: l,
					x: u
				};
			1 === C[n] && (m = 1, C[n] = []), "object" == t ? f.data = n : (f.src = n, f.type = t), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
				c.call(this, m)
			}, v.splice(r, 0, b), "img" != t && (m || 2 === C[n] ? (x.insertBefore(f, w ? null : g), d(c, u)) : C[n].push(f))
		}

		function u(t, e, n, i, o) {
			return y = 0, e = e || "j", r(t) ? l("c" == e ? $ : _, t, e, this.i++, n, i, o) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
		}

		function c() {
			var t = h;
			return t.loader = {
				load: u,
				i: 0
			}, t
		}
		var f, h, p = e.documentElement,
			d = t.setTimeout,
			g = e.getElementsByTagName("script")[0],
			m = {}.toString,
			v = [],
			y = 0,
			b = "MozAppearance" in p.style,
			w = b && !!e.createRange().compareNode,
			x = w ? p : g.parentNode,
			p = t.opera && "[object Opera]" == m.call(t.opera),
			p = !!e.attachEvent && !p,
			_ = b ? "object" : p ? "script" : "img",
			$ = p ? "script" : _,
			T = Array.isArray || function (t) {
				return "[object Array]" == m.call(t)
			},
			S = [],
			C = {},
			k = {
				timeout: function (t, e) {
					return e.length && (t.timeout = e[0]), t
				}
			};
		h = function (t) {
			function e(t) {
				var e, n, i, t = t.split("!"),
					r = S.length,
					o = t.pop(),
					s = t.length,
					o = {
						url: o,
						origUrl: o,
						prefixes: t
					};
				for (n = 0; n < s; n++) i = t[n].split("="), (e = k[i.shift()]) && (o = e(o, i));
				for (n = 0; n < r; n++) o = S[n](o);
				return o
			}

			function s(t, r, o, s, a) {
				var l = e(t),
					u = l.autoCallback;
				l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[t] || r[s] || r[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, r, o, s, a) : (C[l.url] ? l.noexec = !0 : C[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(u)) && o.load(function () {
					c(), r && r(l.origUrl, a, s), u && u(l.origUrl, a, s), C[l.url] = 2
				})))
			}

			function a(t, e) {
				function n(t, n) {
					if (t) {
						if (r(t)) n || (f = function () {
							var t = [].slice.call(arguments);
							h.apply(this, t), p()
						}), s(t, f, e, 0, u);
						else if (Object(t) === t)
							for (l in a = function () {
									var e, n = 0;
									for (e in t) t.hasOwnProperty(e) && n++;
									return n
								}(), t) t.hasOwnProperty(l) && (!n && !--a && (i(f) ? f = function () {
								var t = [].slice.call(arguments);
								h.apply(this, t), p()
							} : f[l] = function (t) {
								return function () {
									var e = [].slice.call(arguments);
									t && t.apply(this, e), p()
								}
							}(h[l])), s(t[l], f, e, l, u))
					} else !n && p()
				}
				var a, l, u = !!t.test,
					c = t.load || t.both,
					f = t.callback || o,
					h = f,
					p = t.complete || o;
				n(u ? t.yep : t.nope, !!c), c && n(c)
			}
			var l, u, f = this.yepnope.loader;
			if (r(t)) s(t, 0, f, 0);
			else if (T(t))
				for (l = 0; l < t.length; l++) u = t[l], r(u) ? s(u, 0, f, 0) : T(u) ? h(u) : Object(u) === u && a(u, f);
			else Object(t) === t && a(t, f)
		}, h.addPrefix = function (t, e) {
			k[t] = e
		}, h.addFilter = function (t) {
			S.push(t)
		}, h.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", f = function () {
			e.removeEventListener("DOMContentLoaded", f, 0), e.readyState = "complete"
		}, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, r, l, u) {
			var c, f, p = e.createElement("script"),
				r = r || h.errorTimeout;
			p.src = t;
			for (f in i) p.setAttribute(f, i[f]);
			n = u ? a : n || o, p.onreadystatechange = p.onload = function () {
				!c && s(p.readyState) && (c = 1, n(), p.onload = p.onreadystatechange = null)
			}, d(function () {
				c || (c = 1, n(1))
			}, r), l ? p.onload() : g.parentNode.insertBefore(p, g)
		}, t.yepnope.injectCss = function (t, n, i, r, s, l) {
			var u, r = e.createElement("link"),
				n = l ? a : n || o;
			r.href = t, r.rel = "stylesheet", r.type = "text/css";
			for (u in i) r.setAttribute(u, i[u]);
			s || (g.parentNode.insertBefore(r, g), d(n, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	}, ! function (t, e) {
		"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e()
	}(this, function (t, e, n) {
		return function () {
			"use strict";
			var t, e, n;
			this.ScrollReveal = function () {
				function i(n) {
					return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (t = this, t.tools = new e, t.isSupported() ? (t.tools.extend(t.defaults, n || {}), r(t.defaults), t.store = {
						elements: {},
						containers: []
					}, t.sequences = {}, t.history = [], t.uid = 0, t.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), t)
				}

				function r(e) {
					var n = e.container;
					return n && "string" == typeof n ? e.container = window.document.querySelector(n) : (n && !t.tools.isNode(n) && (console.log("ScrollReveal: Invalid container provided, using <html> instead."), e.container = null), null == n && (e.container = window.document.documentElement), e.container)
				}

				function o() {
					return ++t.uid
				}

				function s(e, n) {
					e.config ? e.config = t.tools.extendClone(e.config, n) : e.config = t.tools.extendClone(t.defaults, n), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X", "top" !== e.config.origin && "left" !== e.config.origin || (e.config.distance = "-" + e.config.distance)
				}

				function a(t) {
					var e = window.getComputedStyle(t.domEl);
					t.styles || (t.styles = {
						transition: {},
						transform: {},
						computed: {}
					}, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = e.opacity, e.transition && "all 0s ease 0s" != e.transition ? t.styles.computed.transition = e.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = l(t, 0), t.styles.transition.delayed = l(t, t.config.delay), t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", u(t), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", u(t)
				}

				function l(t, e) {
					var n = t.config;
					return "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + e / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + e / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + e / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + e / 1e3 + "s; "
				}

				function u(t) {
					var e = t.config,
						n = t.styles.transform;
					parseInt(e.distance) && (n.initial += " translate" + e.axis + "(" + e.distance + ")", n.target += " translate" + e.axis + "(0)"), e.scale && (n.initial += " scale(" + e.scale + ")", n.target += " scale(1)"), e.rotate.x && (n.initial += " rotateX(" + e.rotate.x + "deg)", n.target += " rotateX(0)"), e.rotate.y && (n.initial += " rotateY(" + e.rotate.y + "deg)", n.target += " rotateY(0)"), e.rotate.z && (n.initial += " rotateZ(" + e.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + e.opacity + ";", n.target += "; opacity: " + t.styles.computed.opacity + ";"
				}

				function c(e) {
					var n = e.config.container;
					n && -1 == t.store.containers.indexOf(n) && t.store.containers.push(e.config.container), t.store.elements[e.id] = e
				}

				function f(e, n, i) {
					var r = {
						selector: e,
						config: n,
						interval: i
					};
					t.history.push(r)
				}

				function h() {
					if (t.isSupported()) {
						g();
						for (var e = 0; e < t.store.containers.length; e++) t.store.containers[e].addEventListener("scroll", p), t.store.containers[e].addEventListener("resize", p);
						t.initialized || (window.addEventListener("scroll", p), window.addEventListener("resize", p), t.initialized = !0)
					}
					return t
				}

				function p() {
					n(g)
				}

				function d() {
					var e, n, i, r;
					t.tools.forOwn(t.sequences, function (o) {
						r = t.sequences[o], e = !1;
						for (var s = 0; s < r.elemIds.length; s++) i = r.elemIds[s], n = t.store.elements[i], T(n) && !e && (e = !0);
						r.active = e
					})
				}

				function g() {
					var e, n;
					d(), t.tools.forOwn(t.store.elements, function (i) {
						n = t.store.elements[i], e = b(n), y(n) ? (e ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), v("reveal", n, e), n.revealing = !0, n.seen = !0, n.sequence && m(n, e)) : w(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), v("reset", n), n.revealing = !1)
					})
				}

				function m(e, n) {
					var i = 0,
						r = 0,
						o = t.sequences[e.sequence.id];
					o.blocked = !0, n && "onload" == e.config.useDelay && (r = e.config.delay), e.sequence.timer && (i = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
						started: new Date
					}, e.sequence.timer.clock = window.setTimeout(function () {
						o.blocked = !1, e.sequence.timer = null, p()
					}, Math.abs(o.interval) + r - i)
				}

				function v(t, e, n) {
					var i = 0,
						r = 0,
						o = "after";
					switch (t) {
						case "reveal":
							r = e.config.duration, n && (r += e.config.delay), o += "Reveal";
							break;
						case "reset":
							r = e.config.duration, o += "Reset"
					}
					e.timer && (i = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {
						started: new Date
					}, e.timer.clock = window.setTimeout(function () {
						e.config[o](e.domEl), e.timer = null
					}, r - i)
				}

				function y(e) {
					if (e.sequence) {
						var n = t.sequences[e.sequence.id];
						return n.active && !n.blocked && !e.revealing && !e.disabled
					}
					return T(e) && !e.revealing && !e.disabled
				}

				function b(e) {
					var n = e.config.useDelay;
					return "always" === n || "onload" === n && !t.initialized || "once" === n && !e.seen
				}

				function w(e) {
					if (e.sequence) {
						var n = t.sequences[e.sequence.id];
						return !n.active && e.config.reset && e.revealing && !e.disabled
					}
					return !T(e) && e.config.reset && e.revealing && !e.disabled
				}

				function x(t) {
					return {
						width: t.clientWidth,
						height: t.clientHeight
					}
				}

				function _(t) {
					if (t && t !== window.document.documentElement) {
						var e = $(t);
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

				function $(t) {
					var e = 0,
						n = 0,
						i = t.offsetHeight,
						r = t.offsetWidth;
					do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (n += t.offsetLeft); while (t = t.offsetParent);
					return {
						top: e,
						left: n,
						height: i,
						width: r
					}
				}

				function T(t) {
					function e() {
						var e = u + a * s,
							n = c + l * s,
							i = f - a * s,
							p = h - l * s,
							d = o.y + t.config.viewOffset.top,
							g = o.x + t.config.viewOffset.left,
							m = o.y - t.config.viewOffset.bottom + r.height,
							v = o.x - t.config.viewOffset.right + r.width;
						return m > e && i > d && n > g && v > p
					}

					function n() {
						return "fixed" === window.getComputedStyle(t.domEl).position
					}
					var i = $(t.domEl),
						r = x(t.config.container),
						o = _(t.config.container),
						s = t.config.viewFactor,
						a = i.height,
						l = i.width,
						u = i.top,
						c = i.left,
						f = u + a,
						h = c + l;
					return e() || n()
				}
				return i.prototype.defaults = {
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
					afterReveal: function (t) {},
					afterReset: function (t) {}
				}, i.prototype.isSupported = function () {
					var t = document.documentElement.style;
					return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t
				}, i.prototype.reveal = function (e, n, i, l) {
					var u, p, d, g, m, v;
					if (u = n && n.container ? r(n) : t.defaults.container, p = t.tools.isNode(e) ? [e] : Array.prototype.slice.call(u.querySelectorAll(e)), !p.length) return console.log('ScrollReveal: reveal on "' + e + '"" failed, no elements found.'), t;
					n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (v = o(), m = t.sequences[v] = {
						id: v,
						interval: i,
						elemIds: [],
						active: !1
					});
					for (var y = 0; y < p.length; y++) g = p[y].getAttribute("data-sr-id"), g ? d = t.store.elements[g] : (d = {
						id: o(),
						domEl: p[y],
						seen: !1,
						revealing: !1
					}, d.domEl.setAttribute("data-sr-id", d.id)), m && (d.sequence = {
						id: m.id,
						index: m.elemIds.length
					}, m.elemIds.push(d.id)), s(d, n || {}), a(d), c(d), t.tools.isMobile() && !d.config.mobile || !t.isSupported() ? (d.domEl.setAttribute("style", d.styles.inline), d.disabled = !0) : d.revealing || d.domEl.setAttribute("style", d.styles.inline + d.styles.transform.initial);
					return !l && t.isSupported() && (f(e, n), t.initTimeout && window.clearTimeout(t.initTimeout), t.initTimeout = window.setTimeout(h, 0)), t
				}, i.prototype.sync = function () {
					if (t.history.length && t.isSupported()) {
						for (var e = 0; e < t.history.length; e++) {
							var n = t.history[e];
							t.reveal(n.selector, n.config, n.interval, !0)
						}
						h()
					} else console.log("ScrollReveal: sync failed, no reveals found.");
					return t
				}, i
			}(), e = function () {
				function t() {}
				return t.prototype.isObject = function (t) {
					return null !== t && "object" == typeof t && t.constructor == Object
				}, t.prototype.isNode = function (t) {
					return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
				}, t.prototype.forOwn = function (t, e) {
					if (!this.isObject(t)) throw new TypeError('Expected "object", but received "' + typeof t + '".');
					for (var n in t) t.hasOwnProperty(n) && e(n)
				}, t.prototype.extend = function (t, e) {
					return this.forOwn(e, function (n) {
						this.isObject(e[n]) ? (t[n] && this.isObject(t[n]) || (t[n] = {}), this.extend(t[n], e[n])) : t[n] = e[n]
					}.bind(this)), t
				}, t.prototype.extendClone = function (t, e) {
					return this.extend(this.extend({}, t), e)
				}, t.prototype.isMobile = function () {
					return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
				}, t
			}(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
		}.call(this), this.ScrollReveal
	}), ! function (t, e) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
			if (!t.document) throw new Error("jQuery requires a window with a document");
			return e(t)
		} : e(t)
	}("undefined" != typeof window ? window : this, function (t, e) {
		function n(t) {
			var e = !!t && "length" in t && t.length,
				n = ot.type(t);
			return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
		}

		function i(t, e, n) {
			if (ot.isFunction(e)) return ot.grep(t, function (t, i) {
				return !!e.call(t, i, t) !== n
			});
			if (e.nodeType) return ot.grep(t, function (t) {
				return t === e !== n
			});
			if ("string" == typeof e) {
				if (gt.test(e)) return ot.filter(e, t, n);
				e = ot.filter(e, t)
			}
			return ot.grep(t, function (t) {
				return J.call(e, t) > -1 !== n
			})
		}

		function r(t, e) {
			for (;
				(t = t[e]) && 1 !== t.nodeType;);
			return t
		}

		function o(t) {
			var e = {};
			return ot.each(t.match(xt) || [], function (t, n) {
				e[n] = !0
			}), e
		}

		function s() {
			G.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
		}

		function a() {
			this.expando = ot.expando + a.uid++
		}

		function l(t, e, n) {
			var i;
			if (void 0 === n && 1 === t.nodeType)
				if (i = "data-" + e.replace(Et, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : kt.test(n) ? ot.parseJSON(n) : n)
					} catch (r) {}
					Ct.set(t, e, n)
				} else n = void 0;
			return n
		}

		function u(t, e, n, i) {
			var r, o = 1,
				s = 20,
				a = i ? function () {
					return i.cur()
				} : function () {
					return ot.css(t, e, "")
				},
				l = a(),
				u = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
				c = (ot.cssNumber[e] || "px" !== u && +l) && Ot.exec(ot.css(t, e));
			if (c && c[3] !== u) {
				u = u || c[3], n = n || [], c = +l || 1;
				do o = o || ".5", c /= o, ot.style(t, e, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
			}
			return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
		}

		function c(t, e) {
			var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
			return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
		}

		function f(t, e) {
			for (var n = 0, i = t.length; i > n; n++) St.set(t[n], "globalEval", !e || St.get(e[n], "globalEval"))
		}

		function h(t, e, n, i, r) {
			for (var o, s, a, l, u, h, p = e.createDocumentFragment(), d = [], g = 0, m = t.length; m > g; g++)
				if (o = t[g], o || 0 === o)
					if ("object" === ot.type(o)) ot.merge(d, o.nodeType ? [o] : o);
					else if (It.test(o)) {
				for (s = s || p.appendChild(e.createElement("div")), a = (Dt.exec(o) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
				ot.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
			} else d.push(e.createTextNode(o));
			for (p.textContent = "", g = 0; o = d[g++];)
				if (i && ot.inArray(o, i) > -1) r && r.push(o);
				else if (u = ot.contains(o.ownerDocument, o), s = c(p.appendChild(o), "script"), u && f(s), n)
				for (h = 0; o = s[h++];) Rt.test(o.type || "") && n.push(o);
			return p
		}

		function p() {
			return !0
		}

		function d() {
			return !1
		}

		function g() {
			try {
				return G.activeElement
			} catch (t) {}
		}

		function m(t, e, n, i, r, o) {
			var s, a;
			if ("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = void 0);
				for (a in e) m(t, a, n, i, e[a], o);
				return t
			}
			if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = d;
			else if (!r) return t;
			return 1 === o && (s = r, r = function (t) {
				return ot().off(t), s.apply(this, arguments)
			}, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function () {
				ot.event.add(this, e, r, i, n)
			})
		}

		function v(t, e) {
			return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
		}

		function y(t) {
			return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
		}

		function b(t) {
			var e = Vt.exec(t.type);
			return e ? t.type = e[1] : t.removeAttribute("type"), t
		}

		function w(t, e) {
			var n, i, r, o, s, a, l, u;
			if (1 === e.nodeType) {
				if (St.hasData(t) && (o = St.access(t), s = St.set(e, o), u = o.events)) {
					delete s.handle, s.events = {};
					for (r in u)
						for (n = 0, i = u[r].length; i > n; n++) ot.event.add(e, r, u[r][n])
				}
				Ct.hasData(t) && (a = Ct.access(t), l = ot.extend({}, a), Ct.set(e, l))
			}
		}

		function x(t, e) {
			var n = e.nodeName.toLowerCase();
			"input" === n && Nt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
		}

		function _(t, e, n, i) {
			e = K.apply([], e);
			var r, o, s, a, l, u, f = 0,
				p = t.length,
				d = p - 1,
				g = e[0],
				m = ot.isFunction(g);
			if (m || p > 1 && "string" == typeof g && !it.checkClone && Ht.test(g)) return t.each(function (r) {
				var o = t.eq(r);
				m && (e[0] = g.call(this, r, o.html())), _(o, e, n, i)
			});
			if (p && (r = h(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
				for (s = ot.map(c(r, "script"), y), a = s.length; p > f; f++) l = r, f !== d && (l = ot.clone(l, !0, !0), a && ot.merge(s, c(l, "script"))), n.call(t[f], l, f);
				if (a)
					for (u = s[s.length - 1].ownerDocument, ot.map(s, b), f = 0; a > f; f++) l = s[f], Rt.test(l.type || "") && !St.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Wt, "")))
			}
			return t
		}

		function $(t, e, n) {
			for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(c(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && f(c(i, "script")), i.parentNode.removeChild(i));
			return t
		}

		function T(t, e) {
			var n = ot(e.createElement(t)).appendTo(e.body),
				i = ot.css(n[0], "display");
			return n.detach(), i
		}

		function S(t) {
			var e = G,
				n = Xt[t];
			return n || (n = T(t, e), "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), n = T(t, e), Ut.detach()), Xt[t] = n), n
		}

		function C(t, e, n) {
			var i, r, o, s, a = t.style;
			return n = n || Qt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), n && !it.pixelMarginRight() && Gt.test(s) && Yt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
		}

		function k(t, e) {
			return {
				get: function () {
					return t() ? void delete this.get : (this.get = e).apply(this, arguments)
				}
			}
		}

		function E(t) {
			if (t in ie) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
				if (t = ne[n] + e, t in ie) return t
		}

		function A(t, e, n) {
			var i = Ot.exec(e);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
		}

		function O(t, e, n, i, r) {
			for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + Pt[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + Pt[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + Pt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Pt[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + Pt[o] + "Width", !0, r)));
			return s
		}

		function P(e, n, i) {
			var r = !0,
				o = "width" === n ? e.offsetWidth : e.offsetHeight,
				s = Qt(e),
				a = "border-box" === ot.css(e, "boxSizing", !1, s);
			if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
				if (o = C(e, n, s), (0 > o || null == o) && (o = e.style[n]), Gt.test(o)) return o;
				r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
			}
			return o + O(e, n, i || (a ? "border" : "content"), r, s) + "px"
		}

		function M(t, e) {
			for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = St.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Mt(i) && (o[s] = St.access(i, "olddisplay", S(i.nodeName)))) : (r = Mt(i), "none" === n && r || St.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
			for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
			return t
		}

		function N(t, e, n, i, r) {
			return new N.prototype.init(t, e, n, i, r)
		}

		function D() {
			return t.setTimeout(function () {
				re = void 0
			}), re = ot.now()
		}

		function R(t, e) {
			var n, i = 0,
				r = {
					height: t
				};
			for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Pt[i], r["margin" + n] = r["padding" + n] = t;
			return e && (r.opacity = r.width = t), r
		}

		function L(t, e, n) {
			for (var i, r = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
				if (i = r[o].call(n, e, t)) return i
		}

		function I(t, e, n) {
			var i, r, o, s, a, l, u, c, f = this,
				h = {},
				p = t.style,
				d = t.nodeType && Mt(t),
				g = St.get(t, "fxshow");
			n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
				a.unqueued || l()
			}), a.unqueued++, f.always(function () {
				f.always(function () {
					a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
				})
			})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ot.css(t, "display"), c = "none" === u ? St.get(t, "olddisplay") || S(t.nodeName) : u, "inline" === c && "none" === ot.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (i in e)
				if (r = e[i], se.exec(r)) {
					if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
						if ("show" !== r || !g || void 0 === g[i]) continue;
						d = !0
					}
					h[i] = g && g[i] || ot.style(t, i)
				} else u = void 0;
			if (ot.isEmptyObject(h)) "inline" === ("none" === u ? S(t.nodeName) : u) && (p.display = u);
			else {
				g ? "hidden" in g && (d = g.hidden) : g = St.access(t, "fxshow", {}), o && (g.hidden = !d), d ? ot(t).show() : f.done(function () {
					ot(t).hide()
				}), f.done(function () {
					var e;
					St.remove(t, "fxshow");
					for (e in h) ot.style(t, e, h[e])
				});
				for (i in h) s = L(d ? g[i] : 0, i, f), i in g || (g[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
			}
		}

		function j(t, e) {
			var n, i, r, o, s;
			for (n in t)
				if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
					o = s.expand(o), delete t[i];
					for (n in o) n in t || (t[n] = o[n], e[n] = r)
				} else e[i] = r
		}

		function F(t, e, n) {
			var i, r, o = 0,
				s = F.prefilters.length,
				a = ot.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (r) return !1;
					for (var e = re || D(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
					return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
				},
				u = a.promise({
					elem: t,
					props: ot.extend({}, e),
					opts: ot.extend(!0, {
						specialEasing: {},
						easing: ot.easing._default
					}, n),
					originalProperties: e,
					originalOptions: n,
					startTime: re || D(),
					duration: n.duration,
					tweens: [],
					createTween: function (e, n) {
						var i = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
						return u.tweens.push(i), i
					},
					stop: function (e) {
						var n = 0,
							i = e ? u.tweens.length : 0;
						if (r) return this;
						for (r = !0; i > n; n++) u.tweens[n].run(1);
						return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
					}
				}),
				c = u.props;
			for (j(c, u.opts.specialEasing); s > o; o++)
				if (i = F.prefilters[o].call(u, t, c, u.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)), i;
			return ot.map(c, L, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), ot.fx.timer(ot.extend(l, {
				elem: t,
				anim: u,
				queue: u.opts.queue
			})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}

		function z(t) {
			return t.getAttribute && t.getAttribute("class") || ""
		}

		function q(t) {
			return function (e, n) {
				"string" != typeof e && (n = e, e = "*");
				var i, r = 0,
					o = e.toLowerCase().match(xt) || [];
				if (ot.isFunction(n))
					for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
			}
		}

		function B(t, e, n, i) {
			function r(a) {
				var l;
				return o[a] = !0, ot.each(t[a] || [], function (t, a) {
					var u = a(e, n, i);
					return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
				}), l
			}
			var o = {},
				s = t === Ce;
			return r(e.dataTypes[0]) || !o["*"] && r("*")
		}

		function H(t, e) {
			var n, i, r = ot.ajaxSettings.flatOptions || {};
			for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
			return i && ot.extend(!0, t, i), t
		}

		function V(t, e, n) {
			for (var i, r, o, s, a = t.contents, l = t.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
			if (i)
				for (r in a)
					if (a[r] && a[r].test(i)) {
						l.unshift(r);
						break
					}
			if (l[0] in n) o = l[0];
			else {
				for (r in n) {
					if (!l[0] || t.converters[r + " " + l[0]]) {
						o = r;
						break
					}
					s || (s = r)
				}
				o = o || s
			}
			return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
		}

		function W(t, e, n, i) {
			var r, o, s, a, l, u = {},
				c = t.dataTypes.slice();
			if (c[1])
				for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
			for (o = c.shift(); o;)
				if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
					if ("*" === o) o = l;
					else if ("*" !== l && l !== o) {
				if (s = u[l + " " + o] || u["* " + o], !s)
					for (r in u)
						if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
							s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
							break
						}
				if (s !== !0)
					if (s && t["throws"]) e = s(e);
					else try {
						e = s(e)
					} catch (f) {
						return {
							state: "parsererror",
							error: s ? f : "No conversion from " + l + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: e
			}
		}

		function U(t, e, n, i) {
			var r;
			if (ot.isArray(e)) ot.each(e, function (e, r) {
				n || Oe.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
			});
			else if (n || "object" !== ot.type(e)) i(t, e);
			else
				for (r in e) U(t + "[" + r + "]", e[r], n, i)
		}

		function X(t) {
			return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
		}
		var Y = [],
			G = t.document,
			Q = Y.slice,
			K = Y.concat,
			Z = Y.push,
			J = Y.indexOf,
			tt = {},
			et = tt.toString,
			nt = tt.hasOwnProperty,
			it = {},
			rt = "2.2.2",
			ot = function (t, e) {
				return new ot.fn.init(t, e)
			},
			st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			at = /^-ms-/,
			lt = /-([\da-z])/gi,
			ut = function (t, e) {
				return e.toUpperCase()
			};
		ot.fn = ot.prototype = {
			jquery: rt,
			constructor: ot,
			selector: "",
			length: 0,
			toArray: function () {
				return Q.call(this)
			},
			get: function (t) {
				return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
			},
			pushStack: function (t) {
				var e = ot.merge(this.constructor(), t);
				return e.prevObject = this, e.context = this.context, e
			},
			each: function (t) {
				return ot.each(this, t)
			},
			map: function (t) {
				return this.pushStack(ot.map(this, function (e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function () {
				return this.pushStack(Q.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (t) {
				var e = this.length,
					n = +t + (0 > t ? e : 0);
				return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: Z,
			sort: Y.sort,
			splice: Y.splice
		}, ot.extend = ot.fn.extend = function () {
			var t, e, n, i, r, o, s = arguments[0] || {},
				a = 1,
				l = arguments.length,
				u = !1;
			for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
				if (null != (t = arguments[a]))
					for (e in t) n = s[e], i = t[e], s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(u, o, i)) : void 0 !== i && (s[e] = i));
			return s
		}, ot.extend({
			expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (t) {
				throw new Error(t)
			},
			noop: function () {},
			isFunction: function (t) {
				return "function" === ot.type(t)
			},
			isArray: Array.isArray,
			isWindow: function (t) {
				return null != t && t === t.window
			},
			isNumeric: function (t) {
				var e = t && t.toString();
				return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
			},
			isPlainObject: function (t) {
				var e;
				if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
				if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
				for (e in t);
				return void 0 === e || nt.call(t, e)
			},
			isEmptyObject: function (t) {
				var e;
				for (e in t) return !1;
				return !0
			},
			type: function (t) {
				return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
			},
			globalEval: function (t) {
				var e, n = eval;
				t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
			},
			camelCase: function (t) {
				return t.replace(at, "ms-").replace(lt, ut)
			},
			nodeName: function (t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function (t, e) {
				var i, r = 0;
				if (n(t))
					for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
				else
					for (r in t)
						if (e.call(t[r], r, t[r]) === !1) break;
				return t
			},
			trim: function (t) {
				return null == t ? "" : (t + "").replace(st, "")
			},
			makeArray: function (t, e) {
				var i = e || [];
				return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
			},
			inArray: function (t, e, n) {
				return null == e ? -1 : J.call(e, t, n)
			},
			merge: function (t, e) {
				for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
				return t.length = r, t
			},
			grep: function (t, e, n) {
				for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
				return r
			},
			map: function (t, e, i) {
				var r, o, s = 0,
					a = [];
				if (n(t))
					for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
				else
					for (s in t) o = e(t[s], s, i), null != o && a.push(o);
				return K.apply([], a)
			},
			guid: 1,
			proxy: function (t, e) {
				var n, i, r;
				return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = Q.call(arguments, 2), r = function () {
					return t.apply(e || this, i.concat(Q.call(arguments)))
				}, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
			},
			now: Date.now,
			support: it
		}), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Y[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
			tt["[object " + e + "]"] = e.toLowerCase()
		});
		var ct = function (t) {
			function e(t, e, n, i) {
				var r, o, s, a, l, u, f, p, d = e && e.ownerDocument,
					g = e ? e.nodeType : 9;
				if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
				if (!i && ((e ? e.ownerDocument || e : z) !== M && P(e), e = e || M, D)) {
					if (11 !== g && (u = vt.exec(t)))
						if (r = u[1]) {
							if (9 === g) {
								if (!(s = e.getElementById(r))) return n;
								if (s.id === r) return n.push(s), n
							} else if (d && (s = d.getElementById(r)) && j(e, s) && s.id === r) return n.push(s), n
						} else {
							if (u[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
							if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(r)), n
						}
					if (x.qsa && !W[t + " "] && (!R || !R.test(t))) {
						if (1 !== g) d = e, p = t;
						else if ("object" !== e.nodeName.toLowerCase()) {
							for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = F), f = S(t), o = f.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = l + " " + h(f[o]);
							p = f.join(","), d = yt.test(t) && c(e.parentNode) || e
						}
						if (p) try {
							return Z.apply(n, d.querySelectorAll(p)), n
						} catch (m) {} finally {
							a === F && e.removeAttribute("id")
						}
					}
				}
				return k(t.replace(at, "$1"), e, n, i)
			}

			function n() {
				function t(n, i) {
					return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
				var e = [];
				return t
			}

			function i(t) {
				return t[F] = !0, t
			}

			function r(t) {
				var e = M.createElement("div");
				try {
					return !!t(e)
				} catch (n) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function o(t, e) {
				for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
			}

			function s(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function a(t) {
				return function (e) {
					var n = e.nodeName.toLowerCase();
					return "input" === n && e.type === t
				}
			}

			function l(t) {
				return function (e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function u(t) {
				return i(function (e) {
					return e = +e, i(function (n, i) {
						for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function c(t) {
				return t && "undefined" != typeof t.getElementsByTagName && t
			}

			function f() {}

			function h(t) {
				for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
				return i
			}

			function p(t, e, n) {
				var i = e.dir,
					r = n && "parentNode" === i,
					o = B++;
				return e.first ? function (e, n, o) {
					for (; e = e[i];)
						if (1 === e.nodeType || r) return t(e, n, o)
				} : function (e, n, s) {
					var a, l, u, c = [q, o];
					if (s) {
						for (; e = e[i];)
							if ((1 === e.nodeType || r) && t(e, n, s)) return !0
					} else
						for (; e = e[i];)
							if (1 === e.nodeType || r) {
								if (u = e[F] || (e[F] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o) return c[2] = a[2];
								if (l[i] = c, c[2] = t(e, n, s)) return !0
							}
				}
			}

			function d(t) {
				return t.length > 1 ? function (e, n, i) {
					for (var r = t.length; r--;)
						if (!t[r](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function g(t, n, i) {
				for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
				return i
			}

			function m(t, e, n, i, r) {
				for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
				return s
			}

			function v(t, e, n, r, o, s) {
				return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), i(function (i, s, a, l) {
					var u, c, f, h = [],
						p = [],
						d = s.length,
						v = i || g(e || "*", a.nodeType ? [a] : a, []),
						y = !t || !i && e ? v : m(v, h, t, a, l),
						b = n ? o || (i ? t : d || r) ? [] : s : y;
					if (n && n(y, b, a, l), r)
						for (u = m(b, p), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
					if (i) {
						if (o || t) {
							if (o) {
								for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
								o(null, b = [], u, l)
							}
							for (c = b.length; c--;)(f = b[c]) && (u = o ? tt(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
						}
					} else b = m(b === s ? b.splice(d, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
				})
			}

			function y(t) {
				for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = p(function (t) {
						return t === e
					}, s, !0), u = p(function (t) {
						return tt(e, t) > -1
					}, s, !0), c = [function (t, n, i) {
						var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
						return e = null, r
					}]; r > a; a++)
					if (n = _.relative[t[a].type]) c = [p(d(c), n)];
					else {
						if (n = _.filter[t[a].type].apply(null, t[a].matches), n[F]) {
							for (i = ++a; r > i && !_.relative[t[i].type]; i++);
							return v(a > 1 && d(c), a > 1 && h(t.slice(0, a - 1).concat({
								value: " " === t[a - 2].type ? "*" : ""
							})).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
						}
						c.push(n)
					}
				return d(c)
			}

			function b(t, n) {
				var r = n.length > 0,
					o = t.length > 0,
					s = function (i, s, a, l, u) {
						var c, f, h, p = 0,
							d = "0",
							g = i && [],
							v = [],
							y = E,
							b = i || o && _.find.TAG("*", u),
							w = q += null == y ? 1 : Math.random() || .1,
							x = b.length;
						for (u && (E = s === M || s || u); d !== x && null != (c = b[d]); d++) {
							if (o && c) {
								for (f = 0, s || c.ownerDocument === M || (P(c), a = !D); h = t[f++];)
									if (h(c, s || M, a)) {
										l.push(c);
										break
									}
								u && (q = w)
							}
							r && ((c = !h && c) && p--, i && g.push(c))
						}
						if (p += d, r && d !== p) {
							for (f = 0; h = n[f++];) h(g, v, s, a);
							if (i) {
								if (p > 0)
									for (; d--;) g[d] || v[d] || (v[d] = Q.call(l));
								v = m(v)
							}
							Z.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
						}
						return u && (q = w, E = y), g
					};
				return r ? i(s) : s
			}
			var w, x, _, $, T, S, C, k, E, A, O, P, M, N, D, R, L, I, j, F = "sizzle" + 1 * new Date,
				z = t.document,
				q = 0,
				B = 0,
				H = n(),
				V = n(),
				W = n(),
				U = function (t, e) {
					return t === e && (O = !0), 0
				},
				X = 1 << 31,
				Y = {}.hasOwnProperty,
				G = [],
				Q = G.pop,
				K = G.push,
				Z = G.push,
				J = G.slice,
				tt = function (t, e) {
					for (var n = 0, i = t.length; i > n; n++)
						if (t[n] === e) return n;
					return -1
				},
				et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				nt = "[\\x20\\t\\r\\n\\f]",
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
				ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
				st = new RegExp(nt + "+", "g"),
				at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
				lt = new RegExp("^" + nt + "*," + nt + "*"),
				ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
				ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
				ft = new RegExp(ot),
				ht = new RegExp("^" + it + "$"),
				pt = {
					ID: new RegExp("^#(" + it + ")"),
					CLASS: new RegExp("^\\.(" + it + ")"),
					TAG: new RegExp("^(" + it + "|[*])"),
					ATTR: new RegExp("^" + rt),
					PSEUDO: new RegExp("^" + ot),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + et + ")$", "i"),
					needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
				},
				dt = /^(?:input|select|textarea|button)$/i,
				gt = /^h\d$/i,
				mt = /^[^{]+\{\s*\[native \w/,
				vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				yt = /[+~]/,
				bt = /'|\\/g,
				wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
				xt = function (t, e, n) {
					var i = "0x" + e - 65536;
					return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				_t = function () {
					P()
				};
			try {
				Z.apply(G = J.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
			} catch ($t) {
				Z = {
					apply: G.length ? function (t, e) {
						K.apply(t, J.call(e))
					} : function (t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}
			x = e.support = {}, T = e.isXML = function (t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, P = e.setDocument = function (t) {
				var e, n, i = t ? t.ownerDocument || t : z;
				return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, N = M.documentElement, D = !T(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), x.attributes = r(function (t) {
					return t.className = "i", !t.getAttribute("className")
				}), x.getElementsByTagName = r(function (t) {
					return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
				}), x.getElementsByClassName = mt.test(M.getElementsByClassName), x.getById = r(function (t) {
					return N.appendChild(t).id = F, !M.getElementsByName || !M.getElementsByName(F).length
				}), x.getById ? (_.find.ID = function (t, e) {
					if ("undefined" != typeof e.getElementById && D) {
						var n = e.getElementById(t);
						return n ? [n] : []
					}
				}, _.filter.ID = function (t) {
					var e = t.replace(wt, xt);
					return function (t) {
						return t.getAttribute("id") === e
					}
				}) : (delete _.find.ID, _.filter.ID = function (t) {
					var e = t.replace(wt, xt);
					return function (t) {
						var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), _.find.TAG = x.getElementsByTagName ? function (t, e) {
					return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
				} : function (t, e) {
					var n, i = [],
						r = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, _.find.CLASS = x.getElementsByClassName && function (t, e) {
					return "undefined" != typeof e.getElementsByClassName && D ? e.getElementsByClassName(t) : void 0
				}, L = [], R = [], (x.qsa = mt.test(M.querySelectorAll)) && (r(function (t) {
					N.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]")
				}), r(function (t) {
					var e = M.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
				})), (x.matchesSelector = mt.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (t) {
					x.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), L.push("!=", ot)
				}), R = R.length && new RegExp(R.join("|")), L = L.length && new RegExp(L.join("|")), e = mt.test(N.compareDocumentPosition), j = e || mt.test(N.contains) ? function (t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function (t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, U = e ? function (t, e) {
					if (t === e) return O = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === M || t.ownerDocument === z && j(z, t) ? -1 : e === M || e.ownerDocument === z && j(z, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
				} : function (t, e) {
					if (t === e) return O = !0, 0;
					var n, i = 0,
						r = t.parentNode,
						o = e.parentNode,
						a = [t],
						l = [e];
					if (!r || !o) return t === M ? -1 : e === M ? 1 : r ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
					if (r === o) return s(t, e);
					for (n = t; n = n.parentNode;) a.unshift(n);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (; a[i] === l[i];) i++;
					return i ? s(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0
				}, M) : M
			}, e.matches = function (t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function (t, n) {
				if ((t.ownerDocument || t) !== M && P(t), n = n.replace(ct, "='$1']"), x.matchesSelector && D && !W[n + " "] && (!L || !L.test(n)) && (!R || !R.test(n))) try {
					var i = I.call(t, n);
					if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (r) {}
				return e(n, M, null, [t]).length > 0
			}, e.contains = function (t, e) {
				return (t.ownerDocument || t) !== M && P(t), j(t, e)
			}, e.attr = function (t, e) {
				(t.ownerDocument || t) !== M && P(t);
				var n = _.attrHandle[e.toLowerCase()],
					i = n && Y.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
				return void 0 !== i ? i : x.attributes || !D ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, e.error = function (t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function (t) {
				var e, n = [],
					i = 0,
					r = 0;
				if (O = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), O) {
					for (; e = t[r++];) e === t[r] && (i = n.push(r));
					for (; i--;) t.splice(n[i], 1)
				}
				return A = null, t
			}, $ = e.getText = function (t) {
				var e, n = "",
					i = 0,
					r = t.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += $(t)
					} else if (3 === r || 4 === r) return t.nodeValue
				} else
					for (; e = t[i++];) n += $(e);
				return n
			}, _ = e.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: pt,
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
					ATTR: function (t) {
						return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function (t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function (t) {
						var e, n = !t[6] && t[2];
						return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(wt, xt).toLowerCase();
						return "*" === t ? function () {
							return !0
						} : function (t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function (t) {
						var e = H[t + " "];
						return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && H(t, function (t) {
							return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function (t, n, i) {
						return function (r) {
							var o = e.attr(r, t);
							return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function (t, e, n, i, r) {
						var o = "nth" !== t.slice(0, 3),
							s = "last" !== t.slice(-4),
							a = "of-type" === e;
						return 1 === i && 0 === r ? function (t) {
							return !!t.parentNode
						} : function (e, n, l) {
							var u, c, f, h, p, d, g = o !== s ? "nextSibling" : "previousSibling",
								m = e.parentNode,
								v = a && e.nodeName.toLowerCase(),
								y = !l && !a,
								b = !1;
							if (m) {
								if (o) {
									for (; g;) {
										for (h = e; h = h[g];)
											if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										d = g = "only" === t && !d && "nextSibling"
									}
									return !0
								}
								if (d = [s ? m.firstChild : m.lastChild], s && y) {
									for (h = m, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[t] || [], p = u[0] === q && u[1], b = p && u[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || d.pop();)
										if (1 === h.nodeType && ++b && h === e) {
											c[t] = [q, p, b];
											break
										}
								} else if (y && (h = e, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[t] || [], p = u[0] === q && u[1], b = p), b === !1)
									for (;
										(h = ++p && h && h[g] || (b = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[t] = [q, b]), h !== e)););
								return b -= r, b === i || b % i === 0 && b / i >= 0
							}
						}
					},
					PSEUDO: function (t, n) {
						var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
							for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s])
						}) : function (t) {
							return o(t, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: i(function (t) {
						var e = [],
							n = [],
							r = C(t.replace(at, "$1"));
						return r[F] ? i(function (t, e, n, i) {
							for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
						}) : function (t, i, o) {
							return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
						}
					}),
					has: i(function (t) {
						return function (n) {
							return e(t, n).length > 0
						}
					}),
					contains: i(function (t) {
						return t = t.replace(wt, xt),
							function (e) {
								return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
							}
					}),
					lang: i(function (t) {
						return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
							function (e) {
								var n;
								do
									if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function (e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					},
					root: function (t) {
						return t === N
					},
					focus: function (t) {
						return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function (t) {
						return t.disabled === !1
					},
					disabled: function (t) {
						return t.disabled === !0
					},
					checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function (t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function (t) {
						return !_.pseudos.empty(t)
					},
					header: function (t) {
						return gt.test(t.nodeName)
					},
					input: function (t) {
						return dt.test(t.nodeName)
					},
					button: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function (t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: u(function () {
						return [0]
					}),
					last: u(function (t, e) {
						return [e - 1]
					}),
					eq: u(function (t, e, n) {
						return [0 > n ? n + e : n]
					}),
					even: u(function (t, e) {
						for (var n = 0; e > n; n += 2) t.push(n);
						return t
					}),
					odd: u(function (t, e) {
						for (var n = 1; e > n; n += 2) t.push(n);
						return t
					}),
					lt: u(function (t, e, n) {
						for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
						return t
					}),
					gt: u(function (t, e, n) {
						for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}, _.pseudos.nth = _.pseudos.eq;
			for (w in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) _.pseudos[w] = a(w);
			for (w in {
					submit: !0,
					reset: !0
				}) _.pseudos[w] = l(w);
			return f.prototype = _.filters = _.pseudos, _.setFilters = new f, S = e.tokenize = function (t, n) {
				var i, r, o, s, a, l, u, c = V[t + " "];
				if (c) return n ? 0 : c.slice(0);
				for (a = t, l = [], u = _.preFilter; a;) {
					i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
						value: i,
						type: r[0].replace(at, " ")
					}), a = a.slice(i.length));
					for (s in _.filter) !(r = pt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
						value: i,
						type: s,
						matches: r
					}), a = a.slice(i.length));
					if (!i) break
				}
				return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
			}, C = e.compile = function (t, e) {
				var n, i = [],
					r = [],
					o = W[t + " "];
				if (!o) {
					for (e || (e = S(t)), n = e.length; n--;) o = y(e[n]), o[F] ? i.push(o) : r.push(o);
					o = W(t, b(r, i)), o.selector = t
				}
				return o
			}, k = e.select = function (t, e, n, i) {
				var r, o, s, a, l, u = "function" == typeof t && t,
					f = !i && S(t = u.selector || t);
				if (n = n || [], 1 === f.length) {
					if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && D && _.relative[o[1].type]) {
						if (e = (_.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
						u && (e = e.parentNode), t = t.slice(o.shift().value.length)
					}
					for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
						if ((l = _.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(o[0].type) && c(e.parentNode) || e))) {
							if (o.splice(r, 1), t = i.length && h(o), !t) return Z.apply(n, i), n;
							break
						}
				}
				return (u || C(t, f))(i, e, !D, n, !e || yt.test(t) && c(e.parentNode) || e), n
			}, x.sortStable = F.split("").sort(U).join("") === F, x.detectDuplicates = !!O, P(), x.sortDetached = r(function (t) {
				return 1 & t.compareDocumentPosition(M.createElement("div"))
			}), r(function (t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function (t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), x.attributes && r(function (t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || o("value", function (t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), r(function (t) {
				return null == t.getAttribute("disabled")
			}) || o(et, function (t, e, n) {
				var i;
				return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}), e
		}(t);
		ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
		var ft = function (t, e, n) {
				for (var i = [], r = void 0 !== n;
					(t = t[e]) && 9 !== t.nodeType;)
					if (1 === t.nodeType) {
						if (r && ot(t).is(n)) break;
						i.push(t)
					}
				return i
			},
			ht = function (t, e) {
				for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
				return n
			},
			pt = ot.expr.match.needsContext,
			dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			gt = /^.[^:#\[\.,]*$/;
		ot.filter = function (t, e, n) {
			var i = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
				return 1 === t.nodeType
			}))
		}, ot.fn.extend({
			find: function (t) {
				var e, n = this.length,
					i = [],
					r = this;
				if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
					for (e = 0; n > e; e++)
						if (ot.contains(r[e], this)) return !0
				}));
				for (e = 0; n > e; e++) ot.find(t, r[e], i);
				return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
			},
			filter: function (t) {
				return this.pushStack(i(this, t || [], !1))
			},
			not: function (t) {
				return this.pushStack(i(this, t || [], !0))
			},
			is: function (t) {
				return !!i(this, "string" == typeof t && pt.test(t) ? ot(t) : t || [], !1).length
			}
		});
		var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			yt = ot.fn.init = function (t, e, n) {
				var i, r;
				if (!t) return this;
				if (n = n || mt, "string" == typeof t) {
					if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
					if (i[1]) {
						if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), dt.test(i[1]) && ot.isPlainObject(e))
							for (i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
						return this
					}
					return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
				}
				return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
			};
		yt.prototype = ot.fn, mt = ot(G);
		var bt = /^(?:parents|prev(?:Until|All))/,
			wt = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ot.fn.extend({
			has: function (t) {
				var e = ot(t, this),
					n = e.length;
				return this.filter(function () {
					for (var t = 0; n > t; t++)
						if (ot.contains(this, e[t])) return !0
				})
			},
			closest: function (t, e) {
				for (var n, i = 0, r = this.length, o = [], s = pt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
					for (n = this[i]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
			},
			index: function (t) {
				return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (t, e) {
				return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
			},
			addBack: function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), ot.each({
			parent: function (t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			parents: function (t) {
				return ft(t, "parentNode")
			},
			parentsUntil: function (t, e, n) {
				return ft(t, "parentNode", n)
			},
			next: function (t) {
				return r(t, "nextSibling")
			},
			prev: function (t) {
				return r(t, "previousSibling")
			},
			nextAll: function (t) {
				return ft(t, "nextSibling")
			},
			prevAll: function (t) {
				return ft(t, "previousSibling")
			},
			nextUntil: function (t, e, n) {
				return ft(t, "nextSibling", n)
			},
			prevUntil: function (t, e, n) {
				return ft(t, "previousSibling", n)
			},
			siblings: function (t) {
				return ht((t.parentNode || {}).firstChild, t)
			},
			children: function (t) {
				return ht(t.firstChild)
			},
			contents: function (t) {
				return t.contentDocument || ot.merge([], t.childNodes)
			}
		}, function (t, e) {
			ot.fn[t] = function (n, i) {
				var r = ot.map(this, e, n);
				return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (wt[t] || ot.uniqueSort(r), bt.test(t) && r.reverse()), this.pushStack(r)
			}
		});
		var xt = /\S+/g;
		ot.Callbacks = function (t) {
			t = "string" == typeof t ? o(t) : ot.extend({}, t);
			var e, n, i, r, s = [],
				a = [],
				l = -1,
				u = function () {
					for (r = t.once, i = e = !0; a.length; l = -1)
						for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
					t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
				},
				c = {
					add: function () {
						return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
							ot.each(e, function (e, n) {
								ot.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && i(n)
							})
						}(arguments), n && !e && u()), this
					},
					remove: function () {
						return ot.each(arguments, function (t, e) {
							for (var n;
								(n = ot.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
						}), this
					},
					has: function (t) {
						return t ? ot.inArray(t, s) > -1 : s.length > 0
					},
					empty: function () {
						return s && (s = []), this
					},
					disable: function () {
						return r = a = [], s = n = "", this
					},
					disabled: function () {
						return !s
					},
					lock: function () {
						return r = a = [], n || (s = n = ""), this
					},
					locked: function () {
						return !!r
					},
					fireWith: function (t, n) {
						return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
					},
					fire: function () {
						return c.fireWith(this, arguments), this
					},
					fired: function () {
						return !!i
					}
				};
			return c
		}, ot.extend({
			Deferred: function (t) {
				var e = [
						["resolve", "done", ot.Callbacks("once memory"), "resolved"],
						["reject", "fail", ot.Callbacks("once memory"), "rejected"],
						["notify", "progress", ot.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function () {
							return n
						},
						always: function () {
							return r.done(arguments).fail(arguments), this
						},
						then: function () {
							var t = arguments;
							return ot.Deferred(function (n) {
								ot.each(e, function (e, o) {
									var s = ot.isFunction(t[e]) && t[e];
									r[o[1]](function () {
										var t = s && s.apply(this, arguments);
										t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
									})
								}), t = null
							}).promise()
						},
						promise: function (t) {
							return null != t ? ot.extend(t, i) : i
						}
					},
					r = {};
				return i.pipe = i.then, ot.each(e, function (t, o) {
					var s = o[2],
						a = o[3];
					i[o[1]] = s.add, a && s.add(function () {
						n = a
					}, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
						return r[o[0] + "With"](this === r ? i : this, arguments), this
					}, r[o[0] + "With"] = s.fireWith
				}), i.promise(r), t && t.call(r, r), r
			},
			when: function (t) {
				var e, n, i, r = 0,
					o = Q.call(arguments),
					s = o.length,
					a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
					l = 1 === a ? t : ot.Deferred(),
					u = function (t, n, i) {
						return function (r) {
							n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
						}
					};
				if (s > 1)
					for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
				return a || l.resolveWith(i, o), l.promise()
			}
		});
		var _t;
		ot.fn.ready = function (t) {
			return ot.ready.promise().done(t), this
		}, ot.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (t) {
				t ? ot.readyWait++ : ot.ready(!0)
			},
			ready: function (t) {
				(t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (_t.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
			}
		}), ot.ready.promise = function (e) {
			return _t || (_t = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), _t.promise(e)
		}, ot.ready.promise();
		var $t = function (t, e, n, i, r, o, s) {
				var a = 0,
					l = t.length,
					u = null == n;
				if ("object" === ot.type(n)) {
					r = !0;
					for (a in n) $t(t, e, a, n[a], !0, o, s)
				} else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
						return u.call(ot(t), n)
					})), e))
					for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
				return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
			},
			Tt = function (t) {
				return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
			};
		a.uid = 1, a.prototype = {
			register: function (t, e) {
				var n = e || {};
				return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
					value: n,
					writable: !0,
					configurable: !0
				}), t[this.expando]
			},
			cache: function (t) {
				if (!Tt(t)) return {};
				var e = t[this.expando];
				return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
					value: e,
					configurable: !0
				}))), e
			},
			set: function (t, e, n) {
				var i, r = this.cache(t);
				if ("string" == typeof e) r[e] = n;
				else
					for (i in e) r[i] = e[i];
				return r
			},
			get: function (t, e) {
				return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
			},
			access: function (t, e, n) {
				var i;
				return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
			},
			remove: function (t, e) {
				var n, i, r, o = t[this.expando];
				if (void 0 !== o) {
					if (void 0 === e) this.register(t);
					else {
						ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(xt) || [])), n = i.length;
						for (; n--;) delete o[i[n]]
					}(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
				}
			},
			hasData: function (t) {
				var e = t[this.expando];
				return void 0 !== e && !ot.isEmptyObject(e)
			}
		};
		var St = new a,
			Ct = new a,
			kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Et = /[A-Z]/g;
		ot.extend({
			hasData: function (t) {
				return Ct.hasData(t) || St.hasData(t)
			},
			data: function (t, e, n) {
				return Ct.access(t, e, n)
			},
			removeData: function (t, e) {
				Ct.remove(t, e)
			},
			_data: function (t, e, n) {
				return St.access(t, e, n)
			},
			_removeData: function (t, e) {
				St.remove(t, e)
			}
		}), ot.fn.extend({
			data: function (t, e) {
				var n, i, r, o = this[0],
					s = o && o.attributes;
				if (void 0 === t) {
					if (this.length && (r = Ct.get(o), 1 === o.nodeType && !St.get(o, "hasDataAttrs"))) {
						for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
						St.set(o, "hasDataAttrs", !0)
					}
					return r
				}
				return "object" == typeof t ? this.each(function () {
					Ct.set(this, t)
				}) : $t(this, function (e) {
					var n, i;
					if (o && void 0 === e) {
						if (n = Ct.get(o, t) || Ct.get(o, t.replace(Et, "-$&").toLowerCase()), void 0 !== n) return n;
						if (i = ot.camelCase(t), n = Ct.get(o, i), void 0 !== n) return n;
						if (n = l(o, i, void 0), void 0 !== n) return n
					} else i = ot.camelCase(t), this.each(function () {
						var n = Ct.get(this, i);
						Ct.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ct.set(this, t, e)
					})
				}, null, e, arguments.length > 1, null, !0)
			},
			removeData: function (t) {
				return this.each(function () {
					Ct.remove(this, t)
				})
			}
		}), ot.extend({
			queue: function (t, e, n) {
				var i;
				return t ? (e = (e || "fx") + "queue", i = St.get(t, e), n && (!i || ot.isArray(n) ? i = St.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function (t, e) {
				e = e || "fx";
				var n = ot.queue(t, e),
					i = n.length,
					r = n.shift(),
					o = ot._queueHooks(t, e),
					s = function () {
						ot.dequeue(t, e)
					};
				"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
			},
			_queueHooks: function (t, e) {
				var n = e + "queueHooks";
				return St.get(t, n) || St.access(t, n, {
					empty: ot.Callbacks("once memory").add(function () {
						St.remove(t, [e + "queue", n])
					})
				})
			}
		}), ot.fn.extend({
			queue: function (t, e) {
				var n = 2;
				return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
					var n = ot.queue(this, t, e);
					ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
				})
			},
			dequeue: function (t) {
				return this.each(function () {
					ot.dequeue(this, t)
				})
			},
			clearQueue: function (t) {
				return this.queue(t || "fx", [])
			},
			promise: function (t, e) {
				var n, i = 1,
					r = ot.Deferred(),
					o = this,
					s = this.length,
					a = function () {
						--i || r.resolveWith(o, [o])
					};
				for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = St.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
				return a(), r.promise(e)
			}
		});
		var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ot = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
			Pt = ["Top", "Right", "Bottom", "Left"],
			Mt = function (t, e) {
				return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
			},
			Nt = /^(?:checkbox|radio)$/i,
			Dt = /<([\w:-]+)/,
			Rt = /^$|\/(?:java|ecma)script/i,
			Lt = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td;
		var It = /<|&#?\w+;/;
		! function () {
			var t = G.createDocumentFragment(),
				e = t.appendChild(G.createElement("div")),
				n = G.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
		}();
		var jt = /^key/,
			Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			zt = /^([^.]*)(?:\.(.+)|)/;
		ot.event = {
			global: {},
			add: function (t, e, n, i, r) {
				var o, s, a, l, u, c, f, h, p, d, g, m = St.get(t);
				if (m)
					for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
							return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
						}), e = (e || "").match(xt) || [""], u = e.length; u--;) a = zt.exec(e[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p && (f = ot.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = ot.event.special[p] || {}, c = ot.extend({
						type: p,
						origType: g,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && ot.expr.match.needsContext.test(r),
						namespace: d.join(".")
					}, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), ot.event.global[p] = !0)
			},
			remove: function (t, e, n, i, r) {
				var o, s, a, l, u, c, f, h, p, d, g, m = St.hasData(t) && St.get(t);
				if (m && (l = m.events)) {
					for (e = (e || "").match(xt) || [""], u = e.length; u--;)
						if (a = zt.exec(e[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p) {
							for (f = ot.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
							s && !h.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || ot.removeEvent(t, p, m.handle), delete l[p])
						} else
							for (p in l) ot.event.remove(t, p + e[u], n, i, !0);
					ot.isEmptyObject(l) && St.remove(t, "handle events")
				}
			},
			dispatch: function (t) {
				t = ot.event.fix(t);
				var e, n, i, r, o, s = [],
					a = Q.call(arguments),
					l = (St.get(this, "events") || {})[t.type] || [],
					u = ot.event.special[t.type] || {};
				if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
					for (s = ot.event.handlers.call(this, t, l), e = 0;
						(r = s[e++]) && !t.isPropagationStopped();)
						for (t.currentTarget = r.elem, n = 0;
							(o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, t), t.result
				}
			},
			handlers: function (t, e) {
				var n, i, r, o, s = [],
					a = e.delegateCount,
					l = t.target;
				if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
					for (; l !== this; l = l.parentNode || this)
						if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
							for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
							i.length && s.push({
								elem: l,
								handlers: i
							})
						}
				return a < e.length && s.push({
					elem: this,
					handlers: e.slice(a)
				}), s
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (t, e) {
					return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (t, e) {
					var n, i, r, o = e.button;
					return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
				}
			},
			fix: function (t) {
				if (t[ot.expando]) return t;
				var e, n, i, r = t.type,
					o = t,
					s = this.fixHooks[r];
				for (s || (this.fixHooks[r] = s = Ft.test(r) ? this.mouseHooks : jt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
				return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						return this !== g() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						return this === g() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function (t) {
						return ot.nodeName(t.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (t) {
						void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
					}
				}
			}
		}, ot.removeEvent = function (t, e, n) {
			t.removeEventListener && t.removeEventListener(e, n)
		}, ot.Event = function (t, e) {
			return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : d) : this.type = t, e && ot.extend(this, e),
				this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
		}, ot.Event.prototype = {
			constructor: ot.Event,
			isDefaultPrevented: d,
			isPropagationStopped: d,
			isImmediatePropagationStopped: d,
			preventDefault: function () {
				var t = this.originalEvent;
				this.isDefaultPrevented = p, t && t.preventDefault()
			},
			stopPropagation: function () {
				var t = this.originalEvent;
				this.isPropagationStopped = p, t && t.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var t = this.originalEvent;
				this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ot.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (t, e) {
			ot.event.special[t] = {
				delegateType: e,
				bindType: e,
				handle: function (t) {
					var n, i = this,
						r = t.relatedTarget,
						o = t.handleObj;
					return r && (r === i || ot.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
				}
			}
		}), ot.fn.extend({
			on: function (t, e, n, i) {
				return m(this, t, e, n, i)
			},
			one: function (t, e, n, i) {
				return m(this, t, e, n, i, 1)
			},
			off: function (t, e, n) {
				var i, r;
				if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof t) {
					for (r in t) this.off(r, e, t[r]);
					return this
				}
				return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function () {
					ot.event.remove(this, t, n, e)
				})
			}
		});
		var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			Bt = /<script|<style|<link/i,
			Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Vt = /^true\/(.*)/,
			Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		ot.extend({
			htmlPrefilter: function (t) {
				return t.replace(qt, "<$1></$2>")
			},
			clone: function (t, e, n) {
				var i, r, o, s, a = t.cloneNode(!0),
					l = ot.contains(t.ownerDocument, t);
				if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
					for (s = c(a), o = c(t), i = 0, r = o.length; r > i; i++) x(o[i], s[i]);
				if (e)
					if (n)
						for (o = o || c(t), s = s || c(a), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
					else w(t, a);
				return s = c(a, "script"), s.length > 0 && f(s, !l && c(t, "script")), a
			},
			cleanData: function (t) {
				for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
					if (Tt(n)) {
						if (e = n[St.expando]) {
							if (e.events)
								for (i in e.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
							n[St.expando] = void 0
						}
						n[Ct.expando] && (n[Ct.expando] = void 0)
					}
			}
		}), ot.fn.extend({
			domManip: _,
			detach: function (t) {
				return $(this, t, !0)
			},
			remove: function (t) {
				return $(this, t)
			},
			text: function (t) {
				return $t(this, function (t) {
					return void 0 === t ? ot.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
					})
				}, null, t, arguments.length)
			},
			append: function () {
				return _(this, arguments, function (t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = v(this, t);
						e.appendChild(t)
					}
				})
			},
			prepend: function () {
				return _(this, arguments, function (t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = v(this, t);
						e.insertBefore(t, e.firstChild)
					}
				})
			},
			before: function () {
				return _(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this)
				})
			},
			after: function () {
				return _(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
				})
			},
			empty: function () {
				for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
				return this
			},
			clone: function (t, e) {
				return t = null != t && t, e = null == e ? t : e, this.map(function () {
					return ot.clone(this, t, e)
				})
			},
			html: function (t) {
				return $t(this, function (t) {
					var e = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
					if ("string" == typeof t && !Bt.test(t) && !Lt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
						t = ot.htmlPrefilter(t);
						try {
							for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
							e = 0
						} catch (r) {}
					}
					e && this.empty().append(t)
				}, null, t, arguments.length)
			},
			replaceWith: function () {
				var t = [];
				return _(this, arguments, function (e) {
					var n = this.parentNode;
					ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
				}, t)
			}
		}), ot.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (t, e) {
			ot.fn[t] = function (t) {
				for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(r[s])[e](n), Z.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Ut, Xt = {
				HTML: "block",
				BODY: "block"
			},
			Yt = /^margin/,
			Gt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
			Qt = function (e) {
				var n = e.ownerDocument.defaultView;
				return n && n.opener || (n = t), n.getComputedStyle(e)
			},
			Kt = function (t, e, n, i) {
				var r, o, s = {};
				for (o in e) s[o] = t.style[o], t.style[o] = e[o];
				r = n.apply(t, i || []);
				for (o in e) t.style[o] = s[o];
				return r
			},
			Zt = G.documentElement;
		! function () {
			function e() {
				a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(s);
				var e = t.getComputedStyle(a);
				n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Zt.removeChild(s)
			}
			var n, i, r, o, s = G.createElement("div"),
				a = G.createElement("div");
			a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
				pixelPosition: function () {
					return e(), n
				},
				boxSizingReliable: function () {
					return null == i && e(), i
				},
				pixelMarginRight: function () {
					return null == i && e(), r
				},
				reliableMarginLeft: function () {
					return null == i && e(), o
				},
				reliableMarginRight: function () {
					var e, n = a.appendChild(G.createElement("div"));
					return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Zt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Zt.removeChild(s), a.removeChild(n), e
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
			ne = ["Webkit", "O", "Moz", "ms"],
			ie = G.createElement("div").style;
		ot.extend({
			cssHooks: {
				opacity: {
					get: function (t, e) {
						if (e) {
							var n = C(t, "opacity");
							return "" === n ? "1" : n
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
			style: function (t, e, n, i) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var r, o, s, a = ot.camelCase(e),
						l = t.style;
					return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Ot.exec(n)) && r[1] && (n = u(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
				}
			},
			css: function (t, e, n, i) {
				var r, o, s, a = ot.camelCase(e);
				return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = C(t, e, i)), "normal" === r && e in ee && (r = ee[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
			}
		}), ot.each(["height", "width"], function (t, e) {
			ot.cssHooks[e] = {
				get: function (t, n, i) {
					return n ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function () {
						return P(t, e, i)
					}) : P(t, e, i) : void 0
				},
				set: function (t, n, i) {
					var r, o = i && Qt(t),
						s = i && O(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
					return s && (r = Ot.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), A(t, n, s)
				}
			}
		}), ot.cssHooks.marginLeft = k(it.reliableMarginLeft, function (t, e) {
			return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
				marginLeft: 0
			}, function () {
				return t.getBoundingClientRect().left
			})) + "px" : void 0
		}), ot.cssHooks.marginRight = k(it.reliableMarginRight, function (t, e) {
			return e ? Kt(t, {
				display: "inline-block"
			}, C, [t, "marginRight"]) : void 0
		}), ot.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (t, e) {
			ot.cssHooks[t + e] = {
				expand: function (n) {
					for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Pt[i] + e] = o[i] || o[i - 2] || o[0];
					return r
				}
			}, Yt.test(t) || (ot.cssHooks[t + e].set = A)
		}), ot.fn.extend({
			css: function (t, e) {
				return $t(this, function (t, e, n) {
					var i, r, o = {},
						s = 0;
					if (ot.isArray(e)) {
						for (i = Qt(t), r = e.length; r > s; s++) o[e[s]] = ot.css(t, e[s], !1, i);
						return o
					}
					return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
				}, t, e, arguments.length > 1)
			},
			show: function () {
				return M(this, !0)
			},
			hide: function () {
				return M(this)
			},
			toggle: function (t) {
				return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
					Mt(this) ? ot(this).show() : ot(this).hide()
				})
			}
		}), ot.Tween = N, N.prototype = {
			constructor: N,
			init: function (t, e, n, i, r, o) {
				this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var t = N.propHooks[this.prop];
				return t && t.get ? t.get(this) : N.propHooks._default.get(this)
			},
			run: function (t) {
				var e, n = N.propHooks[this.prop];
				return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
			}
		}, N.prototype.init.prototype = N.prototype, N.propHooks = {
			_default: {
				get: function (t) {
					var e;
					return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
				},
				set: function (t) {
					ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
				}
			}
		}, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
			set: function (t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, ot.easing = {
			linear: function (t) {
				return t
			},
			swing: function (t) {
				return .5 - Math.cos(t * Math.PI) / 2
			},
			_default: "swing"
		}, ot.fx = N.prototype.init, ot.fx.step = {};
		var re, oe, se = /^(?:toggle|show|hide)$/,
			ae = /queueHooks$/;
		ot.Animation = ot.extend(F, {
				tweeners: {
					"*": [function (t, e) {
						var n = this.createTween(t, e);
						return u(n.elem, t, Ot.exec(e), n), n
					}]
				},
				tweener: function (t, e) {
					ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(xt);
					for (var n, i = 0, r = t.length; r > i; i++) n = t[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(e)
				},
				prefilters: [I],
				prefilter: function (t, e) {
					e ? F.prefilters.unshift(t) : F.prefilters.push(t)
				}
			}), ot.speed = function (t, e, n) {
				var i = t && "object" == typeof t ? ot.extend({}, t) : {
					complete: n || !n && e || ot.isFunction(t) && t,
					duration: t,
					easing: n && e || e && !ot.isFunction(e) && e
				};
				return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
					ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
				}, i
			}, ot.fn.extend({
				fadeTo: function (t, e, n, i) {
					return this.filter(Mt).css("opacity", 0).show().end().animate({
						opacity: e
					}, t, n, i)
				},
				animate: function (t, e, n, i) {
					var r = ot.isEmptyObject(t),
						o = ot.speed(e, n, i),
						s = function () {
							var e = F(this, ot.extend({}, t), o);
							(r || St.get(this, "finish")) && e.stop(!0)
						};
					return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
				},
				stop: function (t, e, n) {
					var i = function (t) {
						var e = t.stop;
						delete t.stop, e(n)
					};
					return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
						var e = !0,
							r = null != t && t + "queueHooks",
							o = ot.timers,
							s = St.get(this);
						if (r) s[r] && s[r].stop && i(s[r]);
						else
							for (r in s) s[r] && s[r].stop && ae.test(r) && i(s[r]);
						for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
						!e && n || ot.dequeue(this, t)
					})
				},
				finish: function (t) {
					return t !== !1 && (t = t || "fx"), this.each(function () {
						var e, n = St.get(this),
							i = n[t + "queue"],
							r = n[t + "queueHooks"],
							o = ot.timers,
							s = i ? i.length : 0;
						for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
						for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
						delete n.finish
					})
				}
			}), ot.each(["toggle", "show", "hide"], function (t, e) {
				var n = ot.fn[e];
				ot.fn[e] = function (t, i, r) {
					return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r)
				}
			}), ot.each({
				slideDown: R("show"),
				slideUp: R("hide"),
				slideToggle: R("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (t, e) {
				ot.fn[t] = function (t, n, i) {
					return this.animate(e, t, n, i)
				}
			}), ot.timers = [], ot.fx.tick = function () {
				var t, e = 0,
					n = ot.timers;
				for (re = ot.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
				n.length || ot.fx.stop(), re = void 0
			}, ot.fx.timer = function (t) {
				ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
			}, ot.fx.interval = 13, ot.fx.start = function () {
				oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
			}, ot.fx.stop = function () {
				t.clearInterval(oe), oe = null
			}, ot.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, ot.fn.delay = function (e, n) {
				return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
					var r = t.setTimeout(n, e);
					i.stop = function () {
						t.clearTimeout(r)
					}
				})
			},
			function () {
				var t = G.createElement("input"),
					e = G.createElement("select"),
					n = e.appendChild(G.createElement("option"));
				t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
			}();
		var le, ue = ot.expr.attrHandle;
		ot.fn.extend({
			attr: function (t, e) {
				return $t(this, ot.attr, t, e, arguments.length > 1)
			},
			removeAttr: function (t) {
				return this.each(function () {
					ot.removeAttr(this, t)
				})
			}
		}), ot.extend({
			attr: function (t, e, n) {
				var i, r, o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
			},
			attrHooks: {
				type: {
					set: function (t, e) {
						if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
							var n = t.value;
							return t.setAttribute("type", e), n && (t.value = n), e
						}
					}
				}
			},
			removeAttr: function (t, e) {
				var n, i, r = 0,
					o = e && e.match(xt);
				if (o && 1 === t.nodeType)
					for (; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
			}
		}), le = {
			set: function (t, e, n) {
				return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
			}
		}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
			var n = ue[e] || ot.find.attr;
			ue[e] = function (t, e, i) {
				var r, o;
				return i || (o = ue[e], ue[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ue[e] = o), r
			}
		});
		var ce = /^(?:input|select|textarea|button)$/i,
			fe = /^(?:a|area)$/i;
		ot.fn.extend({
			prop: function (t, e) {
				return $t(this, ot.prop, t, e, arguments.length > 1)
			},
			removeProp: function (t) {
				return this.each(function () {
					delete this[ot.propFix[t] || t]
				})
			}
		}), ot.extend({
			prop: function (t, e, n) {
				var i, r, o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
			},
			propHooks: {
				tabIndex: {
					get: function (t) {
						var e = ot.find.attr(t, "tabindex");
						return e ? parseInt(e, 10) : ce.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		}), it.optSelected || (ot.propHooks.selected = {
			get: function (t) {
				var e = t.parentNode;
				return e && e.parentNode && e.parentNode.selectedIndex, null
			},
			set: function (t) {
				var e = t.parentNode;
				e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
			}
		}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			ot.propFix[this.toLowerCase()] = this
		});
		var he = /[\t\r\n\f]/g;
		ot.fn.extend({
			addClass: function (t) {
				var e, n, i, r, o, s, a, l = 0;
				if (ot.isFunction(t)) return this.each(function (e) {
					ot(this).addClass(t.call(this, e, z(this)))
				});
				if ("string" == typeof t && t)
					for (e = t.match(xt) || []; n = this[l++];)
						if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(he, " ")) {
							for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
							a = ot.trim(i), r !== a && n.setAttribute("class", a)
						}
				return this
			},
			removeClass: function (t) {
				var e, n, i, r, o, s, a, l = 0;
				if (ot.isFunction(t)) return this.each(function (e) {
					ot(this).removeClass(t.call(this, e, z(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof t && t)
					for (e = t.match(xt) || []; n = this[l++];)
						if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(he, " ")) {
							for (s = 0; o = e[s++];)
								for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
							a = ot.trim(i), r !== a && n.setAttribute("class", a)
						}
				return this
			},
			toggleClass: function (t, e) {
				var n = typeof t;
				return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
					ot(this).toggleClass(t.call(this, n, z(this), e), e)
				}) : this.each(function () {
					var e, i, r, o;
					if ("string" === n)
						for (i = 0, r = ot(this), o = t.match(xt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
					else void 0 !== t && "boolean" !== n || (e = z(this), e && St.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : St.get(this, "__className__") || ""))
				})
			},
			hasClass: function (t) {
				var e, n, i = 0;
				for (e = " " + t + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + z(n) + " ").replace(he, " ").indexOf(e) > -1) return !0;
				return !1
			}
		});
		var pe = /\r/g,
			de = /[\x20\t\r\n\f]+/g;
		ot.fn.extend({
			val: function (t) {
				var e, n, i, r = this[0];
				return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
					var r;
					1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function (t) {
						return null == t ? "" : t + ""
					})), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
				})) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(pe, "") : null == n ? "" : n)) : void 0
			}
		}), ot.extend({
			valHooks: {
				option: {
					get: function (t) {
						var e = ot.find.attr(t, "value");
						return null != e ? e : ot.trim(ot.text(t)).replace(de, " ")
					}
				},
				select: {
					get: function (t) {
						for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
							if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
								if (e = ot(n).val(), o) return e;
								s.push(e)
							}
						return s
					},
					set: function (t, e) {
						for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
						return n || (t.selectedIndex = -1), o
					}
				}
			}
		}), ot.each(["radio", "checkbox"], function () {
			ot.valHooks[this] = {
				set: function (t, e) {
					return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
				}
			}, it.checkOn || (ot.valHooks[this].get = function (t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		});
		var ge = /^(?:focusinfocus|focusoutblur)$/;
		ot.extend(ot.event, {
			trigger: function (e, n, i, r) {
				var o, s, a, l, u, c, f, h = [i || G],
					p = nt.call(e, "type") ? e.type : e,
					d = nt.call(e, "namespace") ? e.namespace.split(".") : [];
				if (s = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !ge.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), f = ot.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
					if (!r && !f.noBubble && !ot.isWindow(i)) {
						for (l = f.delegateType || p, ge.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
						a === (i.ownerDocument || G) && h.push(a.defaultView || a.parentWindow || t)
					}
					for (o = 0;
						(s = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : f.bindType || p, c = (St.get(s, "events") || {})[e.type] && St.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Tt(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
					return e.type = p, r || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !Tt(i) || u && ot.isFunction(i[p]) && !ot.isWindow(i) && (a = i[u], a && (i[u] = null), ot.event.triggered = p, i[p](), ot.event.triggered = void 0, a && (i[u] = a)), e.result
				}
			},
			simulate: function (t, e, n) {
				var i = ot.extend(new ot.Event, n, {
					type: t,
					isSimulated: !0
				});
				ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
			}
		}), ot.fn.extend({
			trigger: function (t, e) {
				return this.each(function () {
					ot.event.trigger(t, e, this)
				})
			},
			triggerHandler: function (t, e) {
				var n = this[0];
				return n ? ot.event.trigger(t, e, n, !0) : void 0
			}
		}), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
			ot.fn[e] = function (t, n) {
				return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
			}
		}), ot.fn.extend({
			hover: function (t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			}
		}), it.focusin = "onfocusin" in t, it.focusin || ot.each({
			focus: "focusin",
			blur: "focusout"
		}, function (t, e) {
			var n = function (t) {
				ot.event.simulate(e, t.target, ot.event.fix(t))
			};
			ot.event.special[e] = {
				setup: function () {
					var i = this.ownerDocument || this,
						r = St.access(i, e);
					r || i.addEventListener(t, n, !0), St.access(i, e, (r || 0) + 1)
				},
				teardown: function () {
					var i = this.ownerDocument || this,
						r = St.access(i, e) - 1;
					r ? St.access(i, e, r) : (i.removeEventListener(t, n, !0), St.remove(i, e))
				}
			}
		});
		var me = t.location,
			ve = ot.now(),
			ye = /\?/;
		ot.parseJSON = function (t) {
			return JSON.parse(t + "")
		}, ot.parseXML = function (e) {
			var n;
			if (!e || "string" != typeof e) return null;
			try {
				n = (new t.DOMParser).parseFromString(e, "text/xml")
			} catch (i) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
		};
		var be = /#.*$/,
			we = /([?&])_=[^&]*/,
			xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			_e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			$e = /^(?:GET|HEAD)$/,
			Te = /^\/\//,
			Se = {},
			Ce = {},
			ke = "*/".concat("*"),
			Ee = G.createElement("a");
		Ee.href = me.href, ot.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: me.href,
				type: "GET",
				isLocal: _e.test(me.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": ke,
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
			ajaxSetup: function (t, e) {
				return e ? H(H(t, ot.ajaxSettings), e) : H(ot.ajaxSettings, t)
			},
			ajaxPrefilter: q(Se),
			ajaxTransport: q(Ce),
			ajax: function (e, n) {
				function i(e, n, i, a) {
					var u, f, y, b, x, $ = n;
					2 !== w && (w = 2, l && t.clearTimeout(l), r = void 0, s = a || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && (b = V(h, _, i)), b = W(h, b, _, u), u ? (h.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), x = _.getResponseHeader("etag"), x && (ot.etag[o] = x)), 204 === e || "HEAD" === h.type ? $ = "nocontent" : 304 === e ? $ = "notmodified" : ($ = b.state, f = b.data, y = b.error, u = !y)) : (y = $, !e && $ || ($ = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || $) + "", u ? g.resolveWith(p, [f, $, _]) : g.rejectWith(p, [_, $, y]), _.statusCode(v), v = void 0, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [_, h, u ? f : y]), m.fireWith(p, [_, $]), c && (d.trigger("ajaxComplete", [_, h]), --ot.active || ot.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (n = e, e = void 0), n = n || {};
				var r, o, s, a, l, u, c, f, h = ot.ajaxSetup({}, n),
					p = h.context || h,
					d = h.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
					g = ot.Deferred(),
					m = ot.Callbacks("once memory"),
					v = h.statusCode || {},
					y = {},
					b = {},
					w = 0,
					x = "canceled",
					_ = {
						readyState: 0,
						getResponseHeader: function (t) {
							var e;
							if (2 === w) {
								if (!a)
									for (a = {}; e = xe.exec(s);) a[e[1].toLowerCase()] = e[2];
								e = a[t.toLowerCase()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders: function () {
							return 2 === w ? s : null
						},
						setRequestHeader: function (t, e) {
							var n = t.toLowerCase();
							return w || (t = b[n] = b[n] || t, y[t] = e), this
						},
						overrideMimeType: function (t) {
							return w || (h.mimeType = t), this
						},
						statusCode: function (t) {
							var e;
							if (t)
								if (2 > w)
									for (e in t) v[e] = [v[e], t[e]];
								else _.always(t[_.status]);
							return this
						},
						abort: function (t) {
							var e = t || x;
							return r && r.abort(e), i(0, e), this
						}
					};
				if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, h.url = ((e || h.url || me.href) + "").replace(be, "").replace(Te, me.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ot.trim(h.dataType || "*").toLowerCase().match(xt) || [""], null == h.crossDomain) {
					u = G.createElement("a");
					try {
						u.href = h.url, u.href = u.href, h.crossDomain = Ee.protocol + "//" + Ee.host != u.protocol + "//" + u.host
					} catch ($) {
						h.crossDomain = !0
					}
				}
				if (h.data && h.processData && "string" != typeof h.data && (h.data = ot.param(h.data, h.traditional)), B(Se, h, n, _), 2 === w) return _;
				c = ot.event && h.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$e.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ye.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = we.test(o) ? o.replace(we, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), h.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : h.accepts["*"]);
				for (f in h.headers) _.setRequestHeader(f, h.headers[f]);
				if (h.beforeSend && (h.beforeSend.call(p, _, h) === !1 || 2 === w)) return _.abort();
				x = "abort";
				for (f in {
						success: 1,
						error: 1,
						complete: 1
					}) _[f](h[f]);
				if (r = B(Ce, h, n, _)) {
					if (_.readyState = 1, c && d.trigger("ajaxSend", [_, h]), 2 === w) return _;
					h.async && h.timeout > 0 && (l = t.setTimeout(function () {
						_.abort("timeout")
					}, h.timeout));
					try {
						w = 1, r.send(y, i)
					} catch ($) {
						if (!(2 > w)) throw $;
						i(-1, $)
					}
				} else i(-1, "No Transport");
				return _
			},
			getJSON: function (t, e, n) {
				return ot.get(t, e, n, "json")
			},
			getScript: function (t, e) {
				return ot.get(t, void 0, e, "script")
			}
		}), ot.each(["get", "post"], function (t, e) {
			ot[e] = function (t, n, i, r) {
				return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
					url: t,
					type: e,
					dataType: r,
					data: n,
					success: i
				}, ot.isPlainObject(t) && t))
			}
		}), ot._evalUrl = function (t) {
			return ot.ajax({
				url: t,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, ot.fn.extend({
			wrapAll: function (t) {
				var e;
				return ot.isFunction(t) ? this.each(function (e) {
					ot(this).wrapAll(t.call(this, e))
				}) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
					for (var t = this; t.firstElementChild;) t = t.firstElementChild;
					return t
				}).append(this)), this)
			},
			wrapInner: function (t) {
				return ot.isFunction(t) ? this.each(function (e) {
					ot(this).wrapInner(t.call(this, e))
				}) : this.each(function () {
					var e = ot(this),
						n = e.contents();
					n.length ? n.wrapAll(t) : e.append(t)
				})
			},
			wrap: function (t) {
				var e = ot.isFunction(t);
				return this.each(function (n) {
					ot(this).wrapAll(e ? t.call(this, n) : t)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
				}).end()
			}
		}), ot.expr.filters.hidden = function (t) {
			return !ot.expr.filters.visible(t)
		}, ot.expr.filters.visible = function (t) {
			return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
		};
		var Ae = /%20/g,
			Oe = /\[\]$/,
			Pe = /\r?\n/g,
			Me = /^(?:submit|button|image|reset|file)$/i,
			Ne = /^(?:input|select|textarea|keygen)/i;
		ot.param = function (t, e) {
			var n, i = [],
				r = function (t, e) {
					e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
			if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
				r(this.name, this.value)
			});
			else
				for (n in t) U(n, t[n], e, r);
			return i.join("&").replace(Ae, "+")
		}, ot.fn.extend({
			serialize: function () {
				return ot.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var t = ot.prop(this, "elements");
					return t ? ot.makeArray(t) : this
				}).filter(function () {
					var t = this.type;
					return this.name && !ot(this).is(":disabled") && Ne.test(this.nodeName) && !Me.test(t) && (this.checked || !Nt.test(t))
				}).map(function (t, e) {
					var n = ot(this).val();
					return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
						return {
							name: e.name,
							value: t.replace(Pe, "\r\n")
						}
					}) : {
						name: e.name,
						value: n.replace(Pe, "\r\n")
					}
				}).get()
			}
		}), ot.ajaxSettings.xhr = function () {
			try {
				return new t.XMLHttpRequest
			} catch (e) {}
		};
		var De = {
				0: 200,
				1223: 204
			},
			Re = ot.ajaxSettings.xhr();
		it.cors = !!Re && "withCredentials" in Re, it.ajax = Re = !!Re, ot.ajaxTransport(function (e) {
			var n, i;
			return it.cors || Re && !e.crossDomain ? {
				send: function (r, o) {
					var s, a = e.xhr();
					if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (s in e.xhrFields) a[s] = e.xhrFields[s];
					e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					for (s in r) a.setRequestHeader(s, r[s]);
					n = function (t) {
						return function () {
							n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(De[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
								binary: a.response
							} : {
								text: a.responseText
							}, a.getAllResponseHeaders()))
						}
					}, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
						4 === a.readyState && t.setTimeout(function () {
							n && i()
						})
					}, n = n("abort");
					try {
						a.send(e.hasContent && e.data || null)
					} catch (l) {
						if (n) throw l
					}
				},
				abort: function () {
					n && n()
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
				"text script": function (t) {
					return ot.globalEval(t), t
				}
			}
		}), ot.ajaxPrefilter("script", function (t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
		}), ot.ajaxTransport("script", function (t) {
			if (t.crossDomain) {
				var e, n;
				return {
					send: function (i, r) {
						e = ot("<script>").prop({
							charset: t.scriptCharset,
							src: t.url
						}).on("load error", n = function (t) {
							e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
						}), G.head.appendChild(e[0])
					},
					abort: function () {
						n && n()
					}
				}
			}
		});
		var Le = [],
			Ie = /(=)\?(?=&|$)|\?\?/;
		ot.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var t = Le.pop() || ot.expando + "_" + ve++;
				return this[t] = !0, t
			}
		}), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
			var r, o, s, a = e.jsonp !== !1 && (Ie.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
			return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ie, "$1" + r) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
				return s || ot.error(r + " was not called"), s[0]
			}, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
				s = arguments
			}, i.always(function () {
				void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Le.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
			}), "script") : void 0
		}), ot.parseHTML = function (t, e, n) {
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && (n = e, e = !1), e = e || G;
			var i = dt.exec(t),
				r = !n && [];
			return i ? [e.createElement(i[1])] : (i = h([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
		};
		var je = ot.fn.load;
		ot.fn.load = function (t, e, n) {
			if ("string" != typeof t && je) return je.apply(this, arguments);
			var i, r, o, s = this,
				a = t.indexOf(" ");
			return a > -1 && (i = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
				url: t,
				type: r || "GET",
				dataType: "html",
				data: e
			}).done(function (t) {
				o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
			}).always(n && function (t, e) {
				s.each(function () {
					n.apply(s, o || [t.responseText, e, t])
				})
			}), this
		}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
			ot.fn[e] = function (t) {
				return this.on(e, t)
			}
		}), ot.expr.filters.animated = function (t) {
			return ot.grep(ot.timers, function (e) {
				return t === e.elem
			}).length
		}, ot.offset = {
			setOffset: function (t, e, n) {
				var i, r, o, s, a, l, u, c = ot.css(t, "position"),
					f = ot(t),
					h = {};
				"static" === c && (t.style.position = "relative"), a = f.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = f.position(),
					s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : f.css(h)
			}
		}, ot.fn.extend({
			offset: function (t) {
				if (arguments.length) return void 0 === t ? this : this.each(function (e) {
					ot.offset.setOffset(this, t, e)
				});
				var e, n, i = this[0],
					r = {
						top: 0,
						left: 0
					},
					o = i && i.ownerDocument;
				return o ? (e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = X(o), {
					top: r.top + n.pageYOffset - e.clientTop,
					left: r.left + n.pageXOffset - e.clientLeft
				}) : r) : void 0
			},
			position: function () {
				if (this[0]) {
					var t, e, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), i.left += ot.css(t[0], "borderLeftWidth", !0)), {
						top: e.top - i.top - ot.css(n, "marginTop", !0),
						left: e.left - i.left - ot.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
					return t || Zt
				})
			}
		}), ot.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (t, e) {
			var n = "pageYOffset" === e;
			ot.fn[t] = function (i) {
				return $t(this, function (t, i, r) {
					var o = X(t);
					return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
				}, t, i, arguments.length)
			}
		}), ot.each(["top", "left"], function (t, e) {
			ot.cssHooks[e] = k(it.pixelPosition, function (t, n) {
				return n ? (n = C(t, e), Gt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
			})
		}), ot.each({
			Height: "height",
			Width: "width"
		}, function (t, e) {
			ot.each({
				padding: "inner" + t,
				content: e,
				"": "outer" + t
			}, function (n, i) {
				ot.fn[i] = function (i, r) {
					var o = arguments.length && (n || "boolean" != typeof i),
						s = n || (i === !0 || r === !0 ? "margin" : "border");
					return $t(this, function (e, n, i) {
						var r;
						return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
					}, e, o ? i : void 0, o, null)
				}
			})
		}), ot.fn.extend({
			bind: function (t, e, n) {
				return this.on(t, null, e, n)
			},
			unbind: function (t, e) {
				return this.off(t, null, e)
			},
			delegate: function (t, e, n, i) {
				return this.on(e, t, n, i)
			},
			undelegate: function (t, e, n) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
			},
			size: function () {
				return this.length
			}
		}), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
			return ot
		});
		var Fe = t.jQuery,
			ze = t.$;
		return ot.noConflict = function (e) {
			return t.$ === ot && (t.$ = ze), e && t.jQuery === ot && (t.jQuery = Fe), ot
		}, e || (t.jQuery = t.$ = ot), ot
	}),
	function (t, e, n, i) {
		function r(e, n) {
			this.element = e, this.options = t.extend({}, s, n), this._defaults = s, this._name = o, this.init()
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
				hideElement: function (t) {
					t.hide()
				},
				showElement: function (t) {
					t.show()
				}
			},
			a = {
				scroll: {
					getLeft: function (t) {
						return t.scrollLeft()
					},
					setLeft: function (t, e) {
						t.scrollLeft(e)
					},
					getTop: function (t) {
						return t.scrollTop()
					},
					setTop: function (t, e) {
						t.scrollTop(e)
					}
				},
				position: {
					getLeft: function (t) {
						return parseInt(t.css("left"), 10) * -1
					},
					getTop: function (t) {
						return parseInt(t.css("top"), 10) * -1
					}
				},
				margin: {
					getLeft: function (t) {
						return parseInt(t.css("margin-left"), 10) * -1
					},
					getTop: function (t) {
						return parseInt(t.css("margin-top"), 10) * -1
					}
				},
				transform: {
					getLeft: function (t) {
						var e = getComputedStyle(t[0])[c];
						return "none" !== e ? parseInt(e.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
					},
					getTop: function (t) {
						var e = getComputedStyle(t[0])[c];
						return "none" !== e ? parseInt(e.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
					}
				}
			},
			l = {
				position: {
					setLeft: function (t, e) {
						t.css("left", e)
					},
					setTop: function (t, e) {
						t.css("top", e)
					}
				},
				transform: {
					setPosition: function (t, e, n, i, r) {
						t[0].style[c] = "translate3d(" + (e - n) + "px, " + (i - r) + "px, 0)"
					}
				}
			},
			u = function () {
				var e, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
					i = t("script")[0].style,
					r = "";
				for (e in i)
					if (n.test(e)) {
						r = e.match(n)[0];
						break
					}
				return "WebkitOpacity" in i && (r = "Webkit"), "KhtmlOpacity" in i && (r = "Khtml"),
					function (t) {
						return r + (r.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
					}
			}(),
			c = u("transform"),
			f = t("<div />", {
				style: "background:#fff"
			}).css("background-position-x") !== i,
			h = f ? function (t, e, n) {
				t.css({
					"background-position-x": e,
					"background-position-y": n
				})
			} : function (t, e, n) {
				t.css("background-position", e + " " + n)
			},
			p = f ? function (t) {
				return [t.css("background-position-x"), t.css("background-position-y")]
			} : function (t) {
				return t.css("background-position").split(" ")
			},
			d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
				setTimeout(t, 1e3 / 60)
			};
		r.prototype = {
			init: function () {
				this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
					firstLoad: !0
				}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
			},
			_defineElements: function () {
				this.element === n.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== i ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
			},
			_defineGetters: function () {
				var t = this,
					e = a[t.options.scrollProperty];
				this._getScrollLeft = function () {
					return e.getLeft(t.$scrollElement)
				}, this._getScrollTop = function () {
					return e.getTop(t.$scrollElement)
				}
			},
			_defineSetters: function () {
				var e = this,
					n = a[e.options.scrollProperty],
					i = l[e.options.positionProperty],
					r = n.setLeft,
					o = n.setTop;
				this._setScrollLeft = "function" == typeof r ? function (t) {
					r(e.$scrollElement, t)
				} : t.noop, this._setScrollTop = "function" == typeof o ? function (t) {
					o(e.$scrollElement, t)
				} : t.noop, this._setPosition = i.setPosition || function (t, n, r, o, s) {
					e.options.horizontalScrolling && i.setLeft(t, n, r), e.options.verticalScrolling && i.setTop(t, o, s)
				}
			},
			_handleWindowLoadAndResize: function () {
				var n = this,
					i = t(e);
				n.options.responsive && i.bind("load." + this.name, function () {
					n.refresh()
				}), i.bind("resize." + this.name, function () {
					n._detectViewport(), n.options.responsive && n.refresh()
				})
			},
			refresh: function (n) {
				var i = this,
					r = i._getScrollLeft(),
					o = i._getScrollTop();
				(!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function () {
					var t = i._getScrollLeft(),
						e = i._getScrollTop();
					i._setScrollLeft(t + 1), i._setScrollTop(e + 1), i._setScrollLeft(t), i._setScrollTop(e)
				}), this._setScrollLeft(r), this._setScrollTop(o)
			},
			_detectViewport: function () {
				var t = this.$viewportElement.offset(),
					e = null !== t && t !== i;
				this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
			},
			_findParticles: function () {
				var e = this;
				this._getScrollLeft(), this._getScrollTop();
				if (this.particles !== i)
					for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", i);
				this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function (n) {
					var r, o, s, a, l, u, c, f, h, p = t(this),
						d = 0,
						g = 0,
						m = 0,
						v = 0;
					if (p.data("stellar-elementIsActive")) {
						if (p.data("stellar-elementIsActive") !== this) return
					} else p.data("stellar-elementIsActive", this);
					e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), s = p.position().left, a = p.position().top, l = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), u = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), f = p.offset().left - l, h = p.offset().top - u, p.parents().each(function () {
						var e = t(this);
						return e.data("stellar-offset-parent") === !0 ? (d = m, g = v, c = e, !1) : (m += e.position().left, void(v += e.position().top))
					}), r = p.data("stellar-horizontal-offset") !== i ? p.data("stellar-horizontal-offset") : c !== i && c.data("stellar-horizontal-offset") !== i ? c.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== i ? p.data("stellar-vertical-offset") : c !== i && c.data("stellar-vertical-offset") !== i ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
						$element: p,
						$offsetParent: c,
						isFixed: "fixed" === p.css("position"),
						horizontalOffset: r,
						verticalOffset: o,
						startingPositionLeft: s,
						startingPositionTop: a,
						startingOffsetLeft: f,
						startingOffsetTop: h,
						parentOffsetLeft: d,
						parentOffsetTop: g,
						stellarRatio: p.data("stellar-ratio") !== i ? p.data("stellar-ratio") : 1,
						width: p.outerWidth(!0),
						height: p.outerHeight(!0),
						isHidden: !1
					})
				})
			},
			_findBackgrounds: function () {
				var e, n = this,
					r = this._getScrollLeft(),
					o = this._getScrollTop();
				this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function () {
					var e, s, a, l, u, c, f, d = t(this),
						g = p(d),
						m = 0,
						v = 0,
						y = 0,
						b = 0;
					if (d.data("stellar-backgroundIsActive")) {
						if (d.data("stellar-backgroundIsActive") !== this) return
					} else d.data("stellar-backgroundIsActive", this);
					d.data("stellar-backgroundStartingLeft") ? h(d, d.data("stellar-backgroundStartingLeft"), d.data("stellar-backgroundStartingTop")) : (d.data("stellar-backgroundStartingLeft", g[0]), d.data("stellar-backgroundStartingTop", g[1])), a = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), u = d.offset().left - a - r, c = d.offset().top - l - o, d.parents().each(function () {
						var e = t(this);
						return e.data("stellar-offset-parent") === !0 ? (m = y, v = b, f = e, !1) : (y += e.position().left, void(b += e.position().top))
					}), e = d.data("stellar-horizontal-offset") !== i ? d.data("stellar-horizontal-offset") : f !== i && f.data("stellar-horizontal-offset") !== i ? f.data("stellar-horizontal-offset") : n.horizontalOffset, s = d.data("stellar-vertical-offset") !== i ? d.data("stellar-vertical-offset") : f !== i && f.data("stellar-vertical-offset") !== i ? f.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
						$element: d,
						$offsetParent: f,
						isFixed: "fixed" === d.css("background-attachment"),
						horizontalOffset: e,
						verticalOffset: s,
						startingValueLeft: g[0],
						startingValueTop: g[1],
						startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
						startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
						startingPositionLeft: d.position().left,
						startingPositionTop: d.position().top,
						startingOffsetLeft: u,
						startingOffsetTop: c,
						parentOffsetLeft: m,
						parentOffsetTop: v,
						stellarRatio: d.data("stellar-background-ratio") === i ? 1 : d.data("stellar-background-ratio")
					})
				}))
			},
			_reset: function () {
				var t, e, n, i, r;
				for (r = this.particles.length - 1; r >= 0; r--) t = this.particles[r], e = t.$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
				for (r = this.backgrounds.length - 1; r >= 0; r--) i = this.backgrounds[r], i.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(i.$element, i.startingValueLeft, i.startingValueTop)
			},
			destroy: function () {
				this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
			},
			_setOffsets: function () {
				var n = this,
					i = t(e);
				i.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), i.bind("resize.horizontal-" + this.name, function () {
					n.horizontalOffset = n.options.horizontalOffset()
				})) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), i.bind("resize.vertical-" + this.name, function () {
					n.verticalOffset = n.options.verticalOffset()
				})) : this.verticalOffset = this.options.verticalOffset
			},
			_repositionElements: function () {
				var t, e, n, i, r, o, s, a, l, u, c = this._getScrollLeft(),
					f = this._getScrollTop(),
					p = !0,
					d = !0;
				if (this.currentScrollLeft !== c || this.currentScrollTop !== f || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
					for (this.currentScrollLeft = c, this.currentScrollTop = f, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; u >= 0; u--) t = this.particles[u], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = o - t.startingPositionLeft + t.startingOffsetLeft) : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (s = (f + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = s - t.startingPositionTop + t.startingOffsetTop) : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (d = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : f) && l < (t.isFixed ? 0 : f) + this.viewportHeight + this.viewportOffsetTop), d && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
					for (u = this.backgrounds.length - 1; u >= 0; u--) n = this.backgrounds[u], e = n.isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (c + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (e - n.stellarRatio) + "px" : n.startingValueLeft, r = this.options.verticalScrolling ? (f + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (e - n.stellarRatio) + "px" : n.startingValueTop, h(n.$element, i, r)
				}
			},
			_handleScrollEvent: function () {
				var t = this,
					e = !1,
					n = function () {
						t._repositionElements(), e = !1
					},
					i = function () {
						e || (d(n), e = !0)
					};
				this.$scrollElement.bind("scroll." + this.name, i), i()
			},
			_startAnimationLoop: function () {
				var t = this;
				this._animationLoop = function () {
					d(t._animationLoop), t._repositionElements()
				}, this._animationLoop()
			}
		}, t.fn[o] = function (e) {
			var n = arguments;
			return e === i || "object" == typeof e ? this.each(function () {
				t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e))
			}) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
				var i = t.data(this, "plugin_" + o);
				i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
			}) : void 0
		}, t[o] = function (n) {
			var i = t(e);
			return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
		}, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = r
	}(jQuery, this, document), ! function (t) {
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
			onSliderLoad: function () {
				return !0
			},
			onSlideBefore: function () {
				return !0
			},
			onSlideAfter: function () {
				return !0
			},
			onSlideNext: function () {
				return !0
			},
			onSlidePrev: function () {
				return !0
			},
			onSliderResize: function () {
				return !0
			}
		};
		t.fn.bxSlider = function (n) {
			if (0 === this.length) return this;
			if (this.length > 1) return this.each(function () {
				t(this).bxSlider(n)
			}), this;
			var r = {},
				o = this,
				s = t(window).width(),
				a = t(window).height();
			if (!t(o).data("bxSlider")) {
				var l = function () {
						t(o).data("bxSlider") || (r.settings = t.extend({}, e, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {
							index: r.settings.startSlide
						}, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode && function () {
							for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < e.length; n++)
								if (void 0 !== t.style[e[n]]) return r.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
							return !1
						}(), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function () {
							t(this).data("origStyle", t(this).attr("style"))
						}), u())
					},
					u = function () {
						var e = r.children.eq(r.settings.startSlide);
						o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="srbt-viewport"></div></div>'), r.viewport = o.parent(), r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"), r.loader = t('<div class="srbt-loading" />'), r.viewport.prepend(r.loader), o.css({
							width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto",
							position: "relative"
						}), r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"), r.viewport.css({
							width: "100%",
							overflow: "hidden",
							position: "relative"
						}), r.viewport.parent().css({
							maxWidth: p()
						}), r.settings.pager || r.settings.controls || r.viewport.parent().css({
							margin: "0 auto 0px"
						}), r.children.css({
							"float": "horizontal" === r.settings.mode ? "left" : "none",
							listStyle: "none",
							position: "relative"
						}), r.children.css("width", d()), "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" === r.settings.mode && (r.children.css({
							position: "absolute",
							zIndex: 0,
							display: "none"
						}), r.children.eq(r.settings.startSlide).css({
							zIndex: r.settings.slideZIndex,
							display: "block"
						})), r.controls.el = t('<div class="srbt-controls" />'), r.settings.captions && T(), r.active.last = r.settings.startSlide === m() - 1, r.settings.video && o.fitVids(), ("all" === r.settings.preloadImages || r.settings.ticker) && (e = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && _(), r.settings.auto && r.settings.autoControls && $(), r.settings.pager && x(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), c(e, f)
					},
					c = function (e, n) {
						var i = e.find('img:not([src=""]), iframe').length,
							r = 0;
						return 0 === i ? void n() : void e.find('img:not([src=""]), iframe').each(function () {
							t(this).one("load error", function () {
								++r === i && n()
							}).each(function () {
								this.complete && t(this).load()
							})
						})
					},
					f = function () {
						if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
							var e = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
								n = r.children.slice(0, e).clone(!0).addClass("srbt-clone"),
								i = r.children.slice(-e).clone(!0).addClass("srbt-clone");
							r.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)), o.append(n).prepend(i)
						}
						r.loader.remove(), y(), "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(h()), o.redrawSlider(), r.settings.onSliderLoad.call(o, r.active.index), r.initialized = !0, r.settings.responsive && t(window).bind("resize", V), r.settings.auto && r.settings.autoStart && (m() > 1 || r.settings.autoSlideForOnePage) && D(), r.settings.ticker && R(), r.settings.pager && O(r.settings.startSlide), r.settings.controls && N(), r.settings.touchEnabled && !r.settings.ticker && F(), r.settings.keyboardEnabled && !r.settings.ticker && t(document).keydown(j)
					},
					h = function () {
						var e = 0,
							n = t();
						if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)
							if (r.carousel) {
								var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * v();
								for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
							} else n = r.children.eq(r.active.index);
						else n = r.children;
						return "vertical" === r.settings.mode ? (n.each(function (n) {
							e += t(this).outerHeight()
						}), r.settings.slideMargin > 0 && (e += r.settings.slideMargin * (r.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
							return t(this).outerHeight(!1)
						}).get()), "border-box" === r.viewport.css("box-sizing") ? e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), e
					},
					p = function () {
						var t = "100%";
						return r.settings.slideWidth > 0 && (t = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), t
					},
					d = function () {
						var t = r.settings.slideWidth,
							e = r.viewport.width();
						if (0 === r.settings.slideWidth || r.settings.slideWidth > e && !r.carousel || "vertical" === r.settings.mode) t = e;
						else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
							if (e > r.maxThreshold) return t;
							e < r.minThreshold ? t = (e - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides : r.settings.shrinkItems && (t = Math.floor((e + r.settings.slideMargin) / Math.ceil((e + r.settings.slideMargin) / (t + r.settings.slideMargin)) - r.settings.slideMargin))
						}
						return t
					},
					g = function () {
						var t = 1,
							e = null;
						return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? t = r.settings.minSlides : r.viewport.width() > r.maxThreshold ? t = r.settings.maxSlides : (e = r.children.first().width() + r.settings.slideMargin, t = Math.floor((r.viewport.width() + r.settings.slideMargin) / e)) : "vertical" === r.settings.mode && (t = r.settings.minSlides), t
					},
					m = function () {
						var t = 0,
							e = 0,
							n = 0;
						if (r.settings.moveSlides > 0)
							if (r.settings.infiniteLoop) t = Math.ceil(r.children.length / v());
							else
								for (; e < r.children.length;) ++t, e = n + g(), n += r.settings.moveSlides <= g() ? r.settings.moveSlides : g();
						else t = Math.ceil(r.children.length / g());
						return t
					},
					v = function () {
						return r.settings.moveSlides > 0 && r.settings.moveSlides <= g() ? r.settings.moveSlides : g()
					},
					y = function () {
						var t, e, n;
						r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (e = r.children.last(), t = e.position(), b(-(t.left - (r.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (n = r.children.length - r.settings.minSlides, t = r.children.eq(n).position(), b(-t.top, "reset", 0)) : (t = r.children.eq(r.active.index * v()).position(), r.active.index === m() - 1 && (r.active.last = !0), void 0 !== t && ("horizontal" === r.settings.mode ? b(-t.left, "reset", 0) : "vertical" === r.settings.mode && b(-t.top, "reset", 0)))
					},
					b = function (e, n, i, s) {
						var a, l;
						r.usingCSS ? (l = "vertical" === r.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
							t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), P())
						}) : P()) : "reset" === n ? o.css(r.animProp, l) : "ticker" === n && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
							t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), L())
						}) : (b(s.resetValue, "reset", 0), L()))) : (a = {}, a[r.animProp] = e, "slide" === n ? o.animate(a, i, r.settings.easing, function () {
							P()
						}) : "reset" === n ? o.css(r.animProp, e) : "ticker" === n && o.animate(a, i, "linear", function () {
							b(s.resetValue, "reset", 0), L()
						}))
					},
					w = function () {
						for (var e = "", n = "", i = m(), o = 0; i > o; o++) n = "", r.settings.buildPager && t.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (n = r.settings.buildPager(o), r.pagerEl.addClass("srbt-custom-pager")) : (n = o + 1, r.pagerEl.addClass("srbt-default-pager")), e += '<div class="srbt-pager-item"><a href="" data-slide-index="' + o + '" class="srbt-pager-link">' + n + "</a></div>";
						r.pagerEl.html(e)
					},
					x = function () {
						r.settings.pagerCustom ? r.pagerEl = t(r.settings.pagerCustom) : (r.pagerEl = t('<div class="srbt-pager" />'), r.settings.pagerSelector ? t(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("srbt-has-pager").append(r.pagerEl), w()), r.pagerEl.on("click touchend", "a", A)
					},
					_ = function () {
						r.controls.next = t('<a class="srbt-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = t('<a class="srbt-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click touchend", S), r.controls.prev.bind("click touchend", C), r.settings.nextSelector && t(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && t(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = t('<div class="srbt-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("srbt-has-controls-direction").append(r.controls.directionEl))
					},
					$ = function () {
						r.controls.start = t('<div class="srbt-controls-auto-item"><a class="srbt-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = t('<div class="srbt-controls-auto-item"><a class="srbt-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = t('<div class="srbt-controls-auto" />'), r.controls.autoEl.on("click", ".srbt-start", k), r.controls.autoEl.on("click", ".srbt-stop", E), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? t(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("srbt-has-controls-auto").append(r.controls.autoEl), M(r.settings.autoStart ? "stop" : "start")
					},
					T = function () {
						r.children.each(function (e) {
							var n = t(this).find("img:first").attr("title");
							void 0 !== n && ("" + n).length && t(this).append('<div class="srbt-caption"><span>' + n + "</span></div>")
						})
					},
					S = function (t) {
						t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
					},
					C = function (t) {
						t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
					},
					k = function (t) {
						o.startAuto(), t.preventDefault()
					},
					E = function (t) {
						o.stopAuto(), t.preventDefault()
					},
					A = function (e) {
						var n, i;
						e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), n = t(e.currentTarget), void 0 !== n.attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index")), i !== r.active.index && o.goToSlide(i)))
					},
					O = function (e) {
						var n = r.children.length;
						return "short" === r.settings.pagerType ? (r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(e + 1 + r.settings.pagerShortSeparator + n)) : (r.pagerEl.find("a").removeClass("active"), void r.pagerEl.each(function (n, i) {
							t(i).find("a").eq(e).addClass("active")
						}))
					},
					P = function () {
						if (r.settings.infiniteLoop) {
							var t = "";
							0 === r.active.index ? t = r.children.eq(0).position() : r.active.index === m() - 1 && r.carousel ? t = r.children.eq((m() - 1) * v()).position() : r.active.index === r.children.length - 1 && (t = r.children.eq(r.children.length - 1).position()), t && ("horizontal" === r.settings.mode ? b(-t.left, "reset", 0) : "vertical" === r.settings.mode && b(-t.top, "reset", 0))
						}
						r.working = !1, r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)
					},
					M = function (t) {
						r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[t]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.srbt-" + t + ")").addClass("active"))
					},
					N = function () {
						1 === m() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === m() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
					},
					D = function () {
						r.settings.autoDelay > 0 ? setTimeout(o.startAuto, r.settings.autoDelay) : (o.startAuto(), t(window).focus(function () {
							o.startAuto()
						}).blur(function () {
							o.stopAuto()
						})), r.settings.autoHover && o.hover(function () {
							r.interval && (o.stopAuto(!0), r.autoPaused = !0)
						}, function () {
							r.autoPaused && (o.startAuto(!0), r.autoPaused = null)
						})
					},
					R = function () {
						var e, n, i, s, a, l, u, c, f = 0;
						"next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("srbt-clone")) : (o.prepend(r.children.clone().addClass("srbt-clone")), e = r.children.first().position(), f = "horizontal" === r.settings.mode ? -e.left : -e.top), b(f, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && (r.usingCSS ? (s = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function () {
							n = o.css("-" + r.cssPrefix + "-transform"), i = parseFloat(n.split(",")[s]), b(i, "reset", 0)
						}, function () {
							c = 0, r.children.each(function (e) {
								c += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
							}), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(i))), L(u)
						})) : r.viewport.hover(function () {
							o.stop()
						}, function () {
							c = 0, r.children.each(function (e) {
								c += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
							}), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(o.css(l)))), L(u)
						})), L()
					},
					L = function (t) {
						var e, n, i, s = t ? t : r.settings.speed,
							a = {
								left: 0,
								top: 0
							},
							l = {
								left: 0,
								top: 0
							};
						"next" === r.settings.autoDirection ? a = o.find(".srbt-clone").first().position() : l = r.children.first().position(), e = "horizontal" === r.settings.mode ? -a.left : -a.top, n = "horizontal" === r.settings.mode ? -l.left : -l.top, i = {
							resetValue: n
						}, b(e, "ticker", s, i)
					},
					I = function (e) {
						var n = t(window),
							i = {
								top: n.scrollTop(),
								left: n.scrollLeft()
							},
							r = e.offset();
						return i.right = i.left + n.width(), i.bottom = i.top + n.height(), r.right = r.left + e.outerWidth(), r.bottom = r.top + e.outerHeight(), !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom)
					},
					j = function (t) {
						var e = document.activeElement.tagName.toLowerCase(),
							n = "input|textarea",
							i = new RegExp(e, ["i"]),
							r = i.exec(n);
						if (null == r && I(o)) {
							if (39 === t.keyCode) return S(t), !1;
							if (37 === t.keyCode) return C(t), !1
						}
					},
					F = function () {
						r.touch = {
							start: {
								x: 0,
								y: 0
							},
							end: {
								x: 0,
								y: 0
							}
						}, r.viewport.bind("touchstart MSPointerDown pointerdown", z), r.viewport.on("click", ".bxslider a", function (t) {
							r.viewport.hasClass("click-disabled") && (t.preventDefault(), r.viewport.removeClass("click-disabled"))
						})
					},
					z = function (t) {
						if (r.controls.el.addClass("disabled"), r.working) t.preventDefault(), r.controls.el.removeClass("disabled");
						else {
							r.touch.originalPos = o.position();
							var e = t.originalEvent,
								n = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
							r.touch.start.x = n[0].pageX, r.touch.start.y = n[0].pageY, r.viewport.get(0).setPointerCapture && (r.pointerId = e.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)), r.viewport.bind("touchmove MSPointerMove pointermove", B),
								r.viewport.bind("touchend MSPointerUp pointerup", H), r.viewport.bind("MSPointerCancel pointercancel", q)
						}
					},
					q = function (t) {
						b(r.touch.originalPos.left, "reset", 0), r.controls.el.removeClass("disabled"), r.viewport.unbind("MSPointerCancel pointercancel", q), r.viewport.unbind("touchmove MSPointerMove pointermove", B), r.viewport.unbind("touchend MSPointerUp pointerup", H), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
					},
					B = function (t) {
						var e = t.originalEvent,
							n = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
							i = Math.abs(n[0].pageX - r.touch.start.x),
							o = Math.abs(n[0].pageY - r.touch.start.y),
							s = 0,
							a = 0;
						3 * i > o && r.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > i && r.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (a = n[0].pageX - r.touch.start.x, s = r.touch.originalPos.left + a) : (a = n[0].pageY - r.touch.start.y, s = r.touch.originalPos.top + a), b(s, "reset", 0))
					},
					H = function (t) {
						r.viewport.unbind("touchmove MSPointerMove pointermove", B), r.controls.el.removeClass("disabled");
						var e = t.originalEvent,
							n = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
							i = 0,
							s = 0;
						r.touch.end.x = n[0].pageX, r.touch.end.y = n[0].pageY, "fade" === r.settings.mode ? (s = Math.abs(r.touch.start.x - r.touch.end.x), s >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === r.settings.mode ? (s = r.touch.end.x - r.touch.start.x, i = r.touch.originalPos.left) : (s = r.touch.end.y - r.touch.start.y, i = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && s > 0 || r.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= r.settings.swipeThreshold ? (0 > s ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : b(i, "reset", 200)), r.viewport.unbind("touchend MSPointerUp pointerup", H), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
					},
					V = function (e) {
						if (r.initialized)
							if (r.working) window.setTimeout(V, 10);
							else {
								var n = t(window).width(),
									i = t(window).height();
								(s !== n || a !== i) && (s = n, a = i, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index))
							}
					},
					W = function (t) {
						var e = g();
						r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(t, t + e).attr("aria-hidden", "false"))
					},
					U = function (t) {
						return 0 > t ? r.settings.infiniteLoop ? m() - 1 : r.active.index : t >= m() ? r.settings.infiniteLoop ? 0 : r.active.index : t
					};
				return o.goToSlide = function (e, n) {
					var i, s, a, l, u = !0,
						c = 0,
						f = {
							left: 0,
							top: 0
						},
						p = null;
					if (r.oldIndex = r.active.index, r.active.index = U(e), !r.working && r.active.index !== r.oldIndex) {
						if (r.working = !0, u = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index), "undefined" != typeof u && !u) return r.active.index = r.oldIndex, void(r.working = !1);
						"next" === n ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1) : "prev" === n && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1)), r.active.last = r.active.index >= m() - 1, (r.settings.pager || r.settings.pagerCustom) && O(r.active.index), r.settings.controls && N(), "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({
							height: h()
						}, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({
							zIndex: 0
						}), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function () {
							t(this).css("zIndex", r.settings.slideZIndex), P()
						})) : (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({
							height: h()
						}, r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (p = r.children.eq(r.children.length - 1), f = p.position(), c = r.viewport.width() - p.outerWidth()) : (i = r.children.length - r.settings.minSlides, f = r.children.eq(i).position()) : r.carousel && r.active.last && "prev" === n ? (s = 1 === r.settings.moveSlides ? r.settings.maxSlides - v() : (m() - 1) * v() - (r.children.length - r.settings.maxSlides), p = o.children(".srbt-clone").eq(s), f = p.position()) : "next" === n && 0 === r.active.index ? (f = o.find("> .srbt-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : e >= 0 && (l = e * parseInt(v()), f = r.children.eq(l).position()), "undefined" != typeof f ? (a = "horizontal" === r.settings.mode ? -(f.left - c) : -f.top, b(a, "slide", r.settings.speed)) : r.working = !1), r.settings.ariaHidden && W(r.active.index * v())
					}
				}, o.goToNextSlide = function () {
					if (r.settings.infiniteLoop || !r.active.last) {
						var t = parseInt(r.active.index) + 1;
						o.goToSlide(t, "next")
					}
				}, o.goToPrevSlide = function () {
					if (r.settings.infiniteLoop || 0 !== r.active.index) {
						var t = parseInt(r.active.index) - 1;
						o.goToSlide(t, "prev")
					}
				}, o.startAuto = function (t) {
					r.interval || (r.interval = setInterval(function () {
						"next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
					}, r.settings.pause), r.settings.autoControls && t !== !0 && M("stop"))
				}, o.stopAuto = function (t) {
					r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && t !== !0 && M("start"))
				}, o.getCurrentSlide = function () {
					return r.active.index
				}, o.getCurrentSlideElement = function () {
					return r.children.eq(r.active.index)
				}, o.getSlideElement = function (t) {
					return r.children.eq(t)
				}, o.getSlideCount = function () {
					return r.children.length
				}, o.isWorking = function () {
					return r.working
				}, o.redrawSlider = function () {
					r.children.add(o.find(".srbt-clone")).outerWidth(d()), r.viewport.css("height", h()), r.settings.ticker || y(), r.active.last && (r.active.index = m() - 1), r.active.index >= m() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && (w(), O(r.active.index)), r.settings.ariaHidden && W(r.active.index * v())
				}, o.destroySlider = function () {
					r.initialized && (r.initialized = !1, t(".srbt-clone", this).remove(), r.children.each(function () {
						void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
					}), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), t(".srbt-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && t(window).unbind("resize", V), r.settings.keyboardEnabled && t(document).unbind("keydown", j), t(this).removeData("bxSlider"))
				}, o.reloadSlider = function (e) {
					void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
				}, l(), t(o).data("bxSlider", this), this
			}
		}
	}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function (t, e, n, i, r) {
			return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
		},
		easeInQuad: function (t, e, n, i, r) {
			return i * (e /= r) * e + n
		},
		easeOutQuad: function (t, e, n, i, r) {
			return -i * (e /= r) * (e - 2) + n
		},
		easeInOutQuad: function (t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
		},
		easeInCubic: function (t, e, n, i, r) {
			return i * (e /= r) * e * e + n
		},
		easeOutCubic: function (t, e, n, i, r) {
			return i * ((e = e / r - 1) * e * e + 1) + n
		},
		easeInOutCubic: function (t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
		},
		easeInQuart: function (t, e, n, i, r) {
			return i * (e /= r) * e * e * e + n
		},
		easeOutQuart: function (t, e, n, i, r) {
			return -i * ((e = e / r - 1) * e * e * e - 1) + n
		},
		easeInOutQuart: function (t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
		},
		easeInQuint: function (t, e, n, i, r) {
			return i * (e /= r) * e * e * e * e + n
		},
		easeOutQuint: function (t, e, n, i, r) {
			return i * ((e = e / r - 1) * e * e * e * e + 1) + n
		},
		easeInOutQuint: function (t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
		},
		easeInSine: function (t, e, n, i, r) {
			return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
		},
		easeOutSine: function (t, e, n, i, r) {
			return i * Math.sin(e / r * (Math.PI / 2)) + n
		},
		easeInOutSine: function (t, e, n, i, r) {
			return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
		},
		easeInExpo: function (t, e, n, i, r) {
			return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
		},
		easeOutExpo: function (t, e, n, i, r) {
			return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
		},
		easeInOutExpo: function (t, e, n, i, r) {
			return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
		},
		easeInCirc: function (t, e, n, i, r) {
			return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
		},
		easeOutCirc: function (t, e, n, i, r) {
			return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
		},
		easeInOutCirc: function (t, e, n, i, r) {
			return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
		},
		easeInElastic: function (t, e, n, i, r) {
			var o = 1.70158,
				s = 0,
				a = i;
			if (0 == e) return n;
			if (1 == (e /= r)) return n + i;
			if (s || (s = .3 * r), a < Math.abs(i)) {
				a = i;
				var o = s / 4
			} else var o = s / (2 * Math.PI) * Math.asin(i / a);
			return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s)) + n
		},
		easeOutElastic: function (t, e, n, i, r) {
			var o = 1.70158,
				s = 0,
				a = i;
			if (0 == e) return n;
			if (1 == (e /= r)) return n + i;
			if (s || (s = .3 * r), a < Math.abs(i)) {
				a = i;
				var o = s / 4
			} else var o = s / (2 * Math.PI) * Math.asin(i / a);
			return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / s) + i + n
		},
		easeInOutElastic: function (t, e, n, i, r) {
			var o = 1.70158,
				s = 0,
				a = i;
			if (0 == e) return n;
			if (2 == (e /= r / 2)) return n + i;
			if (s || (s = .3 * r * 1.5), a < Math.abs(i)) {
				a = i;
				var o = s / 4
			} else var o = s / (2 * Math.PI) * Math.asin(i / a);
			return e < 1 ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) * .5 + i + n
		},
		easeInBack: function (t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
		},
		easeOutBack: function (t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
		},
		easeInOutBack: function (t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
		},
		easeInBounce: function (t, e, n, i, r) {
			return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
		},
		easeOutBounce: function (t, e, n, i, r) {
			return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
		},
		easeInOutBounce: function (t, e, n, i, r) {
			return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
		}
	}), ! function () {
		"use strict";

		function t(i) {
			if (!i) throw new Error("No options passed to Waypoint constructor");
			if (!i.element) throw new Error("No element option passed to Waypoint constructor");
			if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
			this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
		}
		var e = 0,
			n = {};
		t.prototype.queueTrigger = function (t) {
			this.group.queueTrigger(this, t)
		}, t.prototype.trigger = function (t) {
			this.enabled && this.callback && this.callback.apply(this, t)
		}, t.prototype.destroy = function () {
			this.context.remove(this), this.group.remove(this), delete n[this.key]
		}, t.prototype.disable = function () {
			return this.enabled = !1, this
		}, t.prototype.enable = function () {
			return this.context.refresh(), this.enabled = !0, this
		}, t.prototype.next = function () {
			return this.group.next(this)
		}, t.prototype.previous = function () {
			return this.group.previous(this)
		}, t.invokeAll = function (t) {
			var e = [];
			for (var i in n) e.push(n[i]);
			for (var r = 0, o = e.length; o > r; r++) e[r][t]()
		}, t.destroyAll = function () {
			t.invokeAll("destroy")
		}, t.disableAll = function () {
			t.invokeAll("disable")
		}, t.enableAll = function () {
			t.invokeAll("enable")
		}, t.refreshAll = function () {
			t.Context.refreshAll()
		}, t.viewportHeight = function () {
			return window.innerHeight || document.documentElement.clientHeight
		}, t.viewportWidth = function () {
			return document.documentElement.clientWidth
		}, t.adapters = [], t.defaults = {
			context: window,
			continuous: !0,
			enabled: !0,
			group: "default",
			horizontal: !1,
			offset: 0
		}, t.offsetAliases = {
			"bottom-in-view": function () {
				return this.context.innerHeight() - this.adapter.outerHeight()
			},
			"right-in-view": function () {
				return this.context.innerWidth() - this.adapter.outerWidth()
			}
		}, window.Waypoint = t
	}(),
	function () {
		"use strict";

		function t(t) {
			window.setTimeout(t, 1e3 / 60)
		}

		function e(t) {
			this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
		}
		var n = 0,
			i = {},
			r = window.Waypoint,
			o = window.onload;
		e.prototype.add = function (t) {
			var e = t.options.horizontal ? "horizontal" : "vertical";
			this.waypoints[e][t.key] = t, this.refresh()
		}, e.prototype.checkEmpty = function () {
			var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
				e = this.Adapter.isEmptyObject(this.waypoints.vertical);
			t && e && (this.adapter.off(".waypoints"), delete i[this.key])
		}, e.prototype.createThrottledResizeHandler = function () {
			function t() {
				e.handleResize(), e.didResize = !1
			}
			var e = this;
			this.adapter.on("resize.waypoints", function () {
				e.didResize || (e.didResize = !0, r.requestAnimationFrame(t))
			})
		}, e.prototype.createThrottledScrollHandler = function () {
			function t() {
				e.handleScroll(), e.didScroll = !1
			}
			var e = this;
			this.adapter.on("scroll.waypoints", function () {
				(!e.didScroll || r.isTouch) && (e.didScroll = !0, r.requestAnimationFrame(t))
			})
		}, e.prototype.handleResize = function () {
			r.Context.refreshAll()
		}, e.prototype.handleScroll = function () {
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
			for (var n in e) {
				var i = e[n],
					r = i.newScroll > i.oldScroll,
					o = r ? i.forward : i.backward;
				for (var s in this.waypoints[n]) {
					var a = this.waypoints[n][s],
						l = i.oldScroll < a.triggerPoint,
						u = i.newScroll >= a.triggerPoint,
						c = l && u,
						f = !l && !u;
					(c || f) && (a.queueTrigger(o), t[a.group.id] = a.group)
				}
			}
			for (var h in t) t[h].flushTriggers();
			this.oldScroll = {
				x: e.horizontal.newScroll,
				y: e.vertical.newScroll
			}
		}, e.prototype.innerHeight = function () {
			return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
		}, e.prototype.remove = function (t) {
			delete this.waypoints[t.axis][t.key], this.checkEmpty()
		}, e.prototype.innerWidth = function () {
			return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
		}, e.prototype.destroy = function () {
			var t = [];
			for (var e in this.waypoints)
				for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
			for (var i = 0, r = t.length; r > i; i++) t[i].destroy()
		}, e.prototype.refresh = function () {
			var t, e = this.element == this.element.window,
				n = e ? void 0 : this.adapter.offset(),
				i = {};
			this.handleScroll(), t = {
				horizontal: {
					contextOffset: e ? 0 : n.left,
					contextScroll: e ? 0 : this.oldScroll.x,
					contextDimension: this.innerWidth(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left",
					offsetProp: "left"
				},
				vertical: {
					contextOffset: e ? 0 : n.top,
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
					var l, u, c, f, h, p = this.waypoints[o][a],
						d = p.options.offset,
						g = p.triggerPoint,
						m = 0,
						v = null == g;
					p.element !== p.element.window && (m = p.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(p) : "string" == typeof d && (d = parseFloat(d), p.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, p.triggerPoint = m + l - d, u = g < s.oldScroll, c = p.triggerPoint >= s.oldScroll, f = u && c, h = !u && !c, !v && f ? (p.queueTrigger(s.backward), i[p.group.id] = p.group) : !v && h ? (p.queueTrigger(s.forward), i[p.group.id] = p.group) : v && s.oldScroll >= p.triggerPoint && (p.queueTrigger(s.forward), i[p.group.id] = p.group)
				}
			}
			return r.requestAnimationFrame(function () {
				for (var t in i) i[t].flushTriggers()
			}), this
		}, e.findOrCreateByElement = function (t) {
			return e.findByElement(t) || new e(t)
		}, e.refreshAll = function () {
			for (var t in i) i[t].refresh()
		}, e.findByElement = function (t) {
			return i[t.waypointContextKey]
		}, window.onload = function () {
			o && o(), e.refreshAll()
		}, r.requestAnimationFrame = function (e) {
			var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
			n.call(window, e)
		}, r.Context = e
	}(),
	function () {
		"use strict";

		function t(t, e) {
			return t.triggerPoint - e.triggerPoint
		}

		function e(t, e) {
			return e.triggerPoint - t.triggerPoint
		}

		function n(t) {
			this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
		}
		var i = {
				vertical: {},
				horizontal: {}
			},
			r = window.Waypoint;
		n.prototype.add = function (t) {
			this.waypoints.push(t)
		}, n.prototype.clearTriggerQueues = function () {
			this.triggerQueues = {
				up: [],
				down: [],
				left: [],
				right: []
			}
		}, n.prototype.flushTriggers = function () {
			for (var n in this.triggerQueues) {
				var i = this.triggerQueues[n],
					r = "up" === n || "left" === n;
				i.sort(r ? e : t);
				for (var o = 0, s = i.length; s > o; o += 1) {
					var a = i[o];
					(a.options.continuous || o === i.length - 1) && a.trigger([n])
				}
			}
			this.clearTriggerQueues()
		}, n.prototype.next = function (e) {
			this.waypoints.sort(t);
			var n = r.Adapter.inArray(e, this.waypoints),
				i = n === this.waypoints.length - 1;
			return i ? null : this.waypoints[n + 1]
		}, n.prototype.previous = function (e) {
			this.waypoints.sort(t);
			var n = r.Adapter.inArray(e, this.waypoints);
			return n ? this.waypoints[n - 1] : null
		}, n.prototype.queueTrigger = function (t, e) {
			this.triggerQueues[e].push(t)
		}, n.prototype.remove = function (t) {
			var e = r.Adapter.inArray(t, this.waypoints);
			e > -1 && this.waypoints.splice(e, 1)
		}, n.prototype.first = function () {
			return this.waypoints[0]
		}, n.prototype.last = function () {
			return this.waypoints[this.waypoints.length - 1]
		}, n.findOrCreate = function (t) {
			return i[t.axis][t.name] || new n(t)
		}, r.Group = n
	}(),
	function () {
		"use strict";

		function t(t) {
			this.$element = e(t)
		}
		var e = window.jQuery,
			n = window.Waypoint;
		e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, n) {
			t.prototype[n] = function () {
				var t = Array.prototype.slice.call(arguments);
				return this.$element[n].apply(this.$element, t)
			}
		}), e.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
			t[i] = e[i]
		}), n.adapters.push({
			name: "jquery",
			Adapter: t
		}), n.Adapter = t
	}(),
	function () {
		"use strict";

		function t(t) {
			return function () {
				var n = [],
					i = arguments[0];
				return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function () {
					var r = t.extend({}, i, {
						element: this
					});
					"string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), n.push(new e(r))
				}), n
			}
		}
		var e = window.Waypoint;
		window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
	}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
				var i = function (t) {
						var e, n = [],
							i = t.length;
						for (e = 0; e !== i; n.push(t[e++]));
						return n
					},
					r = function (t, e, n) {
						var i, r, o = t.cycle;
						for (i in o) r = o[i], t[i] = "function" == typeof r ? r.call(e[n], n) : r[n % r.length];
						delete t.cycle
					},
					o = function (t, e, i) {
						n.call(this, t, e, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
					},
					s = 1e-10,
					a = n._internals,
					l = a.isSelector,
					u = a.isArray,
					c = o.prototype = n.to({}, .1, {}),
					f = [];
				o.version = "1.18.2", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = n.killTweensOf, o.getTweensOf = n.getTweensOf, o.lagSmoothing = n.lagSmoothing, o.ticker = n.ticker, o.render = n.render, c.invalidate = function () {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
				}, c.updateTo = function (t, e) {
					var i, r = this.ratio,
						o = this.vars.immediateRender || t.immediateRender;
					e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (i in t) this.vars[i] = t[i];
					if (this._initted || o)
						if (e) this._initted = !1, o && this.render(0, !0, !0);
						else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var s = this._totalTime;
						this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
					} else if (this._initted = !1, this._init(), this._time > 0 || o)
						for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
					return this
				}, c.render = function (t, e, n) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var i, r, o, l, u, c, f, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						g = this._totalTime,
						m = this._cycle,
						v = this._duration,
						y = this._rawPrevTime;
					if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > y || 0 >= t && t >= -1e-7 || y === s && "isPause" !== this.data) && y !== t && (n = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = h = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && y > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = h = !e || t || y === t ? t : s)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), d === this._time && !n && m === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = g, this._rawPrevTime = y, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [t, e]);
						this._time && !i ? this.ratio = this._ease.getRatio(this._time / v) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
					this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== g || i) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === s && h !== s && (this._rawPrevTime = 0))
				}, o.to = function (t, e, n) {
					return new o(t, e, n)
				}, o.from = function (t, e, n) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new o(t, e, n)
				}, o.fromTo = function (t, e, n, i) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new o(t, e, i)
				}, o.staggerTo = o.allTo = function (t, e, s, a, c, h, p) {
					a = a || 0;
					var d, g, m, v, y = 0,
						b = [],
						w = function () {
							s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), c.apply(p || s.callbackScope || this, h || f)
						},
						x = s.cycle,
						_ = s.startAt && s.startAt.cycle;
					for (u(t) || ("string" == typeof t && (t = n.selector(t) || t), l(t) && (t = i(t))), t = t || [], 0 > a && (t = i(t), t.reverse(), a *= -1), d = t.length - 1, m = 0; d >= m; m++) {
						g = {};
						for (v in s) g[v] = s[v];
						if (x && r(g, t, m), _) {
							_ = g.startAt = {};
							for (v in s.startAt) _[v] = s.startAt[v];
							r(g.startAt, t, m)
						}
						g.delay = y + (g.delay || 0), m === d && c && (g.onComplete = w), b[m] = new o(t[m], e, g), y += a
					}
					return b
				}, o.staggerFrom = o.allFrom = function (t, e, n, i, r, s, a) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, o.staggerTo(t, e, n, i, r, s, a)
				}, o.staggerFromTo = o.allFromTo = function (t, e, n, i, r, s, a, l) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, o.staggerTo(t, e, i, r, s, a, l)
				}, o.delayedCall = function (t, e, n, i, r) {
					return new o(e, 0, {
						delay: t,
						onComplete: e,
						onCompleteParams: n,
						callbackScope: i,
						onReverseComplete: e,
						onReverseCompleteParams: n,
						immediateRender: !1,
						useFrames: r,
						overwrite: 0
					})
				}, o.set = function (t, e) {
					return new o(t, 0, e)
				}, o.isTweening = function (t) {
					return n.getTweensOf(t, !0).length > 0
				};
				var h = function (t, e) {
						for (var i = [], r = 0, o = t._first; o;) o instanceof n ? i[r++] = o : (e && (i[r++] = o), i = i.concat(h(o, e)), r = i.length), o = o._next;
						return i
					},
					p = o.getAllTweens = function (e) {
						return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
					};
				o.killAll = function (t, n, i, r) {
					null == n && (n = !0), null == i && (i = !0);
					var o, s, a, l = p(0 != r),
						u = l.length,
						c = n && i && r;
					for (a = 0; u > a; a++) s = l[a], (c || s instanceof e || (o = s.target === s.vars.onComplete) && i || n && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
				}, o.killChildTweensOf = function (t, e) {
					if (null != t) {
						var r, s, c, f, h, p = a.tweenLookup;
						if ("string" == typeof t && (t = n.selector(t) || t), l(t) && (t = i(t)), u(t))
							for (f = t.length; --f > -1;) o.killChildTweensOf(t[f], e);
						else {
							r = [];
							for (c in p)
								for (s = p[c].target.parentNode; s;) s === t && (r = r.concat(p[c].tweens)), s = s.parentNode;
							for (h = r.length, f = 0; h > f; f++) e && r[f].totalTime(r[f].totalDuration()), r[f]._enabled(!1, !1)
						}
					}
				};
				var d = function (t, n, i, r) {
					n = n !== !1, i = i !== !1, r = r !== !1;
					for (var o, s, a = p(r), l = n && i && r, u = a.length; --u > -1;) s = a[u], (l || s instanceof e || (o = s.target === s.vars.onComplete) && i || n && !o) && s.paused(t)
				};
				return o.pauseAll = function (t, e, n) {
					d(!0, t, e, n)
				}, o.resumeAll = function (t, e, n) {
					d(!1, t, e, n)
				}, o.globalTimeScale = function (e) {
					var i = t._rootTimeline,
						r = n.ticker.time;
					return arguments.length ? (e = e || s, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
				}, c.progress = function (t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
				}, c.totalProgress = function (t) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
				}, c.time = function (t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, c.duration = function (e) {
					return arguments.length ? t.prototype.duration.call(this, e) : this._duration
				}, c.totalDuration = function (t) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, c.repeat = function (t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function (t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function (t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, o
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
				var i = function (t) {
						e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var n, i, r = this.vars;
						for (i in r) n = r[i], l(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
						l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
					},
					r = 1e-10,
					o = n._internals,
					s = i._internals = {},
					a = o.isSelector,
					l = o.isArray,
					u = o.lazyTweens,
					c = o.lazyRender,
					f = _gsScope._gsDefine.globals,
					h = function (t) {
						var e, n = {};
						for (e in t) n[e] = t[e];
						return n
					},
					p = function (t, e, n) {
						var i, r, o = t.cycle;
						for (i in o) r = o[i], t[i] = "function" == typeof r ? r.call(e[n], n) : r[n % r.length];
						delete t.cycle
					},
					d = s.pauseCallback = function () {},
					g = function (t) {
						var e, n = [],
							i = t.length;
						for (e = 0; e !== i; n.push(t[e++]));
						return n
					},
					m = i.prototype = new e;
				return i.version = "1.18.2", m.constructor = i, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, i, r) {
					var o = i.repeat && f.TweenMax || n;
					return e ? this.add(new o(t, e, i), r) : this.set(t, i, r)
				}, m.from = function (t, e, i, r) {
					return this.add((i.repeat && f.TweenMax || n).from(t, e, i), r)
				}, m.fromTo = function (t, e, i, r, o) {
					var s = r.repeat && f.TweenMax || n;
					return e ? this.add(s.fromTo(t, e, i, r), o) : this.set(t, r, o)
				}, m.staggerTo = function (t, e, r, o, s, l, u, c) {
					var f, d, m = new i({
							onComplete: l,
							onCompleteParams: u,
							callbackScope: c,
							smoothChildTiming: this.smoothChildTiming
						}),
						v = r.cycle;
					for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], a(t) && (t = g(t)), o = o || 0, 0 > o && (t = g(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) f = h(r), f.startAt && (f.startAt = h(f.startAt), f.startAt.cycle && p(f.startAt, t, d)), v && p(f, t, d), m.to(t[d], e, f, d * o);
					return this.add(m, s)
				}, m.staggerFrom = function (t, e, n, i, r, o, s, a) {
					return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, o, s, a)
				}, m.staggerFromTo = function (t, e, n, i, r, o, s, a, l) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, o, s, a, l)
				}, m.call = function (t, e, i, r) {
					return this.add(n.delayedCall(0, t, e, i), r)
				}, m.set = function (t, e, i) {
					return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
				}, i.exportRoot = function (t, e) {
					t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
					var r, o, s = new i(t),
						a = s._timeline;
					for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof n && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
					return a.add(s, 0), s
				}, m.add = function (r, o, s, a) {
					var u, c, f, h, p, d;
					if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
						if (r instanceof Array || r && r.push && l(r)) {
							for (s = s || "normal", a = a || 0, u = o, c = r.length, f = 0; c > f; f++) l(h = r[f]) && (h = new i({
								tweens: h
							})), this.add(h, u), "string" != typeof h && "function" != typeof h && ("sequence" === s ? u = h._startTime + h.totalDuration() / h._timeScale : "start" === s && (h._startTime -= h.delay())), u += a;
							return this._uncache(!0)
						}
						if ("string" == typeof r) return this.addLabel(r, o);
						if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
						r = n.delayedCall(0, r)
					}
					if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
					return this
				}, m.remove = function (e) {
					if (e instanceof t) {
						this._remove(e, !1);
						var n = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
						return e._startTime = (e._paused ? e._pauseTime : n._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
					}
					if (e instanceof Array || e && e.push && l(e)) {
						for (var i = e.length; --i > -1;) this.remove(e[i]);
						return this
					}
					return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
				}, m._remove = function (t, n) {
					e.prototype._remove.call(this, t, n);
					var i = this._last;
					return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
				}, m.append = function (t, e) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
				}, m.insert = m.insertMultiple = function (t, e, n, i) {
					return this.add(t, e || 0, n, i)
				}, m.appendMultiple = function (t, e, n, i) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
				}, m.addLabel = function (t, e) {
					return this._labels[t] = this._parseTimeOrLabel(e), this
				}, m.addPause = function (t, e, i, r) {
					var o = n.delayedCall(0, d, i, r || this);
					return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
				}, m.removeLabel = function (t) {
					return delete this._labels[t], this
				}, m.getLabelTime = function (t) {
					return null != this._labels[t] ? this._labels[t] : -1
				}, m._parseTimeOrLabel = function (e, n, i, r) {
					var o;
					if (r instanceof t && r.timeline === this) this.remove(r);
					else if (r && (r instanceof Array || r.push && l(r)))
						for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
					if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, i);
					if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
					else {
						if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
						n = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, i) : this.duration()
					}
					return Number(e) + n
				}, m.seek = function (t, e) {
					return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
				}, m.stop = function () {
					return this.paused(!0)
				}, m.gotoAndPlay = function (t, e) {
					return this.play(t, e)
				}, m.gotoAndStop = function (t, e) {
					return this.pause(t, e)
				}, m.render = function (t, e, n) {
					this._gc && this._enabled(!0, !1);
					var i, o, s, a, l, f, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						g = this._startTime,
						m = this._timeScale,
						v = this._paused;
					if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
					else if (1e-7 > t)
						if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
								for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
							t = 0, this._initted || (l = !0)
						}
					else {
						if (this._hasPause && !this._forcingPlayhead && !e) {
							if (t >= d)
								for (i = this._first; i && i._startTime <= t && !f;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (f = i), i = i._next;
							else
								for (i = this._last; i && i._startTime >= t && !f;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (f = i), i = i._prev;
							f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						this._totalTime = this._time = this._rawPrevTime = t
					}
					if (this._time !== d && this._first || n || l || f) {
						if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), h = this._time, h >= d)
							for (i = this._first; i && (s = i._next, h === this._time && (!this._paused || v));)(i._active || i._startTime <= h && !i._paused && !i._gc) && (f === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = s;
						else
							for (i = this._last; i && (s = i._prev, h === this._time && (!this._paused || v));) {
								if (i._active || i._startTime <= d && !i._paused && !i._gc) {
									if (f === i) {
										for (f = i._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, n), f = f._prev;
										f = null, this.pause()
									}
									i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
								}
								i = s
							}
						this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
					}
				}, m._hasPausedChild = function () {
					for (var t = this._first; t;) {
						if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
						t = t._next
					}
					return !1
				}, m.getChildren = function (t, e, i, r) {
					r = r || -9999999999;
					for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof n ? e !== !1 && (o[a++] = s) : (i !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, i)), a = o.length))), s = s._next;
					return o
				}, m.getTweensOf = function (t, e) {
					var i, r, o = this._gc,
						s = [],
						a = 0;
					for (o && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (s[a++] = i[r]);
					return o && this._enabled(!1, !0), s
				}, m.recent = function () {
					return this._recent
				}, m._contains = function (t) {
					for (var e = t.timeline; e;) {
						if (e === this) return !0;
						e = e.timeline
					}
					return !1
				}, m.shiftChildren = function (t, e, n) {
					n = n || 0;
					for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
					if (e)
						for (i in o) o[i] >= n && (o[i] += t);
					return this._uncache(!0)
				}, m._kill = function (t, e) {
					if (!t && !e) return this._enabled(!1, !1);
					for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0);
					return r
				}, m.clear = function (t) {
					var e = this.getChildren(!1, !0, !0),
						n = e.length;
					for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
					return t !== !1 && (this._labels = {}), this._uncache(!0)
				}, m.invalidate = function () {
					for (var e = this._first; e;) e.invalidate(), e = e._next;
					return t.prototype.invalidate.call(this)
				}, m._enabled = function (t, n) {
					if (t === this._gc)
						for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
					return e.prototype._enabled.call(this, t, n)
				}, m.totalTime = function (e, n, i) {
					this._forcingPlayhead = !0;
					var r = t.prototype.totalTime.apply(this, arguments);
					return this._forcingPlayhead = !1, r
				}, m.duration = function (t) {
					return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
				}, m.totalDuration = function (t) {
					if (!arguments.length) {
						if (this._dirty) {
							for (var e, n, i = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = e;
							this._duration = this._totalDuration = i, this._dirty = !1
						}
						return this._totalDuration
					}
					return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
				}, m.paused = function (e) {
					if (!e)
						for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
					return t.prototype.paused.apply(this, arguments)
				}, m.usesFrames = function () {
					for (var e = this._timeline; e._timeline;) e = e._timeline;
					return e === t._rootFramesTimeline
				}, m.rawTime = function () {
					return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
				}, i
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, n) {
				var i = function (e) {
						t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					r = 1e-10,
					o = e._internals,
					s = o.lazyTweens,
					a = o.lazyRender,
					l = new n(null, null, 1, 0),
					u = i.prototype = new t;
				return u.constructor = i, u.kill()._gc = !1, i.version = "1.18.2", u.invalidate = function () {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
				}, u.addCallback = function (t, n, i, r) {
					return this.add(e.delayedCall(0, t, i, r), n)
				}, u.removeCallback = function (t, e) {
					if (t)
						if (null == e) this._kill(null, t);
						else
							for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
					return this
				}, u.removePause = function (e) {
					return this.removeCallback(t._internals.pauseCallback, e)
				}, u.tweenTo = function (t, n) {
					n = n || {};
					var i, r, o, s = {
						ease: l,
						useFrames: this.usesFrames(),
						immediateRender: !1
					};
					for (r in n) s[r] = n[r];
					return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new e(this, i, s), s.onStart = function () {
						o.target.paused(!0), o.vars.time !== o.target.time() && i === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), n.onStart && o._callback("onStart")
					}, o
				}, u.tweenFromTo = function (t, e, n) {
					n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
						onComplete: this.seek,
						onCompleteParams: [t],
						callbackScope: this
					}, n.immediateRender = n.immediateRender !== !1;
					var i = this.tweenTo(e, n);
					return i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
				}, u.render = function (t, e, n) {
					this._gc && this._enabled(!0, !1);
					var i, o, l, u, c, f, h, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
						g = this._duration,
						m = this._time,
						v = this._totalTime,
						y = this._startTime,
						b = this._timeScale,
						w = this._rawPrevTime,
						x = this._paused,
						_ = this._cycle;
					if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === r) && w !== t && this._first && (c = !0, w > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
					else if (1e-7 > t)
						if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === g && w !== r && (w > 0 || 0 > t && w >= 0) && !this._locked) && (u = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, u = "onReverseComplete") : w >= 0 && this._first && (c = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
								for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
							t = 0, this._initted || (c = !0)
						}
					else if (0 === g && 0 > w && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = g + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
						if (t = this._time, t >= m)
							for (i = this._first; i && i._startTime <= t && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
						else
							for (i = this._last; i && i._startTime >= t && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
						h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
					}
					if (this._cycle !== _ && !this._locked) {
						var $ = this._yoyo && 0 !== (1 & _),
							T = $ === (this._yoyo && 0 !== (1 & this._cycle)),
							S = this._totalTime,
							C = this._cycle,
							k = this._rawPrevTime,
							E = this._time;
						if (this._totalTime = _ * g, this._cycle < _ ? $ = !$ : this._totalTime += g, this._time = m, this._rawPrevTime = 0 === g ? w - 1e-4 : w, this._cycle = _, this._locked = !0, m = $ ? 0 : g, this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
						if (T && (m = $ ? g + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
						this._time = E, this._totalTime = S, this._cycle = C, this._rawPrevTime = k
					}
					if (!(this._time !== m && this._first || n || c || h)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), p = this._time, p >= m)
						for (i = this._first; i && (l = i._next, p === this._time && (!this._paused || x));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (h === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = l;
					else
						for (i = this._last; i && (l = i._prev, p === this._time && (!this._paused || x));) {
							if (i._active || i._startTime <= m && !i._paused && !i._gc) {
								if (h === i) {
									for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, n), h = h._prev;
									h = null, this.pause()
								}
								i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
							}
							i = l
						}
					this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (y === this._startTime || b !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
				}, u.getActive = function (t, e, n) {
					null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
					var i, r, o = [],
						s = this.getChildren(t, e, n),
						a = 0,
						l = s.length;
					for (i = 0; l > i; i++) r = s[i], r.isActive() && (o[a++] = r);
					return o
				}, u.getLabelAfter = function (t) {
					t || 0 !== t && (t = this._time);
					var e, n = this.getLabelsArray(),
						i = n.length;
					for (e = 0; i > e; e++)
						if (n[e].time > t) return n[e].name;
					return null
				}, u.getLabelBefore = function (t) {
					null == t && (t = this._time);
					for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
						if (e[n].time < t) return e[n].name;
					return null
				}, u.getLabelsArray = function () {
					var t, e = [],
						n = 0;
					for (t in this._labels) e[n++] = {
						time: this._labels[t],
						name: t
					};
					return e.sort(function (t, e) {
						return t.time - e.time
					}), e
				}, u.progress = function (t, e) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
				}, u.totalProgress = function (t, e) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
				}, u.totalDuration = function (e) {
					return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, u.time = function (t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, u.repeat = function (t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, u.repeatDelay = function (t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, u.yoyo = function (t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, u.currentLabel = function (t) {
					return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
				}, i
			}, !0),
			function () {
				var t = 180 / Math.PI,
					e = [],
					n = [],
					i = [],
					r = {},
					o = _gsScope._gsDefine.globals,
					s = function (t, e, n, i) {
						this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
					},
					a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					l = function (t, e, n, i) {
						var r = {
								a: t
							},
							o = {},
							s = {},
							a = {
								c: i
							},
							l = (t + e) / 2,
							u = (e + n) / 2,
							c = (n + i) / 2,
							f = (l + u) / 2,
							h = (u + c) / 2,
							p = (h - f) / 8;
						return r.b = l + (t - l) / 4, o.b = f + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (f + h) / 2, s.b = h - p, a.b = c + (i - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
					},
					u = function (t, r, o, s, a) {
						var u, c, f, h, p, d, g, m, v, y, b, w, x, _ = t.length - 1,
							$ = 0,
							T = t[0].a;
						for (u = 0; _ > u; u++) p = t[$], c = p.a, f = p.d, h = t[$ + 1].d, a ? (b = e[u], w = n[u], x = (w + b) * r * .25 / (s ? .5 : i[u] || .5), d = f - (f - c) * (s ? .5 * r : 0 !== b ? x / b : 0), g = f + (h - f) * (s ? .5 * r : 0 !== w ? x / w : 0), m = f - (d + ((g - d) * (3 * b / (b + w) + .5) / 4 || 0))) : (d = f - (f - c) * r * .5, g = f + (h - f) * r * .5, m = f - (d + g) / 2), d += m, g += m, p.c = v = d, 0 !== u ? p.b = T : p.b = T = p.a + .6 * (p.c - p.a), p.da = f - c, p.ca = v - c, p.ba = T - c, o ? (y = l(c, T, v, f), t.splice($, 1, y[0], y[1], y[2], y[3]), $ += 4) : $++, T = g;
						p = t[$], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, o && (y = l(p.a, T, p.c, p.d), t.splice($, 1, y[0], y[1], y[2], y[3]))
					},
					c = function (t, i, r, o) {
						var a, l, u, c, f, h, p = [];
						if (o)
							for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof (h = t[l][i]) && "=" === h.charAt(1) && (t[l][i] = o[i] + Number(h.charAt(0) + h.substr(2)));
						if (a = t.length - 2, 0 > a) return p[0] = new s(t[0][i], 0, 0, t[-1 > a ? 0 : 1][i]), p;
						for (l = 0; a > l; l++) u = t[l][i], c = t[l + 1][i], p[l] = new s(u, 0, 0, c), r && (f = t[l + 2][i], e[l] = (e[l] || 0) + (c - u) * (c - u), n[l] = (n[l] || 0) + (f - c) * (f - c));
						return p[l] = new s(t[l][i], 0, 0, t[l + 1][i]), p
					},
					f = function (t, o, s, l, f, h) {
						var p, d, g, m, v, y, b, w, x = {},
							_ = [],
							$ = h || t[0];
						f = "string" == typeof f ? "," + f + "," : a, null == o && (o = 1);
						for (d in t[0]) _.push(d);
						if (t.length > 1) {
							for (w = t[t.length - 1], b = !0, p = _.length; --p > -1;)
								if (d = _[p], Math.abs($[d] - w[d]) > .05) {
									b = !1;
									break
								}
							b && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
						}
						for (e.length = n.length = i.length = 0, p = _.length; --p > -1;) d = _[p], r[d] = -1 !== f.indexOf("," + d + ","), x[d] = c(t, d, r[d], h);
						for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), n[p] = Math.sqrt(n[p]);
						if (!l) {
							for (p = _.length; --p > -1;)
								if (r[d])
									for (g = x[_[p]], y = g.length - 1, m = 0; y > m; m++) v = g[m + 1].da / n[m] + g[m].da / e[m], i[m] = (i[m] || 0) + v * v;
							for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
						}
						for (p = _.length, m = s ? 4 : 1; --p > -1;) d = _[p], g = x[d], u(g, o, s, l, r[d]), b && (g.splice(0, m), g.splice(g.length - m, m));
						return x
					},
					h = function (t, e, n) {
						e = e || "soft";
						var i, r, o, a, l, u, c, f, h, p, d, g = {},
							m = "cubic" === e ? 3 : 2,
							v = "soft" === e,
							y = [];
						if (v && n && (t = [n].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
						for (h in t[0]) y.push(h);
						for (u = y.length; --u > -1;) {
							for (h = y[u], g[h] = l = [], p = 0, f = t.length, c = 0; f > c; c++) i = null == n ? t[c][h] : "string" == typeof (d = t[c][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && c > 1 && f - 1 > c && (l[p++] = (i + l[p - 2]) / 2), l[p++] = i;
							for (f = p - m + 1, p = 0, c = 0; f > c; c += m) i = l[c], r = l[c + 1], o = l[c + 2], a = 2 === m ? 0 : l[c + 3], l[p++] = d = 3 === m ? new s(i, r, o, a) : new s(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
							l.length = p
						}
						return g
					},
					p = function (t, e, n) {
						for (var i, r, o, s, a, l, u, c, f, h, p, d = 1 / n, g = t.length; --g > -1;)
							for (h = t[g], o = h.a, s = h.d - o, a = h.c - o, l = h.b - o, i = r = 0, c = 1; n >= c; c++) u = d * c, f = 1 - u, i = r - (r = (u * u * s + 3 * f * (u * a + f * l)) * u), p = g * n + c - 1, e[p] = (e[p] || 0) + i * i
					},
					d = function (t, e) {
						e = e >> 0 || 6;
						var n, i, r, o, s = [],
							a = [],
							l = 0,
							u = 0,
							c = e - 1,
							f = [],
							h = [];
						for (n in t) p(t[n], s, e);
						for (r = s.length, i = 0; r > i; i++) l += Math.sqrt(s[i]), o = i % e, h[o] = l, o === c && (u += l, o = i / e >> 0, f[o] = h, a[o] = u, l = 0, h = []);
						return {
							length: u,
							lengths: a,
							segments: f
						}
					},
					g = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.4",
						API: 2,
						global: !0,
						init: function (t, e, n) {
							this._target = t, e instanceof Array && (e = {
								values: e
							}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
							var i, r, o, s, a, l = e.values || [],
								u = {},
								c = l[0],
								p = e.autoRotate || n.vars.orientToBezier;
							this._autoRotate = p ? p instanceof Array ? p : [
								["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
							] : null;
							for (i in c) this._props.push(i);
							for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || u[i] !== l[0][i] && (a = u);
							if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : h(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
								var g = d(this._beziers, this._timeRes);
								this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if (p = this._autoRotate)
								for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
									for (s = 0; 3 > s; s++) i = p[o][s], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
									i = p[o][2], this._initialRotations[o] = this._func[i] ? this._func[i].call(this._target) : this._target[i]
								}
							return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
						},
						set: function (e) {
							var n, i, r, o, s, a, l, u, c, f, h = this._segCount,
								p = this._func,
								d = this._target,
								g = e !== this._startRatio;
							if (this._timeRes) {
								if (c = this._lengths, f = this._curSeg, e *= this._length, r = this._li, e > this._l2 && h - 1 > r) {
									for (u = h - 1; u > r && (this._l2 = c[++r]) <= e;);
									this._l1 = c[r - 1], this._li = r, this._curSeg = f = this._segments[r], this._s2 = f[this._s1 = this._si = 0]
								} else if (e < this._l1 && r > 0) {
									for (; r > 0 && (this._l1 = c[--r]) >= e;);
									0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = f = this._segments[r], this._s1 = f[(this._si = f.length - 1) - 1] || 0, this._s2 = f[this._si]
								}
								if (n = r, e -= this._l1, r = this._si, e > this._s2 && r < f.length - 1) {
									for (u = f.length - 1; u > r && (this._s2 = f[++r]) <= e;);
									this._s1 = f[r - 1], this._si = r
								} else if (e < this._s1 && r > 0) {
									for (; r > 0 && (this._s1 = f[--r]) >= e;);
									0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = f[r], this._si = r
								}
								a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
							} else n = 0 > e ? 0 : e >= 1 ? h - 1 : h * e >> 0, a = (e - n * (1 / h)) * h;
							for (i = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][n], l = (a * a * s.da + 3 * i * (a * s.ca + i * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), p[o] ? d[o](l) : d[o] = l;
							if (this._autoRotate) {
								var m, v, y, b, w, x, _, $ = this._autoRotate;
								for (r = $.length; --r > -1;) o = $[r][2], x = $[r][3] || 0, _ = $[r][4] === !0 ? 1 : t, s = this._beziers[$[r][0]], m = this._beziers[$[r][1]], s && m && (s = s[n], m = m[n], v = s.a + (s.b - s.a) * a, b = s.b + (s.c - s.b) * a, v += (b - v) * a, b += (s.c + (s.d - s.c) * a - b) * a, y = m.a + (m.b - m.a) * a, w = m.b + (m.c - m.b) * a, y += (w - y) * a, w += (m.c + (m.d - m.c) * a - w) * a, l = g ? Math.atan2(w - y, b - v) * _ + x : this._initialRotations[r], p[o] ? d[o](l) : d[o] = l)
							}
						}
					}),
					m = g.prototype;
				g.bezierThrough = f, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function (t, e, n) {
					return new s(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
				}, g._cssRegister = function () {
					var t = o.CSSPlugin;
					if (t) {
						var e = t._internals,
							n = e._parseToProxy,
							i = e._setPluginRatio,
							r = e.CSSPropTween;
						e._registerComplexSpecialProp("bezier", {
							parser: function (t, e, o, s, a, l) {
								e instanceof Array && (e = {
									values: e
								}), l = new g;
								var u, c, f, h = e.values,
									p = h.length - 1,
									d = [],
									m = {};
								if (0 > p) return a;
								for (u = 0; p >= u; u++) f = n(t, h[u], s, a, l, p !== u), d[u] = f.end;
								for (c in e) m[c] = e[c];
								return m.values = d, a = new r(t, "bezier", 0, 0, f.pt, 2), a.data = f, a.plugin = l, a.setRatio = i, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (u = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != f.end.left ? [
									["left", "top", "rotation", u, !1]
								] : null != f.end.x && [
									["x", "y", "rotation", u, !1]
								]), m.autoRotate && (s._transform || s._enableTransforms(!1), f.autoRotate = s._target._gsTransform), l._onInitTween(f.proxy, m, s._tween), a
							}
						})
					}
				}, m._roundProps = function (t, e) {
					for (var n = this._overwriteProps, i = n.length; --i > -1;)(t[n[i]] || t.bezier || t.bezierThrough) && (this._round[n[i]] = e)
				}, m._kill = function (t) {
					var e, n, i = this._props;
					for (e in this._beziers)
						if (e in t)
							for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
					return this._super._kill.call(this, t)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
				var n, i, r, o, s = function () {
						t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
					},
					a = _gsScope._gsDefine.globals,
					l = {},
					u = s.prototype = new t("css");
				u.constructor = s, s.version = "1.18.2", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
					top: u,
					right: u,
					bottom: u,
					left: u,
					width: u,
					height: u,
					fontSize: u,
					padding: u,
					margin: u,
					perspective: u,
					lineHeight: ""
				};
				var c, f, h, p, d, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
					v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					w = /(?:\d|\-|\+|=|#|\.)*/g,
					x = /opacity *= *([^)]*)/i,
					_ = /opacity:([^;]*)/i,
					$ = /alpha\(opacity *=.+?\)/i,
					T = /^(rgb|hsl)/,
					S = /([A-Z])/g,
					C = /-([a-z])/gi,
					k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					E = function (t, e) {
						return e.toUpperCase()
					},
					A = /(?:Left|Right|Width)/i,
					O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					M = /,(?=[^\)]*(?:\(|$))/gi,
					N = Math.PI / 180,
					D = 180 / Math.PI,
					R = {},
					L = document,
					I = function (t) {
						return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t)
					},
					j = I("div"),
					F = I("img"),
					z = s._internals = {
						_specialProps: l
					},
					q = navigator.userAgent,
					B = function () {
						var t = q.indexOf("Android"),
							e = I("a");
						return h = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), d = h && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, p = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
					}(),
					H = function (t) {
						return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					V = function (t) {
						window.console && console.log(t)
					},
					W = "",
					U = "",
					X = function (t, e) {
						e = e || j;
						var n, i, r = e.style;
						if (void 0 !== r[t]) return t;
						for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
						return i >= 0 ? (U = 3 === i ? "ms" : n[i], W = "-" + U.toLowerCase() + "-", U + t) : null
					},
					Y = L.defaultView ? L.defaultView.getComputedStyle : function () {},
					G = s.getStyle = function (t, e, n, i, r) {
						var o;
						return B || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || Y(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : H(t)
					},
					Q = z.convertToPixels = function (t, n, i, r, o) {
						if ("px" === r || !r) return i;
						if ("auto" === r || !i) return 0;
						var a, l, u, c = A.test(n),
							f = t,
							h = j.style,
							p = 0 > i;
						if (p && (i = -i), "%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? t.clientWidth : t.clientHeight);
						else {
							if (h.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && f.appendChild && "v" !== r.charAt(0) && "rem" !== r) h[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
							else {
								if (f = t.parentNode || L.body, l = f._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * i / 100;
								h[c ? "width" : "height"] = i + r
							}
							f.appendChild(j), a = parseFloat(j[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(j), c && "%" === r && s.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = u, l.width = a / i * 100), 0 !== a || o || (a = Q(t, n, i, r, !0))
						}
						return p ? -a : a
					},
					K = z.calculateOffset = function (t, e, n) {
						if ("absolute" !== G(t, "position", n)) return 0;
						var i = "left" === e ? "Left" : "Top",
							r = G(t, "margin" + i, n);
						return t["offset" + i] - (Q(t, e, parseFloat(r), r.replace(w, "")) || 0)
					},
					Z = function (t, e) {
						var n, i, r, o = {};
						if (e = e || Y(t, null))
							if (n = e.length)
								for (; --n > -1;) r = e[n], (-1 === r.indexOf("-transform") || St === r) && (o[r.replace(C, E)] = e.getPropertyValue(r));
							else
								for (n in e)(-1 === n.indexOf("Transform") || Tt === n) && (o[n] = e[n]);
						else if (e = t.currentStyle || t.style)
							for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(C, E)] = e[n]);
						return B || (o.opacity = H(t)), i = It(t, e, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, kt && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
					},
					J = function (t, e, n, i, r) {
						var o, s, a, l = {},
							u = t.style;
						for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(b, "") ? o : 0 : K(t, s), void 0 !== u[s] && (a = new dt(u, s, u[s], a)));
						if (i)
							for (s in i) "className" !== s && (l[s] = i[s]);
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
					nt = function (t, e, n) {
						var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
							r = tt[e],
							o = r.length;
						for (n = n || Y(t, null); --o > -1;) i -= parseFloat(G(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(G(t, "border" + r[o] + "Width", n, !0)) || 0;
						return i
					},
					it = function (t, e) {
						if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
						(null == t || "" === t) && (t = "0 0");
						var n = t.split(" "),
							i = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
							r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
						return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), t = i + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== i.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === i.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(i.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
					},
					rt = function (t, e) {
						return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
					},
					ot = function (t, e) {
						return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
					},
					st = function (t, e, n, i) {
						var r, o, s, a, l, u = 1e-6;
						return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), o.length && (i && (i[n] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), u > a && a > -u && (a = 0), a
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
					lt = function (t, e, n) {
						return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
					},
					ut = s.parseColor = function (t, e) {
						var n, i, r, o, s, a, l, u, c, f, h;
						if (t)
							if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
							else {
								if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) n = at[t];
								else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + i + i + r + r + o + o), t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & 255, 255 & t];
								else if ("hsl" === t.substr(0, 3))
									if (n = h = t.match(m), e) {
										if (-1 !== t.indexOf("=")) return t.match(v)
									} else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, l = Number(n[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, i = 2 * l - r, n.length > 3 && (n[3] = Number(t[3])), n[0] = lt(s + 1 / 3, i, r), n[1] = lt(s, i, r), n[2] = lt(s - 1 / 3, i, r);
								else n = t.match(m) || at.transparent;
								n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
							}
						else n = at.black;
						return e && !h && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, u = Math.max(i, r, o), c = Math.min(i, r, o), l = (u + c) / 2, u === c ? s = a = 0 : (f = u - c, a = l > .5 ? f / (2 - u - c) : f / (u + c), s = u === i ? (r - o) / f + (o > r ? 6 : 0) : u === r ? (o - i) / f + 2 : (i - r) / f + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
					},
					ct = function (t, e) {
						var n, i, r, o = t.match(ft) || [],
							s = 0,
							a = o.length ? "" : t;
						for (n = 0; n < o.length; n++) i = o[n], r = t.substr(s, t.indexOf(i, s) - s), s += r.length + i.length, i = ut(i, e), 3 === i.length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
						return a
					},
					ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (u in at) ft += "|" + u + "\\b";
				ft = new RegExp(ft + ")", "gi"), s.colorStringFilter = function (t) {
					var e, n = t[0] + t[1];
					ft.lastIndex = 0, ft.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
				}, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
				var ht = function (t, e, n, i) {
						if (null == t) return function (t) {
							return t
						};
						var r, o = e ? (t.match(ft) || [""])[0] : "",
							s = t.split(o).join("").match(y) || [],
							a = t.substr(0, t.indexOf(s[0])),
							l = ")" === t.charAt(t.length - 1) ? ")" : "",
							u = -1 !== t.indexOf(" ") ? " " : ",",
							c = s.length,
							f = c > 0 ? s[0].replace(m, "") : "";
						return c ? r = e ? function (t) {
							var e, h, p, d;
							if ("number" == typeof t) t += f;
							else if (i && M.test(t)) {
								for (d = t.replace(M, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
								return d.join(",")
							}
							if (e = (t.match(ft) || [o])[0], h = t.split(e).join("").match(y) || [], p = h.length, c > p--)
								for (; ++p < c;) h[p] = n ? h[(p - 1) / 2 | 0] : s[p];
							return a + h.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
						} : function (t) {
							var e, o, h;
							if ("number" == typeof t) t += f;
							else if (i && M.test(t)) {
								for (o = t.replace(M, "|").split("|"), h = 0; h < o.length; h++) o[h] = r(o[h]);
								return o.join(",")
							}
							if (e = t.match(y) || [], h = e.length, c > h--)
								for (; ++h < c;) e[h] = n ? e[(h - 1) / 2 | 0] : s[h];
							return a + e.join(u) + l
						} : function (t) {
							return t
						}
					},
					pt = function (t) {
						return t = t.split(","),
							function (e, n, i, r, o, s, a) {
								var l, u = (n + "").split(" ");
								for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
								return r.parse(e, a, o, s)
							}
					},
					dt = (z._setPluginRatio = function (t) {
						this.plugin.setRatio(t);
						for (var e, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
						if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
							for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
								if (n = l.t, n.type) {
									if (1 === n.type) {
										for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
										n[o] = r
									}
								} else n[o] = n.s + n.xs0;
								l = l._next
							}
					}, function (t, e, n, i, r) {
						this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
					}),
					gt = (z._parseToProxy = function (t, e, n, i, r, o) {
						var s, a, l, u, c, f = i,
							h = {},
							p = {},
							d = n._transform,
							g = R;
						for (n._transform = null, R = e, i = c = n.parse(t, e, i, r), R = g, o && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
							if (i.type <= 1 && (a = i.p, p[a] = i.s + i.c, h[a] = i.s, o || (u = new dt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
								for (s = i.l; --s > 0;) l = "xn" + s, a = i.p + "_" + l, p[a] = i.data[l], h[a] = i[l], o || (u = new dt(i, l, a, u, i.rxp[l]));
							i = i._next
						}
						return {
							proxy: h,
							end: p,
							firstMPT: u,
							pt: c
						}
					}, z.CSSPropTween = function (t, e, i, r, s, a, l, u, c, f, h) {
						this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof gt || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === f ? i : f, this.e = void 0 === h ? i + r : h, s && (this._next = s, s._prev = this)
					}),
					mt = function (t, e, n, i, r, o) {
						var s = new gt(t, e, n, i - n, r, (-1), o);
						return s.b = n, s.e = s.xs0 = i, s
					},
					vt = s.parseComplex = function (t, e, n, i, r, o, s, a, l, u) {
						n = n || o || "", s = new gt(t, e, 0, 0, s, u ? 2 : 1, null, (!1), a, n, i), i += "";
						var f, h, p, d, g, y, b, w, x, _, $, T, S, C = n.split(", ").join(",").split(" "),
							k = i.split(", ").join(",").split(" "),
							E = C.length,
							A = c !== !1;
						for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), E = C.length), E !== k.length && (C = (o || "").split(" "), E = C.length), s.plugin = l, s.setRatio = u, ft.lastIndex = 0, f = 0; E > f; f++)
							if (d = C[f], g = k[f], w = parseFloat(d), w || 0 === w) s.appendXtra("", w, rt(g, w), g.replace(v, ""), A && -1 !== g.indexOf("px"), !0);
							else if (r && ft.test(d)) T = "," === g.charAt(g.length - 1) ? ")," : ")", S = -1 !== g.indexOf("hsl") && B, d = ut(d, S), g = ut(g, S), x = d.length + g.length > 6, x && !B && 0 === g[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(k[f]).join("transparent")) : (B || (x = !1), S ? s.appendXtra(x ? "hsla(" : "hsl(", d[0], rt(g[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(g[1], d[1]), "%,", !1).appendXtra("", d[2], rt(g[2], d[2]), x ? "%," : "%" + T, !1) : s.appendXtra(x ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], x ? "," : T, !0), x && (d = d.length < 4 ? 1 : d[3], s.appendXtra("", d, (g.length < 4 ? 1 : g[3]) - d, T, !1))), ft.lastIndex = 0;
						else if (y = d.match(m)) {
							if (b = g.match(v), !b || b.length !== y.length) return s;
							for (p = 0, h = 0; h < y.length; h++) $ = y[h], _ = d.indexOf($, p), s.appendXtra(d.substr(p, _ - p), Number($), rt(b[h], $), "", A && "px" === d.substr(_ + $.length, 2), 0 === h), p = _ + $.length;
							s["xs" + s.l] += d.substr(p)
						} else s["xs" + s.l] += s.l ? " " + g : g;
						if (-1 !== i.indexOf("=") && s.data) {
							for (T = s.xs0 + s.data.s, f = 1; f < s.l; f++) T += s["xs" + f] + s.data["xn" + f];
							s.e = T + s["xs" + f]
						}
						return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
					},
					yt = 9;
				for (u = gt.prototype, u.l = u.pr = 0; --yt > 0;) u["xn" + yt] = 0, u["xs" + yt] = "";
				u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, n, i, r, o) {
					var s = this,
						a = s.l;
					return s["xs" + a] += o && a ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new gt(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
						s: e + n
					}, s.rxp = {}, s.s = e, s.c = n, s.r = r, s)) : (s["xs" + a] += e + (i || ""), s)
				};
				var bt = function (t, e) {
						e = e || {}, this.p = e.prefix ? X(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
					},
					wt = z._registerComplexSpecialProp = function (t, e, n) {
						"object" != typeof e && (e = {
							parser: n
						});
						var i, r, o = t.split(","),
							s = e.defaultValue;
						for (n = n || [s], i = 0; i < o.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || s, r = new bt(o[i], e)
					},
					xt = function (t) {
						if (!l[t]) {
							var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
							wt(t, {
								parser: function (t, n, i, r, o, s, u) {
									var c = a.com.greensock.plugins[e];
									return c ? (c._cssRegister(), l[i].parse(t, n, i, r, o, s, u)) : (V("Error: " + e + " js file not loaded."), o)
								}
							})
						}
					};
				u = bt.prototype, u.parseComplex = function (t, e, n, i, r, o) {
					var s, a, l, u, c, f, h = this.keyword;
					if (this.multi && (M.test(n) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = n.replace(M, "|").split("|")) : h && (a = [e], l = [n])), l) {
						for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) e = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, h && (c = e.indexOf(h), f = n.indexOf(h), c !== f && (-1 === f ? a[s] = a[s].split(h).join("") : -1 === c && (a[s] += " " + h)));
						e = a.join(", "), n = l.join(", ")
					}
					return vt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
				}, u.parse = function (t, e, n, i, o, s, a) {
					return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
				}, s.registerSpecialProp = function (t, e, n) {
					wt(t, {
						parser: function (t, i, r, o, s, a, l) {
							var u = new gt(t, r, 0, 0, s, 2, r, (!1), n);
							return u.plugin = a, u.setRatio = e(t, i, o._tween, r), u
						},
						priority: n
					})
				}, s.useSVGTransformAttr = h || p;
				var _t, $t = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					Tt = X("transform"),
					St = W + "transform",
					Ct = X("transformOrigin"),
					kt = null !== X("perspective"),
					Et = z.Transform = function () {
						this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !kt) && (s.defaultForce3D || "auto")
					},
					At = window.SVGElement,
					Ot = function (t, e, n) {
						var i, r = L.createElementNS("http://www.w3.org/2000/svg", t),
							o = /([a-z])([A-Z])/g;
						for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
						return e.appendChild(r), r
					},
					Pt = L.documentElement,
					Mt = function () {
						var t, e, n, i = g || /Android/i.test(q) && !window.chrome;
						return L.createElementNS && !i && (t = Ot("svg", Pt), e = Ot("rect", t, {
							width: 100,
							height: 50,
							x: 100
						}), n = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Tt] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(p && kt), Pt.removeChild(t)), i
					}(),
					Nt = function (t, e, n, i, r) {
						var o, a, l, u, c, f, h, p, d, g, m, v, y, b, w = t._gsTransform,
							x = Lt(t, !0);
						w && (y = w.xOrigin, b = w.yOrigin), (!i || (o = i.split(" ")).length < 2) && (h = t.getBBox(), e = it(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), n.xOrigin = u = parseFloat(o[0]), n.yOrigin = c = parseFloat(o[1]), i && x !== Rt && (f = x[0], h = x[1], p = x[2], d = x[3], g = x[4], m = x[5], v = f * d - h * p, a = u * (d / v) + c * (-p / v) + (p * m - d * g) / v, l = u * (-h / v) + c * (f / v) - (f * m - h * g) / v, u = n.xOrigin = o[0] = a, c = n.yOrigin = o[1] = l), w && (r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (a = u - y, l = c - b, w.xOffset += a * x[0] + l * x[2] - a, w.yOffset += a * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), t.setAttribute("data-svg-origin", o.join(" "))
					},
					Dt = function (t) {
						return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
					},
					Rt = [1, 0, 0, 1, 0, 0],
					Lt = function (t, e) {
						var n, i, r, o, s, a = t._gsTransform || new Et,
							l = 1e5;
						if (Tt ? i = G(t, St, null, !0) : t.currentStyle && (i = t.currentStyle.filter.match(O), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, (a.svg || t.getBBox && Dt(t)) && (n && -1 !== (t.style[Tt] + "").indexOf("matrix") && (i = t.style[Tt], n = 0), r = t.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Rt;
						for (r = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], yt = r.length; --yt > -1;) o = Number(r[yt]), r[yt] = (s = o - (o |= 0)) ? (s * l + (0 > s ? -.5 : .5) | 0) / l + o : o;
						return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
					},
					It = z.getTransform = function (t, n, i, o) {
						if (t._gsTransform && i && !o) return t._gsTransform;
						var a, l, u, c, f, h, p = i ? t._gsTransform || new Et : new Et,
							d = p.scaleX < 0,
							g = 2e-5,
							m = 1e5,
							v = kt ? parseFloat(G(t, Ct, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
							y = parseFloat(s.defaultTransformPerspective) || 0;
						if (p.svg = !(!t.getBBox || !Dt(t)), p.svg && (Nt(t, G(t, Ct, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), _t = s.useSVGTransformAttr || Mt), a = Lt(t), a !== Rt) {
							if (16 === a.length) {
								var b, w, x, _, $, T = a[0],
									S = a[1],
									C = a[2],
									k = a[3],
									E = a[4],
									A = a[5],
									O = a[6],
									P = a[7],
									M = a[8],
									N = a[9],
									R = a[10],
									L = a[12],
									I = a[13],
									j = a[14],
									F = a[11],
									z = Math.atan2(O, R);
								p.zOrigin && (j = -p.zOrigin, L = M * j - a[12], I = N * j - a[13], j = R * j + p.zOrigin - a[14]), p.rotationX = z * D, z && (_ = Math.cos(-z), $ = Math.sin(-z), b = E * _ + M * $, w = A * _ + N * $, x = O * _ + R * $, M = E * -$ + M * _, N = A * -$ + N * _, R = O * -$ + R * _, F = P * -$ + F * _, E = b, A = w, O = x), z = Math.atan2(-C, R), p.rotationY = z * D, z && (_ = Math.cos(-z), $ = Math.sin(-z), b = T * _ - M * $, w = S * _ - N * $, x = C * _ - R * $, N = S * $ + N * _, R = C * $ + R * _, F = k * $ + F * _, T = b, S = w, C = x), z = Math.atan2(S, T), p.rotation = z * D, z && (_ = Math.cos(-z), $ = Math.sin(-z), T = T * _ + E * $, w = S * _ + A * $, A = S * -$ + A * _, O = C * -$ + O * _, S = w), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(T * T + S * S) * m + .5 | 0) / m, p.scaleY = (Math.sqrt(A * A + N * N) * m + .5 | 0) / m, p.scaleZ = (Math.sqrt(O * O + R * R) * m + .5 | 0) / m, p.skewX = 0, p.perspective = F ? 1 / (0 > F ? -F : F) : 0, p.x = L, p.y = I, p.z = j, p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * E), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * A))
							} else if ((!kt || o || !a.length || p.x !== a[4] || p.y !== a[5] || !p.rotationX && !p.rotationY) && (void 0 === p.x || "none" !== G(t, "display", n))) {
								var q = a.length >= 6,
									B = q ? a[0] : 1,
									H = a[1] || 0,
									V = a[2] || 0,
									W = q ? a[3] : 1;
								p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(B * B + H * H), c = Math.sqrt(W * W + V * V), f = B || H ? Math.atan2(H, B) * D : p.rotation || 0, h = V || W ? Math.atan2(V, W) * D + f : p.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (d ? (u *= -1, h += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, h += 0 >= h ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = f, p.skewX = h, kt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = y, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * V), p.y -= p.yOrigin - (p.xOrigin * H + p.yOrigin * W))
							}
							p.zOrigin = v;
							for (l in p) p[l] < g && p[l] > -g && (p[l] = 0)
						}
						return i && (t._gsTransform = p, p.svg && (_t && t.style[Tt] ? e.delayedCall(.001, function () {
							qt(t.style, Tt)
						}) : !_t && t.getAttribute("transform") && e.delayedCall(.001, function () {
							t.removeAttribute("transform")
						}))), p
					},
					jt = function (t) {
						var e, n, i = this.data,
							r = -i.rotation * N,
							o = r + i.skewX * N,
							s = 1e5,
							a = (Math.cos(r) * i.scaleX * s | 0) / s,
							l = (Math.sin(r) * i.scaleX * s | 0) / s,
							u = (Math.sin(o) * -i.scaleY * s | 0) / s,
							c = (Math.cos(o) * i.scaleY * s | 0) / s,
							f = this.t.style,
							h = this.t.currentStyle;
						if (h) {
							n = l, l = -u, u = -n, e = h.filter, f.filter = "";
							var p, d, m = this.t.offsetWidth,
								v = this.t.offsetHeight,
								y = "absolute" !== h.position,
								b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
								_ = i.x + m * i.xPercent / 100,
								$ = i.y + v * i.yPercent / 100;
							if (null != i.ox && (p = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2, d = (i.oyp ? v * i.oy * .01 : i.oy) - v / 2, _ += p - (p * a + d * l), $ += d - (p * u + d * c)), y ? (p = m / 2, d = v / 2, b += ", Dx=" + (p - (p * a + d * l) + _) + ", Dy=" + (d - (p * u + d * c) + $) + ")") : b += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = e.replace(P, b) : f.filter = b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && f.removeAttribute("filter")), !y) {
								var T, S, C, k = 8 > g ? 1 : -1;
								for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + _), i.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * m)) / 2 + $), yt = 0; 4 > yt; yt++) S = et[yt], T = h[S], n = -1 !== T.indexOf("px") ? parseFloat(T) : Q(this.t, S, parseFloat(T), T.replace(w, "")) || 0, C = n !== i[S] ? 2 > yt ? -i.ieOffsetX : -i.ieOffsetY : 2 > yt ? p - i.ieOffsetX : d - i.ieOffsetY, f[S] = (i[S] = Math.round(n - C * (0 === yt || 2 === yt ? 1 : k))) + "px"
							}
						}
					},
					Ft = z.set3DTransformRatio = z.setTransformRatio = function (t) {
						var e, n, i, r, o, s, a, l, u, c, f, h, d, g, m, v, y, b, w, x, _, $, T, S = this.data,
							C = this.t.style,
							k = S.rotation,
							E = S.rotationX,
							A = S.rotationY,
							O = S.scaleX,
							P = S.scaleY,
							M = S.scaleZ,
							D = S.x,
							R = S.y,
							L = S.z,
							I = S.svg,
							j = S.perspective,
							F = S.force3D;
						if (((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !L && !j && !A && !E && 1 === M || _t && I || !kt) return void(k || S.skewX || I ? (k *= N, $ = S.skewX * N, T = 1e5, e = Math.cos(k) * O, r = Math.sin(k) * O, n = Math.sin(k - $) * -P, o = Math.cos(k - $) * P, $ && "simple" === S.skewType && (y = Math.tan($), y = Math.sqrt(1 + y * y), n *= y, o *= y, S.skewY && (e *= y, r *= y)), I && (D += S.xOrigin - (S.xOrigin * e + S.yOrigin * n) + S.xOffset, R += S.yOrigin - (S.xOrigin * r + S.yOrigin * o) + S.yOffset, _t && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), D += .01 * S.xPercent * g.width, R += .01 * S.yPercent * g.height), g = 1e-6, g > D && D > -g && (D = 0), g > R && R > -g && (R = 0)), w = (e * T | 0) / T + "," + (r * T | 0) / T + "," + (n * T | 0) / T + "," + (o * T | 0) / T + "," + D + "," + R + ")", I && _t ? this.t.setAttribute("transform", "matrix(" + w) : C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + P + "," + D + "," + R + ")");
						if (p && (g = 1e-4, g > O && O > -g && (O = M = 2e-5), g > P && P > -g && (P = M = 2e-5), !j || S.z || S.rotationX || S.rotationY || (j = 0)), k || S.skewX) k *= N, m = e = Math.cos(k), v = r = Math.sin(k), S.skewX && (k -= S.skewX * N, m = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (y = Math.tan(S.skewX * N), y = Math.sqrt(1 + y * y), m *= y, v *= y, S.skewY && (e *= y, r *= y))), n = -v, o = m;
						else {
							if (!(A || E || 1 !== M || j || I)) return void(C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + L + "px)" + (1 !== O || 1 !== P ? " scale(" + O + "," + P + ")" : ""));
							e = o = 1, n = r = 0
						}
						u = 1, i = s = a = l = c = f = 0, h = j ? -1 / j : 0, d = S.zOrigin, g = 1e-6, x = ",", _ = "0", k = A * N, k && (m = Math.cos(k), v = Math.sin(k), a = -v, c = h * -v, i = e * v, s = r * v, u = m, h *= m, e *= m, r *= m), k = E * N, k && (m = Math.cos(k), v = Math.sin(k), y = n * m + i * v, b = o * m + s * v, l = u * v, f = h * v, i = n * -v + i * m, s = o * -v + s * m, u *= m, h *= m, n = y, o = b), 1 !== M && (i *= M, s *= M, u *= M, h *= M), 1 !== P && (n *= P, o *= P, l *= P, f *= P), 1 !== O && (e *= O, r *= O, a *= O, c *= O), (d || I) && (d && (D += i * -d, R += s * -d, L += u * -d + d), I && (D += S.xOrigin - (S.xOrigin * e + S.yOrigin * n) + S.xOffset, R += S.yOrigin - (S.xOrigin * r + S.yOrigin * o) + S.yOffset), g > D && D > -g && (D = _), g > R && R > -g && (R = _), g > L && L > -g && (L = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > e && e > -g ? _ : e) + x + (g > r && r > -g ? _ : r) + x + (g > a && a > -g ? _ : a), w += x + (g > c && c > -g ? _ : c) + x + (g > n && n > -g ? _ : n) + x + (g > o && o > -g ? _ : o), E || A || 1 !== M ? (w += x + (g > l && l > -g ? _ : l) + x + (g > f && f > -g ? _ : f) + x + (g > i && i > -g ? _ : i), w += x + (g > s && s > -g ? _ : s) + x + (g > u && u > -g ? _ : u) + x + (g > h && h > -g ? _ : h) + x) : w += ",0,0,0,0,1,0,", w += D + x + R + x + L + x + (j ? 1 + -L / j : 1) + ")", C[Tt] = w
					};
				u = Et.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
					parser: function (t, e, n, i, o, a, l) {
						if (i._lastParsedTransform === l) return o;
						i._lastParsedTransform = l;
						var u, c, f, h, p, d, g, m, v, y, b = t._gsTransform,
							w = t.style,
							x = 1e-6,
							_ = $t.length,
							$ = l,
							T = {},
							S = "transformOrigin";
						if (l.display ? (h = G(t, "display"), w.display = "block", u = It(t, r, !0, l.parseTransform), w.display = h) : u = It(t, r, !0, l.parseTransform), i._transform = u, "string" == typeof $.transform && Tt) h = j.style, h[Tt] = $.transform, h.display = "block", h.position = "absolute", L.body.appendChild(j), c = It(j, null, !1), L.body.removeChild(j), c.perspective || (c.perspective = u.perspective), null != $.xPercent && (c.xPercent = ot($.xPercent, u.xPercent)), null != $.yPercent && (c.yPercent = ot($.yPercent, u.yPercent));
						else if ("object" == typeof $) {
							if (c = {
									scaleX: ot(null != $.scaleX ? $.scaleX : $.scale, u.scaleX),
									scaleY: ot(null != $.scaleY ? $.scaleY : $.scale, u.scaleY),
									scaleZ: ot($.scaleZ, u.scaleZ),
									x: ot($.x, u.x),
									y: ot($.y, u.y),
									z: ot($.z, u.z),
									xPercent: ot($.xPercent, u.xPercent),
									yPercent: ot($.yPercent, u.yPercent),
									perspective: ot($.transformPerspective, u.perspective)
								}, m = $.directionalRotation, null != m)
								if ("object" == typeof m)
									for (h in m) $[h] = m[h];
								else $.rotation = m;
							"string" == typeof $.x && -1 !== $.x.indexOf("%") && (c.x = 0, c.xPercent = ot($.x, u.xPercent)), "string" == typeof $.y && -1 !== $.y.indexOf("%") && (c.y = 0, c.yPercent = ot($.y, u.yPercent)), c.rotation = st("rotation" in $ ? $.rotation : "shortRotation" in $ ? $.shortRotation + "_short" : "rotationZ" in $ ? $.rotationZ : u.rotation, u.rotation, "rotation", T), kt && (c.rotationX = st("rotationX" in $ ? $.rotationX : "shortRotationX" in $ ? $.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", T), c.rotationY = st("rotationY" in $ ? $.rotationY : "shortRotationY" in $ ? $.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", T)), c.skewX = null == $.skewX ? u.skewX : st($.skewX, u.skewX), c.skewY = null == $.skewY ? u.skewY : st($.skewY, u.skewY), (f = c.skewY - u.skewY) && (c.skewX += f, c.rotation += f)
						}
						for (kt && null != $.force3D && (u.force3D = $.force3D, g = !0), u.skewType = $.skewType || u.skewType || s.defaultSkewType, d = u.force3D || u.z || u.rotationX || u.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == $.scale || (c.scaleZ = 1); --_ > -1;) n = $t[_], p = c[n] - u[n], (p > x || -x > p || null != $[n] || null != R[n]) && (g = !0, o = new gt(u, n, u[n], p, o), n in T && (o.e = T[n]), o.xs0 = 0, o.plugin = a, i._overwriteProps.push(o.n));
						return p = $.transformOrigin, u.svg && (p || $.svgOrigin) && (v = u.xOffset, y = u.yOffset, Nt(t, it(p), c, $.svgOrigin, $.smoothOrigin), o = mt(u, "xOrigin", (b ? u : c).xOrigin, c.xOrigin, o, S), o = mt(u, "yOrigin", (b ? u : c).yOrigin, c.yOrigin, o, S), (v !== u.xOffset || y !== u.yOffset) && (o = mt(u, "xOffset", b ? v : u.xOffset, u.xOffset, o, S), o = mt(u, "yOffset", b ? y : u.yOffset, u.yOffset, o, S)), p = _t ? null : "0px 0px"), (p || kt && d && u.zOrigin) && (Tt ? (g = !0, n = Ct, p = (p || G(t, n, r, !1, "50% 50%")) + "", o = new gt(w, n, 0, 0, o, (-1), S), o.b = w[n], o.plugin = a, kt ? (h = u.zOrigin, p = p.split(" "), u.zOrigin = (p.length > 2 && (0 === h || "0px" !== p[2]) ? parseFloat(p[2]) : h) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new gt(u, "zOrigin", 0, 0, o, (-1), o.n), o.b = h, o.xs0 = o.e = u.zOrigin) : o.xs0 = o.e = p) : it(p + "", u)), g && (i._transformType = u.svg && _t || !d && 3 !== this._transformType ? 2 : 3), o
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
					parser: function (t, e, n, o, s, a) {
						e = this.format(e);
						var l, u, c, f, h, p, d, g, m, v, y, b, w, x, _, $, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							S = t.style;
						for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < T.length; u++) this.p.indexOf("border") && (T[u] = X(T[u])), h = f = G(t, T[u], r, !1, "0px"), -1 !== h.indexOf(" ") && (f = h.split(" "), h = f[0], f = f[1]), p = c = l[u], d = parseFloat(h), b = h.substr((d + "").length), w = "=" === p.charAt(1), w ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), y = p.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(p), y = p.substr((g + "").length)), "" === y && (y = i[n] || b), y !== b && (x = Q(t, "borderLeft", d, b), _ = Q(t, "borderTop", d, b), "%" === y ? (h = x / m * 100 + "%", f = _ / v * 100 + "%") : "em" === y ? ($ = Q(t, "borderLeft", 1, "em"), h = x / $ + "em", f = _ / $ + "em") : (h = x + "px", f = _ + "px"), w && (p = parseFloat(h) + g + y, c = parseFloat(f) + g + y)), s = vt(S, T[u], h + " " + f, p + " " + c, !1, "0px", s);
						return s
					},
					prefix: !0,
					formatter: ht("0px 0px 0px 0px", !1, !0)
				}), wt("backgroundPosition", {
					defaultValue: "0 0",
					parser: function (t, e, n, i, o, s) {
						var a, l, u, c, f, h, p = "background-position",
							d = r || Y(t, null),
							m = this.format((d ? g ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
							v = this.format(e);
						if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (h = G(t, "backgroundImage").replace(k, ""), h && "none" !== h)) {
							for (a = m.split(" "), l = v.split(" "), F.setAttribute("src", h), u = 2; --u > -1;) m = a[u], c = -1 !== m.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (f = 0 === u ? t.offsetWidth - F.width : t.offsetHeight - F.height, a[u] = c ? parseFloat(m) / 100 * f + "px" : parseFloat(m) / f * 100 + "%");
							m = a.join(" ")
						}
						return this.parseComplex(t.style, m, v, o, s)
					},
					formatter: it
				}), wt("backgroundSize", {
					defaultValue: "0 0",
					formatter: it
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
					parser: pt("marginTop,marginRight,marginBottom,marginLeft")
				}), wt("padding", {
					parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), wt("clip", {
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function (t, e, n, i, o, s) {
						var a, l, u;
						return 9 > g ? (l = t.currentStyle, u = 8 > g ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
					}
				}), wt("textShadow", {
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), wt("autoRound,strictUnits", {
					parser: function (t, e, n, i, r) {
						return r
					}
				}), wt("border", {
					defaultValue: "0px solid #000",
					parser: function (t, e, n, i, o, s) {
						return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
					},
					color: !0,
					formatter: function (t) {
						var e = t.split(" ");
						return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0]
					}
				}), wt("borderWidth", {
					parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), wt("float,cssFloat,styleFloat", {
					parser: function (t, e, n, i, r, o) {
						var s = t.style,
							a = "cssFloat" in s ? "cssFloat" : "styleFloat";
						return new gt(s, a, 0, 0, r, (-1), n, (!1), 0, s[a], e)
					}
				});
				var zt = function (t) {
					var e, n = this.t,
						i = n.filter || G(this.data, "filter") || "",
						r = this.s + this.c * t | 0;
					100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !G(this.data, "filter")) : (n.filter = i.replace($, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(x, "opacity=" + r))
				};
				wt("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function (t, e, n, i, o, s) {
						var a = parseFloat(G(t, "opacity", r, !1, "1")),
							l = t.style,
							u = "autoAlpha" === n;
						return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), B ? o = new gt(l, "opacity", a, e - a, o) : (o = new gt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = zt), u && (o = new gt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
					}
				});
				var qt = function (t, e) {
						e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
					},
					Bt = function (t) {
						if (this.t._gsClassPT = this, 1 === t || 0 === t) {
							this.t.setAttribute("class", 0 === t ? this.b : this.e);
							for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : qt(n, e.p), e = e._next;
							1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				wt("className", {
					parser: function (t, e, i, o, s, a, l) {
						var u, c, f, h, p, d = t.getAttribute("class") || "",
							g = t.style.cssText;
						if (s = o._classNamePT = new gt(t, i, 0, 0, s, 2), s.setRatio = Bt, s.pr = -11, n = !0, s.b = d, c = Z(t, r), f = t._gsClassPT) {
							for (h = {}, p = f.data; p;) h[p.p] = 1, p = p._next;
							f.setRatio(1)
						}
						return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = J(t, c, Z(t), l, h), t.setAttribute("class", d), s.data = u.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, u.difs, s, a)
					}
				});
				var Ht = function (t) {
					if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var e, n, i, r, o, s = this.t.style,
							a = l.transform.parse;
						if ("all" === this.e) s.cssText = "", r = !0;
						else
							for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? Ct : l[n].p), qt(s, n);
						r && (qt(s, Tt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for (wt("clearProps", {
						parser: function (t, e, i, r, o) {
							return o = new gt(t, i, 0, 0, o, 2), o.setRatio = Ht, o.e = e, o.pr = -10, o.data = r._tween, n = !0, o
						}
					}), u = "bezier,throwProps,physicsProps,physics2D".split(","), yt = u.length; yt--;) xt(u[yt]);
				u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, a) {
					if (!t.nodeType) return !1;
					this._target = t, this._tween = a, this._vars = e, c = e.autoRound, n = !1, i = e.suffixMap || s.suffixMap, r = Y(t, ""), o = this._overwriteProps;
					var u, p, g, m, v, y, b, w, x, $ = t.style;
					if (f && "" === $.zIndex && (u = G(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet($, "zIndex", 0)), "string" == typeof e && (m = $.cssText, u = Z(t, r), $.cssText = m + ";" + e, u = J(t, u, Z(t)).difs, !B && _.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, $.cssText = m), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
						for (x = 3 === this._transformType, Tt ? h && (f = !0, "" === $.zIndex && (b = G(t, "zIndex", r), ("auto" === b || "" === b) && this._addLazySet($, "zIndex", 0)), d && this._addLazySet($, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : $.zoom = 1, g = p; g && g._next;) g = g._next;
						w = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, g), w.setRatio = Tt ? Ft : jt, w.data = this._transform || It(t, r, !0), w.tween = a, w.pr = -1, o.pop()
					}
					if (n) {
						for (; p;) {
							for (y = p._next, g = m; g && g.pr > p.pr;) g = g._next;
							(p._prev = g ? g._prev : v) ? p._prev._next = p: m = p, (p._next = g) ? g._prev = p : v = p, p = y
						}
						this._firstPT = m
					}
					return !0
				}, u.parse = function (t, e, n, o) {
					var s, a, u, f, h, p, d, g, m, v, y = t.style;
					for (s in e) p = e[s], a = l[s], a ? n = a.parse(t, p, s, this, n, o, e) : (h = G(t, s, r) + "", m = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && T.test(p) ? (m || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = vt(y, s, h, p, !0, "transparent", n, 0, o)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(h), d = u || 0 === u ? h.substr((u + "").length) : "", ("" === h || "auto" === h) && ("width" === s || "height" === s ? (u = nt(t, s, r), d = "px") : "left" === s || "top" === s ? (u = K(t, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), v = m && "=" === p.charAt(1), v ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.replace(w, "")) : (f = parseFloat(p), g = m ? p.replace(w, "") : ""), "" === g && (g = s in i ? i[s] : d), p = f || 0 === f ? (v ? f + u : f) + g : e[s], d !== g && "" !== g && (f || 0 === f) && u && (u = Q(t, s, u, d), "%" === g ? (u /= Q(t, s, 100, "%") / 100, e.strictUnits !== !0 && (h = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= Q(t, s, 1, g) : "px" !== g && (f = Q(t, s, f, g), g = "px"), v && (f || 0 === f) && (p = f + u + g)), v && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== y[s] && (p || p + "" != "NaN" && null != p) ? (n = new gt(y, s, f || u || 0, 0, n, (-1), s, (!1), 0, h, p), n.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : h) : V("invalid " + s + " tween value: " + e[s]) : (n = new gt(y, s, u, f - u, n, 0, s, c !== !1 && ("px" === g || "zIndex" === s), 0, h, p), n.xs0 = g)) : n = vt(y, s, h, p, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
					return n
				}, u.setRatio = function (t) {
					var e, n, i, r = this._firstPT,
						o = 1e-6;
					if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
							for (; r;) {
								if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
									if (1 === r.type)
										if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
										else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
								else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
								else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
								else {
									for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
									r.t[r.p] = n
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
												for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
												r.t[r.p] = n
											}
										} else r.t[r.p] = e + r.xs0;
								else r.t[r.p] = r.e;
								else r.setRatio(t);
								r = r._next
							}
				}, u._enableTransforms = function (t) {
					this._transform = this._transform || It(this._target, r, !0), this._transformType = this._transform.svg && _t || !t && 3 !== this._transformType ? 2 : 3
				};
				var Vt = function (t) {
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				u._addLazySet = function (t, e, n) {
					var i = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
					i.e = n, i.setRatio = Vt, i.data = this
				}, u._linkCSSP = function (t, e, n, i) {
					return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
				}, u._kill = function (e) {
					var n, i, r, o = e;
					if (e.autoAlpha || e.alpha) {
						o = {};
						for (i in e) o[i] = e[i];
						o.opacity = 1, o.autoAlpha && (o.visibility = 1)
					}
					return e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
				};
				var Wt = function (t, e, n) {
					var i, r, o, s;
					if (t.slice)
						for (r = t.length; --r > -1;) Wt(t[r], e, n);
					else
						for (i = t.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (e.push(Z(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Wt(o, e, n)
				};
				return s.cascadeTo = function (t, n, i) {
					var r, o, s, a, l = e.to(t, n, i),
						u = [l],
						c = [],
						f = [],
						h = [],
						p = e._internals.reservedProps;
					for (t = l._targets || l.target, Wt(t, c, h), l.render(n, !0, !0), Wt(t, f), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1;)
						if (o = J(h[r], c[r], f[r]), o.firstMPT) {
							o = o.difs;
							for (s in i) p[s] && (o[s] = i[s]);
							a = {};
							for (s in o) a[s] = c[r][s];
							u.push(e.fromTo(h[r], n, a, o))
						}
					return u
				}, t.activate([s]), s
			}, !0),
			function () {
				var t = _gsScope._gsDefine.plugin({
						propName: "roundProps",
						version: "1.5",
						priority: -1,
						API: 2,
						init: function (t, e, n) {
							return this._tween = n, !0
						}
					}),
					e = function (t) {
						for (; t;) t.f || t.blob || (t.r = 1), t = t._next
					},
					n = t.prototype;
				n._onInitAllProps = function () {
					for (var t, n, i, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = 1;
					for (s = o.length; --s > -1;)
						for (t = o[s], n = r._firstPT; n;) i = n._next, n.pg ? n.t._roundProps(a, !0) : n.n === t && (2 === n.f && n.t ? e(n.t._firstPT) : (this._add(n.t, t, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : r._firstPT === n && (r._firstPT = i), n._next = n._prev = null, r._propLookup[t] = l)), n = i;
					return !1
				}, n._add = function (t, e, n, i) {
					this._addTween(t, e, n, n + i, e, !0), this._overwriteProps.push(e)
				}
			}(),
			function () {
				_gsScope._gsDefine.plugin({
					propName: "attr",
					API: 2,
					version: "0.5.0",
					init: function (t, e, n) {
						var i;
						if ("function" != typeof t.setAttribute) return !1;
						for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
						return !0
					}
				})
			}(), _gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.2.1",
				API: 2,
				init: function (t, e, n) {
					"object" != typeof e && (e = {
						rotation: e
					}), this.finals = {};
					var i, r, o, s, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
						c = 1e-6;
					for (i in e) "useRadians" !== i && (l = (e[i] + "").split("_"), r = l[0], o = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = s - o, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > c || -c > a) && (this._addTween(t, i, o, o + a, i), this._overwriteProps.push(i)));
					return !0
				},
				set: function (t) {
					var e;
					if (1 !== t) this._super.setRatio.call(this, t);
					else
						for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
				}
			})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
				var e, n, i, r = _gsScope.GreenSockGlobals || _gsScope,
					o = r.com.greensock,
					s = 2 * Math.PI,
					a = Math.PI / 2,
					l = o._class,
					u = function (e, n) {
						var i = l("easing." + e, function () {}, !0),
							r = i.prototype = new t;
						return r.constructor = i, r.getRatio = n, i
					},
					c = t.register || function () {},
					f = function (t, e, n, i, r) {
						var o = l("easing." + t, {
							easeOut: new e,
							easeIn: new n,
							easeInOut: new i
						}, !0);
						return c(o, t), o
					},
					h = function (t, e, n) {
						this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
					},
					p = function (e, n) {
						var i = l("easing." + e, function (t) {
								this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							r = i.prototype = new t;
						return r.constructor = i, r.getRatio = n, r.config = function (t) {
							return new i(t)
						}, i
					},
					d = f("Back", p("BackOut", function (t) {
						return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
					}), p("BackIn", function (t) {
						return t * t * ((this._p1 + 1) * t - this._p1)
					}), p("BackInOut", function (t) {
						return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
					})),
					g = l("easing.SlowMo", function (t, e, n) {
						e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t,
							this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
					}, !0),
					m = g.prototype = new t;
				return m.constructor = g, m.getRatio = function (t) {
					var e = t + (.5 - t) * this._p;
					return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
				}, g.ease = new g(.7, .7), m.config = g.config = function (t, e, n) {
					return new g(t, e, n)
				}, e = l("easing.SteppedEase", function (t) {
					t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
				}, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
					return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
				}, m.config = e.config = function (t) {
					return new e(t)
				}, n = l("easing.RoughEase", function (e) {
					e = e || {};
					for (var n, i, r, o, s, a, l = e.taper || "none", u = [], c = 0, f = 0 | (e.points || 20), p = f, d = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) n = d ? Math.random() : 1 / f * p, i = m ? m.getRatio(n) : n, "none" === l ? r = v : "out" === l ? (o = 1 - n, r = o * o * v) : "in" === l ? r = n * n * v : .5 > n ? (o = 2 * n, r = o * o * .5 * v) : (o = 2 * (1 - n), r = o * o * .5 * v), d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, g && (i > 1 ? i = 1 : 0 > i && (i = 0)), u[c++] = {
						x: n,
						y: i
					};
					for (u.sort(function (t, e) {
							return t.x - e.x
						}), a = new h(1, 1, null), p = f; --p > -1;) s = u[p], a = new h(s.x, s.y, a);
					this._prev = new h(0, 0, 0 !== a.t ? a : a.next)
				}, !0), m = n.prototype = new t, m.constructor = n, m.getRatio = function (t) {
					var e = this._prev;
					if (t > e.t) {
						for (; e.next && t >= e.t;) e = e.next;
						e = e.prev
					} else
						for (; e.prev && t <= e.t;) e = e.prev;
					return this._prev = e, e.v + (t - e.t) / e.gap * e.c
				}, m.config = function (t) {
					return new n(t)
				}, n.ease = new n, f("Bounce", u("BounceOut", function (t) {
					return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
				}), u("BounceIn", function (t) {
					return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
				}), u("BounceInOut", function (t) {
					var e = .5 > t;
					return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
				})), f("Circ", u("CircOut", function (t) {
					return Math.sqrt(1 - (t -= 1) * t)
				}), u("CircIn", function (t) {
					return -(Math.sqrt(1 - t * t) - 1)
				}), u("CircInOut", function (t) {
					return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
				})), i = function (e, n, i) {
					var r = l("easing." + e, function (t, e) {
							this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
						}, !0),
						o = r.prototype = new t;
					return o.constructor = r, o.getRatio = n, o.config = function (t, e) {
						return new r(t, e)
					}, r
				}, f("Elastic", i("ElasticOut", function (t) {
					return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
				}, .3), i("ElasticIn", function (t) {
					return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
				}, .3), i("ElasticInOut", function (t) {
					return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
				}, .45)), f("Expo", u("ExpoOut", function (t) {
					return 1 - Math.pow(2, -10 * t)
				}), u("ExpoIn", function (t) {
					return Math.pow(2, 10 * (t - 1)) - .001
				}), u("ExpoInOut", function (t) {
					return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
				})), f("Sine", u("SineOut", function (t) {
					return Math.sin(t * a)
				}), u("SineIn", function (t) {
					return -Math.cos(t * a) + 1
				}), u("SineInOut", function (t) {
					return -.5 * (Math.cos(Math.PI * t) - 1)
				})), l("easing.EaseLookup", {
					find: function (e) {
						return t.map[e]
					}
				}, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t, e) {
		"use strict";
		var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
		if (!n.TweenLite) {
			var i, r, o, s, a, l = function (t) {
					var e, i = t.split("."),
						r = n;
					for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
					return r
				},
				u = l("com.greensock"),
				c = 1e-10,
				f = function (t) {
					var e, n = [],
						i = t.length;
					for (e = 0; e !== i; n.push(t[e++]));
					return n
				},
				h = function () {},
				p = function () {
					var t = Object.prototype.toString,
						e = t.call([]);
					return function (n) {
						return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
					}
				}(),
				d = {},
				g = function (i, r, o, s) {
					this.sc = d[i] ? d[i].sc : [], d[i] = this, this.gsClass = null, this.func = o;
					var a = [];
					this.check = function (u) {
						for (var c, f, h, p, m, v = r.length, y = v; --v > -1;)(c = d[r[v]] || new g(r[v], [])).gsClass ? (a[v] = c.gsClass, y--) : u && c.sc.push(this);
						if (0 === y && o)
							for (f = ("com.greensock." + i).split("."), h = f.pop(), p = l(f.join("."))[h] = this.gsClass = o.apply(o, a), s && (n[h] = p, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
									return p
								}) : i === e && m && (module.exports = p)), v = 0; v < this.sc.length; v++) this.sc[v].check()
					}, this.check(!0)
				},
				m = t._gsDefine = function (t, e, n, i) {
					return new g(t, e, n, i)
				},
				v = u._class = function (t, e, n) {
					return e = e || function () {}, m(t, [], function () {
						return e
					}, n), e
				};
			m.globals = n;
			var y = [0, 0, 1, 1],
				b = [],
				w = v("easing.Ease", function (t, e, n, i) {
					this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? y.concat(e) : y
				}, !0),
				x = w.map = {},
				_ = w.register = function (t, e, n, i) {
					for (var r, o, s, a, l = e.split(","), c = l.length, f = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
						for (o = l[c], r = i ? v("easing." + o, null, !0) : u.easing[o] || {}, s = f.length; --s > -1;) a = f[s], x[o + "." + a] = x[a + o] = r[a] = t.getRatio ? t : t[a] || new t
				};
			for (o = w.prototype, o._calcEnd = !1, o.getRatio = function (t) {
					if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
					var e = this._type,
						n = this._power,
						i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
					return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
				}, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = i.length; --r > -1;) o = i[r] + ",Power" + r, _(new w(null, null, 1, r), o, "easeOut", !0), _(new w(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), _(new w(null, null, 3, r), o, "easeInOut");
			x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
			var $ = v("events.EventDispatcher", function (t) {
				this._listeners = {}, this._eventTarget = t || this
			});
			o = $.prototype, o.addEventListener = function (t, e, n, i, r) {
				r = r || 0;
				var o, l, u = this._listeners[t],
					c = 0;
				for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) o = u[l], o.c === e && o.s === n ? u.splice(l, 1) : 0 === c && o.pr < r && (c = l + 1);
				u.splice(c, 0, {
					c: e,
					s: n,
					up: i,
					pr: r
				}), this !== s || a || s.wake()
			}, o.removeEventListener = function (t, e) {
				var n, i = this._listeners[t];
				if (i)
					for (n = i.length; --n > -1;)
						if (i[n].c === e) return void i.splice(n, 1)
			}, o.dispatchEvent = function (t) {
				var e, n, i, r = this._listeners[t];
				if (r)
					for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i && (i.up ? i.c.call(i.s || n, {
						type: t,
						target: n
					}) : i.c.call(i.s || n))
			};
			var T = t.requestAnimationFrame,
				S = t.cancelAnimationFrame,
				C = Date.now || function () {
					return (new Date).getTime()
				},
				k = C();
			for (i = ["ms", "moz", "webkit", "o"], r = i.length; --r > -1 && !T;) T = t[i[r] + "RequestAnimationFrame"], S = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
			v("Ticker", function (t, e) {
				var n, i, r, o, l, u = this,
					f = C(),
					p = !(e === !1 || !T) && "auto",
					d = 500,
					g = 33,
					m = "tick",
					v = function (t) {
						var e, s, a = C() - k;
						a > d && (f += a - g), k += a, u.time = (k - f) / 1e3, e = u.time - l, (!n || e > 0 || t === !0) && (u.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = i(v)), s && u.dispatchEvent(m)
					};
				$.call(u), u.time = u.frame = 0, u.tick = function () {
					v(!0)
				}, u.lagSmoothing = function (t, e) {
					d = t || 1 / c, g = Math.min(e, d, 0)
				}, u.sleep = function () {
					null != r && (p && S ? S(r) : clearTimeout(r), i = h, r = null, u === s && (a = !1))
				}, u.wake = function (t) {
					null !== r ? u.sleep() : t ? f += -k + (k = C()) : u.frame > 10 && (k = C() - d + 5), i = 0 === n ? h : p && T ? T : function (t) {
						return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
					}, u === s && (a = !0), v(2)
				}, u.fps = function (t) {
					return arguments.length ? (n = t, o = 1 / (n || 60), l = this.time + o, void u.wake()) : n
				}, u.useRAF = function (t) {
					return arguments.length ? (u.sleep(), p = t, void u.fps(n)) : p
				}, u.fps(t), setTimeout(function () {
					"auto" === p && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
				}, 1500)
			}), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
			var E = v("core.Animation", function (t, e) {
				if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, X) {
					a || s.wake();
					var n = this.vars.useFrames ? U : X;
					n.add(this, n._time), this.vars.paused && this.paused(!0)
				}
			});
			s = E.ticker = new u.Ticker, o = E.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
			var A = function () {
				a && C() - k > 2e3 && s.wake(), setTimeout(A, 2e3)
			};
			A(), o.play = function (t, e) {
				return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
			}, o.pause = function (t, e) {
				return null != t && this.seek(t, e), this.paused(!0)
			}, o.resume = function (t, e) {
				return null != t && this.seek(t, e), this.paused(!1)
			}, o.seek = function (t, e) {
				return this.totalTime(Number(t), e !== !1)
			}, o.restart = function (t, e) {
				return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
			}, o.reverse = function (t, e) {
				return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
			}, o.render = function (t, e, n) {}, o.invalidate = function () {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, o.isActive = function () {
				var t, e = this._timeline,
					n = this._startTime;
				return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
			}, o._enabled = function (t, e) {
				return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
			}, o._kill = function (t, e) {
				return this._enabled(!1, !1)
			}, o.kill = function (t, e) {
				return this._kill(t, e), this
			}, o._uncache = function (t) {
				for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
				return this
			}, o._swapSelfInParams = function (t) {
				for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
				return n
			}, o._callback = function (t) {
				var e = this.vars;
				e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || b)
			}, o.eventCallback = function (t, e, n, i) {
				if ("on" === (t || "").substr(0, 2)) {
					var r = this.vars;
					if (1 === arguments.length) return r[t];
					null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
				}
				return this
			}, o.delay = function (t) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
			}, o.duration = function (t) {
				return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, o.totalDuration = function (t) {
				return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
			}, o.time = function (t, e) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
			}, o.totalTime = function (t, e, n) {
				if (a || s.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var i = this._totalDuration,
							r = this._timeline;
						if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
							for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (D.length && G(), this.render(t, e, !1), D.length && G())
				}
				return this
			}, o.progress = o.totalProgress = function (t, e) {
				var n = this.duration();
				return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
			}, o.startTime = function (t) {
				return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
			}, o.endTime = function (t) {
				return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
			}, o.timeScale = function (t) {
				if (!arguments.length) return this._timeScale;
				if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
					var e = this._pauseTime,
						n = e || 0 === e ? e : this._timeline.totalTime();
					this._startTime = n - (n - this._startTime) * this._timeScale / t
				}
				return this._timeScale = t, this._uncache(!1)
			}, o.reversed = function (t) {
				return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, o.paused = function (t) {
				if (!arguments.length) return this._paused;
				var e, n, i = this._timeline;
				return t != this._paused && i && (a || t || s.wake(), e = i.rawTime(), n = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
			};
			var O = v("core.SimpleTimeline", function (t) {
				E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			o = O.prototype = new E, o.constructor = O, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, n, i) {
				var r, o;
				if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
					for (o = t._startTime; r && r._startTime > o;) r = r._prev;
				return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
			}, o._remove = function (t, e) {
				return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, o.render = function (t, e, n) {
				var i, r = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
			}, o.rawTime = function () {
				return a || s.wake(), this._totalTime
			};
			var P = v("TweenLite", function (e, n, i) {
					if (E.call(this, n, i), this.render = P.prototype.render, null == e) throw "Cannot tween a null target.";
					this.target = e = "string" != typeof e ? e : P.selector(e) || e;
					var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
						l = this.vars.overwrite;
					if (this._overwrite = l = null == l ? W[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
						for (this._targets = s = f(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(f(o))) : (this._siblings[r] = Q(o, this, !1), 1 === l && this._siblings[r].length > 1 && Z(o, this, null, 1, this._siblings[r])) : (o = s[r--] = P.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
					else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
				}, !0),
				M = function (e) {
					return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
				},
				N = function (t, e) {
					var n, i = {};
					for (n in t) V[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!q[n] || q[n] && q[n]._autoCSS) || (i[n] = t[n], delete t[n]);
					t.css = i
				};
			o = P.prototype = new E, o.constructor = P, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, P.version = "1.18.2", P.defaultEase = o._ease = new w(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = s, P.autoSleep = 120, P.lagSmoothing = function (t, e) {
				s.lagSmoothing(t, e)
			}, P.selector = t.$ || t.jQuery || function (e) {
				var n = t.$ || t.jQuery;
				return n ? (P.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
			};
			var D = [],
				R = {},
				L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				I = function (t) {
					for (var e, n = this._firstPT, i = 1e-6; n;) e = n.blob ? t ? this.join("") : this.start : n.c * t + n.s, n.r ? e = Math.round(e) : i > e && e > -i && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
				},
				j = function (t, e, n, i) {
					var r, o, s, a, l, u, c, f = [t, e],
						h = 0,
						p = "",
						d = 0;
					for (f.start = t, n && (n(f), t = f[0], e = f[1]), f.length = 0, r = t.match(L) || [], o = e.match(L) || [], i && (i._next = null, i.blob = 1, f._firstPT = i), l = o.length, a = 0; l > a; a++) c = o[a], u = e.substr(h, e.indexOf(c, h) - h), p += u || !a ? u : ",", h += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? p += c : (p && (f.push(p), p = ""), s = parseFloat(r[a]), f.push(s), f._firstPT = {
						_next: f._firstPT,
						t: f,
						p: f.length - 1,
						s: s,
						c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
						f: 0,
						r: d && 4 > d
					}), h += c.length;
					return p += e.substr(h), p && f.push(p), f.setRatio = I, f
				},
				F = function (t, e, n, i, r, o, s, a) {
					var l, u, c = "get" === n ? t[e] : n,
						f = typeof t[e],
						h = "string" == typeof i && "=" === i.charAt(1),
						p = {
							t: t,
							p: e,
							s: c,
							f: "function" === f,
							pg: 0,
							n: r || e,
							r: o,
							pr: 0,
							c: h ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - c || 0
						};
					return "number" !== f && ("function" === f && "get" === n && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = c = s ? t[u](s) : t[u]()), "string" == typeof c && (s || isNaN(c)) ? (p.fp = s, l = j(c, i, a || P.defaultStringFilter, p), p = {
						t: l,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: r || e,
						pr: 0
					}) : h || (p.s = parseFloat(c), p.c = parseFloat(i) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
				},
				z = P._internals = {
					isArray: p,
					isSelector: M,
					lazyTweens: D,
					blobDif: j
				},
				q = P._plugins = {},
				B = z.tweenLookup = {},
				H = 0,
				V = z.reservedProps = {
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
				W = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				U = E._rootFramesTimeline = new O,
				X = E._rootTimeline = new O,
				Y = 30,
				G = z.lazyRender = function () {
					var t, e = D.length;
					for (R = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
					D.length = 0
				};
			X._startTime = s.time, U._startTime = s.frame, X._active = U._active = !0, setTimeout(G, 1), E._updateRoot = P.render = function () {
				var t, e, n;
				if (D.length && G(), X.render((s.time - X._startTime) * X._timeScale, !1, !1), U.render((s.frame - U._startTime) * U._timeScale, !1, !1), D.length && G(), s.frame >= Y) {
					Y = s.frame + (parseInt(P.autoSleep, 10) || 120);
					for (n in B) {
						for (e = B[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
						0 === e.length && delete B[n]
					}
					if (n = X._first, (!n || n._paused) && P.autoSleep && !U._first && 1 === s._listeners.tick.length) {
						for (; n && n._paused;) n = n._next;
						n || s.sleep()
					}
				}
			}, s.addEventListener("tick", E._updateRoot);
			var Q = function (t, e, n) {
					var i, r, o = t._gsTweenID;
					if (B[o || (t._gsTweenID = o = "t" + H++)] || (B[o] = {
							target: t,
							tweens: []
						}), e && (i = B[o].tweens, i[r = i.length] = e, n))
						for (; --r > -1;) i[r] === e && i.splice(r, 1);
					return B[o].tweens
				},
				K = function (t, e, n, i) {
					var r, o, s = t.vars.onOverwrite;
					return s && (r = s(t, e, n, i)), s = P.onOverwrite, s && (o = s(t, e, n, i)), r !== !1 && o !== !1
				},
				Z = function (t, e, n, i, r) {
					var o, s, a, l;
					if (1 === i || i >= 4) {
						for (l = r.length, o = 0; l > o; o++)
							if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
							else if (5 === i) break;
						return s
					}
					var u, f = e._startTime + c,
						h = [],
						p = 0,
						d = 0 === e._duration;
					for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || J(e, 0, d), 0 === J(a, u, d) && (h[p++] = a)) : a._startTime <= f && a._startTime + a.totalDuration() / a._timeScale > f && ((d || !a._initted) && f - a._startTime <= 2e-10 || (h[p++] = a)));
					for (o = p; --o > -1;)
						if (a = h[o], 2 === i && a._kill(n, t, e) && (s = !0), 2 !== i || !a._firstPT && a._initted) {
							if (2 !== i && !K(a, e)) continue;
							a._enabled(!1, !1) && (s = !0)
						}
					return s
				},
				J = function (t, e, n) {
					for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
						if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
						i = i._timeline
					}
					return o /= r, o > e ? o - e : n && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / r) > e + c ? 0 : o - e - c
				};
			o._init = function () {
				var t, e, n, i, r, o = this.vars,
					s = this._overwrittenProps,
					a = this._duration,
					l = !!o.immediateRender,
					u = o.ease;
				if (o.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
					for (i in o.startAt) r[i] = o.startAt[i];
					if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = P.to(this.target, 0, r), l)
						if (this._time > 0) this._startAt = null;
						else if (0 !== a) return
				} else if (o.runBackwards && 0 !== a)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (l = !1), n = {};
						for (i in o) V[i] && "autoCSS" !== i || (n[i] = o[i]);
						if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && o.lazy !== !1, n.immediateRender = l, this._startAt = P.to(this.target, 0, n), l) {
							if (0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, o.easeParams) : x[u] || P.defaultEase : P.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
				else e = this._initProps(this.target, this._propLookup, this._siblings, s);
				if (e && P._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
					for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
				this._onUpdate = o.onUpdate, this._initted = !0
			}, o._initProps = function (e, n, i, r) {
				var o, s, a, l, u, c;
				if (null == e) return !1;
				R[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && q.css && this.vars.autoCSS !== !1 && N(this.vars, e);
				for (o in this.vars)
					if (c = this.vars[o], V[o]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
					else if (q[o] && (l = new q[o])._onInitTween(e, this.vars[o], this)) {
					for (this._firstPT = u = {
							_next: this._firstPT,
							t: l,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: o,
							pg: 1,
							pr: l._priority
						}, s = l._overwriteProps.length; --s > -1;) n[l._overwriteProps[s]] = this._firstPT;
					(l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
				} else n[o] = F.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter);
				return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && Z(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), a)
			}, o.render = function (t, e, n) {
				var i, r, o, s, a = this._time,
					l = this._duration,
					u = this._rawPrevTime;
				if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === c && "isPause" !== this.data) && u !== t && (n = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : c);
				else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !e || t || u === t ? t : c)), this._initted || (n = !0);
				else if (this._totalTime = this._time = t, this._easeType) {
					var f = t / l,
						h = this._easeType,
						p = this._easePower;
					(1 === h || 3 === h && f >= .5) && (f = 1 - f), 3 === h && (f *= 2), 1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f), 1 === h ? this.ratio = 1 - f : 2 === h ? this.ratio = f : .5 > t / l ? this.ratio = f / 2 : this.ratio = 1 - f / 2
				} else this.ratio = this._ease.getRatio(t / l);
				if (this._time !== a || n) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, D.push(this), void(this._lazy = [t, e]);
						this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
					this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== a || i) && this._callback("onUpdate")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0))
				}
			}, o._kill = function (t, e, n) {
				if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				e = "string" != typeof e ? e || this._targets || this.target : P.selector(e) || e;
				var i, r, o, s, a, l, u, c, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
				if ((p(e) || M(e)) && "number" != typeof e[0])
					for (i = e.length; --i > -1;) this._kill(t, e[i], n) && (l = !0);
				else {
					if (this._targets) {
						for (i = this._targets.length; --i > -1;)
							if (e === this._targets[i]) {
								a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
								break
							}
					} else {
						if (e !== this.target) return !1;
						a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
					}
					if (a) {
						if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), n && (P.onOverwrite || this.vars.onOverwrite)) {
							for (o in u) a[o] && (f || (f = []), f.push(o));
							if ((f || !t) && !K(this, n, e, f)) return !1
						}
						for (o in u)(s = a[o]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return l
			}, o.invalidate = function () {
				return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
			}, o._enabled = function (t, e) {
				if (a || s.wake(), t && this._gc) {
					var n, i = this._targets;
					if (i)
						for (n = i.length; --n > -1;) this._siblings[n] = Q(i[n], this, !0);
					else this._siblings = Q(this.target, this, !0)
				}
				return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && P._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
			}, P.to = function (t, e, n) {
				return new P(t, e, n)
			}, P.from = function (t, e, n) {
				return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new P(t, e, n)
			}, P.fromTo = function (t, e, n, i) {
				return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new P(t, e, i)
			}, P.delayedCall = function (t, e, n, i, r) {
				return new P(e, 0, {
					delay: t,
					onComplete: e,
					onCompleteParams: n,
					callbackScope: i,
					onReverseComplete: e,
					onReverseCompleteParams: n,
					immediateRender: !1,
					lazy: !1,
					useFrames: r,
					overwrite: 0
				})
			}, P.set = function (t, e) {
				return new P(t, 0, e)
			}, P.getTweensOf = function (t, e) {
				if (null == t) return [];
				t = "string" != typeof t ? t : P.selector(t) || t;
				var n, i, r, o;
				if ((p(t) || M(t)) && "number" != typeof t[0]) {
					for (n = t.length, i = []; --n > -1;) i = i.concat(P.getTweensOf(t[n], e));
					for (n = i.length; --n > -1;)
						for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
				} else
					for (i = Q(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
				return i
			}, P.killTweensOf = P.killDelayedCallsTo = function (t, e, n) {
				"object" == typeof e && (n = e, e = !1);
				for (var i = P.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
			};
			var tt = v("plugins.TweenPlugin", function (t, e) {
				this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
			}, !0);
			if (o = tt.prototype, tt.version = "1.18.0", tt.API = 2, o._firstPT = null, o._addTween = F, o.setRatio = I, o._kill = function (t) {
					var e, n = this._overwriteProps,
						i = this._firstPT;
					if (null != t[this._propName]) this._overwriteProps = [];
					else
						for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
					for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
					return !1
				}, o._roundProps = function (t, e) {
					for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
				}, P._onPluginEvent = function (t, e) {
					var n, i, r, o, s, a = e._firstPT;
					if ("_onInitAllProps" === t) {
						for (; a;) {
							for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
							(a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
						}
						a = e._firstPT = r
					}
					for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
					return n
				}, tt.activate = function (t) {
					for (var e = t.length; --e > -1;) t[e].API === tt.API && (q[(new t[e])._propName] = t[e]);
					return !0
				}, m.plugin = function (t) {
					if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
					var e, n = t.propName,
						i = t.priority || 0,
						r = t.overwriteProps,
						o = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_roundProps",
							initAll: "_onInitAllProps"
						},
						s = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
							tt.call(this, n, i), this._overwriteProps = r || []
						}, t.global === !0),
						a = s.prototype = new tt(n);
					a.constructor = s, s.API = t.API;
					for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
					return s.version = t.version, tt.activate([s]), s
				}, i = t._gsQueue) {
				for (r = 0; r < i.length; r++) i[r]();
				for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
			}
			a = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function (t, e, n) {
			var i, r, o, s, a, l, u, c, f = {
					css: {}
				},
				h = {
					css: {}
				},
				p = {
					css: {}
				},
				d = {
					css: {}
				},
				g = _gsScope._gsDefine.globals,
				m = {},
				v = document,
				y = v.documentElement || {},
				b = function (t) {
					return v.createElementNS ? v.createElementNS("http://www.w3.org/1999/xhtml", t) : v.createElement(t)
				},
				w = b("div"),
				x = [],
				_ = function () {
					return !1
				},
				$ = 180 / Math.PI,
				T = 999999999999999,
				S = Date.now || function () {
					return (new Date).getTime()
				},
				C = !(v.addEventListener || !v.all),
				k = v.createElement("div"),
				E = [],
				A = {},
				O = 0,
				P = /^(?:a|input|textarea|button|select)$/i,
				M = 0,
				N = -1 !== navigator.userAgent.toLowerCase().indexOf("android"),
				D = 0,
				R = {},
				L = {},
				I = function (t) {
					if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
					var n, i = [],
						r = t.length;
					for (n = 0; n !== r; i.push(t[n++]));
					return i
				},
				j = function (t) {
					var e, n = {};
					for (e in t) n[e] = t[e];
					return n
				},
				F = function () {
					for (var t = E.length; --t > -1;) E[t]()
				},
				z = function (t) {
					E.push(t), 1 === E.length && e.ticker.addEventListener("tick", F, this, !1, 1)
				},
				q = function (t) {
					for (var n = E.length; --n > -1;) E[n] === t && E.splice(n, 1);
					e.to(B, 0, {
						overwrite: "all",
						delay: 15,
						onComplete: B
					})
				},
				B = function () {
					E.length || e.ticker.removeEventListener("tick", F)
				},
				H = function (t, e) {
					var n;
					for (n in e) void 0 === t[n] && (t[n] = e[n]);
					return t
				},
				V = function () {
					return null != window.pageYOffset ? window.pageYOffset : null != v.scrollTop ? v.scrollTop : y.scrollTop || v.body.scrollTop || 0
				},
				W = function () {
					return null != window.pageXOffset ? window.pageXOffset : null != v.scrollLeft ? v.scrollLeft : y.scrollLeft || v.body.scrollLeft || 0;
				},
				U = function (t, e) {
					Nt(t, "scroll", e), Y(t.parentNode) || U(t.parentNode, e)
				},
				X = function (t, e) {
					Dt(t, "scroll", e), Y(t.parentNode) || X(t.parentNode, e)
				},
				Y = function (t) {
					return !(t && t !== y && t !== v && t !== v.body && t !== window && t.nodeType && t.parentNode)
				},
				G = function (t, e) {
					var n = "x" === e ? "Width" : "Height",
						i = "scroll" + n,
						r = "client" + n,
						o = v.body;
					return Math.max(0, Y(t) ? Math.max(y[i], o[i]) - (window["inner" + n] || y[r] || o[r]) : t[i] - t[r])
				},
				Q = function (t) {
					var e = Y(t),
						n = G(t, "x"),
						i = G(t, "y");
					e ? t = L : Q(t.parentNode), t._gsMaxScrollX = n, t._gsMaxScrollY = i, t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0
				},
				K = function (t, e) {
					return t = t || window.event, m.pageX = t.clientX + v.body.scrollLeft + y.scrollLeft, m.pageY = t.clientY + v.body.scrollTop + y.scrollTop, e && (t.returnValue = !1), m
				},
				Z = function (t) {
					return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t
				},
				J = function (t, e) {
					var n, r, o, s = t.style;
					if (void 0 === s[e]) {
						for (o = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5, n = e.charAt(0).toUpperCase() + e.substr(1); --r > -1 && void 0 === s[o[r] + n];);
						if (0 > r) return "";
						i = 3 === r ? "ms" : o[r], e = i + n
					}
					return e
				},
				tt = function (t, e, n) {
					var i = t.style;
					i && (void 0 === i[e] && (e = J(t, e)), null == n ? i.removeProperty ? i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : i.removeAttribute(e) : void 0 !== i[e] && (i[e] = n))
				},
				et = v.defaultView ? v.defaultView.getComputedStyle : _,
				nt = /(?:Left|Right|Width)/i,
				it = /(?:\d|\-|\+|=|#|\.)*/g,
				rt = function (t, e, n, i, r) {
					if ("px" === i || !i) return n;
					if ("auto" === i || !n) return 0;
					var o, s = nt.test(e),
						a = t,
						l = w.style,
						u = 0 > n;
					return u && (n = -n), "%" === i && -1 !== e.indexOf("border") ? o = n / 100 * (s ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + st(t, "position", !0) + ";line-height:0;", "%" !== i && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = n + i : (a = t.parentNode || v.body, l[s ? "width" : "height"] = n + i), a.appendChild(w), o = parseFloat(w[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(w), 0 !== o || r || (o = rt(t, e, n, i, !0))), u ? -o : o
				},
				ot = function (t, e) {
					if ("absolute" !== st(t, "position", !0)) return 0;
					var n = "left" === e ? "Left" : "Top",
						i = st(t, "margin" + n, !0);
					return t["offset" + n] - (rt(t, e, parseFloat(i), (i + "").replace(it, "")) || 0)
				},
				st = function (t, e, n) {
					var i, r = (t._gsTransform || {})[e];
					return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (i = et(t)) ? (r = i.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()), r = r || i.length ? r : i[e]) : t.currentStyle && (r = t.currentStyle[e]), "auto" !== r || "top" !== e && "left" !== e || (r = ot(t, e)), n ? r : parseFloat(r) || 0)
				},
				at = function (t, e, n) {
					var i = t.vars,
						r = i[n],
						o = t._listeners[e];
					"function" == typeof r && r.apply(i[n + "Scope"] || i.callbackScope || t, i[n + "Params"] || [t.pointerEvent]), o && t.dispatchEvent(e)
				},
				lt = function (t, e) {
					var n, i, r, o = Z(t);
					return o ? Et(o, e) : void 0 !== t.left ? (r = _t(e), {
						left: t.left - r.x,
						top: t.top - r.y,
						width: t.width,
						height: t.height
					}) : (i = t.min || t.minX || t.minRotation || 0, n = t.min || t.minY || 0, {
						left: i,
						top: n,
						width: (t.max || t.maxX || t.maxRotation || 0) - i,
						height: (t.max || t.maxY || 0) - n
					})
				},
				ut = function () {
					if (!v.createElementNS) return s = 0, void(a = !1);
					var t, e, n, i, r = b("div"),
						o = v.createElementNS("http://www.w3.org/2000/svg", "svg"),
						c = b("div"),
						f = r.style,
						h = v.body || y;
					v.body && ht && (f.position = c.style.position = "absolute", h.appendChild(c), c.appendChild(r), f.height = "10px", i = r.offsetTop, c.style.border = "5px solid red", u = i !== r.offsetTop, h.removeChild(c)), f = o.style, o.setAttributeNS(null, "width", "400px"), o.setAttributeNS(null, "height", "400px"), o.setAttributeNS(null, "viewBox", "0 0 400 400"), f.display = "block", f.boxSizing = "border-box", f.border = "0px solid red", f.transform = "none", r.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", h.appendChild(r), r.appendChild(o), n = o.createSVGPoint().matrixTransform(o.getScreenCTM()), e = n.y, r.scrollTop = 100, n.x = n.y = 0, n = n.matrixTransform(o.getScreenCTM()), l = e - n.y < 100.1 ? 0 : e - n.y - 150, r.removeChild(o), h.removeChild(r), h.appendChild(o), t = o.getScreenCTM(), e = t.e, f.border = "50px solid red", t = o.getScreenCTM(), 0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (s = 1, a = !0) : (s = e !== t.e ? 1 : 0, a = 1 !== t.a), h.removeChild(o)
				},
				ct = "" !== J(w, "perspective"),
				ft = J(w, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
				ht = J(w, "transform"),
				pt = ht.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
				dt = {},
				gt = {},
				mt = window.SVGElement,
				vt = function (t) {
					return !!(mt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
				},
				yt = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
				bt = [],
				wt = [],
				xt = function (t) {
					if (!t.getBoundingClientRect || !t.parentNode || !ht) return {
						offsetTop: 0,
						offsetLeft: 0,
						scaleX: 1,
						scaleY: 1,
						offsetParent: y
					};
					if (Ht.cacheSVGData !== !1 && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame) return t._gsCache;
					var n, i, r, o, u, c, f, h, p, d, g, m, b = t,
						w = $t(t);
					if (w.lastUpdate = e.ticker.frame, t.getBBox && !w.isSVGRoot) {
						for (b = t.parentNode, n = t.getBBox(); b && "svg" !== (b.nodeName + "").toLowerCase();) b = b.parentNode;
						return o = xt(b), w.offsetTop = n.y * o.scaleY, w.offsetLeft = n.x * o.scaleX, w.scaleX = o.scaleX, w.scaleY = o.scaleY, w.offsetParent = b || y, w
					}
					for (r = w.offsetParent, r === v.body && (r = y), wt.length = bt.length = 0; b && (u = st(b, ht, !0), "matrix(1, 0, 0, 1, 0, 0)" !== u && "none" !== u && "translate3d(0px, 0px, 0px)" !== u && (wt.push(b), bt.push(b.style[ht]), b.style[ht] = "none"), b !== r);) b = b.parentNode;
					for (i = r.getBoundingClientRect(), u = t.getScreenCTM(), h = t.createSVGPoint(), f = h.matrixTransform(u), h.x = h.y = 10, h = h.matrixTransform(u), w.scaleX = (h.x - f.x) / 10, w.scaleY = (h.y - f.y) / 10, void 0 === s && ut(), w.borderBox && !a && t.getAttribute("width") && (o = et(t) || {}, p = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth) || 0, d = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) || 0, g = parseFloat(o.width) || 0, m = parseFloat(o.height) || 0, w.scaleX *= (g - p) / g, w.scaleY *= (m - d) / m), l ? (n = t.getBoundingClientRect(), w.offsetLeft = n.left - i.left, w.offsetTop = n.top - i.top) : (w.offsetLeft = f.x - i.left, w.offsetTop = f.y - i.top), w.offsetParent = r, c = wt.length; --c > -1;) wt[c].style[ht] = bt[c];
					return w
				},
				_t = function (t, n) {
					if (n = n || {}, !t || t === y || !t.parentNode || t === window) return {
						x: 0,
						y: 0
					};
					var i = et(t),
						r = ft && i ? i.getPropertyValue(ft) : "50% 50%",
						o = r.split(" "),
						s = -1 !== r.indexOf("left") ? "0%" : -1 !== r.indexOf("right") ? "100%" : o[0],
						a = -1 !== r.indexOf("top") ? "0%" : -1 !== r.indexOf("bottom") ? "100%" : o[1];
					return ("center" === a || null == a) && (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), t.getBBox && vt(t) ? (t._gsTransform || (e.set(t, {
						x: "+=0",
						overwrite: !1
					}), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), r = t.getBBox(), n.x = t._gsTransform.xOrigin - r.x, n.y = t._gsTransform.yOrigin - r.y) : (t.getBBox && !t.offsetWidth && -1 !== (s + a).indexOf("%") && (t = t.getBBox(), t = {
						offsetWidth: t.width,
						offsetHeight: t.height
					}), n.x = -1 !== s.indexOf("%") ? t.offsetWidth * parseFloat(s) / 100 : parseFloat(s), n.y = -1 !== a.indexOf("%") ? t.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), n
				},
				$t = function (t) {
					if (Ht.cacheSVGData !== !1 && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame) return t._gsCache;
					var n, i = t._gsCache = t._gsCache || {},
						r = et(t),
						o = t.getBBox && vt(t),
						s = "svg" === (t.nodeName + "").toLowerCase();
					if (i.isSVG = o, i.isSVGRoot = s, i.borderBox = "border-box" === r.boxSizing, i.computedStyle = r, s)(i.offsetParent = t.offsetParent) || (n = t.parentNode || y, n.insertBefore(w, t), i.offsetParent = w.offsetParent || y, n.removeChild(w));
					else if (o) {
						for (n = t.parentNode; n && "svg" !== (n.nodeName + "").toLowerCase();) n = n.parentNode;
						i.offsetParent = n
					}
					return i
				},
				Tt = function (t, e, n, i) {
					if (t === window || !t || !t.style || !t.parentNode) return [1, 0, 0, 1, 0, 0];
					var r, o, a, l, c, f, h, p, d, g, m, b, w, x, _ = t._gsCache || $t(t),
						$ = t.parentNode,
						T = $._gsCache || $t($),
						S = _.computedStyle,
						C = _.isSVG ? T.offsetParent : $.offsetParent;
					return r = _.isSVG && -1 !== (t.style[ht] + "").indexOf("matrix") ? t.style[ht] : S ? S.getPropertyValue(pt) : t.currentStyle ? t.currentStyle[ht] : "1,0,0,1,0,0", t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (r = t.getAttribute("transform")), r = (r + "").match(/(?:\-|\b)[\d\-\.e]+\b/g) || [1, 0, 0, 1, 0, 0], r.length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]), i ? r[4] = r[5] = 0 : _.isSVG && (c = t._gsTransform) && (c.xOrigin || c.yOrigin) && (r[0] = parseFloat(r[0]), r[1] = parseFloat(r[1]), r[2] = parseFloat(r[2]), r[3] = parseFloat(r[3]), r[4] = parseFloat(r[4]) - (c.xOrigin - (c.xOrigin * r[0] + c.yOrigin * r[2])), r[5] = parseFloat(r[5]) - (c.yOrigin - (c.xOrigin * r[1] + c.yOrigin * r[3]))), e && (void 0 === s && ut(), a = _.isSVG || _.isSVGRoot ? xt(t) : t, _.isSVG ? (l = t.getBBox(), g = T.isSVGRoot ? {
						x: 0,
						y: 0
					} : $.getBBox(), a = {
						offsetLeft: l.x - g.x,
						offsetTop: l.y - g.y,
						offsetParent: _.offsetParent
					}) : _.isSVGRoot ? (m = parseInt(S.borderTopWidth, 10) || 0, b = parseInt(S.borderLeftWidth, 10) || 0, w = (r[0] - s) * b + r[2] * m, x = r[1] * b + (r[3] - s) * m, f = e.x, h = e.y, p = f - (f * r[0] + h * r[2]), d = h - (f * r[1] + h * r[3]), r[4] = parseFloat(r[4]) + p, r[5] = parseFloat(r[5]) + d, e.x -= p, e.y -= d, f = a.scaleX, h = a.scaleY, e.x *= f, e.y *= h, r[0] *= f, r[1] *= h, r[2] *= f, r[3] *= h, yt || (e.x += w, e.y += x)) : !u && t.offsetParent && (e.x += parseInt(st(t.offsetParent, "borderLeftWidth"), 10) || 0, e.y += parseInt(st(t.offsetParent, "borderTopWidth"), 10) || 0), o = $ === y || $ === v.body, r[4] = Number(r[4]) + e.x + (a.offsetLeft || 0) - n.x - (o ? 0 : $.scrollLeft || 0), r[5] = Number(r[5]) + e.y + (a.offsetTop || 0) - n.y - (o ? 0 : $.scrollTop || 0), $ && "fixed" === st(t, "position", S) && (r[4] += W(), r[5] += V()), $ && $ !== y && C === a.offsetParent && (r[4] -= $.offsetLeft || 0, r[5] -= $.offsetTop || 0, u || !$.offsetParent || _.isSVG || _.isSVGRoot || (r[4] -= parseInt(st($.offsetParent, "borderLeftWidth"), 10) || 0, r[5] -= parseInt(st($.offsetParent, "borderTopWidth"), 10) || 0))), r
				},
				St = function (t, e) {
					if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
					for (var n, i, r, o, s, a, l, u, c = _t(t, dt), f = _t(t.parentNode, gt), h = Tt(t, c, f);
						(t = t.parentNode) && t.parentNode && t !== y;) c = f, f = _t(t.parentNode, c === dt ? gt : dt), l = Tt(t, c, f), n = h[0], i = h[1], r = h[2], o = h[3], s = h[4], a = h[5], h[0] = n * l[0] + i * l[2], h[1] = n * l[1] + i * l[3], h[2] = r * l[0] + o * l[2], h[3] = r * l[1] + o * l[3], h[4] = s * l[0] + a * l[2] + l[4], h[5] = s * l[1] + a * l[3] + l[5];
					return e && (n = h[0], i = h[1], r = h[2], o = h[3], s = h[4], a = h[5], u = n * o - i * r, h[0] = o / u, h[1] = -i / u, h[2] = -r / u, h[3] = n / u, h[4] = (r * a - o * s) / u, h[5] = -(n * a - i * s) / u), h
				},
				Ct = function (t, e, n, i, r) {
					t = Z(t);
					var o = St(t, !1, r),
						s = e.x,
						a = e.y;
					return n && (_t(t, e), s -= e.x, a -= e.y), i = i === !0 ? e : i || {}, i.x = s * o[0] + a * o[2] + o[4], i.y = s * o[1] + a * o[3] + o[5], i
				},
				kt = function (t, e, n) {
					var i = t.x * e[0] + t.y * e[2] + e[4],
						r = t.x * e[1] + t.y * e[3] + e[5];
					return t.x = i * n[0] + r * n[2] + n[4], t.y = i * n[1] + r * n[3] + n[5], t
				},
				Et = function (t, e, n) {
					if (!(t = Z(t))) return null;
					e = Z(e);
					var i, r, o, s, a, l, u, c, f, h, p, d, g, m, b, w, x, _, $, T, S, k, E = t.getBBox && vt(t);
					if (t === window) s = V(), r = W(), o = r + (y.clientWidth || t.innerWidth || v.body.clientWidth || 0), a = s + ((t.innerHeight || 0) - 20 < y.clientHeight ? y.clientHeight : t.innerHeight || v.body.clientHeight || 0);
					else {
						if (void 0 === e || e === window) return t.getBoundingClientRect();
						i = _t(t), r = -i.x, s = -i.y, E ? (d = t.getBBox(), g = d.width, m = d.height) : t.offsetWidth ? (g = t.offsetWidth, m = t.offsetHeight) : (S = et(t), g = parseFloat(S.width), m = parseFloat(S.height)), o = r + g, a = s + m, "svg" !== t.nodeName.toLowerCase() || C || (b = xt(t), k = b.computedStyle || {}, _ = (t.getAttribute("viewBox") || "0 0").split(" "), $ = parseFloat(_[0]), T = parseFloat(_[1]), w = parseFloat(k.borderLeftWidth) || 0, x = parseFloat(k.borderTopWidth) || 0, o -= g - (g - w) / b.scaleX - $, a -= m - (m - x) / b.scaleY - T, r -= w / b.scaleX - $, s -= x / b.scaleY - T, S && (o += (parseFloat(k.borderRightWidth) + w) / b.scaleX, a += (x + parseFloat(k.borderBottomWidth)) / b.scaleY))
					}
					return t === e ? {
						left: r,
						top: s,
						width: o - r,
						height: a - s
					} : (l = St(t), u = St(e, !0), c = kt({
						x: r,
						y: s
					}, l, u), f = kt({
						x: o,
						y: s
					}, l, u), h = kt({
						x: o,
						y: a
					}, l, u), p = kt({
						x: r,
						y: a
					}, l, u), r = Math.min(c.x, f.x, h.x, p.x), s = Math.min(c.y, f.y, h.y, p.y), R.x = R.y = 0, n && _t(e, R), {
						left: r + R.x,
						top: s + R.y,
						width: Math.max(c.x, f.x, h.x, p.x) - r,
						height: Math.max(c.y, f.y, h.y, p.y) - s
					})
				},
				At = function (t) {
					return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
				},
				Ot = function (t) {
					var e, n, i, r = [],
						o = t.length;
					for (e = 0; o > e; e++)
						if (n = t[e], At(n))
							for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
						else n && 0 !== n.length && r.push(n);
					return r
				},
				Pt = "ontouchstart" in y && "orientation" in window,
				Mt = function (t) {
					for (var e = t.split(","), n = (void 0 !== w.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== w.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), i = {}, r = 8; --r > -1;) i[e[r]] = n[r], i[n[r]] = e[r];
					return i
				}("touchstart,touchmove,touchend,touchcancel"),
				Nt = function (t, e, n, i) {
					t.addEventListener ? t.addEventListener(Mt[e] || e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
				},
				Dt = function (t, e, n) {
					t.removeEventListener ? t.removeEventListener(Mt[e] || e, n) : t.detachEvent && t.detachEvent("on" + e, n)
				},
				Rt = function (t, e) {
					for (var n = t.length; --n > -1;)
						if (t[n].identifier === e) return !0;
					return !1
				},
				Lt = function (t) {
					r = t.touches && M < t.touches.length, Dt(t.target, "touchend", Lt)
				},
				It = function (t) {
					r = t.touches && M < t.touches.length, Nt(t.target, "touchend", Lt)
				},
				jt = function (t, e, n, i, r, o) {
					var s, a, l, u = {};
					if (e)
						if (1 !== r && e instanceof Array) {
							for (u.end = s = [], l = e.length, a = 0; l > a; a++) s[a] = e[a] * r;
							n += 1.1, i -= 1.1
						} else "function" == typeof e ? u.end = function (n) {
							return e.call(t, n) * r
						} : u.end = e;
					return (n || 0 === n) && (u.max = n), (i || 0 === i) && (u.min = i), o && (u.velocity = 0), u
				},
				Ft = function (t) {
					var e;
					return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !P.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || Ft(t.parentNode))
				},
				zt = function (t, e) {
					for (var n, i = t.length; --i > -1;) n = t[i], n.ondragstart = n.onselectstart = e ? null : _, tt(n, "userSelect", e ? "text" : "none")
				},
				qt = function () {
					var t, e = v.createElement("div"),
						n = v.createElement("div"),
						i = n.style,
						r = v.body || w;
					return i.display = "inline-block", i.position = "relative", e.style.cssText = n.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", e.appendChild(n), r.appendChild(e), c = n.offsetHeight + 18 > e.scrollHeight, i.width = "100%", ht || (i.paddingRight = "500px", t = e.scrollLeft = e.scrollWidth - e.clientWidth, i.left = "-90px", t = t !== e.scrollLeft), r.removeChild(e), t
				}(),
				Bt = function (t, n) {
					t = Z(t), n = n || {};
					var i, r, o, s, a, l, u = v.createElement("div"),
						f = u.style,
						h = t.firstChild,
						p = 0,
						d = 0,
						g = t.scrollTop,
						m = t.scrollLeft,
						y = t.scrollWidth,
						b = t.scrollHeight,
						w = 0,
						x = 0,
						_ = 0;
					ct && n.force3D !== !1 ? (a = "translate3d(", l = "px,0px)") : ht && (a = "translate(", l = "px)"), this.scrollTop = function (t, e) {
						return arguments.length ? void this.top(-t, e) : -this.top()
					}, this.scrollLeft = function (t, e) {
						return arguments.length ? void this.left(-t, e) : -this.left()
					}, this.left = function (i, r) {
						if (!arguments.length) return -(t.scrollLeft + d);
						var o = t.scrollLeft - m,
							s = d;
						return (o > 2 || -2 > o) && !r ? (m = t.scrollLeft, e.killTweensOf(this, !0, {
							left: 1,
							scrollLeft: 1
						}), this.left(-m), void(n.onKill && n.onKill())) : (i = -i, 0 > i ? (d = i - .5 | 0, i = 0) : i > x ? (d = i - x | 0, i = x) : d = 0, (d || s) && (a ? this._suspendTransforms || (f[ht] = a + -d + "px," + -p + l) : f.left = -d + "px", qt && d + w >= 0 && (f.paddingRight = d + w + "px")), t.scrollLeft = 0 | i, void(m = t.scrollLeft))
					}, this.top = function (i, r) {
						if (!arguments.length) return -(t.scrollTop + p);
						var o = t.scrollTop - g,
							s = p;
						return (o > 2 || -2 > o) && !r ? (g = t.scrollTop, e.killTweensOf(this, !0, {
							top: 1,
							scrollTop: 1
						}), this.top(-g), void(n.onKill && n.onKill())) : (i = -i, 0 > i ? (p = i - .5 | 0, i = 0) : i > _ ? (p = i - _ | 0, i = _) : p = 0, (p || s) && (a ? this._suspendTransforms || (f[ht] = a + -d + "px," + -p + l) : f.top = -p + "px"), t.scrollTop = 0 | i, void(g = t.scrollTop))
					}, this.maxScrollTop = function () {
						return _
					}, this.maxScrollLeft = function () {
						return x
					}, this.disable = function () {
						for (h = u.firstChild; h;) s = h.nextSibling, t.appendChild(h), h = s;
						t === u.parentNode && t.removeChild(u)
					}, this.enable = function () {
						if (h = t.firstChild, h !== u) {
							for (; h;) s = h.nextSibling, u.appendChild(h), h = s;
							t.appendChild(u), this.calibrate()
						}
					}, this.calibrate = function (e) {
						var n, s, a = t.clientWidth === i;
						g = t.scrollTop, m = t.scrollLeft, (!a || t.clientHeight !== r || u.offsetHeight !== o || y !== t.scrollWidth || b !== t.scrollHeight || e) && ((p || d) && (n = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), (!a || e) && (f.display = "block", f.width = "auto", f.paddingRight = "0px", w = Math.max(0, t.scrollWidth - t.clientWidth), w && (w += st(t, "paddingLeft") + (c ? st(t, "paddingRight") : 0))), f.display = "inline-block", f.position = "relative", f.overflow = "visible", f.verticalAlign = "top", f.width = "100%", f.paddingRight = w + "px", c && (f.paddingBottom = st(t, "paddingBottom", !0)), C && (f.zoom = "1"), i = t.clientWidth, r = t.clientHeight, y = t.scrollWidth, b = t.scrollHeight, x = t.scrollWidth - i, _ = t.scrollHeight - r, o = u.offsetHeight, f.display = "block", (n || s) && (this.left(n), this.top(s)))
					}, this.content = u, this.element = t, this._suspendTransforms = !1, this.enable()
				},
				Ht = function (i, s) {
					t.call(this, i), i = Z(i), o || (o = g.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = j(s || {}), this.target = i, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!s.allowEventDefault;
					var a, l, u, c, m, b, w, _, E, P, R, F, B, V, W, G, J, et, nt, it, rt, ot, ut, ct, ft, ht, pt, dt, gt, mt, vt, yt, bt, wt = (s.type || (C ? "top,left" : "x,y")).toLowerCase(),
						xt = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("y"),
						_t = -1 !== wt.indexOf("rotation"),
						$t = _t ? "rotation" : xt ? "x" : "left",
						Tt = xt ? "y" : "top",
						kt = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("left") || "scroll" === wt,
						Et = -1 !== wt.indexOf("y") || -1 !== wt.indexOf("top") || "scroll" === wt,
						At = s.minimumMovement || 2,
						Ot = this,
						Lt = I(s.trigger || s.handle || i),
						qt = {},
						Vt = 0,
						Wt = !1,
						Ut = s.clickableTest || Ft,
						Yt = function (t) {
							if (Ot.autoScroll && (Wt || Ot.isDragging && et)) {
								var e, n, r, o, s, a, u, c, f = i,
									h = 15 * Ot.autoScroll;
								for (Wt = !1, L.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != y.scrollTop ? y.scrollTop : v.body.scrollTop, L.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != y.scrollLeft ? y.scrollLeft : v.body.scrollLeft, o = Ot.pointerX - L.scrollLeft, s = Ot.pointerY - L.scrollTop; f && !n;) n = Y(f.parentNode), e = n ? L : f.parentNode, r = n ? {
									bottom: Math.max(y.clientHeight, window.innerHeight || 0),
									right: Math.max(y.clientWidth, window.innerWidth || 0),
									left: 0,
									top: 0
								} : e.getBoundingClientRect(), a = u = 0, Et && (c = e._gsMaxScrollY - e.scrollTop, 0 > c ? u = c : s > r.bottom - 40 && c ? (Wt = !0, u = Math.min(c, h * (1 - Math.max(0, r.bottom - s) / 40) | 0)) : s < r.top + 40 && e.scrollTop && (Wt = !0, u = -Math.min(e.scrollTop, h * (1 - Math.max(0, s - r.top) / 40) | 0)), u && (e.scrollTop += u)), kt && (c = e._gsMaxScrollX - e.scrollLeft, 0 > c ? a = c : o > r.right - 40 && c ? (Wt = !0, a = Math.min(c, h * (1 - Math.max(0, r.right - o) / 40) | 0)) : o < r.left + 40 && e.scrollLeft && (Wt = !0, a = -Math.min(e.scrollLeft, h * (1 - Math.max(0, o - r.left) / 40) | 0)), a && (e.scrollLeft += a)), n && (a || u) && (window.scrollTo(e.scrollLeft, e.scrollTop), se(Ot.pointerX + a, Ot.pointerY + u)), f = e
							}
							if (et) {
								var p = Ot.x,
									d = Ot.y,
									g = 1e-6;
								g > p && p > -g && (p = 0), g > d && d > -g && (d = 0), _t ? (gt.data.rotation = Ot.rotation = p, gt.setRatio(1)) : l ? (Et && l.top(d), kt && l.left(p)) : xt ? (Et && (gt.data.y = d), kt && (gt.data.x = p), gt.setRatio(1)) : (Et && (i.style.top = d + "px"), kt && (i.style.left = p + "px")), !_ || t || yt || (yt = !0, at(Ot, "drag", "onDrag"), yt = !1)
							}
							et = !1
						},
						Gt = function (t, n) {
							var r, o = Ot.x,
								s = Ot.y;
							i._gsTransform || !xt && !_t || e.set(i, {
								x: "+=0",
								overwrite: !1
							}), xt ? (Ot.y = i._gsTransform.y, Ot.x = i._gsTransform.x) : _t ? Ot.x = Ot.rotation = i._gsTransform.rotation : l ? (Ot.y = l.top(), Ot.x = l.left()) : (Ot.y = parseInt(i.style.top, 10) || 0, Ot.x = parseInt(i.style.left, 10) || 0), !it && !rt || n || (it && (r = it(Ot.x), r !== Ot.x && (Ot.x = r, _t && (Ot.rotation = r))), rt && (r = rt(Ot.y), r !== Ot.y && (Ot.y = r))), (o !== Ot.x || s !== Ot.y) && Yt(!0), t || at(Ot, "throwupdate", "onThrowUpdate")
						},
						Qt = function () {
							var t, e, n, r;
							w = !1, l ? (l.calibrate(), Ot.minX = P = -l.maxScrollLeft(), Ot.minY = F = -l.maxScrollTop(), Ot.maxX = E = Ot.maxY = R = 0, w = !0) : s.bounds && (t = lt(s.bounds, i.parentNode), _t ? (Ot.minX = P = t.left, Ot.maxX = E = t.left + t.width, Ot.minY = F = Ot.maxY = R = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (t = s.bounds, Ot.minX = P = t.minX, Ot.minY = F = t.minY, Ot.maxX = E = t.maxX, Ot.maxY = R = t.maxY) : (e = lt(i, i.parentNode), Ot.minX = P = st(i, $t) + t.left - e.left, Ot.minY = F = st(i, Tt) + t.top - e.top, Ot.maxX = E = P + (t.width - e.width), Ot.maxY = R = F + (t.height - e.height)), P > E && (Ot.minX = E, Ot.maxX = E = P, P = Ot.minX), F > R && (Ot.minY = R, Ot.maxY = R = F, F = Ot.minY), _t && (Ot.minRotation = P, Ot.maxRotation = E), w = !0), s.liveSnap && (n = s.liveSnap === !0 ? s.snap || {} : s.liveSnap, r = n instanceof Array || "function" == typeof n, _t ? (it = ie(r ? n : n.rotation, P, E, 1), rt = null) : (kt && (it = ie(r ? n : n.x || n.left || n.scrollLeft, P, E, l ? -1 : 1)), Et && (rt = ie(r ? n : n.y || n.top || n.scrollTop, F, R, l ? -1 : 1))))
						},
						Kt = function () {
							Ot.isThrowing = !1, at(Ot, "throwcomplete", "onThrowComplete")
						},
						Zt = function () {
							Ot.isThrowing = !1
						},
						Jt = function (t, e) {
							var n, r, a, u;
							t && o ? (t === !0 && (n = s.snap || {}, r = n instanceof Array || "function" == typeof n, t = {
								resistance: (s.throwResistance || s.resistance || 1e3) / (_t ? 10 : 1)
							}, _t ? t.rotation = jt(Ot, r ? n : n.rotation, E, P, 1, e) : (kt && (t[$t] = jt(Ot, r ? n : n.x || n.left || n.scrollLeft, E, P, l ? -1 : 1, e || "x" === Ot.lockedAxis)), Et && (t[Tt] = jt(Ot, r ? n : n.y || n.top || n.scrollTop, R, F, l ? -1 : 1, e || "y" === Ot.lockedAxis)))), Ot.isThrowing = !0, u = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - Ot.edgeResistance + .2 : s.overshootTolerance, Ot.tween = a = o.to(l || i, {
								throwProps: t,
								ease: s.ease || g.Power3.easeOut,
								onComplete: Kt,
								onOverwrite: Zt,
								onUpdate: s.fastMode ? at : Gt,
								onUpdateParams: s.fastMode ? [Ot, "onthrowupdate", "onThrowUpdate"] : x
							}, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === u ? 0 : .5 : s.minDuration, u), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), Gt(!0, !0), Ot.endX = Ot.x, Ot.endY = Ot.y, _t && (Ot.endRotation = Ot.x), a.play(0), Gt(!0, !0), l && (l._suspendTransforms = !1))) : w && Ot.applyBounds()
						},
						te = function () {
							var t, e, n, r, o, s, a, l, f, h = ct || [1, 0, 0, 1, 0, 0];
							ct = St(i.parentNode, !0), Ot.isPressed && h.join(",") !== ct.join(",") && (t = h[0], e = h[1], n = h[2], r = h[3], o = h[4], s = h[5], a = t * r - e * n, l = u * (r / a) + c * (-n / a) + (n * s - r * o) / a, f = u * (-e / a) + c * (t / a) + -(t * s - e * o) / a, c = l * ct[1] + f * ct[3] + ct[5], u = l * ct[0] + f * ct[2] + ct[4]), ct[1] || ct[2] || 1 != ct[0] || 1 != ct[3] || 0 != ct[4] || 0 != ct[5] || (ct = null)
						},
						ee = function () {
							var t = 1 - Ot.edgeResistance;
							te(), l ? (Qt(), b = l.top(), m = l.left()) : (ne() ? (Gt(!0, !0), Qt()) : Ot.applyBounds(), _t ? (J = Ct(i, {
								x: 0,
								y: 0
							}), Gt(!0, !0), m = Ot.x, b = Ot.y = Math.atan2(J.y - c, u - J.x) * $) : (pt = i.parentNode ? i.parentNode.scrollTop || 0 : 0, dt = i.parentNode ? i.parentNode.scrollLeft || 0 : 0, b = st(i, Tt), m = st(i, $t))), w && t && (m > E ? m = E + (m - E) / t : P > m && (m = P - (P - m) / t), _t || (b > R ? b = R + (b - R) / t : F > b && (b = F - (F - b) / t)))
						},
						ne = function () {
							return Ot.tween && Ot.tween.isActive()
						},
						ie = function (t, e, n, i) {
							return "function" == typeof t ? function (r) {
								var o = Ot.isPressed ? 1 - Ot.edgeResistance : 1;
								return t.call(Ot, r > n ? n + (r - n) * o : e > r ? e + (r - e) * o : r) * i
							} : t instanceof Array ? function (i) {
								for (var r, o, s = t.length, a = 0, l = T; --s > -1;) r = t[s], o = r - i, 0 > o && (o = -o), l > o && r >= e && n >= r && (a = s, l = o);
								return t[a]
							} : isNaN(t) ? function (t) {
								return t
							} : function () {
								return t * i
							}
						},
						re = function (t) {
							var n, r;
							if (a && !Ot.isPressed && t && !("mousedown" === t.type && S() - ht < 30 && Mt[Ot.pointerEvent.type])) {
								if (ft = ne(), Ot.pointerEvent = t, Mt[t.type] ? (ut = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : v, Nt(ut, "touchend", ae), Nt(ut, "touchmove", oe), Nt(ut, "touchcancel", ae), Nt(v, "touchstart", It)) : (ut = null, Nt(v, "mousemove", oe)), vt = null, Nt(v, "mouseup", ae), t && t.target && Nt(t.target, "mouseup", ae), ot = Ut.call(Ot, t.target) && !s.dragClickables) return Nt(t.target, "change", ae), at(Ot, "press", "onPress"), void zt(Lt, !0);
								if (mt = !(!ut || kt === Et || l || Ot.vars.allowNativeTouchScrolling === !1) && (kt ? "y" : "x"), C ? t = K(t, !0) : mt || Ot.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = W = t.changedTouches[0], G = t.identifier) : t.pointerId ? G = t.pointerId : W = G = null, M++, z(Yt), c = Ot.pointerY = t.pageY, u = Ot.pointerX = t.pageX, (mt || Ot.autoScroll) && Q(i.parentNode), !Ot.autoScroll || _t || l || !i.parentNode || i.getBBox || !i.parentNode._gsMaxScrollX || k.parentNode || (k.style.width = i.parentNode.scrollWidth + "px", i.parentNode.appendChild(k)), ee(), ct && (n = u * ct[0] + c * ct[2] + ct[4], c = u * ct[1] + c * ct[3] + ct[5], u = n), Ot.tween && Ot.tween.kill(), Ot.isThrowing = !1, e.killTweensOf(l || i, !0, qt), l && e.killTweensOf(i, !0, {
										scrollTo: 1
									}), Ot.tween = Ot.lockedAxis = null, (s.zIndexBoost || !_t && !l && s.zIndexBoost !== !1) && (i.style.zIndex = Ht.zIndex++), Ot.isPressed = !0, _ = !(!s.onDrag && !Ot._listeners.drag), !_t)
									for (r = Lt.length; --r > -1;) tt(Lt[r], "cursor", s.cursor || "move");
								at(Ot, "press", "onPress")
							}
						},
						oe = function (t) {
							var e, n, i, o, s = t;
							if (a && !r && Ot.isPressed && t) {
								if (Ot.pointerEvent = t, e = t.changedTouches) {
									if (t = e[0], t !== W && t.identifier !== G) {
										for (o = e.length; --o > -1 && (t = e[o]).identifier !== G;);
										if (0 > o) return
									}
								} else if (t.pointerId && G && t.pointerId !== G) return;
								if (C) t = K(t, !0);
								else {
									if (ut && mt && !vt && (n = t.pageX, i = t.pageY, ct && (o = n * ct[0] + i * ct[2] + ct[4], i = n * ct[1] + i * ct[3] + ct[5], n = o), vt = Math.abs(n - u) > Math.abs(i - c) && kt ? "x" : "y", Ot.vars.lockAxisOnTouchScroll !== !1 && (Ot.lockedAxis = "x" === vt ? "y" : "x", "function" == typeof Ot.vars.onLockAxis && Ot.vars.onLockAxis.call(Ot, s)), N && mt === vt)) return void ae(s);
									Ot.allowEventDefault || mt && (!vt || mt === vt) || s.cancelable === !1 || (s.preventDefault(), s.preventManipulation && s.preventManipulation())
								}
								Ot.autoScroll && (Wt = !0), se(t.pageX, t.pageY)
							}
						},
						se = function (t, e) {
							var n, i, r, o, s, a, l = 1 - Ot.dragResistance,
								f = 1 - Ot.edgeResistance;
							Ot.pointerX = t, Ot.pointerY = e, _t ? (o = Math.atan2(J.y - e, t - J.x) * $, s = Ot.y - o, Ot.y = o, s > 180 ? b -= 360 : -180 > s && (b += 360), r = m + (b - o) * l) : (ct && (a = t * ct[0] + e * ct[2] + ct[4], e = t * ct[1] + e * ct[3] + ct[5], t = a), i = e - c, n = t - u, At > i && i > -At && (i = 0), At > n && n > -At && (n = 0), (Ot.lockAxis || Ot.lockedAxis) && (n || i) && (a = Ot.lockedAxis, a || (Ot.lockedAxis = a = kt && Math.abs(n) > Math.abs(i) ? "y" : Et ? "x" : null, a && "function" == typeof Ot.vars.onLockAxis && Ot.vars.onLockAxis.call(Ot, Ot.pointerEvent)), "y" === a ? i = 0 : "x" === a && (n = 0)), r = m + n * l, o = b + i * l), it || rt ? (it && (r = it(r)), rt && (o = rt(o))) : w && (r > E ? r = E + (r - E) * f : P > r && (r = P + (r - P) * f), _t || (o > R ? o = R + (o - R) * f : F > o && (o = F + (o - F) * f))), _t || (r = Math.round(r), o = Math.round(o)), (Ot.x !== r || Ot.y !== o && !_t) && (_t ? Ot.endRotation = Ot.x = Ot.endX = r : (Et && (Ot.y = Ot.endY = o), kt && (Ot.x = Ot.endX = r)), et = !0, !Ot.isDragging && Ot.isPressed && (Ot.isDragging = !0, at(Ot, "dragstart", "onDragStart")))
						},
						ae = function (t, n) {
							if (a && Ot.isPressed && (!t || null == G || n || !(t.pointerId && t.pointerId !== G || t.changedTouches && !Rt(t.changedTouches, G)))) {
								Ot.isPressed = !1;
								var r, o, l, u, c = t,
									f = Ot.isDragging;
								if (ut ? (Dt(ut, "touchend", ae), Dt(ut, "touchmove", oe), Dt(ut, "touchcancel", ae), Dt(v, "touchstart", It)) : Dt(v, "mousemove", oe), Dt(v, "mouseup", ae), t && t.target && Dt(t.target, "mouseup", ae), et = !1, k.parentNode && k.parentNode.removeChild(k), ot) return t && Dt(t.target, "change", ae), zt(Lt, !1), at(Ot, "release", "onRelease"), at(Ot, "click", "onClick"), void(ot = !1);
								if (q(Yt), !_t)
									for (o = Lt.length; --o > -1;) tt(Lt[o], "cursor", s.cursor || "move");
								if (f && (Vt = D = S(), Ot.isDragging = !1), M--, t) {
									if (C && (t = K(t, !1)), r = t.changedTouches, r && (t = r[0], t !== W && t.identifier !== G)) {
										for (o = r.length; --o > -1 && (t = r[o]).identifier !== G;);
										if (0 > o) return
									}
									Ot.pointerEvent = c, Ot.pointerX = t.pageX, Ot.pointerY = t.pageY
								}
								return c && !f ? (ft && (s.snap || s.bounds) && Jt(s.throwProps), at(Ot, "release", "onRelease"), N && "touchmove" === c.type || (at(Ot, "click", "onClick"), u = c.target || c.srcElement || i, ht = S(), e.delayedCall(1e-5, function () {
									ht !== bt && Ot.enabled() && !Ot.isPressed && (u.click ? u.click() : v.createEvent && (l = v.createEvent("MouseEvents"), l.initMouseEvent("click", !0, !0, window, 1, Ot.pointerEvent.screenX, Ot.pointerEvent.screenY, Ot.pointerX, Ot.pointerY, !1, !1, !1, !1, 0, null), u.dispatchEvent(l)))
								}))) : (Jt(s.throwProps), C || Ot.allowEventDefault || !c || !s.dragClickables && Ut.call(Ot, c.target) || !f || mt && (!vt || mt !== vt) || c.cancelable === !1 || (c.preventDefault(), c.preventManipulation && c.preventManipulation()), at(Ot, "release", "onRelease")), f && at(Ot, "dragend", "onDragEnd"), !0
							}
						},
						le = function (t) {
							if (t && Ot.isDragging) {
								var e = t.target || t.srcElement || i.parentNode,
									n = e.scrollLeft - e._gsScrollX,
									r = e.scrollTop - e._gsScrollY;
								(n || r) && (u -= n, c -= r, e._gsScrollX += n, e._gsScrollY += r, se(Ot.pointerX, Ot.pointerY))
							}
						},
						ue = function (t) {
							var e = S(),
								n = 40 > e - ht,
								i = 40 > e - Vt;
							return n && bt !== ht ? void(bt = ht) : void((Ot.isPressed || i || n) && (t.preventDefault ? (t.preventDefault(), (n || i && Ot.vars.suppressClickOnDrag !== !1) && t.stopImmediatePropagation()) : t.returnValue = !1, t.preventManipulation && t.preventManipulation()))
						};
					nt = Ht.get(this.target), nt && nt.kill(), this.startDrag = function (t) {
						re(t), Ot.isDragging || (Ot.isDragging = !0, at(Ot, "dragstart", "onDragStart"))
					}, this.drag = oe, this.endDrag = function (t) {
						ae(t, !0)
					}, this.timeSinceDrag = function () {
						return Ot.isDragging ? 0 : (S() - Vt) / 1e3
					}, this.hitTest = function (t, e) {
						return Ht.hitTest(Ot.target, t, e)
					}, this.getDirection = function (t, e) {
						var n, i, r, s, a, l, u = "velocity" === t && o ? t : "object" != typeof t || _t ? "start" : "element";
						return "element" === u && (a = Xt(Ot.target), l = Xt(t)), n = "start" === u ? Ot.x - m : "velocity" === u ? o.getVelocity(this.target, $t) : a.left + a.width / 2 - (l.left + l.width / 2), _t ? 0 > n ? "counter-clockwise" : "clockwise" : (e = e || 2, i = "start" === u ? Ot.y - b : "velocity" === u ? o.getVelocity(this.target, Tt) : a.top + a.height / 2 - (l.top + l.height / 2), r = Math.abs(n / i), s = 1 / e > r ? "" : 0 > n ? "left" : "right", e > r && ("" !== s && (s += "-"), s += 0 > i ? "up" : "down"), s)
					}, this.applyBounds = function (t) {
						var e, n, i;
						return t && s.bounds !== t ? (s.bounds = t, Ot.update(!0)) : (Gt(!0), Qt(), w && (e = Ot.x, n = Ot.y, w && (e > E ? e = E : P > e && (e = P), n > R ? n = R : F > n && (n = F)), (Ot.x !== e || Ot.y !== n) && (i = !0, Ot.x = Ot.endX = e, _t ? Ot.endRotation = e : Ot.y = Ot.endY = n, et = !0, Yt()), Ot.isThrowing && (i || Ot.endX > E || Ot.endX < P || Ot.endY > R || Ot.endY < F) && Jt(s.throwProps, i)), Ot)
					}, this.update = function (t, e) {
						var n = Ot.x,
							r = Ot.y;
						return te(), t ? Ot.applyBounds() : (et && e && Yt(), Gt(!0)), Ot.isPressed && (kt && Math.abs(n - Ot.x) > .01 || Et && Math.abs(r - Ot.y) > .01 && !_t) && ee(), Ot.autoScroll && (Q(i.parentNode), Wt = !0, Yt()), Ot
					}, this.enable = function (t) {
						var r, u, c;
						if ("soft" !== t) {
							for (u = Lt.length; --u > -1;) c = Lt[u], Nt(c, "mousedown", re), Nt(c, "touchstart", re), Nt(c, "click", ue, !0), _t || tt(c, "cursor", s.cursor || "move"), tt(c, "touchCallout", "none"), tt(c, "touchAction", kt === Et || l ? "none" : kt ? "pan-y" : "pan-x");
							zt(Lt, !1)
						}
						return U(Ot.target, le), a = !0, o && "soft" !== t && o.track(l || i, xt ? "x,y" : _t ? "rotation" : "top,left"), l && l.enable(), i._gsDragID = r = "d" + O++, A[r] = this, l && (l.element._gsDragID = r), e.set(i, {
							x: "+=0",
							overwrite: !1
						}), gt = {
							t: i,
							data: C ? V : i._gsTransform,
							tween: {},
							setRatio: C ? function () {
								e.set(i, B)
							} : n._internals.setTransformRatio || n._internals.set3DTransformRatio
						}, Ot.update(!0), Ot
					}, this.disable = function (t) {
						var e, n, r = Ot.isDragging;
						if (!_t)
							for (e = Lt.length; --e > -1;) tt(Lt[e], "cursor", null);
						if ("soft" !== t) {
							for (e = Lt.length; --e > -1;) n = Lt[e], tt(n, "touchCallout", null), tt(n, "touchAction", null), Dt(n, "mousedown", re), Dt(n, "touchstart", re), Dt(n, "click", ue);
							zt(Lt, !0), ut && (Dt(ut, "touchcancel", ae), Dt(ut, "touchend", ae), Dt(ut, "touchmove", oe)), Dt(v, "mouseup", ae), Dt(v, "mousemove", oe)
						}
						return X(i, le), a = !1, o && "soft" !== t && o.untrack(l || i, xt ? "x,y" : _t ? "rotation" : "top,left"), l && l.disable(), q(Yt), Ot.isDragging = Ot.isPressed = ot = !1, r && at(Ot, "dragend", "onDragEnd"), Ot
					}, this.enabled = function (t, e) {
						return arguments.length ? t ? Ot.enable(e) : Ot.disable(e) : a
					}, this.kill = function () {
						return Ot.isThrowing = !1, e.killTweensOf(l || i, !0, qt), Ot.disable(), delete A[i._gsDragID], Ot
					}, -1 !== wt.indexOf("scroll") && (l = this.scrollProxy = new Bt(i, H({
						onKill: function () {
							Ot.isPressed && ae(null)
						}
					}, s)), i.style.overflowY = Et && !Pt ? "auto" : "hidden", i.style.overflowX = kt && !Pt ? "auto" : "hidden", i = l.content), s.force3D !== !1 && e.set(i, {
						force3D: !0
					}), _t ? qt.rotation = 1 : (kt && (qt[$t] = 1), Et && (qt[Tt] = 1)), _t ? (B = d, V = B.css, B.overwrite = !1) : xt && (B = kt && Et ? f : kt ? h : p, V = B.css, B.overwrite = !1), this.enable()
				},
				Vt = Ht.prototype = new t;
			Vt.constructor = Ht, Vt.pointerX = Vt.pointerY = 0, Vt.isDragging = Vt.isPressed = !1, Ht.version = "0.14.3", Ht.zIndex = 1e3, Nt(v, "touchcancel", function () {}), Nt(v, "contextmenu", function (t) {
				var e;
				for (e in A) A[e].isPressed && A[e].endDrag()
			}), Ht.create = function (t, n) {
				"string" == typeof t && (t = e.selector(t));
				for (var i = t && 0 !== t.length ? At(t) ? Ot(t) : [t] : [], r = i.length; --r > -1;) i[r] = new Ht(i[r], n);
				return i
			}, Ht.get = function (t) {
				return A[(Z(t) || {})._gsDragID]
			}, Ht.timeSinceDrag = function () {
				return (S() - D) / 1e3
			};
			var Wt = {},
				Ut = function (t) {
					var e, n, i = 0,
						r = 0;
					for (t = Z(t), e = t.offsetWidth, n = t.offsetHeight; t;) i += t.offsetTop, r += t.offsetLeft, t = t.offsetParent;
					return {
						top: i,
						left: r,
						width: e,
						height: n
					}
				},
				Xt = function (t, e) {
					if (t === window) return Wt.left = Wt.top = 0, Wt.width = Wt.right = y.clientWidth || t.innerWidth || v.body.clientWidth || 0, Wt.height = Wt.bottom = (t.innerHeight || 0) - 20 < y.clientHeight ? y.clientHeight : t.innerHeight || v.body.clientHeight || 0, Wt;
					var n = t.pageX !== e ? {
						left: t.pageX - W(),
						top: t.pageY - V(),
						right: t.pageX - W() + 1,
						bottom: t.pageY - V() + 1
					} : t.nodeType || t.left === e || t.top === e ? C ? Ut(t) : Z(t).getBoundingClientRect() : t;
					return n.right === e && n.width !== e ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : n.width === e && (n = {
						width: n.right - n.left,
						height: n.bottom - n.top,
						right: n.right,
						left: n.left,
						bottom: n.bottom,
						top: n.top
					}), n
				};
			return Ht.hitTest = function (t, e, n) {
				if (t === e) return !1;
				var i, r, o, s = Xt(t),
					a = Xt(e),
					l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
				return l || !n ? !l : (o = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, i = {
					left: Math.max(s.left, a.left),
					top: Math.max(s.top, a.top)
				}, i.width = Math.min(s.right, a.right) - i.left, i.height = Math.min(s.bottom, a.bottom) - i.top, !(i.width < 0 || i.height < 0) && (o ? (n *= .01, r = i.width * i.height, r >= s.width * s.height * n || r >= a.width * a.height * n) : i.width > n && i.height > n))
			}, k.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ht
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t) {
		"use strict";
		var e = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[t]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), require("../plugins/CSSPlugin.js"), module.exports = e())
	}("Draggable");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict";
	var t, e, n, i, r = {
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
		u = _gsScope._gsDefine.globals.com.greensock.plugins,
		c = {
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
		f = function (t, e, n) {
			return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
		},
		h = function (t) {
			if ("" === t || null == t || "none" === t) return c.transparent;
			if (c[t]) return c[t];
			if ("number" == typeof t) return [t >> 16, t >> 8 & 255, 255 & t];
			if ("#" === t.charAt(0)) return 4 === t.length && (t = "#" + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2) + t.charAt(3) + t.charAt(3)), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t];
			if ("hsl" === t.substr(0, 3)) {
				t = t.match(a);
				var e = Number(t[0]) % 360 / 360,
					n = Number(t[1]) / 100,
					i = Number(t[2]) / 100,
					r = .5 >= i ? i * (n + 1) : i + n - i * n,
					o = 2 * i - r;
				return t.length > 3 && (t[3] = Number(t[3])), t[0] = f(e + 1 / 3, o, r), t[1] = f(e, o, r), t[2] = f(e - 1 / 3, o, r), t
			}
			for (var s = t.match(a) || c.transparent, l = s.length; --l > -1;) s[l] = Number(s[l]);
			return s
		},
		p = function (t, e, n, i) {
			this.getter = e, this.setter = n;
			var r = h(t[e]());
			this.proxy = {
				r: r[0],
				g: r[1],
				b: r[2],
				a: r.length > 3 ? r[3] : 1
			}, i && (this._next = i, i._prev = this)
		},
		d = [],
		g = function () {
			var n = d.length;
			if (0 !== n) {
				for (; --n > -1;) d[n].draw(), d[n]._gsDraw = !1;
				d.length = 0
			} else t.removeEventListener("tick", g), e = !1
		},
		m = function (t, e) {
			var n = "x" === e ? "y" : "x",
				i = "_gs_" + t;
			o[t] = function () {
				return this["get" + t]()[e]
			}, s[t] = function (r) {
				var o = this["get" + t](),
					s = this[i];
				return s || (s = this[i] = {}), s[e] = r, s[n] = o[n], this[t](s), this
			}
		},
		v = function (t, e) {
			return function (n) {
				return arguments.length ? e(n) : t()
			}
		},
		y = function (t, e) {
			var n, i, a, l, u = [];
			for (n in e)
				if (i = e[n], "bezier" !== n && "autoDraw" !== n && "set" !== n.substr(0, 3) && void 0 === t[n] && (u.push(n), delete e[n], n = "set" + n.charAt(0).toUpperCase() + n.substr(1), e[n] = i), r[n]) {
					if (1 === r[n]) return e[n + "X"] = e[n + "Y"] = e[n], delete e[n], y(t, e);
					!t[n] && s[n] && (l = t.prototype || t, l[n] = v(o[n], s[n]))
				} else if ("bezier" === n)
				for (i = i instanceof Array ? i : i.values || [], a = i.length; --a > -1;) 0 === a ? u = u.concat(y(t, i[a])) : y(t, i[a]);
			return u
		},
		b = function (t) {
			var e, n = {};
			for (e in t) n[e] = t[e];
			return n
		};
	for (i in r) 1 === r[i] && (m(i, "x"), m(i, "y"));
	var w = _gsScope._gsDefine.plugin({
		propName: "kinetic",
		API: 2,
		version: "0.5.2",
		init: function (e, i, o) {
			var s, a, c, f, d, g;
			if (!n && (n = parseInt(Kinetic.version.split(".")[0], 10) < 5)) throw "The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";
			this._overwriteProps = y(e, i), this._target = e, this._layer = i.autoDraw !== !1 ? e.getLayer() : null, !t && this._layer && (t = o.constructor.ticker);
			for (s in i) {
				if (a = i[s], 2 === r[s]) f = this._firstSP = new p(e, s, s, this._firstSP), a = h(a), f.proxy.r !== a[0] && this._addTween(f.proxy, "r", f.proxy.r, a[0], s), f.proxy.g !== a[1] && this._addTween(f.proxy, "g", f.proxy.g, a[1], s), f.proxy.b !== a[2] && this._addTween(f.proxy, "b", f.proxy.b, a[2], s), (a.length > 3 || 1 !== f.proxy.a) && f.proxy.a !== a[3] && this._addTween(f.proxy, "a", f.proxy.a, a.length > 3 ? a[3] : 1, s);
				else if ("bezier" === s) {
					if (d = u.BezierPlugin, !d) throw "BezierPlugin not loaded";
					d = this._bezier = new d, "object" == typeof a && a.autoRotate === !0 && (a.autoRotate = ["x", "y", "rotation", 0, !1]), d._onInitTween(e, a, o), this._overwriteProps = this._overwriteProps.concat(d._overwriteProps), this._addTween(d, "setRatio", 0, 1, s)
				} else if ("rotation" !== s && "rotationDeg" !== s || "string" != typeof a || !l.test(a)) a instanceof Array ? this._initArrayTween(e[s](), a, s) : "autoDraw" !== s && (c = "get" + s.substr(3), this._addTween(e, s, ("function" == typeof e[s] ? e["get" !== c && "function" == typeof e[c] ? c : s]() : e[s]) || 0, a, s));
				else {
					if (g = u.DirectionalRotationPlugin, !g) throw "DirectionalRotationPlugin not loaded";
					g = this._directionalRotation = new g, c = {
						useRadians: !1
					}, c[s] = a, g._onInitTween(e, c, o), this._addTween(g, "setRatio", 0, 1, s)
				}
				this._overwriteProps.push(s)
			}
			return !0
		},
		kill: function (t) {
			return t = b(t), y(this._target, t), this._bezier && this._bezier._kill(t), this._directionalRotation && this._directionalRotation._kill(t), this._super._kill.call(this, t)
		},
		round: function (t, e) {
			return t = b(t), y(this._target, t), this._bezier && this._bezier._roundProps(t, e), this._super._roundProps.call(this, t, e)
		},
		set: function (n) {
			this._super.setRatio.call(this, n);
			var i, r, o, s, a, l, u = this._firstSP,
				c = this._layer,
				f = this._arrayTweens;
			if (u)
				for (a = this._target; u;) l = u.proxy, a[u.setter]((1 !== l.a ? "rgba(" : "rgb(") + (0 | l.r) + ", " + (0 | l.g) + ", " + (0 | l.b) + (1 !== l.a ? ", " + l.a : "") + ")"), u = u._next;
			if (f) {
				for (i = f.length; --i > -1;) r = f[i], s = r.s + r.c * n, r.a[r.i] = 1e-6 > s && s > -1e-6 ? 0 : s;
				for (o in this._arrayProps) this._target[o](this._arrayProps[o])
			}
			c && !c._gsDraw && (d.push(c), c._gsDraw = !0, e || (t.addEventListener("tick", g), e = !0))
		}
	});
	i = w.prototype, i._initArrayTween = function (t, e, n) {
		this._arrayTweens || (this._arrayTweens = [], this._arrayProps = {});
		for (var i, r, o = t.length, s = this._arrayTweens; --o > -1;) i = t[o], r = e[o], i !== r && s.push({
			a: t,
			i: o,
			s: i,
			c: r - i
		});
		s.length && (this._arrayProps[n] = t)
	}
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var SocialShareKit = function () {
	function t(t) {
		return b(t).share()
	}

	function e(t) {
		"loading" != document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function () {
			"loading" != document.readyState && t()
		})
	}

	function n(t) {
		return document.querySelectorAll(t)
	}

	function i(t, e) {
		for (var n = 0; n < t.length; n++) e(t[n], n)
	}

	function r(t, e, n) {
		t.addEventListener ? t.addEventListener(e, n) : t.attachEvent("on" + e, function () {
			n.call(t)
		})
	}

	function o(t, e, n) {
		t.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
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
			n = 400,
			i = document.documentElement.clientWidth / 2 - e / 2,
			r = (document.documentElement.clientHeight - n) / 2,
			o = "status=1,resizable=yes,width=" + e + ",height=" + n + ",top=" + r + ",left=" + i,
			s = window.open(t, "", o);
		return s.focus(), s
	}

	function u(t, e, n) {
		var i, r = d(t, e, n),
			o = c(t, e, n, r),
			s = "undefined" != typeof r.title ? r.title : f(e),
			a = "undefined" != typeof r.text ? r.text : h(e),
			l = r.image ? r.image : p("og:image"),
			u = "undefined" != typeof r.via ? r.via : p("twitter:site"),
			g = {
				shareUrl: o,
				title: s,
				text: a,
				image: l,
				via: u,
				options: t,
				shareUrlEncoded: function () {
					return encodeURIComponent(this.shareUrl)
				}
			};
		switch (e) {
			case "facebook":
				i = "https://www.facebook.com/share.php?u=" + g.shareUrlEncoded();
				break;
			case "twitter":
				i = "https://twitter.com/intent/tweet?url=" + g.shareUrlEncoded() + "&text=" + encodeURIComponent(s + (a && s ? " - " : "") + a), u && (i += "&via=" + u.replace("@", ""));
				break;
			case "google-plus":
				i = "https://plus.google.com/share?url=" + g.shareUrlEncoded();
				break;
			case "pinterest":
				i = "https://pinterest.com/pin/create/button/?url=" + g.shareUrlEncoded() + "&description=" + encodeURIComponent(a), l && (i += "&media=" + encodeURIComponent(l));
				break;
			case "tumblr":
				i = "https://www.tumblr.com/share/link?url=" + g.shareUrlEncoded() + "&name=" + encodeURIComponent(s) + "&description=" + encodeURIComponent(a);
				break;
			case "linkedin":
				i = "https://www.linkedin.com/shareArticle?mini=true&url=" + g.shareUrlEncoded() + "&title=" + encodeURIComponent(s) + "&summary=" + encodeURIComponent(a);
				break;
			case "vk":
				i = "https://vkontakte.ru/share.php?url=" + g.shareUrlEncoded();
				break;
			case "email":
				i = "mailto:?subject=" + encodeURIComponent(s) + "&body=" + encodeURIComponent(s + "\n" + o + "\n\n" + a + "\n")
		}
		return g.networkUrl = i, t.onBeforeOpen && t.onBeforeOpen(n, e, g), g.networkUrl
	}

	function c(t, e, n, i) {
		return i = i || d(t, e, n), i.url || window.location.href
	}

	function f(t) {
		var e;
		return "twitter" == t && (e = p("twitter:title")), e || document.title
	}

	function h(t) {
		var e;
		return "twitter" == t && (e = p("twitter:description")), e || p("description")
	}

	function p(t, e) {
		var i, r = n("meta[" + (e ? e : 0 === t.indexOf("og:") ? "property" : "name") + '="' + t + '"]');
		return r.length && (i = r[0].getAttribute("content") || ""), i || ""
	}

	function d(t, e, n) {
		var i, r, o, s, a = ["url", "title", "text", "image"],
			l = {},
			u = n.parentNode;
		"twitter" == e && a.push("via");
		for (s in a) r = a[s], o = "data-" + r, i = n.getAttribute(o) || u.getAttribute(o) || (t[e] && "undefined" != typeof t[e][r] ? t[e][r] : t[r]), "undefined" != typeof i && (l[r] = i);
		return l
	}

	function g(t, e) {
		var n = document.createElement("div");
		n.innerHTML = e, n.className = "ssk-num", t.appendChild(n)
	}

	function m(t, e, n, i) {
		var r, o, s, a = encodeURIComponent(e);
		switch (t) {
			case "facebook":
				r = "https://graph.facebook.com/?id=" + a, o = function (t) {
					return i(t.shares ? t.shares : 0)
				};
				break;
			case "twitter":
				n && n.twitter && n.twitter.countCallback && n.twitter.countCallback(e, i);
				break;
			case "google-plus":
				return r = "https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ", s = '[{"method":"pos.plusones.get","id":"p","params":{"id":"' + e + '","userId":"@viewer","groupId":"@self","nolog":true},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]', o = function (t) {
					if (t = JSON.parse(t), t.length) return i(t[0].result.metadata.globalCounts.count)
				}, void v(r, o, s);
			case "linkedin":
				r = "https://www.linkedin.com/countserv/count/share?url=" + a, o = function (t) {
					return i(t.count)
				};
				break;
			case "pinterest":
				r = "https://api.pinterest.com/v1/urls/count.json?url=" + a, o = function (t) {
					return i(t.count)
				};
				break;
			case "vk":
				r = "https://vk.com/share.php?act=count&url=" + a, o = function (t) {
					return i(t)
				}
		}
		r && o && y(t, r, o, s)
	}

	function v(t, e, n) {
		var i = new XMLHttpRequest;
		i.onreadystatechange = function () {
			4 === this.readyState && this.status >= 200 && this.status < 400 && e(this.responseText)
		}, i.open("POST", t, !0), i.setRequestHeader("Content-Type", "application/json"), i.send(n)
	}

	function y(t, e, n) {
		var i = "cb_" + t + "_" + Math.round(1e5 * Math.random()),
			r = document.createElement("script");
		return window[i] = function (t) {
			try {
				delete window[i]
			} catch (e) {}
			document.body.removeChild(r), n(t)
		}, "vk" == t ? window.VK = {
			Share: {
				count: function (t, e) {
					window[i](e)
				}
			}
		} : "google-plus" == t && (window.services = {
			gplus: {
				cb: window[i]
			}
		}), r.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + i, document.body.appendChild(r), !0
	}
	var b, w, x = /(twitter|facebook|google-plus|pinterest|tumblr|vk|linkedin|email)/,
		_ = "*|*";
	return w = function (t) {
		var e = t || {},
			i = e.selector || ".ssk";
		this.nodes = n(i), this.options = e
	}, w.prototype = {
		share: function () {
			function t(t) {
				var e, n = a(t),
					i = s(n),
					r = i[0];
				if (i && (e = u(h, r, n))) {
					if (window.twttr && n.getAttribute("href").indexOf("twitter.com/intent/") !== -1) return void n.setAttribute("href", e);
					if ("email" != r) {
						var o = l(e);
						if (h.onOpen && h.onOpen(n, r, e, o), h.onClose) var c = window.setInterval(function () {
							o.closed !== !1 && (window.clearInterval(c), h.onClose(n, r, e, o))
						}, 250)
					} else document.location = e
				}
			}

			function n() {
				var t, e;
				for (t in p) e = t.split(_),
					function (t) {
						m(e[0], e[1], h, function (e) {
							for (var n in t) g(t[n], e)
						})
					}(p[t])
			}
			var f = this.nodes,
				h = this.options,
				p = {};
			return e(function () {
				f.length && (i(f, function (e) {
					var n, i = s(e);
					i && (o(e, "click", t), r(e, "click", t), e.parentNode.className.indexOf("ssk-count") !== -1 && (i = i[0], n = i + _ + c(h, i, e), n in p || (p[n] = []), p[n].push(e)))
				}), n())
			}), this.nodes
		}
	}, b = function (t) {
		return new w(t)
	}, {
		init: t
	}
}();
window.SocialShareKit = SocialShareKit,
	function (t) {
		function e() {
			n(), i()
		}

		function n() {
			t("#mobile-button").on("click", function () {
				var e = t("#mobile-navigation");
				e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
			}), t("#mobile-navigation #nav-links li").on("click", function () {
				var e = t("#mobile-navigation");
				e.hasClass("active") && e.removeClass("active")
			}), t("#menu_btn").on("click", function () {
				var e = t("#main_navigation");
				e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
			}), t("html").click(function () {
				var e = t("#main_navigation");
				t(e).removeClass("active")
			}), t("#main_navigation").click(function (t) {
				t.stopPropagation()
			})
		}

		function i() {
			var e = ".menu-option",
				n = ".nav-image";
			t(e).attr("background-id");
			t(".menu-option").hover(function () {
				var e = t(this).attr("background-id");
				t(n + "[background-id=" + e + "]").addClass("active")
			}, function () {
				var e = t(this).attr("background-id");
				t(n + "[background-id=" + e + "]").removeClass("active")
			})
		}
		t(document).ready(e)
	}(jQuery),
	function (t) {
		function e() {
			function e(e) {
				var i = '.dest[page-slide="' + e + '"]',
					n = t(i).offset().top,
					r = n - g;
				m.stop().animate({
					scrollTop: r
				}, 500, "easeInOutQuint")
			}
			t(window).load(i), t.fn.exists = function () {
				return this.length > 0
			}, f = t(".dest"), d = t(window), p = t(".destup"), g = t("#main_navigation").height(), m = t("html,body"), v = t(".slide-link"), y = d.innerHeight(), "undefined" != typeof SocialShareKit && SocialShareKit.init(), "undefined" != typeof browserCheck && "ie9" == browserCheck && (bravePlaceholder(), t(".addpl").on("focus", function () {
				var e = t(this).attr("id");
				t(this).val() == defaultTextHolder[e] && t(this).val("")
			}), t(".addpl").on("blur", function () {
				var e = t(this).attr("id");
				"" == t(this).val() && t(this).val(defaultTextHolder[e])
			})), v.click(function (i) {
				i.preventDefault(), _ = t(this).attr("page-slide"), e(_)
			}), u() || (Scrollax.defaults.offset = 200, new Scrollax(window).init()), n(), o(), s(), a(), h(), i(), d.scroll(t.throttle(60, i)), t(window).resize(t.debounce(250, r))
		}

		function i() {
			return window.requestAnimationFrame(l)
		}

		function n() {
			var e = d.height() - t("#main_navigation").height();
			d.width();
			e < 660 && (e = 660), t(".fullscreen").css({
				height: e
			})
		}

		function r() {
			n(), o(), a(), l(), s()
		}

		function o() {
			var e, i = d.height() - t("#main_navigation").height(),
				n = d.width();
			i < 660 && (i = n <= 660 ? 660 : 960), n <= 1440 ? e = 300 : n <= 1100 ? e = 200 : n <= 660 ? e = 0 : n > 1440 && (e = 400);
			var r = i + e;
			t(".fullscreen-header").css({
				height: r
			})
		}

		function s() {
			var e, i = d.height() - t("#main_navigation").height(),
				n = d.width();
			i < 660 && (i = n <= 660 ? 660 : 960), n <= 1440 ? e = 300 : n <= 1100 ? e = 200 : n <= 660 ? e = 0 : n > 1440 && (e = 400);
			var r = i + e;
			t(".bx-viewport").css({
				height: r
			})
		}

		function a() {
			var e = d.height(),
				i = e / 2,
				n = t(".hero-pager").height() / 2,
				r = i - n;
			e > 660 ? t(".hero-pager").css({
				top: r
			}) : t(".hero-pager").css("top", "247px")
		}

		function l() {
			t(".srbt-scrollview").each(c)
		}

		function c() {
			var e = this.getBoundingClientRect(),
				i = t(this),
				n = i[0].hasAttribute("srbt-scrollview-offset") ? parseInt(i.attr("srbt-scrollview-offset")) : 150;
			e.top + n < y && e.bottom >= -n ? i.hasClass("srbt-inview") || i.addClass("srbt-inview") : i.hasClass("srbt-inview") && (e.top + 100 > y || e.bottom < -100) && i.removeClass("srbt-inview")
		}

		function u() {
			return d.innerWidth() < 990
		}

		function h() {
			u() || t(".video-container").each(function () {
				var e = t(this),
					i = t("video", e);
				i.length && (i[0].load(), i.on("canplay", function () {
					e.addClass("srbt-canplay"), setTimeout(function () {
						i[0].play()
					}, 250)
				}))
			})
		}
		var f, d, p, g, m, v, _, y;
		t(document).ready(e), t("#testimonial-slider").bxSlider({
			touchEnabled: !0,
			mode: "fade",
			auto: !0,
			pause: 8e3,
			infiniteLoop: !0,
			pagerType: "short"
		})
	}(jQuery);
var pageFadeInTime = 500,
	pageFadeOutTime = 500;
	jQuery(document).ready(function (t) {
		function e(e) {
			var n = t('.dest[page-slide="' + e + '"]').offset().top,
				i = n - menuHeight;
			htmlbody.stop().animate({
				scrollTop: i
			}, 500, "easeInOutQuint")
		}

		function n() {
			var e = t(window).width();
			t(".fade-in").each(function () {
				e >= 990 && 1 == t(this).css("opacity") && t(this).fadeTo(600, 0), e <= 990 && 0 == t(this).css("opacity") && t(this).fadeTo(600, 1)
			})
		}

		function i() {
			var e = t(window).width();
			e <= 990 && t(".fade-in").css("opacity", "1")
		}
		jQuery.fn.exists = function () {
			return this.length > 0
		}, "undefined" != typeof SocialShareKit && SocialShareKit.init(), "undefined" != typeof browserCheck && "ie9" == browserCheck && (bravePlaceholder(), t(".addpl").on("focus", function () {
			var e = t(this).attr("id");
			t(this).val() == defaultTextHolder[e] && t(this).val("")
		}), t(".addpl").on("blur", function () {
			var e = t(this).attr("id");
			"" == t(this).val() && t(this).val(defaultTextHolder[e])
		})), destination = t(".dest"), destinationUp = t(".destup"), menuHeight = t("#main_navigation").height(), mywindow = t(window), htmlbody = t("html,body");
		var r = t(".slide-link");
		mywindow.scroll(function () {
			0 == mywindow.scrollTop() && t('.sub-navigation li[page-slide="2"]').removeClass("active")
		}), r.click(function (n) {
			n.preventDefault(), dataslide = t(this).attr("page-slide"), e(dataslide)
		}), resizeFullscreen(), resizeHeader(), fade(), expandAnimation(), n(), i(), resizeFullscreen(), resizeHeader(), fade(), initiateParallax(), positionSliderControls(), resizeViewport(), videodeo(), t(window).scroll(function () {
			fade(), expandAnimation()
		}), t(window).resize(function () {
			i(), slideOffset = t("#home-hero").height(), resizeFullscreen(), fade(), resizeHeader(), expandAnimation(), t.stellar("refresh"), positionSliderControls(), resizeViewport()
		}), t("#testimonial-slider").bxSlider({
			touchEnabled: !0,
			mode: "fade",
			auto: !0,
			pause: 8e3,
			infiniteLoop: !0,
			pagerType: "short"
		})
	});
var lastScrollTop = 0;
$(window).scroll(function (t) {
	if ($("#navigation").hasClass("fixed")) {
		var e = $(this).scrollTop();
		e > lastScrollTop ? $("#nav-logo").addClass("active") : $("#nav-logo").removeClass("active"), lastScrollTop = e
	}
});
var pageFadeInTime = 500,
	pageFadeOutTime = 500;
$(function () {
		$("a").click(function (t) {
			function e() {
				$(location).attr("href", i)
			}
			var n = jQuery(this).attr("href");
			if (jQuery(this).hasClass("prevent-default") && t.preventDefault(), "_blank" == jQuery(this).attr("target")) {
				t.preventDefault();
				var i = $(this).attr("href");
				return void window.open(i, "_blank")
			}
			if ((!(n.indexOf("#") >= 0) || jQuery(this).hasClass("loader-link")) && "" != n) {
				t.preventDefault(), $("#loader-screen").addClass("active");
				var i = $(this).attr("href");
				setTimeout(e, 500)
			}
		})
	}), $(function () {
		setTimeout(function () {
			$("#loader-screen").removeClass("active"), $(document.body).addClass("srbt-loaded")
		}, 1e3)
	}),
	function (t, e, n) {
		"use strict";

		function i(t, e) {
			return e = e || Error,
				function () {
					var n, i, r = 2,
						o = arguments,
						s = o[0],
						a = "[" + (t ? t + ":" : "") + s + "] ",
						l = o[1];
					for (a += l.replace(/\{\d+\}/g, function (t) {
							var e = +t.slice(1, -1),
								n = e + r;
							return n < o.length ? wt(o[n]) : t
						}), a += "\nhttp://errors.angularjs.org/1.5.2/" + (t ? t + "/" : "") + s, i = r, n = "?"; i < o.length; i++, n = "&") a += n + "p" + (i - r) + "=" + encodeURIComponent(wt(o[i]));
					return new e(a)
				}
		}

		function r(t) {
			if (null == t || E(t)) return !1;
			if (Ui(t) || $(t) || Ri && t instanceof Ri) return !0;
			var e = "length" in Object(t) && t.length;
			return T(e) && (e >= 0 && (e - 1 in t || t instanceof Array) || "function" == typeof t.item)
		}

		function o(t, e, n) {
			var i, s;
			if (t)
				if (C(t))
					for (i in t) "prototype" == i || "length" == i || "name" == i || t.hasOwnProperty && !t.hasOwnProperty(i) || e.call(n, t[i], i, t);
				else if (Ui(t) || r(t)) {
				var a = "object" != typeof t;
				for (i = 0, s = t.length; i < s; i++)(a || i in t) && e.call(n, t[i], i, t)
			} else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
			else if (_(t))
				for (i in t) e.call(n, t[i], i, t);
			else if ("function" == typeof t.hasOwnProperty)
				for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
			else
				for (i in t) Ai.call(t, i) && e.call(n, t[i], i, t);
			return t
		}

		function s(t, e, n) {
			for (var i = Object.keys(t).sort(), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
			return i
		}

		function a(t) {
			return function (e, n) {
				t(n, e)
			}
		}

		function l() {
			return ++Wi
		}

		function u(t, e) {
			e ? t.$$hashKey = e : delete t.$$hashKey
		}

		function c(t, e, n) {
			for (var i = t.$$hashKey, r = 0, o = e.length; r < o; ++r) {
				var s = e[r];
				if (x(s) || C(s))
					for (var a = Object.keys(s), l = 0, f = a.length; l < f; l++) {
						var h = a[l],
							p = s[h];
						n && x(p) ? S(p) ? t[h] = new Date(p.valueOf()) : k(p) ? t[h] = new RegExp(p) : p.nodeName ? t[h] = p.cloneNode(!0) : I(p) ? t[h] = p.clone() : (x(t[h]) || (t[h] = Ui(p) ? [] : {}), c(t[h], [p], !0)) : t[h] = p
					}
			}
			return u(t, i), t
		}

		function f(t) {
			return c(t, ji.call(arguments, 1), !1)
		}

		function h(t) {
			return c(t, ji.call(arguments, 1), !0)
		}

		function p(t) {
			return parseInt(t, 10)
		}

		function d(t, e) {
			return f(Object.create(t), e)
		}

		function g() {}

		function m(t) {
			return t
		}

		function v(t) {
			return function () {
				return t
			}
		}

		function y(t) {
			return C(t.toString) && t.toString !== qi
		}

		function b(t) {
			return "undefined" == typeof t
		}

		function w(t) {
			return "undefined" != typeof t
		}

		function x(t) {
			return null !== t && "object" == typeof t
		}

		function _(t) {
			return null !== t && "object" == typeof t && !Bi(t)
		}

		function $(t) {
			return "string" == typeof t
		}

		function T(t) {
			return "number" == typeof t
		}

		function S(t) {
			return "[object Date]" === qi.call(t)
		}

		function C(t) {
			return "function" == typeof t
		}

		function k(t) {
			return "[object RegExp]" === qi.call(t)
		}

		function E(t) {
			return t && t.window === t
		}

		function A(t) {
			return t && t.$evalAsync && t.$watch
		}

		function O(t) {
			return "[object File]" === qi.call(t)
		}

		function P(t) {
			return "[object FormData]" === qi.call(t)
		}

		function M(t) {
			return "[object Blob]" === qi.call(t)
		}

		function N(t) {
			return "boolean" == typeof t
		}

		function D(t) {
			return t && C(t.then)
		}

		function R(t) {
			return t && T(t.length) && Xi.test(qi.call(t))
		}

		function L(t) {
			return "[object ArrayBuffer]" === qi.call(t)
		}

		function I(t) {
			return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
		}

		function j(t) {
			var e, n = {},
				i = t.split(",");
			for (e = 0; e < i.length; e++) n[i[e]] = !0;
			return n
		}

		function F(t) {
			return Oi(t.nodeName || t[0] && t[0].nodeName)
		}

		function z(t, e) {
			var n = t.indexOf(e);
			return n >= 0 && t.splice(n, 1), n
		}

		function q(t, e) {
			function i(t, e) {
				var n, i = e.$$hashKey;
				if (Ui(t))
					for (var o = 0, s = t.length; o < s; o++) e.push(r(t[o]));
				else if (_(t))
					for (n in t) e[n] = r(t[n]);
				else if (t && "function" == typeof t.hasOwnProperty)
					for (n in t) t.hasOwnProperty(n) && (e[n] = r(t[n]));
				else
					for (n in t) Ai.call(t, n) && (e[n] = r(t[n]));
				return u(e, i), e
			}

			function r(t) {
				if (!x(t)) return t;
				var e = a.indexOf(t);
				if (e !== -1) return l[e];
				if (E(t) || A(t)) throw Hi("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
				var r = !1,
					o = s(t);
				return o === n && (o = Ui(t) ? [] : Object.create(Bi(t)), r = !0), a.push(t), l.push(o), r ? i(t, o) : o
			}

			function s(t) {
				switch (qi.call(t)) {
					case "[object Int8Array]":
					case "[object Int16Array]":
					case "[object Int32Array]":
					case "[object Float32Array]":
					case "[object Float64Array]":
					case "[object Uint8Array]":
					case "[object Uint8ClampedArray]":
					case "[object Uint16Array]":
					case "[object Uint32Array]":
						return new t.constructor(r(t.buffer));
					case "[object ArrayBuffer]":
						if (!t.slice) {
							var e = new ArrayBuffer(t.byteLength);
							return new Uint8Array(e).set(new Uint8Array(t)), e
						}
						return t.slice(0);
					case "[object Boolean]":
					case "[object Number]":
					case "[object String]":
					case "[object Date]":
						return new t.constructor(t.valueOf());
					case "[object RegExp]":
						var n = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]);
						return n.lastIndex = t.lastIndex, n;
					case "[object Blob]":
						return new t.constructor([t], {
							type: t.type
						})
				}
				if (C(t.cloneNode)) return t.cloneNode(!0)
			}
			var a = [],
				l = [];
			if (e) {
				if (R(e) || L(e)) throw Hi("cpta", "Can't copy! TypedArray destination cannot be mutated.");
				if (t === e) throw Hi("cpi", "Can't copy! Source and destination are identical.");
				return Ui(e) ? e.length = 0 : o(e, function (t, n) {
					"$$hashKey" !== n && delete e[n]
				}), a.push(t), l.push(e), i(t, e)
			}
			return r(t)
		}

		function B(t, e) {
			if (Ui(t)) {
				e = e || [];
				for (var n = 0, i = t.length; n < i; n++) e[n] = t[n]
			} else if (x(t)) {
				e = e || {};
				for (var r in t) "$" === r.charAt(0) && "$" === r.charAt(1) || (e[r] = t[r])
			}
			return e || t
		}

		function H(t, e) {
			if (t === e) return !0;
			if (null === t || null === e) return !1;
			if (t !== t && e !== e) return !0;
			var n, i, r, o = typeof t,
				s = typeof e;
			if (o == s && "object" == o) {
				if (!Ui(t)) {
					if (S(t)) return !!S(e) && H(t.getTime(), e.getTime());
					if (k(t)) return !!k(e) && t.toString() == e.toString();
					if (A(t) || A(e) || E(t) || E(e) || Ui(e) || S(e) || k(e)) return !1;
					r = vt();
					for (i in t)
						if ("$" !== i.charAt(0) && !C(t[i])) {
							if (!H(t[i], e[i])) return !1;
							r[i] = !0
						}
					for (i in e)
						if (!(i in r) && "$" !== i.charAt(0) && w(e[i]) && !C(e[i])) return !1;
					return !0
				}
				if (!Ui(e)) return !1;
				if ((n = t.length) == e.length) {
					for (i = 0; i < n; i++)
						if (!H(t[i], e[i])) return !1;
					return !0
				}
			}
			return !1
		}

		function V(t, e, n) {
			return t.concat(ji.call(e, n))
		}

		function W(t, e) {
			return ji.call(t, e || 0)
		}

		function U(t, e) {
			var n = arguments.length > 2 ? W(arguments, 2) : [];
			return !C(e) || e instanceof RegExp ? e : n.length ? function () {
				return arguments.length ? e.apply(t, V(n, arguments, 0)) : e.apply(t, n)
			} : function () {
				return arguments.length ? e.apply(t, arguments) : e.call(t)
			}
		}

		function X(t, i) {
			var r = i;
			return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = n : E(i) ? r = "$WINDOW" : i && e === i ? r = "$DOCUMENT" : A(i) && (r = "$SCOPE"), r
		}

		function Y(t, e) {
			return b(t) ? n : (T(e) || (e = e ? 2 : null), JSON.stringify(t, X, e))
		}

		function G(t) {
			return $(t) ? JSON.parse(t) : t
		}

		function Q(t, e) {
			t = t.replace(Zi, "");
			var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
			return isNaN(n) ? e : n
		}

		function K(t, e) {
			return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
		}

		function Z(t, e, n) {
			n = n ? -1 : 1;
			var i = t.getTimezoneOffset(),
				r = Q(e, i);
			return K(t, n * (r - i))
		}

		function J(t) {
			t = Ri(t).clone();
			try {
				t.empty()
			} catch (e) {}
			var n = Ri("<div>").append(t).html();
			try {
				return t[0].nodeType === rr ? Oi(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
					return "<" + Oi(e)
				})
			} catch (e) {
				return Oi(n)
			}
		}

		function tt(t) {
			try {
				return decodeURIComponent(t)
			} catch (e) {}
		}

		function et(t) {
			var e = {};
			return o((t || "").split("&"), function (t) {
				var n, i, r;
				t && (i = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), n !== -1 && (i = t.substring(0, n), r = t.substring(n + 1)), i = tt(i), w(i) && (r = !w(r) || tt(r), Ai.call(e, i) ? Ui(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r))
			}), e
		}

		function nt(t) {
			var e = [];
			return o(t, function (t, n) {
				Ui(t) ? o(t, function (t) {
					e.push(rt(n, !0) + (t === !0 ? "" : "=" + rt(t, !0)))
				}) : e.push(rt(n, !0) + (t === !0 ? "" : "=" + rt(t, !0)))
			}), e.length ? e.join("&") : ""
		}

		function it(t) {
			return rt(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function rt(t, e) {
			return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
		}

		function ot(t, e) {
			var n, i, r = Ji.length;
			for (i = 0; i < r; ++i)
				if (n = Ji[i] + e, $(n = t.getAttribute(n))) return n;
			return null
		}

		function st(t, e) {
			var n, i, r = {};
			o(Ji, function (e) {
				var r = e + "app";
				!n && t.hasAttribute && t.hasAttribute(r) && (n = t, i = t.getAttribute(r))
			}), o(Ji, function (e) {
				var r, o = e + "app";
				!n && (r = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = r, i = r.getAttribute(o))
			}), n && (r.strictDi = null !== ot(n, "strict-di"), e(n, i ? [i] : [], r))
		}

		function at(n, i, r) {
			x(r) || (r = {});
			var s = {
				strictDi: !1
			};
			r = f(s, r);
			var a = function () {
					if (n = Ri(n), n.injector()) {
						var t = n[0] === e ? "document" : J(n);
						throw Hi("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "<").replace(/>/, ">"))
					}
					i = i || [], i.unshift(["$provide", function (t) {
						t.value("$rootElement", n)
					}]), r.debugInfoEnabled && i.push(["$compileProvider", function (t) {
						t.debugInfoEnabled(!0)
					}]), i.unshift("ng");
					var o = re(i, r.strictDi);
					return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, i) {
						t.$apply(function () {
							e.data("$injector", i), n(e)(t)
						})
					}]), o
				},
				l = /^NG_ENABLE_DEBUG_INFO!/,
				u = /^NG_DEFER_BOOTSTRAP!/;
			return t && l.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(l, "")), t && !u.test(t.name) ? a() : (t.name = t.name.replace(u, ""), Vi.resumeBootstrap = function (t) {
				return o(t, function (t) {
					i.push(t)
				}), a()
			}, void(C(Vi.resumeDeferredBootstrap) && Vi.resumeDeferredBootstrap()))
		}

		function lt() {
			t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
		}

		function ut(t) {
			var e = Vi.element(t).injector();
			if (!e) throw Hi("test", "no injector found for element argument to getTestability");
			return e.get("$$testability")
		}

		function ct(t, e) {
			return e = e || "_", t.replace(tr, function (t, n) {
				return (n ? e : "") + t.toLowerCase()
			})
		}

		function ft() {
			var e;
			if (!er) {
				var i = Ki();
				Li = b(i) ? t.jQuery : i ? t[i] : n, Li && Li.fn.on ? (Ri = Li, f(Li.fn, {
					scope: $r.scope,
					isolateScope: $r.isolateScope,
					controller: $r.controller,
					injector: $r.injector,
					inheritedData: $r.inheritedData
				}), e = Li.cleanData, Li.cleanData = function (t) {
					for (var n, i, r = 0; null != (i = t[r]); r++) n = Li._data(i, "events"), n && n.$destroy && Li(i).triggerHandler("$destroy");
					e(t)
				}) : Ri = Pt, Vi.element = Ri, er = !0
			}
		}

		function ht(t, e, n) {
			if (!t) throw Hi("areq", "Argument '{0}' is {1}", e || "?", n || "required");
			return t
		}

		function pt(t, e, n) {
			return n && Ui(t) && (t = t[t.length - 1]), ht(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
		}

		function dt(t, e) {
			if ("hasOwnProperty" === t) throw Hi("badname", "hasOwnProperty is not a valid {0} name", e)
		}

		function gt(t, e, n) {
			if (!e) return t;
			for (var i, r = e.split("."), o = t, s = r.length, a = 0; a < s; a++) i = r[a], t && (t = (o = t)[i]);
			return !n && C(t) ? U(o, t) : t
		}

		function mt(t) {
			for (var e, n = t[0], i = t[t.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(e || t[r] !== n) && (e || (e = Ri(ji.call(t, 0, r))), e.push(n));
			return e || t
		}

		function vt() {
			return Object.create(null)
		}

		function yt(t) {
			function e(t, e, n) {
				return t[e] || (t[e] = n())
			}
			var n = i("$injector"),
				r = i("ng"),
				o = e(t, "angular", Object);
			return o.$$minErr = o.$$minErr || i, e(o, "module", function () {
				var t = {};
				return function (i, o, s) {
					var a = function (t, e) {
						if ("hasOwnProperty" === t) throw r("badname", "hasOwnProperty is not a valid {0} name", e)
					};
					return a(i, "module"), o && t.hasOwnProperty(i) && (t[i] = null), e(t, i, function () {
						function t(t, e, n, i) {
							return i || (i = r),
								function () {
									return i[n || "push"]([t, e, arguments]), c
								}
						}

						function e(t, e) {
							return function (n, o) {
								return o && C(o) && (o.$$moduleName = i), r.push([t, e, arguments]), c
							}
						}
						if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i);
						var r = [],
							a = [],
							l = [],
							u = t("$injector", "invoke", "push", a),
							c = {
								_invokeQueue: r,
								_configBlocks: a,
								_runBlocks: l,
								requires: o,
								name: i,
								provider: e("$provide", "provider"),
								factory: e("$provide", "factory"),
								service: e("$provide", "service"),
								value: t("$provide", "value"),
								constant: t("$provide", "constant", "unshift"),
								decorator: e("$provide", "decorator"),
								animation: e("$animateProvider", "register"),
								filter: e("$filterProvider", "register"),
								controller: e("$controllerProvider", "register"),
								directive: e("$compileProvider", "directive"),
								component: e("$compileProvider", "component"),
								config: u,
								run: function (t) {
									return l.push(t), this
								}
							};
						return s && u(s), c
					})
				}
			})
		}

		function bt(t) {
			var e = [];
			return JSON.stringify(t, function (t, n) {
				if (n = X(t, n), x(n)) {
					if (e.indexOf(n) >= 0) return "...";
					e.push(n)
				}
				return n
			})
		}

		function wt(t) {
			return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : b(t) ? "undefined" : "string" != typeof t ? bt(t) : t
		}

		function xt(e) {
			f(e, {
				bootstrap: at,
				copy: q,
				extend: f,
				merge: h,
				equals: H,
				element: Ri,
				forEach: o,
				injector: re,
				noop: g,
				bind: U,
				toJson: Y,
				fromJson: G,
				identity: m,
				isUndefined: b,
				isDefined: w,
				isString: $,
				isFunction: C,
				isObject: x,
				isNumber: T,
				isElement: I,
				isArray: Ui,
				version: lr,
				isDate: S,
				lowercase: Oi,
				uppercase: Pi,
				callbacks: {
					counter: 0
				},
				getTestability: ut,
				$$minErr: i,
				$$csp: Qi,
				reloadWithDebugInfo: lt
			}), (Ii = yt(t))("ng", ["ngLocale"], ["$provide", function (t) {
				t.provider({
					$$sanitizeUri: $n
				}), t.provider("$compile", de).directive({
					a: Oo,
					input: Go,
					textarea: Go,
					form: Ro,
					script: Vs,
					select: Xs,
					style: Gs,
					option: Ys,
					ngBind: Zo,
					ngBindHtml: ts,
					ngBindTemplate: Jo,
					ngClass: ns,
					ngClassEven: rs,
					ngClassOdd: is,
					ngCloak: os,
					ngController: ss,
					ngForm: Lo,
					ngHide: Is,
					ngIf: us,
					ngInclude: cs,
					ngInit: hs,
					ngNonBindable: Es,
					ngPluralize: Ms,
					ngRepeat: Ns,
					ngShow: Ls,
					ngStyle: js,
					ngSwitch: Fs,
					ngSwitchWhen: zs,
					ngSwitchDefault: qs,
					ngOptions: Ps,
					ngTransclude: Hs,
					ngModel: Ss,
					ngList: ps,
					ngChange: es,
					pattern: Ks,
					ngPattern: Ks,
					required: Qs,
					ngRequired: Qs,
					minlength: Js,
					ngMinlength: Js,
					maxlength: Zs,
					ngMaxlength: Zs,
					ngValue: Ko,
					ngModelOptions: ks
				}).directive({
					ngInclude: fs
				}).directive(Po).directive(as), t.provider({
					$anchorScroll: oe,
					$animate: Fr,
					$animateCss: Br,
					$$animateJs: Ir,
					$$animateQueue: jr,
					$$AnimateRunner: qr,
					$$animateAsyncRun: zr,
					$browser: fe,
					$cacheFactory: he,
					$controller: be,
					$document: we,
					$exceptionHandler: xe,
					$filter: In,
					$$forceReflow: Xr,
					$interpolate: Re,
					$interval: Le,
					$http: Pe,
					$httpParamSerializer: $e,
					$httpParamSerializerJQLike: Te,
					$httpBackend: Ne,
					$xhrFactory: Me,
					$location: Qe,
					$log: Ke,
					$parse: vn,
					$rootScope: _n,
					$q: yn,
					$$q: bn,
					$sce: kn,
					$sceDelegate: Cn,
					$sniffer: En,
					$templateCache: pe,
					$templateRequest: An,
					$$testability: On,
					$timeout: Pn,
					$window: Dn,
					$$rAF: xn,
					$$jqLite: Zt,
					$$HashMap: kr,
					$$cookieReader: Ln
				})
			}])
		}

		function _t() {
			return ++cr
		}

		function $t(t) {
			return t.replace(pr, function (t, e, n, i) {
				return i ? n.toUpperCase() : n
			}).replace(dr, "Moz$1")
		}

		function Tt(t) {
			return !yr.test(t)
		}

		function St(t) {
			var e = t.nodeType;
			return e === nr || !e || e === sr
		}

		function Ct(t) {
			for (var e in ur[t.ng339]) return !0;
			return !1
		}

		function kt(t) {
			for (var e = 0, n = t.length; e < n; e++) Rt(t[e])
		}

		function Et(t, e) {
			var n, i, r, s, a = e.createDocumentFragment(),
				l = [];
			if (Tt(t)) l.push(e.createTextNode(t));
			else {
				for (n = n || a.appendChild(e.createElement("div")), i = (br.exec(t) || ["", ""])[1].toLowerCase(), r = xr[i] || xr._default, n.innerHTML = r[1] + t.replace(wr, "<$1></$2>") + r[2], s = r[0]; s--;) n = n.lastChild;
				l = V(l, n.childNodes), n = a.firstChild, n.textContent = ""
			}
			return a.textContent = "", a.innerHTML = "", o(l, function (t) {
				a.appendChild(t)
			}), a
		}

		function At(t, n) {
			n = n || e;
			var i;
			return (i = vr.exec(t)) ? [n.createElement(i[1])] : (i = Et(t, n)) ? i.childNodes : []
		}

		function Ot(t, e) {
			var n = t.parentNode;
			n && n.replaceChild(e, t), e.appendChild(t)
		}

		function Pt(t) {
			if (t instanceof Pt) return t;
			var e;
			if ($(t) && (t = Yi(t), e = !0), !(this instanceof Pt)) {
				if (e && "<" != t.charAt(0)) throw mr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
				return new Pt(t)
			}
			e ? qt(this, At(t)) : qt(this, t)
		}

		function Mt(t) {
			return t.cloneNode(!0)
		}

		function Nt(t, e) {
			if (e || Rt(t), t.querySelectorAll)
				for (var n = t.querySelectorAll("*"), i = 0, r = n.length; i < r; i++) Rt(n[i])
		}

		function Dt(t, e, n, i) {
			if (w(i)) throw mr("offargs", "jqLite#off() does not support the `selector` argument");
			var r = Lt(t),
				s = r && r.events,
				a = r && r.handle;
			if (a)
				if (e) {
					var l = function (e) {
						var i = s[e];
						w(n) && z(i || [], n), w(n) && i && i.length > 0 || (hr(t, e, a), delete s[e])
					};
					o(e.split(" "), function (t) {
						l(t), gr[t] && l(gr[t])
					})
				} else
					for (e in s) "$destroy" !== e && hr(t, e, a), delete s[e]
		}

		function Rt(t, e) {
			var i = t.ng339,
				r = i && ur[i];
			if (r) {
				if (e) return void delete r.data[e];
				r.handle && (r.events.$destroy && r.handle({}, "$destroy"), Dt(t)), delete ur[i], t.ng339 = n
			}
		}

		function Lt(t, e) {
			var i = t.ng339,
				r = i && ur[i];
			return e && !r && (t.ng339 = i = _t(), r = ur[i] = {
				events: {},
				data: {},
				handle: n
			}), r
		}

		function It(t, e, n) {
			if (St(t)) {
				var i = w(n),
					r = !i && e && !x(e),
					o = !e,
					s = Lt(t, !r),
					a = s && s.data;
				if (i) a[e] = n;
				else {
					if (o) return a;
					if (r) return a && a[e];
					f(a, e)
				}
			}
		}

		function jt(t, e) {
			return !!t.getAttribute && (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1
		}

		function Ft(t, e) {
			e && t.setAttribute && o(e.split(" "), function (e) {
				t.setAttribute("class", Yi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Yi(e) + " ", " ")))
			})
		}

		function zt(t, e) {
			if (e && t.setAttribute) {
				var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
				o(e.split(" "), function (t) {
					t = Yi(t), n.indexOf(" " + t + " ") === -1 && (n += t + " ")
				}), t.setAttribute("class", Yi(n))
			}
		}

		function qt(t, e) {
			if (e)
				if (e.nodeType) t[t.length++] = e;
				else {
					var n = e.length;
					if ("number" == typeof n && e.window !== e) {
						if (n)
							for (var i = 0; i < n; i++) t[t.length++] = e[i]
					} else t[t.length++] = e
				}
		}

		function Bt(t, e) {
			return Ht(t, "$" + (e || "ngController") + "Controller")
		}

		function Ht(t, e, n) {
			t.nodeType == sr && (t = t.documentElement);
			for (var i = Ui(e) ? e : [e]; t;) {
				for (var r = 0, o = i.length; r < o; r++)
					if (w(n = Ri.data(t, i[r]))) return n;
				t = t.parentNode || t.nodeType === ar && t.host
			}
		}

		function Vt(t) {
			for (Nt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
		}

		function Wt(t, e) {
			e || Nt(t);
			var n = t.parentNode;
			n && n.removeChild(t)
		}

		function Ut(e, n) {
			n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Ri(n).on("load", e)
		}

		function Xt(t, e) {
			var n = Tr[e.toLowerCase()];
			return n && Sr[F(t)] && n
		}

		function Yt(t) {
			return Cr[t]
		}

		function Gt(t, e) {
			var n = function (n, i) {
				n.isDefaultPrevented = function () {
					return n.defaultPrevented
				};
				var r = e[i || n.type],
					o = r ? r.length : 0;
				if (o) {
					if (b(n.immediatePropagationStopped)) {
						var s = n.stopImmediatePropagation;
						n.stopImmediatePropagation = function () {
							n.immediatePropagationStopped = !0,
								n.stopPropagation && n.stopPropagation(), s && s.call(n)
						}
					}
					n.isImmediatePropagationStopped = function () {
						return n.immediatePropagationStopped === !0
					};
					var a = r.specialHandlerWrapper || Qt;
					o > 1 && (r = B(r));
					for (var l = 0; l < o; l++) n.isImmediatePropagationStopped() || a(t, n, r[l])
				}
			};
			return n.elem = t, n
		}

		function Qt(t, e, n) {
			n.call(t, e)
		}

		function Kt(t, e, n) {
			var i = e.relatedTarget;
			i && (i === t || _r.call(t, i)) || n.call(t, e)
		}

		function Zt() {
			this.$get = function () {
				return f(Pt, {
					hasClass: function (t, e) {
						return t.attr && (t = t[0]), jt(t, e)
					},
					addClass: function (t, e) {
						return t.attr && (t = t[0]), zt(t, e)
					},
					removeClass: function (t, e) {
						return t.attr && (t = t[0]), Ft(t, e)
					}
				})
			}
		}

		function Jt(t, e) {
			var n = t && t.$$hashKey;
			if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
			var i = typeof t;
			return n = "function" == i || "object" == i && null !== t ? t.$$hashKey = i + ":" + (e || l)() : i + ":" + t
		}

		function te(t, e) {
			if (e) {
				var n = 0;
				this.nextUid = function () {
					return ++n
				}
			}
			o(t, this.put, this)
		}

		function ee(t) {
			var e = t.toString().replace(Mr, ""),
				n = e.match(Er) || e.match(Ar);
			return n
		}

		function ne(t) {
			var e = ee(t);
			return e ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
		}

		function ie(t, e, n) {
			var i, r, s;
			if ("function" == typeof t) {
				if (!(i = t.$inject)) {
					if (i = [], t.length) {
						if (e) throw $(n) && n || (n = t.name || ne(t)), Nr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
						r = ee(t), o(r[1].split(Or), function (t) {
							t.replace(Pr, function (t, e, n) {
								i.push(n)
							})
						})
					}
					t.$inject = i
				}
			} else Ui(t) ? (s = t.length - 1, pt(t[s], "fn"), i = t.slice(0, s)) : pt(t, "fn", !0);
			return i
		}

		function re(t, e) {
			function i(t) {
				return function (e, n) {
					return x(e) ? void o(e, a(t)) : t(e, n)
				}
			}

			function r(t, e) {
				if (dt(t, "service"), (C(e) || Ui(e)) && (e = T.instantiate(e)), !e.$get) throw Nr("pget", "Provider '{0}' must define $get factory method.", t);
				return _[t + m] = e
			}

			function s(t, e) {
				return function () {
					var n = E.invoke(e, this);
					if (b(n)) throw Nr("undef", "Provider '{0}' must return a value from $get factory method.", t);
					return n
				}
			}

			function l(t, e, n) {
				return r(t, {
					$get: n !== !1 ? s(t, e) : e
				})
			}

			function u(t, e) {
				return l(t, ["$injector", function (t) {
					return t.instantiate(e)
				}])
			}

			function c(t, e) {
				return l(t, v(e), !1)
			}

			function f(t, e) {
				dt(t, "constant"), _[t] = e, S[t] = e
			}

			function h(t, e) {
				var n = T.get(t + m),
					i = n.$get;
				n.$get = function () {
					var t = E.invoke(i, n);
					return E.invoke(e, null, {
						$delegate: t
					})
				}
			}

			function p(t) {
				ht(b(t) || Ui(t), "modulesToLoad", "not an array");
				var e, n = [];
				return o(t, function (t) {
					function i(t) {
						var e, n;
						for (e = 0, n = t.length; e < n; e++) {
							var i = t[e],
								r = T.get(i[0]);
							r[i[1]].apply(r, i[2])
						}
					}
					if (!w.get(t)) {
						w.put(t, !0);
						try {
							$(t) ? (e = Ii(t), n = n.concat(p(e.requires)).concat(e._runBlocks), i(e._invokeQueue), i(e._configBlocks)) : C(t) ? n.push(T.invoke(t)) : Ui(t) ? n.push(T.invoke(t)) : pt(t, "module")
						} catch (r) {
							throw Ui(t) && (t = t[t.length - 1]), r.message && r.stack && r.stack.indexOf(r.message) == -1 && (r = r.message + "\n" + r.stack), Nr("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, r.stack || r.message || r)
						}
					}
				}), n
			}

			function d(t, n) {
				function i(e, i) {
					if (t.hasOwnProperty(e)) {
						if (t[e] === g) throw Nr("cdep", "Circular dependency found: {0}", e + " <- " + y.join(" <- "));
						return t[e]
					}
					try {
						return y.unshift(e), t[e] = g, t[e] = n(e, i)
					} catch (r) {
						throw t[e] === g && delete t[e], r
					} finally {
						y.shift()
					}
				}

				function r(t, n, r) {
					for (var o = [], s = re.$$annotate(t, e, r), a = 0, l = s.length; a < l; a++) {
						var u = s[a];
						if ("string" != typeof u) throw Nr("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
						o.push(n && n.hasOwnProperty(u) ? n[u] : i(u, r))
					}
					return o
				}

				function o(t) {
					return !(Di <= 11) && ("function" == typeof t && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(t)))
				}

				function s(t, e, n, i) {
					"string" == typeof n && (i = n, n = null);
					var s = r(t, n, i);
					return Ui(t) && (t = t[t.length - 1]), o(t) ? (s.unshift(null), new(Function.prototype.bind.apply(t, s))) : t.apply(e, s)
				}

				function a(t, e, n) {
					var i = Ui(t) ? t[t.length - 1] : t,
						o = r(t, e, n);
					return o.unshift(null), new(Function.prototype.bind.apply(i, o))
				}
				return {
					invoke: s,
					instantiate: a,
					get: i,
					annotate: re.$$annotate,
					has: function (e) {
						return _.hasOwnProperty(e + m) || t.hasOwnProperty(e)
					}
				}
			}
			e = e === !0;
			var g = {},
				m = "Provider",
				y = [],
				w = new te([], (!0)),
				_ = {
					$provide: {
						provider: i(r),
						factory: i(l),
						service: i(u),
						value: i(c),
						constant: i(f),
						decorator: h
					}
				},
				T = _.$injector = d(_, function (t, e) {
					throw Vi.isString(e) && y.push(e), Nr("unpr", "Unknown provider: {0}", y.join(" <- "))
				}),
				S = {},
				k = d(S, function (t, e) {
					var i = T.get(t + m, e);
					return E.invoke(i.$get, i, n, t)
				}),
				E = k;
			_["$injector" + m] = {
				$get: v(k)
			};
			var A = p(t);
			return E = k.get("$injector"), E.strictDi = e, o(A, function (t) {
				t && E.invoke(t)
			}), E
		}

		function oe() {
			var t = !0;
			this.disableAutoScrolling = function () {
				t = !1
			}, this.$get = ["$window", "$location", "$rootScope", function (e, n, i) {
				function r(t) {
					var e = null;
					return Array.prototype.some.call(t, function (t) {
						if ("a" === F(t)) return e = t, !0
					}), e
				}

				function o() {
					var t = a.yOffset;
					if (C(t)) t = t();
					else if (I(t)) {
						var n = t[0],
							i = e.getComputedStyle(n);
						t = "fixed" !== i.position ? 0 : n.getBoundingClientRect().bottom
					} else T(t) || (t = 0);
					return t
				}

				function s(t) {
					if (t) {
						t.scrollIntoView();
						var n = o();
						if (n) {
							var i = t.getBoundingClientRect().top;
							e.scrollBy(0, i - n)
						}
					} else e.scrollTo(0, 0)
				}

				function a(t) {
					t = $(t) ? t : n.hash();
					var e;
					t ? (e = l.getElementById(t)) ? s(e) : (e = r(l.getElementsByName(t))) ? s(e) : "top" === t && s(null) : s(null)
				}
				var l = e.document;
				return t && i.$watch(function () {
					return n.hash()
				}, function (t, e) {
					t === e && "" === t || Ut(function () {
						i.$evalAsync(a)
					})
				}), a
			}]
		}

		function se(t, e) {
			return t || e ? t ? e ? (Ui(t) && (t = t.join(" ")), Ui(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
		}

		function ae(t) {
			for (var e = 0; e < t.length; e++) {
				var n = t[e];
				if (n.nodeType === Rr) return n
			}
		}

		function le(t) {
			$(t) && (t = t.split(" "));
			var e = vt();
			return o(t, function (t) {
				t.length && (e[t] = !0)
			}), e
		}

		function ue(t) {
			return x(t) ? t : {}
		}

		function ce(t, e, n, i) {
			function r(t) {
				try {
					t.apply(null, W(arguments, 1))
				} finally {
					if (y--, 0 === y)
						for (; w.length;) try {
							w.pop()()
						} catch (e) {
							n.error(e)
						}
				}
			}

			function s(t) {
				var e = t.indexOf("#");
				return e === -1 ? "" : t.substr(e)
			}

			function a() {
				S = null, u(), c()
			}

			function l() {
				try {
					return p.state
				} catch (t) {}
			}

			function u() {
				x = l(), x = b(x) ? null : x, H(x, E) && (x = E), E = x
			}

			function c() {
				$ === f.url() && _ === x || ($ = f.url(), _ = x, o(C, function (t) {
					t(f.url(), x)
				}))
			}
			var f = this,
				h = t.location,
				p = t.history,
				d = t.setTimeout,
				m = t.clearTimeout,
				v = {};
			f.isMock = !1;
			var y = 0,
				w = [];
			f.$$completeOutstandingRequest = r, f.$$incOutstandingRequestCount = function () {
				y++
			}, f.notifyWhenNoOutstandingRequests = function (t) {
				0 === y ? t() : w.push(t)
			};
			var x, _, $ = h.href,
				T = e.find("base"),
				S = null;
			u(), _ = x, f.url = function (e, n, r) {
				if (b(r) && (r = null), h !== t.location && (h = t.location), p !== t.history && (p = t.history), e) {
					var o = _ === r;
					if ($ === e && (!i.history || o)) return f;
					var a = $ && qe($) === qe(e);
					return $ = e, _ = r, !i.history || a && o ? (a && !S || (S = e), n ? h.replace(e) : a ? h.hash = s(e) : h.href = e, h.href !== e && (S = e)) : (p[n ? "replaceState" : "pushState"](r, "", e), u(), _ = x), f
				}
				return S || h.href.replace(/%27/g, "'")
			}, f.state = function () {
				return x
			};
			var C = [],
				k = !1,
				E = null;
			f.onUrlChange = function (e) {
				return k || (i.history && Ri(t).on("popstate", a), Ri(t).on("hashchange", a), k = !0), C.push(e), e
			}, f.$$applicationDestroyed = function () {
				Ri(t).off("hashchange popstate", a)
			}, f.$$checkUrlChange = c, f.baseHref = function () {
				var t = T.attr("href");
				return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
			}, f.defer = function (t, e) {
				var n;
				return y++, n = d(function () {
					delete v[n], r(t)
				}, e || 0), v[n] = !0, n
			}, f.defer.cancel = function (t) {
				return !!v[t] && (delete v[t], m(t), r(g), !0)
			}
		}

		function fe() {
			this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, i) {
				return new ce(t, i, e, n)
			}]
		}

		function he() {
			this.$get = function () {
				function t(t, n) {
					function r(t) {
						t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
					}

					function o(t, e) {
						t != e && (t && (t.p = e), e && (e.n = t))
					}
					if (t in e) throw i("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
					var s = 0,
						a = f({}, n, {
							id: t
						}),
						l = vt(),
						u = n && n.capacity || Number.MAX_VALUE,
						c = vt(),
						h = null,
						p = null;
					return e[t] = {
						put: function (t, e) {
							if (!b(e)) {
								if (u < Number.MAX_VALUE) {
									var n = c[t] || (c[t] = {
										key: t
									});
									r(n)
								}
								return t in l || s++, l[t] = e, s > u && this.remove(p.key), e
							}
						},
						get: function (t) {
							if (u < Number.MAX_VALUE) {
								var e = c[t];
								if (!e) return;
								r(e)
							}
							return l[t]
						},
						remove: function (t) {
							if (u < Number.MAX_VALUE) {
								var e = c[t];
								if (!e) return;
								e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete c[t]
							}
							t in l && (delete l[t], s--)
						},
						removeAll: function () {
							l = vt(), s = 0, c = vt(), h = p = null
						},
						destroy: function () {
							l = null, a = null, c = null, delete e[t]
						},
						info: function () {
							return f({}, a, {
								size: s
							})
						}
					}
				}
				var e = {};
				return t.info = function () {
					var t = {};
					return o(e, function (e, n) {
						t[n] = e.info()
					}), t
				}, t.get = function (t) {
					return e[t]
				}, t
			}
		}

		function pe() {
			this.$get = ["$cacheFactory", function (t) {
				return t("templates")
			}]
		}

		function de(t, i) {
			function r(t, e, n) {
				var i = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
					r = {};
				return o(t, function (t, o) {
					if (t in S) return void(r[o] = S[t]);
					var s = t.match(i);
					if (!s) throw Hr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
					r[o] = {
						mode: s[1][0],
						collection: "*" === s[2],
						optional: "?" === s[3],
						attrName: s[4] || o
					}, s[4] && (S[t] = r[o])
				}), r
			}

			function s(t, e) {
				var n = {
					isolateScope: null,
					bindToController: null
				};
				if (x(t.scope) && (t.bindToController === !0 ? (n.bindToController = r(t.scope, e, !0), n.isolateScope = {}) : n.isolateScope = r(t.scope, e, !1)), x(t.bindToController) && (n.bindToController = r(t.bindToController, e, !0)), x(n.bindToController)) {
					var i = t.controller,
						o = t.controllerAs;
					if (!i) throw Hr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e);
					if (!ye(i, o)) throw Hr("noident", "Cannot bind to controller without identifier for directive '{0}'.", e)
				}
				return n
			}

			function l(t) {
				var e = t.charAt(0);
				if (!e || e !== Oi(e)) throw Hr("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", t);
				if (t !== t.trim()) throw Hr("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", t)
			}
			var u = {},
				c = "Directive",
				h = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
				p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
				y = j("ngSrc,ngSrcset,src,srcset"),
				_ = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
				T = /^(on[a-z]+|formaction)$/,
				S = vt();
			this.directive = function E(e, n) {
				return dt(e, "directive"), $(e) ? (l(e), ht(n, "directiveFactory"), u.hasOwnProperty(e) || (u[e] = [], t.factory(e + c, ["$injector", "$exceptionHandler", function (t, n) {
					var i = [];
					return o(u[e], function (r, o) {
						try {
							var s = t.invoke(r);
							C(s) ? s = {
								compile: v(s)
							} : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", s.$$moduleName = r.$$moduleName, i.push(s)
						} catch (a) {
							n(a)
						}
					}), i
				}])), u[e].push(n)) : o(e, a(E)), this
			}, this.component = function (t, e) {
				function n(t) {
					function n(e) {
						return C(e) || Ui(e) ? function (n, i) {
							return t.invoke(e, this, {
								$element: n,
								$attrs: i
							})
						} : e
					}
					var r = e.template || e.templateUrl ? e.template : "";
					return {
						controller: i,
						controllerAs: ye(e.controller) || e.controllerAs || "$ctrl",
						template: n(r),
						templateUrl: n(e.templateUrl),
						transclude: e.transclude,
						scope: {},
						bindToController: e.bindings || {},
						restrict: "E",
						require: e.require
					}
				}
				var i = e.controller || g;
				return o(e, function (t, e) {
					"$" === e.charAt(0) && (n[e] = t, i[e] = t)
				}), n.$inject = ["$injector"], this.directive(t, n)
			}, this.aHrefSanitizationWhitelist = function (t) {
				return w(t) ? (i.aHrefSanitizationWhitelist(t), this) : i.aHrefSanitizationWhitelist()
			}, this.imgSrcSanitizationWhitelist = function (t) {
				return w(t) ? (i.imgSrcSanitizationWhitelist(t), this) : i.imgSrcSanitizationWhitelist()
			};
			var k = !0;
			this.debugInfoEnabled = function (t) {
				return w(t) ? (k = t, this) : k
			}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (t, i, r, a, l, v, w, S, E, O) {
				function P(t, e) {
					if (e) {
						var n, i, r, o = Object.keys(e);
						for (n = 0, i = o.length; n < i; n++) r = o[n], this[r] = e[r]
					} else this.$attr = {};
					this.$$element = t
				}

				function M(t, e, n) {
					gt.innerHTML = "<span " + e + ">";
					var i = gt.firstChild.attributes,
						r = i[0];
					i.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r)
				}

				function D(t, e) {
					try {
						t.addClass(e)
					} catch (n) {}
				}

				function R(t, n, i, r, o) {
					t instanceof Ri || (t = Ri(t));
					for (var s = /\S+/, a = 0, l = t.length; a < l; a++) {
						var u = t[a];
						u.nodeType === rr && u.nodeValue.match(s) && Ot(u, t[a] = e.createElement("span"))
					}
					var c = I(t, n, t, i, r, o);
					R.$$addScopeClass(t);
					var f = null;
					return function (e, n, i) {
						ht(e, "scope"), o && o.needsNewScope && (e = e.$parent.$new()), i = i || {};
						var r = i.parentBoundTranscludeFn,
							s = i.transcludeControllers,
							a = i.futureParentElement;
						r && r.$$boundTransclude && (r = r.$$boundTransclude), f || (f = L(a));
						var l;
						if (l = "html" !== f ? Ri(ot(f, Ri("<div>").append(t).html())) : n ? $r.clone.call(t) : t, s)
							for (var u in s) l.data("$" + u + "Controller", s[u].instance);
						return R.$$addScopeInfo(l, e), n && n(l, e), c && c(e, l, l, r), l
					}
				}

				function L(t) {
					var e = t && t[0];
					return e && "foreignobject" !== F(e) && qi.call(e).match(/SVG/) ? "svg" : "html"
				}

				function I(t, e, i, r, o, s) {
					function a(t, i, r, o) {
						var s, a, l, u, c, f, h, p, m;
						if (d) {
							var v = i.length;
							for (m = new Array(v), c = 0; c < g.length; c += 3) h = g[c], m[h] = i[h]
						} else m = i;
						for (c = 0, f = g.length; c < f;) l = m[g[c++]], s = g[c++], a = g[c++], s ? (s.scope ? (u = t.$new(), R.$$addScopeInfo(Ri(l), u)) : u = t, p = s.transcludeOnThisElement ? j(t, s.transclude, o) : !s.templateOnThisElement && o ? o : !o && e ? j(t, e) : null, s(a, u, l, r, p)) : a && a(t, l.childNodes, n, o)
					}
					for (var l, u, c, f, h, p, d, g = [], m = 0; m < t.length; m++) l = new P, u = q(t[m], [], l, 0 === m ? r : n, o), c = u.length ? X(u, t[m], l, e, i, null, [], [], s) : null, c && c.scope && R.$$addScopeClass(l.$$element), h = c && c.terminal || !(f = t[m].childNodes) || !f.length ? null : I(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || h) && (g.push(m, c, h), p = !0, d = d || c), s = null;
					return p ? a : null
				}

				function j(t, e, n) {
					function i(i, r, o, s, a) {
						return i || (i = t.$new(!1, a), i.$$transcluded = !0), e(i, r, {
							parentBoundTranscludeFn: n,
							transcludeControllers: o,
							futureParentElement: s
						})
					}
					var r = i.$$slots = vt();
					for (var o in e.$$slots) e.$$slots[o] ? r[o] = j(t, e.$$slots[o], n) : r[o] = null;
					return i
				}

				function q(t, e, n, i, r) {
					var o, s, a = t.nodeType,
						l = n.$attr;
					switch (a) {
						case nr:
							K(e, ge(F(t)), "E", i, r);
							for (var u, c, f, d, g, m, v = t.attributes, y = 0, b = v && v.length; y < b; y++) {
								var w = !1,
									_ = !1;
								u = v[y], c = u.name, g = Yi(u.value), d = ge(c), (m = wt.test(d)) && (c = c.replace(Vr, "").substr(8).replace(/_(.)/g, function (t, e) {
									return e.toUpperCase()
								}));
								var T = d.match(xt);
								T && Z(T[1]) && (w = c, _ = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), f = ge(c.toLowerCase()), l[f] = c, !m && n.hasOwnProperty(f) || (n[f] = g, Xt(t, f) && (n[f] = !0)), at(t, e, g, f, m), K(e, f, "A", i, r, w, _)
							}
							if (s = t.className, x(s) && (s = s.animVal), $(s) && "" !== s)
								for (; o = p.exec(s);) f = ge(o[2]), K(e, f, "C", i, r) && (n[f] = Yi(o[3])), s = s.substr(o.index + o[0].length);
							break;
						case rr:
							if (11 === Di)
								for (; t.parentNode && t.nextSibling && t.nextSibling.nodeType === rr;) t.nodeValue = t.nodeValue + t.nextSibling.nodeValue, t.parentNode.removeChild(t.nextSibling);
							rt(e, t.nodeValue);
							break;
						case or:
							try {
								o = h.exec(t.nodeValue), o && (f = ge(o[1]), K(e, f, "M", i, r) && (n[f] = Yi(o[2])))
							} catch (S) {}
					}
					return e.sort(nt), e
				}

				function B(t, e, n) {
					var i = [],
						r = 0;
					if (e && t.hasAttribute && t.hasAttribute(e)) {
						do {
							if (!t) throw Hr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
							t.nodeType == nr && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), t = t.nextSibling
						} while (r > 0)
					} else i.push(t);
					return Ri(i)
				}

				function V(t, e, n) {
					return function (i, r, o, s, a) {
						return r = B(r[0], e, n), t(i, r, o, s, a)
					}
				}

				function U(t, e, n, i, r, o) {
					var s;
					return t ? R(e, n, i, r, o) : function () {
						return s || (s = R(e, n, i, r, o), e = n = o = null), s.apply(this, arguments)
					}
				}

				function X(t, e, i, s, a, l, u, c, h) {
					function p(t, e, n, i) {
						t && (n && (t = V(t, n, i)), t.require = g.require, t.directiveName = m, (S === g || g.$$isolateScope) && (t = ut(t, {
							isolateScope: !0
						})), u.push(t)), e && (n && (e = V(e, n, i)), e.require = g.require, e.directiveName = m, (S === g || g.$$isolateScope) && (e = ut(e, {
							isolateScope: !0
						})), c.push(e))
					}

					function d(t, r, s, a, l) {
						function h(t, e, i, r) {
							var o;
							if (A(t) || (r = i, i = e, e = t, t = n), N && (o = y), i || (i = N ? _.parent() : _), !r) return l(t, e, o, i, z);
							var s = l.$$slots[r];
							if (s) return s(t, e, o, i, z);
							if (b(s)) throw Hr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, J(_))
						}
						var p, d, g, m, v, y, w, _, E, O, M;
						e === s ? (E = i, _ = i.$$element) : (_ = Ri(s), E = new P(_, i)), v = r, S ? m = r.$new(!0) : $ && (v = r.$parent), l && (w = h, w.$$boundTransclude = l, w.isSlotFilled = function (t) {
							return !!l.$$slots[t]
						}), T && (y = G(_, E, w, T, m, r, S)), S && (R.$$addScopeInfo(_, m, !0, !(k && (k === S || k === S.$$originalDirective))), R.$$addScopeClass(_, !0), m.$$isolateBindings = S.$$isolateBindings, O = pt(r, E, m, m.$$isolateBindings, S), O && m.$on("$destroy", O));
						for (var D in y) {
							var L = T[D],
								I = y[D],
								j = L.$$bindings.bindToController;
							I.identifier && j && (M = pt(v, E, I.instance, j, L));
							var F = I();
							F !== I.instance && (I.instance = F, _.data("$" + L.name + "Controller", F), M && M(), M = pt(v, E, I.instance, j, L))
						}
						for (o(T, function (t, e) {
								var n = t.require;
								t.bindToController && !Ui(n) && x(n) && f(y[e].instance, Y(e, n, _, y))
							}), o(y, function (t) {
								C(t.instance.$onInit) && t.instance.$onInit()
							}), p = 0, d = u.length; p < d; p++) g = u[p], ft(g, g.isolateScope ? m : r, _, E, g.require && Y(g.directiveName, g.require, _, y), w);
						var z = r;
						for (S && (S.template || null === S.templateUrl) && (z = m), t && t(z, s.childNodes, n, l), p = c.length - 1; p >= 0; p--) g = c[p], ft(g, g.isolateScope ? m : r, _, E, g.require && Y(g.directiveName, g.require, _, y), w)
					}
					h = h || {};
					for (var g, m, v, y, w, _ = -Number.MAX_VALUE, $ = h.newScopeDirective, T = h.controllerDirectives, S = h.newIsolateScopeDirective, k = h.templateDirective, E = h.nonTlbTranscludeDirective, O = !1, M = !1, N = h.hasElementTranscludeDirective, D = i.$$element = Ri(e), L = l, I = s, j = !1, z = !1, H = 0, X = t.length; H < X; H++) {
						g = t[H];
						var K = g.$$start,
							Z = g.$$end;
						if (K && (D = B(e, K, Z)), v = n, _ > g.priority) break;
						if ((w = g.scope) && (g.templateUrl || (x(w) ? (it("new/isolated scope", S || $, g, D), S = g) : it("new/isolated scope", S, g, D)), $ = $ || g), m = g.name, !j && (g.replace && (g.templateUrl || g.template) || g.transclude && !g.$$tlb)) {
							for (var nt, rt = H + 1; nt = t[rt++];)
								if (nt.transclude && !nt.$$tlb || nt.replace && (nt.templateUrl || nt.template)) {
									z = !0;
									break
								}
							j = !0
						}
						if (!g.templateUrl && g.controller && (w = g.controller, T = T || vt(), it("'" + m + "' controller", T[m], g, D), T[m] = g), w = g.transclude)
							if (O = !0, g.$$tlb || (it("transclusion", E, g, D), E = g), "element" == w) N = !0, _ = g.priority, v = D, D = i.$$element = Ri(R.$$createComment(m, i[m])), e = D[0], lt(a, W(v), e), I = U(z, v, s, _, L && L.name, {
								nonTlbTranscludeDirective: E
							});
							else {
								var st = vt();
								if (v = Ri(Mt(e)).contents(), x(w)) {
									v = [];
									var at = vt(),
										ct = vt();
									o(w, function (t, e) {
										var n = "?" === t.charAt(0);
										t = n ? t.substring(1) : t, at[t] = e, st[e] = null, ct[e] = n
									}), o(D.contents(), function (t) {
										var e = at[ge(F(t))];
										e ? (ct[e] = !0, st[e] = st[e] || [], st[e].push(t)) : v.push(t)
									}), o(ct, function (t, e) {
										if (!t) throw Hr("reqslot", "Required transclusion slot `{0}` was not filled.", e)
									});
									for (var ht in st) st[ht] && (st[ht] = U(z, st[ht], s))
								}
								D.empty(), I = U(z, v, s, n, n, {
									needsNewScope: g.$$isolateScope || g.$$newScope
								}), I.$$slots = st
							}
						if (g.template)
							if (M = !0, it("template", k, g, D), k = g, w = C(g.template) ? g.template(D, i) : g.template, w = bt(w), g.replace) {
								if (L = g, v = Tt(w) ? [] : ve(ot(g.templateNamespace, Yi(w))), e = v[0], 1 != v.length || e.nodeType !== nr) throw Hr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m, "");
								lt(a, D, e);
								var dt = {
										$attr: {}
									},
									gt = q(e, [], dt),
									mt = t.splice(H + 1, t.length - (H + 1));
								(S || $) && Q(gt, S, $), t = t.concat(gt).concat(mt), tt(i, dt), X = t.length
							} else D.html(w);
						if (g.templateUrl) M = !0, it("template", k, g, D), k = g, g.replace && (L = g), d = et(t.splice(H, t.length - H), D, i, a, O && I, u, c, {
							controllerDirectives: T,
							newScopeDirective: $ !== g && $,
							newIsolateScopeDirective: S,
							templateDirective: k,
							nonTlbTranscludeDirective: E
						}), X = t.length;
						else if (g.compile) try {
							y = g.compile(D, i, I), C(y) ? p(null, y, K, Z) : y && p(y.pre, y.post, K, Z)
						} catch (yt) {
							r(yt, J(D))
						}
						g.terminal && (d.terminal = !0, _ = Math.max(_, g.priority))
					}
					return d.scope = $ && $.scope === !0, d.transcludeOnThisElement = O, d.templateOnThisElement = M, d.transclude = I, h.hasElementTranscludeDirective = N, d
				}

				function Y(t, e, n, i) {
					var r;
					if ($(e)) {
						var s = e.match(_),
							a = e.substring(s[0].length),
							l = s[1] || s[3],
							u = "?" === s[2];
						if ("^^" === l ? n = n.parent() : (r = i && i[a], r = r && r.instance), !r) {
							var c = "$" + a + "Controller";
							r = l ? n.inheritedData(c) : n.data(c)
						}
						if (!r && !u) throw Hr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, t)
					} else if (Ui(e)) {
						r = [];
						for (var f = 0, h = e.length; f < h; f++) r[f] = Y(t, e[f], n, i)
					} else x(e) && (r = {}, o(e, function (e, o) {
						r[o] = Y(t, e, n, i)
					}));
					return r || null
				}

				function G(t, e, n, i, r, o, s) {
					var a = vt();
					for (var l in i) {
						var u = i[l],
							c = {
								$scope: u === s || u.$$isolateScope ? r : o,
								$element: t,
								$attrs: e,
								$transclude: n
							},
							f = u.controller;
						"@" == f && (f = e[u.name]);
						var h = v(f, c, !0, u.controllerAs);
						a[u.name] = h, t.data("$" + u.name + "Controller", h.instance)
					}
					return a
				}

				function Q(t, e, n) {
					for (var i = 0, r = t.length; i < r; i++) t[i] = d(t[i], {
						$$isolateScope: e,
						$$newScope: n
					})
				}

				function K(e, n, i, o, a, l, f) {
					if (n === a) return null;
					var h = null;
					if (u.hasOwnProperty(n))
						for (var p, g = t.get(n + c), m = 0, v = g.length; m < v; m++) try {
							if (p = g[m], (b(o) || o > p.priority) && p.restrict.indexOf(i) != -1) {
								if (l && (p = d(p, {
										$$start: l,
										$$end: f
									})), !p.$$bindings) {
									var y = p.$$bindings = s(p, p.name);
									x(y.isolateScope) && (p.$$isolateBindings = y.isolateScope)
								}
								e.push(p), h = p
							}
						} catch (w) {
							r(w)
						}
					return h
				}

				function Z(e) {
					if (u.hasOwnProperty(e))
						for (var n, i = t.get(e + c), r = 0, o = i.length; r < o; r++)
							if (n = i[r], n.multiElement) return !0;
					return !1
				}

				function tt(t, e) {
					var n = e.$attr,
						i = t.$attr,
						r = t.$$element;
					o(t, function (i, r) {
						"$" != r.charAt(0) && (e[r] && e[r] !== i && (i += ("style" === r ? ";" : " ") + e[r]), t.$set(r, i, !0, n[r]))
					}), o(e, function (e, o) {
						"class" == o ? (D(r, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (r.attr("style", r.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, i[o] = n[o])
					})
				}

				function et(t, e, n, i, r, s, l, u) {
					var c, f, h = [],
						p = e[0],
						g = t.shift(),
						m = d(g, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: g
						}),
						v = C(g.templateUrl) ? g.templateUrl(e, n) : g.templateUrl,
						y = g.templateNamespace;
					return e.empty(), a(v).then(function (a) {
							var d, b, w, _;
							if (a = bt(a), g.replace) {
								if (w = Tt(a) ? [] : ve(ot(y, Yi(a))), d = w[0], 1 != w.length || d.nodeType !== nr) throw Hr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, v);
								b = {
									$attr: {}
								}, lt(i, e, d);
								var $ = q(d, [], b);
								x(g.scope) && Q($, !0), t = $.concat(t), tt(n, b)
							} else d = p, e.html(a);
							for (t.unshift(m), c = X(t, d, n, r, e, g, s, l, u), o(i, function (t, n) {
									t == d && (i[n] = e[0])
								}), f = I(e[0].childNodes, r); h.length;) {
								var T = h.shift(),
									S = h.shift(),
									C = h.shift(),
									k = h.shift(),
									E = e[0];
								if (!T.$$destroyed) {
									if (S !== p) {
										var A = S.className;
										u.hasElementTranscludeDirective && g.replace || (E = Mt(d)), lt(C, Ri(S), E), D(Ri(E), A)
									}
									_ = c.transcludeOnThisElement ? j(T, c.transclude, k) : k, c(f, T, E, i, _)
								}
							}
							h = null
						}),
						function (t, e, n, i, r) {
							var o = r;
							e.$$destroyed || (h ? h.push(e, n, i, o) : (c.transcludeOnThisElement && (o = j(e, c.transclude, r)), c(f, e, n, i, o)))
						}
				}

				function nt(t, e) {
					var n = e.priority - t.priority;
					return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
				}

				function it(t, e, n, i) {
					function r(t) {
						return t ? " (module: " + t + ")" : ""
					}
					if (e) throw Hr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, r(e.$$moduleName), n.name, r(n.$$moduleName), t, J(i))
				}

				function rt(t, e) {
					var n = i(e, !0);
					n && t.push({
						priority: 0,
						compile: function (t) {
							var e = t.parent(),
								i = !!e.length;
							return i && R.$$addBindingClass(e),
								function (t, e) {
									var r = e.parent();
									i || R.$$addBindingClass(r), R.$$addBindingInfo(r, n.expressions), t.$watch(n, function (t) {
										e[0].nodeValue = t
									})
								}
						}
					})
				}

				function ot(t, n) {
					switch (t = Oi(t || "html")) {
						case "svg":
						case "math":
							var i = e.createElement("div");
							return i.innerHTML = "<" + t + ">" + n + "</" + t + ">", i.childNodes[0].childNodes;
						default:
							return n
					}
				}

				function st(t, e) {
					if ("srcdoc" == e) return S.HTML;
					var n = F(t);
					return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? S.RESOURCE_URL : void 0
				}

				function at(t, e, n, r, o) {
					var s = st(t, r);
					o = y[r] || o;
					var a = i(n, !0, s, o);
					if (a) {
						if ("multiple" === r && "select" === F(t)) throw Hr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", J(t));
						e.push({
							priority: 100,
							compile: function () {
								return {
									pre: function (t, e, l) {
										var u = l.$$observers || (l.$$observers = vt());
										if (T.test(r)) throw Hr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
										var c = l[r];
										c !== n && (a = c && i(c, !0, s, o), n = c), a && (l[r] = a(t), (u[r] || (u[r] = [])).$$inter = !0, (l.$$observers && l.$$observers[r].$$scope || t).$watch(a, function (t, e) {
											"class" === r && t != e ? l.$updateClass(t, e) : l.$set(r, t)
										}))
									}
								}
							}
						})
					}
				}

				function lt(t, n, i) {
					var r, o, s = n[0],
						a = n.length,
						l = s.parentNode;
					if (t)
						for (r = 0, o = t.length; r < o; r++)
							if (t[r] == s) {
								t[r++] = i;
								for (var u = r, c = u + a - 1, f = t.length; u < f; u++, c++) c < f ? t[u] = t[c] : delete t[u];
								t.length -= a - 1, t.context === s && (t.context = i);
								break
							}
					l && l.replaceChild(i, s);
					var h = e.createDocumentFragment();
					for (r = 0; r < a; r++) h.appendChild(n[r]);
					for (Ri.hasData(s) && (Ri.data(i, Ri.data(s)), Ri(s).off("$destroy")), Ri.cleanData(h.querySelectorAll("*")), r = 1; r < a; r++) delete n[r];
					n[0] = i, n.length = 1
				}

				function ut(t, e) {
					return f(function () {
						return t.apply(null, arguments)
					}, t, e)
				}

				function ft(t, e, n, i, o, s) {
					try {
						t(e, n, i, o, s)
					} catch (a) {
						r(a, J(n))
					}
				}

				function pt(t, e, n, r, s) {
					var a = [];
					return o(r, function (r, o) {
						var u, c, f, h, p, d = r.attrName,
							m = r.optional,
							v = r.mode;
						switch (v) {
							case "@":
								m || Ai.call(e, d) || (n[o] = e[d] = void 0), e.$observe(d, function (t) {
									$(t) && (n[o] = t)
								}), e.$$observers[d].$$scope = t, u = e[d], $(u) ? n[o] = i(u)(t) : N(u) && (n[o] = u);
								break;
							case "=":
								if (!Ai.call(e, d)) {
									if (m) break;
									e[d] = void 0
								}
								if (m && !e[d]) break;
								c = l(e[d]), h = c.literal ? H : function (t, e) {
									return t === e || t !== t && e !== e
								}, f = c.assign || function () {
									throw u = n[o] = c(t), Hr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", e[d], d, s.name)
								}, u = n[o] = c(t);
								var y = function (e) {
									return h(e, n[o]) || (h(e, u) ? f(t, e = n[o]) : n[o] = e), u = e
								};
								y.$stateful = !0, p = r.collection ? t.$watchCollection(e[d], y) : t.$watch(l(e[d], y), null, c.literal), a.push(p);
								break;
							case "<":
								if (!Ai.call(e, d)) {
									if (m) break;
									e[d] = void 0
								}
								if (m && !e[d]) break;
								c = l(e[d]), n[o] = c(t), p = t.$watch(c, function (t) {
									n[o] = t
								}, c.literal), a.push(p);
								break;
							case "&":
								if (c = e.hasOwnProperty(d) ? l(e[d]) : g, c === g && m) break;
								n[o] = function (e) {
									return c(t, e)
								}
						}
					}), a.length && function () {
						for (var t = 0, e = a.length; t < e; ++t) a[t]()
					}
				}
				var dt = /^\w/,
					gt = e.createElement("div");
				P.prototype = {
					$normalize: ge,
					$addClass: function (t) {
						t && t.length > 0 && E.addClass(this.$$element, t)
					},
					$removeClass: function (t) {
						t && t.length > 0 && E.removeClass(this.$$element, t)
					},
					$updateClass: function (t, e) {
						var n = me(t, e);
						n && n.length && E.addClass(this.$$element, n);
						var i = me(e, t);
						i && i.length && E.removeClass(this.$$element, i)
					},
					$set: function (t, e, n, i) {
						var s, a = this.$$element[0],
							l = Xt(a, t),
							u = Yt(t),
							c = t;
						if (l ? (this.$$element.prop(t, e), i = l) : u && (this[u] = e, c = u), this[t] = e, i ? this.$attr[t] = i : (i = this.$attr[t], i || (this.$attr[t] = i = ct(t, "-"))), s = F(this.$$element), "a" === s && ("href" === t || "xlinkHref" === t) || "img" === s && "src" === t) this[t] = e = O(e, "src" === t);
						else if ("img" === s && "srcset" === t) {
							for (var f = "", h = Yi(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test(h) ? p : /(,)/, g = h.split(d), m = Math.floor(g.length / 2), v = 0; v < m; v++) {
								var y = 2 * v;
								f += O(Yi(g[y]), !0), f += " " + Yi(g[y + 1])
							}
							var w = Yi(g[2 * v]).split(/\s/);
							f += O(Yi(w[0]), !0), 2 === w.length && (f += " " + Yi(w[1])), this[t] = e = f
						}
						n !== !1 && (null === e || b(e) ? this.$$element.removeAttr(i) : dt.test(i) ? this.$$element.attr(i, e) : M(this.$$element[0], i, e));
						var x = this.$$observers;
						x && o(x[c], function (t) {
							try {
								t(e)
							} catch (n) {
								r(n)
							}
						})
					},
					$observe: function (t, e) {
						var n = this,
							i = n.$$observers || (n.$$observers = vt()),
							r = i[t] || (i[t] = []);
						return r.push(e), w.$evalAsync(function () {
								r.$$inter || !n.hasOwnProperty(t) || b(n[t]) || e(n[t])
							}),
							function () {
								z(r, e)
							}
					}
				};
				var mt = i.startSymbol(),
					yt = i.endSymbol(),
					bt = "{{" == mt && "}}" == yt ? m : function (t) {
						return t.replace(/\{\{/g, mt).replace(/}}/g, yt)
					},
					wt = /^ngAttr[A-Z]/,
					xt = /^(.+)Start$/;
				return R.$$addBindingInfo = k ? function (t, e) {
					var n = t.data("$binding") || [];
					Ui(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
				} : g, R.$$addBindingClass = k ? function (t) {
					D(t, "ng-binding")
				} : g, R.$$addScopeInfo = k ? function (t, e, n, i) {
					var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
					t.data(r, e)
				} : g, R.$$addScopeClass = k ? function (t, e) {
					D(t, e ? "ng-isolate-scope" : "ng-scope")
				} : g, R.$$createComment = function (t, n) {
					var i = "";
					return k && (i = " " + (t || "") + ": " + (n || "") + " "), e.createComment(i)
				}, R
			}]
		}

		function ge(t) {
			return $t(t.replace(Vr, ""))
		}

		function me(t, e) {
			var n = "",
				i = t.split(/\s+/),
				r = e.split(/\s+/);
			t: for (var o = 0; o < i.length; o++) {
				for (var s = i[o], a = 0; a < r.length; a++)
					if (s == r[a]) continue t;
				n += (n.length > 0 ? " " : "") + s
			}
			return n
		}

		function ve(t) {
			t = Ri(t);
			var e = t.length;
			if (e <= 1) return t;
			for (; e--;) {
				var n = t[e];
				n.nodeType === or && Fi.call(t, e, 1)
			}
			return t
		}

		function ye(t, e) {
			if (e && $(e)) return e;
			if ($(t)) {
				var n = Ur.exec(t);
				if (n) return n[3]
			}
		}

		function be() {
			var t = {},
				e = !1;
			this.has = function (e) {
				return t.hasOwnProperty(e)
			}, this.register = function (e, n) {
				dt(e, "controller"), x(e) ? f(t, e) : t[e] = n
			}, this.allowGlobals = function () {
				e = !0
			}, this.$get = ["$injector", "$window", function (r, o) {
				function s(t, e, n, r) {
					if (!t || !x(t.$scope)) throw i("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, e);
					t.$scope[e] = n
				}
				return function (i, a, l, u) {
					var c, h, p, d;
					if (l = l === !0, u && $(u) && (d = u), $(i)) {
						if (h = i.match(Ur), !h) throw Wr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", i);
						p = h[1], d = d || h[3], i = t.hasOwnProperty(p) ? t[p] : gt(a.$scope, p, !0) || (e ? gt(o, p, !0) : n), pt(i, p, !0)
					}
					if (l) {
						var g = (Ui(i) ? i[i.length - 1] : i).prototype;
						c = Object.create(g || null), d && s(a, d, c, p || i.name);
						var m;
						return m = f(function () {
							var t = r.invoke(i, c, a, p);
							return t !== c && (x(t) || C(t)) && (c = t, d && s(a, d, c, p || i.name)), c
						}, {
							instance: c,
							identifier: d
						})
					}
					return c = r.instantiate(i, a, p), d && s(a, d, c, p || i.name), c
				}
			}]
		}

		function we() {
			this.$get = ["$window", function (t) {
				return Ri(t.document)
			}]
		}

		function xe() {
			this.$get = ["$log", function (t) {
				return function (e, n) {
					t.error.apply(t, arguments)
				}
			}]
		}

		function _e(t) {
			return x(t) ? S(t) ? t.toISOString() : Y(t) : t
		}

		function $e() {
			this.$get = function () {
				return function (t) {
					if (!t) return "";
					var e = [];
					return s(t, function (t, n) {
						null === t || b(t) || (Ui(t) ? o(t, function (t) {
							e.push(rt(n) + "=" + rt(_e(t)))
						}) : e.push(rt(n) + "=" + rt(_e(t))))
					}), e.join("&")
				}
			}
		}

		function Te() {
			this.$get = function () {
				return function (t) {
					function e(t, i, r) {
						null === t || b(t) || (Ui(t) ? o(t, function (t, n) {
							e(t, i + "[" + (x(t) ? n : "") + "]")
						}) : x(t) && !S(t) ? s(t, function (t, n) {
							e(t, i + (r ? "" : "[") + n + (r ? "" : "]"))
						}) : n.push(rt(i) + "=" + rt(_e(t))))
					}
					if (!t) return "";
					var n = [];
					return e(t, "", !0), n.join("&")
				}
			}
		}

		function Se(t, e) {
			if ($(t)) {
				var n = t.replace(Zr, "").trim();
				if (n) {
					var i = e("Content-Type");
					(i && 0 === i.indexOf(Yr) || Ce(n)) && (t = G(n))
				}
			}
			return t
		}

		function Ce(t) {
			var e = t.match(Qr);
			return e && Kr[e[0]].test(t)
		}

		function ke(t) {
			function e(t, e) {
				t && (i[t] = i[t] ? i[t] + ", " + e : e)
			}
			var n, i = vt();
			return $(t) ? o(t.split("\n"), function (t) {
				n = t.indexOf(":"), e(Oi(Yi(t.substr(0, n))), Yi(t.substr(n + 1)))
			}) : x(t) && o(t, function (t, n) {
				e(Oi(n), Yi(t))
			}), i
		}

		function Ee(t) {
			var e;
			return function (n) {
				if (e || (e = ke(t)), n) {
					var i = e[Oi(n)];
					return void 0 === i && (i = null), i
				}
				return e
			}
		}

		function Ae(t, e, n, i) {
			return C(i) ? i(t, e, n) : (o(i, function (i) {
				t = i(t, e, n)
			}), t)
		}

		function Oe(t) {
			return 200 <= t && t < 300
		}

		function Pe() {
			var t = this.defaults = {
					transformResponse: [Se],
					transformRequest: [function (t) {
						return !x(t) || O(t) || M(t) || P(t) ? t : Y(t)
					}],
					headers: {
						common: {
							Accept: "application/json, text/plain, */*"
						},
						post: B(Gr),
						put: B(Gr),
						patch: B(Gr)
					},
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					paramSerializer: "$httpParamSerializer"
				},
				e = !1;
			this.useApplyAsync = function (t) {
				return w(t) ? (e = !!t, this) : e
			};
			var r = !0;
			this.useLegacyPromiseExtensions = function (t) {
				return w(t) ? (r = !!t, this) : r
			};
			var s = this.interceptors = [];
			this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, l, u, c, h, p) {
				function d(e) {
					function s(t) {
						var e = f({}, t);
						return e.data = Ae(t.data, t.headers, t.status, u.transformResponse), Oe(t.status) ? e : h.reject(e)
					}

					function a(t, e) {
						var n, i = {};
						return o(t, function (t, r) {
							C(t) ? (n = t(e), null != n && (i[r] = n)) : i[r] = t
						}), i
					}

					function l(e) {
						var n, i, r, o = t.headers,
							s = f({}, e.headers);
						o = f({}, o.common, o[Oi(e.method)]);
						t: for (n in o) {
							i = Oi(n);
							for (r in s)
								if (Oi(r) === i) continue t;
							s[n] = o[n]
						}
						return a(s, B(e))
					}
					if (!x(e)) throw i("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
					if (!$(e.url)) throw i("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", e.url);
					var u = f({
						method: "get",
						transformRequest: t.transformRequest,
						transformResponse: t.transformResponse,
						paramSerializer: t.paramSerializer
					}, e);
					u.headers = l(e), u.method = Pi(u.method), u.paramSerializer = $(u.paramSerializer) ? p.get(u.paramSerializer) : u.paramSerializer;
					var c = function (e) {
							var i = e.headers,
								r = Ae(e.data, Ee(i), n, e.transformRequest);
							return b(r) && o(i, function (t, e) {
								"content-type" === Oi(e) && delete i[e]
							}), b(e.withCredentials) && !b(t.withCredentials) && (e.withCredentials = t.withCredentials), v(e, r).then(s, s)
						},
						d = [c, n],
						g = h.when(u);
					for (o(T, function (t) {
							(t.request || t.requestError) && d.unshift(t.request, t.requestError), (t.response || t.responseError) && d.push(t.response, t.responseError)
						}); d.length;) {
						var m = d.shift(),
							y = d.shift();
						g = g.then(m, y)
					}
					return r ? (g.success = function (t) {
						return pt(t, "fn"), g.then(function (e) {
							t(e.data, e.status, e.headers, u)
						}), g
					}, g.error = function (t) {
						return pt(t, "fn"), g.then(null, function (e) {
							t(e.data, e.status, e.headers, u)
						}), g
					}) : (g.success = to("success"), g.error = to("error")), g
				}

				function g(t) {
					o(arguments, function (t) {
						d[t] = function (e, n) {
							return d(f({}, n || {}, {
								method: t,
								url: e
							}))
						}
					})
				}

				function m(t) {
					o(arguments, function (t) {
						d[t] = function (e, n, i) {
							return d(f({}, i || {}, {
								method: t,
								url: e,
								data: n
							}))
						}
					})
				}

				function v(i, r) {
					function o(t, n, i, r) {
						function o() {
							s(n, t, i, r)
						}
						p && (Oe(t) ? p.put(T, [t, n, ke(i), r]) : p.remove(T)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
					}

					function s(t, e, n, r) {
						e = e >= -1 ? e : 0, (Oe(e) ? m.resolve : m.reject)({
							data: t,
							status: e,
							headers: Ee(n),
							config: i,
							statusText: r
						})
					}

					function u(t) {
						s(t.data, t.status, B(t.headers()), t.statusText)
					}

					function f() {
						var t = d.pendingRequests.indexOf(i);
						t !== -1 && d.pendingRequests.splice(t, 1)
					}
					var p, g, m = h.defer(),
						v = m.promise,
						$ = i.headers,
						T = y(i.url, i.paramSerializer(i.params));
					if (d.pendingRequests.push(i), v.then(f, f), !i.cache && !t.cache || i.cache === !1 || "GET" !== i.method && "JSONP" !== i.method || (p = x(i.cache) ? i.cache : x(t.cache) ? t.cache : _), p && (g = p.get(T), w(g) ? D(g) ? g.then(u, u) : Ui(g) ? s(g[1], g[0], B(g[2]), g[3]) : s(g, 200, {}, "OK") : p.put(T, v)), b(g)) {
						var S = Nn(i.url) ? l()[i.xsrfCookieName || t.xsrfCookieName] : n;
						S && ($[i.xsrfHeaderName || t.xsrfHeaderName] = S), a(i.method, T, r, o, $, i.timeout, i.withCredentials, i.responseType)
					}
					return v
				}

				function y(t, e) {
					return e.length > 0 && (t += (t.indexOf("?") == -1 ? "?" : "&") + e), t
				}
				var _ = u("$http");
				t.paramSerializer = $(t.paramSerializer) ? p.get(t.paramSerializer) : t.paramSerializer;
				var T = [];
				return o(s, function (t) {
					T.unshift($(t) ? p.get(t) : p.invoke(t))
				}), d.pendingRequests = [], g("get", "delete", "head", "jsonp"), m("post", "put", "patch"), d.defaults = t, d
			}]
		}

		function Me() {
			this.$get = function () {
				return function () {
					return new t.XMLHttpRequest
				}
			}
		}

		function Ne() {
			this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (t, e, n, i) {
				return De(t, i, t.defer, e.angular.callbacks, n[0])
			}]
		}

		function De(t, e, n, i, r) {
			function s(t, e, n) {
				var o = r.createElement("script"),
					s = null;
				return o.type = "text/javascript", o.src = t, o.async = !0, s = function (t) {
					hr(o, "load", s), hr(o, "error", s), r.body.removeChild(o), o = null;
					var a = -1,
						l = "unknown";
					t && ("load" !== t.type || i[e].called || (t = {
						type: "error"
					}), l = t.type, a = "error" === t.type ? 404 : 200), n && n(a, l)
				}, fr(o, "load", s), fr(o, "error", s), r.body.appendChild(o), s
			}
			return function (r, a, l, u, c, f, h, p) {
				function d() {
					y && y(), x && x.abort()
				}

				function m(e, i, r, o, s) {
					w(T) && n.cancel(T), y = x = null, e(i, r, o, s), t.$$completeOutstandingRequest(g)
				}
				if (t.$$incOutstandingRequestCount(), a = a || t.url(), "jsonp" == Oi(r)) {
					var v = "_" + (i.counter++).toString(36);
					i[v] = function (t) {
						i[v].data = t, i[v].called = !0
					};
					var y = s(a.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function (t, e) {
						m(u, t, i[v].data, "", e), i[v] = g
					})
				} else {
					var x = e(r, a);
					x.open(r, a, !0), o(c, function (t, e) {
						w(t) && x.setRequestHeader(e, t)
					}), x.onload = function () {
						var t = x.statusText || "",
							e = "response" in x ? x.response : x.responseText,
							n = 1223 === x.status ? 204 : x.status;
						0 === n && (n = e ? 200 : "file" == Mn(a).protocol ? 404 : 0), m(u, n, e, x.getAllResponseHeaders(), t)
					};
					var _ = function () {
						m(u, -1, null, null, "")
					};
					if (x.onerror = _, x.onabort = _, h && (x.withCredentials = !0), p) try {
						x.responseType = p
					} catch ($) {
						if ("json" !== p) throw $
					}
					x.send(b(l) ? null : l)
				}
				if (f > 0) var T = n(d, f);
				else D(f) && f.then(d)
			}
		}

		function Re() {
			var t = "{{",
				e = "}}";
			this.startSymbol = function (e) {
				return e ? (t = e, this) : t
			}, this.endSymbol = function (t) {
				return t ? (e = t, this) : e
			}, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r) {
				function o(t) {
					return "\\\\\\" + t
				}

				function s(n) {
					return n.replace(p, t).replace(d, e)
				}

				function a(t) {
					if (null == t) return "";
					switch (typeof t) {
						case "string":
							break;
						case "number":
							t = "" + t;
							break;
						default:
							t = Y(t)
					}
					return t
				}

				function l(t, e, n, i) {
					var r;
					return r = t.$watch(function (t) {
						return r(), i(t)
					}, e, n)
				}

				function u(o, u, p, d) {
					function g(t) {
						try {
							return t = M(t), d && !w(t) ? t : a(t)
						} catch (e) {
							i(eo.interr(o, e))
						}
					}
					if (!o.length || o.indexOf(t) === -1) {
						var m;
						if (!u) {
							var y = s(o);
							m = v(y), m.exp = o, m.expressions = [], m.$$watchDelegate = l
						}
						return m
					}
					d = !!d;
					for (var x, _, $, T = 0, S = [], k = [], E = o.length, A = [], O = []; T < E;) {
						if ((x = o.indexOf(t, T)) == -1 || (_ = o.indexOf(e, x + c)) == -1) {
							T !== E && A.push(s(o.substring(T)));
							break
						}
						T !== x && A.push(s(o.substring(T, x))), $ = o.substring(x + c, _), S.push($), k.push(n($, g)), T = _ + h, O.push(A.length), A.push("")
					}
					if (p && A.length > 1 && eo.throwNoconcat(o), !u || S.length) {
						var P = function (t) {
								for (var e = 0, n = S.length; e < n; e++) {
									if (d && b(t[e])) return;
									A[O[e]] = t[e]
								}
								return A.join("")
							},
							M = function (t) {
								return p ? r.getTrusted(p, t) : r.valueOf(t)
							};
						return f(function (t) {
							var e = 0,
								n = S.length,
								r = new Array(n);
							try {
								for (; e < n; e++) r[e] = k[e](t);
								return P(r)
							} catch (s) {
								i(eo.interr(o, s))
							}
						}, {
							exp: o,
							expressions: S,
							$$watchDelegate: function (t, e) {
								var n;
								return t.$watchGroup(k, function (i, r) {
									var o = P(i);
									C(e) && e.call(this, o, i !== r ? n : o, t), n = o
								})
							}
						})
					}
				}
				var c = t.length,
					h = e.length,
					p = new RegExp(t.replace(/./g, o), "g"),
					d = new RegExp(e.replace(/./g, o), "g");
				return u.startSymbol = function () {
					return t
				}, u.endSymbol = function () {
					return e
				}, u
			}]
		}

		function Le() {
			this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (t, e, n, i, r) {
				function o(o, a, l, u) {
					function c() {
						f ? o.apply(null, h) : o(g)
					}
					var f = arguments.length > 4,
						h = f ? W(arguments, 4) : [],
						p = e.setInterval,
						d = e.clearInterval,
						g = 0,
						m = w(u) && !u,
						v = (m ? i : n).defer(),
						y = v.promise;
					return l = w(l) ? l : 0, y.$$intervalId = p(function () {
						m ? r.defer(c) : t.$evalAsync(c), v.notify(g++), l > 0 && g >= l && (v.resolve(g), d(y.$$intervalId), delete s[y.$$intervalId]), m || t.$apply()
					}, a), s[y.$$intervalId] = v, y
				}
				var s = {};
				return o.cancel = function (t) {
					return !!(t && t.$$intervalId in s) && (s[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete s[t.$$intervalId], !0)
				}, o
			}]
		}

		function Ie(t) {
			for (var e = t.split("/"), n = e.length; n--;) e[n] = it(e[n]);
			return e.join("/")
		}

		function je(t, e) {
			var n = Mn(t);
			e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = p(n.port) || io[n.protocol] || null
		}

		function Fe(t, e) {
			var n = "/" !== t.charAt(0);
			n && (t = "/" + t);
			var i = Mn(t);
			e.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), e.$$search = et(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
		}

		function ze(t, e) {
			if (0 === e.indexOf(t)) return e.substr(t.length)
		}

		function qe(t) {
			var e = t.indexOf("#");
			return e == -1 ? t : t.substr(0, e)
		}

		function Be(t) {
			return t.replace(/(#.+)|#$/, "$1")
		}

		function He(t) {
			return t.substr(0, qe(t).lastIndexOf("/") + 1)
		}

		function Ve(t) {
			return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
		}

		function We(t, e, n) {
			this.$$html5 = !0, n = n || "", je(t, this), this.$$parse = function (t) {
				var n = ze(e, t);
				if (!$(n)) throw ro("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
				Fe(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
			}, this.$$compose = function () {
				var t = nt(this.$$search),
					n = this.$$hash ? "#" + it(this.$$hash) : "";
				this.$$url = Ie(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
			}, this.$$parseLinkUrl = function (i, r) {
				if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
				var o, s, a;
				return w(o = ze(t, i)) ? (s = o, a = w(o = ze(n, o)) ? e + (ze("/", o) || o) : t + s) : w(o = ze(e, i)) ? a = e + o : e == i + "/" && (a = e), a && this.$$parse(a), !!a
			}
		}

		function Ue(t, e, n) {
			je(t, this), this.$$parse = function (i) {
				function r(t, e, n) {
					var i, r = /^\/[A-Z]:(\/.*)/;
					return 0 === e.indexOf(n) && (e = e.replace(n, "")), r.exec(e) ? t : (i = r.exec(t), i ? i[1] : t)
				}
				var o, s = ze(t, i) || ze(e, i);
				b(s) || "#" !== s.charAt(0) ? this.$$html5 ? o = s : (o = "", b(s) && (t = i, this.replace())) : (o = ze(n, s), b(o) && (o = s)), Fe(o, this), this.$$path = r(this.$$path, o, t), this.$$compose()
			}, this.$$compose = function () {
				var e = nt(this.$$search),
					i = this.$$hash ? "#" + it(this.$$hash) : "";
				this.$$url = Ie(this.$$path) + (e ? "?" + e : "") + i, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
			}, this.$$parseLinkUrl = function (e, n) {
				return qe(t) == qe(e) && (this.$$parse(e), !0)
			}
		}

		function Xe(t, e, n) {
			this.$$html5 = !0, Ue.apply(this, arguments), this.$$parseLinkUrl = function (i, r) {
				if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
				var o, s;
				return t == qe(i) ? o = i : (s = ze(e, i)) ? o = t + n + s : e === i + "/" && (o = e), o && this.$$parse(o), !!o
			}, this.$$compose = function () {
				var e = nt(this.$$search),
					i = this.$$hash ? "#" + it(this.$$hash) : "";
				this.$$url = Ie(this.$$path) + (e ? "?" + e : "") + i, this.$$absUrl = t + n + this.$$url
			}
		}

		function Ye(t) {
			return function () {
				return this[t]
			}
		}

		function Ge(t, e) {
			return function (n) {
				return b(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
			}
		}

		function Qe() {
			var t = "",
				e = {
					enabled: !1,
					requireBase: !0,
					rewriteLinks: !0
				};
			this.hashPrefix = function (e) {
				return w(e) ? (t = e, this) : t
			}, this.html5Mode = function (t) {
				return N(t) ? (e.enabled = t, this) : x(t) ? (N(t.enabled) && (e.enabled = t.enabled), N(t.requireBase) && (e.requireBase = t.requireBase), N(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
			}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, i, r, o, s) {
				function a(t, e, n) {
					var r = u.url(),
						o = u.$$state;
					try {
						i.url(t, e, n), u.$$state = i.state()
					} catch (s) {
						throw u.url(r), u.$$state = o, s
					}
				}

				function l(t, e) {
					n.$broadcast("$locationChangeSuccess", u.absUrl(), t, u.$$state, e)
				}
				var u, c, f, h = i.baseHref(),
					p = i.url();
				if (e.enabled) {
					if (!h && e.requireBase) throw ro("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
					f = Ve(p) + (h || "/"), c = r.history ? We : Xe
				} else f = qe(p), c = Ue;
				var d = He(f);
				u = new c(f, d, "#" + t), u.$$parseLinkUrl(p, p), u.$$state = i.state();
				var g = /^\s*(javascript|mailto):/i;
				o.on("click", function (t) {
					if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
						for (var r = Ri(t.target);
							"a" !== F(r[0]);)
							if (r[0] === o[0] || !(r = r.parent())[0]) return;
						var a = r.prop("href"),
							l = r.attr("href") || r.attr("xlink:href");
						x(a) && "[object SVGAnimatedString]" === a.toString() && (a = Mn(a.animVal).href), g.test(a) || !a || r.attr("target") || t.isDefaultPrevented() || u.$$parseLinkUrl(a, l) && (t.preventDefault(), u.absUrl() != i.url() && (n.$apply(), s.angular["ff-684208-preventDefault"] = !0))
					}
				}), Be(u.absUrl()) != Be(p) && i.url(u.absUrl(), !0);
				var m = !0;
				return i.onUrlChange(function (t, e) {
					return b(ze(d, t)) ? void(s.location.href = t) : (n.$evalAsync(function () {
						var i, r = u.absUrl(),
							o = u.$$state;
						t = Be(t), u.$$parse(t), u.$$state = e, i = n.$broadcast("$locationChangeStart", t, r, e, o).defaultPrevented, u.absUrl() === t && (i ? (u.$$parse(r), u.$$state = o, a(r, !1, o)) : (m = !1, l(r, o)))
					}), void(n.$$phase || n.$digest()))
				}), n.$watch(function () {
					var t = Be(i.url()),
						e = Be(u.absUrl()),
						o = i.state(),
						s = u.$$replace,
						c = t !== e || u.$$html5 && r.history && o !== u.$$state;
					(m || c) && (m = !1, n.$evalAsync(function () {
						var e = u.absUrl(),
							i = n.$broadcast("$locationChangeStart", e, t, u.$$state, o).defaultPrevented;
						u.absUrl() === e && (i ? (u.$$parse(t), u.$$state = o) : (c && a(e, s, o === u.$$state ? null : u.$$state), l(t, o)))
					})), u.$$replace = !1
				}), u
			}]
		}

		function Ke() {
			var t = !0,
				e = this;
			this.debugEnabled = function (e) {
				return w(e) ? (t = e, this) : t
			}, this.$get = ["$window", function (n) {
				function i(t) {
					return t instanceof Error && (t.stack ? t = t.message && t.stack.indexOf(t.message) === -1 ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
				}

				function r(t) {
					var e = n.console || {},
						r = e[t] || e.log || g,
						s = !1;
					try {
						s = !!r.apply
					} catch (a) {}
					return s ? function () {
						var t = [];
						return o(arguments, function (e) {
							t.push(i(e))
						}), r.apply(e, t)
					} : function (t, e) {
						r(t, null == e ? "" : e)
					}
				}
				return {
					log: r("log"),
					info: r("info"),
					warn: r("warn"),
					error: r("error"),
					debug: function () {
						var n = r("debug");
						return function () {
							t && n.apply(e, arguments)
						}
					}()
				}
			}]
		}

		function Ze(t, e) {
			if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw so("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
			return t
		}

		function Je(t) {
			return t + ""
		}

		function tn(t, e) {
			if (t) {
				if (t.constructor === t) throw so("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
				if (t.window === t) throw so("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
				if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw so("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
				if (t === Object) throw so("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
			}
			return t
		}

		function en(t, e) {
			if (t) {
				if (t.constructor === t) throw so("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
				if (t === ao || t === lo || t === uo) throw so("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
			}
		}

		function nn(t, e) {
			if (t && (t === (0).constructor || t === (!1).constructor || t === "".constructor || t === {}.constructor || t === [].constructor || t === Function.constructor)) throw so("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", e)
		}

		function rn(t, e) {
			return "undefined" != typeof t ? t : e
		}

		function on(t, e) {
			return "undefined" == typeof t ? e : "undefined" == typeof e ? t : t + e
		}

		function sn(t, e) {
			var n = t(e);
			return !n.$stateful
		}

		function an(t, e) {
			var n, i;
			switch (t.type) {
				case po.Program:
					n = !0, o(t.body, function (t) {
						an(t.expression, e), n = n && t.expression.constant
					}), t.constant = n;
					break;
				case po.Literal:
					t.constant = !0, t.toWatch = [];
					break;
				case po.UnaryExpression:
					an(t.argument, e), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
					break;
				case po.BinaryExpression:
					an(t.left, e), an(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
					break;
				case po.LogicalExpression:
					an(t.left, e), an(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
					break;
				case po.ConditionalExpression:
					an(t.test, e), an(t.alternate, e), an(t.consequent, e), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
					break;
				case po.Identifier:
					t.constant = !1, t.toWatch = [t];
					break;
				case po.MemberExpression:
					an(t.object, e), t.computed && an(t.property, e), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
					break;
				case po.CallExpression:
					n = !!t.filter && sn(e, t.callee.name), i = [], o(t.arguments, function (t) {
						an(t, e), n = n && t.constant, t.constant || i.push.apply(i, t.toWatch)
					}), t.constant = n, t.toWatch = t.filter && sn(e, t.callee.name) ? i : [t];
					break;
				case po.AssignmentExpression:
					an(t.left, e), an(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
					break;
				case po.ArrayExpression:
					n = !0, i = [], o(t.elements, function (t) {
						an(t, e), n = n && t.constant, t.constant || i.push.apply(i, t.toWatch)
					}), t.constant = n, t.toWatch = i;
					break;
				case po.ObjectExpression:
					n = !0, i = [], o(t.properties, function (t) {
						an(t.value, e), n = n && t.value.constant, t.value.constant || i.push.apply(i, t.value.toWatch)
					}), t.constant = n, t.toWatch = i;
					break;
				case po.ThisExpression:
					t.constant = !1, t.toWatch = [];
					break;
				case po.LocalsExpression:
					t.constant = !1, t.toWatch = []
			}
		}

		function ln(t) {
			if (1 == t.length) {
				var e = t[0].expression,
					i = e.toWatch;
				return 1 !== i.length ? i : i[0] !== e ? i : n
			}
		}

		function un(t) {
			return t.type === po.Identifier || t.type === po.MemberExpression
		}

		function cn(t) {
			if (1 === t.body.length && un(t.body[0].expression)) return {
				type: po.AssignmentExpression,
				left: t.body[0].expression,
				right: {
					type: po.NGValueParameter
				},
				operator: "="
			}
		}

		function fn(t) {
			return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === po.Literal || t.body[0].expression.type === po.ArrayExpression || t.body[0].expression.type === po.ObjectExpression)
		}

		function hn(t) {
			return t.constant
		}

		function pn(t, e) {
			this.astBuilder = t, this.$filter = e
		}

		function dn(t, e) {
			this.astBuilder = t, this.$filter = e
		}

		function gn(t) {
			return "constructor" == t
		}

		function mn(t) {
			return C(t.valueOf) ? t.valueOf() : mo.call(t)
		}

		function vn() {
			var t = vt(),
				e = vt(),
				i = {
					"true": !0,
					"false": !1,
					"null": null,
					undefined: n
				};
			this.addLiteral = function (t, e) {
				i[t] = e
			}, this.$get = ["$filter", function (r) {
				function s(n, i, o) {
					var s, l, d;
					switch (o = o || y, typeof n) {
						case "string":
							n = n.trim(), d = n;
							var b = o ? e : t;
							if (s = b[d], !s) {
								":" === n.charAt(0) && ":" === n.charAt(1) && (l = !0, n = n.substring(2));
								var w = o ? v : m,
									x = new ho(w),
									_ = new go(x, r, w);
								s = _.parse(n), s.constant ? s.$$watchDelegate = h : l ? s.$$watchDelegate = s.literal ? f : c : s.inputs && (s.$$watchDelegate = u), o && (s = a(s)), b[d] = s
							}
							return p(s, i);
						case "function":
							return p(n, i);
						default:
							return p(g, i)
					}
				}

				function a(t) {
					function e(e, n, i, r) {
						var o = y;
						y = !0;
						try {
							return t(e, n, i, r)
						} finally {
							y = o
						}
					}
					if (!t) return t;
					e.$$watchDelegate = t.$$watchDelegate, e.assign = a(t.assign), e.constant = t.constant, e.literal = t.literal;
					for (var n = 0; t.inputs && n < t.inputs.length; ++n) t.inputs[n] = a(t.inputs[n]);
					return e.inputs = t.inputs, e
				}

				function l(t, e) {
					return null == t || null == e ? t === e : ("object" != typeof t || (t = mn(t), "object" != typeof t)) && (t === e || t !== t && e !== e)
				}

				function u(t, e, i, r, o) {
					var s, a = r.inputs;
					if (1 === a.length) {
						var u = l;
						return a = a[0], t.$watch(function (t) {
							var e = a(t);
							return l(e, u) || (s = r(t, n, n, [e]), u = e && mn(e)), s
						}, e, i, o)
					}
					for (var c = [], f = [], h = 0, p = a.length; h < p; h++) c[h] = l, f[h] = null;
					return t.$watch(function (t) {
						for (var e = !1, i = 0, o = a.length; i < o; i++) {
							var u = a[i](t);
							(e || (e = !l(u, c[i]))) && (f[i] = u, c[i] = u && mn(u))
						}
						return e && (s = r(t, n, n, f)), s
					}, e, i, o)
				}

				function c(t, e, n, i) {
					var r, o;
					return r = t.$watch(function (t) {
						return i(t)
					}, function (t, n, i) {
						o = t, C(e) && e.apply(this, arguments), w(t) && i.$$postDigest(function () {
							w(o) && r()
						})
					}, n)
				}

				function f(t, e, n, i) {
					function r(t) {
						var e = !0;
						return o(t, function (t) {
							w(t) || (e = !1)
						}), e
					}
					var s, a;
					return s = t.$watch(function (t) {
						return i(t)
					}, function (t, n, i) {
						a = t, C(e) && e.call(this, t, n, i), r(t) && i.$$postDigest(function () {
							r(a) && s()
						})
					}, n)
				}

				function h(t, e, n, i) {
					var r;
					return r = t.$watch(function (t) {
						return r(), i(t)
					}, e, n)
				}

				function p(t, e) {
					if (!e) return t;
					var n = t.$$watchDelegate,
						i = !1,
						r = n !== f && n !== c,
						o = r ? function (n, r, o, s) {
							var a = i && s ? s[0] : t(n, r, o, s);
							return e(a, n, r)
						} : function (n, i, r, o) {
							var s = t(n, i, r, o),
								a = e(s, n, i);
							return w(s) ? a : s
						};
					return t.$$watchDelegate && t.$$watchDelegate !== u ? o.$$watchDelegate = t.$$watchDelegate : e.$stateful || (o.$$watchDelegate = u, i = !t.inputs, o.inputs = t.inputs ? t.inputs : [t]), o
				}
				var d = Qi().noUnsafeEval,
					m = {
						csp: d,
						expensiveChecks: !1,
						literals: q(i)
					},
					v = {
						csp: d,
						expensiveChecks: !0,
						literals: q(i)
					},
					y = !1;
				return s.$$runningExpensiveChecks = function () {
					return y
				}, s
			}]
		}

		function yn() {
			this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
				return wn(function (e) {
					t.$evalAsync(e)
				}, e)
			}]
		}

		function bn() {
			this.$get = ["$browser", "$exceptionHandler", function (t, e) {
				return wn(function (e) {
					t.defer(e)
				}, e)
			}]
		}

		function wn(t, e) {
			function r() {
				this.$$state = {
					status: 0
				}
			}

			function s(t, e) {
				return function (n) {
					e.call(t, n)
				}
			}

			function a(t) {
				var i, r, o;
				o = t.pending, t.processScheduled = !1, t.pending = n;
				for (var s = 0, a = o.length; s < a; ++s) {
					r = o[s][0], i = o[s][t.status];
					try {
						C(i) ? r.resolve(i(t.value)) : 1 === t.status ? r.resolve(t.value) : r.reject(t.value)
					} catch (l) {
						r.reject(l), e(l)
					}
				}
			}

			function l(e) {
				!e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
					a(e)
				}))
			}

			function u() {
				this.promise = new r
			}

			function c(t) {
				var e = new u,
					n = 0,
					i = Ui(t) ? [] : {};
				return o(t, function (t, r) {
					n++, v(t).then(function (t) {
						i.hasOwnProperty(r) || (i[r] = t, --n || e.resolve(i))
					}, function (t) {
						i.hasOwnProperty(r) || e.reject(t)
					})
				}), 0 === n && e.resolve(i), e.promise
			}
			var h = i("$q", TypeError),
				p = function () {
					var t = new u;
					return t.resolve = s(t, t.resolve), t.reject = s(t, t.reject), t.notify = s(t, t.notify), t
				};
			f(r.prototype, {
				then: function (t, e, n) {
					if (b(t) && b(e) && b(n)) return this;
					var i = new u;
					return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, t, e, n]), this.$$state.status > 0 && l(this.$$state), i.promise
				},
				"catch": function (t) {
					return this.then(null, t)
				},
				"finally": function (t, e) {
					return this.then(function (e) {
						return m(e, !0, t)
					}, function (e) {
						return m(e, !1, t)
					}, e)
				}
			}), f(u.prototype, {
				resolve: function (t) {
					this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
				},
				$$resolve: function (t) {
					function n(t) {
						a || (a = !0, o.$$resolve(t))
					}

					function i(t) {
						a || (a = !0, o.$$reject(t))
					}
					var r, o = this,
						a = !1;
					try {
						(x(t) || C(t)) && (r = t && t.then), C(r) ? (this.promise.$$state.status = -1, r.call(t, n, i, s(this, this.notify))) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
					} catch (u) {
						i(u), e(u)
					}
				},
				reject: function (t) {
					this.promise.$$state.status || this.$$reject(t)
				},
				$$reject: function (t) {
					this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
				},
				notify: function (n) {
					var i = this.promise.$$state.pending;
					this.promise.$$state.status <= 0 && i && i.length && t(function () {
						for (var t, r, o = 0, s = i.length; o < s; o++) {
							r = i[o][0], t = i[o][3];
							try {
								r.notify(C(t) ? t(n) : n)
							} catch (a) {
								e(a)
							}
						}
					})
				}
			});
			var d = function (t) {
					var e = new u;
					return e.reject(t), e.promise
				},
				g = function (t, e) {
					var n = new u;
					return e ? n.resolve(t) : n.reject(t), n.promise
				},
				m = function (t, e, n) {
					var i = null;
					try {
						C(n) && (i = n())
					} catch (r) {
						return g(r, !1)
					}
					return D(i) ? i.then(function () {
						return g(t, e)
					}, function (t) {
						return g(t, !1)
					}) : g(t, e)
				},
				v = function (t, e, n, i) {
					var r = new u;
					return r.resolve(t), r.promise.then(e, n, i)
				},
				y = v,
				w = function (t) {
					function e(t) {
						i.resolve(t)
					}

					function n(t) {
						i.reject(t)
					}
					if (!C(t)) throw h("norslvr", "Expected resolverFn, got '{0}'", t);
					var i = new u;
					return t(e, n), i.promise
				};
			return w.prototype = r.prototype, w.defer = p, w.reject = d, w.when = v, w.resolve = y, w.all = c, w
		}

		function xn() {
			this.$get = ["$window", "$timeout", function (t, e) {
				var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
					i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
					r = !!n,
					o = r ? function (t) {
						var e = n(t);
						return function () {
							i(e)
						}
					} : function (t) {
						var n = e(t, 16.66, !1);
						return function () {
							e.cancel(n)
						}
					};
				return o.supported = r, o
			}]
		}

		function _n() {
			function t(t) {
				function e() {
					this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = l(), this.$$ChildScope = null
				}
				return e.prototype = t, e
			}
			var e = 10,
				n = i("$rootScope"),
				s = null,
				a = null;
			this.digestTtl = function (t) {
				return arguments.length && (e = t), e
			}, this.$get = ["$exceptionHandler", "$parse", "$browser", function (i, u, c) {
				function f(t) {
					t.currentScope.$$destroyed = !0
				}

				function h(t) {
					9 === Di && (t.$$childHead && h(t.$$childHead), t.$$nextSibling && h(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
				}

				function p() {
					this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
				}

				function d(t) {
					if (T.$$phase) throw n("inprog", "{0} already in progress", T.$$phase);
					T.$$phase = t
				}

				function m() {
					T.$$phase = null
				}

				function v(t, e) {
					do t.$$watchersCount += e; while (t = t.$parent)
				}

				function y(t, e, n) {
					do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
				}

				function w() {}

				function _() {
					for (; E.length;) try {
						E.shift()()
					} catch (t) {
						i(t)
					}
					a = null
				}

				function $() {
					null === a && (a = c.defer(function () {
						T.$apply(_)
					}))
				}
				p.prototype = {
					constructor: p,
					$new: function (e, n) {
						var i;
						return n = n || this, e ? (i = new p, i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), i = new this.$$ChildScope), i.$parent = n, i.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = i, n.$$childTail = i) : n.$$childHead = n.$$childTail = i, (e || n != this) && i.$on("$destroy", f), i
					},
					$watch: function (t, e, n, i) {
						var r = u(t);
						if (r.$$watchDelegate) return r.$$watchDelegate(this, e, n, r, t);
						var o = this,
							a = o.$$watchers,
							l = {
								fn: e,
								last: w,
								get: r,
								exp: i || t,
								eq: !!n
							};
						return s = null, C(e) || (l.fn = g), a || (a = o.$$watchers = []), a.unshift(l), v(this, 1),
							function () {
								z(a, l) >= 0 && v(o, -1), s = null
							}
					},
					$watchGroup: function (t, e) {
						function n() {
							l = !1, u ? (u = !1, e(r, r, a)) : e(r, i, a)
						}
						var i = new Array(t.length),
							r = new Array(t.length),
							s = [],
							a = this,
							l = !1,
							u = !0;
						if (!t.length) {
							var c = !0;
							return a.$evalAsync(function () {
									c && e(r, r, a)
								}),
								function () {
									c = !1
								}
						}
						return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
							r[0] = t, i[0] = n, e(r, t === n ? r : i, o)
						}) : (o(t, function (t, e) {
							var o = a.$watch(t, function (t, o) {
								r[e] = t, i[e] = o, l || (l = !0, a.$evalAsync(n))
							});
							s.push(o)
						}), function () {
							for (; s.length;) s.shift()()
						})
					},
					$watchCollection: function (t, e) {
						function n(t) {
							o = t;
							var e, n, i, a, l;
							if (!b(o)) {
								if (x(o))
									if (r(o)) {
										s !== p && (s = p, m = s.length = 0, f++), e = o.length, m !== e && (f++, s.length = m = e);
										for (var u = 0; u < e; u++) l = s[u], a = o[u], i = l !== l && a !== a, i || l === a || (f++, s[u] = a)
									} else {
										s !== d && (s = d = {}, m = 0, f++), e = 0;
										for (n in o) Ai.call(o, n) && (e++, a = o[n], l = s[n], n in s ? (i = l !== l && a !== a, i || l === a || (f++, s[n] = a)) : (m++, s[n] = a, f++));
										if (m > e) {
											f++;
											for (n in s) Ai.call(o, n) || (m--, delete s[n])
										}
									}
								else s !== o && (s = o, f++);
								return f
							}
						}

						function i() {
							if (g ? (g = !1, e(o, o, l)) : e(o, a, l), c)
								if (x(o))
									if (r(o)) {
										a = new Array(o.length);
										for (var t = 0; t < o.length; t++) a[t] = o[t]
									} else {
										a = {};
										for (var n in o) Ai.call(o, n) && (a[n] = o[n])
									}
							else a = o
						}
						n.$stateful = !0;
						var o, s, a, l = this,
							c = e.length > 1,
							f = 0,
							h = u(t, n),
							p = [],
							d = {},
							g = !0,
							m = 0;
						return this.$watch(h, i)
					},
					$digest: function () {
						var t, r, o, l, u, f, h, p, g, v, y, b, x = e,
							$ = this,
							E = [];
						d("$digest"), c.$$checkUrlChange(), this === T && null !== a && (c.defer.cancel(a), _()), s = null;
						do {
							for (p = !1, v = $; S.length;) {
								try {
									b = S.shift(), b.scope.$eval(b.expression, b.locals)
								} catch (A) {
									i(A)
								}
								s = null
							}
							t: do {
								if (f = v.$$watchers)
									for (h = f.length; h--;) try {
										if (t = f[h])
											if (u = t.get, (r = u(v)) === (o = t.last) || (t.eq ? H(r, o) : "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))) {
												if (t === s) {
													p = !1;
													break t
												}
											} else p = !0, s = t, t.last = t.eq ? q(r, null) : r, l = t.fn, l(r, o === w ? r : o, v), x < 5 && (y = 4 - x, E[y] || (E[y] = []), E[y].push({
												msg: C(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
												newVal: r,
												oldVal: o
											}))
									} catch (A) {
										i(A)
									}
								if (!(g = v.$$watchersCount && v.$$childHead || v !== $ && v.$$nextSibling))
									for (; v !== $ && !(g = v.$$nextSibling);) v = v.$parent
							} while (v = g);
							if ((p || S.length) && !x--) throw m(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, E)
						} while (p || S.length);
						for (m(); k.length;) try {
							k.shift()()
						} catch (A) {
							i(A)
						}
					},
					$destroy: function () {
						if (!this.$$destroyed) {
							var t = this.$parent;
							this.$broadcast("$destroy"), this.$$destroyed = !0, this === T && c.$$applicationDestroyed(), v(this, -this.$$watchersCount);
							for (var e in this.$$listenerCount) y(this, this.$$listenerCount[e], e);
							t && t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = g, this.$on = this.$watch = this.$watchGroup = function () {
								return g
							}, this.$$listeners = {}, this.$$nextSibling = null, h(this)
						}
					},
					$eval: function (t, e) {
						return u(t)(this, e)
					},
					$evalAsync: function (t, e) {
						T.$$phase || S.length || c.defer(function () {
							S.length && T.$digest()
						}), S.push({
							scope: this,
							expression: u(t),
							locals: e
						})
					},
					$$postDigest: function (t) {
						k.push(t)
					},
					$apply: function (t) {
						try {
							d("$apply");
							try {
								return this.$eval(t)
							} finally {
								m()
							}
						} catch (e) {
							i(e)
						} finally {
							try {
								T.$digest()
							} catch (e) {
								throw i(e), e
							}
						}
					},
					$applyAsync: function (t) {
						function e() {
							n.$eval(t)
						}
						var n = this;
						t && E.push(e), t = u(t), $()
					},
					$on: function (t, e) {
						var n = this.$$listeners[t];
						n || (this.$$listeners[t] = n = []), n.push(e);
						var i = this;
						do i.$$listenerCount[t] || (i.$$listenerCount[t] = 0), i.$$listenerCount[t]++; while (i = i.$parent);
						var r = this;
						return function () {
							var i = n.indexOf(e);
							i !== -1 && (n[i] = null, y(r, 1, t))
						}
					},
					$emit: function (t, e) {
						var n, r, o, s = [],
							a = this,
							l = !1,
							u = {
								name: t,
								targetScope: a,
								stopPropagation: function () {
									l = !0
								},
								preventDefault: function () {
									u.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							c = V([u], arguments, 1);
						do {
							for (n = a.$$listeners[t] || s, u.currentScope = a, r = 0, o = n.length; r < o; r++)
								if (n[r]) try {
									n[r].apply(null, c)
								} catch (f) {
									i(f)
								} else n.splice(r, 1), r--, o--;
							if (l) return u.currentScope = null, u;
							a = a.$parent
						} while (a);
						return u.currentScope = null, u
					},
					$broadcast: function (t, e) {
						var n = this,
							r = n,
							o = n,
							s = {
								name: t,
								targetScope: n,
								preventDefault: function () {
									s.defaultPrevented = !0
								},
								defaultPrevented: !1
							};
						if (!n.$$listenerCount[t]) return s;
						for (var a, l, u, c = V([s], arguments, 1); r = o;) {
							for (s.currentScope = r, a = r.$$listeners[t] || [], l = 0, u = a.length; l < u; l++)
								if (a[l]) try {
									a[l].apply(null, c)
								} catch (f) {
									i(f)
								} else a.splice(l, 1), l--, u--;
							if (!(o = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling))
								for (; r !== n && !(o = r.$$nextSibling);) r = r.$parent
						}
						return s.currentScope = null, s
					}
				};
				var T = new p,
					S = T.$$asyncQueue = [],
					k = T.$$postDigestQueue = [],
					E = T.$$applyAsyncQueue = [];
				return T
			}]
		}

		function $n() {
			var t = /^\s*(https?|ftp|mailto|tel|file):/,
				e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
			this.aHrefSanitizationWhitelist = function (e) {
				return w(e) ? (t = e, this) : t
			}, this.imgSrcSanitizationWhitelist = function (t) {
				return w(t) ? (e = t, this) : e
			}, this.$get = function () {
				return function (n, i) {
					var r, o = i ? e : t;
					return r = Mn(n).href, "" === r || r.match(o) ? n : "unsafe:" + r
				}
			}
		}

		function Tn(t) {
			if ("self" === t) return t;
			if ($(t)) {
				if (t.indexOf("***") > -1) throw vo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
				return t = Gi(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
			}
			if (k(t)) return new RegExp("^" + t.source + "$");
			throw vo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
		}

		function Sn(t) {
			var e = [];
			return w(t) && o(t, function (t) {
				e.push(Tn(t))
			}), e
		}

		function Cn() {
			this.SCE_CONTEXTS = yo;
			var t = ["self"],
				e = [];
			this.resourceUrlWhitelist = function (e) {
				return arguments.length && (t = Sn(e)), t
			}, this.resourceUrlBlacklist = function (t) {
				return arguments.length && (e = Sn(t)), e
			}, this.$get = ["$injector", function (n) {
				function i(t, e) {
					return "self" === t ? Nn(e) : !!t.exec(e.href)
				}

				function r(n) {
					var r, o, s = Mn(n.toString()),
						a = !1;
					for (r = 0, o = t.length; r < o; r++)
						if (i(t[r], s)) {
							a = !0;
							break
						}
					if (a)
						for (r = 0, o = e.length; r < o; r++)
							if (i(e[r], s)) {
								a = !1;
								break
							}
					return a
				}

				function o(t) {
					var e = function (t) {
						this.$$unwrapTrustedValue = function () {
							return t
						}
					};
					return t && (e.prototype = new t), e.prototype.valueOf = function () {
						return this.$$unwrapTrustedValue()
					}, e.prototype.toString = function () {
						return this.$$unwrapTrustedValue().toString()
					}, e
				}

				function s(t, e) {
					var n = f.hasOwnProperty(t) ? f[t] : null;
					if (!n) throw vo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
					if (null === e || b(e) || "" === e) return e;
					if ("string" != typeof e) throw vo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
					return new n(e)
				}

				function a(t) {
					return t instanceof c ? t.$$unwrapTrustedValue() : t
				}

				function l(t, e) {
					if (null === e || b(e) || "" === e) return e;
					var n = f.hasOwnProperty(t) ? f[t] : null;
					if (n && e instanceof n) return e.$$unwrapTrustedValue();
					if (t === yo.RESOURCE_URL) {
						if (r(e)) return e;
						throw vo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
					}
					if (t === yo.HTML) return u(e);
					throw vo("unsafe", "Attempting to use an unsafe value in a safe context.")
				}
				var u = function (t) {
					throw vo("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
				n.has("$sanitize") && (u = n.get("$sanitize"));
				var c = o(),
					f = {};
				return f[yo.HTML] = o(c), f[yo.CSS] = o(c), f[yo.URL] = o(c), f[yo.JS] = o(c), f[yo.RESOURCE_URL] = o(f[yo.URL]), {
					trustAs: s,
					getTrusted: l,
					valueOf: a
				}
			}]
		}

		function kn() {
			var t = !0;
			this.enabled = function (e) {
				return arguments.length && (t = !!e), t
			}, this.$get = ["$parse", "$sceDelegate", function (e, n) {
				if (t && Di < 8) throw vo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var i = B(yo);
				i.isEnabled = function () {
					return t
				}, i.trustAs = n.trustAs, i.getTrusted = n.getTrusted, i.valueOf = n.valueOf, t || (i.trustAs = i.getTrusted = function (t, e) {
					return e
				}, i.valueOf = m), i.parseAs = function (t, n) {
					var r = e(n);
					return r.literal && r.constant ? r : e(n, function (e) {
						return i.getTrusted(t, e)
					})
				};
				var r = i.parseAs,
					s = i.getTrusted,
					a = i.trustAs;
				return o(yo, function (t, e) {
					var n = Oi(e);
					i[$t("parse_as_" + n)] = function (e) {
						return r(t, e)
					}, i[$t("get_trusted_" + n)] = function (e) {
						return s(t, e)
					}, i[$t("trust_as_" + n)] = function (e) {
						return a(t, e)
					}
				}), i
			}]
		}

		function En() {
			this.$get = ["$window", "$document", function (t, e) {
				var n, i, r = {},
					o = p((/android (\d+)/.exec(Oi((t.navigator || {}).userAgent)) || [])[1]),
					s = /Boxee/i.test((t.navigator || {}).userAgent),
					a = e[0] || {},
					l = /^(Moz|webkit|ms)(?=[A-Z])/,
					u = a.body && a.body.style,
					c = !1,
					f = !1;
				if (u) {
					for (var h in u)
						if (i = l.exec(h)) {
							n = i[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
							break
						}
					n || (n = "WebkitOpacity" in u && "webkit"), c = !!("transition" in u || n + "Transition" in u), f = !!("animation" in u || n + "Animation" in u), !o || c && f || (c = $(u.webkitTransition), f = $(u.webkitAnimation))
				}
				return {
					history: !(!t.history || !t.history.pushState || o < 4 || s),
					hasEvent: function (t) {
						if ("input" === t && Di <= 11) return !1;
						if (b(r[t])) {
							var e = a.createElement("div");
							r[t] = "on" + t in e
						}
						return r[t]
					},
					csp: Qi(),
					vendorPrefix: n,
					transitions: c,
					animations: f,
					android: o
				}
			}]
		}

		function An() {
			var t;
			this.httpOptions = function (e) {
				return e ? (t = e, this) : t
			}, this.$get = ["$templateCache", "$http", "$q", "$sce", function (e, n, i, r) {
				function o(s, a) {
					function l(t) {
						if (!a) throw bo("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, t.status, t.statusText);
						return i.reject(t)
					}
					o.totalPendingRequests++, $(s) && e.get(s) || (s = r.getTrustedResourceUrl(s));
					var u = n.defaults && n.defaults.transformResponse;
					return Ui(u) ? u = u.filter(function (t) {
						return t !== Se
					}) : u === Se && (u = null), n.get(s, f({
						cache: e,
						transformResponse: u
					}, t))["finally"](function () {
						o.totalPendingRequests--
					}).then(function (t) {
						return e.put(s, t.data), t.data
					}, l)
				}
				return o.totalPendingRequests = 0, o
			}]
		}

		function On() {
			this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
				var i = {};
				return i.findBindings = function (t, e, n) {
					var i = t.getElementsByClassName("ng-binding"),
						r = [];
					return o(i, function (t) {
						var i = Vi.element(t).data("$binding");
						i && o(i, function (i) {
							if (n) {
								var o = new RegExp("(^|\\s)" + Gi(e) + "(\\s|\\||$)");
								o.test(i) && r.push(t);
							} else i.indexOf(e) != -1 && r.push(t)
						})
					}), r
				}, i.findModels = function (t, e, n) {
					for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
						var o = n ? "=" : "*=",
							s = "[" + i[r] + "model" + o + '"' + e + '"]',
							a = t.querySelectorAll(s);
						if (a.length) return a
					}
				}, i.getLocation = function () {
					return n.url()
				}, i.setLocation = function (e) {
					e !== n.url() && (n.url(e), t.$digest())
				}, i.whenStable = function (t) {
					e.notifyWhenNoOutstandingRequests(t)
				}, i
			}]
		}

		function Pn() {
			this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, i, r) {
				function o(o, a, l) {
					C(o) || (l = a, a = o, o = g);
					var u, c = W(arguments, 3),
						f = w(l) && !l,
						h = (f ? i : n).defer(),
						p = h.promise;
					return u = e.defer(function () {
						try {
							h.resolve(o.apply(null, c))
						} catch (e) {
							h.reject(e), r(e)
						} finally {
							delete s[p.$$timeoutId]
						}
						f || t.$apply()
					}, a), p.$$timeoutId = u, s[u] = h, p
				}
				var s = {};
				return o.cancel = function (t) {
					return !!(t && t.$$timeoutId in s) && (s[t.$$timeoutId].reject("canceled"), delete s[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
				}, o
			}]
		}

		function Mn(t) {
			var e = t;
			return Di && (wo.setAttribute("href", e), e = wo.href), wo.setAttribute("href", e), {
				href: wo.href,
				protocol: wo.protocol ? wo.protocol.replace(/:$/, "") : "",
				host: wo.host,
				search: wo.search ? wo.search.replace(/^\?/, "") : "",
				hash: wo.hash ? wo.hash.replace(/^#/, "") : "",
				hostname: wo.hostname,
				port: wo.port,
				pathname: "/" === wo.pathname.charAt(0) ? wo.pathname : "/" + wo.pathname
			}
		}

		function Nn(t) {
			var e = $(t) ? Mn(t) : t;
			return e.protocol === xo.protocol && e.host === xo.host
		}

		function Dn() {
			this.$get = v(t)
		}

		function Rn(t) {
			function e(t) {
				try {
					return decodeURIComponent(t)
				} catch (e) {
					return t
				}
			}
			var n = t[0] || {},
				i = {},
				r = "";
			return function () {
				var t, o, s, a, l, u = n.cookie || "";
				if (u !== r)
					for (r = u, t = r.split("; "), i = {}, s = 0; s < t.length; s++) o = t[s], a = o.indexOf("="), a > 0 && (l = e(o.substring(0, a)), b(i[l]) && (i[l] = e(o.substring(a + 1))));
				return i
			}
		}

		function Ln() {
			this.$get = Rn
		}

		function In(t) {
			function e(i, r) {
				if (x(i)) {
					var s = {};
					return o(i, function (t, n) {
						s[n] = e(n, t)
					}), s
				}
				return t.factory(i + n, r)
			}
			var n = "Filter";
			this.register = e, this.$get = ["$injector", function (t) {
				return function (e) {
					return t.get(e + n)
				}
			}], e("currency", Bn), e("date", ii), e("filter", jn), e("json", ri), e("limitTo", oi), e("lowercase", Eo), e("number", Hn), e("orderBy", si), e("uppercase", Ao)
		}

		function jn() {
			return function (t, e, n) {
				if (!r(t)) {
					if (null == t) return t;
					throw i("filter")("notarray", "Expected array but received: {0}", t)
				}
				var o, s, a = qn(e);
				switch (a) {
					case "function":
						o = e;
						break;
					case "boolean":
					case "null":
					case "number":
					case "string":
						s = !0;
					case "object":
						o = Fn(e, n, s);
						break;
					default:
						return t
				}
				return Array.prototype.filter.call(t, o)
			}
		}

		function Fn(t, e, n) {
			var i, r = x(t) && "$" in t;
			return e === !0 ? e = H : C(e) || (e = function (t, e) {
				return !b(t) && (null === t || null === e ? t === e : !(x(e) || x(t) && !y(t)) && (t = Oi("" + t), e = Oi("" + e), t.indexOf(e) !== -1))
			}), i = function (i) {
				return r && !x(i) ? zn(i, t.$, e, !1) : zn(i, t, e, n)
			}
		}

		function zn(t, e, n, i, r) {
			var o = qn(t),
				s = qn(e);
			if ("string" === s && "!" === e.charAt(0)) return !zn(t, e.substring(1), n, i);
			if (Ui(t)) return t.some(function (t) {
				return zn(t, e, n, i)
			});
			switch (o) {
				case "object":
					var a;
					if (i) {
						for (a in t)
							if ("$" !== a.charAt(0) && zn(t[a], e, n, !0)) return !0;
						return !r && zn(t, e, n, !1)
					}
					if ("object" === s) {
						for (a in e) {
							var l = e[a];
							if (!C(l) && !b(l)) {
								var u = "$" === a,
									c = u ? t : t[a];
								if (!zn(c, l, n, u, u)) return !1
							}
						}
						return !0
					}
					return n(t, e);
				case "function":
					return !1;
				default:
					return n(t, e)
			}
		}

		function qn(t) {
			return null === t ? "null" : typeof t
		}

		function Bn(t) {
			var e = t.NUMBER_FORMATS;
			return function (t, n, i) {
				return b(n) && (n = e.CURRENCY_SYM), b(i) && (i = e.PATTERNS[1].maxFrac), null == t ? t : Un(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, i).replace(/\u00A4/g, n)
			}
		}

		function Hn(t) {
			var e = t.NUMBER_FORMATS;
			return function (t, n) {
				return null == t ? t : Un(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
			}
		}

		function Vn(t) {
			var e, n, i, r, o, s = 0;
			for ((n = t.indexOf($o)) > -1 && (t = t.replace($o, "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), i = 0; t.charAt(i) == To; i++);
			if (i == (o = t.length)) e = [0], n = 1;
			else {
				for (o--; t.charAt(o) == To;) o--;
				for (n -= i, e = [], r = 0; i <= o; i++, r++) e[r] = +t.charAt(i)
			}
			return n > _o && (e = e.splice(0, _o - 1), s = n - 1, n = 1), {
				d: e,
				e: s,
				i: n
			}
		}

		function Wn(t, e, n, i) {
			var r = t.d,
				o = r.length - t.i;
			e = b(e) ? Math.min(Math.max(n, o), i) : +e;
			var s = e + t.i,
				a = r[s];
			if (s > 0) {
				r.splice(Math.max(t.i, s));
				for (var l = s; l < r.length; l++) r[l] = 0
			} else {
				o = Math.max(0, o), t.i = 1, r.length = Math.max(1, s = e + 1), r[0] = 0;
				for (var u = 1; u < s; u++) r[u] = 0
			}
			if (a >= 5)
				if (s - 1 < 0) {
					for (var c = 0; c > s; c--) r.unshift(0), t.i++;
					r.unshift(1), t.i++
				} else r[s - 1]++;
			for (; o < Math.max(0, e); o++) r.push(0);
			var f = r.reduceRight(function (t, e, n, i) {
				return e += t, i[n] = e % 10, Math.floor(e / 10)
			}, 0);
			f && (r.unshift(f), t.i++)
		}

		function Un(t, e, n, i, r) {
			if (!$(t) && !T(t) || isNaN(t)) return "";
			var o, s = !isFinite(t),
				a = !1,
				l = Math.abs(t) + "",
				u = "";
			if (s) u = "∞";
			else {
				o = Vn(l), Wn(o, r, e.minFrac, e.maxFrac);
				var c = o.d,
					f = o.i,
					h = o.e,
					p = [];
				for (a = c.reduce(function (t, e) {
						return t && !e
					}, !0); f < 0;) c.unshift(0), f++;
				f > 0 ? p = c.splice(f) : (p = c, c = [0]);
				var d = [];
				for (c.length > e.lgSize && d.unshift(c.splice(-e.lgSize).join("")); c.length > e.gSize;) d.unshift(c.splice(-e.gSize).join(""));
				c.length && d.unshift(c.join("")), u = d.join(n), p.length && (u += i + p.join("")), h && (u += "e+" + h)
			}
			return t < 0 && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf
		}

		function Xn(t, e, n, i) {
			var r = "";
			for ((t < 0 || i && t <= 0) && (i ? t = -t + 1 : (t = -t, r = "-")), t = "" + t; t.length < e;) t = To + t;
			return n && (t = t.substr(t.length - e)), r + t
		}

		function Yn(t, e, n, i, r) {
			return n = n || 0,
				function (o) {
					var s = o["get" + t]();
					return (n > 0 || s > -n) && (s += n), 0 === s && n == -12 && (s = 12), Xn(s, e, i, r)
				}
		}

		function Gn(t, e, n) {
			return function (i, r) {
				var o = i["get" + t](),
					s = (n ? "STANDALONE" : "") + (e ? "SHORT" : ""),
					a = Pi(s + t);
				return r[a][o]
			}
		}

		function Qn(t, e, n) {
			var i = -1 * n,
				r = i >= 0 ? "+" : "";
			return r += Xn(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) + Xn(Math.abs(i % 60), 2)
		}

		function Kn(t) {
			var e = new Date(t, 0, 1).getDay();
			return new Date(t, 0, (e <= 4 ? 5 : 12) - e)
		}

		function Zn(t) {
			return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
		}

		function Jn(t) {
			return function (e) {
				var n = Kn(e.getFullYear()),
					i = Zn(e),
					r = +i - +n,
					o = 1 + Math.round(r / 6048e5);
				return Xn(o, t)
			}
		}

		function ti(t, e) {
			return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
		}

		function ei(t, e) {
			return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
		}

		function ni(t, e) {
			return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
		}

		function ii(t) {
			function e(t) {
				var e;
				if (e = t.match(n)) {
					var i = new Date(0),
						r = 0,
						o = 0,
						s = e[8] ? i.setUTCFullYear : i.setFullYear,
						a = e[8] ? i.setUTCHours : i.setHours;
					e[9] && (r = p(e[9] + e[10]), o = p(e[9] + e[11])), s.call(i, p(e[1]), p(e[2]) - 1, p(e[3]));
					var l = p(e[4] || 0) - r,
						u = p(e[5] || 0) - o,
						c = p(e[6] || 0),
						f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
					return a.call(i, l, u, c, f), i
				}
				return t
			}
			var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
			return function (n, i, r) {
				var s, a, l = "",
					u = [];
				if (i = i || "mediumDate", i = t.DATETIME_FORMATS[i] || i, $(n) && (n = ko.test(n) ? p(n) : e(n)), T(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime())) return n;
				for (; i;) a = Co.exec(i), a ? (u = V(u, a, 1), i = u.pop()) : (u.push(i), i = null);
				var c = n.getTimezoneOffset();
				return r && (c = Q(r, c), n = Z(n, r, !0)), o(u, function (e) {
					s = So[e], l += s ? s(n, t.DATETIME_FORMATS, c) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				}), l
			}
		}

		function ri() {
			return function (t, e) {
				return b(e) && (e = 2), Y(t, e)
			}
		}

		function oi() {
			return function (t, e, n) {
				return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : p(e), isNaN(e) ? t : (T(t) && (t = t.toString()), Ui(t) || $(t) ? (n = !n || isNaN(n) ? 0 : p(n), n = n < 0 ? Math.max(0, t.length + n) : n, e >= 0 ? t.slice(n, n + e) : 0 === n ? t.slice(e, t.length) : t.slice(Math.max(0, n + e), n)) : t)
			}
		}

		function si(t) {
			function e(e, n) {
				return n = n ? -1 : 1, e.map(function (e) {
					var i = 1,
						r = m;
					if (C(e)) r = e;
					else if ($(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (i = "-" == e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (r = t(e), r.constant))) {
						var o = r();
						r = function (t) {
							return t[o]
						}
					}
					return {
						get: r,
						descending: i * n
					}
				})
			}

			function n(t) {
				switch (typeof t) {
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function o(t, e) {
				return "function" == typeof t.valueOf && (t = t.valueOf(), n(t)) ? t : y(t) && (t = t.toString(), n(t)) ? t : e
			}

			function s(t, e) {
				var n = typeof t;
				return null === t ? (n = "string", t = "null") : "string" === n ? t = t.toLowerCase() : "object" === n && (t = o(t, e)), {
					value: t,
					type: n
				}
			}

			function a(t, e) {
				var n = 0;
				return t.type === e.type ? t.value !== e.value && (n = t.value < e.value ? -1 : 1) : n = t.type < e.type ? -1 : 1, n
			}
			return function (t, n, o) {
				function l(t, e) {
					return {
						value: t,
						predicateValues: c.map(function (n) {
							return s(n.get(t), e)
						})
					}
				}

				function u(t, e) {
					for (var n = 0, i = 0, r = c.length; i < r && !(n = a(t.predicateValues[i], e.predicateValues[i]) * c[i].descending); ++i);
					return n
				}
				if (null == t) return t;
				if (!r(t)) throw i("orderBy")("notarray", "Expected array but received: {0}", t);
				Ui(n) || (n = [n]), 0 === n.length && (n = ["+"]);
				var c = e(n, o);
				c.push({
					get: function () {
						return {}
					},
					descending: o ? -1 : 1
				});
				var f = Array.prototype.map.call(t, l);
				return f.sort(u), t = f.map(function (t) {
					return t.value
				})
			}
		}

		function ai(t) {
			return C(t) && (t = {
				link: t
			}), t.restrict = t.restrict || "AC", v(t)
		}

		function li(t, e) {
			t.$name = e
		}

		function ui(t, e, i, r, s) {
			var a = this,
				l = [];
			a.$error = {}, a.$$success = {}, a.$pending = n, a.$name = s(e.name || e.ngForm || "")(i), a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, a.$$parentForm = Mo, a.$rollbackViewValue = function () {
				o(l, function (t) {
					t.$rollbackViewValue()
				})
			}, a.$commitViewValue = function () {
				o(l, function (t) {
					t.$commitViewValue()
				})
			}, a.$addControl = function (t) {
				dt(t.$name, "input"), l.push(t), t.$name && (a[t.$name] = t), t.$$parentForm = a
			}, a.$$renameControl = function (t, e) {
				var n = t.$name;
				a[n] === t && delete a[n], a[e] = t, t.$name = e
			}, a.$removeControl = function (t) {
				t.$name && a[t.$name] === t && delete a[t.$name], o(a.$pending, function (e, n) {
					a.$setValidity(n, null, t)
				}), o(a.$error, function (e, n) {
					a.$setValidity(n, null, t)
				}), o(a.$$success, function (e, n) {
					a.$setValidity(n, null, t)
				}), z(l, t), t.$$parentForm = Mo
			}, Ti({
				ctrl: this,
				$element: t,
				set: function (t, e, n) {
					var i = t[e];
					if (i) {
						var r = i.indexOf(n);
						r === -1 && i.push(n)
					} else t[e] = [n]
				},
				unset: function (t, e, n) {
					var i = t[e];
					i && (z(i, n), 0 === i.length && delete t[e])
				},
				$animate: r
			}), a.$setDirty = function () {
				r.removeClass(t, ms), r.addClass(t, vs), a.$dirty = !0, a.$pristine = !1, a.$$parentForm.$setDirty()
			}, a.$setPristine = function () {
				r.setClass(t, ms, vs + " " + No), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, o(l, function (t) {
					t.$setPristine()
				})
			}, a.$setUntouched = function () {
				o(l, function (t) {
					t.$setUntouched()
				})
			}, a.$setSubmitted = function () {
				r.addClass(t, No), a.$submitted = !0, a.$$parentForm.$setSubmitted()
			}
		}

		function ci(t) {
			t.$formatters.push(function (e) {
				return t.$isEmpty(e) ? e : e.toString()
			})
		}

		function fi(t, e, n, i, r, o) {
			hi(t, e, n, i, r, o), ci(i)
		}

		function hi(t, e, n, i, r, o) {
			var s = Oi(e[0].type);
			if (!r.android) {
				var a = !1;
				e.on("compositionstart", function () {
					a = !0
				}), e.on("compositionend", function () {
					a = !1, u()
				})
			}
			var l, u = function (t) {
				if (l && (o.defer.cancel(l), l = null), !a) {
					var r = e.val(),
						u = t && t.type;
					"password" === s || n.ngTrim && "false" === n.ngTrim || (r = Yi(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, u)
				}
			};
			if (r.hasEvent("input")) e.on("input", u);
			else {
				var c = function (t, e, n) {
					l || (l = o.defer(function () {
						l = null, e && e.value === n || u(t)
					}))
				};
				e.on("keydown", function (t) {
					var e = t.keyCode;
					91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || c(t, this, this.value)
				}), r.hasEvent("paste") && e.on("paste cut", c)
			}
			e.on("change", u), Xo[s] && i.$$hasNativeValidators && s === n.type && e.on(Uo, function (t) {
				if (!l) {
					var e = this[Ei],
						n = e.badInput,
						i = e.typeMismatch;
					l = o.defer(function () {
						l = null, e.badInput === n && e.typeMismatch === i || u(t)
					})
				}
			}), i.$render = function () {
				var t = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
				e.val() !== t && e.val(t)
			}
		}

		function pi(t, e) {
			if (S(t)) return t;
			if ($(t)) {
				Ho.lastIndex = 0;
				var n = Ho.exec(t);
				if (n) {
					var i = +n[1],
						r = +n[2],
						o = 0,
						s = 0,
						a = 0,
						l = 0,
						u = Kn(i),
						c = 7 * (r - 1);
					return e && (o = e.getHours(), s = e.getMinutes(), a = e.getSeconds(), l = e.getMilliseconds()), new Date(i, 0, u.getDate() + c, o, s, a, l)
				}
			}
			return NaN
		}

		function di(t, e) {
			return function (n, i) {
				var r, s;
				if (S(n)) return n;
				if ($(n)) {
					if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Io.test(n)) return new Date(n);
					if (t.lastIndex = 0, r = t.exec(n)) return r.shift(), s = i ? {
						yyyy: i.getFullYear(),
						MM: i.getMonth() + 1,
						dd: i.getDate(),
						HH: i.getHours(),
						mm: i.getMinutes(),
						ss: i.getSeconds(),
						sss: i.getMilliseconds() / 1e3
					} : {
						yyyy: 1970,
						MM: 1,
						dd: 1,
						HH: 0,
						mm: 0,
						ss: 0,
						sss: 0
					}, o(r, function (t, n) {
						n < e.length && (s[e[n]] = +t)
					}), new Date(s.yyyy, s.MM - 1, s.dd, s.HH, s.mm, s.ss || 0, 1e3 * s.sss || 0)
				}
				return NaN
			}
		}

		function gi(t, e, i, r) {
			return function (o, s, a, l, u, c, f) {
				function h(t) {
					return t && !(t.getTime && t.getTime() !== t.getTime())
				}

				function p(t) {
					return w(t) && !S(t) ? i(t) || n : t
				}
				mi(o, s, a, l), hi(o, s, a, l, u, c);
				var d, g = l && l.$options && l.$options.timezone;
				if (l.$$parserName = t, l.$parsers.push(function (t) {
						if (l.$isEmpty(t)) return null;
						if (e.test(t)) {
							var r = i(t, d);
							return g && (r = Z(r, g)), r
						}
						return n
					}), l.$formatters.push(function (t) {
						if (t && !S(t)) throw $s("datefmt", "Expected `{0}` to be a date", t);
						return h(t) ? (d = t, d && g && (d = Z(d, g, !0)), f("date")(t, r, g)) : (d = null, "")
					}), w(a.min) || a.ngMin) {
					var m;
					l.$validators.min = function (t) {
						return !h(t) || b(m) || i(t) >= m
					}, a.$observe("min", function (t) {
						m = p(t), l.$validate()
					})
				}
				if (w(a.max) || a.ngMax) {
					var v;
					l.$validators.max = function (t) {
						return !h(t) || b(v) || i(t) <= v
					}, a.$observe("max", function (t) {
						v = p(t), l.$validate()
					})
				}
			}
		}

		function mi(t, e, i, r) {
			var o = e[0],
				s = r.$$hasNativeValidators = x(o.validity);
			s && r.$parsers.push(function (t) {
				var i = e.prop(Ei) || {};
				return i.badInput || i.typeMismatch ? n : t
			})
		}

		function vi(t, e, i, r, o, s) {
			if (mi(t, e, i, r), hi(t, e, i, r, o, s), r.$$parserName = "number", r.$parsers.push(function (t) {
					return r.$isEmpty(t) ? null : zo.test(t) ? parseFloat(t) : n
				}), r.$formatters.push(function (t) {
					if (!r.$isEmpty(t)) {
						if (!T(t)) throw $s("numfmt", "Expected `{0}` to be a number", t);
						t = t.toString()
					}
					return t
				}), w(i.min) || i.ngMin) {
				var a;
				r.$validators.min = function (t) {
					return r.$isEmpty(t) || b(a) || t >= a
				}, i.$observe("min", function (t) {
					w(t) && !T(t) && (t = parseFloat(t, 10)), a = T(t) && !isNaN(t) ? t : n, r.$validate()
				})
			}
			if (w(i.max) || i.ngMax) {
				var l;
				r.$validators.max = function (t) {
					return r.$isEmpty(t) || b(l) || t <= l
				}, i.$observe("max", function (t) {
					w(t) && !T(t) && (t = parseFloat(t, 10)), l = T(t) && !isNaN(t) ? t : n, r.$validate()
				})
			}
		}

		function yi(t, e, n, i, r, o) {
			hi(t, e, n, i, r, o), ci(i), i.$$parserName = "url", i.$validators.url = function (t, e) {
				var n = t || e;
				return i.$isEmpty(n) || jo.test(n)
			}
		}

		function bi(t, e, n, i, r, o) {
			hi(t, e, n, i, r, o), ci(i), i.$$parserName = "email", i.$validators.email = function (t, e) {
				var n = t || e;
				return i.$isEmpty(n) || Fo.test(n)
			}
		}

		function wi(t, e, n, i) {
			b(n.name) && e.attr("name", l());
			var r = function (t) {
				e[0].checked && i.$setViewValue(n.value, t && t.type)
			};
			e.on("click", r), i.$render = function () {
				var t = n.value;
				e[0].checked = t == i.$viewValue
			}, n.$observe("value", i.$render)
		}

		function xi(t, e, n, i, r) {
			var o;
			if (w(i)) {
				if (o = t(i), !o.constant) throw $s("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
				return o(e)
			}
			return r
		}

		function _i(t, e, n, i, r, o, s, a) {
			var l = xi(a, t, "ngTrueValue", n.ngTrueValue, !0),
				u = xi(a, t, "ngFalseValue", n.ngFalseValue, !1),
				c = function (t) {
					i.$setViewValue(e[0].checked, t && t.type)
				};
			e.on("click", c), i.$render = function () {
				e[0].checked = i.$viewValue
			}, i.$isEmpty = function (t) {
				return t === !1
			}, i.$formatters.push(function (t) {
				return H(t, l)
			}), i.$parsers.push(function (t) {
				return t ? l : u
			})
		}

		function $i(t, e) {
			return t = "ngClass" + t, ["$animate", function (n) {
				function i(t, e) {
					var n = [];
					t: for (var i = 0; i < t.length; i++) {
						for (var r = t[i], o = 0; o < e.length; o++)
							if (r == e[o]) continue t;
						n.push(r)
					}
					return n
				}

				function r(t) {
					var e = [];
					return Ui(t) ? (o(t, function (t) {
						e = e.concat(r(t))
					}), e) : $(t) ? t.split(" ") : x(t) ? (o(t, function (t, n) {
						t && (e = e.concat(n.split(" ")))
					}), e) : t
				}
				return {
					restrict: "AC",
					link: function (s, a, l) {
						function u(t) {
							var e = f(t, 1);
							l.$addClass(e)
						}

						function c(t) {
							var e = f(t, -1);
							l.$removeClass(e)
						}

						function f(t, e) {
							var n = a.data("$classCounts") || vt(),
								i = [];
							return o(t, function (t) {
								(e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && i.push(t))
							}), a.data("$classCounts", n), i.join(" ")
						}

						function h(t, e) {
							var r = i(e, t),
								o = i(t, e);
							r = f(r, 1), o = f(o, -1), r && r.length && n.addClass(a, r), o && o.length && n.removeClass(a, o)
						}

						function p(t) {
							if (e === !0 || s.$index % 2 === e) {
								var n = r(t || []);
								if (d) {
									if (!H(t, d)) {
										var i = r(d);
										h(i, n)
									}
								} else u(n)
							}
							d = B(t)
						}
						var d;
						s.$watch(l[t], p, !0), l.$observe("class", function (e) {
							p(s.$eval(l[t]))
						}), "ngClass" !== t && s.$watch("$index", function (n, i) {
							var o = 1 & n;
							if (o !== (1 & i)) {
								var a = r(s.$eval(l[t]));
								o === e ? u(a) : c(a)
							}
						})
					}
				}
			}]
		}

		function Ti(t) {
			function e(t, e, l) {
				b(e) ? i("$pending", t, l) : r("$pending", t, l), N(e) ? e ? (f(a.$error, t, l), c(a.$$success, t, l)) : (c(a.$error, t, l), f(a.$$success, t, l)) : (f(a.$error, t, l), f(a.$$success, t, l)), a.$pending ? (o(ws, !0), a.$valid = a.$invalid = n, s("", null)) : (o(ws, !1), a.$valid = Si(a.$error), a.$invalid = !a.$valid, s("", a.$valid));
				var u;
				u = a.$pending && a.$pending[t] ? n : !a.$error[t] && (!!a.$$success[t] || null), s(t, u), a.$$parentForm.$setValidity(t, u, a)
			}

			function i(t, e, n) {
				a[t] || (a[t] = {}), c(a[t], e, n)
			}

			function r(t, e, i) {
				a[t] && f(a[t], e, i), Si(a[t]) && (a[t] = n)
			}

			function o(t, e) {
				e && !u[t] ? (h.addClass(l, t), u[t] = !0) : !e && u[t] && (h.removeClass(l, t), u[t] = !1)
			}

			function s(t, e) {
				t = t ? "-" + ct(t, "-") : "", o(ds + t, e === !0), o(gs + t, e === !1)
			}
			var a = t.ctrl,
				l = t.$element,
				u = {},
				c = t.set,
				f = t.unset,
				h = t.$animate;
			u[gs] = !(u[ds] = l.hasClass(ds)), a.$setValidity = e
		}

		function Si(t) {
			if (t)
				for (var e in t)
					if (t.hasOwnProperty(e)) return !1;
			return !0
		}

		function Ci(t) {
			t[0].hasAttribute("selected") && (t[0].selected = !0)
		}
		var ki = /^\/(.+)\/([a-z]*)$/,
			Ei = "validity",
			Ai = Object.prototype.hasOwnProperty,
			Oi = function (t) {
				return $(t) ? t.toLowerCase() : t
			},
			Pi = function (t) {
				return $(t) ? t.toUpperCase() : t
			},
			Mi = function (t) {
				return $(t) ? t.replace(/[A-Z]/g, function (t) {
					return String.fromCharCode(32 | t.charCodeAt(0))
				}) : t
			},
			Ni = function (t) {
				return $(t) ? t.replace(/[a-z]/g, function (t) {
					return String.fromCharCode(t.charCodeAt(0) & -33)
				}) : t
			};
		"i" !== "I".toLowerCase() && (Oi = Mi, Pi = Ni);
		var Di, Ri, Li, Ii, ji = [].slice,
			Fi = [].splice,
			zi = [].push,
			qi = Object.prototype.toString,
			Bi = Object.getPrototypeOf,
			Hi = i("ng"),
			Vi = t.angular || (t.angular = {}),
			Wi = 0;
		Di = e.documentMode, g.$inject = [], m.$inject = [];
		var Ui = Array.isArray,
			Xi = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
			Yi = function (t) {
				return $(t) ? t.trim() : t
			},
			Gi = function (t) {
				return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			},
			Qi = function () {
				function t() {
					try {
						return new Function(""), !1
					} catch (t) {
						return !0
					}
				}
				if (!w(Qi.rules)) {
					var n = e.querySelector("[ng-csp]") || e.querySelector("[data-ng-csp]");
					if (n) {
						var i = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
						Qi.rules = {
							noUnsafeEval: !i || i.indexOf("no-unsafe-eval") !== -1,
							noInlineStyle: !i || i.indexOf("no-inline-style") !== -1
						}
					} else Qi.rules = {
						noUnsafeEval: t(),
						noInlineStyle: !1
					}
				}
				return Qi.rules
			},
			Ki = function () {
				if (w(Ki.name_)) return Ki.name_;
				var t, n, i, r, o = Ji.length;
				for (n = 0; n < o; ++n)
					if (i = Ji[n], t = e.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
						r = t.getAttribute(i + "jq");
						break
					}
				return Ki.name_ = r
			},
			Zi = /:/g,
			Ji = ["ng-", "data-ng-", "ng:", "x-ng-"],
			tr = /[A-Z]/g,
			er = !1,
			nr = 1,
			ir = 2,
			rr = 3,
			or = 8,
			sr = 9,
			ar = 11,
			lr = {
				full: "1.5.2",
				major: 1,
				minor: 5,
				dot: 2,
				codeName: "differential-recovery"
			};
		Pt.expando = "ng339";
		var ur = Pt.cache = {},
			cr = 1,
			fr = function (t, e, n) {
				t.addEventListener(e, n, !1)
			},
			hr = function (t, e, n) {
				t.removeEventListener(e, n, !1)
			};
		Pt._data = function (t) {
			return this.cache[t[this.expando]] || {}
		};
		var pr = /([\:\-\_]+(.))/g,
			dr = /^moz([A-Z])/,
			gr = {
				mouseleave: "mouseout",
				mouseenter: "mouseover"
			},
			mr = i("jqLite"),
			vr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			yr = /<|&#?\w+;/,
			br = /<([\w:-]+)/,
			wr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			xr = {
				option: [1, '<select multiple="multiple">', "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		xr.optgroup = xr.option, xr.tbody = xr.tfoot = xr.colgroup = xr.caption = xr.thead, xr.th = xr.td;
		var _r = Node.prototype.contains || function (t) {
				return !!(16 & this.compareDocumentPosition(t))
			},
			$r = Pt.prototype = {
				ready: function (n) {
					function i() {
						r || (r = !0, n())
					}
					var r = !1;
					"complete" === e.readyState ? setTimeout(i) : (this.on("DOMContentLoaded", i), Pt(t).on("load", i))
				},
				toString: function () {
					var t = [];
					return o(this, function (e) {
						t.push("" + e)
					}), "[" + t.join(", ") + "]"
				},
				eq: function (t) {
					return Ri(t >= 0 ? this[t] : this[this.length + t])
				},
				length: 0,
				push: zi,
				sort: [].sort,
				splice: [].splice
			},
			Tr = {};
		o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
			Tr[Oi(t)] = t
		});
		var Sr = {};
		o("input,select,option,textarea,button,form,details".split(","), function (t) {
			Sr[t] = !0
		});
		var Cr = {
			ngMinlength: "minlength",
			ngMaxlength: "maxlength",
			ngMin: "min",
			ngMax: "max",
			ngPattern: "pattern"
		};
		o({
			data: It,
			removeData: Rt,
			hasData: Ct,
			cleanData: kt
		}, function (t, e) {
			Pt[e] = t
		}), o({
			data: It,
			inheritedData: Ht,
			scope: function (t) {
				return Ri.data(t, "$scope") || Ht(t.parentNode || t, ["$isolateScope", "$scope"])
			},
			isolateScope: function (t) {
				return Ri.data(t, "$isolateScope") || Ri.data(t, "$isolateScopeNoTemplate")
			},
			controller: Bt,
			injector: function (t) {
				return Ht(t, "$injector")
			},
			removeAttr: function (t, e) {
				t.removeAttribute(e)
			},
			hasClass: jt,
			css: function (t, e, n) {
				return e = $t(e), w(n) ? void(t.style[e] = n) : t.style[e]
			},
			attr: function (t, e, i) {
				var r = t.nodeType;
				if (r !== rr && r !== ir && r !== or) {
					var o = Oi(e);
					if (Tr[o]) {
						if (!w(i)) return t[e] || (t.attributes.getNamedItem(e) || g).specified ? o : n;
						i ? (t[e] = !0, t.setAttribute(e, o)) : (t[e] = !1, t.removeAttribute(o))
					} else if (w(i)) t.setAttribute(e, i);
					else if (t.getAttribute) {
						var s = t.getAttribute(e, 2);
						return null === s ? n : s
					}
				}
			},
			prop: function (t, e, n) {
				return w(n) ? void(t[e] = n) : t[e]
			},
			text: function () {
				function t(t, e) {
					if (b(e)) {
						var n = t.nodeType;
						return n === nr || n === rr ? t.textContent : ""
					}
					t.textContent = e
				}
				return t.$dv = "", t
			}(),
			val: function (t, e) {
				if (b(e)) {
					if (t.multiple && "select" === F(t)) {
						var n = [];
						return o(t.options, function (t) {
							t.selected && n.push(t.value || t.text)
						}), 0 === n.length ? null : n
					}
					return t.value
				}
				t.value = e
			},
			html: function (t, e) {
				return b(e) ? t.innerHTML : (Nt(t, !0), void(t.innerHTML = e))
			},
			empty: Vt
		}, function (t, e) {
			Pt.prototype[e] = function (e, n) {
				var i, r, o = this.length;
				if (t !== Vt && b(2 == t.length && t !== jt && t !== Bt ? e : n)) {
					if (x(e)) {
						for (i = 0; i < o; i++)
							if (t === It) t(this[i], e);
							else
								for (r in e) t(this[i], r, e[r]);
						return this
					}
					for (var s = t.$dv, a = b(s) ? Math.min(o, 1) : o, l = 0; l < a; l++) {
						var u = t(this[l], e, n);
						s = s ? s + u : u
					}
					return s
				}
				for (i = 0; i < o; i++) t(this[i], e, n);
				return this
			}
		}), o({
			removeData: Rt,
			on: function (t, e, i, r) {
				if (w(r)) throw mr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
				if (St(t)) {
					var o = Lt(t, !0),
						s = o.events,
						a = o.handle;
					a || (a = o.handle = Gt(t, s));
					for (var l = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = l.length, c = function (e, n, r) {
							var o = s[e];
							o || (o = s[e] = [], o.specialHandlerWrapper = n, "$destroy" === e || r || fr(t, e, a)), o.push(i)
						}; u--;) e = l[u], gr[e] ? (c(gr[e], Kt), c(e, n, !0)) : c(e)
				}
			},
			off: Dt,
			one: function (t, e, n) {
				t = Ri(t), t.on(e, function i() {
					t.off(e, n), t.off(e, i)
				}), t.on(e, n)
			},
			replaceWith: function (t, e) {
				var n, i = t.parentNode;
				Nt(t), o(new Pt(e), function (e) {
					n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
				})
			},
			children: function (t) {
				var e = [];
				return o(t.childNodes, function (t) {
					t.nodeType === nr && e.push(t)
				}), e
			},
			contents: function (t) {
				return t.contentDocument || t.childNodes || []
			},
			append: function (t, e) {
				var n = t.nodeType;
				if (n === nr || n === ar) {
					e = new Pt(e);
					for (var i = 0, r = e.length; i < r; i++) {
						var o = e[i];
						t.appendChild(o)
					}
				}
			},
			prepend: function (t, e) {
				if (t.nodeType === nr) {
					var n = t.firstChild;
					o(new Pt(e), function (e) {
						t.insertBefore(e, n)
					})
				}
			},
			wrap: function (t, e) {
				Ot(t, Ri(e).eq(0).clone()[0])
			},
			remove: Wt,
			detach: function (t) {
				Wt(t, !0)
			},
			after: function (t, e) {
				var n = t,
					i = t.parentNode;
				e = new Pt(e);
				for (var r = 0, o = e.length; r < o; r++) {
					var s = e[r];
					i.insertBefore(s, n.nextSibling), n = s
				}
			},
			addClass: zt,
			removeClass: Ft,
			toggleClass: function (t, e, n) {
				e && o(e.split(" "), function (e) {
					var i = n;
					b(i) && (i = !jt(t, e)), (i ? zt : Ft)(t, e)
				})
			},
			parent: function (t) {
				var e = t.parentNode;
				return e && e.nodeType !== ar ? e : null
			},
			next: function (t) {
				return t.nextElementSibling
			},
			find: function (t, e) {
				return t.getElementsByTagName ? t.getElementsByTagName(e) : []
			},
			clone: Mt,
			triggerHandler: function (t, e, n) {
				var i, r, s, a = e.type || e,
					l = Lt(t),
					u = l && l.events,
					c = u && u[a];
				c && (i = {
					preventDefault: function () {
						this.defaultPrevented = !0
					},
					isDefaultPrevented: function () {
						return this.defaultPrevented === !0
					},
					stopImmediatePropagation: function () {
						this.immediatePropagationStopped = !0
					},
					isImmediatePropagationStopped: function () {
						return this.immediatePropagationStopped === !0
					},
					stopPropagation: g,
					type: a,
					target: t
				}, e.type && (i = f(i, e)), r = B(c), s = n ? [i].concat(n) : [i], o(r, function (e) {
					i.isImmediatePropagationStopped() || e.apply(t, s)
				}))
			}
		}, function (t, e) {
			Pt.prototype[e] = function (e, n, i) {
				for (var r, o = 0, s = this.length; o < s; o++) b(r) ? (r = t(this[o], e, n, i), w(r) && (r = Ri(r))) : qt(r, t(this[o], e, n, i));
				return w(r) ? r : this
			}, Pt.prototype.bind = Pt.prototype.on, Pt.prototype.unbind = Pt.prototype.off
		}), te.prototype = {
			put: function (t, e) {
				this[Jt(t, this.nextUid)] = e
			},
			get: function (t) {
				return this[Jt(t, this.nextUid)]
			},
			remove: function (t) {
				var e = this[t = Jt(t, this.nextUid)];
				return delete this[t], e
			}
		};
		var kr = [function () {
				this.$get = [function () {
					return te
				}]
			}],
			Er = /^([^\(]+?)=>/,
			Ar = /^[^\(]*\(\s*([^\)]*)\)/m,
			Or = /,/,
			Pr = /^\s*(_?)(\S+?)\1\s*$/,
			Mr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
			Nr = i("$injector");
		re.$$annotate = ie;
		var Dr = i("$animate"),
			Rr = 1,
			Lr = "ng-animate",
			Ir = function () {
				this.$get = g
			},
			jr = function () {
				var t = new te,
					e = [];
				this.$get = ["$$AnimateRunner", "$rootScope", function (n, i) {
					function r(t, e, n) {
						var i = !1;
						return e && (e = $(e) ? e.split(" ") : Ui(e) ? e : [], o(e, function (e) {
							e && (i = !0, t[e] = n)
						})), i
					}

					function s() {
						o(e, function (e) {
							var n = t.get(e);
							if (n) {
								var i = le(e.attr("class")),
									r = "",
									s = "";
								o(n, function (t, e) {
									var n = !!i[e];
									t !== n && (t ? r += (r.length ? " " : "") + e : s += (s.length ? " " : "") + e)
								}), o(e, function (t) {
									r && zt(t, r), s && Ft(t, s)
								}), t.remove(e)
							}
						}), e.length = 0
					}

					function a(n, o, a) {
						var l = t.get(n) || {},
							u = r(l, o, !0),
							c = r(l, a, !1);
						(u || c) && (t.put(n, l), e.push(n), 1 === e.length && i.$$postDigest(s))
					}
					return {
						enabled: g,
						on: g,
						off: g,
						pin: g,
						push: function (t, e, i, r) {
							r && r(), i = i || {}, i.from && t.css(i.from), i.to && t.css(i.to), (i.addClass || i.removeClass) && a(t, i.addClass, i.removeClass);
							var o = new n;
							return o.complete(), o
						}
					}
				}]
			},
			Fr = ["$provide", function (t) {
				var e = this;
				this.$$registeredAnimations = Object.create(null), this.register = function (n, i) {
					if (n && "." !== n.charAt(0)) throw Dr("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
					var r = n + "-animation";
					e.$$registeredAnimations[n.substr(1)] = r, t.factory(r, i)
				}, this.classNameFilter = function (t) {
					if (1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null, this.$$classNameFilter)) {
						var e = new RegExp("(\\s+|\\/)" + Lr + "(\\s+|\\/)");
						if (e.test(this.$$classNameFilter.toString())) throw Dr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Lr)
					}
					return this.$$classNameFilter
				}, this.$get = ["$$animateQueue", function (t) {
					function e(t, e, n) {
						if (n) {
							var i = ae(n);
							!i || i.parentNode || i.previousElementSibling || (n = null)
						}
						n ? n.after(t) : e.prepend(t)
					}
					return {
						on: t.on,
						off: t.off,
						pin: t.pin,
						enabled: t.enabled,
						cancel: function (t) {
							t.end && t.end()
						},
						enter: function (n, i, r, o) {
							return i = i && Ri(i), r = r && Ri(r), i = i || r.parent(), e(n, i, r), t.push(n, "enter", ue(o))
						},
						move: function (n, i, r, o) {
							return i = i && Ri(i), r = r && Ri(r), i = i || r.parent(), e(n, i, r), t.push(n, "move", ue(o))
						},
						leave: function (e, n) {
							return t.push(e, "leave", ue(n), function () {
								e.remove()
							})
						},
						addClass: function (e, n, i) {
							return i = ue(i), i.addClass = se(i.addclass, n), t.push(e, "addClass", i)
						},
						removeClass: function (e, n, i) {
							return i = ue(i), i.removeClass = se(i.removeClass, n), t.push(e, "removeClass", i)
						},
						setClass: function (e, n, i, r) {
							return r = ue(r), r.addClass = se(r.addClass, n), r.removeClass = se(r.removeClass, i), t.push(e, "setClass", r)
						},
						animate: function (e, n, i, r, o) {
							return o = ue(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, i) : i, r = r || "ng-inline-animate", o.tempClasses = se(o.tempClasses, r), t.push(e, "animate", o)
						}
					}
				}]
			}],
			zr = function () {
				this.$get = ["$$rAF", function (t) {
					function e(e) {
						n.push(e), n.length > 1 || t(function () {
							for (var t = 0; t < n.length; t++) n[t]();
							n = []
						})
					}
					var n = [];
					return function () {
						var t = !1;
						return e(function () {
								t = !0
							}),
							function (n) {
								t ? n() : e(n)
							}
					}
				}]
			},
			qr = function () {
				this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (t, e, n, i, r) {
					function s(t) {
						this.setHost(t);
						var e = n(),
							o = function (t) {
								r(t, 0, !1)
							};
						this._doneCallbacks = [], this._tick = function (t) {
							var n = i[0];
							n && n.hidden ? o(t) : e(t)
						}, this._state = 0
					}
					var a = 0,
						l = 1,
						u = 2;
					return s.chain = function (t, e) {
						function n() {
							return i === t.length ? void e(!0) : void t[i](function (t) {
								return t === !1 ? void e(!1) : (i++, void n())
							})
						}
						var i = 0;
						n()
					}, s.all = function (t, e) {
						function n(n) {
							r = r && n, ++i === t.length && e(r)
						}
						var i = 0,
							r = !0;
						o(t, function (t) {
							t.done(n)
						})
					}, s.prototype = {
						setHost: function (t) {
							this.host = t || {}
						},
						done: function (t) {
							this._state === u ? t() : this._doneCallbacks.push(t)
						},
						progress: g,
						getPromise: function () {
							if (!this.promise) {
								var e = this;
								this.promise = t(function (t, n) {
									e.done(function (e) {
										e === !1 ? n() : t()
									})
								})
							}
							return this.promise
						},
						then: function (t, e) {
							return this.getPromise().then(t, e)
						},
						"catch": function (t) {
							return this.getPromise()["catch"](t)
						},
						"finally": function (t) {
							return this.getPromise()["finally"](t)
						},
						pause: function () {
							this.host.pause && this.host.pause()
						},
						resume: function () {
							this.host.resume && this.host.resume()
						},
						end: function () {
							this.host.end && this.host.end(), this._resolve(!0)
						},
						cancel: function () {
							this.host.cancel && this.host.cancel(), this._resolve(!1)
						},
						complete: function (t) {
							var e = this;
							e._state === a && (e._state = l, e._tick(function () {
								e._resolve(t)
							}))
						},
						_resolve: function (t) {
							this._state !== u && (o(this._doneCallbacks, function (e) {
								e(t)
							}), this._doneCallbacks.length = 0, this._state = u)
						}
					}, s
				}]
			},
			Br = function () {
				this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (t, e, n) {
					return function (e, i) {
						function r() {
							return t(function () {
								o(), a || l.complete(), a = !0
							}), l
						}

						function o() {
							s.addClass && (e.addClass(s.addClass), s.addClass = null), s.removeClass && (e.removeClass(s.removeClass), s.removeClass = null), s.to && (e.css(s.to), s.to = null)
						}
						var s = i || {};
						s.$$prepared || (s = q(s)), s.cleanupStyles && (s.from = s.to = null), s.from && (e.css(s.from), s.from = null);
						var a, l = new n;
						return {
							start: r,
							end: r
						}
					}
				}]
			},
			Hr = i("$compile");
		de.$inject = ["$provide", "$$sanitizeUriProvider"];
		var Vr = /^((?:x|data)[\:\-_])/i,
			Wr = i("$controller"),
			Ur = /^(\S+)(\s+as\s+([\w$]+))?$/,
			Xr = function () {
				this.$get = ["$document", function (t) {
					return function (e) {
						return e ? !e.nodeType && e instanceof Ri && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
					}
				}]
			},
			Yr = "application/json",
			Gr = {
				"Content-Type": Yr + ";charset=utf-8"
			},
			Qr = /^\[|^\{(?!\{)/,
			Kr = {
				"[": /]$/,
				"{": /}$/
			},
			Zr = /^\)\]\}',?\n/,
			Jr = i("$http"),
			to = function (t) {
				return function () {
					throw Jr("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", t)
				}
			},
			eo = Vi.$interpolateMinErr = i("$interpolate");
		eo.throwNoconcat = function (t) {
			throw eo("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", t)
		}, eo.interr = function (t, e) {
			return eo("interr", "Can't interpolate: {0}\n{1}", t, e.toString())
		};
		var no = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
			io = {
				http: 80,
				https: 443,
				ftp: 21
			},
			ro = i("$location"),
			oo = {
				$$html5: !1,
				$$replace: !1,
				absUrl: Ye("$$absUrl"),
				url: function (t) {
					if (b(t)) return this.$$url;
					var e = no.exec(t);
					return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
				},
				protocol: Ye("$$protocol"),
				host: Ye("$$host"),
				port: Ye("$$port"),
				path: Ge("$$path", function (t) {
					return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
				}),
				search: function (t, e) {
					switch (arguments.length) {
						case 0:
							return this.$$search;
						case 1:
							if ($(t) || T(t)) t = t.toString(), this.$$search = et(t);
							else {
								if (!x(t)) throw ro("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
								t = q(t, {}), o(t, function (e, n) {
									null == e && delete t[n]
								}), this.$$search = t
							}
							break;
						default:
							b(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
					}
					return this.$$compose(), this
				},
				hash: Ge("$$hash", function (t) {
					return null !== t ? t.toString() : ""
				}),
				replace: function () {
					return this.$$replace = !0, this
				}
			};
		o([Xe, Ue, We], function (t) {
			t.prototype = Object.create(oo), t.prototype.state = function (e) {
				if (!arguments.length) return this.$$state;
				if (t !== We || !this.$$html5) throw ro("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
				return this.$$state = b(e) ? null : e, this
			}
		});
		var so = i("$parse"),
			ao = Function.prototype.call,
			lo = Function.prototype.apply,
			uo = Function.prototype.bind,
			co = vt();
		o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
			co[t] = !0
		});
		var fo = {
				n: "\n",
				f: "\f",
				r: "\r",
				t: "\t",
				v: "\x0B",
				"'": "'",
				'"': '"'
			},
			ho = function (t) {
				this.options = t
			};
		ho.prototype = {
			constructor: ho,
			lex: function (t) {
				for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
					var e = this.text.charAt(this.index);
					if ('"' === e || "'" === e) this.readString(e);
					else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
					else if (this.isIdent(e)) this.readIdent();
					else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
						index: this.index,
						text: e
					}), this.index++;
					else if (this.isWhitespace(e)) this.index++;
					else {
						var n = e + this.peek(),
							i = n + this.peek(2),
							r = co[e],
							o = co[n],
							s = co[i];
						if (r || o || s) {
							var a = s ? i : o ? n : e;
							this.tokens.push({
								index: this.index,
								text: a,
								operator: !0
							}), this.index += a.length
						} else this.throwError("Unexpected next character ", this.index, this.index + 1)
					}
				}
				return this.tokens;
			},
			is: function (t, e) {
				return e.indexOf(t) !== -1
			},
			peek: function (t) {
				var e = t || 1;
				return this.index + e < this.text.length && this.text.charAt(this.index + e)
			},
			isNumber: function (t) {
				return "0" <= t && t <= "9" && "string" == typeof t
			},
			isWhitespace: function (t) {
				return " " === t || "\r" === t || "\t" === t || "\n" === t || "\x0B" === t || " " === t
			},
			isIdent: function (t) {
				return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
			},
			isExpOperator: function (t) {
				return "-" === t || "+" === t || this.isNumber(t)
			},
			throwError: function (t, e, n) {
				n = n || this.index;
				var i = w(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
				throw so("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, i, this.text)
			},
			readNumber: function () {
				for (var t = "", e = this.index; this.index < this.text.length;) {
					var n = Oi(this.text.charAt(this.index));
					if ("." == n || this.isNumber(n)) t += n;
					else {
						var i = this.peek();
						if ("e" == n && this.isExpOperator(i)) t += n;
						else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == t.charAt(t.length - 1)) t += n;
						else {
							if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != t.charAt(t.length - 1)) break;
							this.throwError("Invalid exponent")
						}
					}
					this.index++
				}
				this.tokens.push({
					index: e,
					text: t,
					constant: !0,
					value: Number(t)
				})
			},
			readIdent: function () {
				for (var t = this.index; this.index < this.text.length;) {
					var e = this.text.charAt(this.index);
					if (!this.isIdent(e) && !this.isNumber(e)) break;
					this.index++
				}
				this.tokens.push({
					index: t,
					text: this.text.slice(t, this.index),
					identifier: !0
				})
			},
			readString: function (t) {
				var e = this.index;
				this.index++;
				for (var n = "", i = t, r = !1; this.index < this.text.length;) {
					var o = this.text.charAt(this.index);
					if (i += o, r) {
						if ("u" === o) {
							var s = this.text.substring(this.index + 1, this.index + 5);
							s.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + s + "]"), this.index += 4, n += String.fromCharCode(parseInt(s, 16))
						} else {
							var a = fo[o];
							n += a || o
						}
						r = !1
					} else if ("\\" === o) r = !0;
					else {
						if (o === t) return this.index++, void this.tokens.push({
							index: e,
							text: i,
							constant: !0,
							value: n
						});
						n += o
					}
					this.index++
				}
				this.throwError("Unterminated quote", e)
			}
		};
		var po = function (t, e) {
			this.lexer = t, this.options = e
		};
		po.Program = "Program", po.ExpressionStatement = "ExpressionStatement", po.AssignmentExpression = "AssignmentExpression", po.ConditionalExpression = "ConditionalExpression", po.LogicalExpression = "LogicalExpression", po.BinaryExpression = "BinaryExpression", po.UnaryExpression = "UnaryExpression", po.CallExpression = "CallExpression", po.MemberExpression = "MemberExpression", po.Identifier = "Identifier", po.Literal = "Literal", po.ArrayExpression = "ArrayExpression", po.Property = "Property", po.ObjectExpression = "ObjectExpression", po.ThisExpression = "ThisExpression", po.LocalsExpression = "LocalsExpression", po.NGValueParameter = "NGValueParameter", po.prototype = {
			ast: function (t) {
				this.text = t, this.tokens = this.lexer.lex(t);
				var e = this.program();
				return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e
			},
			program: function () {
				for (var t = [];;)
					if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
						type: po.Program,
						body: t
					}
			},
			expressionStatement: function () {
				return {
					type: po.ExpressionStatement,
					expression: this.filterChain()
				}
			},
			filterChain: function () {
				for (var t, e = this.expression(); t = this.expect("|");) e = this.filter(e);
				return e
			},
			expression: function () {
				return this.assignment()
			},
			assignment: function () {
				var t = this.ternary();
				return this.expect("=") && (t = {
					type: po.AssignmentExpression,
					left: t,
					right: this.assignment(),
					operator: "="
				}), t
			},
			ternary: function () {
				var t, e, n = this.logicalOR();
				return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
					type: po.ConditionalExpression,
					test: n,
					alternate: t,
					consequent: e
				}) : n
			},
			logicalOR: function () {
				for (var t = this.logicalAND(); this.expect("||");) t = {
					type: po.LogicalExpression,
					operator: "||",
					left: t,
					right: this.logicalAND()
				};
				return t
			},
			logicalAND: function () {
				for (var t = this.equality(); this.expect("&&");) t = {
					type: po.LogicalExpression,
					operator: "&&",
					left: t,
					right: this.equality()
				};
				return t
			},
			equality: function () {
				for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
					type: po.BinaryExpression,
					operator: t.text,
					left: e,
					right: this.relational()
				};
				return e
			},
			relational: function () {
				for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
					type: po.BinaryExpression,
					operator: t.text,
					left: e,
					right: this.additive()
				};
				return e
			},
			additive: function () {
				for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
					type: po.BinaryExpression,
					operator: t.text,
					left: e,
					right: this.multiplicative()
				};
				return e
			},
			multiplicative: function () {
				for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
					type: po.BinaryExpression,
					operator: t.text,
					left: e,
					right: this.unary()
				};
				return e
			},
			unary: function () {
				var t;
				return (t = this.expect("+", "-", "!")) ? {
					type: po.UnaryExpression,
					operator: t.text,
					prefix: !0,
					argument: this.unary()
				} : this.primary()
			},
			primary: function () {
				var t;
				this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = q(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
					type: po.Literal,
					value: this.options.literals[this.consume().text]
				} : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
				for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
					type: po.CallExpression,
					callee: t,
					arguments: this.parseArguments()
				}, this.consume(")")) : "[" === e.text ? (t = {
					type: po.MemberExpression,
					object: t,
					property: this.expression(),
					computed: !0
				}, this.consume("]")) : "." === e.text ? t = {
					type: po.MemberExpression,
					object: t,
					property: this.identifier(),
					computed: !1
				} : this.throwError("IMPOSSIBLE");
				return t
			},
			filter: function (t) {
				for (var e = [t], n = {
						type: po.CallExpression,
						callee: this.identifier(),
						arguments: e,
						filter: !0
					}; this.expect(":");) e.push(this.expression());
				return n
			},
			parseArguments: function () {
				var t = [];
				if (")" !== this.peekToken().text)
					do t.push(this.expression()); while (this.expect(","));
				return t
			},
			identifier: function () {
				var t = this.consume();
				return t.identifier || this.throwError("is not a valid identifier", t), {
					type: po.Identifier,
					name: t.text
				}
			},
			constant: function () {
				return {
					type: po.Literal,
					value: this.consume().value
				}
			},
			arrayDeclaration: function () {
				var t = [];
				if ("]" !== this.peekToken().text)
					do {
						if (this.peek("]")) break;
						t.push(this.expression())
					} while (this.expect(","));
				return this.consume("]"), {
					type: po.ArrayExpression,
					elements: t
				}
			},
			object: function () {
				var t, e = [];
				if ("}" !== this.peekToken().text)
					do {
						if (this.peek("}")) break;
						t = {
							type: po.Property,
							kind: "init"
						}, this.peek().constant ? t.key = this.constant() : this.peek().identifier ? t.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), t.value = this.expression(), e.push(t)
					} while (this.expect(","));
				return this.consume("}"), {
					type: po.ObjectExpression,
					properties: e
				}
			},
			throwError: function (t, e) {
				throw so("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
			},
			consume: function (t) {
				if (0 === this.tokens.length) throw so("ueoe", "Unexpected end of expression: {0}", this.text);
				var e = this.expect(t);
				return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
			},
			peekToken: function () {
				if (0 === this.tokens.length) throw so("ueoe", "Unexpected end of expression: {0}", this.text);
				return this.tokens[0]
			},
			peek: function (t, e, n, i) {
				return this.peekAhead(0, t, e, n, i)
			},
			peekAhead: function (t, e, n, i, r) {
				if (this.tokens.length > t) {
					var o = this.tokens[t],
						s = o.text;
					if (s === e || s === n || s === i || s === r || !e && !n && !i && !r) return o
				}
				return !1
			},
			expect: function (t, e, n, i) {
				var r = this.peek(t, e, n, i);
				return !!r && (this.tokens.shift(), r)
			},
			selfReferential: {
				"this": {
					type: po.ThisExpression
				},
				$locals: {
					type: po.LocalsExpression
				}
			}
		}, pn.prototype = {
			compile: function (t, e) {
				var i = this,
					r = this.astBuilder.ast(t);
				this.state = {
					nextId: 0,
					filters: {},
					expensiveChecks: e,
					fn: {
						vars: [],
						body: [],
						own: {}
					},
					assign: {
						vars: [],
						body: [],
						own: {}
					},
					inputs: []
				}, an(r, i.$filter);
				var s, a = "";
				if (this.stage = "assign", s = cn(r)) {
					this.state.computing = "assign";
					var l = this.nextId();
					this.recurse(s, l), this.return_(l), a = "fn.assign=" + this.generateFunction("assign", "s,v,l")
				}
				var u = ln(r.body);
				i.stage = "inputs", o(u, function (t, e) {
					var n = "fn" + e;
					i.state[n] = {
						vars: [],
						body: [],
						own: {}
					}, i.state.computing = n;
					var r = i.nextId();
					i.recurse(t, r), i.return_(r), i.state.inputs.push(n), t.watchId = e
				}), this.state.computing = "fn", this.stage = "main", this.recurse(r);
				var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + a + this.watchFns() + "return fn;",
					f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", c)(this.$filter, Ze, tn, en, Je, nn, rn, on, t);
				return this.state = this.stage = n, f.literal = fn(r), f.constant = hn(r), f
			},
			USE: "use",
			STRICT: "strict",
			watchFns: function () {
				var t = [],
					e = this.state.inputs,
					n = this;
				return o(e, function (e) {
					t.push("var " + e + "=" + n.generateFunction(e, "s"))
				}), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
			},
			generateFunction: function (t, e) {
				return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
			},
			filterPrefix: function () {
				var t = [],
					e = this;
				return o(this.state.filters, function (n, i) {
					t.push(n + "=$filter(" + e.escape(i) + ")")
				}), t.length ? "var " + t.join(",") + ";" : ""
			},
			varsPrefix: function (t) {
				return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
			},
			body: function (t) {
				return this.state[t].body.join("")
			},
			recurse: function (t, e, i, r, s, a) {
				var l, u, c, f, h = this;
				if (r = r || g, !a && w(t.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, i, r, s, !0));
				switch (t.type) {
					case po.Program:
						o(t.body, function (e, i) {
							h.recurse(e.expression, n, n, function (t) {
								u = t
							}), i !== t.body.length - 1 ? h.current().body.push(u, ";") : h.return_(u)
						});
						break;
					case po.Literal:
						f = this.escape(t.value), this.assign(e, f), r(f);
						break;
					case po.UnaryExpression:
						this.recurse(t.argument, n, n, function (t) {
							u = t
						}), f = t.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(e, f), r(f);
						break;
					case po.BinaryExpression:
						this.recurse(t.left, n, n, function (t) {
							l = t
						}), this.recurse(t.right, n, n, function (t) {
							u = t
						}), f = "+" === t.operator ? this.plus(l, u) : "-" === t.operator ? this.ifDefined(l, 0) + t.operator + this.ifDefined(u, 0) : "(" + l + ")" + t.operator + "(" + u + ")", this.assign(e, f), r(f);
						break;
					case po.LogicalExpression:
						e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), r(e);
						break;
					case po.ConditionalExpression:
						e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), r(e);
						break;
					case po.Identifier:
						e = e || this.nextId(), i && (i.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), i.computed = !1, i.name = t.name), Ze(t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function () {
							h.if_("inputs" === h.stage || "s", function () {
								s && 1 !== s && h.if_(h.not(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), h.assign(e, h.nonComputedMember("s", t.name))
							})
						}, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), (h.state.expensiveChecks || gn(t.name)) && h.addEnsureSafeObject(e), r(e);
						break;
					case po.MemberExpression:
						l = i && (i.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, l, n, function () {
							h.if_(h.notNull(l), function () {
								s && 1 !== s && h.addEnsureSafeAssignContext(l), t.computed ? (u = h.nextId(), h.recurse(t.property, u), h.getStringValue(u), h.addEnsureSafeMemberName(u), s && 1 !== s && h.if_(h.not(h.computedMember(l, u)), h.lazyAssign(h.computedMember(l, u), "{}")), f = h.ensureSafeObject(h.computedMember(l, u)), h.assign(e, f), i && (i.computed = !0, i.name = u)) : (Ze(t.property.name), s && 1 !== s && h.if_(h.not(h.nonComputedMember(l, t.property.name)), h.lazyAssign(h.nonComputedMember(l, t.property.name), "{}")), f = h.nonComputedMember(l, t.property.name), (h.state.expensiveChecks || gn(t.property.name)) && (f = h.ensureSafeObject(f)), h.assign(e, f), i && (i.computed = !1, i.name = t.property.name))
							}, function () {
								h.assign(e, "undefined")
							}), r(e)
						}, !!s);
						break;
					case po.CallExpression:
						e = e || this.nextId(), t.filter ? (u = h.filter(t.callee.name), c = [], o(t.arguments, function (t) {
							var e = h.nextId();
							h.recurse(t, e), c.push(e)
						}), f = u + "(" + c.join(",") + ")", h.assign(e, f), r(e)) : (u = h.nextId(), l = {}, c = [], h.recurse(t.callee, u, l, function () {
							h.if_(h.notNull(u), function () {
								h.addEnsureSafeFunction(u), o(t.arguments, function (t) {
									h.recurse(t, h.nextId(), n, function (t) {
										c.push(h.ensureSafeObject(t))
									})
								}), l.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(l.context), f = h.member(l.context, l.name, l.computed) + "(" + c.join(",") + ")") : f = u + "(" + c.join(",") + ")", f = h.ensureSafeObject(f), h.assign(e, f)
							}, function () {
								h.assign(e, "undefined")
							}), r(e)
						}));
						break;
					case po.AssignmentExpression:
						if (u = this.nextId(), l = {}, !un(t.left)) throw so("lval", "Trying to assign a value to a non l-value");
						this.recurse(t.left, n, l, function () {
							h.if_(h.notNull(l.context), function () {
								h.recurse(t.right, u), h.addEnsureSafeObject(h.member(l.context, l.name, l.computed)), h.addEnsureSafeAssignContext(l.context), f = h.member(l.context, l.name, l.computed) + t.operator + u, h.assign(e, f), r(e || f)
							})
						}, 1);
						break;
					case po.ArrayExpression:
						c = [], o(t.elements, function (t) {
							h.recurse(t, h.nextId(), n, function (t) {
								c.push(t)
							})
						}), f = "[" + c.join(",") + "]", this.assign(e, f), r(f);
						break;
					case po.ObjectExpression:
						c = [], o(t.properties, function (t) {
							h.recurse(t.value, h.nextId(), n, function (e) {
								c.push(h.escape(t.key.type === po.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
							})
						}), f = "{" + c.join(",") + "}", this.assign(e, f), r(f);
						break;
					case po.ThisExpression:
						this.assign(e, "s"), r("s");
						break;
					case po.LocalsExpression:
						this.assign(e, "l"), r("l");
						break;
					case po.NGValueParameter:
						this.assign(e, "v"), r("v")
				}
			},
			getHasOwnProperty: function (t, e) {
				var n = t + "." + e,
					i = this.current().own;
				return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), i[n]
			},
			assign: function (t, e) {
				if (t) return this.current().body.push(t, "=", e, ";"), t
			},
			filter: function (t) {
				return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
			},
			ifDefined: function (t, e) {
				return "ifDefined(" + t + "," + this.escape(e) + ")"
			},
			plus: function (t, e) {
				return "plus(" + t + "," + e + ")"
			},
			return_: function (t) {
				this.current().body.push("return ", t, ";")
			},
			if_: function (t, e, n) {
				if (t === !0) e();
				else {
					var i = this.current().body;
					i.push("if(", t, "){"), e(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
				}
			},
			not: function (t) {
				return "!(" + t + ")"
			},
			notNull: function (t) {
				return t + "!=null"
			},
			nonComputedMember: function (t, e) {
				return t + "." + e
			},
			computedMember: function (t, e) {
				return t + "[" + e + "]"
			},
			member: function (t, e, n) {
				return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
			},
			addEnsureSafeObject: function (t) {
				this.current().body.push(this.ensureSafeObject(t), ";")
			},
			addEnsureSafeMemberName: function (t) {
				this.current().body.push(this.ensureSafeMemberName(t), ";")
			},
			addEnsureSafeFunction: function (t) {
				this.current().body.push(this.ensureSafeFunction(t), ";")
			},
			addEnsureSafeAssignContext: function (t) {
				this.current().body.push(this.ensureSafeAssignContext(t), ";")
			},
			ensureSafeObject: function (t) {
				return "ensureSafeObject(" + t + ",text)"
			},
			ensureSafeMemberName: function (t) {
				return "ensureSafeMemberName(" + t + ",text)"
			},
			ensureSafeFunction: function (t) {
				return "ensureSafeFunction(" + t + ",text)"
			},
			getStringValue: function (t) {
				this.assign(t, "getStringValue(" + t + ")")
			},
			ensureSafeAssignContext: function (t) {
				return "ensureSafeAssignContext(" + t + ",text)"
			},
			lazyRecurse: function (t, e, n, i, r, o) {
				var s = this;
				return function () {
					s.recurse(t, e, n, i, r, o)
				}
			},
			lazyAssign: function (t, e) {
				var n = this;
				return function () {
					n.assign(t, e)
				}
			},
			stringEscapeRegex: /[^ a-zA-Z0-9]/g,
			stringEscapeFn: function (t) {
				return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			},
			escape: function (t) {
				if ($(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
				if (T(t)) return t.toString();
				if (t === !0) return "true";
				if (t === !1) return "false";
				if (null === t) return "null";
				if ("undefined" == typeof t) return "undefined";
				throw so("esc", "IMPOSSIBLE")
			},
			nextId: function (t, e) {
				var n = "v" + this.state.nextId++;
				return t || this.current().vars.push(n + (e ? "=" + e : "")), n
			},
			current: function () {
				return this.state[this.state.computing]
			}
		}, dn.prototype = {
			compile: function (t, e) {
				var n = this,
					i = this.astBuilder.ast(t);
				this.expression = t, this.expensiveChecks = e, an(i, n.$filter);
				var r, s;
				(r = cn(i)) && (s = this.recurse(r));
				var a, l = ln(i.body);
				l && (a = [], o(l, function (t, e) {
					var i = n.recurse(t);
					t.input = i, a.push(i), t.watchId = e
				}));
				var u = [];
				o(i.body, function (t) {
					u.push(n.recurse(t.expression))
				});
				var c = 0 === i.body.length ? g : 1 === i.body.length ? u[0] : function (t, e) {
					var n;
					return o(u, function (i) {
						n = i(t, e)
					}), n
				};
				return s && (c.assign = function (t, e, n) {
					return s(t, n, e)
				}), a && (c.inputs = a), c.literal = fn(i), c.constant = hn(i), c
			},
			recurse: function (t, e, i) {
				var r, s, a, l = this;
				if (t.input) return this.inputs(t.input, t.watchId);
				switch (t.type) {
					case po.Literal:
						return this.value(t.value, e);
					case po.UnaryExpression:
						return s = this.recurse(t.argument), this["unary" + t.operator](s, e);
					case po.BinaryExpression:
						return r = this.recurse(t.left), s = this.recurse(t.right), this["binary" + t.operator](r, s, e);
					case po.LogicalExpression:
						return r = this.recurse(t.left), s = this.recurse(t.right), this["binary" + t.operator](r, s, e);
					case po.ConditionalExpression:
						return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
					case po.Identifier:
						return Ze(t.name, l.expression), l.identifier(t.name, l.expensiveChecks || gn(t.name), e, i, l.expression);
					case po.MemberExpression:
						return r = this.recurse(t.object, !1, !!i), t.computed || (Ze(t.property.name, l.expression), s = t.property.name), t.computed && (s = this.recurse(t.property)), t.computed ? this.computedMember(r, s, e, i, l.expression) : this.nonComputedMember(r, s, l.expensiveChecks, e, i, l.expression);
					case po.CallExpression:
						return a = [], o(t.arguments, function (t) {
							a.push(l.recurse(t))
						}), t.filter && (s = this.$filter(t.callee.name)), t.filter || (s = this.recurse(t.callee, !0)), t.filter ? function (t, i, r, o) {
							for (var l = [], u = 0; u < a.length; ++u) l.push(a[u](t, i, r, o));
							var c = s.apply(n, l, o);
							return e ? {
								context: n,
								name: n,
								value: c
							} : c
						} : function (t, n, i, r) {
							var o, u = s(t, n, i, r);
							if (null != u.value) {
								tn(u.context, l.expression), en(u.value, l.expression);
								for (var c = [], f = 0; f < a.length; ++f) c.push(tn(a[f](t, n, i, r), l.expression));
								o = tn(u.value.apply(u.context, c), l.expression)
							}
							return e ? {
								value: o
							} : o
						};
					case po.AssignmentExpression:
						return r = this.recurse(t.left, !0, 1), s = this.recurse(t.right),
							function (t, n, i, o) {
								var a = r(t, n, i, o),
									u = s(t, n, i, o);
								return tn(a.value, l.expression), nn(a.context), a.context[a.name] = u, e ? {
									value: u
								} : u
							};
					case po.ArrayExpression:
						return a = [], o(t.elements, function (t) {
								a.push(l.recurse(t))
							}),
							function (t, n, i, r) {
								for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](t, n, i, r));
								return e ? {
									value: o
								} : o
							};
					case po.ObjectExpression:
						return a = [], o(t.properties, function (t) {
								a.push({
									key: t.key.type === po.Identifier ? t.key.name : "" + t.key.value,
									value: l.recurse(t.value)
								})
							}),
							function (t, n, i, r) {
								for (var o = {}, s = 0; s < a.length; ++s) o[a[s].key] = a[s].value(t, n, i, r);
								return e ? {
									value: o
								} : o
							};
					case po.ThisExpression:
						return function (t) {
							return e ? {
								value: t
							} : t
						};
					case po.LocalsExpression:
						return function (t, n) {
							return e ? {
								value: n
							} : n
						};
					case po.NGValueParameter:
						return function (t, n, i) {
							return e ? {
								value: i
							} : i
						}
				}
			},
			"unary+": function (t, e) {
				return function (n, i, r, o) {
					var s = t(n, i, r, o);
					return s = w(s) ? +s : 0, e ? {
						value: s
					} : s
				}
			},
			"unary-": function (t, e) {
				return function (n, i, r, o) {
					var s = t(n, i, r, o);
					return s = w(s) ? -s : 0, e ? {
						value: s
					} : s
				}
			},
			"unary!": function (t, e) {
				return function (n, i, r, o) {
					var s = !t(n, i, r, o);
					return e ? {
						value: s
					} : s
				}
			},
			"binary+": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s),
						l = e(i, r, o, s),
						u = on(a, l);
					return n ? {
						value: u
					} : u
				}
			},
			"binary-": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s),
						l = e(i, r, o, s),
						u = (w(a) ? a : 0) - (w(l) ? l : 0);
					return n ? {
						value: u
					} : u
				}
			},
			"binary*": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) * e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary/": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) / e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary%": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) % e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary===": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) === e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary!==": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) !== e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary==": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) == e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary!=": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) != e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary<": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) < e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary>": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) > e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary<=": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) <= e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary>=": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) >= e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary&&": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) && e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"binary||": function (t, e, n) {
				return function (i, r, o, s) {
					var a = t(i, r, o, s) || e(i, r, o, s);
					return n ? {
						value: a
					} : a
				}
			},
			"ternary?:": function (t, e, n, i) {
				return function (r, o, s, a) {
					var l = t(r, o, s, a) ? e(r, o, s, a) : n(r, o, s, a);
					return i ? {
						value: l
					} : l
				}
			},
			value: function (t, e) {
				return function () {
					return e ? {
						context: n,
						name: n,
						value: t
					} : t
				}
			},
			identifier: function (t, e, i, r, o) {
				return function (s, a, l, u) {
					var c = a && t in a ? a : s;
					r && 1 !== r && c && !c[t] && (c[t] = {});
					var f = c ? c[t] : n;
					return e && tn(f, o), i ? {
						context: c,
						name: t,
						value: f
					} : f
				}
			},
			computedMember: function (t, e, n, i, r) {
				return function (o, s, a, l) {
					var u, c, f = t(o, s, a, l);
					return null != f && (u = e(o, s, a, l), u = Je(u), Ze(u, r), i && 1 !== i && (nn(f), f && !f[u] && (f[u] = {})), c = f[u], tn(c, r)), n ? {
						context: f,
						name: u,
						value: c
					} : c
				}
			},
			nonComputedMember: function (t, e, i, r, o, s) {
				return function (a, l, u, c) {
					var f = t(a, l, u, c);
					o && 1 !== o && (nn(f), f && !f[e] && (f[e] = {}));
					var h = null != f ? f[e] : n;
					return (i || gn(e)) && tn(h, s), r ? {
						context: f,
						name: e,
						value: h
					} : h
				}
			},
			inputs: function (t, e) {
				return function (n, i, r, o) {
					return o ? o[e] : t(n, i, r)
				}
			}
		};
		var go = function (t, e, n) {
			this.lexer = t, this.$filter = e, this.options = n, this.ast = new po(t, n), this.astCompiler = n.csp ? new dn(this.ast, e) : new pn(this.ast, e)
		};
		go.prototype = {
			constructor: go,
			parse: function (t) {
				return this.astCompiler.compile(t, this.options.expensiveChecks)
			}
		};
		var mo = Object.prototype.valueOf,
			vo = i("$sce"),
			yo = {
				HTML: "html",
				CSS: "css",
				URL: "url",
				RESOURCE_URL: "resourceUrl",
				JS: "js"
			},
			bo = i("$compile"),
			wo = e.createElement("a"),
			xo = Mn(t.location.href);
		Rn.$inject = ["$document"], In.$inject = ["$provide"];
		var _o = 22,
			$o = ".",
			To = "0";
		Bn.$inject = ["$locale"], Hn.$inject = ["$locale"];
		var So = {
				yyyy: Yn("FullYear", 4, 0, !1, !0),
				yy: Yn("FullYear", 2, 0, !0, !0),
				y: Yn("FullYear", 1, 0, !1, !0),
				MMMM: Gn("Month"),
				MMM: Gn("Month", !0),
				MM: Yn("Month", 2, 1),
				M: Yn("Month", 1, 1),
				LLLL: Gn("Month", !1, !0),
				dd: Yn("Date", 2),
				d: Yn("Date", 1),
				HH: Yn("Hours", 2),
				H: Yn("Hours", 1),
				hh: Yn("Hours", 2, -12),
				h: Yn("Hours", 1, -12),
				mm: Yn("Minutes", 2),
				m: Yn("Minutes", 1),
				ss: Yn("Seconds", 2),
				s: Yn("Seconds", 1),
				sss: Yn("Milliseconds", 3),
				EEEE: Gn("Day"),
				EEE: Gn("Day", !0),
				a: ti,
				Z: Qn,
				ww: Jn(2),
				w: Jn(1),
				G: ei,
				GG: ei,
				GGG: ei,
				GGGG: ni
			},
			Co = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
			ko = /^\-?\d+$/;
		ii.$inject = ["$locale"];
		var Eo = v(Oi),
			Ao = v(Pi);
		si.$inject = ["$parse"];
		var Oo = v({
				restrict: "E",
				compile: function (t, e) {
					if (!e.href && !e.xlinkHref) return function (t, e) {
						if ("a" === e[0].nodeName.toLowerCase()) {
							var n = "[object SVGAnimatedString]" === qi.call(e.prop("href")) ? "xlink:href" : "href";
							e.on("click", function (t) {
								e.attr(n) || t.preventDefault()
							})
						}
					}
				}
			}),
			Po = {};
		o(Tr, function (t, e) {
			function n(t, n, r) {
				t.$watch(r[i], function (t) {
					r.$set(e, !!t)
				})
			}
			if ("multiple" != t) {
				var i = ge("ng-" + e),
					r = n;
				"checked" === t && (r = function (t, e, r) {
					r.ngModel !== r[i] && n(t, e, r)
				}), Po[i] = function () {
					return {
						restrict: "A",
						priority: 100,
						link: r
					}
				}
			}
		}), o(Cr, function (t, e) {
			Po[e] = function () {
				return {
					priority: 100,
					link: function (t, n, i) {
						if ("ngPattern" === e && "/" == i.ngPattern.charAt(0)) {
							var r = i.ngPattern.match(ki);
							if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]))
						}
						t.$watch(i[e], function (t) {
							i.$set(e, t)
						})
					}
				}
			}
		}), o(["src", "srcset", "href"], function (t) {
			var e = ge("ng-" + t);
			Po[e] = function () {
				return {
					priority: 99,
					link: function (n, i, r) {
						var o = t,
							s = t;
						"href" === t && "[object SVGAnimatedString]" === qi.call(i.prop("href")) && (s = "xlinkHref", r.$attr[s] = "xlink:href", o = null), r.$observe(e, function (e) {
							return e ? (r.$set(s, e), void(Di && o && i.prop(o, r[s]))) : void("href" === t && r.$set(s, null))
						})
					}
				}
			}
		});
		var Mo = {
				$addControl: g,
				$$renameControl: li,
				$removeControl: g,
				$setValidity: g,
				$setDirty: g,
				$setPristine: g,
				$setSubmitted: g
			},
			No = "ng-submitted";
		ui.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
		var Do = function (t) {
				return ["$timeout", "$parse", function (e, i) {
					function r(t) {
						return "" === t ? i('this[""]').assign : i(t).assign || g
					}
					var o = {
						name: "form",
						restrict: t ? "EAC" : "E",
						require: ["form", "^^?form"],
						controller: ui,
						compile: function (i, o) {
							i.addClass(ms).addClass(ds);
							var s = o.name ? "name" : !(!t || !o.ngForm) && "ngForm";
							return {
								pre: function (t, i, o, a) {
									var l = a[0];
									if (!("action" in o)) {
										var u = function (e) {
											t.$apply(function () {
												l.$commitViewValue(), l.$setSubmitted()
											}), e.preventDefault()
										};
										fr(i[0], "submit", u), i.on("$destroy", function () {
											e(function () {
												hr(i[0], "submit", u)
											}, 0, !1)
										})
									}
									var c = a[1] || l.$$parentForm;
									c.$addControl(l);
									var h = s ? r(l.$name) : g;
									s && (h(t, l), o.$observe(s, function (e) {
										l.$name !== e && (h(t, n), l.$$parentForm.$$renameControl(l, e), (h = r(l.$name))(t, l))
									})), i.on("$destroy", function () {
										l.$$parentForm.$removeControl(l), h(t, n), f(l, Mo)
									})
								}
							}
						}
					};
					return o
				}]
			},
			Ro = Do(),
			Lo = Do(!0),
			Io = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
			jo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
			Fo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
			zo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
			qo = /^(\d{4,})-(\d{2})-(\d{2})$/,
			Bo = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			Ho = /^(\d{4,})-W(\d\d)$/,
			Vo = /^(\d{4,})-(\d\d)$/,
			Wo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			Uo = "keydown wheel mousedown",
			Xo = vt();
		o("date,datetime-local,month,time,week".split(","), function (t) {
			Xo[t] = !0
		});
		var Yo = {
				text: fi,
				date: gi("date", qo, di(qo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
				"datetime-local": gi("datetimelocal", Bo, di(Bo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
				time: gi("time", Wo, di(Wo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
				week: gi("week", Ho, pi, "yyyy-Www"),
				month: gi("month", Vo, di(Vo, ["yyyy", "MM"]), "yyyy-MM"),
				number: vi,
				url: yi,
				email: bi,
				radio: wi,
				checkbox: _i,
				hidden: g,
				button: g,
				submit: g,
				reset: g,
				file: g
			},
			Go = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, i) {
				return {
					restrict: "E",
					require: ["?ngModel"],
					link: {
						pre: function (r, o, s, a) {
							a[0] && (Yo[Oi(s.type)] || Yo.text)(r, o, s, a[0], e, t, n, i)
						}
					}
				}
			}],
			Qo = /^(true|false|\d+)$/,
			Ko = function () {
				return {
					restrict: "A",
					priority: 100,
					compile: function (t, e) {
						return Qo.test(e.ngValue) ? function (t, e, n) {
							n.$set("value", t.$eval(n.ngValue))
						} : function (t, e, n) {
							t.$watch(n.ngValue, function (t) {
								n.$set("value", t)
							})
						}
					}
				}
			},
			Zo = ["$compile", function (t) {
				return {
					restrict: "AC",
					compile: function (e) {
						return t.$$addBindingClass(e),
							function (e, n, i) {
								t.$$addBindingInfo(n, i.ngBind), n = n[0], e.$watch(i.ngBind, function (t) {
									n.textContent = b(t) ? "" : t
								})
							}
					}
				}
			}],
			Jo = ["$interpolate", "$compile", function (t, e) {
				return {
					compile: function (n) {
						return e.$$addBindingClass(n),
							function (n, i, r) {
								var o = t(i.attr(r.$attr.ngBindTemplate));
								e.$$addBindingInfo(i, o.expressions), i = i[0], r.$observe("ngBindTemplate", function (t) {
									i.textContent = b(t) ? "" : t
								})
							}
					}
				}
			}],
			ts = ["$sce", "$parse", "$compile", function (t, e, n) {
				return {
					restrict: "A",
					compile: function (i, r) {
						var o = e(r.ngBindHtml),
							s = e(r.ngBindHtml, function (t) {
								return (t || "").toString()
							});
						return n.$$addBindingClass(i),
							function (e, i, r) {
								n.$$addBindingInfo(i, r.ngBindHtml), e.$watch(s, function () {
									i.html(t.getTrustedHtml(o(e)) || "")
								})
							}
					}
				}
			}],
			es = v({
				restrict: "A",
				require: "ngModel",
				link: function (t, e, n, i) {
					i.$viewChangeListeners.push(function () {
						t.$eval(n.ngChange)
					})
				}
			}),
			ns = $i("", !0),
			is = $i("Odd", 0),
			rs = $i("Even", 1),
			os = ai({
				compile: function (t, e) {
					e.$set("ngCloak", n), t.removeClass("ng-cloak")
				}
			}),
			ss = [function () {
				return {
					restrict: "A",
					scope: !0,
					controller: "@",
					priority: 500
				}
			}],
			as = {},
			ls = {
				blur: !0,
				focus: !0
			};
		o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
			var e = ge("ng-" + t);
			as[e] = ["$parse", "$rootScope", function (n, i) {
				return {
					restrict: "A",
					compile: function (r, o) {
						var s = n(o[e], null, !0);
						return function (e, n) {
							n.on(t, function (n) {
								var r = function () {
									s(e, {
										$event: n
									})
								};
								ls[t] && i.$$phase ? e.$evalAsync(r) : e.$apply(r)
							})
						}
					}
				}
			}]
		});
		var us = ["$animate", "$compile", function (t, e) {
				return {
					multiElement: !0,
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function (n, i, r, o, s) {
						var a, l, u;
						n.$watch(r.ngIf, function (n) {
							n ? l || s(function (n, o) {
								l = o, n[n.length++] = e.$$createComment("end ngIf", r.ngIf), a = {
									clone: n
								}, t.enter(n, i.parent(), i)
							}) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), a && (u = mt(a.clone), t.leave(u).then(function () {
								u = null
							}), a = null))
						})
					}
				}
			}],
			cs = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: Vi.noop,
					compile: function (i, r) {
						var o = r.ngInclude || r.src,
							s = r.onload || "",
							a = r.autoscroll;
						return function (i, r, l, u, c) {
							var f, h, p, d = 0,
								g = function () {
									h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function () {
										h = null
									}), h = p, p = null)
								};
							i.$watch(o, function (o) {
								var l = function () {
										!w(a) || a && !i.$eval(a) || e()
									},
									h = ++d;
								o ? (t(o, !0).then(function (t) {
									if (!i.$$destroyed && h === d) {
										var e = i.$new();
										u.template = t;
										var a = c(e, function (t) {
											g(), n.enter(t, null, r).then(l)
										});
										f = e, p = a, f.$emit("$includeContentLoaded", o), i.$eval(s)
									}
								}, function () {
									i.$$destroyed || h === d && (g(), i.$emit("$includeContentError", o))
								}), i.$emit("$includeContentRequested", o)) : (g(), u.template = null)
							})
						}
					}
				}
			}],
			fs = ["$compile", function (t) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function (n, i, r, o) {
						return qi.call(i[0]).match(/SVG/) ? (i.empty(), void t(Et(o.template, e).childNodes)(n, function (t) {
							i.append(t)
						}, {
							futureParentElement: i
						})) : (i.html(o.template), void t(i.contents())(n))
					}
				}
			}],
			hs = ai({
				priority: 450,
				compile: function () {
					return {
						pre: function (t, e, n) {
							t.$eval(n.ngInit)
						}
					}
				}
			}),
			ps = function () {
				return {
					restrict: "A",
					priority: 100,
					require: "ngModel",
					link: function (t, e, i, r) {
						var s = e.attr(i.$attr.ngList) || ", ",
							a = "false" !== i.ngTrim,
							l = a ? Yi(s) : s,
							u = function (t) {
								if (!b(t)) {
									var e = [];
									return t && o(t.split(l), function (t) {
										t && e.push(a ? Yi(t) : t)
									}), e
								}
							};
						r.$parsers.push(u), r.$formatters.push(function (t) {
							return Ui(t) ? t.join(s) : n
						}), r.$isEmpty = function (t) {
							return !t || !t.length
						}
					}
				}
			},
			ds = "ng-valid",
			gs = "ng-invalid",
			ms = "ng-pristine",
			vs = "ng-dirty",
			ys = "ng-untouched",
			bs = "ng-touched",
			ws = "ng-pending",
			xs = "ng-empty",
			_s = "ng-not-empty",
			$s = i("ngModel"),
			Ts = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, i, r, s, a, l, u, c, f) {
				this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(i.name || "", !1)(t), this.$$parentForm = Mo;
				var h, p = s(i.ngModel),
					d = p.assign,
					m = p,
					v = d,
					y = null,
					x = this;
				this.$$setOptions = function (t) {
					if (x.$options = t, t && t.getterSetter) {
						var e = s(i.ngModel + "()"),
							n = s(i.ngModel + "($$$p)");
						m = function (t) {
							var n = p(t);
							return C(n) && (n = e(t)), n
						}, v = function (t, e) {
							C(p(t)) ? n(t, {
								$$$p: e
							}) : d(t, e)
						}
					} else if (!p.assign) throw $s("nonassign", "Expression '{0}' is non-assignable. Element: {1}", i.ngModel, J(r))
				}, this.$render = g, this.$isEmpty = function (t) {
					return b(t) || "" === t || null === t || t !== t
				}, this.$$updateEmptyClasses = function (t) {
					x.$isEmpty(t) ? (a.removeClass(r, _s), a.addClass(r, xs)) : (a.removeClass(r, xs), a.addClass(r, _s))
				};
				var _ = 0;
				Ti({
					ctrl: this,
					$element: r,
					set: function (t, e) {
						t[e] = !0
					},
					unset: function (t, e) {
						delete t[e]
					},
					$animate: a
				}), this.$setPristine = function () {
					x.$dirty = !1, x.$pristine = !0, a.removeClass(r, vs), a.addClass(r, ms)
				}, this.$setDirty = function () {
					x.$dirty = !0, x.$pristine = !1, a.removeClass(r, ms), a.addClass(r, vs), x.$$parentForm.$setDirty()
				}, this.$setUntouched = function () {
					x.$touched = !1, x.$untouched = !0, a.setClass(r, ys, bs)
				}, this.$setTouched = function () {
					x.$touched = !0, x.$untouched = !1, a.setClass(r, bs, ys)
				}, this.$rollbackViewValue = function () {
					l.cancel(y), x.$viewValue = x.$$lastCommittedViewValue, x.$render()
				}, this.$validate = function () {
					if (!T(x.$modelValue) || !isNaN(x.$modelValue)) {
						var t = x.$$lastCommittedViewValue,
							e = x.$$rawModelValue,
							i = x.$valid,
							r = x.$modelValue,
							o = x.$options && x.$options.allowInvalid;
						x.$$runValidators(e, t, function (t) {
							o || i === t || (x.$modelValue = t ? e : n, x.$modelValue !== r && x.$$writeModelToScope())
						})
					}
				}, this.$$runValidators = function (t, e, i) {
					function r() {
						var t = x.$$parserName || "parse";
						return b(h) ? (l(t, null), !0) : (h || (o(x.$validators, function (t, e) {
							l(e, null)
						}), o(x.$asyncValidators, function (t, e) {
							l(e, null)
						})), l(t, h), h)
					}

					function s() {
						var n = !0;
						return o(x.$validators, function (i, r) {
							var o = i(t, e);
							n = n && o, l(r, o)
						}), !!n || (o(x.$asyncValidators, function (t, e) {
							l(e, null)
						}), !1)
					}

					function a() {
						var i = [],
							r = !0;
						o(x.$asyncValidators, function (o, s) {
							var a = o(t, e);
							if (!D(a)) throw $s("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
							l(s, n), i.push(a.then(function () {
								l(s, !0)
							}, function () {
								r = !1, l(s, !1)
							}))
						}), i.length ? c.all(i).then(function () {
							u(r)
						}, g) : u(!0)
					}

					function l(t, e) {
						f === _ && x.$setValidity(t, e)
					}

					function u(t) {
						f === _ && i(t)
					}
					_++;
					var f = _;
					return r() && s() ? void a() : void u(!1)
				}, this.$commitViewValue = function () {
					var t = x.$viewValue;
					l.cancel(y), (x.$$lastCommittedViewValue !== t || "" === t && x.$$hasNativeValidators) && (x.$$updateEmptyClasses(t), x.$$lastCommittedViewValue = t, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
				}, this.$$parseAndValidate = function () {
					function e() {
						x.$modelValue !== s && x.$$writeModelToScope()
					}
					var i = x.$$lastCommittedViewValue,
						r = i;
					if (h = !b(r) || n)
						for (var o = 0; o < x.$parsers.length; o++)
							if (r = x.$parsers[o](r), b(r)) {
								h = !1;
								break
							}
					T(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = m(t));
					var s = x.$modelValue,
						a = x.$options && x.$options.allowInvalid;
					x.$$rawModelValue = r, a && (x.$modelValue = r, e()), x.$$runValidators(r, x.$$lastCommittedViewValue, function (t) {
						a || (x.$modelValue = t ? r : n, e())
					})
				}, this.$$writeModelToScope = function () {
					v(t, x.$modelValue), o(x.$viewChangeListeners, function (t) {
						try {
							t()
						} catch (n) {
							e(n)
						}
					})
				}, this.$setViewValue = function (t, e) {
					x.$viewValue = t, x.$options && !x.$options.updateOnDefault || x.$$debounceViewValueCommit(e)
				}, this.$$debounceViewValueCommit = function (e) {
					var n, i = 0,
						r = x.$options;
					r && w(r.debounce) && (n = r.debounce, T(n) ? i = n : T(n[e]) ? i = n[e] : T(n["default"]) && (i = n["default"])), l.cancel(y), i ? y = l(function () {
						x.$commitViewValue()
					}, i) : u.$$phase ? x.$commitViewValue() : t.$apply(function () {
						x.$commitViewValue()
					})
				}, t.$watch(function () {
					var e = m(t);
					if (e !== x.$modelValue && (x.$modelValue === x.$modelValue || e === e)) {
						x.$modelValue = x.$$rawModelValue = e, h = n;
						for (var i = x.$formatters, r = i.length, o = e; r--;) o = i[r](o);
						x.$viewValue !== o && (x.$$updateEmptyClasses(o), x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(e, o, g))
					}
					return e
				})
			}],
			Ss = ["$rootScope", function (t) {
				return {
					restrict: "A",
					require: ["ngModel", "^?form", "^?ngModelOptions"],
					controller: Ts,
					priority: 1,
					compile: function (e) {
						return e.addClass(ms).addClass(ys).addClass(ds), {
							pre: function (t, e, n, i) {
								var r = i[0],
									o = i[1] || r.$$parentForm;
								r.$$setOptions(i[2] && i[2].$options), o.$addControl(r), n.$observe("name", function (t) {
									r.$name !== t && r.$$parentForm.$$renameControl(r, t)
								}), t.$on("$destroy", function () {
									r.$$parentForm.$removeControl(r)
								})
							},
							post: function (e, n, i, r) {
								var o = r[0];
								o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
									o.$$debounceViewValueCommit(t && t.type)
								}), n.on("blur", function () {
									o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
								})
							}
						}
					}
				}
			}],
			Cs = /(\s+|^)default(\s+|$)/,
			ks = function () {
				return {
					restrict: "A",
					controller: ["$scope", "$attrs", function (t, e) {
						var n = this;
						this.$options = q(t.$eval(e.ngModelOptions)), w(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Yi(this.$options.updateOn.replace(Cs, function () {
							return n.$options.updateOnDefault = !0, " "
						}))) : this.$options.updateOnDefault = !0
					}]
				}
			},
			Es = ai({
				terminal: !0,
				priority: 1e3
			}),
			As = i("ngOptions"),
			Os = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
			Ps = ["$compile", "$parse", function (t, n) {
				function i(t, e, i) {
					function o(t, e, n, i, r) {
						this.selectValue = t, this.viewValue = e, this.label = n, this.group = i, this.disabled = r
					}

					function s(t) {
						var e;
						if (!u && r(t)) e = t;
						else {
							e = [];
							for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n)
						}
						return e
					}
					var a = t.match(Os);
					if (!a) throw As("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", t, J(e));
					var l = a[5] || a[7],
						u = a[6],
						c = / as /.test(a[0]) && a[1],
						f = a[9],
						h = n(a[2] ? a[1] : l),
						p = c && n(c),
						d = p || h,
						g = f && n(f),
						m = f ? function (t, e) {
							return g(i, e)
						} : function (t) {
							return Jt(t)
						},
						v = function (t, e) {
							return m(t, $(t, e))
						},
						y = n(a[2] || a[1]),
						b = n(a[3] || ""),
						w = n(a[4] || ""),
						x = n(a[8]),
						_ = {},
						$ = u ? function (t, e) {
							return _[u] = e, _[l] = t, _
						} : function (t) {
							return _[l] = t, _
						};
					return {
						trackBy: f,
						getTrackByValue: v,
						getWatchables: n(x, function (t) {
							var e = [];
							t = t || [];
							for (var n = s(t), r = n.length, o = 0; o < r; o++) {
								var l = t === n ? o : n[o],
									u = t[l],
									c = $(u, l),
									f = m(u, c);
								if (e.push(f), a[2] || a[1]) {
									var h = y(i, c);
									e.push(h)
								}
								if (a[4]) {
									var p = w(i, c);
									e.push(p)
								}
							}
							return e
						}),
						getOptions: function () {
							for (var t = [], e = {}, n = x(i) || [], r = s(n), a = r.length, l = 0; l < a; l++) {
								var u = n === r ? l : r[l],
									c = n[u],
									h = $(c, u),
									p = d(i, h),
									g = m(p, h),
									_ = y(i, h),
									T = b(i, h),
									S = w(i, h),
									C = new o(g, p, _, T, S);
								t.push(C), e[g] = C
							}
							return {
								items: t,
								selectValueMap: e,
								getOptionFromViewValue: function (t) {
									return e[v(t)]
								},
								getViewValueFromOption: function (t) {
									return f ? Vi.copy(t.viewValue) : t.viewValue
								}
							}
						}
					}
				}

				function s(e, n, r, s) {
					function u(t, e) {
						t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), t.value !== e.value && (e.value = t.selectValue)
					}

					function c(t, e, n, i) {
						var r;
						return e && Oi(e.nodeName) === n ? r = e : (r = i.cloneNode(!1), e ? t.insertBefore(r, e) : t.appendChild(r)), r
					}

					function f(t) {
						for (var e; t;) e = t.nextSibling, Wt(t), t = e
					}

					function h(t) {
						var e = d && d[0],
							n = $ && $[0];
						if (e || n)
							for (; t && (t === e || t === n || t.nodeType === or || "option" === F(t) && "" === t.value);) t = t.nextSibling;
						return t
					}

					function p() {
						var t = T && g.readValue();
						T = S.getOptions();
						var e = {},
							i = n[0].firstChild;
						if (_ && n.prepend(d), i = h(i), T.items.forEach(function (t) {
								var r, o, s;
								w(t.group) ? (r = e[t.group], r || (o = c(n[0], i, "optgroup", l), i = o.nextSibling, o.label = t.group, r = e[t.group] = {
									groupElement: o,
									currentOptionElement: o.firstChild
								}), s = c(r.groupElement, r.currentOptionElement, "option", a), u(t, s), r.currentOptionElement = s.nextSibling) : (s = c(n[0], i, "option", a), u(t, s), i = s.nextSibling)
							}), Object.keys(e).forEach(function (t) {
								f(e[t].currentOptionElement)
							}), f(i), m.$render(), !m.$isEmpty(t)) {
							var r = g.readValue(),
								o = S.trackBy || v;
							(o ? H(t, r) : t === r) || (m.$setViewValue(r), m.$render())
						}
					}
					for (var d, g = s[0], m = s[1], v = r.multiple, y = 0, b = n.children(), x = b.length; y < x; y++)
						if ("" === b[y].value) {
							d = b.eq(y);
							break
						}
					var _ = !!d,
						$ = Ri(a.cloneNode(!1));
					$.val("?");
					var T, S = i(r.ngOptions, n, e),
						C = function () {
							_ || n.prepend(d), n.val(""), d.prop("selected", !0), d.attr("selected", !0)
						},
						k = function () {
							_ || d.remove()
						},
						E = function () {
							n.prepend($), n.val("?"), $.prop("selected", !0), $.attr("selected", !0)
						},
						A = function () {
							$.remove()
						};
					v ? (m.$isEmpty = function (t) {
						return !t || 0 === t.length
					}, g.writeValue = function (t) {
						T.items.forEach(function (t) {
							t.element.selected = !1
						}), t && t.forEach(function (t) {
							var e = T.getOptionFromViewValue(t);
							e && !e.disabled && (e.element.selected = !0)
						})
					}, g.readValue = function () {
						var t = n.val() || [],
							e = [];
						return o(t, function (t) {
							var n = T.selectValueMap[t];
							n && !n.disabled && e.push(T.getViewValueFromOption(n))
						}), e
					}, S.trackBy && e.$watchCollection(function () {
						if (Ui(m.$viewValue)) return m.$viewValue.map(function (t) {
							return S.getTrackByValue(t)
						})
					}, function () {
						m.$render()
					})) : (g.writeValue = function (t) {
						var e = T.getOptionFromViewValue(t);
						e && !e.disabled ? (n[0].value !== e.selectValue && (A(), k(), n[0].value = e.selectValue, e.element.selected = !0), e.element.setAttribute("selected", "selected")) : null === t || _ ? (A(), C()) : (k(), E())
					}, g.readValue = function () {
						var t = T.selectValueMap[n.val()];
						return t && !t.disabled ? (k(), A(), T.getViewValueFromOption(t)) : null
					}, S.trackBy && e.$watch(function () {
						return S.getTrackByValue(m.$viewValue)
					}, function () {
						m.$render()
					})), _ ? (d.remove(), t(d)(e), d.removeClass("ng-scope")) : d = Ri(a.cloneNode(!1)), p(), e.$watchCollection(S.getWatchables, p)
				}
				var a = e.createElement("option"),
					l = e.createElement("optgroup");
				return {
					restrict: "A",
					terminal: !0,
					require: ["select", "ngModel"],
					link: {
						pre: function (t, e, n, i) {
							i[0].registerOption = g
						},
						post: s
					}
				}
			}],
			Ms = ["$locale", "$interpolate", "$log", function (t, e, n) {
				var i = /{}/g,
					r = /^when(Minus)?(.+)$/;
				return {
					link: function (s, a, l) {
						function u(t) {
							a.text(t || "")
						}
						var c, f = l.count,
							h = l.$attr.when && a.attr(l.$attr.when),
							p = l.offset || 0,
							d = s.$eval(h) || {},
							m = {},
							v = e.startSymbol(),
							y = e.endSymbol(),
							w = v + f + "-" + p + y,
							x = Vi.noop;
						o(l, function (t, e) {
							var n = r.exec(e);
							if (n) {
								var i = (n[1] ? "-" : "") + Oi(n[2]);
								d[i] = a.attr(l.$attr[e])
							}
						}), o(d, function (t, n) {
							m[n] = e(t.replace(i, w))
						}), s.$watch(f, function (e) {
							var i = parseFloat(e),
								r = isNaN(i);
							if (r || i in d || (i = t.pluralCat(i - p)), i !== c && !(r && T(c) && isNaN(c))) {
								x();
								var o = m[i];
								b(o) ? (null != e && n.debug("ngPluralize: no rule defined for '" + i + "' in " + h), x = g, u()) : x = s.$watch(o, u), c = i
							}
						})
					}
				}
			}],
			Ns = ["$parse", "$animate", "$compile", function (t, e, s) {
				var a = "$$NG_REMOVED",
					l = i("ngRepeat"),
					u = function (t, e, n, i, r, o, s) {
						t[n] = i, r && (t[r] = o), t.$index = e, t.$first = 0 === e, t.$last = e === s - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
					},
					c = function (t) {
						return t.clone[0]
					},
					f = function (t) {
						return t.clone[t.clone.length - 1]
					};
				return {
					restrict: "A",
					multiElement: !0,
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					compile: function (i, h) {
						var p = h.ngRepeat,
							d = s.$$createComment("end ngRepeat", p),
							g = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						if (!g) throw l("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
						var m = g[1],
							v = g[2],
							y = g[3],
							b = g[4];
						if (g = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g) throw l("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", m);
						var w = g[3] || g[1],
							x = g[2];
						if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))) throw l("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
						var _, $, T, S, C = {
							$id: Jt
						};
						return b ? _ = t(b) : (T = function (t, e) {
								return Jt(e)
							}, S = function (t) {
								return t
							}),
							function (t, i, s, h, g) {
								_ && ($ = function (e, n, i) {
									return x && (C[x] = e), C[w] = n, C.$index = i, _(t, C)
								});
								var m = vt();
								t.$watchCollection(v, function (s) {
									var h, v, b, _, C, k, E, A, O, P, M, N, D = i[0],
										R = vt();
									if (y && (t[y] = s), r(s)) O = s, A = $ || T;
									else {
										A = $ || S, O = [];
										for (var L in s) Ai.call(s, L) && "$" !== L.charAt(0) && O.push(L)
									}
									for (_ = O.length, M = new Array(_), h = 0; h < _; h++)
										if (C = s === O ? h : O[h], k = s[C], E = A(C, k, h), m[E]) P = m[E], delete m[E], R[E] = P, M[h] = P;
										else {
											if (R[E]) throw o(M, function (t) {
												t && t.scope && (m[t.id] = t)
											}), l("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, E, k);
											M[h] = {
												id: E,
												scope: n,
												clone: n
											}, R[E] = !0
										}
									for (var I in m) {
										if (P = m[I], N = mt(P.clone), e.leave(N), N[0].parentNode)
											for (h = 0, v = N.length; h < v; h++) N[h][a] = !0;
										P.scope.$destroy()
									}
									for (h = 0; h < _; h++)
										if (C = s === O ? h : O[h], k = s[C], P = M[h], P.scope) {
											b = D;
											do b = b.nextSibling; while (b && b[a]);
											c(P) != b && e.move(mt(P.clone), null, D), D = f(P), u(P.scope, h, w, k, x, C, _)
										} else g(function (t, n) {
											P.scope = n;
											var i = d.cloneNode(!1);
											t[t.length++] = i, e.enter(t, null, D), D = i, P.clone = t, R[P.id] = P, u(P.scope, h, w, k, x, C, _)
										});
									m = R
								})
							}
					}
				}
			}],
			Ds = "ng-hide",
			Rs = "ng-hide-animate",
			Ls = ["$animate", function (t) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function (e, n, i) {
						e.$watch(i.ngShow, function (e) {
							t[e ? "removeClass" : "addClass"](n, Ds, {
								tempClasses: Rs
							})
						})
					}
				}
			}],
			Is = ["$animate", function (t) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function (e, n, i) {
						e.$watch(i.ngHide, function (e) {
							t[e ? "addClass" : "removeClass"](n, Ds, {
								tempClasses: Rs
							})
						})
					}
				}
			}],
			js = ai(function (t, e, n) {
				t.$watch(n.ngStyle, function (t, n) {
					n && t !== n && o(n, function (t, n) {
						e.css(n, "")
					}), t && e.css(t)
				}, !0)
			}),
			Fs = ["$animate", "$compile", function (t, e) {
				return {
					require: "ngSwitch",
					controller: ["$scope", function () {
						this.cases = {}
					}],
					link: function (n, i, r, s) {
						var a = r.ngSwitch || r.on,
							l = [],
							u = [],
							c = [],
							f = [],
							h = function (t, e) {
								return function () {
									t.splice(e, 1)
								}
							};
						n.$watch(a, function (n) {
							var i, r;
							for (i = 0, r = c.length; i < r; ++i) t.cancel(c[i]);
							for (c.length = 0, i = 0, r = f.length; i < r; ++i) {
								var a = mt(u[i].clone);
								f[i].$destroy();
								var p = c[i] = t.leave(a);
								p.then(h(c, i))
							}
							u.length = 0, f.length = 0, (l = s.cases["!" + n] || s.cases["?"]) && o(l, function (n) {
								n.transclude(function (i, r) {
									f.push(r);
									var o = n.element;
									i[i.length++] = e.$$createComment("end ngSwitchWhen");
									var s = {
										clone: i
									};
									u.push(s), t.enter(i, o.parent(), o)
								})
							})
						})
					}
				}
			}],
			zs = ai({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function (t, e, n, i, r) {
					i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
						transclude: r,
						element: e
					})
				}
			}),
			qs = ai({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function (t, e, n, i, r) {
					i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
						transclude: r,
						element: e
					})
				}
			}),
			Bs = i("ngTransclude"),
			Hs = ai({
				restrict: "EAC",
				link: function (t, e, n, i, r) {
					function o(t) {
						t.length && (e.empty(), e.append(t))
					}
					if (n.ngTransclude === n.$attr.ngTransclude && (n.ngTransclude = ""), !r) throw Bs("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", J(e));
					var s = n.ngTransclude || n.ngTranscludeSlot;
					r(o, null, s)
				}
			}),
			Vs = ["$templateCache", function (t) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function (e, n) {
						if ("text/ng-template" == n.type) {
							var i = n.id,
								r = e[0].text;
							t.put(i, r)
						}
					}
				}
			}],
			Ws = {
				$setViewValue: g,
				$render: g
			},
			Us = ["$element", "$scope", function (t, i) {
				var r = this,
					o = new te;
				r.ngModelCtrl = Ws, r.unknownOption = Ri(e.createElement("option")), r.renderUnknownOption = function (e) {
					var n = "? " + Jt(e) + " ?";
					r.unknownOption.val(n), t.prepend(r.unknownOption), t.val(n)
				}, i.$on("$destroy", function () {
					r.renderUnknownOption = g
				}), r.removeUnknownOption = function () {
					r.unknownOption.parent() && r.unknownOption.remove()
				}, r.readValue = function () {
					return r.removeUnknownOption(), t.val()
				}, r.writeValue = function (e) {
					r.hasOption(e) ? (r.removeUnknownOption(), t.val(e), "" === e && r.emptyOption.prop("selected", !0)) : null == e && r.emptyOption ? (r.removeUnknownOption(), t.val("")) : r.renderUnknownOption(e)
				}, r.addOption = function (t, e) {
					if (e[0].nodeType !== or) {
						dt(t, '"option value"'), "" === t && (r.emptyOption = e);
						var n = o.get(t) || 0;
						o.put(t, n + 1), r.ngModelCtrl.$render(), Ci(e)
					}
				}, r.removeOption = function (t) {
					var e = o.get(t);
					e && (1 === e ? (o.remove(t), "" === t && (r.emptyOption = n)) : o.put(t, e - 1))
				}, r.hasOption = function (t) {
					return !!o.get(t)
				}, r.registerOption = function (t, e, n, i, o) {
					if (i) {
						var s;
						n.$observe("value", function (t) {
							w(s) && r.removeOption(s), s = t, r.addOption(t, e)
						})
					} else o ? t.$watch(o, function (t, i) {
						n.$set("value", t), i !== t && r.removeOption(i), r.addOption(t, e)
					}) : r.addOption(n.value, e);
					e.on("$destroy", function () {
						r.removeOption(n.value), r.ngModelCtrl.$render()
					})
				}
			}],
			Xs = function () {
				function t(t, e, n, i) {
					var r = i[1];
					if (r) {
						var s = i[0];
						if (s.ngModelCtrl = r, e.on("change", function () {
								t.$apply(function () {
									r.$setViewValue(s.readValue())
								})
							}), n.multiple) {
							s.readValue = function () {
								var t = [];
								return o(e.find("option"), function (e) {
									e.selected && t.push(e.value)
								}), t
							}, s.writeValue = function (t) {
								var n = new te(t);
								o(e.find("option"), function (t) {
									t.selected = w(n.get(t.value))
								})
							};
							var a, l = NaN;
							t.$watch(function () {
								l !== r.$viewValue || H(a, r.$viewValue) || (a = B(r.$viewValue), r.$render()), l = r.$viewValue
							}), r.$isEmpty = function (t) {
								return !t || 0 === t.length
							}
						}
					}
				}

				function e(t, e, n, i) {
					var r = i[1];
					if (r) {
						var o = i[0];
						r.$render = function () {
							o.writeValue(r.$viewValue)
						}
					}
				}
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: Us,
					priority: 1,
					link: {
						pre: t,
						post: e
					}
				}
			},
			Ys = ["$interpolate", function (t) {
				return {
					restrict: "E",
					priority: 100,
					compile: function (e, n) {
						if (w(n.value)) var i = t(n.value, !0);
						else {
							var r = t(e.text(), !0);
							r || n.$set("value", e.text())
						}
						return function (t, e, n) {
							var o = "$selectController",
								s = e.parent(),
								a = s.data(o) || s.parent().data(o);
							a && a.registerOption(t, e, n, i, r)
						}
					}
				}
			}],
			Gs = v({
				restrict: "E",
				terminal: !1
			}),
			Qs = function () {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, e, n, i) {
						i && (n.required = !0, i.$validators.required = function (t, e) {
							return !n.required || !i.$isEmpty(e)
						}, n.$observe("required", function () {
							i.$validate()
						}))
					}
				}
			},
			Ks = function () {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, e, r, o) {
						if (o) {
							var s, a = r.ngPattern || r.pattern;
							r.$observe("pattern", function (t) {
								if ($(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw i("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, t, J(e));
								s = t || n, o.$validate()
							}), o.$validators.pattern = function (t, e) {
								return o.$isEmpty(e) || b(s) || s.test(e)
							}
						}
					}
				}
			},
			Zs = function () {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, e, n, i) {
						if (i) {
							var r = -1;
							n.$observe("maxlength", function (t) {
								var e = p(t);
								r = isNaN(e) ? -1 : e, i.$validate()
							}), i.$validators.maxlength = function (t, e) {
								return r < 0 || i.$isEmpty(e) || e.length <= r
							}
						}
					}
				}
			},
			Js = function () {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, e, n, i) {
						if (i) {
							var r = 0;
							n.$observe("minlength", function (t) {
								r = p(t) || 0, i.$validate()
							}), i.$validators.minlength = function (t, e) {
								return i.$isEmpty(e) || e.length >= r
							}
						}
					}
				}
			};
		return t.angular.bootstrap ? void(t.console && console.log("WARNING: Tried to load angular more than once.")) : (ft(), xt(Vi), Vi.module("ngLocale", [], ["$provide", function (t) {
			function e(t) {
				t += "";
				var e = t.indexOf(".");
				return e == -1 ? 0 : t.length - e - 1
			}

			function i(t, i) {
				var r = i;
				n === r && (r = Math.min(e(t), 3));
				var o = Math.pow(10, r),
					s = (t * o | 0) % o;
				return {
					v: r,
					f: s
				}
			}
			var r = {
				ZERO: "zero",
				ONE: "one",
				TWO: "two",
				FEW: "few",
				MANY: "many",
				OTHER: "other"
			};
			t.value("$locale", {
				DATETIME_FORMATS: {
					AMPMS: ["AM", "PM"],
					DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"],
					FIRSTDAYOFWEEK: 6,
					MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					WEEKENDRANGE: [5, 6],
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					medium: "MMM d, y h:mm:ss a",
					mediumDate: "MMM d, y",
					mediumTime: "h:mm:ss a",
					"short": "M/d/yy h:mm a",
					shortDate: "M/d/yy",
					shortTime: "h:mm a"
				},
				NUMBER_FORMATS: {
					CURRENCY_SYM: "$",
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						gSize: 3,
						lgSize: 3,
						maxFrac: 3,
						minFrac: 0,
						minInt: 1,
						negPre: "-",
						negSuf: "",
						posPre: "",
						posSuf: ""
					}, {
						gSize: 3,
						lgSize: 3,
						maxFrac: 2,
						minFrac: 2,
						minInt: 1,
						negPre: "-¤",
						negSuf: "",
						posPre: "¤",
						posSuf: ""
					}]
				},
				id: "en-us",
				localeID: "en_US",
				pluralCat: function (t, e) {
					var n = 0 | t,
						o = i(t, e);
					return 1 == n && 0 == o.v ? r.ONE : r.OTHER
				}
			})
		}]), void Ri(e).ready(function () {
			st(e, at)
		}))
	}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
	function (t) {
		function e() {
			return {
				restrict: "A",
				scope: !1,
				link: function (t, e, n) {
					function i() {
						e.addClass("srbt-focus"), s.on("blur", r), s.on("keyup", o)
					}

					function r() {
						e.removeClass("srbt-focus"), s.off("blur", r), s.off("keyup", o)
					}

					function o() {
						s.hasClass("ng-invalid") ? e.removeClass("srbt-focus") : s.hasClass("ng-invalid") || e.addClass("srbt-focus")
					}
					var s = e.children(":first");
					s.on("focus", i)
				}
			}
		}
		t.module("planner.util", []).directive("brvInputWrapper", [e])
	}(window.angular), "undefined" == typeof window.HTMLImports ? angular.element(document).ready(onDocumentReady) : window.addEventListener("HTMLImportsLoaded", onDocumentReady);
	
	var t = $("#underslider_section-grid"),
		e = t.offset().top,
		i = .7 * $(window).height(),
		n = $(window).scrollTop() + i,
		r = e - n;
	r <= 0 && $(function () {
		$(".perks-grid").each(function (t) {
			$(this).delay(100 * t++).fadeTo(500, 1)
		})
	})
	
	window.SocialShareKit = SocialShareKit,
	function (t, e) {
		"$:nomunge";
		var i, n = t.jQuery || t.Cowboy || (t.Cowboy = {});
		n.throttle = i = function (t, i, r, o) {
			function s() {
				function n() {
					l = +new Date, r.apply(c, h)
				}

				function s() {
					a = e
				}
				var c = this,
					u = +new Date - l,
					h = arguments;
				o && !a && n(), a && clearTimeout(a), o === e && u > t ? n() : i !== !0 && (a = setTimeout(o ? s : n, o === e ? t - u : t))
			}
			var a, l = 0;
			return "boolean" != typeof i && (o = r, r = i, i = e), n.guid && (s.guid = r.guid = r.guid || n.guid++), s
		}, n.debounce = function (t, n, r) {
			return r === e ? i(t, n, !1) : i(t, r, n !== !1)
		}
	}(this),
	function (t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function ($) {
		"use strict";

		function warn(t) {
			if (!console || !console.warn) throw namespace + ": " + t;
			console.warn(namespace + ": " + t)
		}

		function getOffset(t) {
			var e = !!("pageYOffset" in t);
			return {
				width: e ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : t.offsetWidth,
				height: e ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : t.offsetHeight,
				left: t[e ? "pageXOffset" : "scrollLeft"],
				top: t[e ? "pageYOffset" : "scrollTop"]
			}
		}

		function is_numeric(t) {
			return ("number" == typeof t || "string" == typeof t) && "" !== t && !isNaN(t)
		}

		function within(t, e, i) {
			return t < e ? e : t > i ? i : t
		}

		function getInlineOptions($element, dataSelector) {
			var data = $element.data(dataSelector || lownamespace.toLowerCase());
			return data && eval("({" + data + "})") || {}
		}

		function isWindow(t) {
			var e, i;
			return !!(t && "object" == typeof t && "object" == typeof t.window && t.window == t && t.setTimeout && t.alert && (e = t.document) && "object" == typeof e && (i = e.defaultView || e.parentWindow) && "object" == typeof i && i == t)
		}
		var ArrayProto = Array.prototype,
			ObjProto = Object.prototype,
			push = ArrayProto.push,
			splice = ArrayProto.splice,
			hasOwnProperty = ObjProto.hasOwnProperty,
			namespace = "Scrollax",
			lownamespace = namespace.toLowerCase(),
			numberRegExp = /[-+]?\d+(\.\d+)?/g,
			transforms = ["translateX", "translateY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scaleX", "scaleY"],
			$win = $(window),
			$doc = $(document.body),
			transform, gpuAcceleration, position, bind, unbind, Scrollax = function (t, e, i) {
				function n() {
					return q = Y ? $doc.find(H) : f.find(H), z.length = 0, b = !!F.horizontal, q.each(U), o(), F.performanceTrick && (_ = Y ? $doc : f), c("load"), h
				}

				function r() {
					g && (g = clearTimeout(g)), g = setTimeout(function () {
						h.reload()
					})
				}

				function o() {
					var e = z.length;
					if (F.performanceTrick && _ && (clearTimeout(y), x || (_.addClass("scrollax-performance"), x = !0), y = setTimeout(function () {
							_.removeClass("scrollax-performance"), x = !1
						}, 100)), e) {
						w = getOffset(t);
						for (var i = 0; i < e; i++) C = z[i], S = position(C.element, t), k = C.options, T = k.offset || F.offset || 0, A = S[b ? "right" : "bottom"], O = S[b ? "width" : "height"], P = (O - A + T) / O, P < 0 && (A = S[b ? "left" : "top"], O = w[b ? "width" : "height"], P = -1 + (O - A + T) / O), P > 1 || P < -1 || s(C, P, b);
						c("scroll", w)
					}
				}

				function s(t, e) {
					E = t.parallaxElements;
					var i = E.length;
					if (i)
						for (var n = 0; n < i; n++) D = E[n], R = D.element, a(R, D, e)
				}

				function a(t, e, i) {
					M = e.properties || (b ? {
						translateX: "100%"
					} : {
						translateY: "100%"
					}), I = "";
					for (N in M) {
						if (L = M[N], "number" == typeof L) L *= i;
						else if ("string" == typeof L)
							for (j = L.match(numberRegExp), L = L, m = 0, v = j.length; m < v; m++) L = L.replace(j[m], parseFloat(j[m] * i));
						$.inArray(N, transforms) !== -1 ? I += N + "(" + L + ")" : t.style[N] = "opacity" === N ? within(i < 0 ? 1 + L : 1 - L, 0, 1) : L
					}
					I && (t.style[transform] = gpuAcceleration + I)
				}

				function l(t) {
					return "undefined" != typeof t ? is_numeric(t) ? t >= 0 && t < z.length ? t : -1 : q.index(t) : -1
				}

				function c(t, e) {
					if (X[t]) {
						for (v = X[t].length, W.length = 0, m = 0; m < v; m++) push.call(W, X[t][m]);
						for (m = 0; m < v; m++) W[m].call(h, t, e)
					}
				}

				function u(t, e) {
					for (var i = 0, n = X[t].length; i < n; i++)
						if (X[t][i] === e) return i;
					return -1
				}
				var h = this,
					f = t && $(t).eq(0) || $win,
					d = Scrollax.instances,
					p = null;
				if (t = f[0], $.each(d, function (e, i) {
						e && e.frame === t && (p = !0)
					}), !t || p) return void warn(p ? namespace + ": Scrollax has been initialized for this frame!" : namespace + ": Frame is not available!");
				var g, m, v, _, y, x, w, b, T, S, C, k, P, A, O, E, D, R, M, N, L, I, j, F = $.extend({}, Scrollax.defaults, e),
					z = [],
					q = null,
					H = F.parentSelector || "[data-" + lownamespace + "-parent]",
					B = F.elementsSelector || "[data-" + lownamespace + "]",
					X = {},
					W = [],
					Y = isWindow(t);
				h.frame = t, h.options = F, h.parents = z, h.initialized = !1, h.reload = n;
				var U = function (t, e) {
					var i = $(e),
						n = getInlineOptions($(e), "scrollax-parent"),
						r = {};
					r.element = e, r.options = n, r.parallaxElements = [], i.find(B).each(function (t, e) {
						var i = getInlineOptions($(e));
						i.element = e, push.call(r.parallaxElements, i)
					}), push.call(z, r)
				};
				h.scroll = o, h.getIndex = l, h.one = function (t, e) {
					function i() {
						e.apply(h, arguments), h.off(t, i)
					}
					return h.on(t, i), h
				}, h.on = function (t, e) {
					if ("object" == typeof t)
						for (var i in t) hasOwnProperty.call(t, i) && h.on(i, t[i]);
					else if ("function" == typeof e)
						for (var n = t.split(" "), r = 0, o = n.length; r < o; r++) X[n[r]] = X[n[r]] || [], u(n[r], e) === -1 && push.call(X[n[r]], e);
					else if ("array" == typeof e)
						for (var s = 0, a = e.length; s < a; s++) h.on(t, e[s]);
					return h
				}, h.off = function (t, e) {
					if (e instanceof Array)
						for (var i = 0, n = e.length; i < n; i++) h.off(t, e[i]);
					else
						for (var r = t.split(" "), o = 0, s = r.length; o < s; o++)
							if (X[r[o]] = X[r[o]] || [], "undefined" == typeof e) X[r[o]].length = 0;
							else {
								var a = u(r[o], e);
								a !== -1 && splice.call(X[r[o]], a, 1)
							} return h
				}, h.set = function (t, e) {
					return $.isPlainObject(t) ? $.extend(F, t) : hasOwnProperty.call(F, t) && (F[t] = e), n(), h
				}, h.destroy = function () {
					return unbind(window, "resize", r), unbind(t, "scroll", o), $.each(d, function (e, i) {
						e && e.frame === t && splice.call(Scrollax.instances, i, 1)
					}), z.length = 0, h.initialized = !1, c("destroy"), h
				}, h.init = function () {
					if (!h.initialized) {
						var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
						return h.on(i), n(), bind(window, "resize", r), bind(t, "scroll", $.throttle(25, function (t) {
							e(o)
						})), push.call(Scrollax.instances, h), h.initialized = !0, c("initialized"), h
					}
				}
			};
		Scrollax.instances = [],
			function () {
				function t(t, i) {
					for (e in i) t[e] = i[e];
					return t
				}
				var e, i, n, r, o, s, a, l;
				position = function (e, c) {
					return i = e.ownerDocument || e, n = i.documentElement, r = isWindow(c) ? c : i.defaultView || window, c = c && c !== i ? c : n, o = (r.pageYOffset || n.scrollTop) - n.clientTop, s = (r.pageXOffset || n.scrollLeft) - n.clientLeft, a = {
						top: 0,
						left: 0
					}, e && e.getBoundingClientRect ? (a = t({}, e.getBoundingClientRect()), a.width = a.right - a.left, a.height = a.bottom - a.top, c === r ? a : (a.top += o, a.left += s, a.right += s, a.bottom += o, c === n ? a : (l = position(c), a.left -= l.left, a.right -= l.left, a.top -= l.top, a.bottom -= l.top, a))) : null
				}
			}(),
			function () {
				function t() {
					this.returnValue = !1
				}

				function e() {
					this.cancelBubble = !0
				}
				bind = window.addEventListener ? function (t, e, i, n) {
					return t.addEventListener(e, i, n || !1), i
				} : function (i, n, r) {
					var o = n + r;
					return i[o] = i[o] || function () {
						var n = window.event;
						n.target = n.srcElement, n.preventDefault = t, n.stopPropagation = e, r.call(i, n)
					}, i.attachEvent("on" + n, i[o]), r
				}, unbind = window.removeEventListener ? function (t, e, i, n) {
					return t.removeEventListener(e, i, n || !1), i
				} : function (t, e, i) {
					var n = e + i;
					t.detachEvent("on" + e, t[n]);
					try {
						delete t[n]
					} catch (r) {
						t[n] = void 0
					}
					return i
				}
			}(),
			function () {
				function t(t) {
					for (var n = 0, r = e.length; n < r; n++) {
						var o = e[n] ? e[n] + t.charAt(0).toUpperCase() + t.slice(1) : t;
						if (null != i.style[o]) return o
					}
				}
				var e = ["", "webkit", "moz", "ms", "o"],
					i = document.createElement("div");
				transform = t("transform"), gpuAcceleration = t("perspective") ? "translateZ(0) " : ""
			}(), Scrollax.defaults = {
				horizontal: !1,
				offset: 0,
				parentSelector: null,
				elementsSelector: null,
				performanceTrick: !1
			}, window.Scrollax = Scrollax, $.fn.Scrollax = function (t, e) {
				var i, n;
				return $.isPlainObject(t) || ("string" != typeof t && t !== !1 || (i = t === !1 ? "destroy" : t, n = slice.call(arguments, 1)), t = {}), this.each(function (r, o) {
					var s = $.data(o, lownamespace);
					s || i ? s && i && s[i] && s[i].apply(s, n) : s = $.data(o, lownamespace, new Scrollax(o, t, e).init())
				})
			}, $.Scrollax = function (t, e) {
				$win.Scrollax(t, e)
			};
		var css = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };",
			head = document.head || document.getElementsByTagName("head")[0],
			style = document.createElement("style");
		return style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), head.appendChild(style), Scrollax
	}),
	function (t) {
		function e() {
			function e(e) {
				var i = '.dest[page-slide="' + e + '"]',
					n = t(i).offset().top,
					r = n - g;
				m.stop().animate({
					scrollTop: r
				}, 500, "easeInOutQuint")
			}
			t(window).load(i), t.fn.exists = function () {
				return this.length > 0
			}, f = t(".dest"), d = t(window), p = t(".destup"), g = t("#main_navigation").height(), m = t("html,body"), v = t(".slide-link"), y = d.innerHeight(), "undefined" != typeof SocialShareKit && SocialShareKit.init(), "undefined" != typeof browserCheck && "ie9" == browserCheck && (bravePlaceholder(), t(".addpl").on("focus", function () {
				var e = t(this).attr("id");
				t(this).val() == defaultTextHolder[e] && t(this).val("")
			}), t(".addpl").on("blur", function () {
				var e = t(this).attr("id");
				"" == t(this).val() && t(this).val(defaultTextHolder[e])
			})), v.click(function (i) {
				i.preventDefault(), _ = t(this).attr("page-slide"), e(_)
			}), u() || (Scrollax.defaults.offset = 200, new Scrollax(window).init()), n(), o(), s(), a(), h(), i(), d.scroll(t.throttle(60, i)), t(window).resize(t.debounce(250, r))
		}

		function i() {
			return window.requestAnimationFrame(l)
		}

		function n() {
			var e = d.height() - t("#main_navigation").height();
			d.width();
			e < 660 && (e = 660), t(".fullscreen").css({
				height: e
			})
		}

		function r() {
			n(), o(), a(), l(), s()
		}

		function o() {
			var e, i = d.height() - t("#main_navigation").height(),
				n = d.width();
			i < 660 && (i = n <= 660 ? 660 : 960), n <= 1440 ? e = 300 : n <= 1100 ? e = 200 : n <= 660 ? e = 0 : n > 1440 && (e = 400);
			var r = i + e;
			t(".fullscreen-header").css({
				height: r
			})
		}

		function s() {
			var e, i = d.height() - t("#main_navigation").height(),
				n = d.width();
			i < 660 && (i = n <= 660 ? 660 : 960), n <= 1440 ? e = 300 : n <= 1100 ? e = 200 : n <= 660 ? e = 0 : n > 1440 && (e = 400);
			var r = i + e;
			t(".bx-viewport").css({
				height: r
			})
		}

		function a() {
			var e = d.height(),
				i = e / 2,
				n = t(".hero-pager").height() / 2,
				r = i - n;
			e > 660 ? t(".hero-pager").css({
				top: r
			}) : t(".hero-pager").css("top", "247px")
		}

		function l() {
			t(".srbt-scrollview").each(c)
		}

		function c() {
			var e = this.getBoundingClientRect(),
				i = t(this),
				n = i[0].hasAttribute("srbt-scrollview-offset") ? parseInt(i.attr("srbt-scrollview-offset")) : 150;
			e.top + n < y && e.bottom >= -n ? i.hasClass("srbt-inview") || i.addClass("srbt-inview") : i.hasClass("srbt-inview") && (e.top + 100 > y || e.bottom < -100) && i.removeClass("srbt-inview")
		}

		function u() {
			return d.innerWidth() < 990
		}

		function h() {
			u() || t(".video-container").each(function () {
				var e = t(this),
					i = t("video", e);
				i.length && (i[0].load(), i.on("canplay", function () {
					e.addClass("srbt-canplay"), setTimeout(function () {
						i[0].play()
					}, 250)
				}))
			})
		}
		var f, d, p, g, m, v, _, y;
	}(jQuery);
var pageFadeInTime = 500,
	pageFadeOutTime = 500;