(() => {
    console.log('JS works!')
    fetch(
        'https://api.monorg.com/all'
    ).then(response => {
        const result = response.json()
        return result
    }).then((result) => {
        console.log('Voilà les données')
    }).catch((error) => {
        console.log(`Something went wrong while fetching API end point`)
    })
})()