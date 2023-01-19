const h1 = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  h1.innerHTML = "Text changed by the button!";
})

const form = document.querySelector('form');
const input = document.getElementsByTagName('input')[0];
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log('what is event!?!?', event);

  const inputValue = input.value;
  const li = document.createElement('li');
  li.textContent = inputValue;

  ul.appendChild(li);
  input.value = '';
})

h1.addEventListener('dragenter', () => {
  h1.style.color = 'blue';
})
