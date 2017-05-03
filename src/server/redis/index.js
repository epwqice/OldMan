const redis = require("redis");

const client = redis.createClient(6379, '127.0.0.1', {});

// 密码
//client.auth('密码');

// 选择数据库，比如第3个数据库，默认是第0个
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
  console.log("Error " + err);
});

// 设置键值
client.set("Testing", "string val", redis.print);

// 取值
client.get("Testing", function(err, replies) {

});

// 其它API
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
  console.log(replies.length + " replies:");
  replies.forEach(function (reply, i) {
    console.log("    " + i + ": " + reply);
  });
  client.quit();
});


// 枚举趣出数据库中的所有键
client.keys('*', function (err, keys) {

});