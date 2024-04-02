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
            <button class="auth__submit" @click="register">ПРОДОЛЖИТЬ</button>
            <div class="auth__footer">
                <div class="auth__save-me">
                    <input type="checkbox">
                    <span> Запомнить меня</span>
                </div>
                <router-link class="auth__you-forgot-password" :to="{name: 'login'}">У вас уже есть аккаунт?</router-link>
<!--                <div class="auth__you-forgot-password">У вас уже есть аккаунт?</div>-->
            </div>
<!--            <div class="form-auth">-->
<!--                <input v-model="name"-->
<!--                       type="text" class="form-auth-input-label" placeholder="Имя">-->
<!--                <input v-model="email"-->
<!--                       type="text" class="form-auth-input-label" placeholder="Логин">-->
<!--                <input v-model="password"-->
<!--                       type="password" class="form-auth-input-label" placeholder="Пароль">-->
<!--                <input v-model="password_confirmation"-->
<!--                       type="password" class="form-auth-input-label" placeholder="Подтвердите пароль">-->
<!--                <el-button-->
<!--                    color="#ffffff"-->
<!--                    dark="dark"-->
<!--                    @click="register">Зарегистрироваться</el-button>-->
<!--            </div>-->
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
