<template>
    <ul class="comp">
        <LapListItem v-for="lap in laps"/>
    </ul>
</template>

<script>
	import LapListItem from './LapListItem.vue';

	export default {
		name: 'LapList',
		props: {
			lapIndex: Number,
		},
		data() {
			return {
				laps: [],
			};
		},
		components: {
			LapListItem,
		},
		watch: {
			lapIndex(value) {
				if (value > -1) {
					if (value !== 0)
						this.laps[0].isPlay = false;

					this.laps = [
						{isPlay: true, index: value},
						...this.laps,
					];
				} else {
					this.laps = [];
				}
			},
		},
	};
</script>

<style scoped>
    .comp {
        border-top: #BBB 1px solid;
        padding: 0;
    }
</style>
