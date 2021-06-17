import Vue from 'vue';

Vue.directive('click-outside', {
  priority: 700,
  bind (el, data, vm) {
    data.def.event = () => {
      vm.context[data.expression]();
    };
    el.addEventListener('click', data.def.stopProp);
    document.body.addEventListener('click', data.def.event);
  },
  unbind (el, data) {
    el.removeEventListener('click', data.def.stopProp);
    document.body.removeEventListener('click', data.def.event);
  },
  stopProp (event) {
    event.stopPropagation();
  },
});
