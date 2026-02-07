const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

const title = document.getElementById("title");
const branch = document.getElementById("branch");
const footer = document.getElementById("footer");

enBtn.onclick = () => {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";

  title.textContent = "PROVISION";
  branch.textContent = "by Abdo Elamir - Dubai Branch";
  footer.textContent = "© 2026 Abdo El Amir";

  enBtn.classList.add("active");
  arBtn.classList.remove("active");
};

arBtn.onclick = () => {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";

  title.textContent = "بروڤيچن";
  branch.textContent = "من عبدو الأمير - فرع دبي";
  footer.textContent = "© 2026 عبده الأمير";

  arBtn.classList.add("active");
  enBtn.classList.remove("active");
};

