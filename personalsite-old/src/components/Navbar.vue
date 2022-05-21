<template>
<div>
<div id='navbar' :style='navbarAnimation'>
    <a href='#skills'><span class='emoji'>🐱‍💻</span> Skills</a>
    <a href='#projects'><span class='emoji'>🚀</span> Projects</a>
    <a href='#contact'><span class='emoji'>🧙‍♂️</span> Contact</a>
</div>
<div id='navbutton' v-if='scrolled' class='animate__animated animate__fadeInUp'>
    <button @click='scrollUp' class='col center'>
    <img :src='require("@/assets/emojis/up.png")' />
    <span>Back To Top</span>
    </button>
</div>
</div>
</template>

<script>
export default { 
    name: 'Navbar',
    data() {
        return {
            scrolled: false
        }
    },
    computed: {
        navbarAnimation: function () {
            return `transform: ${this.scrolled ? "translateY(-300px)" : "translateY(0px)"}; transition-duration: 1.2s;`
        }
    },
    methods: {
        scrollUp() {
            window.scrollTo(0, 0)
            this.scrolled = false
            this.$emit('achievement', 'top')
            window.history.replaceState({}, document.title, "/")
        }
    },
    mounted() {
        window.addEventListener('scroll', e => {
            if (window.scrollY > 10) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        })
    },
}
</script>

<style lang='scss'>
@import '@/_variables.scss';

#navbar {
    width: fit-content;
    position: fixed;
    top: 20px;
    right: 30px;
    z-index: 2;
    transition-property: transform;

    a {
        color: inherit;
        text-decoration: none;
        margin: 0 15px;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0 5px 0;
        background-color: transparent;
        transition-duration: 0.25s;

        &:hover {
            .emoji {
                display: inline-block;
                transform: rotate(-6deg) scale(1.15);
            }
        }
    }
}

@media (max-width: 595px) {
    #navbar {
        display: flex;
        flex-direction: column;
    }        
}

#navbutton {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 2;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: inherit;

        img {
            height: 3rem;
            margin-bottom: 5px;
            transition-duration: 0.3s;
            animation-duration: 1.5s;
            animation-name: none;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }

        span {
            font-size: 1.5rem;
            transition-duration: 0.3s;
        }

        &:hover {
            span {
                transform: scale(1.1);
            }

            img {
                -webkit-animation-name: bounceup; 
                animation-name: bounceup; 
            }
        }
    }
}

 @-webkit-keyframes bounceup { 
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);} 
    40% {-webkit-transform: translateY(-30px);} 
    60% {-webkit-transform: translateY(-15px);} 
} 
    
@keyframes bounceup { 
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);} 
}
</style>