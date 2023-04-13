const init = () => {
  const stored = (type) => {
    let result = !!localStorage.getItem(type);

    return result;
  };

  const setToState = (type) => {
    state[type] = JSON.parse(localStorage.getItem(type));
  };

  ['tasks', 'projects', 'notes'].forEach((type) => {
    if (stored(type)) setToState(type);
  });
};

init();
