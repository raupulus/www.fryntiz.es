import { Commit } from "vuex";

export const fetchApi = async ({ commit }: { commit: Commit }): Promise<boolean> => {
    commit('appendInfo',['vue', 'tailwind']);


    /*
    if (state.gists.length === 0) {
                 return axios.get('https//api.github.com/gists')
                     .then(response => response.data)
                     .then(gists => context.commit(ADD_GISTS, gists);
            }
            */

    //console.log('test', commit);

    return true;
}