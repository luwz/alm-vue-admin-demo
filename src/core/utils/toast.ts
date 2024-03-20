import {message} from "ant-design-vue";

// 消息配置
message.config({
	duration: 1.5,                              // 自动关闭前的时间，以秒为单位
	maxCount: 3                                 // 最大消息显示，如果超过限制，则降旧
});

/**
 * 提示操作成功的消息
 *
 * @param content 提示内容
 * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param callback 关闭时触发的回调函数
 */
function success(content: string, duration?: number, callback?: () => void): void {
	message.success(content, duration, callback);
}

/**
 * 提示操作失败的消息
 *
 * @param content 提示内容
 * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param callback 关闭时触发的回调函数
 */
function error(content: string, duration?: number, callback?: () => void): void {
	message.error(content, duration, callback);
}

/**
 * 提示警告的消息
 *
 * @param content 提示内容
 * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param callback 关闭时触发的回调函数
 */
function warning(content: string, duration?: number, callback?: () => void): void {
	message.warning(content, duration, callback);
}

/**
 * 提示信息的消息
 *
 * @param content 提示内容
 * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param callback 关闭时触发的回调函数
 */
function info(content: string, duration?: number, callback?: () => void): void {
	message.info(content, duration, callback);
}

/**
 * 提示加载中的消息
 *
 * @param content 提示内容
 * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param callback 关闭时触发的回调函数
 */
function loading(content: string, duration?: number, callback?: () => void): void {
	message.loading(content, duration, callback);
}

export default {
	success,
	error,
	warning,
	info,
	loading
};
