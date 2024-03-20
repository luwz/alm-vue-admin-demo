import {MockMethod} from "vite-plugin-mock";
import {LoginResultDTO} from "/@/core/dto/login/LoginResultDTO";
import {UserConstants} from "../data/UserConstants";

export default [
	{
		url: "/mock/user/login",
		timeout: 200,
		method: "post",
		response: (request): LoginResultDTO | null => {
			if(request?.body.user === UserConstants.MOCK_USER && request?.body.password === UserConstants.MOCK_PASSWORD) {
				return {accessToken: UserConstants.MOCK_ACCESS_TOKEN, accessExpire: new Date().getTime() + 12 * 3600 * 1000};
			}

			return {accessToken: null, accessExpire: 0};
		}
	}
] as MockMethod[];
