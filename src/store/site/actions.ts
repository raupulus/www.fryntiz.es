import { Commit } from "vuex";
import { siteInfo } from '@/apis';

export const fetchApi = async ({ commit }: { commit: Commit }): Promise<boolean> => {
    
    const resp = await siteInfo();

    console.log(resp);
    
    commit('appendInfo', ['vue', 'tailwind']);


    /*
    if (state.gists.length === 0) {
                 return axios.get('.env obtener API')
                     .then(response => response.data)
                     .then(gists => context.commit(ADD_GISTS, gists);
            }
            */

    //console.log('test', commit);

    return true;
}