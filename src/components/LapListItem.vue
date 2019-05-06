<template>
    <li class="LapListItem">
        <span>Lap</span>
    </li>
</template>

<script>
	export default {
		name: 'LapListItem',
		props: {
			lap: Object,
		},
	};
</script>

<style>
    .LapListItem {
        border-bottom: #DDD 1px solid;
        list-style: none;
        padding: 2vw;
        font-size: 6vw;
    }

</style>
