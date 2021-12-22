import Keycloak from 'keycloak-js'

// Instancia para ser usada por compoentes vanilla (não React)
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak('./keycloak.json')

export default keycloak
