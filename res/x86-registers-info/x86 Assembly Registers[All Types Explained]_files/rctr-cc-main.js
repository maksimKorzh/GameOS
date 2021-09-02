! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.download = t()
}(this, function() {
    return function e(t, n, o) {
        var a, r, i = window,
            d = "application/octet-stream",
            c = o || d,
            l = t,
            s = !n && !o && l,
            u = document.createElement("a"),
            f = function(e) {
                return String(e)
            },
            p = i.Blob || i.MozBlob || i.WebKitBlob || f,
            m = n || "download";
        if (p = p.call ? p.bind(i) : Blob, "true" === String(this) && (c = (l = [l, c])[0], l = l[1]), s && s.length < 2048 && (m = s.split("/").pop().split("?")[0], u.href = s, -1 !== u.href.indexOf(s))) {
            var b = new XMLHttpRequest;
            return b.open("GET", s, !0), b.responseType = "blob", b.onload = function(t) {
                e(t.target.response, m, d)
            }, setTimeout(function() {
                b.send()
            }, 0), b
        }
        if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(l)) {
            if (!(l.length > 2096103.424 && p !== f)) return navigator.msSaveBlob ? navigator.msSaveBlob(w(l), m) : h(l);
            l = w(l), c = l.type || d
        }

        function w(e) {
            for (var t = e.split(/[:;,]/), n = t[1], o = ("base64" == t[2] ? atob : decodeURIComponent)(t.pop()), a = o.length, r = 0, i = new Uint8Array(a); r < a; ++r) i[r] = o.charCodeAt(r);
            return new p([i], {
                type: n
            })
        }

        function h(e, t) {
            if ("download" in u) return u.href = e, u.setAttribute("download", m), u.className = "download-js-link", u.innerHTML = "downloading...", u.style.display = "none", document.body.appendChild(u), setTimeout(function() {
                u.click(), document.body.removeChild(u), !0 === t && setTimeout(function() {
                    i.URL.revokeObjectURL(u.href)
                }, 250)
            }, 66), !0;
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return e = e.replace(/^data:([\w\/\-\+]+)/, d), window.open(e) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = e), !0;
            var n = document.createElement("iframe");
            document.body.appendChild(n), t || (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, d)), n.src = e, setTimeout(function() {
                document.body.removeChild(n)
            }, 333)
        }
        if (a = l instanceof p ? l : new p([l], {
                type: c
            }), navigator.msSaveBlob) return navigator.msSaveBlob(a, m);
        if (i.URL) h(i.URL.createObjectURL(a), !0);
        else {
            if ("string" == typeof a || a.constructor === f) try {
                return h("data:" + c + ";base64," + i.btoa(a))
            } catch (e) {
                return h("data:" + c + "," + encodeURIComponent(a))
            }(r = new FileReader).onload = function(e) {
                h(this.result)
            }, r.readAsDataURL(a)
        }
        return !0
    }
});