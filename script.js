const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

const title = document.getElementById("title");
const branch = document.getElementById("branch");
const footer = document.getElementById("footer");

enBtn.onclick = () => {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";

  title.textContent = "Abdo El Amir";
  branch.textContent = "Dubai Branch";
  footer.textContent = "© 2026 Abdo El Amir – Dubai";

  enBtn.classList.add("active");
  arBtn.classList.remove("active");
};

arBtn.onclick = () => {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";

  title.textContent = "عبده الأمير";
  branch.textContent = "فرع دبي";
  footer.textContent = "© 2026 عبده الأمير – دبي";

  arBtn.classList.add("active");
  enBtn.classList.remove("active");
};
