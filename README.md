# Setup

* Either download the Zip or clone the repository.
* Run `yarn && yarn init` in the project root.
* Run `yarn start` in the project root.

# Process

After reading through the instructions and looking at the provided image for this code test I first thought of what React components would make most sense to me as composition for the checkout basket. I ended up splitting the basket out by functinlity and so ended up with a header, order table and costing components. Because both the costing and order table components needed acess to the product data I had to store that state in the parent App component and pass it through as props to both of them. I also added a fake `id` key to the data to emulate what I'd expect real data to look like.

Both visually and functionally the list of products works well as a table so mapped through my data, using the table tags to create the list of Items. 

In a larger project I might have 


The most tricky part of this code test for me was the incrementing of the quantity using buttons. I had a couple of different variations, some of which condensed the input `onChange` function and the button `onClick` function. I decided however, that the code read better if they were seperated. Before settling on my final solution I also ran into problems as I initially attempted to modify the state directly with the increment buttons, allowing the value to increase past 10 and below 1. Using the `useRef` hook however, I found that modifying the input directly worked well and also seemed to reduce the oppertunity for user found edge-cases. I also ran into the issue that `stepUp` and `stepDown` don't automatically trigger the `onChange` event, so I had to run that function manually.