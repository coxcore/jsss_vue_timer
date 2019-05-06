<template>
    <sapn class="LapListItem">
        <span class="label">Lap {{lap.index}}</span>
    </sapn>
</template>

<script>
	export default {
		name: 'LapListItem',
		props: {
			lap: Object,
		},
	};
</script>

<style lang="scss">
    .LapListItem {
        text-align: left;

        .label {
            margin-left: 4vw;
            /*float: left;*/
        }
    }
</style>
