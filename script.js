const button = document.querySelector('button')
const titlename = document.querySelector('.meme-title')
const image = document.querySelector('.meme-image')
const authorname = document.querySelector('.author ')

function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
        .then((res) => res.json())
        .then((data) => {
            const { url, title, author } = data
            titlename.innerText = title
            image.src = url
            authorname.innerText = `Meme by: ${author}`
            console.log(data)
            console.log(url)
        })

} getMeme()

button.addEventListener('click', () => {
    // image.src= 'https://i.redd.it/5nbajt5co52e1.png'
    getMeme()
})
