import axios from "axios";

export const myAxiosTripAdvisor = axios.create({
    headers: {
        'x-rapidapi-key': '7c77e19a85mshbf55054d1095a92p10a430jsn16b4c683ac58',
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
})