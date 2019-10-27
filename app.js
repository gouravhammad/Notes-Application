const yargs = require('yargs')
const chalk = require('chalk')
const notesFun = require('./NotesFunction')

// Add Command
yargs.command({
    command: 'add',
    describe: 'Adds a Note',
    builder: {
                title: {
                            describe: 'Contains title of the Note',
                            type: "string",
                            demandOption: true
                        },
                body:  {
                            describe: 'Contains body of the Note',
                            type: "string",
                            demandOption: true
                        },        
             },
    handler: function(argv){
       notesFun.add(argv.title,argv.body)
    }  
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removes a Note',
    builder: {
                title: {
                            describe: 'Contains title of the Note',
                            type: "string",
                            demandOption: true
                        }   
             },
    handler: function(argv){
        notesFun.remove(argv.title)
    }  
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Reads a Note',
    builder: {
                title: {
                            describe: 'Contains title of the Note',
                            type: "string",
                            demandOption: true
                        }
             },
    handler: function(argv){
       notesFun.read(argv.title)
    }  
})

// List Command
yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler: function(argv){
        notesFun.list()
    }  
})

yargs.parse()