Page({
  data: {
    filterId: 1,
    address: '定位中…',


    item: {
      img: "/images/post/a.jpg",
    },
    shops: app.globalData.shops
  },
  onLoad: function () {
    var self = this;
    //数据绑定 2018-9-4 完成数据提取 将其提取到index-data.js文件内
    this.setData({
      banners: banners.banners,
      icons: icons.icons
    });

    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        server.getJSON('/waimai/api/location.php', {
          latitude: latitude,
          longitude: longitude
        }, function (res) {
          console.log(res)
          if (res.data.status != -1) {
            self.setData({
              // address: res.data.result.address_component.street_number
            });
          } else {
            self.setData({
              address: '定位失败'
            });
          }
        });
      }
    })
  },
  onShow: function () {
  },
  onScroll: function (e) {
    if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }
  },
  tapSearch: function () {
    wx.navigateTo({ url: 'search' });
    // wx.redirectTo({
    //   url: 'search',
    // })
  },
  toNearby: function () {
    var self = this;
    self.setData({
      scrollIntoView: 'nearby'
    });
    self.setData({
      scrollIntoView: null
    });
  },
  tiao: function () {
    wx: wx.navigateTo({       //可以返回
      url: '/pages/index/ddd',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
  tapFilter: function (e) {
    switch (e.target.dataset.id) {
      case '1':
        this.data.shops.sort(function (a, b) {
          return a.id > b.id;
        });
        break;
      case '2':
        this.data.shops.sort(function (a, b) {
          return a.sales < b.sales;
        });
        break;
      case '3':
        this.data.shops.sort(function (a, b) {
          return a.distance > b.distance;
        });
        break;
    }
    this.setData({
      filterId: e.target.dataset.id,
      shops: this.data.shops
    });
  },
  tapBanner: function (e) {
    var name = banners.banners[e.target.dataset.id].name;
    wx.showModal({
      title: '提示',
      content: '您点击了“' + name + '”活动链接，活动页面暂未完成！',
      showCancel: false
    });
  }
});
