import{j as t,m as y,L as F}from"./index-d2bc60e2.js";import{V as x,B as C,r as u,S as T}from"./vendor-565f2277.js";import{_ as W,u as E,T as D,C as G}from"./shapes-c91c4e71.js";function H(o,n=Math.PI/3){const l=Math.cos(n),s=(1+1e-10)*100,e=[new x,new x,new x],r=new x,p=new x,A=new x,m=new x;function S(i){const w=~~(i.x*s),c=~~(i.y*s),N=~~(i.z*s);return`${w},${c},${N}`}const v=o.index?o.toNonIndexed():o,a=v.attributes.position,h={};for(let i=0,w=a.count/3;i<w;i++){const c=3*i,N=e[0].fromBufferAttribute(a,c+0),M=e[1].fromBufferAttribute(a,c+1),L=e[2].fromBufferAttribute(a,c+2);r.subVectors(L,M),p.subVectors(N,M);const f=new x().crossVectors(r,p).normalize();for(let k=0;k<3;k++){const R=e[k],g=S(R);g in h||(h[g]=[]),h[g].push(f)}}const B=new Float32Array(a.count*3),b=new C(B,3,!1);for(let i=0,w=a.count/3;i<w;i++){const c=3*i,N=e[0].fromBufferAttribute(a,c+0),M=e[1].fromBufferAttribute(a,c+1),L=e[2].fromBufferAttribute(a,c+2);r.subVectors(L,M),p.subVectors(N,M),A.crossVectors(r,p).normalize();for(let f=0;f<3;f++){const k=e[f],R=S(k),g=h[R];m.set(0,0,0);for(let z=0,P=g.length;z<P;z++){const I=g[z];A.dot(I)>l&&m.add(I)}m.normalize(),b.setXYZ(c+f,m.x,m.y,m.z)}}return v.setAttribute("normal",b),v}const d=1e-5;function $(o,n,l){const s=new T,e=l-d;return s.absarc(d,d,d,-Math.PI/2,-Math.PI,!0),s.absarc(d,n-e*2,d,Math.PI,Math.PI/2,!0),s.absarc(o-e*2,n-e*2,d,Math.PI/2,0,!0),s.absarc(o-e*2,d,d,0,-Math.PI/2,!0),s}const O=u.forwardRef(function({args:[n=1,l=1,s=1]=[],radius:e=.05,steps:r=1,smoothness:p=4,bevelSegments:A=4,creaseAngle:m=.4,children:S,...v},a){const h=u.useMemo(()=>$(n,l,e),[n,l,e]),B=u.useMemo(()=>({depth:s-e*2,bevelEnabled:!0,bevelSegments:A*2,steps:r,bevelSize:e-d,bevelThickness:e,curveSegments:p}),[s,e,p]),b=u.useRef(null);return u.useLayoutEffect(()=>{b.current&&(b.current.center(),H(b.current,m))},[h,B]),u.createElement("mesh",W({ref:a},v),u.createElement("extrudeGeometry",{ref:b,args:[h,B]}),S)}),j=({position:o,rotation:n,scale:l})=>{const s=u.useRef();return E(({clock:e})=>{const r=e.getElapsedTime();s.current.rotation.x=n[0]+Math.sin(r*.2)*.1,s.current.rotation.y=n[1]+r*.1,s.current.position.y=o[1]+Math.sin(r*.3)*.2}),t.jsx(O,{ref:s,args:[1,3,.2],radius:.1,smoothness:4,position:o,scale:l,children:t.jsx("meshPhongMaterial",{color:"#000000",opacity:.8,transparent:!0})})},V=({position:o,rotation:n,scale:l})=>{const s=u.useRef();return E(({clock:e})=>{const r=e.getElapsedTime();s.current.rotation.x=n[0]+Math.sin(r*.3)*.1,s.current.rotation.y=n[1]+r*.15,s.current.position.y=o[1]+Math.cos(r*.4)*.2}),t.jsx(D,{ref:s,args:[1,.3,16,32],position:o,scale:l,children:t.jsx("meshPhongMaterial",{color:"#000000",opacity:.8,transparent:!0})})},_=()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{position:[-12,4,-8],rotation:[.5,1,0],scale:1.5}),t.jsx(j,{position:[-15,-3,-10],rotation:[-.3,.5,.2],scale:1.2}),t.jsx(j,{position:[-8,0,-6],rotation:[.2,-.5,.1],scale:1}),t.jsx(j,{position:[14,2,-9],rotation:[-.4,-.8,.1],scale:1.3}),t.jsx(j,{position:[10,-4,-7],rotation:[.3,.6,-.2],scale:1.1}),t.jsx(j,{position:[16,-1,-11],rotation:[-.2,.4,.3],scale:1.4}),t.jsx(V,{position:[-10,6,-8],rotation:[.5,0,.2],scale:1.2}),t.jsx(V,{position:[12,5,-9],rotation:[-.3,.2,-.1],scale:1}),t.jsx(V,{position:[-6,-5,-7],rotation:[.2,-.3,.1],scale:.8}),t.jsx(V,{position:[8,-2,-6],rotation:[-.4,.1,.2],scale:1.1}),t.jsx("ambientLight",{intensity:.4}),t.jsx("pointLight",{position:[10,10,10],intensity:.6}),t.jsx("pointLight",{position:[-10,-10,-10],intensity:.4}),t.jsx("fog",{attach:"fog",args:["#0a192f",8,20]})]}),J=()=>t.jsxs(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"min-h-screen bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F]",children:[t.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[t.jsx("div",{className:"absolute inset-0 -z-10",children:t.jsx(G,{camera:{position:[0,0,20],fov:50,near:.1,far:40},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:t.jsx(u.Suspense,{fallback:null,children:t.jsx(_,{})})})}),t.jsx("div",{className:"absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-screen",children:t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl transform rotate-12"})}),t.jsx("div",{className:"absolute inset-0 opacity-[0.015]",style:{backgroundImage:"linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",backgroundSize:"4rem 4rem"}})]}),t.jsx("div",{className:"relative h-screen flex items-center justify-center text-center px-4",children:t.jsxs("div",{className:"max-w-4xl p-8 rounded-2xl bg-[#112240]/30 backdrop-blur-sm border border-blue-500/10",children:[t.jsx(y.h1,{className:"text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Transforming Ideas into Digital Reality"}),t.jsx(y.p,{className:"text-xl md:text-2xl mb-8 text-gray-300",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"We create cutting-edge software solutions that drive business growth"}),t.jsx(y.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:t.jsx(F,{to:"/contact",className:"inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",children:"Get Started"})})]})}),t.jsxs("div",{className:"relative py-12 px-4",children:[t.jsx(y.h2,{className:"text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Our Services"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",children:X.map((o,n)=>t.jsxs(y.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:n*.1},className:"p-6 rounded-xl bg-[#112240]/50 hover:bg-[#112240]/70 transition-all duration-300 backdrop-blur-sm border border-blue-500/10",children:[t.jsx("div",{className:"text-3xl mb-4 text-blue-400",children:o.icon}),t.jsx("h3",{className:"text-xl font-semibold mb-3 text-white",children:o.title}),t.jsx("p",{className:"text-gray-300",children:o.description})]},n))})]})]}),X=[{title:"Web Development",description:"Modern, responsive websites and web applications built with the latest technologies.",icon:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})},{title:"Mobile Apps",description:"Native and cross-platform mobile applications for iOS and Android.",icon:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})},{title:"Full Stack Solutions",description:"End-to-end development services from database design to user interface.",icon:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})})}];export{J as default};
