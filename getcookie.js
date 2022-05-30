function CookieUpdate(oldValue, newValue, path = 'cookie') {
  let item, type, name = (oldValue || newValue || '').split(/pt_pin=(.+?);/)[1];
  let total = $nobyda.read('CookiesJD');
  try {
    total = checkFormat(JSON.parse(total || '[]'));
  } catch (e) {
    $nobyda.notify("京东签到", "", "Cookie JSON格式不正确, 即将清空\n可前往日志查看该数据内容!");
    console.log(`京东签到Cookie JSON格式异常: ${e.message||e}\n旧数据内容: ${total}`);
    total = [];
  }
  for (let i = 0; i < total.length; i++) {
    if (total[i].cookie && new RegExp(`pt_pin=${name};`).test(total[i].cookie)) {
      item = i;
      break;
    }
  }
  if (newValue && item !== undefined) {
    type = total[item][path] === newValue ? -1 : 2;
    total[item][path] = newValue;
    item = item + 1;
  } else if (newValue && path === 'cookie') {
    total.push({
      cookie: newValue
    });
    type = 1;
    item = total.length;
  }
  return {
    total: checkFormat(total),
    type, //-1: same, 1: add, 2:update
    item,
    name: decodeURIComponent(name)
  };
}

function GetCookie() {
  const req = $request;
  if (req.method != 'OPTIONS' && req.headers) {
    const CV = (req.headers['Cookie'] || req.headers['cookie'] || '');
    const ckItems = CV.match(/(pt_key|pt_pin)=.+?;/g);
    if (/^https:\/\/(me-|)api(\.m|)\.jd\.com\/(client\.|user_new)/.test(req.url)) {
      if (ckItems && ckItems.length == 2) {
        const value = CookieUpdate(null, ckItems.join(''))
        if (value.type !== -1) {
          const write = $nobyda.write(JSON.stringify(value.total, null, 2), "CookiesJD")
          $nobyda.notify(`用户名: ${value.name}`, ``, `${value.type==2?`更新`:`写入`}京东 [账号${value.item}] Cookie${write?`成功 🎉`:`失败 ‼️`}`)
        } else {
          console.log(`\n用户名: ${value.name}\n与历史京东 [账号${value.item}] Cookie相同, 跳过写入 ⚠️`)
        }
      } else {
        throw new Error("写入Cookie失败, 关键值缺失\n可能原因: 非网页获取 ‼️");
      }
    } else if (/^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/appSign\?/.test(req.url) && req.body) {
      const value = CookieUpdate(CV, req.body, 'jrBody');
      if (value.type) {
        const write = $nobyda.write(JSON.stringify(value.total, null, 2), "CookiesJD")
        $nobyda.notify(`用户名: ${value.name}`, ``, `获取京东 [账号${value.item}] 钢镚Body${write?`成功 🎉`:`失败 ‼️`}`)
      } else {
        throw new Error("写入钢镚Body失败\n未获取该账号Cookie或关键值缺失‼️");
      }
    } else if (req.url === 'http://www.apple.com/') {
      throw new Error("类型错误, 手动运行请选择上下文环境为Cron ⚠️");
    }
  } else if (!req.headers) {
    throw new Error("写入Cookie失败, 请检查匹配URL或配置内脚本类型 ⚠️");
  }
}

GetCookie()
