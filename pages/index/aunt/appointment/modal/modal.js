Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    apotUserList: [
      {
        id: '1',
        name: '王二小',
        phone: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      },
      {
        id: '2',
        name: '王二小',
        phone: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      },
      {
        id: '333',
        name: '王二小',
        phone: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      },
      {
        id: '444',
        name: '王二小',
        phone: '13656873290',
        address: '江苏省南京市秦淮区来凤街菱角市22号'
      }
    ],
    selectedId: '-1'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select (e) {
      let id = e.currentTarget.dataset.id;
      this.setData({
        selectedId: id
      });
    },
    noSelect () {
      this.setData({
        selectedId: '-1'
      });
    },
    confirm () {
      if (this.data.selectedId == '-1') {
        this.triggerEvent('close');
        return;
      }
      let item = this.data.apotUserList.find(item => item.id == this.data.selectedId) || {};
      this.triggerEvent('confirm', item);
    }
  }
});
