export function createParagraphs(parentElement, paragraphCount) {
  for (let i = 0; i < paragraphCount; i += 1) {
    const p = document.createElement("p");
    p.textContent = `data ${i}`;
    parentElement.appendChild(p);
  }
}
export function createButton(buttonClass, textCaption) {
  const btn = document.createElement("button");
  btn.classList.add(buttonClass);
  btn.textContent = textCaption;
  btn.hidden = true;
  return btn;
}

export function createTextArea(className) {
  const textArea = document.createElement("textarea");
  textArea.classList.add(className);
  return textArea;
}

export function getOnkeyup(btnAddParagraph) {
  const btnAddParagraph1 = btnAddParagraph;
  return () => {
    const textAreaPage = document.querySelector(".textarea");

    if (textAreaPage.textLength === 0) {
      btnAddParagraph1.hidden = true;
    } else {
      btnAddParagraph1.hidden = false;
    }
  };
}

export function getOnclick(paragraphContainer) {
  return function click() {
    if (paragraphContainer.children.length > 4) {
      paragraphContainer.firstChild.remove();
    }
    const p = document.createElement("p");
    const textarea = document.querySelector(".textarea");
    p.textContent = textarea.value;
    paragraphContainer.appendChild(p);
    textarea.value = "";
    this.hidden = true;
  };
}

export function renderInitialData() {
  const container = document.getElementById("mainFrame");
  const divP = document.createElement("div");
  divP.classList.add("simple");

  const divBtn = document.createElement("div");
  createParagraphs(divP, 3);
  const textArea = createTextArea("textarea");
  const btn = createButton("button", "Push Me");

  btn.onclick = getOnclick(divP);
  textArea.onkeyup = getOnkeyup(btn);

  divBtn.appendChild(btn);
  container.appendChild(divP);
  container.appendChild(textArea);
  container.appendChild(divBtn);
}
