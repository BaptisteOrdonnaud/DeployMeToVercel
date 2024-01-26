fetch('https://deploy-me-to-vercel-backend-plum.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#year").textContent = data.year
    })