export const handleClick = (e) =>{
    const hello = e.target.innerText;
    e.target.innerText == hello ? e.target.innerText = hello.split('').reverse().join('') : e.target.innerText = hello;
}
