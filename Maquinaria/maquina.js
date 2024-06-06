function showUserSettings() {
  document.getElementById("containerUserSettings").style.display = "flex";
}
function hideUserSettings() {
  document.getElementById("containerUserSettings").style.display = "none";
}

function hideSideBar() {
  document.getElementById("SideBarContainer").style.transform =
    "translateX(-100%)";
  document.getElementById("XIcon").style.display = "none";
  document.getElementById("MenuIcon").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "0%";
  document.getElementById("MainComponentsHome").style.marginLeft = "";
}

function showSideBar() {
  let WidthScreen = screen.width;
  document.getElementById("SideBarContainer").style.transform =
    "translateX(0%)";
  document.getElementById("XIcon").style.display = "flex";
  document.getElementById("MenuIcon").style.display = "none";

  if (WidthScreen <= 430) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 430 && WidthScreen <= 576) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 576 && WidthScreen <= 768) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 768 && WidthScreen <= 992) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 992 && WidthScreen <= 1200) {
    document.getElementById("containerIconNavBar").style.marginLeft = "50%";
  } else if (WidthScreen >= 1200 && WidthScreen <= 1700) {
    document.getElementById("containerIconNavBar").style.marginLeft = "19%";
  } else {
    document.getElementById("containerIconNavBar").style.marginLeft = "16%";
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function FunDate() {
  var TextDate = document.getElementById("IconSubNavConainerText");
  const Data = new Date();

  return (TextDate.innerText = `${
    Data.getDate().toString().length === 1
      ? `0${Data.getDate()}`
      : Data.getDate()
  }/${
    Data.getMonth().toString().length === 1
      ? `0${Data.getMonth() + 1}`
      : Data.getMonth() + 1
  }/${Data.getFullYear()}`);
}
FunDate();

let BooleanTheme = false;

function changeTheme() {
  BooleanTheme = !BooleanTheme;

  console.log(BooleanTheme);
  if (BooleanTheme) {
    document.getElementById("SunIcon").style.display = "block";
    document.getElementById("MoonIcon").style.display = "none";

    document.getElementById("SideBarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("NavBarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("containerOptions").style.backgroundColor =
      "#535353";
    document.getElementById("subNavbarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("containerUserSettings").style.backgroundColor =
      "#535353";
    document.getElementById("Exit").style.backgroundColor = "#747474";
    document.getElementById("prev").style.backgroundColor = "#535353";
    document.getElementById("next").style.backgroundColor = "#535353";
    document.getElementById("Text").style.backgroundColor = "white";
    document.getElementById("subNavbarContainer").style.boxShadow = "none";

    document.getElementById("MainContainer").style.backgroundColor = "#767676";
    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#535353";
    });
    document.getElementById("Exit").style.backgroundColor = "#747474";
  } else {
    document.getElementById("SunIcon").style.display = "none";
    document.getElementById("MoonIcon").style.display = "block";
    document.getElementById("MainContainer").style.backgroundColor = "white";

    document.getElementById("SideBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("NavBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("containerOptions").style.backgroundColor =
      "#0450c2";
    document.getElementById("subNavbarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("prev").style.backgroundColor = "#0450c2";
    document.getElementById("next").style.backgroundColor = "#0450c2";
    document.getElementById("containerUserSettings").style.backgroundColor =
      "#0450c2";
    document.getElementById("Exit").style.backgroundColor = "#0073DC";

    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#0450c2";
    });
    document.getElementById("Exit").style.backgroundColor = "#0073DC";
  }
}

function navigationWeb(url) {
  var HostName = window.location.hostname;
  var Port = window.location.port;

  if (HostName === "127.0.0.1") {
    window.location.href = `http://127.0.0.1:${Port}/${url}`;
  } else if (HostName === "automationmange.vercel.app") {
    var UrlText = url.split("/");

    UrlText = UrlText.filter((item) => item !== "CodigoSite");

    var currentUrlParts = window.location.href.split("/");
    currentUrlParts = currentUrlParts.filter((item) => item !== "Main");

    var newUrl = `https://automationmange.vercel.app/${UrlText.join("/")}`;
    console.log(newUrl);

    window.location.href = newUrl;
  }
}

function RefreshButton() {
  window.location.reload();
}
