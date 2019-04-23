<template>
    <div class="comp">
        <h1>{{ tit }}</h1>
        <TimeView/>
    </div>
</template>

<script>
import TimeView from './TimeView.vue'
export default {
    name: 'J3STimer',
    props: {
        tit: String
    },
	components: {
    	TimeView,
    }

};
</script>

<style lang="scss" scoped>
    .comp {
        margin: 0px;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 10px solid #999;

        h1 {
            font-size: 8vw;
        }
    }
</style>
