// pages/reservation/evaluation/evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: 'https://unsplash.it/300/300/?random',
    tagList: [
      {
        id: '1',
        active: false,
        text: '普通话标准'
      },
      {
        id: '2',
        active: false,
        text: '服务态度好'
      },
      {
        id: '3',
        active: false,
        text: '服务态度好'
      },
      {
        id: '4',
        active: false,
        text: '服务态度好'
      },
      {
        id: '5',
        active: false,
        text: '服务态度好'
      }
    ],
    score: 4,
    evaluation: '',
    isAnonymous: false
  },
  select (e) {
    let id = e.currentTarget.dataset.id;
    let index = this.data.tagList.findIndex(item => item.id == id);
    let value = !this.data.tagList[index].active;
    console.log(id, index);
    let active = 'tagList[' + index + '].active';
    this.setData({
      [active]: value
    })
  },
  textAreaEvent (e) {
    this.setData({
      evaluation: e.detail.value
    })
  },
  changeAnonymous () {
    this.setData({
      isAnonymous: !this.data.isAnonymous
    })
  },
  confirm () {
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