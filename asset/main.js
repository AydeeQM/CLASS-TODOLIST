'use strict';
let works_list = [
  {
    "title": "delectus aut autem"
  },
  {
    "title": "quis ut nam facilis et officia qui"
  },
  {
    "title": "fugiat veniam minus"
  },
  {
    "title": "et porro tempora"
  },
  {
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
  },
  {
    "title": "qui ullam ratione quibusdam voluptatem quia omnis"
  },
  {
    "title": "illo expedita consequatur quia in"
  },
  {
    "title": "quo adipisci enim quam ut ab"
  },
  {
    "title": "molestiae perspiciatis ipsa"
  },
  {
    "title": "illo est ratione doloremque quia maiores aut"
  }
];

class userList {
  constructor(input) {
    this.title = input;
  }
}

class Todolist {
  constructor(noteList) {
    this.arrlist = noteList;
    this.col = [''];
  }

  renderList() {
    let div = document.getElementById("firstlist");
    let table1 = document.createElement('table');
    table1.border = "1";
    table1.setAttribute('bordercolor', 'red');
    table1.setAttribute('width', '35%');
    table1.setAttribute('id', 'note_work');

    //for que recorre e imprime los primeros 10 arrays
    for (let i = 0; i < this.arrlist.length; i++) {
      let trx = document.createElement('tr');
      for (let j = 0; j < this.col.length; j++) {
        let tdx = document.createElement('td');
        tdx.setAttribute('contenteditable', 'true');
        tdx.setAttribute('width', '100%');
        tdx.innerHTML = works_list[i].title;
        trx.appendChild(tdx);
      }
      let closeX = document.createElement("BUTTON");
      closeX.setAttribute('class', 'delete');
      closeX.innerHTML = "X";

      trx.appendChild(closeX);
      table1.appendChild(trx);
      div.appendChild(table1);

    }

    //funcion que genera tabla y tambien agrega texto
    let addTarea = document.getElementById('agregar');
    addTarea.onclick = () => {
      let new_work = $('#tarea').val();
      let datos = new userList(new_work);
      works_list.push(datos);

      if (new_work === '') {
        alert("Usted deberia de escribir una tarea...");
      } else {

        for (let i = works_list.length - 1; i < works_list.length; i++) {
          let trx = document.createElement('tr');
          for (let j = 0; j < this.col.length; j++) {
            let tdx = document.createElement('td');
            tdx.setAttribute('contenteditable', 'true');//etiqueta para editar texto
            tdx.setAttribute('width', '100%');
            tdx.innerHTML = works_list[i].title;
            trx.appendChild(tdx);
          }

          table1.appendChild(trx);

          let closeX = document.createElement("BUTTON");
          closeX.setAttribute('class', 'delete');
          closeX.innerHTML = "X";

          trx.appendChild(closeX);
          table1.appendChild(trx);
        }
        
        new_work = $('#tarea').val(''); //para limpiar despues del imput
      }

    }

    //generar evento para tachar
    table1.addEventListener('dblclick', function (event) {
      if (event.target.nodeName == 'TD') {
        event.target.classList.toggle('completado');
      }
    }, false);

    //generar evento para ocultar
    table1.addEventListener("click", function (event) {
      if (event.target && event.target.className == "delete") {
        event.target.parentNode.remove();
      }
    });
  }
}

let player = new Todolist(works_list);
player.renderList();






