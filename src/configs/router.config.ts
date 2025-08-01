
 export const Routers = {
    main: '/en',
    postDetails:(id: number) => `en/posts/${id}`,
    auth: {
         login: 'en/auth/login',
         register: 'en/auth/register', 
    }
 }