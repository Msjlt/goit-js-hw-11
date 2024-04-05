import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="43059810-21766dfeafea29ca9c24ae0e2";function f(o=""){const r=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:a,downloads:c})=>`
        <li class="pictureCard">
          <a href="${s}" class="lightbox-image">
            <img src="${r}" alt="${n}" class="picture-icon">
          </a>
          <div class="picture-info">
            <div>
              <span>Likes:</span>
              <span class="likes">${e}</span>
            </div>
            <div>
              <span>Views:</span>
              <span class="views">${t}</span>
            </div>
            <div>
              <span>Comments:</span>
              <span class="comments">${a}</span>
            </div>
            <div>
              <span>Downloads:</span>
              <span class="downloads">${c}</span>
            </div>
          </div>
        </li>`).join("")}const i=document.getElementById("search-form"),h=document.getElementById("list");i.addEventListener("submit",y);function y(o){o.preventDefault();const{picture:r}=o.currentTarget.elements;function s(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function n(){const e=document.querySelector(".loader");e&&(e.style.display="none")}s(),f(r.value).then(e=>{e.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(h.innerHTML=m(e.hits),new u(".pictureCard a",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh())}).catch(e=>{console.error("Error:",e)}).finally(()=>{n(),i.reset()})}
//# sourceMappingURL=commonHelpers.js.map
