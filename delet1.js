function Delete(event) {
            console.log(event.target);
            const target = event.target;
            const elemItem = target.closest('.divik');
            if (target.classList.contains('bts')) {
                elemItem.remove();
                console.log('win');
                localStorage.setItem('todo', document.querySelector('.result').innerHTML);
            }
        }