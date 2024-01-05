const resultScrollX = document.getElementById('result-scrollX');
const resultScrollY = document.getElementById('result-scrollY');
const resultScrollXY = document.getElementById('result-scrollXY');

function syncScrollX() {
  resultScrollXY.scrollLeft = resultScrollX.scrollLeft;
}

function syncScrollY() {
  resultScrollXY.scrollTop = resultScrollY.scrollTop;
}

document.addEventListener('DOMContentLoaded', function () {
  resultScrollXY.addEventListener('scroll', syncScrollXY);

  function syncScrollXY() {
    resultScrollX.scrollLeft = resultScrollXY.scrollLeft;
    resultScrollY.scrollTop = resultScrollXY.scrollTop;
  }
});

resultScrollX.addEventListener('scroll', syncScrollX);
resultScrollY.addEventListener('scroll', syncScrollY);
