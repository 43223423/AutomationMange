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
    document.getElementById("containerIconNavBar").style.marginLeft = "39%";
  } else {
    document.getElementById("containerIconNavBar").style.marginLeft = "16%";
  }
}

// function VerifyWidth(container) {
//   if (container.style.display === "flex") {
//     document.getElementById("subNavbarContainer").style.width = "94rem";
//   } else {
//     document.getElementById("subNavbarContainer").style.width = "102rem";
//   }
// }

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

function RefreshButton() {
  window.location.reload();
}

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
    document.getElementById("title").style.backgroundColor = "#535353";

    document.getElementById("subNavbarContainer").style.boxShadow = "none";

    document.getElementById("MainContainer").style.backgroundColor = "#767676";
    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#535353";
    });
    document.querySelectorAll(".number").forEach((item) => {
      item.style.backgroundColor = "#535353";
    });
    document.querySelectorAll(".position").forEach((item) => {
      item.style.color = "white";
    });
    document.querySelectorAll(".GitHub").forEach((item) => {
      item.style.color = "white";
    });
    document.querySelectorAll(".Linkedin").forEach((item) => {
      item.style.color = "white";
    });
    document.getElementById("Exit").style.backgroundColor = "#747474";
  } else {
    document.getElementById("SunIcon").style.display = "none";
    document.getElementById("MoonIcon").style.display = "block";
    document.getElementById("MainContainer").style.backgroundColor = "white";

    document.getElementById("SideBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("title").style.backgroundColor = "#0450c2";
    document.getElementById("NavBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("containerOptions").style.backgroundColor =
      "#0450c2";
    document.getElementById("subNavbarContainer").style.backgroundColor =
      "#0450c2";

    document.getElementById("containerUserSettings").style.backgroundColor =
      "#0450c2";
    document.getElementById("Exit").style.backgroundColor = "#0073DC";

    document.getElementById("Exit").style.backgroundColor = "#0073DC";
    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#0450c2";
    });
  }
}
