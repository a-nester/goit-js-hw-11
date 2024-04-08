import{i as n,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="43256839-6988dc73e83ff3bdf7562f6e8",f="https://pixabay.com/api/";function g(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`)}function h(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:m})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${t}>
          <img class="gallery-image"
          src="${o}" 
          data-source="${t}" 
          alt="${i}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${r}</p>
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
    `).join("")}const l=document.querySelector(".search-form"),y=document.querySelector(".gallery"),u=document.querySelector(".loader");l.addEventListener("submit",b);function b(s){s.preventDefault(),u.classList.toggle("isHiden");let o=l.elements[0].value.trim();if(!o)return c(),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let i=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});y.innerHTML=h(t.hits),i.refresh()}).catch(t=>console.log(t)).finally(()=>{l.elements[0].value="",setTimeout(()=>c(),1e3)})}function c(){u.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
