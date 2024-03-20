export interface LoginFormDTO {
	/**
	 * @var 用户名
	 */
	username: string,

	/**
	 * @var 密码
	 */
	password: string,

	/**
	 * @var 记住我
	 */
	remember?: boolean
}
