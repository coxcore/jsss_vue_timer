<template>
    <ul>
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
						this.laps[value - 1].isStop = true;

					this.laps.push({isStop: false, index: value + 1});
				} else {
					this.laps = [];
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        border-bottom: #DDD 1px solid;
        list-style: none;
        padding: 2vw;
        font-size: 6vw;
    }
</style>
