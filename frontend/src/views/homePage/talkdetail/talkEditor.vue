<template>
  <div>
    <div class="talkBibar-editor shadow-box">
          <div class="avatar"><img src="../../../assets/img/pic-user1.png" alt=""><span>admin</span><span class="anonymous-users">使用匿名用户回答</span></div>
          <div ref="editor" style="text-align:left" class='editor'></div>
          <button class="set">设置</button>
          <button @click="getContent" class="report">提交答案</button>
        </div>
  </div>
</template>

<script>
import E from 'wangeditor'
import {post} from '../../../utils/http.js'
export default{
  props: ['contentId'],
  name: 'editor',
  data: function () {
    return {
      editorContent: '',
      backData: {
        'author': '',
        'avatar': '',
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        replt_count: 0
      },
      topicData: {
        'content': ''
      }
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
      'bold',
      'italic',
      '|',
      'list',
      'quote',
      'code',
      'justify',
      'link',
      'video',
      'image'
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
    $('.talkBibar-editor').find('.w-e-text-container').css({'border': 'none', 'min-height': '150px !important', 'height': 'auto'})
  },
  methods: {
    getContent: function () {
      this.topicData.content = this.editorContent
      post(`api/bar/question/${this.contentId}`, this.topicData).then(data => {
        //   评论发送完毕
        this.backData.content = data.data.content
        this.$emit('backAnswer', this.backData)
        $('.talkBibar-editor').find('.w-e-text-container').find('p').html('')
      })
    //   get('api/topic').then(data => {
    //     console.log('这是传回来' + data)
    //   })
    }
  }
}
</script>

<style>
.report{
    padding: 6px 10px;
   text-align: center;
   background: #1E8FFF;
   border-radius: 3px;
   color: #fff;
}
.set{
  color: #1E8FFF;
  background: snow;
}
</style>
