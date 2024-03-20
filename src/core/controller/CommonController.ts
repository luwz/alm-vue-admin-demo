import {Controller} from "/@/core/controller/Controller";
import {GetHttp} from "/@/core/api/http";
import {ApiConstants} from "/@/core/api/ApiConstants";

export class CommonController extends Controller {
	/**
	 * 获取菜单项的配置信息
	 */
	public static async menus(): Promise<any> {
		return await super.async(async () => {
			return await GetHttp(ApiConstants.MENUS);
		});
	}
}
