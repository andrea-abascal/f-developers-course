/* La distancia de Levenshtein, también conocidad como distancia de edición
 * o distancia entra palabras, es el número mínimo de operaciones requeridas
 * para transformar una cadena de caracteres en otra
 */

function levenshteinDistance(a,b) {
        // create empty matrix
	const distanceMatrix = Array(a.length + 1).
		fill(null).
		map(() => Array(b.length + 1).fill(null))
	// fill first row
	for(let i = 0; i <= b.length; i += 1){
	distanceMatrix[0][i] = i
	}
	
	// fill first column
	for(let j = 0; j <= a.length; j += 1){
        distanceMatrix[j][0] = j
	}

	// calculate distances
	
	for(let i = 1; i<= a.length; i += 1){
	  for(let j = 1; j <= b.length; j +=1){
		  //esta variable indica si se hará remplazo o no se hará cambio
	  	  const indicator = a[i - 1] === b[j - 1] ? 0 : 1

		  distanceMatrix[i][j] = Math.min(
			  distanceMatrix[i][j - 1] + 1, // insert
			  distanceMatrix[i - 1][j] + 1, // delete
			  distanceMatrix[i - 1][j - 1] + indicator, // replace or nothing
		  )
	  }
	}

	// return distance value
	
	return distanceMatrix[a.length][b.length]
}

const result = levenshteinDistance('aguacate', 'agua')
console.log(result)


