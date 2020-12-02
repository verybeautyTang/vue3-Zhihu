<template>
  <from-control @form-send="formSend">
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">文章标题</label>
        <valid-rules
          :rules="titleRule"
          class="www"
          v-model="title"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">文章内容</label>
        <valid-rules
          :rules="contentRule"
          v-model="content"
          placeholder="请输入密码"
          tag="textarea"
          type="text"
        />
      </div>
    </div>
    <template #submit-button>
      <!-- #submit-button 相当于  v-slot:submit-button-->
      <!-- v-slot的缩写是# -->
      <button class="btn btn-danger" @form-send="formSend">提交</button>
    </template>
  </from-control>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { GlobalDataProp } from '../store'
import { ColumnList } from './../hooks/data'
import ValidRules, { ValidRule } from '../components/ValidRules.vue'
import FromControl from '../components/FromControl.vue'
export const titleRule: ValidRule[] = [
  {
    type: 'required',
    message: '文章名称不能为空'
  }
]
export const contentRule: ValidRule[] = [
  {
    type: 'required',
    message: '文章内容不能为空'
  }
]
export default defineComponent({
  components: {
    ValidRules,
    FromControl
  },
  setup () {
    const store = useStore()
    const title = ref('')
    const content = ref('')
    const router = useRouter()
    const formSend = (result: boolean) => {
      // console.log('inputRefs', inputRefs.value.inputValid()) // 利用ref可以进行父子间通信
      console.log('result', result)
      if (result) {
        const { columnId } = store.state.user
        console.log(columnId);
        if (columnId) {
          const newPost: ColumnList = {
            id: new Date().getTime(),
            title: title.value,
            content: content.value,
            columnId,
            createTime: new Date().toLocaleString()
          }
          store.commit('createPost', newPost)
          router.push({ name: 'column', params: { id: columnId } })
        }
      }
    }
    return {
      title,
      content,
      contentRule,
      titleRule,
      formSend
    }
  }
})
</script>
<style>
</style>
