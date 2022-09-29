function trapFocus(element: HTMLElement) {
  let focusableEls: NodeList = element.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="password"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
  );
  let firstFocusableEl = focusableEls[0];
  let lastFocusableEl = focusableEls[focusableEls.length - 1];
  let KEYCODE_TAB = 9;

  element.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        /* shift + tab */
        (lastFocusableEl as HTMLElement).focus();
        e.preventDefault();
      }
    } else {
      /* tab */
      if (document.activeElement === lastFocusableEl) {
        (firstFocusableEl as HTMLElement).focus();
        e.preventDefault();
      }
    }
  });
}

export default trapFocus;
