var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const id = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText
    console.log(id)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});

function check(){
  let book = document.getElementById('book').value
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`) //How?
    .then(res => res.json())
    .then((data) => {
      console.log(data.items[0]);
      document.getElementById('author').value = data.items[0].volumeInfo.authors[0];
      if (document.getElementById('author').value != ''){
        document.getElementById('check').innerHTML= 'Book info loaded';
      }
      document.getElementById('link').value = data.items[0].volumeInfo.previewLink;
      document.getElementById('pic').value = data.items[0].volumeInfo.imageLinks.smallThumbnail;

      })
}
