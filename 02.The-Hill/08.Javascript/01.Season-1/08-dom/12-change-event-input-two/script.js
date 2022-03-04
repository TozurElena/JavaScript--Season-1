// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)

(() => {
  let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$"); //Regex: At least 8 characters with at least 2 numericals
  let pass = document.getElementById("pass-one");
  let valide = document.getElementById("validity"); 

  pass.addEventListener("input", function () {
    if (pattern.test(pass.value)) {
      valide.innerHTML = "ok";
    }
  });
})();
