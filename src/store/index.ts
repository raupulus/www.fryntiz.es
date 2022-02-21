import { createStore } from 'vuex'
import projectsStore from './projects'

export default createStore({


    modules: {
        projects: projectsStore,
    }

})