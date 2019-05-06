<template>
    <div class="time">
        {{minuteStr}}:{{secondStr}}.{{tenMillisecondStr}}
    </div>
</template>

<script>
	let timer;
	export default {
		name: 'TimeView',
		props: {
			isStop: Boolean,
			isReset: Boolean,
		},
		data() {
			return {
				minute: 0,
				second: 0,
				tenMillisecond: 0,
			};
		},
		methods: {
			digitNum(num) {
				if (num < 10) {
					return '0' + num;
				} else {
					return '' + num;
				}
			},
		},
		watch: {
			isStop(value) {
				if (value) {
					clearInterval(timer);
					timer = null;
				} else {
					timer = setInterval(() => {
						if (this.tenMillisecond === 99) {
							this.tenMillisecond = 0;
							if (this.second === 59) {
								this.second = 0;
								this.minute++;
							} else {
								this.second++;
							}
						} else {
							this.tenMillisecond++;
						}
					}, 10);
				}
			},
			isReset(value) {
				if (value) {
					this.tenMillisecond = 0;
					this.second = 0;
					this.minute = 0;
				}
			},
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
		},
	};
</script>

<style scoped>
    .time {
        font-size: 20vw;
        font-weight: bold;
    }
</style>
