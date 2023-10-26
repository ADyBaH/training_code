const catchSignChange = (arr) =>
  arr.reduce((acc, value, index) => {
    if (
      (!String(value).includes("-") && String(arr[index + 1]).includes("-")) ||
      (String(value).includes("-") &&
        !String(arr[index + 1]).includes("-") &&
        arr[index + 1] !== undefined)
    ) {
      acc += 1;

      return acc;
    }

    return acc;
  }, 0);

// better arr.slice(1).filter((e, i) => (e < 0) !== (a[i] < 0)).length;
