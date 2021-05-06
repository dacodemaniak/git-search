(() => {
    console.log('JS works!')
    fetch(
        'https://api.monorg.com/all'
    ).then(response => {
        const result = response.json()
    }).then((result) => {
        console.log('Voilà les données');
    })
})()