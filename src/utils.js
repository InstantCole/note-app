export function addClassById(id, classes) {
    const el = document.getElementById(id)
    console.log([...classes])
    for(let index in classes){
        el.classList.add(classes[index])
    }

}

export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

