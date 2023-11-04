1 1 = if
    ;"One is equal to one!"; log 
else
    ;"One is not equal to one!"; log
close

10
loop
    dup log
    dup 0 = if break close
    1 -
close