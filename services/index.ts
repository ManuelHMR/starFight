import axios from "axios";

export async function battleService(firstUser: string, secondUser: string){
    const firstUserResponse = axios.get(`https://api.github.com/users/${firstUser}/repos`);
    const secondUserResponse = axios.get(`https://api.github.com/users/${secondUser}/repos`);
    return "foi"
};

export async function resultService(firstUser: string, secondUser: string) {
    
};