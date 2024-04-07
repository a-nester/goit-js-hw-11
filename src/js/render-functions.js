export function createMarkup(arr) {
  console.log(arr);
  return arr
    .map(({ previewURL, largeImageURL, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item" >
        <a class="gallery-link" href=${largeImageURL}>
          <img class="gallery-image"
          src="${previewURL}" 
          data-source="${largeImageURL}" 
          alt="" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${likes}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${views}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${comments}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${downloads}</p>
            </div>
        </div>
      </li>
    `;
    })
    .join('');
}
