(()=>{"use strict";const t=1/6;function a(t,a,e){let i=e.escapeRadius*e.escapeRadius;for(var d=0,s=0,h=0,n=0,o=0;h+o<i&&d<e.limit;)n=2*s*n+a,h=(s=h-o+t)*s,o=n*n,++d;return[d,[s,n]]}Math.log(2),onmessage=e=>{!function(e,i,d){let s=e.data;var h,n,o,l=0,r=0,g=0,c=[0,0,0],w=0,f=0,p=0,u=0,m=0;for(f=0;f<e.height;++f)for(g=i.y+i.height*f/e.height,w=0;w<e.width;++w)r=i.x+i.width*w/e.width,[p,[u,m]]=a(r,g,d),h=p,n=d.limit,o=void 0,c=h===n?[0,0,0]:(o=h/n)<t?[255,o/t*255,0]:o<2*t?[255*(2-o/t),255,0]:o<.5?[0,255,(o-2*t)/t*255]:o<4*t?[0,255*(2-(o-2*t)/t),255]:o<5*t?[(o-4*t)/t*255,0,255]:[255,0,255*(2-(o-4*t)/t)],s[l++]=c[0],s[l++]=c[1],s[l++]=c[2],s[l++]=255}(new ImageData(new Uint8ClampedArray(e.data.pixels),e.data.tile.width,e.data.tile.height),e.data.view,e.data.config),postMessage(e.data,[e.data.pixels])}})();