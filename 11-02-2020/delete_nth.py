import numpy as np


def delete_nth(order, max_e):
    sortedOrder = sorted(order)
    for pos in range(len(sortedOrder)-max_e):
        if sortedOrder[pos] == sortedOrder[pos+max_e]:
            ocurrences = [n for n, i in enumerate(
                order) if i == sortedOrder[pos]]
            count = 0
            for posicao in range(max_e, len(ocurrences)):
                order.pop(ocurrences[posicao] - count)
                count += 1
    return order


print(delete_nth([20, 37, 20, 21, 20], 1))
print()
print(delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))
