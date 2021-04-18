var names= ["Manvi" , "Naveen" , "Mahi" , "Leo"];
var images  = ["manvi.jpg" , "naveen.jpg" , "mahi.jpg" , "leo.jpg"];

function change(){
   document.getElementById("IMAGES").innerHTML = images[0,1,2,3];
   console.log("images");
   document.getElementById("invincible").innerHTML = names[0,1,2,3];
   console.log("names");
}