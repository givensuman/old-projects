<template>
    <div v-if='!loading'>
        <h1>You're logged in as {{this.user.user}}</h1>
        <div v-for='item in languages'>
            <p :style='{color: item.color}'
            >{{item.label}}</p>
        </div>
        <h1>Your repos:</h1>
        <div v-for='item, index in repos'>
            <div v-if='index < limit'>
                <Repo :data='item' />
            </div>
        </div>
        <button @click='setLimit'>Show More</button>
    </div>
    <div v-else>
    <h1>Loading...</h1>
    </div>
</template>

<script>
import Repo from './Repo.vue';

import polyglot from 'gh-polyglot';
// import { repos, userStats } from '@/mockdata.js';

export default {
    name: 'Main',
    props: ['user'],
    components: { Repo },
    data() {
        return {
            loading: false,
            languages: [],
            repos: [],
            limit: 5
        }
    },
    methods: {
        log() {
            console.log(getStats(this.user));
        },
        setLimit() {
            this.limit = this.limit + 5;
        }
    },
    created() {
        const me = new polyglot(this.user.login);
        me.userStats( (err, stats) => {
            this.languages = stats;
        });
        me.getAllRepos( (err, stats) => {
            this.repos = stats;
        })
        // this.languages = userStats;
        // this.repos = repos;
        this.load = true;
    }
}
</script>

<style lang='scss'>
.user {
    border: solid 2px black;
    padding: 15px;

    h1, h3, p {
        margin: 5px;
    }

    #image {
        height: 50px;
        width: 50px;
        background-image: linear-gradient(125deg, red, orange, yellow, lime, blue, purple);
        border-radius: 50%;
    }
}

.repo {
    margin: 15px;
    border: solid 2px black;
    border-radius: 5px;
    padding: 10px;

    p {
        margin: 3px;
    }

    .reponame {
        font-size: 1.3rem;
        font-weight: bold;
    }
}

.repos {
    max-width: 500px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>