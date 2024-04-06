import{i as o,S as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="43059810-21766dfeafea29ca9c24ae0e2";function h(a=""){const s=new URLSearchParams({key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(a){return a.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:p})=>`
        <li class="pictureCard">
          <a href="${r}" class="lightbox-image">
            <img src="${s}" alt="${n}" class="picture-icon">
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
              <span class="comments">${i}</span>
            </div>
            <div>
              <span>Downloads:</span>
              <span class="downloads">${p}</span>
            </div>
          </div>
        </li>`).join("")}const l=document.getElementById("search-form"),u=document.getElementById("list");l.addEventListener("submit",g);function c(){u.innerHTML=""}function g(a){a.preventDefault();const{picture:s}=a.currentTarget.elements;loader.style.display="block",c(),h(s.value).then(r=>{r.hits.length===0?o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(u.innerHTML=y(r.hits),new d(".pictureCard a",{captionType:"attr",captionsData:"alt",captionDelay:250}))}).catch(r=>{console.error("Error:",r),o.error({title:"Error",message:"An error occurred while fetching images. Please try again later!"}),c()}).finally(()=>{loader.style.display="none",l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
