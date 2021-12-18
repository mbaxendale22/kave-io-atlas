export const strike = (event, element, state, func) => {
  const origins = [...document.getElementById(element).childNodes];
  const [checkForStrike] = origins.filter((x) =>
    x.classList.contains('selected')
  );
  if (checkForStrike === undefined) {
    event.target.classList.add('selected');
  } else {
    checkForStrike.classList.remove('selected');
    event.target.classList.add('selected');
  }
  const newFilterData = {
    ...state,
    [event.target.dataset.for]: event.target.dataset.id,
  };
  func(newFilterData);
};

export const highlight = (e) =>
  (e.target.style.cssText = 'transform: scale(1.08); color: red;');
export const stopHighlight = (e) =>
  (e.target.style.cssText = 'transform: scale(1);');
