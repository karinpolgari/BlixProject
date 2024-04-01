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

const createStream = (callback) => {
    const readStream = fs.createReadStream('data.json', 'utf-8');
    let data = '';
  
    readStream.on('data', (chunk) => {
      data += chunk;
    });
  
    readStream.on('end', () => {
      try {
        const messages = JSON.parse(data);
        callback(null, messages);
      } catch (err) {
        callback(err, null);
      }
    });
  
    readStream.on('error', (err) => {
      callback(err, null);
    });
  };

module.exports = {addData, createStream}