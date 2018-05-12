import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import Koa from 'koa';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import helmet from 'koa-helmet';
import routing from './routes/';
import { port, connexionString,sessionSecret,sessionConfig } from './config';

import User from "./models/users"
import { convertPassWord } from './utils/passwordConvert'

mongoose.connect(connexionString);
mongoose.connection.on('error', console.error);

// Create Koa Application
const app = new Koa();

app.keys = [sessionSecret];


app
  .use(logger())
  .use(bodyParser())
  .use(helmet())
  .use(session(sessionConfig, app));

routing(app);

User.findOne({name:"admin"},(error,res)=>{
  if(!error && !res){
    new User({
      name:"admin",
      role:"admin",
      password:convertPassWord("admin")
    }).save()
  }
})

// Start the application
app.listen(port, () =>
  console.log(`✅  The server is running at http://localhost:${port}/`)
);
export default app;
 