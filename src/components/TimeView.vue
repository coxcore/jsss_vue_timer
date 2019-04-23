<template>
    <div class="time">
        {{minuteStr}}:{{secondStr}}.{{tenMillisecondStr}}
    </div>
</template>

<script>
	export default {
		name: 'TimeView',
        props: {
			minute: Number,
			second: Number,
			tenMillisecond: Number,
        },
        methods: {
			disitNum(num) {
                if (num < 10) {
                	return "0" + num;
                } else {
                	return "" + num;
                }
            }
        },
        computed: {
			minuteStr() {
                return this.disitNum(this.minute);
            },
			secondStr() {
				return this.disitNum(this.second);
			},
			tenMillisecondStr() {
				return this.disitNum(this.tenMillisecond);
			},
        }
	};
</script>

<style scoped>
.time {
    font-size: 20vw;
    font-weight: bold;
}
</style>
