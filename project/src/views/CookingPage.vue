<template>
    <div id="app">
          <div v-for="item in getItemsList" :key="item.id">
            {{ item.title }} - {{ item.text }}
            <button @click="deleteItem(item.id)">Delete</button>
            </div>
    <router-link to="/recipesComponent">Add new post to cooking categoty</router-link> 
    </div>
    <router-view/>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
        recipes: { },
        }
    },
    computed: {
        ...mapGetters('recipes', ['getItemsList', 'isLoading']),
    },
    created() {
        this.loadList()
    },
    methods: {
        ...mapActions('recipes', ['loadList', 'addItem', 'deleteItem', 'updateItem', 'loadFilteredData']),

        loadFilteredTitle() {
        this.loadFilteredData({ fieldTitle: 'title', compareOperator: '==', valueToCompare: this.titleToFind })
    },

    },

}
</script>

<style lang="css" scoped>

</style>
