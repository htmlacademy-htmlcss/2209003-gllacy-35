'use strict';

// header buttons
function openPopover(
    buttonSelector,
    popoverSelector,
    oldButtonClass = 'header-button',
    activeButtonClass = 'header-button-active',
    popoverSelectorForOpen = popoverSelector + '-opened'
  ) {
  const button = document.querySelector(buttonSelector);
  const popover = document.querySelector(popoverSelector);
  popoverSelectorForOpen = popoverSelectorForOpen.slice(1);

  function buttonClickHandler(event) {
    const target = event.target;

    if (button.contains(target)) {
      button.classList.toggle(oldButtonClass);
      button.classList.toggle(activeButtonClass);
      popover.classList.toggle(popoverSelectorForOpen);
    } else if (!popover.contains(target)) {
      button.classList.remove(activeButtonClass);
      button.classList.add(oldButtonClass);
      popover.classList.remove(popoverSelectorForOpen);
    }
  }

  document.body.addEventListener('click', buttonClickHandler);
}

openPopover('.catalog-button', '.catalog-popover');
openPopover('.search-button', '.search-popover');
openPopover('.sign-in-button', '.sign-in-popover')
openPopover('.cart-button', '.cart-full-popover');

// responce-modal
const modal = document.querySelector('.responce-modal');
const openModalButton = document.querySelector('.contacts-button');
const closeModalButton = modal.querySelector('.responce-close');

function hideModal() {
  modal.classList.remove('responce-modal-opened');
}

function showModal() {
  modal.classList.add('responce-modal-opened')
}

// open modal
openModalButton.addEventListener('click', showModal);

// close modal
closeModalButton.addEventListener('click', hideModal);

modal.addEventListener('click', (event) => {
  event.target === modal ? hideModal() : null;
});

document.body.addEventListener('keydown', (event) => {
  event.key === "Escape" ? hideModal() : null;
});
