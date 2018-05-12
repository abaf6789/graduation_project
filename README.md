# Koa 2 Restful Boilerplate

## Description

Koa 2 RESTful API using :

* Koa 2
* Mongodb + Mongoose
* Babel
* Asynchronous Functions (Async/Await)

## Running

Install dependencies

```
yarn install
```

Start a Local Server

```
yarn start
```

Building and Running Production Server

```
npm run prod
```

## 实体

User
```
{
    name:String,
    password:String,
    role:String // admin teacher student,
    updated:Date
}

```

Kecheng
```
{
    name: String,  // 课程名称
    details: String, // 课程详情
    contents: Array, // 课程内容 string array
    vidoe: Array, //  视频地址  string array
    progress:Number, // 进度
    works:Array, // 作业（文档地址） string array
    updated: Date,  //   更新时间
}
```

Comment
```
{
    parentId:String, // 留言父ID 可以为空
    userId:String, // 用户id
    content:String, // 留言内容
    canReply:String, // 是否可以回复
    updated: Date,     // 更新时间
}
```

默认账号 admin admin

## 接口文档

get `/api/comments`

get `/api/comments/:id`

post `/api/comments`

put `/api/comments/:id`

delete `/api/comments/:id`

get `/api/kecheng`

get `/api/kecheng/:id`

post `/api/kecheng`

put `/api/kecheng/:id`

delete `/api/kecheng/:id`

get `/api/users`

get `/api/users/:id`

post `/api/users`

post `/api/users/session`

put `/api/users/:id`

put `/api/users/:id/role`

delete `/api/users/:id`






**Note : Please make sure your MongoDB is running before using `npm start` or `npm run prod`**

