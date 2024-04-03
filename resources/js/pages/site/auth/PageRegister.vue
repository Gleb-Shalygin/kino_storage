<template>
    <template-auth>
        <div class="auth">
            <label class="auth__title">РЕГИСТРАЦИЯ</label>
            <div class="auth__group-items">
                <div class="auth__group-item">
                    <input type="text" class="auth__group-input" v-model="name" required>
                    <label class="auth__group-label">Имя</label>
                </div>
                <div class="auth__group-item">
                    <input type="text" class="auth__group-input" v-model="email" required>
                    <label class="auth__group-label">Логин</label>
                </div>
                <div class="auth__group-item">
                    <input type="password" class="auth__group-input" v-model="password" required>
                    <label class="auth__group-label">Пароль</label>
                </div>
                <div class="auth__group-item">
                    <input type="password" class="auth__group-input" v-model="password_confirmation" required>
                    <label class="auth__group-label">Подтвердите пароль</label>
                </div>
            </div>
            <error-auth :error="error" @clearError="error = ''" />
            <button class="auth__submit" @click="register">ПРОДОЛЖИТЬ</button>
            <div class="auth__footer">
                <div class="auth__save-me">
                    <input type="checkbox">
                    <span> Запомнить меня</span>
                </div>
                <router-link class="auth__you-forgot-password" :to="{name: 'login'}">У вас уже есть аккаунт?</router-link>
            </div>
        </div>
    </template-auth>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            name: null,
            password_confirmation: null,
            error: ''
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then((response) => {
                axios.post('/register', {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then((response) => {
                    if (response.response) {
                        if (response.response.status === 422) {
                            this.error = response.response.data.message;
                            return;
                        }

                        if (response.response.status === 401 || response.response.status === 419) {
                            this.error = response.response.data.message;
                            return;
                        }

                        if (response.response.status >= 400) {
                            this.error = '';
                            return;
                        }
                    }

                    // if (response.status === 204) {
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({ name: 'account.profile' });
                    // }

                });
            });
        }
    }
}
</script>

<style scoped>

</style>
