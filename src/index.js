console.log('%c HI', 'color: firebrick')

const init = () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogData => renderDogs(dogData))

const renderDogs = (dogData) => {
    dogData.message.forEach(dogUrl => {
        let image = document.createElement('img')
        image.src = dogUrl
        const container = document.querySelector("#dog-image-container")
        container.append(image)
    })
}

let breeds = []

fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        breeds = Object.keys(data.message)
        renderBreeds(breeds)
    })

const renderBreeds = (breeds) => {
    console.log(breeds)
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        const ul = document.querySelector("#dog-breeds")
        ul.append(li)
        li.addEventListener('click', updateColor)
    })
} 

const updateColor = (e) => {
    console.log(e)
    e.target.style.color = "red"
}

const handleChange = (e) => {
    const letter = e.target.value
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ''
    renderBreeds(filteredBreeds)

    
}

const breedDropdown = document.querySelector("#breed-dropdown")
breedDropdown.addEventListener('change', handleChange)



}

document.addEventListener('DOMContentLoaded', init);

