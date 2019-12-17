// 时间函数的应用
setTimeout(function () {
  console.log('timeout');
}, 3000);

setInterval(function () {
  console.log('interval');
}, 3000);

//ajax 
$.get('/api.getTime', function () {
  console.log('获取成功');
});