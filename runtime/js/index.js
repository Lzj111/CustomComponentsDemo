; (function () {
    // 内置组件(未编译)
    var MyVueWebComp = {
        props: ['msg'],
        template: `
            <div style="border: 3px dashed green; padding: 5px">
            I am my-vue-web-comp.<br>
            Value received via "msg" prop: {{ msg }}<br>
            <input v-model="text"><button @click="addText">Type something and click me</button>
            <div v-for="t in texts">
            Text: {{ t }}
            </div>
            <div>
            <p>我是vue Element 组件</p>
            </div>
            
            </div>
        `,
        data() {
            return {
                text: '',
                texts: [],
                visible: false

            };
        },
        methods: {
            addText() {
                this.texts.push(this.text);
                this.text = '';
            },
            show() {
                this.visible = true;
            }
        }
    };
    // 修改属性
    var ChangeProp = function (tagName, objParams) {
        var list = document.getElementsByTagName(tagName);
        if (!list || list.length == 0) return;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            // 修改元素值
            for (var key in objParams) {
                item[key] = objParams[key];
            }
        }
    }
    // 加载组件js
    var loadComponentJs = function (js, callback) {
        // js动态加载
        var script = document.createElement('script');
        script.src = js;
        document.documentElement.firstChild.appendChild(script);
        script.onload = () => {
            callback && callback();
        }
    }
    // 官方
    var vueWcWrapper = function () {
        loadComponentJs("./js/components/helloWorld.js", function () {
            var MyVueWebCompWarp = window.wrapVueWebComponent(Vue, MyVueWebComp);
            window.customElements.define('my-vue-web-comp', MyVueWebCompWarp);

            var singleprop = "123123",
                multprop = { a: 1 }
            helloWorld.default.props.singleprop.default = singleprop;
            helloWorld.default.props.multprop.default = multprop;
            var helloWorldWarp = window.wrapVueWebComponent(Vue, helloWorld.default);
            window.customElements.define('hello-world', helloWorldWarp);
        });
        loadComponentJs("./js/components/chartView.js", function () {
            var chartViewWarp = window.wrapVueWebComponent(Vue, chartView.default);
            window.customElements.define('chart-view', chartViewWarp);
        });

        var chartPreviewWarp = window.wrapVueWebComponent(Vue, ChartPreview.default);
        window.customElements.define('chart-view', chartPreviewWarp);
    }
    // vue-custom-element
    var vueCustomElement = function () {
        // 内置组件
        Vue.customElement('my-vue-web-comp', MyVueWebComp);
        // 外部注册
        // Vue.customElement('hello-world', helloWorld.default);
        loadComponentJs("./js/components/helloWorld.js", function () {
            var singleprop = "字符串",
                multprop = { code: "name", code: "name" }
            var domList = document.getElementsByTagName("hello-world");
            for (var i = 0; i < domList.length; i++) {
                var item = domList[i];
                item.singleprop = singleprop;
                item.multprop = multprop;
            }
            Vue.customElement('hello-world', helloWorld.default);
        });

        loadComponentJs("./js/components/chartView.js", function () {
            var name = "字符串",
                code = { wsf: "name", wsl: "name" }

            var domList = document.getElementsByTagName("chart-view");
            for (var i = 0; i < domList.length; i++) {
                var item = domList[i];
                // var item = document.querySelector('chart-view');
                item.name = name;
                item.code = code;
            }

            Vue.customElement('chart-view', chartView.default);
        });
        Vue.customElement('nesting-view', nestingView.default);

        // VUE_CLI编译导出的组件
        // loadComponentJs("./lib/vue.min.js", function () {
        //     loadComponentJs("./lib/vue-custom-element.js", function () {
        loadComponentJs("./js/components/ChartPreviewComponents.common.Vendors.min.js", function () {
            loadComponentJs("./js/components/ChartPreviewComponents.umd.min.js", function () {
                loadComponentJs("./js/components/ChartPreviewComponents.umd.min.Vendors.js", function () {
                    var data = {
                        id: "123456789",
                        params: { name: "张三", code: "2017271" }
                    }

                    ChangeProp("chart-preview", data);
                    Vue.customElement('chart-preview', ChartPreviewComponents);
                });
            });
        });
        //     });
        // });
    }
    vueCustomElement();
    // vueWcWrapper();
})();