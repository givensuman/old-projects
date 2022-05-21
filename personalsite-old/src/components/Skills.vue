<template>
    <div id='skills' class='col center' data-aos='zoom-out' data-aos-delay='200'>
        <div id='background' :style='background'>
            <h1>My Skills</h1>
            <div class='row center'>
                <div v-for='(item, index) in skillData' :key='index' id='skill-wrapper' class='col center'>
                    <img :src='item.image' />
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                'Javascript', 'React', 'Vue', 'Sass', 'Bootstrap', 'Tailwind', 'Node', 'Express', 'Figma', 'Python', // Stack Overflow
            ]
        }
    },
    computed: {
        skillData: function() {
            let data = []
            this.skills.map(item => data.push({
                name: item, 
                image: require(`@/assets/skill_icons/${item.toLowerCase().replace(/\s+/g, '')}.svg`)
                })
            )
            return data
        },
        background: function() {
            let texture =  require('@/assets/textures/diamonds.png')
            return `background-image: url(${texture})`
        }
    }
}
</script>

<style lang='scss'>
@import '@/_variables.scss';

#skills {
    height: fit-content;
    margin: 5% 0;
    width: 100%;
    color: $light;
    
    #background {
        padding: 15px;
        background-color: $accent5;
        width: 100%;
    }
}

#background {
    div {
        flex-wrap: wrap;
    }
}

#skill-wrapper {
    margin: 10px 10px;
    animation-name: float-animation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    cursor: default;

    img {
        height: 100px;
        max-height: 10vh;
        width: auto;
        margin-bottom: 5px;
    }

    span {
        font-size: 1.5rem;
    }

    &:nth-child(2), &:nth-child(6), &:nth-child(10) {
        animation-delay: 250ms;
        animation-timing-function: ease-in-out;
    }
    &:nth-child(3), &:nth-child(7){
        animation-delay: 500ms;
        animation-timing-function: ease-in;
    }
    &:nth-child(4), &:nth-child(8){
        animation-delay: 750ms;
        animation-timing-function: ease-out;
    }
    
}

@keyframes float-animation {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 7px); }
    100%   { transform: translate(0, -0px); }   
}
</style>