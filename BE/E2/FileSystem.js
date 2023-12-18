const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});
const path = require('path');

let source_directory = prompt('Enter source directory path: ');
let target_directory = prompt('Enter target directory path: ');
let extensions = prompt('Enter extensions (e.g., .txt, .jpg): ');


fs.readdir(source_directory, (err, files) => 
{
    console.log(`Reading data from directory ${source_directory}` )
    if (err)
      console.log('Error!' + err);
    else {
      console.log(`The files in ${source_directory}: `, files);
      let FilterdFiles = files.filter(ext => path.extname(ext) === extensions);
      console.log(`The filterd files: `, FilterdFiles);
      FilterdFiles.forEach(file => {
        let s = path.join(source_directory, file);
        let t = path.join(target_directory, file);
        fs.copyFile(s, t, (err) => {
          if (err)
            console.log('Error!' + err);
          else
            console.log(`${file} was copied to ${target_directory}`);
        });
      });
    }
  });


