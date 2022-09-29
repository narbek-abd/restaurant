const path = require("path");

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {
      return {
        code: `module.exports = 'svg'`,
      };
    }

    return {
      code: `module.exports = ${assetFilename};`,
    };
  },
};
