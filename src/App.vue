<template>
	<c-constrained></c-constrained>
</template>
<script>
	import Base from '@app/example/wireframe/base.vue';
	import Constrained from '@app/example/wireframe/constrained.vue';
	export default {
		name: 'App',
		components: {
			'c-base': Base,
			'c-constrained': Constrained
		},
		data(){
			return;
		}
	}
</script>
<style scoped>
	* {
		background-color: #f00;
	}
</style>