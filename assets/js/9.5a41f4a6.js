(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"反向代理和负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理和负载均衡","aria-hidden":"true"}},[s._v("#")]),s._v(" 反向代理和负载均衡")]),s._v(" "),a("p",[s._v("使用代理服务器可以将请求转发给内部的Web服务器，使用这种加速模式显然可以提升静态网页的访问速度。因此也可以考虑使用这种技术，让代理服务器将请求均匀转发给多台内部Web服务器之一上，从而达到负载均衡的目的。这种代理方式与普通的代理方式有所不同，标准代理方式是客户使用代理访问多个外部Web服务器，而这种代理方式是多个客户使用它访问内部Web服务器，因此也被称为反向代理模式。")]),s._v(" "),a("h2",{attrs:{id:"配置主web服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置主web服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置主WEB服务器")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /home/vhosts/default.conf\n")])])]),a("p",[a("strong",[s._v("配置内容")])]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定负载均衡的服务器列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" webservice "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# weight为权重值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8083")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),s._v(" utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  /var/log/nginx/host.access.log  main;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 反向代理")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webservice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相关配置")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_redirect")]),s._v("     off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   Host             "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_next_upstream")]),s._v(" error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timeout")]),s._v(" invalid_header http_500 http_502 http_503 http_504"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_max_temp_file_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_connect_timeout")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_send_timeout")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffer_size")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffers")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_busy_buffers_size")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_temp_file_write_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("重启Nginx")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart nginx\n")])])]),a("h2",{attrs:{id:"脚本测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 脚本测试")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:80\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("p",[a("strong",[s._v("执行脚本")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sh test.sh\n")])])])])}],!1,null,null,null);t.default=n.exports}}]);