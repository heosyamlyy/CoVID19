// pages/Result/Result.js

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    aIResult : "结果预判中...",
    aIDiagnosis : "",
    imgSrc : ""

  },
  bindAppHead: function() {
    wx.switchTab({
      url: "../index/index"
    });
  },
  bindAppointment: function() {
    wx.switchTab({
      url: "../Appointment/Appointment"
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var evaluation = app.globalData.finalEvaluation;
    var aIList = ['你很健康!顺利通关', '普通感冒，注意休息，多喝水，加强锻炼。', '疑似冠状病毒感染，建议到发热门诊进一步明确诊断。'];
    var aIDiagnosisList = ["根据您的上叙情况，系统判断为基本无潜在患病可能。少量的部分症状有可能是由于过敏，上火等因素导致的。所以无需担心，好好享受生活吧~！", " 根据您的上叙情况，系统判断为普通感冒或流感。患武汉肺炎的可能性较低，但还是建议在家休息观察。", "根据您的上叙情况，系统判断为存在较大的阳性武汉病毒的可能性。建议到专业的机构进行进一步确诊，或是可以通过本系统直接获取山灞远程医疗服务中心提供的在线会诊服务，做到帮你联系各大医院的专家会诊。就诊前强烈建议自行在家进行隔离。"];
    var imgList = ["../image/anquan.png", "../image/bingchuang.png", "../image/yisheng.png"];
    console.log(app.globalData.finalEvaluation);
    
    if (evaluation < 16) {
      this.setData({aIResult: aIList[0]});
      this.setData({ aIDiagnosis: aIDiagnosisList[0]});
      this.setData({imgSrc: imgList[0]});
    } else if (evaluation > 16 && evaluation < 20) {
      this.setData({aIResult: aIList[1]});
      this.setData({ aIDiagnosis: aIDiagnosisList[1] });
      this.setData({ imgSrc: imgList[1] });

    } else {
      this.setData({aIResult: aIList[2]});
      this.setData({ aIDiagnosis: aIDiagnosisList[2] });
      this.setData({ imgSrc: imgList[2] });

    }

    
    //this.changeCondition(null, app.globalData.condition.result, this.aIResult);
    console.log(app.globalData.condition);
  },



  changeCondition: function (e, conditionType, target) {
    conditionType = target;
    console.log("app.globalData.condition.conditionType : " + conditionType);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
