'use strict';

const body = document.body;

function openPopover(buttonSelector, popoverSelector, popoverSelectorForOpen = popoverSelector + '-opened') {
  const button = document.querySelector(buttonSelector);
  const popover = document.querySelector(popoverSelector);
  popoverSelectorForOpen = popoverSelectorForOpen.slice(1);

  function buttonClickHandler(event) {
    const target = event.target;

    if (button.contains(target)) {
      popover.classList.toggle(popoverSelectorForOpen);
    } else if (!popover.contains(target)) {
      popover.classList.remove(popoverSelectorForOpen);
    }
  }

  body.addEventListener('click', buttonClickHandler);
}

// catalog button
openPopover('.catalog-button', '.catalog-popover');

// search button
openPopover('.search-button', '.search-popover');

// sign-in button
openPopover('.sign-in-button', '.sign-in-popover')

// cart button
openPopover('.cart-button', '.cart-full-popover');
