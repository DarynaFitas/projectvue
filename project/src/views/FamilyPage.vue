<template>
    <div id="app">
        <div v-for="item in getItemsList" :key="item.id">
            {{ item.title }} - {{ item.text }}
            <button @click="deleteItem(item.id)">Delete</button>
        </div>
        <router-link to="/familyComponent">Add new post to family categoty</router-link>
    </div>
    <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { 
    },
    name: 'HomeView',
    data() {
        return {
            family: {},
        }
    },
    computed: {
        ...mapGetters('family', ['getItemsList', 'isLoading']),
    },
    created() {
        this.loadList()
    },
    methods: {
        ...mapActions('family', ['loadList', 'addItem', 'deleteItem', 'updateItem', 'loadFilteredData']),

        loadFilteredTitle() {
            this.loadFilteredData({ fieldTitle: 'title', compareOperator: '==', valueToCompare: this.titleToFind })
        },

    },
};
</script>