import {AxiosError} from "axios";
import toast from "/@/core/utils/toast";
import {Result} from "/@/core/dto/Result";
import {useRouter, Router} from "vue-router";

/**
 * 系统控制器基类
 */
export abstract class Controller {
	/**
	 * 定义同步接口请求
	 *
	 * @param callback
	 */
	public static async async(callback: <T>(T?) => any) {
		const router: Router = useRouter();
		try {
			const response: Result = await callback();
			if (typeof response.data !== "undefined" && response.data) {
				return response.data;
			} else {
				toast.error("获取数据异常！");
				return undefined;
			}
		} catch (error: any) {
			const err: AxiosError = error;
			const info = err.message;
			if (typeof typeof err !== "undefined" && typeof err.response != "undefined") {
				const errResponse = err.response;
				const httpStatus = errResponse.status;
				// 跳转登录
				if (typeof httpStatus !== "undefined" && httpStatus === 401) {
					toast.error("未授权认证！");
					await router.push("/login");
					return;
				}
			}
			const message = "接口请求异常：'" + info + "'";
			toast.error(message);
		}
	}

	/**
	 * 定义异步接口请求
	 *
	 * @param callback 执行函数
	 * @param successCallback 成功回调
	 * @param errorCallback 失败回调
	 */
	public static sync(callback, successCallback?: <T>(T?) => any, errorCallback?: <T>(T?) => any) {
		const {push}: Router = useRouter();

		callback().then((response: Result) => {
			if (typeof response.data !== "undefined" && response.data) {
				if (successCallback != null) {
					successCallback(response.data);
				}
			} else {
				toast.error("获取数据异常！");
				if (errorCallback != null) {
					errorCallback();
				}
			}
		}).catch((err: AxiosError) => {
			const info = err.message;
			if (typeof typeof err !== "undefined" && typeof err.response != "undefined") {
				const errResponse = err.response;
				const httpStatus = errResponse.status;
				// 跳转登录
				if (typeof httpStatus !== "undefined" && httpStatus === 401) {
					toast.error("未授权认证！");
					push("/login");
					return;
				}
			}
			const message = "接口请求异常：'" + info + "'";
			toast.error(message);
		});
	}
}
