const foundResult = document.getElementById('found_result');
const errorMessage = document.getElementById('error_message');

const searchBook = () => {
  const searchFiled = document.getElementById('search_filed');
  // Display Spinner
  document.getElementById('spiner').style.display='block';
  const searchText = searchFiled.value;
  // clear data
  searchFiled.value = '';
  // Clear found result Details
  foundResult.innerHTML='';
  // Clear error Message
  errorMessage.innerHTML='';
 
   //load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))

}



const displaySearchResult = books => {
  const searchResult = document.getElementById('show_result')
  // Clear book Details
  searchResult.textContent = '';

 // error handal
  if(books.numFound === 0){
    // Hide Spinner
    document.getElementById('spiner').style.display='none';
    errorMessage.innerHTML=`<h3 class="p-4">No result found!</h3>`
  }
  
 else {
   // Hide Spinner
  document.getElementById('spiner').style.display='none';
  // Display Found Result
  foundResult.innerHTML=`<h3 class="found_result">Total result found : ${books.numFound}</h3>`
  
  // Display Search Result
  books.docs.forEach(book => {
    const div = document.createElement('div')

    div.classList.add('col-md-4')
    div.innerHTML = `  
              <div class="card h-100 mb-3 book">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i }-M.jpg" class="fluid w-50 h-75 mx-auto mt-2" alt="...">
                <div class="card-body">
                  <a href=""><h4 class="card-title">${book.title}</h4></a> 
                  <p class="card-text"> <span  class="author_name"><i>Author: ${book.author_name ?book.author_name:"N/a"}</i></span></p>
                  <p class="card-text"> <span  class="">Publisher: ${book.publisher}</span></p
                </div>
                  <div class="card-footer">
                  <small class="text-muted"><p class="card-text"><span class="publish_year">First published ${book.first_publish_year}</span></p></small>
                  </div>
              </div>
            
            
        
        `;
    searchResult.appendChild(div);
  });

 }



}