export function handleScroll(elements) {
  elements.forEach(({ selector, scrollPosition, className }) => {
    const element = document.querySelector(selector);

    if (element !== null) {
      if (window.scrollY > scrollPosition) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  });
}
