let marks = [60, 76, 66, 80, 50, 35];

marks = marks.sort(ascendingOrder);

marks.forEach(print);

function descendingOrder(x, y) {
  return y - x;
}
function ascendingOrder(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}