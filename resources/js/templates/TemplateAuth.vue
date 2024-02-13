<template>
    <div class="wrapper">
        <header class="header">
            <HeaderComponent />
        </header>
        <main class="main">
            <div class="custom_component">
                <slot />
            </div>
        </main>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
