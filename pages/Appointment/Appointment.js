// pages/Appointment/Appointment.js
const app = getApp();
const date = new Date()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: "",
    genderDisplay : '请选择',
    gender : ['请选择','男', '女'],
    departmentDisplay: '请选择',
    departments: ['请选择',"呼吸科","病理科", "儿科", "妇科", "眼科", "耳鼻喉科", "口腔科", "皮肤科", "中医科", "心理咨询室", "消化内科", "泌尿科", "心内科","血液科", "内分泌科", "神经科","感染科","肝胆外科"],
    patientInfo: { name: null, phone: null, id: null, gender: null, address: null, company: null },
    appointment: { department: null }
  },
  bindName: function(e) {
    this.data.patientInfo.name = e.detail.value;
    
    console.log(this.data.patientInfo.name);
  }, 
  bindPhone: function(e) {
    this.data.patientInfo.phone = e.detail.value;

    console.log(this.data.patientInfo.name);
  },
  bindId: function (e) {
    this.data.patientInfo.id = e.detail.value;

    console.log(this.data.patientInfo.name);
  },
  bindGender: function (e) {
    
      const val = e.detail.value

      this.setData({
        genderDisplay : this.data.gender[val]
        //month: this.data.months[val[0]],
        //day: this.data.days[val[1]]
      })
    console.log(val);
    
    this.data.patientInfo.gender = this.data.gender[val];
    console.log(this.data.patientInfo.gender);
  }, 
  bindAddress: function (e) {
    this.data.patientInfo.address = e.detail.value;

    console.log(this.data.patientInfo.name);
  },
  bindCompany: function (e) {
    this.data.patientInfo.company = e.detail.value;

    console.log(this.data.patientInfo.name);
  },

  bindDepartment: function (e) {
    const val = e.detail.value
    this.setData({
      departmentDisplay : this.data.departments[val]
      //month: this.data.months[val[0]],
      //day: this.data.days[val[1]]
    })
    console.log(val);

    this.data.appointment.department = this.data.departments[val];
    console.log(this.data.departmentDisplay);
  },
  
  bindComfirm: function() {
    app.globalData.patientInfo = this.data.patientInfo;
    app.globalData.appointment = this.data.appointment;
    console.log(this.data.appointment.department);
    wx.navigateTo({
      url: "../ComfirmationPage/ComfirmationPage"
    });
    
    

  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  bindHideKeyboard: function(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      wx.hideKeyboard();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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