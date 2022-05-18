//  1、这里导入需要导出的组件，统一处理
import HelloWorld from '../components/HelloWorld/helloWord.vue';
const components = [
  HelloWorld
];
components.forEach(component => {
  //  书写Vue插件（保证只引入某一个组件时可用），https://cn.vuejs.org/v2/guide/plugins.html
  component.install = (Vue) => {
    Vue.component(component.name, component);
  };
});

//  2、遍历注册所有的组件（依赖），全局时使用
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
//      可以根据实际情况，是否需要这段代码（CDN引入，便可使用所有组件）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
//  3、导出类库的版本、组件、Vue插件需要暴露的install方法
export default{
  HelloWorld
};