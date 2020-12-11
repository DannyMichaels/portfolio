let timerId;

export const onResize = () => {
  const menu = document.getElementById("menu");
  const width = menu?.clientWidth;
  menu.style.transition = "none";
  if (width <= 768) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      menu.style.transition = "transform 0.4s ease-in-out";
    }, 200);
  }
};
