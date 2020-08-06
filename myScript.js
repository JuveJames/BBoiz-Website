function openModal(imgs)
{
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("title");
    var movieDesc = document.getElementById("desc");
    var modal = document.getElementById("myModal");
 
    modal.style.display = "block";
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
    movieDesc.innerHTML = imgs.dataset.cap;

    modalImg.dataset.movid = imgs.dataset.movid;
}

function playMovie(imgs)
{
    var movieId = imgs.dataset.movid;
    url = './MovieTheater.html?movieid=' + encodeURIComponent(movieId);
    document.location.href = url;
}

function loadMovie()
{
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) 
    {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    var movieURL = document.getElementById("theater");
    movieURL.src = "https://www.youtube.com/embed/" + data.movieid;  
}

function returnBack() 
{
    window.history.back()
}

function mobileMenu() 
{
    var x = document.getElementById("myNav");
    if (x.className === "NavBar") 
    {
      x.className += " mobile";
    } 
    else 
    {
      x.className = "NavBar";
    }
  }