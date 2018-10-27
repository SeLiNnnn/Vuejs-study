<template>
    <div class="mb">
        <head-nav title="图片详情"></head-nav>
        <div class="photoImgs">
            <img class="preview-img" height="300" :key="index"  v-for="(item,index) in picList"  :src="item.picUrl"  @click="$preview.open(index,picList)" v-lazy="item.picUrl"  />
        </div>
    </div>
</template>

<script>
    import 'photoswipe/dist/photoswipe.css'
    export default {
        data() {
            return {
                picList:[]
            }
        },
        created(){

        },
        methods:{
            async handleClose(data){
                data.forEach((ele)=>{
                    ele.w = 300;
                    ele.h = 300;
                    ele.msrc = ele.picUrl
                })
                this.picList = data;

            }
        }
    }
</script>

<style lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .photoImgs{
        padding:40/@rem 40/@rem 0;
        background: white;
        position: relative;
        img{
            display: block;
            width: 670/@rem;
            margin-bottom: 30/@rem;
            object-fit:cover;
        }
    }
</style>
