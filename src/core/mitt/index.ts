import mitt from "./mitt";

const emitter = mitt;

/**
 * 传递全局的EventBus信息
 *
 * @param event 事件类型
 * @param body 消息体
 */
export function emitMitt(event: string, body: any): void {
	emitter.emit(event, body);
}

/**
 * 接受全局的EventBus信息
 *
 * @param event 事件类型
 * @param callback 回调函数
 */
export function onMitt(event: string, callback: (body: any) => void): void {
	emitter.on(event, (body) => {
		callback(body);
	});
}

/**
 * 接受全局的所有的EventBus的信息
 *
 * @param callback 回调函数
 */
export function onAllMitt(callback: (type: string, body: any) => void): void {
	emitter.on("*", (type: string, body: any) => {
		callback(type, body);
	});
}


/**
 * 关闭全局的EventBus信息
 *
 * @param event 事件类型
 */
export function offMitt(event: string): void {
	emitter.off(event);
}

/**
 * 清空所有的EventBus信息
 */
export function clearMitt() {
	emitter.all.clear();
}
