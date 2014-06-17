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
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/ua/ua.bh.js"));
require("../../../libs/bem-core/common.blocks/ua/ua.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu-item/menu-item.bh.js"));
require("../../../common.blocks/menu-item/menu-item.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/__group/menu__group.bh.js"));
require("../../../common.blocks/menu/__group/menu__group.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/__group-title/menu__group-title.bh.js"));
require("../../../common.blocks/menu/__group-title/menu__group-title.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/menu.bh.js"));
require("../../../common.blocks/menu/menu.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/_focused/menu_focused.bh.js"));
require("../../../common.blocks/menu/_focused/menu_focused.bh.js")(bh);
module.exports = bh;