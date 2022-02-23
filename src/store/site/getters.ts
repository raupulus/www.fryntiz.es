import { SitePlatform } from '@/interfaces/siteInterfaces'


export const platforms = (state:any): SitePlatform[] => {
    return state.platforms;
}


export const resources = (state:any): string[] => {
    return state.resources;
}