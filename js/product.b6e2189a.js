(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"696f":function(t,e,i){},d2f1:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"product"}},[i("v-overlay",{staticClass:"text-center",attrs:{value:!this.sell,dark:""}},[i("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:"",size:"64"}}),i("h1",[t._v("商品已下架")])],1),i("v-row",[i("v-col",{staticClass:"d-flex flex-column align-center",attrs:{cols:"6"}},[i("v-img",{attrs:{height:"600",width:"900",src:t.preview}}),i("div",{staticClass:"w-100 d-flex justify-center"},t._l(t.image,(function(e){return i("v-card",{key:e.id,staticClass:"mt-2 mx-1",attrs:{img:e,height:"110",width:"100"},on:{click:function(i){return t.changepic(e)}}})})),1)],1),i("v-col",{attrs:{cols:"6"}},[i("h1",{staticClass:"mt-2"},[t._v(t._s(t.name))]),i("h4",[t._v(t._s(t.category))]),t.description.length>0?i("p",{staticStyle:{"white-space":"pre"}},[t._v(t._s(t.description))]):i("p",{staticStyle:{"white-space":"pre"}},[t._v("無商品描述")]),i("h2",{staticClass:"text-left"},[t._v("$ "+t._s(t.price))]),i("v-form",{staticClass:"mt-16"},[i("v-row",{staticClass:"justify-end"},[t.color?i("v-col",{staticStyle:{height:"120px"},attrs:{cols:"6"}},[i("v-select",{attrs:{items:t.coloroptions,label:"請選擇商品顏色",outlined:"",chips:""},model:{value:t.colordecision,callback:function(e){t.colordecision=e},expression:"colordecision"}})],1):t._e(),t.size?i("v-col",{staticStyle:{height:"120px"},attrs:{cols:"6"}},[i("v-select",{attrs:{items:t.sizeoptions,label:"請選擇商品尺寸",outlined:"",chips:""},model:{value:t.sizedecision,callback:function(e){t.sizedecision=e},expression:"sizedecision"}})],1):t._e(),t.color||t.size?t._e():i("v-col",{staticStyle:{height:"120px"},attrs:{cols:"12"}},[i("h2",{staticClass:"text-center grey--text"},[t._v("統一尺寸及顏色")])])],1),i("v-text-field",{staticClass:"mt-10",attrs:{readonly:"",height:"20",width:"50",type:"number",min:"0",rules:t.qtyrules,"hide-spin-buttons":"",outlined:"","append-icon":"mdi-plus","prepend-inner-icon":"mdi-minus"},on:{"click:append":function(e){t.quantity++},"click:prepend-inner":function(e){t.quantity>0&&t.quantity--}},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}})],1),i("v-btn",{staticClass:"mt-8",attrs:{color:"primary",block:"",height:"80"},on:{click:t.addCart}},[t._v("加入購物車")]),i("router-link",{staticClass:"d-flex justify-end mt-4 text-decoration-none",attrs:{to:"/shop"}},[i("v-btn",{attrs:{color:"red",dark:""}},[t._v("回商城")])],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-dialog",{attrs:{width:"500px",color:"red"},on:{"click:outside":function(e){t.form.text=""}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{block:"",color:"red lighten-2",dark:""}},"v-btn",a,!1),r),[t._v("我要留言")])]}}]),model:{value:t.reviewdialog,callback:function(e){t.reviewdialog=e},expression:"reviewdialog"}},[i("v-card",[i("v-card-title",[i("v-avatar",[i("v-img",{attrs:{src:"https://source.boringavatars.com/beam/120/"+this.user._id}})],1),i("p",{staticClass:"text-h6 grey--text text--darken-2 mb-0 ml-3"},[t._v(t._s(this.user.account))])],1),i("v-card-text",{staticClass:"pb-2"},[i("v-rating",{attrs:{"background-color":"grey lighten-1",color:"warning",dense:"","half-increments":"",hover:"",length:"5",size:"33",value:"3"},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1),i("v-card-text",{staticClass:"pb-2"},[i("v-textarea",{attrs:{"no-resize":"",outlined:"","hide-details":"",height:"150"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),i("v-card-actions",[i("v-row",{staticClass:"ma-n2"},[i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{color:"success",block:""},on:{click:function(e){return t.submit()}}},[t._v("送出")])],1),i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{color:"error",block:""},on:{click:function(e){t.form.text=""}}},[t._v("取消")])],1)],1)],1)],1)],1)],1),i("v-col",{staticClass:"d-flex flex-column-reverse",attrs:{cols:"12"}},t._l(t.review,(function(e){return i("v-card",{key:e._id,staticClass:"my-3 mx-5"},[i("v-card-title",[i("v-avatar",{staticClass:"mr-3"},[i("v-img",{attrs:{src:"https://source.boringavatars.com/beam/120/"+e._id}})],1),t._v(t._s(e.user))],1),i("v-card-subtitle",{staticClass:"mt-n2"},[i("v-rating",{attrs:{readonly:"","background-color":"grey lighten-1",color:"warning",dense:"","half-increments":"",hover:"",length:"5",size:"20",value:"3"},model:{value:e.rating,callback:function(i){t.$set(e,"rating",i)},expression:"item.rating"}})],1),i("v-card-text",[i("p",{staticClass:"text-body-1 grey--text text--darken-2 mb-0",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.text))]),i("p",{staticClass:"text-right mb-0"},[t._v(t._s(new Date(e.date).toLocaleString("zh-tw")))])])],1)})),1)],1)],1)},a=[],n=i("1da1"),s=(i("99af"),i("b0c0"),i("a4d3"),i("e01a"),i("96cf"),{name:"Product",components:{},data:function(){return{reviewdialog:!1,preview:"",name:"",price:0,description:"",image:[],sell:!1,size:!1,sizeoptions:["XXL","XL","L","M","S","XS","XXS"],sizedecision:"",color:!1,coloroptions:[],colordecision:"",category:"",quantity:0,qtyrules:[function(t){return t>0||"數量必須大於 0"},function(t){return!!t||"必填項目"}],review:[],form:{rating:3,text:""},starRating:3}},methods:{iwainttoreview:function(){this.reviewdialog=!0},testsizecolor:function(){console.log()},changepic:function(t){this.preview=t},addCart:function(){this.$store.dispatch("user/addCart",{product:this.$route.params.id,quantity:this.quantity,size:this.sizedecision,hassize:this.size,color:this.colordecision,hascolor:this.color,custom:this.custom})},submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.user.isLogin){e.next=7;break}return t.$swal({icon:"success",title:"未登入",text:"請先登入"}),t.$router.push("/login"),e.abrupt("return");case 7:if(0!==t.form.text.length){e.next=10;break}return t.$swal({icon:"error",title:"傳送失敗",text:"輸入欄位是空的"}),e.abrupt("return");case 10:return e.next=12,t.api.post("/products/"+t.$route.params.id,t.form,{headers:{authorization:"Bearer "+t.user.token}});case 12:i=e.sent,r=i.data,t.id=r.result._id,t.review=r.result.review,t.reviewdialog=!1,t.form.text="",e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message});case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()}},computed:{custom:function(){return this.color&&this.size?"".concat(this.colordecision+"色 - "," ").concat(this.sizedecision+"號","  x ").concat(this.quantity):!this.color&&this.size?"".concat(this.sizedecision+"號","  x ").concat(this.quantity):!(!this.color||this.size)&&"".concat(this.colordecision+"色","  x ").concat(this.quantity)}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/"+t.$route.params.id);case 3:i=e.sent,r=i.data,console.log(r),t.name=r.result.name,t.price=r.result.price,t.description=r.result.description,t.image=r.result.image,t.sell=r.result.sell,t.color=r.result.color,t.size=r.result.size,t.category=r.result.category,t.gender=r.result.gender,t.review=r.result.review,t.coloroptions=r.result.coloroptions,document.title="Hiver | ".concat(t.name),t.preview=t.image[0],e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),t.$router.push("/");case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()},mounted:function(){}}),o=s,c=i("2877"),l=i("6544"),u=i.n(l),d=i("8212"),h=i("8336"),v=i("b0af"),f=i("99d9"),p=i("62ad"),m=i("a523"),g=i("169a"),x=i("4bd4"),b=i("adda"),y=i("a797"),w=i("490a"),k=(i("a9e3"),i("c96a"),i("d81d"),i("696f"),i("9d26")),C=i("a9ad"),_=i("16b7"),z=i("af2b"),V=i("5311"),I=i("7560"),S=i("80d2"),$=i("58df"),H=Object($["a"])(C["a"],_["a"],V["a"],z["a"],I["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,i=t.large,r=t.light,a=t.medium,n=t.small,s=t.size,o=t.xLarge,c=t.xSmall;return{dark:e,large:i,light:r,medium:a,size:s,small:n,xLarge:o,xSmall:c}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(i){if(!e.readonly){var r=e.genHoverIndex(i,t);e.clearable&&e.internalValue===r?e.internalValue=0:e.internalValue=r}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){var i=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var i=this;this.runDelay("open",(function(){i.hoverIndex=i.genHoverIndex(t,e)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(t){var e=this,i=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(i);var r={click:i.click};return this.hover&&(r.mouseenter=function(i){return e.onMouseEnter(i,t)},r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=function(i){return e.onMouseEnter(i,t)})),this.$createElement(k["a"],this.setTextColor(this.getColor(i),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(i)])}},render:function(t){var e=this,i=Object(S["i"])(Number(this.length)).map((function(t){return e.genItem(t)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},i)}}),q=i("0fd9"),F=i("b974"),L=i("8654"),j=i("a844"),B=Object(c["a"])(o,r,a,!1,null,null,null);e["default"]=B.exports;u()(B,{VAvatar:d["a"],VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:p["a"],VContainer:m["a"],VDialog:g["a"],VForm:x["a"],VImg:b["a"],VOverlay:y["a"],VProgressCircular:w["a"],VRating:H,VRow:q["a"],VSelect:F["a"],VTextField:L["a"],VTextarea:j["a"]})}}]);
//# sourceMappingURL=product.b6e2189a.js.map