<template>
    <template-auth>
        <div class="auth">
            <div class="auth__title">АВТОРИЗАЦИЯ</div>
            <div class="auth__group-items">
                <div class="auth__group-item">
                    <input type="text" class="auth__group-input" v-model="email" required>
                    <label class="auth__group-label">Логин</label>
                </div>
                <div class="auth__group-item">
                    <input type="password" class="auth__group-input" v-model="password" required>
                    <label class="auth__group-label">Пароль</label>
                </div>
            </div>
            <error-auth :error="error" @clearError="error = ''" />
            <button class="auth__submit" @click="login">ВОЙТИ</button>
            <div class="auth__footer">
                <div class="auth__save-me">
                    <input type="checkbox">
                    <span> Запомнить меня</span>
                </div>
                <div class="auth__you-forgot-password">Вы забыли пароль?</div>
            </div>
        </div>
    </template-auth>
</template>

<script>

import router from "../../../router/routes.js";

export default {
    data() {
        return {
            email: null,
            password: null,
            error: ''
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then((response) => {
                    axios.post('/login', {
                        email: this.email, password: this.password
                    }).then((response) => {
                        if (response.response.status === 422 || response.response.status === 401 || response.response.status === 419) {
                            this.error = response.response.data.message;
                            return;
                        }

                        // if (response.response.status === 403) {
                        //     this.error = 'Не верный логин или пароль!'
                        //     return;
                        // }

                        localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                        this.$router.push({ name: 'account.profile' });
                    });
            });
        },
    }
}
</script>

<style scoped>

</style>
