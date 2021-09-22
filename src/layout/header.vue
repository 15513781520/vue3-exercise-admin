<template>
	<div class="header-container">
		<h1>头部</h1>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "Header",
	});
</script>

<style lang="less" scoped>
	.header-container {
        width: 100%;
        height: 75px;
        background: pink;
	}
</style>
