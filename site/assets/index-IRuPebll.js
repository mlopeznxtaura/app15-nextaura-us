var qu=Object.defineProperty;var ju=(i,t,e)=>t in i?qu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var D=(i,t,e)=>ju(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="170",Zu=0,qc=1,Ku=2,wh=1,Eh=2,qn=3,di=0,We=1,Rn=2,hi=0,cs=1,ha=2,jc=3,Zc=4,Ju=5,Ti=100,$u=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,od=203,ua=204,da=205,rd=206,ad=207,cd=208,ld=209,hd=210,ud=211,dd=212,fd=213,pd=214,fa=0,pa=1,ma=2,ps=3,ga=4,_a=5,va=6,xa=7,lc=0,md=1,gd=2,ui=0,_d=1,vd=2,xd=3,yd=4,Md=5,Sd=6,wd=7,bh=300,ms=301,gs=302,ya=303,Ma=304,cr=306,Sa=1e3,Ri=1001,wa=1002,nn=1003,Ed=1004,go=1005,_n=1006,vr=1007,Ci=1008,$n=1009,Th=1010,Ah=1011,Js=1012,hc=1013,Li=1014,Zn=1015,ro=1016,uc=1017,dc=1018,_s=1020,Rh=35902,Ch=1021,Ph=1022,Pn=1023,Lh=1024,Dh=1025,ls=1026,vs=1027,fc=1028,pc=1029,Ih=1030,mc=1031,gc=1033,Yo=33776,qo=33777,jo=33778,Zo=33779,Ea=35840,ba=35841,Ta=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,La=37808,Da=37809,Ia=37810,Ua=37811,Na=37812,za=37813,Fa=37814,Oa=37815,ka=37816,Ba=37817,Ha=37818,Ga=37819,Va=37820,Wa=37821,Ko=36492,Xa=36494,Ya=36495,Uh=36283,qa=36284,ja=36285,Za=36286,bd=3200,Td=3201,_c=0,Ad=1,li="",an="srgb",ws="srgb-linear",lr="linear",de="srgb",Oi=7680,Kc=519,Rd=512,Cd=513,Pd=514,Nh=515,Ld=516,Dd=517,Id=518,Ud=519,Ka=35044,Jc="300 es",Kn=2e3,tr=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const Ws=Math.PI/180,$s=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zd(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function Od(i,t=1){return t-Math.abs(vc(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gd(i,t){return i+Math.random()*(t-i)}function Vd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*Ws}function Yd(i){return i*$s}function qd(i){return(i&i-1)===0&&i!==0}function jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),u=r((t+n)/2),h=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Ws,RAD2DEG:$s,generateUUID:Fn,clamp:He,euclideanModulo:vc,mapLinear:Nd,inverseLerp:zd,lerp:Xs,damp:Fd,pingpong:Od,smoothstep:kd,smootherstep:Bd,randInt:Hd,randFloat:Gd,randFloatSpread:Vd,seededRandom:Wd,degToRad:Xd,radToDeg:Yd,isPowerOfTwo:qd,ceilPowerOfTwo:jd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Kd,normalize:he,denormalize:Cn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,o,r,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],I=s[2],R=s[5],C=s[8];return o[0]=r*_+a*M+c*I,o[3]=r*m+a*x+c*R,o[6]=r*p+a*v+c*C,o[1]=l*_+u*M+h*I,o[4]=l*m+u*x+h*R,o[7]=l*p+u*v+h*C,o[2]=d*_+f*M+g*I,o[5]=d*m+f*x+g*R,o[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,f=l*o-r*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Zt;function zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=er("canvas");return i.style.display="block",i}const Qc={};function Hs(i){i in Qc||(Qc[i]=!0,console.warn(i))}function $d(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],el=[.2126,.7152,.0722],nl=[.3127,.329],il=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[ws]:{primaries:tl,whitePoint:nl,transfer:lr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:tl,whitePoint:nl,transfer:de,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let ki;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=er("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Jn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(yr(s[r].image)):o.push(yr(s[r]))}else o=yr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class Ze extends Es{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Ri,s=Ri,o=_n,r=Ci,a=Pn,c=$n,l=Ze.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Fn(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=bh;Ze.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(f+1)/2,I=(p+1)/2,R=(u+d)/4,C=(h+_)/4,P=(g+m)/4;return x>v&&x>I?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=R/n,o=C/n):v>I?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=R/s,o=P/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=C/o,s=P/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,p*M);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const v=a*M;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new T,ol=new ao;class co{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Sn):Sn.fromBufferAttribute(o,r),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),vo.subVectors(this.max,Ps),Bi.subVectors(t.a,Ps),Hi.subVectors(t.b,Ps),Gi.subVectors(t.c,Ps),ni.subVectors(Hi,Bi),ii.subVectors(Gi,Hi),_i.subVectors(Bi,Gi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!Sr(e,Bi,Hi,Gi,vo)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,Bi,Hi,Gi,vo))?!1:(xo.crossVectors(ni,ii),e=[xo.x,xo.y,xo.z],Sr(e,Bi,Hi,Gi,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new T,new T,new T,new T,new T,new T,new T,new T],Sn=new T,_o=new co,Bi=new T,Hi=new T,Gi=new T,ni=new T,ii=new T,_i=new T,Ps=new T,vo=new T,xo=new T,vi=new T;function Sr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){vi.fromArray(i,o);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const af=new co,Ls=new T,wr=new T;class xc{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(wr)),this.expandByPoint(Ls.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new T,Er=new T,yo=new T,si=new T,br=new T,Mo=new T,Tr=new T;class cf{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Er.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Er);const o=t.distanceTo(e)*.5,r=-this.direction.dot(yo),a=si.dot(this.direction),c=-si.dot(yo),l=si.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Er).addScaledVector(yo,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,o){br.subVectors(e,t),Mo.subVectors(n,t),Tr.crossVectors(br,Mo);let r=this.direction.dot(Tr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(Mo.crossVectors(si,Mo));if(c<0)return null;const l=a*this.direction.dot(br.cross(si));if(l<0||c+l>r)return null;const u=-a*si.dot(Tr);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,s,o,r,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),o=1/Vi.setFromMatrixColumn(t,1).length(),r=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,hf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(n,un),oi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(n,un)),oi.normalize(),So.crossVectors(un,oi),s[0]=oi.x,s[4]=So.x,s[8]=un.x,s[1]=oi.y,s[5]=So.y,s[9]=un.y,s[2]=oi.z,s[6]=So.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],I=n[15],R=s[0],C=s[4],P=s[8],w=s[12],S=s[1],L=s[5],k=s[9],B=s[13],G=s[2],Y=s[6],V=s[10],J=s[14],H=s[3],nt=s[7],ut=s[11],ft=s[15];return o[0]=r*R+a*S+c*G+l*H,o[4]=r*C+a*L+c*Y+l*nt,o[8]=r*P+a*k+c*V+l*ut,o[12]=r*w+a*B+c*J+l*ft,o[1]=u*R+h*S+d*G+f*H,o[5]=u*C+h*L+d*Y+f*nt,o[9]=u*P+h*k+d*V+f*ut,o[13]=u*w+h*B+d*J+f*ft,o[2]=g*R+_*S+m*G+p*H,o[6]=g*C+_*L+m*Y+p*nt,o[10]=g*P+_*k+m*V+p*ut,o[14]=g*w+_*B+m*J+p*ft,o[3]=M*R+x*S+v*G+I*H,o[7]=M*C+x*L+v*Y+I*nt,o[11]=M*P+x*k+v*V+I*ut,o[15]=M*w+x*B+v*J+I*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*u-o*c*u)+m*(+e*l*h-e*a*f-o*r*h+n*r*f+o*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+r*m*f+u*c*p-r*d*p,v=u*_*l-g*h*l+g*a*f-r*_*f-u*a*p+r*h*p,I=g*h*c-u*_*c-g*a*d+r*_*d+u*a*m-r*h*m,R=e*M+n*x+s*v+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=M*C,t[1]=(_*d*o-h*m*o-_*s*f+n*m*f+h*s*p-n*d*p)*C,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=x*C,t[5]=(u*m*o-g*d*o+g*s*f-e*m*f-u*s*p+e*d*p)*C,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*C,t[7]=(r*d*o-u*c*o+u*s*l-e*d*l-r*s*f+e*c*f)*C,t[8]=v*C,t[9]=(g*h*o-u*_*o-g*n*f+e*_*f+u*n*p-e*h*p)*C,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*p+e*a*p)*C,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*f-e*a*f)*C,t[12]=I*C,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*C,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*C,t[15]=(r*h*s-u*a*s+u*n*c-e*h*c-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,f=o*u,g=o*h,_=r*u,m=r*h,p=a*h,M=c*l,x=c*u,v=c*h,I=n.x,R=n.y,C=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+v)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Vi.set(s[0],s[1],s[2]).length();const r=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const l=1/o,u=1/r,h=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,e.setFromRotationMatrix(wn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Kn){const c=this.elements,l=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Kn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===tr)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Kn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(r-o),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===Kn)g=(r+o)*h,_=-2*h;else if(a===tr)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new T,wn=new Ee,lf=new T(0,0,0),hf=new T(1,1,1),oi=new T,So=new T,un=new T,rl=new Ee,al=new ao;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uf=0;const cl=new T,Wi=new ao,Wn=new Ee,wo=new T,Ds=new T,df=new T,ff=new ao,ll=new T(1,0,0),hl=new T(0,1,0),ul=new T(0,0,1),dl={type:"added"},pf={type:"removed"},Xi={type:"childadded",child:null},Ar={type:"childremoved",child:null};class Ge extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new T,e=new vn,n=new ao,s=new T(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Zt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ds,wo,this.up):Wn.lookAt(wo,Ds,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new T(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new T,Xn=new T,Rr=new T,Yn=new T,Yi=new T,qi=new T,fl=new T,Cr=new T,Pr=new T,Lr=new T,Dr=new ue,Ir=new ue,Ur=new ue;class gn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){En.subVectors(s,e),Xn.subVectors(n,e),Rr.subVectors(t,e);const r=En.dot(En),a=En.dot(Xn),c=En.dot(Rr),l=Xn.dot(Xn),u=Xn.dot(Rr),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Yn.x),c.addScaledVector(r,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Dr.setScalar(0),Ir.setScalar(0),Ur.setScalar(0),Dr.fromBufferAttribute(t,e),Ir.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Dr,o.x),r.addScaledVector(Ir,o.y),r.addScaledVector(Ur,o.z),r}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Xn.subVectors(t,e),En.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),En.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Yi.subVectors(s,n),qi.subVectors(o,n),Cr.subVectors(t,n);const c=Yi.dot(Cr),l=qi.dot(Cr);if(c<=0&&l<=0)return e.copy(n);Pr.subVectors(t,s);const u=Yi.dot(Pr),h=qi.dot(Pr);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(Yi,r);Lr.subVectors(t,o);const f=Yi.dot(Lr),g=qi.dot(Lr);if(g>=0&&f<=g)return e.copy(o);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(qi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return fl.subVectors(o,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(fl,a);const p=1/(m+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(Yi,r).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=vc(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Nr(r,o,t+1/3),this.g=Nr(r,o,t),this.b=Nr(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ne.fromWorkingColorSpace(qe.copy(this),t),Math.round(He(qe.r*255,0,255))*65536+Math.round(He(qe.g*255,0,255))*256+Math.round(He(qe.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,o=qe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=an){ne.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Eo);const n=Xs(ri.h,Eo.h,e),s=Xs(ri.s,Eo.s,e),o=Xs(ri.l,Eo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Ct;Ct.NAMES=Bh;let mf=0;class Ni extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Fn(),this.name="",this.blending=cs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new T,bo=new rt;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),o=he(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Hh extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gh extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const mn=new Ee,zr=new Ge,ji=new T,dn=new co,Is=new co,Be=new T;class Je extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Gh:Hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Zt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(dn.min,Is.min),dn.expandByPoint(Be),Be.addVectors(dn.max,Is.max),dn.expandByPoint(Be)):(dn.expandByPoint(Is.min),dn.expandByPoint(Is.max))}dn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Be.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),Be.add(ji)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new T,c[P]=new T;const l=new T,u=new T,h=new T,d=new rt,f=new rt,g=new rt,_=new T,m=new T;function p(P,w,S){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,w),g.fromBufferAttribute(o,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(_),a[w].add(_),a[S].add(_),c[P].add(m),c[w].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){const S=M[P],L=S.start,k=S.count;for(let B=L,G=L+k;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new T,v=new T,I=new T,R=new T;function C(P){I.fromBufferAttribute(s,P),R.copy(I);const w=a[P];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(R,w);const L=v.dot(c[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,w=M.length;P<w;++P){const S=M[P],L=S.start,k=S.count;for(let B=L,G=L+k;B<G;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,o=new T,r=new T,a=new T,c=new T,l=new T,u=new T,h=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new Ee,xi=new cf,To=new xc,ml=new T,Ao=new T,Ro=new T,Co=new T,Fr=new T,Po=new T,gl=new T,Lo=new T;class Yt extends Ge{constructor(t=new Je,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Po.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Fr.fromBufferAttribute(h,t),r?Po.addScaledVector(Fr,u):Po.addScaledVector(Fr.sub(e),u))}e.add(Po)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(o),xi.copy(t.ray).recast(t.near),!(To.containsPoint(xi.origin)===!1&&(xi.intersectSphere(To,ml)===null||xi.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(o).invert(),xi.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,I=x;v<I;v+=3){const R=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Do(this,p,t,n,l,u,h,R,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Do(this,r,t,n,l,u,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,I=x;v<I;v+=3){const R=v,C=v+1,P=v+2;s=Do(this,p,t,n,l,u,h,R,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=Do(this,r,t,n,l,u,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _f(i,t,e,n,s,o,r,a){let c;if(t.side===We?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===di,a),c===null)return null;Lo.copy(a),Lo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Lo);return l<e.near||l>e.far?null:{distance:l,point:Lo.clone(),object:i}}function Do(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Ao),i.getVertexPosition(c,Ro),i.getVertexPosition(l,Co);const u=_f(i,t,e,n,Ao,Ro,Co,gl);if(u){const h=new T;gn.getBarycoord(gl,Ao,Ro,Co,h),s&&(u.uv=gn.getInterpolatedAttribute(s,a,c,l,h,new rt)),o&&(u.uv1=gn.getInterpolatedAttribute(o,a,c,l,h,new rt)),r&&(u.normal=gn.getInterpolatedAttribute(r,a,c,l,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};gn.getNormal(Ao,Ro,Co,d.normal),u.face=d,u.barycoord=h}return u}class lt extends Je{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(h,2));function g(_,m,p,M,x,v,I,R,C,P,w){const S=v/C,L=I/P,k=v/2,B=I/2,G=R/2,Y=C+1,V=P+1;let J=0,H=0;const nt=new T;for(let ut=0;ut<V;ut++){const ft=ut*L-B;for(let Ut=0;Ut<Y;Ut++){const Kt=Ut*S-k;nt[_]=Kt*M,nt[m]=ft*x,nt[p]=G,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ut/C),h.push(1-ut/P),J+=1}}for(let ut=0;ut<P;ut++)for(let ft=0;ft<C;ft++){const Ut=d+ft+Y*ut,Kt=d+ft+Y*(ut+1),$=d+(ft+1)+Y*(ut+1),ht=d+(ft+1)+Y*ut;c.push(Ut,Kt,ht),c.push(Kt,$,ht),H+=6}a.addGroup(f,H,w),f+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const xf={clone:xs,merge:Qe};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new T,_l=new rt,vl=new rt;class fn extends Wh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,_l,vl),e.subVectors(vl,_l)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class Sf extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const o=new fn(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const r=new fn(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const a=new fn(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const c=new fn(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new fn(Zi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xh extends Ze{constructor(t,e,n,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wf extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lt(5,5,5),o=new On({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:hi});o.uniforms.tEquirect.value=e;const r=new Yt(s,o),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=_n),new Sf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Or=new T,Ef=new T,bf=new Zt;class wi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Or.subVectors(n,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bf.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new xc,Io=new T;class yc{constructor(t=new wi,e=new wi,n=new wi,s=new wi,o=new wi,r=new wi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-o,d-l,m-f,v-p).normalize(),n[1].setComponents(c+o,d+l,m+f,v+p).normalize(),n[2].setComponents(c+r,d+u,m+g,v+M).normalize(),n[3].setComponents(c-r,d-u,m-g,v-M).normalize(),n[4].setComponents(c-a,d-h,m-_,v-x).normalize(),e===Kn)n[5].setComponents(c+a,d+h,m+_,v+x).normalize();else if(e===tr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Tf(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class pi extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-r;for(let x=0;x<l;x++){const v=x*h-o;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),I=M+1+l*(p+1),R=M+1+l*p;f.push(x,v,R),f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$f=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,Tp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zp=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Qm=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:Df,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:zf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:kf,iridescence_fragment:Bf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:Yf,color_pars_fragment:qf,color_pars_vertex:jf,color_vertex:Zf,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Qf,displacementmap_vertex:tp,emissivemap_fragment:ep,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:op,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:cp,envmap_physical_pars_fragment:xp,envmap_vertex:lp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:yp,lights_toon_pars_fragment:Mp,lights_phong_fragment:Sp,lights_phong_pars_fragment:wp,lights_physical_fragment:Ep,lights_physical_pars_fragment:bp,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Rp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Dp,map_fragment:Ip,map_pars_fragment:Up,map_particle_fragment:Np,map_particle_pars_fragment:zp,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:kp,morphcolor_vertex:Bp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:Yp,normal_pars_vertex:qp,normal_vertex:jp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Qp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:om,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:lm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:wm,uv_vertex:Em,worldpos_vertex:bm,background_vert:Tm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Lm,depth_vert:Dm,depth_frag:Im,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:zm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:km,meshbasic_vert:Bm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:Ym,meshnormal_frag:qm,meshphong_vert:jm,meshphong_frag:Zm,meshphysical_vert:Km,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Qm,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:o0},_t={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},In={basic:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([_t.common,_t.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([_t.lights,_t.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};In.physical={uniforms:Qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Uo={r:0,b:0,g:0},Mi=new vn,r0=new Ee;function a0(i,t,e,n,s,o,r){const a=new Ct(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===cr)?(u===void 0&&(u=new Yt(new lt(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:xs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Mi)),u.material.toneMapped=ne.getTransfer(v.colorSpace)!==de,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Yt(new pi(2,2),new On({name:"BackgroundMaterial",uniforms:xs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Uo,Vh(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function c0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(S,L,k,B,G){let Y=!1;const V=h(B,k,L);o!==V&&(o=V,l(o.object)),Y=f(S,B,k,G),Y&&g(S,B,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(S,L,k,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,L,k){const B=k.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Y=G[L.id];Y===void 0&&(Y={},G[L.id]=Y);let V=Y[B];return V===void 0&&(V=d(c()),Y[B]=V),V}function d(S){const L=[],k=[],B=[];for(let G=0;G<e;G++)L[G]=0,k[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,L,k,B){const G=o.attributes,Y=L.attributes;let V=0;const J=k.getAttributes();for(const H in J)if(J[H].location>=0){const ut=G[H];let ft=Y[H];if(ft===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;V++}return o.attributesNum!==V||o.index!==B}function g(S,L,k,B){const G={},Y=L.attributes;let V=0;const J=k.getAttributes();for(const H in J)if(J[H].location>=0){let ut=Y[H];ut===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),G[H]=ft,V++}o.attributes=G,o.attributesNum=V,o.index=B}function _(){const S=o.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const k=o.newAttributes,B=o.enabledAttributes,G=o.attributeDivisors;k[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),G[S]!==L&&(i.vertexAttribDivisor(S,L),G[S]=L)}function M(){const S=o.newAttributes,L=o.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==S[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function x(S,L,k,B,G,Y,V){V===!0?i.vertexAttribIPointer(S,L,k,G,Y):i.vertexAttribPointer(S,L,k,B,G,Y)}function v(S,L,k,B){_();const G=B.attributes,Y=k.getAttributes(),V=L.defaultAttributeValues;for(const J in Y){const H=Y[J];if(H.location>=0){let nt=G[J];if(nt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),nt!==void 0){const ut=nt.normalized,ft=nt.itemSize,Ut=t.get(nt);if(Ut===void 0)continue;const Kt=Ut.buffer,$=Ut.type,ht=Ut.bytesPerElement,At=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===hc;if(nt.isInterleavedBufferAttribute){const pt=nt.data,zt=pt.stride,Ht=nt.offset;if(pt.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)p(H.location+kt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let kt=0;kt<H.locationSize;kt++)x(H.location+kt,ft/H.locationSize,$,ut,zt*ht,(Ht+ft/H.locationSize*kt)*ht,At)}else{if(nt.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)p(H.location+pt,nt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt,ft/H.locationSize,$,ut,ft*ht,ft/H.locationSize*pt*ht,At)}}else if(V!==void 0){const ut=V[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}M()}function I(){P();for(const S in n){const L=n[S];for(const k in L){const B=L[k];for(const G in B)u(B[G].object),delete B[G];delete L[k]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const k in L){const B=L[k];for(const G in B)u(B[G].object),delete B[G];delete L[k]}delete n[S.id]}function C(S){for(const L in n){const k=n[L];if(k[S.id]===void 0)continue;const B=k[S.id];for(const G in B)u(B[G].object),delete B[G];delete k[S.id]}}function P(){w(),r=!0,o!==s&&(o=s,l(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function l0(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==$n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Zn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:I,maxSamples:R}}function u0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new wi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||o&&!m)o?u(null):l();else{const M=o?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let I=0;I!==x;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)r.copy(h[x]).applyMatrix4(M,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function d0(i){let t=new WeakMap;function e(r,a){return a===ya?r.mapping=ms:a===Ma&&(r.mapping=gs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ya||a===Ma)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new wf(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class qh extends Wh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,xl=[.125,.215,.35,.446,.526,.582],Ai=20,kr=new qh,yl=new Ct;let Br=null,Hr=0,Gr=0,Vr=!1;const Ei=(1+Math.sqrt(5))/2,Ji=1/Ei,Ml=[new T(-Ei,Ji,0),new T(Ei,Ji,0),new T(-Ji,0,Ei),new T(Ji,0,Ei),new T(0,Ei,-Ji),new T(0,Ei,Ji),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,Hr,Gr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ro,format:Pn,colorSpace:ws,depthBuffer:!1},s=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(o)),this._blurMaterial=p0(o,t,e)}return s}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s){const a=new fn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(yl),u.toneMapping=ui,u.autoClear=!1;const f=new be({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Yt(new lt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(yl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;No(s,M*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Yt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;No(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ml[(s-o-1)%Ml.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let M=0;for(let C=0;C<Ai;++C){const P=C/_,w=Math.exp(-P*P/2);p.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],I=3*v*(s>x-os?s-x+os:0),R=4*(this._cubeSize-v);No(e,I,R,3*v,2*v),c.setRenderTarget(e),c.render(h,kr)}}function f0(i){const t=[],e=[],n=[];let s=i;const o=i-os+1+xl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-os?c=xl[r-i+os-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,P=R>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(w,_*g*R),x.set(d,m*g*R);const S=[R,R,R,R,R,R];v.set(S,p*g*R)}const I=new Je;I.setAttribute("position",new ln(M,_)),I.setAttribute("uv",new ln(x,m)),I.setAttribute("faceIndex",new ln(v,p)),t.push(I),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){const n=new Float32Array(Ai),s=new T(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function El(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function bl(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function m0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ya||c===Ma,u=c===ms||c===gs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Sl(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Sl(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function g0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const I=M[x+0],R=M[x+1],C=M[x+2];d.push(I,R,R,C,C,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const I=x+0,R=x+1,C=x+2;d.push(I,R,R,C,C,I)}}else return;const m=new(zh(d)?Gh:Hh)(d,1);m.version=_;const p=o.get(h);p&&t.remove(p),o.set(h,m)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function v0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*r,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){const n=new WeakMap,s=new ue;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=a.attributes.position.count*v,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*R*4*h),P=new Oh(C,I,R,h);P.type=Zn,P.needsUpdate=!0;const w=v*4;for(let L=0;L<h;L++){const k=p[L],B=M[L],G=x[L],Y=I*R*4*L;for(let V=0;V<k.count;V++){const J=V*w;g===!0&&(s.fromBufferAttribute(k,V),C[Y+J+0]=s.x,C[Y+J+1]=s.y,C[Y+J+2]=s.z,C[Y+J+3]=0),_===!0&&(s.fromBufferAttribute(B,V),C[Y+J+4]=s.x,C[Y+J+5]=s.y,C[Y+J+6]=s.z,C[Y+J+7]=0),m===!0&&(s.fromBufferAttribute(G,V),C[Y+J+8]=s.x,C[Y+J+9]=s.y,C[Y+J+10]=s.z,C[Y+J+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new rt(I,R)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function M0(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class jh extends Ze{constructor(t,e,n,s,o,r,a,c,l,u=ls){if(u!==ls&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ls&&(n=Li),n===void 0&&u===vs&&(n=_s),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Ze,Tl=new jh(1,1),Kh=new Oh,Jh=new rf,$h=new Xh,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Al[s];if(o===void 0&&(o=new Float32Array(s),Al[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Ll.set(n),i.uniformMatrix2fv(this.addr,!1,Ll),ke(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),ke(e,n)}}function R0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),ke(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function I0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Nh,o=Tl):o=Zh,e.setTexture2D(t||o,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function H0(i){switch(i){case 5126:return S0;case 35664:return w0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return I0;case 36294:return U0;case 36295:return N0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return B0}}function G0(i,t){i.uniform1fv(this.addr,t)}function V0(i,t){const e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){const e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){const e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function Y0(i,t){const e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){const e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j0(i,t){const e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z0(i,t){i.uniform1iv(this.addr,t)}function K0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Zh,o[r])}function sg(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Jh,o[r])}function og(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||$h,o[r])}function rg(i,t,e){const n=this.cache,s=t.length,o=hr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Kh,o[r])}function ag(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return Y0;case 35675:return q0;case 35676:return j0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return rg}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function Dl(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){const n=i.name,s=n.length;for(Wr.lastIndex=0;;){const o=Wr.exec(n),r=Wr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Dl(e,l===void 0?new cg(a,i,t):new lg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new hg(a),Dl(e,h)),e=h}}}class Jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);ug(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dg=37297;let fg=0;function pg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ul=new Zt;function mg(i){ne._getMatrix(Ul,ne.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+pg(i.getShaderSource(t),r)}else return s}function gg(i,t){const e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _g(i,t){let e;switch(t){case _d:e="Linear";break;case vd:e="Reinhard";break;case xd:e="Cineon";break;case yd:e="ACESFilmic";break;case Sd:e="AgX";break;case wd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zo=new T;function vg(){ne.getLuminanceCoefficients(zo);const i=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Gs(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Sg,Eg)}const wg=new Map;function Eg(i,t){let e=$t[t];if(e===void 0){const n=wg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(i){return i.replace(bg,Tg)}function Tg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function kl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Ag(e),l=Rg(e),u=Cg(e),h=Pg(e),d=Lg(e),f=xg(e),g=yg(o),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?$t.tonemapping_pars_fragment:"",e.toneMapping!==ui?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),r=Ja(r),r=zl(r,e),r=Fl(r,e),a=Ja(a),a=zl(a,e),a=Fl(a,e),r=Ol(r),a=Ol(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+r,v=M+p+a,I=Il(s,s.VERTEX_SHADER,x),R=Il(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(R).trim();let Y=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{const J=Nl(s,I,"vertex"),H=Nl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+J+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:Y,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(I),s.deleteShader(R),P=new Jo(s,_),w=Mg(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,dg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let Ig=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function zg(i,t,e,n,s,o,r){const a=new kh,c=new Ug,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,k,B){const G=k.fog,Y=B.geometry,V=w.isMeshStandardMaterial?k.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),H=J&&J.mapping===cr?J.image.height:null,nt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=ut!==void 0?ut.length:0;let Ut=0;Y.morphAttributes.position!==void 0&&(Ut=1),Y.morphAttributes.normal!==void 0&&(Ut=2),Y.morphAttributes.color!==void 0&&(Ut=3);let Kt,$,ht,At;if(nt){const ce=In[nt];Kt=ce.vertexShader,$=ce.fragmentShader}else Kt=w.vertexShader,$=w.fragmentShader,c.update(w),ht=c.getVertexShaderID(w),At=c.getFragmentShaderID(w);const pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Xt=!!w.map,Q=!!w.matcap,K=!!J,A=!!w.aoMap,vt=!!w.lightMap,it=!!w.bumpMap,mt=!!w.normalMap,at=!!w.displacementMap,Ft=!!w.emissiveMap,yt=!!w.metalnessMap,b=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,q=w.dispersion>0,st=w.iridescence>0,Z=w.sheen>0,Tt=w.transmission>0,gt=y&&!!w.anisotropyMap,Et=O&&!!w.clearcoatMap,te=O&&!!w.clearcoatNormalMap,ct=O&&!!w.clearcoatRoughnessMap,bt=st&&!!w.iridescenceMap,Ot=st&&!!w.iridescenceThicknessMap,Gt=Z&&!!w.sheenColorMap,Rt=Z&&!!w.sheenRoughnessMap,ee=!!w.specularMap,Jt=!!w.specularColorMap,ge=!!w.specularIntensityMap,U=Tt&&!!w.transmissionMap,xt=Tt&&!!w.thicknessMap,j=!!w.gradientMap,tt=!!w.alphaMap,wt=w.alphaTest>0,Mt=!!w.alphaHash,qt=!!w.extensions;let Pe=ui;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Xe={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:Kt,fragmentShader:$,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,instancingMorph:Ht&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ws,alphaToCoverage:!!w.alphaToCoverage,map:Xt,matcap:Q,envMap:K,envMapMode:K&&J.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:vt,bumpMap:it,normalMap:mt,displacementMap:d&&at,emissiveMap:Ft,normalMapObjectSpace:mt&&w.normalMapType===Ad,normalMapTangentSpace:mt&&w.normalMapType===_c,metalnessMap:yt,roughnessMap:b,anisotropy:y,anisotropyMap:gt,clearcoat:O,clearcoatMap:Et,clearcoatNormalMap:te,clearcoatRoughnessMap:ct,dispersion:q,iridescence:st,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:ee,specularColorMap:Jt,specularIntensityMap:ge,transmission:Tt,transmissionMap:U,thicknessMap:xt,gradientMap:j,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:wt,alphaHash:Mt,combine:w.combine,mapUv:Xt&&_(w.map.channel),aoMapUv:A&&_(w.aoMap.channel),lightMapUv:vt&&_(w.lightMap.channel),bumpMapUv:it&&_(w.bumpMap.channel),normalMapUv:mt&&_(w.normalMap.channel),displacementMapUv:at&&_(w.displacementMap.channel),emissiveMapUv:Ft&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:gt&&_(w.anisotropyMap.channel),clearcoatMapUv:Et&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(w.sheenRoughnessMap.channel),specularMapUv:ee&&_(w.specularMap.channel),specularColorMapUv:Jt&&_(w.specularColorMap.channel),specularIntensityMapUv:ge&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:xt&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(mt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Xt||tt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Xt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Rn,flipSided:w.side===We,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(S,w),x(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=g[w.type];let L;if(S){const k=In[S];L=xf.clone(k.uniforms)}else L=w.uniforms;return L}function I(w,S){let L;for(let k=0,B=u.length;k<B;k++){const G=u[k];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Dg(i,S,w,o),u.push(L)),L}function R(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:P}}function Fg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Og),n.length>1&&n.sort(d||Bl),s.length>1&&s.sort(d||Bl)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function kg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Hl,i.set(n,[r])):s>=o.length?(r=new Hl,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ct};break;case"SpotLight":e={position:new T,direction:new T,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){const t=new Bg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,o=new Ee,r=new Ee;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,I=0,R=0,C=0;l.sort(Vg);for(let w=0,S=l.length;w<S;w++){const L=l[w],k=L.color,B=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*B,h+=k.g*B,d+=k.b*B;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],B);C++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=V,f++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(k).multiplyScalar(B),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const J=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,J.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const J=L.shadow,H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(B),V.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==I||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=I,P.numLightProbes=C,n.version=Gg++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Gl(i){const t=new Wg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Xg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Gl(i),t.set(s,[a])):o>=r.length?(a=new Gl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yg extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qg extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function Kg(i,t,e){let n=new yc;const s=new rt,o=new rt,r=new ue,a=new Yg({depthPacking:Td}),c=new qg,l={},u=e.maxTextureSize,h={[di]:We,[We]:di,[Rn]:Rn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:jg,fragmentShader:Zg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wh;let p=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==qn&&this.type===qn,G=p===qn&&this.type!==qn;for(let Y=0,V=R.length;Y<V;Y++){const J=R[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),o.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/nt.x),s.x=o.x*nt.x,H.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/nt.y),s.y=o.y*nt.y,H.mapSize.y=o.y)),H.map===null||B===!0||G===!0){const ft=this.type!==qn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new Di(s.x,s.y,ft),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let ft=0;ft<ut;ft++){const Ut=H.getViewport(ft);r.set(o.x*Ut.x,o.y*Ut.y,o.x*Ut.z,o.y*Ut.w),k.viewport(r),H.updateMatrices(J,ft),n=H.getFrustum(),v(C,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&M(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,L)};function M(R,C){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function x(R,C,P,w){let S=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=S.uuid,B=C.uuid;let G=l[k];G===void 0&&(G={},l[k]=G);let Y=G[B];Y===void 0&&(Y=S.clone(),G[B]=Y,C.addEventListener("dispose",I)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,w===qn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=P}return S}function v(R,C,P,w,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const B=t.update(R),G=R.material;if(Array.isArray(G)){const Y=B.groups;for(let V=0,J=Y.length;V<J;V++){const H=Y[V],nt=G[H.materialIndex];if(nt&&nt.visible){const ut=x(R,nt,w,S);R.onBeforeShadow(i,R,C,P,B,ut,H),i.renderBufferDirect(P,null,B,ut,R,H),R.onAfterShadow(i,R,C,P,B,ut,H)}}}else if(G.visible){const Y=x(R,G,w,S);R.onBeforeShadow(i,R,C,P,B,Y,null),i.renderBufferDirect(P,null,B,Y,R,null),R.onAfterShadow(i,R,C,P,B,Y,null)}}const k=R.children;for(let B=0,G=k.length;B<G;B++)v(k[B],C,P,w,S)}function I(R){R.target.removeEventListener("dispose",I);for(const P in l){const w=l[P],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Jg={[fa]:pa,[ma]:va,[ga]:xa,[ps]:_a,[pa]:fa,[va]:ma,[xa]:ga,[_a]:ps};function $g(i,t){function e(){let U=!1;const xt=new ue;let j=null;const tt=new ue(0,0,0,0);return{setMask:function(wt){j!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Mt,qt,Pe,Xe){Xe===!0&&(wt*=Pe,Mt*=Pe,qt*=Pe),xt.set(wt,Mt,qt,Pe),tt.equals(xt)===!1&&(i.clearColor(wt,Mt,qt,Pe),tt.copy(xt))},reset:function(){U=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,j=null,tt=null,wt=null;return{setReversed:function(Mt){if(xt!==Mt){const qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=wt;wt=null,this.setClear(Pe)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Mt){j!==Mt&&!U&&(i.depthMask(Mt),j=Mt)},setFunc:function(Mt){if(xt&&(Mt=Jg[Mt]),tt!==Mt){switch(Mt){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){wt!==Mt&&(xt&&(Mt=1-Mt),i.clearDepth(Mt),wt=Mt)},reset:function(){U=!1,j=null,tt=null,wt=null,xt=!1}}}function s(){let U=!1,xt=null,j=null,tt=null,wt=null,Mt=null,qt=null,Pe=null,Xe=null;return{setTest:function(ce){U||(ce?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!U&&(i.stencilMask(ce),xt=ce)},setFunc:function(ce,yn,Bn){(j!==ce||tt!==yn||wt!==Bn)&&(i.stencilFunc(ce,yn,Bn),j=ce,tt=yn,wt=Bn)},setOp:function(ce,yn,Bn){(Mt!==ce||qt!==yn||Pe!==Bn)&&(i.stencilOp(ce,yn,Bn),Mt=ce,qt=yn,Pe=Bn)},setLocked:function(ce){U=ce},setClear:function(ce){Xe!==ce&&(i.clearStencil(ce),Xe=ce)},reset:function(){U=!1,xt=null,j=null,tt=null,wt=null,Mt=null,qt=null,Pe=null,Xe=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,I=null,R=null,C=new Ct(0,0,0),P=0,w=!1,S=null,L=null,k=null,B=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=J>=2);let nt=null,ut={};const ft=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Kt=new ue().fromArray(ft),$=new ue().fromArray(Ut);function ht(U,xt,j,tt){const wt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(U,Mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<j;qt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Mt}const At={};At[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(ps),it(!1),mt(qc),pt(i.CULL_FACE),A(hi);function pt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function zt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ht(U,xt){return h[U]!==xt?(i.bindFramebuffer(U,xt),h[U]=xt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function kt(U,xt){let j=f,tt=!1;if(U){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const wt=U.textures;if(j.length!==wt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,qt=wt.length;Mt<qt;Mt++)j[Mt]=i.COLOR_ATTACHMENT0+Mt;j.length=wt.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function Xt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Q={[Ti]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Q[td]=i.MIN,Q[ed]=i.MAX;const K={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[cd]:i.DST_COLOR,[rd]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function A(U,xt,j,tt,wt,Mt,qt,Pe,Xe,ce){if(U===hi){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(pt(i.BLEND),_=!0),U!==Ju){if(U!==m||ce!==w){if((p!==Ti||v!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,v=Ti),ce)switch(U){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,x=null,I=null,R=null,C.set(0,0,0),P=0,m=U,w=ce}return}wt=wt||xt,Mt=Mt||j,qt=qt||tt,(xt!==p||wt!==v)&&(i.blendEquationSeparate(Q[xt],Q[wt]),p=xt,v=wt),(j!==M||tt!==x||Mt!==I||qt!==R)&&(i.blendFuncSeparate(K[j],K[tt],K[Mt],K[qt]),M=j,x=tt,I=Mt,R=qt),(Pe.equals(C)===!1||Xe!==P)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Xe),C.copy(Pe),P=Xe),m=U,w=!1}function vt(U,xt){U.side===Rn?zt(i.CULL_FACE):pt(i.CULL_FACE);let j=U.side===We;xt&&(j=!j),it(j),U.blending===cs&&U.transparent===!1?A(hi):A(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);const tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function mt(U){U!==Zu?(pt(i.CULL_FACE),U!==L&&(U===qc?i.cullFace(i.BACK):U===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),L=U}function at(U){U!==k&&(V&&i.lineWidth(U),k=U)}function Ft(U,xt,j){U?(pt(i.POLYGON_OFFSET_FILL),(B!==xt||G!==j)&&(i.polygonOffset(xt,j),B=xt,G=j)):zt(i.POLYGON_OFFSET_FILL)}function yt(U){U?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+Y-1),nt!==U&&(i.activeTexture(U),nt=U)}function y(U,xt,j){j===void 0&&(nt===null?j=i.TEXTURE0+Y-1:j=nt);let tt=ut[j];tt===void 0&&(tt={type:void 0,texture:void 0},ut[j]=tt),(tt.type!==U||tt.texture!==xt)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(U,xt||At[U]),tt.type=U,tt.texture=xt)}function O(){const U=ut[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){Kt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Kt.copy(U))}function Rt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function ee(U,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let tt=j.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(xt,U.name),j.set(U,tt))}function Jt(U,xt){const tt=l.get(xt).get(U);c.get(xt)!==tt&&(i.uniformBlockBinding(xt,tt,U.__bindingPointIndex),c.set(xt,tt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ut={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,I=null,R=null,C=new Ct(0,0,0),P=0,w=!1,S=null,L=null,k=null,B=null,G=null,Kt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:zt,bindFramebuffer:Ht,drawBuffers:kt,useProgram:Xt,setBlending:A,setMaterial:vt,setFlipSided:it,setCullFace:mt,setLineWidth:at,setPolygonOffset:Ft,setScissorTest:yt,activeTexture:b,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:st,texImage2D:bt,texImage3D:Ot,updateUBOMapping:ee,uniformBlockBinding:Jt,texStorage2D:te,texStorage3D:ct,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Et,scissor:Gt,viewport:Rt,reset:ge}}function Vl(i,t,e,n){const s=Qg(n);switch(e){case Ch:return i*t;case Lh:return i*t;case Dh:return i*t*2;case fc:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case Yo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uh:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qg(i){switch(i){case $n:case Th:return{byteLength:1,components:1};case Js:case Ah:case ro:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case Li:case hc:case Zn:return{byteLength:4,components:1};case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function t_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):er("canvas")}function _(b,y,O){let q=1;const st=yt(b);if((st.width>O||st.height>O)&&(q=O/Math.max(st.width,st.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(q*st.width),Tt=Math.floor(q*st.height);h===void 0&&(h=g(Z,Tt));const gt=y?g(Z,Tt):h;return gt.width=Z,gt.height=Tt,gt.getContext("2d").drawImage(b,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+Tt+")."),gt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,y,O,q,st=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=y;if(y===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const Tt=st?lr:ne.getTransfer(q);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Tt===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(b,y){let O;return b?y===null||y===Li||y===_s?O=i.DEPTH24_STENCIL8:y===Zn?O=i.DEPTH32F_STENCIL8:y===Js&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===_s?O=i.DEPTH_COMPONENT24:y===Zn?O=i.DEPTH_COMPONENT32F:y===Js&&(O=i.DEPTH_COMPONENT16),O}function I(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){const y=b.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&u.delete(y)}function C(b){const y=b.target;y.removeEventListener("dispose",C),S(y)}function P(b){const y=n.get(b);if(y.__webglInit===void 0)return;const O=b.source,q=d.get(O);if(q){const st=q[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(b),Object.keys(q).length===0&&d.delete(O)}n.remove(b)}function w(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const O=b.source,q=d.get(O);delete q[y.__cacheKey],r.memory.textures--}function S(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let st=0;st<y.__webglFramebuffer[q].length;st++)i.deleteFramebuffer(y.__webglFramebuffer[q][st]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,st=O.length;q<st;q++){const Z=n.get(O[q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(O[q])}n.remove(b)}let L=0;function k(){L=0}function B(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function G(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Y(b,y){const O=n.get(b);if(b.isVideoTexture&&at(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,b,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function V(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function J(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function H(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){ht(O,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const nt={[Sa]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},ut={[nn]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},ft={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[Nh]:i.LEQUAL,[Pd]:i.EQUAL,[Id]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function Ut(b,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===vr||y.magFilter===go||y.magFilter===Ci||y.minFilter===_n||y.minFilter===vr||y.minFilter===go||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,nt[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,nt[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,nt[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==go&&y.minFilter!==Ci||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let st=d.get(q);st===void 0&&(st={},d.set(q,st));const Z=G(y);if(Z!==b.__cacheKey){st[Z]===void 0&&(st[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),st[Z].usedTimes++;const Tt=st[b.__cacheKey];Tt!==void 0&&(st[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(y)),b.__cacheKey=Z,b.__webglTexture=st[Z].texture}return O}function $(b,y,O){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const st=Kt(b,y),Z=y.source;e.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const Tt=n.get(Z);if(Z.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+O);const gt=ne.getPrimaries(ne.workingColorSpace),Et=y.colorSpace===li?null:ne.getPrimaries(y.colorSpace),te=y.colorSpace===li||gt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ct=_(y.image,!1,s.maxTextureSize);ct=Ft(y,ct);const bt=o.convert(y.format,y.colorSpace),Ot=o.convert(y.type);let Gt=x(y.internalFormat,bt,Ot,y.colorSpace,y.isVideoTexture);Ut(q,y);let Rt;const ee=y.mipmaps,Jt=y.isVideoTexture!==!0,ge=Tt.__version===void 0||st===!0,U=Z.dataReady,xt=I(y,ct);if(y.isDepthTexture)Gt=v(y.format===vs,y.type),ge&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,bt,Ot,null));else if(y.isDataTexture)if(ee.length>0){Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ee[0].width,ee[0].height);for(let j=0,tt=ee.length;j<tt;j++)Rt=ee[j],Jt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,bt,Ot,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,bt,Ot,Rt.data);y.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ct.width,ct.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,bt,Ot,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,bt,Ot,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,ee[0].width,ee[0].height,ct.depth);for(let j=0,tt=ee.length;j<tt;j++)if(Rt=ee[j],y.format!==Pn)if(bt!==null)if(Jt){if(U)if(y.layerUpdates.size>0){const wt=Vl(Rt.width,Rt.height,y.format,y.type);for(const Mt of y.layerUpdates){const qt=Rt.data.subarray(Mt*wt/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*wt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Mt,Rt.width,Rt.height,1,bt,qt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,ct.depth,bt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Rt.width,Rt.height,ct.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,ct.depth,bt,Ot,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Rt.width,Rt.height,ct.depth,0,bt,Ot,Rt.data)}else{Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,xt,Gt,ee[0].width,ee[0].height);for(let j=0,tt=ee.length;j<tt;j++)Rt=ee[j],y.format!==Pn?bt!==null?Jt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,bt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,bt,Ot,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Rt.width,Rt.height,0,bt,Ot,Rt.data)}else if(y.isDataArrayTexture)if(Jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Gt,ct.width,ct.height,ct.depth),U)if(y.layerUpdates.size>0){const j=Vl(ct.width,ct.height,y.format,y.type);for(const tt of y.layerUpdates){const wt=ct.data.subarray(tt*j/ct.data.BYTES_PER_ELEMENT,(tt+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ct.width,ct.height,1,bt,Ot,wt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ot,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,bt,Ot,ct.data);else if(y.isData3DTexture)Jt?(ge&&e.texStorage3D(i.TEXTURE_3D,xt,Gt,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ot,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,bt,Ot,ct.data);else if(y.isFramebufferTexture){if(ge)if(Jt)e.texStorage2D(i.TEXTURE_2D,xt,Gt,ct.width,ct.height);else{let j=ct.width,tt=ct.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Gt,j,tt,0,bt,Ot,null),j>>=1,tt>>=1}}else if(ee.length>0){if(Jt&&ge){const j=yt(ee[0]);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}for(let j=0,tt=ee.length;j<tt;j++)Rt=ee[j],Jt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,bt,Ot,Rt):e.texImage2D(i.TEXTURE_2D,j,Gt,bt,Ot,Rt);y.generateMipmaps=!1}else if(Jt){if(ge){const j=yt(ct);e.texStorage2D(i.TEXTURE_2D,xt,Gt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ot,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,bt,Ot,ct);m(y)&&p(q),Tt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ht(b,y,O){if(y.image.length!==6)return;const q=Kt(b,y),st=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const Z=n.get(st);if(st.version!==Z.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Tt=ne.getPrimaries(ne.workingColorSpace),gt=y.colorSpace===li?null:ne.getPrimaries(y.colorSpace),Et=y.colorSpace===li||Tt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let tt=0;tt<6;tt++)!te&&!ct?bt[tt]=_(y.image[tt],!0,s.maxCubemapSize):bt[tt]=ct?y.image[tt].image:y.image[tt],bt[tt]=Ft(y,bt[tt]);const Ot=bt[0],Gt=o.convert(y.format,y.colorSpace),Rt=o.convert(y.type),ee=x(y.internalFormat,Gt,Rt,y.colorSpace),Jt=y.isVideoTexture!==!0,ge=Z.__version===void 0||q===!0,U=st.dataReady;let xt=I(y,Ot);Ut(i.TEXTURE_CUBE_MAP,y);let j;if(te){Jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){j=bt[tt].mipmaps;for(let wt=0;wt<j.length;wt++){const Mt=j[wt];y.format!==Pn?Gt!==null?Jt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,ee,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,ee,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{if(j=y.mipmaps,Jt&&ge){j.length>0&&xt++;const tt=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ct){Jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt[tt].width,bt[tt].height,Gt,Rt,bt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,bt[tt].width,bt[tt].height,0,Gt,Rt,bt[tt].data);for(let wt=0;wt<j.length;wt++){const qt=j[wt].image[tt].image;Jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,qt.width,qt.height,Gt,Rt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,ee,qt.width,qt.height,0,Gt,Rt,qt.data)}}else{Jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,Rt,bt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,Gt,Rt,bt[tt]);for(let wt=0;wt<j.length;wt++){const Mt=j[wt];Jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Gt,Rt,Mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,ee,Gt,Rt,Mt.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=st.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function At(b,y,O,q,st,Z){const Tt=o.convert(O.format,O.colorSpace),gt=o.convert(O.type),Et=x(O.internalFormat,Tt,gt,O.colorSpace),te=n.get(y),ct=n.get(O);if(ct.__renderTarget=y,!te.__hasExternalTextures){const bt=Math.max(1,y.width>>Z),Ot=Math.max(1,y.height>>Z);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,Et,bt,Ot,y.depth,0,Tt,gt,null):e.texImage2D(st,Z,Et,bt,Ot,0,Tt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,st,ct.__webglTexture,0,it(y)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,st,ct.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const q=y.depthTexture,st=q&&q.isDepthTexture?q.type:null,Z=v(y.stencilBuffer,st),Tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=it(y);mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,b)}else{const q=y.textures;for(let st=0;st<q.length;st++){const Z=q[st],Tt=o.convert(Z.format,Z.colorSpace),gt=o.convert(Z.type),Et=x(Z.internalFormat,Tt,gt,Z.colorSpace),te=it(y);O&&mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Et,y.width,y.height):mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const st=q.__webglTexture,Z=it(y);if(y.depthTexture.format===ls)mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(y.depthTexture.format===vs)mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(b){const y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",st)};q.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[q],b,!1);else{const st=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,y,O){const q=n.get(b);y!==void 0&&At(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ht(b)}function Xt(b){const y=b.texture,O=n.get(b),q=n.get(y);b.addEventListener("dispose",C);const st=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,r.memory.textures++),Z){O.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[gt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)O.__webglFramebuffer[gt][Et]=i.createFramebuffer()}else O.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)O.__webglFramebuffer[gt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let gt=0,Et=st.length;gt<Et;gt++){const te=n.get(st[gt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&mt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){const Et=st[gt];O.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);const te=o.convert(Et.format,Et.colorSpace),ct=o.convert(Et.type),bt=x(Et.internalFormat,te,ct,Et.colorSpace,b.isXRRenderTarget===!0),Ot=it(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,bt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)At(O.__webglFramebuffer[gt][Et],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else At(O.__webglFramebuffer[gt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let gt=0,Et=st.length;gt<Et;gt++){const te=st[gt],ct=n.get(te);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Ut(i.TEXTURE_2D,te),At(O.__webglFramebuffer,b,te,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,q.__webglTexture),Ut(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)At(O.__webglFramebuffer[Et],b,y,i.COLOR_ATTACHMENT0,gt,Et);else At(O.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,gt,0);m(y)&&p(gt),e.unbindTexture()}b.depthBuffer&&Ht(b)}function Q(b){const y=b.textures;for(let O=0,q=y.length;O<q;O++){const st=y[O];if(m(st)){const Z=M(b),Tt=n.get(st).__webglTexture;e.bindTexture(Z,Tt),p(Z),e.unbindTexture()}}}const K=[],A=[];function vt(b){if(b.samples>0){if(mt(b)===!1){const y=b.textures,O=b.width,q=b.height;let st=i.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),gt=y.length>1;if(gt)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const te=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,st,i.NEAREST),c===!0&&(K.length=0,A.length=0,K.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&b.resolveDepthBuffer===!1&&(K.push(Z),A.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const te=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(b){return Math.min(s.maxSamples,b.samples)}function mt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(b){const y=r.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Ft(b,y){const O=b.colorSpace,q=b.format,st=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ws&&O!==li&&(ne.getTransfer(O)===de?(q!==Pn||st!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function yt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=At,this.useMultisampledRTT=mt}function e_(i,t){function e(n,s=li){let o;const r=ne.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Pn)return i.RGBA;if(n===Lh)return i.LUMINANCE;if(n===Dh)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===Yo||n===qo||n===jo||n===Zo)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===ba||n===Ta||n===Aa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ea)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ra||n===Ca)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Pa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Da||n===Ia||n===Ua||n===Na||n===za||n===Fa||n===Oa||n===ka||n===Ba||n===Ha||n===Ga||n===Va||n===Wa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===La)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Xa||n===Ya)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ko)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===qa||n===ja||n===Za)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class n_ extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class It extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i_={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
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

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:s_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Es{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new r_,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],I=new rt;let R=null;const C=new fn;C.viewport=new ue;const P=new fn;P.viewport=new ue;const w=[C,P],S=new n_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=x[$];return ht===void 0&&(ht=new Xr,x[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=x[$];return ht===void 0&&(ht=new Xr,x[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=x[$];return ht===void 0&&(ht=new Xr,x[$]=ht),ht.getHandSpace()};function B($){const ht=v.indexOf($.inputSource);if(ht===-1)return;const At=x[ht];At!==void 0&&(At.update($.inputSource,$.frame,l||r),At.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<x.length;$++){const ht=v[$];ht!==null&&(v[$]=null,x[$].disconnect(ht))}L=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Di(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,At=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?vs:ls,At=m.stencil?_s:Li);const zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Di(d.textureWidth,d.textureHeight,{format:Pn,type:$n,depthTexture:new jh(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let ht=0;ht<$.removed.length;ht++){const At=$.removed[ht],pt=v.indexOf(At);pt>=0&&(v[pt]=null,x[pt].disconnect(At))}for(let ht=0;ht<$.added.length;ht++){const At=$.added[ht];let pt=v.indexOf(At);if(pt===-1){for(let Ht=0;Ht<x.length;Ht++)if(Ht>=v.length){v.push(At),pt=Ht;break}else if(v[Ht]===null){v[Ht]=At,pt=Ht;break}if(pt===-1)break}const zt=x[pt];zt&&zt.connect(At)}}const V=new T,J=new T;function H($,ht,At){V.setFromMatrixPosition(ht.matrixWorld),J.setFromMatrixPosition(At.matrixWorld);const pt=V.distanceTo(J),zt=ht.projectionMatrix.elements,Ht=At.projectionMatrix.elements,kt=zt[14]/(zt[10]-1),Xt=zt[14]/(zt[10]+1),Q=(zt[9]+1)/zt[5],K=(zt[9]-1)/zt[5],A=(zt[8]-1)/zt[0],vt=(Ht[8]+1)/Ht[0],it=kt*A,mt=kt*vt,at=pt/(-A+vt),Ft=at*-A;if(ht.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ft),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const yt=kt+at,b=Xt+at,y=it-Ft,O=mt+(pt-Ft),q=Q*Xt/b*yt,st=K*Xt/b*yt;$.projectionMatrix.makePerspective(y,O,q,st,yt,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ht=$.near,At=$.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(At=_.depthFar)),S.near=P.near=C.near=ht,S.far=P.far=C.far=At,(L!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const pt=$.parent,zt=S.cameras;nt(S,pt);for(let Ht=0;Ht<zt.length;Ht++)nt(zt[Ht],pt);zt.length===2?H(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),ut($,S,pt)};function ut($,ht,At){At===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$s*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ft=null;function Ut($,ht){if(u=ht.getViewerPose(l||r),g=ht,u!==null){const At=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let pt=!1;At.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Ht=0;Ht<At.length;Ht++){const kt=At[Ht];let Xt=null;if(f!==null)Xt=f.getViewport(kt);else{const K=h.getViewSubImage(d,kt);Xt=K.viewport,Ht===0&&(t.setRenderTargetTextures(M,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(M))}let Q=w[Ht];Q===void 0&&(Q=new fn,Q.layers.enable(Ht),Q.viewport=new ue,w[Ht]=Q),Q.matrix.fromArray(kt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(kt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ht===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(Q)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ht=h.getDepthInformation(At[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let At=0;At<x.length;At++){const pt=v[At],zt=x[At];pt!==null&&zt!==void 0&&zt.update(pt,ht,l||r)}ft&&ft($,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Kt=new Yh;Kt.setAnimationLoop(Ut),this.setAnimationLoop=function($){ft=$},this.dispose=function(){}}}const Si=new vn,c_=new Ee;function l_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),h(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(M,I);const R=t.render.frame;o[M.id]!==R&&(d(M),o[M.id]=R)}function u(M){const x=h();M.__bindingPointIndex=x;const v=i.createBuffer(),I=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],v=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=v.length;R<C;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,S=P.length;w<S;w++){const L=P[w];if(f(L,R,w,I)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let Y=0;Y<B.length;Y++){const V=B[Y],J=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,v,I){const R=M.value,C=x+"_"+v;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{const P=I[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return I[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(M){const x=M.uniforms;let v=0;const I=16;for(let C=0,P=x.length;C<P;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,L=w.length;S<L;S++){const k=w[S],B=Array.isArray(k.value)?k.value:[k.value];for(let G=0,Y=B.length;G<Y;G++){const V=B[G],J=_(V),H=v%I,nt=H%J.boundary,ut=H+nt;v+=nt,ut!==0&&I-ut<J.storage&&(v+=I-ut),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=J.storage}}}const R=v%I;return R>0&&(v+=I-R),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class u_{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=ui,this.toneMappingExposure=1;const v=this;let I=!1,R=0,C=0,P=null,w=-1,S=null;const L=new ue,k=new ue;let B=null;const G=new Ct(0);let Y=0,V=e.width,J=e.height,H=1,nt=null,ut=null;const ft=new ue(0,0,V,J),Ut=new ue(0,0,V,J);let Kt=!1;const $=new yc;let ht=!1,At=!1;const pt=new Ee,zt=new Ee,Ht=new T,kt=new ue,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function K(){return P===null?H:1}let A=n;function vt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),A===null){const N="webgl2";if(A=vt(N,E),A===null)throw vt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,mt,at,Ft,yt,b,y,O,q,st,Z,Tt,gt,Et,te,ct,bt,Ot,Gt,Rt,ee,Jt,ge,U;function xt(){it=new g0(A),it.init(),Jt=new e_(A,it),mt=new h0(A,it,t,Jt),at=new $g(A,it),mt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Ft=new x0(A),yt=new Fg,b=new t_(A,it,at,yt,mt,Jt,Ft),y=new d0(v),O=new m0(v),q=new Tf(A),ge=new c0(A,q),st=new _0(A,q,Ft,ge),Z=new M0(A,st,q,Ft),Gt=new y0(A,mt,b),ct=new u0(yt),Tt=new zg(v,y,O,it,mt,ge,ct),gt=new l_(v,yt),Et=new kg,te=new Xg(it),Ot=new a0(v,y,O,at,Z,f,c),bt=new Kg(v,Z,mt),U=new h_(A,Ft,mt,at),Rt=new l0(A,it,Ft),ee=new v0(A,it,Ft),Ft.programs=Tt.programs,v.capabilities=mt,v.extensions=it,v.properties=yt,v.renderLists=Et,v.shadowMap=bt,v.state=at,v.info=Ft}xt();const j=new a_(v,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(V,J,!1))},this.getSize=function(E){return E.set(V,J)},this.setSize=function(E,N,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,J=N,e.width=Math.floor(E*H),e.height=Math.floor(N*H),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(V*H,J*H).floor()},this.setDrawingBufferSize=function(E,N,W){V=E,J=N,H=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,N,W,X){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,N,W,X),at.viewport(L.copy(ft).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ut)},this.setScissor=function(E,N,W,X){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,N,W,X),at.scissor(k.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){at.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(E=!0,N=!0,W=!0){let X=0;if(E){let z=!1;if(P!==null){const dt=P.texture.format;z=dt===gc||dt===mc||dt===pc}if(z){const dt=P.texture.type,St=dt===$n||dt===Li||dt===Js||dt===_s||dt===uc||dt===dc,Pt=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Vt=Pt.r,jt=Pt.g,Dt=Pt.b;St?(g[0]=Vt,g[1]=jt,g[2]=Dt,g[3]=Lt,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Vt,_[1]=jt,_[2]=Dt,_[3]=Lt,A.clearBufferiv(A.COLOR,0,_))}else X|=A.COLOR_BUFFER_BIT}N&&(X|=A.DEPTH_BUFFER_BIT),W&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),te.dispose(),yt.dispose(),y.dispose(),O.dispose(),Z.dispose(),ge.dispose(),U.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",kc),j.removeEventListener("sessionend",Bc),gi.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=Ft.autoReset,N=bt.enabled,W=bt.autoUpdate,X=bt.needsUpdate,z=bt.type;xt(),Ft.autoReset=E,bt.enabled=N,bt.autoUpdate=W,bt.needsUpdate=X,bt.type=z}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){const N=E.target;N.removeEventListener("dispose",qt),Pe(N)}function Pe(E){Xe(E),yt.remove(E)}function Xe(E){const N=yt.get(E).programs;N!==void 0&&(N.forEach(function(W){Tt.releaseProgram(W)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,X,z,dt){N===null&&(N=Xt);const St=z.isMesh&&z.matrixWorld.determinant()<0,Pt=Wu(E,N,W,X,z);at.setMaterial(X,St);let Lt=W.index,Vt=1;if(X.wireframe===!0){if(Lt=st.getWireframeAttribute(W),Lt===void 0)return;Vt=2}const jt=W.drawRange,Dt=W.attributes.position;let ie=jt.start*Vt,_e=(jt.start+jt.count)*Vt;dt!==null&&(ie=Math.max(ie,dt.start*Vt),_e=Math.min(_e,(dt.start+dt.count)*Vt)),Lt!==null?(ie=Math.max(ie,0),_e=Math.min(_e,Lt.count)):Dt!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,Dt.count));const xe=_e-ie;if(xe<0||xe===1/0)return;ge.setup(z,X,Pt,W,Lt);let sn,se=Rt;if(Lt!==null&&(sn=q.get(Lt),se=ee,se.setIndex(sn)),z.isMesh)X.wireframe===!0?(at.setLineWidth(X.wireframeLinewidth*K()),se.setMode(A.LINES)):se.setMode(A.TRIANGLES);else if(z.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),at.setLineWidth(Nt*K()),z.isLineSegments?se.setMode(A.LINES):z.isLineLoop?se.setMode(A.LINE_LOOP):se.setMode(A.LINE_STRIP)}else z.isPoints?se.setMode(A.POINTS):z.isSprite&&se.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,Hn=z._multiDrawCounts,oe=z._multiDrawCount,Mn=Lt?q.get(Lt).bytesPerElement:1,Fi=yt.get(X).currentProgram.getUniforms();for(let hn=0;hn<oe;hn++)Fi.setValue(A,"_gl_DrawID",hn),se.render(Nt[hn]/Mn,Hn[hn])}else if(z.isInstancedMesh)se.renderInstances(ie,xe,z.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Hn=Math.min(W.instanceCount,Nt);se.renderInstances(ie,xe,Hn)}else se.render(ie,xe)};function ce(E,N,W){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,mo(E,N,W),E.side=di,E.needsUpdate=!0,mo(E,N,W),E.side=Rn):mo(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),p=te.get(W),p.init(N),x.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Pt=dt[St];ce(Pt,W,z),X.add(Pt)}else ce(dt,W,z),X.add(dt)}),x.pop(),p=null,X},this.compileAsync=function(E,N,W=null){const X=this.compile(E,N,W);return new Promise(z=>{function dt(){if(X.forEach(function(St){yt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){z(E);return}setTimeout(dt,10)}it.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let yn=null;function Bn(E){yn&&yn(E)}function kc(){gi.stop()}function Bc(){gi.start()}const gi=new Yh;gi.setAnimationLoop(Bn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(E){yn=E,j.setAnimationLoop(E),E===null?gi.stop():gi.start()},j.addEventListener("sessionstart",kc),j.addEventListener("sessionend",Bc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,P),p=te.get(E,x.length),p.init(N),x.push(p),zt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(zt),At=this.localClippingEnabled,ht=ct.init(this.clippingPlanes,At),m=Et.get(E,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&_r(dt,N,-1/0,v.sortObjects)}_r(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,ut),Q=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Q&&Ot.addToRenderList(m,E),this.info.render.frame++,ht===!0&&ct.beginShadows();const W=p.state.shadowsArray;bt.render(W,E,N),ht===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),N.isArrayCamera){const dt=N.cameras;if(z.length>0)for(let St=0,Pt=dt.length;St<Pt;St++){const Lt=dt[St];Gc(X,z,E,Lt)}Q&&Ot.render(E);for(let St=0,Pt=dt.length;St<Pt;St++){const Lt=dt[St];Hc(m,E,Lt,Lt.viewport)}}else z.length>0&&Gc(X,z,E,N),Q&&Ot.render(E),Hc(m,E,N);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,N),ge.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],ht===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function _r(E,N,W,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){X&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);const St=Z.update(E),Pt=E.material;Pt.visible&&m.push(E,St,Pt,W,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const St=Z.update(E),Pt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),kt.copy(St.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(Pt)){const Lt=St.groups;for(let Vt=0,jt=Lt.length;Vt<jt;Vt++){const Dt=Lt[Vt],ie=Pt[Dt.materialIndex];ie&&ie.visible&&m.push(E,St,ie,W,kt.z,Dt)}}else Pt.visible&&m.push(E,St,Pt,W,kt.z,null)}}const dt=E.children;for(let St=0,Pt=dt.length;St<Pt;St++)_r(dt[St],N,W,X)}function Hc(E,N,W,X){const z=E.opaque,dt=E.transmissive,St=E.transparent;p.setupLightsView(W),ht===!0&&ct.setGlobalState(v.clippingPlanes,W),X&&at.viewport(L.copy(X)),z.length>0&&po(z,N,W),dt.length>0&&po(dt,N,W),St.length>0&&po(St,N,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Gc(E,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Di(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ro:$n,minFilter:Ci,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],St=X.viewport||L;dt.setSize(St.z,St.w);const Pt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(G),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ot.render(W);const Lt=v.toneMapping;v.toneMapping=ui;const Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ht===!0&&ct.setGlobalState(v.clippingPlanes,X),po(E,W,X),b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt),it.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Dt=0,ie=N.length;Dt<ie;Dt++){const _e=N[Dt],xe=_e.object,sn=_e.geometry,se=_e.material,Nt=_e.group;if(se.side===Rn&&xe.layers.test(X.layers)){const Hn=se.side;se.side=We,se.needsUpdate=!0,Vc(xe,W,X,sn,se,Nt),se.side=Hn,se.needsUpdate=!0,jt=!0}}jt===!0&&(b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt))}v.setRenderTarget(Pt),v.setClearColor(G,Y),Vt!==void 0&&(X.viewport=Vt),v.toneMapping=Lt}function po(E,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let z=0,dt=E.length;z<dt;z++){const St=E[z],Pt=St.object,Lt=St.geometry,Vt=X===null?St.material:X,jt=St.group;Pt.layers.test(W.layers)&&Vc(Pt,N,W,Lt,Vt,jt)}}function Vc(E,N,W,X,z,dt){E.onBeforeRender(v,N,W,X,z,dt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,N,W,X,E,dt),z.transparent===!0&&z.side===Rn&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,v.renderBufferDirect(W,N,X,z,E,dt),z.side=di,z.needsUpdate=!0,v.renderBufferDirect(W,N,X,z,E,dt),z.side=Rn):v.renderBufferDirect(W,N,X,z,E,dt),E.onAfterRender(v,N,W,X,z,dt)}function mo(E,N,W){N.isScene!==!0&&(N=Xt);const X=yt.get(E),z=p.state.lights,dt=p.state.shadowsArray,St=z.state.version,Pt=Tt.getParameters(E,z.state,dt,N,W),Lt=Tt.getProgramCacheKey(Pt);let Vt=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?O:y).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",qt),Vt=new Map,X.programs=Vt);let jt=Vt.get(Lt);if(jt!==void 0){if(X.currentProgram===jt&&X.lightsStateVersion===St)return Xc(E,Pt),jt}else Pt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(Pt,v),jt=Tt.acquireProgram(Pt,Lt),Vt.set(Lt,jt),X.uniforms=Pt.uniforms;const Dt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),Xc(E,Pt),X.needsLights=Yu(E),X.lightsStateVersion=St,X.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMap.value=z.state.directionalShadowMap,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotShadowMap.value=z.state.spotShadowMap,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMap.value=z.state.pointShadowMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=jt,X.uniformsList=null,jt}function Wc(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Xc(E,N){const W=yt.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Wu(E,N,W,X,z){N.isScene!==!0&&(N=Xt),b.resetTextureUnits();const dt=N.fog,St=X.isMeshStandardMaterial?N.environment:null,Pt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ws,Lt=(X.isMeshStandardMaterial?O:y).get(X.envMap||St),Vt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,jt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,_e=!!W.morphAttributes.color;let xe=ui;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=v.toneMapping);const sn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=sn!==void 0?sn.length:0,Nt=yt.get(X),Hn=p.state.lights;if(ht===!0&&(At===!0||E!==S)){const pn=E===S&&X.id===w;ct.setState(X,E,pn)}let oe=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Hn.state.version||Nt.outputColorSpace!==Pt||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Lt||X.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ct.numPlanes||Nt.numIntersection!==ct.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==jt||Nt.morphTargets!==Dt||Nt.morphNormals!==ie||Nt.morphColors!==_e||Nt.toneMapping!==xe||Nt.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Nt.__version=X.version);let Mn=Nt.currentProgram;oe===!0&&(Mn=mo(X,N,z));let Fi=!1,hn=!1,Rs=!1;const ye=Mn.getUniforms(),Ln=Nt.uniforms;if(at.useProgram(Mn.program)&&(Fi=!0,hn=!0,Rs=!0),X.id!==w&&(w=X.id,hn=!0),Fi||S!==E){at.buffers.depth.getReversed()?(pt.copy(E.projectionMatrix),Qd(pt),tf(pt),ye.setValue(A,"projectionMatrix",pt)):ye.setValue(A,"projectionMatrix",E.projectionMatrix),ye.setValue(A,"viewMatrix",E.matrixWorldInverse);const ti=ye.map.cameraPosition;ti!==void 0&&ti.setValue(A,Ht.setFromMatrixPosition(E.matrixWorld)),mt.logarithmicDepthBuffer&&ye.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ye.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,hn=!0,Rs=!0)}if(z.isSkinnedMesh){ye.setOptional(A,z,"bindMatrix"),ye.setOptional(A,z,"bindMatrixInverse");const pn=z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ye.setValue(A,"boneTexture",pn.boneTexture,b))}z.isBatchedMesh&&(ye.setOptional(A,z,"batchingTexture"),ye.setValue(A,"batchingTexture",z._matricesTexture,b),ye.setOptional(A,z,"batchingIdTexture"),ye.setValue(A,"batchingIdTexture",z._indirectTexture,b),ye.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&ye.setValue(A,"batchingColorTexture",z._colorsTexture,b));const Cs=W.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&Gt.update(z,W,Mn),(hn||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,ye.setValue(A,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=Lt,Ln.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Ln.envMapIntensity.value=N.environmentIntensity),hn&&(ye.setValue(A,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Xu(Ln,Rs),dt&&X.fog===!0&&gt.refreshFogUniforms(Ln,dt),gt.refreshMaterialUniforms(Ln,X,H,J,p.state.transmissionRenderTarget[E.id]),Jo.upload(A,Wc(Nt),Ln,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jo.upload(A,Wc(Nt),Ln,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ye.setValue(A,"center",z.center),ye.setValue(A,"modelViewMatrix",z.modelViewMatrix),ye.setValue(A,"normalMatrix",z.normalMatrix),ye.setValue(A,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const pn=X.uniformsGroups;for(let ti=0,ei=pn.length;ti<ei;ti++){const Yc=pn[ti];U.update(Yc,Mn),U.bind(Yc,Mn)}}return Mn}function Xu(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Yu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,W){yt.get(E.texture).__webglTexture=N,yt.get(E.depthTexture).__webglTexture=W;const X=yt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const W=yt.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){P=E,R=N,C=W;let X=!0,z=null,dt=!1,St=!1;if(E){const Lt=yt.get(E);if(Lt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(A.FRAMEBUFFER,null),X=!1;else if(Lt.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Lt.__hasExternalTextures)b.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Dt=E.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&yt.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const jt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(jt[N])?z=jt[N][W]:z=jt[N],dt=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?z=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(jt)?z=jt[W]:z=jt,L.copy(E.viewport),k.copy(E.scissor),B=E.scissorTest}else L.copy(ft).multiplyScalar(H).floor(),k.copy(Ut).multiplyScalar(H).floor(),B=Kt;if(at.bindFramebuffer(A.FRAMEBUFFER,z)&&X&&at.drawBuffers(E,z),at.viewport(L),at.scissor(k),at.setScissorTest(B),dt){const Lt=yt.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Lt.__webglTexture,W)}else if(St){const Lt=yt.get(E.texture),Vt=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Lt.__webglTexture,W||0,Vt)}w=-1},this.readRenderTargetPixels=function(E,N,W,X,z,dt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){at.bindFramebuffer(A.FRAMEBUFFER,Pt);try{const Lt=E.texture,Vt=Lt.format,jt=Lt.type;if(!mt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&W>=0&&W<=E.height-z&&A.readPixels(N,W,X,z,Jt.convert(Vt),Jt.convert(jt),dt)}finally{const Lt=P!==null?yt.get(P).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,X,z,dt,St){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){const Lt=E.texture,Vt=Lt.format,jt=Lt.type;if(!mt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-X&&W>=0&&W<=E.height-z){at.bindFramebuffer(A.FRAMEBUFFER,Pt);const Dt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.bufferData(A.PIXEL_PACK_BUFFER,dt.byteLength,A.STREAM_READ),A.readPixels(N,W,X,z,Jt.convert(Vt),Jt.convert(jt),0);const ie=P!==null?yt.get(P).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,ie);const _e=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await $d(A,_e,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,dt),A.deleteBuffer(Dt),A.deleteSync(_e),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,W=0){E.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(E.image.width*X),dt=Math.floor(E.image.height*X),St=N!==null?N.x:0,Pt=N!==null?N.y:0;b.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,St,Pt,z,dt),at.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,X=null,z=0){E.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],N=arguments[2],z=arguments[3]||0,W=null);let dt,St,Pt,Lt,Vt,jt,Dt,ie,_e;const xe=E.isCompressedTexture?E.mipmaps[z]:E.image;W!==null?(dt=W.max.x-W.min.x,St=W.max.y-W.min.y,Pt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Vt=W.min.y,jt=W.isBox3?W.min.z:0):(dt=xe.width,St=xe.height,Pt=xe.depth||1,Lt=0,Vt=0,jt=0),X!==null?(Dt=X.x,ie=X.y,_e=X.z):(Dt=0,ie=0,_e=0);const sn=Jt.convert(N.format),se=Jt.convert(N.type);let Nt;N.isData3DTexture?(b.setTexture3D(N,0),Nt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Nt=A.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Nt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Hn=A.getParameter(A.UNPACK_ROW_LENGTH),oe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mn=A.getParameter(A.UNPACK_SKIP_PIXELS),Fi=A.getParameter(A.UNPACK_SKIP_ROWS),hn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,xe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,xe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,jt);const Rs=E.isDataArrayTexture||E.isData3DTexture,ye=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ln=yt.get(E),Cs=yt.get(N),pn=yt.get(Ln.__renderTarget),ti=yt.get(Cs.__renderTarget);at.bindFramebuffer(A.READ_FRAMEBUFFER,pn.__webglFramebuffer),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<Pt;ei++)Rs&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,z,jt+ei),E.isDepthTexture?(ye&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,z,_e+ei),A.blitFramebuffer(Lt,Vt,dt,St,Dt,ie,dt,St,A.DEPTH_BUFFER_BIT,A.NEAREST)):ye?A.copyTexSubImage3D(Nt,z,Dt,ie,_e+ei,Lt,Vt,dt,St):A.copyTexSubImage2D(Nt,z,Dt,ie,_e+ei,Lt,Vt,dt,St);at.bindFramebuffer(A.READ_FRAMEBUFFER,null),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ye?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Nt,z,Dt,ie,_e,dt,St,Pt,sn,se,xe.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Nt,z,Dt,ie,_e,dt,St,Pt,sn,xe.data):A.texSubImage3D(Nt,z,Dt,ie,_e,dt,St,Pt,sn,se,xe):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Dt,ie,dt,St,sn,se,xe.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Dt,ie,xe.width,xe.height,sn,xe.data):A.texSubImage2D(A.TEXTURE_2D,z,Dt,ie,dt,St,sn,se,xe);A.pixelStorei(A.UNPACK_ROW_LENGTH,Hn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,oe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Fi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,hn),z===0&&N.generateMipmaps&&A.generateMipmap(Nt),at.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W=null,X=null,z=0){return E.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],N=arguments[3],z=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,W,X,z)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),at.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,at.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Sc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class d_ extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class f_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new T;class nr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),o=he(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qh extends Ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $i;const Us=new T,Qi=new T,ts=new T,es=new rt,Ns=new rt,tu=new Ee,Fo=new T,zs=new T,Oo=new T,Wl=new rt,Yr=new rt,Xl=new rt;class p_ extends Ge{constructor(t=new Qh){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new f_(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new nr(n,3,0,!1)),$i.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;ko(Fo.set(-.5,-.5,0),ts,r,Qi,s,o),ko(zs.set(.5,-.5,0),ts,r,Qi,s,o),ko(Oo.set(.5,.5,0),ts,r,Qi,s,o),Wl.set(0,0),Yr.set(1,0),Xl.set(1,1);let a=t.ray.intersectTriangle(Fo,zs,Oo,!1,Us);if(a===null&&(ko(zs.set(-.5,.5,0),ts,r,Qi,s,o),Yr.set(0,1),a=t.ray.intersectTriangle(Fo,Oo,zs,!1,Us),a===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:gn.getInterpolation(Us,Fo,zs,Oo,Wl,Yr,Xl,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ko(i,t,e,n,s,o){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=o*es.x-s*es.y,Ns.y=s*es.x+o*es.y):Ns.copy(es),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(tu)}class eu extends Ze{constructor(t=null,e=1,n=1,s,o,r,a,c,l=nn,u=nn,h,d){super(null,r,a,c,l,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nu extends Ze{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new rt:new T);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],o=[],r=[],a=new T,c=new Ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}o[0]=new T,r[0]=new T;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(He(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(He(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wc extends kn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m_ extends wc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,f*=u,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Bo=new T,qr=new Ec,jr=new Ec,Zr=new Ec;class g_ extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Bo.subVectors(s[0],s[1]).add(s[0]),l=Bo);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Bo.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qr.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),jr.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Zr.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),jr.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Zr.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(qr.calc(c),jr.calc(c),Zr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function __(i,t){const e=1-i;return e*e*t}function v_(i,t){return 2*(1-i)*i*t}function x_(i,t){return i*i*t}function Ys(i,t,e,n){return __(i,t)+v_(i,e)+x_(i,n)}function y_(i,t){const e=1-i;return e*e*e*t}function M_(i,t){const e=1-i;return 3*e*e*i*t}function S_(i,t){return 3*(1-i)*i*i*t}function w_(i,t){return i*i*i*t}function qs(i,t,e,n,s){return y_(i,t)+M_(i,e)+S_(i,n)+w_(i,s)}class iu extends kn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,s.x,o.x,r.x,a.x),qs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E_ extends kn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,s.x,o.x,r.x,a.x),qs(t,s.y,o.y,r.y,a.y),qs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class su extends kn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b_ extends kn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends kn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ys(t,s.x,o.x,r.x),Ys(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends kn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ys(t,s.x,o.x,r.x),Ys(t,s.y,o.y,r.y),Ys(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Yl(a,c.x,l.x,u.x,h.x),Yl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:g_,CubicBezierCurve:iu,CubicBezierCurve3:E_,EllipseCurve:wc,LineCurve:su,LineCurve3:b_,QuadraticBezierCurve:ou,QuadraticBezierCurve3:T_,SplineCurve:ru});class A_ extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $a[s.type]().fromJSON(s))}return this}}class Qa extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new su(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new ou(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new iu(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ru(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new wc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bc extends Je{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],u=1/e,h=new T,d=new rt,f=new T,g=new T,_=new T;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*u*s,v=Math.sin(x),I=Math.cos(x);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*v,h.y=t[R].y,h.z=t[R].x*I,r.push(h.x,h.y,h.z),d.x=M/e,d.y=R/(t.length-1),a.push(d.x,d.y);const C=c[3*R+0]*v,P=c[3*R+1],w=c[3*R+0]*I;l.push(C,P,w)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,I=v,R=v+t.length,C=v+t.length+1,P=v+1;o.push(I,R,P),o.push(C,P,R)}this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.points,t.segments,t.phiStart,t.phiLength)}}class je extends bc{constructor(t=1,e=1,n=4,s=8){const o=new Qa;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new je(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tc extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new T,u=new rt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Je{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function M(){const v=new T,I=new T;let R=0;const C=(e-t)/n;for(let P=0;P<=o;P++){const w=[],S=P/o,L=S*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,G=B*c+a,Y=Math.sin(G),V=Math.cos(G);I.x=L*Y,I.y=-S*n+m,I.z=L*V,h.push(I.x,I.y,I.z),v.set(Y,C,V).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-S),w.push(g++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<o;w++){const S=_[w][P],L=_[w+1][P],k=_[w+1][P+1],B=_[w][P+1];(t>0||w!==0)&&(u.push(S,L,B),R+=3),(e>0||w!==o-1)&&(u.push(L,k,B),R+=3)}l.addGroup(p,R,0),p+=R}function x(v){const I=g,R=new rt,C=new T;let P=0;const w=v===!0?t:e,S=v===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const G=k/s*c+a,Y=Math.cos(G),V=Math.sin(G);C.x=w*V,C.y=m*S,C.z=w*Y,h.push(C.x,C.y,C.z),d.push(0,S,0),R.x=Y*.5+.5,R.y=V*.5*S+.5,f.push(R.x,R.y),g++}for(let k=0;k<s;k++){const B=I+k,G=L+k;v===!0?u.push(G,G+1,B):u.push(G+1,G,B),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ze extends Qt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ze(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends Je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),u(),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(o.slice(),3)),this.setAttribute("uv",new me(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new T,v=new T,I=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],v),f(e[R+2],I),c(x,v,I,M)}function c(M,x,v,I){const R=I+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const w=M.clone().lerp(v,P/R),S=x.clone().lerp(v,P/R),L=R-P;for(let k=0;k<=L;k++)k===0&&P===R?C[P][k]=w:C[P][k]=w.clone().lerp(S,k/L)}for(let P=0;P<R;P++)for(let w=0;w<2*(R-P)-1;w++){const S=Math.floor(w/2);w%2===0?(d(C[P][S+1]),d(C[P+1][S]),d(C[P][S])):(d(C[P][S+1]),d(C[P+1][S+1]),d(C[P+1][S]))}}function l(M){const x=new T;for(let v=0;v<o.length;v+=3)x.x=o[v+0],x.y=o[v+1],x.z=o[v+2],x.normalize().multiplyScalar(M),o[v+0]=x.x,o[v+1]=x.y,o[v+2]=x.z}function u(){const M=new T;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];const v=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;r.push(v,1-I)}g(),h()}function h(){for(let M=0;M<r.length;M+=6){const x=r[M+0],v=r[M+2],I=r[M+4],R=Math.max(x,v,I),C=Math.min(x,v,I);R>.9&&C<.1&&(x<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),I<.2&&(r[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function f(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new T,x=new T,v=new T,I=new T,R=new rt,C=new rt,P=new rt;for(let w=0,S=0;w<o.length;w+=9,S+=6){M.set(o[w+0],o[w+1],o[w+2]),x.set(o[w+3],o[w+4],o[w+5]),v.set(o[w+6],o[w+7],o[w+8]),R.set(r[S+0],r[S+1]),C.set(r[S+2],r[S+3]),P.set(r[S+4],r[S+5]),I.copy(M).add(x).add(v).divideScalar(3);const L=m(I);_(R,S+0,M,L),_(C,S+2,x,L),_(P,S+4,v,L)}}function _(M,x,v,I){I<0&&M.x===1&&(r[x]=M.x-1),v.x===0&&v.z===0&&(r[x]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.vertices,t.indices,t.radius,t.details)}}class ur extends lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ur(t.radius,t.detail)}}class au extends Qa{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qa().fromJSON(s))}return this}}const R_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=cu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,f;if(n&&(o=I_(i,t,o,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Qs(o,r,e,a,c,f,0),r}};function cu(i,t,e,n,s){let o,r;if(s===W_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=ql(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=ql(o,i[o],i[o+1],r);return r&&dr(r,r.next)&&(eo(r),r=r.next),r}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&O_(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?P_(i,n,s,o):C_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),eo(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=L_(Ii(i),t,e),Qs(i,t,e,n,s,o,2)):r===2&&D_(i,t,e,n,s,o):Qs(Ii(i),t,e,n,s,o,1);break}}}function C_(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&rs(s,a,o,c,r,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ce(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=tc(f,g,t,e,n),M=tc(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&rs(a,u,c,h,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&rs(a,u,c,h,l,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&rs(a,u,c,h,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&rs(a,u,c,h,l,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function L_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!dr(s,o)&&lu(s,n,n.next,o)&&to(s,o)&&to(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),eo(n),eo(n.next),n=i=o),n=n.next}while(n!==i);return Ii(n)}function D_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&H_(r,a)){let c=hu(r,a);r=Ii(r,r.next),c=Ii(c,c.next),Qs(r,t,e,n,s,o,0),Qs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function I_(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=cu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(B_(l));for(s.sort(U_),o=0;o<s.length;o++)e=N_(s[o],e);return e}function U_(i,t){return i.x-t.x}function N_(i,t){const e=z_(i,t);if(!e)return t;const n=hu(e,i);return Ii(n,n.next),Ii(e,e.next)}function z_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&rs(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),to(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&F_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function F_(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function O_(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function B_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rs(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function H_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G_(i,t)&&(to(i,t)&&to(t,i)&&V_(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||dr(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dr(i,t){return i.x===t.x&&i.y===t.y}function lu(i,t,e,n){const s=Go(Ce(i,t,e)),o=Go(Ce(i,t,n)),r=Go(Ce(e,n,i)),a=Go(Ce(e,n,t));return!!(s!==o&&r!==a||s===0&&Ho(i,e,t)||o===0&&Ho(i,n,t)||r===0&&Ho(e,i,n)||a===0&&Ho(e,t,n))}function Ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Go(i){return i>0?1:i<0?-1:0}function G_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function to(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function V_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){const e=new ec(i.i,i.x,i.y),n=new ec(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ql(i,t,e,n){const s=new ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class js{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return js.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];jl(t),Zl(n,t);let r=t.length;e.forEach(jl);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Zl(n,e[c]);const a=R_.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function jl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ac extends Je{constructor(t=new au([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:X_;let x,v=!1,I,R,C,P;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,I=p.computeFrenetFrames(u,!1),R=new T,C=new T,P=new T),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(l);let S=w.shape;const L=w.holes;if(!js.isClockWise(S)){S=S.reverse();for(let Q=0,K=L.length;Q<K;Q++){const A=L[Q];js.isClockWise(A)&&(L[Q]=A.reverse())}}const B=js.triangulateShape(S,L),G=S;for(let Q=0,K=L.length;Q<K;Q++){const A=L[Q];S=S.concat(A)}function Y(Q,K,A){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(K,A)}const V=S.length,J=B.length;function H(Q,K,A){let vt,it,mt;const at=Q.x-K.x,Ft=Q.y-K.y,yt=A.x-Q.x,b=A.y-Q.y,y=at*at+Ft*Ft,O=at*b-Ft*yt;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(y),st=Math.sqrt(yt*yt+b*b),Z=K.x-Ft/q,Tt=K.y+at/q,gt=A.x-b/st,Et=A.y+yt/st,te=((gt-Z)*b-(Et-Tt)*yt)/(at*b-Ft*yt);vt=Z+at*te-Q.x,it=Tt+Ft*te-Q.y;const ct=vt*vt+it*it;if(ct<=2)return new rt(vt,it);mt=Math.sqrt(ct/2)}else{let q=!1;at>Number.EPSILON?yt>Number.EPSILON&&(q=!0):at<-Number.EPSILON?yt<-Number.EPSILON&&(q=!0):Math.sign(Ft)===Math.sign(b)&&(q=!0),q?(vt=-Ft,it=at,mt=Math.sqrt(y)):(vt=at,it=Ft,mt=Math.sqrt(y/2))}return new rt(vt/mt,it/mt)}const nt=[];for(let Q=0,K=G.length,A=K-1,vt=Q+1;Q<K;Q++,A++,vt++)A===K&&(A=0),vt===K&&(vt=0),nt[Q]=H(G[Q],G[A],G[vt]);const ut=[];let ft,Ut=nt.concat();for(let Q=0,K=L.length;Q<K;Q++){const A=L[Q];ft=[];for(let vt=0,it=A.length,mt=it-1,at=vt+1;vt<it;vt++,mt++,at++)mt===it&&(mt=0),at===it&&(at=0),ft[vt]=H(A[vt],A[mt],A[at]);ut.push(ft),Ut=Ut.concat(ft)}for(let Q=0;Q<m;Q++){const K=Q/m,A=f*Math.cos(K*Math.PI/2),vt=g*Math.sin(K*Math.PI/2)+_;for(let it=0,mt=G.length;it<mt;it++){const at=Y(G[it],nt[it],vt);pt(at.x,at.y,-A)}for(let it=0,mt=L.length;it<mt;it++){const at=L[it];ft=ut[it];for(let Ft=0,yt=at.length;Ft<yt;Ft++){const b=Y(at[Ft],ft[Ft],vt);pt(b.x,b.y,-A)}}}const Kt=g+_;for(let Q=0;Q<V;Q++){const K=d?Y(S[Q],Ut[Q],Kt):S[Q];v?(C.copy(I.normals[0]).multiplyScalar(K.x),R.copy(I.binormals[0]).multiplyScalar(K.y),P.copy(x[0]).add(C).add(R),pt(P.x,P.y,P.z)):pt(K.x,K.y,0)}for(let Q=1;Q<=u;Q++)for(let K=0;K<V;K++){const A=d?Y(S[K],Ut[K],Kt):S[K];v?(C.copy(I.normals[Q]).multiplyScalar(A.x),R.copy(I.binormals[Q]).multiplyScalar(A.y),P.copy(x[Q]).add(C).add(R),pt(P.x,P.y,P.z)):pt(A.x,A.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const K=Q/m,A=f*Math.cos(K*Math.PI/2),vt=g*Math.sin(K*Math.PI/2)+_;for(let it=0,mt=G.length;it<mt;it++){const at=Y(G[it],nt[it],vt);pt(at.x,at.y,h+A)}for(let it=0,mt=L.length;it<mt;it++){const at=L[it];ft=ut[it];for(let Ft=0,yt=at.length;Ft<yt;Ft++){const b=Y(at[Ft],ft[Ft],vt);v?pt(b.x,b.y+x[u-1].y,x[u-1].x+A):pt(b.x,b.y,h+A)}}}$(),ht();function $(){const Q=s.length/3;if(d){let K=0,A=V*K;for(let vt=0;vt<J;vt++){const it=B[vt];zt(it[2]+A,it[1]+A,it[0]+A)}K=u+m*2,A=V*K;for(let vt=0;vt<J;vt++){const it=B[vt];zt(it[0]+A,it[1]+A,it[2]+A)}}else{for(let K=0;K<J;K++){const A=B[K];zt(A[2],A[1],A[0])}for(let K=0;K<J;K++){const A=B[K];zt(A[0]+V*u,A[1]+V*u,A[2]+V*u)}}n.addGroup(Q,s.length/3-Q,0)}function ht(){const Q=s.length/3;let K=0;At(G,K),K+=G.length;for(let A=0,vt=L.length;A<vt;A++){const it=L[A];At(it,K),K+=it.length}n.addGroup(Q,s.length/3-Q,1)}function At(Q,K){let A=Q.length;for(;--A>=0;){const vt=A;let it=A-1;it<0&&(it=Q.length-1);for(let mt=0,at=u+m*2;mt<at;mt++){const Ft=V*mt,yt=V*(mt+1),b=K+vt+Ft,y=K+it+Ft,O=K+it+yt,q=K+vt+yt;Ht(b,y,O,q)}}}function pt(Q,K,A){c.push(Q),c.push(K),c.push(A)}function zt(Q,K,A){kt(Q),kt(K),kt(A);const vt=s.length/3,it=M.generateTopUV(n,s,vt-3,vt-2,vt-1);Xt(it[0]),Xt(it[1]),Xt(it[2])}function Ht(Q,K,A,vt){kt(Q),kt(K),kt(vt),kt(K),kt(A),kt(vt);const it=s.length/3,mt=M.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);Xt(mt[0]),Xt(mt[1]),Xt(mt[3]),Xt(mt[1]),Xt(mt[2]),Xt(mt[3])}function kt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Xt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Y_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $a[s.type]().fromJSON(s)),new Ac(n,t.options)}}const X_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new rt(o,r),new rt(a,c),new rt(l,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new rt(r,1-c),new rt(l,1-h),new rt(d,1-g),new rt(_,1-p)]:[new rt(a,1-c),new rt(u,1-h),new rt(f,1-g),new rt(m,1-p)]}};function Y_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ts extends lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ts(t.radius,t.detail)}}class Qn extends lo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qn(t.radius,t.detail)}}class Re extends Je{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){const R=I/e;h.x=-t*Math.cos(s+R*o)*Math.sin(r+x*a),h.y=t*Math.cos(r+x*a),h.z=t*Math.sin(s+R*o)*Math.sin(r+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-x),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=u[p][M+1],v=u[p][M],I=u[p+1][M],R=u[p+1][M+1];(p!==0||r>0)&&f.push(x,v,R),(p!==n-1||c<Math.PI)&&f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zi extends Je{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new T,h=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*o,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;r.push(_,m,M),r.push(m,p,M)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class q_ extends Ni{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uu extends Ni{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Rc extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class j_ extends Rc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new Ee,Kl=new T,Jl=new T;class du{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $l=new Ee,Fs=new T,Jr=new T;class Z_ extends du{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class fr extends Rc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Z_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class K_ extends du{constructor(){super(new qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J_ extends Rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new K_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ql(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);class Q_{constructor(t){D(this,"keys",new Set);D(this,"pressed",new Set);D(this,"dragDX",0);D(this,"dragDY",0);D(this,"wheel",0);D(this,"clicked",!1);D(this,"dragging",!1);D(this,"dragTravel",0);D(this,"downAt",0);window.addEventListener("keydown",e=>{if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.metaKey){this.keys.clear();return}this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>{e.key==="Meta"?this.keys.clear():this.keys.delete(e.code)}),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("visibilitychange",()=>this.keys.clear()),t.addEventListener("pointerdown",e=>{this.dragging=!0,this.dragTravel=0,this.downAt=performance.now(),t.setPointerCapture(e.pointerId)}),t.addEventListener("pointerup",()=>{this.dragging&&this.dragTravel<6&&performance.now()-this.downAt<300&&(this.clicked=!0),this.dragging=!1}),t.addEventListener("pointercancel",()=>this.dragging=!1),t.addEventListener("pointermove",e=>{this.dragging&&(this.dragDX+=e.movementX,this.dragDY+=e.movementY,this.dragTravel+=Math.abs(e.movementX)+Math.abs(e.movementY))}),t.addEventListener("wheel",e=>this.wheel+=e.deltaY,{passive:!0})}setVirtual(t,e){e?(this.keys.has(t)||this.pressed.add(t),this.keys.add(t)):this.keys.delete(t)}down(t){return this.keys.has(t)}justPressed(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.clicked=!1,this.dragDX=0,this.dragDY=0,this.wheel=0}}let ci=null;function tv(){if(ci)return ci;const i=new Uint8Array([70,70,160,160,255,255]);return ci=new eu(i,i.length,1,fc),ci.minFilter=nn,ci.magFilter=nn,ci.generateMipmaps=!1,ci.needsUpdate=!0,ci}function Cc(i){return new uu({color:i,gradientMap:tv()})}const ev=new be({color:1318954,side:We});function nv(i,t=.04){const e=new Yt(i.geometry,ev);return e.scale.setScalar(1+t),e.castShadow=!1,e.receiveShadow=!1,i.add(e),e}function F(i,t,e=.04){const n=new Yt(i,Cc(t));return n.castShadow=!0,n.receiveShadow=!0,e>0&&nv(n,e),n}const iv=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position.z = gl_Position.w;
}
`,sv=`
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
`;function ov(i){const t=new It,e=new Yt(new Re(800,32,16),new On({vertexShader:iv,fragmentShader:sv,side:We,depthWrite:!1,uniforms:{uTop:{value:new Ct(3837672)},uHorizon:{value:new Ct(12576511)},uSunDir:{value:i}}}));e.renderOrder=-1,t.add(e);const n=new be({color:16777215,fog:!1}),s=new It,o=pr(7);for(let r=0;r<26;r++){const a=new It,c=3+Math.floor(o()*4);for(let h=0;h<c;h++){const d=8+o()*10,f=new Yt(new Re(d,10,8),n);f.position.set(h*d*1.1-c*d*.5,o()*4,o()*6),f.scale.y=.55,a.add(f)}const l=o()*Math.PI*2,u=260+o()*260;a.position.set(Math.cos(l)*u,70+o()*90,Math.sin(l)*u),a.lookAt(0,a.position.y,0),s.add(a)}return t.add(s),{group:t,update(r,a){t.position.set(a.x,0,a.z),s.rotation.y+=r*.004}}}function pr(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const nc=24,ho=[];function Pc(i,t,e){const n=t-i.x,s=e-i.z,o=Math.cos(i.yaw),r=Math.sin(i.yaw);return[n*o-s*r,n*r+s*o]}function Lc(i,t,e,n=0){const[s,o]=Pc(i,t,e);return Math.abs(s)<i.hx+n&&Math.abs(o)<i.hz+n}function rv(i,t,e){let n=-1/0;for(const s of ho)s.top<=e+.65&&s.top>n&&Lc(s,i,t)&&(n=s.top);return n}function av(i,t,e){for(const n of ho)if(Math.abs(n.top-e)<.2&&Lc(n,i,t))return n;return null}function cv(i,t,e){const n=Math.cos(i.yaw),s=Math.sin(i.yaw);return[i.x+t*n+e*s,i.z-t*s+e*n]}function lv(i,t){if(i.bottom>t.top+.25||t.bottom>i.top+.25)return!1;const[e,n]=Pc(i,t.x,t.z),s=t.yaw-i.yaw,o=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),a=t.hx*o+t.hz*r,c=t.hx*r+t.hz*o,l=i.hx+a-Math.abs(e),u=i.hz+c-Math.abs(n);if(l<=0||u<=0)return!1;let h=0,d=0;l<u?h=Math.sign(e||1)*l:d=Math.sign(n||1)*u;const[f,g]=cv({...i,x:0,z:0},h,d);return i.x-=f*.5,i.z-=g*.5,t.x+=f*.5,t.z+=g*.5,!0}function hv(i,t){for(const e of ho){if(i.y>e.top-.25||i.y<e.bottom-2.5)continue;let[n,s]=Pc(e,i.x,i.z);const o=e.hx+t-Math.abs(n),r=e.hz+t-Math.abs(s);if(o<=0||r<=0)continue;o<r?n=Math.sign(n||1)*(e.hx+t):s=Math.sign(s||1)*(e.hz+t);const a=Math.cos(e.yaw),c=Math.sin(e.yaw);i.x=e.x+n*a+s*c,i.z=e.z-n*c+s*a}}const th=new rt(0,-20),uv=46,zn=new rt(0,10),ir=500,dv={x0:-150,z0:-172,w:300,d:280},sr={x0:-470,z0:-460,w:940,d:940},ys=[{name:"Ambergoose Caye",x:264,z:40,r:80},{name:"Caye Honkker",x:340,z:188,r:44},{name:"The Great Blue Hole",x:400,z:-130,r:42},{name:"Xunangoosich",x:230,z:-250,r:52},{name:"Caroni Swamp",x:110,z:250,r:38},{name:"Nylon Pool",x:-110,z:200,r:22},{name:"Pigeon Point",x:-210,z:272,r:34},{name:"Maracas Bay",x:-270,z:110,r:64},{name:"Pitch Lake",x:-330,z:-60,r:40},{name:"Port of Honk",x:-260,z:-225,r:48},{name:"Chacachacare Light",x:-400,z:30,r:20}],fv={meadow:"Skyfall Meadow",jungle:"Circuit Jungle",savanna:"Sunscorch Savanna",mountain:"Mount Honk",beach:"Gull Beach",islet:"Lonely Islet"};function pv(i,t){for(const n of ys)if(Math.hypot(i-n.x,t-n.z)<n.r*.95)return n.name;const e=no(i,t);return e?fv[e]??null:null}const as={x:400,z:-130},Ue={x:-270,z:110,bayX:-270,bayZ:168},Ne={x:-330,z:-60,r:14,top:.85},us={x:230,z:-250,base:2.4},eh={x:-110,z:200},fu=[{x:0,z:-20,r:uv,rise:3.2,region:"meadow"},{x:50,z:-28,r:24,rise:3,region:"jungle"},{x:90,z:-32,r:42,rise:3.6,region:"jungle"},{x:-50,z:-14,r:22,rise:3,region:"savanna"},{x:-92,z:-18,r:40,rise:4.2,region:"savanna"},{x:26,z:-76,r:26,rise:3.2,region:"mountain"},{x:48,z:-112,r:36,rise:3.4,region:"mountain"},{x:2,z:38,r:26,rise:2,region:"beach"},{x:-42,z:72,r:13,rise:2.6,region:"islet"},{x:120,z:34,r:12,rise:2.6,region:"islet"},{x:-118,z:-84,r:14,rise:2.6,region:"islet"},{x:-18,z:-104,r:12,rise:2.6,region:"islet"},{x:250,z:-10,r:22,rise:2.2,region:"caye"},{x:262,z:25,r:26,rise:2.4,region:"caye"},{x:272,z:62,r:22,rise:2.2,region:"caye"},{x:280,z:96,r:18,rise:2,region:"caye"},{x:330,z:170,r:20,rise:2,region:"caye"},{x:352,z:206,r:16,rise:2,region:"caye"},{x:230,z:-250,r:48,rise:3.4,region:"maya"},{x:110,z:250,r:34,rise:1.5,region:"swamp"},{x:-210,z:272,r:30,rise:2,region:"caye"},{x:-270,z:110,r:60,rise:3.6,region:"northern"},{x:-330,z:-60,r:36,rise:3,region:"pitch"},{x:-260,z:-225,r:44,rise:3,region:"town"},{x:-400,z:30,r:17,rise:3.2,region:"light"}],rn={x:50,z:-114},mv=new Set(["caye","maya","northern","swamp","town","pitch","light"]);function pu(i,t){return Math.sin(i*.11+1.3)*Math.cos(t*.09-.7)*.6+Math.sin(i*.23-t*.19)*.3+Math.cos(i*.05+t*.07)*.5}function mu(i,t,e){return 1-ot.smoothstep(Math.hypot(t-i.x,e-i.z)/i.r,.55,1.08)}function Wt(i,t){const e=pu(i,t);let n=0;for(const d of fu){if(Math.abs(i-d.x)>d.r*1.1||Math.abs(t-d.z)>d.r*1.1)continue;const f=mu(d,i,t);if(f<=0)continue;const g=d.region==="beach"||d.region==="caye"||d.region==="swamp",_=f*d.rise-1.6+e*f*(g?.3:1.2);n+=Math.exp((_+1.6)*3)}let s=n>1?Math.log(n)/3-1.6:-1.6;const o=Math.hypot(i-8,t+42);s+=(1-ot.smoothstep(o,4,18))*7;const r=Math.hypot(i-rn.x,t-rn.z),a=1-ot.smoothstep(r,4,36);s+=Math.pow(a,1.4)*(19+Math.abs(Math.sin(i*.21)*Math.cos(t*.17))*3);const c=Math.hypot(i+96,t+22);if(s+=(1-ot.smoothstep(c,8,30))*1.6,i<-150){const d=1-ot.smoothstep(Math.hypot((i-Ue.x)/1.7,t-82),5,32);s+=Math.pow(d,1.3)*(12+Math.abs(Math.sin(i*.17)*Math.cos(t*.13))*4);const f=1-ot.smoothstep(Math.hypot(i-Ue.bayX,t-Ue.bayZ),26,37);s=ot.lerp(s,-1.6,f);const g=1-ot.smoothstep(Math.hypot(i-Ne.x,t-Ne.z),Ne.r-2,Ne.r+4);s=ot.lerp(s,Ne.top,g)}const l=1-ot.smoothstep(Math.hypot(i-us.x,t-us.z),15,22);l>0&&(s=ot.lerp(s,us.base,l));const u=Math.hypot(i-as.x,t-as.z);if(u<44){const d=Math.abs(Math.atan2(t-as.z,i-as.x)),f=ot.smoothstep(Math.PI-d,.1,.24),g=(1-ot.smoothstep(Math.abs(u-31),2.5,8))*f;let _=u<31?ot.lerp(-2.8,-.9,ot.smoothstep(u,11,15)):ot.lerp(-.9,-1.6,ot.smoothstep(u,31,42));_=Math.max(_,-1.6+g*2.2+e*g*.2),s=_+(s+1.6)}const h=Math.hypot(i-eh.x,t-eh.z);return h<24&&(s=Math.max(s,ot.lerp(-.3,-1.6,ot.smoothstep(h,10,22)))),s}function no(i,t){let e=null,n=.05;for(const s of fu){const o=mu(s,i,t)*(s.r/40+.5);o>n&&(n=o,e=s.region)}return e==="jungle"||e==="savanna"||e&&mv.has(e)?e:Math.hypot(i-as.x,t-as.z)<42?"reef":Math.hypot(i-rn.x,t-rn.z)<40?"mountain":e}const Fe={x:8,z:-42,deckHeight:7.175},Dc=Wt(Fe.x,Fe.z),xn=[{x:Fe.x,z:Fe.z,r:2.9,top:Dc+Fe.deckHeight}],bn={x:Fe.x,z:Fe.z+2.35,bottom:Wt(Fe.x,Fe.z+2.35),top:Dc+Fe.deckHeight,normal:new T(0,0,1)};function Tn(i,t,e){let n=Wt(i,t);for(const s of xn)s.top>n&&s.top<=e+.65&&Math.hypot(i-s.x,t-s.z)<s.r&&(n=s.top);return Math.max(n,rv(i,t,e))}const Ke=[...[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([i,t])=>({x:Fe.x+i,z:Fe.z+t,r:.25,top:Dc+Fe.deckHeight-.2}))];function gu(i,t){hv(i,t);for(const e of Ke){if(i.y>e.top)continue;const n=i.x-e.x,s=i.z-e.z,o=Math.hypot(n,s),r=e.r+t;if(!(o>=r)){if(o<1e-4){i.x+=r;continue}i.x=e.x+n/o*r,i.z=e.z+s/o*r}}}const le={x:-100,z:-26,r:4.2,top:0};le.top=Wt(le.x,le.z)+5.6;xn.push({x:le.x,z:le.z,r:le.r,top:le.top});const _u=[];for(let i=0;i<9;i++){const t=-.6+i*.42,e=le.x+Math.cos(t)*6.2,n=le.z+Math.sin(t)*6.2,s=Wt(e,n)+.55+i*.58;_u.push({x:e,z:n,top:s}),xn.push({x:e,z:n,r:1.25,top:s})}const fe={x:4,z0:52,z1:76,top:.95};for(let i=fe.z0;i<=fe.z1;i+=1.5)xn.push({x:fe.x,z:i,r:1.45,top:fe.top});const on={x:94,z:-34},Te={sand:new Ct(15916187),whiteSand:new Ct(16511442),grass:new Ct(7127626),darkGrass:new Ct(5217850),jungle:new Ct(3115578),jungleDark:new Ct(2388794),savanna:new Ct(13940828),savannaDark:new Ct(12558149),rock:new Ct(10853002),snow:new Ct(16054266),rainforest:new Ct(2062908),rainforestDark:new Ct(1533231),mud:new Ct(7039546),mudDark:new Ct(5658671),scrub:new Ct(10135640),pitch:new Ct(1579036),cliff:new Ct(9278340)};function vu(i,t,e,n){const s=no(i,t),o=pu(i*2,t*2)>.2;s==="pitch"&&Math.hypot(i-Ne.x,t-Ne.z)<Ne.r?n.copy(Te.pitch):e<.7?n.copy(s==="caye"||s==="reef"?Te.whiteSand:Te.sand):e>17?n.copy(Te.snow):e>9.5?n.copy(s==="northern"?e>13?Te.cliff:Te.rainforestDark:Te.rock):s==="jungle"||s==="maya"?n.copy(o?Te.jungleDark:Te.jungle):s==="northern"?n.copy(o?Te.rainforestDark:Te.rainforest):s==="savanna"?n.copy(o?Te.savannaDark:Te.savanna):s==="swamp"?n.copy(o?Te.mudDark:Te.mud):s==="pitch"?n.copy(o?Te.savannaDark:Te.scrub):s==="light"?n.copy(o?Te.cliff:Te.rock):s==="beach"||s==="caye"?n.copy(e<1.2?s==="caye"?Te.whiteSand:Te.sand:Te.grass):n.copy(o?Te.darkGrass:Te.grass)}function xu(){const i=Cc(16777215);return i.vertexColors=!0,i}function gv(){const i=new It,t=dv,e=new pi(t.w,t.d,300,280);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),o=new Ct,r=t.x0+t.w/2,a=t.z0+t.d/2;for(let g=0;g<n.count;g++){const _=n.getX(g)+r,m=n.getZ(g)+a,p=Wt(_,m);n.setY(g,p),vu(_,m,p,o),s.set([o.r,o.g,o.b],g*3)}e.setAttribute("color",new ln(s,3)),e.computeVertexNormals();const c=new Yt(e,xu());c.position.set(r,0,a),c.receiveShadow=!0,i.add(c);const l=pr(42),u=(g,_,m)=>m.every(([p,M,x])=>Math.hypot(g-p,_-M)>x),h=[[8,-42,7],[on.x,on.z,11],[le.x,le.z,9],[fe.x,(fe.z0+fe.z1)/2,14],[rn.x,rn.z,5],[0,6,4]],d=(g,_,m,p=.4,M=4)=>{const x=Wt(g,_);m.position.set(g,x-.1,_),m.rotation.y=l()*Math.PI*2,Ke.push({x:g,z:_,r:p,top:x+M}),i.add(m)};let f=0;for(let g=0;g<2600&&f<300;g++){const _=t.x0+l()*t.w,m=t.z0+l()*t.d,p=Wt(_,m);if(p<.9||!u(_,m,h))continue;const M=no(_,m),x=l();if(M==="jungle"){if(x>.5)continue;d(_,m,x<.32?ic(l):ds(l),.5,6)}else if(M==="savanna"){if(x>.12)continue;d(_,m,yu(l),.4,5)}else if(M==="mountain"||p>9){if(x>.2||p>16)continue;d(_,m,Sv(l),.4,5)}else if(M==="beach"||M==="islet"){if(x>.1)continue;d(_,m,ds(l))}else{if(x>.09)continue;d(_,m,x<.055?ds(l):Mu(l))}f++}for(let g=0;g<900;g++){const _=t.x0+l()*t.w,m=t.z0+l()*t.d,p=Wt(_,m);if(p<.2||!u(_,m,h)||l()>.12)continue;const M=.6+l()*1.6,x=F(new ur(M,0),no(_,m)==="savanna"?13085049:11774363,.06);x.position.set(_,p+M*.3,m),Ke.push({x:_,z:m,r:M*.85,top:p+M*1.1}),x.rotation.set(l()*3,l()*3,l()*3),i.add(x)}return i.add(Ev(Fe.x,Wt(Fe.x,Fe.z),Fe.z)),i.add(wv()),i.add(vv()),i.add(xv()),i.add(yv()),i.add(Mv()),i}const $o=768;function _v(){const i=$o,t=new Uint8Array(i*i*4),e=sr;for(let s=0;s<i;s++)for(let o=0;o<i;o++){const r=e.x0+(o+.5)/i*e.w,a=e.z0+(s+.5)/i*e.d,c=ot.clamp((Wt(r,a)+3)/8,0,1)*255,l=(s*i+o)*4;t[l]=t[l+1]=t[l+2]=c,t[l+3]=255}const n=new eu(t,i,i);return n.magFilter=_n,n.minFilter=_n,n.needsUpdate=!0,n}function vv(){const i=new It,t=Wt(le.x,le.z),e=F(new Qt(le.r,le.r+1.6,le.top-t+.6,7),12098154,.05);e.position.set(le.x,(t+le.top)/2-.3,le.z),i.add(e);const n=F(new lt(3.2,.6,4.5),13085049,.05);n.position.set(le.x+le.r+.8,le.top-.3,le.z),n.rotation.z=.12,i.add(n),xn.push({x:n.position.x+.6,z:le.z,r:1.7,top:le.top}),Ke.push({x:le.x,z:le.z,r:le.r+.8,top:le.top-.2});for(const s of _u){const o=s.top-Wt(s.x,s.z),r=F(new Qt(1.25,1.45,o+.4,6),13085049,.06);r.position.set(s.x,s.top-(o+.4)/2,s.z),i.add(r),Ke.push({x:s.x,z:s.z,r:1.1,top:s.top-.2})}return i}function xv(){const i=new It,t=fe.z1-fe.z0+3,e=F(new lt(3,.22,t),12618322,.05);e.position.set(fe.x,fe.top-.11,(fe.z0+fe.z1)/2),i.add(e);for(let n=fe.z0-1;n<=fe.z1+1;n+=.6){const s=F(new lt(3.02,.02,.05),9067059,0);s.position.set(fe.x,fe.top+.005,n),i.add(s)}for(let n=fe.z0;n<=fe.z1+1;n+=4)for(const s of[-1.4,1.4]){const o=F(new Qt(.16,.16,3.4,6),9067059,.1);o.position.set(fe.x+s,fe.top-1.3,n),i.add(o)}return i}function yv(){const i=new It,t=new be({color:3924223}),e=Wt(on.x,on.z),n=F(new Qt(7.5,8,.4,16),4870240,.04);n.position.set(on.x,e+.05,on.z),i.add(n);for(let a=0;a<8;a++){const c=a/8*Math.PI*2,l=on.x+Math.cos(c)*9,u=on.z+Math.sin(c)*9,h=3+a%3*1.6,d=Wt(l,u),f=F(new lt(1,h,1),3883600,.06);f.position.set(l,d+h/2,u),f.rotation.y=-c,i.add(f);const g=new Yt(new lt(1.04,.12,1.04),t);g.position.set(l,d+h*.7,u),g.rotation.y=-c,i.add(g),Ke.push({x:l,z:u,r:.8,top:d+h})}const s=F(new Qn(1.4,0),2830138,.06);s.position.set(on.x,e+3.2,on.z),i.add(s);const o=new Yt(new Qn(.8,0),t);o.position.copy(s.position),i.add(o);const r=new fr(3924223,6,18);r.position.copy(s.position),i.add(r);for(const[a,c]of[[3,1],[-2.5,2.5],[1,-3.2]]){const l=F(new zi(1.6,.12,6,12,Math.PI),1842982,0);l.position.set(on.x+a,e+.2,on.z+c),l.rotation.y=Math.atan2(a,c),i.add(l)}return Ke.push({x:on.x,z:on.z,r:1.4,top:e+4.6}),i}function Mv(){const i=new It,t=Wt(rn.x,rn.z),e=F(new Qt(.1,.1,4,6),9067059,.1);e.position.set(rn.x,t+2,rn.z),i.add(e);const n=F(new lt(1.6,1,.05),14174010,.04);return n.position.set(rn.x+.8,t+3.4,rn.z),i.add(n),Ke.push({x:rn.x,z:rn.z,r:.3,top:t+4}),i}function ic(i){const t=new It,e=4+i()*3,n=F(new Qt(.35,.5,e,7),7030310,.08);n.position.y=e/2,t.add(n);for(let o=0;o<3;o++){const r=1.6+i()*1.2,a=F(new Ts(r,1),o===1?2783797:3381824,.05);a.position.set((i()-.5)*2,e+(i()-.2)*1.5,(i()-.5)*2),t.add(a)}const s=F(new Qt(.04,.04,e*.6,4),4034362,0);return s.position.set(.9,e*.65,.3),t.add(s),t}function yu(i){const t=new It,e=3.2+i()*1.6,n=F(new Qt(.18,.3,e,6),8016434,.08);n.position.y=e/2,n.rotation.z=(i()-.5)*.3,t.add(n);const s=F(new Qt(2.6+i(),2.2,.7,9),7313978,.05);return s.position.y=e+.2,s.scale.z=.8,t.add(s),t}function Sv(i){const t=new It,e=F(new Qt(.18,.25,1.4,6),7030310,.08);e.position.y=.7,t.add(e);const n=.9+i()*.5;for(let s=0;s<3;s++){const o=F(new ze((1.6-s*.4)*n,1.8*n,8),3112266,.05);o.position.y=1.4+s*1.1*n,t.add(o)}return t}function wv(){const i=new It,t=bn.top-bn.bottom+1.2;for(const e of[-.55,.55]){const n=F(new lt(.14,t,.14),9067059,.12);n.position.set(bn.x+e,bn.bottom+t/2-.2,bn.z),i.add(n)}for(let e=bn.bottom+.45;e<bn.top+.6;e+=.5){const n=F(new lt(1.1,.09,.09),12618322,.15);n.position.set(bn.x,e,bn.z),i.add(n)}return i}function ds(i){const t=new It,e=4+i()*2.5,n=(i()-.5)*.5;for(let o=0;o<5;o++){const r=F(new Qt(.22,.28,e/5,7),10185533,.08);r.position.set(n*o*.5,(o+.5)*(e/5),0),r.rotation.z=-n*.4,t.add(r)}const s=new T(n*2.5,e,0);for(let o=0;o<7;o++){const r=F(new ze(.5,3.4,4),4173375,.06);r.geometry.translate(0,1.7,0),r.scale.z=.25,r.position.copy(s),r.rotation.set(0,o/7*Math.PI*2,1.9),r.rotation.order="YXZ",t.add(r)}return t}function Mu(i){const t=new It,e=F(new Qt(.3,.4,2.4,7),9067059,.08);e.position.y=1.2,t.add(e);const n=1.6+i()*.8,s=F(new Ts(n,1),5419082,.05);return s.position.y=2.4+n*.7,t.add(s),t}function Ev(i,t,e){const n=new It;n.position.set(i,t,e);const s=10512954;for(const[a,c]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const l=F(new lt(.35,7,.35),s,.08);l.position.set(a,3.5,c),n.add(l)}const o=F(new lt(4.6,.35,4.6),12618322,.04);o.position.y=7,n.add(o);const r=F(new ze(3.6,2.2,4),14174010,.04);r.position.y=10.2,r.rotation.y=Math.PI/4,n.add(r);for(const[a,c]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const l=F(new lt(.25,2.2,.25),s,.08);l.position.set(a,8.2,c),n.add(l)}return n}class bv{constructor(t){D(this,"yaw",0);D(this,"pitch",.32);D(this,"distance",11);D(this,"focus",new T);D(this,"manualHold",0);this.camera=t}update(t,e,n,s=null,o=0,r){const a=e.dragDX!==0||e.dragDY!==0||e.down("KeyQ")||e.down("KeyE");if(this.manualHold=a?1.2:Math.max(0,this.manualHold-t),!s&&r&&this.manualHold<=0&&r.speed>1.5){const d=r.facing+Math.PI,f=Math.atan2(Math.sin(d-this.yaw),Math.cos(d-this.yaw));Math.abs(f)<1.9&&(this.yaw+=f*Math.min(1,t*1.6*Math.min(1,r.speed/6)))}if(s){const d=n.clone().sub(s),f=Math.atan2(d.x,d.z)+.35,g=Math.atan2(Math.sin(f-this.yaw),Math.cos(f-this.yaw));this.yaw+=g*Math.min(1,t*6)}this.yaw-=e.dragDX*.005,this.pitch=ot.clamp(this.pitch+e.dragDY*.004,-.15,1.2),this.distance=ot.clamp(this.distance+e.wheel*.01,5,24),e.down("KeyQ")&&(this.yaw+=t*2),e.down("KeyE")&&(this.yaw-=t*2);const c=n.clone().add(new T(0,1.6,0));s&&c.lerp(s,.3),this.focus.x=ot.damp(this.focus.x,c.x,10,t),this.focus.y=ot.damp(this.focus.y,c.y,6,t),this.focus.z=ot.damp(this.focus.z,c.z,10,t);const l=new T(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(this.distance),u=this.focus.clone().add(l),h=Math.max(Wt(u.x,u.z),0)+.8;u.y<h&&(u.y=h),o>0&&u.add(new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(o*.6)),this.camera.position.copy(u),this.camera.lookAt(this.focus)}snap(t){this.focus.copy(t).add(new T(0,1.6,0))}}const Tv=[[1,.3,.35,18],[-.4,1,.22,11],[.7,-.7,.12,6]];function bi(i,t,e){let n=0;for(const[s,o,r,a]of Tv){const c=2*Math.PI/a,l=Math.sqrt(9.8/c)*.35,u=Math.hypot(s,o);n+=r*Math.sin(c*(s/u*i+o/u*t)-l*c*e)}return n}const Av=`
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
`,Rv=`
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
`;function Cv(i,t){const e=new pi(900,900,220,220);e.rotateX(-Math.PI/2);const n={uTime:{value:0},uDeep:{value:new Ct(2056127)},uShallow:{value:new Ct(4179160)},uFoam:{value:new Ct(16055295)},uFogColor:{value:new Ct(12576511)},uFogNear:{value:120},uFogFar:{value:420},uShore:{value:i},uShoreBounds:{value:new ue(t.x0,t.z0,t.w,t.d)}},s=new On({vertexShader:Av,fragmentShader:Rv,uniforms:n}),o=new Yt(e,s);return{mesh:o,update(r,a){n.uTime.value=r,o.position.x=Math.round(a.x/10)*10,o.position.z=Math.round(a.z/10)*10}}}function Pv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new Je;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=nh(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<r[u].length;++_)f.push(r[u][_][d]);const g=nh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function nh(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new ln(r,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else r.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Ms=[],mr=i=>ys.find(t=>t.name===i);function Lv(i,t,e,n,s,o=120){const r=Math.hypot(e,n);for(let a=0;a<o;a+=.5){const c=i+e/r*a,l=t+n/r*a;if(Wt(c,l)<s)return new rt(c,l)}return new rt(i+e/r*o,t+n/r*o)}function Dv(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{const s=n;if(!s.isMesh)return;const o=s.material,r=o.side===We,a=r?"outline":`c${o.color.getHexString()}`;let c=t.get(a);c||(c={mat:r?o:Cc(o.color),geos:[]},t.set(a,c));let l=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();l.deleteAttribute("uv"),l=l.applyMatrix4(s.matrixWorld),c.geos.push(l)});const e=new It;for(const[n,s]of t){const o=Pv(s.geos);for(const a of s.geos)a.dispose();const r=new Yt(o,s.mat);r.castShadow=n!=="outline",r.receiveShadow=n!=="outline",e.add(r)}return e}function Iv(i){const t=i.r*2.3,e=Math.min(170,Math.ceil(t/1.1)),n=new pi(t,t,e,e);n.rotateX(-Math.PI/2);const s=n.attributes.position,o=new Float32Array(s.count*3),r=new Ct;for(let c=0;c<s.count;c++){const l=s.getX(c)+i.x,u=s.getZ(c)+i.z,h=Wt(l,u);s.setY(c,h),vu(l,u,h,r),o.set([r.r,r.g,r.b],c*3)}n.setAttribute("color",new ln(o,3)),n.computeVertexNormals();const a=new Yt(n,xu());return a.position.set(i.x,0,i.z),a.receiveShadow=!0,a}function Uv(i){const t=new It,e=2.6+i()*1.6,n=F(new Qt(.2,.28,e,6),5915440,.08);n.position.y=e/2+.8,t.add(n);for(let s=0;s<4;s++){const o=F(new zi(.9,.08,5,8,Math.PI),5915440,0);o.rotation.y=s/4*Math.PI*2+i(),o.position.y=.1,t.add(o)}for(let s=0;s<3;s++){const o=F(new Ts(1.3+i()*.8,1),s===1?3042099:3833146,.05);o.position.set((i()-.5)*1.8,e+.8+i()*.6,(i()-.5)*1.8),t.add(o)}return t}function Su(i,t=3,e=1,n="#f3e2b8",s="#5a3a1a"){const o=document.createElement("canvas");o.width=512,o.height=Math.round(512*e/t);const r=o.getContext("2d");r.fillStyle=n,r.fillRect(0,0,o.width,o.height),r.fillStyle=s,r.font=`bold ${Math.round(o.height*.42)}px "Trebuchet MS", sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,o.width/2,o.height/2);const a=new nu(o);a.colorSpace=an;const c=new be({map:a,side:Rn});return new Yt(new pi(t,e),c)}function uo(i,t,e,n){const s=new It,o=Wt(i,t);s.position.set(i,o,t),s.rotation.y=e;for(const a of[-1.3,1.3]){const c=F(new lt(.16,2.6,.16),9067059,.1);c.position.set(a,1.3,0),s.add(c)}const r=Su(n,3,1);return r.position.set(0,2,.1),s.add(r),Ke.push({x:i,z:t,r:.5,top:o+2.6}),s}function mi(i,t,e,n,s,o,r=16){const a=Math.hypot(n,s),c=n/a,l=s/a,u=Lv(t,e,c,l,.3),h=.95,d=Math.atan2(c,l),f=F(new lt(2.8,.22,r),12618322,.05);f.position.set(u.x+c*r*.5,h-.11,u.y+l*r*.5),f.rotation.y=d,i.add(f);for(let _=0;_<=r;_+=1.4)xn.push({x:u.x+c*_,z:u.y+l*_,r:1.4,top:h});for(let _=1;_<=r;_+=4)for(const m of[-1.3,1.3]){const p=F(new Qt(.15,.15,3.4,6),9067059,.1);p.position.set(u.x+c*_-l*m,h-1.3,u.y+l*_+c*m),i.add(p)}const g=new rt(u.x+c*r,u.y+l*r);return o.forEach((_,m)=>{const p=m%2===0?1:-1,M=r-3-Math.floor(m/2)*7,x=_==="boat"?4.2:3.2;Ms.push({kind:_,x:u.x+c*M-l*p*x,z:u.y+l*M+c*p*x,yaw:d})}),g}function Ic(i,t,e,n,s,o,r=3){const a=F(new lt(r,2.3,r),s,.04);a.position.set(t,e+1.15,n),i.add(a);const c=F(new ze(r*.85,1.6,4),o,.04);c.position.set(t,e+3.1,n),c.rotation.y=Math.PI/4,i.add(c);const l=F(new lt(.8,1.4,.05),5913114,0);l.position.set(t,e+.7,n+r/2+.03),i.add(l),Ke.push({x:t,z:n,r:r*.62,top:e+3.2})}function wu(i,t,e,n,s=2.6){for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const c=F(new Qt(.1,.1,2.4,6),9067059,.1);c.position.set(t+r*s*.55,e+1.2,n+a*s*.55),i.add(c)}const o=F(new ze(s,1.5,8),13214812,.04);o.position.set(t,e+3.1,n),i.add(o)}function Nv(i,t,e,n){let s=0;const o=Math.round(t.r*1.6);for(let r=0;r<t.r*t.r*.5&&s<o;r++){const a=t.x+(e()*2-1)*t.r,c=t.z+(e()*2-1)*t.r,l=Wt(a,c);if(l<.9||n.some(([_,m,p])=>Math.hypot(a-_,c-m)<p))continue;const u=no(a,c),h=e();let d=null,f=.4,g=4;u==="maya"?(h<.35&&(d=h<.22?ic(e):ds(e)),f=.5,g=6):u==="northern"?(h<.3&&(d=h<.2?ic(e):Mu(e)),f=.5,g=6):u==="swamp"?(h<.4&&(d=Uv(e)),f=.6):u==="pitch"?h<.08&&(d=yu(e)):u==="town"?h<.05&&(d=ds(e)):u==="caye"&&h<.12&&(d=ds(e)),d&&(d.position.set(a,l-.1,c),d.rotation.y=e()*Math.PI*2,Ke.push({x:a,z:c,r:f,top:l+g}),i.add(d),s++)}}function zv(i){const t=mi(i,255,25,-1,0,["boat","jetski","jetski"]),e=[16740241,5032432,16765286,8115081];for(let n=0;n<4;n++){const s=t.x+5+n%2*4,o=25+(n<2?-9-n*6:9+(n-2)*6),r=1.25,a=F(new lt(5,.2,5),12618322,.05);a.position.set(s,r-.1,o),i.add(a);for(const[c,l]of[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]]){const u=F(new Qt(.14,.14,3.2,6),9067059,.1);u.position.set(s+c,r-1.6,o+l),i.add(u)}Ic(i,s,r,o,e[n],14174010,3),xn.push({x:s,z:o,r:2.6,top:r})}}function Fv(i,t){t.add(uo(331,172,.6,"GO SLOW")),mi(i,338,182,1,.4,["jetski","jetski"],12),wu(i,326,Wt(326,166),166,2.4)}function Ov(i,t){const e=mr("The Great Blue Hole");for(let n=0;n<10;n++){const s=n/10*Math.PI*2,o=F(new Re(.45,10,8),n%2?16777215:16734778,.05);o.position.set(e.x+Math.cos(s)*16,.1,e.z+Math.sin(s)*16),i.add(o)}t.add(uo(e.x,e.z+31,Math.PI,"GREAT BLUE HOLE")),Ms.push({kind:"jetski",x:e.x+4,z:e.z+22,yaw:Math.PI/2})}function kv(i,t){const{x:e,z:n,base:s}=us,o=1.8,r=[13,10.6,8.2,5.8,3.4];r.forEach((p,M)=>{const x=s+(M+1)*o,v=F(new lt(p*2,o+.4,p*2),M%2?13616804:14472114,.03);v.position.set(e,x-(o+.4)/2,n),i.add(v);const I=F(new lt(p*2+.1,.15,p*2+.1),8362586,0);I.position.set(e,x-.05,n),i.add(I),xn.push({x:e,z:n,r:p*1.05,top:x}),Ke.push({x:e,z:n,r:p*.98,top:x-.3})});const a=20,c=21,u=(c-3.4)/a;for(let p=0;p<a;p++){const M=s+(p+1)*(r.length*o/a),x=n+c-(p+.5)*u,v=F(new lt(4,M-s+.3,u+.02),p%2?13221787:14077096,.02);v.position.set(e,(M+s-.3)/2,x),i.add(v);for(const I of[-1.1,1.1])xn.push({x:e+I,z:x,r:1.05,top:M})}const h=s+r.length*o,d=F(new lt(3.4,2.6,2.6),14077096,.04);d.position.set(e,h+1.3,n-.8),i.add(d);const f=F(new lt(3.8,.5,3),12103048,.04);f.position.set(e,h+2.85,n-.8),i.add(f);const g=F(new lt(1.1,1.7,.06),2827290,0);g.position.set(e,h+.85,n+.52),i.add(g),Ke.push({x:e,z:n-.8,r:1.5,top:h+3});const _=new Yt(new Qn(.45,0),new be({color:4054167}));_.position.set(e,h+3.6,n-.8),t.add(_);const m=new fr(4054167,4,14);m.position.copy(_.position),t.add(m),mi(i,e+30,n+10,1,.2,["boat","jetski"])}function Bv(i){mi(i,110,262,0,1,["jetski","boat"],14)}function Hv(i,t){const e=F(new Qt(.3,.5,1.4,8),16765503,.06);e.position.set(-110,.3,214),i.add(e);const n=Su("NYLON POOL",3,.8,"#2a5cc8","#ffffff");n.position.set(-110,1.6,214),t.add(n)}function Gv(i){const t=mi(i,-210,285,0,1,["jetski","boat"],20);wu(i,t.x,.95,t.y,3),xn.push({x:t.x,z:t.y,r:3,top:.95});const e=F(new lt(6,.22,6),12618322,.05);e.position.set(t.x,.84,t.y),i.add(e)}function Vv(i,t){const n=(()=>{for(let r=Ue.bayZ;r>Ue.z;r-=.5)if(Wt(Ue.bayX,r)>.9)return r;return Ue.bayZ-30})()-6,s=Wt(Ue.bayX,n);Ic(i,Ue.bayX,s,n,16765286,14174010,3.4),t.add(uo(Ue.bayX+3.5,n+2.5,0,"BAKE & SHARK"));const o=[16734815,3065014,16765503,4415982,16748459];for(let r=0;r<7;r++){const a=-.9+r*.3,c=Math.sin(a),l=-Math.cos(a);let u=Ue.bayX,h=Ue.bayZ;for(let _=20;_<50&&(u=Ue.bayX+c*_,h=Ue.bayZ+l*_,!(Wt(u,h)>.4));_+=.5);u+=c*2,h+=l*2;const d=Wt(u,h),f=F(new Qt(.05,.05,2.4,5),15658734,.1);f.position.set(u,d+1.2,h),i.add(f);const g=F(new ze(1.4,.6,8),o[r%o.length],.05);g.position.set(u,d+2.5,h),i.add(g)}Ms.push({kind:"boat",x:Ue.bayX-6,z:Ue.bayZ-12,yaw:Math.PI}),Ms.push({kind:"jetski",x:Ue.bayX+6,z:Ue.bayZ-14,yaw:Math.PI})}function Wv(i,t){const e=new Yt(new Tc(Ne.r,40),new q_({color:855312,shininess:120,specular:6710903}));e.rotation.x=-Math.PI/2,e.position.set(Ne.x,Ne.top+.03,Ne.z),t.add(e),t.add(uo(Ne.x+Ne.r+3,Ne.z,Math.PI/2,"PITCH LAKE")),mi(i,Ne.x+20,Ne.z,1,0,["boat"])}function Xv(i,t,e){const n=mr("Port of Honk"),s=[16740241,5032432,16765286,8115081,13073919,16752412,16250871],o=[14174010,2776264,3841373];for(let l=-2;l<=2;l++)for(let u=-3;u<=3;u++){if(Math.abs(l)<=1&&Math.abs(u)<=1)continue;const h=n.x+u*8+(e()-.5)*2,d=n.z+l*8+(e()-.5)*2,f=Wt(h,d);f<.9||e()<.25||Ic(i,h,f-.1,d,s[Math.floor(e()*s.length)],o[Math.floor(e()*o.length)],3.4)}const r=Wt(n.x,n.z),a=F(new Qt(4.5,4.7,.8,16),9067059,.04);a.position.set(n.x,r+.4,n.z),i.add(a),xn.push({x:n.x,z:n.z,r:4.5,top:r+.8});for(let l=0;l<5;l++){const u=l/5*Math.PI*2,h=n.x+Math.cos(u)*2.8,d=n.z+Math.sin(u)*2.8,f=F(new Qt(.55,.55,.9,14),13225686,.05);f.position.set(h,r+1.25,d),i.add(f);const g=F(new Qt(.5,.5,.02,14),7173248,0);g.position.set(h,r+1.71,d),i.add(g),Ke.push({x:h,z:d,r:.6,top:r+1.7})}const c=[14174010,16765503,2776264,3841373,1118481,16777215];for(let l=0;l<6;l++){const u=l/6*Math.PI*2,h=(l+1)/6*Math.PI*2,d=n.x+Math.cos(u)*6.5,f=n.z+Math.sin(u)*6.5,g=F(new Qt(.08,.08,4.4,5),9067059,.1);g.position.set(d,r+2.2,f),i.add(g),Ke.push({x:d,z:f,r:.3,top:r+4.4});for(let _=1;_<6;_++){const m=_/6,p=F(new ze(.22,.5,3),c[(l+_)%c.length],0);p.position.set(d+(n.x+Math.cos(h)*6.5-d)*m,r+4.1-Math.sin(m*Math.PI)*.6,f+(n.z+Math.sin(h)*6.5-f)*m),p.rotation.x=Math.PI,i.add(p)}}t.add(uo(n.x,n.z+7.5,0,"PORT OF HONK")),mi(i,n.x+26,n.z+10,1,0,["boat","jetski","boat"],18)}function Yv(i,t){const e=mr("Chacachacare Light"),n=Wt(e.x,e.z);for(let u=0;u<6;u++){const h=F(new Qt(1.7-(u+1)*.08,1.7-u*.08,2.6,14),u%2?14174010:16250351,.03);h.position.set(e.x,n+1.3+u*2.6,e.z),i.add(h)}const s=n+15.6,o=F(new Qt(1.9,1.9,.3,14),2830138,.04);o.position.set(e.x,s,e.z),i.add(o);const r=F(new ze(1.3,1.4,12),14174010,.04);r.position.set(e.x,s+2.4,e.z),i.add(r),Ke.push({x:e.x,z:e.z,r:1.8,top:s+3}),xn.push({x:e.x,z:e.z,r:1.9,top:s+.15});const a=new Yt(new Qt(.9,.9,1.4,12),new be({color:16773544}));a.position.set(e.x,s+1,e.z),t.add(a);const c=new It;c.position.copy(a.position);const l=new be({color:16773544,transparent:!0,opacity:.18,depthWrite:!1,blending:ha,side:Rn});for(const u of[1,-1]){const h=new Yt(new ze(3,46,16,1,!0),l);h.geometry.translate(0,-23,0),h.rotation.z=u*Math.PI/2,c.add(h)}return t.add(c),mi(i,e.x+8,e.z,1,0,["jetski"],12),{update:u=>c.rotation.y+=u*.6}}function qv(i){const t=mr("Caroni Swamp"),e=[],n=pr(9);for(let s=0;s<16;s++){const o=new It,r=F(new Re(.28,8,6),14692651,.06);r.scale.set(.8,.7,1.4),o.add(r);const a=F(new ze(.05,.6,5),3811872,0);a.rotation.x=Math.PI/2+.3,a.position.set(0,-.05,.6),o.add(a);for(const c of[-1,1]){const l=F(new lt(.9,.04,.4),15222332,0);l.geometry.translate(c*.45,0,0),l.position.x=c*.15,l.name=c<0?"L":"R",o.add(l)}i.add(o),e.push({mesh:o,r:8+n()*16,phase:n()*Math.PI*2,h:9+n()*7,speed:.25+n()*.2})}return{update(s,o){for(const r of e){const a=r.phase+o*r.speed;r.mesh.position.set(t.x+Math.cos(a)*r.r,r.h+Math.sin(o*.7+r.phase)*1.2,t.z+Math.sin(a)*r.r),r.mesh.rotation.y=-a;const c=Math.sin(o*9+r.phase)*.6;for(const l of r.mesh.children)l.name==="L"?l.rotation.z=c:l.name==="R"&&(l.rotation.z=-c)}}}}function jv(){const i=new It,t=new It,e=new It,n=pr(77);for(const r of ys)i.add(Iv(r));zv(t),Fv(t,e),Ov(t,e),kv(t,e),Bv(t),Hv(t,e),Gv(t),Vv(t,e),Wv(t,e),Xv(t,e,n);const s=[Yv(t,e),qv(e)],o=[[us.x,us.z,24],[-260,-225,30],[Ue.bayX,Ue.bayZ-34,8],[Ne.x,Ne.z,Ne.r+4],[-400,30,4],[255,25,6],[331,172,3]];for(const r of ys)Nv(t,r,n,o);return i.add(Dv(t)),i.add(e),{group:i,update(r,a){for(const c of s)c.update(r,a)}}}const Zv={boat:{name:"Speedboat",max:22,boost:31,accel:.9,turn:1.15,grip:2.2,bank:.22,hop:4.5,draft:.35,half:3,beam:1.25,hackSeconds:1.8,seat:new T(0,.95,-.7),pose:"stand"},jetski:{name:"Jet Ski",max:25,boost:36,accel:1.4,turn:2.1,grip:3.2,bank:.5,hop:7.5,draft:.2,half:1.5,beam:.65,hackSeconds:1.2,seat:new T(0,.78,-.35),pose:"sit"}};function Zs(i,t,e,n=.03){const s=new au(i.map(([r,a])=>new rt(r,a))),o=new Ac(s,{depth:t,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2});return o.rotateX(Math.PI/2),F(o,e,n)}function Kv(){const i=new It,t=F(new lt(.5,.62,.62),1711138,.04);t.position.y=.32,i.add(t);const e=F(new lt(.52,.12,.66),2764085,0);e.position.y=.66,i.add(e);const n=F(new lt(.52,.08,.64),13111342,0);n.position.y=.2,i.add(n);const s=F(new lt(.16,1,.24),2764085,.04);s.position.y=-.45,i.add(s);const o=F(new je(.12,.4,4,8),2764085,.04);o.rotation.x=Math.PI/2,o.position.set(0,-.95,.05),i.add(o);const r=new It;r.name="prop",r.position.set(0,-.95,-.28);for(let a=0;a<3;a++){const c=F(new lt(.08,.32,.03),12107980,0);c.geometry.translate(0,.16,0),c.rotation.z=a/3*Math.PI*2,r.add(c)}return i.add(r),i}function Jv(){const i=new It,t=[[-1.15,-3],[1.15,-3],[1.2,.8],[.7,2.5],[0,3.3],[-.7,2.5],[-1.2,.8]],e=Zs(t,.75,16250351);e.position.y=.55,i.add(e);const n=Zs(t.map(([f,g])=>[f*1.02,g*1.01]),.12,2776264,0);n.position.y=.42,i.add(n);const s=Zs(t.map(([f,g])=>[f*.86,g*.9-.1]),.05,12618322,0);s.position.y=.66,i.add(s);for(const f of[-1,1]){const g=F(new lt(.12,.28,4.6),16250351,.03);g.position.set(f*1.08,.78,-.6),i.add(g)}const o=F(new lt(1,.9,.7),15328988,.04);o.position.set(0,1.1,.5),i.add(o);const r=new Yt(new lt(1.1,.5,.04),new be({color:10475775,transparent:!0,opacity:.5}));r.position.set(0,1.75,.75),r.rotation.x=-.45,i.add(r);const a=F(new zi(.2,.035,6,14),1711138,0);a.position.set(0,1.62,.12),a.rotation.x=-.6,a.name="wheel",i.add(a);const c=new be({color:16726843}),l=new Yt(new lt(.34,.08,.2),c);l.position.set(0,1.58,.42),i.add(l);const u=F(new lt(1.9,.4,.6),2776264,.03);u.position.set(0,.9,-2.3),i.add(u);const h=F(new lt(1.3,.2,1.1),2776264,.03);h.position.set(0,.78,2),i.add(h);const d=[];for(const f of[-.45,.45]){const g=Kv();g.position.set(f,.55,-3.25),i.add(g),d.push(g.getObjectByName("prop"))}return{root:i,props:d,glow:c}}function $v(){const i=new It,t=[[-.55,-1.4],[.55,-1.4],[.62,.4],[.35,1.25],[0,1.65],[-.35,1.25],[-.62,.4]],e=Zs(t,.45,13111342);e.position.y=.45,i.add(e);const n=Zs(t.map(([h,d])=>[h*.92,d*.95]),.12,16250351,.02);n.position.y=.58,i.add(n);for(const h of[-1,1]){const d=F(new lt(.03,.08,2.2),3924223,0);d.position.set(h*.6,.32,0),i.add(d)}const s=F(new lt(.8,.3,.8),13111342,.03);s.position.set(0,.72,.65),s.rotation.x=-.25,i.add(s);const o=F(new je(.22,1,4,8),1447707,.03);o.rotation.x=Math.PI/2,o.position.set(0,.72,-.45),i.add(o);const r=F(new lt(.16,.36,.16),1447707,.03);r.position.set(0,.95,.38),r.rotation.x=-.4,i.add(r);const a=F(new Qt(.035,.035,.9,6),2764085,.04);a.rotation.z=Math.PI/2,a.position.set(0,1.12,.3),a.name="wheel",i.add(a);const c=new be({color:16726843}),l=new Yt(new lt(.22,.05,.14),c);l.position.set(0,1.08,.48),i.add(l);const u=F(new Qt(.12,.15,.3,10),2764085,.04);return u.rotation.x=Math.PI/2,u.position.set(0,.12,-1.5),i.add(u),{root:i,props:[],glow:c}}class Qv{constructor(t,e,n,s){D(this,"spec");D(this,"group",new It);D(this,"position");D(this,"yaw");D(this,"speed",0);D(this,"velocity",new T);D(this,"hacked",!1);D(this,"hackProgress",0);D(this,"driven",!1);D(this,"rpm",0);D(this,"events",{splash:!1,bump:!1});D(this,"vy",0);D(this,"airborne",!1);D(this,"pitch",0);D(this,"roll",0);D(this,"steerVis",0);D(this,"props");D(this,"wheel");D(this,"glow");D(this,"wakeTimer",0);D(this,"deck");this.kind=t,this.spec=Zv[t];const o=t==="boat"?Jv():$v();this.group.add(o.root),this.props=o.props,this.glow=o.glow,this.wheel=o.root.getObjectByName("wheel")??null,this.position=new T(e,0,n),this.yaw=s,this.deck={x:e,z:n,yaw:s,hx:this.spec.beam,hz:this.spec.half,top:.7,bottom:-.4,vx:0,vz:0,spin:0},ho.push(this.deck),this.syncDeck()}get name(){return this.spec.name}get hackSeconds(){return this.spec.hackSeconds}setHacked(){this.hacked=!0,this.glow.color.set(3924223)}forward(t=new T){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}seat(t=new T){return t.copy(this.spec.seat).applyEuler(this.group.rotation).add(this.group.position)}get tilt(){return{pitch:this.pitch,roll:this.roll,steer:this.steerVis}}syncDeck(){const t=this.spec;this.deck.x=this.position.x,this.deck.z=this.position.z,this.deck.yaw=this.yaw,this.deck.hx=t.beam,this.deck.hz=t.half,this.deck.top=this.position.y+(this.kind==="boat"?.66:.58),this.deck.bottom=this.position.y-.45,this.deck.vx=this.velocity.x,this.deck.vz=this.velocity.z}update(t,e,n,s){const o=this.spec,r=this.yaw;this.events={splash:!1,bump:!1};const a=(n==null?void 0:n.throttle)??0,c=(n==null?void 0:n.steer)??0,l=n!=null&&n.boost?o.boost:o.max,u=a>0?a*l:a*o.max*.35;a!==0?this.speed=ot.damp(this.speed,u,o.accel,t):this.speed*=Math.exp(-t*(this.airborne?.05:.55)),this.rpm=ot.damp(this.rpm,Math.min(1,Math.abs(a)*(n!=null&&n.boost?1:.75)+Math.abs(this.speed)/o.boost*.4),4,t);const h=ot.clamp(Math.abs(this.speed)/7,.18,1)*(this.airborne?.25:1);this.yaw-=c*o.turn*h*Math.sign(this.speed||1)*t,this.steerVis=ot.damp(this.steerVis,c,8,t);const d=this.forward(),f=this.airborne?.15:o.grip;this.velocity.x=ot.damp(this.velocity.x,d.x*this.speed,f,t),this.velocity.z=ot.damp(this.velocity.z,d.z*this.speed,f,t);const g=this.position.x+this.velocity.x*t,_=this.position.z+this.velocity.z*t,m=g+d.x*o.half*Math.sign(this.speed||1),p=_+d.z*o.half*Math.sign(this.speed||1),M=bi(g,_,e);!this.airborne&&Wt(m,p)>Math.min(M,0)*.3-o.draft-.15?(Math.abs(this.speed)>6&&(this.events.bump=!0),this.speed*=-.15,this.velocity.set(0,0,0)):(this.position.x=g,this.position.z=_);const x=new rt(this.position.x-zn.x,this.position.z-zn.y);x.length()>ir&&(x.setLength(ir),this.position.x=zn.x+x.x,this.position.z=zn.y+x.y,this.speed*=.9);const v=bi(this.position.x,this.position.z,e),I=bi(this.position.x+d.x*o.half,this.position.z+d.z*o.half,e),R=bi(this.position.x-d.x*o.half,this.position.z-d.z*o.half,e),C=d.z,P=-d.x,w=bi(this.position.x-C,this.position.z-P,e),S=bi(this.position.x+C,this.position.z+P,e),L=v-o.draft;n!=null&&n.hop&&!this.airborne&&(this.vy=o.hop+Math.abs(this.speed)*.08,this.airborne=!0),!this.airborne&&this.kind==="jetski"&&Math.abs(this.speed)>18&&I-R>.28&&(this.vy=3+(I-R)*6,this.airborne=!0),this.airborne?(this.vy-=nc*t,this.position.y+=this.vy*t,this.position.y<=L&&this.vy<0&&(this.airborne=!1,this.events.splash=this.vy<-3,this.vy=0,this.position.y=L)):this.position.y=ot.damp(this.position.y,L,9,t);const k=ot.clamp(this.speed/o.max,-.5,1.3),B=Math.atan2(I-R,o.half*2),G=this.airborne?ot.clamp(this.vy*.04,-.35,.3):0;this.pitch=ot.damp(this.pitch,-B-k*.09-G,6,t);const Y=Math.atan2(S-w,2);this.roll=ot.damp(this.roll,c*o.bank*ot.clamp(Math.abs(this.speed)/o.max,0,1)+Y*.6,5,t),this.group.position.copy(this.position),this.group.rotation.order="YXZ",this.group.rotation.set(this.pitch,this.yaw,this.roll);for(const J of this.props)J.rotation.z+=t*(6+this.rpm*60);this.wheel&&(this.wheel.rotation[this.kind==="boat"?"z":"y"]=-this.steerVis*(this.kind==="boat"?1.6:.5));const V=Math.abs(this.speed);if(this.wakeTimer-=t,!this.airborne&&V>3&&this.wakeTimer<=0){this.wakeTimer=.03;const J=this.position.clone().addScaledVector(d,-o.half-.2).setY(v+.05);if(s.emit(J,V>15?2:1,{color:16055295,speed:1.4,up:1+V*.05,size:.2,life:.8,grow:1.8,gravity:3}),V>10)for(const H of[-1,1]){const nt=this.position.clone().addScaledVector(d,o.half*.6).add(new T(C*H*.9,0,P*H*.9)).setY(v+.1);s.emit(nt,1,{color:16777215,speed:2+V*.06,up:2.5,size:.18,life:.5,grow:1.4,gravity:9})}}this.events.splash&&s.splash(this.position.clone().setY(v)),this.syncDeck(),this.deck.spin=t>1e-6?(this.yaw-r)/t:0}applyDeck(){this.position.x=this.deck.x,this.position.z=this.deck.z,this.group.position.x=this.position.x,this.group.position.z=this.position.z}}const Ae=512,tx=[{name:"Skyfall Meadow",x:0,z:-20},{name:"Circuit Jungle",x:90,z:-32},{name:"Sunscorch Savanna",x:-92,z:-18},{name:"Mount Honk",x:48,z:-112},{name:"Gull Beach",x:2,z:44}];class ex{constructor(t,e){D(this,"base",document.createElement("canvas"));D(this,"ctx");D(this,"timer",0);D(this,"big",!1);this.el=t,t.width=t.height=Ae,this.ctx=t.getContext("2d"),this.base.width=this.base.height=Ae;const n=this.base.getContext("2d"),s=n.createImageData(Ae,Ae),o=sr;for(let r=0;r<Ae;r++)for(let a=0;a<Ae;a++){const c=Math.floor(a/Ae*$o),l=Math.floor(r/Ae*$o),u=e[(l*$o+c)*4]/255*8-3,h=o.x0+a/Ae*o.w,d=o.z0+r/Ae*o.d;let f;u<-2.2?f=[10,34,92]:u<-1.5?f=[31,95,191]:u<-.2?f=[63,196,216]:u<.7?f=[242,220,155]:u<4.5?f=[96,176,72]:u<9.5?f=[62,140,62]:f=[170,160,146];const g=Math.hypot(h-zn.x,d-zn.y)>ir,_=(r*Ae+a)*4,m=g?.55:1;s.data[_]=f[0]*m,s.data[_+1]=f[1]*m,s.data[_+2]=f[2]*m,s.data[_+3]=255}n.putImageData(s,0,0)}toggle(){this.big=!this.big,this.el.classList.toggle("big",this.big),this.timer=0}update(t,e,n){if(this.timer-=t,this.timer>0)return;this.timer=.1;const s=sr,o=this.ctx,r=this.big?s.w:260,a=this.big?s.x0+s.w/2:e.x,c=this.big?s.z0+s.d/2:e.z,l=(p,M)=>[((p-a)/r+.5)*Ae,((M-c)/r+.5)*Ae];o.fillStyle="#1f5fbf",o.fillRect(0,0,Ae,Ae);const u=(a-r/2-s.x0)/s.w*Ae,h=(c-r/2-s.z0)/s.d*Ae,d=r/s.w*Ae;o.imageSmoothingEnabled=!0,o.drawImage(this.base,u,h,d,d,0,0,Ae,Ae),o.font=`bold ${this.big?15:18}px "Trebuchet MS", sans-serif`,o.textAlign="center",o.lineWidth=this.big?3:4,o.strokeStyle="#14202a",o.fillStyle="#ffffff";const f=this.big?[...ys,{name:"Skyfall Isles",x:0,z:-40}]:[...ys,...tx];for(const p of f){let[M,x]=l(p.x,p.z);if(M<-60||M>Ae+60||x<-20||x>Ae+20)continue;const v=o.measureText(p.name).width/2+4;M=Math.min(Ae-v,Math.max(v,M)),x=Math.min(Ae-6,Math.max(18,x)),o.strokeText(p.name,M,x),o.fillText(p.name,M,x)}for(const p of n){const[M,x]=l(p.x,p.z);o.beginPath(),o.arc(M,x,this.big?4:7,0,Math.PI*2),o.fillStyle=p.color,o.fill(),o.lineWidth=2,o.stroke()}const[g,_]=l(e.x,e.z),m=this.big?9:14;o.save(),o.translate(g,_),o.rotate(-e.yaw+Math.PI),o.beginPath(),o.moveTo(0,-m),o.lineTo(m*.7,m*.8),o.lineTo(0,m*.4),o.lineTo(-m*.7,m*.8),o.closePath(),o.fillStyle=e.color,o.fill(),o.lineWidth=3,o.stroke(),o.restore()}}const nx=1.35,ix=.95,sx=.7,ns=16250351,$r=2776264,Qr=1447707,Vo=13111342,ta=1381914,ih=3816774,ox=2776264,ea=8014374,sh=16751135,rx={down:()=>!1,justPressed:()=>!1,clicked:!1},Vs=1,An=.48,Dn=.47,oh=.12;function ax(i){const t=new It,e=F(new lt(.21,.06,.47),16052714,.05);e.position.set(0,-.075,.09),t.add(e);const n=F(new lt(.21,.02,.47),Vo,0);n.position.set(0,-.11,.09),t.add(n);const s=F(new lt(.19,.13,.4),16052714,.05);s.position.set(0,.02,.07),t.add(s);const o=F(new Re(.1,10,6,0,Math.PI*2,0,Math.PI/2),16052714,.05);o.scale.set(.95,.9,1),o.position.set(0,-.045,.26),t.add(o);const r=F(new lt(.2,.15,.14),Vo,.04);r.position.set(0,.03,-.09),t.add(r);const a=F(new lt(.2,.05,.12),Vo,.03);a.position.set(0,-.03,.26),t.add(a);const c=F(new Qt(.1,.11,.2,10),Vo,.04);c.position.set(0,.15,-.02),t.add(c);const l=F(new zi(.095,.025,6,12),1118481,0);l.rotation.x=Math.PI/2,l.position.set(0,.25,-.02),t.add(l);for(const h of[-1,1]){const d=F(new lt(.01,.035,.3),1118481,0);d.position.set(h*.1,0,.06),d.rotation.x=-.32,t.add(d)}for(let h=0;h<4;h++){const d=F(new lt(.11,.015,.025),16777215,0);d.position.set(0,.09+h*.02,.18-h*.06),d.rotation.x=-.35,t.add(d)}const u=F(new lt(.1,.12,.03),1118481,0);return u.position.set(0,.2,.06),u.rotation.x=-.25,t.add(u),t.scale.x=i,t}function cx(i){const t=new It;t.position.y=-.76;const e=F(new Qt(.095,.09,.08,10),ox,.04);e.position.y=.02,t.add(e);const n=F(new lt(.08,.15,.16),ta,.04);n.position.y=-.07,t.add(n);const s=F(new lt(.01,.1,.12),ih,0);s.position.set(-i*.042,-.07,0),t.add(s);for(let r=0;r<4;r++){const a=[.1,.115,.11,.09][r],c=F(new je(.019,a,3,6),ta,.03);c.position.set(-i*.012,-.15-a/2,.06-r*.04),c.rotation.z=i*.25,t.add(c);const l=F(new Re(.02,6,4),ih,0);l.position.set(-i*(.012+Math.sin(.25)*a*.5),-.15-a,.06-r*.04),t.add(l)}const o=F(new je(.022,.08,3,6),ta,.03);return o.position.set(-i*.05,-.1,.09),o.rotation.set(.7,0,i*.6),t.add(o),t}function lx(){const i=new It,t=new It;i.add(t);const e=[];for(const H of[-1,1]){const nt=new It;nt.position.set(H*.2,Vs,0);const ut=F(new je(.13,An-.16,4,8),15327951,.06);ut.position.y=-An/2,nt.add(ut);const ft=new It;ft.position.y=-An,nt.add(ft);const Ut=F(new Qt(.065,.05,Dn,6),sh,.1);Ut.position.y=-Dn/2,ft.add(Ut);const Kt=new It;Kt.position.y=-Dn,ft.add(Kt),Kt.add(ax(H)),t.add(nt),e.push({hip:nt,knee:ft,ankle:Kt})}const n=F(new Qt(.36,.5,.42,12),$r,.04);n.position.y=1.02,t.add(n);const s=F(new je(.34,.5,4,12),$r,.04);s.scale.z=.8,s.position.y=1.55,t.add(s);const o=F(new Qt(.37,.37,.1,12),ea,.06);o.position.y=1.22,t.add(o);const r=F(new lt(.14,.12,.04),16765503,0);r.position.set(0,1.22,.3),t.add(r);const a=F(new Re(.26,12,8),ns,.05);a.scale.set(1.15,.5,1),a.position.set(0,1.92,.04),t.add(a);const c=F(new ze(.16,.42,6),ns,.08);c.rotation.x=-2.2,c.position.set(0,1.05,-.42),t.add(c);const l=new It,u=F(new Qt(.38,.38,.06,14),10135739,.06);u.rotation.x=Math.PI/2,l.add(u);const h=F(new zi(.38,.04,6,18),13226716,0);l.add(h);const d=F(new Qn(.12,0),16765503,0);d.position.z=-.05,l.add(d),l.scale.setScalar(.8);const f=new It;f.position.set(0,1.5,-.4);const g=F(new lt(.5,.5,.14),4935523,.06);f.add(g);const _=[],m=new be({color:16753210,transparent:!0,opacity:.9});for(const H of[-1,1]){const nt=F(new je(.12,.42,4,10),14174778,.06);nt.position.set(H*.2,0,-.1),f.add(nt);const ut=F(new Qt(.07,.11,.14,10),2830138,.08);ut.position.set(H*.2,-.38,-.1),f.add(ut);const ft=new Yt(new ze(.09,.55,8),m);ft.rotation.x=Math.PI,ft.position.set(H*.2,-.45,-.1),ft.geometry.translate(0,.27,0),ft.scale.setScalar(.001),f.add(ft),_.push(ft)}t.add(f);const p=F(new je(.11,.42,4,8),Qr,.08);p.position.set(0,2.18,.08),p.rotation.x=.18,t.add(p);const M=new It;M.position.set(0,2.5,.16),t.add(M);const x=F(new Re(.22,14,10),Qr,.06);x.scale.set(.95,.95,1.15),M.add(x);const v=F(new ze(.09,.34,8),sh,.08);v.rotation.x=Math.PI/2,v.scale.x=1.3,v.position.set(0,-.05,.32),M.add(v);const I=F(new Re(.06,8,6),2829099,0);I.position.set(0,.02,.2),M.add(I);const R=F(new Re(.1,10,8),ns,0);R.scale.set(1.25,.8,.35),R.position.set(0,-.05,.25),M.add(R);for(const H of[-1,1]){const nt=new T(H*.164,.055,.142),ut=F(new Re(.07,10,8),ns,0);ut.scale.set(1,.75,.35),ut.position.copy(nt),ut.lookAt(nt.clone().multiplyScalar(2)),M.add(ut);const ft=new Yt(new Re(.045,8,6),new be({color:1118481}));ft.position.copy(nt).multiplyScalar(1.06),M.add(ft);const Ut=new Yt(new lt(.1,.025,.02),new be({color:1118481}));Ut.position.set(H*.15,.12,.15),Ut.rotation.z=H*-.35,M.add(Ut)}const C=[];for(const H of[-1,1]){const nt=new It;nt.position.set(H*.44,1.85,0);const ut=F(new je(.1,.28,4,8),$r,.06);ut.position.y=-.2,nt.add(ut);const ft=F(new je(.085,.3,4,8),ns,.06);ft.position.y=-.55,nt.add(ft);const Ut=F(new ze(.1,.36,4),ns,.06);Ut.position.set(H*.06,-.5,-.1),Ut.rotation.x=2.6,nt.add(Ut),nt.add(cx(H)),t.add(nt),C.push(nt)}l.position.set(-.12,-.52,.02),l.rotation.set(0,-Math.PI/2,0),C[0].add(l);const P=new It,w=F(new Qt(.04,.04,.22,6),ea,.1);P.add(w);const S=F(new lt(.34,.06,.08),6966232,.1);S.position.y=.13,P.add(S);const L=F(new lt(.08,.95,.025),14674160,.1);L.position.y=.62,P.add(L);const k=new It;k.position.set(-.5,1.22,.06),k.rotation.set(-1.05,0,-.15);const B=F(new lt(.12,.9,.07),Qr,.06);B.position.y=-.4,k.add(B);const G=F(new lt(.15,.08,.09),13226716,0);G.position.y=-.84,k.add(G);const Y=F(new lt(.17,.06,.1),ea,.04);k.add(Y),t.add(k);const V=()=>{k.add(P),P.position.set(0,.12,0),P.rotation.set(Math.PI,0,0)},J=()=>{C[1].add(P),P.position.set(0,-.8,.05),P.rotation.set(1.2,0,0)};return V(),{root:i,body:t,head:M,wings:C,legs:e,sword:P,sheathSword:V,drawSword:J,flames:_}}class hx{constructor(){D(this,"model",lx());D(this,"position",new T(0,2,6));D(this,"velocity",new T);D(this,"facing",Math.PI);D(this,"grounded",!1);D(this,"swimming",!1);D(this,"cycle",0);D(this,"prevFootPhase",[0,.5]);D(this,"strideScale",1);D(this,"visualY",0);D(this,"prevSpeed",0);D(this,"accelLean",0);D(this,"slopeLean",0);D(this,"attackTime",0);D(this,"attackCooldown",0);D(this,"invulnerable",0);D(this,"lockTarget",null);D(this,"running",!1);D(this,"gliding",!1);D(this,"climbing",!1);D(this,"jetting",!1);D(this,"frozen",!1);D(this,"jetArmed",!1);D(this,"spaceHeld",0);D(this,"swimBlend",0);D(this,"jetPose",0);D(this,"plantY",0);D(this,"swimPhase",0);D(this,"swimMove",0);D(this,"climbPhase",0);D(this,"gait",0);D(this,"airPose",0);D(this,"landCrouch",0);D(this,"bank",0);D(this,"lastFacing",Math.PI);D(this,"swordDrawn",!1);D(this,"sheatheTimer",0);D(this,"carrier",null);D(this,"wadeDepth",0);D(this,"events",{jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null})}get object(){return this.model.root}swordReach(){return this.position.clone().add(new T(Math.sin(this.facing),1,Math.cos(this.facing)).multiplyScalar(1.4))}hurt(t){const e=this.position.clone().sub(t).setY(0);e.lengthSq()<1e-4&&e.set(Math.sin(this.facing),0,Math.cos(this.facing)).negate(),e.normalize().multiplyScalar(11),this.velocity.set(e.x,6,e.z),this.grounded=!1,this.invulnerable=1.2}update(t,e,n,s){const o=this.frozen?rx:n,r=this.grounded,a=this.swimming;if(this.events={jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null},o.justPressed("KeyR")&&(this.running=!this.running),this.invulnerable=Math.max(0,this.invulnerable-t),this.carrier&&this.grounded){const G=this.carrier,Y=G.spin*t,V=this.position.x-G.x,J=this.position.z-G.z;this.position.x=G.x+V*Math.cos(Y)+J*Math.sin(Y)+G.vx*t,this.position.z=G.z-V*Math.sin(Y)+J*Math.cos(Y)+G.vz*t,this.facing+=Y}this.attackCooldown=Math.max(0,this.attackCooldown-t);let c=(o.down("KeyW")||o.down("ArrowUp")?1:0)-(o.down("KeyS")||o.down("ArrowDown")?1:0);const l=(o.down("KeyD")||o.down("ArrowRight")?1:0)-(o.down("KeyA")||o.down("ArrowLeft")?1:0),u=o.down("ShiftLeft")||o.down("ShiftRight");this.running&&c<0&&(this.running=!1),(this.running||u)&&c===0&&(c=1);const h=new T(this.running||u?l*.6:l,0,-c),d=h.lengthSq()>0;if(d&&h.normalize().applyAxisAngle(new T(0,1,0),s),this.climbing||this.tryGrabLadder(h,d)){this.climb(t,o,c);return}const f=this.running||u;let g=this.swimming?f?6.8:4.4:f?10:6;if(this.grounded&&this.wadeDepth>.3&&(g*=ot.lerp(1,.45,ot.clamp((this.wadeDepth-.3)/1.3,0,1))),d&&this.grounded){const Y=(Tn(this.position.x+h.x*.6,this.position.z+h.z*.6,this.position.y)-this.position.y)/.6;g*=ot.clamp(1-Math.max(0,Y)*.45,.55,1)}const _=this.invulnerable>.9,m=new rt(this.velocity.x,this.velocity.z),p=d&&m.lengthSq()>4&&m.normalize().dot(new rt(h.x,h.z))<-.3,M=_?1:this.grounded||this.swimming?d?p?6:9:12:3;this.events.skid=p&&this.grounded&&m.length()>5;const x=h.multiplyScalar(g),v=new rt(this.velocity.x,this.velocity.z);if(this.velocity.x=ot.damp(this.velocity.x,x.x,M,t),this.velocity.z=ot.damp(this.velocity.z,x.z,M,t),this.lockTarget){const G=this.lockTarget.clone().sub(this.position);this.facing=Math.atan2(G.x,G.z)}else if(d){let Y=Math.atan2(x.x,x.z)-this.facing;Y=Math.atan2(Math.sin(Y),Math.cos(Y));const V=ot.lerp(14,7,ot.clamp((Math.hypot(this.velocity.x,this.velocity.z)-4)/6,0,1));this.facing+=Y*Math.min(1,t*V)}const I=o.down("Space");this.spaceHeld=I?this.spaceHeld+t:0,o.justPressed("Space")&&(this.grounded||this.swimming?(this.velocity.y=this.swimming?7.5:9,this.grounded=!1,this.events.jumped=!0):(this.jetArmed=!0,this.events.flapped=!0));const R=!this.grounded&&!this.swimming;if(this.jetting=R&&I&&(this.jetting||this.jetArmed||this.spaceHeld>.28),(!I||!R)&&(this.jetArmed=!1),this.jetting){const G=o.down("KeyC")||o.down("ControlLeft");this.velocity.y=ot.damp(this.velocity.y,G?-5:6.5,4,t);const Y=f?19:12,V=ot.damp(v.length(),d?Y:0,d?3:2,t);let J=v.lengthSq()>.25?Math.atan2(v.x,v.y):Math.atan2(x.x,x.z);if(d){const H=Math.atan2(x.x,x.z);J+=Math.atan2(Math.sin(H-J),Math.cos(H-J))*Math.min(1,t*5)}this.velocity.x=Math.sin(J)*V,this.velocity.z=Math.cos(J)*V}this.gliding=R&&!this.jetting&&I&&this.velocity.y<0,(o.justPressed("KeyJ")||o.justPressed("KeyF")||o.clicked)&&this.attackCooldown<=0&&!this.swimming&&(this.attackTime=.3,this.attackCooldown=.38,this.events.swung=!0),this.events.swung||this.lockTarget?(this.swordDrawn||this.model.drawSword(),this.swordDrawn=!0,this.sheatheTimer=0):this.swordDrawn&&(this.sheatheTimer+=t)>3&&(this.model.sheathSword(),this.swordDrawn=!1),this.jetting||(this.velocity.y-=nc*t),this.gliding&&(this.velocity.y=Math.max(this.velocity.y,-2.2)),this.position.addScaledVector(this.velocity,t),gu(this.position,.35);const P=Tn(this.position.x,this.position.z,this.position.y),w=bi(this.position.x,this.position.z,e);this.swimming=!1;const S=r&&!this.events.jumped&&this.velocity.y<=0&&this.position.y-P<.45;this.position.y<=P||S?(!r&&this.velocity.y<-6&&(this.landCrouch=Math.min(1,-this.velocity.y/16)),this.position.y=P,this.velocity.y=Math.max(0,this.velocity.y),this.grounded=!0):this.grounded=!1;const L=w-P,k=w-this.position.y;L>(a?sx:ix)&&k>.25&&!this.jetting&&(this.velocity.y+=nc*t*Math.min(k/nx,2),this.velocity.y*=Math.exp(-t*4.2),this.velocity.x*=Math.exp(-t*1.5),this.velocity.z*=Math.exp(-t*1.5),this.swimming=!0,this.grounded=!1,this.position.y<P&&(this.position.y=P),d&&this.climbOut(h,w)),this.wadeDepth=this.grounded?Math.max(0,w-this.position.y):0,this.carrier=this.grounded?av(this.position.x,this.position.z,this.position.y):null,this.events.landed=this.grounded&&!r,this.events.splashed=this.swimming&&!a,this.animate(t,e,d,f),this.model.root.visible=this.invulnerable<=0||Math.floor(e*20)%2===0}ride(t,e,n,s,o,r){const a=this.model,c=ot.damp;this.position.copy(n),this.velocity.set(0,0,0),this.invulnerable=Math.max(0,this.invulnerable-t),this.facing=this.lastFacing=s,this.grounded=!0,this.swimming=this.jetting=this.gliding=this.climbing=!1,this.swimBlend=this.jetPose=this.airPose=this.gait=this.plantY=0,this.visualY=n.y,this.events={jumped:!1,landed:!1,splashed:!1,swung:!1,flapped:!1,skid:!1,step:null},a.root.visible=!0,a.root.position.copy(n),a.root.rotation.order="YXZ";const l=-o.steer*(r?.32:.12);a.root.rotation.set(o.pitch+(r?.18:.06),s,o.roll*1.2+l),a.body.rotation.set(0,-o.steer*.12,0),a.body.position.set(0,r?-Vs+.08:-.06,0),a.body.scale.y=1,a.legs.forEach((u,h)=>{const d=h===0?-1:1;r?(u.hip.rotation.set(-1.25,0,d*.32),u.knee.rotation.x=1.55,u.ankle.rotation.x=-.3):(u.hip.rotation.set(-.2+d*.08,0,d*.12),u.knee.rotation.x=.4+Math.sin(e*3+h)*.04,u.ankle.rotation.x=-.2)});for(let u=0;u<2;u++){const h=u===0?-1:1,d=(r?-1.15:-.95)+o.steer*h*.18;a.wings[u].rotation.set(c(a.wings[u].rotation.x,d,12,t),0,h*(r?.32:.2))}a.head.position.z=.16,a.head.rotation.set(-(o.pitch+(r?.18:.06))*.8,-o.steer*.35,0);for(const u of a.flames)u.scale.setScalar(.001)}dismount(t){this.position.copy(t),this.velocity.set(0,6,0),this.grounded=!1;for(const e of this.model.legs)e.hip.rotation.set(0,0,0);this.model.root.rotation.set(0,this.facing,0)}climbOut(t,e){const n=t.clone().setY(0).normalize(),s=this.position.x+n.x*.8,o=this.position.z+n.z*.8,r=Tn(s,o,e+1.6);r<e-.4||r>e+1.6||(this.position.set(s,r,o),this.velocity.set(n.x*2,0,n.z*2),this.swimming=!1,this.grounded=!0,this.landCrouch=.6)}tryGrabLadder(t,e){if(!e||this.swimming||this.invulnerable>.9)return!1;const n=bn,s=this.position.x-n.x,o=this.position.z-(n.z+.5);if(Math.hypot(s,o)>.9||this.position.y<n.bottom-.5||this.position.y>n.top-.8)return!1;const r=Math.cos(this.facing-Math.atan2(-n.normal.x,-n.normal.z))>.5;return t.dot(n.normal)>-.5&&!r?!1:(this.climbing=!0,this.velocity.set(0,0,0),this.position.y=Math.max(this.position.y,n.bottom),!0)}climb(t,e,n){const s=bn;this.facing=Math.atan2(-s.normal.x,-s.normal.z),this.position.x=ot.damp(this.position.x,s.x,15,t),this.position.z=ot.damp(this.position.z,s.z+.4,15,t),this.position.y+=n*3*t,this.climbPhase+=Math.abs(n)*t*9,this.grounded=!1,e.justPressed("Space")?(this.climbing=!1,this.velocity.copy(s.normal).multiplyScalar(4).setY(4),this.events.jumped=!0):this.position.y>=s.top-.4?(this.climbing=!1,this.position.set(s.x,s.top,s.z-1.1),this.velocity.set(0,0,0),this.grounded=!0,this.events.landed=!0):n<0&&this.position.y<=s.bottom&&(this.climbing=!1,this.position.y=s.bottom,this.grounded=!0);const o=this.model;o.root.position.copy(this.position),o.root.rotation.set(0,this.facing,0);const r=Math.sin(this.climbPhase);o.wings[0].rotation.set(-2.5+r*.35,0,0),o.wings[1].rotation.set(-2.5-r*.35,0,0),o.body.position.set(0,0,0),o.body.rotation.set(0,0,0),o.legs.forEach((a,c)=>{const l=Math.max(0,c===0?r:-r);a.hip.rotation.x=-.3-l*.9,a.knee.rotation.x=.4+l*1.2,a.ankle.rotation.x=-(a.hip.rotation.x+a.knee.rotation.x)*.6}),o.root.visible=!0}animate(t,e,n,s){const o=this.model,r=ot.damp;o.root.position.copy(this.position),o.root.rotation.order="YXZ",o.root.rotation.y=this.facing;const a=Math.hypot(this.velocity.x,this.velocity.z),c=this.grounded,l=!this.grounded&&!this.swimming,u=ot.clamp((a-6)/4,0,1);this.gait=r(this.gait,c?Math.min(1,a/5):0,10,t),this.airPose=r(this.airPose,l?1:0,12,t),this.landCrouch=r(this.landCrouch,0,7,t),this.swimBlend=r(this.swimBlend,this.swimming?1:0,6,t),this.jetPose=r(this.jetPose,this.jetting?1:0,6,t),this.swimMove=r(this.swimMove,this.swimming&&a>1?1:0,2.5,t),this.swimPhase+=t*(1.8+this.swimMove*2.4);const h=this.swimMove,d=this.position.y-this.visualY;this.visualY=c&&d>0&&d<.7?r(this.visualY,this.position.y,14,t):this.position.y,o.root.position.y=this.visualY;const f=this.visualY,g=ot.clamp((a-2.5)/6.5,0,1),_=Math.sin(this.facing),m=Math.cos(this.facing),p=Math.cos(this.facing),M=-Math.sin(this.facing),x=t>0?(a-this.prevSpeed)/t:0;this.prevSpeed=a,this.accelLean=r(this.accelLean,c?ot.clamp(x*.025,-.18,.14):0,6,t);let v=0;if(c){const K=Tn(this.position.x+_*.6,this.position.z+m*.6,f+.7),A=Tn(this.position.x-_*.6,this.position.z-m*.6,f+.7);v=Math.atan2(K-A,1.2)}this.slopeLean=r(this.slopeLean,v*.35*Math.min(1,a/3),6,t);const I=ot.clamp(a/19,0,1),R=c?.03+g*.2+this.accelLean+this.slopeLean+this.landCrouch*.25:l?.08+this.jetPose*(.15+I*.85):0;o.root.rotation.x=r(o.root.rotation.x,R,10,t);const C=o.root.rotation.x,P=1+a*.25,w=ot.lerp(.62,.36,g);this.strideScale=r(this.strideScale,c&&a>.3?1:.2,4,t);const S=w*P*this.strideScale;if(c){if(a>.3)this.cycle+=a*t/P;else{const K=this.cycle%1;(K>=w||(K+.5)%1>=w)&&(this.cycle+=t*1.6)}this.cycle%=1}const L=(An+Dn)*.985;let k=Vs-.03-g*.07-this.landCrouch*.35,B=!1;const G=o.legs.map((K,A)=>{const vt=(this.cycle+A*.5)%1,it=vt<w,mt=it?vt/w:(vt-w)/(1-w),at=it?S*(.5-mt):S*(-.5+mt*mt*(3-2*mt)),Ft=it?0:(.13+.22*g)*Math.sin(Math.PI*mt),yt=A===0?-1:1,b=this.position.x+_*at+p*yt*.2,y=this.position.z+m*at+M*yt*.2,O=ot.clamp(Tn(b,y,f+.7)-f,-.7,.7),q=Tn(b+_*.18,y+m*.18,f+.7),st=Tn(b-_*.18,y-m*.18,f+.7);if(it&&c){B=!0;const Z=O+oh+Math.sqrt(Math.max(0,L*L-at*at));k=Math.min(k,Z-g*.07*Math.sin(Math.PI*mt))}if(c&&a>.8&&vt<this.prevFootPhase[A]-.5){const Tt=Tn(b,y,f+.7)>Wt(b,y)+.05?"wood":Wt(b,y)<.7?"sand":"grass";this.events.step={x:b,z:y,surface:Tt,hard:g>.45}}return this.prevFootPhase[A]=vt,{z:at,y:O+Ft,stance:it,u:mt,slope:Math.atan2(q-st,.36)}});c&&!B&&(k+=.04*g),this.plantY=r(this.plantY,c?k-Vs:0,22,t);const Y=Vs+this.plantY,V=Y*Math.sin(C),J=Y*Math.cos(C),H=[];o.legs.forEach((K,A)=>{const vt=G[A],it=vt.z-V,mt=vt.y+oh-J,at=ot.clamp(Math.hypot(it,mt),.15,An+Dn-.002),Ft=Math.atan2(-it,-mt),yt=Math.PI-Math.acos(ot.clamp((An*An+Dn*Dn-at*at)/(2*An*Dn),-1,1)),b=Math.acos(ot.clamp((An*An+at*at-Dn*Dn)/(2*An*at),-1,1)),y=Ft-b;let O=y-C,q=yt,Z=(vt.stance?-vt.slope+Math.max(0,(vt.u-.7)/.3)*.55:ot.lerp(.45,-.25,Math.min(1,vt.u*2.5)))-(y+q);const Tt=this.velocity.y>0,gt=Tt?A===0?-.75:-.2:-.25,Et=Tt?A===0?1.3:.5:.35;O=ot.lerp(O,gt,this.airPose),q=ot.lerp(q,Et,this.airPose),Z=ot.lerp(Z,-(O+q),this.airPose),O=ot.lerp(O,.3+(A===0?.12:-.08),this.jetPose),q=ot.lerp(q,.3+A*.3,this.jetPose);const te=Math.sin(this.swimPhase*1.3+A*Math.PI),ct=Math.sin(e*9+A*Math.PI),bt=ot.lerp(-.55+te*.3,-.3+ct*.26,h),Ot=ot.lerp(.85+te*.35,.22+Math.max(0,ct)*.32,h);O=ot.lerp(O,bt,this.swimBlend),q=ot.lerp(q,Ot,this.swimBlend),K.hip.rotation.x=O,K.knee.rotation.x=q,K.ankle.rotation.x=ot.lerp(Z,.9,Math.max(this.swimBlend,this.jetPose)),H.push(O)});const nt=this.swimBlend*ot.lerp(.18,.48,h),ut=1.5;o.body.rotation.x=nt,o.body.position.set(0,this.plantY+ut*(1-Math.cos(nt)),-ut*Math.sin(nt));const ft=-Math.cos(Math.PI*2*(this.cycle-w/2))*(.05-g*.03)*this.gait,Ut=(G[0].z-G[1].z)*.14*this.gait;o.body.position.x=ft,o.body.rotation.z=-ft*.8+Math.sin(this.swimPhase)*.22*h*this.swimBlend,o.body.rotation.y=Ut,o.body.scale.y=1+Math.sin(e*2.2)*.012*(1-this.gait);let Kt=this.facing-this.lastFacing;Kt=Math.atan2(Math.sin(Kt),Math.cos(Kt)),this.lastFacing=this.facing;const $=t>0?Kt/t:0;this.bank=r(this.bank,ot.clamp(-$*.035*(a/6),-.28,.28),8,t),o.root.rotation.z=this.bank,o.head.position.z=.16+Math.sin(this.cycle*Math.PI*4)*.05*this.gait,o.head.rotation.x=-(o.root.rotation.x+nt)*.8,o.head.rotation.y=-Ut+Math.sin(this.swimPhase)*.25*h*this.swimBlend;const ht=this.gliding?1.45+Math.sin(e*6)*.06:l?.6+Math.max(0,Math.sin(e*26))*.6*this.airPose*(1-this.jetPose)*(1-this.swimBlend):.1+u*.12,At=ot.clamp((G[0].z-G[1].z)/Math.max(.4,S),-1,1)*this.gait*(1-this.airPose),pt=.45+g*.6,zt=-.12*g*this.gait,Ht=[-H[0]*.5,-H[1]*.5].map(K=>K*this.airPose),kt=this.swordDrawn?-.35-H[1]*.35:-At*pt+zt+Ht[1],Xt=[new vn(At*pt+zt+Ht[0],0,-ht),new vn(kt,0,ht)];for(let K=0;K<2;K++){const A=K===0?-1:1;if(this.jetPose>.01&&(Xt[K].x=ot.lerp(Xt[K].x,.55+I*.6,this.jetPose),Xt[K].z=ot.lerp(Xt[K].z,A*.3,this.jetPose)),this.swimBlend>.01){const vt=(this.swimPhase+K*Math.PI)%(Math.PI*2)-Math.PI,it=Math.sin(this.swimPhase*1.5+K*Math.PI),mt=ot.lerp(-.35+it*.12,vt,h),at=ot.lerp(A*(.95+it*.22),A*(.2+.35*Math.max(0,Math.sin(vt))),h);Xt[K].x=ot.lerp(Xt[K].x,mt,this.swimBlend),Xt[K].z=ot.lerp(Xt[K].z,at,this.swimBlend)}o.wings[K].rotation.copy(Xt[K])}for(const K of o.flames){const A=this.jetting?.8+Math.random()*.5:r(K.scale.y,.001,20,t);K.scale.set(Math.max(.001,A*.9),Math.max(.001,A),Math.max(.001,A*.9))}this.attackTime=Math.max(0,this.attackTime-t);const Q=this.attackTime/.3;if(Q>0&&this.swordDrawn){const K=Math.sin((1-Q)*Math.PI);o.wings[1].rotation.set(-2.6+(1-Q)*2.4,-K*.5,.3),o.sword.rotation.x=1.2+K*.4}else this.swordDrawn&&(o.sword.rotation.x=1.2)}}class ux{constructor(t,e=260){D(this,"pool",[]);D(this,"cursor",0);const n=new Ts(1,0);for(let s=0;s<e;s++){const o=new be({color:16777215,transparent:!0,depthWrite:!1}),r=new Yt(n,o);r.visible=!1,t.add(r),this.pool.push({mesh:r,mat:o,vel:new T,life:0,maxLife:1,size:1,grow:0,gravity:0})}}emit(t,e,n){for(let s=0;s<e;s++){const o=this.pool[this.cursor];this.cursor=(this.cursor+1)%this.pool.length;const r=new T(Math.random()-.5,Math.random()*.5,Math.random()-.5).normalize();o.vel.copy(r).multiplyScalar(n.speed*(.5+Math.random()*.5)),o.vel.y+=n.up??0,o.mesh.position.copy(t),o.mat.color.setHex(n.color),o.size=n.size*(.6+Math.random()*.6),o.grow=n.grow??0,o.gravity=n.gravity??0,o.life=o.maxLife=n.life*(.7+Math.random()*.5),o.mesh.visible=!0}}dust(t){this.emit(t,8,{color:15985362,speed:2.5,up:.5,size:.25,life:.5,grow:1.2})}splash(t){this.emit(t,18,{color:16777215,speed:3,up:5,size:.18,life:.8,gravity:14})}sparks(t){this.emit(t,12,{color:16773754,speed:8,up:1,size:.12,life:.3})}poof(t,e=9067224){this.emit(t,22,{color:e,speed:4,up:1.5,size:.45,life:.7,grow:1.5}),this.emit(t,10,{color:16777215,speed:6,up:2,size:.2,life:.5})}sparkle(t){this.emit(t,1,{color:16770688,speed:.6,up:1.2,size:.09,life:.9})}shockwave(t){for(let e=0;e<28;e++){const n=e/28*Math.PI*2,s=this.pool[this.cursor];this.cursor=(this.cursor+1)%this.pool.length,s.mesh.position.copy(t),s.vel.set(Math.cos(n)*12,1,Math.sin(n)*12),s.mat.color.setHex(15326400),s.size=.5,s.grow=1.5,s.gravity=0,s.life=s.maxLife=.55,s.mesh.visible=!0}}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=e.gravity*t,e.vel.multiplyScalar(1-Math.min(1,t*2.5)),e.mesh.position.addScaledVector(e.vel,t);const n=e.life/e.maxLife;e.mesh.scale.setScalar(e.size*(1+(1-n)*e.grow)),e.mat.opacity=Math.min(1,n*2)}}}const ve=i=>440*Math.pow(2,(i-69)/12),dx={D:{root:50,third:4},A:{root:45,third:4},Bm:{root:47,third:3},G:{root:43,third:4},C:{root:48,third:4},F:{root:41,third:4},Am:{root:45,third:3},Em:{root:40,third:3},Dm:{root:50,third:3}},Ks={bpm:172,sections:[{name:"intro",chords:["D","A","Bm","G"],lead:"guitar",melody:[[78,76,74,76,78,-1,81,-1],[76,-1,-1,-1,0,0,0,0],[78,76,74,76,78,-1,83,-1],[81,-1,79,-1,78,-1,76,-1]]},{name:"verse",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",melody:[[66,-1,66,64,62,-1,64,66],[64,-1,-1,61,-1,0,0,0],[66,-1,66,67,69,-1,67,66],[67,-1,66,64,-1,0,0,0],[66,-1,66,64,62,-1,64,66],[69,-1,-1,69,71,-1,69,-1],[66,-1,64,62,-1,64,66,-1],[64,-1,-1,-1,0,0,69,71]]},{name:"chorus",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",melody:[[74,-1,-1,73,74,-1,76,-1],[73,-1,69,-1,-1,0,69,71],[74,-1,-1,73,74,-1,78,-1],[76,-1,-1,-1,74,-1,0,0],[74,-1,-1,73,74,-1,76,78],[79,-1,78,-1,76,-1,73,-1],[74,-1,76,-1,78,-1,76,74],[74,-1,-1,-1,-1,-1,0,0]]},{name:"bridge",chords:["Bm","G","Bm","A"],lead:"voice",melody:[[71,-1,-1,-1,69,-1,-1,-1],[67,-1,-1,-1,66,-1,-1,-1],[71,-1,-1,-1,74,-1,-1,-1],[73,-1,-1,-1,-1,-1,0,0]]},{name:"chorus",chords:["D","A","Bm","G","D","A","Bm","G"],lead:"voice",transpose:0,melody:[[74,-1,-1,73,74,-1,76,-1],[73,-1,69,-1,-1,0,69,71],[74,-1,-1,73,74,-1,78,-1],[76,-1,-1,-1,74,-1,0,0],[74,-1,-1,73,74,-1,76,78],[79,-1,78,-1,76,-1,73,-1],[74,-1,76,-1,78,-1,76,74],[74,-1,-1,-1,-1,-1,0,0]]}]},rh=[[71,-1,74,-1,76,-1,74,71],[74,-1,-1,-1,71,-1,69,-1],[69,-1,71,-1,74,-1,76,-1],[73,-1,-1,-1,-1,-1,0,0],[71,-1,74,-1,76,-1,78,76],[74,-1,-1,-1,71,-1,69,-1],[69,-1,71,-1,74,-1,76,-1],[73,-1,76,-1,78,-1,81,-1]],ah={bpm:150,sections:[{name:"hiphop",chords:["Bm","G","D","A","Bm","G","D","A"],lead:"synth",melody:rh},{name:"drop",chords:["Bm","G","D","A","Bm","G","D","A"],lead:"guitar",melody:rh,transpose:12}]},fx={danger:!1,flying:!1,swimming:!1,lowHealth:!1,piloting:!1},ch=[[76,79,84,79,76,-1,74,72],[74,-1,71,74,79,-1,77,74],[76,72,76,79,81,-1,79,76],[77,-1,76,74,72,-1,0,0]],lh=[[84,-1,84,83,81,-1,79,-1],[79,77,79,-1,83,-1,79,-1],[81,-1,79,76,77,79,81,-1],[79,-1,76,-1,72,-1,0,0]],Eu={bpm:124,sections:[{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:ch},{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:lh},{name:"soca",chords:["C","G","Am","F"],lead:"pan",melody:ch,transpose:12},{name:"soca",chords:["F","G","C","C"],lead:"pan",melody:lh}]},bu={bpm:76,sections:[{name:"reggae",chords:["Am","Dm","Am","Em"],lead:"melodica",melody:[[69,-1,-1,72,-1,-1,74,-1],[72,-1,69,-1,-1,-1,0,0],[76,-1,-1,74,72,-1,69,-1],[71,-1,-1,-1,0,0,0,0]]},{name:"reggae",chords:["F","G","Am","Am"],lead:"melodica",melody:[[72,-1,74,-1,76,-1,-1,0],[74,-1,76,-1,79,-1,-1,0],[81,-1,-1,79,76,-1,74,-1],[76,-1,-1,-1,-1,-1,0,0]]}]},Tu={bpm:140,sections:[{name:"hoodie",chords:["Em","C","G","D"],lead:"synth",melody:[[71,-1,74,71,69,-1,67,-1],[67,-1,-1,64,-1,0,0,0],[71,-1,74,76,78,-1,76,74],[76,-1,-1,74,71,-1,0,0]]},{name:"hoodie",chords:["C","D","Em","Em"],lead:"voice",melody:[[76,-1,76,78,79,-1,78,76],[74,-1,76,-1,78,-1,0,0],[79,-1,78,76,74,-1,71,-1],[71,-1,-1,-1,-1,-1,0,0]]}]},na=[Ks,Eu,bu,Tu],hh=new Map([[Ks,1],[Eu,2],[bu,2],[Tu,2]]);class px{constructor(t,e){D(this,"out");D(this,"tone");D(this,"mood",fx);D(this,"energy",0);D(this,"dry");D(this,"wet");D(this,"guitarIn");D(this,"noiseBuf");D(this,"song",Ks);D(this,"pending",null);D(this,"section",0);D(this,"track",0);D(this,"loopsLeft",1);D(this,"bar",0);D(this,"step",0);D(this,"next",0);this.ctx=t,this.out=t.createGain(),this.out.gain.value=.42,this.tone=t.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=18e3,this.out.connect(this.tone).connect(e),this.dry=t.createGain(),this.dry.connect(this.out),this.wet=t.createGain();const n=t.createConvolver();n.buffer=this.impulse(1.6);const s=t.createGain();s.gain.value=.18,this.wet.connect(n).connect(s).connect(this.out),this.guitarIn=t.createGain();const o=t.createWaveShaper(),r=new Float32Array(1024);for(let h=0;h<r.length;h++){const d=h/(r.length-1)*2-1;r[h]=Math.tanh(d*6)}o.curve=r,o.oversample="4x";const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=3200,a.Q.value=.8;const c=t.createBiquadFilter();c.type="highpass",c.frequency.value=90;const l=t.createGain();l.gain.value=.16,this.guitarIn.connect(o).connect(a).connect(c).connect(l),l.connect(this.dry),l.connect(this.wet),this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate);const u=this.noiseBuf.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1;this.next=t.currentTime+.15}setBattle(t){const e=t?ah:na[this.track];this.pending=e!==this.song?e:null}setMood(t){this.mood=t;const e=t.swimming?1100:t.lowHealth?4200:18e3;this.tone.frequency.setTargetAtTime(e,this.ctx.currentTime,.25)}duck(t){const e=this.out.gain,n=this.ctx.currentTime;e.cancelScheduledValues(n),e.setTargetAtTime(.12,n,.05),e.setTargetAtTime(.42,n+t,.4)}update(){const t=this.ctx;for(this.next<t.currentTime-.5&&(this.next=t.currentTime+.05);this.next<t.currentTime+.2;)if(this.playStep(this.next),this.next+=60/this.song.bpm/4,++this.step>=16){this.step=0,this.bar++;const e=this.targetEnergy()>this.energy;this.energy=this.targetEnergy();const n=this.song.sections;if(this.pending)this.song=this.pending,this.pending=null,this.section=0,this.bar=0,this.loopsLeft=hh.get(this.song)??1,this.crash(this.next,1);else if(e&&this.song===Ks&&n[this.section].name!=="chorus")this.section=n.findIndex(s=>s.name==="chorus"),this.bar=0,this.crash(this.next,1);else if(this.bar>=n[this.section].chords.length){this.bar=0;let s=(this.section+1)%n.length;this.energy===0&&n[s].name==="chorus"&&(s=(s+1)%n.length),s<=this.section&&this.song!==ah&&--this.loopsLeft<=0&&(this.track=(this.track+1)%na.length,this.song=na[this.track],this.loopsLeft=hh.get(this.song)??1,s=0,this.crash(this.next,.7)),this.section=s}}}targetEnergy(){return this.mood.danger||this.mood.flying||this.mood.piloting?1:0}playStep(t){const e=this.song.sections[this.section],n=this.step,s=dx[e.chords[this.bar]],o=n%2===0,r=60/this.song.bpm/4,a=this.bar===e.chords.length-1,c=this.song===Ks&&this.energy===0;if(o){const u=e.melody[this.bar%e.melody.length],h=n/2,d=u[h];if(d>0){let f=1;for(let p=h+1;p<u.length&&u[p]===-1;p++)f++;const g=d+(e.transpose??0),_=f*r*2;let m=e.lead;(this.mood.piloting||c&&m==="guitar")&&(m="synth"),m==="pan"?this.steelPan(ve(g),t,_):m==="melodica"?this.melodica(ve(g),t,_):m==="voice"?this.voice(ve(g),t,_,e.name==="chorus"||this.mood.flying):m==="guitar"?this.leadGuitar(ve(g),t,_):this.synthLead(ve(g),t,_)}}const l=s.root;if(this.mood.lowHealth&&(n===0||n===2||n===8||n===10)&&this.heartbeat(t,n%8===0?1:.6),this.mood.piloting&&o&&this.blip(ve(l+24+[0,s.third,7,12][n/2%4]),t,r*1.5),this.mood.flying&&!o&&this.hat(t,.3),c){n%4===2&&this.uke(s,t),n%4===0&&this.bass(ve(l-12),t,r*3),(n===0||n===10)&&this.kick(t,.55),(n===4||n===12)&&this.snare(t,.35),o&&this.hat(t,.25),n===0&&this.bar===0&&this.crash(t,.4);return}switch(e.name){case"intro":case"chorus":o&&this.power(l,t,r*1.9,!1),o&&this.bass(ve(l-12),t,r*1.8),n===0&&this.bar===0&&this.crash(t,1),n===0&&this.bar%2===0&&e.name==="chorus"&&this.crash(t,.6),this.punkBeat(t,n,a&&e.name==="intro");break;case"verse":o&&this.power(l,t,r*.7,!0),o&&this.bass(ve(l-12),t,r*1.6),this.punkBeat(t,n,a);break;case"bridge":n===0&&this.power(l,t,r*15,!1),(n===0||n===10)&&this.bass(ve(l-12),t,r*6),n===0&&this.kick(t,1),n===8&&this.snare(t,1),o&&this.hat(t,.5),a&&n>=8&&this.snare(t,.4+(n-8)*.08);break;case"hiphop":(n===2||n===6||n===10||n===14)&&this.uke(s,t),n===0&&this.sub(ve(l-12),t,r*9,0),n===10&&this.sub(ve(l-12),t,r*5,n===10&&this.bar%4===3?7:0),(n===0||n===3||n===10)&&this.kick(t,n===3?.7:1),n===8&&this.clap(t),this.hat(t,n%4===2?.55:.25),a&&n>=12&&this.snare(t,.6);break;case"soca":n%4===0&&this.kick(t,1),(n===4||n===12)&&this.clap(t),(n===7||n===14)&&this.snare(t,.35),this.hat(t,n%2===0?.35:.2),(n===0||n===8)&&this.bass(ve(l-12),t,r*1.5),(n===3||n===11)&&this.bass(ve(l),t,r*1.2),(n===6||n===14)&&this.bass(ve(l-12+7),t,r),n%4===2&&this.uke(s,t),this.energy>0&&o&&this.power(l,t,r*1.6,!0),n===0&&this.bar===0&&this.crash(t,.7);break;case"reggae":n===8&&(this.kick(t,1),this.snare(t,.55)),o&&this.hat(t,n%4===2?.45:.25),(n===4||n===12)&&this.skank(s,t,r*1.2),n===0&&this.bass(ve(l-12),t,r*3),n===6&&this.bass(ve(l-12+7),t,r*2),n===10&&this.bass(ve(l-12),t,r*2),n===14&&this.bass(ve(l-12+s.third),t,r*1.5),this.energy>0&&(n===0||n===4||n===12)&&this.kick(t,.7);break;case"hoodie":(n===2||n===6||n===10||n===14)&&this.uke(s,t),n===0&&this.sub(ve(l-12),t,r*7,0),n===8&&this.sub(ve(l-12),t,r*6,this.bar%4===3?-5:0),(n===0||n===11)&&this.kick(t,1),n===8&&this.clap(t),this.hat(t,n%4===0?.5:.28),n>=13&&this.hat(t+r/2,.22),this.energy>0&&o&&this.power(l,t,r*1.8,!1);break;case"drop":o&&this.power(l,t,r*1.9,!1),o&&this.bass(ve(l-12),t,r*1.6),n%4===2&&this.uke(s,t),n===0&&this.bar%4===0&&this.crash(t,1),this.punkBeat(t,n,a);break}}punkBeat(t,e,n){if(n&&e>=8){this.tom(t,[200,170,140,120,200,170,140,110][e-8],.9),e===15&&this.kick(t,1);return}(e===0||e===6||e===8||e===10)&&this.kick(t,1),(e===4||e===12)&&this.snare(t,1),e%2===0&&this.hat(t,e%4===0?.6:.4)}env(t,e,n,s,o=.06){const r=this.ctx.createGain();return r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(n,t+e),r.gain.setValueAtTime(n,t+Math.max(e,s-o)),r.gain.exponentialRampToValueAtTime(1e-4,t+s+o),r}osc(t,e,n,s,o=0){const r=this.ctx.createOscillator();return r.type=t,r.frequency.value=e,r.detune.value=o,r.start(n),r.stop(n+s+.3),r}vibrato(t,e,n,s){const o=this.ctx.createOscillator();o.frequency.value=5.6;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(e*.008,t+Math.min(.3,n)),o.connect(r);for(const a of s)r.connect(a);o.start(t),o.stop(t+n+.3)}voice(t,e,n,s){const o=this.env(e,.02,.085,n*.92,.07),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2800;const a=this.osc("square",t,e,n,-5),c=this.osc("sawtooth",t,e,n,5),l=[a.frequency,c.frequency];if(a.connect(r),c.connect(r),s){const u=this.osc("square",t*2,e,n),h=this.ctx.createGain();h.gain.value=.3,u.connect(h).connect(r),l.push(u.frequency)}this.vibrato(e,t,n,l),r.connect(o),o.connect(this.dry),o.connect(this.wet)}synthLead(t,e,n){const s=this.env(e,.01,.07,n*.9,.1),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(4500,e),o.frequency.exponentialRampToValueAtTime(1400,e+.25);const r=this.osc("sawtooth",t,e,n,-8),a=this.osc("sawtooth",t,e,n,8);r.connect(o),a.connect(o),this.vibrato(e,t,n,[r.frequency,a.frequency]),o.connect(s),s.connect(this.dry),s.connect(this.wet)}leadGuitar(t,e,n){const s=this.env(e,.005,.5,n*.95,.05),o=this.osc("sawtooth",t,e,n);this.vibrato(e,t,n,[o.frequency]),o.connect(s).connect(this.guitarIn)}power(t,e,n,s){const o=this.env(e,.003,s?.35:.5,n,s?.03:.06),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=s?700:5e3;for(const[a,c]of[[t,-4],[t+7,4],[t+12,0]])this.osc("sawtooth",ve(a),e,n,c).connect(r);r.connect(o).connect(this.guitarIn)}uke(t,e){const n=t.root+24;[n,n+t.third,n+7,n+12].forEach((s,o)=>{const r=e+o*.012,a=this.ctx.createGain();a.gain.setValueAtTime(.05,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.35);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(5e3,r),c.frequency.exponentialRampToValueAtTime(1200,r+.2),this.osc("triangle",ve(s),r,.35).connect(c),this.osc("square",ve(s),r,.12).connect(c),c.connect(a),a.connect(this.dry),a.connect(this.wet)})}bass(t,e,n){const s=this.env(e,.005,.2,n,.04),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=900,this.osc("sawtooth",t,e,n).connect(o),this.osc("sine",t,e,n).connect(o),o.connect(s).connect(this.dry)}sub(t,e,n,s){const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(t*1.9,e),o.frequency.exponentialRampToValueAtTime(t,e+.04),s&&(o.frequency.setValueAtTime(t,e+n*.6),o.frequency.exponentialRampToValueAtTime(t*Math.pow(2,s/12),e+n));const r=this.env(e,.005,.45,n,.1),a=this.ctx.createWaveShaper(),c=new Float32Array(256);for(let l=0;l<256;l++)c[l]=Math.tanh((l/255*2-1)*2);a.curve=c,o.connect(a).connect(r).connect(this.dry),o.start(e),o.stop(e+n+.2)}noise(t,e,n,s,o,r=!1){const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=s;const l=this.ctx.createGain();l.gain.setValueAtTime(o,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(c).connect(l).connect(this.dry),r&&l.connect(this.wet),a.start(t,Math.random()*.5),a.stop(t+e+.02)}kick(t,e){const n=this.ctx.createOscillator();n.frequency.setValueAtTime(160,t),n.frequency.exponentialRampToValueAtTime(45,t+.12);const s=this.ctx.createGain();s.gain.setValueAtTime(.7*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.28),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.3),this.noise(t,.015,"highpass",3e3,.15*e)}snare(t,e){this.noise(t,.18,"highpass",1500,.32*e,!0);const n=this.ctx.createOscillator();n.frequency.setValueAtTime(240,t),n.frequency.exponentialRampToValueAtTime(160,t+.08);const s=this.ctx.createGain();s.gain.setValueAtTime(.2*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.1),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.12)}clap(t){for(let e=0;e<3;e++)this.noise(t+e*.011,.03,"bandpass",1500,.3);this.noise(t+.033,.22,"bandpass",1300,.28,!0)}hat(t,e){this.noise(t,.035,"highpass",8e3,.11*e)}crash(t,e){this.noise(t,1.4,"highpass",5e3,.16*e,!0)}tom(t,e,n){const s=this.ctx.createOscillator();s.frequency.setValueAtTime(e,t),s.frequency.exponentialRampToValueAtTime(e*.6,t+.2);const o=this.ctx.createGain();o.gain.setValueAtTime(.45*n,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.25),s.connect(o).connect(this.dry),s.start(t),s.stop(t+.28)}steelPan(t,e,n){const s=Math.min(1.2,n*1.4+.2);for(const[o,r]of[[1,.09],[2,.04],[3.01,.018],[4.2,.008]]){const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(r,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+s/o),this.osc("sine",t*o,e,s).connect(a),a.connect(this.dry),a.connect(this.wet)}}melodica(t,e,n){const s=this.env(e,.05,.06,n*.95,.12),o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=1900;const r=this.osc("square",t,e,n,-6),a=this.osc("sawtooth",t,e,n,6);r.connect(o),a.connect(o),this.vibrato(e,t,n,[r.frequency,a.frequency]),o.connect(s),s.connect(this.dry),s.connect(this.wet)}skank(t,e,n){const s=t.root+12,o=this.env(e,.003,.05,n*.6,.03),r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=700;for(const a of[s,s+t.third,s+7,s+12])this.osc("square",ve(a),e,n).connect(r);r.connect(o),o.connect(this.dry),o.connect(this.wet)}heartbeat(t,e){const n=this.ctx.createOscillator();n.frequency.setValueAtTime(75,t),n.frequency.exponentialRampToValueAtTime(38,t+.14);const s=this.ctx.createGain();s.gain.setValueAtTime(.55*e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.2),n.connect(s).connect(this.dry),n.start(t),n.stop(t+.22)}blip(t,e,n){const s=this.env(e,.003,.035,n*.6,.03);this.osc("square",t,e,n).connect(s),s.connect(this.dry),s.connect(this.wet)}impulse(t){const e=this.ctx.sampleRate,n=this.ctx.createBuffer(2,Math.floor(e*t),e);for(let s=0;s<2;s++){const o=n.getChannelData(s);for(let r=0;r<o.length;r++)o[r]=(Math.random()*2-1)*Math.pow(1-r/o.length,3)}return n}}const uh=.5,Os=i=>440*Math.pow(2,(i-69)/12);class mx{constructor(){D(this,"ctx",null);D(this,"master");D(this,"music",null);D(this,"battle",!1);D(this,"muted",!1);D(this,"jetGain",null);D(this,"engine",null)}start(){if(this.ctx){this.ctx.resume();return}this.ctx=new AudioContext;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=uh,this.master.connect(t),this.music=new px(this.ctx,this.master),this.music.setBattle(this.battle);const e=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=e,s.loop=!0;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=700,this.jetGain=this.ctx.createGain(),this.jetGain.gain.value=0,s.connect(o).connect(this.jetGain).connect(this.master),s.start()}setEngine(t,e=0){const n=this.ctx;if(!n)return;const s=n.currentTime;if(!t){if(this.engine){const a=this.engine;a.gain.gain.setTargetAtTime(0,s,.08);for(const c of a.oscs)c.stop(s+.6);this.engine=null}return}if(!this.engine||this.engine.kind!==t){this.setEngine(null);const a=n.createGain();a.gain.value=0;const c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;const l=[n.createOscillator(),n.createOscillator(),n.createOscillator()];l[0].type="sawtooth",l[1].type="square",l[2].type="sawtooth";for(const u of l)u.connect(c),u.start();c.connect(a).connect(this.master),this.engine={oscs:l,gain:a,filter:c,kind:t}}const o=this.engine,r=t==="boat"?48+e*70:85+e*190;o.oscs[0].frequency.setTargetAtTime(r,s,.08),o.oscs[1].frequency.setTargetAtTime(r*.5*1.01,s,.08),o.oscs[2].frequency.setTargetAtTime(r*2.02,s,.08),o.filter.frequency.setTargetAtTime((t==="boat"?380:700)+e*1600,s,.1),o.gain.gain.setTargetAtTime(.014+e*.022,s,.1)}setJet(t){!this.ctx||!this.jetGain||this.jetGain.gain.setTargetAtTime(t?.35:0,this.ctx.currentTime,.06)}toggleMute(){this.muted=!this.muted,this.ctx&&(this.master.gain.value=this.muted?0:uh)}setBattle(t){var e;this.battle=t,(e=this.music)==null||e.setBattle(t)}setMood(t){var e;(e=this.music)==null||e.setMood(t)}update(){var t;(t=this.music)==null||t.update()}play(t){var s;const e=this.ctx;if(!e)return;const n=e.currentTime;switch(t){case"roar":this.sweep(160,70,n,.9,"sawtooth",.28),this.sweep(240,90,n+.02,.8,"square",.08),this.noise(n,.9,700,.35);break;case"growl":this.sweep(110,80,n,.45,"sawtooth",.16),this.noise(n,.4,400,.18);break;case"stepGrass":this.noise(n,.05,900+Math.random()*400,.1);break;case"stepSand":this.noise(n,.08,2200+Math.random()*800,.06);break;case"stepWood":this.tone(140+Math.random()*30,n,.07,"triangle",.14),this.noise(n,.03,3e3,.05);break;case"laser":this.sweep(1400,260,n,.16,"square",.12);break;case"hack":[76,83,88,95,100].forEach((o,r)=>this.tone(Os(o),n+r*.06,.08,"square",.12));break;case"swing":this.noise(n,.12,2400,.25);break;case"hit":this.tone(220,n,.08,"square",.3),this.noise(n,.1,900,.4);break;case"hurt":this.sweep(600,180,n,.25,"sawtooth",.3);break;case"jump":this.sweep(300,620,n,.12,"triangle",.2);break;case"poof":this.noise(n,.35,500,.5),this.sweep(400,80,n,.3,"triangle",.3);break;case"splash":this.noise(n,.4,1400,.3);break;case"slam":this.sweep(120,40,n,.5,"sine",.7),this.noise(n,.5,300,.5);break;case"lock":this.tone(Os(88),n,.06,"square",.12),this.tone(Os(93),n+.06,.08,"square",.12);break;case"pickup":[81,85,88,93].forEach((o,r)=>this.tone(Os(o),n+r*.07,.12,"square",.15));break;case"horn":this.sweep(330,320,n,.5,"square",.12),this.sweep(415,405,n,.5,"square",.08);break;case"bump":this.sweep(120,50,n,.25,"triangle",.3);break;case"fanfare":(s=this.music)==null||s.duck(1.6),[[74,0],[78,.15],[81,.3],[86,.45],[86,.75]].forEach(([o,r])=>this.tone(Os(o),n+r,r>.6?.8:.14,"square",.18));break}}tone(t,e,n,s,o,r){const a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=s,c.frequency.value=t,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(o,e+.01),l.gain.exponentialRampToValueAtTime(.001,e+n),c.connect(l).connect(r??this.master),c.start(e),c.stop(e+n+.02)}sweep(t,e,n,s,o,r){const a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=o,c.frequency.setValueAtTime(t,n),c.frequency.exponentialRampToValueAtTime(e,n+s),l.gain.setValueAtTime(r,n),l.gain.exponentialRampToValueAtTime(.001,n+s),c.connect(l).connect(this.master),c.start(n),c.stop(n+s+.02)}noise(t,e,n,s){const o=this.ctx,r=o.createBuffer(1,Math.ceil(o.sampleRate*e),o.sampleRate),a=r.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;const c=o.createBufferSource();c.buffer=r;const l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const u=o.createGain();u.gain.setValueAtTime(s,t),u.gain.exponentialRampToValueAtTime(.001,t+e),c.connect(l).connect(u).connect(this.master),c.start(t)}}const is=i=>document.getElementById(i);class gx{constructor(){D(this,"hearts",is("hearts"));D(this,"status",is("status"));D(this,"boss",is("boss"));D(this,"bossName",is("boss-name"));D(this,"bossFill",is("boss-fill"));D(this,"toastEl",is("toast"));D(this,"toastTimer",0);D(this,"lastHearts","")}setHealth(t,e){const n=`${t}/${e}`;if(n!==this.lastHearts){this.lastHearts=n,this.hearts.innerHTML="";for(let s=0;s<e/2;s++){const o=Math.max(0,Math.min(2,t-s*2)),r=document.createElement("div");r.className="heart",r.innerHTML=`<span class="bg">♥</span><span class="fg" style="width:${o*50}%">♥</span>`,this.hearts.appendChild(r)}}}setRelics(t,e){this.status.textContent=t===e?"All relics found!":`Relics ${t} / ${e}`}setBoss(t,e=1){this.boss.classList.toggle("hidden",t===null),t&&(this.bossName.textContent=t,this.bossFill.style.width=`${Math.max(0,e)*100}%`)}toast(t,e=2.2){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastTimer=e}update(t){this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&this.toastEl.classList.remove("show"))}}function ia(i){return"hackProgress"in i}let sa=null;function Au(){if(!sa){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.font="900 56px Trebuchet MS, sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="#14202a",e.strokeText("!",32,34),e.fillStyle="#ffd23f",e.fillText("!",32,34),sa=new nu(t)}const i=new p_(new Qh({map:sa,depthTest:!1}));return i.scale.setScalar(.9),i.visible=!1,i.renderOrder=10,i}class Uc{constructor(){D(this,"group",new It);D(this,"position",new T);D(this,"velocity",new T);D(this,"alive",!0);D(this,"targetHeight",1.5);D(this,"flash",0);D(this,"materials",[]);D(this,"token",!0)}collectMaterials(){this.group.traverse(t=>{const e=t.material;e instanceof uu&&this.materials.push(e)})}takeHit(t,e){if(!this.alive||!this.vulnerable())return e.particles.sparks(this.position.clone().setY(this.position.y+1.2)),e.audio.play("hit"),!1;this.hp--,this.flash=.18;const n=this.position.clone().sub(t).setY(0).normalize().multiplyScalar(this.knockback());return this.velocity.add(n).setY(4),e.particles.sparks(this.position.clone().setY(this.position.y+1)),e.audio.play("hit"),this.onHurt(),this.hp<=0&&(this.alive=!1,this.group.visible=!1,e.particles.poof(this.position.clone().setY(this.position.y+.8),this.poofColor()),e.audio.play("poof")),!0}onHurt(){}get hostile(){return!0}get engaged(){return!1}vulnerable(){return!0}knockback(){return 8}poofColor(){return 9067224}updateFlash(t){this.flash=Math.max(0,this.flash-t);const e=this.flash>0;for(const n of this.materials)n.emissive.setHex(e?16777215:0)}}const ks=16726843,dh=3924223,_x=16765503,Wo=3.2;class vx extends Uc{constructor(e,n,s){super();D(this,"name","Sentry Drone");D(this,"radius",.8);D(this,"hp",2);D(this,"targetHeight",.6);D(this,"hacked",!1);D(this,"controlled",!1);D(this,"beingHacked",!1);D(this,"hackProgress",0);D(this,"hackSeconds",1.4);D(this,"pilotKind","drone");D(this,"camOffset",-.6);D(this,"facing",0);D(this,"state","patrol");D(this,"stateTime",0);D(this,"home");D(this,"patrolAngle",Math.random()*Math.PI*2);D(this,"orbit",Math.random()*Math.PI*2);D(this,"fireTimer",1+Math.random());D(this,"attacks",0);D(this,"contactCooldown",0);D(this,"allyTarget",null);D(this,"retarget",0);D(this,"rotors",[]);D(this,"lensMat",new be({color:ks}));D(this,"stripeMat",new be({color:ks}));D(this,"mark",Au());D(this,"light",new fr(ks,3,5));this.position.set(e,Math.max(s(e,n),0)+Wo,n),this.home=this.position.clone();const o=F(new lt(1,.3,.8),3883600,.05);this.group.add(o);const r=F(new Re(.36,14,8,0,Math.PI*2,0,Math.PI/2),15133167,.05);r.position.y=.14,this.group.add(r);const a=new Yt(new lt(1.03,.06,.83),this.stripeMat);this.group.add(a);const c=F(new Re(.17,12,8),1316637,.06);c.position.set(0,-.06,.4),this.group.add(c);const l=new Yt(new Re(.085,10,8),this.lensMat);l.position.set(0,-.06,.55),this.group.add(l),this.light.position.set(0,-.06,.7),this.group.add(this.light);const u=new be({color:16777215,transparent:!0,opacity:.16,depthWrite:!1});for(const[h,d]of[[.62,.5],[-.62,.5],[.62,-.5],[-.62,-.5]]){const f=F(new lt(.08,.06,Math.hypot(h,d)),2830138,.1);f.position.set(h/2,.05,d/2),f.rotation.y=Math.atan2(h,d),this.group.add(f);const g=F(new Qt(.09,.09,.14,10),2830138,.08);g.position.set(h,.1,d),this.group.add(g);const _=new It;_.position.set(h,.2,d);for(const m of[0,Math.PI/2]){const p=F(new lt(.7,.02,.07),14278115,0);p.rotation.y=m,_.add(p)}_.add(new Yt(new Qt(.37,.37,.01,18),u)),this.group.add(_),this.rotors.push(_)}for(const h of[-1,1]){const d=F(new lt(.05,.05,.7),2830138,.1);d.position.set(h*.32,-.3,0),this.group.add(d)}this.mark.position.y=1.1,this.group.add(this.mark),this.collectMaterials(),this.group.position.copy(this.position)}get hostile(){return!this.hacked}get engaged(){return this.alive&&!this.hacked&&this.state!=="patrol"}poofColor(){return 3883600}setColor(e){this.lensMat.color.setHex(e),this.stripeMat.color.setHex(e),this.light.color.setHex(e)}enter(e){this.state=e,this.stateTime=0}moveTo(e,n,s){const o=e.clone().sub(this.position),r=o.length(),a=r>.01?o.multiplyScalar(Math.min(n,r*2)/r):o;this.velocity.x=ot.damp(this.velocity.x,a.x,3,s),this.velocity.y=ot.damp(this.velocity.y,a.y,3,s),this.velocity.z=ot.damp(this.velocity.z,a.z,3,s)}faceTowards(e,n,s){const o=Math.atan2(e.x-this.position.x,e.z-this.position.z),r=Math.atan2(Math.sin(o-this.facing),Math.cos(o-this.facing));this.facing+=ot.clamp(r,-n*s,n*s)}fire(e,n){const s=this.position.clone().add(new T(Math.sin(this.facing),-.1,Math.cos(this.facing)).multiplyScalar(.7));e.fireBolt(s,n.clone().normalize(),this.hacked)}pilot(e,n,s,o){const r=n.fast?18:10;this.velocity.x=ot.damp(this.velocity.x,n.move.x*r,4,e),this.velocity.z=ot.damp(this.velocity.z,n.move.z*r,4,e),this.velocity.y=ot.damp(this.velocity.y,n.vertical*7,4,e),this.position.addScaledVector(this.velocity,e);const a=Math.max(o(this.position.x,this.position.z),0);this.position.y=ot.clamp(this.position.y,a+.8,a+40),this.facing=n.yaw,n.fire&&this.fire(s,n.aim)}update(e,n,s){if(!this.alive)return;this.updateFlash(e),this.stateTime+=e,this.contactCooldown=Math.max(0,this.contactCooldown-e);for(const c of this.rotors)c.rotation.y+=e*45;const o=Math.max(s(this.position.x,this.position.z),0),r=n.playerPos.clone().setY(n.playerPos.y+1.2),a=r.clone().setY(0).distanceTo(this.position.clone().setY(0));if(this.controlled){this.setColor(dh),this.sync(n.time);return}if(this.beingHacked){this.setColor(Math.sin(n.time*30)>0?_x:ks),this.velocity.multiplyScalar(1-Math.min(1,e*5)),this.position.addScaledVector(this.velocity,e),this.mark.visible=!1,this.sync(n.time,.06);return}if(this.hacked){this.updateAlly(e,n,o),this.sync(n.time);return}switch(this.hackProgress=Math.max(0,this.hackProgress-e*.5),this.setColor(this.state==="charge"&&Math.sin(n.time*40)>0?16777215:ks),this.state){case"patrol":{this.patrolAngle+=e*.45;const c=this.home.clone().add(new T(Math.cos(this.patrolAngle)*6,0,Math.sin(this.patrolAngle)*6));c.y=Math.max(s(c.x,c.z),0)+Wo,this.moveTo(c,3,e),this.faceTowards(this.position.clone().add(this.velocity),3,e),a<16&&(this.enter("alert"),n.audio.play("lock"));break}case"alert":this.faceTowards(r,8,e),this.velocity.multiplyScalar(1-Math.min(1,e*4)),this.stateTime>.7&&this.enter("attack");break;case"attack":{this.orbit+=e*.5;const c=new T(Math.cos(this.orbit),0,Math.sin(this.orbit)).multiplyScalar(this.token?9:20),l=r.clone().add(c);l.y=Math.max(s(l.x,l.z),0)+Wo+(this.token?.4:2),this.moveTo(l,6,e),this.faceTowards(r,5,e),this.token&&(this.fireTimer-=e),this.fireTimer<=0&&(this.attacks++,this.enter(this.attacks%3===0?"swoop":"charge")),a>30&&this.enter("patrol");break}case"charge":this.faceTowards(r,6,e),this.velocity.multiplyScalar(1-Math.min(1,e*5)),this.stateTime>.55&&(this.fire(n,r.clone().sub(this.position)),this.fireTimer=1.5+Math.random()*.8,this.enter("attack"));break;case"swoop":{this.faceTowards(r,6,e),this.stateTime<.8?this.moveTo(r,11,e):this.moveTo(this.position.clone().setY(o+Wo),4,e),this.contactCooldown<=0&&this.position.distanceTo(r)<1.3&&(n.hurtPlayer(this.position,1),this.contactCooldown=1.2),this.stateTime>1.6&&(this.fireTimer=1.2,this.enter("attack"));break}}this.mark.visible=this.state==="alert",this.mark.position.y=1.1+Math.min(.3,this.stateTime*1.5),this.position.addScaledVector(this.velocity,e),this.position.y=Math.max(this.position.y,o+.9),this.sync(n.time)}updateAlly(e,n,s){this.setColor(dh),this.mark.visible=!1;const o=n.playerFacing,r=new T(Math.cos(o),0,-Math.sin(o)),a=new T(-Math.sin(o),0,-Math.cos(o)),c=n.playerPos.clone().addScaledVector(r,2).addScaledVector(a,1.2);if(c.y=Math.max(n.playerPos.y,s)+3.4,this.moveTo(c,12,e),this.retarget-=e,this.retarget<=0||this.allyTarget&&!this.allyTarget.alive){this.retarget=.5,this.allyTarget=null;let l=16;for(const u of n.enemies){if(!u.alive||!u.hostile)continue;const h=u.position.distanceTo(this.position);h<l&&(l=h,this.allyTarget=u)}}if(this.allyTarget){const l=this.allyTarget.position.clone().setY(this.allyTarget.position.y+this.allyTarget.targetHeight*.5);this.faceTowards(l,6,e),this.fireTimer-=e,this.fireTimer<=0&&(this.fire(n,l.sub(this.position)),this.fireTimer=1.1)}else this.faceTowards(this.position.clone().add(this.velocity).add(a.clone().multiplyScalar(-.01)),3,e);this.position.addScaledVector(this.velocity,e)}sync(e,n=0){this.group.position.copy(this.position),this.group.position.y+=Math.sin(e*3+this.home.x)*.08,n&&this.group.position.add(new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(n)),this.group.rotation.order="YXZ",this.group.rotation.y=this.facing;const s=new T(Math.sin(this.facing),0,Math.cos(this.facing)),o=new T(Math.cos(this.facing),0,-Math.sin(this.facing));this.group.rotation.x=ot.clamp(this.velocity.dot(s)*.05,-.45,.45),this.group.rotation.z=ot.clamp(-this.velocity.dot(o)*.05,-.45,.45)}}const oa=16726843,Bs=3924223,fh=16765503,xx=24,yx={gorilla:{name:"Cyber Gorilla",hp:6,radius:1.3,targetHeight:2.8,walk:2.4,run:7.5,hackSeconds:2.8,camOffset:.8,metal:3817291,plate:5857651,accent:10181887,scale:1},tiger:{name:"Cyber Tiger",hp:3,radius:1,targetHeight:1.6,walk:3,run:11,hackSeconds:2,camOffset:0,metal:2830138,plate:14709802,accent:16751135,scale:1.1},lion:{name:"Cyber Lion",hp:4,radius:1.1,targetHeight:1.8,walk:2.8,run:9.5,hackSeconds:2.2,camOffset:.2,metal:9071150,plate:13214282,accent:16765503,scale:1.15}};class Mx extends Uc{constructor(e,n,s,o){super();D(this,"name");D(this,"radius");D(this,"hp");D(this,"hacked",!1);D(this,"controlled",!1);D(this,"beingHacked",!1);D(this,"hackProgress",0);D(this,"hackSeconds");D(this,"pilotKind","beast");D(this,"camOffset");D(this,"facing",Math.random()*Math.PI*2);D(this,"state","patrol");D(this,"spec");D(this,"stateTime",0);D(this,"home");D(this,"wander",new T);D(this,"wanderTimer",0);D(this,"attack","pounce");D(this,"hitDone",!1);D(this,"grounded",!0);D(this,"gaitPhase",Math.random()*6);D(this,"orbit",Math.random()*Math.PI*2);D(this,"stalkFor",2);D(this,"cooldown",0);D(this,"slamPose",0);D(this,"allyTarget",null);D(this,"retarget",0);D(this,"body",new It);D(this,"head",new It);D(this,"jaw",null);D(this,"limbs",[]);D(this,"arms",[]);D(this,"tail",[]);D(this,"eyeMat",new be({color:oa}));D(this,"accentMat");D(this,"mark",Au());this.kind=e;const r=yx[e];this.spec=r,this.name=r.name,this.hp=r.hp,this.radius=r.radius,this.targetHeight=r.targetHeight,this.hackSeconds=r.hackSeconds,this.camOffset=r.camOffset,this.accentMat=new be({color:r.accent}),this.position.set(n,o(n,s),s),this.home=this.position.clone(),this.wander.copy(this.home),this.group.add(this.body),e==="gorilla"?this.buildGorilla():this.buildCat(e==="lion"),this.group.scale.setScalar(r.scale),this.mark.position.y=r.targetHeight/r.scale+.7,this.group.add(this.mark),this.collectMaterials(),this.sync(0,0)}get hostile(){return!this.hacked}get engaged(){return this.alive&&!this.hacked&&this.state!=="patrol"}poofColor(){return this.spec.metal}knockback(){return this.kind==="gorilla"?3:7}buildCat(e){const n=this.spec,s=F(new je(.42,1.25,4,10),n.metal,.05);s.rotation.x=Math.PI/2,s.position.y=1.05,this.body.add(s);for(let u=0;u<4;u++){const h=F(new lt(.62,.12,.34),n.plate,.04);h.position.set(0,1.47,-.55+u*.38),this.body.add(h)}for(const u of[-1,1]){const h=new Yt(new lt(.03,.08,1.3),this.accentMat);if(h.position.set(u*.43,1.05,0),this.body.add(h),!e)for(let d=0;d<4;d++){const f=new Yt(new lt(.03,.42,.07),this.accentMat);f.position.set(u*.425,1.12,-.6+d*.36),f.rotation.x=.3,this.body.add(f)}}this.head.position.set(0,1.32,1.02),this.body.add(this.head);const o=F(new lt(.55,.48,.55),n.metal,.05);this.head.add(o);const r=F(new lt(.34,.24,.32),n.plate,.04);r.position.set(0,-.08,.36),this.head.add(r);const a=F(new lt(.3,.08,.32),1842982,.04);a.position.set(0,-.24,.3),this.head.add(a),this.jaw=a;for(const u of[-1,1]){const h=F(new ze(.1,.24,4),n.plate,.05);h.position.set(u*.19,.32,-.06),this.head.add(h);const d=new Yt(new Re(.06,8,6),this.eyeMat);d.position.set(u*.15,.07,.28),this.head.add(d)}if(e)for(let u=0;u<14;u++){const h=u/14*Math.PI*2,d=F(new ze(.14,.62,5),11043119,.04);d.position.set(Math.cos(h)*.42,Math.sin(h)*.42,-.14),d.rotation.z=h-Math.PI/2,d.rotation.x=-.3,this.head.add(d)}let c=this.body;const l=new It;l.position.set(0,1.25,-.85),l.rotation.x=.6;for(let u=0;u<5;u++){const h=u===0?l:new It;u>0&&(h.position.z=-.28);const d=F(new lt(.09,.09,.28),u%2?n.plate:n.metal,.06);d.position.z=-.14,h.add(d),c.add(h),this.tail.push(h),c=h}if(e){const u=F(new Re(.13,6,5),11043119,.04);u.position.z=-.3,c.add(u)}for(const u of[!0,!1])for(const h of[-1,1]){const d=new It;d.position.set(h*.3,1,u?.62:-.6);const f=F(new lt(.18,.55,.2),n.metal,.05);f.position.y=-.27,d.add(f);const g=new It;g.position.y=-.52,d.add(g);const _=F(new lt(.13,.45,.15),n.plate,.05);_.position.y=-.22,g.add(_);const m=F(new lt(.2,.08,.26),1842982,.05);m.position.set(0,-.46,.05),g.add(m),this.body.add(d),this.limbs.push({hip:d,knee:g,front:u,side:h})}}buildGorilla(){const e=this.spec,n=F(new Re(.85,14,10),e.metal,.05);n.scale.set(1.25,1.05,.9),n.position.set(0,1.85,.1),this.body.add(n);const s=F(new lt(1.1,.8,.3),e.plate,.04);s.position.set(0,1.95,.75),this.body.add(s);const o=new Yt(new Re(.18,10,8),this.accentMat);o.position.set(0,2,.92),this.body.add(o),this.head.position.set(0,2.75,.65),this.body.add(this.head);const r=F(new Re(.42,12,8),e.metal,.05);r.scale.set(1,.9,1),this.head.add(r);const a=F(new lt(.72,.14,.2),e.plate,.04);a.position.set(0,.14,.32),this.head.add(a);const c=new Yt(new lt(.52,.08,.05),this.eyeMat);c.position.set(0,.02,.4),this.head.add(c);const l=F(new lt(.42,.24,.25),e.plate,.04);l.position.set(0,-.18,.3),this.head.add(l),this.jaw=l;for(const u of[-1,1]){const h=new It;h.position.set(u*1,2.35,.25);const d=F(new je(.22,.65,4,8),e.metal,.05);d.position.y=-.42,h.add(d);const f=new It;f.position.y=-.85,h.add(f);const g=F(new je(.28,.65,4,8),e.plate,.05);g.position.y=-.45,f.add(g);const _=F(new lt(.5,.42,.5),e.metal,.05);_.position.y=-.95,f.add(_);const m=new Yt(new lt(.52,.06,.1),this.accentMat);m.position.set(0,-.95,.26),f.add(m),this.body.add(h),this.arms.push({shoulder:h,elbow:f,side:u});const p=new It;p.position.set(u*.45,.9,-.1);const M=F(new lt(.34,.5,.36),e.metal,.05);M.position.y=-.24,p.add(M);const x=new It;x.position.y=-.48,p.add(x);const v=F(new lt(.3,.42,.32),e.plate,.05);v.position.y=-.2,x.add(v);const I=F(new lt(.4,.12,.5),1842982,.05);I.position.set(0,-.42,.1),x.add(I),this.body.add(p),this.limbs.push({hip:p,knee:x,front:!1,side:u})}}enter(e){this.state=e,this.stateTime=0}setGlow(e,n){this.eyeMat.color.setHex(e),this.accentMat.color.setHex(n)}steer(e,n,s){const o=this.grounded?5:.6;this.velocity.x=ot.damp(this.velocity.x,e.x*n,o,s),this.velocity.z=ot.damp(this.velocity.z,e.z*n,o,s)}brake(e,n=5){this.grounded&&(this.velocity.x=ot.damp(this.velocity.x,0,n,e),this.velocity.z=ot.damp(this.velocity.z,0,n,e))}face(e,n,s){const o=Math.atan2(e.x-this.position.x,e.z-this.position.z),r=Math.atan2(Math.sin(o-this.facing),Math.cos(o-this.facing));this.facing+=ot.clamp(r,-n*s,n*s)}physics(e,n){const s=this.position.x,o=this.position.z;this.velocity.y-=xx*e,this.position.addScaledVector(this.velocity,e),n(this.position.x,this.position.z)<-.2&&(this.position.x=s,this.position.z=o,this.velocity.x*=-.2,this.velocity.z*=-.2);const r=n(this.position.x,this.position.z);this.position.y<=r||this.grounded&&this.velocity.y<=0&&this.position.y-r<.6?(this.position.y=r,this.velocity.y<0&&(this.velocity.y=0),this.grounded=!0):this.grounded=!1}update(e,n,s){if(!this.alive)return;if(this.updateFlash(e),this.stateTime+=e,this.cooldown=Math.max(0,this.cooldown-e),this.slamPose=Math.max(0,this.slamPose-e),this.controlled){this.setGlow(Bs,Bs),this.mark.visible=!1,this.sync(e,n.time);return}if(this.beingHacked){const h=Math.sin(n.time*30)>0;this.setGlow(h?fh:oa,h?fh:this.spec.accent),this.brake(e,6),this.physics(e,s),this.mark.visible=!1,this.sync(e,n.time,.05);return}if(this.hacked){this.setGlow(Bs,Bs),this.mark.visible=!1,this.updateAlly(e,n,s),this.physics(e,s),this.sync(e,n.time);return}this.hackProgress=Math.max(0,this.hackProgress-e*.4);const o=this.state==="windup"&&Math.sin(n.time*36)>0;this.setGlow(o?16777215:oa,o?16777215:this.spec.accent);const r=n.playerPos,a=r.clone().sub(this.position).setY(0),c=a.length(),l=c>.01?a.clone().divideScalar(c):new T(0,0,1),u=c<20&&Math.abs(r.y-this.position.y)<7;switch(this.state){case"patrol":{this.wanderTimer-=e;const h=this.wander.clone().sub(this.position).setY(0);if(this.wanderTimer<=0||h.length()<1){const d=Math.random()*Math.PI*2,f=3+Math.random()*9,g=this.home.x+Math.cos(d)*f,_=this.home.z+Math.sin(d)*f;s(g,_)>.6&&this.wander.set(g,0,_),this.wanderTimer=3+Math.random()*4}h.length()>1?(this.steer(h.normalize(),this.spec.walk,e),this.face(this.wander,2.5,e)):this.brake(e),u&&(this.enter("alert"),n.audio.play(this.kind==="lion"?"roar":"growl"));break}case"alert":{this.brake(e),this.face(r,7,e),this.stateTime>(this.kind==="gorilla"?1.3:.7)&&(this.enter(this.kind==="tiger"?"stalk":"chase"),this.stalkFor=1.4+Math.random()*1.4);break}case"stalk":{this.orbit+=e*.6;const d=r.clone().add(new T(Math.cos(this.orbit),0,Math.sin(this.orbit)).multiplyScalar(this.token?8:17)).sub(this.position).setY(0);this.steer(d.length()>.5?d.normalize():d,4.2,e),this.face(r,5,e),this.token&&this.stateTime>this.stalkFor&&this.cooldown<=0&&this.beginAttack("pounce",n),c>34&&this.enter("patrol");break}case"chase":{if(!this.token){this.orbit+=e*.4;const f=r.clone().add(new T(Math.cos(this.orbit),0,Math.sin(this.orbit)).multiplyScalar(17)).sub(this.position).setY(0);this.steer(f.length()>.5?f.normalize():f,this.spec.walk*1.5,e),this.face(r,5,e),c>34&&this.enter("patrol");break}this.steer(l,this.spec.run,e),this.face(r,6,e);const h=this.kind==="gorilla"?3.8:6.5;c<h&&this.cooldown<=0&&this.beginAttack(this.kind==="gorilla"?"slam":Math.random()<.5?"roar":"pounce",n),c>34&&this.enter("patrol");break}case"windup":{this.brake(e,7),this.face(r,6,e);const h=this.attack==="pounce"?.55:.75;this.stateTime>=h&&this.release(n,c,l);break}case"leap":{const h=r.clone().setY(r.y+1.1),d=this.position.clone().setY(this.position.y+this.spec.targetHeight*.5);!this.hitDone&&d.distanceTo(h)<this.radius+.9&&(n.hurtPlayer(this.position,1),this.hitDone=!0),this.grounded&&this.stateTime>.15&&this.enter("recover");break}case"recover":{this.brake(e,4);const h=this.kind==="gorilla"?1.3:this.kind==="lion"?1:.9;this.stateTime>h&&(this.cooldown=1.2,this.enter(this.kind==="tiger"?"stalk":"chase"),this.stalkFor=1.4+Math.random()*1.4);break}}this.mark.visible=this.state==="alert",this.physics(e,s),this.sync(e,n.time)}beginAttack(e,n){this.attack=e,this.enter("windup"),e==="pounce"&&n.audio.play("growl")}release(e,n,s){if(this.attack==="pounce"){this.velocity.set(s.x,0,s.z).multiplyScalar(Math.min(14,4+n*1.5)),this.velocity.y=6.5,this.grounded=!1,this.hitDone=!1,this.enter("leap");return}const o=new T(Math.sin(this.facing),0,Math.cos(this.facing)),r=this.position.clone().setY(this.position.y+.3);this.attack==="roar"?(e.audio.play("roar"),e.shake(.35),e.particles.emit(r.clone().addScaledVector(o,1.5).setY(r.y+1),14,{color:this.spec.accent,speed:7,up:.5,size:.2,life:.45,grow:2}),n<7&&o.dot(s)>.4&&e.hurtPlayer(this.position,1)):(this.slamPose=.35,e.audio.play("slam"),e.shake(.6),e.particles.dust(r),e.particles.emit(r,18,{color:14209720,speed:7,up:1,size:.35,life:.6,grow:2}),n<5.5&&e.playerGrounded&&e.hurtPlayer(this.position,2)),this.enter("recover")}updateAlly(e,n,s){if(this.retarget-=e,this.retarget<=0||this.allyTarget&&(!this.allyTarget.alive||!this.allyTarget.hostile)){this.retarget=.5,this.allyTarget=null;let d=16;for(const f of n.enemies){if(!f.alive||!f.hostile)continue;const g=f.position.distanceTo(this.position);g<d&&(d=g,this.allyTarget=f)}}const o=n.playerPos;if(this.allyTarget){const d=this.allyTarget,f=d.position.clone().sub(this.position).setY(0),g=f.length();this.face(d.position,7,e),g>this.radius+d.radius+.6?this.steer(f.normalize(),this.spec.run,e):this.brake(e),g<this.radius+d.radius+1.2&&this.cooldown<=0&&(this.cooldown=this.kind==="gorilla"?1.3:1,this.meleeLunge(n,f.normalize()),n.strike(d,this.position));return}const r=n.playerFacing,a=new T(Math.cos(r),0,-Math.sin(r)),c=new T(-Math.sin(r),0,-Math.cos(r)),u=o.clone().addScaledVector(a,-3).addScaledVector(c,2).sub(this.position).setY(0),h=u.length();if(h>60){const d=o.clone().addScaledVector(c,4);s(d.x,d.z)>.2?this.position.set(d.x,s(d.x,d.z),d.z):this.brake(e);return}h>1.5?(this.steer(u.normalize(),h>8?this.spec.run:this.spec.walk*1.4,e),this.face(this.position.clone().add(this.velocity),6,e)):this.brake(e)}meleeLunge(e,n){this.kind==="gorilla"?(this.slamPose=.35,e.audio.play("slam"),e.shake(.2),e.particles.dust(this.position.clone().setY(this.position.y+.2))):(this.velocity.x+=n.x*5,this.velocity.z+=n.z*5,this.grounded&&(this.velocity.y=3.5,this.grounded=!1),e.audio.play("growl"))}pilot(e,n,s,o){const r=n.fast?this.spec.run*1.15:this.spec.run*.7;if(this.steer(n.move,r*Math.min(1,n.move.length()),e),n.move.lengthSq()>.01&&this.face(this.position.clone().add(n.move),9,e),n.jump&&this.grounded&&(this.velocity.y=this.kind==="gorilla"?9:11,this.grounded=!1,s.audio.play("jump")),n.fire&&this.cooldown<=0){this.cooldown=this.kind==="gorilla"?.9:.55;const a=new T(Math.sin(this.facing),0,Math.cos(this.facing));this.meleeLunge(s,a);const c=this.kind==="gorilla"?5.5:this.kind==="lion"?6.5:3.2;this.kind==="lion"&&(s.audio.play("roar"),s.particles.emit(this.position.clone().addScaledVector(a,1.5).setY(this.position.y+1.2),14,{color:Bs,speed:7,up:.5,size:.2,life:.45,grow:2}));for(const l of s.enemies){if(!l.alive||!l.hostile)continue;const u=l.position.clone().sub(this.position).setY(0);u.length()>c+l.radius||this.kind!=="gorilla"&&u.normalize().dot(a)<.3||s.strike(l,this.position)}}this.physics(e,o)}sync(e,n,s=0){const o=Math.hypot(this.velocity.x,this.velocity.z),r=ot.clamp(o/this.spec.run,0,1);this.gaitPhase+=e*(this.kind==="gorilla"?1.5+o*1:2+o*1.3);const a=this.gaitPhase,c=this.state==="windup"&&this.attack==="pounce"?Math.min(1,this.stateTime/.3):this.state==="stalk"?.35:0,l=this.state==="windup"&&this.attack==="roar";if(this.kind==="gorilla"){const u=this.state==="alert"&&!this.hacked,h=this.state==="windup"&&this.attack==="slam";this.body.rotation.x=.25*(1-(h?1:0)),this.body.position.y=Math.abs(Math.sin(a))*.06*r,this.arms.forEach((d,f)=>{let _=-.3+Math.sin(a+f*Math.PI)*.5*r,m=d.side*.12,p=-.15;if(u){const M=Math.max(0,Math.sin(n*14+f*Math.PI));_=-1.3-M*.2,m=-d.side*.5,p=-1.5+M*.4}if(h){const M=Math.min(1,this.stateTime/.4);_=ot.lerp(-.3,-2.9,M),p=-.3}this.slamPose>0&&(_=-.9,p=-.1),d.shoulder.rotation.set(_,0,m),d.elbow.rotation.x=p}),this.limbs.forEach((d,f)=>{const g=-Math.sin(a+f*Math.PI)*.45*r;d.hip.rotation.x=g,d.knee.rotation.x=Math.max(0,Math.cos(a+f*Math.PI))*.6*r})}else{const u=r*.75+(o>.2?.15:0);for(const h of this.limbs){const d=h.front===h.side<0?0:Math.PI,f=a+d;let g=Math.sin(f)*u,_=Math.max(0,-Math.cos(f))*u*1.1*(h.front?1:-1);this.grounded||(g=h.front?-.9:.9,_=h.front?.3:-.3),g+=c*(h.front?-.25:.55),_+=c*(h.front?.5:-.9),h.hip.rotation.x=g,h.knee.rotation.x=_}this.body.position.y=-c*.3+Math.abs(Math.sin(a))*.05*r,this.body.rotation.x=c*.12+(this.grounded?0:-this.velocity.y*.02),this.tail.forEach((h,d)=>{h.rotation.y=Math.sin(n*3+d*.6)*(.2+r*.15),d===0&&(h.rotation.x=this.state==="alert"||c>0?1:.6)})}this.head.rotation.x=l?-.35:0,this.jaw&&(this.jaw.rotation.x=l?.5:0),this.group.position.copy(this.position),s&&this.group.position.add(new T(Math.random()-.5,0,Math.random()-.5).multiplyScalar(s)),this.group.rotation.y=this.facing,this.mark.position.y=this.spec.targetHeight/this.spec.scale+.7+Math.min(.3,this.stateTime*1.5)}}class Sx extends Uc{constructor(e,n,s){super();D(this,"name","Stone Warden");D(this,"radius",1.8);D(this,"hp",6);D(this,"maxHp",6);D(this,"targetHeight",4.2);D(this,"state","dormant");D(this,"stateTime",0);D(this,"facing",0);D(this,"arm");D(this,"core");D(this,"coreMat");D(this,"torso");D(this,"ring",{active:!1,radius:0,center:new T,hit:!1});D(this,"contactCooldown",0);this.position.set(e,s(e,n),n);const o=9211801,r=4935523;this.torso=F(new lt(2.6,2.4,1.8),o,.04),this.torso.position.y=2.6,this.group.add(this.torso);const a=F(new lt(1.4,1.2,1.3),r,.05);a.position.y=4.3,this.group.add(a);for(const u of[-1,1]){const h=F(new ze(.22,1.1,6),15787724,.08);h.position.set(u*.8,4.9,0),h.rotation.z=-u*.6,this.group.add(h);const d=new Yt(new lt(.3,.14,.05),new be({color:16734762}));d.position.set(u*.35,4.4,.67),this.group.add(d);const f=F(new lt(.8,1.5,.9),r,.05);f.position.set(u*.75,.75,0),this.group.add(f)}this.coreMat=new be({color:5579281}),this.core=new Yt(new Qn(.45,0),this.coreMat),this.core.position.set(0,2.7,.95),this.group.add(this.core),this.arm=new It,this.arm.position.set(1.7,3.4,0);const c=F(new lt(.7,2.2,.7),o,.05);c.position.y=-1,this.arm.add(c);const l=F(new ur(.9,0),r,.05);l.position.y=-2.4,this.arm.add(l),this.group.add(this.arm),this.collectMaterials(),this.group.position.copy(this.position)}get awake(){return this.alive&&this.state!=="dormant"}vulnerable(){return this.state==="stunned"}knockback(){return 1.5}poofColor(){return 9211801}emerge(){this.enter("rising")}enter(e){this.state=e,this.stateTime=0}update(e,n,s){if(!this.alive)return;this.updateFlash(e),this.stateTime+=e,this.contactCooldown=Math.max(0,this.contactCooldown-e);const o=n.playerPos.clone().sub(this.position).setY(0),r=o.length(),a=Math.atan2(o.x,o.z),c=d=>{const f=Math.atan2(Math.sin(a-this.facing),Math.cos(a-this.facing));this.facing+=ot.clamp(f,-d*e,d*e)},l=new T(Math.sin(this.facing),0,Math.cos(this.facing));let u=.2;switch(this.state){case"dormant":r<16&&this.enter("chase");break;case"rising":c(3),u=-1.5,Math.random()<e*20&&n.particles.dust(this.position.clone().add(new T((Math.random()-.5)*4,0,(Math.random()-.5)*4))),this.stateTime>1.8&&this.enter("chase");break;case"chase":c(2.2),r>4.2&&this.position.addScaledVector(l,3.2*e),r<5&&this.stateTime>.6&&this.enter("windup"),u=.2+Math.sin(n.time*4)*.2;break;case"windup":c(1.2),u=-2.6*Math.min(1,this.stateTime/.9),this.stateTime>.9&&this.slam(n,l);break;case"stunned":u=1.4,this.coreMat.color.setHex(Math.sin(n.time*18)>0?16765503:16742954),this.stateTime>2&&(this.coreMat.color.setHex(5579281),this.enter("recover"));break;case"recover":u=1.4-Math.min(1,this.stateTime/.5)*1.2,this.stateTime>.6&&this.enter("chase");break}if(this.ring.active){this.ring.radius+=e*14;const d=n.playerPos.clone().sub(this.ring.center).setY(0).length(),f=Math.abs(n.playerPos.y-this.ring.center.y)<1.2;!this.ring.hit&&n.playerGrounded&&f&&Math.abs(d-this.ring.radius)<.9&&(this.ring.hit=!0,n.hurtPlayer(this.ring.center,1)),this.ring.radius>9&&(this.ring.active=!1)}this.velocity.multiplyScalar(1-Math.min(1,e*6)),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.position.y=s(this.position.x,this.position.z),r<this.radius+.5&&this.contactCooldown<=0&&this.state!=="stunned"&&(n.hurtPlayer(this.position,1),this.contactCooldown=1),this.arm.rotation.x=ot.damp(this.arm.rotation.x,u,this.state==="stunned"?30:10,e);const h=this.state==="dormant"?.9:this.state==="rising"?5.5*(1-ot.smoothstep(this.stateTime,0,1.6)):0;this.group.position.copy(this.position).setY(this.position.y-h),this.group.rotation.y=this.facing,this.torso.rotation.z=this.state==="stunned"?Math.sin(n.time*10)*.05:0}slam(e,n){const s=this.position.clone().addScaledVector(n,2.6);e.particles.shockwave(s.clone().setY(s.y+.3)),e.particles.dust(s),e.audio.play("slam"),e.playerPos.distanceTo(s)<2.4&&e.hurtPlayer(s,2),this.ring={active:!0,radius:0,center:s,hit:!1},this.enter("stunned")}get shake(){return this.state==="rising"?.45:this.state==="stunned"&&this.stateTime<.35?1-this.stateTime/.35:0}}const Nc="gooseman-skyfall-save";function As(){return{version:2,pos:[0,0,6],health:6,maxHealth:6,relics:[],wardenDefeated:!1}}function zc(){try{const i=localStorage.getItem(Nc);if(!i)return null;const t=JSON.parse(i);return t.version!==2?null:{...As(),...t}}catch{return null}}function wx(i){try{localStorage.setItem(Nc,JSON.stringify(i))}catch{}}function Ex(){localStorage.removeItem(Nc)}const Ru=document.getElementById("game"),Ui=new u_({canvas:Ru,antialias:!0});Ui.setPixelRatio(Math.min(window.devicePixelRatio,2));Ui.shadowMap.enabled=!0;Ui.shadowMap.type=Eh;Ui.outputColorSpace=an;const De=new d_;De.fog=new Sc(12576511,120,420);const io=new fn(55,1,.1,2e3),Cu=new T(.5,.8,.3).normalize();De.add(new j_(14676735,6064714,1.2));const fi=new J_(16774364,2.4);fi.castShadow=!0;fi.shadow.mapSize.set(2048,2048);const Ss=fi.shadow.camera;Ss.left=Ss.bottom=-32;Ss.right=Ss.top=32;Ss.near=1;Ss.far=200;fi.shadow.bias=-5e-4;De.add(fi,fi.target);const Pu=ov(Cu);De.add(Pu.group);const Lu=_v(),Du=Cv(Lu,sr);De.add(Du.mesh);De.add(gv());const Iu=jv();De.add(Iu.group);const ph=new ex(document.getElementById("minimap"),Lu.image.data);Ms.push({kind:"boat",x:fe.x+4.4,z:fe.z1-4,yaw:0},{kind:"jetski",x:fe.x-3.4,z:fe.z1-3,yaw:0},{kind:"jetski",x:fe.x-3.4,z:fe.z1-9,yaw:0});const Un=Ms.map(i=>new Qv(i.kind,i.x,i.z,i.yaw));for(const i of Un)De.add(i.group);const Bt=new Q_(Ru),tn=new ux(De),ae=new mx,Se=new gx,et=new hx;De.add(et.object);const cn=new bv(io),so=[[-12,-10,1.4],[18,-21,1.4],[8,-42,8.4]],Uu=so.map(([i,t,e])=>{const n=F(new Qn(.6,0),16765503,.08);n.add(new fr(16765503,6,8));const s=Wt(i,t)+e;return n.position.set(i,s,t),De.add(n),{mesh:n,baseY:s}}),Pi=F(new ze(.35,.7,3),16765503,.12);Pi.rotation.x=Math.PI;Pi.visible=!1;De.add(Pi);let pe=As(),oo="title",we=[],Le=null,or=[],Me=null,ra=0,rr=0,sc=!1,mh=!1,aa=!1,ca=0;const Nu=document.getElementById("combat-tip"),zu=[...document.querySelectorAll(".key[data-code]")];for(const i of zu){const t=i.dataset.code;i.addEventListener("pointerdown",e=>{e.preventDefault(),i.setPointerCapture(e.pointerId),Bt.setVirtual(t,!0)});for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>Bt.setVirtual(t,!1))}function bx(){for(const i of zu){const t=i.dataset.code,e=Bt.down(t)||t==="KeyR"&&et.running||t==="ShiftLeft"&&Bt.down("ShiftRight")||t==="KeyJ"&&(Bt.down("KeyF")||Bt.clicked);i.classList.toggle("on",e)}}const Tx=[[-8,-4],[10,-6],[-18,-18],[20,-30],[-4,-30],[14,-12],[86,-38],[100,-22],[-86,-10],[-100,-36],[40,-96],[2,44]],Ax=[["gorilla",88,-26],["gorilla",104,-42],["gorilla",76,-48],["tiger",62,-16],["tiger",98,-8],["tiger",80,-58],["tiger",112,-30],["lion",-82,-8],["lion",-96,-38],["lion",-72,-30],["lion",-110,-14]],gh=[-20,-36];function Rx(){for(const i of we)De.remove(i.group);for(const i of or)De.remove(i.mesh);for(const i of fs)De.remove(i.mesh);fs=[],fo(),we=[],or=[],Me=null}function gr(i){Oc(),Rx(),re.phase="calm",re.wave=re.timer=re.kills=re.quiet=0,ss.clear(),oc.clear(),pe=i;const[t,,e]=pe.pos;et.position.set(t,Wt(t,e),e),et.velocity.set(0,0,0),et.invulnerable=0,cn.snap(et.position),Uu.forEach((n,s)=>n.mesh.visible=!pe.relics.includes(s));for(const[n,s]of Tx)we.push(new vx(n,s,Wt));for(const[n,s,o]of Ax)we.push(new Mx(n,s,o,Wt));for(const n of we)De.add(n.group);Le=null,!pe.wardenDefeated&&pe.relics.length===so.length&&Fu(),oo="play",sc=!1,Nu.classList.add("hidden"),document.getElementById("title").classList.add("hidden"),document.getElementById("gameover").classList.add("hidden"),ae.start(),ae.setBattle(!1),Se.toast(pe.relics.length?"Welcome back, Gooseman":"Find the three relics",2.6)}function Fu(){const i=new T(th.x,0,th.y).sub(et.position).setY(0);let t=new T(gh[0],0,gh[1]);for(let e=0;e<16;e++){const n=i.lengthSq()>1?i.clone().normalize():new T(0,0,-1);n.applyAxisAngle(new T(0,1,0),(e-8)*.35);const s=et.position.clone().addScaledVector(n,12);if(Wt(s.x,s.z)>.6&&Math.hypot(s.x-Fe.x,s.z-Fe.z)>5){t=s;break}}Le=new Sx(t.x,t.z,Wt),Le.emerge(),we.push(Le),De.add(Le.group),ae.play("slam"),Se.toast("The ground shakes… the Stone Warden rises!",3)}function Qo(){!Ve&&et.grounded&&Wt(et.position.x,et.position.z)>.2&&(pe.pos=[et.position.x,et.position.y,et.position.z]),wx(pe)}function Ou(i,t){oo!=="play"||et.invulnerable>0||(pe.health=Math.max(0,pe.health-t),et.hurt(i),ae.play("hurt"),en&&fo("Gooseman is hurt! Link lost."),rr=.2,pe.health<=0&&(Oc(),oo="dead",Me=null,document.getElementById("gameover").classList.remove("hidden")))}function _h(i,t){const e=i==="heart"?F(new Re(.35,12,8),16726858,.1):F(new Qn(.8,1),16726858,.06),n=Wt(t.x,t.z)+(i==="heart"?.6:1.4);e.position.set(t.x,n,t.z),De.add(e),or.push({mesh:e,kind:i,baseY:n})}function Cx(){let i=null,t=1/0;const e=new T(Math.sin(et.facing),0,Math.cos(et.facing));for(const n of we){if(!n.alive||!n.hostile)continue;const s=n.position.clone().sub(et.position).setY(0),o=s.length();if(o>20)continue;const r=o-s.normalize().dot(e)*6;r<t&&(t=r,i=n)}return i}let fs=[];const ku=new je(.07,.6,2,6);ku.rotateX(Math.PI/2);const vh={hostile:new be({color:16728128}),friendly:new be({color:6287615})};function Px(i,t,e){const n=new Yt(ku,e?vh.friendly:vh.hostile);n.position.copy(i),n.lookAt(i.clone().add(t)),De.add(n),fs.push({mesh:n,vel:t.clone().normalize().multiplyScalar(e?30:18),friendly:e,life:2.5}),ae.play("laser")}function Lx(i){const t=et.position.clone().setY(et.position.y+1.2);for(const e of fs){e.mesh.position.addScaledVector(e.vel,i),e.life-=i;const n=e.mesh.position;let s=n.y<Wt(n.x,n.z)||e.life<=0;if(!s){for(const o of ho)if(n.y>=o.bottom&&n.y<=o.top+.45&&Lc(o,n.x,n.z)){s=!0;break}}if(!s&&e.friendly)for(const o of we){if(!o.alive||!o.hostile)continue;const r=o.position.clone().setY(o.position.y+o.targetHeight*.5);if(n.distanceTo(r)<o.radius+.35){o.takeHit(n.clone().sub(e.vel),Nn),ar(o),s=!0;break}}else if(!s){n.distanceTo(t)<.9&&(Ou(n,1),s=!0);for(const o of we){if(s)break;!o.alive||o.hostile||n.distanceTo(o.position)<o.radius+.3&&(o.takeHit(n.clone().sub(e.vel),Nn),ar(o),s=!0)}}s&&(tn.sparks(n),De.remove(e.mesh),e.life=-1)}fs=fs.filter(e=>e.life>0)}function ar(i){i.alive||(i===en&&fo(`${i.name} destroyed! Link lost.`),i===Le?(pe.wardenDefeated=!0,_h("container",i.position),ae.play("fanfare"),Se.toast("The Stone Warden crumbles!",3),Qo()):i.hostile&&re.kills++,i!==Le&&i.hostile&&Math.random()<.5&&_h("heart",i.position.clone().setY(Wt(i.position.x,i.position.z))))}const re={wave:0,phase:"calm",timer:0,kills:0,quiet:0},ss=new Map,oc=new Map;function Dx(i,t){const e=we.filter(a=>a.alive&&a.hostile&&a.engaged&&a!==Le&&a.position.distanceTo(et.position)<40);for(const a of we)e.includes(a)||(a.token=!0);if(e.length===0){re.quiet+=i,re.quiet>8&&(re.phase="calm");return}re.quiet=0;const n=e.length>=3;re.phase==="calm"&&(re.phase="fight",re.wave=1,re.timer=re.kills=0,n&&Se.toast("Wave 1 · they come a few at a time",2)),re.timer+=i;const s=re.phase==="breather"?0:re.wave<=1?1:2;re.phase==="fight"&&(re.kills>=s+1||re.timer>18)?(re.phase="breather",re.timer=0,n&&Se.toast("They're regrouping · catch your breath",2)):re.phase==="breather"&&re.timer>6.5&&(re.phase="fight",re.wave++,re.timer=re.kills=0,n&&Se.toast(`Wave ${re.wave}!`,1.8));const o=e.filter(a=>(oc.get(a)??0)<=t).sort((a,c)=>{const l=ss.has(a)?0:1,u=ss.has(c)?0:1;return l-u||a.position.distanceTo(et.position)-c.position.distanceTo(et.position)}),r=new Set(o.slice(0,s));for(const a of e){const c=ss.get(a);r.has(a)&&c!==void 0&&t-c>12&&(r.delete(a),oc.set(a,t+6)),a.token=r.has(a),a.token&&c===void 0&&ss.set(a,t),a.token||ss.delete(a)}}function Ix(){if(Ve)return;const i=et.position;for(const t of we){if(!t.alive||i.y>t.position.y+t.targetHeight||i.y+1.8<t.position.y)continue;const e=new T(i.x-t.position.x,0,i.z-t.position.z),n=t.radius*.85+.4,s=e.length();if(s>=n)continue;s<.001?e.set(1,0,0):e.divideScalar(s);const o=n-s,r=t===Le?1:.6;i.addScaledVector(e,o*r),t.position.addScaledVector(e,-o*(1-r))}}let en=null,Xo=0,jn=0;const Fc=document.getElementById("hack"),rc=document.getElementById("hack-fill"),ac=document.getElementById("hack-text");function fo(i="Back to Gooseman"){en&&(en.controlled=!1,en=null,et.frozen=!1,document.body.classList.remove("piloting","pilot-drone","pilot-beast"),Se.toast(i,1.6))}function Ux(i){const t=Me&&ia(Me)&&Me.hostile&&Me.alive?Me:null,e=!!t&&t.position.distanceTo(et.position)<14;for(const n of we)ia(n)&&(n.beingHacked=!1);if(t&&e&&Bt.down("KeyH"))t.beingHacked=!0,t.hackProgress=Math.min(1,t.hackProgress+i/t.hackSeconds),t.hackProgress>=1&&(t.hacked=!0,t.beingHacked=!1,Me=null,ae.play("hack"),Se.toast(`${t.name} hacked! It fights for you now · press H to take control`,2.8));else if(Bt.justPressed("KeyH")&&!t)if(en)fo();else{let n=null,s=1/0;for(const o of we){if(!ia(o)||!o.alive||!o.hacked)continue;const r=o.position.distanceTo(et.position);r<s&&(s=r,n=o)}n?(en=n,n.controlled=!0,et.frozen=!0,document.body.classList.add("piloting",n.pilotKind==="drone"?"pilot-drone":"pilot-beast"),document.getElementById("pilot-banner").textContent=`${n.name.toUpperCase()} LINK · H to return`,ae.play("hack"),Se.toast(n.pilotKind==="drone"?"Drone link! WASD fly · SPACE/C up/down · J fire · H return":`${n.name} link! WASD move · SPACE jump · J attack · H return`,3)):Se.toast("Nothing hacked yet · lock on (Z) to a drone or robot animal and hold H",2.2)}Fc.classList.toggle("hidden",!(t&&!en)),t&&(rc.style.width=`${t.hackProgress*100}%`,ac.textContent=e?`HOLD H TO HACK ${t.name.toUpperCase()}`:"GET CLOSER TO HACK")}function Nx(i){const t=en,e=(Bt.down("KeyW")?1:0)-(Bt.down("KeyS")?1:0),n=(Bt.down("KeyD")?1:0)-(Bt.down("KeyA")?1:0),s=new T(n,0,-e);s.lengthSq()>0&&s.normalize().applyAxisAngle(new T(0,1,0),cn.yaw),Xo=Math.max(0,Xo-i);const o=Bt.justPressed("KeyJ")||Bt.justPressed("KeyF")||Bt.clicked,r=Bt.down("KeyJ")||Bt.down("KeyF"),a=o||r&&Xo<=0;a&&(Xo=.22);const c=new T;if(io.getWorldDirection(c),a&&t.pilotKind==="drone"){let u=null,h=Math.cos(ot.degToRad(14));for(const d of we){if(!d.alive||!d.hostile)continue;const g=d.position.clone().setY(d.position.y+d.targetHeight*.5).sub(t.position).normalize().dot(c);g>h&&(h=g,u=d)}u&&c.copy(u.position).setY(u.position.y+u.targetHeight*.5).sub(t.position)}t.pilot(i,{move:s,vertical:(Bt.down("Space")?1:0)-(Bt.down("KeyC")?1:0),jump:Bt.justPressed("Space"),fast:Bt.down("ShiftLeft")||Bt.down("ShiftRight"),fire:a,aim:c,yaw:cn.yaw+Math.PI},Nn,Wt);const l=t.position.clone().sub(et.position).setY(0);l.length()>70&&(l.setLength(70),t.position.x=et.position.x+l.x,t.position.z=et.position.z+l.z,Se.toast("Signal weak · stay within range",1)),Bt.justPressed("KeyH")&&fo()}const Nn={playerPos:et.position,playerGrounded:!0,playerFacing:0,enemies:[],particles:tn,audio:ae,time:0,hurtPlayer:Ou,fireBolt:Px,strike(i,t){i.alive&&(i.takeHit(t,Nn),ar(i))},shake(i){jn=Math.max(jn,i)}},xh={"Circuit Jungle":"robot animals roam here","Sunscorch Savanna":"home of the cyber lions","Gull Beach":"boats & jet skis at the pier","Ambergoose Caye":"stilt houses on the lagoon","Caye Honkker":"go slow","The Great Blue Hole":"don't look down",Xunangoosich:"climb the temple stairs","Caroni Swamp":"scarlet ibis country","Nylon Pool":"waist-deep in the open sea","Pigeon Point":"the famous jetty","Maracas Bay":"bake & shark on the beach","Pitch Lake":"a lake of black asphalt","Port of Honk":"steelpan on the stage","Chacachacare Light":"the lighthouse at the end of the world"};let yh="Skyfall Meadow",la=0;function zx(i){if(la-=i,la>0)return;la=.5;const t=pv(et.position.x,et.position.z);t&&t!==yh&&(yh=t,Se.toast(xh[t]?`${t} · ${xh[t]}`:t,2.6))}let Ve=null,Bu=11;function Fx(){let i=null,t=1/0;for(const e of Un){const n=Math.hypot(e.position.x-et.position.x,e.position.z-et.position.z),s=e.kind==="boat"?6.5:5;n<s&&n<t&&Math.abs(e.position.y-et.position.y)<3&&(t=n,i=e)}return i}function Mh(i){Ve=i,i.driven=!0,et.frozen=!0,Me=null,Bu=cn.distance,cn.distance=Math.max(cn.distance,i.kind==="boat"?15:12),document.body.classList.add("driving"),ae.play("hack"),Se.toast(`${i.name}! W throttle · A/D steer · SHIFT boost · SPACE hop · H hop off`,3)}function Oc(){const i=Ve;if(!i)return;Ve=null,i.driven=!1,et.frozen=!1,cn.distance=Bu,document.body.classList.remove("driving"),ae.setEngine(null);let t=null;for(let e=3;e<=9&&!t;e+=1.5)for(let n=0;n<12;n++){const s=n/12*Math.PI*2,o=i.position.x+Math.cos(s)*e,r=i.position.z+Math.sin(s)*e,a=Tn(o,r,2);if(a>.3){t=new T(o,a+.1,r);break}}if(!t){const e=new T(Math.cos(i.yaw),0,-Math.sin(i.yaw)).multiplyScalar(i.kind==="boat"?2.2:1.6);t=i.position.clone().add(e).setY(i.position.y+.6)}et.dismount(t)}function Ox(i){if(Me)return!1;const t=Fx();for(const e of Un)e!==t&&!e.hacked&&(e.hackProgress=Math.max(0,e.hackProgress-i));return t?(Fc.classList.remove("hidden"),t.hacked?(rc.style.width="100%",ac.textContent=`PRESS H TO BOARD ${t.name.toUpperCase()}`,Bt.justPressed("KeyH")&&Mh(t),!0):(ac.textContent=`HOLD H TO HACK ${t.name.toUpperCase()}`,Bt.down("KeyH")&&(t.hackProgress=Math.min(1,t.hackProgress+i/t.hackSeconds),Math.random()<i*20&&tn.emit(t.position.clone().setY(t.position.y+1.4),1,{color:3924223,speed:1.2,up:1.5,size:.1,life:.4}),t.hackProgress>=1&&(t.setHacked(),Mh(t))),rc.style.width=`${t.hackProgress*100}%`,!0)):!1}function kx(i,t){const e=Ve,n=(Bt.down("KeyW")||Bt.down("ArrowUp")?1:0)-(Bt.down("KeyS")||Bt.down("ArrowDown")?1:0),s=(Bt.down("KeyD")||Bt.down("ArrowRight")?1:0)-(Bt.down("KeyA")||Bt.down("ArrowLeft")?1:0);e.update(i,t,{throttle:n,steer:s,boost:Bt.down("ShiftLeft")||Bt.down("ShiftRight"),hop:Bt.justPressed("Space")},tn),et.ride(i,t,e.seat(),e.yaw,e.tilt,e.spec.pose==="sit"),ae.setEngine(e.kind,e.rpm),e.events.splash&&ae.play("splash"),e.events.bump&&(ae.play("bump"),jn=Math.max(jn,.25)),Bt.justPressed("KeyG")&&ae.play("horn"),Fc.classList.add("hidden"),Bt.justPressed("KeyH")&&Oc()}function Bx(i,t){(Bt.justPressed("KeyZ")||Bt.justPressed("Tab"))&&(Me=Me?null:Cx(),Me&&ae.play("lock")),Me&&(!Me.alive||Me.position.distanceTo(et.position)>26)&&(Me=null);const e=Me?Me.position.clone().setY(Me.position.y+Me.targetHeight*.5):null;et.lockTarget=e;const n=!!Ve;Ve?kx(i,t):et.update(i,t,Bt,cn.yaw);const s=et.events;if(s.jumped&&ae.play("jump"),ae.setJet(et.jetting),et.jetting&&Math.random()<i*40){const h=new T(-Math.sin(et.facing),0,-Math.cos(et.facing)).multiplyScalar(.45),d=et.position.clone().add(h).setY(et.position.y+.95);tn.emit(d,1,{color:Math.random()<.5?16753210:16770688,speed:1,up:-6,size:.12,life:.25}),Math.random()<.4&&tn.emit(d,1,{color:14212579,speed:1,up:-3,size:.2,life:.7,grow:2})}if(s.flapped&&!mh&&(mh=!0,Se.toast("Jetpack! Hold SPACE to fly · C to descend",2.4)),Bt.justPressed("KeyR")&&Se.toast(et.running?"Auto-run ON: steer with A / D or mouse, S to stop":"Auto-run OFF",1.8),s.landed&&tn.dust(et.position),s.step){const h=s.step;if(ae.play(h.surface==="wood"?"stepWood":h.surface==="sand"?"stepSand":"stepGrass"),h.hard||h.surface==="sand"){const d=new T(h.x,et.position.y+.05,h.z),f=h.surface==="sand"?15391140:h.surface==="wood"?11569756:13227688;tn.emit(d,h.hard?3:2,{color:f,speed:.7,up:.9,size:.13,life:.4,grow:1.6,gravity:2})}}s.skid&&Math.random()<i*25&&tn.emit(et.position.clone().setY(et.position.y+.05),1,{color:14209720,speed:1.2,up:1,size:.16,life:.5,grow:2}),s.splashed&&(tn.splash(et.position),ae.play("splash")),et.swimming&&Math.hypot(et.velocity.x,et.velocity.z)>2&&Math.random()<i*8&&tn.emit(et.position.clone().setY(et.position.y+.3),2,{color:16777215,speed:1.5,up:1.5,size:.12,life:.4,gravity:8});const o=new rt(et.position.x-zn.x,et.position.z-zn.y),r=ir,a=o.length()-(r-20);if(a>0){const h=o.clone().normalize().negate(),d=Math.min(1,a/20)*14;et.position.x+=h.x*d*i,et.position.z+=h.y*d*i,o.length()>r&&(o.setLength(r),et.position.x=zn.x+o.x,et.position.z=zn.y+o.y),a>12&&(et.running&&(et.running=!1),et.facing=Math.atan2(h.x,h.y),aa||(aa=!0,Se.toast("The open sea is too rough · the current carries you back to the island",2.6)))}else a<-10&&(aa=!1);Nn.playerGrounded=et.grounded||et.swimming,Nn.time=t,Nn.enemies=we,Nn.playerFacing=et.facing,zx(i),en?Nx(i):!Ve&&!n&&!Ox(i)&&Ux(i);for(const h of Un)h!==Ve&&Math.abs(h.position.x-et.position.x)<260&&Math.abs(h.position.z-et.position.z)<260&&h.update(i,t,null,tn);for(let h=0;h<Un.length;h++){const d=Un[h];for(let f=h+1;f<Un.length;f++){const g=Un[f];Math.abs(d.position.x-g.position.x)>14||Math.abs(d.position.z-g.position.z)>14||lv(d.deck,g.deck)&&(d.applyDeck(),g.applyDeck(),d.speed*=.5,g.speed*=.5,(Math.abs(d.speed)>7||Math.abs(g.speed)>7)&&(jn=Math.max(jn,.12)))}}Iu.update(i,t),Bt.justPressed("KeyN")&&ph.toggle(),ph.update(i,{x:et.position.x,z:et.position.z,yaw:et.facing,color:"#ff3b4a"},Un.map(h=>({x:h.position.x,z:h.position.z,yaw:h.yaw,color:h.hacked?"#3be0ff":"#ffb03a"}))),Dx(i,t);for(const h of we)h.update(i,Nn,(d,f)=>Tn(d,f,h.position.y+.3));Ix(),Lx(i);for(const h of we)h.alive&&gu(h.position,h.radius*.7);for(let h=0;h<we.length;h++){const d=we[h];if(d.alive)for(let f=h+1;f<we.length;f++){const g=we[f];if(!g.alive)continue;const _=g.position.clone().sub(d.position).setY(0),m=d.radius+g.radius-_.length();m>0&&(_.normalize().multiplyScalar(m*.5),d.position.sub(_),g.position.add(_))}}if(s.swung){ae.play("swing");const h=et.swordReach();for(const d of we){if(!d.alive||!d.hostile)continue;const f=h.clone().setY(0).distanceTo(d.position.clone().setY(0)),g=h.y-(d.position.y+d.targetHeight*.4);f<d.radius+1.1&&Math.abs(g)<Math.max(d.targetHeight,1.4)&&(!d.takeHit(et.position,Nn)&&d===Le&&Se.toast("Clang! Wait for it to slam…",1.2),ar(d))}}for(const h of or)h.mesh.visible&&(h.mesh.rotation.y=t*2,h.mesh.position.y=h.baseY+Math.sin(t*3)*.15,h.mesh.position.distanceTo(et.position.clone().setY(et.position.y+.8))<1.4&&(h.mesh.visible=!1,h.kind==="heart"?(pe.health=Math.min(pe.maxHealth,pe.health+2),ae.play("pickup")):(pe.maxHealth+=2,pe.health=pe.maxHealth,ae.play("fanfare"),Se.toast("Heart Container! Max hearts up",2.6),Qo())));Uu.forEach((h,d)=>{if(!pe.relics.includes(d)&&(h.mesh.rotation.y=t*1.5,h.mesh.position.y=h.baseY+Math.sin(t*2+d)*.25,Math.random()<i*10&&tn.sparkle(h.mesh.position.clone().add(new T((Math.random()-.5)*1.2,-.3,(Math.random()-.5)*1.2))),h.mesh.position.distanceTo(et.position.clone().setY(et.position.y+1))<1.6)){pe.relics.push(d),h.mesh.visible=!1,tn.poof(h.mesh.position,16765503);const f=pe.relics.length;f===so.length?(ae.play("fanfare"),pe.wardenDefeated?Se.toast("Skyfall is sealed. Hero of the Skies!",3.2):Le||Fu()):(ae.play("pickup"),Se.toast(`Relic found! ${f} / ${so.length}`)),Qo()}}),e&&Me?(Pi.visible=!0,Pi.position.copy(Me.position).setY(Me.position.y+Me.targetHeight+.9+Math.sin(t*6)*.12),Pi.rotation.y=t*3):Pi.visible=!1;const c=!!Le&&Le.awake&&Le.position.distanceTo(et.position)<32;c&&!sc&&(sc=!0,Se.toast("The Stone Warden awakens!",2.4)),Nu.classList.toggle("hidden",!c),ae.setBattle(c),ca=we.some(h=>h.engaged&&h.position.distanceTo(et.position)<30)?4:Math.max(0,ca-i),ae.setMood({danger:ca>0,flying:et.jetting||!!Ve&&Math.abs(Ve.speed)>12,swimming:et.swimming,lowHealth:pe.health<=2,piloting:!!en}),Se.setBoss(c&&Le?Le.name:null,Le?Le.hp/Le.maxHp:0),ra+=i,ra>5&&(ra=0,Qo()),jn=Math.max(0,jn-i*1.5);const u=Math.max((Le==null?void 0:Le.shake)??0,rr>0?.5:0,jn);en?cn.update(i,Bt,en.position.clone().setY(en.position.y+en.camOffset),null,u):Ve?cn.update(i,Bt,Ve.position,null,u,{facing:Ve.yaw,speed:Math.abs(Ve.speed)}):cn.update(i,Bt,et.position,e,u,{facing:et.facing,speed:Math.hypot(et.velocity.x,et.velocity.z)})}function Hu(){const i=window.innerWidth,t=window.innerHeight;Ui.setSize(i,t,!1),io.aspect=i/t,io.updateProjectionMatrix()}window.addEventListener("resize",Hu);Hu();const Gu=zc(),Vu=document.getElementById("btn-continue");Gu&&Vu.classList.remove("hidden");Vu.addEventListener("click",()=>gr(zc()??As()));document.getElementById("btn-new").addEventListener("click",()=>{Ex(),gr(As())});document.getElementById("btn-retry").addEventListener("click",()=>{const i=zc()??As();i.health=i.maxHealth,gr(i)});window.addEventListener("keydown",i=>{i.code==="Enter"&&oo==="title"&&gr(Gu??As())});et.position.set(0,Wt(0,6),6);et.object.position.copy(et.position);cn.snap(et.position);const Sh=new $_;Ui.setAnimationLoop(()=>{const i=Math.min(Sh.getDelta(),.05),t=Sh.elapsedTime;oo==="play"?Bx(i,t):(ae.setJet(!1),cn.yaw+=i*.12,cn.update(i,Bt,et.position),et.object.position.copy(et.position)),rr=Math.max(0,rr-i),Bt.justPressed("KeyM")&&ae.toggleMute(),bx(),Se.setHealth(pe.health,pe.maxHealth),Se.setRelics(pe.relics.length,so.length),Se.update(i),tn.update(i),ae.update(),fi.position.copy(et.position).addScaledVector(Cu,80),fi.target.position.copy(et.position),Pu.update(i,et.position),Du.update(t,et.position),Ui.render(De,io),Bt.endFrame()});new URLSearchParams(location.search).has("debug")&&Object.assign(window,{gooseman:{goose:et,save:()=>pe,enemies:()=>we,vehicles:Un,driving:()=>Ve}});
