export interface ProjectDTO {
    _id: string,
    title: string,
    description: string,
    short_description: string,
    image: {
        key: string
        mimetype: string
        filename: string
        bucket: string
    }
    /* mondodb date */
    date: string,
    link: string,
    github: string,
    completed: boolean,
    tags: string[],
    qtdTags?: number
}
