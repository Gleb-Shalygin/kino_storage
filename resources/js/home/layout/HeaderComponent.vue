<template>
    <div class="custom_component">
        <div class="custom_component_header">
            <div class="header_logo">
                <a href="/"><img src="../../../img/header/Logo3.png" style="width: 166px; height: 64px"></a>
            </div>
            <div class="header_menu">
                <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#0c1013"
                    text-color="#fff"
                    active-text-color="#fff"
                    :ellipsis="false"
                >
                    <el-menu-item index="1">ФИЛЬМЫ</el-menu-item>
                    <el-menu-item index="2">СЕРИАЛЫ</el-menu-item>
                    <el-sub-menu style="border: none" index="3">
                        <template #title>ПО ГОДАМ</template>
                        <el-menu-item index="2-1">2023</el-menu-item>
                        <el-menu-item index="2-2">2022</el-menu-item>
                        <el-menu-item index="2-3">2021</el-menu-item>
                        <el-menu-item index="2-4">2020</el-menu-item>
                        <el-menu-item index="2-5">2019</el-menu-item>
                        <el-menu-item index="2-6">2018</el-menu-item>
                        <el-menu-item index="2-7">2017</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>ЖАНРЫ</template>
                        <el-menu-item index="2-1">Комедия</el-menu-item>
                        <el-menu-item index="2-2">Драмма</el-menu-item>
                        <el-menu-item index="2-3">Криминал</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="header_search">
                <el-input
                    v-model="inputSearch"
                    placeholder="Найти фильм..."
                />
            </div>
            <div class="header_user">
                <div style="margin: 15px 0 0 10px;">
                    <el-avatar
                        class="mr-3"
                        :size="32"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                </div>
<!--                <div style="margin: 23px 0 0 10px;">-->
<!--                    <a href="#">Войти </a>/<a href="#"> Регистрация</a>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputSearch: ''
        }
    }
}
</script>

<style scoped>
</style>
