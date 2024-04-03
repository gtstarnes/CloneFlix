const api_key = '8afd6839e8a778ced0dc0b6500cd3adb'

const requests= {
    requestHorror: "https://api.themoviedb.org/3/discover/movie?api_key=8afd6839e8a778ced0dc0b6500cd3adb&with_genres=27",
    requestUpcoming: "https://api.themoviedb.org/3/movie/upcoming?api_key=8afd6839e8a778ced0dc0b6500cd3adb",
    requestTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=8afd6839e8a778ced0dc0b6500cd3adb",
    requestPopular: "https://api.themoviedb.org/3/movie/popular?api_key=8afd6839e8a778ced0dc0b6500cd3adb",
    requestComedy: "https://api.themoviedb.org/3/discover/movie?api_key=8afd6839e8a778ced0dc0b6500cd3adb&with_genres=35",
    requestCrime: "https://api.themoviedb.org/3/discover/movie?api_key=8afd6839e8a778ced0dc0b6500cd3adb&with_genres=80",
    requestAnimation: "https://api.themoviedb.org/3/discover/movie?api_key=8afd6839e8a778ced0dc0b6500cd3adb&with_genres=16",
    requestDrama: "https://api.themoviedb.org/3/discover/movie?api_key=8afd6839e8a778ced0dc0b6500cd3adb&with_genres=18",
    requestPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`,
    requestTv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`,
    
}


export default requests