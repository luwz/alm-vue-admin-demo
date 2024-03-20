module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
		//使用setup语法糖
		"vue/setup-compiler-macros": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": "@typescript-eslint/parser",
		"ecmaVersion": "latest",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": false
		}
	},
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		// --- 这句不能少不然报错
		"vue/comment-directive": 0,
		// --- 强制执行自动关闭样式
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "never",
				"normal": "always",
				"component": "any"
			},
			"svg": "always",
			"math": "always"
		}],
		"vue/max-attributes-per-line": ["warn", {
			"singleline": {
				"max": 10
			},
			"multiline": {
				"max": 1
			}
		}],
		// typescript报错：Don‘t use `{}` as a type. `{}` actually means “any non-nullish value“
		"@typescript-eslint/ban-types": [
			"error",
			{
				"extendDefaults": true,
				"types": {
					"{}": false
				}
			}
		],
		// 意外将“this”别名为局部变量。
		"@typescript-eslint/no-this-alias": [
			"error",
			{
				// Disallow `const { props, state } = this`; true by default
				"allowDestructuring": false,
				// Allow `const self = this`; `[]` by default
				"allowedNames": ["self"]
			}
		],
		// --- 使用严格模式
		"strict": "error",
		// ---
		"no-irregular-whitespace": ["off", {"skipComments": true}],
		// --- 要求或禁止在注释前有空白 (space 或 tab) (spaced-comment)
		"spaced-comment": ["error", "always", {exceptions: ["*", "-", "+"]}],
		// --- 是否允许非空数组里面有多余的空格
		"array-bracket-spacing": ["error", "never"],
		// --- 箭头函数用小括号括起来
		"arrow-parens": "error",
		// --- =>的前/后括号
		"block-spacing": ["error", "always"],
		// --- 在对象中使用getter/setter
		"accessor-pairs": "off",
		// --- 块语句中使用var
		"block-scoped-var": "off",
		// --- 如果将此设置为 true，则规则将不报告用于缩进的 tab。
		"no-tabs": ["error", {allowIndentationTabs: true}],
		// --- space-before-function-paren有一个字符串选项never 禁止在参数的 ( 前面有空格。
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		// multi-or-nest: 如果 if、else if、else、for、while 和 do 的代码主体中只包含一条语句，你可以使用另外一个配置来强制省略大括号。同时在其他的情况下，强制使用大括号。
		// consistent: 当在使用任何 multi* 选项时，你可以添加一个参数来强制 if、else if 和 else 中所有的代码块使用或者不使用大括号。
		// --- if/else if/else .... 强制使用大括号
		"curly": "error",
		// --- 从而关闭类型判断(---增加类型判断)
		// "@typescript-eslint/no-inferrable-types": "off",
		// --- 关闭文件名必须使用多个单词的规则
		"vue/multi-word-component-names": "off",
		// --- 在开发期间允许控制台
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		// --- 在开发期间允许使用弹出框
		"no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
		// --- 在开发期间允许调试器
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		// --- 函数调用时 函数名与()之间不能有空格
		"no-spaced-func": "error",
		// --- 禁止修改const声明的变量
		"no-const-assign": "error",
		// --- 强制使用驼峰命名法
		"camelcase": "error",
		// --- 对象字面量项尾不能有逗号
		"comma-dangle": ["error", "never"],
		// --- 逗号前后的空格
		"comma-spacing": ["error", {"before": false, "after": true}],
		// --- 逗号风格，换行时在行首还是行尾
		"comma-style": ["error", "last"],
		// --- 是否允许计算后的键名什么的
		"computed-property-spacing": ["error", "never"],
		// --- 不能有未定义的变量
		"no-undef": "error",
		// --- 缩进必须是用tab
		// "indent": ["error", "tab"],
		"vue/script-indent": ["error", "tab", {"baseIndent": 1}],
		"vue/html-indent": ["error", "tab", {"baseIndent": 1}],
		// --- 回车换行必须使用unix风格
		"linebreak-style": ["error", "unix"],
		// --- 字符串必须使用双引号
		"quotes": ["error", "double", {"avoidEscape": true}],
		// --- 必须结尾加分号
		"semi": ["error", "always"],
		// --- switch语句最后必须有default
		"default-case": "error",
		// --- 对象字面量中冒号的前后空格
		"key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
		// --- 在创建对象字面量时不允许键重复 {a:"warn",a:"warn"}
		"no-dupe-keys": "error",
		// --- 函数参数不能重复
		"no-dupe-args": "error",
		// --- switch中的case标签不能重复
		"no-duplicate-case": "error",
		// --- 禁止非必要的括号 - 关闭
		"no-extra-parens": "off",
		// --- 禁止多余的冒号
		"no-extra-semi": "error",
		// --- 禁止重复的函数声明
		"no-func-assign": "error",
		// --- 禁止混用tab和空格
		"no-mixed-spaces-and-tabs": ["error", false],
		// --- 中缀操作符周围要不要有空格
		"space-infix-ops": "error",
		// --- 关闭any类型警告配置
		"@typescript-eslint/no-explicit-any": "off",
		// --- 不允许花括号中有空格
		"object-curly-spacing": ["error", "never"]
	}
};
