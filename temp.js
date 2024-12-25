
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.m.jd.com/client.action?functionId=searchWare`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `pin=18032779831_p;wskey=AAJm0JbfAEDuWi-gTQxbg1Fcu0CKqY3bY7EFcNc7lRE88PihWEiFfNYwazYtwF3ihVRYl-HAm5uciFdRZ8b0dZCDapX3WIz6;whwswswws=BApXSrSRm_vZD2LMIbgVhMA9gf0MoDJe3GDQsiDL09xJ1MnCtzYAys36L_A;unionwsws={"jmafinger":"BApXSrSRm_vZD2LMIbgVhMA9gf0MoDJe3GDQsiDL09xJ1MnCtzYAys36L_A","devicefinger":"eidIf9b68121f4savhZDzUpqStmFZsMG80lO874WRV7pN1nWZSZCQG1aORxvGZUueEG3yHFiFxVz5anGHcx7g1Givdj8dt1G7NFIIpZ3YT0JbmX7fU9L"}`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `*/*`,
'Host' : `api.m.jd.com`,
'User-Agent' : `JD4iPhone/167814 (iPhone; iOS 14.3; Scale/3.00)`,
'Referer' : ``,
'Accept-Language' : `zh-Hans-US;q=1, en-US;q=0.9`
};
const body = `area=5_142_60619_60795&body=%7B%22mtest%22%3A%22%22%2C%22activtyType%22%3A%22%22%2C%22pageId%22%3A%22Shop_AllProducts%22%2C%22pvid%22%3A%22%22%2C%22searchType%22%3A%223%22%2C%22keyWord%22%3A%22%22%2C%22activityId%22%3A%22%22%2C%22sourceRpc%22%3A%22shop_app_allware_list%22%2C%22lat%22%3A%2238.031182%22%2C%22shopId%22%3A1000096602%2C%22pageIdx%22%3A1%2C%22lng%22%3A%22114.601308%22%2C%22sort%22%3A%220%22%2C%22extend%22%3A%22%22%2C%22pageSize%22%3A20%7D&build=167814&client=apple&clientVersion=13.8.2&d_brand=apple&d_model=iPhone13%2C2&eid=eidIf9b68121f4savhZDzUpqStmFZsMG80lO874WRV7pN1nWZSZCQG1aORxvGZUueEG3yHFiFxVz5anGHcx7g1Givdj8dt1G7NFIIpZ3YT0JbmX7fU9L&isBackground=N&joycious=66&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=484c16a689c47ac46cd63804e5b4e81aadf3cc8d&osVersion=14.3&partner=apple&rfs=0000&scope=10&screen=1284%2A2778&sign=ffb70765fccf4fcb2554e1547d853541&st=1735129573617&sv=101&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJPYOpkNG6sTPVxs5uTM715Yz4l4grhevWqf/7NJk%2BCGKCcHsV%2BhdDdBhHd0ipyaJJ8Be7%2B6U2yaOq6ohnZOups9jx/F8Ozgl4M8Sue6U/4uxsRufr7jhZzCQYziZ7U0Sjm98xfvWnkoka/oalFlRm6mO%2BCzA5/JmCABbszbO1Ijie%2BodaaH6z5Q%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
