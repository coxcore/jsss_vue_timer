<template>
    <span :class="isRoot ? 'time' : ''">
        {{minuteStr}}:{{secondStr}}.{{tenMillisecondStr}}
    </span>
</template>

<script>
	export default {
		name: 'TimeView',
		props: {
			isStop: Boolean,
			isReset: Boolean,
			isRoot: Boolean,
		},
		data() {
			return {
				minute: 0,
				second: 0,
				tenMillisecond: 0,
				timer: null,
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
			startTimer() {
				this.timer = setInterval(() => {
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
			},
			stopTimer() {
				clearInterval(this.timer);
				this.timer = null;
			},
			resetTimer() {
				this.tenMillisecond = 0;
				this.second = 0;
				this.minute = 0;
			},
		},
		watch: {
			isStop(value) {
				if (value) {
					this.stopTimer();
				} else {
					this.startTimer();
				}
			},
			isReset(value) {
				if (value) {
					this.resetTimer();
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
		created() {
			if (!this.isStop) {
				this.startTimer();
			}
		},
	};
</script>

<style scoped>
    .time {
        font-size: 20vw;
        font-weight: bold;
    }
</style>
