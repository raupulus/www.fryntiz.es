import { Commit } from "vuex";
import { siteInfo } from '@/apis';

export const fetchApi = async ({ commit }: { commit: Commit }): Promise<boolean> => {
    
    const resp = await siteInfo();

    commit('appendInfo', resp);

    return true;
}