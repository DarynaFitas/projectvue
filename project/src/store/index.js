import { createStore } from 'vuex'
import auth from './modules/auth'
import recipes from './modules/recipes'
import family from './modules/family'
export default createStore({
    namespaced: true,
    modules: {
      recipes, 
      family,
      auth,
    }
})
