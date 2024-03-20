import {Controller} from "/@/core/controller/Controller";
import {LoginQueryDTO} from "/@/core/dto/login/LoginQueryDTO";
import {PostHttp} from "/@/core/api/http";
import {ApiConstants} from "/@/core/api/ApiConstants";
export class UserController extends Controller{
	/**
	 * 用户登录
	 *
	 * @param username 用户名
	 * @param password 密码
	 */
	public static async userLogin(username: string, password: string): Promise<any> {
		return await super.async(async () => {
			const query: LoginQueryDTO = {user: username, password: password};
			return await PostHttp(ApiConstants.USER_LOGIN, query);
		});
	}
}
