const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const result = document.getElementById('result')
const sound = document.getElementById('sound')
const btn = document.getElementById('searchBtn')
const read = document.getElementById('read')

const speech = new SpeechSynthesisUtterance()

// const inputValue = document.getElementById()

btn.addEventListener("click", ()=> {
   let inputWord = document.getElementById("input-word").value
//    console.log(inputWord)
fetch(`${url} ${inputWord}`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    // console.log(data[0].meanings[0].partOfSpeech)
    // console.log(data[0].phonetic)

    result.innerHTML = `<div class="word">
    <h3>${inputWord}</h3>
    <button><i class="fa-solid fa-volume-high"></i>
    </button>

</div>
<div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>${data[0].phonetic}</p>
</div>
<p class="word-meaning">
${data[0].meanings[0].definitions[0].definition}
</p>
<p class="word-example">
   ${data[0].meanings[0].definitions[0].example || ""}
</p>`;


let readValue = document.querySelector(".fa-volume-high")
readValue.addEventListener('click',() => {
speech.text = inputWord
speechSynthesis.speak(speech)

})


})

.catch(() => {
    result.innerHTML = `
    
    <h2 class="error"> Could not find the word</h2>`
})


})
