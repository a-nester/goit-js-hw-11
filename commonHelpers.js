import{i as n,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="43256839-6988dc73e83ff3bdf7562f6e8",f="https://pixabay.com/api/";function g(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`)}function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:m})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${r}>
          <img class="gallery-image"
          src="${o}" 
          data-source="${r}" 
          alt="${i}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${t}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${a}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${m}</p>
            </div>
        </div>
      </li>
    `).join("")}const l=document.querySelector(".search-form"),y=document.querySelector(".gallery"),u=document.querySelector(".loader");l.addEventListener("submit",b);function b(s){s.preventDefault(),u.classList.toggle("isHiden");let o=l.elements[0].value.trim();if(!o)return c(),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let i=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});y.innerHTML=h(r.hits),i.refresh()}).catch(r=>n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{l.elements[0].value="",c()})}function c(){u.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
