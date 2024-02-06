<template>
    <div class="wrapper">
        <header class="header">
            <header-component />
        </header>
        <main class="main">
            <div class="custom_component">
                <div class="right-sidebar">
                    <SidebarComponent />
                </div>
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
import SidebarComponent from "./components/home/layout/SidebarComponent.vue";

export default {
    name: 'AppComponent',
    components: {SidebarComponent, HeaderComponent, FooterComponent },
    data() {
        return {
            onScroll: 0,
        }
    },
    // watch: {
    //     onScroll(val) {
    //         console.log(val);
    //     }
    // },
    methods: {
        handleScroll(val) {
            this.onScroll = window.scrollY;
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}

</script>

<style>

</style>
