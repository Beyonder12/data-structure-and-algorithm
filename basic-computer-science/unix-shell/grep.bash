grep "the"
grep -iw "the"


grep -viw 'that'

# -v   : Invert the sense of matching
# -i   : Ignore case distinctions
# -w   : Match only those lines containing the whole word

grep -iw -e "the" -e "that" -e "then" -e "those" #the word contain like left side

grep '\([0-9]\) *\1' #find at least one repetition number
