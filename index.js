let express=require("express");

let app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`YOur port number is : ${port}`);
})

app.get("/" ,(req,res)=>{
   res.send("hello");
   console.log("request recived");
});

app.get("/:username",(req,res)=>{
   let {username} =req.params;
   res.send(`welcome ${username}`);
})

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("sorry");
    };
    res.send(q);
});

// app.use((req,res)=>{
//     console.log("Request Received");

//     res.send(
//        {
//         name:"apple",
//         color:"red",
//        }
//     );
// })