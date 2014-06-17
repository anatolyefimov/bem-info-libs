function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
dropRequireCache(require, require.resolve("../../../node_modules/bh/lib/bh.js"));
var BH = require("../../../node_modules/bh/lib/bh.js");
var bh = new BH();
bh.setOptions({
jsAttrName: 'onclick',
jsAttrScheme: 'js'
})
dropRequireCache(require, require.resolve("../../../common.blocks/button/button.bh.js"));
require("../../../common.blocks/button/button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/_focused/button_focused.bh.js"));
require("../../../common.blocks/button/_focused/button_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/__text/button__text.bh.js"));
require("../../../common.blocks/button/__text/button__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/icon/icon.bh.js"));
require("../../../common.blocks/icon/icon.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__button/attach__button.bh.js"));
require("../../../common.blocks/attach/__button/attach__button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__control/attach__control.bh.js"));
require("../../../common.blocks/attach/__control/attach__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__no-file/attach__no-file.bh.js"));
require("../../../common.blocks/attach/__no-file/attach__no-file.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__file/attach__file.bh.js"));
require("../../../common.blocks/attach/__file/attach__file.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__text/attach__text.bh.js"));
require("../../../common.blocks/attach/__text/attach__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/__clear/attach__clear.bh.js"));
require("../../../common.blocks/attach/__clear/attach__clear.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/attach/attach.bh.js"));
require("../../../common.blocks/attach/attach.bh.js")(bh);
module.exports = bh;