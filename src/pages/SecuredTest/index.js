import React from 'react'
import keycloak from 'keycloak'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import VerifyUserInfo from './VerifYUserInfo'

const SecureTest = () => {

  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'check-sso' }}>
      <h1>TESTE SSO KEYCLOAK</h1>
      <VerifyUserInfo />
    </ReactKeycloakProvider>
  )
}

export default SecureTest
