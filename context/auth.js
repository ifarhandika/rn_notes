import { useRouter, useSegments } from "expo-router"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

const authenticatedUser = (user) => {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"

    if (!user && !inAuthGroup) {
      router.replace("/")
    } else if (user && inAuthGroup) {
      router.replace("/home")
    }
  }, [user, segments])
}

export const AuthProvider = (props) => {
  const [authedUser, setAuthedUser] = useState(null)

  authenticatedUser(authedUser)

  return (
    <AuthContext.Provider
      value={{
        signIn: (data) => setAuthedUser(data),
        signOut: () => setAuthedUser(null),
        authedUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
