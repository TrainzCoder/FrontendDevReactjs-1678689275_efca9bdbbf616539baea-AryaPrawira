import axios from "axios";

export const myAxiosTripAdvisor = axios.create({
    headers: {
        'x-rapidapi-key': '045c3c1e0cmsh50c509b1006c0a9p1fcc48jsn609d520cf392',
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
})