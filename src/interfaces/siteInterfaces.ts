export interface SiteInfo {
    platforms: SitePlatform[],
    technologies: string[],
}

export interface SitePlatform {
    name: string,
    url: string,
    icon?: string
}