<template>
<div @click='open(data.html_url)' class='wrapper'>
    <p id='title'>{{data.name}}</p>
    <div>
        <p>^ {{data.default_branch}}</p>
        <p v-if='data.license'>{{data.license.spdx_id}}</p>
        <span v-if='data.stargazers_count > 0'>{{data.stargazers_count}} ⭐</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'Repo',
    props: ['data'],
    methods: {
        open(url) {
            window.open(url);
        }
    }
}
</script>

<style lang='scss' scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 2px black;
    border-radius: 30px;
    min-width: fit-content;
    width: 300px;
    height: auto;
    transition-duration: 0.2s;
    margin: 20px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }

    #title {
        font-size: 1.3rem;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        align-items: center;
    }
}
</style>