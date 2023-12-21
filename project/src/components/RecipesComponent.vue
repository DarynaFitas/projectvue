<template>
    <div>
        <h1>Кухня</h1>
            <div>
                <div>
                    Запитання
                    <input v-model="recipes.title" type="text" />
                </div>
                <div>
                    Опис
                    <input v-model="recipes.text" type="text" />
                </div>

                <button @click="addItem(recipes)">Add</button>


                <hr />
            </div>
    </div>
    <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'HomeView',
    data() {
        return {
            recipes: {},
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
