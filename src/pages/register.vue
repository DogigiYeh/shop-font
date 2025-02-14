<template>
  <v-container class="login-container">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.register') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit" >
          <v-text-field 
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            :label="$t('user.account')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            :label="$t('user.email')"
          />
          <v-text-field
            v-model="password.value.value"
            type="password"
            :error-messages="password.errorMessage.value"
            :label="$t('user.password')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field
            v-model="passwordConfirm.value.value"
            type="password"
            :error-messages="passwordConfirm.errorMessage.value"
            :label="$t('user.passwordConfirm')"
            minlength="4"
            maxlength="20"
            counter
          />
          <div class="text-center">
            <v-btn :loading="isSubmitting" type="submit" color="primary">{{ $t('register.submit') }}</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import validator from 'validator'
import { useI18n } from 'vue-i18n'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const { api } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    // 資料型態是文字
    .string()
    // 必填
    .required(t('api.userAccountRequired'))
    // 最短長度
    .min(4, t('api.userAccountTooShort'))
    // 最長長度
    .max(20, t('api.userAccountTooLong'))
    // 自訂驗證(自訂驗證名稱, 錯誤訊息, function)
    .test('isAlphanumeric', t('api.userAccountInvalid'), (value) =>
      validator.isAlphanumeric(value),
    ),
  email: yup
    .string()
    .required(t('api.userEmailRequired'))
    .test('isEmail', t('api.userEmailInvalid'), (value) => validator.isEmail(value)),
  password: yup
    .string()
    .required(t('api.userPasswordRequired'))
    .min(4, t('api.userPasswordTooShort'))
    .max(20, t('api.userPasswordTooLong')),
  passwordConfirm: yup
    .string()
    // .oneOf(陣列, 訊息)  必須要是陣列內其中一個值
    // .ref(欄位名稱)      取得欄位的值
    // .ref('password')   password 欄位的值
    .oneOf([yup.ref('password')], t('api.userPasswordNotMatch')),
})

// 建立表單
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
})
// 建立欄位
const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: t('register.success'),
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('/login')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>

<style scoped>
/* 全局背景颜色 */
body {
  font-family: Arial, sans-serif;
}

/* 註冊容器 */
.login-container {
  position: relative;
  width: 450px;
  margin: 100px auto;
  padding: 100px;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/12.jpg);
  border-radius: 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* 添加漸變遮罩層 */
.login-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(5, 124, 15, 0.6) 0%, rgba(225, 236, 227, 0.4) 100%);
  z-index: 1;
  animation: fadeIn 10s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* 確保表單內容在遮罩層之上 */
.form-login {
  position: relative;
  z-index: 2;
}

/* 輸入框樣式調整 */
:deep(.custom-input .v-input__control) {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  color: white;
  min-height: 50px;
  padding: 10px;
}

:deep(.custom-input .v-label) {
  color: rgba(255, 255, 255, 0.8);
}

:deep(.custom-input .v-input__control:hover) {
  border-color: white;
}

:deep(.custom-input .v-input__control:focus-within) {
  border-color: #efeee7;
  background: rgba(255, 255, 255, 0.3);
}

/* 錯誤訊息 */
.error-message {
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
}

/* 註冊按鈕 */
.login__submit {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: #efeee7;
  color: #102b05;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.login__submit:hover {
  background: #102b05;
  color: #efeee7;
}

.login__submit:disabled {
  background: gray;
  cursor: not-allowed;
}
</style>

<route lang="yaml">
meta:
  title: 'nav.register'
</route>
