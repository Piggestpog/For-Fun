/*
脚本引用https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/jingdong.js
*/
// 2024-01-23 09:50

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("functionId=getTabHomeInfo")) {
  // 新品页面
  if (obj?.result?.iconInfo) {
    // 新品页 悬浮动图
    delete obj.result.iconInfo;
  }
  if (obj?.result?.roofTop) {
    // 新品页 下拉二楼
    delete obj.result.roofTop;
  }
}

$done({ body: JSON.stringify(obj) });
