let id = 1;

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    const tableBody = document.querySelector('#tabla tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${id++}</td>
        <td>${nombre}</td>
        <td>${edad}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('nombre').focus();
});
