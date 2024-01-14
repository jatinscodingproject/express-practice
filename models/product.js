const { isUtf8 } = require('buffer');
const fs = require('fs');
const rootdir = require('../utils/path');
const path = require('path');

const p = path.join(rootdir,'data','products.json')

module.exports = class Product {
    constructor(t) {
        this.id = Math.random()
        this.title = t
    }
    save(){
        fs.readFile(p ,(err,fileContent) => {
            let products = [];
            if(err){
                const products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err);
            })
        })
    }
    static fetchAll(){
        fs.readFile(p,isUtf8,(err,data) => {
            if (err){
                return []
            }else{
                const products = JSON.parse(data)
                console.log(products)
            }
        })
    }
}