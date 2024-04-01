const fs = require('fs')

const addData = async (newData) => {

    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err){
            console.log(err)
            return err
        } 

        const currentData = JSON.parse(data)
        currentData.push(newData)
        fs.writeFile('data.json', JSON.stringify(currentData,null,2), (err) => {
            if (err) {
                console.log(err)
                return err
            }
            return 
        })
    })
} 

module.exports = {addData}