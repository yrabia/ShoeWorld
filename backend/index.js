import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fIDkw29",
    database: "project157a"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json("this is the backend")
})

//getting inventory data from db
app.get("/inventory", (req,res)=>{
    const q = "SELECT * FROM inventory"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//create new data
app.post("/inventory", (req, res)=>{
    const q = "INSERT INTO inventory (`SHOE_ID`, `SHOE_NAME`, `SHOE_COST`, `SHOE_PRICE`, `QUANTITY_ON_HAND`, `QUANTITY_ON_ORDER`, `QUANTITY_RECOMMENDED`) VALUES (?)"
    const values = 
    [
        req.body.SHOE_ID,
        req.body.SHOE_NAME,
        req.body.SHOE_COST,
        req.body.SHOE_PRICE,
        req.body.QUANTITY_ON_HAND,
        req.body.QUANTITY_ON_ORDER,
        req.body.QUANTITY_RECOMMENDED
    ]

    db.query(q, [values], (err,data) => {
        if (err) return res.send(err)
        return res.json(data)
    })

})

app.delete("/inventory/:SHOE_ID", (req, res) => {
    const shoeId = req.params.SHOE_ID;
    const q = "DELETE FROM inventory WHERE SHOE_ID = ?"

    db.query(q, [shoeId], (err,data)=>{
        if (err) return res.send(err)
        return res.json(data)
    })
})

app.put("/inventory/:SHOE_ID", (req,res)=>{
    const shoeId = req.params.SHOE_ID
    const q = "UPDATE inventory SET `SHOE_ID`= ?, `SHOE_NAME`= ?, `SHOE_COST`= ?, `SHOE_PRICE`= ?, `QUANTITY_ON_HAND`= ?, `QUANTITY_ON_ORDER`= ?, `QUANTITY_RECOMMENDED`= ? WHERE SHOE_ID = ?"

    const values = 
    [
        req.body.SHOE_ID,
        req.body.SHOE_NAME,
        req.body.SHOE_COST,
        req.body.SHOE_PRICE,
        req.body.QUANTITY_ON_HAND,
        req.body.QUANTITY_ON_ORDER,
        req.body.QUANTITY_RECOMMENDED
    ]

    db.query(q, [...values,shoeId], (err,data)=>{
        if (err) return res.send(err)
        return res.json(data)
    })

})

app.listen(8800, () => {
    console.log("backend connected success")
})