const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='
const fs= require('fs')
const os =require('os')
const path=require('path')
const chalk=require('chalk')

exports.createPassword=(length='8', hasNumbers=true, hasSymbols=true )=>{
let chars= alpha
hasNumbers ? (chars+=numbers) :''
hasSymbols ? (chars+=symbols) :''

return generatePassword(length, chars)
}


const generatePassword= (length, chars)=>{
let password=''

for(i=0; i<length; i++){
    password+=chars.charAt(Math.floor(Math.random()*chars.length))
}
return password
}

exports.savePassword=(password)=>{
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id)=>{
  fs.write(id, password +os.EOL, null, 'utf-8', ()=>{
 fs.close(id, ()=>{
     console.log(chalk.green('Password saved to passwords.txt'))
 })
  })
    })
}