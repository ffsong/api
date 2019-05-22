define({ "api": [
  {
    "type": "post",
    "url": "v1/captchas",
    "title": "获取图片验证码",
    "version": "1.0.0",
    "name": "captchas",
    "group": "Captc",
    "description": "<p>获取图片验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>参数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    phone:18226988784,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "captcha_key",
            "description": "<p>图片验明证key</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "captcha_image_content",
            "description": "<p>验明证图片</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "expired_at",
            "description": "<p>过期时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n        \"code\": 200,\n        \"status\": \"success\",\n        \"data\": {\n            \"code\": \"测试验证码vt9gn\",\n            \"captcha_key\": \"captcha-xts3G8ggDYRH4P4\",\n            \"captcha_image_content\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAA\",\n\"expired_at\": \"2019-03-04 16:11:00\",\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\":400,\"status\":\"error\",\"data\":'错误'}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/CaptchasController.php",
    "groupTitle": "Captc"
  },
  {
    "type": "post",
    "url": "v1/authorizations",
    "title": "密码模式用户登陆",
    "version": "1.0.0",
    "name": "authorizations",
    "group": "User",
    "description": "<p>用户登录后，返回登陆凭证</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>授权类型（password）</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户端id（2）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>客户端密钥（17SCab7b7GPMpHU9x1tKQuBZsd7VTiHBBeu3iq2E）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    grant_type: 'password',\n    client_id: 2,\n    client_secret: '17SCab7b7GPMpHU9x1tKQuBZsd7VTiHBBeu3iq2E',\n    username: 18298699875,\n    password: 123566,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "token_type",
            "description": "<p>令牌类型</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "expires_in",
            "description": "<p>过期时间</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n        \"code\": 200,\n        \"status\": \"success\",\n        \"data\": {\n            \"token_type\": \"Bearer\",\n            \"expires_in\": 1296000,\n            \"access_token\": \"eyJ0\",\n            \"refresh_token\": \"wrer\"\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\": 403,\"status\":'error',\"data\":\"密码错误\"}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthorizationsController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "v1/authorizations/current",
    "title": "更新令牌",
    "version": "1.0.0",
    "name": "authorizations_current",
    "group": "User",
    "description": "<p>重新获取验证令牌</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>授权类型（refresh_token）</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户端id（2）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>客户端密钥（17SCab7b7GPMpHU9x1tKQuBZsd7VTiHBBeu3iq2E）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    grant_type: 'refresh_token',\n    client_id: 2,\n    client_secret: '17SCab7b7GPMpHU9x1tKQuBZsd7VTiHBBeu3iq2E',\n    refresh_token: 'wrer',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "token_type",
            "description": "<p>令牌类型</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "expires_in",
            "description": "<p>过期时间</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n        \"code\": 200,\n        \"status\": \"success\",\n        \"data\": {\n                \"token_type\": \"Bearer\",\n                \"expires_in\": 1296000,\n                \"access_token\": \"eyJ0\",\n                \"refresh_token\": \"wrer\"\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\":403,\"status\":\"没权限\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthorizationsController.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/index",
    "title": "获取用户信息",
    "version": "1.0.0",
    "name": "index",
    "group": "User",
    "description": "<p>获取用户信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer +空格+ access_token（访问令牌）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "头部示例:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAi\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>参数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"data\": {\n    \"id\": 12,\n    \"name\": \"zxx1\",\n    \"phone\": \"18223699471\",\n    \"email\": null,\n    \"email_verified_at\": null,\n    \"created_at\": \"2019-03-04 14:59:00\",\n    \"updated_at\": \"2019-03-04 14:59:00\",\n    \"avatar\": \"https://iocaffcdn.phphub.org/uploads/images/201710/30/1/TrJS40Ey5k.png\",\n    \"introduction\": null,\n    \"notification_count\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\":-1,\"status\":\"error\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "v1/user/logout",
    "title": "退出登陆",
    "version": "1.0.0",
    "name": "logout",
    "group": "User",
    "description": "<p>退出登陆</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer +空格+ access_token（访问令牌）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "头部示例:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAi\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>参数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\"code\": 200,\"status\": \"success\",\"data\": {}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误": [
          {
            "group": "错误",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>用户未登陆</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误示例:",
          "content": "{\n            \"code\": 401,\n            \"status\": \"未登录\",\n            \"data\": \"Unauthenticated.\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthorizationsController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "v1/store",
    "title": "用户注册",
    "version": "1.0.0",
    "name": "store",
    "group": "User",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_key",
            "description": "<p>短信key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>短信验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n          name:'zxx1',\n          password:'123456',\n          verification_key:'zxx1ww',\n          verification_code:0123,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "token_type",
            "description": "<p>令牌类型</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "expires_in",
            "description": "<p>过期时间</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌</p>"
          },
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n  \"code\": 200,\n  \"status\": \"success\",\n  \"data\": {\n      \"token_type\": \"Bearer\",\n      \"expires_in\": 1296000,\n      \"access_token\": \"eyJ0\",\n      \"refresh_token\": \"wrer\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\":401,\"status\": \"error\",\"data\":\"用户认证失败\"}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "v1/verificationCodes",
    "title": "发送短信验证码",
    "version": "1.0.0",
    "name": "store",
    "group": "Verifica",
    "permission": [
      {
        "name": "登录注册"
      }
    ],
    "description": "<p>注册发送短信</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "captcha_key",
            "description": "<p>图片验证码 key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "captcha_code",
            "description": "<p>图片验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    captcha_key:'captcha-Hmhf7mKkBDlqxst',\n    captcha_code:'3554gg',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "type": "string",
            "optional": false,
            "field": "verification_key",
            "description": "<p>验证码key</p>"
          },
          {
            "group": "返回值",
            "type": "Object",
            "optional": false,
            "field": "expired_at",
            "description": "<p>失效时间</p>"
          },
          {
            "group": "返回值",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例:",
          "content": "{\n        \"code\": 200,\n        \"status\": success\n        \"data\": {\n            \"verification_key\": \"18223699471\",\n            \"expired_at\": \"2019-03-04 15:08:07\",\n            \"code\": \"6688\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "(json) 错误示例:",
          "content": "{\"code\":400,\"status\": error,\"data\":\"验证码错误\"}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/VerificationCodesController.php",
    "groupTitle": "Verifica"
  }
] });
