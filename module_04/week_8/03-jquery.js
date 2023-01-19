const $form = $('form');
const $input = $('#input-message');
const $ul = $('ul');

$form.on('submit', function (event){
  event.preventDefault();

  const inputValue = $input.val();
  const li = `<li> ${inputValue} </li>`;
  $ul.append(li);

  $input.val('');
})