function delet(event) {
      console.log(event.target);
      const target = event.target;
      const elemItem = target.closest('.bl');
      if (target.classList.contains('stask_delete')) {
        elemItem.remove();
        console.log('adsd');
      }
    }