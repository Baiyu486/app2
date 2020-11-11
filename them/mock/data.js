const Mock=require("mockjs");
module.exports=Mock.mock({
    "list|10":[{
        "img":"@image(200x100,@color)",
        "title":"@ctitle(2,6)",
        "cword":"@cword(2,12)",
        "price|1-10000":888,
        "num|1-5000":488,
    }]
}).list;