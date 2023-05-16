function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
var mykey = $prefs.valueForKey("mykey");
if(mykey == undefined){
    let key = generateUUID();
    $prefs.setValueForKey(key, "mykey");
    $notify('创建成功！！','你的key为：',$prefs.valueForKey("mykey"));
}else{
    $notify('请勿重复创建key','你的key为：',mykey);
}
$done();
