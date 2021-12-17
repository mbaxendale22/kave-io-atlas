export const strike = (event, element, state) => {
  const origins = [...document.getElementById(element).childNodes];
  const [checkForStrike] = origins.filter((x) =>
    x.classList.contains('selected')
  );
  if (checkForStrike === undefined) {
    event.target.classList.add('selected');
    state(event.target.dataset.id);
    return;
  } else {
    checkForStrike.classList.remove('selected');
    event.target.classList.add('selected');
    state(event.target.dataset.id);
    return;
  }
};

export const highlight = (e) =>
  (e.target.style.cssText = 'transform: scale(1.08); color: red;');
export const stopHighlight = (e) =>
  (e.target.style.cssText = 'transform: scale(1);');
