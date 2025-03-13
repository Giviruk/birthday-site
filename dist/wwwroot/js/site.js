window.showElements = function () {
    setTimeout(() => document.getElementById("loadingText").classList.add("visible"), 500);
    setTimeout(() => document.getElementById("errorText").classList.add("visible"), 2000);
    setTimeout(() => document.getElementById("glitchImageContainer").classList.add("visible"), 4000);
    setTimeout(() => document.getElementById("finalText").classList.add("visible"), 6000);
};
