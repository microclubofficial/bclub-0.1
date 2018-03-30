<template>
  <div class="errPage-container">
    <errorA></errorA>
    <errorB></errorB>
    <!-- $t is vue-i18n global function to translate lang -->
    <h3>{{'errorLog.tips'}}</h3>
    <code>
      {{'errorLog.description'}}
      <a target="_blank" class="link-type" href="#">
        {{'errorLog.documentation'}}
      </a>
    </code>
    <a href="#">
    </a>
  </div>
</template>

<script>
import errorA from './errorTestA'
import errorB from './errorTestB'

export default {
  name: 'errorLog',
  components: { errorA, errorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>
