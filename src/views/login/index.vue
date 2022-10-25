<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="ruler"
      ref="loginFromRef"
      :model="userInfo"
    >
      <!-- 标题 -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- 用户名 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="userInfo.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="showPwd ? 'text' : 'password'"
          v-model="userInfo.password"
        />
        <span class="show-pwd" @click="showPwd = !showPwd">
          <span class="svg-container">
            <svg-icon :icon="showPwd ? 'eye-open' : 'eye'"></svg-icon>
          </span>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="onhandleLogin"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { validatePassword } from './rules'
import type { IUserInfo } from '@/types/login'
import UserStore from '@/store/user'
// 是否显示密码
const showPwd = ref(false)
// 用户名密码

const userInfo = ref<IUserInfo>({
  username: 'super-admin',
  password: '123456'
})
// 登录按钮Loading
const loading = ref(false)

// form表单实例
const loginFromRef = ref<FormInstance>()
// 校验规则
const ruler = ref<FormRules>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
const store = UserStore()
// 登录
const onhandleLogin = () => {
  loginFromRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      store.login(userInfo.value).catch((err) => {
        console.log(err)
        loading.value = false
      })
    } else return
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;

        height: 47px;
        caret-color: $cursor;
        box-shadow: none;
        .el-input__inner {
          color: $light_gray;
        }
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
