<template>
    <div id='body' class='col'>
        <Hello />
        <Skills />
        <Projects />
        <Carousel />
        <Contact @achievement='$emit("achievement", "mail")'/>
        <Footer />
    </div>
</template>

<script>
import Hello from './Hello'
import Skills from './Skills'
import Projects from './Projects'
import Carousel from './Carousel'
import Contact from './Contact'
import Footer from './Footer'

export default {
    name: 'Body',
    components: { Hello, Skills, Projects, Carousel, Contact, Footer }
}
</script>

<style>
#body {
    z-index: 1;
    animation: none;
}
</style>