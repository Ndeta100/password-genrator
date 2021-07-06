#!/usr/bin/env node
const program=require('commander')
const chalk=require('chalk')
const clipboardy=require('clipboardy')
const utils= require('./utils/createPassword')
program.version('1.0.0').description('Simple password generator')

program
.option( '-l,--length <number>', 'length of password', '8')
.option( '-s,--save ', 'save paswwords to passwords.txt')
.option( '-nn,--no-numbers ', 'remove  numbers')
.option( '-ns,--no-symbols ', 'remove symbols')
.parse()


const {length, save, numbers,  symbols}=program.opts()

console.log(numbers, symbols)


//Get generated passwords

const generatedPassword=utils.createPassword(length, numbers, symbols)
 
//Save to file
if(save){
   utils.savePassword(generatedPassword) 
}
//Copy to clipboard

clipboardy.writeSync(generatedPassword)

//output generated password
console.log(chalk.blue('Generated password'), chalk.bold(generatedPassword)) 

console.log(chalk.yellow('Password copied to clipboard'))