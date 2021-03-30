# Setup
* Either download the Zip or clone the repository.
* Run `yarn && yarn start` in the project root.
* Open your preferred browser and head to http://localhost:3000/
 
# Process

After reading through the instructions and looking at the provided image I first decided what components made the most sense. I initialised a React app with `create-react-app` and split up the basket out by purpose and ended up with a header, order table and costing component.
 
Both the costing and order table components needed access to the product data I had to store that state in the parent App component and pass it through as `props` to both of them. I also added a fake `id` key to the data to emulate what I'd expect real data to look like.

Both visually and functionally the list of products works well as a table so I mapped through my data, using the table tags to create the table of items. I haven't used tables very often, so whilst 
they were a bit fiddly at first, it was fun playing around with them.

After building out the basic components I tackled the quantity and delete parts of the order table, separating them out into their own components. For the delete button I filtered the products array to not contain the item whose `id` I'd passed in and then set it back to state. For the quantity controls I mapped over the products array and returned either a spread copy of the same product, or if the `id` matched, a spread copy with the quantity key updated.

Once all of the order table functionality was done, the section for sub/totals was relatively straightforward as any data modified in the table would update the `props` being passed into the cost calculations. I used the `axios` library for the mock `POST` request as it is simple, clean and easy to use.
 
In terms of the styling, I initially built it all out in vanilla CSS, but I wanted to also give using the styled-components library a shot so I converted some of what I already had. I spent some time reading up on it, and whilst I didn't convert the whole project, I managed to implement it on some of the more potentially reusable and complex components such as the buttons and input.
 
# Reflections
 
For me one the most interesting part of this code test was the incrementing of the quantity using buttons. I went through a couple of different iterations, one of which condensed the input `valueChange` function and the `updateQuantity` into one function, another called `stepUp` and `stepDown` on the input for the buttons. I decided however that the code read better if they were seperated and and for the buttons to directly modify state rather than the input.
 
I also thought about different ways of structuring the data, potentially separating the quantity and  product into different states, linking them via an id. I also considered rearranging my state so that I could store/send both the product data and costs as part of the post request however the solution I ended up with was both the most simple and made most sense to me.
 
In hindsight I may have gone a bit overboard in my efforts to ensure that a user can't input a value under 1 or over 10 for the product quantity as some of my initial versions gave the user the ability to type in any number. Whilst I have an `onBlur` to ensured the quantity always ended up between 1-10, because my input event was `onChange`, the user could still type any number they wanted (as i found out the `max` and `min` attributes on an input don't limit the user's ability to type numbers outside the range) and see the cost either skyrocket or go negative as long as they didn't click out of the input.
 
Although I've barely scratched the surface of styled-components I can already tell it's an incredibly versatile and powerful library. Whilst my implementation works I'm not sure if it is actually any good or is representative of industry standards. It's definitely a library I'm keen to learn more about and will be using in the future!
 
# Going Forward
 
In terms of next steps for this code test, I'd probably do some more research on styled-components best practices/how to best use it in large scale applications and try to replicate for the whole task. I'd also also give a more responsive or mobile version a shot. I think the other main thing I'd attempt would be some unit testing.
 
 
### Thank you very much for looking over my code test!
 
