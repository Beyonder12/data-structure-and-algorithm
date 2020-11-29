: '

Hello
World
how are you

Hello
World


'

#!/usr/bin/env #!/usr/bin/env bash

IFS=""
while read line; do
  echo -e "$line" | cut -f-3
done
