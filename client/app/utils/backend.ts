
export const url = process.env.NEXT_PUBLIC_API_URL;

export const getPatients = async () => {
    const response = await fetch(`${url}/patient/get-all`);
    const data = await response.json();
    console.log(process.env.url)
    return data;
}

export const getPatient =async (id:number) => {
    const response = await fetch(`${url}/patient/get/${id}`);
    const data = await response.json();
    
    return data
}

export const getPatientData = async(id: number) => {
    const response = await fetch(`${url}/sensor/get/${id}`);
    const data = await response.json()

    return data
}
