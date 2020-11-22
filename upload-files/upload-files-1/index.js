const inputFile = document.querySelector('input');
const form = document.querySelector('form');






const readFile = () =>{
    let fr = new FileReader();

    fr.readAsText(inputFile.files[0]);
    fr.onload = () =>{
        console.log(fr.result);
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    readFile();

})



