def to_jaden_case(string):
    word_list = string.split(" ")
    for i in range(len(word_list)):
        word_list[i] = word_list[i].capitalize()
    print(word_list)
    return " ".join(word_list)
