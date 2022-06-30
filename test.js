const express = require('express')
const app = express()
app.use(express.json())
const port = 4000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bigchain', { useNewUrlParser: true });

const assetSchema={
  data:Object,
  id:String
}
const transactionSchema={
  
}
const Asset = mongoose.model('Asset', assetSchema)
const Transaction = mongoose.model('Transaction', transactionSchema)

app.get('/', (req, res) => {
  Asset.find(function(err, foundAssets){
    if(err)
    res.send(err)
    else
    {
    res.send(foundAssets)
    }
    
  })
  
})

app.get('/transactions', (req, res) => {

  Transaction.find(function(err, foundTxns){
    if(err)
    res.send(err)
    else
    res.send(foundTxns)
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
