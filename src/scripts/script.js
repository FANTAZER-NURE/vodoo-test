// INSERTING CUSTOM SELECTS
const selects = document.getElementsByTagName('select');

const markup = `
  <div class="dropdown">
    <button
      class="dropdown__button"
      type="button"
    >
      Practice / Institution*
    </button>
    <ul class="dropdown__list">

    </ul>
    <input
      class="dropdown__input_hidden"
      type="text"
      name="select-category"
      value=""
    />
  </div>
`;

[...selects].forEach((select) => {
  const values = [];

  [...select.children].forEach((option) => {
    values.push(option.value);
  });

  const position = select.previousElementSibling ? 'beforeend' : 'afterbegin';
  const parent = select.parentElement;

  select.remove();

  parent.insertAdjacentHTML(position, markup);

  for (let i = 1; i < values.length; i++) {
    const li = document.createElement('li');
    li.textContent = values[i];
    li.classList.add('dropdown__list-item');

    parent.querySelector('.dropdown__list').appendChild(li);
  }
});

//  CUSTOM SELECT LOGIC
document.querySelectorAll('.dropdown').forEach((dropdownWrapper) => {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
  const dropdownInput = dropdownWrapper.querySelector(
    '.dropdown__input_hidden'
  );

  dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_visible');
    dropdownBtn.classList.toggle('dropdown__button--opened');
  });

  dropdownItems.forEach(function (listItem) {
    listItem.addEventListener('click', (e) => {
      dropdownItems.forEach(function (el) {
        el.classList.remove('dropdown__list-item_active');
      });
      e.target.classList.add('dropdown__list-item_active');
      dropdownBtn.innerText = this.innerText;
      dropdownInput.value = this.dataset.value;
      dropdownList.classList.remove('dropdown__list_visible');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target !== dropdownBtn) {
      dropdownBtn.classList.remove('dropdown__button_active');
      dropdownList.classList.remove('dropdown__list_visible');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropdownBtn.classList.remove('dropdown__button_active');
      dropdownList.classList.remove('dropdown__list_visible');
    }
  });
});
