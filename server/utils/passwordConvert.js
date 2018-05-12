import { createHash } from "crypto";

export const  convertPassWord = (password)=>{
    const  md5 = createHash('md5');
    return md5.update(password).digest('hex').toLocaleLowerCase();
}

export const  eqPassWord = (hash,password)=>{
    const  md5 = createHash('md5');
    return md5.update(password).digest('hex').toLocaleLowerCase() === hash;
}
