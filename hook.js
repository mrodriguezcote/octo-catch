const exec = require('child_process').exec;

exec('sh merge.sh develop origin/acceptance_ci', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);

  
  
});