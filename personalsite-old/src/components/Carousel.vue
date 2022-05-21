<template>
<div id='carousel' class='col center' data-aos='fade-down'>
    <h1>Just kidding. I love all my children equally.</h1>
    <splide :options='options' :data-splide='splideStyle'>
        <splide-slide v-for='item, index in slides' :key='index'>
            <div class='slide' @click='window.open(item.url, item.name)'>
                <img :src='item.image' />
                <img src='@/assets/misc/link.svg' />
            </div>
        </splide-slide>
    </splide>
</div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
    name: 'Carousel',
    components: { Splide, SplideSlide },
    data() {
        return {
            window: window,
            options: {
                type: 'loop',
                rewind: true,
                gap: '0.3rem',
                flickMaxPages: '2',
                autoplay: true,
                pauseOnHover: true,
                pauseOnFocus: true,
                cover: true,
                clones: 0,
                keyboard: true,
                waitForTransition: true,
                width: '100%',
                height: 400
            },
            slides: [
                {
                    name: 'Lorem Shreksum',
                    url: "https://loremshreksum.netlify.app",
                    image: require('@/assets/screenshots/loremshreksum.png')
                },
                {
                    name: 'Spotifinder',
                    url: "https://spotifinderapp.herokuapp.com",
                    image: require('@/assets/screenshots/spotifinder.png')
                },
                {
                    name: 'girlfriendeatts',
                    url: "https://girlfriendeats.netlify.app",
                    image: require('@/assets/screenshots/girlfriendeats.png')
                },
                {
                    name: 'newsinator',
                    url: "https://newsinator.netlify.app",
                    image: require('@/assets/screenshots/newsinator.png')
                },
                {
                    name: 'Spicy Console',
                    url: "https://spicy-console.netlify.app",
                    image: require('@/assets/screenshots/spicyconsole.png')
                },
                {
                    name: 'Auto Game of Life',
                    url: "https://autogameoflife.netlify.app",
                    image: require('@/assets/screenshots/autogameoflife.png')
                }
            ]
        }
    },
    computed: {
        background: function () {
            let texture = require('@/assets/textures/diamonds.png')
            return `background-image: url(${texture})`
        },
        perPage: function () {
            return `"perPage" : ${window.innerWidth > 550 ? 3 : 2}`
        },
        height: function  () {
            return `"height" : ${window.innerWidth > 550 ? 400 : 200}`
        },
        splideStyle: function () {
            return `{${this.perPage}, ${this.height}}`
        }
    }
}
</script>

<style lang='scss'>
@import '@/_variables.scss';

#carousel {
    margin: 1% auto 0 auto;
    max-width: 1700px;
    width: 95vw;
    padding: 0 0 5% 0;
    height: fit-content;
    max-height: 700px;

    h1 {
        margin: 50px 0 2% 0;
        z-index: 2;
    }

    @media (max-width: 525px) {
        h1 {
            font-size: 2rem!important;
        }
    }
}

.slide {
    transition-duration: 0.3s;
    position: relative;
    cursor: pointer;
    height: 100%;

    img {
        height: 100%;
        object-fit: cover;
        transition-duration: 0.25s;
        transition-property: opacity;

        &:nth-child(1) {
            width: 100%;
        }

        &:nth-child(2) {
            position: absolute;
            top: 0px;
            right: 0px;
            height: 50px;
            visibility: hidden;
        }
    }

    &:hover {
        img {
            &:nth-child(1) {
                opacity: 0.4;
                clip-path: polygon(0 0, 75% 1%, 100% 25%, 100% 100%, 0 100%, 0% 50%);
            }

            &:nth-child(2) {
                visibility: visible;
            }
        }
    }

    @media (max-width: 800px) {
        &:hover {
            img {
                &:nth-child(1) {
                    clip-path: none;
                }
                
                &:nth-child(2) {
                    visibility: hidden;
                }
            }
        }
    }
}
</style>