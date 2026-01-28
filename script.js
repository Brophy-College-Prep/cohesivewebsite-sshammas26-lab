function changeTextRaul1() {
   const msg = document.getElementById("message");
   const likes = ["swiss cheese", "gouda cheese", "all cheese (except Kraft)", "cheddar cheese", "feta cheese", "munster cheese"];
   msg.textContent = "Raul likes " + likes[Math.floor(Math.random() * likes.length)];
}

function changeTextRaul2() {
   const msg = document.getElementById("message2");
   const dislikes = ["losing his shoes", "Kraft Cheese", "staying in one place", "running out of cheese (unless its Kraft)"];
   msg.textContent = "Raul dislikes " + dislikes[Math.floor(Math.random() * dislikes.length)];
}


function changeTextBigCheese1() {
   const msg = document.getElementById("message");
   const likes = ["MR. BOOMBASTIC", "Tim Cheese", "https://www.youtube.com/watch?v=6W5pq4bIzIw", "swiss cheese", "rapping", "dropping sick beats"];
   msg.textContent = "Biggie Cheese likes " + likes[Math.floor(Math.random() * likes.length)];
}

function changeTextBigCheese2() {
   const msg = document.getElementById("message2");
   const dislikes = ["his Opps", "John Pork", "Marvin Beak", "running out of cheese"];
   msg.textContent = "Biggie Cheese dislikes " + dislikes[Math.floor(Math.random() * dislikes.length)];
}


function changeTextMoe1() {
   const msg = document.getElementById("message");
   const likes = ["drilling", "mining", "being British", "tunneling", "reading (braille)", "listening to podcasts about mining", "tea","gouda cheese", "cheddar cheese", "swiss cheese", "manchego cheese", "Grom", "Ash"];
   msg.textContent = "Moe likes " + likes[Math.floor(Math.random() * likes.length)];
}

function changeTextMoe2() {
   const msg = document.getElementById("message2");
   const dislikes = ["being told to see something", "getting nerfed", "staying in one place", "getting nerfed 14 times in a month", "being D tier for 3 seasons in a row", "fighting Edgar", "fighting Kit", "fighting any assasins", "fighting Shelly"];
   msg.textContent = "Moe dislikes " + dislikes[Math.floor(Math.random() * dislikes.length)];
}
