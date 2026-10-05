var ku=Object.defineProperty;var Hu=(i,t,e)=>t in i?ku(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>Hu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",Gu=0,kc=1,Vu=2,gh=1,_h=2,Wn=3,li=0,Ge=1,Tn=2,ai=0,os=1,aa=2,Hc=3,Gc=4,Wu=5,wi=100,Xu=101,Yu=102,qu=103,ju=104,Zu=200,Ku=201,Ju=202,$u=203,ca=204,la=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,od=212,rd=213,ad=214,ha=0,ua=1,da=2,us=3,fa=4,pa=5,ma=6,ga=7,sc=0,cd=1,ld=2,ci=0,hd=1,ud=2,dd=3,fd=4,pd=5,md=6,gd=7,vh=300,ds=301,fs=302,_a=303,va=304,or=306,xa=1e3,bi=1001,ya=1002,en=1003,_d=1004,fo=1005,gn=1006,mr=1007,Ti=1008,Zn=1009,xh=1010,yh=1011,Zs=1012,oc=1013,Ci=1014,Yn=1015,so=1016,rc=1017,ac=1018,ps=1020,Mh=35902,Sh=1021,wh=1022,Rn=1023,Eh=1024,bh=1025,rs=1026,ms=1027,cc=1028,lc=1029,Th=1030,hc=1031,uc=1033,Vo=33776,Wo=33777,Xo=33778,Yo=33779,Ma=35840,Sa=35841,wa=35842,Ea=35843,ba=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,za=37817,Oa=37818,Ba=37819,ka=37820,Ha=37821,qo=36492,Ga=36494,Va=36495,Ah=36283,Wa=36284,Xa=36285,Ya=36286,vd=3200,xd=3201,dc=0,yd=1,ri="",rn="srgb",Ms="srgb-linear",rr="linear",ue="srgb",Fi=7680,Vc=519,Md=512,Sd=513,wd=514,Rh=515,Ed=516,bd=517,Td=518,Ad=519,qa=35044,Wc="300 es",qn=2e3,Jo=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xc=1234567;const Gs=Math.PI/180,Ks=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function fc(i,t){return(i%t+t)%t}function Rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cd(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function Pd(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function Ld(i,t=1){return t-Math.abs(fc(i,t*2)-t)}function Dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ud(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nd(i,t){return i+Math.random()*(t-i)}function Fd(i){return i*(.5-Math.random())}function zd(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*Gs}function Bd(i){return i*Ks}function kd(i){return(i&i-1)===0&&i!==0}function Hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),u=r((t+n)/2),h=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Gs,RAD2DEG:Ks,generateUUID:Un,clamp:ke,euclideanModulo:fc,mapLinear:Rd,inverseLerp:Cd,lerp:Vs,damp:Pd,pingpong:Ld,smoothstep:Dd,smootherstep:Id,randInt:Ud,randFloat:Nd,randFloatSpread:Fd,seededRandom:zd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:kd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Vd,normalize:le,denormalize:An};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,o,r,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],v=s[7],D=s[2],R=s[5],C=s[8];return o[0]=r*_+a*S+c*D,o[3]=r*m+a*x+c*R,o[6]=r*p+a*v+c*C,o[1]=l*_+u*S+h*D,o[4]=l*m+u*x+h*R,o[7]=l*p+u*v+h*C,o[2]=d*_+f*S+g*D,o[5]=d*m+f*x+g*R,o[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,f=l*o-r*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new jt;function Ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=$o("canvas");return i.style.display="block",i}const Yc={};function Bs(i){i in Yc||(Yc[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Yd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?rr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const qc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Zc=[.3127,.329],Kc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ms]:{primaries:qc,whitePoint:Zc,transfer:rr,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:qc,whitePoint:Zc,transfer:ue,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let zi;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=$o("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=jn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class Ph{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(_r(s[r].image)):o.push(_r(s[r]))}else o=_r(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;class je extends Ss{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=bi,s=bi,o=gn,r=Ti,a=Rn,c=Zn,l=je.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Un(),this.name="",this.source=new Ph(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=vh;je.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(f+1)/2,D=(p+1)/2,R=(u+d)/4,C=(h+_)/4,P=(g+m)/4;return x>v&&x>D?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=R/n,o=C/n):v>D?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=R/s,o=P/s):D<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),n=C/o,s=P/o),this.set(n,s,o,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ph(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Jd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lh extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,p*S);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const v=a*S;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new A,$c=new oo;class ro{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Mn):Mn.fromBufferAttribute(o,r),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),mo.subVectors(this.max,Rs),Oi.subVectors(t.a,Rs),Bi.subVectors(t.b,Rs),ki.subVectors(t.c,Rs),Qn.subVectors(Bi,Oi),ti.subVectors(ki,Bi),pi.subVectors(Oi,ki);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!xr(e,Oi,Bi,ki,mo)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,Oi,Bi,ki,mo))?!1:(go.crossVectors(Qn,ti),e=[go.x,go.y,go.z],xr(e,Oi,Bi,ki,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new A,new A,new A,new A,new A,new A,new A,new A],Mn=new A,po=new ro,Oi=new A,Bi=new A,ki=new A,Qn=new A,ti=new A,pi=new A,Rs=new A,mo=new A,go=new A,mi=new A;function xr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){mi.fromArray(i,o);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Qd=new ro,Cs=new A,yr=new A;class pc{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(yr)),this.expandByPoint(Cs.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new A,Mr=new A,_o=new A,ei=new A,Sr=new A,vo=new A,wr=new A;class tf{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mr.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Mr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(_o),a=ei.dot(this.direction),c=-ei.dot(_o),l=ei.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mr).addScaledVector(_o,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,o){Sr.subVectors(e,t),vo.subVectors(n,t),wr.crossVectors(Sr,vo);let r=this.direction.dot(wr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(vo.crossVectors(ei,vo));if(c<0)return null;const l=a*this.direction.dot(Sr.cross(ei));if(l<0||c+l>r)return null;const u=-a*ei.dot(wr);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),o=1/Hi.setFromMatrixColumn(t,1).length(),r=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ni.crossVectors(n,hn),ni.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ni.crossVectors(n,hn)),ni.normalize(),xo.crossVectors(hn,ni),s[0]=ni.x,s[4]=xo.x,s[8]=hn.x,s[1]=ni.y,s[5]=xo.y,s[9]=hn.y,s[2]=ni.z,s[6]=xo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],D=n[15],R=s[0],C=s[4],P=s[8],E=s[12],M=s[1],L=s[5],k=s[9],O=s[13],X=s[2],Y=s[6],W=s[10],Q=s[14],H=s[3],nt=s[7],ht=s[11],ft=s[15];return o[0]=r*R+a*M+c*X+l*H,o[4]=r*C+a*L+c*Y+l*nt,o[8]=r*P+a*k+c*W+l*ht,o[12]=r*E+a*O+c*Q+l*ft,o[1]=u*R+h*M+d*X+f*H,o[5]=u*C+h*L+d*Y+f*nt,o[9]=u*P+h*k+d*W+f*ht,o[13]=u*E+h*O+d*Q+f*ft,o[2]=g*R+_*M+m*X+p*H,o[6]=g*C+_*L+m*Y+p*nt,o[10]=g*P+_*k+m*W+p*ht,o[14]=g*E+_*O+m*Q+p*ft,o[3]=S*R+x*M+v*X+D*H,o[7]=S*C+x*L+v*Y+D*nt,o[11]=S*P+x*k+v*W+D*ht,o[15]=S*E+x*O+v*Q+D*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*u-o*c*u)+m*(+e*l*h-e*a*f-o*r*h+n*r*f+o*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+r*m*f+u*c*p-r*d*p,v=u*_*l-g*h*l+g*a*f-r*_*f-u*a*p+r*h*p,D=g*h*c-u*_*c-g*a*d+r*_*d+u*a*m-r*h*m,R=e*S+n*x+s*v+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=S*C,t[1]=(_*d*o-h*m*o-_*s*f+n*m*f+h*s*p-n*d*p)*C,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=x*C,t[5]=(u*m*o-g*d*o+g*s*f-e*m*f-u*s*p+e*d*p)*C,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*C,t[7]=(r*d*o-u*c*o+u*s*l-e*d*l-r*s*f+e*c*f)*C,t[8]=v*C,t[9]=(g*h*o-u*_*o-g*n*f+e*_*f+u*n*p-e*h*p)*C,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*p+e*a*p)*C,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*f-e*a*f)*C,t[12]=D*C,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*C,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*C,t[15]=(r*h*s-u*a*s+u*n*c-e*h*c-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,f=o*u,g=o*h,_=r*u,m=r*h,p=a*h,S=c*l,x=c*u,v=c*h,D=n.x,R=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+v)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(m-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Hi.set(s[0],s[1],s[2]).length();const r=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const l=1/o,u=1/r,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=qn){const c=this.elements,l=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===qn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Jo)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(r-o),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===qn)g=(r+o)*h,_=-2*h;else if(a===Jo)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new A,Sn=new Me,ef=new A(0,0,0),nf=new A(1,1,1),ni=new A,xo=new A,hn=new A,Qc=new Me,tl=new oo;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tl.setFromEuler(this),this.setFromQuaternion(tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sf=0;const el=new A,Gi=new oo,Hn=new Me,yo=new A,Ps=new A,of=new A,rf=new oo,nl=new A(1,0,0),il=new A(0,1,0),sl=new A(0,0,1),ol={type:"added"},af={type:"removed"},Vi={type:"childadded",child:null},Er={type:"childremoved",child:null};class He extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new A,e=new _n,n=new oo,s=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(nl,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(sl,t)}translateOnAxis(t,e){return el.copy(t).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nl,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ps,yo,this.up):Hn.lookAt(yo,Ps,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new A(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new A,Gn=new A,br=new A,Vn=new A,Wi=new A,Xi=new A,rl=new A,Tr=new A,Ar=new A,Rr=new A,Cr=new he,Pr=new he,Lr=new he;class mn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){wn.subVectors(s,e),Gn.subVectors(n,e),br.subVectors(t,e);const r=wn.dot(wn),a=wn.dot(Gn),c=wn.dot(br),l=Gn.dot(Gn),u=Gn.dot(br),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Vn.x),c.addScaledVector(r,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Cr,o.x),r.addScaledVector(Pr,o.y),r.addScaledVector(Lr,o.z),r}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Gn.subVectors(t,e),wn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Wi.subVectors(s,n),Xi.subVectors(o,n),Tr.subVectors(t,n);const c=Wi.dot(Tr),l=Xi.dot(Tr);if(c<=0&&l<=0)return e.copy(n);Ar.subVectors(t,s);const u=Wi.dot(Ar),h=Xi.dot(Ar);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(Wi,r);Rr.subVectors(t,o);const f=Wi.dot(Rr),g=Xi.dot(Rr);if(g>=0&&f<=g)return e.copy(o);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return rl.subVectors(o,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(rl,a);const p=1/(m+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(Wi,r).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=fc(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Dr(r,o,t+1/3),this.g=Dr(r,o,t),this.b=Dr(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ne.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ke(Xe.r*255,0,255))*65536+Math.round(ke(Xe.g*255,0,255))*256+Math.round(ke(Xe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,o=Xe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=rn){ne.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Mo);const n=Vs(ii.h,Mo.h,e),s=Vs(ii.s,Mo.s,e),o=Vs(ii.l,Mo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Ct;Ct.NAMES=Ih;let cf=0;class Ii extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Un(),this.name="",this.blending=os,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=la,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Se extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new A,So=new st;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),o=le(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Uh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lf=0;const pn=new Me,Ir=new He,Yi=new A,un=new ro,Ls=new ro,Be=new A;class Ke extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?Nh:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];un.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(un.min,Ls.min),un.expandByPoint(Be),Be.addVectors(un.max,Ls.max),un.expandByPoint(Be)):(un.expandByPoint(Ls.min),un.expandByPoint(Ls.max))}un.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Be.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Be.add(Yi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,u=new A,h=new A,d=new st,f=new st,g=new st,_=new A,m=new A;function p(P,E,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,E),g.fromBufferAttribute(o,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(_),a[E].add(_),a[M].add(_),c[P].add(m),c[E].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const M=S[P],L=M.start,k=M.count;for(let O=L,X=L+k;O<X;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new A,v=new A,D=new A,R=new A;function C(P){D.fromBufferAttribute(s,P),R.copy(D);const E=a[P];x.copy(E),x.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(R,E);const L=v.dot(c[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,E=S.length;P<E;++P){const M=S[P],L=M.start,k=M.count;for(let O=L,X=L+k;O<X;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,o=new A,r=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new cn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new Me,gi=new tf,wo=new pc,cl=new A,Eo=new A,bo=new A,To=new A,Ur=new A,Ao=new A,ll=new A,Ro=new A;class Xt extends He{constructor(t=new Ke,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ao.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Ur.fromBufferAttribute(h,t),r?Ao.addScaledVector(Ur,u):Ao.addScaledVector(Ur.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(o),gi.copy(t.ray).recast(t.near),!(wo.containsPoint(gi.origin)===!1&&(gi.intersectSphere(wo,cl)===null||gi.origin.distanceToSquared(cl)>(t.far-t.near)**2))&&(al.copy(o).invert(),gi.copy(t.ray).applyMatrix4(al),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,D=x;v<D;v+=3){const R=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Co(this,p,t,n,l,u,h,R,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Co(this,r,t,n,l,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,D=x;v<D;v+=3){const R=v,C=v+1,P=v+2;s=Co(this,p,t,n,l,u,h,R,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;s=Co(this,r,t,n,l,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hf(i,t,e,n,s,o,r,a){let c;if(t.side===Ge?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===li,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ro);return l<e.near||l>e.far?null:{distance:l,point:Ro.clone(),object:i}}function Co(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Eo),i.getVertexPosition(c,bo),i.getVertexPosition(l,To);const u=hf(i,t,e,n,Eo,bo,To,ll);if(u){const h=new A;mn.getBarycoord(ll,Eo,bo,To,h),s&&(u.uv=mn.getInterpolatedAttribute(s,a,c,l,h,new st)),o&&(u.uv1=mn.getInterpolatedAttribute(o,a,c,l,h,new st)),r&&(u.normal=mn.getInterpolatedAttribute(r,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};mn.getNormal(Eo,bo,To,d.normal),u.face=d,u.barycoord=h}return u}class at extends Ke{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function g(_,m,p,S,x,v,D,R,C,P,E){const M=v/C,L=D/P,k=v/2,O=D/2,X=R/2,Y=C+1,W=P+1;let Q=0,H=0;const nt=new A;for(let ht=0;ht<W;ht++){const ft=ht*L-O;for(let Nt=0;Nt<Y;Nt++){const $t=Nt*M-k;nt[_]=$t*S,nt[m]=ft*x,nt[p]=X,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Nt/C),h.push(1-ht/P),Q+=1}}for(let ht=0;ht<P;ht++)for(let ft=0;ft<C;ft++){const Nt=d+ft+Y*ht,$t=d+ft+Y*(ht+1),Z=d+(ft+1)+Y*(ht+1),ut=d+(ft+1)+Y*ht;c.push(Nt,$t,ut),c.push($t,Z,ut),H+=6}a.addGroup(f,H,E),f+=H,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=gs(i[e]);for(const s in n)t[s]=n[s]}return t}function uf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const df={clone:gs,merge:$e};var ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zh extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new A,hl=new st,ul=new st;class dn extends zh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,hl,ul),e.subVectors(ul,hl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,ji=1;class mf extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(qi,ji,t,e);s.layers=this.layers,this.add(s);const o=new dn(qi,ji,t,e);o.layers=this.layers,this.add(o);const r=new dn(qi,ji,t,e);r.layers=this.layers,this.add(r);const a=new dn(qi,ji,t,e);a.layers=this.layers,this.add(a);const c=new dn(qi,ji,t,e);c.layers=this.layers,this.add(c);const l=new dn(qi,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oh extends je{constructor(t,e,n,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gf extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new at(5,5,5),o=new Nn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ai});o.uniforms.tEquirect.value=e;const r=new Xt(s,o),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=gn),new mf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Nr=new A,_f=new A,vf=new jt;class yi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vf.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new pc,Po=new A;class mc{constructor(t=new yi,e=new yi,n=new yi,s=new yi,o=new yi,r=new yi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-o,d-l,m-f,v-p).normalize(),n[1].setComponents(c+o,d+l,m+f,v+p).normalize(),n[2].setComponents(c+r,d+u,m+g,v+S).normalize(),n[3].setComponents(c-r,d-u,m-g,v-S).normalize(),n[4].setComponents(c-a,d-h,m-_,v-x).normalize(),e===qn)n[5].setComponents(c+a,d+h,m+_,v+x).normalize();else if(e===Jo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function xf(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class ui extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-r;for(let x=0;x<l;x++){const v=x*h-o;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,v=S+l*(p+1),D=S+1+l*(p+1),R=S+1+l*p;f.push(x,v,R),f.push(v,D,R)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:yf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:wf,alphatest_fragment:Ef,alphatest_pars_fragment:bf,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:If,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:Hf,color_vertex:Gf,common:Vf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:Yf,displacementmap_vertex:qf,emissivemap_fragment:jf,emissivemap_pars_fragment:Zf,colorspace_fragment:Kf,colorspace_pars_fragment:Jf,envmap_fragment:$f,envmap_common_pars_fragment:Qf,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:op,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:cp,lights_lambert_fragment:lp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:xp,lights_fragment_maps:yp,lights_fragment_end:Mp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:bp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Dp,morphcolor_vertex:Ip,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Fp,normal_fragment_begin:zp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:kp,normal_vertex:Hp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:Yp,opaque_fragment:qp,packing:jp,premultiplied_alpha_fragment:Zp,project_vertex:Kp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:om,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:cm,specularmap_fragment:lm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:xm,background_frag:ym,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:wm,cube_frag:Em,depth_vert:bm,depth_frag:Tm,distanceRGBA_vert:Am,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:Im,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Fm,meshmatcap_vert:zm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:Hm,meshphong_frag:Gm,meshphysical_vert:Vm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:Ym,points_vert:qm,points_frag:jm,shadow_vert:Zm,shadow_frag:Km,sprite_vert:Jm,sprite_frag:$m},_t={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ln={basic:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:$e([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:$e([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:$e([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:$e([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:$e([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:$e([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:$e([_t.common,_t.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:$e([_t.lights,_t.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ln.physical={uniforms:$e([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Lo={r:0,b:0,g:0},vi=new _n,Qm=new Me;function t0(i,t,e,n,s,o,r){const a=new Ct(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===or)?(u===void 0&&(u=new Xt(new at(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:gs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(x.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(vi)),u.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new ui(2,2),new Nn({name:"BackgroundMaterial",uniforms:gs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(Lo,Fh(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function e0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,L,k,O,X){let Y=!1;const W=h(O,k,L);o!==W&&(o=W,l(o.object)),Y=f(M,O,k,X),Y&&g(M,O,k,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(M,L,k,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,k){const O=k.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let Y=X[L.id];Y===void 0&&(Y={},X[L.id]=Y);let W=Y[O];return W===void 0&&(W=d(c()),Y[O]=W),W}function d(M){const L=[],k=[],O=[];for(let X=0;X<e;X++)L[X]=0,k[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,L,k,O){const X=o.attributes,Y=L.attributes;let W=0;const Q=k.getAttributes();for(const H in Q)if(Q[H].location>=0){const ht=X[H];let ft=Y[H];if(ft===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ht===void 0||ht.attribute!==ft||ft&&ht.data!==ft.data)return!0;W++}return o.attributesNum!==W||o.index!==O}function g(M,L,k,O){const X={},Y=L.attributes;let W=0;const Q=k.getAttributes();for(const H in Q)if(Q[H].location>=0){let ht=Y[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const ft={};ft.attribute=ht,ht&&ht.data&&(ft.data=ht.data),X[H]=ft,W++}o.attributes=X,o.attributesNum=W,o.index=O}function _(){const M=o.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const k=o.newAttributes,O=o.enabledAttributes,X=o.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),X[M]!==L&&(i.vertexAttribDivisor(M,L),X[M]=L)}function S(){const M=o.newAttributes,L=o.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function x(M,L,k,O,X,Y,W){W===!0?i.vertexAttribIPointer(M,L,k,X,Y):i.vertexAttribPointer(M,L,k,O,X,Y)}function v(M,L,k,O){_();const X=O.attributes,Y=k.getAttributes(),W=L.defaultAttributeValues;for(const Q in Y){const H=Y[Q];if(H.location>=0){let nt=X[Q];if(nt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const ht=nt.normalized,ft=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;const $t=Nt.buffer,Z=Nt.type,ut=Nt.bytesPerElement,Tt=Z===i.INT||Z===i.UNSIGNED_INT||nt.gpuType===oc;if(nt.isInterleavedBufferAttribute){const pt=nt.data,zt=pt.stride,Ht=nt.offset;if(pt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)p(H.location+Ot,pt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ot=0;Ot<H.locationSize;Ot++)x(H.location+Ot,ft/H.locationSize,Z,ht,zt*ut,(Ht+ft/H.locationSize*Ot)*ut,Tt)}else{if(nt.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)p(H.location+pt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt,ft/H.locationSize,Z,ht,ft*ut,ft/H.locationSize*pt*ut,Tt)}}else if(W!==void 0){const ht=W[Q];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}S()}function D(){P();for(const M in n){const L=n[M];for(const k in L){const O=L[k];for(const X in O)u(O[X].object),delete O[X];delete L[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const O=L[k];for(const X in O)u(O[X].object),delete O[X];delete L[k]}delete n[M.id]}function C(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const O=k[M.id];for(const X in O)u(O[X].object),delete O[X];delete k[M.id]}}function P(){E(),r=!0,o!==s&&(o=s,l(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function n0(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function i0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:D,maxSamples:R}}function s0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new yi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||o&&!m)o?u(null):l();else{const S=o?0:n,x=S*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let D=0;D!==x;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)r.copy(h[x]).applyMatrix4(S,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function o0(i){let t=new WeakMap;function e(r,a){return a===_a?r.mapping=ds:a===va&&(r.mapping=fs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===_a||a===va)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new gf(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class kh extends zh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,dl=[.125,.215,.35,.446,.526,.582],Ei=20,Fr=new kh,fl=new Ct;let zr=null,Or=0,Br=0,kr=!1;const Mi=(1+Math.sqrt(5))/2,Zi=1/Mi,pl=[new A(-Mi,Zi,0),new A(Mi,Zi,0),new A(-Zi,0,Mi),new A(Zi,0,Mi),new A(0,Mi,-Zi),new A(0,Mi,Zi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr,Or,Br),this._renderer.xr.enabled=kr,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:so,format:Rn,colorSpace:Ms,depthBuffer:!1},s=gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r0(o)),this._blurMaterial=a0(o,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s){const a=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fl),u.toneMapping=ci,u.autoClear=!1;const f=new Se({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Xt(new at,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(fl),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Do(s,S*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Do(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=pl[(s-o-1)%pl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let S=0;for(let C=0;C<Ei;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],D=3*v*(s>x-ns?s-x+ns:0),R=4*(this._cubeSize-v);Do(e,D,R,3*v,2*v),c.setRenderTarget(e),c.render(h,Fr)}}function r0(i){const t=[],e=[],n=[];let s=i;const o=i-ns+1+dl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-ns?c=dl[r-i+ns-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,P=R>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(E,_*g*R),x.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const D=new Ke;D.setAttribute("position",new cn(S,_)),D.setAttribute("uv",new cn(x,m)),D.setAttribute("faceIndex",new cn(v,p)),t.push(D),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gl(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function a0(i,t,e){const n=new Float32Array(Ei),s=new A(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function _l(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_a||c===va,u=c===ds||c===fs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ml(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new ml(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function l0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function h0(i,t,e,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,v=S.length;x<v;x+=3){const D=S[x+0],R=S[x+1],C=S[x+2];d.push(D,R,R,C,C,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const D=x+0,R=x+1,C=x+2;d.push(D,R,R,C,C,D)}}else return;const m=new(Ch(d)?Nh:Uh)(d,1);m.version=_;const p=o.get(h);p&&t.remove(p),o.set(h,m)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function u0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*r,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function d0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function f0(i,t,e){const n=new WeakMap,s=new he;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=a.attributes.position.count*v,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*R*4*h),P=new Lh(C,D,R,h);P.type=Yn,P.needsUpdate=!0;const E=v*4;for(let L=0;L<h;L++){const k=p[L],O=S[L],X=x[L],Y=D*R*4*L;for(let W=0;W<k.count;W++){const Q=W*E;g===!0&&(s.fromBufferAttribute(k,W),C[Y+Q+0]=s.x,C[Y+Q+1]=s.y,C[Y+Q+2]=s.z,C[Y+Q+3]=0),_===!0&&(s.fromBufferAttribute(O,W),C[Y+Q+4]=s.x,C[Y+Q+5]=s.y,C[Y+Q+6]=s.z,C[Y+Q+7]=0),m===!0&&(s.fromBufferAttribute(X,W),C[Y+Q+8]=s.x,C[Y+Q+9]=s.y,C[Y+Q+10]=s.z,C[Y+Q+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new st(D,R)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function p0(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Hh extends je{constructor(t,e,n,s,o,r,a,c,l,u=rs){if(u!==rs&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=Ci),n===void 0&&u===ms&&(n=ps),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gh=new je,xl=new Hh(1,1),Vh=new Lh,Wh=new $d,Xh=new Oh,yl=[],Ml=[],Sl=new Float32Array(16),wl=new Float32Array(9),El=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=yl[s];if(o===void 0&&(o=new Float32Array(s),yl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ar(i,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function m0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function x0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),Oe(e,n)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),Oe(e,n)}}function M0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),Oe(e,n)}}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function P0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=Rh,o=xl):o=Gh,e.setTexture2D(t||o,s)}function L0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wh,s)}function D0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xh,s)}function I0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vh,s)}function U0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return v0;case 35674:return x0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return b0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}function N0(i,t){i.uniform1fv(this.addr,t)}function F0(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function z0(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function O0(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function B0(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function k0(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H0(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function G0(i,t){i.uniform1iv(this.addr,t)}function V0(i,t){i.uniform2iv(this.addr,t)}function W0(i,t){i.uniform3iv(this.addr,t)}function X0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function q0(i,t){i.uniform2uiv(this.addr,t)}function j0(i,t){i.uniform3uiv(this.addr,t)}function Z0(i,t){i.uniform4uiv(this.addr,t)}function K0(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Gh,o[r])}function J0(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Wh,o[r])}function $0(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Xh,o[r])}function Q0(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vh,o[r])}function tg(i){switch(i){case 5126:return N0;case 35664:return F0;case 35665:return z0;case 35666:return O0;case 35674:return B0;case 35675:return k0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return q0;case 36295:return j0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Q0}}class eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tg(e.type)}}class ig{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function bl(i,t){i.seq.push(t),i.map[t.id]=t}function sg(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const o=Hr.exec(n),r=Hr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){bl(e,l===void 0?new eg(a,i,t):new ng(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new ig(a),bl(e,h)),e=h}}}class jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);sg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const og=37297;let rg=0;function ag(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Al=new jt;function cg(i){ne._getMatrix(Al,ne.workingColorSpace,i);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ag(i.getShaderSource(t),r)}else return s}function lg(i,t){const e=cg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hg(i,t){let e;switch(t){case hd:e="Linear";break;case ud:e="Reinhard";break;case dd:e="Cineon";break;case fd:e="ACESFilmic";break;case md:e="AgX";break;case gd:e="Neutral";break;case pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new A;function ug(){ne.getLuminanceCoefficients(Io);const i=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function fg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ks(i){return i!==""}function Cl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(mg,_g)}const gg=new Map;function _g(i,t){let e=Kt[t];if(e===void 0){const n=gg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(vg,xg)}function xg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Dl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:t="ENVMAP_BLENDING_MULTIPLY";break;case cd:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=yg(e),l=Mg(e),u=Sg(e),h=wg(e),d=Eg(e),f=dg(e),g=fg(o),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ci?hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),r=ja(r),r=Cl(r,e),r=Pl(r,e),a=ja(a),a=Cl(a,e),a=Pl(a,e),r=Ll(r),a=Ll(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+r,v=S+p+a,D=Tl(s,s.VERTEX_SHADER,x),R=Tl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(R).trim();let Y=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,R);else{const Q=Rl(s,D,"vertex"),H=Rl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(D),s.deleteShader(R),P=new jo(s,_),E=pg(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,og)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let Tg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rg(t),e.set(t,n)),n}}class Rg{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Cg(i,t,e,n,s,o,r){const a=new Dh,c=new Ag,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,k,O){const X=k.fog,Y=O.geometry,W=E.isMeshStandardMaterial?k.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),H=Q&&Q.mapping===or?Q.image.height:null,nt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=ht!==void 0?ht.length:0;let Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let $t,Z,ut,Tt;if(nt){const ae=Ln[nt];$t=ae.vertexShader,Z=ae.fragmentShader}else $t=E.vertexShader,Z=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),Tt=c.getFragmentShaderID(E);const pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,te=!!E.map,J=!!E.matcap,ct=!!Q,T=!!E.aoMap,gt=!!E.lightMap,tt=!!E.bumpMap,vt=!!E.normalMap,lt=!!E.displacementMap,Pt=!!E.emissiveMap,yt=!!E.metalnessMap,b=!!E.roughnessMap,y=E.anisotropy>0,B=E.clearcoat>0,q=E.dispersion>0,$=E.iridescence>0,K=E.sheen>0,bt=E.transmission>0,mt=y&&!!E.anisotropyMap,Et=B&&!!E.clearcoatMap,Qt=B&&!!E.clearcoatNormalMap,rt=B&&!!E.clearcoatRoughnessMap,At=$&&!!E.iridescenceMap,kt=$&&!!E.iridescenceThicknessMap,Gt=K&&!!E.sheenColorMap,Rt=K&&!!E.sheenRoughnessMap,ee=!!E.specularMap,Zt=!!E.specularColorMap,me=!!E.specularIntensityMap,U=bt&&!!E.transmissionMap,xt=bt&&!!E.thicknessMap,j=!!E.gradientMap,et=!!E.alphaMap,wt=E.alphaTest>0,Mt=!!E.alphaHash,Yt=!!E.extensions;let Ae=ci;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Ve={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:Z,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&O.instanceColor!==null,instancingMorph:Ht&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ms,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:J,envMap:ct,envMapMode:ct&&Q.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:gt,bumpMap:tt,normalMap:vt,displacementMap:d&&lt,emissiveMap:Pt,normalMapObjectSpace:vt&&E.normalMapType===yd,normalMapTangentSpace:vt&&E.normalMapType===dc,metalnessMap:yt,roughnessMap:b,anisotropy:y,anisotropyMap:mt,clearcoat:B,clearcoatMap:Et,clearcoatNormalMap:Qt,clearcoatRoughnessMap:rt,dispersion:q,iridescence:$,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:K,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:ee,specularColorMap:Zt,specularIntensityMap:me,transmission:bt,transmissionMap:U,thicknessMap:xt,gradientMap:j,opaque:E.transparent===!1&&E.blending===os&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:wt,alphaHash:Mt,combine:E.combine,mapUv:te&&_(E.map.channel),aoMapUv:T&&_(E.aoMap.channel),lightMapUv:gt&&_(E.lightMap.channel),bumpMapUv:tt&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:lt&&_(E.displacementMap.channel),emissiveMapUv:Pt&&_(E.emissiveMap.channel),metalnessMapUv:yt&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:mt&&_(E.anisotropyMap.channel),clearcoatMapUv:Et&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(E.sheenRoughnessMap.channel),specularMapUv:ee&&_(E.specularMap.channel),specularColorMapUv:Zt&&_(E.specularColorMap.channel),specularIntensityMapUv:me&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:xt&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(te||et),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Yt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&E.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(M,E),x(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let L;if(M){const k=Ln[M];L=df.clone(k.uniforms)}else L=E.uniforms;return L}function D(E,M){let L;for(let k=0,O=u.length;k<O;k++){const X=u[k];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new bg(i,M,E,o),u.push(L)),L}function R(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:P}}function Pg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ul(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Lg),n.length>1&&n.sort(d||Il),s.length>1&&s.sort(d||Il)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function Dg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ul,i.set(n,[r])):s>=o.length?(r=new Ul,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ig(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ct};break;case"SpotLight":e={position:new A,direction:new A,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ng=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){const t=new Ig,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,o=new Me,r=new Me;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,D=0,R=0,C=0;l.sort(Fg);for(let E=0,M=l.length;E<M;E++){const L=l[E],k=L.color,O=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*O,h+=k.g*O,d+=k.b*O;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],O);C++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,H=e.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=W,f++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(k).multiplyScalar(O),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const Q=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,Q.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(k).multiplyScalar(O),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Q=L.shadow,H=e.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(O),W.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=C,n.version=Ng++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Nl(i){const t=new zg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Og(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Nl(i),t.set(s,[a])):o>=r.length?(a=new Nl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bg extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kg extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vg(i,t,e){let n=new mc;const s=new st,o=new st,r=new he,a=new Bg({depthPacking:xd}),c=new kg,l={},u=e.maxTextureSize,h={[li]:Ge,[Ge]:li,[Tn]:Tn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Hg,fragmentShader:Gg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ai),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==Wn&&this.type===Wn,X=p===Wn&&this.type!==Wn;for(let Y=0,W=R.length;Y<W;Y++){const Q=R[Y],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),o.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/nt.x),s.x=o.x*nt.x,H.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/nt.y),s.y=o.y*nt.y,H.mapSize.y=o.y)),H.map===null||O===!0||X===!0){const ft=this.type!==Wn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,ft),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let ft=0;ft<ht;ft++){const Nt=H.getViewport(ft);r.set(o.x*Nt.x,o.y*Nt.y,o.x*Nt.z,o.y*Nt.w),k.viewport(r),H.updateMatrices(Q,ft),n=H.getFrustum(),v(C,P,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&S(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function S(R,C){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function x(R,C,P,E){let M=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,O=C.uuid;let X=l[k];X===void 0&&(X={},l[k]=X);let Y=X[O];Y===void 0&&(Y=M.clone(),X[O]=Y,C.addEventListener("dispose",D)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=P}return M}function v(R,C,P,E,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=t.update(R),X=R.material;if(Array.isArray(X)){const Y=O.groups;for(let W=0,Q=Y.length;W<Q;W++){const H=Y[W],nt=X[H.materialIndex];if(nt&&nt.visible){const ht=x(R,nt,E,M);R.onBeforeShadow(i,R,C,P,O,ht,H),i.renderBufferDirect(P,null,O,ht,R,H),R.onAfterShadow(i,R,C,P,O,ht,H)}}}else if(X.visible){const Y=x(R,X,E,M);R.onBeforeShadow(i,R,C,P,O,Y,null),i.renderBufferDirect(P,null,O,Y,R,null),R.onAfterShadow(i,R,C,P,O,Y,null)}}const k=R.children;for(let O=0,X=k.length;O<X;O++)v(k[O],C,P,E,M)}function D(R){R.target.removeEventListener("dispose",D);for(const P in l){const E=l[P],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Wg={[ha]:ua,[da]:ma,[fa]:ga,[us]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:us};function Xg(i,t){function e(){let U=!1;const xt=new he;let j=null;const et=new he(0,0,0,0);return{setMask:function(wt){j!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Mt,Yt,Ae,Ve){Ve===!0&&(wt*=Ae,Mt*=Ae,Yt*=Ae),xt.set(wt,Mt,Yt,Ae),et.equals(xt)===!1&&(i.clearColor(wt,Mt,Yt,Ae),et.copy(xt))},reset:function(){U=!1,j=null,et.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,j=null,et=null,wt=null;return{setReversed:function(Mt){if(xt!==Mt){const Yt=t.get("EXT_clip_control");xt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=wt;wt=null,this.setClear(Ae)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Mt){j!==Mt&&!U&&(i.depthMask(Mt),j=Mt)},setFunc:function(Mt){if(xt&&(Mt=Wg[Mt]),et!==Mt){switch(Mt){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){wt!==Mt&&(xt&&(Mt=1-Mt),i.clearDepth(Mt),wt=Mt)},reset:function(){U=!1,j=null,et=null,wt=null,xt=!1}}}function s(){let U=!1,xt=null,j=null,et=null,wt=null,Mt=null,Yt=null,Ae=null,Ve=null;return{setTest:function(ae){U||(ae?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ae){xt!==ae&&!U&&(i.stencilMask(ae),xt=ae)},setFunc:function(ae,xn,zn){(j!==ae||et!==xn||wt!==zn)&&(i.stencilFunc(ae,xn,zn),j=ae,et=xn,wt=zn)},setOp:function(ae,xn,zn){(Mt!==ae||Yt!==xn||Ae!==zn)&&(i.stencilOp(ae,xn,zn),Mt=ae,Yt=xn,Ae=zn)},setLocked:function(ae){U=ae},setClear:function(ae){Ve!==ae&&(i.clearStencil(ae),Ve=ae)},reset:function(){U=!1,xt=null,j=null,et=null,wt=null,Mt=null,Yt=null,Ae=null,Ve=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,D=null,R=null,C=new Ct(0,0,0),P=0,E=!1,M=null,L=null,k=null,O=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Q>=2);let nt=null,ht={};const ft=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),$t=new he().fromArray(ft),Z=new he().fromArray(Nt);function ut(U,xt,j,et){const wt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(U,Mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<j;Yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Mt}const Tt={};Tt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(us),tt(!1),vt(kc),pt(i.CULL_FACE),T(ai);function pt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function zt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ht(U,xt){return h[U]!==xt?(i.bindFramebuffer(U,xt),h[U]=xt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ot(U,xt){let j=f,et=!1;if(U){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const wt=U.textures;if(j.length!==wt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Yt=wt.length;Mt<Yt;Mt++)j[Mt]=i.COLOR_ATTACHMENT0+Mt;j.length=wt.length,et=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,et=!0);et&&i.drawBuffers(j)}function te(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const J={[wi]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};J[qu]=i.MIN,J[ju]=i.MAX;const ct={[Zu]:i.ZERO,[Ku]:i.ONE,[Ju]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[$u]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[od]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function T(U,xt,j,et,wt,Mt,Yt,Ae,Ve,ae){if(U===ai){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(pt(i.BLEND),_=!0),U!==Wu){if(U!==m||ae!==E){if((p!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,v=wi),ae)switch(U){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,D=null,R=null,C.set(0,0,0),P=0,m=U,E=ae}return}wt=wt||xt,Mt=Mt||j,Yt=Yt||et,(xt!==p||wt!==v)&&(i.blendEquationSeparate(J[xt],J[wt]),p=xt,v=wt),(j!==S||et!==x||Mt!==D||Yt!==R)&&(i.blendFuncSeparate(ct[j],ct[et],ct[Mt],ct[Yt]),S=j,x=et,D=Mt,R=Yt),(Ae.equals(C)===!1||Ve!==P)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ve),C.copy(Ae),P=Ve),m=U,E=!1}function gt(U,xt){U.side===Tn?zt(i.CULL_FACE):pt(i.CULL_FACE);let j=U.side===Ge;xt&&(j=!j),tt(j),U.blending===os&&U.transparent===!1?T(ai):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);const et=U.stencilWrite;a.setTest(et),et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function vt(U){U!==Gu?(pt(i.CULL_FACE),U!==L&&(U===kc?i.cullFace(i.BACK):U===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),L=U}function lt(U){U!==k&&(W&&i.lineWidth(U),k=U)}function Pt(U,xt,j){U?(pt(i.POLYGON_OFFSET_FILL),(O!==xt||X!==j)&&(i.polygonOffset(xt,j),O=xt,X=j)):zt(i.POLYGON_OFFSET_FILL)}function yt(U){U?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+Y-1),nt!==U&&(i.activeTexture(U),nt=U)}function y(U,xt,j){j===void 0&&(nt===null?j=i.TEXTURE0+Y-1:j=nt);let et=ht[j];et===void 0&&(et={type:void 0,texture:void 0},ht[j]=et),(et.type!==U||et.texture!==xt)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(U,xt||Tt[U]),et.type=U,et.texture=xt)}function B(){const U=ht[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){$t.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),$t.copy(U))}function Rt(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function ee(U,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let et=j.get(U);et===void 0&&(et=i.getUniformBlockIndex(xt,U.name),j.set(U,et))}function Zt(U,xt){const et=l.get(xt).get(U);c.get(xt)!==et&&(i.uniformBlockBinding(xt,et,U.__bindingPointIndex),c.set(xt,et))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ht={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,D=null,R=null,C=new Ct(0,0,0),P=0,E=!1,M=null,L=null,k=null,O=null,X=null,$t.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:zt,bindFramebuffer:Ht,drawBuffers:Ot,useProgram:te,setBlending:T,setMaterial:gt,setFlipSided:tt,setCullFace:vt,setLineWidth:lt,setPolygonOffset:Pt,setScissorTest:yt,activeTexture:b,bindTexture:y,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:At,texImage3D:kt,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:bt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:Gt,viewport:Rt,reset:me}}function Fl(i,t,e,n){const s=Yg(n);switch(e){case Sh:return i*t;case Eh:return i*t;case bh:return i*t*2;case cc:return i*t/s.components*s.byteLength;case lc:return i*t/s.components*s.byteLength;case Th:return i*t*2/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case wh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case uc:return i*t*4/s.components*s.byteLength;case Vo:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case wa:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Ga:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ah:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(i){switch(i){case Zn:case xh:return{byteLength:1,components:1};case Zs:case yh:case so:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case Ci:case oc:case Yn:return{byteLength:4,components:1};case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):$o("canvas")}function _(b,y,B){let q=1;const $=yt(b);if(($.width>B||$.height>B)&&(q=B/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(q*$.width),bt=Math.floor(q*$.height);h===void 0&&(h=g(K,bt));const mt=y?g(K,bt):h;return mt.width=K,mt.height=bt,mt.getContext("2d").drawImage(b,0,0,K,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+bt+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,y,B,q,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=y;if(y===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),y===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){const bt=$?rr:ne.getTransfer(q);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=bt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(b,y){let B;return b?y===null||y===Ci||y===ps?B=i.DEPTH24_STENCIL8:y===Yn?B=i.DEPTH32F_STENCIL8:y===Zs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===ps?B=i.DEPTH_COMPONENT24:y===Yn?B=i.DEPTH_COMPONENT32F:y===Zs&&(B=i.DEPTH_COMPONENT16),B}function D(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==gn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){const y=b.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&u.delete(y)}function C(b){const y=b.target;y.removeEventListener("dispose",C),M(y)}function P(b){const y=n.get(b);if(y.__webglInit===void 0)return;const B=b.source,q=d.get(B);if(q){const $=q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(b),Object.keys(q).length===0&&d.delete(B)}n.remove(b)}function E(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const B=b.source,q=d.get(B);delete q[y.__cacheKey],r.memory.textures--}function M(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let $=0;$<y.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(y.__webglFramebuffer[q][$]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=b.textures;for(let q=0,$=B.length;q<$;q++){const K=n.get(B[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(B[q])}n.remove(b)}let L=0;function k(){L=0}function O(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function X(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Y(b,y){const B=n.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,b,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function W(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Q(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function H(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ut(B,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const nt={[xa]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},ht={[en]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[fo]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},ft={[Md]:i.NEVER,[Ad]:i.ALWAYS,[Sd]:i.LESS,[Rh]:i.LEQUAL,[wd]:i.EQUAL,[Td]:i.GEQUAL,[Ed]:i.GREATER,[bd]:i.NOTEQUAL};function Nt(b,y){if(y.type===Yn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===gn||y.magFilter===mr||y.magFilter===fo||y.magFilter===Ti||y.minFilter===gn||y.minFilter===mr||y.minFilter===fo||y.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,nt[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,nt[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,nt[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ht[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==fo&&y.minFilter!==Ti||y.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const K=X(y);if(K!==b.__cacheKey){$[K]===void 0&&($[K]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),$[K].usedTimes++;const bt=$[b.__cacheKey];bt!==void 0&&($[b.__cacheKey].usedTimes--,bt.usedTimes===0&&E(y)),b.__cacheKey=K,b.__webglTexture=$[K].texture}return B}function Z(b,y,B){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const $=$t(b,y),K=y.source;e.bindTexture(q,b.__webglTexture,i.TEXTURE0+B);const bt=n.get(K);if(K.version!==bt.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const mt=ne.getPrimaries(ne.workingColorSpace),Et=y.colorSpace===ri?null:ne.getPrimaries(y.colorSpace),Qt=y.colorSpace===ri||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=_(y.image,!1,s.maxTextureSize);rt=Pt(y,rt);const At=o.convert(y.format,y.colorSpace),kt=o.convert(y.type);let Gt=x(y.internalFormat,At,kt,y.colorSpace,y.isVideoTexture);Nt(q,y);let Rt;const ee=y.mipmaps,Zt=y.isVideoTexture!==!0,me=bt.__version===void 0||$===!0,U=K.dataReady,xt=D(y,rt);if(y.isDepthTexture)Gt=v(y.format===ms,y.type),me&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,rt.width,rt.height,0,At,kt,null));else if(y.isDataTexture)if(ee.length>0){Zt&&me&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ee[0].width,ee[0].height);for(let j=0,et=ee.length;j<et;j++)Rt=ee[j],Zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,At,kt,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,At,kt,Rt.data);y.generateMipmaps=!1}else Zt?(me&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,At,kt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,rt.width,rt.height,0,At,kt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,ee[0].width,ee[0].height,rt.depth);for(let j=0,et=ee.length;j<et;j++)if(Rt=ee[j],y.format!==Rn)if(At!==null)if(Zt){if(U)if(y.layerUpdates.size>0){const wt=Fl(Rt.width,Rt.height,y.format,y.type);for(const Mt of y.layerUpdates){const Yt=Rt.data.subarray(Mt*wt/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*wt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Mt,Rt.width,Rt.height,1,At,Yt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,rt.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Rt.width,Rt.height,rt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,rt.depth,At,kt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Rt.width,Rt.height,rt.depth,0,At,kt,Rt.data)}else{Zt&&me&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ee[0].width,ee[0].height);for(let j=0,et=ee.length;j<et;j++)Rt=ee[j],y.format!==Rn?At!==null?Zt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,At,kt,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,At,kt,Rt.data)}else if(y.isDataArrayTexture)if(Zt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,rt.width,rt.height,rt.depth),U)if(y.layerUpdates.size>0){const j=Fl(rt.width,rt.height,y.format,y.type);for(const et of y.layerUpdates){const wt=rt.data.subarray(et*j/rt.data.BYTES_PER_ELEMENT,(et+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,At,kt,wt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,kt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,rt.width,rt.height,rt.depth,0,At,kt,rt.data);else if(y.isData3DTexture)Zt?(me&&e.texStorage3D(i.TEXTURE_3D,xt,Gt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,kt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,rt.width,rt.height,rt.depth,0,At,kt,rt.data);else if(y.isFramebufferTexture){if(me)if(Zt)e.texStorage2D(i.TEXTURE_2D,xt,Gt,rt.width,rt.height);else{let j=rt.width,et=rt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Gt,j,et,0,At,kt,null),j>>=1,et>>=1}}else if(ee.length>0){if(Zt&&me){const j=yt(ee[0]);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}for(let j=0,et=ee.length;j<et;j++)Rt=ee[j],Zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At,kt,Rt):e.texImage2D(i.TEXTURE_2D,j,Gt,At,kt,Rt);y.generateMipmaps=!1}else if(Zt){if(me){const j=yt(rt);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,kt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,At,kt,rt);m(y)&&p(q),bt.__version=K.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ut(b,y,B){if(y.image.length!==6)return;const q=$t(b,y),$=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const K=n.get($);if($.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+B);const bt=ne.getPrimaries(ne.workingColorSpace),mt=y.colorSpace===ri?null:ne.getPrimaries(y.colorSpace),Et=y.colorSpace===ri||bt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Qt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,At=[];for(let et=0;et<6;et++)!Qt&&!rt?At[et]=_(y.image[et],!0,s.maxCubemapSize):At[et]=rt?y.image[et].image:y.image[et],At[et]=Pt(y,At[et]);const kt=At[0],Gt=o.convert(y.format,y.colorSpace),Rt=o.convert(y.type),ee=x(y.internalFormat,Gt,Rt,y.colorSpace),Zt=y.isVideoTexture!==!0,me=K.__version===void 0||q===!0,U=$.dataReady;let xt=D(y,kt);Nt(i.TEXTURE_CUBE_MAP,y);let j;if(Qt){Zt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,kt.width,kt.height);for(let et=0;et<6;et++){j=At[et].mipmaps;for(let wt=0;wt<j.length;wt++){const Mt=j[wt];y.format!==Rn?Gt!==null?Zt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,ee,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,ee,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{if(j=y.mipmaps,Zt&&me){j.length>0&&xt++;const et=yt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,et.width,et.height)}for(let et=0;et<6;et++)if(rt){Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At[et].width,At[et].height,Gt,Rt,At[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,At[et].width,At[et].height,0,Gt,Rt,At[et].data);for(let wt=0;wt<j.length;wt++){const Yt=j[wt].image[et].image;Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Yt.width,Yt.height,Gt,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,ee,Yt.width,Yt.height,0,Gt,Rt,Yt.data)}}else{Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Rt,At[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,Gt,Rt,At[et]);for(let wt=0;wt<j.length;wt++){const Mt=j[wt];Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Gt,Rt,Mt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,ee,Gt,Rt,Mt.image[et])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),K.__version=$.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Tt(b,y,B,q,$,K){const bt=o.convert(B.format,B.colorSpace),mt=o.convert(B.type),Et=x(B.internalFormat,bt,mt,B.colorSpace),Qt=n.get(y),rt=n.get(B);if(rt.__renderTarget=y,!Qt.__hasExternalTextures){const At=Math.max(1,y.width>>K),kt=Math.max(1,y.height>>K);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,K,Et,At,kt,y.depth,0,bt,mt,null):e.texImage2D($,K,Et,At,kt,0,bt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,rt.__webglTexture,0,tt(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const q=y.depthTexture,$=q&&q.isDepthTexture?q.type:null,K=v(y.stencilBuffer,$),bt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=tt(y);vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,K,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{const q=y.textures;for(let $=0;$<q.length;$++){const K=q[$],bt=o.convert(K.format,K.colorSpace),mt=o.convert(K.type),Et=x(K.internalFormat,bt,mt,K.colorSpace),Qt=tt(y);B&&vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Et,y.width,y.height):vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const $=q.__webglTexture,K=tt(y);if(y.depthTexture.format===rs)vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===ms)vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ht(b){const y=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[q],b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,y,B){const q=n.get(b);y!==void 0&&Tt(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ht(b)}function te(b){const y=b.texture,B=n.get(b),q=n.get(y);b.addEventListener("dispose",C);const $=b.textures,K=b.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,r.memory.textures++),K){B.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[mt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)B.__webglFramebuffer[mt][Et]=i.createFramebuffer()}else B.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)B.__webglFramebuffer[mt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(bt)for(let mt=0,Et=$.length;mt<Et;mt++){const Qt=n.get($[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&vt(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let mt=0;mt<$.length;mt++){const Et=$[mt];B.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[mt]);const Qt=o.convert(Et.format,Et.colorSpace),rt=o.convert(Et.type),At=x(Et.internalFormat,Qt,rt,Et.colorSpace,b.isXRRenderTarget===!0),kt=tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,B.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)Tt(B.__webglFramebuffer[mt][Et],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else Tt(B.__webglFramebuffer[mt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let mt=0,Et=$.length;mt<Et;mt++){const Qt=$[mt],rt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Nt(i.TEXTURE_2D,Qt),Tt(B.__webglFramebuffer,b,Qt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,q.__webglTexture),Nt(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)Tt(B.__webglFramebuffer[Et],b,y,i.COLOR_ATTACHMENT0,mt,Et);else Tt(B.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,mt,0);m(y)&&p(mt),e.unbindTexture()}b.depthBuffer&&Ht(b)}function J(b){const y=b.textures;for(let B=0,q=y.length;B<q;B++){const $=y[B];if(m($)){const K=S(b),bt=n.get($).__webglTexture;e.bindTexture(K,bt),p(K),e.unbindTexture()}}}const ct=[],T=[];function gt(b){if(b.samples>0){if(vt(b)===!1){const y=b.textures,B=b.width,q=b.height;let $=i.COLOR_BUFFER_BIT;const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),mt=y.length>1;if(mt)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);const Qt=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,$,i.NEAREST),c===!0&&(ct.length=0,T.length=0,ct.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ct.push(K),T.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);const Qt=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function tt(b){return Math.min(s.maxSamples,b.samples)}function vt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(b){const y=r.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Pt(b,y){const B=b.colorSpace,q=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ms&&B!==ri&&(ne.getTransfer(B)===ue?(q!==Rn||$!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function yt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=vt}function jg(i,t){function e(n,s=ri){let o;const r=ne.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===yh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===so)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===wh)return i.RGB;if(n===Rn)return i.RGBA;if(n===Eh)return i.LUMINANCE;if(n===bh)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Th)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===Vo||n===Wo||n===Xo||n===Yo)if(r===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===wa||n===Ea)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ta||n===Aa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ba||n===Ta)return r===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Aa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===za||n===Oa||n===Ba||n===ka||n===Ha)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ra)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Ga||n===Va)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===qo)return r===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Wa||n===Xa||n===Ya)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===qo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Zg extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kg={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:Jg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t_ extends Ss{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Qg,m=e.getContextAttributes();let p=null,S=null;const x=[],v=[],D=new st;let R=null;const C=new dn;C.viewport=new he;const P=new dn;P.viewport=new he;const E=[C,P],M=new Zg;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ut=x[Z];return ut===void 0&&(ut=new Gr,x[Z]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Z){let ut=x[Z];return ut===void 0&&(ut=new Gr,x[Z]=ut),ut.getGripSpace()},this.getHand=function(Z){let ut=x[Z];return ut===void 0&&(ut=new Gr,x[Z]=ut),ut.getHandSpace()};function O(Z){const ut=v.indexOf(Z.inputSource);if(ut===-1)return;const Tt=x[ut];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,l||r),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<x.length;Z++){const ut=v[Z];ut!==null&&(v[Z]=null,x[Z].disconnect(ut))}L=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,S=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Pi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Tt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?ms:rs,Tt=m.stencil?ps:Ci);const zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Pi(d.textureWidth,d.textureHeight,{format:Rn,type:Zn,depthTexture:new Hh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let ut=0;ut<Z.removed.length;ut++){const Tt=Z.removed[ut],pt=v.indexOf(Tt);pt>=0&&(v[pt]=null,x[pt].disconnect(Tt))}for(let ut=0;ut<Z.added.length;ut++){const Tt=Z.added[ut];let pt=v.indexOf(Tt);if(pt===-1){for(let Ht=0;Ht<x.length;Ht++)if(Ht>=v.length){v.push(Tt),pt=Ht;break}else if(v[Ht]===null){v[Ht]=Tt,pt=Ht;break}if(pt===-1)break}const zt=x[pt];zt&&zt.connect(Tt)}}const W=new A,Q=new A;function H(Z,ut,Tt){W.setFromMatrixPosition(ut.matrixWorld),Q.setFromMatrixPosition(Tt.matrixWorld);const pt=W.distanceTo(Q),zt=ut.projectionMatrix.elements,Ht=Tt.projectionMatrix.elements,Ot=zt[14]/(zt[10]-1),te=zt[14]/(zt[10]+1),J=(zt[9]+1)/zt[5],ct=(zt[9]-1)/zt[5],T=(zt[8]-1)/zt[0],gt=(Ht[8]+1)/Ht[0],tt=Ot*T,vt=Ot*gt,lt=pt/(-T+gt),Pt=lt*-T;if(ut.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pt),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),zt[10]===-1)Z.projectionMatrix.copy(ut.projectionMatrix),Z.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const yt=Ot+lt,b=te+lt,y=tt-Pt,B=vt+(pt-Pt),q=J*te/b*yt,$=ct*te/b*yt;Z.projectionMatrix.makePerspective(y,B,q,$,yt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function nt(Z,ut){ut===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ut.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ut=Z.near,Tt=Z.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),M.near=P.near=C.near=ut,M.far=P.far=C.far=Tt,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const pt=Z.parent,zt=M.cameras;nt(M,pt);for(let Ht=0;Ht<zt.length;Ht++)nt(zt[Ht],pt);zt.length===2?H(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),ht(Z,M,pt)};function ht(Z,ut,Tt){Tt===null?Z.matrix.copy(ut.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ut.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ut.projectionMatrix),Z.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ks*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ft=null;function Nt(Z,ut){if(u=ut.getViewerPose(l||r),g=ut,u!==null){const Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let pt=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let Ht=0;Ht<Tt.length;Ht++){const Ot=Tt[Ht];let te=null;if(f!==null)te=f.getViewport(Ot);else{const ct=h.getViewSubImage(d,Ot);te=ct.viewport,Ht===0&&(t.setRenderTargetTextures(S,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(S))}let J=E[Ht];J===void 0&&(J=new dn,J.layers.enable(Ht),J.viewport=new he,E[Ht]=J),J.matrix.fromArray(Ot.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ot.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),Ht===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(J)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ht=h.getDepthInformation(Tt[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let Tt=0;Tt<x.length;Tt++){const pt=v[Tt],zt=x[Tt];pt!==null&&zt!==void 0&&zt.update(pt,ut,l||r)}ft&&ft(Z,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const $t=new Bh;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(Z){ft=Z},this.dispose=function(){}}}const xi=new _n,e_=new Me;function n_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),h(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,xi.copy(v),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(xi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(S,D);const R=t.render.frame;o[S.id]!==R&&(d(S),o[S.id]=R)}function u(S){const x=h();S.__bindingPointIndex=x;const v=i.createBuffer(),D=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],v=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=v.length;R<C;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,M=P.length;E<M;E++){const L=P[E];if(f(L,R,E,D)===!0){const k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let Y=0;Y<O.length;Y++){const W=O[Y],Q=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,x,v,D){const R=S.value,C=x+"_"+v;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const P=D[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return D[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(S){const x=S.uniforms;let v=0;const D=16;for(let C=0,P=x.length;C<P;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,L=E.length;M<L;M++){const k=E[M],O=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Y=O.length;X<Y;X++){const W=O[X],Q=_(W),H=v%D,nt=H%Q.boundary,ht=H+nt;v+=nt,ht!==0&&D-ht<Q.storage&&(v+=D-ht),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Q.storage}}}const R=v%D;return R>0&&(v+=D-R),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class s_{constructor(t={}){const{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=ci,this.toneMappingExposure=1;const v=this;let D=!1,R=0,C=0,P=null,E=-1,M=null;const L=new he,k=new he;let O=null;const X=new Ct(0);let Y=0,W=e.width,Q=e.height,H=1,nt=null,ht=null;const ft=new he(0,0,W,Q),Nt=new he(0,0,W,Q);let $t=!1;const Z=new mc;let ut=!1,Tt=!1;const pt=new Me,zt=new Me,Ht=new A,Ot=new he,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ct(){return P===null?H:1}let T=n;function gt(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),T===null){const N="webgl2";if(T=gt(N,w),T===null)throw gt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,vt,lt,Pt,yt,b,y,B,q,$,K,bt,mt,Et,Qt,rt,At,kt,Gt,Rt,ee,Zt,me,U;function xt(){tt=new l0(T),tt.init(),Zt=new jg(T,tt),vt=new i0(T,tt,t,Zt),lt=new Xg(T,tt),vt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Pt=new d0(T),yt=new Pg,b=new qg(T,tt,lt,yt,vt,Zt,Pt),y=new o0(v),B=new c0(v),q=new xf(T),me=new e0(T,q),$=new h0(T,q,Pt,me),K=new p0(T,$,q,Pt),Gt=new f0(T,vt,b),rt=new s0(yt),bt=new Cg(v,y,B,tt,vt,me,rt),mt=new n_(v,yt),Et=new Dg,Qt=new Og(tt),kt=new t0(v,y,B,lt,K,f,c),At=new Vg(v,K,vt),U=new i_(T,Pt,vt,lt),Rt=new n0(T,tt,Pt),ee=new u0(T,tt,Pt),Pt.programs=bt.programs,v.capabilities=vt,v.extensions=tt,v.properties=yt,v.renderLists=Et,v.shadowMap=At,v.state=lt,v.info=Pt}xt();const j=new t_(v,T);this.xr=j,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Q,!1))},this.getSize=function(w){return w.set(W,Q)},this.setSize=function(w,N,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Q=N,e.width=Math.floor(w*H),e.height=Math.floor(N*H),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*H,Q*H).floor()},this.setDrawingBufferSize=function(w,N,G){W=w,Q=N,H=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,N,G,V){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,N,G,V),lt.viewport(L.copy(ft).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,N,G,V){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,N,G,V),lt.scissor(k.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(w){lt.setScissorTest($t=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let F=!1;if(P!==null){const dt=P.texture.format;F=dt===uc||dt===hc||dt===lc}if(F){const dt=P.texture.type,St=dt===Zn||dt===Ci||dt===Zs||dt===ps||dt===rc||dt===ac,Lt=kt.getClearColor(),Dt=kt.getClearAlpha(),Wt=Lt.r,qt=Lt.g,It=Lt.b;St?(g[0]=Wt,g[1]=qt,g[2]=It,g[3]=Dt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Wt,_[1]=qt,_[2]=It,_[3]=Dt,T.clearBufferiv(T.COLOR,0,_))}else V|=T.COLOR_BUFFER_BIT}N&&(V|=T.DEPTH_BUFFER_BIT),G&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),Qt.dispose(),yt.dispose(),y.dispose(),B.dispose(),K.dispose(),me.dispose(),U.dispose(),bt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Dc),j.removeEventListener("sessionend",Ic),fi.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Pt.autoReset,N=At.enabled,G=At.autoUpdate,V=At.needsUpdate,F=At.type;xt(),Pt.autoReset=w,At.enabled=N,At.autoUpdate=G,At.needsUpdate=V,At.type=F}function Mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const N=w.target;N.removeEventListener("dispose",Yt),Ae(N)}function Ae(w){Ve(w),yt.remove(w)}function Ve(w){const N=yt.get(w).programs;N!==void 0&&(N.forEach(function(G){bt.releaseProgram(G)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,F,dt){N===null&&(N=te);const St=F.isMesh&&F.matrixWorld.determinant()<0,Lt=zu(w,N,G,V,F);lt.setMaterial(V,St);let Dt=G.index,Wt=1;if(V.wireframe===!0){if(Dt=$.getWireframeAttribute(G),Dt===void 0)return;Wt=2}const qt=G.drawRange,It=G.attributes.position;let ie=qt.start*Wt,ge=(qt.start+qt.count)*Wt;dt!==null&&(ie=Math.max(ie,dt.start*Wt),ge=Math.min(ge,(dt.start+dt.count)*Wt)),Dt!==null?(ie=Math.max(ie,0),ge=Math.min(ge,Dt.count)):It!=null&&(ie=Math.max(ie,0),ge=Math.min(ge,It.count));const ve=ge-ie;if(ve<0||ve===1/0)return;me.setup(F,V,Lt,G,Dt);let nn,se=Rt;if(Dt!==null&&(nn=q.get(Dt),se=ee,se.setIndex(nn)),F.isMesh)V.wireframe===!0?(lt.setLineWidth(V.wireframeLinewidth*ct()),se.setMode(T.LINES)):se.setMode(T.TRIANGLES);else if(F.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),lt.setLineWidth(Ft*ct()),F.isLineSegments?se.setMode(T.LINES):F.isLineLoop?se.setMode(T.LINE_LOOP):se.setMode(T.LINE_STRIP)}else F.isPoints?se.setMode(T.POINTS):F.isSprite&&se.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,On=F._multiDrawCounts,oe=F._multiDrawCount,yn=Dt?q.get(Dt).bytesPerElement:1,Ni=yt.get(V).currentProgram.getUniforms();for(let ln=0;ln<oe;ln++)Ni.setValue(T,"_gl_DrawID",ln),se.render(Ft[ln]/yn,On[ln])}else if(F.isInstancedMesh)se.renderInstances(ie,ve,F.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,On=Math.min(G.instanceCount,Ft);se.renderInstances(ie,ve,On)}else se.render(ie,ve)};function ae(w,N,G){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,uo(w,N,G),w.side=li,w.needsUpdate=!0,uo(w,N,G),w.side=Tn):uo(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),p=Qt.get(G),p.init(N),x.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const dt=F.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Lt=dt[St];ae(Lt,G,F),V.add(Lt)}else ae(dt,G,F),V.add(dt)}),x.pop(),p=null,V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(F=>{function dt(){if(V.forEach(function(St){yt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){F(w);return}setTimeout(dt,10)}tt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let xn=null;function zn(w){xn&&xn(w)}function Dc(){fi.stop()}function Ic(){fi.start()}const fi=new Bh;fi.setAnimationLoop(zn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(w){xn=w,j.setAnimationLoop(w),w===null?fi.stop():fi.start()},j.addEventListener("sessionstart",Dc),j.addEventListener("sessionend",Ic),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,P),p=Qt.get(w,x.length),p.init(N),x.push(p),zt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(zt),Tt=this.localClippingEnabled,ut=rt.init(this.clippingPlanes,Tt),m=Et.get(w,S.length),m.init(),S.push(m),j.enabled===!0&&j.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&pr(dt,N,-1/0,v.sortObjects)}pr(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,ht),J=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,J&&kt.addToRenderList(m,w),this.info.render.frame++,ut===!0&&rt.beginShadows();const G=p.state.shadowsArray;At.render(G,w,N),ut===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const dt=N.cameras;if(F.length>0)for(let St=0,Lt=dt.length;St<Lt;St++){const Dt=dt[St];Nc(V,F,w,Dt)}J&&kt.render(w);for(let St=0,Lt=dt.length;St<Lt;St++){const Dt=dt[St];Uc(m,w,Dt,Dt.viewport)}}else F.length>0&&Nc(V,F,w,N),J&&kt.render(w),Uc(m,w,N);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,N),me.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ut===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function pr(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){V&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(zt);const St=K.update(w),Lt=w.material;Lt.visible&&m.push(w,St,Lt,G,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const St=K.update(w),Lt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ot.copy(St.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(zt)),Array.isArray(Lt)){const Dt=St.groups;for(let Wt=0,qt=Dt.length;Wt<qt;Wt++){const It=Dt[Wt],ie=Lt[It.materialIndex];ie&&ie.visible&&m.push(w,St,ie,G,Ot.z,It)}}else Lt.visible&&m.push(w,St,Lt,G,Ot.z,null)}}const dt=w.children;for(let St=0,Lt=dt.length;St<Lt;St++)pr(dt[St],N,G,V)}function Uc(w,N,G,V){const F=w.opaque,dt=w.transmissive,St=w.transparent;p.setupLightsView(G),ut===!0&&rt.setGlobalState(v.clippingPlanes,G),V&&lt.viewport(L.copy(V)),F.length>0&&ho(F,N,G),dt.length>0&&ho(dt,N,G),St.length>0&&ho(St,N,G),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Nc(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Pi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?so:Zn,minFilter:Ti,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const dt=p.state.transmissionRenderTarget[V.id],St=V.viewport||L;dt.setSize(St.z,St.w);const Lt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),J&&kt.render(G);const Dt=v.toneMapping;v.toneMapping=ci;const Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ut===!0&&rt.setGlobalState(v.clippingPlanes,V),ho(w,G,V),b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,ie=N.length;It<ie;It++){const ge=N[It],ve=ge.object,nn=ge.geometry,se=ge.material,Ft=ge.group;if(se.side===Tn&&ve.layers.test(V.layers)){const On=se.side;se.side=Ge,se.needsUpdate=!0,Fc(ve,G,V,nn,se,Ft),se.side=On,se.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt))}v.setRenderTarget(Lt),v.setClearColor(X,Y),Wt!==void 0&&(V.viewport=Wt),v.toneMapping=Dt}function ho(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,dt=w.length;F<dt;F++){const St=w[F],Lt=St.object,Dt=St.geometry,Wt=V===null?St.material:V,qt=St.group;Lt.layers.test(G.layers)&&Fc(Lt,N,G,Dt,Wt,qt)}}function Fc(w,N,G,V,F,dt){w.onBeforeRender(v,N,G,V,F,dt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,N,G,V,w,dt),F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,w,dt),F.side=li,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,w,dt),F.side=Tn):v.renderBufferDirect(G,N,V,F,w,dt),w.onAfterRender(v,N,G,V,F,dt)}function uo(w,N,G){N.isScene!==!0&&(N=te);const V=yt.get(w),F=p.state.lights,dt=p.state.shadowsArray,St=F.state.version,Lt=bt.getParameters(w,F.state,dt,N,G),Dt=bt.getProgramCacheKey(Lt);let Wt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?B:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Yt),Wt=new Map,V.programs=Wt);let qt=Wt.get(Dt);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===St)return Oc(w,Lt),qt}else Lt.uniforms=bt.getUniforms(w),w.onBeforeCompile(Lt,v),qt=bt.acquireProgram(Lt,Dt),Wt.set(Dt,qt),V.uniforms=Lt.uniforms;const It=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=rt.uniform),Oc(w,Lt),V.needsLights=Bu(w),V.lightsStateVersion=St,V.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=qt,V.uniformsList=null,qt}function zc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=jo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Oc(w,N){const G=yt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function zu(w,N,G,V,F){N.isScene!==!0&&(N=te),b.resetTextureUnits();const dt=N.fog,St=V.isMeshStandardMaterial?N.environment:null,Lt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,Dt=(V.isMeshStandardMaterial?B:y).get(V.envMap||St),Wt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color;let ve=ci;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=v.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=nn!==void 0?nn.length:0,Ft=yt.get(V),On=p.state.lights;if(ut===!0&&(Tt===!0||w!==M)){const fn=w===M&&V.id===E;rt.setState(V,w,fn)}let oe=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==On.state.version||Ft.outputColorSpace!==Lt||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Dt||V.fog===!0&&Ft.fog!==dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==rt.numPlanes||Ft.numIntersection!==rt.numIntersection)||Ft.vertexAlphas!==Wt||Ft.vertexTangents!==qt||Ft.morphTargets!==It||Ft.morphNormals!==ie||Ft.morphColors!==ge||Ft.toneMapping!==ve||Ft.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Ft.__version=V.version);let yn=Ft.currentProgram;oe===!0&&(yn=uo(V,N,F));let Ni=!1,ln=!1,Ts=!1;const xe=yn.getUniforms(),Cn=Ft.uniforms;if(lt.useProgram(yn.program)&&(Ni=!0,ln=!0,Ts=!0),V.id!==E&&(E=V.id,ln=!0),Ni||M!==w){lt.buffers.depth.getReversed()?(pt.copy(w.projectionMatrix),Yd(pt),qd(pt),xe.setValue(T,"projectionMatrix",pt)):xe.setValue(T,"projectionMatrix",w.projectionMatrix),xe.setValue(T,"viewMatrix",w.matrixWorldInverse);const Jn=xe.map.cameraPosition;Jn!==void 0&&Jn.setValue(T,Ht.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&xe.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ln=!0,Ts=!0)}if(F.isSkinnedMesh){xe.setOptional(T,F,"bindMatrix"),xe.setOptional(T,F,"bindMatrixInverse");const fn=F.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xe.setValue(T,"boneTexture",fn.boneTexture,b))}F.isBatchedMesh&&(xe.setOptional(T,F,"batchingTexture"),xe.setValue(T,"batchingTexture",F._matricesTexture,b),xe.setOptional(T,F,"batchingIdTexture"),xe.setValue(T,"batchingIdTexture",F._indirectTexture,b),xe.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&xe.setValue(T,"batchingColorTexture",F._colorsTexture,b));const As=G.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Gt.update(F,G,yn),(ln||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,xe.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=Dt,Cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),ln&&(xe.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Ou(Cn,Ts),dt&&V.fog===!0&&mt.refreshFogUniforms(Cn,dt),mt.refreshMaterialUniforms(Cn,V,H,Q,p.state.transmissionRenderTarget[w.id]),jo.upload(T,zc(Ft),Cn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jo.upload(T,zc(Ft),Cn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(T,"center",F.center),xe.setValue(T,"modelViewMatrix",F.modelViewMatrix),xe.setValue(T,"normalMatrix",F.normalMatrix),xe.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const fn=V.uniformsGroups;for(let Jn=0,$n=fn.length;Jn<$n;Jn++){const Bc=fn[Jn];U.update(Bc,yn),U.bind(Bc,yn)}}return yn}function Ou(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Bu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,G){yt.get(w.texture).__webglTexture=N,yt.get(w.depthTexture).__webglTexture=G;const V=yt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=yt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){P=w,R=N,C=G;let V=!0,F=null,dt=!1,St=!1;if(w){const Dt=yt.get(w);if(Dt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Dt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Dt.__hasExternalTextures)b.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const It=w.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&yt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);const qt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][G]:F=qt[N],dt=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?F=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[G]:F=qt,L.copy(w.viewport),k.copy(w.scissor),O=w.scissorTest}else L.copy(ft).multiplyScalar(H).floor(),k.copy(Nt).multiplyScalar(H).floor(),O=$t;if(lt.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&lt.drawBuffers(w,F),lt.viewport(L),lt.scissor(k),lt.setScissorTest(O),dt){const Dt=yt.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,G)}else if(St){const Dt=yt.get(w.texture),Wt=N||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,Wt)}E=-1},this.readRenderTargetPixels=function(w,N,G,V,F,dt,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){lt.bindFramebuffer(T.FRAMEBUFFER,Lt);try{const Dt=w.texture,Wt=Dt.format,qt=Dt.type;if(!vt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F&&T.readPixels(N,G,V,F,Zt.convert(Wt),Zt.convert(qt),dt)}finally{const Dt=P!==null?yt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,F,dt,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){const Dt=w.texture,Wt=Dt.format,qt=Dt.type;if(!vt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F){lt.bindFramebuffer(T.FRAMEBUFFER,Lt);const It=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,It),T.bufferData(T.PIXEL_PACK_BUFFER,dt.byteLength,T.STREAM_READ),T.readPixels(N,G,V,F,Zt.convert(Wt),Zt.convert(qt),0);const ie=P!==null?yt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,ie);const ge=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Xd(T,ge,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,It),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,dt),T.deleteBuffer(It),T.deleteSync(ge),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(w.image.width*V),dt=Math.floor(w.image.height*V),St=N!==null?N.x:0,Lt=N!==null?N.y:0;b.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,G,0,0,St,Lt,F,dt),lt.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,F=0){w.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let dt,St,Lt,Dt,Wt,qt,It,ie,ge;const ve=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(dt=G.max.x-G.min.x,St=G.max.y-G.min.y,Lt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Wt=G.min.y,qt=G.isBox3?G.min.z:0):(dt=ve.width,St=ve.height,Lt=ve.depth||1,Dt=0,Wt=0,qt=0),V!==null?(It=V.x,ie=V.y,ge=V.z):(It=0,ie=0,ge=0);const nn=Zt.convert(N.format),se=Zt.convert(N.type);let Ft;N.isData3DTexture?(b.setTexture3D(N,0),Ft=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Ft=T.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Ft=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const On=T.getParameter(T.UNPACK_ROW_LENGTH),oe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),yn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ni=T.getParameter(T.UNPACK_SKIP_ROWS),ln=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ve.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ve.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qt);const Ts=w.isDataArrayTexture||w.isData3DTexture,xe=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Cn=yt.get(w),As=yt.get(N),fn=yt.get(Cn.__renderTarget),Jn=yt.get(As.__renderTarget);lt.bindFramebuffer(T.READ_FRAMEBUFFER,fn.__webglFramebuffer),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let $n=0;$n<Lt;$n++)Ts&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,F,qt+$n),w.isDepthTexture?(xe&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,F,ge+$n),T.blitFramebuffer(Dt,Wt,dt,St,It,ie,dt,St,T.DEPTH_BUFFER_BIT,T.NEAREST)):xe?T.copyTexSubImage3D(Ft,F,It,ie,ge+$n,Dt,Wt,dt,St):T.copyTexSubImage2D(Ft,F,It,ie,ge+$n,Dt,Wt,dt,St);lt.bindFramebuffer(T.READ_FRAMEBUFFER,null),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else xe?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Ft,F,It,ie,ge,dt,St,Lt,nn,se,ve.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(Ft,F,It,ie,ge,dt,St,Lt,nn,ve.data):T.texSubImage3D(Ft,F,It,ie,ge,dt,St,Lt,nn,se,ve):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,It,ie,dt,St,nn,se,ve.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,It,ie,ve.width,ve.height,nn,ve.data):T.texSubImage2D(T.TEXTURE_2D,F,It,ie,dt,St,nn,se,ve);T.pixelStorei(T.UNPACK_ROW_LENGTH,On),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,oe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,yn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ni),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ln),F===0&&N.generateMipmaps&&T.generateMipmap(Ft),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,F=0){return w.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,F)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,lt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class _c{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class o_ extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class r_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new A;class Qo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),o=le(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yh extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Ds=new A,Ji=new A,$i=new A,Qi=new st,Is=new st,qh=new Me,Uo=new A,Us=new A,No=new A,zl=new st,Vr=new st,Ol=new st;class a_ extends He{constructor(t=new Yh){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new r_(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Qo(n,3,0,!1)),Ki.setAttribute("uv",new Qo(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-$i.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Fo(Uo.set(-.5,-.5,0),$i,r,Ji,s,o),Fo(Us.set(.5,-.5,0),$i,r,Ji,s,o),Fo(No.set(.5,.5,0),$i,r,Ji,s,o),zl.set(0,0),Vr.set(1,0),Ol.set(1,1);let a=t.ray.intersectTriangle(Uo,Us,No,!1,Ds);if(a===null&&(Fo(Us.set(-.5,.5,0),$i,r,Ji,s,o),Vr.set(0,1),a=t.ray.intersectTriangle(Uo,No,Us,!1,Ds),a===null))return;const c=t.ray.origin.distanceTo(Ds);c<t.near||c>t.far||e.push({distance:c,point:Ds.clone(),uv:mn.getInterpolation(Ds,Uo,Us,No,zl,Vr,Ol,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fo(i,t,e,n,s,o){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Is.x=o*Qi.x-s*Qi.y,Is.y=s*Qi.x+o*Qi.y):Is.copy(Qi),i.copy(t),i.x+=Is.x,i.y+=Is.y,i.applyMatrix4(qh)}class jh extends je{constructor(t=null,e=1,n=1,s,o,r,a,c,l=en,u=en,h,d){super(null,r,a,c,l,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zh extends je{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new st:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],o=[],r=[],a=new A,c=new Me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}o[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(ke(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vc extends Fn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class c_ extends vc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function xc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,f*=u,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const zo=new A,Wr=new xc,Xr=new xc,Yr=new xc;class l_ extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(zo.subVectors(s[0],s[1]).add(s[0]),l=zo);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(zo.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wr.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Xr.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Yr.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Xr.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Yr.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Wr.calc(c),Xr.calc(c),Yr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bl(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function h_(i,t){const e=1-i;return e*e*t}function u_(i,t){return 2*(1-i)*i*t}function d_(i,t){return i*i*t}function Ws(i,t,e,n){return h_(i,t)+u_(i,e)+d_(i,n)}function f_(i,t){const e=1-i;return e*e*e*t}function p_(i,t){const e=1-i;return 3*e*e*i*t}function m_(i,t){return 3*(1-i)*i*i*t}function g_(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return f_(i,t)+p_(i,e)+m_(i,n)+g_(i,s)}class Kh extends Fn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,s.x,o.x,r.x,a.x),Xs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class __ extends Fn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,s.x,o.x,r.x,a.x),Xs(t,s.y,o.y,r.y,a.y),Xs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jh extends Fn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v_ extends Fn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Fn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ws(t,s.x,o.x,r.x),Ws(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x_ extends Fn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ws(t,s.x,o.x,r.x),Ws(t,s.y,o.y,r.y),Ws(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Bl(a,c.x,l.x,u.x,h.x),Bl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:l_,CubicBezierCurve:Kh,CubicBezierCurve3:__,EllipseCurve:vc,LineCurve:Jh,LineCurve3:v_,QuadraticBezierCurve:$h,QuadraticBezierCurve3:x_,SplineCurve:Qh});class y_ extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class Ka extends y_{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new $h(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Kh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new vc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yc extends Ke{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],u=1/e,h=new A,d=new st,f=new A,g=new A,_=new A;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const x=n+S*u*s,v=Math.sin(x),D=Math.cos(x);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*v,h.y=t[R].y,h.z=t[R].x*D,r.push(h.x,h.y,h.z),d.x=S/e,d.y=R/(t.length-1),a.push(d.x,d.y);const C=c[3*R+0]*v,P=c[3*R+1],E=c[3*R+0]*D;l.push(C,P,E)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const v=x+S*t.length,D=v,R=v+t.length,C=v+t.length+1,P=v+1;o.push(D,R,P),o.push(C,P,R)}this.setIndex(o),this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.points,t.segments,t.phiStart,t.phiLength)}}class qe extends yc{constructor(t=1,e=1,n=4,s=8){const o=new Ka;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new qe(t.radius,t.length,t.capSegments,t.radialSegments)}}class Mc extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new A,u=new st;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jt extends Ke{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function S(){const v=new A,D=new A;let R=0;const C=(e-t)/n;for(let P=0;P<=o;P++){const E=[],M=P/o,L=M*(e-t)+t;for(let k=0;k<=s;k++){const O=k/s,X=O*c+a,Y=Math.sin(X),W=Math.cos(X);D.x=L*Y,D.y=-M*n+m,D.z=L*W,h.push(D.x,D.y,D.z),v.set(Y,C,W).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-M),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<o;E++){const M=_[E][P],L=_[E+1][P],k=_[E+1][P+1],O=_[E][P+1];(t>0||E!==0)&&(u.push(M,L,O),R+=3),(e>0||E!==o-1)&&(u.push(L,k,O),R+=3)}l.addGroup(p,R,0),p+=R}function x(v){const D=g,R=new st,C=new A;let P=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const X=k/s*c+a,Y=Math.cos(X),W=Math.sin(X);C.x=E*W,C.y=m*M,C.z=E*Y,h.push(C.x,C.y,C.z),d.push(0,M,0),R.x=Y*.5+.5,R.y=W*.5*M+.5,f.push(R.x,R.y),g++}for(let k=0;k<s;k++){const O=D+k,X=L+k;v===!0?u.push(X,X+1,O):u.push(X+1,X,O),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ue extends Jt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ue(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ao extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),u(),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(o.slice(),3)),this.setAttribute("uv",new pe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new A,v=new A,D=new A;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],v),f(e[R+2],D),c(x,v,D,S)}function c(S,x,v,D){const R=D+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const E=S.clone().lerp(v,P/R),M=x.clone().lerp(v,P/R),L=R-P;for(let k=0;k<=L;k++)k===0&&P===R?C[P][k]=E:C[P][k]=E.clone().lerp(M,k/L)}for(let P=0;P<R;P++)for(let E=0;E<2*(R-P)-1;E++){const M=Math.floor(E/2);E%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(S){const x=new A;for(let v=0;v<o.length;v+=3)x.x=o[v+0],x.y=o[v+1],x.z=o[v+2],x.normalize().multiplyScalar(S),o[v+0]=x.x,o[v+1]=x.y,o[v+2]=x.z}function u(){const S=new A;for(let x=0;x<o.length;x+=3){S.x=o[x+0],S.y=o[x+1],S.z=o[x+2];const v=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;r.push(v,1-D)}g(),h()}function h(){for(let S=0;S<r.length;S+=6){const x=r[S+0],v=r[S+2],D=r[S+4],R=Math.max(x,v,D),C=Math.min(x,v,D);R>.9&&C<.1&&(x<.2&&(r[S+0]+=1),v<.2&&(r[S+2]+=1),D<.2&&(r[S+4]+=1))}}function d(S){o.push(S.x,S.y,S.z)}function f(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const S=new A,x=new A,v=new A,D=new A,R=new st,C=new st,P=new st;for(let E=0,M=0;E<o.length;E+=9,M+=6){S.set(o[E+0],o[E+1],o[E+2]),x.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),R.set(r[M+0],r[M+1]),C.set(r[M+2],r[M+3]),P.set(r[M+4],r[M+5]),D.copy(S).add(x).add(v).divideScalar(3);const L=m(D);_(R,M+0,S,L),_(C,M+2,x,L),_(P,M+4,v,L)}}function _(S,x,v,D){D<0&&S.x===1&&(r[x]=S.x-1),v.x===0&&v.z===0&&(r[x]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.vertices,t.indices,t.radius,t.details)}}class cr extends ao{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cr(t.radius,t.detail)}}class tu extends Ka{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ka().fromJSON(s))}return this}}const M_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=eu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,f;if(n&&(o=T_(i,t,o,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Js(o,r,e,a,c,f,0),r}};function eu(i,t,e,n,s){let o,r;if(s===z_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=kl(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=kl(o,i[o],i[o+1],r);return r&&lr(r,r.next)&&(Qs(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(lr(e,e.next)||Te(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,o,r){if(!i)return;!r&&o&&L_(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?w_(i,n,s,o):S_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Qs(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=E_(Li(i),t,e),Js(i,t,e,n,s,o,2)):r===2&&b_(i,t,e,n,s,o):Js(Li(i),t,e,n,s,o,1);break}}}function S_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&is(s,a,o,c,r,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Te(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Ja(f,g,t,e,n),S=Ja(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&is(a,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&is(a,u,c,h,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&is(a,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&is(a,u,c,h,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function E_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!lr(s,o)&&nu(s,n,n.next,o)&&$s(s,o)&&$s(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Qs(n),Qs(n.next),n=i=o),n=n.next}while(n!==i);return Li(n)}function b_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&U_(r,a)){let c=iu(r,a);r=Li(r,r.next),c=Li(c,c.next),Js(r,t,e,n,s,o,0),Js(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function T_(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=eu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(I_(l));for(s.sort(A_),o=0;o<s.length;o++)e=R_(s[o],e);return e}function A_(i,t){return i.x-t.x}function R_(i,t){const e=C_(i,t);if(!e)return t;const n=iu(e,i);return Li(n,n.next),Li(e,e.next)}function C_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&is(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),$s(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&P_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function P_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function L_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ja(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,D_(s)}function D_(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Ja(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function I_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function U_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!N_(i,t)&&($s(i,t)&&$s(t,i)&&F_(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||lr(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function lr(i,t){return i.x===t.x&&i.y===t.y}function nu(i,t,e,n){const s=Bo(Te(i,t,e)),o=Bo(Te(i,t,n)),r=Bo(Te(e,n,i)),a=Bo(Te(e,n,t));return!!(s!==o&&r!==a||s===0&&Oo(i,e,t)||o===0&&Oo(i,n,t)||r===0&&Oo(e,i,n)||a===0&&Oo(e,t,n))}function Oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bo(i){return i>0?1:i<0?-1:0}function N_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function F_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function iu(i,t){const e=new $a(i.i,i.x,i.y),n=new $a(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function kl(i,t,e,n){const s=new $a(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $a(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Ys{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ys.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Hl(t),Gl(n,t);let r=t.length;e.forEach(Hl);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Gl(n,e[c]);const a=M_.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Hl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Sc extends Ke{constructor(t=new tu([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:O_;let x,v=!1,D,R,C,P;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,D=p.computeFrenetFrames(u,!1),R=new A,C=new A,P=new A),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let M=E.shape;const L=E.holes;if(!Ys.isClockWise(M)){M=M.reverse();for(let J=0,ct=L.length;J<ct;J++){const T=L[J];Ys.isClockWise(T)&&(L[J]=T.reverse())}}const O=Ys.triangulateShape(M,L),X=M;for(let J=0,ct=L.length;J<ct;J++){const T=L[J];M=M.concat(T)}function Y(J,ct,T){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ct,T)}const W=M.length,Q=O.length;function H(J,ct,T){let gt,tt,vt;const lt=J.x-ct.x,Pt=J.y-ct.y,yt=T.x-J.x,b=T.y-J.y,y=lt*lt+Pt*Pt,B=lt*b-Pt*yt;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(y),$=Math.sqrt(yt*yt+b*b),K=ct.x-Pt/q,bt=ct.y+lt/q,mt=T.x-b/$,Et=T.y+yt/$,Qt=((mt-K)*b-(Et-bt)*yt)/(lt*b-Pt*yt);gt=K+lt*Qt-J.x,tt=bt+Pt*Qt-J.y;const rt=gt*gt+tt*tt;if(rt<=2)return new st(gt,tt);vt=Math.sqrt(rt/2)}else{let q=!1;lt>Number.EPSILON?yt>Number.EPSILON&&(q=!0):lt<-Number.EPSILON?yt<-Number.EPSILON&&(q=!0):Math.sign(Pt)===Math.sign(b)&&(q=!0),q?(gt=-Pt,tt=lt,vt=Math.sqrt(y)):(gt=lt,tt=Pt,vt=Math.sqrt(y/2))}return new st(gt/vt,tt/vt)}const nt=[];for(let J=0,ct=X.length,T=ct-1,gt=J+1;J<ct;J++,T++,gt++)T===ct&&(T=0),gt===ct&&(gt=0),nt[J]=H(X[J],X[T],X[gt]);const ht=[];let ft,Nt=nt.concat();for(let J=0,ct=L.length;J<ct;J++){const T=L[J];ft=[];for(let gt=0,tt=T.length,vt=tt-1,lt=gt+1;gt<tt;gt++,vt++,lt++)vt===tt&&(vt=0),lt===tt&&(lt=0),ft[gt]=H(T[gt],T[vt],T[lt]);ht.push(ft),Nt=Nt.concat(ft)}for(let J=0;J<m;J++){const ct=J/m,T=f*Math.cos(ct*Math.PI/2),gt=g*Math.sin(ct*Math.PI/2)+_;for(let tt=0,vt=X.length;tt<vt;tt++){const lt=Y(X[tt],nt[tt],gt);pt(lt.x,lt.y,-T)}for(let tt=0,vt=L.length;tt<vt;tt++){const lt=L[tt];ft=ht[tt];for(let Pt=0,yt=lt.length;Pt<yt;Pt++){const b=Y(lt[Pt],ft[Pt],gt);pt(b.x,b.y,-T)}}}const $t=g+_;for(let J=0;J<W;J++){const ct=d?Y(M[J],Nt[J],$t):M[J];v?(C.copy(D.normals[0]).multiplyScalar(ct.x),R.copy(D.binormals[0]).multiplyScalar(ct.y),P.copy(x[0]).add(C).add(R),pt(P.x,P.y,P.z)):pt(ct.x,ct.y,0)}for(let J=1;J<=u;J++)for(let ct=0;ct<W;ct++){const T=d?Y(M[ct],Nt[ct],$t):M[ct];v?(C.copy(D.normals[J]).multiplyScalar(T.x),R.copy(D.binormals[J]).multiplyScalar(T.y),P.copy(x[J]).add(C).add(R),pt(P.x,P.y,P.z)):pt(T.x,T.y,h/u*J)}for(let J=m-1;J>=0;J--){const ct=J/m,T=f*Math.cos(ct*Math.PI/2),gt=g*Math.sin(ct*Math.PI/2)+_;for(let tt=0,vt=X.length;tt<vt;tt++){const lt=Y(X[tt],nt[tt],gt);pt(lt.x,lt.y,h+T)}for(let tt=0,vt=L.length;tt<vt;tt++){const lt=L[tt];ft=ht[tt];for(let Pt=0,yt=lt.length;Pt<yt;Pt++){const b=Y(lt[Pt],ft[Pt],gt);v?pt(b.x,b.y+x[u-1].y,x[u-1].x+T):pt(b.x,b.y,h+T)}}}Z(),ut();function Z(){const J=s.length/3;if(d){let ct=0,T=W*ct;for(let gt=0;gt<Q;gt++){const tt=O[gt];zt(tt[2]+T,tt[1]+T,tt[0]+T)}ct=u+m*2,T=W*ct;for(let gt=0;gt<Q;gt++){const tt=O[gt];zt(tt[0]+T,tt[1]+T,tt[2]+T)}}else{for(let ct=0;ct<Q;ct++){const T=O[ct];zt(T[2],T[1],T[0])}for(let ct=0;ct<Q;ct++){const T=O[ct];zt(T[0]+W*u,T[1]+W*u,T[2]+W*u)}}n.addGroup(J,s.length/3-J,0)}function ut(){const J=s.length/3;let ct=0;Tt(X,ct),ct+=X.length;for(let T=0,gt=L.length;T<gt;T++){const tt=L[T];Tt(tt,ct),ct+=tt.length}n.addGroup(J,s.length/3-J,1)}function Tt(J,ct){let T=J.length;for(;--T>=0;){const gt=T;let tt=T-1;tt<0&&(tt=J.length-1);for(let vt=0,lt=u+m*2;vt<lt;vt++){const Pt=W*vt,yt=W*(vt+1),b=ct+gt+Pt,y=ct+tt+Pt,B=ct+tt+yt,q=ct+gt+yt;Ht(b,y,B,q)}}}function pt(J,ct,T){c.push(J),c.push(ct),c.push(T)}function zt(J,ct,T){Ot(J),Ot(ct),Ot(T);const gt=s.length/3,tt=S.generateTopUV(n,s,gt-3,gt-2,gt-1);te(tt[0]),te(tt[1]),te(tt[2])}function Ht(J,ct,T,gt){Ot(J),Ot(ct),Ot(gt),Ot(ct),Ot(T),Ot(gt);const tt=s.length/3,vt=S.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);te(vt[0]),te(vt[1]),te(vt[3]),te(vt[1]),te(vt[2]),te(vt[3])}function Ot(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function te(J){o.push(J.x),o.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new Sc(n,t.options)}}const O_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new st(o,r),new st(a,c),new st(l,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new st(r,1-c),new st(l,1-h),new st(d,1-g),new st(_,1-p)]:[new st(a,1-c),new st(u,1-h),new st(f,1-g),new st(m,1-p)]}};function B_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Es extends ao{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class Kn extends ao{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kn(t.radius,t.detail)}}class be extends Ke{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const R=D/e;h.x=-t*Math.cos(s+R*o)*Math.sin(r+x*a),h.y=t*Math.cos(r+x*a),h.z=t*Math.sin(s+R*o)*Math.sin(r+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-x),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const x=u[p][S+1],v=u[p][S],D=u[p+1][S],R=u[p+1][S+1];(p!==0||r>0)&&f.push(x,v,R),(p!==n-1||c<Math.PI)&&f.push(v,D,R)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ui extends Ke{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*o,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;r.push(_,m,S),r.push(m,p,S)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class k_ extends Ii{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class su extends Ii{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class wc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class H_ extends wc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new Me,Vl=new A,Wl=new A;class ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xl=new Me,Ns=new A,jr=new A;class G_ extends ou{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),jr.copy(n.position),jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jr),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl)}}class hr extends wc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new G_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class V_ extends ou{constructor(){super(new kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W_ extends wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new V_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class X_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);class Y_{constructor(t){I(this,"keys",new Set);I(this,"pressed",new Set);I(this,"dragDX",0);I(this,"dragDY",0);I(this,"wheel",0);I(this,"clicked",!1);I(this,"dragging",!1);I(this,"dragTravel",0);I(this,"downAt",0);window.addEventListener("keydown",e=>{if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.metaKey){this.keys.clear();return}this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>{e.key==="Meta"?this.keys.clear():this.keys.delete(e.code)}),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("visibilitychange",()=>this.keys.clear()),t.addEventListener("pointerdown",e=>{this.dragging=!0,this.dragTravel=0,this.downAt=performance.now(),t.setPointerCapture(e.pointerId)}),t.addEventListener("pointerup",()=>{this.dragging&&this.dragTravel<6&&performance.now()-this.downAt<300&&(this.clicked=!0),this.dragging=!1}),t.addEventListener("pointercancel",()=>this.dragging=!1),t.addEventListener("pointermove",e=>{this.dragging&&(this.dragDX+=e.movementX,this.dragDY+=e.movementY,this.dragTravel+=Math.abs(e.movementX)+Math.abs(e.movementY))}),t.addEventListener("wheel",e=>this.wheel+=e.deltaY,{passive:!0})}setVirtual(t,e){e?(this.keys.has(t)||this.pressed.add(t),this.keys.add(t)):this.keys.delete(t)}down(t){return this.keys.has(t)}justPressed(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.clicked=!1,this.dragDX=0,this.dragDY=0,this.wheel=0}}let oi=null;function q_(){if(oi)return oi;const i=new Uint8Array([70,70,160,160,255,255]);return oi=new jh(i,i.length,1,cc),oi.minFilter=en,oi.magFilter=en,oi.generateMipmaps=!1,oi.needsUpdate=!0,oi}function Ec(i){return new su({color:i,gradientMap:q_()})}const j_=new Se({color:1318954,side:Ge});function Z_(i,t=.04){const e=new Xt(i.geometry,j_);return e.scale.setScalar(1+t),e.castShadow=!1,e.receiveShadow=!1,i.add(e),e}function z(i,t,e=.04){const n=new Xt(i,Ec(t));return n.castShadow=!0,n.receiveShadow=!0,e>0&&Z_(n,e),n}const K_=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position.z = gl_Position.w;
}
`,J_=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
varying vec3 vDir;
void main() {
  float h = clamp(vDir.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(h, 0.6));
  float sun = dot(normalize(vDir), normalize(uSunDir));
  col = mix(col, vec3(1.0, 0.98, 0.85), step(0.9975, sun));
  col = mix(col, vec3(1.0, 0.95, 0.8), smoothstep(0.96, 0.9975, sun) * 0.35);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function $_(i){const t=new Ut,e=new Xt(new be(800,32,16),new Nn({vertexShader:K_,fragmentShader:J_,side:Ge,depthWrite:!1,uniforms:{uTop:{value:new Ct(3837672)},uHorizon:{value:new Ct(12576511)},uSunDir:{value:i}}}));e.renderOrder=-1,t.add(e);const n=new Se({color:16777215,fog:!1}),s=new Ut,o=ur(7);for(let r=0;r<26;r++){const a=new Ut,c=3+Math.floor(o()*4);for(let h=0;h<c;h++){const d=8+o()*10,f=new Xt(new be(d,10,8),n);f.position.set(h*d*1.1-c*d*.5,o()*4,o()*6),f.scale.y=.55,a.add(f)}const l=o()*Math.PI*2,u=260+o()*260;a.position.set(Math.cos(l)*u,70+o()*90,Math.sin(l)*u),a.lookAt(0,a.position.y,0),s.add(a)}return t.add(s),{group:t,update(r,a){t.position.set(a.x,0,a.z),s.rotation.y+=r*.004}}}function ur(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ql=new st(0,-20),Q_=46,In=new st(0,10),tr=500,tv={x0:-150,z0:-172,w:300,d:280},er={x0:-470,z0:-460,w:940,d:940},_s=[{name:"Ambergoose Caye",x:264,z:40,r:80},{name:"Caye Honkker",x:340,z:188,r:44},{name:"The Great Blue Hole",x:400,z:-130,r:42},{name:"Xunangoosich",x:230,z:-250,r:52},{name:"Caroni Swamp",x:110,z:250,r:38},{name:"Nylon Pool",x:-110,z:200,r:22},{name:"Pigeon Point",x:-210,z:272,r:34},{name:"Maracas Bay",x:-270,z:110,r:64},{name:"Pitch Lake",x:-330,z:-60,r:40},{name:"Port of Honk",x:-260,z:-225,r:48},{name:"Chacachacare Light",x:-400,z:30,r:20}],ev={meadow:"Skyfall Meadow",jungle:"Circuit Jungle",savanna:"Sunscorch Savanna",mountain:"Mount Honk",beach:"Gull Beach",islet:"Lonely Islet"};function nv(i,t){for(const n of _s)if(Math.hypot(i-n.x,t-n.z)<n.r*.95)return n.name;const e=to(i,t);return e?ev[e]??null:null}const ss={x:400,z:-130},De={x:-270,z:110,bayX:-270,bayZ:168},Ie={x:-330,z:-60,r:14,top:.85},cs={x:230,z:-250,base:2.4},jl={x:-110,z:200},ru=[{x:0,z:-20,r:Q_,rise:3.2,region:"meadow"},{x:50,z:-28,r:24,rise:3,region:"jungle"},{x:90,z:-32,r:42,rise:3.6,region:"jungle"},{x:-50,z:-14,r:22,rise:3,region:"savanna"},{x:-92,z:-18,r:40,rise:4.2,region:"savanna"},{x:26,z:-76,r:26,rise:3.2,region:"mountain"},{x:48,z:-112,r:36,rise:3.4,region:"mountain"},{x:2,z:38,r:26,rise:2,region:"beach"},{x:-42,z:72,r:13,rise:2.6,region:"islet"},{x:120,z:34,r:12,rise:2.6,region:"islet"},{x:-118,z:-84,r:14,rise:2.6,region:"islet"},{x:-18,z:-104,r:12,rise:2.6,region:"islet"},{x:250,z:-10,r:22,rise:2.2,region:"caye"},{x:262,z:25,r:26,rise:2.4,region:"caye"},{x:272,z:62,r:22,rise:2.2,region:"caye"},{x:280,z:96,r:18,rise:2,region:"caye"},{x:330,z:170,r:20,rise:2,region:"caye"},{x:352,z:206,r:16,rise:2,region:"caye"},{x:230,z:-250,r:48,rise:3.4,region:"maya"},{x:110,z:250,r:34,rise:1.5,region:"swamp"},{x:-210,z:272,r:30,rise:2,region:"caye"},{x:-270,z:110,r:60,rise:3.6,region:"northern"},{x:-330,z:-60,r:36,rise:3,region:"pitch"},{x:-260,z:-225,r:44,rise:3,region:"town"},{x:-400,z:30,r:17,rise:3.2,region:"light"}],on={x:50,z:-114},iv=new Set(["caye","maya","northern","swamp","town","pitch","light"]);function au(i,t){return Math.sin(i*.11+1.3)*Math.cos(t*.09-.7)*.6+Math.sin(i*.23-t*.19)*.3+Math.cos(i*.05+t*.07)*.5}function cu(i,t,e){return 1-ot.smoothstep(Math.hypot(t-i.x,e-i.z)/i.r,.55,1.08)}function Vt(i,t){const e=au(i,t);let n=0;for(const d of ru){if(Math.abs(i-d.x)>d.r*1.1||Math.abs(t-d.z)>d.r*1.1)continue;const f=cu(d,i,t);if(f<=0)continue;const g=d.region==="beach"||d.region==="caye"||d.region==="swamp",_=f*d.rise-1.6+e*f*(g?.3:1.2);n+=Math.exp((_+1.6)*3)}let s=n>1?Math.log(n)/3-1.6:-1.6;const o=Math.hypot(i-8,t+42);s+=(1-ot.smoothstep(o,4,18))*7;const r=Math.hypot(i-on.x,t-on.z),a=1-ot.smoothstep(r,4,36);s+=Math.pow(a,1.4)*(19+Math.abs(Math.sin(i*.21)*Math.cos(t*.17))*3);const c=Math.hypot(i+96,t+22);if(s+=(1-ot.smoothstep(c,8,30))*1.6,i<-150){const d=1-ot.smoothstep(Math.hypot((i-De.x)/1.7,t-82),5,32);s+=Math.pow(d,1.3)*(12+Math.abs(Math.sin(i*.17)*Math.cos(t*.13))*4);const f=1-ot.smoothstep(Math.hypot(i-De.bayX,t-De.bayZ),26,37);s=ot.lerp(s,-1.6,f);const g=1-ot.smoothstep(Math.hypot(i-Ie.x,t-Ie.z),Ie.r-2,Ie.r+4);s=ot.lerp(s,Ie.top,g)}const l=1-ot.smoothstep(Math.hypot(i-cs.x,t-cs.z),15,22);l>0&&(s=ot.lerp(s,cs.base,l));const u=Math.hypot(i-ss.x,t-ss.z);if(u<44){const d=Math.abs(Math.atan2(t-ss.z,i-ss.x)),f=ot.smoothstep(Math.PI-d,.1,.24),g=(1-ot.smoothstep(Math.abs(u-31),2.5,8))*f;let _=u<31?ot.lerp(-2.8,-.9,ot.smoothstep(u,11,15)):ot.lerp(-.9,-1.6,ot.smoothstep(u,31,42));_=Math.max(_,-1.6+g*2.2+e*g*.2),s=_+(s+1.6)}const h=Math.hypot(i-jl.x,t-jl.z);return h<24&&(s=Math.max(s,ot.lerp(-.3,-1.6,ot.smoothstep(h,10,22)))),s}function to(i,t){let e=null,n=.05;for(const s of ru){const o=cu(s,i,t)*(s.r/40+.5);o>n&&(n=o,e=s.region)}return e==="jungle"||e==="savanna"||e&&iv.has(e)?e:Math.hypot(i-ss.x,t-ss.z)<42?"reef":Math.hypot(i-on.x,t-on.z)<40?"mountain":e}const Fe={x:8,z:-42,deckHeight:7.175},bc=Vt(Fe.x,Fe.z),vn=[{x:Fe.x,z:Fe.z,r:2.9,top:bc+Fe.deckHeight}],En={x:Fe.x,z:Fe.z+2.35,bottom:Vt(Fe.x,Fe.z+2.35),top:bc+Fe.deckHeight,normal:new A(0,0,1)};function Xn(i,t,e){let n=Vt(i,t);for(const s of vn)s.top>n&&s.top<=e+.65&&Math.hypot(i-s.x,t-s.z)<s.r&&(n=s.top);return n}const Ze=[...[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([i,t])=>({x:Fe.x+i,z:Fe.z+t,r:.25,top:bc+Fe.deckHeight-.2}))];function lu(i,t){for(const e of Ze){if(i.y>e.top)continue;const n=i.x-e.x,s=i.z-e.z,o=Math.hypot(n,s),r=e.r+t;if(!(o>=r)){if(o<1e-4){i.x+=r;continue}i.x=e.x+n/o*r,i.z=e.z+s/o*r}}}const ce={x:-100,z:-26,r:4.2,top:0};ce.top=Vt(ce.x,ce.z)+5.6;vn.push({x:ce.x,z:ce.z,r:ce.r,top:ce.top});const hu=[];for(let i=0;i<9;i++){const t=-.6+i*.42,e=ce.x+Math.cos(t)*6.2,n=ce.z+Math.sin(t)*6.2,s=Vt(e,n)+.55+i*.58;hu.push({x:e,z:n,top:s}),vn.push({x:e,z:n,r:1.25,top:s})}const de={x:4,z0:52,z1:76,top:.95};for(let i=de.z0;i<=de.z1;i+=1.5)vn.push({x:de.x,z:i,r:1.45,top:de.top});const sn={x:94,z:-34},we={sand:new Ct(15916187),whiteSand:new Ct(16511442),grass:new Ct(7127626),darkGrass:new Ct(5217850),jungle:new Ct(3115578),jungleDark:new Ct(2388794),savanna:new Ct(13940828),savannaDark:new Ct(12558149),rock:new Ct(10853002),snow:new Ct(16054266),rainforest:new Ct(2062908),rainforestDark:new Ct(1533231),mud:new Ct(7039546),mudDark:new Ct(5658671),scrub:new Ct(10135640),pitch:new Ct(1579036),cliff:new Ct(9278340)};function uu(i,t,e,n){const s=to(i,t),o=au(i*2,t*2)>.2;s==="pitch"&&Math.hypot(i-Ie.x,t-Ie.z)<Ie.r?n.copy(we.pitch):e<.7?n.copy(s==="caye"||s==="reef"?we.whiteSand:we.sand):e>17?n.copy(we.snow):e>9.5?n.copy(s==="northern"?e>13?we.cliff:we.rainforestDark:we.rock):s==="jungle"||s==="maya"?n.copy(o?we.jungleDark:we.jungle):s==="northern"?n.copy(o?we.rainforestDark:we.rainforest):s==="savanna"?n.copy(o?we.savannaDark:we.savanna):s==="swamp"?n.copy(o?we.mudDark:we.mud):s==="pitch"?n.copy(o?we.savannaDark:we.scrub):s==="light"?n.copy(o?we.cliff:we.rock):s==="beach"||s==="caye"?n.copy(e<1.2?s==="caye"?we.whiteSand:we.sand:we.grass):n.copy(o?we.darkGrass:we.grass)}function du(){const i=Ec(16777215);return i.vertexColors=!0,i}function sv(){const i=new Ut,t=tv,e=new ui(t.w,t.d,300,280);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),o=new Ct,r=t.x0+t.w/2,a=t.z0+t.d/2;for(let g=0;g<n.count;g++){const _=n.getX(g)+r,m=n.getZ(g)+a,p=Vt(_,m);n.setY(g,p),uu(_,m,p,o),s.set([o.r,o.g,o.b],g*3)}e.setAttribute("color",new cn(s,3)),e.computeVertexNormals();const c=new Xt(e,du());c.position.set(r,0,a),c.receiveShadow=!0,i.add(c);const l=ur(42),u=(g,_,m)=>m.every(([p,S,x])=>Math.hypot(g-p,_-S)>x),h=[[8,-42,7],[sn.x,sn.z,11],[ce.x,ce.z,9],[de.x,(de.z0+de.z1)/2,14],[on.x,on.z,5],[0,6,4]],d=(g,_,m,p=.4,S=4)=>{const x=Vt(g,_);m.position.set(g,x-.1,_),m.rotation.y=l()*Math.PI*2,Ze.push({x:g,z:_,r:p,top:x+S}),i.add(m)};let f=0;for(let g=0;g<2600&&f<300;g++){const _=t.x0+l()*t.w,m=t.z0+l()*t.d,p=Vt(_,m);if(p<.9||!u(_,m,h))continue;const S=to(_,m),x=l();if(S==="jungle"){if(x>.5)continue;d(_,m,x<.32?Qa(l):ls(l),.5,6)}else if(S==="savanna"){if(x>.12)continue;d(_,m,fu(l),.4,5)}else if(S==="mountain"||p>9){if(x>.2||p>16)continue;d(_,m,hv(l),.4,5)}else if(S==="beach"||S==="islet"){if(x>.1)continue;d(_,m,ls(l))}else{if(x>.09)continue;d(_,m,x<.055?ls(l):pu(l))}f++}for(let g=0;g<900;g++){const _=t.x0+l()*t.w,m=t.z0+l()*t.d,p=Vt(_,m);if(p<.2||!u(_,m,h)||l()>.12)continue;const S=.6+l()*1.6,x=z(new cr(S,0),to(_,m)==="savanna"?13085049:11774363,.06);x.position.set(_,p+S*.3,m),Ze.push({x:_,z:m,r:S*.85,top:p+S*1.1}),x.rotation.set(l()*3,l()*3,l()*3),i.add(x)}return i.add(dv(Fe.x,Vt(Fe.x,Fe.z),Fe.z)),i.add(uv()),i.add(rv()),i.add(av()),i.add(cv()),i.add(lv()),i}const Zo=768;function ov(){const i=Zo,t=new Uint8Array(i*i*4),e=er;for(let s=0;s<i;s++)for(let o=0;o<i;o++){const r=e.x0+(o+.5)/i*e.w,a=e.z0+(s+.5)/i*e.d,c=ot.clamp((Vt(r,a)+3)/8,0,1)*255,l=(s*i+o)*4;t[l]=t[l+1]=t[l+2]=c,t[l+3]=255}const n=new jh(t,i,i);return n.magFilter=gn,n.minFilter=gn,n.needsUpdate=!0,n}function rv(){const i=new Ut,t=Vt(ce.x,ce.z),e=z(new Jt(ce.r,ce.r+1.6,ce.top-t+.6,7),12098154,.05);e.position.set(ce.x,(t+ce.top)/2-.3,ce.z),i.add(e);const n=z(new at(3.2,.6,4.5),13085049,.05);n.position.set(ce.x+ce.r+.8,ce.top-.3,ce.z),n.rotation.z=.12,i.add(n),vn.push({x:n.position.x+.6,z:ce.z,r:1.7,top:ce.top}),Ze.push({x:ce.x,z:ce.z,r:ce.r+.8,top:ce.top-.2});for(const s of hu){const o=s.top-Vt(s.x,s.z),r=z(new Jt(1.25,1.45,o+.4,6),13085049,.06);r.position.set(s.x,s.top-(o+.4)/2,s.z),i.add(r),Ze.push({x:s.x,z:s.z,r:1.1,top:s.top-.2})}return i}function av(){const i=new Ut,t=de.z1-de.z0+3,e=z(new at(3,.22,t),12618322,.05);e.position.set(de.x,de.top-.11,(de.z0+de.z1)/2),i.add(e);for(let n=de.z0-1;n<=de.z1+1;n+=.6){const s=z(new at(3.02,.02,.05),9067059,0);s.position.set(de.x,de.top+.005,n),i.add(s)}for(let n=de.z0;n<=de.z1+1;n+=4)for(const s of[-1.4,1.4]){const o=z(new Jt(.16,.16,3.4,6),9067059,.1);o.position.set(de.x+s,de.top-1.3,n),i.add(o)}return i}function cv(){const i=new Ut,t=new Se({color:3924223}),e=Vt(sn.x,sn.z),n=z(new Jt(7.5,8,.4,16),4870240,.04);n.position.set(sn.x,e+.05,sn.z),i.add(n);for(let a=0;a<8;a++){const c=a/8*Math.PI*2,l=sn.x+Math.cos(c)*9,u=sn.z+Math.sin(c)*9,h=3+a%3*1.6,d=Vt(l,u),f=z(new at(1,h,1),3883600,.06);f.position.set(l,d+h/2,u),f.rotation.y=-c,i.add(f);const g=new Xt(new at(1.04,.12,1.04),t);g.position.set(l,d+h*.7,u),g.rotation.y=-c,i.add(g),Ze.push({x:l,z:u,r:.8,top:d+h})}const s=z(new Kn(1.4,0),2830138,.06);s.position.set(sn.x,e+3.2,sn.z),i.add(s);const o=new Xt(new Kn(.8,0),t);o.position.copy(s.position),i.add(o);const r=new hr(3924223,6,18);r.position.copy(s.position),i.add(r);for(const[a,c]of[[3,1],[-2.5,2.5],[1,-3.2]]){const l=z(new Ui(1.6,.12,6,12,Math.PI),1842982,0);l.position.set(sn.x+a,e+.2,sn.z+c),l.rotation.y=Math.atan2(a,c),i.add(l)}return Ze.push({x:sn.x,z:sn.z,r:1.4,top:e+4.6}),i}function lv(){const i=new Ut,t=Vt(on.x,on.z),e=z(new Jt(.1,.1,4,6),9067059,.1);e.position.set(on.x,t+2,on.z),i.add(e);const n=z(new at(1.6,1,.05),14174010,.04);return n.position.set(on.x+.8,t+3.4,on.z),i.add(n),Ze.push({x:on.x,z:on.z,r:.3,top:t+4}),i}function Qa(i){const t=new Ut,e=4+i()*3,n=z(new Jt(.35,.5,e,7),7030310,.08);n.position.y=e/2,t.add(n);for(let o=0;o<3;o++){const r=1.6+i()*1.2,a=z(new Es(r,1),o===1?2783797:3381824,.05);a.position.set((i()-.5)*2,e+(i()-.2)*1.5,(i()-.5)*2),t.add(a)}const s=z(new Jt(.04,.04,e*.6,4),4034362,0);return s.position.set(.9,e*.65,.3),t.add(s),t}function fu(i){const t=new Ut,e=3.2+i()*1.6,n=z(new Jt(.18,.3,e,6),8016434,.08);n.position.y=e/2,n.rotation.z=(i()-.5)*.3,t.add(n);const s=z(new Jt(2.6+i(),2.2,.7,9),7313978,.05);return s.position.y=e+.2,s.scale.z=.8,t.add(s),t}function hv(i){const t=new Ut,e=z(new Jt(.18,.25,1.4,6),7030310,.08);e.position.y=.7,t.add(e);const n=.9+i()*.5;for(let s=0;s<3;s++){const o=z(new Ue((1.6-s*.4)*n,1.8*n,8),3112266,.05);o.position.y=1.4+s*1.1*n,t.add(o)}return t}function uv(){const i=new Ut,t=En.top-En.bottom+1.2;for(const e of[-.55,.55]){const n=z(new at(.14,t,.14),9067059,.12);n.position.set(En.x+e,En.bottom+t/2-.2,En.z),i.add(n)}for(let e=En.bottom+.45;e<En.top+.6;e+=.5){const n=z(new at(1.1,.09,.09),12618322,.15);n.position.set(En.x,e,En.z),i.add(n)}return i}function ls(i){const t=new Ut,e=4+i()*2.5,n=(i()-.5)*.5;for(let o=0;o<5;o++){const r=z(new Jt(.22,.28,e/5,7),10185533,.08);r.position.set(n*o*.5,(o+.5)*(e/5),0),r.rotation.z=-n*.4,t.add(r)}const s=new A(n*2.5,e,0);for(let o=0;o<7;o++){const r=z(new Ue(.5,3.4,4),4173375,.06);r.geometry.translate(0,1.7,0),r.scale.z=.25,r.position.copy(s),r.rotation.set(0,o/7*Math.PI*2,1.9),r.rotation.order="YXZ",t.add(r)}return t}function pu(i){const t=new Ut,e=z(new Jt(.3,.4,2.4,7),9067059,.08);e.position.y=1.2,t.add(e);const n=1.6+i()*.8,s=z(new Es(n,1),5419082,.05);return s.position.y=2.4+n*.7,t.add(s),t}function dv(i,t,e){const n=new Ut;n.position.set(i,t,e);const s=10512954;for(const[a,c]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const l=z(new at(.35,7,.35),s,.08);l.position.set(a,3.5,c),n.add(l)}const o=z(new at(4.6,.35,4.6),12618322,.04);o.position.y=7,n.add(o);const r=z(new Ue(3.6,2.2,4),14174010,.04);r.position.y=10.2,r.rotation.y=Math.PI/4,n.add(r);for(const[a,c]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const l=z(new at(.25,2.2,.25),s,.08);l.position.set(a,8.2,c),n.add(l)}return n}class fv{constructor(t){I(this,"yaw",0);I(this,"pitch",.32);I(this,"distance",11);I(this,"focus",new A);I(this,"manualHold",0);this.camera=t}update(t,e,n,s=null,o=0,r){const a=e.dragDX!==0||e.dragDY!==0||e.down("KeyQ")||e.down("KeyE");if(this.manualHold=a?1.2:Math.max(0,this.manualHold-t),!s&&r&&this.manualHold<=0&&r.speed>1.5){const d=r.facing+Math.PI,f=Math.atan2(Math.sin(d-this.yaw),Math.cos(d-this.yaw));Math.abs(f)<1.9&&(this.yaw+=f*Math.min(1,t*1.6*Math.min(1,r.speed/6)))}if(s){const d=n.clone().sub(s),f=Math.atan2(d.x,d.z)+.35,g=Math.atan2(Math.sin(f-this.yaw),Math.cos(f-this.yaw));this.yaw+=g*Math.min(1,t*6)}this.yaw-=e.dragDX*.005,this.pitch=ot.clamp(this.pitch+e.dragDY*.004,-.15,1.2),this.distance=ot.clamp(this.distance+e.wheel*.01,5,24),e.down("KeyQ")&&(this.yaw+=t*2),e.down("KeyE")&&(this.yaw-=t*2);const c=n.clone().add(new A(0,1.6,0));s&&c.lerp(s,.3),this.focus.x=ot.damp(this.focus.x,c.x,10,t),this.focus.y=ot.damp(this.focus.y,c.y,6,t),this.focus.z=ot.damp(this.focus.z,c.z,10,t);const l=new A(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(this.distance),u=this.focus.clone().add(l),h=Math.max(Vt(u.x,u.z),0)+.8;u.y<h&&(u.y=h),o>0&&u.add(new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(o*.6)),this.camera.position.copy(u),this.camera.lookAt(this.focus)}snap(t){this.focus.copy(t).add(new A(0,1.6,0))}}const pv=[[1,.3,.35,18],[-.4,1,.22,11],[.7,-.7,.12,6]];function Si(i,t,e){let n=0;for(const[s,o,r,a]of pv){const c=2*Math.PI/a,l=Math.sqrt(9.8/c)*.35,u=Math.hypot(s,o);n+=r*Math.sin(c*(s/u*i+o/u*t)-l*c*e)}return n}const mv=`
uniform float uTime;
varying vec3 vWorld;
varying float vHeight;

float wave(vec2 p, vec2 dir, float amp, float len) {
  float k = 6.2831853 / len;
  float speed = sqrt(9.8 / k) * 0.35;
  return amp * sin(k * dot(normalize(dir), p) - speed * k * uTime);
}

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  float h = wave(world.xz, vec2(1.0, 0.3), 0.35, 18.0)
          + wave(world.xz, vec2(-0.4, 1.0), 0.22, 11.0)
          + wave(world.xz, vec2(0.7, -0.7), 0.12, 6.0);
  world.y += h;
  vWorld = world.xyz;
  vHeight = h;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,gv=`
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uFoam;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform sampler2D uShore;
uniform vec4 uShoreBounds;
varying vec3 vWorld;
varying float vHeight;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

// Animated cellular noise gives the squiggly Wind Waker foam lines.
float cells(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 o = hash2(i + g);
    o = 0.5 + 0.5 * sin(uTime * 0.6 + 6.2831 * o);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
  }
  return d2 - d1;
}

void main() {
  // Terrain height under the water, baked from the island heightfield.
  vec2 suv = (vWorld.xz - uShoreBounds.xy) / uShoreBounds.zw;
  float inside = step(0.0, suv.x) * step(0.0, suv.y) * step(suv.x, 1.0) * step(suv.y, 1.0);
  float ground = mix(-1.6, texture2D(uShore, suv).r * 8.0 - 3.0, inside);
  float shallow = smoothstep(-1.58, -0.3, ground);
  vec3 col = mix(uDeep, uShallow, shallow * 0.85 + smoothstep(-0.2, 0.6, vHeight) * 0.15);
  // Sinkholes (the Great Blue Hole) drop to a dark navy.
  col = mix(col, vec3(0.03, 0.12, 0.36), 1.0 - smoothstep(-2.5, -1.75, ground));

  float edge = cells(vWorld.xz * 0.14);
  vec2 m = vWorld.xz * 0.035 + vec2(uTime * 0.02, -uTime * 0.015);
  float mask = sin(m.x * 3.1 + sin(m.y * 2.3)) * sin(m.y * 2.7 + sin(m.x * 1.9));
  float foamLine = (1.0 - step(0.035, edge)) * step(0.35, mask);
  float shoreFoam = (1.0 - step(0.16, abs(ground + 0.28 + sin(uTime * 1.3 + vWorld.x * 0.3) * 0.12))) * step(-1.5, ground);
  float crest = step(0.42, vHeight) * (1.0 - step(0.12, edge));
  float foam = max(max(foamLine * 0.85, shoreFoam), crest);
  col = mix(col, uFoam, foam);

  float dist = length(cameraPosition - vWorld);
  float fog = smoothstep(uFogNear, uFogFar, dist);
  gl_FragColor = vec4(mix(col, uFogColor, fog), 1.0);
  #include <colorspace_fragment>
}
`;function _v(i,t){const e=new ui(900,900,220,220);e.rotateX(-Math.PI/2);const n={uTime:{value:0},uDeep:{value:new Ct(2056127)},uShallow:{value:new Ct(4179160)},uFoam:{value:new Ct(16055295)},uFogColor:{value:new Ct(12576511)},uFogNear:{value:120},uFogFar:{value:420},uShore:{value:i},uShoreBounds:{value:new he(t.x0,t.z0,t.w,t.d)}},s=new Nn({vertexShader:mv,fragmentShader:gv,uniforms:n}),o=new Xt(e,s);return{mesh:o,update(r,a){n.uTime.value=r,o.position.x=Math.round(a.x/10)*10,o.position.z=Math.round(a.z/10)*10}}}function vv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new Ke;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=Zl(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<r[u].length;++_)f.push(r[u][_][d]);const g=Zl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Zl(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new cn(r,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else r.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const vs=[],dr=i=>_s.find(t=>t.name===i);function xv(i,t,e,n,s,o=120){const r=Math.hypot(e,n);for(let a=0;a<o;a+=.5){const c=i+e/r*a,l=t+n/r*a;if(Vt(c,l)<s)return new st(c,l)}return new st(i+e/r*o,t+n/r*o)}function yv(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{const s=n;if(!s.isMesh)return;const o=s.material,r=o.side===Ge,a=r?"outline":`c${o.color.getHexString()}`;let c=t.get(a);c||(c={mat:r?o:Ec(o.color),geos:[]},t.set(a,c));let l=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();l.deleteAttribute("uv"),l=l.applyMatrix4(s.matrixWorld),c.geos.push(l)});const e=new Ut;for(const[n,s]of t){const o=vv(s.geos);for(const a of s.geos)a.dispose();const r=new Xt(o,s.mat);r.castShadow=n!=="outline",r.receiveShadow=n!=="outline",e.add(r)}return e}function Mv(i){const t=i.r*2.3,e=Math.min(170,Math.ceil(t/1.1)),n=new ui(t,t,e,e);n.rotateX(-Math.PI/2);const s=n.attributes.position,o=new Float32Array(s.count*3),r=new Ct;for(let c=0;c<s.count;c++){const l=s.getX(c)+i.x,u=s.getZ(c)+i.z,h=Vt(l,u);s.setY(c,h),uu(l,u,h,r),o.set([r.r,r.g,r.b],c*3)}n.setAttribute("color",new cn(o,3)),n.computeVertexNormals();const a=new Xt(n,du());return a.position.set(i.x,0,i.z),a.receiveShadow=!0,a}function Sv(i){const t=new Ut,e=2.6+i()*1.6,n=z(new Jt(.2,.28,e,6),5915440,.08);n.position.y=e/2+.8,t.add(n);for(let s=0;s<4;s++){const o=z(new Ui(.9,.08,5,8,Math.PI),5915440,0);o.rotation.y=s/4*Math.PI*2+i(),o.position.y=.1,t.add(o)}for(let s=0;s<3;s++){const o=z(new Es(1.3+i()*.8,1),s===1?3042099:3833146,.05);o.position.set((i()-.5)*1.8,e+.8+i()*.6,(i()-.5)*1.8),t.add(o)}return t}function mu(i,t=3,e=1,n="#f3e2b8",s="#5a3a1a"){const o=document.createElement("canvas");o.width=512,o.height=Math.round(512*e/t);const r=o.getContext("2d");r.fillStyle=n,r.fillRect(0,0,o.width,o.height),r.fillStyle=s,r.font=`bold ${Math.round(o.height*.42)}px "Trebuchet MS", sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,o.width/2,o.height/2);const a=new Zh(o);a.colorSpace=rn;const c=new Se({map:a,side:Tn});return new Xt(new ui(t,e),c)}function co(i,t,e,n){const s=new Ut,o=Vt(i,t);s.position.set(i,o,t),s.rotation.y=e;for(const a of[-1.3,1.3]){const c=z(new at(.16,2.6,.16),9067059,.1);c.position.set(a,1.3,0),s.add(c)}const r=mu(n,3,1);return r.position.set(0,2,.1),s.add(r),Ze.push({x:i,z:t,r:.5,top:o+2.6}),s}function di(i,t,e,n,s,o,r=16){const a=Math.hypot(n,s),c=n/a,l=s/a,u=xv(t,e,c,l,.3),h=.95,d=Math.atan2(c,l),f=z(new at(2.8,.22,r),12618322,.05);f.position.set(u.x+c*r*.5,h-.11,u.y+l*r*.5),f.rotation.y=d,i.add(f);for(let _=0;_<=r;_+=1.4)vn.push({x:u.x+c*_,z:u.y+l*_,r:1.4,top:h});for(let _=1;_<=r;_+=4)for(const m of[-1.3,1.3]){const p=z(new Jt(.15,.15,3.4,6),9067059,.1);p.position.set(u.x+c*_-l*m,h-1.3,u.y+l*_+c*m),i.add(p)}const g=new st(u.x+c*r,u.y+l*r);return o.forEach((_,m)=>{const p=m%2===0?1:-1,S=r-3-Math.floor(m/2)*7,x=_==="boat"?4.2:3.2;vs.push({kind:_,x:u.x+c*S-l*p*x,z:u.y+l*S+c*p*x,yaw:d})}),g}function Tc(i,t,e,n,s,o,r=3){const a=z(new at(r,2.3,r),s,.04);a.position.set(t,e+1.15,n),i.add(a);const c=z(new Ue(r*.85,1.6,4),o,.04);c.position.set(t,e+3.1,n),c.rotation.y=Math.PI/4,i.add(c);const l=z(new at(.8,1.4,.05),5913114,0);l.position.set(t,e+.7,n+r/2+.03),i.add(l),Ze.push({x:t,z:n,r:r*.62,top:e+3.2})}function gu(i,t,e,n,s=2.6){for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const c=z(new Jt(.1,.1,2.4,6),9067059,.1);c.position.set(t+r*s*.55,e+1.2,n+a*s*.55),i.add(c)}const o=z(new Ue(s,1.5,8),13214812,.04);o.position.set(t,e+3.1,n),i.add(o)}function wv(i,t,e,n){let s=0;const o=Math.round(t.r*1.6);for(let r=0;r<t.r*t.r*.5&&s<o;r++){const a=t.x+(e()*2-1)*t.r,c=t.z+(e()*2-1)*t.r,l=Vt(a,c);if(l<.9||n.some(([_,m,p])=>Math.hypot(a-_,c-m)<p))continue;const u=to(a,c),h=e();let d=null,f=.4,g=4;u==="maya"?(h<.35&&(d=h<.22?Qa(e):ls(e)),f=.5,g=6):u==="northern"?(h<.3&&(d=h<.2?Qa(e):pu(e)),f=.5,g=6):u==="swamp"?(h<.4&&(d=Sv(e)),f=.6):u==="pitch"?h<.08&&(d=fu(e)):u==="town"?h<.05&&(d=ls(e)):u==="caye"&&h<.12&&(d=ls(e)),d&&(d.position.set(a,l-.1,c),d.rotation.y=e()*Math.PI*2,Ze.push({x:a,z:c,r:f,top:l+g}),i.add(d),s++)}}function Ev(i){const t=di(i,255,25,-1,0,["boat","jetski","jetski"]),e=[16740241,5032432,16765286,8115081];for(let n=0;n<4;n++){const s=t.x+5+n%2*4,o=25+(n<2?-9-n*6:9+(n-2)*6),r=1.25,a=z(new at(5,.2,5),12618322,.05);a.position.set(s,r-.1,o),i.add(a);for(const[c,l]of[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]]){const u=z(new Jt(.14,.14,3.2,6),9067059,.1);u.position.set(s+c,r-1.6,o+l),i.add(u)}Tc(i,s,r,o,e[n],14174010,3),vn.push({x:s,z:o,r:2.6,top:r})}}function bv(i,t){t.add(co(331,172,.6,"GO SLOW")),di(i,338,182,1,.4,["jetski","jetski"],12),gu(i,326,Vt(326,166),166,2.4)}function Tv(i,t){const e=dr("The Great Blue Hole");for(let n=0;n<10;n++){const s=n/10*Math.PI*2,o=z(new be(.45,10,8),n%2?16777215:16734778,.05);o.position.set(e.x+Math.cos(s)*16,.1,e.z+Math.sin(s)*16),i.add(o)}t.add(co(e.x,e.z+31,Math.PI,"GREAT BLUE HOLE")),vs.push({kind:"jetski",x:e.x+4,z:e.z+22,yaw:Math.PI/2})}function Av(i,t){const{x:e,z:n,base:s}=cs,o=1.8,r=[13,10.6,8.2,5.8,3.4];r.forEach((p,S)=>{const x=s+(S+1)*o,v=z(new at(p*2,o+.4,p*2),S%2?13616804:14472114,.03);v.position.set(e,x-(o+.4)/2,n),i.add(v);const D=z(new at(p*2+.1,.15,p*2+.1),8362586,0);D.position.set(e,x-.05,n),i.add(D),vn.push({x:e,z:n,r:p*1.05,top:x}),Ze.push({x:e,z:n,r:p*.98,top:x-.3})});const a=20,c=21,u=(c-3.4)/a;for(let p=0;p<a;p++){const S=s+(p+1)*(r.length*o/a),x=n+c-(p+.5)*u,v=z(new at(4,S-s+.3,u+.02),p%2?13221787:14077096,.02);v.position.set(e,(S+s-.3)/2,x),i.add(v);for(const D of[-1.1,1.1])vn.push({x:e+D,z:x,r:1.05,top:S})}const h=s+r.length*o,d=z(new at(3.4,2.6,2.6),14077096,.04);d.position.set(e,h+1.3,n-.8),i.add(d);const f=z(new at(3.8,.5,3),12103048,.04);f.position.set(e,h+2.85,n-.8),i.add(f);const g=z(new at(1.1,1.7,.06),2827290,0);g.position.set(e,h+.85,n+.52),i.add(g),Ze.push({x:e,z:n-.8,r:1.5,top:h+3});const _=new Xt(new Kn(.45,0),new Se({color:4054167}));_.position.set(e,h+3.6,n-.8),t.add(_);const m=new hr(4054167,4,14);m.position.copy(_.position),t.add(m),di(i,e+30,n+10,1,.2,["boat","jetski"])}function Rv(i){di(i,110,262,0,1,["jetski","boat"],14)}function Cv(i,t){const e=z(new Jt(.3,.5,1.4,8),16765503,.06);e.position.set(-110,.3,214),i.add(e);const n=mu("NYLON POOL",3,.8,"#2a5cc8","#ffffff");n.position.set(-110,1.6,214),t.add(n)}function Pv(i){const t=di(i,-210,285,0,1,["jetski","boat"],20);gu(i,t.x,.95,t.y,3),vn.push({x:t.x,z:t.y,r:3,top:.95});const e=z(new at(6,.22,6),12618322,.05);e.position.set(t.x,.84,t.y),i.add(e)}function Lv(i,t){const n=(()=>{for(let r=De.bayZ;r>De.z;r-=.5)if(Vt(De.bayX,r)>.9)return r;return De.bayZ-30})()-6,s=Vt(De.bayX,n);Tc(i,De.bayX,s,n,16765286,14174010,3.4),t.add(co(De.bayX+3.5,n+2.5,0,"BAKE & SHARK"));const o=[16734815,3065014,16765503,4415982,16748459];for(let r=0;r<7;r++){const a=-.9+r*.3,c=Math.sin(a),l=-Math.cos(a);let u=De.bayX,h=De.bayZ;for(let _=20;_<50&&(u=De.bayX+c*_,h=De.bayZ+l*_,!(Vt(u,h)>.4));_+=.5);u+=c*2,h+=l*2;const d=Vt(u,h),f=z(new Jt(.05,.05,2.4,5),15658734,.1);f.position.set(u,d+1.2,h),i.add(f);const g=z(new Ue(1.4,.6,8),o[r%o.length],.05);g.position.set(u,d+2.5,h),i.add(g)}vs.push({kind:"boat",x:De.bayX-6,z:De.bayZ-12,yaw:Math.PI}),vs.push({kind:"jetski",x:De.bayX+6,z:De.bayZ-14,yaw:Math.PI})}function Dv(i,t){const e=new Xt(new Mc(Ie.r,40),new k_({color:855312,shininess:120,specular:6710903}));e.rotation.x=-Math.PI/2,e.position.set(Ie.x,Ie.top+.03,Ie.z),t.add(e),t.add(co(Ie.x+Ie.r+3,Ie.z,Math.PI/2,"PITCH LAKE")),di(i,Ie.x+20,Ie.z,1,0,["boat"])}function Iv(i,t,e){const n=dr("Port of Honk"),s=[16740241,5032432,16765286,8115081,13073919,16752412,16250871],o=[14174010,2776264,3841373];for(let l=-2;l<=2;l++)for(let u=-3;u<=3;u++){if(Math.abs(l)<=1&&Math.abs(u)<=1)continue;const h=n.x+u*8+(e()-.5)*2,d=n.z+l*8+(e()-.5)*2,f=Vt(h,d);f<.9||e()<.25||Tc(i,h,f-.1,d,s[Math.floor(e()*s.length)],o[Math.floor(e()*o.length)],3.4)}const r=Vt(n.x,n.z),a=z(new Jt(4.5,4.7,.8,16),9067059,.04);a.position.set(n.x,r+.4,n.z),i.add(a),vn.push({x:n.x,z:n.z,r:4.5,top:r+.8});for(let l=0;l<5;l++){const u=l/5*Math.PI*2,h=n.x+Math.cos(u)*2.8,d=n.z+Math.sin(u)*2.8,f=z(new Jt(.55,.55,.9,14),13225686,.05);f.position.set(h,r+1.25,d),i.add(f);const g=z(new Jt(.5,.5,.02,14),7173248,0);g.position.set(h,r+1.71,d),i.add(g),Ze.push({x:h,z:d,r:.6,top:r+1.7})}const c=[14174010,16765503,2776264,3841373,1118481,16777215];for(let l=0;l<6;l++){const u=l/6*Math.PI*2,h=(l+1)/6*Math.PI*2,d=n.x+Math.cos(u)*6.5,f=n.z+Math.sin(u)*6.5,g=z(new Jt(.08,.08,4.4,5),9067059,.1);g.position.set(d,r+2.2,f),i.add(g),Ze.push({x:d,z:f,r:.3,top:r+4.4});for(let _=1;_<6;_++){const m=_/6,p=z(new Ue(.22,.5,3),c[(l+_)%c.length],0);p.position.set(d+(n.x+Math.cos(h)*6.5-d)*m,r+4.1-Math.sin(m*Math.PI)*.6,f+(n.z+Math.sin(h)*6.5-f)*m),p.rotation.x=Math.PI,i.add(p)}}t.add(co(n.x,n.z+7.5,0,"PORT OF HONK")),di(i,n.x+26,n.z+10,1,0,["boat","jetski","boat"],18)}function Uv(i,t){const e=dr("Chacachacare Light"),n=Vt(e.x,e.z);for(let u=0;u<6;u++){const h=z(new Jt(1.7-(u+1)*.08,1.7-u*.08,2.6,14),u%2?14174010:16250351,.03);h.position.set(e.x,n+1.3+u*2.6,e.z),i.add(h)}const s=n+15.6,o=z(new Jt(1.9,1.9,.3,14),2830138,.04);o.position.set(e.x,s,e.z),i.add(o);const r=z(new Ue(1.3,1.4,12),14174010,.04);r.position.set(e.x,s+2.4,e.z),i.add(r),Ze.push({x:e.x,z:e.z,r:1.8,top:s+3}),vn.push({x:e.x,z:e.z,r:1.9,top:s+.15});const a=new Xt(new Jt(.9,.9,1.4,12),new Se({color:16773544}));a.position.set(e.x,s+1,e.z),t.add(a);const c=new Ut;c.position.copy(a.position);const l=new Se({color:16773544,transparent:!0,opacity:.18,depthWrite:!1,blending:aa,side:Tn});for(const u of[1,-1]){const h=new Xt(new Ue(3,46,16,1,!0),l);h.geometry.translate(0,-23,0),h.rotation.z=u*Math.PI/2,c.add(h)}return t.add(c),di(i,e.x+8,e.z,1,0,["jetski"],12),{update:u=>c.rotation.y+=u*.6}}function Nv(i){const t=dr("Caroni Swamp"),e=[],n=ur(9);for(let s=0;s<16;s++){const o=new Ut,r=z(new be(.28,8,6),14692651,.06);r.scale.set(.8,.7,1.4),o.add(r);const a=z(new Ue(.05,.6,5),3811872,0);a.rotation.x=Math.PI/2+.3,a.position.set(0,-.05,.6),o.add(a);for(const c of[-1,1]){const l=z(new at(.9,.04,.4),15222332,0);l.geometry.translate(c*.45,0,0),l.position.x=c*.15,l.name=c<0?"L":"R",o.add(l)}i.add(o),e.push({mesh:o,r:8+n()*16,phase:n()*Math.PI*2,h:9+n()*7,speed:.25+n()*.2})}return{update(s,o){for(const r of e){const a=r.phase+o*r.speed;r.mesh.position.set(t.x+Math.cos(a)*r.r,r.h+Math.sin(o*.7+r.phase)*1.2,t.z+Math.sin(a)*r.r),r.mesh.rotation.y=-a;const c=Math.sin(o*9+r.phase)*.6;for(const l of r.mesh.children)l.name==="L"?l.rotation.z=c:l.name==="R"&&(l.rotation.z=-c)}}}}function Fv(){const i=new Ut,t=new Ut,e=new Ut,n=ur(77);for(const r of _s)i.add(Mv(r));Ev(t),bv(t,e),Tv(t,e),Av(t,e),Rv(t),Cv(t,e),Pv(t),Lv(t,e),Dv(t,e),Iv(t,e,n);const s=[Uv(t,e),Nv(e)],o=[[cs.x,cs.z,24],[-260,-225,30],[De.bayX,De.bayZ-34,8],[Ie.x,Ie.z,Ie.r+4],[-400,30,4],[255,25,6],[331,172,3]];for(const r of _s)wv(t,r,n,o);return i.add(yv(t)),i.add(e),{group:i,update(r,a){for(const c of s)c.update(r,a)}}}const zv={boat:{name:"Speedboat",max:22,boost:31,accel:.9,turn:1.15,grip:2.2,bank:.22,hop:4.5,draft:.35,half:3,hackSeconds:1.8,seat:new A(0,.95,-.7),pose:"stand"},jetski:{name:"Jet Ski",max:25,boost:36,accel:1.4,turn:2.1,grip:3.2,bank:.5,hop:7.5,draft:.2,half:1.5,hackSeconds:1.2,seat:new A(0,.78,-.35),pose:"sit"}};function qs(i,t,e,n=.03){const s=new tu(i.map(([r,a])=>new st(r,a))),o=new Sc(s,{depth:t,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2});return o.rotateX(Math.PI/2),z(o,e,n)}function Ov(){const i=new Ut,t=z(new at(.5,.62,.62),1711138,.04);t.position.y=.32,i.add(t);const e=z(new at(.52,.12,.66),2764085,0);e.position.y=.66,i.add(e);const n=z(new at(.52,.08,.64),13111342,0);n.position.y=.2,i.add(n);const s=z(new at(.16,1,.24),2764085,.04);s.position.y=-.45,i.add(s);const o=z(new qe(.12,.4,4,8),2764085,.04);o.rotation.x=Math.PI/2,o.position.set(0,-.95,.05),i.add(o);const r=new Ut;r.name="prop",r.position.set(0,-.95,-.28);for(let a=0;a<3;a++){const c=z(new at(.08,.32,.03),12107980,0);c.geometry.translate(0,.16,0),c.rotation.z=a/3*Math.PI*2,r.add(c)}return i.add(r),i}function Bv(){const i=new Ut,t=[[-1.15,-3],[1.15,-3],[1.2,.8],[.7,2.5],[0,3.3],[-.7,2.5],[-1.2,.8]],e=qs(t,.75,16250351);e.position.y=.55,i.add(e);const n=qs(t.map(([f,g])=>[f*1.02,g*1.01]),.12,2776264,0);n.position.y=.42,i.add(n);const s=qs(t.map(([f,g])=>[f*.86,g*.9-.1]),.05,12618322,0);s.position.y=.66,i.add(s);for(const f of[-1,1]){const g=z(new at(.12,.28,4.6),16250351,.03);g.position.set(f*1.08,.78,-.6),i.add(g)}const o=z(new at(1,.9,.7),15328988,.04);o.position.set(0,1.1,.5),i.add(o);const r=new Xt(new at(1.1,.5,.04),new Se({color:10475775,transparent:!0,opacity:.5}));r.position.set(0,1.75,.75),r.rotation.x=-.45,i.add(r);const a=z(new Ui(.2,.035,6,14),1711138,0);a.position.set(0,1.62,.12),a.rotation.x=-.6,a.name="wheel",i.add(a);const c=new Se({color:16726843}),l=new Xt(new at(.34,.08,.2),c);l.position.set(0,1.58,.42),i.add(l);const u=z(new at(1.9,.4,.6),2776264,.03);u.position.set(0,.9,-2.3),i.add(u);const h=z(new at(1.3,.2,1.1),2776264,.03);h.position.set(0,.78,2),i.add(h);const d=[];for(const f of[-.45,.45]){const g=Ov();g.position.set(f,.55,-3.25),i.add(g),d.push(g.getObjectByName("prop"))}return{root:i,props:d,glow:c}}function kv(){const i=new Ut,t=[[-.55,-1.4],[.55,-1.4],[.62,.4],[.35,1.25],[0,1.65],[-.35,1.25],[-.62,.4]],e=qs(t,.45,13111342);e.position.y=.45,i.add(e);const n=qs(t.map(([h,d])=>[h*.92,d*.95]),.12,16250351,.02);n.position.y=.58,i.add(n);for(const h of[-1,1]){const d=z(new at(.03,.08,2.2),3924223,0);d.position.set(h*.6,.32,0),i.add(d)}const s=z(new at(.8,.3,.8),13111342,.03);s.position.set(0,.72,.65),s.rotation.x=-.25,i.add(s);const o=z(new qe(.22,1,4,8),1447707,.03);o.rotation.x=Math.PI/2,o.position.set(0,.72,-.45),i.add(o);const r=z(new at(.16,.36,.16),1447707,.03);r.position.set(0,.95,.38),r.rotation.x=-.4,i.add(r);const a=z(new Jt(.035,.035,.9,6),2764085,.04);a.rotation.z=Math.PI/2,a.position.set(0,1.12,.3),a.name="wheel",i.add(a);const c=new Se({color:16726843}),l=new Xt(new at(.22,.05,.14),c);l.position.set(0,1.08,.48),i.add(l);const u=z(new Jt(.12,.15,.3,10),2764085,.04);return u.rotation.x=Math.PI/2,u.position.set(0,.12,-1.5),i.add(u),{root:i,props:[],glow:c}}class Hv{constructor(t,e,n,s){I(this,"spec");I(this,"group",new Ut);I(this,"position");I(this,"yaw");I(this,"speed",0);I(this,"velocity",new A);I(this,"hacked",!1);I(this,"hackProgress",0);I(this,"driven",!1);I(this,"rpm",0);I(this,"events",{splash:!1,bump:!1});I(this,"vy",0);I(this,"airborne",!1);I(this,"pitch",0);I(this,"roll",0);I(this,"steerVis",0);I(this,"props");I(this,"wheel");I(this,"glow");I(this,"wakeTimer",0);this.kind=t,this.spec=zv[t];const o=t==="boat"?Bv():kv();this.group.add(o.root),this.props=o.props,this.glow=o.glow,this.wheel=o.root.getObjectByName("wheel")??null,this.position=new A(e,0,n),this.yaw=s}get name(){return this.spec.name}get hackSeconds(){return this.spec.hackSeconds}setHacked(){this.hacked=!0,this.glow.color.set(3924223)}forward(t=new A){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}seat(t=new A){return t.copy(this.spec.seat).applyEuler(this.group.rotation).add(this.group.position)}get tilt(){return{pitch:this.pitch,roll:this.roll,steer:this.steerVis}}update(t,e,n,s){const o=this.spec;this.events={splash:!1,bump:!1};const r=(n==null?void 0:n.throttle)??0,a=(n==null?void 0:n.steer)??0,c=n!=null&&n.boost?o.boost:o.max,l=r>0?r*c:r*o.max*.35;r!==0?this.speed=ot.damp(this.speed,l,o.accel,t):this.speed*=Math.exp(-t*(this.airborne?.05:.55)),this.rpm=ot.damp(this.rpm,Math.min(1,Math.abs(r)*(n!=null&&n.boost?1:.75)+Math.abs(this.speed)/o.boost*.4),4,t);const u=ot.clamp(Math.abs(this.speed)/7,.18,1)*(this.airborne?.25:1);this.yaw-=a*o.turn*u*Math.sign(this.speed||1)*t,this.steerVis=ot.damp(this.steerVis,a,8,t);const h=this.forward(),d=this.airborne?.15:o.grip;this.velocity.x=ot.damp(this.velocity.x,h.x*this.speed,d,t),this.velocity.z=ot.damp(this.velocity.z,h.z*this.speed,d,t);const f=this.position.x+this.velocity.x*t,g=this.position.z+this.velocity.z*t,_=f+h.x*o.half*Math.sign(this.speed||1),m=g+h.z*o.half*Math.sign(this.speed||1),p=Si(f,g,e);!this.airborne&&Vt(_,m)>Math.min(p,0)*.3-o.draft-.15?(Math.abs(this.speed)>6&&(this.events.bump=!0),this.speed*=-.15,this.velocity.set(0,0,0)):(this.position.x=f,this.position.z=g);const S=new st(this.position.x-In.x,this.position.z-In.y);S.length()>tr&&(S.setLength(tr),this.position.x=In.x+S.x,this.position.z=In.y+S.y,this.speed*=.9);const x=Si(this.position.x,this.position.z,e),v=Si(this.position.x+h.x*o.half,this.position.z+h.z*o.half,e),D=Si(this.position.x-h.x*o.half,this.position.z-h.z*o.half,e),R=h.z,C=-h.x,P=Si(this.position.x-R,this.position.z-C,e),E=Si(this.position.x+R,this.position.z+C,e),M=x-o.draft;n!=null&&n.hop&&!this.airborne&&(this.vy=o.hop+Math.abs(this.speed)*.08,this.airborne=!0),!this.airborne&&this.kind==="jetski"&&Math.abs(this.speed)>18&&v-D>.28&&(this.vy=3+(v-D)*6,this.airborne=!0),this.airborne?(this.vy-=22*t,this.position.y+=this.vy*t,this.position.y<=M&&this.vy<0&&(this.airborne=!1,this.events.splash=this.vy<-3,this.vy=0,this.position.y=M)):this.position.y=ot.damp(this.position.y,M,9,t);const L=ot.clamp(this.speed/o.max,-.5,1.3),k=Math.atan2(v-D,o.half*2),O=this.airborne?ot.clamp(this.vy*.04,-.35,.3):0;this.pitch=ot.damp(this.pitch,-k-L*.09-O,6,t);const X=Math.atan2(E-P,2);this.roll=ot.damp(this.roll,a*o.bank*ot.clamp(Math.abs(this.speed)/o.max,0,1)+X*.6,5,t),this.group.position.copy(this.position),this.group.rotation.order="YXZ",this.group.rotation.set(this.pitch,this.yaw,this.roll);for(const W of this.props)W.rotation.z+=t*(6+this.rpm*60);this.wheel&&(this.wheel.rotation[this.kind==="boat"?"z":"y"]=-this.steerVis*(this.kind==="boat"?1.6:.5));const Y=Math.abs(this.speed);if(this.wakeTimer-=t,!this.airborne&&Y>3&&this.wakeTimer<=0){this.wakeTimer=.03;const W=this.position.clone().addScaledVector(h,-o.half-.2).setY(x+.05);if(s.emit(W,Y>15?2:1,{color:16055295,speed:1.4,up:1+Y*.05,size:.2,life:.8,grow:1.8,gravity:3}),Y>10)for(const Q of[-1,1]){const H=this.position.clone().addScaledVector(h,o.half*.6).add(new A(R*Q*.9,0,C*Q*.9)).setY(x+.1);s.emit(H,1,{color:16777215,speed:2+Y*.06,up:2.5,size:.18,life:.5,grow:1.4,gravity:9})}}this.events.splash&&s.splash(this.position.clone().setY(x))}}const Ee=512,Gv=[{name:"Skyfall Meadow",x:0,z:-20},{name:"Circuit Jungle",x:90,z:-32},{name:"Sunscorch Savanna",x:-92,z:-18},{name:"Mount Honk",x:48,z:-112},{name:"Gull Beach",x:2,z:44}];class Vv{constructor(t,e){I(this,"base",document.createElement("canvas"));I(this,"ctx");I(this,"timer",0);I(this,"big",!1);this.el=t,t.width=t.height=Ee,this.ctx=t.getContext("2d"),this.base.width=this.base.height=Ee;const n=this.base.getContext("2d"),s=n.createImageData(Ee,Ee),o=er;for(let r=0;r<Ee;r++)for(let a=0;a<Ee;a++){const c=Math.floor(a/Ee*Zo),l=Math.floor(r/Ee*Zo),u=e[(l*Zo+c)*4]/255*8-3,h=o.x0+a/Ee*o.w,d=o.z0+r/Ee*o.d;let f;u<-2.2?f=[10,34,92]:u<-1.5?f=[31,95,191]:u<-.2?f=[63,196,216]:u<.7?f=[242,220,155]:u<4.5?f=[96,176,72]:u<9.5?f=[62,140,62]:f=[170,160,146];const g=Math.hypot(h-In.x,d-In.y)>tr,_=(r*Ee+a)*4,m=g?.55:1;s.data[_]=f[0]*m,s.data[_+1]=f[1]*m,s.data[_+2]=f[2]*m,s.data[_+3]=255}n.putImageData(s,0,0)}toggle(){this.big=!this.big,this.el.classList.toggle("big",this.big),this.timer=0}update(t,e,n){if(this.timer-=t,this.timer>0)return;this.timer=.1;const s=er,o=this.ctx,r=this.big?s.w:260,a=this.big?s.x0+s.w/2:e.x,c=this.big?s.z0+s.d/2:e.z,l=(p,S)=>[((p-a)/r+.5)*Ee,((S-c)/r+.5)*Ee];o.fillStyle="#1f5fbf",o.fillRect(0,0,Ee,Ee);const u=(a-r/2-s.x0)/s.w*Ee,h=(c-r/2-s.z0)/s.d*Ee,d=r/s.w*Ee;o.imageSmoothingEnabled=!0,o.drawImage(this.base,u,h,d,d,0,0,Ee,Ee),o.font=`bold ${this.big?15:18}px "Trebuchet MS", sans-serif`,o.textAlign="center",o.lineWidth=this.big?3:4,o.strokeStyle="#14202a",o.fillStyle="#ffffff";const f=this.big?[..._s,{name:"Skyfall Isles",x:0,z:-40}]:[..._s,...Gv];for(const p of f){let[S,x]=l(p.x,p.z);if(S<-60||S>Ee+60||x<-20||x>Ee+20)continue;const v=o.measureText(p.name).width/2+4;S=Math.min(Ee-v,Math.max(v,S)),x=Math.min(Ee-6,Math.max(18,x)),o.strokeText(p.name,S,x),o.fillText(p.name,S,x)}for(const p of n){const[S,x]=l(p.x,p.z);o.beginPath(),o.arc(S,x,this.big?4:7,0,Math.PI*2),o.fillStyle=p.color,o.fill(),o.lineWidth=2,o.stroke()}const[g,_]=l(e.x,e.z),m=this.big?9:14;o.save(),o.translate(g,_),o.rotate(-e.yaw+Math.PI),o.beginPath(),o.moveTo(0,-m),o.lineTo(m*.7,m*.8),o.lineTo(0,m*.4),o.lineTo(-m*.7,m*.8),o.closePath(),o.fillStyle=e.color,o.fill(),o.lineWidth=3,o.stroke(),o.restore()}}const ts=16250351,Zr=2776264,Kr=1447707,ko=13111342,Jr=1381914,Kl=3816774,Wv=2776264,$r=8014374,Jl=16751135,Xv={down:()=>!1,justPressed:()=>!1,clicked:!1},Hs=1,bn=.48,Pn=.47,$l=.12;function Yv(i){const t=new Ut,e=z(new at(.21,.06,.47),16052714,.05);e.position.set(0,-.075,.09),t.add(e);const n=z(new at(.21,.02,.47),ko,0);n.position.set(0,-.11,.09),t.add(n);const s=z(new at(.19,.13,.4),16052714,.05);s.position.set(0,.02,.07),t.add(s);const o=z(new be(.1,10,6,0,Math.PI*2,0,Math.PI/2),16052714,.05);o.scale.set(.95,.9,1),o.position.set(0,-.045,.26),t.add(o);const r=z(new at(.2,.15,.14),ko,.04);r.position.set(0,.03,-.09),t.add(r);const a=z(new at(.2,.05,.12),ko,.03);a.position.set(0,-.03,.26),t.add(a);const c=z(new Jt(.1,.11,.2,10),ko,.04);c.position.set(0,.15,-.02),t.add(c);const l=z(new Ui(.095,.025,6,12),1118481,0);l.rotation.x=Math.PI/2,l.position.set(0,.25,-.02),t.add(l);for(const h of[-1,1]){const d=z(new at(.01,.035,.3),1118481,0);d.position.set(h*.1,0,.06),d.rotation.x=-.32,t.add(d)}for(let h=0;h<4;h++){const d=z(new at(.11,.015,.025),16777215,0);d.position.set(0,.09+h*.02,.18-h*.06),d.rotation.x=-.35,t.add(d)}const u=z(new at(.1,.12,.03),1118481,0);return u.position.set(0,.2,.06),u.rotation.x=-.25,t.add(u),t.scale.x=i,t}function qv(i){const t=new Ut;t.position.y=-.76;const e=z(new Jt(.095,.09,.08,10),Wv,.04);e.position.y=.02,t.add(e);const n=z(new at(.08,.15,.16),Jr,.04);n.position.y=-.07,t.add(n);const s=z(new at(.01,.1,.12),Kl,0);s.position.set(-i*.042,-.07,0),t.add(s);for(let r=0;r<4;r++){const a=[.1,.115,.11,.09][r],c=z(new qe(.019,a,3,6),Jr,.03);c.position.set(-i*.012,-.15-a/2,.06-r*.04),c.rotation.z=i*.25,t.add(c);const l=z(new be(.02,6,4),Kl,0);l.position.set(-i*(.012+Math.sin(.25)*a*.5),-.15-a,.06-r*.04),t.add(l)}const o=z(new qe(.022,.08,3,6),Jr,.03);return o.position.set(-i*.05,-.1,.09),o.rotation.set(.7,0,i*.6),t.add(o),t}function jv(){const i=new Ut,t=new Ut;i.add(t);const e=[];for(const H of[-1,1]){const nt=new Ut;nt.position.set(H*.2,Hs,0);const ht=z(new qe(.13,bn-.16,4,8),15327951,.06);ht.position.y=-bn/2,nt.add(ht);const ft=new Ut;ft.position.y=-bn,nt.add(ft);const Nt=z(new Jt(.065,.05,Pn,6),Jl,.1);Nt.position.y=-Pn/2,ft.add(Nt);const $t=new Ut;$t.position.y=-Pn,ft.add($t),$t.add(Yv(H)),t.add(nt),e.push({hip:nt,knee:ft,ankle:$t})}const n=z(new Jt(.36,.5,.42,12),Zr,.04);n.position.y=1.02,t.add(n);const s=z(new qe(.34,.5,4,12),Zr,.04);s.scale.z=.8,s.position.y=1.55,t.add(s);const o=z(new Jt(.37,.37,.1,12),$r,.06);o.position.y=1.22,t.add(o);const r=z(new at(.14,.12,.04),16765503,0);r.position.set(0,1.22,.3),t.add(r);const a=z(new be(.26,12,8),ts,.05);a.scale.set(1.15,.5,1),a.position.set(0,1.92,.04),t.add(a);const c=z(new Ue(.16,.42,6),ts,.08);c.rotation.x=-2.2,c.position.set(0,1.05,-.42),t.add(c);const l=new Ut,u=z(new Jt(.38,.38,.06,14),10135739,.06);u.rotation.x=Math.PI/2,l.add(u);const h=z(new Ui(.38,.04,6,18),13226716,0);l.add(h);const d=z(new Kn(.12,0),16765503,0);d.position.z=-.05,l.add(d),l.scale.setScalar(.8);const f=new Ut;f.position.set(0,1.5,-.4);const g=z(new at(.5,.5,.14),4935523,.06);f.add(g);const _=[],m=new Se({color:16753210,transparent:!0,opacity:.9});for(const H of[-1,1]){const nt=z(new qe(.12,.42,4,10),14174778,.06);nt.position.set(H*.2,0,-.1),f.add(nt);const ht=z(new Jt(.07,.11,.14,10),2830138,.08);ht.position.set(H*.2,-.38,-.1),f.add(ht);const ft=new Xt(new Ue(.09,.55,8),m);ft.rotation.x=Math.PI,ft.position.set(H*.2,-.45,-.1),ft.geometry.translate(0,.27,0),ft.scale.setScalar(.001),f.add(ft),_.push(ft)}t.add(f);const p=z(new qe(.11,.42,4,8),Kr,.08);p.position.set(0,2.18,.08),p.rotation.x=.18,t.add(p);const S=new Ut;S.position.set(0,2.5,.16),t.add(S);const x=z(new be(.22,14,10),Kr,.06);x.scale.set(.95,.95,1.15),S.add(x);const v=z(new Ue(.09,.34,8),Jl,.08);v.rotation.x=Math.PI/2,v.scale.x=1.3,v.position.set(0,-.05,.32),S.add(v);const D=z(new be(.06,8,6),2829099,0);D.position.set(0,.02,.2),S.add(D);const R=z(new be(.1,10,8),ts,0);R.scale.set(1.25,.8,.35),R.position.set(0,-.05,.25),S.add(R);for(const H of[-1,1]){const nt=new A(H*.164,.055,.142),ht=z(new be(.07,10,8),ts,0);ht.scale.set(1,.75,.35),ht.position.copy(nt),ht.lookAt(nt.clone().multiplyScalar(2)),S.add(ht);const ft=new Xt(new be(.045,8,6),new Se({color:1118481}));ft.position.copy(nt).multiplyScalar(1.06),S.add(ft);const Nt=new Xt(new at(.1,.025,.02),new Se({color:1118481}));Nt.position.set(H*.15,.12,.15),Nt.rotation.z=H*-.35,S.add(Nt)}const C=[];for(const H of[-1,1]){const nt=new Ut;nt.position.set(H*.44,1.85,0);const ht=z(new qe(.1,.28,4,8),Zr,.06);ht.position.y=-.2,nt.add(ht);const ft=z(new qe(.085,.3,4,8),ts,.06);ft.position.y=-.55,nt.add(ft);const Nt=z(new Ue(.1,.36,4),ts,.06);Nt.position.set(H*.06,-.5,-.1),Nt.rotation.x=2.6,nt.add(Nt),nt.add(qv(H)),t.add(nt),C.push(nt)}l.position.set(-.12,-.52,.02),l.rotation.set(0,-Math.PI/2,0),C[0].add(l);const P=new Ut,E=z(new Jt(.04,.04,.22,6),$r,.1);P.add(E);const M=z(new at(.34,.06,.08),6966232,.1);M.position.y=.13,P.add(M);const L=z(new at(.08,.95,.025),14674160,.1);L.position.y=.62,P.add(L);const k=new Ut;k.position.set(-.5,1.22,.06),k.rotation.set(-1.05,0,-.15);const O=z(new at(.12,.9,.07),Kr,.06);O.position.y=-.4,k.add(O);const X=z(new at(.15,.08,.09),13226716,0);X.position.y=-.84,k.add(X);const Y=z(new at(.17,.06,.1),$r,.04);k.add(Y),t.add(k);const W=()=>{k.add(P),P.position.set(0,.12,0),P.rotation.set(Math.PI,0,0)},Q=()=>{C[1].add(P),P.position.set(0,-.8,.05),P.rotation.set(1.2,0,0)};return W(),{root:i,body:t,head:S,wings:C,legs:e,sword:P,sheathSword:W,drawSword:Q,flames:_}}class Zv{constructor(){I(this,"model",jv());I(this,"position",new A(0,2,6));I(this,"velocity",new A);I(this,"facing",Math.PI);I(this,"grounded",!1);I(this,"swimming",!1);I(this,"cycle",0);I(this,"prevFootPhase",[0,.5]);I(this,"strideScale",1);I(this,"visualY",0);I(this,"prevSpeed",0);I(this,"accelLean",0);I(this,"slopeLean",0);I(this,"attackTime",0);I(this,"attackCooldown",0);I(this,"invulnerable",0);I(this,"lockTarget",null);I(this,"running",!1);I(this,"gliding",!1);I(this,"climbing",!1);I(this,"jetting",!1);I(this,"frozen",!1);I(this,"jetArmed",!1);I(this,"spaceHeld",0);I(this,"swimBlend",0);I(this,"jetPose",0);I(this,"plantY",0);I(this,"swimPhase",0);I(this,"swimMove",0);I(this,"climbPhase",0);I(this,"gait",0);I(this,"airPose",0);I(this,"landCrouch",0);I(this,"bank",0);I(this,"lastFacing",Math.PI);I(this,"swordDrawn",!1);I(this,"sheatheTimer",0);I(this,"events",{jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null})}get object(){return this.model.root}swordReach(){return this.position.clone().add(new A(Math.sin(this.facing),1,Math.cos(this.facing)).multiplyScalar(1.4))}hurt(t){const e=this.position.clone().sub(t).setY(0);e.lengthSq()<1e-4&&e.set(Math.sin(this.facing),0,Math.cos(this.facing)).negate(),e.normalize().multiplyScalar(11),this.velocity.set(e.x,6,e.z),this.grounded=!1,this.invulnerable=1.2}update(t,e,n,s){const o=this.frozen?Xv:n,r=this.grounded,a=this.swimming;this.events={jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null},o.justPressed("KeyR")&&(this.running=!this.running),this.invulnerable=Math.max(0,this.invulnerable-t),this.attackCooldown=Math.max(0,this.attackCooldown-t);let c=(o.down("KeyW")||o.down("ArrowUp")?1:0)-(o.down("KeyS")||o.down("ArrowDown")?1:0);const l=(o.down("KeyD")||o.down("ArrowRight")?1:0)-(o.down("KeyA")||o.down("ArrowLeft")?1:0),u=o.down("ShiftLeft")||o.down("ShiftRight");this.running&&c<0&&(this.running=!1),(this.running||u)&&c===0&&(c=1);const h=new A(this.running||u?l*.6:l,0,-c),d=h.lengthSq()>0;if(d&&h.normalize().applyAxisAngle(new A(0,1,0),s),this.climbing||this.tryGrabLadder(h,d)){this.climb(t,o,c);return}const f=this.running||u;let g=this.swimming?f?6.8:4.4:f?10:6;if(d&&this.grounded){const O=(Xn(this.position.x+h.x*.6,this.position.z+h.z*.6,this.position.y)-this.position.y)/.6;g*=ot.clamp(1-Math.max(0,O)*.45,.55,1)}const _=this.invulnerable>.9,m=new st(this.velocity.x,this.velocity.z),p=d&&m.lengthSq()>4&&m.normalize().dot(new st(h.x,h.z))<-.3,S=_?1:this.grounded||this.swimming?d?p?6:9:12:3;this.events.skid=p&&this.grounded&&m.length()>5;const x=h.multiplyScalar(g),v=new st(this.velocity.x,this.velocity.z);if(this.velocity.x=ot.damp(this.velocity.x,x.x,S,t),this.velocity.z=ot.damp(this.velocity.z,x.z,S,t),this.lockTarget){const k=this.lockTarget.clone().sub(this.position);this.facing=Math.atan2(k.x,k.z)}else if(d){let O=Math.atan2(x.x,x.z)-this.facing;O=Math.atan2(Math.sin(O),Math.cos(O));const X=ot.lerp(14,7,ot.clamp((Math.hypot(this.velocity.x,this.velocity.z)-4)/6,0,1));this.facing+=O*Math.min(1,t*X)}const D=o.down("Space");this.spaceHeld=D?this.spaceHeld+t:0,o.justPressed("Space")&&(this.grounded||this.swimming?(this.velocity.y=this.swimming?6:9,this.grounded=!1,this.events.jumped=!0):(this.jetArmed=!0,this.events.flapped=!0));const R=!this.grounded&&!this.swimming;if(this.jetting=R&&D&&(this.jetting||this.jetArmed||this.spaceHeld>.28),(!D||!R)&&(this.jetArmed=!1),this.jetting){const k=o.down("KeyC")||o.down("ControlLeft");this.velocity.y=ot.damp(this.velocity.y,k?-5:6.5,4,t);const O=f?19:12,X=ot.damp(v.length(),d?O:0,d?3:2,t);let Y=v.lengthSq()>.25?Math.atan2(v.x,v.y):Math.atan2(x.x,x.z);if(d){const W=Math.atan2(x.x,x.z);Y+=Math.atan2(Math.sin(W-Y),Math.cos(W-Y))*Math.min(1,t*5)}this.velocity.x=Math.sin(Y)*X,this.velocity.z=Math.cos(Y)*X}this.gliding=R&&!this.jetting&&D&&this.velocity.y<0,(o.justPressed("KeyJ")||o.justPressed("KeyF")||o.clicked)&&this.attackCooldown<=0&&!this.swimming&&(this.attackTime=.3,this.attackCooldown=.38,this.events.swung=!0),this.events.swung||this.lockTarget?(this.swordDrawn||this.model.drawSword(),this.swordDrawn=!0,this.sheatheTimer=0):this.swordDrawn&&(this.sheatheTimer+=t)>3&&(this.model.sheathSword(),this.swordDrawn=!1),this.jetting||(this.velocity.y-=24*t),this.gliding&&(this.velocity.y=Math.max(this.velocity.y,-2.2)),this.position.addScaledVector(this.velocity,t),lu(this.position,.35);const P=Xn(this.position.x,this.position.z,this.position.y),E=Si(this.position.x,this.position.z,e)-.75;this.swimming=!1;const M=r&&!this.events.jumped&&this.velocity.y<=0&&this.position.y-P<.45;this.position.y<=P||M?(!r&&this.velocity.y<-6&&(this.landCrouch=Math.min(1,-this.velocity.y/16)),this.position.y=P,this.velocity.y=Math.max(0,this.velocity.y),this.grounded=!0):this.grounded=!1;const L=a&&!this.events.jumped&&this.velocity.y<=1&&this.position.y<=E+.6;P<E&&(this.position.y<=E||L)&&(this.position.y=ot.damp(this.position.y,E,10,t),this.velocity.y<0&&(this.velocity.y=0),this.swimming=!0,this.grounded=!1),this.events.landed=this.grounded&&!r,this.events.splashed=this.swimming&&!a,this.animate(t,e,d,f),this.model.root.visible=this.invulnerable<=0||Math.floor(e*20)%2===0}ride(t,e,n,s,o,r){const a=this.model,c=ot.damp;this.position.copy(n),this.velocity.set(0,0,0),this.invulnerable=Math.max(0,this.invulnerable-t),this.facing=this.lastFacing=s,this.grounded=!0,this.swimming=this.jetting=this.gliding=this.climbing=!1,this.swimBlend=this.jetPose=this.airPose=this.gait=this.plantY=0,this.visualY=n.y,this.events={jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null},a.root.visible=!0,a.root.position.copy(n),a.root.rotation.order="YXZ";const l=-o.steer*(r?.32:.12);a.root.rotation.set(o.pitch+(r?.18:.06),s,o.roll*1.2+l),a.body.rotation.set(0,-o.steer*.12,0),a.body.position.set(0,r?-Hs+.08:-.06,0),a.body.scale.y=1,a.legs.forEach((u,h)=>{const d=h===0?-1:1;r?(u.hip.rotation.set(-1.25,0,d*.32),u.knee.rotation.x=1.55,u.ankle.rotation.x=-.3):(u.hip.rotation.set(-.2+d*.08,0,d*.12),u.knee.rotation.x=.4+Math.sin(e*3+h)*.04,u.ankle.rotation.x=-.2)});for(let u=0;u<2;u++){const h=u===0?-1:1,d=(r?-1.15:-.95)+o.steer*h*.18;a.wings[u].rotation.set(c(a.wings[u].rotation.x,d,12,t),0,h*(r?.32:.2))}a.head.position.z=.16,a.head.rotation.set(-(o.pitch+(r?.18:.06))*.8,-o.steer*.35,0);for(const u of a.flames)u.scale.setScalar(.001)}dismount(t){this.position.copy(t),this.velocity.set(0,6,0),this.grounded=!1;for(const e of this.model.legs)e.hip.rotation.set(0,0,0);this.model.root.rotation.set(0,this.facing,0)}tryGrabLadder(t,e){if(!e||this.swimming||this.invulnerable>.9)return!1;const n=En,s=this.position.x-n.x,o=this.position.z-(n.z+.5);if(Math.hypot(s,o)>.9||this.position.y<n.bottom-.5||this.position.y>n.top-.8)return!1;const r=Math.cos(this.facing-Math.atan2(-n.normal.x,-n.normal.z))>.5;return t.dot(n.normal)>-.5&&!r?!1:(this.climbing=!0,this.velocity.set(0,0,0),this.position.y=Math.max(this.position.y,n.bottom),!0)}climb(t,e,n){const s=En;this.facing=Math.atan2(-s.normal.x,-s.normal.z),this.position.x=ot.damp(this.position.x,s.x,15,t),this.position.z=ot.damp(this.position.z,s.z+.4,15,t),this.position.y+=n*3*t,this.climbPhase+=Math.abs(n)*t*9,this.grounded=!1,e.justPressed("Space")?(this.climbing=!1,this.velocity.copy(s.normal).multiplyScalar(4).setY(4),this.events.jumped=!0):this.position.y>=s.top-.4?(this.climbing=!1,this.position.set(s.x,s.top,s.z-1.1),this.velocity.set(0,0,0),this.grounded=!0,this.events.landed=!0):n<0&&this.position.y<=s.bottom&&(this.climbing=!1,this.position.y=s.bottom,this.grounded=!0);const o=this.model;o.root.position.copy(this.position),o.root.rotation.set(0,this.facing,0);const r=Math.sin(this.climbPhase);o.wings[0].rotation.set(-2.5+r*.35,0,0),o.wings[1].rotation.set(-2.5-r*.35,0,0),o.body.position.set(0,0,0),o.body.rotation.set(0,0,0),o.legs.forEach((a,c)=>{const l=Math.max(0,c===0?r:-r);a.hip.rotation.x=-.3-l*.9,a.knee.rotation.x=.4+l*1.2,a.ankle.rotation.x=-(a.hip.rotation.x+a.knee.rotation.x)*.6}),o.root.visible=!0}animate(t,e,n,s){const o=this.model,r=ot.damp;o.root.position.copy(this.position),o.root.rotation.order="YXZ",o.root.rotation.y=this.facing;const a=Math.hypot(this.velocity.x,this.velocity.z),c=this.grounded,l=!this.grounded&&!this.swimming,u=ot.clamp((a-6)/4,0,1);this.gait=r(this.gait,c?Math.min(1,a/5):0,10,t),this.airPose=r(this.airPose,l?1:0,12,t),this.landCrouch=r(this.landCrouch,0,7,t),this.swimBlend=r(this.swimBlend,this.swimming?1:0,6,t),this.jetPose=r(this.jetPose,this.jetting?1:0,6,t),this.swimMove=r(this.swimMove,this.swimming&&a>1?1:0,2.5,t),this.swimPhase+=t*(2.4+this.swimMove*1.4);const h=.5-.5*Math.cos(this.swimPhase),d=.45+.55*this.swimMove,f=this.position.y-this.visualY;this.visualY=c&&f>0&&f<.7?r(this.visualY,this.position.y,14,t):this.position.y,o.root.position.y=this.visualY;const g=this.visualY,_=ot.clamp((a-2.5)/6.5,0,1),m=Math.sin(this.facing),p=Math.cos(this.facing),S=Math.cos(this.facing),x=-Math.sin(this.facing),v=t>0?(a-this.prevSpeed)/t:0;this.prevSpeed=a,this.accelLean=r(this.accelLean,c?ot.clamp(v*.025,-.18,.14):0,6,t);let D=0;if(c){const T=Xn(this.position.x+m*.6,this.position.z+p*.6,g+.7),gt=Xn(this.position.x-m*.6,this.position.z-p*.6,g+.7);D=Math.atan2(T-gt,1.2)}this.slopeLean=r(this.slopeLean,D*.35*Math.min(1,a/3),6,t);const R=ot.clamp(a/19,0,1),C=c?.03+_*.2+this.accelLean+this.slopeLean+this.landCrouch*.25:l?.08+this.jetPose*(.15+R*.85):0;o.root.rotation.x=r(o.root.rotation.x,C,10,t);const P=o.root.rotation.x,E=1+a*.25,M=ot.lerp(.62,.36,_);this.strideScale=r(this.strideScale,c&&a>.3?1:.2,4,t);const L=M*E*this.strideScale;if(c){if(a>.3)this.cycle+=a*t/E;else{const T=this.cycle%1;(T>=M||(T+.5)%1>=M)&&(this.cycle+=t*1.6)}this.cycle%=1}const k=(bn+Pn)*.985;let O=Hs-.03-_*.07-this.landCrouch*.35,X=!1;const Y=o.legs.map((T,gt)=>{const tt=(this.cycle+gt*.5)%1,vt=tt<M,lt=vt?tt/M:(tt-M)/(1-M),Pt=vt?L*(.5-lt):L*(-.5+lt*lt*(3-2*lt)),yt=vt?0:(.13+.22*_)*Math.sin(Math.PI*lt),b=gt===0?-1:1,y=this.position.x+m*Pt+S*b*.2,B=this.position.z+p*Pt+x*b*.2,q=ot.clamp(Xn(y,B,g+.7)-g,-.7,.7),$=Xn(y+m*.18,B+p*.18,g+.7),K=Xn(y-m*.18,B-p*.18,g+.7);if(vt&&c){X=!0;const bt=q+$l+Math.sqrt(Math.max(0,k*k-Pt*Pt));O=Math.min(O,bt-_*.07*Math.sin(Math.PI*lt))}if(c&&a>.8&&tt<this.prevFootPhase[gt]-.5){const mt=Xn(y,B,g+.7)>Vt(y,B)+.05?"wood":Vt(y,B)<.7?"sand":"grass";this.events.step={x:y,z:B,surface:mt,hard:_>.45}}return this.prevFootPhase[gt]=tt,{z:Pt,y:q+yt,stance:vt,u:lt,slope:Math.atan2($-K,.36)}});c&&!X&&(O+=.04*_),this.plantY=r(this.plantY,c?O-Hs:0,22,t);const W=Hs+this.plantY,Q=W*Math.sin(P),H=W*Math.cos(P),nt=[];o.legs.forEach((T,gt)=>{const tt=Y[gt],vt=tt.z-Q,lt=tt.y+$l-H,Pt=ot.clamp(Math.hypot(vt,lt),.15,bn+Pn-.002),yt=Math.atan2(-vt,-lt),b=Math.PI-Math.acos(ot.clamp((bn*bn+Pn*Pn-Pt*Pt)/(2*bn*Pn),-1,1)),y=Math.acos(ot.clamp((bn*bn+Pt*Pt-Pn*Pn)/(2*bn*Pt),-1,1)),B=yt-y;let q=B-P,$=b,bt=(tt.stance?-tt.slope+Math.max(0,(tt.u-.7)/.3)*.55:ot.lerp(.45,-.25,Math.min(1,tt.u*2.5)))-(B+$);const mt=this.velocity.y>0,Et=mt?gt===0?-.75:-.2:-.25,Qt=mt?gt===0?1.3:.5:.35;q=ot.lerp(q,Et,this.airPose),$=ot.lerp($,Qt,this.airPose),bt=ot.lerp(bt,-(q+$),this.airPose),q=ot.lerp(q,.3+(gt===0?.12:-.08),this.jetPose),$=ot.lerp($,.3+gt*.3,this.jetPose);const rt=(1-h)*d;q=ot.lerp(q,.15-rt*.45,this.swimBlend),$=ot.lerp($,.15+rt*.95,this.swimBlend),T.hip.rotation.x=q,T.knee.rotation.x=$,T.ankle.rotation.x=ot.lerp(bt,.9,Math.max(this.swimBlend,this.jetPose)),nt.push(q)});const ht=this.swimBlend*(.55+.6*this.swimMove-h*.08*d),ft=1.5;o.body.rotation.x=ht,o.body.position.set(0,this.plantY+ft*(1-Math.cos(ht)),-ft*Math.sin(ht)),o.root.position.y-=(.45-h*.06*d)*this.swimBlend;const Nt=-Math.cos(Math.PI*2*(this.cycle-M/2))*(.05-_*.03)*this.gait,$t=(Y[0].z-Y[1].z)*.14*this.gait;o.body.position.x=Nt,o.body.rotation.z=-Nt*.8,o.body.rotation.y=$t,o.body.scale.y=1+Math.sin(e*2.2)*.012*(1-this.gait);let Z=this.facing-this.lastFacing;Z=Math.atan2(Math.sin(Z),Math.cos(Z)),this.lastFacing=this.facing;const ut=t>0?Z/t:0;this.bank=r(this.bank,ot.clamp(-ut*.035*(a/6),-.28,.28),8,t),o.root.rotation.z=this.bank,o.head.position.z=.16+Math.sin(this.cycle*Math.PI*4)*.05*this.gait,o.head.rotation.x=-(o.root.rotation.x+ht)*.8,o.head.rotation.y=-$t;const Tt=this.gliding?1.45+Math.sin(e*6)*.06:l?.6+Math.max(0,Math.sin(e*26))*.6*this.airPose*(1-this.jetPose)*(1-this.swimBlend):.1+u*.12,pt=ot.clamp((Y[0].z-Y[1].z)/Math.max(.4,L),-1,1)*this.gait*(1-this.airPose),zt=.45+_*.6,Ht=-.12*_*this.gait,Ot=[-nt[0]*.5,-nt[1]*.5].map(T=>T*this.airPose),te=this.swordDrawn?-.35-nt[1]*.35:-pt*zt+Ht+Ot[1],J=[new _n(pt*zt+Ht+Ot[0],0,-Tt),new _n(te,0,Tt)];for(let T=0;T<2;T++){const gt=T===0?-1:1;if(this.jetPose>.01&&(J[T].x=ot.lerp(J[T].x,.55+R*.6,this.jetPose),J[T].z=ot.lerp(J[T].z,gt*.3,this.jetPose)),this.swimBlend>.01){const tt=h*d;J[T].x=ot.lerp(J[T].x,-1.6+tt*.8,this.swimBlend),J[T].z=ot.lerp(J[T].z,gt*(.15+tt*.85),this.swimBlend)}o.wings[T].rotation.copy(J[T])}for(const T of o.flames){const gt=this.jetting?.8+Math.random()*.5:r(T.scale.y,.001,20,t);T.scale.set(Math.max(.001,gt*.9),Math.max(.001,gt),Math.max(.001,gt*.9))}this.attackTime=Math.max(0,this.attackTime-t);const ct=this.attackTime/.3;if(ct>0&&this.swordDrawn){const T=Math.sin((1-ct)*Math.PI);o.wings[1].rotation.set(-2.6+(1-ct)*2.4,-T*.5,.3),o.sword.rotation.x=1.2+T*.4}else this.swordDrawn&&(o.sword.rotation.x=1.2)}}class Kv{constructor(t,e=260){I(this,"pool",[]);I(this,"cursor",0);const n=new Es(1,0);for(let s=0;s<e;s++){const o=new Se({color:16777215,transparent:!0,depthWrite:!1}),r=new Xt(n,o);r.visible=!1,t.add(r),this.pool.push({mesh:r,mat:o,vel:new A,life:0,maxLife:1,size:1,grow:0,gravity:0})}}emit(t,e,n){for(let s=0;s<e;s++){const o=this.pool[this.cursor];this.cursor=(this.cursor+1)%this.pool.length;const r=new A(Math.random()-.5,Math.random()*.5,Math.random()-.5).normalize();o.vel.copy(r).multiplyScalar(n.speed*(.5+Math.random()*.5)),o.vel.y+=n.up??0,o.mesh.position.copy(t),o.mat.color.setHex(n.color),o.size=n.size*(.6+Math.random()*.6),o.grow=n.grow??0,o.gravity=n.gravity??0,o.life=o.maxLife=n.life*(.7+Math.random()*.5),o.mesh.visible=!0}}dust(t){this.emit(t,8,{color:15985362,speed:2.5,up:.5,size:.25,life:.5,grow:1.2})}splash(t){this.emit(t,18,{color:16777215,speed:3,up:5,size:.18,life:.8,gravity:14})}sparks(t){this.emit(t,12,{color:16773754,speed:8,up:1,size:.12,life:.3})}poof(t,e=9067224){this.emit(t,22,{color:e,speed:4,up:1.5,size:.45,life:.7,grow:1.5}),this.emit(t,10,{color:16777215,speed:6,up:2,size:.2,life:.5})}sparkle(t){this.emit(t,1,{color:16770688,speed:.6,up:1.2,size:.09,life:.9})}shockwave(t){for(let e=0;e<28;e++){const n=e/28*Math.PI*2,s=this.pool[this.cursor];this.cursor=(this.cursor+1)%this.pool.length,s.mesh.position.copy(t),s.vel.set(Math.cos(n)*12,1,Math.sin(n)*12),s.mat.color.setHex(15326400),s.size=.5,s.grow=1.5,s.gravity=0,s.life=s.maxLife=.55,s.mesh.visible=!0}}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=e.gravity*t,e.vel.multiplyScalar(1-Math.min(1,t*2.5)),e.mesh.position.addScaledVector(e.vel,t);const n=e.life/e.maxLife;e.mesh.scale.setScalar(e.size*(1+(1-n)*e.grow)),e.mat.opacity=Math.min(1,n*2)}}}const _e=i=>440*Math.pow(2,(i-69)/12),Jv={D:{root:50,third:4},A:{root:45,third:4},Bm:{root:47,third:3},G:{root:43,third:4},C:{root:48,third:4},F:{root:41,third:4},Am:{root:45,third:3},Em:{root:40,third:3},Dm:{root:50,third:3}},js={bpm:172,sections:[{name:"intro",chords:["D","A","Bm","G"],lead:"guitar",melody:[[78,76,74,76,78,-1,81,-1],[76,-1,-1,-1,0,0,0,0],[78,76,74,76,78,-1,83,-1],[81,-1,79,-1,78,-1,76,-1]]},{name:"verse",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",melody:[[66,-1,66,64,62,-1,64,66],[64,-1,-1,61,-1,0,0,0],[66,-1,66,67,69,-1,67,66],[67,-1,66,64,-1,0,0,0],[66,-1,66,64,62,-1,64,66],[69,-1,-1,69,71,-1,69,-1],[66,-1,64,62,-1,64,66,-1],[64,-1,-1,-1,0,0,69,71]]},{name:"chorus",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",melody:[[74,-1,-1,73,74,-1,76,-1],[73,-1,69,-1,-1,0,69,71],[74,-1,-1,73,74,-1,78,-1],[76,-1,-1,-1,74,-1,0,0],[74,-1,-1,73,74,-1,76,78],[79,-1,78,-1,76,-1,73,-1],[74,-1,76,-1,78,-1,76,74],[74,-1,-1,-1,-1,-1,0,0]]},{name:"bridge",chords:["Bm","G","Bm","A"],lead:"voice",melody:[[71,-1,-1,-1,69,-1,-1,-1],[67,-1,-1,-1,66,-1,-1,-1],[71,-1,-1,-1,74,-1,-1,-1],[73,-1,-1,-1,-1,-1,0,0]]},{name:"chorus",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",transpose:0,melody:[[74,-1,-1,73,74,-1,76,-1],[73,-1,69,-1,-1,0,69,71],[74,-1,-1,73,74,-1,78,-1],[76,-1,-1,-1,74,-1,0,0],[74,-1,-1,73,74,-1,76,78],[79,-1,78,-1,76,-1,73,-1],[74,-1,76,-1,78,-1,76,74],[74,-1,-1,-1,-1,-1,0,0]]}]},Ql=[[71,-1,74,-1,76,-1,74,71],[74,-1,-1,-1,71,-1,69,-1],[69,-1,71,-1,74,-1,76,-1],[73,-1,-1,-1,-1,-1,0,0],[71,-1,74,-1,76,-1,78,76],[74,-1,-1,-1,71,-1,69,-1],[69,-1,71,-1,74,-1,76,-1],[73,-1,76,-1,78,-1,81,-1]],th={bpm:150,sections:[{name:"hiphop",chords:["Bm","G","D","A","Bm","G","D","A"],lead:"synth",melody:Ql},{name:"drop",chords:["Bm","G","D","A","Bm","G","D","A"],lead:"guitar",melody:Ql,transpose:12}]},$v={danger:!1,flying:!1,swimming:!1,lowHealth:!1,piloting:!1},eh=[[76,79,84,79,76,-1,74,72],[74,-1,71,74,79,-1,77,74],[76,72,76,79,81,-1,79,76],[77,-1,76,74,72,-1,0,0]],nh=[[84,-1,84,83,81,-1,79,-1],[79,77,79,-1,83,-1,79,-1],[81,-1,79,76,77,79,81,-1],[79,-1,76,-1,72,-1,0,0]],_u={bpm:124,sections:[{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:eh},{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:nh},{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:eh,transpose:12},{name:"soca",chords:["F","G","C","C"],lead:"pan",melody:nh}]},vu={bpm:76,sections:[{name:"reggae",chords:["Am","Dm","Am","Em"],lead:"melodica",melody:[[69,-1,-1,72,-1,-1,74,-1],[72,-1,69,-1,-1,-1,0,0],[76,-1,-1,74,72,-1,69,-1],[71,-1,-1,-1,0,0,0,0]]},{name:"reggae",chords:["F","G","Am","Am"],lead:"melodica",melody:[[72,-1,74,-1,76,-1,-1,0],[74,-1,76,-1,79,-1,-1,0],[81,-1,-1,79,76,-1,74,-1],[76,-1,-1,-1,-1,-1,0,0]]}]},xu={bpm:140,sections:[{name:"hoodie",chords:["Em","C","G","D"],lead:"synth",melody:[[71,-1,74,71,69,-1,67,-1],[67,-1,-1,64,-1,0,0,0],[71,-1,74,76,78,-1,76,74],[76,-1,-1,74,71,-1,0,0]]},{name:"hoodie",chords:["C","D","Em","Em"],lead:"voice",melody:[[76,-1,76,78,79,-1,78,76],[74,-1,76,-1,78,-1,0,0],[79,-1,78,76,74,-1,71,-1],[71,-1,-1,-1,-1,-1,0,0]]}]},Qr=[js,_u,vu,xu],ih=new Map([[js,1],[_u,2],[vu,2],[xu,2]]);class Qv{constructor(t,e){I(this,"out");I(this,"tone");I(this,"mood",$v);I(this,"energy",0);I(this,"dry");I(this,"wet");I(this,"guitarIn");I(this,"noiseBuf");I(this,"song",js);I(this,"pending",null);I(this,"section",0);I(this,"track",0);I(this,"loopsLeft",1);I(this,"bar",0);I(this,"step",0);I(this,"next",0);this.ctx=t,this.out=t.createGain(),this.out.gain.value=.42,this.tone=t.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=18e3,this.out.connect(this.tone).connect(e),this.dry=t.createGain(),this.dry.connect(this.out),this.wet=t.createGain();const n=t.createConvolver();n.buffer=this.impulse(1.6);const s=t.createGain();s.gain.value=.18,this.wet.connect(n).connect(s).connect(this.out),this.guitarIn=t.createGain();const o=t.createWaveShaper(),r=new Float32Array(1024);for(let h=0;h<r.length;h++){const d=h/(r.length-1)*2-1;r[h]=Math.tanh(d*6)}o.curve=r,o.oversample="4x";const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=3200,a.Q.value=.8;const c=t.createBiquadFilter();c.type="highpass",c.frequency.value=90;const l=t.createGain();l.gain.value=.16,this.guitarIn.connect(o).connect(a).connect(c).connect(l),l.connect(this.dry),l.connect(this.wet),this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate);const u=this.noiseBuf.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1;this.next=t.currentTime+.15}setBattle(t){const e=t?th:Qr[this.track];this.pending=e!==this.song?e:null}setMood(t){this.mood=t;const e=t.swimming?1100:t.lowHealth?4200:18e3;this.tone.frequency.setTargetAtTime(e,this.ctx.currentTime,.25)}duck(t){const e=this.out.gain,n=this.ctx.currentTime;e.cancelScheduledValues(n),e.setTargetAtTime(.12,n,.05),e.setTargetAtTime(.42,n+t,.4)}update(){const t=this.ctx;for(this.next<t.currentTime-.5&&(this.next=t.currentTime+.05);this.next<t.currentTime+.2;)if(this.playStep(this.next),this.next+=60/this.song.bpm/4,++this.step>=16){this.step=0,this.bar++;const e=this.targetEnergy()>this.energy;this.energy=this.targetEnergy();const n=this.song.sections;if(this.pending)this.song=this.pending,this.pending=null,this.section=0,this.bar=0,this.loopsLeft=ih.get(this.song)??1,this.crash(this.next,1);else if(e&&this.song===js&&n[this.section].name!=="chorus")this.section=n.findIndex(s=>s.name==="chorus"),this.bar=0,this.crash(this.next,1);else if(this.bar>=n[this.section].chords.length){this.bar=0;let s=(this.section+1)%n.length;this.energy===0&&n[s].name==="chorus"&&(s=(s+1)%n.length),s<=this.section&&this.song!==th&&--this.loopsLeft<=0&&(this.track=(this.track+1)%Qr.length,this.song=Qr[this.track],this.loopsLeft=ih.get(this.song)??1,s=0,this.crash(this.next,.7)),this.section=s}}}targetEnergy(){return this.mood.danger||this.mood.flying||this.mood.piloting?1:0}playStep(t){const e=this.song.sections[this.section],n=this.step,s=Jv[e.chords[this.bar]],o=n%2===0,r=60/this.song.bpm/4,a=this.bar===e.chords.length-1,c=this.song===js&&this.energy===0;if(o){const u=e.melody[this.bar%e.melody.length],h=n/2,d=u[h];if(d>0){let f=1;for(let p=h+1;p<u.length&&u[p]===-1;p++)f++;const g=d+(e.transpose??0),_=f*r*2;let m=e.lead;(this.mood.piloting||c&&m==="guitar")&&(m="synth"),m==="pan"?this.steelPan(_e(g),t,_):m==="melodica"?this.melodica(_e(g),t,_):m==="voice"?this.voice(_e(g),t,_,e.name==="chorus"||this.mood.flying):m==="guitar"?this.leadGuitar(_e(g),t,_):this.synthLead(_e(g),t,_)}}const l=s.root;if(this.mood.lowHealth&&(n===0||n===2||n===8||n===10)&&this.heartbeat(t,n%8===0?1:.6),this.mood.piloting&&o&&this.blip(_e(l+24+[0,s.third,7,12][n/2%4]),t,r*1.5),this.mood.flying&&!o&&this.hat(t,.3),c){n%4===2&&this.uke(s,t),n%4===0&&this.bass(_e(l-12),t,r*3),(n===0||n===10)&&this.kick(t,.55),(n===4||n===12)&&this.snare(t,.35),o&&this.hat(t,.25),n===0&&this.bar===0&&this.crash(t,.4);return}switch(e.name){case"intro":case"chorus":o&&this.power(l,t,r*1.9,!1),o&&this.bass(_e(l-12),t,r*1.8),n===0&&this.bar===0&&this.crash(t,1),n===0&&this.bar%2===0&&e.name==="chorus"&&this.crash(t,.6),this.punkBeat(t,n,a&&e.name==="intro");break;case"verse":o&&this.power(l,t,r*.7,!0),o&&this.bass(_e(l-12),t,r*1.6),this.punkBeat(t,n,a);break;case"bridge":n===0&&this.power(l,t,r*15,!1),(n===0||n===10)&&this.bass(_e(l-12),t,r*6),n===0&&this.kick(t,1),n===8&&this.snare(t,1),o&&this.hat(t,.5),a&&n>=8&&this.snare(t,.4+(n-8)*.08);break;case"hiphop":(n===2||n===6||n===10||n===14)&&this.uke(s,t),n===0&&this.sub(_e(l-12),t,r*9,0),n===10&&this.sub(_e(l-12),t,r*5,n===10&&this.bar%4===3?7:0),(n===0||n===3||n===10)&&this.kick(t,n===3?.7:1),n===8&&this.clap(t),this.hat(t,n%4===2?.55:.25),a&&n>=12&&this.snare(t,.6);break;case"soca":n%4===0&&this.kick(t,1),(n===4||n===12)&&this.clap(t),(n===7||n===14)&&this.snare(t,.35),this.hat(t,n%2===0?.35:.2),(n===0||n===8)&&this.bass(_e(l-12),t,r*1.5),(n===3||n===11)&&this.bass(_e(l),t,r*1.2),(n===6||n===14)&&this.bass(_e(l-12+7),t,r),n%4===2&&this.uke(s,t),this.energy>0&&o&&this.power(l,t,r*1.6,!0),n===0&&this.bar===0&&this.crash(t,.7);break;case"reggae":n===8&&(this.kick(t,1),this.snare(t,.55)),o&&this.hat(t,n%4===2?.45:.25),(n===4||n===12)&&this.skank(s,t,r*1.2),n===0&&this.bass(_e(l-12),t,r*3),n===6&&this.bass(_e(l-12+7),t,r*2),n===10&&this.bass(_e(l-12),t,r*2),n===14&&this.bass(_e(l-12+s.third),t,r*1.5),this.energy>0&&(n===0||n===4||n===12)&&this.kick(t,.7);break;case"hoodie":(n===2||n===6||n===10||n===14)&&this.uke(s,t),n===0&&this.sub(_e(l-12),t,r*7,0),n===8&&this.sub(_e(l-12),t,r*6,this.bar%4===3?-5:0),(n===0||n===11)&&this.kick(t,1),n===8&&this.clap(t),this.hat(t,n%4===0?.5:.28),n>=13&&this.hat(t+r/2,.22),this.energy>0&&o&&this.power(l,t,r*1.8,!1);break;case"drop":o&&this.power(l,t,r*1.9,!1),o&&this.bass(_e(l-12),t,r*1.6),n%4===2&&this.uke(s,t),n===0&&this.bar%4===0&&this.crash(t,1),this.punkBeat(t,n,a);break}}punkBeat(t,e,n){if(n&&e>=8){this.tom(t,[200,170,140,120,200,170,140,110][e-8],.9),e===15&&this.kick(t,1);return}(e===0||e===6||e===8||e===10)&&this.kick(t,1),(e===4||e===12)&&this.snare(t,1),e%2===0&&this.hat(t,e%4===0?.6:.4)}env(t,e,n,s,o=.06){const r=this.ctx.createGain();return r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(n,t+e),r.gain.setValueAtTime(n,t+Math.max(e,s-o)),r.gain.exponentialRampToValueAtTime(1e-4,t+s+o),r}osc(t,e,n,s,o=0){const r=this.ctx.createOscillator();return r.type=t,r.frequency.value=e,r.detune.value=o,r.start(n),r.stop(n+s+.3),r}vibrato(t,e,n,s){const o=this.ctx.createOscillator();o.frequency.value=5.6;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(e*.008,t+Math.min(.3,n)),o.connect(r);for(const a of s)r.connect(a);o.start(t),o.stop(t+n+.3)}voice(t,e,n,s){const o=this.env(e,.02,.085,n*.92,.07),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2800;const a=this.osc("square",t,e,n,-5),c=this.osc("sawtooth",t,e,n,5),l=[a.frequency,c.frequency];if(a.connect(r),c.connect(r),s){const u=this.osc("square",t*2,e,n),h=this.ctx.createGain();h.gain.value=.3,u.connect(h).connect(r),l.push(u.frequency)}this.vibrato(e,t,n,l),r.connect(o),o.connect(this.dry),o.connect(this.wet)}synthLead(t,e,n){const s=this.env(e,.01,.07,n*.9,.1),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(4500,e),o.frequency.exponentialRampToValueAtTime(1400,e+.25);const r=this.osc("sawtooth",t,e,n,-8),a=this.osc("sawtooth",t,e,n,8);r.connect(o),a.connect(o),this.vibrato(e,t,n,[r.frequency,a.frequency]),o.connect(s),s.connect(this.dry),s.connect(this.wet)}leadGuitar(t,e,n){const s=this.env(e,.005,.5,n*.95,.05),o=this.osc("sawtooth",t,e,n);this.vibrato(e,t,n,[o.frequency]),o.connect(s).connect(this.guitarIn)}power(t,e,n,s){const o=this.env(e,.003,s?.35:.5,n,s?.03:.06),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=s?700:5e3;for(const[a,c]of[[t,-4],[t+7,4],[t+12,0]])this.osc("sawtooth",_e(a),e,n,c).connect(r);r.connect(o).connect(this.guitarIn)}uke(t,e){const n=t.root+24;[n,n+t.third,n+7,n+12].forEach((s,o)=>{const r=e+o*.012,a=this.ctx.createGain();a.gain.setValueAtTime(.05,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.35);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(5e3,r),c.frequency.exponentialRampToValueAtTime(1200,r+.2),this.osc("triangle",_e(s),r,.35).connect(c),this.osc("square",_e(s),r,.12).connect(c),c.connect(a),a.connect(this.dry),a.connect(this.wet)})}bass(t,e,n){const s=this.env(e,.005,.2,n,.04),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=900,this.osc("sawtooth",t,e,n).connect(o),this.osc("sine",t,e,n).connect(o),o.connect(s).connect(this.dry)}sub(t,e,n,s){const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(t*1.9,e),o.frequency.exponentialRampToValueAtTime(t,e+.04),s&&(o.frequency.setValueAtTime(t,e+n*.6),o.frequency.exponentialRampToValueAtTime(t*Math.pow(2,s/12),e+n));const r=this.env(e,.005,.45,n,.1),a=this.ctx.createWaveShaper(),c=new Float32Array(256);for(let l=0;l<256;l++)c[l]=Math.tanh((l/255*2-1)*2);a.curve=c,o.connect(a).connect(r).connect(this.dry),o.start(e),o.stop(e+n+.2)}noise(t,e,n,s,o,r=!1){const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=s;const l=this.ctx.createGain();l.gain.setValueAtTime(o,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(c).connect(l).connect(this.dry),r&&l.connect(this.wet),a.start(t,Math.random()*.5),a.stop(t+e+.02)}kick(t,e){const n=this.ctx.createOscillator();n.frequency.setValueAtTime(160,t),n.frequency.exponentialRampToValueAtTime(45,t+.12);const s=this.ctx.createGain();s.gain.setValueAtTime(.7*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.28),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.3),this.noise(t,.015,"highpass",3e3,.15*e)}snare(t,e){this.noise(t,.18,"highpass",1500,.32*e,!0);const n=this.ctx.createOscillator();n.frequency.setValueAtTime(240,t),n.frequency.exponentialRampToValueAtTime(160,t+.08);const s=this.ctx.createGain();s.gain.setValueAtTime(.2*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.1),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.12)}clap(t){for(let e=0;e<3;e++)this.noise(t+e*.011,.03,"bandpass",1500,.3);this.noise(t+.033,.22,"bandpass",1300,.28,!0)}hat(t,e){this.noise(t,.035,"highpass",8e3,.11*e)}crash(t,e){this.noise(t,1.4,"highpass",5e3,.16*e,!0)}tom(t,e,n){const s=this.ctx.createOscillator();s.frequency.setValueAtTime(e,t),s.frequency.exponentialRampToValueAtTime(e*.6,t+.2);const o=this.ctx.createGain();o.gain.setValueAtTime(.45*n,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.25),s.connect(o).connect(this.dry),s.start(t),s.stop(t+.28)}steelPan(t,e,n){const s=Math.min(1.2,n*1.4+.2);for(const[o,r]of[[1,.09],[2,.04],[3.01,.018],[4.2,.008]]){const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(r,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+s/o),this.osc("sine",t*o,e,s).connect(a),a.connect(this.dry),a.connect(this.wet)}}melodica(t,e,n){const s=this.env(e,.05,.06,n*.95,.12),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=1900;const r=this.osc("square",t,e,n,-6),a=this.osc("sawtooth",t,e,n,6);r.connect(o),a.connect(o),this.vibrato(e,t,n,[r.frequency,a.frequency]),o.connect(s),s.connect(this.dry),s.connect(this.wet)}skank(t,e,n){const s=t.root+12,o=this.env(e,.003,.05,n*.6,.03),r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=700;for(const a of[s,s+t.third,s+7,s+12])this.osc("square",_e(a),e,n).connect(r);r.connect(o),o.connect(this.dry),o.connect(this.wet)}heartbeat(t,e){const n=this.ctx.createOscillator();n.frequency.setValueAtTime(75,t),n.frequency.exponentialRampToValueAtTime(38,t+.14);const s=this.ctx.createGain();s.gain.setValueAtTime(.55*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.2),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.22)}blip(t,e,n){const s=this.env(e,.003,.035,n*.6,.03);this.osc("square",t,e,n).connect(s),s.connect(this.dry),s.connect(this.wet)}impulse(t){const e=this.ctx.sampleRate,n=this.ctx.createBuffer(2,Math.floor(e*t),e);for(let s=0;s<2;s++){const o=n.getChannelData(s);for(let r=0;r<o.length;r++)o[r]=(Math.random()*2-1)*Math.pow(1-r/o.length,3)}return n}}const sh=.5,Fs=i=>440*Math.pow(2,(i-69)/12);class tx{constructor(){I(this,"ctx",null);I(this,"master");I(this,"music",null);I(this,"battle",!1);I(this,"muted",!1);I(this,"jetGain",null);I(this,"engine",null)}start(){if(this.ctx){this.ctx.resume();return}this.ctx=new AudioContext;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=sh,this.master.connect(t),this.music=new Qv(this.ctx,this.master),this.music.setBattle(this.battle);const e=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=e,s.loop=!0;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=700,this.jetGain=this.ctx.createGain(),this.jetGain.gain.value=0,s.connect(o).connect(this.jetGain).connect(this.master),s.start()}setEngine(t,e=0){const n=this.ctx;if(!n)return;const s=n.currentTime;if(!t){if(this.engine){const a=this.engine;a.gain.gain.setTargetAtTime(0,s,.08);for(const c of a.oscs)c.stop(s+.6);this.engine=null}return}if(!this.engine||this.engine.kind!==t){this.setEngine(null);const a=n.createGain();a.gain.value=0;const c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;const l=[n.createOscillator(),n.createOscillator(),n.createOscillator()];l[0].type="sawtooth",l[1].type="square",l[2].type="sawtooth";for(const u of l)u.connect(c),u.start();c.connect(a).connect(this.master),this.engine={oscs:l,gain:a,filter:c,kind:t}}const o=this.engine,r=t==="boat"?48+e*70:85+e*190;o.oscs[0].frequency.setTargetAtTime(r,s,.08),o.oscs[1].frequency.setTargetAtTime(r*.5*1.01,s,.08),o.oscs[2].frequency.setTargetAtTime(r*2.02,s,.08),o.filter.frequency.setTargetAtTime((t==="boat"?380:700)+e*1600,s,.1),o.gain.gain.setTargetAtTime(.05+e*.07,s,.1)}setJet(t){!this.ctx||!this.jetGain||this.jetGain.gain.setTargetAtTime(t?.35:0,this.ctx.currentTime,.06)}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:sh)}setBattle(t){var e;this.battle=t,(e=this.music)==null||e.setBattle(t)}setMood(t){var e;(e=this.music)==null||e.setMood(t)}update(){var t;(t=this.music)==null||t.update()}play(t){var s;const e=this.ctx;if(!e)return;const n=e.currentTime;switch(t){case"roar":this.sweep(160,70,n,.9,"sawtooth",.28),this.sweep(240,90,n+.02,.8,"square",.08),this.noise(n,.9,700,.35);break;case"growl":this.sweep(110,80,n,.45,"sawtooth",.16),this.noise(n,.4,400,.18);break;case"stepGrass":this.noise(n,.05,900+Math.random()*400,.1);break;case"stepSand":this.noise(n,.08,2200+Math.random()*800,.06);break;case"stepWood":this.tone(140+Math.random()*30,n,.07,"triangle",.14),this.noise(n,.03,3e3,.05);break;case"laser":this.sweep(1400,260,n,.16,"square",.12);break;case"hack":[76,83,88,95,100].forEach((o,r)=>this.tone(Fs(o),n+r*.06,.08,"square",.12));break;case"swing":this.noise(n,.12,2400,.25);break;case"hit":this.tone(220,n,.08,"square",.3),this.noise(n,.1,900,.4);break;case"hurt":this.sweep(600,180,n,.25,"sawtooth",.3);break;case"jump":this.sweep(300,620,n,.12,"triangle",.2);break;case"poof":this.noise(n,.35,500,.5),this.sweep(400,80,n,.3,"triangle",.3);break;case"splash":this.noise(n,.4,1400,.3);break;case"slam":this.sweep(120,40,n,.5,"sine",.7),this.noise(n,.5,300,.5);break;case"lock":this.tone(Fs(88),n,.06,"square",.12),this.tone(Fs(93),n+.06,.08,"square",.12);break;case"pickup":[81,85,88,93].forEach((o,r)=>this.tone(Fs(o),n+r*.07,.12,"square",.15));break;case"horn":this.sweep(330,320,n,.5,"square",.12),this.sweep(415,405,n,.5,"square",.08);break;case"bump":this.sweep(120,50,n,.25,"triangle",.3);break;case"fanfare":(s=this.music)==null||s.duck(1.6),[[74,0],[78,.15],[81,.3],[86,.45],[86,.75]].forEach(([o,r])=>this.tone(Fs(o),n+r,r>.6?.8:.14,"square",.18));break}}tone(t,e,n,s,o,r){const a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=s,c.frequency.value=t,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(o,e+.01),l.gain.exponentialRampToValueAtTime(.001,e+n),c.connect(l).connect(r??this.master),c.start(e),c.stop(e+n+.02)}sweep(t,e,n,s,o,r){const a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=o,c.frequency.setValueAtTime(t,n),c.frequency.exponentialRampToValueAtTime(e,n+s),l.gain.setValueAtTime(r,n),l.gain.exponentialRampToValueAtTime(.001,n+s),c.connect(l).connect(this.master),c.start(n),c.stop(n+s+.02)}noise(t,e,n,s){const o=this.ctx,r=o.createBuffer(1,Math.ceil(o.sampleRate*e),o.sampleRate),a=r.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;const c=o.createBufferSource();c.buffer=r;const l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const u=o.createGain();u.gain.setValueAtTime(s,t),u.gain.exponentialRampToValueAtTime(.001,t+e),c.connect(l).connect(u).connect(this.master),c.start(t)}}const es=i=>document.getElementById(i);class ex{constructor(){I(this,"hearts",es("hearts"));I(this,"status",es("status"));I(this,"boss",es("boss"));I(this,"bossName",es("boss-name"));I(this,"bossFill",es("boss-fill"));I(this,"toastEl",es("toast"));I(this,"toastTimer",0);I(this,"lastHearts","")}setHealth(t,e){const n=`${t}/${e}`;if(n!==this.lastHearts){this.lastHearts=n,this.hearts.innerHTML="";for(let s=0;s<e/2;s++){const o=Math.max(0,Math.min(2,t-s*2)),r=document.createElement("div");r.className="heart",r.innerHTML=`<span class="bg">♥</span><span class="fg" style="width:${o*50}%">♥</span>`,this.hearts.appendChild(r)}}}setRelics(t,e){this.status.textContent=t===e?"All relics found!":`Relics ${t} / ${e}`}setBoss(t,e=1){this.boss.classList.toggle("hidden",t===null),t&&(this.bossName.textContent=t,this.bossFill.style.width=`${Math.max(0,e)*100}%`)}toast(t,e=2.2){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastTimer=e}update(t){this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&this.toastEl.classList.remove("show"))}}function ta(i){return"hackProgress"in i}let ea=null;function yu(){if(!ea){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.font="900 56px Trebuchet MS, sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="#14202a",e.strokeText("!",32,34),e.fillStyle="#ffd23f",e.fillText("!",32,34),ea=new Zh(t)}const i=new a_(new Yh({map:ea,depthTest:!1}));return i.scale.setScalar(.9),i.visible=!1,i.renderOrder=10,i}class Ac{constructor(){I(this,"group",new Ut);I(this,"position",new A);I(this,"velocity",new A);I(this,"alive",!0);I(this,"targetHeight",1.5);I(this,"flash",0);I(this,"materials",[])}collectMaterials(){this.group.traverse(t=>{const e=t.material;e instanceof su&&this.materials.push(e)})}takeHit(t,e){if(!this.alive||!this.vulnerable())return e.particles.sparks(this.position.clone().setY(this.position.y+1.2)),e.audio.play("hit"),!1;this.hp--,this.flash=.18;const n=this.position.clone().sub(t).setY(0).normalize().multiplyScalar(this.knockback());return this.velocity.add(n).setY(4),e.particles.sparks(this.position.clone().setY(this.position.y+1)),e.audio.play("hit"),this.onHurt(),this.hp<=0&&(this.alive=!1,this.group.visible=!1,e.particles.poof(this.position.clone().setY(this.position.y+.8),this.poofColor()),e.audio.play("poof")),!0}onHurt(){}get hostile(){return!0}get engaged(){return!1}vulnerable(){return!0}knockback(){return 8}poofColor(){return 9067224}updateFlash(t){this.flash=Math.max(0,this.flash-t);const e=this.flash>0;for(const n of this.materials)n.emissive.setHex(e?16777215:0)}}const zs=16726843,oh=3924223,nx=16765503,Ho=3.2;class ix extends Ac{constructor(e,n,s){super();I(this,"name","Sentry Drone");I(this,"radius",.8);I(this,"hp",2);I(this,"targetHeight",.6);I(this,"hacked",!1);I(this,"controlled",!1);I(this,"beingHacked",!1);I(this,"hackProgress",0);I(this,"hackSeconds",1.4);I(this,"pilotKind","drone");I(this,"camOffset",-.6);I(this,"facing",0);I(this,"state","patrol");I(this,"stateTime",0);I(this,"home");I(this,"patrolAngle",Math.random()*Math.PI*2);I(this,"orbit",Math.random()*Math.PI*2);I(this,"fireTimer",1+Math.random());I(this,"attacks",0);I(this,"contactCooldown",0);I(this,"allyTarget",null);I(this,"retarget",0);I(this,"rotors",[]);I(this,"lensMat",new Se({color:zs}));I(this,"stripeMat",new Se({color:zs}));I(this,"mark",yu());I(this,"light",new hr(zs,3,5));this.position.set(e,Math.max(s(e,n),0)+Ho,n),this.home=this.position.clone();const o=z(new at(1,.3,.8),3883600,.05);this.group.add(o);const r=z(new be(.36,14,8,0,Math.PI*2,0,Math.PI/2),15133167,.05);r.position.y=.14,this.group.add(r);const a=new Xt(new at(1.03,.06,.83),this.stripeMat);this.group.add(a);const c=z(new be(.17,12,8),1316637,.06);c.position.set(0,-.06,.4),this.group.add(c);const l=new Xt(new be(.085,10,8),this.lensMat);l.position.set(0,-.06,.55),this.group.add(l),this.light.position.set(0,-.06,.7),this.group.add(this.light);const u=new Se({color:16777215,transparent:!0,opacity:.16,depthWrite:!1});for(const[h,d]of[[.62,.5],[-.62,.5],[.62,-.5],[-.62,-.5]]){const f=z(new at(.08,.06,Math.hypot(h,d)),2830138,.1);f.position.set(h/2,.05,d/2),f.rotation.y=Math.atan2(h,d),this.group.add(f);const g=z(new Jt(.09,.09,.14,10),2830138,.08);g.position.set(h,.1,d),this.group.add(g);const _=new Ut;_.position.set(h,.2,d);for(const m of[0,Math.PI/2]){const p=z(new at(.7,.02,.07),14278115,0);p.rotation.y=m,_.add(p)}_.add(new Xt(new Jt(.37,.37,.01,18),u)),this.group.add(_),this.rotors.push(_)}for(const h of[-1,1]){const d=z(new at(.05,.05,.7),2830138,.1);d.position.set(h*.32,-.3,0),this.group.add(d)}this.mark.position.y=1.1,this.group.add(this.mark),this.collectMaterials(),this.group.position.copy(this.position)}get hostile(){return!this.hacked}get engaged(){return this.alive&&!this.hacked&&this.state!=="patrol"}poofColor(){return 3883600}setColor(e){this.lensMat.color.setHex(e),this.stripeMat.color.setHex(e),this.light.color.setHex(e)}enter(e){this.state=e,this.stateTime=0}moveTo(e,n,s){const o=e.clone().sub(this.position),r=o.length(),a=r>.01?o.multiplyScalar(Math.min(n,r*2)/r):o;this.velocity.x=ot.damp(this.velocity.x,a.x,3,s),this.velocity.y=ot.damp(this.velocity.y,a.y,3,s),this.velocity.z=ot.damp(this.velocity.z,a.z,3,s)}faceTowards(e,n,s){const o=Math.atan2(e.x-this.position.x,e.z-this.position.z),r=Math.atan2(Math.sin(o-this.facing),Math.cos(o-this.facing));this.facing+=ot.clamp(r,-n*s,n*s)}fire(e,n){const s=this.position.clone().add(new A(Math.sin(this.facing),-.1,Math.cos(this.facing)).multiplyScalar(.7));e.fireBolt(s,n.clone().normalize(),this.hacked)}pilot(e,n,s,o){const r=n.fast?18:10;this.velocity.x=ot.damp(this.velocity.x,n.move.x*r,4,e),this.velocity.z=ot.damp(this.velocity.z,n.move.z*r,4,e),this.velocity.y=ot.damp(this.velocity.y,n.vertical*7,4,e),this.position.addScaledVector(this.velocity,e);const a=Math.max(o(this.position.x,this.position.z),0);this.position.y=ot.clamp(this.position.y,a+.8,a+40),this.facing=n.yaw,n.fire&&this.fire(s,n.aim)}update(e,n,s){if(!this.alive)return;this.updateFlash(e),this.stateTime+=e,this.contactCooldown=Math.max(0,this.contactCooldown-e);for(const c of this.rotors)c.rotation.y+=e*45;const o=Math.max(s(this.position.x,this.position.z),0),r=n.playerPos.clone().setY(n.playerPos.y+1.2),a=r.clone().setY(0).distanceTo(this.position.clone().setY(0));if(this.controlled){this.setColor(oh),this.sync(n.time);return}if(this.beingHacked){this.setColor(Math.sin(n.time*30)>0?nx:zs),this.velocity.multiplyScalar(1-Math.min(1,e*5)),this.position.addScaledVector(this.velocity,e),this.mark.visible=!1,this.sync(n.time,.06);return}if(this.hacked){this.updateAlly(e,n,o),this.sync(n.time);return}switch(this.hackProgress=Math.max(0,this.hackProgress-e*.5),this.setColor(this.state==="charge"&&Math.sin(n.time*40)>0?16777215:zs),this.state){case"patrol":{this.patrolAngle+=e*.45;const c=this.home.clone().add(new A(Math.cos(this.patrolAngle)*6,0,Math.sin(this.patrolAngle)*6));c.y=Math.max(s(c.x,c.z),0)+Ho,this.moveTo(c,3,e),this.faceTowards(this.position.clone().add(this.velocity),3,e),a<16&&(this.enter("alert"),n.audio.play("lock"));break}case"alert":this.faceTowards(r,8,e),this.velocity.multiplyScalar(1-Math.min(1,e*4)),this.stateTime>.7&&this.enter("attack");break;case"attack":{this.orbit+=e*.5;const c=new A(Math.cos(this.orbit),0,Math.sin(this.orbit)).multiplyScalar(8),l=r.clone().add(c);l.y=Math.max(s(l.x,l.z),0)+Ho+.4,this.moveTo(l,6,e),this.faceTowards(r,5,e),this.fireTimer-=e,this.fireTimer<=0&&(this.attacks++,this.enter(this.attacks%3===0?"swoop":"charge")),a>30&&this.enter("patrol");break}case"charge":this.faceTowards(r,6,e),this.velocity.multiplyScalar(1-Math.min(1,e*5)),this.stateTime>.55&&(this.fire(n,r.clone().sub(this.position)),this.fireTimer=1.5+Math.random()*.8,this.enter("attack"));break;case"swoop":{this.faceTowards(r,6,e),this.stateTime<.8?this.moveTo(r,11,e):this.moveTo(this.position.clone().setY(o+Ho),4,e),this.contactCooldown<=0&&this.position.distanceTo(r)<1.3&&(n.hurtPlayer(this.position,1),this.contactCooldown=1.2),this.stateTime>1.6&&(this.fireTimer=1.2,this.enter("attack"));break}}this.mark.visible=this.state==="alert",this.mark.position.y=1.1+Math.min(.3,this.stateTime*1.5),this.position.addScaledVector(this.velocity,e),this.position.y=Math.max(this.position.y,o+.9),this.sync(n.time)}updateAlly(e,n,s){this.setColor(oh),this.mark.visible=!1;const o=n.playerFacing,r=new A(Math.cos(o),0,-Math.sin(o)),a=new A(-Math.sin(o),0,-Math.cos(o)),c=n.playerPos.clone().addScaledVector(r,2).addScaledVector(a,1.2);if(c.y=Math.max(n.playerPos.y,s)+3.4,this.moveTo(c,12,e),this.retarget-=e,this.retarget<=0||this.allyTarget&&!this.allyTarget.alive){this.retarget=.5,this.allyTarget=null;let l=16;for(const u of n.enemies){if(!u.alive||!u.hostile)continue;const h=u.position.distanceTo(this.position);h<l&&(l=h,this.allyTarget=u)}}if(this.allyTarget){const l=this.allyTarget.position.clone().setY(this.allyTarget.position.y+this.allyTarget.targetHeight*.5);this.faceTowards(l,6,e),this.fireTimer-=e,this.fireTimer<=0&&(this.fire(n,l.sub(this.position)),this.fireTimer=1.1)}else this.faceTowards(this.position.clone().add(this.velocity).add(a.clone().multiplyScalar(-.01)),3,e);this.position.addScaledVector(this.velocity,e)}sync(e,n=0){this.group.position.copy(this.position),this.group.position.y+=Math.sin(e*3+this.home.x)*.08,n&&this.group.position.add(new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(n)),this.group.rotation.order="YXZ",this.group.rotation.y=this.facing;const s=new A(Math.sin(this.facing),0,Math.cos(this.facing)),o=new A(Math.cos(this.facing),0,-Math.sin(this.facing));this.group.rotation.x=ot.clamp(this.velocity.dot(s)*.05,-.45,.45),this.group.rotation.z=ot.clamp(-this.velocity.dot(o)*.05,-.45,.45)}}const na=16726843,Os=3924223,rh=16765503,sx=24,ox={gorilla:{name:"Cyber Gorilla",hp:6,radius:1.3,targetHeight:2.8,walk:2.4,run:7.5,hackSeconds:2.8,camOffset:.8,metal:3817291,plate:5857651,accent:10181887,scale:1},tiger:{name:"Cyber Tiger",hp:3,radius:1,targetHeight:1.6,walk:3,run:11,hackSeconds:2,camOffset:0,metal:2830138,plate:14709802,accent:16751135,scale:1.1},lion:{name:"Cyber Lion",hp:4,radius:1.1,targetHeight:1.8,walk:2.8,run:9.5,hackSeconds:2.2,camOffset:.2,metal:9071150,plate:13214282,accent:16765503,scale:1.15}};class rx extends Ac{constructor(e,n,s,o){super();I(this,"name");I(this,"radius");I(this,"hp");I(this,"hacked",!1);I(this,"controlled",!1);I(this,"beingHacked",!1);I(this,"hackProgress",0);I(this,"hackSeconds");I(this,"pilotKind","beast");I(this,"camOffset");I(this,"facing",Math.random()*Math.PI*2);I(this,"state","patrol");I(this,"spec");I(this,"stateTime",0);I(this,"home");I(this,"wander",new A);I(this,"wanderTimer",0);I(this,"attack","pounce");I(this,"hitDone",!1);I(this,"grounded",!0);I(this,"gaitPhase",Math.random()*6);I(this,"orbit",Math.random()*Math.PI*2);I(this,"stalkFor",2);I(this,"cooldown",0);I(this,"slamPose",0);I(this,"allyTarget",null);I(this,"retarget",0);I(this,"body",new Ut);I(this,"head",new Ut);I(this,"jaw",null);I(this,"limbs",[]);I(this,"arms",[]);I(this,"tail",[]);I(this,"eyeMat",new Se({color:na}));I(this,"accentMat");I(this,"mark",yu());this.kind=e;const r=ox[e];this.spec=r,this.name=r.name,this.hp=r.hp,this.radius=r.radius,this.targetHeight=r.targetHeight,this.hackSeconds=r.hackSeconds,this.camOffset=r.camOffset,this.accentMat=new Se({color:r.accent}),this.position.set(n,o(n,s),s),this.home=this.position.clone(),this.wander.copy(this.home),this.group.add(this.body),e==="gorilla"?this.buildGorilla():this.buildCat(e==="lion"),this.group.scale.setScalar(r.scale),this.mark.position.y=r.targetHeight/r.scale+.7,this.group.add(this.mark),this.collectMaterials(),this.sync(0,0)}get hostile(){return!this.hacked}get engaged(){return this.alive&&!this.hacked&&this.state!=="patrol"}poofColor(){return this.spec.metal}knockback(){return this.kind==="gorilla"?3:7}buildCat(e){const n=this.spec,s=z(new qe(.42,1.25,4,10),n.metal,.05);s.rotation.x=Math.PI/2,s.position.y=1.05,this.body.add(s);for(let u=0;u<4;u++){const h=z(new at(.62,.12,.34),n.plate,.04);h.position.set(0,1.47,-.55+u*.38),this.body.add(h)}for(const u of[-1,1]){const h=new Xt(new at(.03,.08,1.3),this.accentMat);if(h.position.set(u*.43,1.05,0),this.body.add(h),!e)for(let d=0;d<4;d++){const f=new Xt(new at(.03,.42,.07),this.accentMat);f.position.set(u*.425,1.12,-.6+d*.36),f.rotation.x=.3,this.body.add(f)}}this.head.position.set(0,1.32,1.02),this.body.add(this.head);const o=z(new at(.55,.48,.55),n.metal,.05);this.head.add(o);const r=z(new at(.34,.24,.32),n.plate,.04);r.position.set(0,-.08,.36),this.head.add(r);const a=z(new at(.3,.08,.32),1842982,.04);a.position.set(0,-.24,.3),this.head.add(a),this.jaw=a;for(const u of[-1,1]){const h=z(new Ue(.1,.24,4),n.plate,.05);h.position.set(u*.19,.32,-.06),this.head.add(h);const d=new Xt(new be(.06,8,6),this.eyeMat);d.position.set(u*.15,.07,.28),this.head.add(d)}if(e)for(let u=0;u<14;u++){const h=u/14*Math.PI*2,d=z(new Ue(.14,.62,5),11043119,.04);d.position.set(Math.cos(h)*.42,Math.sin(h)*.42,-.14),d.rotation.z=h-Math.PI/2,d.rotation.x=-.3,this.head.add(d)}let c=this.body;const l=new Ut;l.position.set(0,1.25,-.85),l.rotation.x=.6;for(let u=0;u<5;u++){const h=u===0?l:new Ut;u>0&&(h.position.z=-.28);const d=z(new at(.09,.09,.28),u%2?n.plate:n.metal,.06);d.position.z=-.14,h.add(d),c.add(h),this.tail.push(h),c=h}if(e){const u=z(new be(.13,6,5),11043119,.04);u.position.z=-.3,c.add(u)}for(const u of[!0,!1])for(const h of[-1,1]){const d=new Ut;d.position.set(h*.3,1,u?.62:-.6);const f=z(new at(.18,.55,.2),n.metal,.05);f.position.y=-.27,d.add(f);const g=new Ut;g.position.y=-.52,d.add(g);const _=z(new at(.13,.45,.15),n.plate,.05);_.position.y=-.22,g.add(_);const m=z(new at(.2,.08,.26),1842982,.05);m.position.set(0,-.46,.05),g.add(m),this.body.add(d),this.limbs.push({hip:d,knee:g,front:u,side:h})}}buildGorilla(){const e=this.spec,n=z(new be(.85,14,10),e.metal,.05);n.scale.set(1.25,1.05,.9),n.position.set(0,1.85,.1),this.body.add(n);const s=z(new at(1.1,.8,.3),e.plate,.04);s.position.set(0,1.95,.75),this.body.add(s);const o=new Xt(new be(.18,10,8),this.accentMat);o.position.set(0,2,.92),this.body.add(o),this.head.position.set(0,2.75,.65),this.body.add(this.head);const r=z(new be(.42,12,8),e.metal,.05);r.scale.set(1,.9,1),this.head.add(r);const a=z(new at(.72,.14,.2),e.plate,.04);a.position.set(0,.14,.32),this.head.add(a);const c=new Xt(new at(.52,.08,.05),this.eyeMat);c.position.set(0,.02,.4),this.head.add(c);const l=z(new at(.42,.24,.25),e.plate,.04);l.position.set(0,-.18,.3),this.head.add(l),this.jaw=l;for(const u of[-1,1]){const h=new Ut;h.position.set(u*1,2.35,.25);const d=z(new qe(.22,.65,4,8),e.metal,.05);d.position.y=-.42,h.add(d);const f=new Ut;f.position.y=-.85,h.add(f);const g=z(new qe(.28,.65,4,8),e.plate,.05);g.position.y=-.45,f.add(g);const _=z(new at(.5,.42,.5),e.metal,.05);_.position.y=-.95,f.add(_);const m=new Xt(new at(.52,.06,.1),this.accentMat);m.position.set(0,-.95,.26),f.add(m),this.body.add(h),this.arms.push({shoulder:h,elbow:f,side:u});const p=new Ut;p.position.set(u*.45,.9,-.1);const S=z(new at(.34,.5,.36),e.metal,.05);S.position.y=-.24,p.add(S);const x=new Ut;x.position.y=-.48,p.add(x);const v=z(new at(.3,.42,.32),e.plate,.05);v.position.y=-.2,x.add(v);const D=z(new at(.4,.12,.5),1842982,.05);D.position.set(0,-.42,.1),x.add(D),this.body.add(p),this.limbs.push({hip:p,knee:x,front:!1,side:u})}}enter(e){this.state=e,this.stateTime=0}setGlow(e,n){this.eyeMat.color.setHex(e),this.accentMat.color.setHex(n)}steer(e,n,s){const o=this.grounded?5:.6;this.velocity.x=ot.damp(this.velocity.x,e.x*n,o,s),this.velocity.z=ot.damp(this.velocity.z,e.z*n,o,s)}brake(e,n=5){this.grounded&&(this.velocity.x=ot.damp(this.velocity.x,0,n,e),this.velocity.z=ot.damp(this.velocity.z,0,n,e))}face(e,n,s){const o=Math.atan2(e.x-this.position.x,e.z-this.position.z),r=Math.atan2(Math.sin(o-this.facing),Math.cos(o-this.facing));this.facing+=ot.clamp(r,-n*s,n*s)}physics(e,n){const s=this.position.x,o=this.position.z;this.velocity.y-=sx*e,this.position.addScaledVector(this.velocity,e),n(this.position.x,this.position.z)<-.2&&(this.position.x=s,this.position.z=o,this.velocity.x*=-.2,this.velocity.z*=-.2);const r=n(this.position.x,this.position.z);this.position.y<=r||this.grounded&&this.velocity.y<=0&&this.position.y-r<.6?(this.position.y=r,this.velocity.y<0&&(this.velocity.y=0),this.grounded=!0):this.grounded=!1}update(e,n,s){if(!this.alive)return;if(this.updateFlash(e),this.stateTime+=e,this.cooldown=Math.max(0,this.cooldown-e),this.slamPose=Math.max(0,this.slamPose-e),this.controlled){this.setGlow(Os,Os),this.mark.visible=!1,this.sync(e,n.time);return}if(this.beingHacked){const h=Math.sin(n.time*30)>0;this.setGlow(h?rh:na,h?rh:this.spec.accent),this.brake(e,6),this.physics(e,s),this.mark.visible=!1,this.sync(e,n.time,.05);return}if(this.hacked){this.setGlow(Os,Os),this.mark.visible=!1,this.updateAlly(e,n,s),this.physics(e,s),this.sync(e,n.time);return}this.hackProgress=Math.max(0,this.hackProgress-e*.4);const o=this.state==="windup"&&Math.sin(n.time*36)>0;this.setGlow(o?16777215:na,o?16777215:this.spec.accent);const r=n.playerPos,a=r.clone().sub(this.position).setY(0),c=a.length(),l=c>.01?a.clone().divideScalar(c):new A(0,0,1),u=c<20&&Math.abs(r.y-this.position.y)<7;switch(this.state){case"patrol":{this.wanderTimer-=e;const h=this.wander.clone().sub(this.position).setY(0);if(this.wanderTimer<=0||h.length()<1){const d=Math.random()*Math.PI*2,f=3+Math.random()*9,g=this.home.x+Math.cos(d)*f,_=this.home.z+Math.sin(d)*f;s(g,_)>.6&&this.wander.set(g,0,_),this.wanderTimer=3+Math.random()*4}h.length()>1?(this.steer(h.normalize(),this.spec.walk,e),this.face(this.wander,2.5,e)):this.brake(e),u&&(this.enter("alert"),n.audio.play(this.kind==="lion"?"roar":"growl"));break}case"alert":{this.brake(e),this.face(r,7,e),this.stateTime>(this.kind==="gorilla"?1.3:.7)&&(this.enter(this.kind==="tiger"?"stalk":"chase"),this.stalkFor=1.4+Math.random()*1.4);break}case"stalk":{this.orbit+=e*.6;const d=r.clone().add(new A(Math.cos(this.orbit),0,Math.sin(this.orbit)).multiplyScalar(7.5)).sub(this.position).setY(0);this.steer(d.length()>.5?d.normalize():d,4.2,e),this.face(r,5,e),this.stateTime>this.stalkFor&&this.cooldown<=0&&this.beginAttack("pounce",n),c>34&&this.enter("patrol");break}case"chase":{this.steer(l,this.spec.run,e),this.face(r,6,e);const h=this.kind==="gorilla"?3.8:6.5;c<h&&this.cooldown<=0&&this.beginAttack(this.kind==="gorilla"?"slam":Math.random()<.5?"roar":"pounce",n),c>34&&this.enter("patrol");break}case"windup":{this.brake(e,7),this.face(r,6,e);const h=this.attack==="pounce"?.55:.75;this.stateTime>=h&&this.release(n,c,l);break}case"leap":{const h=r.clone().setY(r.y+1.1),d=this.position.clone().setY(this.position.y+this.spec.targetHeight*.5);!this.hitDone&&d.distanceTo(h)<this.radius+.9&&(n.hurtPlayer(this.position,1),this.hitDone=!0),this.grounded&&this.stateTime>.15&&this.enter("recover");break}case"recover":{this.brake(e,4);const h=this.kind==="gorilla"?1.3:this.kind==="lion"?1:.9;this.stateTime>h&&(this.cooldown=1.2,this.enter(this.kind==="tiger"?"stalk":"chase"),this.stalkFor=1.4+Math.random()*1.4);break}}this.mark.visible=this.state==="alert",this.physics(e,s),this.sync(e,n.time)}beginAttack(e,n){this.attack=e,this.enter("windup"),e==="pounce"&&n.audio.play("growl")}release(e,n,s){if(this.attack==="pounce"){this.velocity.set(s.x,0,s.z).multiplyScalar(Math.min(14,4+n*1.5)),this.velocity.y=6.5,this.grounded=!1,this.hitDone=!1,this.enter("leap");return}const o=new A(Math.sin(this.facing),0,Math.cos(this.facing)),r=this.position.clone().setY(this.position.y+.3);this.attack==="roar"?(e.audio.play("roar"),e.shake(.35),e.particles.emit(r.clone().addScaledVector(o,1.5).setY(r.y+1),14,{color:this.spec.accent,speed:7,up:.5,size:.2,life:.45,grow:2}),n<7&&o.dot(s)>.4&&e.hurtPlayer(this.position,1)):(this.slamPose=.35,e.audio.play("slam"),e.shake(.6),e.particles.dust(r),e.particles.emit(r,18,{color:14209720,speed:7,up:1,size:.35,life:.6,grow:2}),n<5.5&&e.playerGrounded&&e.hurtPlayer(this.position,2)),this.enter("recover")}updateAlly(e,n,s){if(this.retarget-=e,this.retarget<=0||this.allyTarget&&(!this.allyTarget.alive||!this.allyTarget.hostile)){this.retarget=.5,this.allyTarget=null;let d=16;for(const f of n.enemies){if(!f.alive||!f.hostile)continue;const g=f.position.distanceTo(this.position);g<d&&(d=g,this.allyTarget=f)}}const o=n.playerPos;if(this.allyTarget){const d=this.allyTarget,f=d.position.clone().sub(this.position).setY(0),g=f.length();this.face(d.position,7,e),g>this.radius+d.radius+.6?this.steer(f.normalize(),this.spec.run,e):this.brake(e),g<this.radius+d.radius+1.2&&this.cooldown<=0&&(this.cooldown=this.kind==="gorilla"?1.3:1,this.meleeLunge(n,f.normalize()),n.strike(d,this.position));return}const r=n.playerFacing,a=new A(Math.cos(r),0,-Math.sin(r)),c=new A(-Math.sin(r),0,-Math.cos(r)),u=o.clone().addScaledVector(a,-3).addScaledVector(c,2).sub(this.position).setY(0),h=u.length();if(h>60){const d=o.clone().addScaledVector(c,4);s(d.x,d.z)>.2?this.position.set(d.x,s(d.x,d.z),d.z):this.brake(e);return}h>1.5?(this.steer(u.normalize(),h>8?this.spec.run:this.spec.walk*1.4,e),this.face(this.position.clone().add(this.velocity),6,e)):this.brake(e)}meleeLunge(e,n){this.kind==="gorilla"?(this.slamPose=.35,e.audio.play("slam"),e.shake(.2),e.particles.dust(this.position.clone().setY(this.position.y+.2))):(this.velocity.x+=n.x*5,this.velocity.z+=n.z*5,this.grounded&&(this.velocity.y=3.5,this.grounded=!1),e.audio.play("growl"))}pilot(e,n,s,o){const r=n.fast?this.spec.run*1.15:this.spec.run*.7;if(this.steer(n.move,r*Math.min(1,n.move.length()),e),n.move.lengthSq()>.01&&this.face(this.position.clone().add(n.move),9,e),n.jump&&this.grounded&&(this.velocity.y=this.kind==="gorilla"?9:11,this.grounded=!1,s.audio.play("jump")),n.fire&&this.cooldown<=0){this.cooldown=this.kind==="gorilla"?.9:.55;const a=new A(Math.sin(this.facing),0,Math.cos(this.facing));this.meleeLunge(s,a);const c=this.kind==="gorilla"?5.5:this.kind==="lion"?6.5:3.2;this.kind==="lion"&&(s.audio.play("roar"),s.particles.emit(this.position.clone().addScaledVector(a,1.5).setY(this.position.y+1.2),14,{color:Os,speed:7,up:.5,size:.2,life:.45,grow:2}));for(const l of s.enemies){if(!l.alive||!l.hostile)continue;const u=l.position.clone().sub(this.position).setY(0);u.length()>c+l.radius||this.kind!=="gorilla"&&u.normalize().dot(a)<.3||s.strike(l,this.position)}}this.physics(e,o)}sync(e,n,s=0){const o=Math.hypot(this.velocity.x,this.velocity.z),r=ot.clamp(o/this.spec.run,0,1);this.gaitPhase+=e*(this.kind==="gorilla"?1.5+o*1:2+o*1.3);const a=this.gaitPhase,c=this.state==="windup"&&this.attack==="pounce"?Math.min(1,this.stateTime/.3):this.state==="stalk"?.35:0,l=this.state==="windup"&&this.attack==="roar";if(this.kind==="gorilla"){const u=this.state==="alert"&&!this.hacked,h=this.state==="windup"&&this.attack==="slam";this.body.rotation.x=.25*(1-(h?1:0)),this.body.position.y=Math.abs(Math.sin(a))*.06*r,this.arms.forEach((d,f)=>{let _=-.3+Math.sin(a+f*Math.PI)*.5*r,m=d.side*.12,p=-.15;if(u){const S=Math.max(0,Math.sin(n*14+f*Math.PI));_=-1.3-S*.2,m=-d.side*.5,p=-1.5+S*.4}if(h){const S=Math.min(1,this.stateTime/.4);_=ot.lerp(-.3,-2.9,S),p=-.3}this.slamPose>0&&(_=-.9,p=-.1),d.shoulder.rotation.set(_,0,m),d.elbow.rotation.x=p}),this.limbs.forEach((d,f)=>{const g=-Math.sin(a+f*Math.PI)*.45*r;d.hip.rotation.x=g,d.knee.rotation.x=Math.max(0,Math.cos(a+f*Math.PI))*.6*r})}else{const u=r*.75+(o>.2?.15:0);for(const h of this.limbs){const d=h.front===h.side<0?0:Math.PI,f=a+d;let g=Math.sin(f)*u,_=Math.max(0,-Math.cos(f))*u*1.1*(h.front?1:-1);this.grounded||(g=h.front?-.9:.9,_=h.front?.3:-.3),g+=c*(h.front?-.25:.55),_+=c*(h.front?.5:-.9),h.hip.rotation.x=g,h.knee.rotation.x=_}this.body.position.y=-c*.3+Math.abs(Math.sin(a))*.05*r,this.body.rotation.x=c*.12+(this.grounded?0:-this.velocity.y*.02),this.tail.forEach((h,d)=>{h.rotation.y=Math.sin(n*3+d*.6)*(.2+r*.15),d===0&&(h.rotation.x=this.state==="alert"||c>0?1:.6)})}this.head.rotation.x=l?-.35:0,this.jaw&&(this.jaw.rotation.x=l?.5:0),this.group.position.copy(this.position),s&&this.group.position.add(new A(Math.random()-.5,0,Math.random()-.5).multiplyScalar(s)),this.group.rotation.y=this.facing,this.mark.position.y=this.spec.targetHeight/this.spec.scale+.7+Math.min(.3,this.stateTime*1.5)}}class ax extends Ac{constructor(e,n,s){super();I(this,"name","Stone Warden");I(this,"radius",1.8);I(this,"hp",6);I(this,"maxHp",6);I(this,"targetHeight",4.2);I(this,"state","dormant");I(this,"stateTime",0);I(this,"facing",0);I(this,"arm");I(this,"core");I(this,"coreMat");I(this,"torso");I(this,"ring",{active:!1,radius:0,center:new A,hit:!1});I(this,"contactCooldown",0);this.position.set(e,s(e,n),n);const o=9211801,r=4935523;this.torso=z(new at(2.6,2.4,1.8),o,.04),this.torso.position.y=2.6,this.group.add(this.torso);const a=z(new at(1.4,1.2,1.3),r,.05);a.position.y=4.3,this.group.add(a);for(const u of[-1,1]){const h=z(new Ue(.22,1.1,6),15787724,.08);h.position.set(u*.8,4.9,0),h.rotation.z=-u*.6,this.group.add(h);const d=new Xt(new at(.3,.14,.05),new Se({color:16734762}));d.position.set(u*.35,4.4,.67),this.group.add(d);const f=z(new at(.8,1.5,.9),r,.05);f.position.set(u*.75,.75,0),this.group.add(f)}this.coreMat=new Se({color:5579281}),this.core=new Xt(new Kn(.45,0),this.coreMat),this.core.position.set(0,2.7,.95),this.group.add(this.core),this.arm=new Ut,this.arm.position.set(1.7,3.4,0);const c=z(new at(.7,2.2,.7),o,.05);c.position.y=-1,this.arm.add(c);const l=z(new cr(.9,0),r,.05);l.position.y=-2.4,this.arm.add(l),this.group.add(this.arm),this.collectMaterials(),this.group.position.copy(this.position)}get awake(){return this.alive&&this.state!=="dormant"}vulnerable(){return this.state==="stunned"}knockback(){return 1.5}poofColor(){return 9211801}emerge(){this.enter("rising")}enter(e){this.state=e,this.stateTime=0}update(e,n,s){if(!this.alive)return;this.updateFlash(e),this.stateTime+=e,this.contactCooldown=Math.max(0,this.contactCooldown-e);const o=n.playerPos.clone().sub(this.position).setY(0),r=o.length(),a=Math.atan2(o.x,o.z),c=d=>{const f=Math.atan2(Math.sin(a-this.facing),Math.cos(a-this.facing));this.facing+=ot.clamp(f,-d*e,d*e)},l=new A(Math.sin(this.facing),0,Math.cos(this.facing));let u=.2;switch(this.state){case"dormant":r<16&&this.enter("chase");break;case"rising":c(3),u=-1.5,Math.random()<e*20&&n.particles.dust(this.position.clone().add(new A((Math.random()-.5)*4,0,(Math.random()-.5)*4))),this.stateTime>1.8&&this.enter("chase");break;case"chase":c(2.2),r>4.2&&this.position.addScaledVector(l,3.2*e),r<5&&this.stateTime>.6&&this.enter("windup"),u=.2+Math.sin(n.time*4)*.2;break;case"windup":c(1.2),u=-2.6*Math.min(1,this.stateTime/.9),this.stateTime>.9&&this.slam(n,l);break;case"stunned":u=1.4,this.coreMat.color.setHex(Math.sin(n.time*18)>0?16765503:16742954),this.stateTime>2&&(this.coreMat.color.setHex(5579281),this.enter("recover"));break;case"recover":u=1.4-Math.min(1,this.stateTime/.5)*1.2,this.stateTime>.6&&this.enter("chase");break}if(this.ring.active){this.ring.radius+=e*14;const d=n.playerPos.clone().sub(this.ring.center).setY(0).length(),f=Math.abs(n.playerPos.y-this.ring.center.y)<1.2;!this.ring.hit&&n.playerGrounded&&f&&Math.abs(d-this.ring.radius)<.9&&(this.ring.hit=!0,n.hurtPlayer(this.ring.center,1)),this.ring.radius>9&&(this.ring.active=!1)}this.velocity.multiplyScalar(1-Math.min(1,e*6)),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.position.y=s(this.position.x,this.position.z),r<this.radius+.5&&this.contactCooldown<=0&&this.state!=="stunned"&&(n.hurtPlayer(this.position,1),this.contactCooldown=1),this.arm.rotation.x=ot.damp(this.arm.rotation.x,u,this.state==="stunned"?30:10,e);const h=this.state==="dormant"?.9:this.state==="rising"?5.5*(1-ot.smoothstep(this.stateTime,0,1.6)):0;this.group.position.copy(this.position).setY(this.position.y-h),this.group.rotation.y=this.facing,this.torso.rotation.z=this.state==="stunned"?Math.sin(n.time*10)*.05:0}slam(e,n){const s=this.position.clone().addScaledVector(n,2.6);e.particles.shockwave(s.clone().setY(s.y+.3)),e.particles.dust(s),e.audio.play("slam"),e.playerPos.distanceTo(s)<2.4&&e.hurtPlayer(s,2),this.ring={active:!0,radius:0,center:s,hit:!1},this.enter("stunned")}get shake(){return this.state==="rising"?.45:this.state==="stunned"&&this.stateTime<.35?1-this.stateTime/.35:0}}const Rc="gooseman-skyfall-save";function bs(){return{version:2,pos:[0,0,6],health:6,maxHealth:6,relics:[],wardenDefeated:!1}}function Cc(){try{const i=localStorage.getItem(Rc);if(!i)return null;const t=JSON.parse(i);return t.version!==2?null:{...bs(),...t}}catch{return null}}function cx(i){try{localStorage.setItem(Rc,JSON.stringify(i))}catch{}}function lx(){localStorage.removeItem(Rc)}const Mu=document.getElementById("game"),Di=new s_({canvas:Mu,antialias:!0});Di.setPixelRatio(Math.min(window.devicePixelRatio,2));Di.shadowMap.enabled=!0;Di.shadowMap.type=_h;Di.outputColorSpace=rn;const Pe=new o_;Pe.fog=new _c(12576511,120,420);const eo=new dn(55,1,.1,2e3),Su=new A(.5,.8,.3).normalize();Pe.add(new H_(14676735,6064714,1.2));const hi=new W_(16774364,2.4);hi.castShadow=!0;hi.shadow.mapSize.set(2048,2048);const xs=hi.shadow.camera;xs.left=xs.bottom=-32;xs.right=xs.top=32;xs.near=1;xs.far=200;hi.shadow.bias=-5e-4;Pe.add(hi,hi.target);const wu=$_(Su);Pe.add(wu.group);const Eu=ov(),bu=_v(Eu,er);Pe.add(bu.mesh);Pe.add(sv());const Tu=Fv();Pe.add(Tu.group);const ah=new Vv(document.getElementById("minimap"),Eu.image.data);vs.push({kind:"boat",x:de.x+4.4,z:de.z1-4,yaw:0},{kind:"jetski",x:de.x-3.4,z:de.z1-3,yaw:0},{kind:"jetski",x:de.x-3.4,z:de.z1-9,yaw:0});const ys=vs.map(i=>new Hv(i.kind,i.x,i.z,i.yaw));for(const i of ys)Pe.add(i.group);const Bt=new Y_(Mu),Qe=new Kv(Pe),re=new tx,Re=new ex,it=new Zv;Pe.add(it.object);const an=new fv(eo),no=[[-12,-10,1.4],[18,-21,1.4],[8,-42,8.4]],Au=no.map(([i,t,e])=>{const n=z(new Kn(.6,0),16765503,.08);n.add(new hr(16765503,6,8));const s=Vt(i,t)+e;return n.position.set(i,s,t),Pe.add(n),{mesh:n,baseY:s}}),Ai=z(new Ue(.35,.7,3),16765503,.12);Ai.rotation.x=Math.PI;Ai.visible=!1;Pe.add(Ai);let fe=bs(),io="title",Ce=[],Ne=null,nr=[],ye=null,ia=0,ir=0,tc=!1,ch=!1,sa=!1,oa=0;const Ru=document.getElementById("combat-tip"),Cu=[...document.querySelectorAll(".key[data-code]")];for(const i of Cu){const t=i.dataset.code;i.addEventListener("pointerdown",e=>{e.preventDefault(),i.setPointerCapture(e.pointerId),Bt.setVirtual(t,!0)});for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>Bt.setVirtual(t,!1))}function hx(){for(const i of Cu){const t=i.dataset.code,e=Bt.down(t)||t==="KeyR"&&it.running||t==="ShiftLeft"&&Bt.down("ShiftRight")||t==="KeyJ"&&(Bt.down("KeyF")||Bt.clicked);i.classList.toggle("on",e)}}const ux=[[-8,-4],[10,-6],[-18,-18],[20,-30],[-4,-30],[14,-12],[86,-38],[100,-22],[-86,-10],[-100,-36],[40,-96],[2,44]],dx=[["gorilla",88,-26],["gorilla",104,-42],["gorilla",76,-48],["tiger",62,-16],["tiger",98,-8],["tiger",80,-58],["tiger",112,-30],["lion",-82,-8],["lion",-96,-38],["lion",-72,-30],["lion",-110,-14]],lh=[-20,-36];function fx(){for(const i of Ce)Pe.remove(i.group);for(const i of nr)Pe.remove(i.mesh);for(const i of hs)Pe.remove(i.mesh);hs=[],lo(),Ce=[],nr=[],ye=null}function fr(i){Lc(),fx(),fe=i;const[t,,e]=fe.pos;it.position.set(t,Vt(t,e),e),it.velocity.set(0,0,0),it.invulnerable=0,an.snap(it.position),Au.forEach((n,s)=>n.mesh.visible=!fe.relics.includes(s));for(const[n,s]of ux)Ce.push(new ix(n,s,Vt));for(const[n,s,o]of dx)Ce.push(new rx(n,s,o,Vt));for(const n of Ce)Pe.add(n.group);Ne=null,!fe.wardenDefeated&&fe.relics.length===no.length&&Pu(),io="play",tc=!1,Ru.classList.add("hidden"),document.getElementById("title").classList.add("hidden"),document.getElementById("gameover").classList.add("hidden"),re.start(),re.setBattle(!1),Re.toast(fe.relics.length?"Welcome back, Gooseman":"Find the three relics",2.6)}function Pu(){const i=new A(ql.x,0,ql.y).sub(it.position).setY(0);let t=new A(lh[0],0,lh[1]);for(let e=0;e<16;e++){const n=i.lengthSq()>1?i.clone().normalize():new A(0,0,-1);n.applyAxisAngle(new A(0,1,0),(e-8)*.35);const s=it.position.clone().addScaledVector(n,12);if(Vt(s.x,s.z)>.6&&Math.hypot(s.x-Fe.x,s.z-Fe.z)>5){t=s;break}}Ne=new ax(t.x,t.z,Vt),Ne.emerge(),Ce.push(Ne),Pe.add(Ne.group),re.play("slam"),Re.toast("The ground shakes… the Stone Warden rises!",3)}function Ko(){!Ye&&it.grounded&&Vt(it.position.x,it.position.z)>.2&&(fe.pos=[it.position.x,it.position.y,it.position.z]),cx(fe)}function Lu(i,t){io!=="play"||it.invulnerable>0||(fe.health=Math.max(0,fe.health-t),it.hurt(i),re.play("hurt"),tn&&lo("Gooseman is hurt! Link lost."),ir=.2,fe.health<=0&&(Lc(),io="dead",ye=null,document.getElementById("gameover").classList.remove("hidden")))}function hh(i,t){const e=i==="heart"?z(new be(.35,12,8),16726858,.1):z(new Kn(.8,1),16726858,.06),n=Vt(t.x,t.z)+(i==="heart"?.6:1.4);e.position.set(t.x,n,t.z),Pe.add(e),nr.push({mesh:e,kind:i,baseY:n})}function px(){let i=null,t=1/0;const e=new A(Math.sin(it.facing),0,Math.cos(it.facing));for(const n of Ce){if(!n.alive||!n.hostile)continue;const s=n.position.clone().sub(it.position).setY(0),o=s.length();if(o>20)continue;const r=o-s.normalize().dot(e)*6;r<t&&(t=r,i=n)}return i}let hs=[];const Du=new qe(.07,.6,2,6);Du.rotateX(Math.PI/2);const uh={hostile:new Se({color:16728128}),friendly:new Se({color:6287615})};function mx(i,t,e){const n=new Xt(Du,e?uh.friendly:uh.hostile);n.position.copy(i),n.lookAt(i.clone().add(t)),Pe.add(n),hs.push({mesh:n,vel:t.clone().normalize().multiplyScalar(e?30:18),friendly:e,life:2.5}),re.play("laser")}function gx(i){const t=it.position.clone().setY(it.position.y+1.2);for(const e of hs){e.mesh.position.addScaledVector(e.vel,i),e.life-=i;const n=e.mesh.position;let s=n.y<Vt(n.x,n.z)||e.life<=0;if(!s&&e.friendly)for(const o of Ce){if(!o.alive||!o.hostile)continue;const r=o.position.clone().setY(o.position.y+o.targetHeight*.5);if(n.distanceTo(r)<o.radius+.35){o.takeHit(n.clone().sub(e.vel),Dn),sr(o),s=!0;break}}else if(!s){n.distanceTo(t)<.9&&(Lu(n,1),s=!0);for(const o of Ce){if(s)break;!o.alive||o.hostile||n.distanceTo(o.position)<o.radius+.3&&(o.takeHit(n.clone().sub(e.vel),Dn),sr(o),s=!0)}}s&&(Qe.sparks(n),Pe.remove(e.mesh),e.life=-1)}hs=hs.filter(e=>e.life>0)}function sr(i){i.alive||(i===tn&&lo(`${i.name} destroyed! Link lost.`),i===Ne?(fe.wardenDefeated=!0,hh("container",i.position),re.play("fanfare"),Re.toast("The Stone Warden crumbles!",3),Ko()):i.hostile&&Math.random()<.5&&hh("heart",i.position.clone().setY(Vt(i.position.x,i.position.z))))}let tn=null,Go=0,Ri=0;const Pc=document.getElementById("hack"),ec=document.getElementById("hack-fill"),nc=document.getElementById("hack-text");function lo(i="Back to Gooseman"){tn&&(tn.controlled=!1,tn=null,it.frozen=!1,document.body.classList.remove("piloting","pilot-drone","pilot-beast"),Re.toast(i,1.6))}function _x(i){const t=ye&&ta(ye)&&ye.hostile&&ye.alive?ye:null,e=!!t&&t.position.distanceTo(it.position)<14;for(const n of Ce)ta(n)&&(n.beingHacked=!1);if(t&&e&&Bt.down("KeyH"))t.beingHacked=!0,t.hackProgress=Math.min(1,t.hackProgress+i/t.hackSeconds),t.hackProgress>=1&&(t.hacked=!0,t.beingHacked=!1,ye=null,re.play("hack"),Re.toast(`${t.name} hacked! It fights for you now · press H to take control`,2.8));else if(Bt.justPressed("KeyH")&&!t)if(tn)lo();else{let n=null,s=1/0;for(const o of Ce){if(!ta(o)||!o.alive||!o.hacked)continue;const r=o.position.distanceTo(it.position);r<s&&(s=r,n=o)}n?(tn=n,n.controlled=!0,it.frozen=!0,document.body.classList.add("piloting",n.pilotKind==="drone"?"pilot-drone":"pilot-beast"),document.getElementById("pilot-banner").textContent=`${n.name.toUpperCase()} LINK · H to return`,re.play("hack"),Re.toast(n.pilotKind==="drone"?"Drone link! WASD fly · SPACE/C up/down · J fire · H return":`${n.name} link! WASD move · SPACE jump · J attack · H return`,3)):Re.toast("Nothing hacked yet · lock on (Z) to a drone or robot animal and hold H",2.2)}Pc.classList.toggle("hidden",!(t&&!tn)),t&&(ec.style.width=`${t.hackProgress*100}%`,nc.textContent=e?`HOLD H TO HACK ${t.name.toUpperCase()}`:"GET CLOSER TO HACK")}function vx(i){const t=tn,e=(Bt.down("KeyW")?1:0)-(Bt.down("KeyS")?1:0),n=(Bt.down("KeyD")?1:0)-(Bt.down("KeyA")?1:0),s=new A(n,0,-e);s.lengthSq()>0&&s.normalize().applyAxisAngle(new A(0,1,0),an.yaw),Go=Math.max(0,Go-i);const o=Bt.justPressed("KeyJ")||Bt.justPressed("KeyF")||Bt.clicked,r=Bt.down("KeyJ")||Bt.down("KeyF"),a=o||r&&Go<=0;a&&(Go=.22);const c=new A;if(eo.getWorldDirection(c),a&&t.pilotKind==="drone"){let u=null,h=Math.cos(ot.degToRad(14));for(const d of Ce){if(!d.alive||!d.hostile)continue;const g=d.position.clone().setY(d.position.y+d.targetHeight*.5).sub(t.position).normalize().dot(c);g>h&&(h=g,u=d)}u&&c.copy(u.position).setY(u.position.y+u.targetHeight*.5).sub(t.position)}t.pilot(i,{move:s,vertical:(Bt.down("Space")?1:0)-(Bt.down("KeyC")?1:0),jump:Bt.justPressed("Space"),fast:Bt.down("ShiftLeft")||Bt.down("ShiftRight"),fire:a,aim:c,yaw:an.yaw+Math.PI},Dn,Vt);const l=t.position.clone().sub(it.position).setY(0);l.length()>70&&(l.setLength(70),t.position.x=it.position.x+l.x,t.position.z=it.position.z+l.z,Re.toast("Signal weak · stay within range",1)),Bt.justPressed("KeyH")&&lo()}const Dn={playerPos:it.position,playerGrounded:!0,playerFacing:0,enemies:[],particles:Qe,audio:re,time:0,hurtPlayer:Lu,fireBolt:mx,strike(i,t){i.alive&&(i.takeHit(t,Dn),sr(i))},shake(i){Ri=Math.max(Ri,i)}},dh={"Circuit Jungle":"robot animals roam here","Sunscorch Savanna":"home of the cyber lions","Gull Beach":"boats & jet skis at the pier","Ambergoose Caye":"stilt houses on the lagoon","Caye Honkker":"go slow","The Great Blue Hole":"don't look down",Xunangoosich:"climb the temple stairs","Caroni Swamp":"scarlet ibis country","Nylon Pool":"waist-deep in the open sea","Pigeon Point":"the famous jetty","Maracas Bay":"bake & shark on the beach","Pitch Lake":"a lake of black asphalt","Port of Honk":"steelpan on the stage","Chacachacare Light":"the lighthouse at the end of the world"};let fh="Skyfall Meadow",ra=0;function xx(i){if(ra-=i,ra>0)return;ra=.5;const t=nv(it.position.x,it.position.z);t&&t!==fh&&(fh=t,Re.toast(dh[t]?`${t} · ${dh[t]}`:t,2.6))}let Ye=null,Iu=11;function yx(){let i=null,t=1/0;for(const e of ys){const n=Math.hypot(e.position.x-it.position.x,e.position.z-it.position.z),s=e.kind==="boat"?6.5:5;n<s&&n<t&&Math.abs(e.position.y-it.position.y)<3&&(t=n,i=e)}return i}function ph(i){Ye=i,i.driven=!0,it.frozen=!0,ye=null,Iu=an.distance,an.distance=Math.max(an.distance,i.kind==="boat"?15:12),document.body.classList.add("driving"),re.play("hack"),Re.toast(`${i.name}! W throttle · A/D steer · SHIFT boost · SPACE hop · H hop off`,3)}function Lc(){const i=Ye;if(!i)return;Ye=null,i.driven=!1,it.frozen=!1,an.distance=Iu,document.body.classList.remove("driving"),re.setEngine(null);let t=null;for(let e=3;e<=9&&!t;e+=1.5)for(let n=0;n<12;n++){const s=n/12*Math.PI*2,o=i.position.x+Math.cos(s)*e,r=i.position.z+Math.sin(s)*e,a=Xn(o,r,2);if(a>.3){t=new A(o,a+.1,r);break}}if(!t){const e=new A(Math.cos(i.yaw),0,-Math.sin(i.yaw)).multiplyScalar(i.kind==="boat"?2.2:1.6);t=i.position.clone().add(e).setY(i.position.y+.6)}it.dismount(t)}function Mx(i){if(ye)return!1;const t=yx();for(const e of ys)e!==t&&!e.hacked&&(e.hackProgress=Math.max(0,e.hackProgress-i));return t?(Pc.classList.remove("hidden"),t.hacked?(ec.style.width="100%",nc.textContent=`PRESS H TO BOARD ${t.name.toUpperCase()}`,Bt.justPressed("KeyH")&&ph(t),!0):(nc.textContent=`HOLD H TO HACK ${t.name.toUpperCase()}`,Bt.down("KeyH")&&(t.hackProgress=Math.min(1,t.hackProgress+i/t.hackSeconds),Math.random()<i*20&&Qe.emit(t.position.clone().setY(t.position.y+1.4),1,{color:3924223,speed:1.2,up:1.5,size:.1,life:.4}),t.hackProgress>=1&&(t.setHacked(),ph(t))),ec.style.width=`${t.hackProgress*100}%`,!0)):!1}function Sx(i,t){const e=Ye,n=(Bt.down("KeyW")||Bt.down("ArrowUp")?1:0)-(Bt.down("KeyS")||Bt.down("ArrowDown")?1:0),s=(Bt.down("KeyD")||Bt.down("ArrowRight")?1:0)-(Bt.down("KeyA")||Bt.down("ArrowLeft")?1:0);e.update(i,t,{throttle:n,steer:s,boost:Bt.down("ShiftLeft")||Bt.down("ShiftRight"),hop:Bt.justPressed("Space")},Qe),it.ride(i,t,e.seat(),e.yaw,e.tilt,e.spec.pose==="sit"),re.setEngine(e.kind,e.rpm),e.events.splash&&re.play("splash"),e.events.bump&&(re.play("bump"),Ri=Math.max(Ri,.25)),Bt.justPressed("KeyG")&&re.play("horn"),Pc.classList.add("hidden"),Bt.justPressed("KeyH")&&Lc()}function wx(i,t){(Bt.justPressed("KeyZ")||Bt.justPressed("Tab"))&&(ye=ye?null:px(),ye&&re.play("lock")),ye&&(!ye.alive||ye.position.distanceTo(it.position)>26)&&(ye=null);const e=ye?ye.position.clone().setY(ye.position.y+ye.targetHeight*.5):null;it.lockTarget=e;const n=!!Ye;Ye?Sx(i,t):it.update(i,t,Bt,an.yaw);const s=it.events;if(s.jumped&&re.play("jump"),re.setJet(it.jetting),it.jetting&&Math.random()<i*40){const h=new A(-Math.sin(it.facing),0,-Math.cos(it.facing)).multiplyScalar(.45),d=it.position.clone().add(h).setY(it.position.y+.95);Qe.emit(d,1,{color:Math.random()<.5?16753210:16770688,speed:1,up:-6,size:.12,life:.25}),Math.random()<.4&&Qe.emit(d,1,{color:14212579,speed:1,up:-3,size:.2,life:.7,grow:2})}if(s.flapped&&!ch&&(ch=!0,Re.toast("Jetpack! Hold SPACE to fly · C to descend",2.4)),Bt.justPressed("KeyR")&&Re.toast(it.running?"Auto-run ON: steer with A / D or mouse, S to stop":"Auto-run OFF",1.8),s.landed&&Qe.dust(it.position),s.step){const h=s.step;if(re.play(h.surface==="wood"?"stepWood":h.surface==="sand"?"stepSand":"stepGrass"),h.hard||h.surface==="sand"){const d=new A(h.x,it.position.y+.05,h.z),f=h.surface==="sand"?15391140:h.surface==="wood"?11569756:13227688;Qe.emit(d,h.hard?3:2,{color:f,speed:.7,up:.9,size:.13,life:.4,grow:1.6,gravity:2})}}s.skid&&Math.random()<i*25&&Qe.emit(it.position.clone().setY(it.position.y+.05),1,{color:14209720,speed:1.2,up:1,size:.16,life:.5,grow:2}),s.splashed&&(Qe.splash(it.position),re.play("splash")),it.swimming&&Math.hypot(it.velocity.x,it.velocity.z)>2&&Math.random()<i*8&&Qe.emit(it.position.clone().setY(it.position.y+.3),2,{color:16777215,speed:1.5,up:1.5,size:.12,life:.4,gravity:8});const o=new st(it.position.x-In.x,it.position.z-In.y),r=tr,a=o.length()-(r-20);if(a>0){const h=o.clone().normalize().negate(),d=Math.min(1,a/20)*14;it.position.x+=h.x*d*i,it.position.z+=h.y*d*i,o.length()>r&&(o.setLength(r),it.position.x=In.x+o.x,it.position.z=In.y+o.y),a>12&&(it.running&&(it.running=!1),it.facing=Math.atan2(h.x,h.y),sa||(sa=!0,Re.toast("The open sea is too rough · the current carries you back to the island",2.6)))}else a<-10&&(sa=!1);Dn.playerGrounded=it.grounded||it.swimming,Dn.time=t,Dn.enemies=Ce,Dn.playerFacing=it.facing,xx(i),tn?vx(i):!Ye&&!n&&!Mx(i)&&_x(i);for(const h of ys)h!==Ye&&Math.abs(h.position.x-it.position.x)<260&&Math.abs(h.position.z-it.position.z)<260&&h.update(i,t,null,Qe);Tu.update(i,t),Bt.justPressed("KeyN")&&ah.toggle(),ah.update(i,{x:it.position.x,z:it.position.z,yaw:it.facing,color:"#ff3b4a"},ys.map(h=>({x:h.position.x,z:h.position.z,yaw:h.yaw,color:h.hacked?"#3be0ff":"#ffb03a"})));for(const h of Ce)h.update(i,Dn,Vt);gx(i);for(const h of Ce)h.alive&&lu(h.position,h.radius*.7);for(let h=0;h<Ce.length;h++){const d=Ce[h];if(d.alive)for(let f=h+1;f<Ce.length;f++){const g=Ce[f];if(!g.alive)continue;const _=g.position.clone().sub(d.position).setY(0),m=d.radius+g.radius-_.length();m>0&&(_.normalize().multiplyScalar(m*.5),d.position.sub(_),g.position.add(_))}}if(s.swung){re.play("swing");const h=it.swordReach();for(const d of Ce){if(!d.alive||!d.hostile)continue;const f=h.clone().setY(0).distanceTo(d.position.clone().setY(0)),g=h.y-(d.position.y+d.targetHeight*.4);f<d.radius+1.1&&Math.abs(g)<Math.max(d.targetHeight,1.4)&&(!d.takeHit(it.position,Dn)&&d===Ne&&Re.toast("Clang! Wait for it to slam…",1.2),sr(d))}}for(const h of nr)h.mesh.visible&&(h.mesh.rotation.y=t*2,h.mesh.position.y=h.baseY+Math.sin(t*3)*.15,h.mesh.position.distanceTo(it.position.clone().setY(it.position.y+.8))<1.4&&(h.mesh.visible=!1,h.kind==="heart"?(fe.health=Math.min(fe.maxHealth,fe.health+2),re.play("pickup")):(fe.maxHealth+=2,fe.health=fe.maxHealth,re.play("fanfare"),Re.toast("Heart Container! Max hearts up",2.6),Ko())));Au.forEach((h,d)=>{if(!fe.relics.includes(d)&&(h.mesh.rotation.y=t*1.5,h.mesh.position.y=h.baseY+Math.sin(t*2+d)*.25,Math.random()<i*10&&Qe.sparkle(h.mesh.position.clone().add(new A((Math.random()-.5)*1.2,-.3,(Math.random()-.5)*1.2))),h.mesh.position.distanceTo(it.position.clone().setY(it.position.y+1))<1.6)){fe.relics.push(d),h.mesh.visible=!1,Qe.poof(h.mesh.position,16765503);const f=fe.relics.length;f===no.length?(re.play("fanfare"),fe.wardenDefeated?Re.toast("Skyfall is sealed. Hero of the Skies!",3.2):Ne||Pu()):(re.play("pickup"),Re.toast(`Relic found! ${f} / ${no.length}`)),Ko()}}),e&&ye?(Ai.visible=!0,Ai.position.copy(ye.position).setY(ye.position.y+ye.targetHeight+.9+Math.sin(t*6)*.12),Ai.rotation.y=t*3):Ai.visible=!1;const c=!!Ne&&Ne.awake&&Ne.position.distanceTo(it.position)<32;c&&!tc&&(tc=!0,Re.toast("The Stone Warden awakens!",2.4)),Ru.classList.toggle("hidden",!c),re.setBattle(c),oa=Ce.some(h=>h.engaged&&h.position.distanceTo(it.position)<30)?4:Math.max(0,oa-i),re.setMood({danger:oa>0,flying:it.jetting||!!Ye&&Math.abs(Ye.speed)>12,swimming:it.swimming,lowHealth:fe.health<=2,piloting:!!tn}),Re.setBoss(c&&Ne?Ne.name:null,Ne?Ne.hp/Ne.maxHp:0),ia+=i,ia>5&&(ia=0,Ko()),Ri=Math.max(0,Ri-i*1.5);const u=Math.max((Ne==null?void 0:Ne.shake)??0,ir>0?.5:0,Ri);tn?an.update(i,Bt,tn.position.clone().setY(tn.position.y+tn.camOffset),null,u):Ye?an.update(i,Bt,Ye.position,null,u,{facing:Ye.yaw,speed:Math.abs(Ye.speed)}):an.update(i,Bt,it.position,e,u,{facing:it.facing,speed:Math.hypot(it.velocity.x,it.velocity.z)})}function Uu(){const i=window.innerWidth,t=window.innerHeight;Di.setSize(i,t,!1),eo.aspect=i/t,eo.updateProjectionMatrix()}window.addEventListener("resize",Uu);Uu();const Nu=Cc(),Fu=document.getElementById("btn-continue");Nu&&Fu.classList.remove("hidden");Fu.addEventListener("click",()=>fr(Cc()??bs()));document.getElementById("btn-new").addEventListener("click",()=>{lx(),fr(bs())});document.getElementById("btn-retry").addEventListener("click",()=>{const i=Cc()??bs();i.health=i.maxHealth,fr(i)});window.addEventListener("keydown",i=>{i.code==="Enter"&&io==="title"&&fr(Nu??bs())});it.position.set(0,Vt(0,6),6);it.object.position.copy(it.position);an.snap(it.position);const mh=new X_;Di.setAnimationLoop(()=>{const i=Math.min(mh.getDelta(),.05),t=mh.elapsedTime;io==="play"?wx(i,t):(re.setJet(!1),an.yaw+=i*.12,an.update(i,Bt,it.position),it.object.position.copy(it.position)),ir=Math.max(0,ir-i),Bt.justPressed("KeyM")&&re.toggleMute(),hx(),Re.setHealth(fe.health,fe.maxHealth),Re.setRelics(fe.relics.length,no.length),Re.update(i),Qe.update(i),re.update(),hi.position.copy(it.position).addScaledVector(Su,80),hi.target.position.copy(it.position),wu.update(i,it.position),bu.update(t,it.position),Di.render(Pe,eo),Bt.endFrame()});new URLSearchParams(location.search).has("debug")&&Object.assign(window,{gooseman:{goose:it,save:()=>fe,enemies:()=>Ce,vehicles:ys,driving:()=>Ye}});
