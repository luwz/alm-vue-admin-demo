import {Controller} from "/@/core/controller/Controller";
import {PostHttp} from "/@/core/api/http";

/**
 * 测试的查询规则
 */
interface TestQueryDTO {
	woIds: string
}

export class TestController extends Controller{
	/**
	 * 同步接口测试
	 *
	 * @param params 请求参数
	 */
	public static async asyncTestApi(params: TestQueryDTO) {
		const self = this;
		return await super.async(async () => {
			return await self.testRequest(params);
		});
	}

	/**
	 * 异步接口测试
	 *
	 * @param params 请求参数
	 * @param successCallback 成功回调函数
	 */
	public static testApi(params: TestQueryDTO, successCallback?: <T>(T) => void): void {
		super.sync(() => {
			return this.testRequest(params);
		}, successCallback);
	}

	/**
	 * 测试请求
	 *
	 * @param params 请求参数
	 */
	public static testRequest(params: TestQueryDTO) {
		return PostHttp("/api/test", params);
	}
}
