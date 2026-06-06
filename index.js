import{a as P,S as q,i}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const B=void 0,M=void 0,d=15;async function f(t,r){const n={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:d};return(await P.get(M,{params:n})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),R=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const r=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:a,comments:b,downloads:v})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${o}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${a}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${b}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${v}</span>
          </li>
        </ul>
      </li>`).join("");p.insertAdjacentHTML("beforeend",r),R.refresh()}function $(){p.innerHTML=""}function h(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}function O(){g.classList.remove("is-hidden")}function u(){g.classList.add("is-hidden")}const w=document.querySelector(".form"),x=document.querySelector(".load-more");let c="",l=1,E=0;w.addEventListener("submit",A);x.addEventListener("click",C);async function A(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(r===""){i.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}c=r,l=1,$(),u(),h();try{const n=await f(c,l);if(E=n.totalHits,n.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n.hits),S()}catch(n){i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(n)}finally{L(),w.reset()}}async function C(){l+=1,u(),h();try{const t=await f(c,l);y(t.hits),S(),T()}catch(t){i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(t)}finally{L()}}function S(){const t=Math.ceil(E/d);if(l>=t){u(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}O()}function T(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
