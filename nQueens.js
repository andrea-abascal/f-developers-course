// crear una clase para poder definir espacialmente a la Reina

class QueenPosition{
	constructor(rowIndex, columnIndex){
		this.rowIndex = rowIndex
		this.columnIndex = columnIndex
	}

	get leftDiagonal(){
		return this.rowIndex - this.columnIndex
	}

	get rightDiagonal(){
                return this.rowIndex + this.columnIndex
        }
}

function isSafe(queensPositions, rowIndex, columnIndex){
	const newQueenPosition = new QueenPosition(rowIndex, columnIndex)
	
	for(let queenIndex = 0; queenIndex < queensPositions.length; queenIndex += 1){
		const currentQueenPosition = queensPositions[queenIndex]

		if(
		   currentQueenPosition &&
		  (
			newQueenPosition.columnIndex === currentQueenPosition.columnIndex ||
			newQueenPosition.rowIndex === currentQueenPosition.rowIndex ||
			newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal ||
			newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal
		  )
		){
		   return false
		}
	}

	return true
}	
 
queen = new QueenPosition(1, 2)

const result = isSafe([queen], 3, 0)

console.log(result)




