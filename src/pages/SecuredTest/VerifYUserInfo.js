import React, { useEffect, useState } from 'react'
// import keycloak from 'keycloak'
import { useKeycloak } from '@react-keycloak/web'

const VerifyUserInfo = () => {

  const { keycloak, initialized } = useKeycloak()

  const [userInfo, setUserInfo] = useState({ name: '', email: '', id: '' })

  useEffect(() => {
    if (initialized && keycloak?.authenticated) {
      keycloak.loadUserInfo().then(info => {
        const newUserInfo = { name: info.name, email: info.email, id: info.sub }
        setUserInfo(newUserInfo)
      })
    }
  }, [keycloak, initialized])

  if (initialized) {
    if (keycloak.authenticated) {
      return (
        <>
          <div className="UserInfo">
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>ID: {userInfo.id}</p>
          </div>
          <button onClick={keycloak.logout}>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <div>USUÁRIO NÃO LOGADO</div>
          <button onClick={keycloak.login}>Login</button>
        </>
      )
    }
  } else {
    return (
      <div>Inicializando Keycloak...</div>
    )
  }

}

export default VerifyUserInfo
