(window["webpackJsonp__mf-example-existing-vue-project-2"]=window["webpackJsonp__mf-example-existing-vue-project-2"]||[]).push([["chunk-984ec44e"],{6811:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GridImages",{attrs:{imageList:e.dogImageList}})},i=[],r=a("bc3a"),n=a.n(r),l=a("fe2e"),o={name:"DogView",components:{GridImages:l["a"]},data:()=>({dogApiUrl:"https://dog.ceo/api/breeds/image/random/9",dogImageList:[]}),async mounted(){await n.a.get(this.dogApiUrl).then(e=>{this.dogImageList=e.data.message||[]}).catch(()=>{this.dogImageList=[]})}},c=o,g=a("2877"),u=Object(g["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},fe2e:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",e._l(9,(function(t){return a("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.imageList[t-1],"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e.imageList[t-1]?a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}}):a("span")],1)]},proxy:!0}],null,!0)})],1)})),1)},i=[],r={name:"GridImageComponent",props:{imageList:{default:()=>[],type:Array}}},n=r,l=a("2877"),o=a("6544"),c=a.n(o),g=a("62ad"),u=a("adda"),m=a("490a"),d=a("0fd9"),p=Object(l["a"])(n,s,i,!1,null,null,null);t["a"]=p.exports;c()(p,{VCol:g["a"],VImg:u["a"],VProgressCircular:m["a"],VRow:d["a"]})}}]);
//# sourceMappingURL=chunk-984ec44e.07a71981.js.map