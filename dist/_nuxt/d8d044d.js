(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{239:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scale:60}},computed:{image:function(){return this.$store.state.image}},methods:{rotationClass:function(i,t){return(i+t)%6*-60+"deg"},translateClass:function(i,t){var e=0;switch(t%6){case 1:e=-51;break;case 2:e=-34.64;break;case 3:e=-87.32;break;case 4:e=-70;break;case 5:e=-120}return"0, "+e+"px"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"wallpaper relative"},t._l(6,(function(i){return n("div",{key:i,staticClass:"absolute"},t._l(1,(function(e){return n("div",{key:e,staticClass:"isosceles-120",style:"background-image: url('"+t.image+"'); transform: translate("+t.translateClass(i,e)+") rotate("+t.rotationClass(i,e)+")"})})),0)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);