// erbsite a local storage a data storg kora niyom
const addToLocalStroage = () => {
    const inputIdAdd = document.getElementById('storage-id');
    const id = inputIdAdd.value;
    const inputIdAdd2 = document.getElementById('storage-value');
    const id2 = inputIdAdd2.value;

    // 
    localStorage.setItem(id, id2);
    inputIdAdd.value = '';
    inputIdAdd2.value = '';
}