// Intersection Observer API

let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.5,
};

let callback = function (entries, observer) {
    entries.forEach((entry) => {
        //если элемент является наблюдаемым
        if (entry.isIntersecting) {
            console.log("find", entry);
            //добавим класс active к нему
            entry.target.classList.add("active");
        }
    });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll(".anim");

targets.forEach((target) => {
    observer.observe(target);
});
