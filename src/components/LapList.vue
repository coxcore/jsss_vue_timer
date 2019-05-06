<template>
    <ul class="comp">
        <li class="LapListItem" v-for="lap in laps">
            <LapListItem :lap="lap"/>
        </li>
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
						{isPlay: true, index: value + 1},
						...this.laps,
					];
				} else {
					this.laps = [];
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
    .comp {
        border-top: #BBB 1px solid;
        padding: 0;

        li {
            border-bottom: #DDD 1px solid;
            list-style: none;
            padding: 2vw;
            font-size: 6vw;
        }
    }
</style>
