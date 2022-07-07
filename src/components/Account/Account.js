import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
// import Admin from "./admin/Admin"
import User from "./user/user"

const Account = () => {

    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!authCtx.isAuthenticated) {
            navigate('/signin')
        }
    }, [])

    return (
        <div className="my-5">
            {
                (authCtx?.user?.isAdmin == 'user') && (<User />)
                
            }
           
        </div>
        
    )
}

export default Account