let getbook = () => {
    let search =  document.getElementById('search-input');

    let searchText = search.value;

    search.value="";
    
    if (searchText==''){
        let error = document.getElementById('error');
        error.innerHTML="Please Type Book Name";
    }
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => bookData(data.items))
}

let bookData =(items) =>{
    let container = document.querySelector('.container');
    container.innerHTML="";
  items.forEach (item => {
  
    let div = document.createElement('div');
    div.innerHTML=`
  <div id="book-loding">
    <img src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="Book Image"/>
    <a href="${item.volumeInfo.infoLink}" target="_blank"   class="booklink">
        <h3 class="book_name">
            Book Name: ${item.volumeInfo.title}
        </h3>
     </a>
    <h5 class="author mt-5">
         Author: ${item.volumeInfo.authors}
    </h5>
     <h5 class="mt-3">
         Publisher: ${item.volumeInfo.publisher}
     </h5>
    <p class="mt-5">
         ${item.volumeInfo.description.slice(0,200)}
    </p>
    <p>Page: ${item.volumeInfo.pageCount}</p>
  </div>`;

  container.appendChild(div)

  })

}


