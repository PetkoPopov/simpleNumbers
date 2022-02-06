<?php

require_once './index.php';
$i=1;
//kk
$two = -1 ;
$counter =0 ;
while($counter != $n  ){
    $i+=2;
    
    $two ++;
    
    if($two == 3  ){
        
    $two =0;
    continue;
    }
    
    echo $i .'--';
   if(isThatNumberIsSimple($i))$counter++;
    
    
}
$time_final=time();
$time = ($time_final - $time_start())*60;
echo $time ."time to exe";