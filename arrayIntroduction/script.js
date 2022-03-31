function getPageContent(page) {
  const targetDiv = document.getElementById(page);
  const container = document.querySelector(".container");
  const containerChildren = Array.from(container.children);
  containerChildren.forEach(checkForBlock);

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
}

function checkForBlock(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  }
}

function getStringOutput() {
  var input = document.getElementById("arrayValue1").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  arrayStr = array.join(",");
  document.getElementById("output1").innerHTML = typeof arrayStr;
}

function getLastElementOutput() {
  var input = document.getElementById("arrayValue2").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  document.getElementById("output2").innerHTML = array[array.length - 1];
}

function getPushOutput() {
  var input = document.getElementById("arrayValue3").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  var pushElementInput = document
    .getElementById("pushElementValue")
    .value.replaceAll("'", '"');
  var pushElement = JSON.parse(pushElementInput);
  array.push(pushElement);
  var flattenedArray = array.reduce((a, b) => a.concat(b), []);
  document.getElementById("output3").innerHTML = JSON.stringify(flattenedArray);
}

function getPopOutput() {
  var input = document.getElementById("arrayValue4").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  array.pop();
  document.getElementById("output4").innerHTML = JSON.stringify(array);
}

function getUnshiftOutput() {
  var input = document.getElementById("arrayValue5").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  var unshiftElementInput = document
    .getElementById("unshiftElementValue")
    .value.replaceAll("'", '"');
  var unshiftElement = JSON.parse(unshiftElementInput);
  array.unshift(unshiftElement);
  var flattenedArray = array.reduce((a, b) => a.concat(b), []);
  document.getElementById("output5").innerHTML = JSON.stringify(flattenedArray);
}

function getSpliceOutput() {
  var input = document.getElementById("arrayValue6").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  var startValue = document.getElementById("startValue").value;
  var deleteCountValue = document.getElementById("deleteCountValue").value;
  var elementValue = document
    .getElementById("elementValue")
    .value.replaceAll("'", '"');
  var unshiftElement = JSON.parse(elementValue);
  array.splice(startValue, deleteCountValue, unshiftElement);
  var flattenedArray = array.reduce((a, b) => a.concat(b), []);
  document.getElementById("output6").innerHTML = JSON.stringify(flattenedArray);
}

function getShiftOutput() {
  var input = document.getElementById("arrayValue7").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  array.shift();
  document.getElementById("output7").innerHTML = JSON.stringify(array);
}

function getSortOutput() {
  var input = document.getElementById("arrayValue8").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  array.sort();
  document.getElementById("output8").innerHTML = JSON.stringify(array);
}

function getReverseOutput() {
  var input = document.getElementById("arrayValue9").value.replaceAll("'", '"');
  var array = JSON.parse(input);
  array.reverse();
  document.getElementById("output9").innerHTML = JSON.stringify(array);
}

function resetValue(flag) {
  let arrayValue = "arrayValue" + flag;
  let output = "output" + flag;
  document.getElementById(arrayValue).value = "";
  document.getElementById(output).innerHTML = "";
}