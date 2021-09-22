<template>
	<el-menu
		:uniqueOpened="true"
		default-active="2"
		class="el-menu-vertical-demo sidebar-container"
		@open="handleOpen"
		@close="handleClose"
		background-color="#ffffff"
		text-color="#222"
		active-text-color="#ffd04b"
	>
		<el-menu-item class="logoContainer" index="logo" :route="{ path: '/' }">
			<img class="logo" src="@/assets/logo.png" alt="">
		</el-menu-item>
		<el-menu-item
			v-for="(menuItem, index) in menuItems"
			:key="index"
			:index="menuItem.name"
			@click="routeChange(menuItem)"
		>
			<i
				v-if="!menuItem.imgUrl"
				:class="`img-icon ${menuItem.icon}`"
				style="font-size: 16px"
			></i>
			<img
				v-if="menuItem.imgUrl"
				:src="menuItem.imgUrl"
				class="img-icon"
				alt=""
			/>
			<template #title>{{ menuItem.name }}</template>
		</el-menu-item>
		<template v-for="(subMenu, index) in subMenus" :key="index">
			<el-sub-menu :index="subMenu.name">
				<i v-if="!subMenu.imgUrl" :class="subMenu.icon"></i>
				<img
					v-if="subMenu.imgUrl"
					:src="subMenu.imgUrl"
					class="img-icon"
					alt=""
				/>
				<template #title>{{ subMenu.name }}</template>
				<Sidebar></Sidebar>
			</el-sub-menu>
		</template>
	</el-menu>
</template>

<script lang="ts">
	import { defineComponent, toRefs, reactive } from "vue";
	import { useRouter } from "vue-router";
	import { ElMenu, ElSubMenu, ElMenuItem } from "element-plus";
	import { MenuItem } from "@/config/interface";

	export default defineComponent({
		name: "Sidebar",
		components: {
			ElMenu,
			ElSubMenu,
			ElMenuItem,
		},
		props: {
			menu: {
        default: {},
      }
		},
		setup(props, context) {
			console.log(props, "asdasdsad");

			const menuConfig = reactive(props.menu);

			const router = useRouter();

			function routeChange(target: MenuItem) {
				router.push({
					path: target.path,
				});
			}

			return {
				...toRefs(menuConfig),
				routeChange,
			};
		},
	});
</script>

<style lang="less" scoped>
	.sidebar-container {
		min-width: 200px;

		.logoContainer {
			height: 76px;

      .logo {
        margin-top: 5px;
        width: 90px;
      }
		}

		.img-icon {
			width: 20px;
			height: 20px;
			margin-right: 4px;
      font-size: 20px !important;
		}
	}
</style>
