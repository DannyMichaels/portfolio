export const blockBodyOnCondition = (condition) => {
  const layoutChildren = document.querySelector(".layout-children");
  const footer = document.querySelector(".footer");

  if (condition) {
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = "none";
    if (layoutChildren) {
      layoutChildren.style.filter = "brightness(0.4)";
      layoutChildren.style.userSelect = "none";
      layoutChildren.style.background = "rgba(0, 0, 0, 0.5)";
      layoutChildren.style.pointerEvents = "none";
    }
    if (footer) {
      footer.style.filter = "brightness(0.4)";
      footer.style.background = "rgba(0, 0, 0, 0.5)";
    }
  } else {
    document.body.style.overflowY = "inherit";
    document.body.style.touchAction = "auto";
    if (layoutChildren) {
      layoutChildren.style.filter = "inherit";
      layoutChildren.style.background = "inherit";
      layoutChildren.style.pointerEvents = "inherit";
      layoutChildren.style.userSelect = "inherit";
    }
    if (footer) {
      footer.style.filter = "inherit";
      footer.style.background = "inherit";
    }
  }
};
