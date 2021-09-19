"""
Algoritmo de recursión e iteración con factoriales
"""
# Implementación Iterativa
def factorial(num):
    if num < 0:
        print('factorial of negative number does not exist')
    elif num == 0:
        return 1
    else:
        factorial = 1
        while(num > 1):
            factorial *= num
            num -= 1
        return factorial

num = 5
print('Factorial of', num, 'is', factorial(num))

#Implementación Recursiva

def factorialR(num):
    return 1 if(num == 1 or num == 0) else num * factorial(num - 1)

num = 3 
print('Factorial of', num, 'is', factorial(num))


