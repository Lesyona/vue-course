export default {
  install(Vue){
    if(this.installed) {
      return;
    }
    this.installed = true;
    this.caller = null;

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show(name, settings) {
        if (name !== this.caller){
          this.caller = name;
          this.EventBus.$emit('show', {name, ...settings})
        } else {
          this.hide();
        }
      },
      hide() {
        this.caller = null;
        this.EventBus.$emit('hide');
      }
    }
  }
}