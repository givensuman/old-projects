<template>
</template>

<script>
import { achievements } from '@/achievements.js'

export default {
    name: 'Achievement',
    props: ['id'],
    data() {
        return {
            outOf: `1/${achievements.length}`
        }
    },
    mounted() {
        console.log(this.id)

        let earnedAchievements = JSON.parse(localStorage.getItem('achievements')) || []
        if (!earnedAchievements.includes(this.id)) {
            earnedAchievements.push(this.id)          
        }
        localStorage.setItem('achievements', JSON.stringify(earnedAchievements))
        this.outOf = `${earnedAchievements.length}/${achievements.length}`
        this.snackbar(this.id)
    },
    methods: {
        snackbar(id) {
            let data = achievements.filter(item => item['id'] === id)[0]
            console.log(data)
            this.$buefy.snackbar.open({
                duration: 4000,
                message: `
                <div class='row center' id='achievement'>
                    <img src=${data.image} />
                    <div class='col'>
                        <h1>Achievement unlocked:</h1>
                        <h2><b>${data.name}</b></h2>
                        <p><em>${data.description}</em></p>
                        <span>${this.outOf}</span>
                    </div>
                </div>
                `,
                position: 'is-bottom',
                queue: true,
                indefinite: false,
                actionText: null
            })
        },
    }
}
</script>

<style lang='scss'>
#achievement {
    text-align: center;
    max-width: 80vw;

    h1 {
        font-size: 1.2rem;
    }

    h2 {
        font-size: 1.1rem;
    }

    img {
        height: 100px;
        width: auto;
    }

    span {
        color: #b0b0b0;
    }
}
</style>