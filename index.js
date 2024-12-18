const express=require("express");
const {connectToMongoDB}=require("./connect");

const app=express();
const URL=require("./models/url");
const path=require("path");
const cookieParser=require('cookie-parser');
const urlRoute=require("./routes/url")
const staticRoute=require("./routes/staticRouter");
const userRoute=require('./routes/user');
const {restrictToLoggedinUserOnly,checkAuth}=require('./middlewares/auth');
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>{
    console.log("MongoDB Connected...");
});
const port=8001;
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set("view engine","ejs");

app.set("views",path.resolve("./views"));

app.use(cookieParser());

 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/url",restrictToLoggedinUserOnly,urlRoute);
app.use("/user",userRoute);
app.use("/",checkAuth,staticRoute);

app.get('/url/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
 const entry=await URL.findOneAndUpdate(
    {
        shortId
    },
    
    {
        $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
    },


}
);
res.redirect(entry.redirectURL)
});


app.listen(port,()=>{
    console.log(`Server started on port : ${port}`);
})