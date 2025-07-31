
 export const Routers = {
    MAIN: '/',
    postDetails:(id: number) => `en/posts/${id}`,
    auth: {
         login: '/auth/login',
         register: '/auth/register', 
    }
 }