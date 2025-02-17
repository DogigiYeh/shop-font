<template>
  <div class="login-container" >
    <form class="form-login" @submit.prevent="submit">
      <ul class="login-nav">
        <li class="login-nav__item active">
          LOGIN:)
        </li>
      </ul>
      <label for="login-input-user" class="login__label">{{ $t('user.account') }}</label>
      <input id="login-input-user" v-model="account.value.value" class="login__input" type="text" />
      <span class="error-message">{{ account.errorMessage.value }}</span>

      <label for="login-input-password" class="login__label">{{ $t('user.password') }}</label>
      <input id="login-input-password" v-model="password.value.value" class="login__input" type="password" />
      <span class="error-message">{{ password.errorMessage.value }}</span>

      <button class="login__submit" :disabled="isSubmitting" type="submit">{{ $t('login.submit') }}</button>
    </form>
  </div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useI18n } from 'vue-i18n';
import { useAxios } from '@/composables/axios';
import { useSnackbar } from 'vuetify-use-dialog';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';


const { t } = useI18n();
const { api } = useAxios();
const createSnackbar = useSnackbar();
const router = useRouter();
const user = useUserStore();

const schema = yup.object({
  account: yup.string().required(t('api.userAccountRequired')).min(4).max(20),
  password: yup.string().required(t('api.userPasswordRequired')).min(4).max(20)
});

const { handleSubmit, isSubmitting } = useForm({ validationSchema: schema });
const account = useField('account');
const password = useField('password');

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/user/login', {
      account: values.account,
      password: values.password
    });
    user.login(data.result);
    createSnackbar({ text: t('login.success'), snackbarProps: { color: 'green' } });
    router.push('/');
  } catch (error) {
    createSnackbar({ text: t('api.' + (error?.response?.data?.message || 'unknownError')), snackbarProps: { color: 'red' } });
  }
});
</script>

<style scoped>
/* 全局背景颜色 */
body {
  font-family: Arial, sans-serif;
}

/* 登录容器 */
.login-container {
  position: relative; /* 让 ::after 绝对定位相对于它 */
  width: 450px;
  height: auto;
  margin: 100px auto;
  padding: 100px;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/12.jpg);
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* 防止子元素溢出 */
}

/* 添加渐变遮罩层 */
.login-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px; /* 确保遮罩层和 .login-container 形状一致 */
  background: linear-gradient(135deg, rgba(5, 124, 15, 0.6) 0%, rgba(225, 236, 227, 0.4) 100%);
  z-index: 1; /* 确保遮罩层在背景之上 */
  animation: fadeIn 10s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* 确保表单内容在遮罩层之上 */
.form-login {
  position: relative;
  z-index: 2;
}

/* 导航栏 */
.login-nav {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  color: #efeee7;
  font-size: 2rem;
}

.login-nav__item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.login-nav__item.active a {
  color: #102b05;
}

/* 输入框样式 */
.login__label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #efeee7;
}

.login__input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #efeee7;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out; /* 讓透明度變化更順滑 */
}

.login__input:focus {
  background-color: rgba(255, 255, 255, 0.425); /* 當點選時，透明度變為 70% */
  outline: none; /* 移除預設的藍色邊框 */
  border: 1px solid #efeee7; /* 可以改變邊框顏色，讓輸入框更顯眼 */
}

/* 错误消息 */
.error-message {
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
}

/* 登录按钮 */
.login__submit {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background: #efeee7;
  color: #102b05;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
    title: 'nav.login'
  </route>
