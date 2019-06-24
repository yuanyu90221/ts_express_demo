import express from 'express';
const app = express();

app.get("/", (req, res,  next)=>{
  res.send("Tour Booking API test");
});
app.listen(process.env.PORT|| 8091, ()=>{
  console.log(`server started...`);
});