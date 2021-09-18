/*
 * Dado un arreglo de cadenas regresar otro arreglo que contenga
 * sólo las cadenas más largas
 *
 * Ejemplo:
 * para:
 * inputArray = [ "aba", "aa", "ad", "vcd", "aba"]
 *
 * la salida debe ser:
 * allLongestStrings(inputArray) = ["aba", "vcd", "aba"]
 */

function allLongestStrings(inputArray) {
        let longestSize = -1 
	const result = []

	for(let i = 0; i < inputArray.length; i += 1){
	  if (inputArray[i].length > longestSize ) {
	  longestSize = inputArray[i].length
	  }
	}
        for(let i = 0; i < inputArray.length; i += 1){
	  if(inputArray[i].length === longestSize){
	    result.push(inputArray[i])
	  }
        }
	return result
}


const inputArray = [ "aba", "aa", "ad", "vcd", "aba"]
const result = allLongestStrings(inputArray)
console.log(result)
