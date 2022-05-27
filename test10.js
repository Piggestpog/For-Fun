let obj = JSON.parse($response.body)
obj = {
  "account": {
    "pro_mode": true,
    "plan_type": "Premium",
    "user_type": "Premium",
    "current_period": "2099-10-10T03:27:34"
  }
}

$done({body:JSON.stringify(obj)})
