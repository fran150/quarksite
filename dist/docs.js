define("text!components/code/highlight.component.html",[],function(){return'<quark-component>\n    <pre><code data-bind="content, css: languageClass, onBind: init"></code></pre>\n</quark-component>\n'});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,n=0,t=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var o in e)e.hasOwnProperty(o)&&(a[o]=t.util.clone(e[o]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var o in n)a[o]=n[o];return a},insertBefore:function(e,n,a,o){o=o||t.languages;var r=o[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(r[i]=a[i]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==n)for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i]);s[l]=r[l]}return t.languages.DFS(t.languages,function(n,t){t===o[e]&&n!=e&&(this[n]=s)}),o[e]=s},DFS:function(e,n,a,o){o=o||{};for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"!==t.util.type(e[r])||o[t.util.objId(e[r])]?"Array"!==t.util.type(e[r])||o[t.util.objId(e[r])]||(o[t.util.objId(e[r])]=!0,t.languages.DFS(e[r],n,r,o)):(o[t.util.objId(e[r])]=!0,t.languages.DFS(e[r],n,null,o)))}},plugins:{},highlightAll:function(e,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var o,r=a.elements||document.querySelectorAll(a.selector),i=0;o=r[i++];)t.highlightElement(o,e===!0,a.callback)},highlightElement:function(n,a,o){for(var r,i,s=n;s&&!e.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(e)||[,""])[1].toLowerCase(),i=t.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,s=n.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var l=n.textContent,c={element:n,language:r,grammar:i,code:l};if(t.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(c.element.textContent=c.code),void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),a&&_self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){c.highlightedCode=e.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(n),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(e,n,o){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),o)},tokenize:function(e,n,a){var o=t.Token,r=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],m=u.inside,p=!!u.lookbehind,d=!!u.greedy,g=0,f=u.alias;if(d&&!u.pattern.global){var h=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,h+"g")}u=u.pattern||u;for(var b=0,v=0;b<r.length;v+=r[b].length,++b){var k=r[b];if(r.length>e.length)break e;if(!(k instanceof o)){u.lastIndex=0;var x=u.exec(k),y=1;if(!x&&d&&b!=r.length-1){if(u.lastIndex=v,x=u.exec(e),!x)break;for(var w=x.index+(p?x[1].length:0),P=x.index+x[0].length,q=b,C=v,A=r.length;q<A&&C<P;++q)C+=r[q].length,w>=C&&(++b,v=C);if(r[b]instanceof o||r[q-1].greedy)continue;y=q-b,k=e.slice(v,C),x.index-=v}if(x){p&&(g=x[1].length);var w=x.index+g,x=x[0].slice(g),P=w+x.length,j=k.slice(0,w),E=k.slice(P),N=[b,y];j&&N.push(j);var _=new o(s,m?t.tokenize(x,m):x,f,x,d);N.push(_),E&&N.push(E),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var o,r=0;o=a[r++];)o(n)}}},a=t.Token=function(e,n,t,a,o){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length,this.greedy=!!o};if(a.stringify=function(e,n,o){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var r={type:e.type,content:a.stringify(e.content,n,o),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:o};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,i)}t.hooks.run("wrap",r);var s=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(s?" "+s:"")+">"+r.content+"</"+r.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,o=n.code,r=n.immediateClose;_self.postMessage(t.highlight(o,t.languages[a],a)),r&&_self.close()},!1),_self.Prism):_self.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(t.filename=o.src,document.addEventListener&&!o.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,a=n.getAttribute("data-src"),o=n,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;o&&!r.test(o.className);)o=o.parentNode;if(o&&(t=(n.className.match(r)||[,""])[1]),!t){var i=(a.match(/\.(\w+)$/)||[,""])[1];t=e[i]||i}var s=document.createElement("code");s.className="language-"+t,n.textContent="",s.textContent="Loading…",n.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,Prism.highlightElement(s)):l.status>=400?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}(),define("prism",function(){}),define("components/code/highlight.component",["quark","knockout","jquery","text!./highlight.component.html","prism","css!prism/themes/prism"],function(e,n,t,a){function o(t,a,o){var r=this;e.parameters({language:n.observable("javascript")},t,this),a.languageClass=n.pureComputed(function(){return"language-"+r.language()}),a.init=function(e){Prism.highlightElement(e),delete Prism}}return e.component(o,a)}),define("text!components/nav/next-prev.component.html",[],function(){return'<quark-component>\n    <hr />\n    <ul class="pager">\n        <!-- ko if: model.previousPage -->\n            <li class="previous">\n                <a data-bind="href: model.previousPage, vars: model.previousParams">\n                    <span aria-hidden="true">&larr;</span>\n                    <span data-bind="text: model.previousText"></span>\n                </a>\n            </li>\n        <!-- /ko -->\n        <!-- ko if: model.nextPage -->\n            <li class="next">\n                <a data-bind="href: model.nextPage, vars: model.nextParams">\n                    <span data-bind="text: model.nextText"></span>\n                    <span aria-hidden="true">&rarr;</span>\n                </a>\n            </li>\n        <!-- /ko -->\n    </ul>\n</quark-component>\n'}),define("components/nav/next-prev.component",["quark","knockout","text!./next-prev.component.html"],function(e,n,t){function a(t,a,o){e.parameters({previousText:n.observable(),previousPage:n.observable(),previousParams:n.observable(),nextText:n.observable(),nextPage:n.observable(),nextParams:n.observable()},t,this)}return e.component(a,t)}),define("text!components/example/component.component.html",[],function(){return'<quark-component>\n    Valor de obs: <span data-bind="text: model.obs"></span><br />\n    Valor de str: <span data-bind="text: model.str"></span><br />\n    Valor de num: <span data-bind="text: model.num"></span><br />\n</quark-component>\n'}),define("components/example/component.component",["quark","knockout","text!./component.component.html"],function(e,n,t){function a(t){e.parameters({obs:n.observable("Hola"),str:"Mundo",num:2016},t,this)}return e.component(a,t)}),define("text!components/example/other.component.html",[],function(){return'<quark-component>\n    Nombre: <input type="text" data-bind="value: model.nombre" />\n    <br />\n    <br />\n    <example-component params="obs: model.nombre" >\n    </example-component>\n</quark-component>\n'}),define("components/example/other.component",["quark","knockout","text!./other.component.html"],function(e,n,t){function a(e){this.nombre=n.observable("Pedro")}return e.component(a,t)}),define("text!components/example/scope.component.html",[],function(){return'<quark-component>\n    <span data-bind="text: model.texto, css: clase">\n    </span>\n</quark-component>\n'}),define("components/example/scope.component",["quark","knockout","text!./scope.component.html"],function(e,n,t){function a(t,a){var o=this;e.parameters({texto:n.observable(""),largoMaximo:n.observable(20)},t,this),a.clase=n.pureComputed(function(){var n=o.texto(),t=o.largoMaximo();return e.isString(n)&&n.length>t?"text-danger":""})}return e.component(a,t)}),define("text!components/example/validation.component.html",[],function(){return'<quark-component>\n    <div class="row">\n        <div class="col-sm-12 form-group" data-bind="formGroupError: model.item.codigo">\n            <label class="control-label">Código</label>\n            <input type="text" class="form-control" data-bind="value: model.item.codigo" />\n            <p data-bind="fieldError: model.item.codigo" class="text-danger"></p>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12 form-group" data-bind="formGroupError: model.item.nombre">\n            <label class="control-label">Nombre</label>\n            <input type="text" class="form-control" data-bind="value: model.item.nombre" />\n            <p data-bind="fieldError: model.item.nombre" class="text-danger"></p>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12 form-group" data-bind="formGroupError: model.item.descripcion">\n            <label class="control-label">Descripción</label>\n            <textarea class="form-control" data-bind="value: model.item.descripcion"></textarea>\n            <p data-bind="fieldError: model.item.descripcion" class="text-danger"></p>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12">\n            <button class="btn btn-default" data-bind="click: model.reset">Reset</button>\n            <button class="btn btn-primary" data-bind="click: model.save">Guardar</button>\n        </div>\n    </div>\n</quark-component>\n'}),define("components/example/validation.component",["quark","knockout","text!./validation.component.html"],function(e,n,t){function a(e,t,a){var o=this;this.item={codigo:n.observable().validation("Código",{required:{}}),nombre:n.observable().validation("Nombre Completo",{required:{}}),descripcion:n.observable().validation("Descripción",{required:{message:"Debe especificar una descripción"}})},this.save=function(){n.validate(o.item,!0)&&alert("Saved")},this.reset=function(){n.validationReset(o.item)},this.dispose=function(){n.unsubscribeValidation(o.item)}}return e.component(a,t)}),define("text!components/example/content-no-params.component.html",[],function(){return'<quark-component>\n    <div class="alert alert-danger" data-bind="content">\n    </div>\n</quark-component>\n'}),define("components/example/content-no-params.component",["quark","knockout","text!./content-no-params.component.html"],function(e,n,t){function a(e){}return e.component(a,t)}),define("text!components/example/content-params.component.html",[],function(){return'<quark-component>\n    <div class="panel panel-primary">\n        <div class="panel-heading" data-bind="content: \'bt-heading\'">\n        </div>\n        <div class="panel-body" data-bind="content: \'bt-body\'">\n        </div>\n    </div>\n</quark-component>\n'}),define("components/example/content-params.component",["quark","knockout","text!./content-params.component.html"],function(e,n,t){function a(e){}return e.component(a,t)}),define("text!components/static/content.component.html",[],function(){return'<quark-component>\n    <div class="staticContainer">\n    </div>\n</quark-component>\n'}),define("components/static/content.component",["quark","knockout","text!./content.component.html"],function(e,n,t){function a(t,a,o){function r(n){require(["text!"+n+".html"],function(n){e.replaceAndBind(".staticContainer",n,{}),window.scrollTo(0,0)})}var i=this;e.parameters({view:n.observable()},t,this);var s=i.view.subscribe(function(e){r(e)});o.initComponent=function(){r(i.view())},this.dispose=function(){s.dispose()}}return e.component(a,t)}),define("controllers/main/docs.controller",["quark","knockout"],function(e,n){function t(){var e=this;this.view=n.observable(),this.sendParameters=function(n){switch(n){case"main":return{view:e.view}}}}return t}),define("controllers/main/docs/static.controller",["quark","knockout"],function(e,n){function t(){var e=this;this.init=function(){e.parent.view(e.params.view())}}return t});
