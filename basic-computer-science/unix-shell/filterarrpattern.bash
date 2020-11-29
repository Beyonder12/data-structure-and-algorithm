filter with a or A pattern

arr=($(cat))
echo ${arr[@]/*[aA]*/}
