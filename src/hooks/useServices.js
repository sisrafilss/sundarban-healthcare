import { useEffect, useState } from "react"

const useServices = (dataSource) => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(dataSource)
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return services;

}

export default useServices;