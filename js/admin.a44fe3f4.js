(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"2c64":function(t,e,o){},3530:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{id:"admin"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-tabs",{attrs:{"fixed-tabs":"","background-color":"indigo",dark:"","active-class":"","hide-slider":""}},[o("v-tab",{attrs:{to:"/admin/feedbacks"}},[t._v("顧客回饋系統")]),o("v-tab",{attrs:{to:"/admin/products"}},[t._v("商品管理")]),o("v-tab",{attrs:{to:"/admin/orders"}},[t._v("訂單管理")])],1)],1),o("v-col",{attrs:{cols:"12"}},[o("router-view")],1)],1)],1)},r=[],a={},n=a,s=o("2877"),l=o("6544"),c=o.n(l),u=o("62ad"),d=o("a523"),m=o("0fd9"),p=o("71a3"),f=o("fe57"),h=Object(s["a"])(n,i,r,!1,null,null,null);e["default"]=h.exports;c()(h,{VCol:u["a"],VContainer:d["a"],VRow:m["a"],VTab:p["a"],VTabs:f["a"]})},"3d86":function(t,e,o){},"6ca7":function(t,e,o){},"7d44":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"text-center"},[t._v("顧客回饋（待開發）")])},r=[],a=o("2877"),n={},s=Object(a["a"])(n,i,r,!1,null,null,null);e["default"]=s.exports},aa93:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"adminproducts"}},[o("h1",{staticClass:"text-center"},[t._v("商品管理")]),o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",r,!1),i),[t._v("新增商品")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(t._s(t.isEdit))]),o("v-form",{ref:"form",staticClass:"mx-5 my-5",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{outlined:"",counter:10,rules:t.pnameRules,label:"商品名稱",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),o("v-text-field",{staticClass:"mt-2",attrs:{type:"number","hide-spin-buttons":"",outlined:"",counter:10,rules:t.priceRules,label:"商品價格",required:"",prefix:"$"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}}),o("v-select",{staticClass:"mt-5 test123",attrs:{outlined:"",items:t.Pitems,rules:[function(t){return!!t||"Item is required"}],label:"商品分類",required:""},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}}),o("v-select",{staticClass:"mt-5 test123",attrs:{outlined:"",items:t.Gitems,rules:[function(t){return!!t||"Gender is required"}],label:"使用者分類",required:""},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}}),o("v-textarea",{staticClass:"mt-5",attrs:{placeholder:"請輸入商品描述",clearable:"","clear-icon":"mdi-close-circle",outlined:"",name:"input-7-4",label:"商品描述",value:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-radio-group",{staticClass:"pl-2 my-2",attrs:{mandatory:""},model:{value:t.form.sell,callback:function(e){t.$set(t.form,"sell",e)},expression:"form.sell"}},[o("v-radio",{attrs:{label:"上架",value:!0}}),o("v-radio",{attrs:{label:"下架",value:!1}})],1)],1),o("v-divider",{staticStyle:{height:"100px"},attrs:{vertical:""}}),o("v-col",{attrs:{cols:"4"}},[o("v-radio-group",{staticClass:"pl-2 my-2",attrs:{mandatory:""},model:{value:t.form.size,callback:function(e){t.$set(t.form,"size",e)},expression:"form.size"}},[o("v-radio",{attrs:{label:"多個尺寸",value:!0}}),o("v-radio",{attrs:{label:"無",value:!1}})],1)],1),o("v-divider",{staticStyle:{height:"100px"},attrs:{vertical:""}}),o("v-col",{attrs:{cols:"4"}},[o("v-radio-group",{staticClass:"pl-2 my-2",attrs:{mandatory:""},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}},[o("v-radio",{attrs:{label:"多款顏色",value:!0}}),o("v-radio",{attrs:{label:"無",value:!1},on:{click:function(e){return t.nocolor()}}})],1)],1),t.form.color?o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{flat:""}},[o("v-card-text",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"紅",color:"red",value:"紅","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"粉紅",color:"pink",value:"粉紅","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"紫",color:"purple",value:"紫","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"藍",color:"blue",value:"藍","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"綠",color:"green",value:"綠","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"黃",color:"yellow",value:"黃","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"卡其",color:"brown lighten-3",value:"卡其","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"深卡其",color:"brown darken-1",value:"深卡其","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"深藍",color:"indigo",value:"深藍","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"淺藍",color:"light-blue",value:"淺藍","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"深綠",color:"teal",value:"深綠","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"淺綠",color:"light-green",value:"淺綠","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"橘",color:"orange",value:"橘","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"棕",color:"brown",value:"棕","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"藏青",color:"blue-grey",value:"藏青","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"灰",color:"grey darken-2",value:"灰","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-checkbox",{attrs:{label:"黑",color:"black",value:"黑","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}}),o("v-checkbox",{attrs:{label:"白",color:"grey",value:"白","hide-details":""},model:{value:t.form.coloroptions,callback:function(e){t.$set(t.form,"coloroptions",e)},expression:"form.coloroptions"}})],1)],1)],1)],1)],1)],1):t._e()],1),o("VueFileAgent",{ref:"vueFileAgent",attrs:{theme:"list",multiple:!0,deletable:!0,meta:!0,accept:"image/*",maxSize:"1MB",maxFiles:14,helpText:"選擇圖片檔案",errorText:{type:"檔案類型錯誤，請上傳正確的圖片檔",size:"檔案不能超過 1MB"}},on:{select:function(e){return t.filesSelected(e)},beforedelete:function(e){return t.onBeforeDelete(e)},delete:function(e){return t.fileDeleted(e)}},model:{value:t.fileRecords,callback:function(e){t.fileRecords=e},expression:"fileRecords"}})],1),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"mr-1",attrs:{disabled:t.modalSubmitting,color:"error"},on:{click:function(e){return t.resetForm()}}},[t._v("取消")]),o("v-btn",{staticClass:"mr-1",attrs:{disabled:t.modalSubmitting,color:"primary",dark:""},on:{click:function(e){return t.reset()}}},[t._v("清空表單")]),o("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid||t.modalSubmitting,color:"success"},on:{click:function(e){t.validate(),t.submitModal()}}},[t._v("完成送出")])],1)],1)],1)],1),o("v-card",[o("v-card-title",[o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,"items-per-page":5,search:t.search,"show-group-by":"","sort-by":"sell","group-by":"category","item-key":"_id","no-data-text":"沒有商品"},scopedSlots:t._u([{key:"item.image",fn:function(e){var i=e.item;return[o("v-img",{staticClass:"mt-1 mx-auto",staticStyle:{width:"70px",height:"50px"},attrs:{src:i.image[0],contain:""}}),o("p",{staticClass:"mb-0"},[t._v("共 "+t._s(i.image.length)+" 張圖片")])]}},{key:"item.price",fn:function(e){var i=e.item;return[o("p",{staticClass:"mb-0"},[t._v("NT$"),o("span",{staticClass:"ml-2"},[t._v(t._s(i.price))])])]}},{key:"item.sell",fn:function(e){var i=e.item;return[o("h1",[t._v(t._s(i.sell?"v":""))])]}},{key:"item.none",fn:function(e){var i=e.item;return[o("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.editProduct(i._id)}}},[t._v("編輯")])]}}])})],1)],1)},r=[],a=o("5530"),n=o("b85c"),s=o("1da1"),l=(o("96cf"),o("d81d"),o("a434"),o("b0c0"),o("4de4"),o("d3b7"),o("99af"),{data:function(){return{headers:[{text:"圖片",align:"center",sortable:!1,value:"image",groupable:!1},{text:"名稱",align:"center",value:"name"},{text:"價格",align:"center",value:"price"},{text:"商品分類",align:"center",value:"category"},{text:"使用者分類",align:"center",value:"gender"},{text:"說明",align:"center",value:"description"},{text:"上架",align:"center",value:"sell"},{text:"操作",align:"center",value:"none"}],products:[],modalSubmitting:!1,dialog:!1,form:{name:"",price:null,description:"",image:[],sell:!1,color:!1,coloroptions:[],size:!1,category:null,gender:null,_id:"",index:-1},valid:!0,pnameRules:[function(t){return!!t||"Name is required"}],priceRules:[function(t){return!!t||"Price is required"},function(t){return t>=0||"價格不能小於 0"}],Pitems:[{text:"--請選擇商品分類--",value:null},"登山健行","滑雪","外套","露營"],Gitems:[{text:"--請選擇使用者分類--",value:null},"通用","男生","女生"],fileRecords:[],uploadUrl:"https://www.mocky.io/v2/5d4fb20b3000005c111099e3",uploadHeaders:{"X-Test-Header":"vue-file-agent"},fileRecordsForUpload:[],search:""}},computed:{isEdit:function(){return this.form._id?"編輯商品":"新增商品"},editDontNeedImg:function(){return 0===this.form._id.length?"":this.form.image===[]},mapfile:function(){var t=this.fileRecordsForUpload.map((function(t){return t.file}));return t}},methods:{nocolor:function(){this.form.color||(this.form.coloroptions=[])},clickoutside:function(){this.dialog=!0},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset(),this.fileRecordsForUpload=[],this.fileRecords=[],this.form={image:[],category:null,gender:null,_id:"",index:-1}},submitModal:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var o,i,r,a,s,l,c,u,d,m,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in t.modalSubmitting=!0,o=new FormData,t.form)"_id"!==i&&"image"!==i&&"coloroptions"!==i&&o.append(i,t.form[i]);r=Object(n["a"])(t.form.image);try{for(r.s();!(a=r.n()).done;)s=a.value,o.append("image",s)}catch(h){r.e(h)}finally{r.f()}l=Object(n["a"])(t.form.coloroptions);try{for(l.s();!(c=l.n()).done;)u=c.value,o.append("coloroptions",u)}catch(h){l.e(h)}finally{l.f()}if(e.prev=7,0!==t.form._id.length){e.next=16;break}return e.next=11,t.api.post("/products",o,{headers:{authorization:"Bearer "+t.user.token}});case 11:d=e.sent,m=d.data,t.products.push(m.result),e.next=21;break;case 16:return e.next=18,t.api.patch("/products/"+t.form._id,o,{headers:{authorization:"Bearer "+t.user.token}});case 18:p=e.sent,f=p.data,t.products.splice(t.form.index,1,f.result);case 21:t.dialog=!1,t.reset(),e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](7),""===t.form.name||null===t.form.price||null===t.form.category?t.$swal({icon:"error",title:"錯誤",text:"必填欄位不能為空"}):t.form.image===[]?t.$swal({icon:"error",title:"錯誤",text:"圖片欄位不得為空"}):t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message+"hhihi"});case 28:t.modalSubmitting=!1;case 29:case"end":return e.stop()}}),e,null,[[7,25]])})))()},resetForm:function(t){this.modalSubmitting?t.preventDefault():(this.fileRecordsForUpload=[],this.fileRecords=[],this.dialog=!1,this.form={name:"",price:null,description:"",image:[],sell:!1,color:!1,size:!1,category:null,gender:null,index:-1})},editProduct:function(t){var e=this.products.map((function(t){return t._id})).indexOf(t);this.form=Object(a["a"])(Object(a["a"])({},this.products[e]),{},{image:[],index:e}),this.dialog=!0},filesSelected:function(t){var e=t.filter((function(t){return!t.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(e)},onBeforeDelete:function(t){var e=this.fileRecordsForUpload.indexOf(t);if(-1!==e){this.fileRecordsForUpload.splice(e,1);var o=this.fileRecords.indexOf(t);-1!==o&&this.fileRecords.splice(o,1)}else confirm("確定要刪除檔案嗎？")&&this.$refs.vueFileAgent.deleteFileRecord(t)}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:o=e.sent,i=o.data,t.products=i.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},watch:{fileRecordsForUpload:{deep:!0,handler:function(t){this.form.image=this.mapfile}}}}),c=l,u=o("2877"),d=o("6544"),m=o.n(d),p=o("8336"),f=o("b0af"),h=o("99d9"),v=o("15fd"),b=(o("25f0"),o("6ca7"),o("ec29"),o("9d26")),g=o("c37a"),x=o("5311"),k=o("8547"),y=o("58df");function C(t){t.preventDefault()}var _=Object(y["a"])(g["a"],x["a"],k["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,o=this.internalValue;return this.isMultiple?!!Array.isArray(o)&&o.some((function(o){return t.valueComparator(o,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,o):Boolean(o):this.valueComparator(o,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=g["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:C},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:C},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,o=this.internalValue;if(this.isMultiple){Array.isArray(o)||(o=[]);var i=o.length;o=o.filter((function(o){return!t.valueComparator(o,e)})),o.length===i&&o.push(e)}else o=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(o,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(o,e)?null:e:!o;this.validate(!0,o),this.internalValue=o,this.hasColor=o}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),$=["title"],S=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(v["a"])(t,$));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=o("62ad"),V=o("a523"),I=o("8fea"),R=o("169a"),O=o("ce7e"),j=o("4bd4"),F=o("adda"),D=(o("2c64"),o("ba87")),A=o("7e2b"),B=o("a9ad"),G=o("4e82"),T=o("7560"),z=o("80d2"),E=o("d9f7"),L=["title"],U=Object(y["a"])(A["a"],B["a"],x["a"],Object(G["a"])("radioGroup"),T["a"]),q=U.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return g["a"].options.computed.computedId.call(this)},hasLabel:g["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(D["a"],{on:{click:C},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(z["t"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(v["a"])(t,L));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(a["a"])({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(E["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),M=(o("a9e3"),o("3d86"),o("604c")),N=Object(y["a"])(M["a"],g["a"]),P=N.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},g["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=g["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=g["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:M["a"].options.methods.onClick},render:function(t){var e=g["a"].options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),K=o("0fd9"),H=o("b974"),J=(o("20f6"),Object(z["j"])("spacer","div","v-spacer")),X=o("8654"),Q=o("a844"),W=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=W.exports;m()(W,{VBtn:p["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCheckbox:S,VCol:w["a"],VContainer:V["a"],VDataTable:I["a"],VDialog:R["a"],VDivider:O["a"],VForm:j["a"],VImg:F["a"],VRadio:q,VRadioGroup:P,VRow:K["a"],VSelect:H["a"],VSpacer:J,VTextField:X["a"],VTextarea:Q["a"]})},c732:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"text-center"},[t._v("哈囉！請選擇管理項目")])},r=[],a=o("2877"),n={},s=Object(a["a"])(n,i,r,!1,null,null,null);e["default"]=s.exports},ec29:function(t,e,o){},ec5c:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"adminorders"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,"items-per-page":5},scopedSlots:t._u([{key:"item.user",fn:function(e){var o=e.item;return[t._v(t._s(o.user.account))]}},{key:"item.date",fn:function(e){var o=e.item;return[t._v(t._s(new Date(o.date).toLocaleString("zh-tw")))]}},{key:"item.products",fn:function(e){var i=e.item;return[o("ul",t._l(i.products,(function(e){return o("li",{key:e._id},[t._v(" "+t._s(e.product.name)+" x "+t._s(e.quantity))])})),0)]}}])})],1)},r=[],a=o("1da1"),n=(o("96cf"),{data:function(){return{orders:[],headers:[{text:"單號",value:"_id"},{text:"使用者",value:"user"},{text:"日期",value:"date"},{text:"商品",value:"products"}]}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/orders/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:o=e.sent,i=o.data,t.orders=i.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),s=n,l=o("2877"),c=o("6544"),u=o.n(c),d=o("8fea"),m=Object(l["a"])(s,i,r,!1,null,null,null);e["default"]=m.exports;u()(m,{VDataTable:d["a"]})}}]);
//# sourceMappingURL=admin.a44fe3f4.js.map