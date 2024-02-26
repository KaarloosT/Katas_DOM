// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement('div');
document.body.appendChild(div);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement('div');
const p = document.createElement('p');
div2.appendChild(p);
document.body.appendChild(div2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const div3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  div3.appendChild(p);
}
document.body.appendChild(div3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const p2 = document.createElement('p');
p2.textContent = 'Soy dinámico!';
document.body.appendChild(p2);


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector('.fn-insert-here').innerHTML = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
 const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    const ul = document.createElement('ul');
    for (const app of apps) {
      const li = document.createElement('li');
      li.textContent = app;
      ul.appendChild(li);
    }
    document.body.appendChild(ul);


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

    const elementos = document.querySelectorAll('.fn-remove-me');
    for (const elemento of elementos) {
      elemento.remove();
    }

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

//selecciona el segundo div con la clase .fn-insert-here
const segundoDiv = document.querySelector('.fn-insert-here:nth-child(2)');
//crea un nuevo elemento p
const p3 = document.createElement('p');
//le añade el texto 'Voy en medio!'
p3.textContent = 'Voy en medio!';
//inserta el nuevo elemento p antes del segundo div
document.body.insertBefore(p3, segundoDiv);







// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const divs2 = document.querySelectorAll('.fn-insert-here');
for (const div of divs2) {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
}

