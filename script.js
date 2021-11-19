(() => {
    const taskInputEl = document.getElementById('task-form-input');
    const submitBtnEl = document.getElementById('task-form-submit');
    const listEl = document.getElementById('items-list');

    const itemTemplate = document.getElementById('item-template').innerHTML;

    listEl.addEventListener('click', evt => {
        console.log(evt);
        if (evt.target.classList.contains('nes-btn')) {
            confirm('R u sure?') && evt.target.parentElement.remove();
        }
    });

    listEl.addEventListener('change', evt => {
        console.log(evt);
    });

    submitBtnEl.addEventListener('click', () => {
        const inputContent = taskInputEl.value;
        if (!inputContent) return;

        taskInputEl.value = '';

        const liEl = document.createElement('li');

        liEl.innerHTML = itemTemplate.replace('{{inputContent}}', inputContent);

        listEl.append(liEl);
    });
})(); 