<template>
<div id='contact' class='col center' data-aos='zoom-in-right'>
    <h1>Get In Touch</h1>
    <a id='button' href="mailto:givensuman@gmail.com" :style='ribbon'
    @click='$emit("achievement", "mail")'>Say Hello</a>
</div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            emailAddress: '',
            message: ''
        }
    },
    computed: {
        ribbon: function() {
            let texture =  require('@/assets/textures/diamonds.png')
            return `background-image: url(${texture})`
        }
    }
}
</script>

<style lang='scss'>
@import '@/_variables.scss';

#contact {
    height: fit-content;
    max-height: 30vh;
    margin: 10% 0;

    h1 {
        margin-bottom: 50px;
    }

    #button {
        position: relative;
        display: block;
        color: $light;
        text-decoration: none;
        border: solid 2px $light;
        background-color: $accent5;
        padding: 20px;
        font-size: 1.5rem;
        width: 200px;
        transition-duration: 0.5s;

        &:hover {
            background-color: $accent2;
            transform: scale(1.05);
        }
    }
}
</style>