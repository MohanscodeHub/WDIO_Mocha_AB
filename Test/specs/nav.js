describe('Navigation menu', () => {

    it('Get the text of all menu items and assert them', async () => {

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

     const navLinks  = await $('#primary-menu').$$('li[id*=menu]');


     for (const link of navLinks){   // for of loop
      
       actuallinks.push(await link.getText()); // psuhing it to actuallinks

     }

     await expect(expectedLinks).toEqual(actuallinks); // Jest assertionn



    });

});