import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import CommentControllers from '../controllers/comments';
import isLogin from "../middlewares/isLogin";

const api = 'comments';

const router = new Router(); 

router.prefix(`/${baseApi}/${api}`);

router.get('/',isLogin ,CommentControllers.find);

router.post('/',isLogin , CommentControllers.add);

router.get('/:id',isLogin , CommentControllers.findById);

router.put('/:id',isLogin , CommentControllers.update);

router.delete('/:id',isLogin , CommentControllers.delete);

export default router;