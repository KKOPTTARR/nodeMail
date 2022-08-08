const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

//连接mongodb
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    //数据库名
    const dbo = db.db("nodeMail");

    //插入数据的内容
    const myobj = { name: "test1", url: "www.test1.com" };

    //insert
    dbo.collection("mailText").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});