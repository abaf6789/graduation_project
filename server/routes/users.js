import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import UsersControllers from '../controllers/users';
import authenticate from '../middlewares/authenticate'
import isLogin,{isAdmin} from "../middlewares/isLogin";

const api = 'users';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

router.get('/',isLogin , UsersControllers.find);

router.post('/',isLogin , UsersControllers.add);

router.post('/session',authenticate)

router.get('/:id',isLogin , UsersControllers.findById);

router.put('/:id',isLogin , UsersControllers.update);

router.put('/:id/role',isAdmin , UsersControllers.updateRole);

router.delete('/:id',isAdmin , UsersControllers.delete);

export default router;