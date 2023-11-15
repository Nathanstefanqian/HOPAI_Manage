<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label=" 轮播图的标题或名称" prop="title">
        <el-input v-model="formData.title" placeholder="请输入 轮播图的标题或名称" />
      </el-form-item>
      <el-form-item label=" 轮播图的图片URL" prop="imageUrl">
        <el-input v-model="formData.imageUrl" placeholder="请输入 轮播图的图片URL" />
      </el-form-item>
      <el-form-item label=" 轮播图的描述或说明">
        <Editor v-model="formData.description" height="150px" />
      </el-form-item>
      <el-form-item label=" 轮播图点击后跳转的链接URL" prop="linkUrl">
        <el-input v-model="formData.linkUrl" placeholder="请输入 轮播图点击后跳转的链接URL" />
      </el-form-item>
      <el-form-item label=" 轮播图的显示顺序" prop="sort">
        <el-input v-model="formData.sort" placeholder="请输入 轮播图的显示顺序" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as CarouselApi from '@/api/product/carousel'
const { t } = useI18n() // 国际化

const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  title: undefined,
  imageUrl: undefined,
  description: undefined,
  linkUrl: undefined,
  sort: undefined
})
const formRules = reactive({
  title: [{ required: true, message: ' 轮播图的标题或名称不能为空', trigger: 'blur' }],
  imageUrl: [{ required: true, message: ' 轮播图的图片URL不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await CarouselApi.getCarousel(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as CarouselApi.CarouselVO
    if (formType.value === 'create') {
      await CarouselApi.createCarousel(data)
      message.success(t('common.createSuccess'))
    } else {
      await CarouselApi.updateCarousel(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    title: undefined,
    imageUrl: undefined,
    description: undefined,
    linkUrl: undefined,
    sort: undefined
  }
  formRef.value?.resetFields()
}
</script>