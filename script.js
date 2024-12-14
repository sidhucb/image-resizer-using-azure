let gpic = document.getElementById("gpic");
let display_pic = document.getElementById("imageUpload");

display_pic.onchange = function(){
    gpic.src = URL.createObjectURL(display_pic.files[0]);
}