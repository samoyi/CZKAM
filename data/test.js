const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./video.json'));

let arr = [];
data.srcs.forEach((src,index)=>{
    arr.push({
        src,
        title: data.titles[index],
        poster: data.posters[index],
    });
});

fs.writeFileSync('video.json', JSON.stringify(arr, null, 4));
