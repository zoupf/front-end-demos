webpackJsonp([3],{182:function(e,i,o){"use strict";var t=o(12),l=t.extend({template:o(423),data:function(){return{isCool:!0,items:[{name:"item1"},{name:"item2"}]}}});e.exports=l},423:function(e,i){e.exports='<div class=if-wrap> <label>Is Joel Cool:</label> <input type=checkbox v-model=isCool> <div v-if=isCool>Joel is so cool~</div> <div v-show=isCool>Yes~</div> <template v-if=isCool> <p>He readed a lot!</p> <p>He coding a lot!</p> </template> <div v-show=isCool> <p>+1</p> <p>+1</p> </div> </div> <ul class=for-wrap> <li v-for="item in items"> <span>{{item.name}}</span> <div> <label for="">编辑</label> <input type=checkbox v-model=item.isEditing> <br> <input type=text v-model=item.name v-show=item.isEditing> </div> </li> </ul>'}});