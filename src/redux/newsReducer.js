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

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload
            };
        default:
            return state;
    }
}
export default newsReducer;
