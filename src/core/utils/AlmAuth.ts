import {useUserStore} from "/@/store/modules/user";

export class AlmAuth {
	/**
	 * 检查是否已经进行登录验证
	 */
	public static loggedIn(): boolean {
		const userStore = useUserStore();
		return !!((typeof userStore["accessToken"] !== "undefined" && userStore["accessToken"]) && (typeof userStore["accessExpire"] !== "undefined" && userStore["accessExpire"] > new Date().getTime()));
	}
}
