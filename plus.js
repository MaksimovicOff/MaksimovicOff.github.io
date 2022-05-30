$('button.plus').on('click', function(){
      const form = document.querySelector(".form");
      const text = document.createElement("input");
      const number = document.createElement("input");
      const button = document.createElement("button");
      const br = document.createElement("br");
      const var2 = document.createElement("div");
      var2.classList.add("bl");
      text.setAttribute("type", "text");
      text.classList.add("stask_text");
      number.setAttribute("type", "number");
      number.classList.add("stask_time");
      button.classList.add("stask_delete");
      button.setAttribute("onclick", "delet(event)")
      form.classList.add("control");
      button.innerHTML = "X"
      var2.appendChild(text);
      var2.appendChild(number);
      var2.appendChild(button);
      var2.appendChild(br);
      form.appendChild(var2);
    });