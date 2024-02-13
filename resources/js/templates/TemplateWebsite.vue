<template>
    <div class="wrapper">
        <header class="header">
            <HeaderComponent />
        </header>
        <main class="main">
            <div class="custom_component">
                <div class="right-sidebar">
                    <SidebarComponent />
                </div>
                <div class="content-block">
                    <slot />
                </div>
            </div>
        </main>
        <footer class="footer">
            <FooterComponent />
        </footer>
    </div>
</template>

<script>
import SidebarComponent from "../components/home/layout/SidebarComponent.vue";
import FooterComponent from "../components/home/layout/FooterComponent.vue";

export default {
    name: 'AppComponent',
    components: { SidebarComponent, FooterComponent },
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

<style scoped>

</style>
