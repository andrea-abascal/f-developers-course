"""
Imprimir en pantalla números del 1 a N
Si el número es divisible entre 3 imprimimos Fizz
Si el número es divisible entre 5 imprimimos Buzz
Si el número es divisible entre 3 y 5 imprimimos FizzBuzz
"""
"""
Se declara una función que tenga un argumento de un número
aqui se hara un ciclo para iterar el número number hasta un número N
"""
def fizzBuzz(number):
    for i in range (1, number + 1):
        if i % 3 == 0 and i % 5 == 0:
            print(FizzBuzz)
        elif i % 3 == 0:
            print(Fizz)
        elif i % 5 == 0:
            print(Buzz)
        else:
            print(i)

"""
En la función anterior se repiten varias cosas y lo importante al programar es
el principio de Don´t Repeat Yourself, por lo que se crea esta nueva función
más eficiente
"""
def fizzBuzz2(number):
    for i in range( 1, number + 1):
        fizz = 'Fizz' if i % 3 == 0 else ''
        buzz = 'Buzz' if i % 5 == 0 else ''
        print(f'{fizz}{buzz}' or i)

fizzBuzz2(30)

