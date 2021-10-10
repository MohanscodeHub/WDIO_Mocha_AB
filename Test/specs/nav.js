describe('Navigation menu', () => {

    it('Get the text of all menu items and assert them -using wait commands', async () => {

        await browser.url('/');

        //await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');

        

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];
        const actuallinks =[];

       // const navLinks  = await $('#primary-menu').waitForDisplayed({timeout:1000});

       // wait until the home text is displayed on the navigation menu

       await browser.waitUntil(async function(){
       const homeText  = await $('#primary-menu li').getText(); // returns and gets the text of the first item
      return homeText == "Home";
       },

       {
       
       timeout:5000,
       timeoutMsg:'could not verify the Home text from #primary-menu li'

       });



     const navLinks  = await $('#primary-menu').$$('li[id*=menu]');


     for (const link of navLinks){   // for of loop
      
       actuallinks.push(await link.getText()); // psuhing it to actuallinks

     }

     await expect(expectedLinks).toEqual(actuallinks); // Jest assertionn



    });

});