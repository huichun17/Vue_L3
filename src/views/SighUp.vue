<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>

        <h1>sigh up</h1>
    </div>
    <ul>
        <li>
            <RouterLink to="/sigh-up/by-google">Google</RouterLink>
        </li>
        <li>
            <RouterLink to="/sigh-up/by-facebook">faceBook</RouterLink>
        </li>

    </ul>
    <RouterView />
</template>

<style scoped></style>