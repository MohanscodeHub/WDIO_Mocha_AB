describe("Contact", () => {

    it("Get the  list of all Recent posts & assert the length of each list item >1  & assert the total", async () => {

        await browser.url("/blog");


        // get the Recent Post list Elements

        const recentPostslist  =await $$('#recent-posts-3 ul li')

        // Loop through the list and assert the text length is greater than 10 
        for (const item of recentPostslist){   // for of loop
      
        const text =await item.getText() // psuhing it to actuallinks
        await expect(text.length).toBeGreaterthan(10);

     }
      // Assert that the total length of the list is 4 
      await expect(recentPostslist).tohaveLength(4);
 
     
    });

});