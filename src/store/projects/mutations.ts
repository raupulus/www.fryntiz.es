import { Projects } from '../../interfaces/projectInterface';
import { elements } from './getters';

export const appendProjects = (state: any, projects: Projects) => {
    state.elements = projects.elements;
    state.categories = projects.categories;
    state.currentCategorySlug = projects.currentCategorySlug;

    if (projects.categories && projects.categories.length) {
        state.currentCategory = projects.categories.find(e => e.slug == projects.currentCategorySlug) ?? null;
    }
}