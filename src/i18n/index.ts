import {createI18n} from "vue-i18n";
import {GLOBAL_LANG} from "../../build/constant";

import zhCN from "./zh_CN";
import enUS from "./en_US";

const i18n = createI18n({
	legacy: false,
	globalInjection: true, // 全局模式，可以直接使用 $t
	locale: GLOBAL_LANG || "zh",
	messages: {
		zh: zhCN,
		en: enUS
	}
});
export default i18n;
