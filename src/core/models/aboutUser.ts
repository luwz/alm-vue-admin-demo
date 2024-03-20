import {LoginQueryDTO} from "/@/core/dto/login/LoginQueryDTO";
import {PostHttp} from "/@/core/api/http";
import {ApiConstants} from "/@/core/api/ApiConstants";

/**
 * 用户登录
 *
 * @param params
 */
export async function requestUserLogin(params: LoginQueryDTO) {
	return await PostHttp(ApiConstants.USER_LOGIN, params);
}
