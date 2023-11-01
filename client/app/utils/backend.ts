
export const BACKEND_URL = 'http://localhost:4000';

export const getPatients = async () => {
    const response = await fetch(`${BACKEND_URL}/patient/get-all`);
    const data = await response.json();

    return data;
}

export const getPatient =async (id:number) => {
    const response = await fetch(`${BACKEND_URL}/patient/get/${id}`);
    const data = await response.json();
    
    return data
}

export const getPatientData = async(id: number) => {
    const response = await fetch(`${BACKEND_URL}/sensor/get/${id}`);
    const data = await response.json()

    return data
}
