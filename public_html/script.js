(function() {
            'use strict';
            var dialog = document.querySelector('#modal-p1');
            var closeButton = dialog.querySelector('button');
            var showButton = document.querySelector('#show-modal-p1');
            if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
            var closeClickHandler = function(event) {
                dialog.close();
            };
            var showClickHandler = function(event) {
                dialog.showModal();
            };
            showButton.addEventListener('click', showClickHandler);
            closeButton.addEventListener('click', closeClickHandler);
        }());

function parametro(botao, modalName) {
    var dialog = document.querySelector(modalName);
    var closeButton = dialog.querySelector('button');
            
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        closeButton.removeEventListener('click', closeClickHandler);
        dialog.close();
    };
    var showClickHandler = function() {
        dialog.showModal();
    };
    closeButton.addEventListener('click', closeClickHandler);
    showClickHandler();
}