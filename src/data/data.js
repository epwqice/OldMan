const Data = {
  "app": {
    "title": {
      "zh_CN": "工作台",
    },
  },
  "data": {
    "workbench": {
      "zh_CN": "工作台",
    },
    "check_in_manager": {
      "cost_register": {
        "": {
          "zh_CN": "充值登记",
        },
        "zh_CN": "费用登记",
      },
      "zh_CN": "入住服务",
    },
    "vip_manager": {
      "vip_system": {
        "reception_register": {
          "consultation_person_info": {
            "type": "resourceGroup",
            "name": {
              "type": "string",
              "zh_CN": "姓名",
            },
            "relation_old_man": {
              "type": "enum",
              "sub_type": "relation_old_man",
              "zh_CN": "与老人关系",
            },
            "sex": {
              "type": "enum",
              "sub_type": "sex",
              "zh_CN": "性别",
            },
            "mobile_num": {
              "type": "mobile_num",
              "zh_CN": "手机号码",
            },
            "consultation_date": {
              "type": "date",
              "zh_CN": "咨询日期",
            },
            "address": {
              "type": "string",
              "zh_CN": "家庭住址",
            },
            "zh_CN": "咨询人信息",
          },
          "old_man_info": {
            "type": "resourceGroup",
            "name": {
              "type": "string",
              "zh_CN": "姓名",
            },
            "age": {
              "type": "int",
              "zh_CN": "年龄",
            },
            "sex": {
              "type": "enum",
              "sub_type": "sex",
              "zh_CN": "性别",
            },
            "health": {
              "type": "enum",
              "sub_type": "health",
              "zh_CN": "自理情况",
            },
            "certificate_type": {
              "type": "enum",
              "sub_type": "certificate_type",
              "zh_CN": "证件类型",
            },
            "certificate_info": {
              "type": "certificate_info",
              "zh_CN": "证件信息",
            },
            "mobile_num": {
              "type": "mobile_num",
              "zh_CN": "手机号码",
            },
            "zh_CN": "意向客户信息（老人）",
          },
          "consultation_info": {
            "type": "resourceGroup",
            "consultation_type": {
              "type": "enum",
              "sub_type": "consultation_type",
              "zh_CN": "咨询方式",
            },
            "medium_type": {
              "type": "enum",
              "sub_type": "medium_type",
              "zh_CN": "媒介渠道",
            },
            "memo": {
              "type": "mul_string",
              "zh_CN": "备注",
            },
            "zh_CN": "咨询情况",
          },
          "list": {
            "consultation_person_info": ["name", "relation_old_man", "sex", "mobile_num", "consultation_date", "address", ],
          },
          "create": {
            "consultation_person_info": ["name", "relation_old_man", "sex", "mobile_num", "consultation_date", "address", ],
            "old_man_info": ["name", "age", "sex", "health", "certificate_type", "certificate_info", "mobile_num", ],
            "consultation_info": ["consultation_type", "medium_type", "memo", ],
          },
          "edit": {
            "consultation_person_info": ["name", "relation_old_man", "sex", "mobile_num", "consultation_date", "address", ],
            "old_man_info": ["name", "age", "sex", "health", "certificate_type", "certificate_info", "mobile_num", ],
            "consultation_info": ["consultation_type", "medium_type", "memo", ],
          },
          "zh_CN": "接待登记",
        },
        "vip_manager": {
          "old_man_info": {
            "type": "resourceGroup",
            "name": {
              "type": "string",
              "zh_CN": "姓名",
            },
            "sex": {
              "type": "enum",
              "sub_type": "sex",
              "zh_CN": "性别",
            },
            "certificate_type": {
              "type": "enum",
              "sub_type": "certificate_type",
              "zh_CN": "证件类型",
            },
            "certificate_info": {
              "type": "certificate_info",
              "zh_CN": "证件信息",
            },
            "born_date": {
              "type": "date",
              "zh_CN": "出生日期",
            },
            "mobile_num": {
              "type": "mobile_num",
              "zh_CN": "手机号",
            },
            "telephone_num": {
              "type": "String",
              "zh_CN": "座机号",
            },
            "province_city_area": {
              "type": "region",
              "zh_CN": "居住地址",
            },
            "vip_level": {
              "type": "enum",
              "zh_CN": "会员等级",
            },
            "two_dimension_code": {
              "type": "",
              "zh_CN": "二维码",
            },
            "user_picture": {
              "type": "picture",
              "zh_CN": "头像",
            },
            "zh_CN": "老人会员信息",
          },
          "": {
            "type": "resourceGroup",
            "": {
              "type": "mul_string",
              "zh_CN": "备注",
            },
            "degree": {
              "type": "enum",
              "zh_CN": "文化程度",
            },
            "zh_CN": "其他信息",
          },
          "list": {
            "old_man_info": ["sex", "certificate_type", "certificate_info", "born_date", "mobile_num", "province_city_area", "vip_level", "two_dimension_code", ],
          },
          "create": {
            "old_man_info": ["sex", "certificate_type", "certificate_info", "born_date", "mobile_num", "telephone_num", "province_city_area", "vip_level", "two_dimension_code", "user_picture", ],
          },
          "edit": {
            "old_man_info": ["sex", "certificate_type", "certificate_info", "born_date", "mobile_num", "telephone_num", "province_city_area", "vip_level", "two_dimension_code", "user_picture", ],
          },
          "zh_CN": "会员管理",
        },
        "zh_CN": "会员系统",
      },
      "zh_CN": "会员管理",
    },
    "": {
      "zh_CN": "安全服务",
    },
  },
  "enum": {
    "sex": {
      "male": {
        "zh_CN": "男",
      },
      "female": {
        "zh_CN": "女",
      },
    },
    "certificate_type": {
      "id": {
        "zh_CN": "身份证",
      },
      "passport": {
        "zh_CN": "护照",
      },
      "officers_certificate": {
        "zh_CN": "军官证",
      },
      "hongkong_macao_pass": {
        "zh_CN": "港澳通行证",
      },
      "taiwan_pass": {
        "zh_CN": "台湾通行证",
      },
    },
    "health": {
      "bad": {
        "zh_CN": "较差，完全需要别人照顾",
      },
      "nomarl": {
        "zh_CN": "一般，有事需要别人照顾",
      },
      "good": {
        "zh_CN": "较好，一般不需要人照顾",
      },
      "healthy": {
        "zh_CN": "很好，可以照顾别人",
      },
      "other": {
        "zh_CN": "其他",
      },
    },
    "consultation_type": {
      "consultation": {
        "zh_CN": "了解情况",
      },
      "reserve": {
        "zh_CN": "预订床位",
      },
      "unknow": {
        "zh_CN": "未知",
      },
    },
    "medium_type": {
      "relatives_friends": {
        "zh_CN": "亲友介绍",
      },
      "acquaintance_introduction": {
        "zh_CN": "熟人介绍",
      },
      "internet": {
        "zh_CN": "互联网广告",
      },
      "media": {
        "zh_CN": "传统媒体广告",
      },
    },
    "relation_old_man": {
      "relative": {
        "zh_CN": "亲友",
      },
      "child": {
        "zh_CN": "子女",
      },
      "self": {
        "zh_CN": "本人",
      },
      "other": {
        "zh_CN": "其他",
      },
    },
  },
};

export default Data;

