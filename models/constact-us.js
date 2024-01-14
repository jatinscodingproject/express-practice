const fs = require('fs');
const {isUtf8} = require('buffer');
const path = require('path');
const rootdir = require('../utils/path')

const p = path.join(rootdir,'data','contact-us.json');

module.exports = class Contact{
    constructor(name,phoneno,email){
        this.id = Math.random()
        this.name = name,
        this.phoneno = phoneno,
        this.email = email
    }
    save(){
       fs.readFile(p,(err,fileContent) => {
            let contacts = []
            if(err){
                const contacts = JSON.parse(fileContent)  
            }
            contacts.push(this);
            fs.writeFile(p,JSON.stringify(contacts), err => {
                console.log(err)
            })
       })
    }
    static fetchAll(){
        fs.readFile(p,isUtf8,(err,data) => {
            if(err){
                return []
            }else{
                const contact = JSON.parse(data);
                console.log(contact)
            }
        })
    }
}