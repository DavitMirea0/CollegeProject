// Оберните в DOMContentLoaded или поместите скрипт в конец body
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactDialog');
    const open = document.getElementById('openDialog');
    const close = document.getElementById('closeDialog');
    
    // Проверьте существование элементов
    if (!modal || !open || !close) {
        console.error('Отсутствуют необходимые элементы');
        return;
    }
    
    let last = null;
    
    function show() {
        last = document.activeElement;
        modal.showModal();
        modal.querySelector('input,select,textarea,button')?.focus();
    }
    
    function hide() {
        modal.close();
        last?.focus();
    }
    
    open.addEventListener('click', show);
    close.addEventListener('click', hide);
});

