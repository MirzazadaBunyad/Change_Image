let imgShow = document.getElementById("imageChange");

function changeImg(e) {
  imgShow.src = e.getAttribute("data-src");
}
