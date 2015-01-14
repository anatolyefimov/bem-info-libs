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
   jsAttrName: 'data-bem',
   jsAttrScheme: 'json'
});

dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/page.bh.js"));
require("../../../libs/bem-core/common.blocks/page/page.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/desktop.blocks/page/page.bh.js"));
require("../../../libs/bem-core/desktop.blocks/page/page.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/ua/ua.bh.js"));
require("../../../libs/bem-core/common.blocks/ua/ua.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/__css/page__css.bh.js"));
require("../../../libs/bem-core/common.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js"));
require("../../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/__js/page__js.bh.js"));
require("../../../libs/bem-core/common.blocks/page/__js/page__js.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/ua/__svg/ua__svg.bh.js"));
require("../../../libs/bem-core/common.blocks/ua/__svg/ua__svg.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/dropdown/dropdown.bh.js"));
require("../../../common.blocks/dropdown/dropdown.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/dropdown/__switcher/dropdown__switcher.bh.js"));
require("../../../common.blocks/dropdown/__switcher/dropdown__switcher.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/popup/popup.bh.js"));
require("../../../common.blocks/popup/popup.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/dropdown/_switcher/dropdown_switcher_button.bh.js"));
require("../../../common.blocks/dropdown/_switcher/dropdown_switcher_button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/button.bh.js"));
require("../../../common.blocks/button/button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/__text/button__text.bh.js"));
require("../../../common.blocks/button/__text/button__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/_focused/button_focused.bh.js"));
require("../../../common.blocks/button/_focused/button_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/dropdown/_switcher/dropdown_switcher_link.bh.js"));
require("../../../common.blocks/dropdown/_switcher/dropdown_switcher_link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/link/link.bh.js"));
require("../../../common.blocks/link/link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/link/_pseudo/link_pseudo.bh.js"));
require("../../../common.blocks/link/_pseudo/link_pseudo.bh.js")(bh);

module.exports = bh;