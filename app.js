let contador = 0;

const parrafo = document.getElementById('demo');

const btn_dec = document.getElementById('btn-1');
const btn_reset = document.getElementById('btn-2');
const btn_incr = document.getElementById('btn-3');

// console.log({ btn_dec, btn_reset, btn_incr });
// console.log({ btn_dec });

// Eventos de acción por cada btn

const colorCounter = (counter) => {
  if (counter < 0) return (resultado = parrafo.style.color = 'red');
  if (counter == 0) return (parrafo.style.color = 'black');
  return (parrafo.style.color = 'green');
};

const contador_dis = () => {
  --contador;
  colorCounter(contador);
  return (parrafo.innerText = contador);
};

const count_reset = () => {
  contador = 0;
  colorCounter(contador);
  return (parrafo.innerText = contador);
};

const contador_inc = () => {
  ++contador;
  colorCounter(contador);
  return (parrafo.innerText = contador);
};

btn_dec.addEventListener('click', contador_dis);
btn_reset.addEventListener('click', count_reset);
btn_incr.addEventListener('click', contador_inc);
