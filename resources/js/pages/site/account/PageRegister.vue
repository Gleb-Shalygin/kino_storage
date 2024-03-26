<template>
    <template-auth>
        <div class="auth">
            <label class="form-auth-title">РЕГИСТРАЦИЯ</label>
            <div class="form-auth">
                <input v-model="name"
                       type="text" class="form-auth-input-label" placeholder="Имя">
                <input v-model="email"
                       type="text" class="form-auth-input-label" placeholder="Логин">
                <input v-model="password"
                       type="password" class="form-auth-input-label" placeholder="Пароль">
                <input v-model="password_confirmation"
                       type="password" class="form-auth-input-label" placeholder="Подтвердите пароль">
                <el-button
                    color="#ffffff"
                    dark="dark"
                    @click="register">Зарегистрироваться</el-button>
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
            password_confirmation: null
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
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({ name: 'account.profile' });
                });
            });
        }
    }
}
</script>

<style scoped>

</style>
