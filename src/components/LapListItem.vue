<template>
    <div class="comp" ref="comp">
        <span class="label">Lap {{lap.index}}</span>
        <TimeView :isStop="lap.isStop" style="float: right; margin-right: 4vw"/>
    </div>
</template>

<script>
	import TimeView from './TimeView.vue';

	export default {
		name: 'LapListItem',
		props: {
			lap: {
				index: Number,
				isStop: Boolean,
			},
		},
		components: {
			TimeView,
		},
	};
</script>

<style lang="scss">
    .comp {
        text-align: left;
        font-size: 6vw;
    }

    .label {
        margin-left: 4vw;
    }
</style>
