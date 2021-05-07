class api {
    constructor() {
        this.apiRoot = 'https://api.root.fr/api/v2/';
    }
    getApiRoot() {
        return this.apiRoot;
    }

    all() {
        return fetch(
            'https://api.monorg.com/all'
        ).then(response => {
            const result = response.json()
            return result
        }).then((result) => {
            console.log('Voilà les données')
        }).catch((error) => {
            console.log(`Something went wrong while fetching API end point`)
        })
    }
}