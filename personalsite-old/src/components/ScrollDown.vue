<template>
    <img :src='background' />
</template>

<script>
export default {
    name: 'ScrollDown',
    data() {
        return {
            background: require('@/assets/misc/down.png')
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/_variables.scss';


img {
  cursor: pointer;
  height: 30px;
  width: 30px;
  line-height: 60px;
  position: absolute;
  bottom: 30px;
  margin: 0 auto 0 auto;
  text-decoration: none;

  -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
  -moz-animation:    ca3_fade_move_down 2s ease-in-out infinite;
  animation:         ca3_fade_move_down 2s ease-in-out infinite;
}


@-webkit-keyframes ca3_fade_move_down {
  0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,20px); opacity: 0; }
}
@-moz-keyframes ca3_fade_move_down {
  0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,20px); opacity: 0; }
}
@keyframes ca3_fade_move_down {
  0%   { transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,20px); opacity: 0; }
}
</style>