webpackJsonp([17],{0:function(t,o,i){"use strict";document.querySelector("#main").innerHTML=i(37),i(5)},5:function(t,o,i){"use strict";function d(t,o,i){e({$el:t,posArr:o,i:0,duration:i/o.length})}function e(t){var o=t.$el,i=t.posArr,d=t.i,n=t.duration,s=i[d];o.animate({left:s.left,top:s.top},n,function(){i.length-1!==d&&e({$el:o,posArr:i,i:d+1,duration:n})})}var n=i(1),s=[];n(".dot").each(function(){s.push(n(this).position())}),d(n(".target"),s,5e3)},37:function(t,o){t.exports="<style>.dots{position:relative;height:1000px}.dot,.target{position:absolute;width:10px;height:10px;border-radius:50%}.target{top:100px;left:500px;background-color:#f60}.dot{background-color:#ddd}.dot:nth-child(1){top:120px;left:520px}.dot:nth-child(2){top:140px;left:580px}.dot:nth-child(3){left:620px;top:140px}.dot:nth-child(4){left:720px;top:220px}</style> <div class=dots> <div class=dot></div> <div class=dot></div> <div class=dot></div> <div class=dot></div> <div class=target></div> </div>"}});