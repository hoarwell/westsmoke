const loader = document.querySelector(".loader");

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    loader.style.visibility = "visible";
  } else {
    loader.style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
