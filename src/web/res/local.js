const getRes = (key) => {
  const local = {
    zh_CN: {
      app_title: '养老管理系统',
      old_man_title: '老人信息管理',
      old_man_id: '老人编号',
      old_man_record_id: '档案编号',
      old_man_name: '姓名',
      old_man_born_date: '出生日期',
      old_man_certificate_id: '证件编号',
      old_man_nation: '民族',
      old_man_company: '工作单位',
    }
  }

  let curLocal;
  if (window.sessionStorage && window.sessionStorage.local) {
    curLocal = window.sessionStorage.local;
  } else {
    curLocal = 'zh_CN';
  }

  if (local[curLocal]) {
    const res = local[curLocal][key];

    if (res) {
      return res
    }
  }

  return key;
}

export default getRes;