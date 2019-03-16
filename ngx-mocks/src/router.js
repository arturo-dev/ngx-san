const fs = require('fs');

module.exports = router => {
  const base = `${__dirname}/ngx`;
  const folders = fs.readdirSync(base);

  for (let folder of folders) {
    const files = fs.readdirSync(`${base}/${folder}`);

    for (let file of files) {
      if (file.indexOf('.json') === -1) {
        require(`${base}/${folder}/${file}`)(router, fs);
      }
    }
  }
};
