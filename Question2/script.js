function buildElement(elem, call) {
  const body = document.body;
  const element = document.createElement(elem);
  call(element);
  console.log(body);
  body.appendChild(element);
}

const call = (elem) => {
  elem.style.width = "100px";
  elem.style.height = "100px";
  elem.style.backgroundColor = "#f7f7";
  elem.style.borderRadius = "3px";
};

buildElement("div", call);
