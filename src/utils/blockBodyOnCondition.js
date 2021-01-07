export const blockBodyOnCondition = (condition) => {
  condition
    ? (document.body.style.overflowY = "hidden") &&
      (document.querySelector(".layout-children").style.filter =
        "brightness(0.4)") &&
      (document.querySelector(".layout-children").style.userSelect = "none") &&
      (document.body.style.touchAction = "none") &&
      (document.querySelector(".layout-children").style.background =
        "rgba(0, 0, 0, 0.5)") &&
      (document.querySelector(".footer").style.filter = "brightness(0.4)") &&
      (document.querySelector(".footer").style.background =
        "rgba(0, 0, 0, 0.5)") &&
      (document.querySelector(".layout-children").style.pointerEvents = "none")
    : (document.body.style.overflowY = "inherit") &&
      (document.querySelector(".layout-children").style.filter = "inherit") &&
      (document.querySelector(".layout-children").style.background =
        "inherit") &&
      (document.querySelector(".layout-children").style.pointerEvents =
        "inherit") &&
      (document.body.style.touchAction = "auto") &&
      (document.querySelector(".footer").style.filter = "inherit") &&
      (document.querySelector(".layout-children").style.userSelect =
        "inherit") &&
      (document.querySelector(".footer").style.background = "inherit");
};
