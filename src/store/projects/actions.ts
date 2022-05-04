import { getProjects } from "@/apis";
import { Commit } from "vuex";

export const fetchProjects = async ({ commit }: { commit: Commit }, params:any): Promise<boolean> => {
    
    const resp = await getProjects(params);

    commit('appendProjects', resp);

    return true;
}