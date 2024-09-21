function showLoader(){
    document.getElementById("loader").style.display = "block";
}
function hideLoader(){
    document.getElementById("loader").style.display = "none";
}

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    button.style.display = "none";
    showLoader();
// APİ den veri geliyormuş gibi bekletelim
    setTimeout(() => {
        hideLoader();
        document.querySelector("img").style.display = "block";
    },1500);
});