def scramble(s1, s2):
    letter_map = {}
    for letter in s1:
        if not letter in letter_map:
            letter_map[letter] = 0
        letter_map[letter] += 1

    for letter in s2:
        if letter in letter_map and letter_map[letter] > 0:
            letter_map[letter] -= 1
        else:
            return False

    return True
