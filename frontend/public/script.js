const passwordForm = document.getElementById('passwordForm');
const storageForm = document.getElementById('storageForm');
const passwordDisplay = document.getElementById('passwordDisplay');

passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const length = document.getElementById('length').value;
    const hasUppercase = document.getElementById('uppercase').checked;
    const hasLowercase = document.getElementById('lowercase').checked;
    const hasNumbers = document.getElementById('numbers').checked;
    const hasSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
    passwordDisplay.innerText = password;

    // Mostrar el formulario de almacenamiento
    storageForm.style.display = 'block';
});

storageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = passwordDisplay.innerText;
    const tag = document.getElementById('tag').value;
    const color = document.getElementById('color').value;

    // Aquí deberías implementar la lógica para almacenar la contraseña con la etiqueta y el color en el almacenamiento local del navegador.
    // Por simplicidad, este ejemplo solo muestra la etiqueta, la contraseña y el color en la consola.
    console.log(`Contraseña: ${password}, Etiqueta: ${tag}, Color: ${color}`);

    // Limpiar los campos de etiqueta y color y ocultar el formulario de almacenamiento
    document.getElementById('tag').value = '';
    document.getElementById('color').value = '#007bff';
    storageForm.style.display = 'none';
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
