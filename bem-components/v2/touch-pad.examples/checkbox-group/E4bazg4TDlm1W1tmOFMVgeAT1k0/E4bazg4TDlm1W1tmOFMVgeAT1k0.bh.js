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
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/checkbox.bh.js"));
require("../../../common.blocks/checkbox/checkbox.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/__box/checkbox__box.bh.js"));
require("../../../common.blocks/checkbox/__box/checkbox__box.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/__control/checkbox__control.bh.js"));
require("../../../common.blocks/checkbox/__control/checkbox__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/button.bh.js"));
require("../../../common.blocks/button/button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/_focused/button_focused.bh.js"));
require("../../../common.blocks/button/_focused/button_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/__text/button__text.bh.js"));
require("../../../common.blocks/button/__text/button__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox-group/checkbox-group.bh.js"));
require("../../../common.blocks/checkbox-group/checkbox-group.bh.js")(bh);
module.exports = bh;