console.log('hello world');
//** select button to be clicked */
const btn = document.querySelector('.btn');
console.log(btn);
const inputElem = document.querySelector('.input');
const copyIcon = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');
copyIcon.addEventListener('click', () =>
{
    copyPassword();
    alertContainer.classList.remove('active');
    setTimeout(() =>
    {
        alertContainer.classList.add('active');
    }, 2000);
});
btn.addEventListener('click', () =>
{
    console.log('clicked');
    inputElem.value = createPassword();
});
function createPassword()
{
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i <= passwordLength; i++)
    {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    alertContainer.innerText = password + " copied";
    return password;
}
function copyPassword()
{
    inputElem.select();
    inputElem.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputElem.value);
}