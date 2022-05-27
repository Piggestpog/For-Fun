
let obj=JSON.parse($response.body)
obj = {
    "account": [{
    "pro_mode": true
    "plan_type": "Premium"
    "user_type": "Premium"
    }]
};

$done({body:JSON.stringify(obj)})
