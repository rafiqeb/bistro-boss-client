import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AouthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

      const logOut = async () => {
        setLoading(true)
        return signOut(auth)
      }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          console.log(currentUser)
          // jwt token realated
          if(currentUser){
            const userInfo = {email: currentUser.email};
            axiosPublic.post('/jwt', userInfo)
            .then(res => {
              if(res.data.token){
                localStorage.setItem('access-token', res.data.token);
              }
            })
          }
          else{
            localStorage.removeItem('access-token');
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [axiosPublic])

    const authInfo = {
        user, loading, creatUser, signIn, logOut, signInWithGoogle, updateUserProfile, setUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AouthProvider;