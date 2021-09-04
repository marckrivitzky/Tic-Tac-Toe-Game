let img1 = document.getElementById("square1");
let img2 = document.getElementById("square2");
let img3 = document.getElementById("square3");
let img4 = document.getElementById("square4");
let img5 = document.getElementById("square5");
let img6 = document.getElementById("square6");
let img7 = document.getElementById("square7");
let img8 = document.getElementById("square8");
let img9 = document.getElementById("square9");
let count = 0;
let countcount = 0;
let boxes = document.querySelector(".row")
let greyX = document.getElementById('grey1')
let greyO = document.getElementById('grey2')
let button = document.getElementById('button')
let winner = document.getElementById('winner')

// for every click on the container of boxes, count is incremented in order to establish if X or O appears upon click
boxes.addEventListener('click', () => {
count++;
console.log(count)
})

// for every click on the container of boxes, countcount is incremented in order to visually show whos turn it is
boxes.addEventListener('click', () => {
countcount++;
	if (countcount === 0 || countcount % 2 === 0){
		greyX.src = "https://play-lh.googleusercontent.com/H1KtjC0f8wSLX0kSOKWZsqOttV_XzzuGZaaa1a7QYigQw6L0yrlK1fY-taePHyb_iQ";
		greyO.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png";
	}

	else if(countcount % 2 !== 0){
		greyX.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png";
		greyO.src = "https://play-lh.googleusercontent.com/H1KtjC0f8wSLX0kSOKWZsqOttV_XzzuGZaaa1a7QYigQw6L0yrlK1fY-taePHyb_iQ";
	}
	whoWon();
})
//____________________________________________________________________________________________________________________________________________
// change box image upon click depending whos turn it is

img1.addEventListener("click", () => {
  	if (img1.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img1.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
		
	}
	
 	else if (img1.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img1.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img2.addEventListener("click", () => {
  	if (img2.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img2.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img2.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img2.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img3.addEventListener("click", () => {
  	if (img3.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img3.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img3.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img3.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img4.addEventListener("click", () => {
  	if (img4.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img4.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img4.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img4.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img5.addEventListener("click", () => {
  	if (img5.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img5.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img5.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img5.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img6.addEventListener("click", () => {
  	if (img6.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img6.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img6.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img6.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img7.addEventListener("click", () => {
  	if (img7.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img7.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img7.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img7.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img8.addEventListener("click", () => {
  	if (img8.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img8.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img8.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img8.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});

img9.addEventListener("click", () => {
  	if (img9.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count === 0 || count % 2 === 0){
		img9.src = "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
	}
	
 	else if (img9.src == "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" && count % 2 !== 0){
		img9.src = "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png";
	}
});
//_____________________________________________________________________________________________________________________________


function whoWon(){
	if (img1.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img2.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img3.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img1.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img4.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img7.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img1.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img5.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img9.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img2.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img5.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img8.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img3.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img6.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img9.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img3.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img5.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img7.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img4.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img5.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img6.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" ||
		img7.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img8.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png" && img9.src === "https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png"){

		winner.innerHTML = "Player X wins!"
		winnerXCount += 1;
	}
	else if (img1.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img2.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img3.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img1.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img4.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img7.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img1.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img5.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img9.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img2.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img5.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img8.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img3.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img6.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img9.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img3.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img5.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img7.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img4.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img5.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img6.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" ||
		img7.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img8.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png" && img9.src === "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png"){		
	
		winner.innerHTML = "Player O wins!"
        winnerOCount += 1; 	
	}
	else if(count === 9){
		winner.innerHTML = "It is a draw!"
	}
}	

//reset game back to beginning

button.addEventListener('click', () => { 
	img1.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img2.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img3.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img4.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img5.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img6.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img7.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img8.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	img9.src = "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1";
	greyX.src = "https://play-lh.googleusercontent.com/H1KtjC0f8wSLX0kSOKWZsqOttV_XzzuGZaaa1a7QYigQw6L0yrlK1fY-taePHyb_iQ";
	greyO.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png";
	count = 0;
	countcount = 0;
	winner.innerHTML = "";
});
