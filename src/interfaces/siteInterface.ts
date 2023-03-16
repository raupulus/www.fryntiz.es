export interface SiteInfo {
    message: string,
    name: string,
    version: number,
    author: string,
    platforms: SitePlatform[],
    technologies: string[],
    resources: SiteResource[],
}

export interface SitePlatform {
    name: string,
    url: string,
    icon?: string
}

export interface SiteResource {
    name: string,
    url: string,
    icon?: string,
}