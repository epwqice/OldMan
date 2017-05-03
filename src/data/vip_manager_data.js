const appData = {
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
          'consultation_info': {
            'name':{
              type: 'string',
              zh_CN: 'reception_register'
            },
            'relation_old_man': {
              type: 'relation_old_man',
              zh_CN: '与老人关系'
            },
            'sex':{
              type: 'sex',
              zh_CN: '性别'
            },
            'mobile_num': {
              type: 'mobile_num',
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
              type: 'health',
              zh_CN: '自理情况'
            },
            'certificate_type': {
              type: 'certificate_type',
              zh_CN: '证件类型'
            },
            'certificate_info': {
              type: 'certificate_info',
              zh_CN: '证件信息'
            },
            'mobile_num': {
              type: 'mobile_num',
              zh_CN: '手机号码'
            },
            zh_CN: '意向客户信息（老人）'
          },
          'consultation_info': {
            'consultation_type': {
              type: 'consultation_type',
              zh_CN: '咨询方式'
            },
            'medium_type': {
              type: 'medium_type',
              zh_CN: '媒介渠道'
            },
            'memo': {
              type: 'mul_string',
              zh_CN: '备注'
            },
            zh_CN: '咨询情况'
          },
          zh_CN: '接待登记'
        },
        zh_CN: '会员系统'
      },
      zh_CN: '会员管理'
    },
  },
}

export default appData;