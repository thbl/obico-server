(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a9b7"],{bbde:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"profile"},[s("h2",{staticClass:"section-title"},[t._v("Authorized Apps")]),s("div",{staticClass:"tsd-table break-md mt-3"},[t._m(0),s("div",{staticClass:"table-body"},t._l(t.authorizedApps,(function(e){return s("div",{key:e.id,staticClass:"table-row"},[s("div",[t._v(t._s(e.app))]),s("div",[t._v(t._s(e.printer.name))]),s("div",[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.removeAccess(e.id)}}},[t._v("Remove Access")])])])})),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-head"},[s("div",{staticClass:"table-row"},[s("div",[t._v("App Name")]),s("div",[t._v("Printer to Access")]),s("div")])])}],n=(s("4de4"),s("bc3a")),c=s.n(n),r=s("c7f6"),o={name:"AuthorizedApps",data:function(){return{authorizedApps:[]}},created:function(){var t=this;c.a.get(r["a"].tunnels()).then((function(e){t.authorizedApps=e.data})).catch((function(e){t.$swal.Reject.fire({title:"Oops",text:e.message})}))},methods:{removeAccess:function(t){var e=this;c.a.delete(r["a"].tunnel(t)).then((function(){e.authorizedApps=e.authorizedApps.filter((function(e){return e.id!==t}))})).catch((function(t){e.$swal.Reject.fire({title:"Oops",text:t.message})}))}}},d=o,l=s("2877"),u=Object(l["a"])(d,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21a9b7.js.map