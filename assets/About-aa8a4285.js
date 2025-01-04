import{j as e,m as n,u as f}from"./index-d2bc60e2.js";import{r as l,M as g,c as j}from"./vendor-565f2277.js";import{P as N}from"./PageTransition-b5bf6fbc.js";import{u as h,_ as w,C as z,S as _}from"./shapes-c91c4e71.js";function k(r){return function(t){r.forEach(function(i){typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var S=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class C extends g{constructor(t={}){super(t),this.setValues(t),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(t){t.uniforms.time=this._time,t.uniforms.radius=this._radius,t.uniforms.distort=this._distort,t.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${S}
      ${t.vertexShader}
    `,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(t){this._time.value=t}get distort(){return this._distort.value}set distort(t){this._distort.value=t}get radius(){return this._radius.value}set radius(t){this._radius.value=t}}const M=l.forwardRef(({speed:r=1,...t},i)=>{const[a]=l.useState(()=>new C);return h(s=>a&&(a.time=s.clock.getElapsedTime()*r)),l.createElement("primitive",w({object:a,ref:i,attach:"material"},t))}),F=l.forwardRef(({children:r,enabled:t=!0,speed:i=1,rotationIntensity:a=1,floatIntensity:s=1,floatingRange:o=[-.1,.1],...c},u)=>{const d=l.useRef(null),y=l.useRef(Math.random()*1e4);return h(b=>{var m,p;if(!t||i===0)return;const x=y.current+b.clock.getElapsedTime();d.current.rotation.x=Math.cos(x/4*i)/8*a,d.current.rotation.y=Math.sin(x/4*i)/8*a,d.current.rotation.z=Math.sin(x/4*i)/20*a;let v=Math.sin(x/4*i)/10;v=j.mapLinear(v,-.1,.1,(m=o==null?void 0:o[0])!==null&&m!==void 0?m:-.1,(p=o==null?void 0:o[1])!==null&&p!==void 0?p:.1),d.current.position.y=v*s,d.current.updateMatrix()}),l.createElement("group",c,l.createElement("group",{ref:k([d,u]),matrixAutoUpdate:!1},r))}),E=({color:r})=>e.jsx(F,{speed:2,rotationIntensity:.5,floatIntensity:.5,children:e.jsx(_,{args:[1,32,32],children:e.jsx(M,{color:r,speed:2,distort:.4,radius:1})})}),B=({title:r,description:t,icon:i,stats:a,color:s,gradient:o})=>e.jsxs(n.div,{whileHover:{y:-5,scale:1.02},className:"relative group",children:[e.jsx("div",{className:`absolute -inset-0.5 ${o} opacity-50 blur-lg group-hover:opacity-75 transition duration-300 rounded-2xl`}),e.jsxs("div",{className:"relative bg-[#0B1120]/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/50",children:[e.jsxs("div",{className:"h-28 mb-4 relative flex items-center justify-center",children:[e.jsxs(z,{camera:{position:[0,0,5],fov:45},children:[e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,10,10],intensity:1}),e.jsx(E,{color:s})]}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-4xl flex items-center justify-center",children:i})})]}),e.jsx("h3",{className:`text-2xl font-bold mb-3 bg-gradient-to-r ${o} bg-clip-text text-transparent`,children:r}),e.jsx("p",{className:"text-gray-400 mb-6",children:t}),a&&e.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.map((c,u)=>e.jsxs("div",{className:"text-center p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm",children:[e.jsx("div",{className:`text-2xl font-bold bg-gradient-to-r ${o} bg-clip-text text-transparent`,children:c.value}),e.jsx("div",{className:"text-sm text-gray-400",children:c.label})]},u))}),e.jsx("div",{className:"absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"})]})]}),I=()=>{const r=f(),t=[{title:"Who I Am",description:"A passionate full-stack developer with a keen eye for design and a drive for creating exceptional digital experiences.",icon:"👨‍💻",color:"#60A5FA",gradient:"from-blue-500 to-cyan-500",stats:[{value:"Expert",label:"Developer"},{value:"Full Stack",label:"Solutions"}]},{title:"My Approach",description:"I believe in clean code, user-centric design, and delivering solutions that not only meet but exceed expectations.",icon:"🎯",color:"#C084FC",gradient:"from-purple-500 to-pink-500",stats:[{value:"Quality",label:"Focused"},{value:"Reliable",label:"Support"}]},{title:"Services",description:"Specializing in modern web development, mobile apps, and custom software solutions tailored to your needs.",icon:"⚡",color:"#34D399",gradient:"from-emerald-500 to-teal-500",stats:[{value:"Custom",label:"Solutions"},{value:"Modern",label:"Tech Stack"}]},{title:"Collaboration",description:"Working closely with clients to understand their vision and transform it into reality through innovative solutions.",icon:"🤝",color:"#F472B6",gradient:"from-pink-500 to-rose-500",stats:[{value:"Client",label:"Focused"},{value:"Global",label:"Reach"}]}],i=[{name:"Frontend",tech:["React","Next.js","Tailwind CSS"]},{name:"Backend",tech:["Node.js","Express","MongoDB"]},{name:"Mobile",tech:["React Native","Flutter"]}];return e.jsx(N,{children:e.jsxs("div",{className:"min-h-screen bg-[#0B1120] bg-gradient-to-br from-[#0B1120] via-blue-900/10 to-[#0B1120] relative",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30"}),e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[e.jsxs("div",{className:"text-center mb-20",children:[e.jsx(n.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-blue-500/50 p-1",children:e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center",children:e.jsx("span",{className:"text-4xl",children:"👨‍💻"})})}),e.jsx(n.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6",children:"Hi, I'm Satheesh"}),e.jsx(n.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl text-gray-400 max-w-2xl mx-auto",children:"A freelance full-stack developer passionate about crafting beautiful, functional websites and applications that help businesses grow."})]}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((a,s)=>e.jsx(B,{...a},s))}),e.jsxs(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"mt-20",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-8 text-center",children:"Technical Expertise"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map((a,s)=>e.jsxs("div",{className:"p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:a.name}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.tech.map((o,c)=>e.jsx("span",{className:"px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300",children:o},c))})]},s))})]}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"mt-20 text-center",children:e.jsxs("div",{className:"max-w-2xl mx-auto bg-gradient-to-br from-[#1a2234] to-[#1d2639] p-8 rounded-2xl border border-blue-500/20",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Ready to Start Your Project?"}),e.jsx("p",{className:"text-gray-400 mb-8",children:"Let's work together to bring your ideas to life."}),e.jsxs("button",{onClick:()=>r("/contact"),className:"group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105",children:[e.jsx("span",{className:"relative z-10",children:"Get in Touch"}),e.jsx("svg",{className:"w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]})})]})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-20"})]})})};export{I as default};
