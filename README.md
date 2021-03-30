# Setup
 
* Either download the Zip or clone the repository.
* Run `yarn && yarn start` in the project root.
* Open your preferred browser and head to http://localhost:3000/

# Foreword

Thank you very much for looking over my code test!
 
# Process
 
After reading through the instructions and looking at the provided image for this code test I first thought of what React components would make most sense to me. I ended up splitting the basket out by purpose and so ended up with a header, order table and costing components. Because both the costing and order table components needed access to the product data I had to store that state in the parent App component and pass it through as `props` to both of them. I also added a fake `id` key to the data to emulate what I'd expect real data to look like.
 
Both visually and functionally the list of products works well as a table so mapped through my data, using the table tags to create the list of Items. I haven't used tables very often either so it was fun playing around with them.
 
After building out the basic components I tackled the quantity and delete parts of the order table, separating them out into their own components. For the delete I just filtered the products array to not contain the item whose `id` I'd passed in and set it back to state. For the quantity controls I mapped over the products array and returned either a spread copy of the same product, or if the `id` matched, a spread copy with the quantity key updated to be the input's value
 
Once all of the order table functionality was done, the section for sub/totals was relatively straightforward as any data modified in the table would update the `props` being passed into the cost calculations. I used `axios`
 
For me the most interesting part of this code test was the incrementing of the quantity using buttons. I went through a couple of different iterations, one of which condensed the input `onChange` function and the button `onClick` into one function, another called `stepUp` and `stepDown` on an input stored in `useRef`. I decided however, that the code read better if they were seperated and and for the buttons to directly modify state. 

I also may have gone a bit overboard in my efforts to ensure that a user can't input a value of under 1 or over 10 as some of my initial versions gave the user the ability to type in any number. Whilst I had an `onBlur` to ensured the quantity always ended up between 1-10, becuase my input event was `onChange`, the user could still type any number they wanted and see the cost either skyrocket or go negative as long as they didn't click out of the input.