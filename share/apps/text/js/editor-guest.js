(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[191],{227:function(e,t,a){var s=a(678);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(50).default)("dca7bb3a",s,!0,{})},677:function(e,t,a){"use strict";var s=a(227);a.n(s).a},678:function(e,t,a){(t=a(49)(!1)).push([e.i,"form.guest-name-dialog[data-v-295cde23]{display:flex;max-width:200px;margin:auto;margin-top:-2px;padding:3px}form.guest-name-dialog[data-v-295cde23] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-295cde23]{flex-grow:1}form.guest-name-dialog label[data-v-295cde23]{padding:3px;height:32px}\n",""]),e.exports=t},686:function(e,t,a){"use strict";a.r(t);var s=a(187),n=a.n(s),i=a(374),o=a.n(i),u=a(11),r={name:"GuestNameDialog",components:{Avatar:o.a},directives:{tooltip:n.a},props:{syncService:{type:Object,default:null}},data:function(){return{guestName:"",guestNameBuffered:""}},computed:{avatarUrl:function(){var e=Object(u.generateUrl)("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+e}},beforeMount:function(){this.guestName=this.syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName:function(){var e=this,t=this.syncService.session.guestName;this.syncService.updateSession(this.guestName).then((function(){localStorage.setItem("nick",e.guestName),e.updateBufferedGuestName()})).catch((function(a){e.guestName=t}))},updateBufferedGuestName:function(){this.guestNameBuffered=this.guestName}}},c=(a(677),a(18)),m=Object(c.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("text","Enter your name so other users can see who is editing"),expression:"t('text', 'Enter your name so other users can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(t){return t.preventDefault(),e.setGuestName()}}},[a("label",[a("Avatar",{attrs:{url:e.avatarUrl,"disable-tooltip":!0,size:32}})],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":e.t("text","Edit guest name")},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),e._v(" "),a("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":e.t("text","Save guest name"),value:""}})])}),[],!1,null,"295cde23",null);t.default=m.exports}}]);
//# sourceMappingURL=editor-guest.js.map?v=00ca26dee67a640cf919