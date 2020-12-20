// Function that opens the modal containing movie info
function openModal(imgs)
{
    var modalImg = document.getElementById("modalImg"); // Stores the thumbnail id
    var captionText = document.getElementById("title"); // Stores the movie title
    var movieDesc = document.getElementById("desc");    // Store the movie description
    var modal = document.getElementById("myModal");     // Store the modal id
 
    // Set the modals attributes to those of the selected movie
    modal.style.display = "block";
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
    movieDesc.innerHTML = imgs.dataset.cap;

    modalImg.dataset.movid = imgs.dataset.movid;
}

// Function that gets the movie id and creates a unique link using it
function playMovie(imgs)
{
    
    var movieId = imgs.dataset.movid;                                       // Get the movie id from the selected movie thumbnail
    url = './MovieTheater.html?movieid=' + encodeURIComponent(movieId);     // Create a url using the selected movie id
    document.location.href = url;                                           // Go to the new url
}

// Function that loads the correct movie by parsing the unique url
function loadMovie()
{
    // Parse the url for the movie id
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) 
    {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    // Set the video player to play the video containing the movie id
    var movieURL = document.getElementById("theater");
    movieURL.src = "https://www.youtube.com/embed/" + data.movieid;  
}

// Function that goes back a page
function returnBack() 
{
    window.history.back()
}

// Function that changes the navigation menu to the mobile version or vice versa
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