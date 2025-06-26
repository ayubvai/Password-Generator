function generatePassword(length = 30) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function setPassword() {
    const password = generatePassword();
    document.getElementById('password').value = password;
}

document.getElementById('generateBtn').addEventListener('click', setPassword);
document.getElementById('copyBtn').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    this.textContent = '✅';
    setTimeout(() => {
        this.textContent = '📋';
    }, 1200);
});

// Generate a password on page load
window.onload = setPassword; 