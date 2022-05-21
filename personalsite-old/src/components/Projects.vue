<template>
    <div id='projects' class='col'>
        <h1 data-aos='zoom-out'>Here are some of my favorite projects:</h1>
        <div v-for='item in projects' id='project-wrapper' @click='openUrl(item.url)' :data-aos='item.aos'>
            <div id='text' :class='item.align'>
                <h1>{{item.name}}</h1>
                <p>{{item.description}}</p>
                <img :src='item.image' alt='item.name' />
            </div>
            <div id='madeWith' :class='item.align'>
                <span v-for='str, index in item.madeWith'>
                    {{ str + (index !== item.madeWith.length - 1 ? ' |' : '') }} 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            projects: [
                {
                    name: 'chatcat',
                    description: 'A real-time chat application using socket.io focused on privacy and flexibility',
                    madeWith: ['React', 'Sass', 'Bootstrap', 'Node'],
                    image: require('@/assets/screenshots/chatcat.png'),
                    url: 'https://chatcat.app',
                    align: 'left',
                    aos: 'zoom-out-left'
                },
                {
                    name: 'johnmulapi',
                    description: 'A RESTful API that delivers John Mulaney quotes',
                    madeWith: ['Javascript', 'Express'],
                    image: require('@/assets/screenshots/johnmulapi.png'),
                    url: 'https://johnmulapi.com',
                    align: 'right',
                    aos: 'zoom-out-right'
                },
                {
                    name: 'moot',
                    description: 'Color-blind friendly syntax highlighting for VSCode',
                    madWith: [],
                    url: 'https://moottheme.netlify.app',
                    image: require('@/assets/screenshots/moot.png'),
                    align: 'left',
                    aos: 'zoom-out-left'
                }
            ]
        }
    },
    methods: {
        openUrl(url) {
            window.open(url)
        }
    }
}
</script>

<style lang='scss'>
@import '@/_variables.scss';

#projects {
    height: fit-content;
    max-height: 1200px;
    margin: 7% 0;
    align-items: center;
    position: relative;

    @media (max-width: 525px) {
        h1 {
            font-size: 2rem!important;
        }
    }

    #project-wrapper {
        margin: 60px;
        position: relative;
        max-width: 600px;
        width: 80%;
        padding: 20px;
        cursor: pointer;
        border-radius: 15px;

        h1 {
            cursor: pointer;
        }

        @media (max-width: 750px) {
            #text {
                h1, p {
                    position: relative;
                    bottom: 60px;
                }
            }

            #madeWith {
                visibility: hidden;
            }
        }

        #text {
            display: flex;
            flex-direction: column;

            p {
                padding: 10px;
                margin: 5px 0;
                max-width: 40ch;
                background-color: $accent2;
                color: $dark;
                box-shadow: 5px 5px 10px $accent5;
            }
        }

        .left {
            text-align: left;
            align-items: flex-start;

            img {
                position: absolute;
                right: 0;
                max-width: 300px;
            }
        }

        .right {
            text-align: right;
            align-items: flex-end;

            img {
                position: absolute;
                left: 0;
                max-width: 300px;
            }
        }

        img {
            opacity: 0.8;
            z-index: -1;
            border: solid 2px $dark;
            box-shadow: 1px 1px 5px $dark;
        }

        #madeWith {
            margin: 5px 0;
        }

        &:hover {
            transform: scale(1.05);
            transition-duration: 0.7s;
        }
        &:nth-child(2):hover {
            h1, #madeWith {
                color: $accent2;
            }
        }
        &:nth-child(3):hover {
            h1, #madeWith {
                color: $accent2;
            }
        }
        &:nth-child(4):hover {
            h1, #madeWith {
                color: $accent2;
            }
        }
    }
}
</style>