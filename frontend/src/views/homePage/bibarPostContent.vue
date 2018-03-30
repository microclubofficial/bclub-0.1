<template>
    <div v-show="!isHide">
        <div class="avatar"><img src="../../assets/img/pic-user1.png" alt=""></div>
        <div ref="editor" style="text-align:left" class='editor'></div>
        <button @click="getContent" class="report btn">发布</button>
        <button class="cancel" @click="isHideFun">取消</button>
        <!-- <div>{{backData}}</div> -->
    </div>
</template>

<script>
import E from 'wangeditor'
import {post} from '../../utils/http'

export default {
  props: ['contentId'],
  name: 'editor',
  data () {
    return {
      editorContent: '',
      topicData: {
        'content': ''
      },
      backFt: {
        'content': '',
        'author': '',
        'id': null
      },
      isHide: false
    }
  },
  methods: {
    getContent: function () {
      this.topicData.content = this.editorContent
      post('api/topic', this.topicData).then(data => {
        if (data.message === '未登录') {
          alert('先去登录')
          this.$router.push('/login')
        } else {
          this.backFt.content = data.data.content
          this.backFt.author = data.data.author
          this.backFt.id = data.data.id
          this.$emit('backFtContent', this.backFt)
          $('.w-e-text-container').find('p').html('')
          // this.$emit('backBibarContent', data.data.content)
        }
      })
    },
    isHideFun () {
      this.isHide = !this.isHide
    }
  },
  mounted () {
    let that = this
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    // 菜单配置
    editor.customConfig.menus = [
      'emoticon',
      'image',
      'link'
    ]
    // 上传图片
    // editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.uploadImgServer = '/api/file'
    editor.customConfig.uploadImgHooks = {
      // success: function (xhr, editor, result) {
      //   // console.log(result)
      // },
      customInsert: function (insertImg, result, editor) {
        that.backFt.url = result.data.file_path
        insertImg(that.backFt.url)
      }
    }
    editor.create()
    // get('/api/avatar').then(data => {
    //   this.articles = data.data.topics
    // })
    var div = $('.avatar').parent('div')
    div.addClass('wangeditor')
    $('.editor').css({'height': 'auto', 'padding-bottom': '30px'})
    $('.w-e-text-container').css({'min-height': '87px', 'height': 'auto', 'border': '1px solid rgb(204, 204, 204)'})
    $('.w-e-text-container').find('div').css('min-height', '87px')
    $('.w-e-toolbar').css({'position': 'absolute', 'bottom': '0', 'border': '0', 'background-color': '#fff'})
  }
}
</script>

<style scoped>
.bibar-commun {
    margin: -20px auto 0 auto;
}
.bibar-box {
    background-color: #fff;
    box-shadow: navajowhite;
}
.wangeditor{
    width: 1020px;
    margin: 20px auto 0 auto;
    background-color: #fff;
    padding: 20px 0;
    position: relative;
    overflow: hidden;
    padding-left: 16%;
}
.avatar{
    float: left;
    margin-right: 10px;
}
.editor{
    width: 540px;
    margin: auto;
    height: 116px;
    position: relative;
    float: left;
}
.btn{
    display: inline-block;
    min-width: 48px;
    line-height: 1.25;
    font-size: 14px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 2px;
    vertical-align: middle;
    color: #fff;
    background-color: #1369bf;
    border: 1px solid #1369bf;
}
.report{
    min-width: 64px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    position: absolute;
    bottom: 10px;
    right: 274px;
}
.cancel{
    font-size: 14px;
    color: #909499;
    margin-right: 20px;
    background: #fff;
    position: absolute;
    bottom: 15px;
    right: 335px;
}
</style>
