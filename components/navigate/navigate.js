import router from '../../router/router';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex: String // 从0开始
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        icon: 'icon-shouye',
        name: '首页',
        path: 'pages/index/aunt/list/auntList'
      },
      {
        icon: 'icon-yuyuedan',
        name: '预约单',
        path: 'pages/reservation/list/reservationList'
      },
      {
        icon: 'icon-gerenzhongxin',
        name: '个人中心',
        path: 'pages/indivial/mine/mine'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switch (e) {
      let index = e.currentTarget.dataset.index;
      if (index == this.data.activeIndex)
        return;
      router.redirect({
        path: this.data.list[index].path
      });
    }
  }
})
