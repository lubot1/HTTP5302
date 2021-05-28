let root = document.getElementById('EmployeeListing');

fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
  .then(response => response.json())
  .then(data => {
    //Checks how many objects are in retrieved JSON
    let employeeArrayLength = Object.keys(data).length;

    //Loops through all the objects in case number of employees changes 
    for (let index = 1; index <= employeeArrayLength; index++) {
      var id = data[index].employeeid;
      var name = data[index].employeefname + ' ' + data[index].employeelname;
      var bio = data[index].employeebio;

      //Create new employee card root
      var newEmployeeCard = document.createElement('div');
      newEmployeeCard.setAttribute('id', id);
      newEmployeeCard.setAttribute('class','employee-card');

      //Check if employee is featured
      if (data[index].employeeisfeatured == 1) {
        //If they are, add a crown
        var featuredCrown = addElement('p','','featured');
        featuredCrown.innerHTML = '&#128081;'; //Code for crown
        newEmployeeCard.appendChild(featuredCrown);
      }

      //Check if the employee has a picture
      if(data[index].employeehaspic == 1) {
        var newEmployeePicture = document.createElement('img');
        //Find associated image for src
        newEmployeePicture.setAttribute('src','http://sandbox.bittsdevelopment.com/code1/employeepics/'+ id +'.jpg');
        newEmployeeCard.appendChild(newEmployeePicture);
      }

      //Add name
      newEmployeeCard.appendChild(addElement('h2',name));

      // Add bio
      newEmployeeCard.appendChild(addElement('p', bio, 'bio'));

      //Add roles container
      var rolesContainer = addElement('div','', 'roles-container');
      // Add roles by looping through the object
      data[index].roles.forEach(role => {
        var rolename = role.rolename;

        var newRole = addElement('span', rolename, 'roleName');
        //Set role color
        newRole.style.backgroundColor = role.rolecolor;

        rolesContainer.appendChild(newRole);
      });
      //Append roles container
      newEmployeeCard.appendChild(rolesContainer);

      //Append the new employee card to the document root
      root.appendChild(newEmployeeCard);
    }
  });

//Helper functions
function addText(text) {
  return document.createTextNode(text);
}
//Creates a new element with a textnode, type denotes the tagname, text is the string that will be inserted
function addElement(type, text, category = "") {
  var newElement = document.createElement(type);
  newElement.appendChild(addText(text));
  newElement.setAttribute('class',category);
  return newElement;
}