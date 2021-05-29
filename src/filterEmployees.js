let employeeCardArray = document.getElementsByClassName('employee-card');

filter.addEventListener('change',() => {
    let category = filter.value;
    var searchFilter = new RegExp(category);

    for (let i = 0; i < employeeCardArray.length; i++) {
        employeeCardArray.item(i).style.display = 'flex';
        if (!searchFilter.test(employeeCardArray.item(i).className) && category != 'all') {
            employeeCardArray.item(i).style.display = 'none';
        }
    }
});