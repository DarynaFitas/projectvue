<template>
  <div>
    <navbar-master-page></navbar-master-page>
    <family-page></family-page>
    <cooking-page></cooking-page>
  </div>
</template>

<script>
import FamilyPage from '@/views/FamilyPage.vue'
import CookingPage from '@/views/CookingPage.vue'
import NavbarMasterPage from '@/components/masterpages/NavbarMasterPage.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    NavbarMasterPage,
    FamilyPage,
    CookingPage,

  },
  name: 'HomeView',
  computed: {
    ...mapGetters('recipes',['getItemsList', 'isLoading']),
  },
  created() {
    this.loadList()
  },
  methods: {
    ...mapActions('recipes',['loadList', 'addItem', 'deleteItem', 'updateItem', 'loadFilteredData']),



  },

}
</script>

<style lang="scss" scoped></style>