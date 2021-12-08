



var Cookie = ["Новий Рік принесе позбавлення від старих звичок","У Новому Році ти заробиш достатньо грошей, щоб витрачати їх із задоволенням.","Якщо змовчати-вас не зможуть назвати занудою.","Навіть на вибоїнах сімейного життя ви все одно підскакуєте вгору.","Зверніть увагу на старих друзів.","Настав час ділитися досвідом","Саме час вирушати в подорож."];
var randomCokie = Cookie[Math.floor(Math.random()*Cookie.length)];
console.log(randomCokie);


let test=()=>{console.log(randomCokie)};

const form=document.getElementById("form")

form.addEventListener('submit', calback)
const pi =[];
function calback(event){
    event.preventDefault();
    const story=form.querySelector('[name="story"]')
    const storyValue=story.value;
    pi.push(storyValue);
    console.log(storyValue);
}