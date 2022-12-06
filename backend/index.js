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

//create new shoe
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

//delete shoe
app.delete("/inventory/:SHOE_ID", (req, res) => {
    const shoeId = req.params.SHOE_ID;
    const q = "DELETE FROM inventory WHERE SHOE_ID = ?"

    db.query(q, [shoeId], (err,data)=>{
        if (err) return res.send(err)
        return res.json(data)
    })
})

//update shoe
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

//customer 
app.get("/customer", (req,res)=>{
    const q = "SELECT * FROM customer"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.put("/customer/:CUSTOMER_ID", (req,res)=>{
    const custId = req.params.CUSTOMER_ID
    const q = "UPDATE customer SET `CUSTOMER_ID`= ?, `CUSTOMER_NAME`= ?, `CUSTOMER_ADDRESS`= ?, `CUSTOMER_ZIP`= ?, `CUSTOMER_PHONE`= ? WHERE CUSTOMER_ID = ?"

    const values = 
    [
        req.body.CUSTOMER_ID,
        req.body.CUSTOMER_NAME,
        req.body.CUSTOMER_ADDRESS,
        req.body.CUSTOMER_ZIP,
        req.body.CUSTOMER_PHONE
    ]

    db.query(q, [...values,custId], (err,data)=>{
        if (err) return res.send(err)
        return res.json(data)
    })

})

app.get("/customerorders", (req,res)=>{
    const q = "SELECT c.ORDER_ID, c.CUSTOMER_ID, c.ORDER_DATE, i.SHOE_ID, i.QUANTITY from customer_order as c inner join customer_order_info as i on c.order_id = i.order_id"

    db.query(q, (err,data) => {
        if (err) return res.send(err)
        return res.json(data)
    })
})

//supplier
app.get("/supplier", (req,res)=>{
    const q = "SELECT * FROM supplier"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.put("/supplier/:SUPPLIER_ID", (req,res)=>{
    const suppId = req.params.SUPPLIER_ID
    const q = "UPDATE supplier SET `SUPPLIER_ID`= ?, `SUPPLIER_NAME`= ?, `SUPPLIER_ADDRESS`= ?, `SUPPLIER_ZIP`= ?, `SUPPLIER_PHONE`= ? WHERE SUPPLIER_ID = ?"

    const values = 
    [
        req.body.SUPPLIER_ID,
        req.body.SUPPLIER_NAME,
        req.body.SUPPLIER_ADDRESS,
        req.body.SUPPLIER_ZIP,
        req.body.SUPPLIER_PHONE
    ]

    db.query(q, [...values,suppId], (err,data)=>{
        if (err) return res.send(err)
        return res.json(data)
    })

})

app.get("/supplierorders", (req,res)=>{
    const q = "SELECT c.INVOICE_ID, c.SUPPLIER_ID, c.INVOICE_DATE, i.SHOE_ID, i.QUANTITY from supplier_invoice as c inner join supplier_invoice_info as i on c.invoice_id = i.invoice_id"

    db.query(q, (err,data) => {
        if (err) return res.send(err)
        return res.json(data)
    })
})


app.listen(8800, () => {
    console.log("backend connected success")
})