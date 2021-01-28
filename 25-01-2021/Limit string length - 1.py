def solution(st, limit): 
    if limit < len(st) and limit > 0:
        return st[:limit]+ "..."
    elif limit >= len(st):
        return st
    return "..."