// pages/indivial/appointment/addAppointment/addAppointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    region: [],
    address: '',
    customItem: '全部'
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  nameInput (e) {
    this.setData({
      name: e.detail.value
    })
  },

  phoneInput (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  addressInput (e) {
    this.setData({
      address: e.detail.value
    })
  },

  confirm () {
    wx.showModal({
      title: '提示',
      content: `${this.data.name}|${this.data.phone}|${this.data.region} | ${this.data.address}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options.type == 'edit')
      wx.setNavigationBarTitle({
        title: '编辑'
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