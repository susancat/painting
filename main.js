var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-86951-7"]);
_gaq.push(["_trackPageview"]);
(function() {
    
})();

function circles(a) {
    this.init(a)
}
circles.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(e, b) {
        var g, l, k, h, f, c, j, a;
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        l = e - this.prevMouseX;
        k = b - this.prevMouseY;
        h = Math.sqrt(l * l + k * k) * 2;
        f = Math.floor(e / 100) * 100 + 50;
        c = Math.floor(b / 100) * 100 + 50;
        j = Math.floor(Math.random() * 10);
        a = h / j;
        for (g = 0; g < j; g++) {
            this.context.beginPath();
            this.context.arc(f, c, (j - g) * a, 0, Math.PI * 2, true);
            this.context.stroke()
        }
        this.prevMouseX = e;
        this.prevMouseY = b
    },
    strokeEnd: function() {}
};

function chrome(a) {
    this.init(a)
}
chrome.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
            this.context.globalCompositeOperation = "darker"
        }
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 1000) {
                this.context.strokeStyle = "rgba(" + Math.floor(Math.random() * COLOR[0]) + ", " + Math.floor(Math.random() * COLOR[1]) + ", " + Math.floor(Math.random() * COLOR[2]) + ", " + 0.1 * BRUSH_PRESSURE + " )";
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * 0.2), this.points[this.count][1] + (a * 0.2));
                this.context.lineTo(this.points[e][0] - (b * 0.2), this.points[e][1] - (a * 0.2));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function fur(a) {
    this.init(a)
}
fur.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 2000 && Math.random() > g / 2000) {
                this.context.beginPath();
                this.context.moveTo(f + (b * 0.5), c + (a * 0.5));
                this.context.lineTo(f - (b * 0.5), c - (a * 0.5));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function grid(a) {
    this.init(a)
}
grid.prototype = {
    context: null,
    init: function(a) {
        this.context = a;
        if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
            this.context.globalCompositeOperation = "darker"
        }
    },
    destroy: function() {},
    strokeStart: function(b, a) {},
    stroke: function(f, d) {
        var e, a, g, c, b;
        a = Math.round(f / 100) * 100;
        g = Math.round(d / 100) * 100;
        c = (a - f) * 10;
        b = (g - d) * 10;
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.01 * BRUSH_PRESSURE + ")";
        for (e = 0; e < 50; e++) {
            this.context.beginPath();
            this.context.moveTo(a, g);
            this.context.quadraticCurveTo(f + Math.random() * c, d + Math.random() * b, a, g);
            this.context.stroke()
        }
    },
    strokeEnd: function() {}
};

function longfur(a) {
    this.init(a)
}
longfur.prototype = {
    context: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {},
    stroke: function(g, c) {
        var f, e, b, a, h;
        this.points.push([g, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.05 * BRUSH_PRESSURE + ")";
        for (f = 0; f < this.points.length; f++) {
            e = -Math.random();
            b = this.points[f][0] - this.points[this.count][0];
            a = this.points[f][1] - this.points[this.count][1];
            h = b * b + a * a;
            if (h < 4000 && Math.random() > h / 4000) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * e), this.points[this.count][1] + (a * e));
                this.context.lineTo(this.points[f][0] - (b * e) + Math.random() * 2, this.points[f][1] - (a * e) + Math.random() * 2);
                this.context.stroke()
            }
        }
        this.count++
    },
    strokeEnd: function() {}
};

function ribbon(a) {
    this.init(a)
}
ribbon.prototype = {
    context: null,
    mouseX: null,
    mouseY: null,
    painters: null,
    interval: null,
    init: function(b) {
        var c = this;
        this.context = b;
        this.context.globalCompositeOperation = "source-over";
        this.mouseX = SCREEN_WIDTH / 2;
        this.mouseY = SCREEN_HEIGHT / 2;
        this.painters = new Array();
        for (var a = 0; a < 50; a++) {
            this.painters.push({
                dx: SCREEN_WIDTH / 2,
                dy: SCREEN_HEIGHT / 2,
                ax: 0,
                ay: 0,
                div: 0.1,
                ease: Math.random() * 0.2 + 0.6
            })
        }
        this.interval = setInterval(d, 1000 / 60);

        function d() {
            var e;
            this.context.lineWidth = BRUSH_SIZE;
            this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.05 * BRUSH_PRESSURE + ")";
            for (e = 0; e < c.painters.length; e++) {
                c.context.beginPath();
                c.context.moveTo(c.painters[e].dx, c.painters[e].dy);
                c.painters[e].dx -= c.painters[e].ax = (c.painters[e].ax + (c.painters[e].dx - c.mouseX) * c.painters[e].div) * c.painters[e].ease;
                c.painters[e].dy -= c.painters[e].ay = (c.painters[e].ay + (c.painters[e].dy - c.mouseY) * c.painters[e].div) * c.painters[e].ease;
                c.context.lineTo(c.painters[e].dx, c.painters[e].dy);
                c.context.stroke()
            }
        }
    },
    destroy: function() {
        clearInterval(this.interval)
    },
    strokeStart: function(c, a) {
        this.mouseX = c;
        this.mouseY = a;
        for (var b = 0; b < this.painters.length; b++) {
            this.painters[b].dx = c;
            this.painters[b].dy = a
        }
        this.shouldDraw = true
    },
    stroke: function(b, a) {
        this.mouseX = b;
        this.mouseY = a
    },
    strokeEnd: function() {}
};

function shaded(a) {
    this.init(a)
}
shaded.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 1000) {
                this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + ((1 - (g / 1000)) * 0.1 * BRUSH_PRESSURE) + " )";
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0], this.points[this.count][1]);
                this.context.lineTo(this.points[e][0], this.points[e][1]);
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function simple(a) {
    this.init(a)
}
simple.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(b, a) {
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.5 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(b, a);
        this.context.stroke();
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {}
};

function sketchy(a) {
    this.init(a)
}
sketchy.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.05 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 4000 && Math.random() > (g / 2000)) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * 0.3), this.points[this.count][1] + (a * 0.3));
                this.context.lineTo(this.points[e][0] - (b * 0.3), this.points[e][1] - (a * 0.3));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function squares(a) {
    this.init(a)
}
squares.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, d) {
        var b, a, g, e, c;
        b = f - this.prevMouseX;
        a = d - this.prevMouseY;
        g = 1.57079633;
        e = Math.cos(g) * b - Math.sin(g) * a;
        c = Math.sin(g) * b + Math.cos(g) * a;
        this.context.lineWidth = BRUSH_SIZE;
        this.context.fillStyle = "rgba(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ", " + BRUSH_PRESSURE + ")";
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX - e, this.prevMouseY - c);
        this.context.lineTo(this.prevMouseX + e, this.prevMouseY + c);
        this.context.lineTo(f + e, d + c);
        this.context.lineTo(f - e, d - c);
        this.context.lineTo(this.prevMouseX - e, this.prevMouseY - c);
        this.context.fill();
        this.context.stroke();
        this.prevMouseX = f;
        this.prevMouseY = d
    },
    strokeEnd: function() {}
};

