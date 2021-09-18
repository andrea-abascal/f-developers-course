/*Haz depositado a tu cuenta bancaria una cantidad especifica de dinero (deposit).
 * Cada año tu saldo incrementa a la misma tasa de crecimiento (rate).
 * Asumiendo que no haces depósitos adicionales,
 * averigua cuánto tiempo le tomaría a tu saldo superar un umbral específico (threshold).
 *
 * Ejemplo:
 *
 * Para:
 * deposit = 100
 * rate = 20
 * threshold = 170
 *
 * la salida debe ser
 * depositProfit(deposit, rate, threshold) = 3
 *
 * Cada año la cantidad de dinero en tu cuenta crece 20%
 * así que con los años el saldo quedaría de la siguiente manera:
 *
 * - year 0: 100
 * - year 1: 120
 * - year 2: 144
 * - year 3: 172.8
 *
 * Por lo que tomaría 3 años alcanzar el objetivo.
 */

function depositProfit(deposit, rate, threshold){
	let count = 0
	const growthRate = rate * 0.01

	while(deposit < threshold){
		let interest = deposit * growthRate
		console.log(`year: ${count} currently in the account ${deposit}`)
		deposit = deposit + interest
		count += 1
	}
	console.log(`year: ${count} currently in the account ${deposit}`)
	
	return count
}

const result = depositProfit(100, 20, 170)
console.log(result)
