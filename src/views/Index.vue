<template>
	<a-select
		ref="select"
		:value="theme"
		style="width: 200px; margin: 10px 0 0 10px;"
		@change="changeTheme"
	>
		<a-select-option value="theme-bright">
			明亮-默认
		</a-select-option>
		<a-select-option value="theme-bright-cyan">
			明亮-青
		</a-select-option>
		<a-select-option value="theme-bright-orange">
			明亮-橙
		</a-select-option>
		<a-select-option value="theme-bright-purple">
			明亮-紫
		</a-select-option>
		<a-select-option value="theme-dark">
			暗黑-默认
		</a-select-option>
		<a-select-option value="theme-dark-cyan">
			暗黑-青
		</a-select-option>
		<a-select-option value="theme-dark-orange">
			暗黑-橙
		</a-select-option>
		<a-select-option value="theme-dark-purple">
			暗黑-紫
		</a-select-option>
	</a-select>

	<div class="container" style="margin-top: 20px; border: 1px dashed #efefef; width: 100%; height: 100vh;">
		<div class="container-line">
			<a-button type="primary">
				Primary Button
			</a-button>
			<a-button>Default Button</a-button>
			<a-button type="dashed">
				Dashed Button
			</a-button>
			<a-button type="text">
				Text Button
			</a-button>
			<a-button type="link">
				Link Button
			</a-button>
		</div>

		<div class="container-line">
			<question-circle-outlined />
		</div>

		<div class="container-line">
			<a-breadcrumb>
				<a-breadcrumb-item>Home</a-breadcrumb-item>
				<a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
				<a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
				<a-breadcrumb-item>An Application</a-breadcrumb-item>
			</a-breadcrumb>
		</div>

		<div class="container-line">
			<a-dropdown>
				<a class="ant-dropdown-link" @click.prevent>
					Hover me
					<DownOutlined />
				</a>
				<template #overlay>
					<a-menu>
						<a-menu-item>
							<a href="javascript:;">1st menu item</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">2nd menu item</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">3rd menu item</a>
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
		</div>

		<div class="container-line">
			<a-checkbox>Checkbox</a-checkbox>
		</div>

		<div class="container-line">
			<a-date-picker />

			<a-range-picker />
		</div>

		<div class="container-line">
			<a-radio>Radio</a-radio>
		</div>

		<div class="container-line">
			<a-switch :checked="checked" @click="checked = !checked" />
		</div>

		<div class="container-line">
			<a-card title="Default size card" style="width: 300px">
				<template #extra>
					<a href="#">more</a>
				</template>
				<p>card content</p>
				<p>card content</p>
				<p>card content</p>
			</a-card>
		</div>

		<div class="container-line">
			<a-collapse active-key="1">
				<a-collapse-panel key="1" header="This is panel header 1">
					<p>111111111111</p>
				</a-collapse-panel>
				<a-collapse-panel key="2" header="This is panel header 2">
					<p>222222222222</p>
				</a-collapse-panel>
				<a-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
					<p>33333333333</p>
				</a-collapse-panel>
			</a-collapse>
		</div>

		<div class="container-line">
			<a-table :columns="tableColumns" :data-source="tableData"></a-table>
		</div>

		<div class="container-line">
			<a-list item-layout="horizontal" :data-source="listData">
				<template #renderItem="{ item }">
					<a-list-item>
						<a-list-item-meta
							description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						>
							<template #title>
								<a href="https://www.antdv.com/">{{ item.title }}</a>
							</template>
							<template #avatar>
								<!--<a-avatar src="https://joeschmoe.io/api/v1/random" />-->
							</template>
						</a-list-item-meta>
					</a-list-item>
				</template>
			</a-list>
		</div>

		<div class="container-line">
			<a-form
				name="basic"
				autocomplete="off"
			>
				<a-form-item
					label="Username"
					name="username"
					:rules="[{ required: true, message: 'Please input your username!' }]"
				>
					<a-input />
				</a-form-item>

				<a-form-item
					label="Password"
					name="password"
					:rules="[{ required: true, message: 'Please input your password!' }]"
				>
					<a-input-password />
				</a-form-item>

				<a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
					<a-checkbox>Remember me</a-checkbox>
				</a-form-item>

				<a-form-item :wrapper-col="{ offset: 8, span: 16 }">
					<a-button type="primary" html-type="submit">
						Submit
					</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {DownOutlined, QuestionCircleOutlined} from "@ant-design/icons-vue";
	import {toggleTheme} from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js";

	// 主题
	const theme = ref<string>("default");
	const checked = ref<boolean>(false);
	// 改变主题
	const changeTheme = (value: string) => {
		theme.value = value;

		// 改变主题
		toggleTheme({
			scopeName: value
		});
	};

	// 测试内容
	const listData = ref([
		{title: "Ant Design Title 1"},
		{title: "Ant Design Title 2"},
		{title: "Ant Design Title 3"},
		{title: "Ant Design Title 4"}
	]);

	const tableColumns = ref([
		{name: "Name", dataIndex: "name", key: "name"},
		{title: "Age", dataIndex: "age", key: "age"},
		{title: "Address", dataIndex: "address", key: "address"},
		{title: "Tags", key: "tags", dataIndex: "tags"}
	]);

	const tableData = ref([
		{
			key: "1",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"]
		},
		{
			key: "2",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"]
		},
		{
			key: "3",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"]
		}
	]);
</script>

<style lang="less" scoped>
	.container-line {
		padding: 10px;
	}
</style>
