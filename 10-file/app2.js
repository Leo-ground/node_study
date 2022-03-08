const fs = require('fs').promises;


// reading a file
fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(console.error)


// writing a file
fs.writeFile('./file.txt', 'Hello, Dream coders!!!')
    .catch(console.error);

    //내용 덮어쓰기
    fs.writeFile('./file.txt', 'HHHHello, Dream coders!!!')
    .catch(console.error);

    //추가하기
    fs.appendFile('./file.txt', 'YOYOHello, Dream coders!!!')
    .then(() => {
        // copy
            fs. copyFile('./file.txt', './file2.txt')
            .catch(console.error)
    })
    .catch(console.error);


// folder
fs.mkdir('sub-folder')
    .catch(console.error);

    fs.readdir('./')
        .then(console.log)
        .catch(console.error);