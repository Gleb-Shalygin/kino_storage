<template>
    <template-auth>
        <div class="auth">
            <label class="form-auth-title">АВТОРИЗАЦИЯ</label>
            <div class="form-auth">
                <input v-model="email"
                       type="text" class="form-auth-input-label" placeholder="Логин">
                <input v-model="password"
                    type="password" class="form-auth-input-label" placeholder="Пароль">
                <el-button
                    color="#ffffff"
                    dark="dark"
                    @click="login">Войти</el-button>
            </div>
        </div>
    </template-auth>
</template>

<script>

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then((response) => {
                    axios.post('/login', {
                        email: this.email, password: this.password
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
