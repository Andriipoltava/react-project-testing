import {useState} from "react";

export default function useFetching(callback) {
    const [isLoader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const fetching = async () => {
        try {
            setLoader(true)
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setLoader(false)
        }

    }
    return [fetching,isLoader,error]
}
