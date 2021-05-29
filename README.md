# Coding Challenge
This is a response to the coding challenge using only vanilla javascript, css, and HTML.
## How it's done
The script in fetchData.js sends out a get request to the provided API. The page recieves a list of employees in JSON which my code finds the length of. It then
loops through the list and assigns new 'employee card' elements for every employee within a flex container. Every card is filled out with appropriate informations about the employee. Every card is also assigned classes based on what roles they hold in the organization. This is used for the filter functionality so one can filter the employees by role. To do this, simply change the dropdown form option.

The page also features some degree of responsiveness with the display of cards changing into a column form for smaller screen sizes.
