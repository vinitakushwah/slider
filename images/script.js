

let flag = 0;


// for change slide

 function changeslide(x){
    flag = flag + x ;
    slideshow(flag); 


 }


slideshow(flag);

function slideshow(num){

   let Slides= document.getElementsByClassName('Slides');

//    for check length of array and reset number

    if(num == Slides.length){

        flag = 0;
        num = 0;
    
       
       }

//  for prev arrow

if(num < 0 ){
   // (assign no of slide length minus 1)

    flag = Slides.length-1; 
    num = Slides.length-1;

}


   for(let y of Slides)

   {
      y.style.display = "none";
   }



// display on page load

   Slides[num].style.display = "block" ;



//    console.log(num);

}