export default async (ctx, next) => {
    if(!ctx.session || !ctx.session.user){
        ctx.throw(401);
    }else{
        await next()
    }    
}

export const isAdmin = async (ctx, next) => {
    if(!ctx.session || !ctx.session.user || ctx.session.role !== "admin"){
        ctx.throw(401);
    }else{
        await next()
    }    
}