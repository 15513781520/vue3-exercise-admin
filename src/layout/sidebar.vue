<template>
	<el-menu
		:uniqueOpened="true"
		default-active="2"
		class="el-menu-vertical-demo sidebar-container"
		@open="handleOpen"
		@close="handleClose"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
	>
		<el-menu-item v-for="(menuItem, index) in menuItems" :key="index" :index="menuItem.name" @click="routeChange(menuItem)">
			<i v-if="!menuItem.imgUrl" :class="`img-icon ${menuItem.icon}`" style="font-size: 16px"></i>
			<img v-if="menuItem.imgUrl" :src="menuItem.imgUrl" class="img-icon" alt="">
			<template #title>{{menuItem.name}}</template>
		</el-menu-item>
		<template v-for="(subMenu, index) in subMenus" :key="index">
			<el-sub-menu :index="subMenu.name">
				<i v-if="!subMenu.imgUrl" :class="subMenu.icon"></i>
				<img v-if="subMenu.imgUrl" :src="subMenu.imgUrl" class="img-icon" alt="">
				<template #title>{{subMenu.name}}</template>
			</el-sub-menu>
		</template>
	</el-menu>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from "vue";
	import { useRouter } from 'vue-router';
	import { ElMenu, ElSubMenu, ElMenuItem } from "element-plus";
	import { menu } from '@/config/menu';
	import { MenuItem } from '@/config/interface';

	export default defineComponent({
		name: "Sidebar",
		components: {
			ElMenu,
            ElSubMenu,
            ElMenuItem,
		},
		setup(props, context) {
			const menuConfig = reactive(menu || {});

			const router = useRouter();

			function routeChange(target: MenuItem) {
				router.push({
					path: target.path,
				})
			}

			return {
				...toRefs(menuConfig),
				routeChange,
			}
		}
	});
</script>

<style lang="less" scoped>
	.sidebar-container {
		min-width: 200px;

		img-icon {
			display: inline-block;
			width: 20px;
			height: 20px;
			margin-right: 4px;
		}

	}
</style>
