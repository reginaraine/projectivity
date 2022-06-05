let subButton = document.getElementById("addTaskBtn");
renderItems();
subButton.addEventListener("click", function() {
    let projectName = document.getElementById("projectName").value;
    if (projectName == "") {
        document.getElementById("projectName").classList.add("error");
        return;
    }
    let dueDate = document.getElementById('dueDate').value;
    dueDate = new Date(dueDate).toLocaleDateString('en-GB');
    let ratings = document.getElementById('ratings').value;
    let status = document.getElementById('status').value;
    let description = document.getElementById('description').value;
    let projectObj = {
        'projectName': projectName,
        'dueDate': dueDate,
        'ratings': ratings,
        'status': status,
        'description': description
    };
    let existingItems = getItems();
    existingItems.push(itemObj);
    existingItems = JSON.stringify(existingItems);
    localStorage.setItem('items', existingItems);
    renderItems();
});
function getItems() {
    let items = localStorage.getItem('items');
    if (items == null) return [];
    items = JSON.parse(items);
    return items;
}
function renderItems() {
    let items = getItems();
    let itemUl = document.querySelector('#itemlist ul');
    itemUl.innerHTML = "";
    items.forEach(function(item) {
        let itemLi = document.createElement('li');
        let projectName = document.createElement('span');
        projectName.setAttribute('class', 'projectName');
        projectName.innerText = item.projectName;
        let dueDate = document.createElement('span');
        dueDate.setAttribute('class', 'dueDate');
        dueDate.innerText = item.dueDate;
        let ratings = document.createElement('span');
        ratings.setAttribute('class', 'ratings');
        ratings.innerText = item.ratings;
        let status = document.createElement('span');
        status.setAttribute('class', 'status');
        status.innerText = item.status;
        let description = document.createElement('span');
        description.setAttribute('class', 'description');
        description.innerText = item.description;
        let itemRemove = document.createElement('button');
        itemRemove.setAttribute('class', 'remove');
        itemRemove.innerText = 'x';
        itemRemove.addEventListener("click", function() {
            itemLi.remove();
            removeItem(item.itemName);
        });
        itemLi.appendChild(projectName);
        itemLi.appendChild(dueDate);
        itemLi.appendChild(ratings);
        itemLi.appendChild(status);
        itemLi.appendChild(description);
        itemLi.appendChild(itemRemove);
        itemUl.appendChild(itemLi);
    });
}
function removeItem(itemName) {
    let items = getItems();
    let itemIndex = items.findIndex(function(item) {
        return item.itemName == itemName;
    });
    items.splice(itemIndex, 1);
    items = JSON.stringify(items);
    localStorage.setItem('items', items);
}

//# sourceMappingURL=task.06410cfa.js.map
