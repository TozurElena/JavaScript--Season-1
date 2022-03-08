// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)

(() => {
  document.getElementById("run").addEventListener("click", () => {
    window.lib
      .getPersons()
      .then((promice) => {
        promice.forEach((el) => {
          console.log(el);
        });
      })
      .catch((err) => console.error(err));
  });
})();
