export interface Projects {
    elements: Project[] | [],
    categories: ProjectCategory[] | [],
    currentCategorySlug?: string | null,
}

export interface Project {
    id: number,
    title: string,
    description: string,
    image: string,
    tags?: string[],
    links?: ProjectLink[]
}

export interface ProjectLink {
    type: string,
    name: string,
    url: string,
}

export interface ProjectCategory {
    name: string,
    slug: string,
}