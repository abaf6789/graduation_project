import Comments from '../models/comments';

class CommentsControllers {
    async find(ctx) {
        ctx.body = await Comments.find();
    }

    async findById(ctx) {
        try {
            const model = await Comments.findById(ctx.params.id);
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
            ctx.request.body.userId = ctx.session.user.id
            const model = await new Comments(ctx.request.body).save();
            ctx.body = model;
        } catch (err) {
            ctx.throw(422);
        }
    }

    async update(ctx) {
        try {
            const model = await Comments.findByIdAndUpdate(
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
            const city = await Comments.findByIdAndRemove(ctx.params.id);
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

export default new CommentsControllers();