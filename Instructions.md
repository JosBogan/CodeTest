## ITV Web Developer exercise

### Instructions

Please build the attached visual prototype so it matches the image file and requirements below.

You are allowed to use React, along with any additional build tools, CSS or JavaScript libraries if you wish.

### General requirements and considerations

The visual depicts a user’s basket on a fictitious online shopping site. Two products have been added to the basket and the names of these are shown together with their unit price, desired quantity and product cost. Beneath the product list, is a subtotal of the product costs. VAT is then added (at 20%) and the checkout total is shown beneath. Finally, a ‘Buy Now’ button enables the user to go ahead and purchase the items shown at the total price given.

The quantity field shown beside each product should be pre-filled with the initial quantities shown in the image file. Selecting the + button beside the field should increment the quantity by 1. Selecting the – button should decrement the quantity by 1. The user should also be free to enter any positive number within the quantity field, where only whole numbers from 1 to 10 should be permitted for each product.

Whenever a quantity is changed beside any product, the product cost should update to reflect the price of that product multiplied by its quantity. The subtotal beneath the product list should update to reflect the sum of all the costs. The VAT cost should also update whenever the subtotal changes, as should the final checkout total, which is the sum of the subtotal and the VAT. 

The delete button should remove the item beside it entirely from the basket even if it would result in no products remaining in the basket. The totals beneath the product list should be updated accordingly whenever a product is deleted. If no products remain in the basket, the ‘Buy Now’ button should be disabled. 

When there are products in the basket and the ‘Buy Now’ button is enabled, you should take the product data together with the quantities, costs and totals, and simulate how you would POST this data in JSON format to an AJAX-supported web service URL. As this is purely for simulation purposes in this exercise, you may use a blank URL for this. Display an alert message on screen once the AJAX call is complete.

Please implement as much as you can and then describe how you completed the test, through the use of a README file.

### Submission

We recommend that you create a github repository for this exercise and provide a link to it for your submission. If for any reason this isn't possible, a zip file with your code will be accepted: in this case, please ensure you have deleted the node_modules directory.

Best of luck!
