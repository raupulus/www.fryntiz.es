import { createStore } from 'vuex'
import projectsStore from './projects'
import siteStore from './site/index';

export default createStore({
    modules: {
        projects: projectsStore,
        site: siteStore
    }
})