/**
 * 自定义 Less 插件
 * 文档参见 http://lesscss.org/features/#plugin-atrules-feature
 */

const DESIGN_WIDTH = 360; // 设计稿屏幕宽度 px
// 把 px 转换成 vw
function p2v(input) {
  const vw = 100 / DESIGN_WIDTH * input.value;
  // eslint-disable-next-line
  return new tree.Dimension(vw, 'vw');
}

module.exports = {
  install: function(less, pluginManager, functions) {
    functions.add('pi', function() {
      return Math.PI;
    });
    functions.add('p2v', p2v);
  }
};
