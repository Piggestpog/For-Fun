let obj=JSON.parse($response.body)

obj = {
  "account": {
    "id": 1799709,
    "now": "2022-05-27T09:43:33",
    "is_email_confirmed": true,
    "registered_at": "2022-05-25T10:52:22",
    "pro_mode": true,
    "user_id": 1800453,
    "need_to_update_subscription": false,
    "two_factor_auth": false,
    "full_name": "",
    "company": "",
    "address": "",
    "country_code": "",
    "plan_type": "Premium",
    "user_type": "Premium",
    "current_period": {
      "from": "2022-05-27T09:30:28",
      "until": "2099-10-10T03:27:34"
    },
    "feature_toggles": {
      "encryption_schema": "v5"
    },
    "authorized_features": {
      "show_create_team_promotions": true,
      "show_bell": false,
      "show_trial_section": false,
      "show_subscription_section": true,
      "show_github_account_section": false,
      "show_team_member_activation_into_identities_tour": false,
      "show_pop_up_onboarding_tour": false,
      "generate_multi_key_pair": false,
      "show_presence_effect": false,
      "show_multi_key_promotion": true,
      "available_github_partnership": true,
      "is_eligible_for_trial_extend": false
    },
    "expired_screen_type": null,
    "has_sso": true,
    "updated_at": "2022-05-27T09:42:32",
    "is_subscribed_to_marketing_emails": true,
    "tax_id": "",
    "team": false,
    "team_display_name": ""
  },
  "team": null,
  "trial": null,
  "student": null,
  "personal_subscription": {
    "now": "2022-05-27T09:43:33",
    "status": "SUCCESS",
    "platform": "ios",
    "current_period": {
      "from": "2022-05-27T09:30:28",
      "until": "2099-10-10T03:27:34"
    },
    "revokable": false,
    "refunded": false,
    "cancelable": false,
    "reactivatable": false,
    "currency": "USD",
    "created_at": "2022-05-27T09:41:58",
    "updated_at": "2022-05-27T09:41:58",
    "valid_until": "2099-10-10T03:27:34",
    "auto_renew": false,
    "price": null,
    "verbose_plan_name": null,
    "plan_type": "Premium",
    "is_expired": false
  },
  "team_subscription": null
}；

$done({body:JSON.stringify(obj)})
