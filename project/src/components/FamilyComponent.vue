<template>
    <div id="app">
        <h1>Сімейні питання</h1>
        <div>
            <div>
                Запитання
                <input v-model="family.title" type="text" />
            </div>
            <div>
                Опис
                <input v-model="family.text" type="text" />
            </div>

            <button @click="addItem(family)">Add</button>


            <hr />
        </div>

    </div>
    <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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