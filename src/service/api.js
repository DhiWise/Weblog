import { apis } from "service";

const COMMON_URL = `https://`;

const API_KEY = "Enter_your_Dev_to_API_Key_here";
const ACCESS_TOKEN = "Enter_your_Medium_integration_token_here";
const USER_ID = "Enter_your_Medium_User_ID_here";

const API_URLS = {
  GET_ARTICLESPERPAGE6TAGREACT: `${COMMON_URL}dev.to/api/articles`,
  GET_ME2: `${COMMON_URL}dev.to/api/users/me`,
  GET_ME: `${COMMON_URL}api.medium.com/v1/me?`,
  GET_PUBLICATIONS: `${COMMON_URL}api.medium.com/v1/users/${USER_ID}/publications?`,
  GET_LATESTPERPAGE3: `${COMMON_URL}dev.to/api/articles/latest?per_page=3`,
  POST_POSTS: `${COMMON_URL}api.medium.com/v1/users/${USER_ID}/posts`,
  GET_ME1: `${COMMON_URL}dev.to/api/articles/me?`,
  POST_ARTICLES: `${COMMON_URL}dev.to/api/articles`,
};

export const getArticlesperpage6tagreact = (payload) =>
  apis.get(API_URLS.GET_ARTICLESPERPAGE6TAGREACT, {
    ...payload,
    params: { ...payload?.params },
  });

export const getArticles = (payload) =>
  apis.get(`https://dev.to/api/articles/${payload?.path?.id}`, {
    ...payload,
    headers: {
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const getMe2 = (payload) =>
  apis.get(API_URLS.GET_ME2, {
    ...payload,
    headers: {
      "api-key": API_KEY,
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const getMe = (payload) =>
  apis.get(API_URLS.GET_ME, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${ACCESS_TOKEN}`,
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const getPublications = (payload) =>
  apis.get(API_URLS.GET_PUBLICATIONS, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${ACCESS_TOKEN}`,
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const getLatestperpage3 = (payload) =>
  apis.get(API_URLS.GET_LATESTPERPAGE3, {
    ...payload,
    params: { per_page: "3", ...payload?.params },
  });

export const postPosts = (payload) =>
  apis.post(API_URLS.POST_POSTS, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const getMe1 = (payload) =>
  apis.get(API_URLS.GET_ME1, {
    ...payload,
    headers: {
      "api-key": API_KEY,
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const postArticles = (payload) =>
  apis.post(API_URLS.POST_ARTICLES, {
    ...payload,
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
      ...payload?.headers,
    },
  });
