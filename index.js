import express from "express"
import routes from "./routes/routes.js"
import jsonErrorHandler from "./middlewares/jsonErrorHandler.js";

const app= express()

app.use(express.json({
  strict: true, // solo acepta objetos o arrays JSON
  verify: (req, res, buf, encoding) => {
    try {
      JSON.parse(buf);
    } catch (e) {
      throw new SyntaxError('JSON inválido');
    }
  }
}));

app.use(jsonErrorHandler);

app.use(express.urlencoded({extended:true}))


app.use("/app", routes)

app.use((req, res, next)=>{
res.status(400).send("Bad request")
})

app.listen(8080, ()=>{
     console.log(`🚀 ~ app.listen ~ 8080`)
})