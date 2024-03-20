/**
 * 系统的工具方法
 */
export class AlmUtils {
	/**
	 * 获取参数
	 *
	 * @param name string 参数名称
	 */
	public static getQueryString(name: string): string | null {
		const href: string = window.location.href;
		if (href.indexOf("?") > 0) {
			const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			const r = href.substring(href.indexOf("?") + 1).match(reg);
			if (r !== null) {
				return decodeURI(r[2]);
			}
		}

		return null;
	}

	/**
	 * 获取屏幕的宽度
	 *
	 * @return {number}
	 */
	public static getScreenWidth(): number {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}

	/**
	 * 检查Value对象值
	 *
	 * @param value 检查值
	 * @param defaultValue 默认值
	 */
	public static checkValue(value: any, defaultValue?: any): any {
		if (typeof value !== "undefined" && value) {
			return value;
		}

		if (typeof defaultValue !== "undefined") {
			return defaultValue;
		}

		return null;
	}

	/**
	 * 检查字符是否为中文字符
	 *
	 * @param str 字符串
	 * @returns {boolean}
	 */
	public static isChinaIcon(str: string): boolean {
		return escape(str).indexOf("%u") >= 0;
	}

	/**
	 * 检查页面的请求的来源
	 */
	public static checkPageSource(): string {
		const os = function () {
			const ua = navigator.userAgent,
				isWindowsPhone = /(?:Windows Phone)/.test(ua),
				isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
				isAndroid = /(?:Android)/.test(ua),
				isFireFox = /(?:Firefox)/.test(ua),
				isChrome = /(?:Chrome|CriOS)/.test(ua),
				isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
				isPhone = /(?:iPhone)/.test(ua) && !isTablet,
				isPc = !isPhone && !isAndroid && !isSymbian;
			return {
				isTablet: isTablet,
				isPhone: isPhone,
				isAndroid: isAndroid,
				isPc: isPc,
				isChrome: isChrome
			};
		}();

		if (os.isAndroid || os.isPhone) {
			// 手机
			return "phone";
		} else if (os.isTablet) {
			// 平板
			return "pad";
		} else if (os.isPc) {
			// 电脑
			return "pc";
		}

		return "";
	}

	/**
	 * 首字母大写
	 *
	 * @param value 字符串
	 * @returns {string}
	 */
	public static formatFirstChatUpper(value: string): string {
		return value.substring(0, 1).toUpperCase() + value.substring(1);
	}

	/**
	 * 首字母小写
	 *
	 * @param value 字符串
	 * @returns {string}
	 */
	public static formatFirstChatLower(value: string): string {
		return value.substring(0, 1).toLowerCase() + value.substring(1);
	}

	/**
	 * 字符串中划线转驼峰 + 首字母大写
	 *
	 * @param value 字符串
	 * @returns {*}
	 */
	public static formatCenterLineToHump(value: string): string {
		const v = value.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
		return this.formatFirstChatUpper(v);
	}

	/**
	 * 驼峰转中划线 + 首字母小写
	 *
	 * @param value 字符串
	 * @returns {*}
	 */
	public static formatHumpToCenterLine(value: string): string {
		const v = this.formatFirstChatLower(value);
		return v.replace(/([A-Z])/g, "-$1").toLowerCase();
	}

	/**
	 * 字符串下划线转驼峰
	 *
	 * @param value returns
	 * @returns {*}
	 */
	public static formatUnderlineToHump(value: string): string {
		return value.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
	}

	/**
	 * 字符串转驼峰下划线
	 *
	 * @param value returns
	 * @returns {*}
	 */
	public static formatHumpToUnderline(value: string): string {
		const v = this.formatFirstChatLower(value);
		return v.replace(/([A-Z])/g, "_$1").toLowerCase();
	}

	/**
	 * 深度克隆
	 *
	 * @param obj 克隆对象
	 */
	public static deepClone(obj: any) {
		const result = typeof obj.splice === "function" ? [] : {};
		if (obj && typeof obj === "object") {
			for (const key in obj) {
				if (obj[key] && typeof obj[key] === "object") {
					// 如果对象的属性值为object的时候，递归调用deepClone，即再把某个值对象复制一份到新的对象的对应值中
					result[key] = AlmUtils.deepClone(obj[key]);
				} else {
					// 如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
					result[key] = obj[key];
				}
			}

			return result;
		}

		return obj;
	}
}
