const path = require('path');

//운영체제 별로 경로구분자 차이가 있어 구분자를 하드코딩하면안된다.
//POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
//Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

//string으로 포멧 변경
const str = path.format(parsed);
console.log(str);

//isAbsolute 절대경로, 상대경로
console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대경로
console.log('isAbsolute?', path.isAbsolute('../')); //상대경로

//normalize 이상한경로면 고쳐주는 api
console.log(path.normalize('./folder/////////sub'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));