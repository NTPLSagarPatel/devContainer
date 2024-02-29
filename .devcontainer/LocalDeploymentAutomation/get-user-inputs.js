require('dotenv').config({ path: '.env' });

const CLI = require('readline').createInterface({ input: process.stdin, output: process.stdout })

multiLineCI()

async function multiLineCI() {
    CLI.close()
}



