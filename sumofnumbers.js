function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let c = 0;
  while (c < list.length) {
    total += list[c];
    c++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  } else {
    return list.shift() + sumRecursion(list);
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const testList = [1, 2, 3, 4, 5];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
