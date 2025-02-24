<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.adminReply') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-data-table :items="replies" :headers="headers" :search="search">
          <template #top>
            <v-toolbar>
              <v-btn @click="openDialog(null)">{{ $t('adminReply.new') }}</v-btn>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" variant="underlined"></v-text-field>
            </v-toolbar>
          </template>
          <template #[`item.reportedAt`]="{ value }">
            {{ new Date(value).toLocaleString() }}
          </template>
          <template #[`item.fixedAt`]="{ value }">
            {{ value ? new Date(value).toLocaleString() : '-' }}
          </template>
          <template #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" @click="openDialog(item)"></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.open" persistent>
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>{{ $t(dialog.id ? 'adminReply.edit' : 'adminReply.new') }}</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="userId"
            :label="$t('reply.userId')"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="name"
            :label="$t('reply.name')"
            :error-messages="nameError"
          ></v-text-field>
          <v-textarea
            v-model="description"
            :label="$t('reply.description')"
            :error-messages="descriptionError"
          ></v-textarea>
          <v-select
            v-model="status"
            :items="statusOptions"
            :label="$t('reply.status')"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">{{ $t('adminReply.cancel') }}</v-btn>
          <v-btn type="submit" :loading="isSubmitting">{{ $t('adminReply.submit') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useI18n } from 'vue-i18n'

const { apiAuth } = useAxios()
const { createSnackbar } = useSnackbar()
const { t } = useI18n()

const replies = ref([])
const search = ref('')
const dialog = ref({ open: false, id: '' })
const isSubmitting = ref(false)

// 表單資料
const userId = ref('')
const name = ref('')
const description = ref('')
const status = ref('')
const nameError = ref('')
const descriptionError = ref('')
const statusOptions = [
  { text: t('reply.statusPending'), value: 'pending' },
  { text: t('reply.statusConfirmed'), value: 'confirmed' },
  { text: t('reply.statusClosed'), value: 'closed' }
]

const headers = [
  { text: t('reply.userId'), value: 'userId' },
  { text: t('reply.name'), value: 'name' },
  { text: t('reply.description'), value: 'description' },
  { text: t('reply.status'), value: 'status' },
  { text: t('reply.reportedAt'), value: 'reportedAt', sortable: true },
  { text: t('reply.fixedAt'), value: 'fixedAt', sortable: true },
  { text: t('action'), value: 'edit', sortable: false }
]

const getReplies = async () => {
  try {
    const { data } = await apiAuth.get('/reply/all')
    console.log('API Response:', data) // 🔍 檢查 API 回傳內容
    replies.value = data.result
    console.log('取得的回報資料:', replies.value) // 確認 Vue 變數是否更新
  } catch (error) {
    console.error('API Error:', error) // 🔍 檢查錯誤細節
    createSnackbar({ text: t('api.' + (error?.response?.data?.message || 'unknownError')), snackbarProps: { color: 'red' } })
  }
}

const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    userId.value = item.userId
    name.value = item.name
    description.value = item.description
    status.value = item.status
  } else {
    dialog.value.id = ''
    userId.value = ''
    name.value = ''
    description.value = ''
    status.value = ''
  }
  dialog.value.open = true
}

const closeDialog = () => {
  dialog.value.open = false
}

const submit = async () => {
  try {
    isSubmitting.value = true

    if (!name.value) {
      nameError.value = t('replyReportRequired')
      return
    } else {
      nameError.value = ''
    }

    if (!description.value) {
      descriptionError.value = t('replyReportRequired')
      return
    } else {
      descriptionError.value = ''
    }

    const payload = {
      userId: userId.value,
      name: name.value,
      description: description.value,
      status: status.value
    }

    if (dialog.value.id) {
      await apiAuth.patch('/reply/' + dialog.value.id, payload)
      createSnackbar({ text: t('adminReply.editSuccess'), snackbarProps: { color: 'green' } })
    } else {
      await apiAuth.post('/reply', payload)
      createSnackbar({ text: t('adminReply.newSuccess'), snackbarProps: { color: 'green' } })
    }

    getReplies()
    closeDialog()
  } catch (error) {
    createSnackbar({ text: t('api.' + (error?.response?.data?.message || 'unknownError')), snackbarProps: { color: 'red' } })
  } finally {
    isSubmitting.value = false
  }
}

onMounted(getReplies)

</script>



<route lang="yaml">
meta:
  layout: admin
  login: true
  admin: true
  title: 'nav.adminReply'
</route>
