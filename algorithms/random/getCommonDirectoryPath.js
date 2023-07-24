/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(paths) {
  const answer = [];
  let pathOne = [];
  pathOne = paths.shift().split('/');
  const splitPaths = paths.map((el) => el.split('/'));
  for (let i = 0; i < pathOne.length; i += 1) {
    if (splitPaths.every((el) => el[i] === pathOne[i])) {
      answer.push(pathOne[i]);
    }
  }

  if (answer.length > 0) {
    return `${answer.join('/')}/`;
  }
  return '';
}