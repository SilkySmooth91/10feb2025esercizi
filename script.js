// bsrg1Psju6JuqrdaLluu235LnfyLzQ1qRtsJLNnWn8khzGBu0Butq3p9 
// API: https://api.pexels.com/v1/search?query=normandy

const photoLink = "https://api.pexels.com/v1/search?query=normandy"

function fetchLink () {
    return fetch(photoLink, {
        headers: {
            Authorization: 'bsrg1Psju6JuqrdaLluu235LnfyLzQ1qRtsJLNnWn8khzGBu0Butq3p9',
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(photos => {
        console.log(photos)
        renderPhoto(photos)
    })
    .catch(err => console.log(err))
}

function renderPhoto(photos) {
    const cardSlider = document.getElementById("cardSlider")
    cardSlider.innerHTML = ""

    photos.photos.forEach(photo => {
        const card = document.createElement("div")
        card.classList.add("card", "col-6", "col-md-4")

        const img = document.createElement("img")
        img.classList.add("card-img")
        img.src = photo.src.large

        const overlayDiv = document.createElement("div")
        overlayDiv.classList.add("card-img-overlay")
        overlayDiv.style.opacity = "0"

        const iconDiv = document.createElement("div")
        iconDiv.classList.add("d-flex", "align-items-center", "justify-content-end", "gap-4", "me-2")
        iconDiv.innerHTML = '<i class="bi bi-bookmark"></i><i class="bi bi-heart"></i>'
        

        overlayDiv.appendChild(iconDiv)
        card.appendChild(overlayDiv)

        card.appendChild(img)
        cardSlider.appendChild(card)

        var msnry = new Masonry(cardSlider, {
            itemSelector: '.card',
            percentPosition: true
          });
    })
}


fetchLink()


    