<template>
    <div style="width: 1200px; margin: 0 auto">
        <div class="custom_component_header">
            <div class="header_logo">
                <router-link :to="{path: '/'}"><img src="../../../../img/header/Logo3.png" style="width: 166px; height: 64px"></router-link>
            </div>
            <div class="header_menu">
                <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#0c1013"
                    text-color="#fff"
                    active-text-color="#fff"
                    :ellipsis="false" >
                    <el-menu-item index="1"><router-link :to="{name: 'posts'}">НОВЫЕ</router-link></el-menu-item>
                    <el-menu-item index="2">ФИЛЬМЫ</el-menu-item>
                    <el-sub-menu style="border: none" index="3">
                        <template #title>СЕРИАЛЫ</template>
                        <el-menu-item index="2-1">2023</el-menu-item>
                        <el-menu-item index="2-2">2022</el-menu-item>
                        <el-menu-item index="2-3">2021</el-menu-item>
                        <el-menu-item index="2-4">2020</el-menu-item>
                        <el-menu-item index="2-5">2019</el-menu-item>
                        <el-menu-item index="2-6">2018</el-menu-item>
                        <el-menu-item index="2-7">2017</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="4">СТАТЬ АВТОРОМ</el-menu-item>
                </el-menu>
            </div>
            <div class="header_search">
                <router-link :to="{name: 'search'}">
                    <el-icon><Search /></el-icon> Поиск
                </router-link>
            </div>
            <div class="header_user">
                <a v-if="!token"
                   style="text-decoration: underline"><router-link :to="{name: 'login'}">Войти /</router-link></a>
                <a v-if="!token"
                   style="text-decoration: underline">
                    <router-link :to="{name: 'register'}">Регистрация</router-link>
                </a>
                <router-link :to="{name: 'account.profile'}">
                    <!--                            Профиль-->
                    <!--                            /-->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         class="header_user-icon-profile"
                         viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08c1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                            fill="currentColor"></path>
                    </svg>
                </router-link>

                <!--                    <a v-if="token">-->

                <!--                    </a>-->
                <button v-if="token"
                        @click.prevent="logout">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         class="header_user-icon-logout"
                         viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round">
                            <path
                                d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path>
                            <path d="M7 12h14l-3-3m0 6l3-3"></path>
                        </g>
                    </svg>
                    <!--                        Выйти-->
                </button>
    <!--                <div style="margin: 23px 0 0 10px;">-->
    <!--                    -->
    <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";

export default {
    components: { Search },
    props: ['searchRoute'],
    data() {
        return {
            inputSearch: ''
        }
    },
    computed: {
        token() {
            return localStorage.getItem('x_xsrf_token');
        }
    },
    methods: {
        logout() {
            axios.post('/logout').then((response) => {
                localStorage.removeItem('x_xsrf_token');
                this.$router.push({ name: 'login' });
            });
        }
    }
}
</script>

<style scoped>
</style>
