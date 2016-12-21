define("text!components/library/finder/form.component.html",[],function(){return'<quark-component>\n    <div class="row">\n        <div class="col-xs-12">\n            <form name="moduleSearch" data-bind="submit: model.search">\n                <div class="input-group">\n                    <input type="text" name="moduleName" class="form-control"\n                           placeholder="Find Modules..." data-bind="value: model.text" />\n\n                    <span class="input-group-btn">\n                        <button class="btn btn-primary" type="submit">\n                            &nbsp;\n                            <i class="glyphicon glyphicon-search"></i>\n                            &nbsp;\n                        </button>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</quark-component>\n'}),define("components/library/finder/form.component",["quark","knockout","text!./form.component.html"],function(n,r,e){function t(e,t,a){var o=this;n.parameters({text:r.observable(),onSearch:function(n){}},e,this),this.search=function(){n.call(o.onSearch,o.text())}}return n.component(t,e)}),define("text!components/library/finder/results.component.html",[],function(){return'<quark-component>\n    <!-- ko if: model.ajaxMessage -->\n        <h3 class="text-center" data-bind="text: model.ajaxMessage">\n        </h3>\n    <!-- /ko -->\n\n    <!-- ko foreach: model.data -->\n        <div class="row">\n            <div class="col-xs-12">\n                <h2>\n                    <a href="#" data-bind="text: name,\n                                           href: $parent.model.pageName,\n                                           params: { id: bowerId } ">\n                    </a>\n                    <small data-bind="name: author"></small>\n                </h2>\n                <p data-bind="text: description"></p>\n                <p>\n                    <small>\n                        <em>\n                            Version\n                            <span data-bind="text: version"></span>\n                        </em>\n                    </small>\n                </p>\n                <p data-bind="foreach: tags">\n                    <span class="label label-default" data-bind="text: $data">\n                    </span>\n                </p>\n            </div>\n        </div>\n        <hr />\n    <!-- /ko -->\n</quark-component>\n'}),define("components/library/finder/results.component",["quark","knockout","text!./results.component.html"],function(n,r,e){function t(e,t,a){n.parameters({data:r.observableArray(),pageName:r.observable(),ajaxMessage:r.observable()},e,this)}return n.component(t,e)}),define("text!screens/library/finder.screen.html",[],function(){return'<quark-component>\r\n    <h1>Search for Quark Modules</h1>\r\n\r\n    <library-finder-form params="text: model.text,\r\n                                 onSearch: model.onSearch">\r\n    </library-finder-form>\r\n\r\n    <library-finder-results params="ajaxMessage: model.ajaxMessage,\r\n                                    pageName: \'main/library/modules/module\',\r\n                                    data: model.data">\r\n    </library-finder-results>\r\n</quark-component>\r\n'}),define("screens/library/finder.screen",["quark","knockout","text!./finder.screen.html"],function(n,r,e){function t(e,t,a){n.parameters({text:r.observable(),onSearch:function(n){},ajaxMessage:r.observable(),data:r.observableArray()},e,this)}return n.component(t,e)}),define("text!screens/library/module.screen.html",[],function(){return'<quark-component>\r\n    <!-- ko with: model.module -->\r\n        <h1>\r\n            <span data-bind="text: name"></span>\r\n        </h1>\r\n        <hr/>\r\n        <span data-bind="text: description"></span>\r\n        <div class="col-sm-4 well pull-right">\r\n            <small>\r\n                <p>\r\n                    <strong>Version:</strong>\r\n                    <span data-bind="text: version"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Prefix:</strong>\r\n                    <span data-bind="text: prefix"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Author:</strong>\r\n                    <span data-bind="text: author"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Tags:</strong>\r\n                    <!-- ko foreach: tags -->\r\n                        <span class="label label-primary" data-bind="text: $data"></span>\r\n                    <!-- /ko -->\r\n                </p>\r\n            </small>\r\n        </div>\r\n    <!-- /ko -->\r\n</quark-component>\r\n'}),define("screens/library/module.screen",["quark","knockout","text!./module.screen.html"],function(n,r,e){function t(e,t,a){var o=this;n.parameters({module:r.observable()},e,this),t.componentNames=r.pureComputed(function(){var n=o.module(),r=new Array;if(n&&n.components)for(var e in n.components)r.push(e);return r})}return n.component(t,e)}),define("text!screens/library/component.screen.html",[],function(){return'<quark-component>\r\n    <div class="docs">\r\n        <small class="pull-right" data-bind="with: model.module">\r\n            <strong>Módulo:</strong>\r\n            <span data-bind="text: name"></span>\r\n            <br/>\r\n            <strong>Versión:</strong>\r\n            <span data-bind="text: version"></span>\r\n            <br/>\r\n            <strong>Prefijo:</strong>\r\n            <span data-bind="text: prefix"></span>\r\n        </small>\r\n\r\n        <h1 data-bind="text: model.componentName"></h1>\r\n        <hr />\r\n\r\n        <!-- ko if: model.component -->\r\n            <!-- ko if: model.component().allowContent -->\r\n                <div class="label label-primary pull-right">\r\n                    Admite Contenido\r\n                </div>\r\n            <!-- /ko -->\r\n\r\n            <p data-bind="text: model.component().description">\r\n            </p>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.properties().length > 0 -->\r\n            <h2>Propiedades</h2>\r\n            <hr/>\r\n            <table class="table table-condensed table-striped table-bordered">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Nombre\r\n                        </th>\r\n                        <th>\r\n                            Tipo\r\n                        </th>\r\n                        <th>\r\n                            Observable\r\n                        </th>\r\n                        <th>\r\n                            Descripción\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody data-bind="foreach: model.properties">\r\n                    <tr>\r\n                        <td>\r\n                            <code data-bind="text: name"></code>\r\n                        </td>\r\n                        <td>\r\n                            <em data-bind="text: type"></em>\r\n                        </td>\r\n                        <td>\r\n                            <!-- ko if: observable -->\r\n                            Si\r\n                            <!-- /ko -->\r\n                            <!-- ko ifnot: observable -->\r\n                            No\r\n                            <!-- /ko -->\r\n                        </td>\r\n                        <td data-bind="text: description"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.parameters().length > 0 -->\r\n            <h2>Parámetros</h2>\r\n            <hr/>\r\n            <table class="table table-condensed table-striped table-bordered">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Nombre\r\n                        </th>\r\n                        <th>\r\n                            Tipo\r\n                        </th>\r\n                        <th>\r\n                            Observable\r\n                        </th>\r\n                        <th>\r\n                            Descripción\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody data-bind="foreach: model.parameters">\r\n                    <tr>\r\n                        <td>\r\n                            <code data-bind="text: name"></code>\r\n                        </td>\r\n                        <td>\r\n                            <em data-bind="text: type"></em>\r\n                        </td>\r\n                        <td>\r\n                            <!-- ko if: observable -->\r\n                            Si\r\n                            <!-- /ko -->\r\n                            <!-- ko ifnot: observable -->\r\n                            No\r\n                            <!-- /ko -->\r\n                        </td>\r\n                        <td data-bind="text: description"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.methods().length > 0 -->\r\n            <h2>Métodos</h2>\r\n            <hr/>\r\n\r\n            <div data-bind="foreach: model.methods">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-body">\r\n                    <code class="lead" data-bind="text: signature"></code>\r\n\r\n                    <h3>Descripción</h3>\r\n                    <p data-bind="text: description">\r\n                    </p>\r\n\r\n                    <!-- ko if: parameters.length > 0 -->\r\n                        <h3>Parámetros</h3>\r\n                        <table class="table table-condensed table-striped table-bordered">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Nombre\r\n                                    </th>\r\n                                    <th>\r\n                                        Tipo\r\n                                    </th>\r\n                                    <th>\r\n                                        Descripción\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody data-bind="foreach: parameters">\r\n                                <tr>\r\n                                    <td>\r\n                                        <code data-bind="text: name"></code>\r\n                                    </td>\r\n                                    <td>\r\n                                        <em data-bind="text: type"></em>\r\n                                    </td>\r\n                                    <td data-bind="text: description"></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    <!-- /ko -->\r\n\r\n\r\n                    <h3>Devuelve</h3>\r\n                    <small>\r\n                        <strong>Tipo</strong>: <code data-bind="text: returns.type"></code>\r\n                    </small>\r\n                    <br/>\r\n                    <p data-bind="text: returns.description"></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</quark-component>\r\n'}),define("screens/library/component.screen",["quark","knockout","text!./component.screen.html"],function(n,r,e){function t(e,t,a){var o=this;n.parameters({module:r.observable(),componentName:r.observable()},e,this),this.component=r.pureComputed(function(){var n,r,e=o.module();return e&&(n=e.components,n&&(r=n[o.componentName()])),r}),this.properties=r.pureComputed(function(){var n=o.component(),r=new Array;if(n&&n.properties)for(var e in n.properties){var t=n.properties[e];r.push({name:e,type:t.type,observable:t.observable,description:t.description})}return r}),this.parameters=r.pureComputed(function(){var n=o.component(),r=new Array;if(n&&n.parameters)for(var e in n.parameters){var t=n.parameters[e];r.push({name:e,type:t.type,observable:t.observable,description:t.description})}return r}),this.methods=r.pureComputed(function(){var n=o.component(),r=new Array;if(n&&n.methods)for(var e in n.methods){var t=n.methods[e],a={name:e,signature:t.signature,description:t.description};if(t.parameters){a.parameters=new Array;for(var e in t.parameters){var s=t.parameters[e];a.parameters.push({name:e,type:s.type,description:s.description})}}t.returns&&(a.returns={type:t.returns.type,description:t.returns.description}),r.push(a)}return r})}return n.component(t,e)}),define("controllers/main/library.controller",["quark","knockout"],function(n,r){function e(){}return e}),define("app/config/services.config",[],function(){var n={api:"http://localhost:2403"};return{urls:{api:{modules:n.api+"/modules",components:n.api+"/components"}}}}),define("services/modules.service",["quark","knockout","app/config/services.config"],function(n,r,e){function t(){var t=this;this.ajaxMessage=r.observable(),this.search=function(r,a){t.ajaxMessage("Searching...");var o={name:{$regex:"["+r+"]"}};n.ajax(e.urls.api.modules,"GET",JSON.stringify(o),{onSuccess:function(n){a(n)},onComplete:function(){t.ajaxMessage("")}},!1,{cache:!0})},this.read=function(r,a){t.ajaxMessage("Loading...");var o=e.urls.api.modules+"?bowerId="+r;n.ajax(o,"GET",{},{onSuccess:function(r){n.isArray(r)?a(r[0]):a()},onComplete:function(){t.ajaxMessage("")}},!1,{cache:!0})},this.list=function(r){t.ajaxMessage("Loading..."),n.ajax(e.urls.api.modules,"GET",{},{onSuccess:function(n){r(n)},onComplete:function(){t.ajaxMessage("")}})}}return t}),define("controllers/main/library/finder.controller",["quark","knockout","services/modules.service"],function(n,r,e){function t(){var t=this;this.dataSource=new e,this.data=r.observable(),this.search=function(r){n.isDefined(t.dataSource)&&t.dataSource.search(r,function(n){t.data(n)})},this.sendParameters=function(n){switch(n){case"main":return{onSearch:t.search,ajaxMessage:t.dataSource.searchMessage,data:t.data}}}}return t}),define("controllers/main/library/modules.controller",["quark","knockout","services/modules.service"],function(n,r,e){function t(){function n(n){a.read(n,function(n){t.module(n)})}var t=this,a=new e;this.ajaxMessage=r.observable(),this.module=r.observable();var o;this.init=function(){n(t.params.id()),o={moduleId:t.params.id.subscribe(n)}},this.sendParameters=function(n){switch(n){case"sidebar":return{module:t.module,ajaxMessage:a.ajaxMessage}}},this.dispose=function(){o.moduleId.dispose()}}return t}),define("controllers/main/library/modules/component.controller",["quark","knockout"],function(n,r){function e(){var n=this;this.sendParameters=function(r){switch(r){case"main":return{module:n.parent.module,componentName:n.params.component}}}}return e}),define("controllers/main/library/modules/module.controller",["quark","knockout"],function(n,r){function e(){var n=this;this.sendParameters=function(r){switch(r){case"main":return{module:n.parent.module}}}}return e});
