import { useState } from "react"

export default function useUser() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("api/admin", {
                    withCredentials: true,
                });
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Erddddror fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const getUserData = () => {
        const userData = window.localStorage.getItem('userData');
        return userData;
    };

    const saveUserData = (userData) => {
        window.localStorage.setItem("userData", userData);
    };

    const removeUserData = () => {
        window.localStorage.removeItem('userData')
    }

    return {
        status: data,
        userData: getUserData,
        setUserData: saveUserData,
        removeUserdata: removeUserData,

    };
}