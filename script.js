const jokesHere = document.querySelector('#joke');
const nxtbtn = document.querySelector('#nxtbtn');
const generateJokes = () => {
    const settingHeader = {
        headers :{
            Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/', settingHeader)
    .then((responses)=>responses.json())
    .then((data) =>jokesHere.innerHTML = data.joke)
    .catch((error) =>error)
}
nxtbtn.addEventListener('click', generateJokes);
generateJokes();

