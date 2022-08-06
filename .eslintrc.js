module.exports = {
  extends: ['@fanswoo/workspace'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './resources/js'],
          ['@fanswoo/core', './node_modules/@fanswoo/core/src'],
          ['@fanswoo/ajax-submit', './node_modules/@fanswoo/ajax-submit/src'],
          [
            '@fanswoo/component-loader',
            './node_modules/@fanswoo/component-loader/src',
          ],
          [
            '@fanswoo/control-center',
            './node_modules/@fanswoo/control-center/src',
          ],
          ['@fanswoo/controller', './node_modules/@fanswoo/controller/src'],
          ['@fanswoo/embed', './node_modules/@fanswoo/embed/src'],
          ['@fanswoo/touch', './node_modules/@fanswoo/touch/src'],
          ['@fanswoo/message', './node_modules/@fanswoo/message/src'],
          ['@fanswoo/shop', './node_modules/@fanswoo/shop/src'],
          ['@fanswoo/html-editor', './node_modules/@fanswoo/html-editor/src'],
        ],
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
};
