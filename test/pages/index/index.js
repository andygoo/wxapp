
var pageData = {}
pageData.data = {}

var common = require('../../utils/common.js')

//silder
Object.assign(pageData.data, {
  imgUrls: [
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
  ],
  indicatorDots: true,
  autoplay: false,
  interval: 5000,
  duration: 1000
});


//actionSheet
Object.assign(pageData.data, {
  actionSheetHidden: true,
  actionSheetItems: ['item1', 'item2', 'item3', 'item4']
});
pageData.actionSheetTap = function(e) {
  this.setData({
    actionSheetHidden: !this.data.actionSheetHidden
  })
}
pageData.actionSheetChange = function(e) {
  this.setData({
    actionSheetHidden: !this.data.actionSheetHidden
  })
}
pageData.bindItemTap = function(e){
  console.log('tap ' + e.currentTarget.dataset.name)
  common.f1();
}

//modal
Object.assign(pageData.data, {
  modalHidden: true,
  modalHidden2: true,
  hidden: true
});
pageData.modalTap = function(e) {
  this.setData({
    modalHidden: false
  })
}
pageData.modalChange = function(e) {
  this.setData({
    modalHidden: true
  })
}
pageData.modalTap2 = function(e) {
  this.setData({
    modalHidden2: false
  })
}
pageData.modalChange2 = function(e) {
  this.setData({
    modalHidden2: true
  })
}

//toast
Object.assign(pageData.data, {
  toastHidden: true
});
pageData.toastChange = function(e) {
  this.setData({toastHidden: true})
}
pageData.toastTap = function(e) {
  this.setData({toastHidden: false})
}

//loading
Object.assign(pageData.data, {
  loadingHidden: true
});
pageData.loadingChange = function () {
  this.setData({
    loadingHidden: true
  })
}
pageData.loadingTap = function () {
  this.setData({
    loadingHidden: false
  })

  var that = this
  setTimeout(function () {
    that.setData({
      loadingHidden: true
    })
  }, 1500)
}

pageData.navTap = function () {
  wx.navigateTo({
    url: 'form?k1=1&k2=2&k3=3&k4=4'
  })
}

Page(pageData)