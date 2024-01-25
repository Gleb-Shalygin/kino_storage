<template>
    <div class="wrapper">
        <header class="header">
            <header-component />
        </header>
        <main class="main">
            <div class="custom_component">
                <div class="right-sidebar"></div>
                <div class="content-block">
                    <router-view />
                </div>
            </div>
        </main>
        <footer class="footer">
            <footer-component />
        </footer>
    </div>
</template>

<script>
import HeaderComponent from "./components/home/layout/HeaderComponent.vue";
import FooterComponent from "./components/home/layout/FooterComponent.vue";

export default {
    name: 'AppComponent',
    components: { HeaderComponent, FooterComponent },
    data() {
        return {

        }
    }
}

</script>

<style>

</style>
