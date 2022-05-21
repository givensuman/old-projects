<template>
<div id='hello' data-aos='zoom-in' class='col center'>
    <div>
        <h1 class='row'>Hi! <img id='hand' :src='require("@/assets/emojis/peace.png")' /> I'm <span id='given'>Given.</span></h1>
        <h2>I build things on the web.</h2>
        <p>I'm a front-end web developer and UI/UX enthusiast. I primarily work with Vue and React, but find myself learning new things just about every day.</p>
    </div>
    <ScrollDown v-if='!scrolled'/> 
</div>
</template>

<script>
import ScrollDown from './ScrollDown'

export default {
    name: 'Hello',
    components: { ScrollDown },
    data() {
        return {
            scrolled: false
        }
    },
    computed: {
        ribbon: function() {
            let texture =  require('@/assets/textures/diamonds.png')
            return `background-image: url(${texture})`
        }
    },
    mounted() { 
        window.addEventListener('scroll', e => {
            if (window.scrollY > 10) {
                this.scrolled = true
            }
        })
    }
}
</script>

<style lang='scss'>
@import '@/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#hello {
    height: 100vh;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    cursor: default;

    div {
        height: fit-content;
        width: fit-content;
        max-width: 80vw;
        text-align: left;
        flex-wrap: wrap;

        h1 {
            font-size: 6rem;
            flex-wrap: wrap;
            align-items: center;
            font-weight: bold;

                #hand {
                    height: 6rem;
                    animation-name: wave-animation;
                    animation-duration: 2.5s;
                    animation-iteration-count: infinite;
                    transform-origin: 70% 70%;
                    display: inline-block;
                    transition-timing-function: ease-out;
                    margin: 0 0.25ch;
                }

                #given {
                    font-family: 'Pacifico', cursive;
                    margin-left: 0.5ch;
                    color: $accent2;
                     text-shadow: 1px 0px 0px $accent5,
                                0px 1px 0px $accent5,
                                2px 1px 0px $accent5,
                                1px 2px 0px $accent5,
                                3px 2px 0px $accent5,
                                2px 3px 0px $accent5,
                                4px 3px 0px $accent5,
                                3px 4px 0px $accent5,
                                5px 4px 0px $accent5,
                                4px 5px 0px $accent5,
                                6px 5px 0px $accent5,
                                5px 6px 0px $accent5,
                                7px 6px 0px $accent5,
                                6px 7px 0px $accent5,
                                8px 7px 0px $accent4,
                                7px 8px 0px $accent4,
                                9px 8px 0px $accent4,
                                8px 9px 0px $accent4,
                                10px 9px 0px $accent4,
                                9px 10px 0px $accent4,
                                11px 10px 0px $accent4,
                                10px 11px 0px $accent4,
                                11px 12px 0px black;
                            &:before,
                            &:after {
                                content: attr(data-heading);
                                position: absolute;
                                overflow: hidden;
                                left: 0;
                                top: 0;
                            }
                            &:before {
                                color: $accent3;
                                width: 100%;
                                z-index: 5;
                            }
                            &:after {
                                z-index: -1;
                                text-shadow: 
                                -1px -1px 0 $accent2,
                                1px -1px 0 $accent2, 
                                -1px 1px 0 $accent2, 
                                1px 1px 0 $accent2, 
                                -3px 3px 2px $dark, 
                                -5px 5px 2px $dark,
                                -7px 7px 2px $dark,
                                -8px 8px 2px $dark,
                                -9px 9px 2px $dark,
                                -11px 11px 2px $dark;
                            }
                }
            }

        h2 {
            font-size: 3rem;
            margin-top: 10px;
            font-weight: bold;
        }

        p {
            font-size: 1.5rem;
            margin-top: 20px;
            max-width: 500px;
        }

        @media (max-width: 840px) {
            h1 {
                font-size: 10vw;
                #hand { height: 3rem; }
            }
            h2 {
                font-size: 1.5rem;
            }
            p { 
                font-size: 1rem;
            }
        }
    }
    
}


@keyframes wave-animation {
  0% { transform: rotate( 0.0deg) }
  8% { transform: rotate(14.0deg) }
  15% { transform: rotate(-8.0deg) }
  20% { transform: rotate(14.0deg) }
  35% { transform: rotate(-10.0deg) }
  50% { transform: rotate(0.0deg) }
  51% { transform: rotate(0.0deg) }
 100% { transform: rotate(0.0deg) }
}
</style>