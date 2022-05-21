<template>
<div id='footer' class='row center'>
    <span>Made with 💙 by Given Suman</span>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang='scss'>
#footer {
    height: 5vh;
    margin: 1% 0;

    span {
        font-size: 1.2rem;
    }
}

@media (max-width: 670px) {
    #footer {
        margin: 1% 0 30% 0;
    }
}
</style>