try {
    var AG_onLoad = function(func) {
        if(document.readyState === "complete" || document.readyState === "interactive") func();
        else if(document.addEventListener) document.addEventListener("DOMContentLoaded", func);
        else if(document.attachEvent) document.attachEvent("DOMContentLoaded", func)
    };
    var AG_removeElementById = function(id) {
        var element = document.getElementById(id);
        if(element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
    var AG_removeElementBySelector = function(selector) {
        if(!document.querySelectorAll) {
            return;
        }
        var nodes = document.querySelectorAll(selector);
        if(nodes) {
            for(var i = 0; i < nodes.length; i++) {
                if(nodes[i] && nodes[i].parentNode) {
                    nodes[i].parentNode.removeChild(nodes[i]);
                }
            }
        }
    };
    var AG_each = function(selector, fn) {
        if(!document.querySelectorAll) return;
        var elements = document.querySelectorAll(selector);
        for(var i = 0; i < elements.length; i++) {
            fn(elements[i]);
        };
    };
    var AG_removeParent = function(el, fn) {
        while(el && el.parentNode) {
            if(fn(el)) {
                el.parentNode.removeChild(el);
                return;
            }
            el = el.parentNode;
        }
    };
    var AG_defineProperty = function() {
        var p = "function" == typeof WeakMap ? WeakMap : function() {
            function c() {
                this.a = Math.random().toString(36).slice(7)
            }
            c.prototype.get = function(e) {
                return e[this.a]
            };
            c.prototype.set = function(e, c) {
                e[this.a] = c;
                return this
            };
            return c
        }();
        return function(c, e, n) {
            function h(a, c) {
                if(!(a instanceof Object)) return a;
                var f = c.indexOf("."),
                    d = c.slice(0, f),
                    g = c.slice(f + 1);
                if(f = k.get(a))
                    for(var l = f.length; 0 < l--;) {
                        var m = f[l];
                        if(m == c) return a;
                        if(m.split(".", 1)[0] == d) return console.warn("AG_defineProperty: unresolvable circular reference detected."), a
                    }
                var b = Object.getOwnPropertyDescriptor(a, d);
                if(!b && Object.isExtensible(a) || b.configurable) 0 === g.length ? Object.defineProperty(a, d, e) : Object.defineProperty(a, d, {
                    get: function() {
                        if(b) {
                            if(b.hasOwnProperty("value")) var a = b.value;
                            else if(b.get) a = b.get.call(this);
                            else return;
                            return h(a, g)
                        }
                    },
                    set: function(a) {
                        return b ? b.hasOwnProperty("value") ? b.writable ? (b.value = a, !0) : !1 : b.set ? b.set.call(this, a) : !1 : (b = {}, b.value = a, b.writable = !0)
                    },
                    enumerable: b ? b.enumerable : !0
                });
                else if(b && b.writable) {
                    if(0 === g.length)
                        if(e.writable) a[d] = e.value;
                        else return console.warn("AG_defineProperty: cannot rewrite property " + d + "."), a;
                    a[d] = h(b.value, g)
                } else return console.warn("AG_defineProperty: cannot redefine property " + d + "."), a;
                f ? f.push(c) : k.set(a, [c]);
                return a
            }
            var k = new p;
            h(n || window, c + ".")
        }
    }();
    var AdFox_getCodeScript = function() {};
    try {
        Object.defineProperty(window, 'noAdsAtAll', {
            get: function() {
                return true;
            }
        });
    } catch(ex) {}
    (function() {
        var c = navigator.language,
            d = "AdGuard has detected that this website is trying to use your browser as a blockchain currency miner. It can create significant CPU load. Allow?";
        c && 0 === c.indexOf("ru") && (d = "AdGuard \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043b\u044f \u0434\u043e\u0431\u044b\u0447\u0438 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u044b. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043d\u0443\u044e \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?");
        var b = null;
        "undefined" === typeof sessionStorage ? b = !1 : "1" === sessionStorage.getItem("__agch") ? b = !0 : "0" === sessionStorage.getItem("__agch") && (b = !1);
        var a;
        window.CoinHive = Object.defineProperty({}, "JobThread", {
            get: function() {
                return a
            },
            set: function(c) {
                a = function() {
                    if(null == b) {
                        b = window.confirm(d);
                        try {
                            b ? sessionStorage.setItem("__agch", "1") : sessionStorage.setItem("__agch", "0")
                        } catch(e) {}
                    }
                    var a = c.apply(this, arguments) || this;
                    b || a.stop();
                    return a
                };
                a.prototype = c.prototype;
                a.prototype.constructor = a
            }
        })
    })();
} catch(ex) {
    console.error('Error executing AG js: ' + ex);
}