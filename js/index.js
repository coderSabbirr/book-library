const searchBook = () => {
    const searchFiled = document.getElementById('search_filed');
    const searchText = searchFiled.value;
    
    searchFiled.value ='';
    const url =`http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
   

  
}



const displaySearchResult = docs => {
    const searchResult = document.getElementById('show_result')
   
    searchResult.textContent='';
    // if(docs.offset == null){
    //     document.getElementById('error_message').style.display = 'block';
    // }
      const foundResult = document.getElementById('found_result')
      foundResult.innerHTML=`<h3>Result found : ${docs.length}</h3>`
    docs.forEach(book => {
        const div =document.createElement('li')
        
        div.classList.add('d-flex')
        div.innerHTML= `
       
               
                    <div class="d-flex">
                         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"  class=" "
                    </div>
                    <div  class="ms-3 details">
                        <h4><a href="#"  rel="noopener noreferrer">${book.title}</a></h4>
                        <span>by <span  class="author_name">${book.author_name ?book.author_name:"N/a"}</span></span><br>
                        <span class="publish_year">First published ${book.first_publish_year}</span><br>
                    

                    </div>
              
        
        `;
      searchResult.appendChild(div);
    });


    

}