//引入Mongodb
const {MongoClient} = require("mongodb")

//定义数据库连接的地址
const url = "mongodb://127.0.0.1:27017"

//定义要操作的数据库名
const dbName = "nodeMail"

//实例化MongoClient 传入数据库连接地址,加入第二个参数防止后期不被支持
const client = new MongoClient(url,{ useNewUrlParser: true,  useUnifiedTopology: true })

//连接数据库
client.connect((err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("数据库连接成功");
    let db = client.db(dbName)


    //search
    db.collection("mailText").find({}).toArray((err,data) => {
        console.log(err,data);
        //操作数据库完毕以后一定要关闭数据库连接
        client.close();
    })
})

