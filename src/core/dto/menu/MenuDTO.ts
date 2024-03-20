export interface MenuDTO {
	/**
	 * @var 标识
	 */
	key: string;

	/**
	 * @var 标题
	 */
	title: string;

	/**
	 * @var 图标
	 */
	icon?: any;

	/**
	 * @var 子菜单
	 */
	children?: MenuDTO[];
}
