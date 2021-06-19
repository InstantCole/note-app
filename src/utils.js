export function addClassById(id, classes) {
    const el = document.getElementById(id)
    console.log([...classes])
    for(let index in classes){
        el.classList.add(classes[index])
    }

}