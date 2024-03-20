import {Controller} from "/@/core/controller/Controller";
import {requestUserLogin} from "/@/core/models/aboutUser";
import {LoginQueryDTO} from "/@/core/dto/login/LoginQueryDTO";

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
			return await requestUserLogin(query);
		});
	}
}
