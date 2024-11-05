import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjY0Zjk1NmRjM2QxMzcyNWVlNzEyNzFkYzVkNmM5YyIsIm5iZiI6MTczMDQ1MjM3Ny45NzM1NDA4LCJzdWIiOiI2NzI0NWZlZmMxYzc0MzNlYmJjNDFkNWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BCwRMEuk0ZSIOF2uzoFuMJsO48oj6Wk0ToODWNORjX0'
      }
    
    
})

export default instance;  