import Users from "../models/users";
import { eqPassWord } from "../utils/passwordConvert";

export default async ctx => {
  const req = ctx.request.body

  if (!req.name || !req.password) {
    ctx.status = 400
    ctx.body = {
      message: 'name or password is error'
    };
  } else {
    const user = await Users.findOne({ name: req.name })

    if (!user || !eqPassWord(user.password, req.password)) {
      ctx.status = 400
      ctx.body = {
        message: 'Login Fail'
      };
    } else {
      ctx.session.user = user
      ctx.status = 200
      ctx.body = {
        message: 'Login Success'
      };
    }
  }
};
