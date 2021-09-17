const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended:false}))

const data_ = [
  {
    logID: {
      netID: "123456789",
      group: "Line A",
      andon: "call",
      status: "ACTIVE",
    },
  },
  {
    andon: {
      productID: "Barcode/RFID Here",
      status: "OK",
      code: "1",
      message: "Message here",
      data: "Stringed data",
    },
  },
];

app.get("/api/lineA/andonlog", (req, res) => {
  res.json(data_);
});

app.get("/" , (req, res) => {
    res.send(`
        <div>
            <h1> Welcome to my first Web Server...</h1>
        </div>
        <form action='/FillUp' method=GET>
            <button>FILL UP FORM</button>
        </form>
    `)
})

app.get("/FillUp", (req, res) => {
    res.render('index')
})

app.post('/hrform1', (req, res) => {
    console.log(req.body)
    res.send(`
    <div>
        <h2> Thanks for your submission...</h2>
    </div>
    <form action='/' method=GET>
        <button>HOME</button>
    </form>
    <form action='/FillUp' method=GET>
        <button>Fill Up Again</button>
    </form>
    `)
})

app.listen(process.env.PORT || 3000) 
