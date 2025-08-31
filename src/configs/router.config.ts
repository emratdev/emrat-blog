
 export const Routers = {
    main: '/',
    postDetails:(id: number) => `/posts/${id}`,
    auth: {
         login: '/auth/login',
         register: '/auth/register', 
    }
 }