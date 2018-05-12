import Kecheng from '../models/kecheng';

class KechengControllers {
    async find(ctx) {
        ctx.body = await Kecheng.find();
    }

    async findById(ctx) {
        try {
            const model = await Kecheng.findById(ctx.params.id);
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
            const model = await new Kecheng(ctx.request.body).save();
            ctx.body = model;
        } catch (err) {
            ctx.throw(422);
        }
    }

    async update(ctx) {
        try {
            const model = await Kecheng.findByIdAndUpdate(
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

    async delete(ctx) {
        try {
            const city = await Kecheng.findByIdAndRemove(ctx.params.id);
            if (!city) {
                ctx.throw(404);
            }
            ctx.body = city;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }
}

export default new KechengControllers();