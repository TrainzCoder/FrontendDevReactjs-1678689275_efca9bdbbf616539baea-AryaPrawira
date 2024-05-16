import axios from "axios";

export const myAxiosTripAdvisor = axios.create({
    headers: {
        'x-rapidapi-key': '0e83f699f5mshc8cc46315bd29a8p107b6cjsndade9a613caa',
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
})
