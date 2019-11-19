window.onload = function () {
    // 各板開闔效果------------------------------
    var classification = document.getElementById("classification");
    var detectionzone = document.getElementById("detectionzone");
    var classClose = document.getElementById("classClose");
    var classOpen = document.getElementById("classOpen");
    detectionzone.onmouseenter = function () {
        classification.style.display = "unset";
        detectionzone.style.display = "none";
        classOpen.style.display = "none";
        classClose.style.display = "unset";
    };
    classification.onmousemove = function () {
        classification.style.display = "unset";
        detectionzone.style.display = "none";
        classOpen.style.display = "none";
        classClose.style.display = "unset";
    }
    classification.onmouseout = function () {
        classification.style.display = "none";
        detectionzone.style.display = "unset";
        classOpen.style.display = "unset";
        classClose.style.display = "none";
    }
    // 各板開闔效果------------------------------
    // 登入和註冊--------------------------------
    var logIn = document.getElementById("logIn");
    var logInZone = document.getElementById("logInZone");
    logIn.onmousedown = function () {
        logInZone.style.display = "unset";
    }
    // 登入和註冊--------------------------------
};