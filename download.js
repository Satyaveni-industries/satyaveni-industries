import fs from 'fs';
import https from 'https';

const url = "https://photos.fife.usercontent.google.com/pw/AP1GczMtUagU2iw2mYhm2hrXqO95svm_KUhI0xd2xe5vk8I5J78xHAV3I8ksFA=w2760-h1504-s-no-gm?authuser=0";

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('logo.jpg');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded');
    });
  } else {
    console.log('Failed: ' + res.statusCode);
  }
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
