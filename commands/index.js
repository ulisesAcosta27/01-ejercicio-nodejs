const fs = require("fs");
const request = require('request');

const done=(output)=>{
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")
}


const pwd = (file) => {
  done(process.cwd());
};

const date = (file) => {
  done(Date());
};

const ls = (file) => {
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    let res = '';
    files.forEach((file) => {
      res = res + file.toString() + '\n'; // '\n' significa salto de linea
    });
    done(res);
  });
};

const echo=(file)=>{
  done(file)
}

const curl=(file)=>{
 request(file,(err,res,body)=>{
  done(body)
 })
}

module.exports = {
  pwd,
  date,
  ls,
  echo,
  curl,
};