console.log('hello world');
//** select button to be clicked */

const btn = document.querySelector('.btn');
console.log(btn);
const inputElem = document.querySelector('.input');
btn.addEventListener('click', () =>
{
    console.log('clicked');
    console.log(createPassword());
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
    return password;
}
