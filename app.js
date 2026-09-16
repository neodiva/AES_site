
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function qs(k){return new URLSearchParams(location.search).get(k);}
function tags(arr){return (arr||[]).map((t,i)=>`<span class="tag ${i%4===0?'c':i%4===1?'p':i%4===2?'l':'y'}">${esc(t)}</span>`).join('');}
function nav(active){
 document.querySelector(".nav").innerHTML=`
 <a href="index.html" class="${active==='home'?'active':''}">HOME</a>
 <a href="literature.html" class="${active==='lit'?'active':''}">LITERATURE</a>
 <a href="implementation.html" class="${active==='impl'?'active':''}">IMPLEMENTATION LAB</a>
 <a href="literature.html#matrix">COMPARISON</a>
 <a href="literature.html#gap">RESEARCH GAP</a>
 <a href="literature.html#novelty">NOVELTY LAB</a>`;
}
function paperCard(p){
 return `<a class="card paperlink" href="paper.html?id=${p.id}" style="text-decoration:none;color:inherit">
 <div class="year">${p.year}</div><h3>${esc(p.title)}</h3><p class="muted">${esc(p.authors)} · ${esc(p.venue)}</p>${tags(p.tags)}
 <h4>CORE IDEA</h4><p>${esc(p.novelty)}</p><span class="sticker cyan">OPEN PAPER →</span></a>`;
}
function renderHome(){
 nav("home");
 document.getElementById("coreCards").innerHTML=PAPERS.filter(p=>CORE_IDS.includes(p.id)).map(p=>paperCard(p)).join("");
 document.getElementById("recentCards").innerHTML=PAPERS.filter(p=>RECENT_IDS.includes(p.id)).map(p=>paperCard(p)).join("");
}
function renderLit(){
 nav("lit");
 let filter="all";
 const area=document.getElementById("papers");
 function draw(){
   const q=(document.getElementById("search").value||"").toLowerCase();
   area.innerHTML=PAPERS.filter(p=>(filter==="all"||p.tags.some(t=>t.toLowerCase().includes(filter))) &&
   (!q||(p.title+" "+p.authors+" "+p.venue+" "+p.tags.join(" ")+" "+p.novelty).toLowerCase().includes(q))).map(p=>paperCard(p)).join("");
 }
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;draw();});
 document.getElementById("search").oninput=draw; draw();
 renderMatrix(); renderGaps(); renderNovelty(); renderBars();
}
function renderPaper(){
 nav("lit");
 const p=PAPERS.find(x=>x.id===qs("id"))||PAPERS[0];
 document.title=p.title+" — AES Literature Lab";
 document.getElementById("paper").innerHTML=`
 <div class="crumb"><a class="back" href="literature.html">← Back to literature</a></div>
 <div class="paperhero"><div class="year">${p.year}</div><h1>${esc(p.title)}</h1><p class="lead"><b>${esc(p.authors)}</b><br>${esc(p.venue)}</p>${tags(p.tags)}</div>
 <div class="paperbody">
 <div class="statgrid">
 <div class="stat"><b>${esc(p.year)}</b><span>Year</span></div>
 <div class="stat"><b>${p.tags.length}</b><span>Research tags</span></div>
 <div class="stat"><b>${p.doi?'DOI':'Uploaded source'}</b><span>Source route</span></div>
 </div>
 <h2>Problem addressed</h2><p>${esc(p.problem)}</p>
 <h2>Novelty</h2><p>${esc(p.novelty)}</p>
 <h2>Methodology</h2><ul>${p.methodology.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
 <h2>Reported results</h2><div class="grid">${p.results.map(x=>`<div class="note"><b>${esc(x)}</b></div>`).join("")}</div>
 <h2>Limitation</h2><div class="callout warn">${esc(p.limitation)}</div>
 <h2>How the research progresses</h2><p>${esc(p.next)}</p>
 <h2>What we can adopt</h2><div class="grid">${p.adopt.map(x=>`<div class="card"><h3>✓</h3><p>${esc(x)}</p></div>`).join("")}</div>
 <h2>What we should not simply copy</h2><div class="callout">${p.dont.map(esc).join("<br>")}</div>
 ${p.doi?`<p><a class="sticker cyan" href="${p.doi}" target="_blank">OPEN DOI / PUBLISHER ↗</a></p>`:""}
 </div>`;
}
function renderMatrix(){
 const el=document.getElementById("matrixBody"); if(!el)return;
 el.innerHTML=PAPERS.map(p=>`<tr><td><a href="paper.html?id=${p.id}">${esc(p.authors)} (${p.year})</a><br><span class="small">${esc(p.title)}</span></td>
 <td>${esc(p.problem)}</td><td>${esc(p.novelty)}</td><td>${esc(p.methodology.slice(0,3).join("; "))}</td>
 <td>${p.results.slice(0,4).map(esc).join("<br>")}</td><td>${esc(p.limitation)}</td></tr>`).join("");
}
function renderGaps(){
 const el=document.getElementById("gapGrid");if(!el)return;
 el.innerHTML=GAP_ITEMS.map((g,i)=>`<div class="card"><h3>GAP ${String.fromCharCode(65+i)} — ${esc(g[0])}</h3><p>${esc(g[1])}</p><span class="sticker ${i%3===0?'pink':i%3===1?'cyan':'lime'}">${esc(g[2])}</span></div>`).join("");
}
function renderNovelty(){
 const el=document.getElementById("noveltyGrid");if(!el)return;
 el.innerHTML=NOVELTY.map((n,i)=>`<div class="card"><h3>${String(i+1).padStart(2,"0")} / ${esc(n[0])}</h3><p>${esc(n[1])}</p><details><summary>Possible framing</summary><div>${esc(n[2])}</div></details></div>`).join("");
}
function renderBars(){
 const el=document.getElementById("bars");if(!el)return;
 const vals=[
 ["Noor — AES energy",280,"pJ"],
 ["Noor — CRC energy",140,"pJ"],
 ["Teng — S-box throughput",5790,"Mb/s"],
 ["Lin — S-box throughput",34780,"Mb/s"],
 ["Cheng — AES throughput",692.65,"Mb/s"],
 ["Ahmed — S-box throughput",7140,"Mb/s"]
 ];
 const max=Math.max(...vals.map(x=>x[1]));
 el.innerHTML=vals.map(x=>`<div class="barrow"><div class="barlabel">${x[0]}</div><div class="bartrack"><div class="bar" style="width:${Math.max(2,x[1]/max*100)}%"></div></div><div class="value">${x[1]} ${x[2]}</div></div>`).join("");
}
document.addEventListener("DOMContentLoaded",()=>{
 if(document.getElementById("coreCards"))renderHome();
 if(document.getElementById("papers"))renderLit();
 if(document.getElementById("paper"))renderPaper();
});
