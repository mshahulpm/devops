const yaml = require('yamljs')
const fs = require('fs')


const obj = JSON.stringify(yaml.load(__dirname + '/string.yaml'))

fs.writeFile(__dirname + '/string.json', obj, (e) => {
    console.log(e)
})

console.log(obj)

