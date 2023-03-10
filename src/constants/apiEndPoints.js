export const BACKEND_URL = 'http://localhost:5000/';
export const GET_ALL_CONTENTS = {
    url: 'contents',
    method: 'GET'
};
export const GET_CONTENT_BY_ID = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'GET'
});
export const GET_CONTENT_ENTRIES = (ContentID) => ({
    url: `content/${ContentID}/entries`,
    method: 'GET'
});
export const UPDATE_CONTENT_NAME = (ContentID) => ({
    url: `contents/${ContentID}`,
    method: 'PUT'
});
export const ADD_CONTENT = {
    url: 'content',
    method: 'POST'
};
export const ADD_NEW_FIELD = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'POST'
});
// export const GET_CONTENT_BY_ID = (ContentID) => ({
//     url: `api/content/${ContentID}`,
//     method: 'GET'
// });
// export const UPDATE_EVENT_ON_REGISTRATION = (EventID) => ({
//     url: `api/events/${EventID}`,
//     method: 'PATCH'
// });
// export const UPDATE_EVENT_ON_BOOKMARK = (EventID) => ({
//     url: `api/events/${EventID}`,
//     method: 'PATCH'
// });