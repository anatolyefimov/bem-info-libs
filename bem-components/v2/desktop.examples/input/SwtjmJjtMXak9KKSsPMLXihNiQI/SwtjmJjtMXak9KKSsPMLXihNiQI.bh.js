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
dropRequireCache(require, require.resolve("../../../common.blocks/input/__box/input__box.bh.js"));
require("../../../common.blocks/input/__box/input__box.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/__control/input__control.bh.js"));
require("../../../common.blocks/input/__control/input__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/__clear/input__clear.bh.js"));
require("../../../common.blocks/input/__clear/input__clear.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/input.bh.js"));
require("../../../common.blocks/input/input.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/_has-clear/input_has-clear.bh.js"));
require("../../../common.blocks/input/_has-clear/input_has-clear.bh.js")(bh);
module.exports = bh;