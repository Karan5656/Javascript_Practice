function getPageContent(page) {
  const targetDiv = document.getElementById(page);

  const container = document.querySelector(".container");
  //Stores all children of <div class='container'>(line no. 72) in form of array
  const containerChildren = Array.from(container.children);

  //calls function setDisplayToNone() with containerChildren as parameter
  containerChildren.forEach(setDisplayToNone);

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "block";
  } else {
    resetValue();
    targetDiv.style.display = "block";
  }
}

//This function set display property to none .element{display: none}
function setDisplayToNone(element) {
  element.style.display = "none";
}

function getStringOutput() {
  try {
    var form = document.getElementById("formString");
    //prevents page from refreshing after clicking submit button
    preventRefresh(form);

    //takes input as string from user
    var input = document
      .getElementById("arrayValue1")
      .value.replaceAll("'", '"'); //replace single quote with double quote

    //JSON.parse() does not allow single quotes
    //JSON.parse() method converts string to object(array here)
    var array = JSON.parse(input);
    arrayStr = array.join(",");
    document.getElementById("output1").innerHTML = typeof arrayStr;
  } catch {
    alert("Please enter valid input!");
  }
}

function getLastElementOutput() {
  try {
    var form = document.getElementById("formLastElement");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue2")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);
    document.getElementById("output2").innerHTML = array[array.length - 1];
  } catch {
    alert("Please enter valid input!");
  }
}

function getPushOutput() {
  try {
    var form = document.getElementById("formPush");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue3")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    var pushElementInput = document
      .getElementById("pushElementValue")
      .value.replaceAll("'", '"');
    var pushElement = JSON.parse(pushElementInput);
    array.push(pushElement);

    //array = [1,2,3,[4,5]] after reduce flattenedArray = [1,2,3,4,5]
    var flattenedArray = array.reduce((a, b) => a.concat(b), []);
    document.getElementById("output3").innerHTML =
      JSON.stringify(flattenedArray);
  } catch {
    alert("Please enter valid input!");
  }
}

function getPopOutput() {
  try {
    var form = document.getElementById("formPop");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue4")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    array.pop();
    document.getElementById("output4").innerHTML = JSON.stringify(array);
  } catch {
    alert("Please enter valid input!");
  }
}

function getUnshiftOutput() {
  try {
    var form = document.getElementById("formUnshift");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue5")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    var unshiftElementInput = document
      .getElementById("unshiftElementValue")
      .value.replaceAll("'", '"');
    var unshiftElement = JSON.parse(unshiftElementInput);

    array.unshift(unshiftElement);
    var flattenedArray = array.reduce((a, b) => a.concat(b), []);
    document.getElementById("output5").innerHTML =
      JSON.stringify(flattenedArray);
  } catch {
    alert("Please enter valid input!");
  }
}

function getSpliceOutput() {
  try {
    var form = document.getElementById("formSplice");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue6")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    var startValue = document.getElementById("startValue").value;
    var deleteCountValue = document.getElementById("deleteCountValue").value;
    var elementValue = document
      .getElementById("elementValue")
      .value.replaceAll("'", '"');
    if (elementValue) {
      var elementValue = JSON.parse(elementValue);
    }
    if (startValue && deleteCountValue && elementValue) {
      array.splice(startValue, deleteCountValue, elementValue);
    } else if (startValue && deleteCountValue) {
      array.splice(startValue, deleteCountValue);
    } else {
      array.splice(startValue);
    }
    var flattenedArray = array.reduce((a, b) => a.concat(b), []);
    document.getElementById("output6").innerHTML =
      JSON.stringify(flattenedArray);
  } catch {
    alert("Please enter valid input!");
  }
}

function getShiftOutput() {
  try {
    var form = document.getElementById("formShift");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue7")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    array.shift();
    document.getElementById("output7").innerHTML = JSON.stringify(array);
  } catch {
    alert("Please enter valid input!");
  }
}

function getSortOutput() {
  try {
    var form = document.getElementById("formSort");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue8")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    array.sort();
    document.getElementById("output8").innerHTML = JSON.stringify(array);
  } catch {
    alert("Please enter valid input!");
  }
}

function getReverseOutput() {
  try {
    var form = document.getElementById("formReverse");
    preventRefresh(form);
    var input = document
      .getElementById("arrayValue9")
      .value.replaceAll("'", '"');
    var array = JSON.parse(input);

    array.reverse();
    document.getElementById("output9").innerHTML = JSON.stringify(array);
  } catch {
    alert("Please enter valid input!");
  }
}

function resetValue() {
  var arrayValue = Array.from(document.getElementsByClassName("array-input"));
  var output = Array.from(document.getElementsByClassName("output"));
  var secondaryInput = Array.from(
    document.getElementsByClassName("secondary-input")
  );
  arrayValue.forEach((a) => (a.value = ""));
  output.forEach((a) => (a.innerHTML = ""));
  secondaryInput.forEach((a) => (a.value = ""));
}

function preventRefresh(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}