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
			digitNum(num) {
                if (num < 10) {
                	return "0" + num;
                } else {
                	return "" + num;
                }
            }
        },
        computed: {
			minuteStr() {
                return this.digitNum(this.minute);
            },
			secondStr() {
				return this.digitNum(this.second);
			},
			tenMillisecondStr() {
				return this.digitNum(this.tenMillisecond);
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
