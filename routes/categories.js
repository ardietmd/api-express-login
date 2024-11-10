const express = require('express')
const {getAllCategories, storeCategory, getByIdCategory, updateCategory, destroyCategory} = require('../controller/categoryController')
const router = express.Router()

//get All data
router.get('/', getAllCategories)

//get data by id
router.get('/:id', getByIdCategory)

//update data
router.put('/:id', updateCategory)

//delete data
router.delete('/:id', destroyCategory)


//filter data
router.get('/filterdata', (req, res) => {
    res.send('route filter data')
})

//Cread data
router.post('/', storeCategory)

// router.get('/', (req, res) => {
//     res.json({
//         message: 'hello',
//         data: [
//             {
//                 id: "1", nama: "ipong"
//             }
//         ]
//     })
// })

router.get('/:nama', (req, res) => {
    res.send(`hello res param ${params.nama}`)
})


module.exports = router