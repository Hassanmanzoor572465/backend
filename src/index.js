import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
})





connectDB()










// const app = express();
// ;(async () => {
//     try {
//         await mongoose.connect(`${DB_URL}/${DB_NAME}`);
//         console.log("DB connected");
//         app.on("error", (error) => {
//             console.log(error);
//         })

//         app.listen(process.env.PORT, () => {
//             console.log("Server started on port 3000");
//         })

//     } catch (error) {
//         console.log(error.message);
//     }
// })();