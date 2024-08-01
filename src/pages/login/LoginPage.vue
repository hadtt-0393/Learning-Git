<script setup>
function handle_login() {
  alert("Login successful");
}
</script>

<template>
  <div class="container" style="background-color: #f5f5f5">
    <div
      class="login_container"
      style="
        margin: 160px auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 424px;
      "
    >
      <img
        src="../../assets/logo.png"
        alt="logo_car"
        style="width: 80%; margin: 20px auto"
      />

      <div
        class="login_infor"
        style="
          width: 360px;
          background-color: white;
          padding: 32px;
          border-radius: 6px;
          border: 1px solid #eee;
        "
      >
        <div
          class="login_infor_detail"
          style="display: flex; flex-direction: column; align-items: start; width: 100%"
        >
          <p style="font-size: 14px; color: black; margin-bottom: 0px">メールアドレス</p>
          <input
            type="text"
            v-model="email"
            placeholder="Enter your email"
            style="
              width: 96%;
              height: 36px;
              border-radius: 6px;
              border: #ddd 1px solid;
              padding: 0 2%;
            "
          />
          <p style="font-size: 14px; color: black; margin-bottom: 0px">パスワード</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            style="
              width: 96%;
              height: 36px;
              border-radius: 6px;
              border: #ddd 1px solid;
              padding: 0 2%;
            "
          />
        </div>

        <div class="box_link">
          <router-link to="/">パスワードをお忘れの方はこちら</router-link>
        </div>
        <button
          class="login_button"
          style="
            width: 100%;
            height: 48px;
            background-color: #ff6e00;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin: 20px auto;
            font-weight: 800;
            font-size: 16px;
          "
          @click="handle_login"
        >
          ログイン
        </button>
        <button
          class="register_button"
          style="
            width: 100%;
            height: 48px;
            background-color: #333;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 800;
            font-size: 16px;
          "
        >
          <router-link
            to="/register"
            style="color: white !important; text-decoration: none"
            >新規登録</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: #f5f5f5;
  .login_container {
    margin: 160px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 424px;
    img {
      width: 80%;
      margin: 20px auto;
    }
    .login_infor {
      width: 360px;
      background-color: white;
      padding: 32px;
      border-radius: 6px;
      border: 1px solid #eee;
      .login_infor_detail {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        input {
          width: 96%;
          height: 36px;
          border-radius: 6px;
          border: #ddd 1px solid;
          padding: 0 2%;
        }
        p {
          font-size: 14px;
          color: black;
          margin-bottom: 0px;
        }
      }
      .box_link {
        display: flex !important;
        flex-direction: row;
        justify-content: end !important;
        a {
          margin-top: 5px;
          color: #298eeb;
          font-size: 14px;
        }
      }
      .login_button {
        width: 100%;
        height: 48px;
        background-color: #ff6e00;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 20px auto;
        font-weight: 800;
        font-size: 16px;
      }
      .register_button {
        width: 100%;
        height: 48px;
        background-color: #333;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 800;
        font-size: 16px;
        a {
          color: white !important;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
