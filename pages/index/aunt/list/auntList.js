import router from '../../../../router/router';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auntList: [
      {
        id: '1',
        name: '慧颜',
        score: 4,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 40,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      },
      {
        id: '333',
        name: '慧颜',
        score: 3,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 34,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      },
      {
        id: '2',
        name: '慧颜',
        score: 5,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 53,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      },
      {
        id: '1132',
        name: '慧颜',
        score: 1,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 67,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      },
      {
        id: '145',
        name: '慧颜',
        score: 2,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 42,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      },
      {
        id: '134435',
        name: '慧颜',
        score: 2,
        headImg: 'https://unsplash.it/300/300/?random',
        age: 42,
        hometown: '安徽',
        desc: '做饭、做家务、辅助带孩子都做饭、做家务、辅助带孩子都',
        price: 10000
      }
    ]
  },
  toDetail (e) {
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