function web(a) {
    this.init(a)
}
web.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.5 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 2500 && Math.random() > 0.9) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0], this.points[this.count][1]);
                this.context.lineTo(this.points[e][0], this.points[e][1]);
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function HSB2RGB(j, d, c) {
    var e, g, l, h, k, b, a, m;
    if (c == 0) {
        return [0, 0, 0]
    }
    j *= 0.016666667;
    d *= 0.01;
    c *= 0.01;
    h = Math.floor(j);
    k = j - h;
    b = c * (1 - d);
    a = c * (1 - (d * k));
    m = c * (1 - (d * (1 - k)));
    switch (h) {
        case 0:
            e = c;
            g = m;
            l = b;
            break;
        case 1:
            e = a;
            g = c;
            l = b;
            break;
        case 2:
            e = b;
            g = c;
            l = m;
            break;
        case 3:
            e = b;
            g = a;
            l = c;
            break;
        case 4:
            e = m;
            g = b;
            l = c;
            break;
        case 5:
            e = c;
            g = b;
            l = a;
            break
    }
    return [e, g, l]
}

function RGB2HSB(c, d, k) {
    var j, h, e, g, b, a;
    j = Math.min(Math.min(c, d), k);
    a = Math.max(Math.max(c, d), k);
    if (j == a) {
        return [0, 0, a * 100]
    }
    h = (c == j) ? d - k : ((d == j) ? k - c : c - d);
    e = (c == j) ? 3 : ((d == j) ? 5 : 1);
    g = Math.floor((e - h / (a - j)) * 60) % 360;
    b = Math.floor(((a - j) / a) * 100);
    a = Math.floor(a * 100);
    return [g, b, a]
}

