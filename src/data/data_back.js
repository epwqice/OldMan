const Data = {
  app: {
    title: {
      zh_CN : '养老管理系统',
    }
  },
  data: {
    'check_in_manager': {

      zh_CN: '入住服务',
    },
    'vip_manager': {
      'vip_system': {
        'reception_register': {
          'consultation_person_info': {
            'type': 'resourceGroup',
            'name':{
              type: 'string',
              zh_CN: 'reception_register',
            },
            'relation_old_man': {
              type: 'enum',
              sub_type: 'relation_old_man',
              zh_CN: '与老人关系'
            },
            'sex':{
              type: 'enum',
              sub_type: 'sex',
              zh_CN: '性别'
            },
            'mobile_num': {
              type: 'regular',
              sub_type: 'mobile_num',
              zh_CN: '手机号码'
            },
            'consultation_date':{
              type: 'date',
              zh_CN: '咨询日期'
            },
            'address': {
              type: 'string',
              zh_CN: '家庭住址'
            },
            zh_CN: '咨询人信息'
          },
          'old_man_info': {
            'type': 'resourceGroup',
            'name': {
              type: 'string',
              zh_CN: '姓名'
            },
            'age': {
              type: 'string',
              zh_CN: '家庭住址'
            },
            'sex': {
              type: 'sex',
              zh_CN: '性别'
            },
            'health': {
              type: 'enum',
              sub_type: 'health',
              zh_CN: '自理情况'
            },
            'certificate_type': {
              type: 'enum',
              sub_type: 'certificate_type',
              zh_CN: '证件类型'
            },
            'certificate_info': {
              type: 'enum',
              sub_type: 'certificate_info',
              zh_CN: '证件信息'
            },
            'mobile_num': {
              type: 'regular',
              sub_type: 'mobile_num',
              zh_CN: '手机号码'
            },
            zh_CN: '意向客户信息（老人）'
          },
          'consultation_info': {
            'consultation_type': {
              type: 'enum',
              sub_type: 'consultation_type',
              zh_CN: '咨询方式'
            },
            'medium_type': {
              type: 'enum',
              sub_type: 'medium_type',
              zh_CN: '媒介渠道'
            },
            'memo': {
              type: 'mul_string',
              zh_CN: '备注'
            },
            'type': 'resourceGroup',
            zh_CN: '咨询情况',
          },
          zh_CN: '接待登记'
        },
        zh_CN: '会员系统'
      },
      zh_CN: '会员管理'
    },
  },
  enum: {
    'sex': {
      male: {
        zh_CN: '男',
      },
      female: {
        zh_CN: '女',
      },
    },
    'certificate_type': {
      id: {
        zh_CN: '身份证',
      },
      passport: {
        zh_CN: '护照',
      },
      officers_certificate: {
        zh_CN: '军官证',
      },
      hongkong_macao_pass: {
        zh_CN: '港澳通行证',
      },
      taiwan_pass: {
        zh_CN: '台湾通行证',
      },
    },
    'health': {
      bad: {
        zh_CN: '较差，完全需要别人照顾',
      },
      nomarl: {
        zh_CN: '一般，有事需要别人照顾',
      },
      good: {
        zh_CN: '较好，一般不需要人照顾',
      },
      healthy: {
        zh_CN: '很好，可以照顾别人',
      },
      other: {
        zh_CN: '其他',
      },
    },
    'consultation_type': {
      consultation: {
        zh_CN: '了解情况',
      },
      reserve: {
        zh_CN: '预订床位',
      },
      unknow: {
        zh_CN: '未知',
      },
    },
    'medium_type': {
      relatives_friends: {
        zh_CN: '亲友介绍',
      },
      acquaintance_introduction: {
        zh_CN: '熟人介绍',
      },
      internet: {
        zh_CN: '互联网广告',
      },
      media: {
        zh_CN: '传统媒体广告',
      },
    },
    'relation_old_man': {
      relative: {
        zh_CN: '亲友',
      },
      child: {
        zh_CN: '子女',
      },
      self: {
        zh_CN: '本人',
      },
      other: {
        zh_CN: '其他',
      },
    },
  },
}

export default Data;