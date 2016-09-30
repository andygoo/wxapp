
var $_GET = {}

//console.log(options)



Page({
  onLoad: function(options) {
    $_GET = options;
    this.setData({
      title: '表单'
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})
console.log($_GET)