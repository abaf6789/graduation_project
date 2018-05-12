export const port = process.env.PORT || 3000;
export const connexionString = 'mongodb://localhost/koa-boilerplate';
export const baseApi = 'api';
export const sessionConfig = {
    key: 'koa:sess',  
    maxAge: 86400000,
    overwrite: true, 
    httpOnly: true, 
    signed: true, 
    rolling: false, 
    renew: false
};
export const sessionSecret = "sessionSecret"
