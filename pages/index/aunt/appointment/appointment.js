// pages/index/aunt/appointment/appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aunt: {
      id: '123',
      headImg: 'https://unsplash.it/300/300/?random',
      name: '慧颜',
      type: '月嫂',
      price: '10000'
    },
    region: [],
    date: '',
    time: '',
    customItem: '全部',
    apotUserName: '',
    phone: '',
    address: '',
    remark: '',
    showModal: false
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  modalClose () {
    this.setData({
      showModal: false
    });
  },
  modalConfirm (e) {
    this.setData({
      apotUserName: e.detail.name,
      phone: e.detail.phone,
      address: e.detail.address
    });
    this.modalClose();
  },
  showModal () {
    this.setData({
      showModal: true
    });
  },
  apotUserInput (e) {
    this.setData({
      apotUserName: e.detail.value
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

  textAreaEvent (e) {
    this.setData({
      remark: e.detail.value
    })
  },

  apply (e) {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
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