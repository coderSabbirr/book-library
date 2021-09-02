const searchBook = () => {
  const searchFiled = document.getElementById('search_filed');
  const searchText = searchFiled.value;

  searchFiled.value = '';
  const url = `http://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))

console.log(data.numFound);

}



const displaySearchResult = docs => {
  const searchResult = document.getElementById('show_result')
  searchResult.textContent = '';
  // if(docs.offset == null){
  //     document.getElementById('error_message').style.display = 'block';
  // }
  const foundResult = document.getElementById('found_result')
  foundResult.innerHTML=`<h3>Result found : ${numFound}</h3>`
  docs.forEach(book => {
    const div = document.createElement('div')

    div.classList.add('col-md-4')
    div.innerHTML = `
                

            
              <div class="card h-100 mb-3 book">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i:"N/a"}-M.jpg" class="fluid w-50 h-75 mx-auto mt-2" alt="...">
                <div class="card-body">
                  <a href=""><h4 class="card-title">${book.title}</h4></a> 
                  <p class="card-text"> <span  class="author_name"><i>Author: ${book.author_name ?book.author_name:"N/a"}</i></span></p>
                  <p class="card-text"> <span  class="author_name">publisher: ${book.publisher}</span></p
                </div>
                  <div class="card-footer">
                  <small class="text-muted"><p class="card-text"><span class="publish_year">First published ${book.first_publish_year}</span></p></small>
                  </div>
              </div>
            
            
        
        `;
    searchResult.appendChild(div);
  });




}