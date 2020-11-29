
:
'
A 25 27 50
B 35 75
C 75 78
D 99 88 76

Not all scores are available for B
Not all scores are available for C
'



awk '{if (NF < 4){print "Not all scores are available for "$1}}'


:'
A 25 27 50
B 35 37 75
C 75 78 80
D 99 88 76

A : Fail
B : Fail
C : Pass
D : Pass'

awk '{print $1,":", ($2<50||$3<50||$4<50) ? "Fail" : "Pass"}'

'
A 25 27 50
B 35 37 75
C 75 78 80
D 99 88 76

A 25 27 50;B 35 37 75
C 75 78 80;D 99 88 76'


awk 'ORS=NR%2?";":"\n"''


# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76
#
# A 25 27 50 : FAIL
# B 35 37 75 : FAIL
# C 75 78 80 : B
# D 99 88 76 : A

awk ' {avg=($2+$3+$4)/3; print $0, ":", (avg<50)?"FAIL":(avg<80)?"B":"A"}'
