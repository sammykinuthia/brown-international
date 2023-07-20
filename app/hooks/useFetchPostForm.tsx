import axios from "axios";

export async function useFetchPostForm(url: string, data: Object) {
 
    const res = await axios.post(url,data)
    const respo = await res.data
    console.log("here")
    console.log(respo)
    

}