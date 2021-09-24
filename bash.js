const pwdFunction = require('./pwd');
const fileNames = require('./ls');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove newline

  process.stdout.write("You typed: " + cmd + "\n");
  pwdFunction(cmd);
  fileNames(cmd);

});
