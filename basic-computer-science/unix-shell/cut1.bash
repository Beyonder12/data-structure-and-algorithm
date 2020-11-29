: '
 ASCII is American Standard Code for Information Interchange
 character encoding standard for electronic communication
COMMENT
'
while read line
do
echo $line | cut -c3-
done
