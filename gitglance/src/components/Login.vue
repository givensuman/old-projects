<template>
    <div>
        <h1>gitglance</h1>
        <form @submit.prevent>
            <input type='text' v-model='inputValue' />
            <input type='submit' @click='updateUser'/>
        </form>
        <span v-if='error'>Must input a user</span>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            inputValue: '',
            error: false
        }
    },
    methods: {
        updateUser() {
            if (this.inputValue.length > 0) {
                this.$emit('updateUser', this.inputValue);
            } else {
                this.error = true;
            }
        }
    }
}
</script>