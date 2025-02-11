// bsrg1Psju6JuqrdaLluu235LnfyLzQ1qRtsJLNnWn8khzGBu0Butq3p9 
// API: https://api.pexels.com/v1/search?query=normandy

const photoLink = "https://api.pexels.com/v1/search?query=normandy"

function fetchLink () {
    return fetch(photoLink, {
        headers: {
            Authorization: 'bsrg1Psju6JuqrdaLluu235LnfyLzQ1qRtsJLNnWn8khzGBu0Butq3p9'
        }
    })
    .then(response => response.json())
    .then(photos => renderPhoto(photos))
    .catch(err => console.log(err))
}
    