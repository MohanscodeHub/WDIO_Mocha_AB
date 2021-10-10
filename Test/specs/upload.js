const path = require('path'); //  comes in built with node.js

describe('Upload Tests', () => {

    it('simple upload test', async () => {

        await browser.url('https://the-internet.herokuapp.com/upload');


        console.log(__dirname); // prints the absolute path
        // store test file path

        const filePath = path.join(__dirname,'../data/logotitle.png'); // .. command takes one level up

        // upload test file to the browser

        const remoteFilePath = await browser.uploadFile(filePath); // to help chrom understand on where the file is located

        // set File path value in the input feild

        await $('#file-upload').setValue(remoteFilePath)


        await $('#file-submit').click();


        // assertion

        await expect($('#file-submit')).toHaveText('File Uploaded!');


    });

});