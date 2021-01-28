def count_bits(n):
    sum = 0
    bytes = bin(n)
    for bit in bytes:
        if bit == '1':
            sum += 1
    return sum
