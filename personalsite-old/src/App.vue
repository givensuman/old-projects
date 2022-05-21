<template>
  <div id="app" :class='theme'>
    <b-switch :style='showSwitch' id='toggle' size='is-large' type='is-dark' v-model='lightMode'></b-switch>
    <Navbar @achievement='processAchievement'/>
    <Body @achievement='processAchievement'/>
    <Achievement v-for='item, index in achievements' :key='index' :id='item'/>
  </div>
</template>

<script>
import Body from './components/Body'
import Navbar from './components/Navbar'
import Achievement from './components/Achievement'

export default {
  name: 'App',
  components: { Body, Navbar, Achievement },
  data() {
    return {
      lightMode: false,
      achievements: [],
      prevScroll: 0,
      currentScroll: 0
    }
  },
  watch: {
    lightMode: function () {
      if (this.lightMode) {
        localStorage.setItem('lightMode', true)
      } else {
        localStorage.setItem('lightMode', false)
      }
      this.processAchievement('theme')
    }
  },
  computed: {
    theme: function () {
      return this.lightMode ? "light" : "dark"
    },
    showSwitch: function () {
      return `transform: ${this.currentScroll <= this.prevScroll ? "translateY(0px)" : "translateY(-300px)"}; transition-duration: 0.5s;`
    }
  },
  methods: {
    processAchievement(id) {
      let earnedAchievements = JSON.parse(localStorage.getItem('achievements')) || []
      if (earnedAchievements.includes(id)) {
        return null
      } else {
        this.achievements.push(id)
      }
    }
  },
  mounted() {
    let theme = localStorage.getItem('lightMode')
    if (theme === 'true') {
      this.lightMode = true
    } else {
      this.lightMode = false
    }

    document.addEventListener('keydown', e => {
      if (e.key === 't') {
        this.lightMode = !this.lightMode
      }
    })

    if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('scroll', e => {
          this.prevScroll = this.currentScroll
          this.currentScroll = window.scrollY
      })

    this.processAchievement('hello')
  }
}
</script>

<style lang="scss">
// Global Styling
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
@import './_variables.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  font-family: $font;
  
  h1 {
    font-size: 3rem;
    cursor: default;
  }

  #toggle { 
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 2;
  }
}
</style>
