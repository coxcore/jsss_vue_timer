<template>
    <ul>
        <li v-for="(lap, index) in laps" :style="{top: 14 * (laps.length - index - 1) + 'vw'}">
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
			isStop: Boolean,
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
			isStop(value) {
				if (this.laps.length)
					this.laps[this.laps.length - 1].isStop = value;
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
        position: absolute;
        width: 100%;
        border-bottom: #DDD 1px solid;
        list-style: none;
        padding: 2vw;
        font-size: 6vw;
        transition-property: top;
        transition-duration: 0.3s;
        animation-duration: 0.3s;
        animation-name: slidein;
    }

    @keyframes slidein {
        from {
            margin-top: -14vw;
        }

        to {
            margin-top: 0;
        }
    }
</style>
