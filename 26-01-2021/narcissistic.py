def narcissistic(value):
    lista = []
    pot = 10**(len(str(value))-1)
    iterable_value = value
    for i in range(len(str(value))):
        lista.append(int(iterable_value//pot))
        iterable_value = iterable_value % pot
        pot = pot/10
    sum = 0
    for number in lista:
        sum += number ** len(lista)

    if sum == value:
        return True
    return False
