<template>
    <div class="time">
        {{time}}
    </div>
</template>

<script>
	export default {
		name: 'TimeView',
        data: () => ({
			tenMillisecond: 0,
			second: 0,
            minute: 0,
            time: "00:00:00",
        }),
        methods: {
			start() {
				setInterval(() => {
					this.tenMillisecond++;
                }, 10);
            },
        }
	};
</script>

<style scoped>
.time {
    font-size: 16vw;
    font-weight: bold;
}
</style>
