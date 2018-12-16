// pages/indivial/suggestion/suggestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: '',
    phone: ''
  },
  textAreaEvent (e) {
    this.setData({
      question: e.detail.value
    })
  },
  inputEvent (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  confirm () {
    if (!this.data.question || !this.data.phone)
      return;
    console.log('todo');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
});