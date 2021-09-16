import fetchNewsUrl from "../../config";

// INIT STATE
const initialState = {
    news: [],
    favorites: []
};

// ACTION TYPES
const GET_NEWS = "GET_NEWS";
const ADD_FAVORITES = "ADD_FAVORITES";

// ACTIONS CREATOR
export const _getNews = (news) => {
    return {
        type: GET_NEWS,
        payload: news
    };
};
export const toggleFavorite = (newsUrl) => {
    return {
        type: ADD_FAVORITES,
        payload: newsUrl
    };
};

// ASYNC ACTION CREATOR
export const fetchNews = () => {
    return async (dispatch) => {
        try {
            const news = await fetch(fetchNewsUrl);
            const newsJSON = await news.json();
            // console.log("=> FETCH JSON: ", newsJSON);

            dispatch(_getNews(newsJSON));
        } catch (err) {
            console.log("FETCH NEWS ERR:", err);
        }
    };
};
// export const addRemoveFavorites = () => {
//     return async (dispatch) => {
//         try {
//             //
//         } catch (err) {
//             console.log("ADD/REMOVE FAVORITE ERR:", err);
//         }
//     };
// };

// REDUCER
function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload
            };
        case ADD_FAVORITES:
            // console.log("REDUCER STATE > ", state.news.articles);
            // RETUNS 1 IF EXISTS, -1 IF DOES NOT
            // eslint-disable-next-line no-case-declarations
            const favIdx = state.favorites.findIndex(
                (article) => article.url === action.payload
            );
            // IF EXIST(>=0) THEN REMOVE, ELSE ADD
            if (favIdx >= 0) {
                const favorites = [...state.favorites]; // NO MUTATION
                favorites.splice(favIdx, 1); // REMOVE FAV-ARTICLE THAT EXIST IN THE ARRAY
                return {
                    ...state,
                    favorites: favorites
                };
            } else {
                const article = state.news.articles.find(
                    (article) => article.url === action.payload
                );
                console.log("REDUCER FOUND FAV-ARTICEL: ", article);
                return {
                    ...state,
                    favorites: [...state.favorites, article]

                    // favorites: state.favorites.concat(article)
                };
            }
        default:
            return state;
    }
}
export default newsReducer;
