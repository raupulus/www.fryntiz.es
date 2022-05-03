import { SiteInfo } from '../../interfaces/siteInterfaces';
import { platforms, resources } from './getters';

/**
 * Obtiene la información de la plataforma como autor, tecnologías, versión...
 * @param state 
 * @param info 
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const appendInfo = (state: any, info: SiteInfo):void => {
    state.message = info.message;
    state.name = info.name;
    state.version = info.version;
    state.author = info.author;
    state.platforms = info.platforms;
    state.technologies = info.technologies;
    state.resources = info.resources;
}