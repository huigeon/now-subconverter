(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b00f33d"],{"14c3":function(e,t,a){var o=a("c6b6"),l=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var n=a.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==o(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},"25f0":function(e,t,a){"use strict";var o=a("6eeb"),l=a("825a"),n=a("d039"),i=a("ad6d"),s="toString",r=RegExp.prototype,c=r[s],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=s;(u||m)&&o(RegExp.prototype,s,(function(){var e=l(this),t=String(e.source),a=e.flags,o=String(void 0===a&&e instanceof RegExp&&!("flags"in r)?i.call(e):a);return"/"+t+"/"+o}),{unsafe:!0})},"4de4":function(e,t,a){"use strict";var o=a("23e7"),l=a("b727").filter,n=a("1dde"),i=a("ae40"),s=n("filter"),r=i("filter");o({target:"Array",proto:!0,forced:!s||!r},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,a){"use strict";var o=a("d784"),l=a("825a"),n=a("7b0b"),i=a("50c4"),s=a("a691"),r=a("1d80"),c=a("8aa5"),u=a("14c3"),m=Math.max,h=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};o("replace",2,(function(e,t,a,o){var g=o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=o.REPLACE_KEEPS_$0,v=g?"$":"$0";return[function(a,o){var l=r(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,l,o):t.call(String(l),a,o)},function(e,o){if(!g&&S||"string"===typeof o&&-1===o.indexOf(v)){var n=a(t,e,this,o);if(n.done)return n.value}var r=l(e),p=String(this),d="function"===typeof o;d||(o=String(o));var b=r.global;if(b){var w=r.unicode;r.lastIndex=0}var R=[];while(1){var _=u(r,p);if(null===_)break;if(R.push(_),!b)break;var y=String(_[0]);""===y&&(r.lastIndex=c(p,i(r.lastIndex),w))}for(var x="",A=0,k=0;k<R.length;k++){_=R[k];for(var L=String(_[0]),U=m(h(s(_.index),p.length),0),$=[],T=1;T<_.length;T++)$.push(f(_[T]));var E=_.groups;if(d){var M=[L].concat($,U,p);void 0!==E&&M.push(E);var O=String(o.apply(void 0,M))}else O=C(L,p,U,$,E,o);U>=A&&(x+=p.slice(A,U)+O,A=U+L.length)}return x+p.slice(A)}];function C(e,a,o,l,i,s){var r=o+e.length,c=l.length,u=b;return void 0!==i&&(i=n(i),u=d),t.call(s,u,(function(t,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,o);case"'":return a.slice(r);case"<":s=i[n.slice(1,-1)];break;default:var u=+n;if(0===u)return t;if(u>c){var m=p(u/10);return 0===m?t:m<=c?void 0===l[m-1]?n.charAt(1):l[m-1]+n.charAt(1):t}s=l[u-1]}return void 0===s?"":s}))}}))},6547:function(e,t,a){var o=a("a691"),l=a("1d80"),n=function(e){return function(t,a){var n,i,s=String(l(t)),r=o(a),c=s.length;return r<0||r>=c?e?"":void 0:(n=s.charCodeAt(r),n<55296||n>56319||r+1===c||(i=s.charCodeAt(r+1))<56320||i>57343?e?s.charAt(r):n:e?s.slice(r,r+2):i-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"6a95":function(e,t,a){"use strict";a("fda7")},"8aa5":function(e,t,a){"use strict";var o=a("6547").charAt;e.exports=function(e,t,a){return t+(a?o(e,t).length:1)}},9263:function(e,t,a){"use strict";var o=a("ad6d"),l=a("9f7f"),n=RegExp.prototype.exec,i=String.prototype.replace,s=n,r=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=l.UNSUPPORTED_Y||l.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],m=r||u||c;m&&(s=function(e){var t,a,l,s,m=this,h=c&&m.sticky,p=o.call(m),d=m.source,b=0,f=e;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),f=String(e).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==e[m.lastIndex-1])&&(d="(?: "+d+")",f=" "+f,b++),a=new RegExp("^(?:"+d+")",p)),u&&(a=new RegExp("^"+d+"$(?!\\s)",p)),r&&(t=m.lastIndex),l=n.call(h?a:m,f),h?l?(l.input=l.input.slice(b),l[0]=l[0].slice(b),l.index=m.lastIndex,m.lastIndex+=l[0].length):m.lastIndex=0:r&&l&&(m.lastIndex=m.global?l.index+l[0].length:t),u&&l&&l.length>1&&i.call(l[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(l[s]=void 0)})),l}),e.exports=s},"9f7f":function(e,t,a){"use strict";var o=a("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=o((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=o((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,a){"use strict";var o=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&o((function(){a.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("订阅转换 "),a("svg-icon",{staticStyle:{"margin-left":"10px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),a("svg-icon",{staticStyle:{"margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),a("el-container",[a("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[a("el-form-item",{staticStyle:{display:"none"},attrs:{label:"模式设置:"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),a("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),a("el-form-item",{attrs:{label:"订阅链接:"}},[a("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),a("el-form-item",{attrs:{label:"客户端项:"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return a("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"后端地址:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入自己的后端"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return a("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"短链选择:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入其他可用短链API"},model:{value:e.form.shortType,callback:function(t){e.$set(e.form,"shortType",t)},expression:"form.shortType"}},e._l(e.options.shortTypes,(function(e,t){return a("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?a("div",[a("el-form-item",{attrs:{label:"远程配置:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return a("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),a("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),a("el-form-item",{attrs:{"label-width":"0px"}},[a("el-collapse",[a("el-collapse-item",[a("template",{slot:"title"},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"高级功能:"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"limr",icon:"el-icon-more-outline"}},[e._v("点击显示/隐藏")])],1)],1),a("el-form-item",{attrs:{label:"包含节点:"}},[a("el-input",{attrs:{placeholder:"要保留的节点，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),a("el-form-item",{attrs:{label:"排除节点:"}},[a("el-input",{attrs:{placeholder:"要排除的节点，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),a("el-form-item",{attrs:{label:"节点命名:"}},[a("el-input",{attrs:{placeholder:"举例：`香港@菲律宾``美国@巴西``台湾@俄罗斯`..."},model:{value:e.form.rename,callback:function(t){e.$set(e.form,"rename",t)},expression:"form.rename"}})],1),a("el-form-item",{attrs:{label:"订阅命名:"}},[a("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),a("el-form-item",{attrs:{"label-width":"0px"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",[a("el-checkbox",{staticStyle:{"margin-top":"5.9px"},attrs:{label:"仅输出节点信息",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),a("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"启用 TFO"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"插入节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"展开规则全文"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"Clash新字段名"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"跳过证书验证"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"过滤不支持节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1)],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1)],1)],1)],2)],1)],1)],1):e._e(),a("div",{staticStyle:{"margin-top":"30px"}}),a("el-divider",{attrs:{"content-position":"center"}},[a("i",{staticClass:"el-icon-magic-stick"})]),a("el-form-item",{attrs:{label:"定制订阅:"}},[a("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),a("el-form-item",{attrs:{label:"订阅短链:"}},[a("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),a("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),a("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),a("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传自定义配置")]),a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1),a("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[a("el-button",{staticStyle:{width:"250px"},attrs:{type:"warning",icon:"el-icon-video-play"},on:{click:e.gotovideo}},[e._v("测速视频")])],1),a("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[a("a",{staticStyle:{"text-decoration":"none",color:"#FFFFFF"},attrs:{href:"https://cdn.jsdelivr.net/gh/limr95/webcdn@1.3/dyzh.apk"}},[a("el-button",{staticStyle:{width:"250px"},attrs:{type:"success",icon:"el-icon-download"}},[e._v("Android客户端")])],1)])],1)],1)],1)])],1)],1),a("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[a("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),a("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[a("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),a("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),a("el-form",{attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{prop:"uploadConfig"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},l=[],n=(a("4de4"),a("c975"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),"https://github.com"),i="https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini",s="https://github.com/tindy2013/subconverter/releases",r="https://dyzh.jksaigao.ml/sub?",c="https://d1.mk/short",u="https://api.wcc.best/config/upload",m="https://google.com",h={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan","混合订阅（mixed）":"mixed","自动判断客户端":"auto"},shortTypes:{"v1.mk":"https://v1.mk/short","d1.mk":"https://d1.mk/short","dlj.tf":"https://dlj.tf/short","suo.yt":"https://suo.yt/short","sub.cm":"https://sub.cm/short"},customBackend:{"自建后端":"https://dyzh.jksaigao.ml/sub?","自建备用后端":"https://houduan.jkloliclub.tk/sub?","sub-web作者提供":"https://api.wcc.best/sub?","edison提供【国内】":"https://url.myue.cc/sub?","nameless13提供":"https://www.nameless13.com/sub?","subconverter作者提供":"https://subcon.dlj.tf/sub?","sub作者&lhie1提供":"https://api.dler.io/sub?","品云提供":"https://sub.id9.cc/sub?"},backendOptions:[{value:"https://dyzh.jksaigao.ml/sub?"},{value:"https://houduan.jkloliclub.tk/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://url.myue.cc/sub?"},{value:"https://www.nameless13.com/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"通用",options:[{label:"默认",value:"https://raw.githubusercontent.com/limr95/webcdn/main/rule/no-urltest.ini"},{label:"默认（自动测速）",value:"https://raw.githubusercontent.com/limr95/webcdn/main/rule/urltest.ini"},{label:"默认（分组超全）",value:"https://raw.githubusercontent.com/limr95/webcdn/main/rule/Area_Media_NoAuto.ini"},{label:"默认（分组超全+自动测速）",value:"https://raw.githubusercontent.com/limr95/webcdn/main/rule/Area_Media.ini"},{label:"默认（附带用于 Clash 的 AdGuard DNS）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/default_with_clash_adg.yml"}]},{label:"Meilieage大神的规则",options:[{label:"Meilieage_不带测速",value:"https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/Area_Media_NoAuto.ini"},{label:"Meilieage_带自动测速",value:"https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/Area_Media.ini"}]},{label:"ACL规则",options:[{label:"ACL_默认版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR.ini"},{label:"ACL_去广告版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_AdblockPlus.ini"},{label:"ACL_回国版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_BackCN.ini"},{label:"ACL_精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini.ini"},{label:"ACL_Fallback精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL_多模式精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_MultiMode.ini"},{label:"ACL_无测速精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL_无苹果版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoApple.ini"},{label:"ACL_无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto.ini"},{label:"ACL_无测速、苹果版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL_无测速、苹果、微软版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini"},{label:"ACL_无微软版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL_同步更新版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL_同步+去广告版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL_同步+全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL_同步+去广告+全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL_同步+谷歌+全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL_同步+多模式+全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL_同步+奈飞+全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL_同步+全分组+无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL_同步更新精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL_同步+去广告精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL_同步+Fallback精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL_同步+多国家精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL_同步+多模式精简版",value:"https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL_同步+无测速精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL_同步+无Reject版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL_白名单版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp.ini"},{label:"ACL_白名单+GFW列表版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp_WithGFW.ini"},{label:"ACL_GFW列表版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithGFW.ini"}]},{label:"全网搜集规则",options:[{label:"常规规则",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG.ini"},{label:"分区域故障转移",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Fallback.ini"},{label:"分区域自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Urltest.ini"},{label:"分区域无自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_NoAuto.ini"},{label:"OoHHHHHHH",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/config.ini"},{label:"CFW-TAP",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/cfw-tap.ini"},{label:"lhl77全分组（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-full.ini"},{label:"lhl77简易版（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-mini-gfw.ini"},{label:"ConnersHua 神机规则 Outbound",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_new.ini"},{label:"ConnersHua 神机规则 Inbound 回国专用",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"},{label:"lhie1 洞主规则（使用 Clash 分组规则）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"},{label:"lhie1 洞主规则完整版",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"},{label:"eHpo1 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/ehpo1_main.ini"},{label:"多策略组默认白名单模式",value:"https://raw.nameless13.com/api/public/dl/ROzQqi2S/white.ini"},{label:"多策略组可以有效减少审计触发",value:"https://raw.nameless13.com/api/public/dl/ptLeiO3S/mayinggfw.ini"},{label:"精简策略默认白名单",value:"https://raw.nameless13.com/api/public/dl/FWSh3dXz/easy3.ini"},{label:"多策略增加SMTP策略",value:"https://raw.nameless13.com/api/public/dl/L_-vxO7I/youtube.ini"},{label:"无策略入门推荐",value:"https://raw.nameless13.com/api/public/dl/zKF9vFbb/easy.ini"},{label:"无策略入门推荐国家分组",value:"https://raw.nameless13.com/api/public/dl/E69bzCaE/easy2.ini"},{label:"无策略仅IPIP CN + Final",value:"https://raw.nameless13.com/api/public/dl/XHr0miMg/ipip.ini"},{label:"无策略魅影vip分组",value:"https://raw.nameless13.com/api/public/dl/BBnfb5lD/MAYINGVIP.ini"},{label:"品云专属配置（仅香港区域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine.ini"},{label:"品云专属配置（全地域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine_Full.ini"},{label:"nzw9314 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/nzw9314_custom.ini"},{label:"maicoo-l 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/maicoo-l_custom.ini"},{label:"DlerCloud Platinum 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_platinum.ini"},{label:"DlerCloud Gold 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_gold.ini"},{label:"DlerCloud Silver 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_silver.ini"}]},{label:"各大机场规则",options:[{label:"希腊奶",value:"https://raw.githubusercontent.com/MegumiUUU/megumiclash/master/common.ini"},{label:"路飞船长",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Luffy_balance.ini"},{label:"CNIX",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SSRcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"w8ves",value:"https://raw.nameless13.com/api/public/dl/M-We_Fn7/w8ves.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"布丁",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/pud.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"贼船",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/zeichuan.ini"},{label:"N3RO",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/n3ro_optimized.ini"},{label:"Scholar",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/scholar_optimized.ini"},{label:"便利店",value:"https://subweb.oss-cn-hongkong.aliyuncs.com/RemoteConfig/customized/convenience.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"}]},{label:"特殊",options:[{label:"NeteaseUnblock",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"},{label:"CNIX-Meilieage",value:"https://raw.githubusercontent.com/9B6CuV8RgY/Rules/master/Clash/Ruleset/CNIX-Meilieage.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"https://dyzh.jksaigao.ml/sub?",shortType:"https://v1.mk/short",remoteConfig:"https://raw.githubusercontent.com/limr95/webcdn/main/rule/no-urltest.ini",excludeRemarks:"",includeRemarks:"",filename:"",rename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,expand:!0,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:m,sampleConfig:i}},created:function(){document.title="在线订阅转换工具",this.isPC=this.$getOS().isPc},mounted:function(){this.form.clientType="clash",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(n)},gotoTgChannel:function(){window.open(m)},gotoGayhub:function(){window.open(s)},gotoRemoteConfig:function(){window.open(i)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},gotovideo:function(){this.$alert("测速冲冲冲！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}).then((function(){var e="https://www.youtube.com/watch?v=linlz7-Pnvw";window.open(e)}))},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;if(-1!==this.form.sourceSubUrl.indexOf("losadhwse")&&-1!==this.form.customBackend.indexOf("api.wcc.best"))return this.$alert("薯条已将该后端屏蔽，请更换其他后端进行转换！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}),!1;var e=""===this.form.customBackend?r:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),""!==this.form.rename&&(this.customSubUrl+="&rename="+encodeURIComponent(this.form.rename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&expand="+this.form.expand.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;var t=""===this.form.shortType?c:this.form.shortType;this.loading=!0;var a=new FormData;a.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(t,a,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var a=this.options.backendOptions,o=e?a.filter(this.createFilter(e)):a;t(o)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(r.substring(0,r.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))}}},p=h,d=(a("6a95"),a("2877")),b=Object(d["a"])(p,o,l,!1,null,null,null);t["default"]=b.exports},ac1f:function(e,t,a){"use strict";var o=a("23e7"),l=a("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,a){"use strict";var o=a("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c975:function(e,t,a){"use strict";var o=a("23e7"),l=a("4d64").indexOf,n=a("a640"),i=a("ae40"),s=[].indexOf,r=!!s&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:r||!c||!u},{indexOf:function(e){return r?s.apply(this,arguments)||0:l(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,a){"use strict";a("ac1f");var o=a("6eeb"),l=a("d039"),n=a("b622"),i=a("9263"),s=a("9112"),r=n("species"),c=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),m=n("replace"),h=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),p=!l((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,m){var d=n(e),b=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=b&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[r]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return t=!0,null},a[d](""),!t}));if(!b||!f||"replace"===e&&(!c||!u||h)||"split"===e&&!p){var g=/./[d],S=a(d,""[e],(function(e,t,a,o,l){return t.exec===i?b&&!l?{done:!0,value:g.call(t,a,o)}:{done:!0,value:e.call(a,t,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),v=S[0],C=S[1];o(String.prototype,e,v),o(RegExp.prototype,d,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}m&&s(RegExp.prototype[d],"sham",!0)}},fda7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1b00f33d.a32dfbb1.js.map