"use strict";

webpackJsonp([6], { 37: function _(e, t, o) {
    e.exports = o(46);
  }, 46: function _(e, t, o) {
    var v = o(2)(null, o(47), null, null, null);e.exports = v.exports;
  }, 47: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement;e._self._c;return e._m(0);
      }, staticRenderFns: [function () {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("section", [o("p", [e._v('{\n"title": "Motto",\n"tags": ["javascript", "vue", "tool"],\n"date": "2016-08-05",\n"desc": "Show your motto in an amazing way!",\n"cover": "motto.png"\n}')]), e._v(" "), o("h1", [e._v("MottoJS")]), e._v(" "), o("p", [e._v("Show your motto in an amazing way!")]), e._v(" "), o("blockquote", [o("p", [e._v("Visit "), o("a", { attrs: { href: "http://codepen.io/jrainlau/pen/vKQKEA" } }, [e._v("Codepen live demo")]), e._v(" here")])]), e._v(" "), o("h1", [e._v("Installation")]), e._v(" "), o("p", [e._v("npm")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v("npm install motto\n")])]), e._v(" "), o("p", [e._v("or")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v("git clone git@github.com:jrainlau/motto.git\n")])]), e._v(" "), o("h1", [e._v("Usage")]), e._v(" "), o("p", [e._v("create a html tag such as "), o("code", { pre: !0 }, [e._v("<h1></h1>")]), e._v(" etc")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v('<h1 class="motto"></h1>\n')])]), e._v(" "), o("p", [e._v("then include "), o("code", { pre: !0 }, [e._v("MottoJS")])]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v('<script src="motto.min.js"><\/script>\n')])]), e._v(" "), o("blockquote", [o("p", [o("code", { pre: !0 }, [e._v("MottoJS")]), e._v(" also support "), o("code", { pre: !0 }, [e._v("AMD")]), e._v(", "), o("code", { pre: !0 }, [e._v("CommonJS")]), e._v(" and "), o("code", { pre: !0 }, [e._v("ES2015")]), e._v(".")])]), e._v(" "), o("p", [e._v("then use "), o("code", { pre: !0 }, [e._v("new")]), e._v(" to create a MottoJS instance")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v("var motto = new Motto(el, config)\n")])]), e._v(" "), o("blockquote", [o("p", [e._v("if you want to add the "), o("em", [e._v("shake")]), e._v(" effect, you should link the "), o("code", { pre: !0 }, [e._v("motto.css")]), e._v(" to your  HTML:")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } })])]), e._v(" "), o("p", [e._v('<link rel="stylesheet" href="motto.css">')]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v('> and add a class `.motto-shake` to the element\n> ```\n<h1 class="title motto-shake"></h1>\n')])]), e._v(" "), o("h1", [e._v("Params")]), e._v(" "), o("p", [o("code", { pre: !0 }, [e._v("MottoJS")]), e._v(" receive two params.")]), e._v(" "), o("ul", [o("li", [o("h3", [e._v("el {String / HTML element} "), o("code", { pre: !0 }, [e._v("required")])])])]), e._v(" "), o("p", [e._v("use CSS selector to select a html element for showing the motto.")]), e._v(" "), o("ul", [o("li", [o("h3", [e._v("config {Object} "), o("code", { pre: !0 }, [e._v("required")])])])]), e._v(" "), o("p", [e._v("it's an object with five optional properties.")]), e._v(" "), o("h1", [e._v("Config")]), e._v(" "), o("p", [e._v("the base config object is")]), e._v(" "), o("pre", { pre: !0, attrs: { class: "hljs" } }, [o("code", { attrs: { "v-pre": "" } }, [e._v("{\n    lyric: 'To be or not to be, that\\'s a question.',\n    showUpSpeed: 1000,\n    flashSpeed: 100,\n    flashTimeout: 1000,\n    callback: function() { ... }\n}\n")])]), e._v(" "), o("ul", [o("li", [o("h4", [e._v("lyric {String} "), o("code", { pre: !0 }, [e._v("optional")]), e._v(" "), o("code", { pre: !0 }, [e._v("default: ''")])])])]), e._v(" "), o("p", [e._v("the text of your motto.")]), e._v(" "), o("ul", [o("li", [o("h4", [e._v("showUpSpeed {Number} "), o("code", { pre: !0 }, [e._v("optional")]), e._v(" "), o("code", { pre: !0 }, [e._v("default: 0")])])])]), e._v(" "), o("p", [e._v("your motto will be a letter by letter on display, it's an option to control the speed.")]), e._v(" "), o("ul", [o("li", [o("h4", [e._v("flashSpeed {Number} "), o("code", { pre: !0 }, [e._v("optional")]), e._v(" "), o("code", { pre: !0 }, [e._v("default: 0")])])])]), e._v(" "), o("p", [e._v("to control how fast will the messy code translate into meaningful motto.")]), e._v(" "), o("ul", [o("li", [o("h4", [e._v("flashTimeout {Number} "), o("code", { pre: !0 }, [e._v("optional")]), e._v(" "), o("code", { pre: !0 }, [e._v("default: 0")])])])]), e._v(" "), o("p", [e._v("set the timeout between the messy code showed up and translated into meaningful motto.")]), e._v(" "), o("ul", [o("li", [o("h4", [e._v("callback {Function} "), o("code", { pre: !0 }, [e._v("optional")]), e._v(" "), o("code", { pre: !0 }, [e._v("default: {}")])])])]), e._v(" "), o("p", [e._v("a callback function after translation.")]), e._v(" "), o("h1", [e._v("Update")]), e._v(" "), o("ul", [o("li", [e._v("v1.0.1: added "), o("em", [e._v("shake")]), e._v(" css effect.")])]), e._v(" "), o("h1", [e._v("License")]), e._v(" "), o("p", [e._v("MIT")])]);
      }] };
  } });
//# sourceMappingURL=6.5059e070.js.map