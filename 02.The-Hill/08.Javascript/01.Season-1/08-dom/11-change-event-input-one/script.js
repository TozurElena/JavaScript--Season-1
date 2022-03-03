// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)

(() => {
  // let pass = document.getElementById('pass-one');

  // const textLength = (value) => {
  //     const maxLength = 10;
  //     if (value.length > maxLength) return false;
  //     return true;
  // }

  // pass.addEventListener('keyup', () => {
  //     if (!textLength(this.value)) alert('text is too long')
  // });

  function textLength(value) {
    const maxLength = 10;
    if (value.length > maxLength) return false;
    return true;
  }
  let oldValue = "";
//   var alert = document.getElementById("alert");
  document.getElementById("pass-one").onkeyup = function () {
    if (!textLength(this.value)) {
      this.value = oldValue;
    //   alert("Text is too long!");
    } else oldValue = this.value;
  };
})();

// https://www.encodedna.com/javascript/limit-character-input-in-textarea-using-javascript.htm
