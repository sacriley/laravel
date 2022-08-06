/* eslint-disable max-classes-per-file */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '@ckeditor/*' {
  const classes: any;
  export default classes;
}

declare class Vue {}

declare module '@vue/composition-api';

// declare var global: any;
declare var jquery: any;
declare var axios: any;
declare var _: any;
declare var Json: any;

declare namespace NodeJS {
  export interface Global {
    VueRouter: any;
    Vue: any;
    Vuex: any;
    Controller: any;
    Pusher: any;
    $: any;
  }

  // export interface Vue {}
}

// declare module '@fanswoo/core/helpers/Util' {
//   function assign(object, source): any;
//   function isEmpty(value: any): any;
//   function generateRandomString(num: number): any;
//   export { assign, isEmpty, generateRandomString };
// }

// declare module '@fanswoo/core/vue/*.vue' {
//   export default Vue;
// }

// declare module '@fanswoo/core/*' {
//   const ignoreAnyLocalPath: any;
//   export default ignoreAnyLocalPath;
// }

// declare module '@fanswoo/core' {
//   const classes: any;
//   export default classes;
// }

// declare module '@fanswoo/core/*' {
//   const classes: any;
//   export default classes;
// }
