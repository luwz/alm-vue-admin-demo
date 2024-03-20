/**
 * @introduction 封装统一的css配置
 */
export const createViteCss = () => {
	return {
		// 开启支持less文件的导入
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	};
};
