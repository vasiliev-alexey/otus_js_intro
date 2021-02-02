import {
  createParagraphs,
  createButton,
  createTextArea,
  renderInitialData,
} from "./data";

describe("Create  methods", () => {
  beforeEach(() => {
    const container = document.getElementById("mainFrame");
    if (container != null) {
      container.innerHTML = "";
    }

    const divP = document.createElement("main");
    divP.id = "mainFrame";
    document.body.append(divP);
    renderInitialData();
  });

  test("should create 5 paragraphs", () => {
    const divParent = document.createElement("div");
    createParagraphs(divParent, 5);
    expect(divParent.children.length).toBe(5);
  });

  test("should create Button", () => {
    const btnClass = "simpleButton";
    const btn = createButton(btnClass, btnClass);
    expect(btn.textContent).toBe(btnClass);
  });

  test("should create TextArea", () => {
    const textAreaClass = "simple";
    const textArea = createTextArea(textAreaClass);
    expect(textArea.classList.contains(textAreaClass)).toBe(true);
  });

  test("should button hidden", () => {
    //  Кнопка скрыта, если в поле ввода нет значения.
    const textAreaPage = document.querySelector(".textarea");
    const btn = document.querySelector(".button");

    expect(textAreaPage != null).toBe(true);
    expect(btn != null).toBe(true);
    expect(btn.hidden).toBe(true);

    textAreaPage.value = "ddd";
    textAreaPage.onkeyup();

    expect(btn.hidden).toBe(false);

    textAreaPage.value = "";
    textAreaPage.onkeyup();

    expect(btn.hidden).toBe(true);
  });

  test("should button click added new p", () => {
    // Кнопка скрыта, если в поле ввода нет значения.

    const textAreaPage = document.querySelector(".textarea");
    const btn = document.querySelector(".button");

    expect(textAreaPage != null).toBe(true);
    expect(btn != null).toBe(true);

    const divS = document.querySelector(".simple");
    const magicText = "magic text";
    textAreaPage.value = magicText;
    expect(divS.children.length).toBe(3);

    btn.onclick();

    expect(divS.children.length).toBe(4);
    expect(divS.lastChild.textContent).toBe(magicText);
  });

  test("should pnly 5   p", () => {
    // * Если параграфов становится больше 5, первый из них удаляется.

    const textAreaPage = document.querySelector(".textarea");
    const btn = document.querySelector(".button");

    expect(textAreaPage != null).toBe(true);
    expect(btn != null).toBe(true);

    const divS = document.querySelector(".simple");
    let magicText = "magic text";
    textAreaPage.value = magicText;
    expect(divS.children.length).toBe(3);
    btn.onclick();
    expect(divS.children.length).toBe(4);

    for (let i = 0; i < 10; i += 1) {
      magicText = `magic ${i}`;
      textAreaPage.value = magicText;
      btn.onclick();
      expect(divS.children.length).toBe(5);
      expect(divS.lastChild.textContent).toBe(magicText);
    }
  });
});
