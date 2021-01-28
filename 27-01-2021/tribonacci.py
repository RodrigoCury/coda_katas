def tribonacci(signature, n):
    if n == 0:
        return []
    if n == 1:
        return [signature[0]]
    if n == 2:
        return [signature[0], signature[1]]
    if n == 3:
        return signature
    for i in range(3, n):
        signature.append(signature[i-1]+signature[i-2]+signature[i-3])
    return signature
