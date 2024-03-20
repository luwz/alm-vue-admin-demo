import i18n from "/@/i18n";

/**
 * 注册全局的语言翻译方法
 *
 * @param name
 */
export function gT(name: string) {
	return i18n.global.t(name);
}
