var util = require('../../util/util.js');
var app = getApp();
const Todo = require('../../models/todo.js');
const AV = require('../../util/av-weapp-min.js');


Page({
  data: {
    img_url:'',
    task: {
      name: '',
      introdution:'',
      address: '点击选择地点',
      address1:'',
      signTime: '00:00',
      signEarlyTime: '00:00',
      startDay: '2016-11-00',
      endDay: '2016-11-00',
      repeat: {
        'monday': 1,
        'tuesday': 1,
        'wednesday': 1,
        'thursday': 1,
        'friday': 1,
        'saturday': 0,
        'sunday': 0
      }
    },
    openId: '',
    userInfo: {},
    creating: false,
    button: {
      txt: '新建'
    },
    modalHidden: true
  },

  // 设置物品名称
  bindKeyInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },
  // 设置物品介绍
  bindKeyInput1: function (e) {
    this.setData({
      'task.introdution': e.detail.value
    });
  },
  bindKeyInput2:function(e)
  {
    this.setData({
      'task.address1': e.detail.value
    })
  },

  // 设置物品地点
  chooseLocation: function () {
    var that = this;

    wx.chooseLocation({
      success: function (res) {
        that.setData({
          'task.address': res.address,
          'task.latitude': res.latitude,
          'task.longitude': res.longitude
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  // 设置打卡时间
  setSignTime: function (e) {
    var that = this;
    var hour = ((+e.detail.value.slice(0, 2) + 24 - 2) % 24).toString();
    that.setData({
      'task.signTime': e.detail.value,
      'task.signEarlyTime': (hour[1] ? hour : '0' + hour) + ':' + e.detail.value.slice(3, 5)
    });
  },

  // 设置开始日期
  startDateChange: function (e) {
    this.setData({
      'task.startDay': e.detail.value
    })
  },

  // 设置结束日期
  endDateChange: function (e) {
    this.setData({
      'task.endDay': e.detail.value
    })
  },


  // 隐藏提示弹层
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },

  addTodo: function () {
    console.log(this.data);
    new Todo({
      content: this.data.img_url,
      done: false,
    }).save().then(todo => {
      this.setData({
        // todos: [...this.data.todos, todo],
       // //输入框置空
     //   draft: "",
      });

    },
    ).catch(console.error);
  },

  // 创建任务
  createTask: function () {
    var that = this;
    var task = this.data.task;
    var openId = this.data.openId;
    var userInfo = this.data.userInfo;
    console.log(this.data)
    wx.showToast({
      title: '新建中',
      icon: 'loading',
      duration: 10000
    });
    that.addTodo(),
        // new AV.File('file-name', {
        //   blob: {
        //     uri: this.data.img_url,
        //   },
        // }).save().then(
        //   file => console.log(file.url()),
        // ).catch(console.error);
      

        wx.hideToast();

        

        wx.navigateTo({
          url: '/pages/my/my',
          success: function (res) {
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
     
      
  },

  uploadImg:function()
{
    // new AV.initialize();
    console.log("测试上传代码运行")
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: data => {
        const tempFilePath = data.tempFilePaths[0];
        console.log(tempFilePath)
        //上传部分
        // new AV.File('file-name', {
        //   blob: {
        //     uri: tempFilePath,
        //   },
        // }).save().then(
        //   file => console.log(file.url()),
        // ).catch(console.error);
        this.setData({
          img_url: data.tempFilePaths[0]
        })


      },
    })
},

  // 提交、检验
  bindSubmit: function (e) {
    var that = this;
    var task = this.data.task;
    var creating = this.data.creating;
  // console.log(this.data);
    if (task.name == '' || task.address == '点击选择地点') {
      this.setData({
        modalHidden: false
      });
    } else {
      if (!creating) {
        this.setData({
          'creating': true
        });
        that.createTask();
      }
    }
  },

  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },

  onHide: function () {
  },

  // 初始化设置
  onLoad: function () {
    var that = this;
    var now = new Date();
    var openId = wx.getStorageSync('openId');

    // 初始化打卡时间
    that.setData({
      'task.signTime': util.getHM(now),
      'task.signEarlyTime': util.getHM(new Date(now.getTime() - 1000 * 3600 * 2))
    });

    // 初始化日期
    that.setData({
      'task.startDay': util.getYMD(now),
      'task.endDay': util.getYMD(now)
    });


    // 初始化昵称
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });

      that.setData({
        openId: openId
      })
    });

  }
})