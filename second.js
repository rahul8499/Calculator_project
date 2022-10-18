
// let f = "rahulkolhe";
// let g = Array.from(f);
// console.log(g);
string = "";
let element = Array.from(document.querySelectorAll('button'));

// element.forEach((el)=>{
// console.log(el)
// })



//eval work
// c  = eval('2 + 2');
// console.log(c);

element.forEach((elements) => {  //for each loop 3 argument give value, index, array , value mnun yala arrow functio pass kela
    // console.log(elements);
    elements.addEventListener('click', (e) => {  //e means eventobject yala print kel tr mouse event print hotil
        console.log(e.target);   //target mnje tumha dhkvl jat kont element click kela ahe
        if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerText == 'c')  //element madhla text
        {
            string = "";
            document.querySelector('input').value = string;
          
        }
        else if(e.target.innerText == 'Del')
        {
            string = string.slice(0 , string.length-1)
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string;
        
        }
    })

})

