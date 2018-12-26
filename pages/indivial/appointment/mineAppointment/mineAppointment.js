import router from '../../../../router/router';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: '1',
        name: '王二小',
        tel: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      },
      {
        id: '2',
        name: '王二小',
        tel: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      },
      {
        id: '3',
        name: '王二小',
        tel: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      }
    ]
  },
  toDetail (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id);
    router.navigate({
      path: `pages/indivial/appointment/addAppointment/addAppointment?type=edit&id=${id}`
    });
  },

  delete (e) {
    let id = e.currentTarget.dataset.id;
    wx.showToast({
      title: `删除id为${id}`,
      icon: 'success',
      duration: 2000
    })
  },

  addApot () {
    router.navigate({
      path: `pages/indivial/appointment/addAppointment/addAppointment?type=add`
    });
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