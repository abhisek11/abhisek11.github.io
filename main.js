(()=>{const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!R)document.documentElement.classList.add('js');
// typing
const t=document.getElementById('typed');if(t&&!R){const w=t.dataset.words.split('|');let i=0,j=w[0].length,d=-1;
(function tick(){const s=w[i];j+=d;t.textContent=s.slice(0,j);let ms=d>0?90:45;
if(d>0&&j===s.length){d=-1;ms=1800}else if(d<0&&j===0){d=1;i=(i+1)%w.length;ms=300}setTimeout(tick,ms)})();}
// reveal
const els=document.querySelectorAll('.reveal');
if(!R&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add('in'));
// count-up
const cs=document.querySelectorAll('.count');
const run=el=>{const to=+el.dataset.to,t0=performance.now();(function f(n){const p=Math.min((n-t0)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)};
if(!R){const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io2.unobserve(e.target)}}));cs.forEach(c=>{c.textContent='0';io2.observe(c)})}
// particles
const c=document.getElementById('bg');if(!c||R)return;const x=c.getContext('2d');let W,H,P=[];
const size=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;const n=Math.min(70,Math.floor(W*H/16000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
size();addEventListener('resize',size);
(function draw(){x.clearRect(0,0,W,H);for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.fillStyle='rgba(56,189,248,.7)';x.beginPath();x.arc(p.x,p.y,1.6,0,6.3);x.fill()}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){x.strokeStyle=`rgba(167,139,250,${.25*(1-d/120)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
if(!document.hidden)requestAnimationFrame(draw);else setTimeout(()=>requestAnimationFrame(draw),500)})();
})();
