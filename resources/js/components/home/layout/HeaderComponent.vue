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
                <div style="margin: 23px 0 0 10px;">
                    <a style="text-decoration: underline"><router-link :to="{name: 'login'}">Войти</router-link></a>
                    /
                    <a style="text-decoration: underline" href="#">Регистрация</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Search} from "@element-plus/icons-vue";

export default {
    components: {Search},
    props: ['searchRoute'],
    data() {
        return {
            inputSearch: ''
        }
    }
}
</script>

<style scoped>
</style>
