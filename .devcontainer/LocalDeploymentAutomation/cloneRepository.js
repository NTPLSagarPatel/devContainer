const fs = require('fs');
const child_process = require('child_process');
const CLI = require('readline').createInterface({ input: process.stdin, output: process.stdout })

multiLineCI()

async function multiLineCI() {

    const branch = 'main'
    const webApiRepoPath = "/workspaces/devContainer/webApi";
    const platformApiRepoPath = "/workspaces/devContainer/platformApi";

    if (!fs.existsSync(platformApiRepoPath)) {
        console.log(`Cloning into ${platformApiRepoPath} started...`);
        child_process.execSync(`git clone https://github.com/NTPLSagarPatel/platformApi.git  ${platformApiRepoPath}`);
    }else {
        console.log(`Pulling changes into ${platformApiRepoPath} started...`);
        child_process.execSync(`cd ${platformApiRepoPath} && git pull origin ${branch} --rebase`);
    }

    if (!fs.existsSync(webApiRepoPath)) {
         console.log(`Cloning into ${webApiRepoPath} started...`);
         child_process.execSync(`git clone https://github.com/NTPLSagarPatel/webapi.git  ${webApiRepoPath}`);
     }else {
         console.log(`Pulling changes into ${webApiRepoPath} started...`);
         child_process.execSync(`cd ${webApiRepoPath} && git pull origin ${branch} --rebase`);
     }

    CLI.close()
}
