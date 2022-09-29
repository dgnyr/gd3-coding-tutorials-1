const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();


//MY TRYOUTS
// document.getElementsByClassName('list__item__header').addEventListener("mouseenter", () =>  {
//   document.getElementsByClassName('list__item__header').style.color = "red";
// });

// document.getElementsByClassName('list__item__header').addEventListener("mouseleave", () =>  {
//   document.getElementsByClassName('list__item__header').style.color = "black";
// });

// document.querySelector('h2').addEventListener("mouseenter", () =>  {
//     document.querySelector('h2').style.color = "red";
//     console.log("now I am hovering");
// });

// document.querySelector('h2').addEventListener("mouseleave", () =>  {
//   document.querySelector('h2').style.color = "black";
//   console.log("now I am not hovering");
// });



//PASCAL TRYOUTS
// SELECT ALL HEADERS

// const headers = document.querySelectorAll( '.list__item__header' );
// const bodies = document.querySelectorAll( '.list__item__body' );


// headers.forEach( header => {


//   // MAKE EVERY CLICK ON THE HEADER TOGGLE IT'S CONTENT

//   header.addEventListener( 'click', ( ) => {
//     const body = header.nextElementSibling;



//     // SHOW BODY IF INVISIBLE OR HIDE IT WHEN VISIBLE

//     if ( body.classList.contains( 'visible' ) ) {
//       body.classList.remove( 'visible' );

//     } else {
//       body.classList.add( 'visible' );

//     }



//     // CLOSE ALL OTHER BODY TEXTS

//     bodies.forEach( otherbody => {
//       if ( otherbody != body ) {
//         otherbody.classList.remove( 'visible' );

//       }

//     } );

//   } );




//   const artistInfo = header.querySelector( '.list__item__artist' );
//   const artistInfoText = artistInfo.innerText;


//   // let year = artistInfoText.split( ' ' ).pop( ).substr( 0, 4 );



//   // SPLIT THE ARTISTINFO INTO BITS DIVIDED BY THE BLANK SPACE (' ')
//   let year = artistInfoText.split( ' ' );



//   // SELCT THE LAST ELEMENT OF THE LIST
//   year = year.pop( );



//   // TAKE ONLY THE FIRST 4 CHARACTERS OF THE YEARSTRING
//   year = year.substr( 0, 4 );



//   artistInfo.innerText = year

// } );




/* CORRECTION */

const clickEventOnListItemHeader = () => { 
  document.querySelectorAll(".list__item__header").forEach((item) => {
    const body = item.nextElementSibling;
    item.addEventListener("click", () => {
      if (body.classList.contains("show")) {
        hideAllListItemBody();
      } else {
        hideAllListItemBody();
        body.classList.add("show");
      }
    });
  });
};

const hideAllListItemBody = () => {
  document.querySelectorAll(".list__item__body").forEach((item) => {
    item.classList.remove("show");
  });
};

const replaceTextByDateOfBirth = () => {
  document.querySelectorAll(".list__item__artist").forEach((item) => {
    const text = item.innerHTML;
    const dateOfBirth = text.slice(-5, -1);
    item.innerHTML = dateOfBirth;
  });
};

clickEventOnListItemHeader();
replaceTextByDateOfBirth();






