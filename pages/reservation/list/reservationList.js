import router from '../../../router/router';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reservationList: [
      {
        id: '1',
        headImg: 'https://unsplash.it/300/300/?random',
        name: '慧颜',
        type: '月嫂',
        state: '已预约',
        price: '10000',
        time: '2018.01.01-2018.02.01'
      },
      {
        id: '2',
        headImg: 'https://unsplash.it/300/300/?random',
        name: '慧颜',
        type: '月嫂',
        state: '服务中',
        price: '10000',
        time: '2018.01.01-2018.02.01'
      },
      {
        id: '3',
        headImg: 'https://unsplash.it/300/300/?random',
        name: '慧颜',
        type: '月嫂',
        state: '服务完成',
        price: '10000',
        time: '2018.01.01-2018.02.01'
      }
    ]
  },

  toDetail (e) {
    let id = e.currentTarget.dataset.id;
    router.navigate({
      path: `pages/reservation/detail/reservationDetail?id=${id}`
    })
  },
  cancel (e) {
    let id = e.currentTarget.dataset.id;
    let index = this.data.reservationList.findIndex(item => item.id == id);
    this.setData({
      [`reservationList[${index}].state`]: '已取消'
    });
    wx.showToast({
      title: id,
      icon: 'success',
      duration: 2000
    })
  },
  complete (e) {
    let id = e.currentTarget.dataset.id;
    let index = this.data.reservationList.findIndex(item => item.id == id);
    this.setData({
      [`reservationList[${index}].state`]: '服务完成'
    });
    wx.showToast({
      title: id,
      icon: 'success',
      duration: 2000
    })
  },

  toEvaluation (e) {
    let id = e.currentTarget.dataset.id;
    router.navigate({
      path: `pages/reservation/evaluation/evaluation?id=${id}`
    })
  },

  again (e) {
    let id = e.currentTarget.dataset.id;
    router.navigate({
      path: `pages/index/aunt/detail/auntDetail?id=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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