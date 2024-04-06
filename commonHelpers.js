import{i as a}from"./assets/vendor-bee2f3af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",f="43059810-21766dfeafea29ca9c24ae0e2";function m(n=""){const s=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(n){return n.map(({webformatURL:s,largeImageURL:t,tags:o,likes:e,views:r,comments:i,downloads:d})=>`
        <li class="pictureCard">
          <a href="${t}" class="lightbox-image">
            <img src="${s}" alt="${o}" class="picture-icon">
          </a>
          <div class="picture-info">
            <div>
              <span>Likes:</span>
              <span class="likes">${e}</span>
            </div>
            <div>
              <span>Views:</span>
              <span class="views">${r}</span>
            </div>
            <div>
              <span>Comments:</span>
              <span class="comments">${i}</span>
            </div>
            <div>
              <span>Downloads:</span>
              <span class="downloads">${d}</span>
            </div>
          </div>
        </li>`).join("")}const l=document.getElementById("search-form"),u=document.getElementById("list");l.addEventListener("submit",y);function c(){u.innerHTML=""}function y(n){n.preventDefault();const{picture:s}=n.currentTarget.elements;loader.style.display="block",c(),m(s.value).then(t=>{t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):u.innerHTML=h(t.hits)}).catch(t=>{console.error("Error:",t),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later!"}),c()}).finally(()=>{loader.style.display="none",l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
