function click1(event) {
            const form = document.querySelector(".form");
      		const text = document.createElement("input");
      		const number = document.createElement("input");
      		const button = document.createElement("button");
      		const br = document.createElement("br");
      		const var2 = document.createElement("div");
      		var2.classList.add("bl");
      		text.setAttribute("type", "text");
      		text.classList.add("rrr");
      		number.setAttribute("type", "number");
      		number.classList.add("number");
      		button.classList.add("stask_delete");
      		button.setAttribute("onclick", "delet(event)")
      		form.classList.add("control");
      		button.innerHTML = "X"
      		var2.appendChild(text);
      		var2.appendChild(number);
      		var2.appendChild(button);
      		var2.appendChild(br);
      		form.appendChild(var2);
            console.log(event.target);
            const target = event.target;
            const elemItem = target.closest('.todo__task');
            const elemItem2 = target.closest('.todo__mask');
            const elemItem3 = target.closest('.todosaw');
            document.querySelector('.name').value = target.closest('.divik').querySelector('.t1').innerHTML;
            document.querySelector('.rrr').value = target.closest('.divik').querySelector('.t2').innerHTML;
            document.querySelector('.number').value = target.closest('.divik').querySelector('.t3').innerHTML;
            const kek = target.closest('.divik').querySelector('.t3').innerHTML;
            const elemItems = target.closest('.divik');
            console.log(kek);
            if (target.classList.contains('bts1')) {
                elemItems.remove();
            }
        }