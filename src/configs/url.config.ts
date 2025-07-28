
 export const Routers = {
    MAIN: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    ADD_POST: '/add-post',
    postDetails:(id: number) => `/posts/${id}`,
 }