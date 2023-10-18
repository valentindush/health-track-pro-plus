export const getCurrentUserData = () => {
    const user = localStorage.getItem('user');
    const data: {
        name: string;
        nationalId: string;
        frequentSicknesses: string;
    } = user ? JSON.parse(user) : null;
    
    return data;
}

export const setCurrentUserData = (data: {name: string; nationalId: string, frequentSickness: string}) => {
    localStorage.setItem('user', JSON.stringify(data));
}