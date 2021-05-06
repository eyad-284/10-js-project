let myButton = document.querySelector("button"),
    myInput = document.querySelector("input");
    let numbers = [];
    let result = document.querySelector("span");
    let myButton2 = document.getElementById("b2");

    function sum(...myNumbers){
    	let final = 0;

    	for(let i = 0; i < myNumbers.length;i++){
    		final += myNumbers[i];
    	}

    	return final;
    }

    function AddNumber(){
    	if(isNaN(parseInt(myInput.value)) == false)
    	numbers.push(parseInt(myInput.value))
    	
    }

myButton.onclick = function(){
	AddNumber();
	result.innerHTML = 
	`
    result is : ${sum(...numbers)}
	`;
    myInput.value = "";

}

myButton2.onclick = function(){
	numbers = [];
    result.innerHTML = `result is: 0` ;
}