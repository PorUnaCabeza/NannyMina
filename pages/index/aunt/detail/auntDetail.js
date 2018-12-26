import router from '../../../../router/router'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '343453',
    headImg: 'https://unsplash.it/300/300/?random',
    name: '慧颜',
    score: 3,
    age: 40,
    education: '初中',
    expYear: 10,
    hometown: '安徽滁州',
    judge: '95%',
    languageLevel: '一般',
    hasHealthCard: true,
    price: 10000,
    skill: '做饭，做家务，辅助带孩子，喜欢和老人和孩子交流。',
    workList: [
      {
        time: '2013年1月－2014年3月',
        location: '高尔夫公寓',
        content: '全职带4岁和2岁的宝宝，做饭，做家务，客户家面积200平，4口人'
      },
      {
        time: '2012年3月－2013年1月',
        location: '观湖国际',
        content: '做饭，做家务，辅助带5个月的宝宝，客户家面积200平，3口人。'
      },
      {
        time: '2013年1月－2014年3月',
        location: '棕榈泉',
        content: '全职带4岁和2岁的宝宝，做饭，做家务，客户家面积200平，4口人'
      },
      {
        time: '2013年1月－2014年3月',
        location: '高尔夫公寓',
        content: '全职带4岁和2岁的宝宝，做饭，做家务，客户家面积200平，4口人'
      }
    ],
    userAccessList: [
      {
        userName: '王小二',
        userHeadImg: 'https://unsplash.it/200/200/?random',
        time: '2018.03.04 12:23:21',
        content: '阿姨挺好的，全能，照顾的很放心，很专业。'
      },
      {
        userName: '小青菜炒蘑菇',
        userHeadImg: 'https://unsplash.it/200/200/?random',
        time: '2018.03.04 12:23:21',
        content: '阿姨挺好的，全能，照顾的很放心，很专业。'
      },
      {
        userName: '西红柿炒鸡蛋',
        userHeadImg: 'https://unsplash.it/200/200/?random',
        time: '2018.03.04 12:23:21',
        content: '阿姨挺好的，全能，照顾的很放心，很专业，阿姨挺好的，全能，照顾的很放心，很专业。'
      },
      {
        userName: '王小二',
        userHeadImg: 'https://unsplash.it/200/200/?random',
        time: '2018.03.04 12:23:21',
        content: '阿姨挺好的，全能，照顾的很放心，很专业。'
      }
    ]
  },
  confirm () {
    router.navigate({
      path: `pages/index/aunt/appointment/appointment?id=${this.data.id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})