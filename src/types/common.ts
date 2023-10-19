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
    user_vote: number | null
}

export type responseTMDB = {
page: number
results: Movie[]
total_pages: number
total_results: number
}

export type recommendation = {
    id: number
    title: string
    base_movies: {
        id: any;
        title: any;
        overview: any;
        poster_path: any;
        vote_average: any;
        release_date: any;
    }[]
}