function ColorSelector(a) {
    this.init(a)
}
ColorSelector.prototype = {
    container: null,
    color: [0, 0, 0],
    hueSelector: null,
    luminosity: null,
    luminosityData: null,
    luminositySelector: null,
    luminosityPosition: null,
    dispatcher: null,
    changeEvent: null,
    init: function(k) {
        var m = this,
            b, g, d;
        this.container = document.createElement("div");
        this.container.style.position = "absolute";
        this.container.style.width = "250px";
        this.container.style.height = "250px";
        this.container.style.visibility = "hidden";
        this.container.style.cursor = "pointer";
        this.container.addEventListener("mousedown", l, false);
        this.container.addEventListener("touchstart", f, false);
        g = document.createElement("canvas");
        g.width = k.width;
        g.height = k.height;
        b = g.getContext("2d");
        b.drawImage(k, 0, 0, g.width, g.height);
        d = b.getImageData(0, 0, g.width, g.height).data;
        this.container.appendChild(g);
        this.luminosity = document.createElement("canvas");
        this.luminosity.style.position = "absolute";
        this.luminosity.style.left = "0px";
        this.luminosity.style.top = "0px";
        this.luminosity.width = 250;
        this.luminosity.height = 250;
        this.container.appendChild(this.luminosity);
        this.hueSelector = document.createElement("canvas");
        this.hueSelector.style.position = "absolute";
        this.hueSelector.style.left = ((g.width - 15) / 2) + "px";
        this.hueSelector.style.top = ((g.height - 15) / 2) + "px";
        this.hueSelector.width = 15;
        this.hueSelector.height = 15;
        b = this.hueSelector.getContext("2d");
        b.lineWidth = 2;
        b.strokeStyle = "rgba(0, 0, 0, 0.5)";
        b.beginPath();
        b.arc(8, 8, 6, 0, Math.PI * 2, true);
        b.stroke();
        b.strokeStyle = "rgba(256, 256, 256, 0.8)";
        b.beginPath();
        b.arc(7, 7, 6, 0, Math.PI * 2, true);
        b.stroke();
        this.container.appendChild(this.hueSelector);
        this.luminosityPosition = [(k.width - 15), (k.height - 15) / 2];
        this.luminositySelector = document.createElement("canvas");
        this.luminositySelector.style.position = "absolute";
        this.luminositySelector.style.left = (this.luminosityPosition[0] - 7) + "px";
        this.luminositySelector.style.top = (this.luminosityPosition[1] - 7) + "px";
        this.luminositySelector.width = 15;
        this.luminositySelector.height = 15;
        b = this.luminositySelector.getContext("2d");
        b.drawImage(this.hueSelector, 0, 0, this.luminositySelector.width, this.luminositySelector.height);
        this.container.appendChild(this.luminositySelector);
        this.dispatcher = document.createElement("div");
        this.changeEvent = document.createEvent("Events");
        this.changeEvent.initEvent("change", true, true);

        function l(n) {
            window.addEventListener("mousemove", c, false);
            window.addEventListener("mouseup", h, false);
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function c(n) {
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function h(n) {
            window.removeEventListener("mousemove", c, false);
            window.removeEventListener("mouseup", h, false);
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function f(n) {
            if (n.touches.length == 1) {
                n.preventDefault();
                window.addEventListener("touchmove", a, false);
                window.addEventListener("touchend", j, false);
                e(n.touches[0].pageX - m.container.offsetLeft, n.touches[0].pageY - m.container.offsetTop)
            }
        }

        function a(n) {
            if (n.touches.length == 1) {
                n.preventDefault();
                e(n.touches[0].pageX - m.container.offsetLeft, n.touches[0].pageY - m.container.offsetTop)
            }
        }

        function j(n) {
            if (n.touches.length == 0) {
                n.preventDefault();
                window.removeEventListener("touchmove", a, false);
                window.removeEventListener("touchend", j, false)
            }
        }

        function e(o, t) {
            var q, p, r, n, s;
            q = o - 125;
            p = t - 125;
            r = Math.sqrt(q * q + p * p);
            if (r < 90) {
                m.hueSelector.style.left = (o - 7) + "px";
                m.hueSelector.style.top = (t - 7) + "px";
                m.updateLuminosity([d[(o + (t * 250)) * 4], d[(o + (t * 250)) * 4 + 1], d[(o + (t * 250)) * 4 + 2]])
            } else {
                if (r > 100) {
                    n = q / r;
                    s = p / r;
                    m.luminosityPosition[0] = (n * 110) + 125;
                    m.luminosityPosition[1] = (s * 110) + 125;
                    m.luminositySelector.style.left = (m.luminosityPosition[0] - 7) + "px";
                    m.luminositySelector.style.top = (m.luminosityPosition[1] - 7) + "px"
                }
            }
            o = Math.floor(m.luminosityPosition[0]);
            t = Math.floor(m.luminosityPosition[1]);
            m.color[0] = m.luminosityData[(o + (t * 250)) * 4];
            m.color[1] = m.luminosityData[(o + (t * 250)) * 4 + 1];
            m.color[2] = m.luminosityData[(o + (t * 250)) * 4 + 2];
            m.dispatchEvent(m.changeEvent)
        }
    },
    show: function() {
        this.container.style.visibility = "visible"
    },
    hide: function() {
        this.container.style.visibility = "hidden"
    },
    getColor: function() {
        return this.color
    },
    setColor: function(c) {
        var a, e, f, d, b = Math.PI / 180;
        this.color = c;
        a = RGB2HSB(c[0] / 255, c[1] / 255, c[2] / 255);
        e = a[0] * b;
        f = (a[1] / 100) * 90;
        this.hueSelector.style.left = ((Math.cos(e) * f + 125) - 7) + "px";
        this.hueSelector.style.top = ((Math.sin(e) * f + 125) - 7) + "px";
        d = HSB2RGB(a[0], a[1], 100);
        d[0] *= 255;
        d[1] *= 255;
        d[2] *= 255;
        this.updateLuminosity(d);
        e = (a[2] / 100) * 360 * b;
        this.luminosityPosition[0] = (Math.cos(e) * 110) + 125;
        this.luminosityPosition[1] = (Math.sin(e) * 110) + 125;
        this.luminositySelector.style.left = (this.luminosityPosition[0] - 7) + "px";
        this.luminositySelector.style.top = (this.luminosityPosition[1] - 7) + "px";
        this.dispatchEvent(this.changeEvent)
    },
    updateLuminosity: function(j) {
        var d, f, l, g, p, b, a, o = 100,
            h = 120,
            k, n = 1080 / 2,
            e = 1 / n,
            c = Math.PI / 180,
            m = (n / 360);
        b = this.luminosity.width / 2;
        a = this.luminosity.height / 2;
        d = this.luminosity.getContext("2d");
        d.lineWidth = 3;
        d.clearRect(0, 0, this.luminosity.width, this.luminosity.height);
        for (k = 0; k < n; k++) {
            f = k / m * c;
            l = Math.cos(f);
            g = Math.sin(f);
            p = 255 - (k * e) * 255;
            d.strokeStyle = "rgb(" + Math.floor(j[0] - p) + "," + Math.floor(j[1] - p) + "," + Math.floor(j[2] - p) + ")";
            d.beginPath();
            d.moveTo(l * o + b, g * o + a);
            d.lineTo(l * h + b, g * h + a);
            d.stroke()
        }
        this.luminosityData = d.getImageData(0, 0, this.luminosity.width, this.luminosity.height).data
    },
    addEventListener: function(b, c, a) {
        this.dispatcher.addEventListener(b, c, a)
    },
    dispatchEvent: function(a) {
        this.dispatcher.dispatchEvent(a)
    },
    removeEventListener: function(b, c, a) {
        this.dispatcher.removeEventListener(b, c, a)
    }
};

function Palette() {
    var e, d, b, a, n = 90,
        m = 1080,
        f = 1 / m,
        l = m / 360,
        c = Math.PI / 180,
        j, h, k, g, o;
    e = document.createElement("canvas");
    e.width = 250;
    e.height = 250;//changed from 250 05/01/17 MEDavy
    b = e.width / 2;
    a = 250 / 2;//changed to 250 from e.height 05/01/17 MEDavy
    d = e.getContext("2d");
    d.lineWidth = 1;
    for (j = 0; j < m; j++) {
        h = j / l * c;
        k = Math.cos(h);
        g = Math.sin(h);
        d.strokeStyle = "hsl(" + Math.floor((j * f) * 360) + ", 100%, 50%)";
        d.beginPath();
        d.moveTo(k + b, g + a);
        d.lineTo(k * n + b, g * n + a);
        d.stroke()
    }
    o = d.createRadialGradient(b, b, 0, b, b, n);
    o.addColorStop(0, "rgba(255, 255, 255, 1)");
    o.addColorStop(1, "rgba(255, 255, 255, 0)");
    d.fillStyle = o;
    d.fillRect(0, 0, e.width, e.height);
    return e
}

function Menu() {
    this.init()
}
Menu.prototype = {
    container: null,
    foregroundColor: null,
    backgroundColor: null,
    selector: null,
    save: null,
    clear: null,
    pointerSize: null,//added 05/01/17 MEDavy
    resetButton: null,//added 05/01/17 MEDavy
    files: null,//added 05/01/17 MEDavy
    fileButton: null,//added 05/02/17 MEDavy
    Dialog: null,//added 05/01/17 MEDavy
    about: null,
    init: function() {
        var b, c, d, e = 17,
            a = 17;
        this.container = document.createElement("div");
        this.container.className = "gui";
        this.container.style.position = "absolute";
        this.container.style.top = "0px";
        this.foregroundColor = document.createElement("canvas");
        this.foregroundColor.style.marginBottom = "-3px";
        this.foregroundColor.style.cursor = "pointer";
        this.foregroundColor.width = e;
        this.foregroundColor.height = a;
        this.foregroundColor.title = "Change Foreground Color (or press 'shift')";//added 05/01/17 MEDavy
        this.container.appendChild(this.foregroundColor);
        this.setForegroundColor(COLOR);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        this.backgroundColor = document.createElement("canvas");
        this.backgroundColor.style.marginBottom = "-3px";
        this.backgroundColor.style.cursor = "pointer";
        this.backgroundColor.width = e;
        this.backgroundColor.height = a;
        this.backgroundColor.title = "Change Background Color";//added 05/01/17 MEDavy
        this.container.appendChild(this.backgroundColor);
        this.setBackgroundColor(BACKGROUND_COLOR);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        //begin add 05/01/17 MEDavy
        this.fileButton = document.createElement("span");
        this.fileButton.className = "button";
        this.fileButton.id = "fileButton";
        this.fileButton.innerHTML = "Upload";
        this.fileButton.title = "Load image as background (or press 'o)";
        if (IOS){//if the browser is ios the button won't work so hide it
          this.fileButton.style = "display:none;";
          this.fileButton.style.visibility = "hidden";
          this.fileButton.style.display = "none";
	}
        this.container.appendChild(this.fileButton);
        
        this.files = document.createElement("input");
        this.files.type = "file";
        this.files.id = "files";
	if (!IOS){//if the browser is ios the button won't work so show the picker
          this.files.style = "display:none;";
	  this.files.style.visibility = "hidden";
          this.files.style.display = "none";
	}
        this.files.title = "Load image as background(or press 'o)";
        this.container.appendChild(this.files);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
				
        this.pointerSize = document.createElement("span");
        this.pointerSize.className = "button";
        this.pointerSize.id = "pointerSize";
        this.pointerSize.innerHTML = "1px";
        this.pointerSize.title = "Pointer Size (change using up and down arrow keys)";//added 05/01/17 MEDavy
        this.container.appendChild(this.pointerSize);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        //end add
        this.selector = document.createElement("select");
        for (i = 0; i < BRUSHES.length; i++) {
            b = document.createElement("option");
            b.id = i;
            b.innerHTML = BRUSHES[i].toUpperCase();
            this.selector.appendChild(b)
        }
        this.selector.title = "Change Brush Styles";//added 05/01/17 MEDavy
        this.container.appendChild(this.selector);
        d = document.createTextNode(" | ");
        this.container.appendChild(d);
        this.save = document.createElement("span");
        this.save.className = "button";
        this.save.innerHTML = "Save";
        this.save.title = "Save Canvas (or press 's')";//added 05/01/17 MEDavy
        this.container.appendChild(this.save);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        this.clear = document.createElement("Clear");
        this.clear.className = "button";
        this.clear.innerHTML = "Clear";
        this.clear.title = "Clear Canvas (or press 'delete')";//added 05/01/17 MEDavy
        this.container.appendChild(this.clear);
        //begin add 05/01/17 MEDavy
				c = document.createTextNode(" ");
        this.container.appendChild(c);
				this.resetButton = document.createElement("span");
        this.resetButton.className = "button";
				this.resetButton.id = "resetButton";
        this.resetButton.innerHTML = "Reset";
				this.resetButton.title = "Reset Colors and Brush Size (or press 'r')";//added 05/01/17 MEDavy
        this.container.appendChild(this.resetButton);
				//end add
        d = document.createTextNode(" | ");
        this.container.appendChild(d);
        this.about = document.createElement("About");
        this.about.className = "button";
        this.about.innerHTML = "About";
				this.about.title = "Information about this application";
        this.container.appendChild(this.about)
    },
    setForegroundColor: function(a) {
        var b = this.foregroundColor.getContext("2d");
				b.fillStyle = "rgb(0, 0, 0)";
        b.fillRect(0, 0, this.foregroundColor.width, this.foregroundColor.height);
        b.fillStyle = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
        b.fillRect(1, 1, this.foregroundColor.width-2, this.foregroundColor.height-2);
        
    },
    setBackgroundColor: function(a) {
        var b = this.backgroundColor.getContext("2d");
				b.fillStyle = "rgb(0, 0, 0)";
        b.fillRect(0, 0, this.backgroundColor.width, this.backgroundColor.height);
        b.fillStyle = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
        b.fillRect(1, 1, this.backgroundColor.width-2, this.backgroundColor.height-2);
				
    }
};

function About() {
    this.init()
}
About.prototype = {
    container: null,
    init: function() {
        var b, a;
        this.container = document.createElement("div");
        this.container.className = "gui";
        this.container.style.position = "absolute";
        this.container.style.top = "0px";
        this.container.style.visibility = "hidden";
        a = document.createElement("div");
        a.style.margin = "10px 10px";
        a.style.textAlign = "left";
        this.container.appendChild(a);
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<strong>SKETCHY</strong> Version ' + REV + ' by <a href="https://github.com/MEDavy" target="_blank">MEDavy</a></br>an improved version of <strong>HARMONY</strong> by <a href="http://twitter.com/mrdoob" target="_blank">Mr.doob</a>';//added 05/01/17 MEDavy
        a.appendChild(b);
				
				b = document.createElement("hr");//edited 05/01/17 MEDavy
        a.appendChild(b);//edited 05/01/17 MEDavy
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = 'Shortcuts: </br><span class="key" onclick="increaseBrush();">UP</span>: increase brush size</br><span class="key" onclick="decreaseBrush();">DOWN</span>: decrease brush size</br><span class="key">LEFT</span> default brush size<br /><span class="key">SHIFT</span>: open color picker<br /><span class="key">R</span>: reset brush<br /><span class="key">O</span>: upload background image<br /><span class="key">DELETE</span>: clear canvas<br /><span class="key">ESC</span>: close about window/color selector<br /><br/><a onclick="writeBackgroundData();" style="cursor:pointer;"><u>Brush Examples</u></a>';//changed to reflect code additions/changes - 05/01/17 MEDavy
        a.appendChild(b);
				b = document.createElement("hr");//edited 05/01/17 MEDavy
        a.appendChild(b);//edited 05/01/17 MEDavy
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<a href="http://mrdoob.com/projects/harmony/" target="_blank">Original App</a> | <a href="https://github.com/MEDavy/sketchy" target="_blank">Source Code</a>';//edited 05/01/17 MEDavy
        a.appendChild(b);
        b = document.createElement("hr");
        a.appendChild(b);
        b = document.createElement("p");
				b.style.textAlign = "center";
        b.innerHTML = "Please support Mr.doob:";//changed 05/01/17 MEDavy
        a.appendChild(b);
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<a href="http://flattr.com/thing/288/Harmony" target="_blank"><img src="http://api.flattr.com/button/button-compact-static-100x17.png" alt="Flattr this" title="Flattr this" border="0" /></a> <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="VY7767JMMMYM4"><input type="image" src="https://www.paypal.com/en_GB/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online."><img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"></form>';
        a.appendChild(b)
    },
    show: function() {
        this.container.style.visibility = "visible"
    },
    hide: function() {
        this.container.style.visibility = "hidden"
    }
};
const REV = 8,
    BRUSHES = ["sketchy", "shaded", "chrome", "fur", "longfur", "web", "", "simple", "squares", "ribbon", "", "circles", "grid"],
    USER_AGENT = navigator.userAgent.toLowerCase();
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    BRUSH_SIZE = 1,
    BRUSH_PRESSURE = 1,
    IOS = false,
    COLOR = [0, 0, 0],
    BACKGROUND_COLOR = [250, 250, 250],
    STORAGE = window.localStorage,
    brush, saveTimeOut, wacom, i, mouseX = 0,
    mouseY = 0,
    container, foregroundColorSelector, backgroundColorSelector, menu, about, canvas, flattenCanvas, context, isFgColorSelectorVisible = false,
    isBgColorSelectorVisible = false,
    isAboutVisible = false,
    isMenuMouseOver = false,
    shiftKeyIsDown = false,
    altKeyIsDown = false;
init();

function init() {
    var hash, palette, embed, localStorageImage;
    if (USER_AGENT.search("android") > -1 || USER_AGENT.search("iphone") > -1) {
        BRUSH_SIZE = 2
    }
    if (USER_AGENT.search("safari") > -1 && USER_AGENT.search("chrome") == -1) {
        STORAGE = false
    }
    if (/ipad|iphone|ipod/.test(USER_AGENT) && !window.MSStream) {
      IOS = true;
    }
    container = document.createElement("div");
    document.body.appendChild(container);
    canvas = document.createElement("canvas");
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    canvas.style.cursor = "crosshair";
    container.appendChild(canvas);
    context = canvas.getContext("2d");
    flattenCanvas = document.createElement("canvas");
    flattenCanvas.width = SCREEN_WIDTH;
    flattenCanvas.height = SCREEN_HEIGHT;
    palette = new Palette();
    foregroundColorSelector = new ColorSelector(palette);
    foregroundColorSelector.addEventListener("change", onForegroundColorSelectorChange, false);
    container.appendChild(foregroundColorSelector.container);
    backgroundColorSelector = new ColorSelector(palette);
    backgroundColorSelector.addEventListener("change", onBackgroundColorSelectorChange, false);
    container.appendChild(backgroundColorSelector.container);
    menu = new Menu();
    menu.foregroundColor.addEventListener("click", onMenuForegroundColor, false);
    menu.foregroundColor.addEventListener("touchend", onMenuForegroundColor, false);
    menu.backgroundColor.addEventListener("click", onMenuBackgroundColor, false);
    menu.backgroundColor.addEventListener("touchend", onMenuBackgroundColor, false);
    menu.selector.addEventListener("change", onMenuSelectorChange, false);
    menu.save.addEventListener("click", onMenuSave, false);
    menu.save.addEventListener("touchend", onMenuSave, false);
    menu.clear.addEventListener("click", onMenuClear, false);
    menu.clear.addEventListener("touchend", onMenuClear, false);
    menu.about.addEventListener("click", onMenuAbout, false);
    menu.about.addEventListener("touchend", onMenuAbout, false);
		menu.pointerSize.addEventListener("click", onMenuPointerSize, false);//added 05/01/17 MEDavy
    menu.pointerSize.addEventListener("touchend", onMenuPointerSize, false);//added 05/01/17 MEDavy
		menu.resetButton.addEventListener("click", onMenuReset, false);//added 05/01/17 MEDavy
    menu.resetButton.addEventListener("touchend", onMenuReset, false);//added 05/01/17 MEDavy
		menu.fileButton.addEventListener("click", onMenuFile, false);//added 05/01/17 MEDavy
    menu.fileButton.addEventListener("touchend", onMenuFile, false);//added 05/01/17 MEDavy
		menu.files.addEventListener('change', handleFileSelect, false);
    menu.container.addEventListener("mouseover", onMenuMouseOver, false);
    menu.container.addEventListener("mouseout", onMenuMouseOut, false);
    container.appendChild(menu.container);
    if (STORAGE) {
        if (localStorage.canvas) {
            localStorageImage = new Image();
            localStorageImage.addEventListener("load", function(event) {
                localStorageImage.removeEventListener(event.type, arguments.callee, false);
                context.drawImage(localStorageImage, 0, 0)
            }, false);
            localStorageImage.src = localStorage.canvas
        }
        if (localStorage.brush_color_red) {
            COLOR[0] = localStorage.brush_color_red;
            COLOR[1] = localStorage.brush_color_green;
            COLOR[2] = localStorage.brush_color_blue
        }
        if (localStorage.background_color_red) {
            BACKGROUND_COLOR[0] = localStorage.background_color_red;
            BACKGROUND_COLOR[1] = localStorage.background_color_green;
            BACKGROUND_COLOR[2] = localStorage.background_color_blue
        }
				document.body.style.backgroundImage = localStorage.bgimage;//added 05/03/17 MEDavy
    }
    foregroundColorSelector.setColor(COLOR);
		if (!document.body.style.backgroundImage) {
			backgroundColorSelector.setColor(BACKGROUND_COLOR);
		}
    if (window.location.hash) {
        hash = window.location.hash.substr(1, window.location.hash.length);
        for (i = 0; i < BRUSHES.length; i++) {
            if (hash == BRUSHES[i]) {
                brush = eval("new " + BRUSHES[i] + "(context)");
                menu.selector.selectedIndex = i;
                break
            }
        }
    }
    if (!brush) {
        brush = eval("new " + BRUSHES[0] + "(context)")
    }
    about = new About();
    container.appendChild(about.container);
    window.addEventListener("mousemove", onWindowMouseMove, false);
    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("keydown", onWindowKeyDown, false);
    window.addEventListener("keyup", onWindowKeyUp, false);
    window.addEventListener("blur", onWindowBlur, false);
    document.addEventListener("mousedown", onDocumentMouseDown, false);
    document.addEventListener("mouseout", onDocumentMouseOut, false);
    canvas.addEventListener("mousedown", onCanvasMouseDown, false);
    canvas.addEventListener("touchstart", onCanvasTouchStart, false);
    onWindowResize(null);
}

function onWindowMouseMove(a) {
    mouseX = a.clientX;
    mouseY = a.clientY;
}

function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    menu.container.style.left = ((SCREEN_WIDTH - menu.container.offsetWidth) / 2) + "px";
    about.container.style.left = ((SCREEN_WIDTH - about.container.offsetWidth) / 2) + "px";
    about.container.style.top = ((SCREEN_HEIGHT - about.container.offsetHeight) / 2) + "px"
}

function onWindowKeyDown(a) {
    if (shiftKeyIsDown) {
        return
    }
    switch (a.keyCode) {
        case 16:
            shiftKeyIsDown = true;
            foregroundColorSelector.container.style.left = mouseX - 125 + "px";
            foregroundColorSelector.container.style.top = mouseY - 125 + "px";
            foregroundColorSelector.container.style.visibility = "visible";
            break;
        case 18:
            altKeyIsDown = true;
            break;
        case 40://down arrow - changed from 'd' 05/01/16 MEDavy
            if (BRUSH_SIZE > 1) {
                BRUSH_SIZE--
                document.getElementById("pointerSize").innerHTML = BRUSH_SIZE+"px";//added 05/01/17 MEDavy
            }
            break;
        case 38://up arrow - changed from 'f' 05/01/16 MEDavy
            BRUSH_SIZE++;
            document.getElementById("pointerSize").innerHTML = BRUSH_SIZE+"px";//added 05/01/17 MEDavy
            break
        case 37://left arrow - added 05/01/16 MEDavy
          BRUSH_SIZE=1;//reset brush size
          document.getElementById("pointerSize").innerHTML = BRUSH_SIZE+"px";//added 05/01/17 MEDavy
          break
				case 8://delete key pressed - added by MEDavy 05/01/17
				    onMenuClear();//promt the user to clear canvas
				    break
				case 82://r key pressed: reset pointer color - added by MEDavy 05/01/17
						onMenuReset();
				    break
				case 27://esc key pressed: reset pointer color - added by MEDavy 05/01/17
						cleanPopUps();
				    break
				case 79://o key pressed: load background image- added by MEDavy 05/01/17
						onMenuFile();
				    break
				case 83://s key pressed: save image- added by MEDavy 05/01/17
						onMenuSave();
				    break
    }
}

function onWindowKeyUp(event) {
    switch (event.keyCode) {
        case 16:
            shiftKeyIsDown = false;
            foregroundColorSelector.container.style.visibility = "hidden";
            break;
        case 18:
            altKeyIsDown = false;
            break;
        case 82:
            brush.destroy();
            brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
            break
    }
    context.lineCap = BRUSH_SIZE == 1 ? "butt" : "round"
}

function onWindowBlur(a) {
    shiftKeyIsDown = false;
    altKeyIsDown = false
}

function onDocumentMouseDown(a) {
    if (!isMenuMouseOver) {
        a.preventDefault()
    }
}

function onDocumentMouseOut(a) {
    onCanvasMouseUp()
}

function onForegroundColorSelectorChange(a) {
    COLOR = foregroundColorSelector.getColor();
    menu.setForegroundColor(COLOR);
    if (STORAGE) {
        localStorage.brush_color_red = COLOR[0];
        localStorage.brush_color_green = COLOR[1];
        localStorage.brush_color_blue = COLOR[2]
    }
}

function onBackgroundColorSelectorChange(a) {
    BACKGROUND_COLOR = backgroundColorSelector.getColor();
    menu.setBackgroundColor(BACKGROUND_COLOR);
		document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
    if (STORAGE) {
        localStorage.background_color_red = BACKGROUND_COLOR[0];
        localStorage.background_color_green = BACKGROUND_COLOR[1];
        localStorage.background_color_blue = BACKGROUND_COLOR[2];
				localStorage.bgimage = document.body.style.backgroundImage;//added 05/03/17 MEDavy
    }
}

function writeBackgroundData() {
  if (!confirm("This will overwrite any existing drawing and background. Are you sure you want to do this?")) {
        return;
  }
	document.body.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAAJ2CAYAAAC0MtmqAAAgAElEQVR4XuydC7hdRXn+F3+BQltbL4CVoGAhKFG5tU1IuKhAgoQCiigqUGxBvCFCRasICghYr1jEpxClglwURLwgARNAKBBMoIhWASGpoATaALZeKpWK+T+/se9hsrL3XrPWXnvvtfZ+1/Oc55yz96yZb96Z+eabd775Zp3Vq1evzvwYASNgBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AEjEAyAuuYWE3GygmNgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBIyAETACAQETq+4IRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYgZIImFgtCZiTGwEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBEysug8YASNgBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AESiJgYrUkYE5uBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMLHqPmAEjIARMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEoiYCJ1ZKAObkRMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEwAkbAxKr7gBEwAkbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRqAkAiZWSwLm5EbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRsAIGAETq+4DRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYgZIImFgtCZiTGwEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBEysug8YASNgBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AESiJgYrUkYE5uBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMLHqPmAEjIARMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEoiYCJ1ZKAObkRMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEwAkbAxKr7gBEwAkbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRqAkAiZWSwLm5EbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRsAIGAETq+4DRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYgZIImFgtCZiTGwEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBEysug8YASNgBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AESiJgYrUkYE5uBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMLHqPmAEjIARMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEoiYCJ1ZKAObkRMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEwAkbAxKr7gBEwAkbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRqAkAiZWSwLm5EbACBgBI2AEjIARMAJGwAgYASNgBIyAETACRsAIGAETq+4DRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYgZIImFgtCZiTGwEjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBEysug8YASNgBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AESiJgYrUkYE5uBIyAETACRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMLHqPmAEjIARMAJGwAgYASNgBIyAETACRsAIGAEjYASMgBEoiYCJ1ZKAOXk6Atdff3320pe+NP0FpzQCRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAItQcDEaksaqk1i3nnnndmiRYuCyMccc0ybRLesRsAIGAEjYASMgBEwAkbACBgBI2AEjIARMAJGIAkBE6tJMDlREQKQqXfccUf22GOPhaQbbLBBdvDBBxe95u+NgBEwAkbACBgBI2AEjIARMAJGwAgYASNgBIxAKxEwsdrKZmuO0CtWrMg48i8ydYcddshmzJjRHAEtiREwAkbACBgBI2AEjIARMAJGwAgYASNgBIyAERgAAiZWBwDqJGV53nnnZeuss0522GGHTVK1XVcjYASMgBEwAkbACBgBI2AEjIARMAJGwAgYgQlHwMTqhHeAqtW/+OKLp479c0HVlltuWTUrv2cEjIARMAJGwAgYASNgBIyAETACRsAIGAEjYARah4CJ1dY12WgFvueee7KFCxcGIebNm+dj/6NtDpduBIyAETACRsAIGAEjYASMgBEwAkag9QgoxKAqMm3atGz69Omtr5crMP4ImFgd/zaurYaLFy/Obr755myrrbbKDjnkkNrydUZGwAgYASNgBIyAETACRsAIGAEjYASMwOQhAKHKRdg822+/ffj9wAMPZMuXLw8X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0/05XX0e7VSWdoOeynv66adLCABt8+JY1R79sZjVzTffXLY1zj7ggAPKX7FegVttoo9y1OcFuvpMG7387wXOaoe64zN/63FZ80BNBeatQILVee+BOdc/ZHdMH1OWp5E7B6HTqJfbDk0Bg6E4pj1dPvbYY4fWxF7aA1oZKFptfdOmTT9WxyKd44vU1l525BIXuqrn5hLv0uxaKtBagb6v8X2X37rDuUEqsCAKgJExnb8OTzeCqGt1zQNU8DNALGgoAYpcpKbnf/GLX6w+97nPFXgJfh522GHVSSedVACk7xkktttuuwJQgUkxSoFVeUFQ7lR1yAdgApHhYAVhlWEaPxgKXgYwBTEDbipHPs5YbeZOBWCFAgBlwxlLCwtr0UH9AO2TTz5ZFtxSL7C65557Fheq9quDs1ZZEZNVGdqlH8qRJxy+8Z3PArLWF7eS33aZUoF5KZBgdV7KD6heoEHqK6YbeCt5etYmDW3QN7T2tNEy86YC6yngKbiBkMHacccdN1eh+j7Hvva1r1V33HHHutOs+66/S3EXqa1d9nuVyopzM8MCrNJez76mAj9SoO9rfN/l535MBZZVgXB8xlT+tv2Maf8RYxUk5PZUHlgpZikIet1111VXXXVVWRCKy3PLli3V6aefXtyeYCSoaZq8+KRgL1jpxTwAlIKZwKr6wvGprQApGMox+sMf/nDrDC6fq9fnIC+YajvvlakN6tFGn8ujbbbhTgVvb7/99hKuAOyV9OmGG24oztttt9222nvvvatdd921lAXi0kBftFs94LDygFbtj5AByox4tf63je0Dusb3GZO17dGY+btUIMFql2ouaFnhWj3zzDMrKwZ2mZT9sY99rBQptkobeDu0QZ/2eGL45je/uUuJsqxUYO4KBHDs4xrQpnN9nvPXX399ddttt1WHHnpocauulfqs37XwxRdf3FCONgtn9dnWNvss8/arQPw+b3Tc9tuCLD0VSAXmoUDf1/i+y5+HZllnKjBUBYC/AKpgIyAYrkuw0mecpdyggKVYpddcc0113333FUh61FFHlTUADjnkkAJegUnjA2XEtH3/g6MRMzVcquGK5ebUBnkidIG6wy0aztZwgXK+AqjgLUesdkQ8WCCYg9QMG2UAq+KncqfaXlgCfdJOC1w988wzxb0KrJolJx6ssAYSSKosENVfcWADmGpTOFeBVP9H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33xz3K2SwgAQb722XQiv7IRhIfe73/1uqc7alg2IFUmgCQK4uXGfk5cAgZV5PU7v2mSv48ePD6eeempYe+21Y24FQn5YJCABCUhAAhJonoDCavPssjoTcXX11VfPqk92RgISkIAEJCCBngkkUZUjiVlKQpxUWi2qLq211157bXTYEQt+6NCh73HVEsZozpw5MZs5YY322muvnjvtERLIlADhshBYWYzAuUrOBLb9E6t4+vTpMQbrP//zP0dTxec///lMKdgtCUhAAhKQQOsIKKy2jrU1SUACEpCABCQggUoRSLFVaRQJIRFbKIQF2njjjSsTt/S6664LF154YXj88cdj+5Kjdv/99w+XX355uPHGGwNboX/3u99Viq+NkUA7CNx3332BuKs4uUkAh6ubuMmHH354TAp7xRVXhAEDBrSjadYpAQlIQAISyI6Awmp2Q2qHJCABCUhAAhKQQH0EkrC6qKha1WQ2bG+mbcRXpay22mox5ipxIim48ubPn19f5z1KAhkTmDRpUlyAIBHt66+/Hgih8Q//8A9h3LhxYZtttsm453ZNAhKQgAQk0FoCCqut5W1tEpCABCQgAQlIoFIEal2rOFWrKqrWQqPNJK269dZb459feumlsOKKK8afDzrooI7oQ6VuAhuTJQHEVMIC3HTTTeGtt94Ka621VgyXsfXWW2fZXzslAQlIQAISaAcBhdV2ULdOCUhAAhKQgAQkUCECCJWUXXbZpUKtqq8pJLeiXHLJJTFGbCcIw/X1zKMk0HsCu+++e3jggQfCBhtsEPMp4Prmb8QqNhlt7/l6BQlIQAISkIDCqveABCQgAQlIQAISkIAEJCCBzAicccYZ4aqrrooLDiSqevfdd8M777wTk1ptttlm4cgjjwwf/OAHM+u13ZGABCQgAQm0loDCamt5W5sEJCABCUhAAhKQgAQkIIFSCYwdOzZ861vfCltuuWUg+dsLL7wQcHcjrCKw/upXvwrrrrtu+PrXvx4+/vGPl9oWLy4BCUhAAhLImYDCas6ja98kIAEJSEACEpCABCQgga4icPvtt4eRI0eGddZZJ0yYMGFh34lFTNiPX/ziF9Gp+vLLL4dPfvKTYcSIETERnEUCEpCABCQggcYJKKw2zswzJCABCUhAAhKQgAQkIAEJVI7AQw89FA488MCwyiqrhIkTJ4YPfOAD72nj/Pnzw5QpU8KCBQvi31955ZXw17/+NQwfPjxstdVWleuPDZKABCQgAQlUnYDCatVHyPZJQAISkIAEJCABCUhAAhLogcBzzz0XBg8eHJZbbrkonv7jP/7jEs/4wx/+EO68887w4osvRlGV73/84x/D3nvvHZNaWSQgAQlIQAISqJ+Awmr9rDxSAhKQgAQkIAEJSEACEpBA5Qj8+te/jkmq3ve+94WpU6eGj3zkI8ts45///OcwefLkMGPGjHjO7373uyiwco2jjjoqvP/9769cH22QBCQgAQlIoIoEFFarOCq2SQISkIAEJCABCUhAAhKQQB0E/ud//idsvPHGge+IpSussEIdZ/3fIYiw06dPj+eS1GrevHlhpZVWCieddFJ0vlokIAEJSEACElg2AYVV7xAJSEACEpCABCQgAQlIQAIdSqBfv37hnXfeiaLqqquu2nAvZs+eHe67777w+9//PvzlL38JTz/9dPjYxz4WRo0aFfr27dvw9TxBAhKQgAQk0E0EFFa7abTtqwQkIAEJSEACEpCABCSQDYHNN988vPnmm2HChAnh85//fNP9+uUvfxl+9rOfhbfeeiv87//+b5gzZ050sQ4ZMiTsu+++TV/XEyUgAQlIQAK5E1BYzX2E7Z8EJCABCUhAAhKQgAQkkB2BDTfcMMZGnThxYq9E1QTmv//7v8OkSZMCSbD+7u/+Lvz85z8PCK477bRTGDFiRHb87JAEJCABCUigCAIKq0VQ9BoSkIAEJCABCUhAAhKQgARaRACn6i9+8Ytw8803B0IBFFVwqz744IMxHMAf/vCHKKy+9NJLYb311gunnHJK+NCHPlRUVV5HAhKQgAQkkAUBhdUshtFOSEACEpCABCQgAQlIQALdQGDAgAHh17/+dbjjjjvCOuusU0qXSWJ17733xrirv/3tb8OsWbPCpz/96XDaaaeF1VdfvZQ6vagEJCABCUigEwkorHbiqNlmCUhAAhKQgAQkIAEJSKDrCGywwQbh7bffDtOnTw8rrrhiqf1HUL3//vtjSIA//elP4bHHHov1HXLIIWGPPfYotW4vLgEJSEACEugUAgqrnTJStlMCEpCABCQgAQlIQAIS6FoCuFP//Oc/h4cffjgst9xyLeHw17/+NcyYMSOKqu+880548skn4/fdd989jBo1KsZitUhAAhKQgAS6mYDCajePvn2XgAQk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")'
}

function onMenuForegroundColor() {
    cleanPopUps();
    foregroundColorSelector.show();
    foregroundColorSelector.container.style.left = ((SCREEN_WIDTH - foregroundColorSelector.container.offsetWidth) / 2) + "px";
    foregroundColorSelector.container.style.top = ((SCREEN_HEIGHT - foregroundColorSelector.container.offsetHeight) / 2) + "px";
    isFgColorSelectorVisible = true
}

function onMenuBackgroundColor() {
    cleanPopUps();
    backgroundColorSelector.show();
    backgroundColorSelector.container.style.left = ((SCREEN_WIDTH - backgroundColorSelector.container.offsetWidth) / 2) + "px";
    backgroundColorSelector.container.style.top = ((SCREEN_HEIGHT - backgroundColorSelector.container.offsetHeight) / 2) + "px";
    isBgColorSelectorVisible = true
}

function onMenuSelectorChange() {
    if (BRUSHES[menu.selector.selectedIndex] == "") {
        return
    }
    brush.destroy();
    brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
    window.location.hash = BRUSHES[menu.selector.selectedIndex]
		menu.selector.blur(); //lose focus so more keypress events can be accepted - MEDavy 05/01/17
}

function onMenuMouseOver() {
    isMenuMouseOver = true
}

function onMenuMouseOut() {
    isMenuMouseOver = false
}

function onMenuSave() {
    flatten();
    window.open(flattenCanvas.toDataURL("image/png"), "mywindow");
		saveToLocalStorage();
}

function onMenuClear() {
    if (!confirm("Discard your drawing?\n(If you have uploaded a background image it will stay)")) {
        return
    }
		SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
		canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
		flattenCanvas.width = SCREEN_WIDTH;
		flattenCanvas.height = SCREEN_HEIGHT;
    context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    saveToLocalStorage();
    brush.destroy();
    brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)")
}

function onMenuAbout() {
    cleanPopUps();
    isAboutVisible = true;
    about.show()
}

function onMenuPointerSize() {//added 05/01/17 MEDavy
    alert("To change the brush size:\n* Up Arrow to increase\n* Down Arrow to decrease\n* Left Arrow to reset");
}

function onMenuReset() {//added 05/01/17 MEDavy
  if (!confirm("Reset the brush?")) {
    return
  }
	COLOR[0] = 0;
  COLOR[1] = 0;
	COLOR[2] = 0;
	menu.setForegroundColor(COLOR);
	if (STORAGE) {
    localStorage.brush_color_red = COLOR[0];
    localStorage.brush_color_green = COLOR[1];
    localStorage.brush_color_blue = COLOR[2]
  }
	if (!document.body.style.backgroundImage){//if there is no background image
		BACKGROUND_COLOR[0] = 255;
	  BACKGROUND_COLOR[1] = 255;
	  BACKGROUND_COLOR[2] = 255;
		menu.setBackgroundColor(BACKGROUND_COLOR);
		document.body.style.backgroundImage = "";
		document.body.style.backgroundColor = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
		if (STORAGE) {
			localStorage.background_color_red = BACKGROUND_COLOR[0];
			localStorage.background_color_green = BACKGROUND_COLOR[1];
			localStorage.background_color_blue = BACKGROUND_COLOR[2];
			localStorage.bgimage = document.body.style.backgroundImage;//added 05/03/17 MEDavy
		}
	}//end if there is no background image
	saveToLocalStorage();//save the file
	BRUSH_SIZE = 1;//reset brush size
	menu.selector.selectedIndex = 0;//reset brush type
	onMenuSelectorChange();//reset brush type
	document.getElementById("pointerSize").innerHTML = BRUSH_SIZE+"px";//update pointer size display
}

function onMenuFile() {//added 05/02/17 MEDavy
  menu.files.click();
}

function handleFileSelect() {//added 05/02/17 MEDavy
    var files = this.files;
    // If no files were selected, or no FileReader support, return
    if (!window.FileReader) {
    	alert("Your browser does not support FileReader");
      return;
    }
    if (IOS) {
      alert("Due to a limitation in iOS, the background image will not appear in saved image.");
    }
    if (!files.length) {
    	alert("You didn't select anything");
      return;
    }
    var reader = new FileReader();// Create a new instance of the FileReader
    reader.readAsDataURL(files[0]);// Read the local file as a DataURL
    reader.onloadend = function(){
      // When loaded, set image data as background of page
      document.body.style.backgroundImage = "url(" + this.result + ")";
      if (STORAGE) {//added 05/03/17 MEDavy
        localStorage.bgimage = document.body.style.backgroundImage;
      }
      document.body.style.backgroundColor = "rgba(0,0,0,0)";
    }
    onMenuClear();
}

function onCanvasMouseDown(b) {
    var c, a;
    clearTimeout(saveTimeOut);
    cleanPopUps();
    if (altKeyIsDown) {
        flatten();
        c = flattenCanvas.getContext("2d").getImageData(0, 0, flattenCanvas.width, flattenCanvas.height).data;
        a = (b.clientX + (b.clientY * canvas.width)) * 4;
        foregroundColorSelector.setColor([c[a], c[a + 1], c[a + 2]]);
        return
    }
    BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
    brush.strokeStart(b.clientX, b.clientY);
    window.addEventListener("mousemove", onCanvasMouseMove, false);
    window.addEventListener("mouseup", onCanvasMouseUp, false)
}

function onCanvasMouseMove(a) {
    BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
    brush.stroke(a.clientX, a.clientY)
}

function onCanvasMouseUp() {
    brush.strokeEnd();
    window.removeEventListener("mousemove", onCanvasMouseMove, false);
    window.removeEventListener("mouseup", onCanvasMouseUp, false);
    if (STORAGE) {
        clearTimeout(saveTimeOut);
        saveTimeOut = setTimeout(saveToLocalStorage, 2000, true)
    }
}

function onCanvasTouchStart(a) {
    cleanPopUps();
    if (a.touches.length == 1) {
        a.preventDefault();
        brush.strokeStart(a.touches[0].pageX, a.touches[0].pageY);
        window.addEventListener("touchmove", onCanvasTouchMove, false);
        window.addEventListener("touchend", onCanvasTouchEnd, false)
    }
}

function onCanvasTouchMove(a) {
    if (a.touches.length == 1) {
        a.preventDefault();
        brush.stroke(a.touches[0].pageX, a.touches[0].pageY)
    }
}

function onCanvasTouchEnd(a) {
    if (a.touches.length == 0) {
        a.preventDefault();
        brush.strokeEnd();
        window.removeEventListener("touchmove", onCanvasTouchMove, false);
        window.removeEventListener("touchend", onCanvasTouchEnd, false);
    }
}

function saveToLocalStorage() {
  localStorage.canvas = canvas.toDataURL("image/png");
	localStorage.bgimage = document.body.style.backgroundImage;//added 05/03/17 MEDavy
}

function flatten() {
  //begin add 05/03/17 MEDavy
  var img = new Image;
  img.src = document.body.style.backgroundImage.replace('url("', '').replace('")', '');
  //end add
  var a = flattenCanvas.getContext("2d");
  a.fillStyle = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
  a.fillRect(0, 0, canvas.width, canvas.height);
  //begin add 05/03/17 MEDavy
  a.drawImage(img, 0, 0, SCREEN_WIDTH, (SCREEN_WIDTH*img.height)/img.width);
  a.drawImage(canvas, 0, 0);
  //end add
}

function cleanPopUps() {
    if (isFgColorSelectorVisible) {
        foregroundColorSelector.hide();
        isFgColorSelectorVisible = false
    }
    if (isBgColorSelectorVisible) {
        backgroundColorSelector.hide();
        isBgColorSelectorVisible = false
    }
    if (isAboutVisible) {
        about.hide();
        isAboutVisible = false
    }
};
