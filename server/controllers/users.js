import Users from '../models/users';
import { convertPassWord } from "../utils/passwordConvert";

class UsersControllers {
    async find(ctx) {
        ctx.body = await Users.find({},{password:0});
    }

    async findById(ctx) {
        try {
            const model = await Users.findById(ctx.params.id,{password:0});
            if (!model) {
                ctx.throw(404);
            }
            ctx.body = model;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    async add(ctx) {
        try {
            const req = ctx.request.body
            req.password = convertPassWord(req.password)
            const model = await new Users(ctx.request.body).save();
            ctx.body = model;
        } catch (err) {
            ctx.throw(422);
        }
    }

    async update(ctx) {
        try {
            delete ctx.request.body.password
            const model = await Users.findByIdAndUpdate(
                ctx.params.id,
                ctx.request.body
            );
            if (!model) {
                ctx.throw(404);
            }
            ctx.body = model;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    async updateRole(ctx) {
        try {
            
            const model = await Users.findByIdAndUpdate(
                ctx.params.id,
                {
                    role:ctx.request.body.role
                }
            );
            if (!model) {
                ctx.throw(404);
            }
            ctx.body = model;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    async delete(ctx) {
        try {
            const model = await Users.findByIdAndRemove(ctx.params.id);
            if (!model) {
                ctx.throw(404);
            }
            ctx.body = model;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }
}

export default new UsersControllers();