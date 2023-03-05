function addTopics() {
    let topicsList = document.querySelector(".topics-list");
    let topicsListItem = document.querySelectorAll(".topic-list_item")
    var articleDiv = document.querySelectorAll(".select2-selection__choice");

    for (let i = 0; i <= articleDiv.length; i++) {
        // newTopicsListItem.textContent = articleDiv[i].textContent.slice(1);
        // topicsList.appendChild(newTopicsListItem);
        articleDiv[i].classList.add('topics-list_item');
        articleDiv[i].classList.remove('select2-selection__choice');
        articleDiv[i].textContent = articleDiv[i].textContent.slice(1);
        topicsList.insertBefore(articleDiv[i], topicsList.children[topicsListItem.length]);
    }
}
