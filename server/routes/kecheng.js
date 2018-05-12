import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import KechengControllers from '../controllers/kecheng';
import isLogin from "../middlewares/isLogin";

const api = 'kecheng';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

router.get('/',isLogin ,KechengControllers.find);

router.post('/',isLogin , KechengControllers.add);

router.get('/:id',isLogin , KechengControllers.findById);

router.put('/:id',isLogin , KechengControllers.update);

router.delete('/:id',isLogin , KechengControllers.delete);

export default router;