webpackJsonp([14],{0:function(a,e,s){"use strict";s(30),document.querySelector("#main").innerHTML=s(56),s(10)},10:function(a,e,s){"use strict";var t=s(1);t(document).ready(function(){var a=function(){t(".editable-text").each(function(){var a=t(this),e=a.text();a.next(".editable-value").val(e)}),n(),e()},e=function(){var a=t("#target-style"),e=".target{\n        "+s()+"\n      }";a.html(e)},s=function(){var a=[];return t(".rule").each(function(){var e=t(this),s=e.find(".property").text(),n=e.find(".value").text().replace(/( )+/g," ").replace(/\n/g,"")+"";a.push(s+":"+n+";")}),a.join("\n")},n=function(){t(".editable").click(function(){var a=t(this);a.addClass("edit")});var a=t(".editable-value");a.filter("[type=text]").blur(function(){t(this).closest(".editable").removeClass("edit")}).keyup(function(a){var s=t(this),n=s.prev(".editable-text");if(a.preventDefault(),38===a.which||40===a.which){var i=38===a.which?1:-1,c=l.addNumberVal(s.val(),i);s.val(c),n.text(c)}else n.text(s.val());e()}),a.filter("[type=color]").change(function(){var a=t(this),s=a.val(),n=a.prev(".editable-text");n.text(s),e(),a.closest(".editable").removeClass("edit")})},l={addNumberVal:function(a,e){if(!isNaN(a))return a;var s=(a+"").indexOf(".")>-1?parseFloat(a):parseInt(a);s+=e;var t=/[a-zA-Z%]+/.exec(a)[0];return s+t}};a()})},30:function(a,e){},56:function(a,e){a.exports="<style id=target-style></style> <div class=container> <h1 class=title>CSS Playground</h1> <div class=css> <span class=selector>.target</span><span class=bracket>{</span> <div class=rule> <span class=property>border</span>: <span class=value> <span class=editable> <span class=editable-text>5px</span> <input type=text class=editable-value> </span> solid <span class=editable> <span class=editable-text>#800080</span> <input type=color class=editable-value> </span> </span>;<span class=comment>/* 边框 */</span> </div> <div class=rule> <span class=property>border-radius</span>: <span class=value> <span class=editable> <span class=editable-text>15%</span> <input type=text class=editable-value> </span> </span>;<span class=comment>/* 圆角 */</span> </div> <div class=rule> <span class=property>background</span>: <span class=value> <span class=editable> <span class=editable-text>#ff8000</span> <input type=color class=editable-value> </span> </span>;<span class=comment>/* 背景 */</span> </div> <div class=rule> <span class=property>color</span>: <span class=value> <span class=editable> <span class=editable-text>#ffffff</span> <input type=color class=editable-value> </span> </span>;<span class=comment>/* 字的颜色 */</span> </div> <span class=bracket>}</span> </div> </div> <div class=target>Taget</div>"}});