<template>
<div class="files">
    <div class="img" v-if="type.includes('image')">
        <img :src="data.download_url"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
    <div class="video" v-else-if="type.includes('video')">
        <span class="play">
            <svg viewBox="0 0 1024 1024">
                <use xlink:href="#PDSArrowRightTriangle">
                    <svg id="PDSArrowRightTriangle" viewBox="0 0 1024 1024">
                        <path d="M689.066667 480l-196.266667-177.066667c-27.733333-25.6-70.4-6.4-70.4 32v356.266667c0 36.266667 44.8 55.466667 70.4 32l196.266667-177.066667c17.066667-19.2 17.066667-49.066667 0-66.133333z"></path>
                    </svg>
                </use>
            </svg>
        </span>
        <img :src="data.cover_url"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
    <div class="audio" v-else-if="type.includes('audio')">
        <img :src="require('../assets/audio.png')"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
    <div class="folder_img" v-else-if="type.includes('folder')">
        <img :src="require('../assets/folder.png')"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
    <div class="text" v-else-if="type.includes('text')">
        <img :src="require('../assets/folder.png')"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
    <div class="zip" v-else-if="type.includes('zip')">
        <img :src="require('../assets/zip.png')"/>
        <i class="el-icon-star-on" v-if="data.isCollection"></i>
    </div>
</div>
  
</template>

<script>
export default {
    props:{
        data:{
            required:true,
            type:Object
        }
    },
    computed:{
        type(){
            return this.data.type
        }
    }
}
</script>

<style lang="less" scoped>
.files{
    width: 100px;
    height: 100px;
    .img,.video,.audio,.folder_img,.text,.zip{
        width: 100px;
        height: 100px;
        text-align: center;
        position: relative;
        display: flex;  
        justify-content: center;  
        align-items: center;
        img{
            max-width: 100%;
            max-height: 100px;
        }
        .el-icon-star-on{
            position: absolute;
            right: -20px;top: 0px;
            color: gold;
            font-size: 25px;
        }
        
    }
    .video{
        position: relative;
        .play{
            z-index: 1;
            position: absolute;
            left: 50%;top: 50%;
            display: inline-block;
            width: 30px;height: 30px;
            border-radius: 50%;
            background-color: rgba(162,162,166,.9);
            transform: translate(-50%,-50%);
            svg{
                width: 30px;
                height: 30px;
                color:#fff;
                fill: currentColor;
                overflow: hidden;
            }
        }
    }
    
}

</style>