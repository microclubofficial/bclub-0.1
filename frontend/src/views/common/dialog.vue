<template>
  <div class="bibar-modal">
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">{{toDialog.title}}</h4>
          </div>
          <div class="modal-body">
            <BibarPostContent @backFtContent = 'FtContentFun'></BibarPostContent>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">提交更改</button>
          </div> -->
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import BibarPostContent from '../homePage/bibarPostContent.vue'
export default{
  props: ['toDialog'],
  data: function () {
    return {
    }
  },
  components: {
    BibarPostContent
  },
  mounted: function () {
    $('.modal-body').find('.editor').css({'width': '570px'})
    $('.modal-body').find('.w-e-panel-tab-content').css({'height': '142px'})
  },
  methods: {
    FtContentFun (data) {
      this.$emit('backnavFt', data)
    }
  }
}
</script>

<style>
.modal-body{
    position: relative;
    padding: 0 15px 15px 15px;
    margin: 0;
}
.modal-title{
    font-size: 18px;
    font-weight: 700;
    color: #000;
}
.modal-header{border: none;}
.modal-body>.wangeditor{
    width: 570px !important;
    /* margin: 20px auto 0 auto; */
    background-color: #fff;
    padding: 12px 0 !important;
    margin: 0 !important;
    position: relative;
    min-height: 160px;
    /* padding-left: 16%; */
}
.modal-open .modal{
  overflow-y: hidden !important;
}
.modal-body>.wangeditor>.editor>.w-e-toolbar{
  bottom:-30px !important;
}
.modal-body>.wangeditor>.avatar{display: none;}
.modal-body>.wangeditor .report{
  right: 0;
}
.modal-body>.wangeditor .cancel{
    bottom: -6px;
    right: 60px;
}
.modal .modal-content{
  border-radius: 5px !important;
}
.w-e-toolbar .w-e-menu{z-index: 10000 !important;}
.modal-body>.wangeditor>.editor>.w-e-text-container{border: 1px solid #edf0f5 !important;}
.modal-body>.wangeditor>.editor>.w-e-text-container>.w-e-panel-container{
    width: 300px !important;
    margin-left: -285px !important;
    z-index: 20000;
    border-top: 1px solid #ccc !important;
    position: fixed !important;
    top: 193px !important;
}
.modal-body>.wangeditor>.editor>.w-e-text-container>.w-e-panel-container>.w-e-panel-tab-content{
  height: 143px !important;
}
</style>
