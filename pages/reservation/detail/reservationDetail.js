import router from '../../../router/router';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '慧颜',
    type: '月嫂',
    price: '10000',
    time: '2018.01.01-2018.02.01',
    apotUserName: '皮皮',
    apotUserPhone: '18356767889',
    apotUserAddress: '江苏省南京市秦淮区来凤街菱角市22号',
    remark: '急需',
    orderId: '176276827462187586',
    orderTime: '2018.01.01 10:12:13',
    complete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id: options.id
    })
  },
  complete () {
    this.setData({
      complete: true
    });
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  toEvaluation () {
    router.navigate({
      path: `pages/reservation/evaluation/evaluation?id=${this.data.id}`
    })
  },

  again (e) {
    let id = e.currentTarget.dataset.id;
    router.navigate({
      path: `pages/index/aunt/detail/auntDetail?id=${this.data.id}`
    })
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