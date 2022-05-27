import { async } from "@firebase/util";
import { useQuery } from "react-query";
import axiosInterseptor from "./axiosInterseptor";

const useUserInfo= (user)=>{
    const {isLoading, isError, data, error}=useQuery('userdata', async ()=>{
        return await axiosInterseptor({
            url: `/userget/${user.email}`
        }).then(res=>res.data)
    })
    return [isLoading,data] 
}

export default useUserInfo
