// 1. При изменении значения в input с id="from", значение содержащееся в нем 
// должно моментально отображаться в span. То есть при печати в input тег span
// также должен меняться.

const changeSpan = () => {
  const input = document.getElementById('from');
  const span = document.querySelector('span');
  span.innerText = input.value;
}

const input = document.getElementById('from');
input.addEventListener('input', changeSpan);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

messageBtn.addEventListener('click', () => {
  message.classList.add('animate_animated', 'animate_fadeInLeftBig');
  message.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
// Если какое-либо поле не заполнено, форма не должна отправляться, также должны 
// быть подсвечены незаполненные поля (необходимо поставить класс error 
// незаполненным полям). Как только пользователь начинает заполнять какое-либо 
// поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error 
// данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const input1 = document.querySelectorAll('.form-control');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  input1.forEach((el) => {
    if(!el.value) {
      el.classList.add('error');
      // el.style.borderColor = 'red';
      e.preventDefault();
    }
  })
});

form.addEventListener("input", (e) => {
  if (e.target.classList.contains("form-control")) {
    if(!e.target.value) {
       e.target.classList.add("error");
    }
      else {
        e.target.classList.remove("error");
        e.target.classList.add('not-empty'); //Добавил от себя)
      } 
  }
});