(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orders"],{"159d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{id:"orders"}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,"items-per-page":5},scopedSlots:e._u([{key:"item.date",fn:function(t){var r=t.item;return[e._v(e._s(new Date(r.date).toLocaleString("zh-tw")))]}},{key:"item.products",fn:function(t){var n=t.item;return[r("ul",e._l(n.products,(function(t){return r("li",{key:t._id},[e._v(" "+e._s(t.product.name)+" x "+e._s(t.quantity))])})),0)]}},{key:"item.products.custom",fn:function(t){var n=t.item;return e._l(n.products,(function(t){return r("div",e._l(t.custom,(function(t){return t?r("div",[e._v(e._s(t))]):e._e()})),0)}))}}])})],1)},a=[],u=r("1da1"),s=(r("96cf"),r("d81d"),{data:function(){return{orders:[],headers:[{text:"單號",value:"_id"},{text:"日期",value:"date"},{text:"商品",value:"products"},{text:"備註",value:"products.custom"}]}},computed:{customarr:function(){var e=this.orders.map((function(e){return e.products})).map((function(e){return e}));return e}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/me",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,n=r.data,e.orders=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),o=s,c=r("2877"),i=r("6544"),d=r.n(i),l=r("a523"),p=r("8fea"),v=Object(c["a"])(o,n,a,!1,null,null,null);t["default"]=v.exports;d()(v,{VContainer:l["a"],VDataTable:p["a"]})}}]);
//# sourceMappingURL=orders.b3bfabd7.js.map