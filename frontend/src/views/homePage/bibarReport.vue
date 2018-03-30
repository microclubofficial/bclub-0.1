<template>
    <div v-show="!isHide">
        <div class="avatar"><img src="../../assets/img/pic-user1.png" alt=""></div>
        <div ref="editor" style="text-align:left" class='editor'></div>
        <button @click="getContent" v-show="toApi!==3" class="report btn">发布</button>
        <button @click="getContent" v-show="toApi===3" class="report btn">回复</button>
        <button class="cancel" @click="isHideFun">取消</button>
        <!-- <div>{{backData}}</div> -->
    </div>
</template>

<script>
import E from 'wangeditor'
import {post} from '../../utils/http'

export default {
  props: ['contentId', 'toApi', 'talkId'],
  name: 'editor',
  data () {
    return {
      editorContent: '',
      topicData: {
        'content': ''
      },
      backData: {
        'content': '',
        'url': ''
      },
      nowShowApi: ['topic', 'bar', 'bar', 'bar'],
      isHide: false,
      replies: []
    }
  },
  methods: {
    showApi (api) {
      this.nowApi = api
    },
    getContent: function () {
      this.topicData.content = this.editorContent
      post(`api/${this.nowShowApi[this.toApi]}${this.toApi === 1 ? '/question' : this.toApi === 2 ? '/answer' : this.toApi === 3 ? '/comment' : ''}/replies/${this.toApi === 2 ? this.talkId : this.contentId}`, this.topicData).then(data => {
        //   评论发送完毕
        if (data.message === '未登录') {
          alert('先去登录')
          this.$router.push('/login')
        } else {
          this.backData = data.data.content
          this.replies = data.data.replies
          this.$emit('backReplies', this.replies)
          this.$emit('backList', this.backData)
          $('.w-e-text-container').find('p').html('')
        }
      })
    //   get('api/topic').then(data => {
    //     console.log('这是传回来' + data)
    //   })
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
        that.backData.url = result.data.file_path
        insertImg(that.backData.url)
      }
    }
    editor.create()
    var div = $('.avatar').parent('div')
    div.addClass('wangeditor')
    $('.w-e-text-container').css({'min-height': '87px', 'height': 'auto', 'border': '1px solid rgb(204, 204, 204)'})
    $('.w-e-text-container').find('div').css('min-height', '87px')
    $('.w-e-toolbar').css({'position': 'absolute', 'bottom': '0', 'border': '0', 'background-color': '#fff'})
  }
}
</script>

<style scoped>
.comment-reply .wangeditor{
  padding-left: 0 !important;
}
.comment-reply .wangeditor .editor{
  padding-bottom: 33px;
}
.comment-reply .wangeditor .report{
  right: 438px;
}
.comment-reply .wangeditor .cancel{
  right: 495px;
}
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
