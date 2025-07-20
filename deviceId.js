 function test() {
      var e,
        t,
        r = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',//userAgent
        n = [],
        i = 0;
      function o(e, t) {
        var r,
          i = 0;
        for (r = 0; r < t.length; r++) i |= n[r] << 8 * r;
        return e ^ i;
      }
      for (e = 0; e < r.length; e++) t = r.charCodeAt(e), n.unshift(255 & t), n.length >= 4 && (i = o(i, n), n = []);
      n.length > 0 && (i = o(i, n))
      return i.toString(16);
    }
function d() {
    for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++;
    return e.toString(16) + t.toString(16);
}
function test2() {
    return (1080*1920).toString(16)
}
var B = function (e) {
      var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
      return e ? t.substring(0, e) : t;
    }
const uuid = d() + '-' + Math.random().toString(16).replace('.', '') + '-' + test() + '-'+test2() + '-' +d() 
var ht = {}
const useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0'
function fn() {
    var e,
    t,
    n = {
        pdf: "application/pdf",
        qt: "video/quicktime",
        realp: "audio/x-pn-realaudio-plugin",
        wma: "application/x-mplayer2",
        fla: "application/x-shockwave-flash",
        java: "application/x-java-vm",
        ag: "application/x-silverlight"
    };
    if (!new RegExp("MSIE").test(useragent)) {
    if (s.mimeTypes && s.mimeTypes.length) for (e in n) Object.prototype.hasOwnProperty.call(n, e) && (t = s.mimeTypes[n[e]], ht[e] = t && t.enabledPlugin ? "1" : "0");
    !new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(useragent) && "unknown" != typeof navigator.javaEnabled && k(s.javaEnabled) && s.javaEnabled() && (ht.java = "1"), !k(l.showModalDialog) && k(s.cookieEnabled) ? ht.cookie = s.cookieEnabled ? "1" : "0" : ht.cookie = cn();
    }
    var r = parseInt(1920, 10),
    o = parseInt(1080, 10);
    ht.res = parseInt(r, 10) + "x" + parseInt(o, 10)
    return ht;
}
function An() {
        var e,
        t = "",
        n = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        r = n.length;
        for (e = 0; e < 6; e++) t += n.charAt(Math.floor(Math.random() * r));
        return t;
    }
    console.log(An())
// console.log(fn())
//149f3eb6-6a0d-d60b-2b15-24f0c4a2d703
//3c8c7441-503d-84e9-bd48-b74d9becc1dd