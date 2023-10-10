export type Movie = {
    id: number
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    }

export type MovieDetail = {
    id: number
    created_at: string
    title: string
    photo: string
    vote_average: number
    qualified: boolean
}