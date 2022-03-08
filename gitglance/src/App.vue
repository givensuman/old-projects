<template>
  <div id="app">
    <Login v-if='!render' @updateUser='updateUser'/>
    <Main v-else :user='user'/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';

import polyglot from 'gh-polyglot';
// import { user } from '@/mockdata.js';
import { getUser, setUser } from '@/github.js';

export default {
  name: 'App',
  data() {
    return {
      user: {},
      render: false
    }
  },
  components: {
    Login, Main
  },
  methods: {
    async updateUser(value) {
      let res = await getUser(value);
      this.user = res.data;
      // this.user = user;
      this.render = true;
    }
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  position: center;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
}

body, html {
  margin: 0;
}

.col {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}
.center {
  align-items: center;
  justify-content: center;
}
</style>
