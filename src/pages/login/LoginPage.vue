<script setup>
// import { ref } from 'vue';
// import {Input} from 'ant-design-vue';
// const value = ref('');
function handle_login() {
    alert("Login successful");
}

function navigate_register() {
    alert("Register successful");
}
</script>

<template>
    <div class="container">
        <div class="login_container">
            <img src="../../assets/logo.png" alt="logo_car" />
    
            <div class="login_infor">
                <div class="login_infor_detail">
                    <p>メールアドレス</p>
                    <input type="text" v-model="email" placeholder="Enter your email" />
                    <p>パスワード</p>
                    <input type="password" name="password" placeholder="Enter your password" />

                    <!-- <a-input-password v-model="value" placeholder="input password" /> -->
                </div>
    
                <div class="box_link">
                    <a href="#">パスワードをお忘れの方はこちら</a>
                </div>
                <button class="login_button" @click="handle_login">ログイン</button>
                <button class="register_button" @click="navigate_register">新規登録</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
            width: 100%;
            background-color: white;
            padding: 32px;
            border-radius: 6px;
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
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 800;
                font-size: 16px;
            }
        }
    }
}
</style>
