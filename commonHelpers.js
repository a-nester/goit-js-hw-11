(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l="43256839-6988dc73e83ff3bdf7562f6e8",a="https://pixabay.com/api/";function u(s){const r=new URLSearchParams({key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${a}?${r}`)}function d(s){return console.log(s),s.map(({previewURL:r,largeImageURL:o,likes:c,views:e,comments:t,downloads:i})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${o}>
          <img class="gallery-image"
          src="${r}" 
          data-source="${o}" 
          alt="" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${c}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${t}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${i}</p>
            </div>
        </div>
      </li>
    `).join("")}const n=document.querySelector(".search-form"),f=document.querySelector(".gallery");n.addEventListener("submit",p);function p(s){s.preventDefault();const r=n.elements[0].value.trim();if(!r)return console.log("iziToast.Error");u(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>f.innerHTML=d(o.hits)).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
