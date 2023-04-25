var timer;

let flag = 1;

// Next/previous arrow controls

function changeslide(n) {

    // clearInterval(timer);


    slideshow((flag = flag + n));
    
    // timer = setInterval(slideshow, 4000)

    console.log(flag);

}



// function for slider show

function slideshow(n) {


    let i;

    var slides = document.getElementsByClassName("Slides");

    if (n > slides.length) {

        flag = 1;

    }

    if (n < 1) {

        flag = slides.length;

    }

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    slides[flag - 1].style.display = "block";





    //Automatic Slide Function

    flag++;

    if (flag > slides.length) {

        flag = 1;

        // console.log("Slider clicked")

    }

}


timer = setInterval(slideshow, 2000)



slideshow(flag);































