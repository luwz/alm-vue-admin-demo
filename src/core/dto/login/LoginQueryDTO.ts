export interface LoginQueryDTO {
	/**
	 * @var 用户名
	 */
	user: string,

	/**
	 * @var 密码
	 */
	password: string,

	/**
	 * @var 登录类型
	 */
	loginType?: string
}
