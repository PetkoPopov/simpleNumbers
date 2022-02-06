<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form>
            <input type="number" name="number" value="<?php
            if (isset($_GET['number']))
                echo $_GET['number'];
            else
                echo 17;
            ?>"><!-- comment -->
            <input type="submit" value="calc"><!-- comment --> 

        </form>
        <?php
            set_time_limit(20000);
            $time_start= time();
        class isItSimple {

            public $number;
            private $is_simple = true;

            public function __construct($number) {
                $this->number = $number;
            }

            public function isSimple(): bool {
                if ($this->number % 2 == 0) {
                    $this->is_simple = false;
                    return false;
                }
                for ($i = 3; $i < $this->number; $i++) {

                    if ($this->number % $i == 0) {
                        $this->is_simple = false;
                        break;
                    };

                    $i++;
                }

                if ($this->is_simple) {
                    return true;
                } else {
                    return false;
                }
            }

        }


        function isThatNumberIsSimple($n) {
            
            if($n == 1 || $n == 2 || $n == 3 || $n == 5){return true;}
            elseif($n%2 == 0 ){return false;}
        elseif($n%3 == 0 ){return false;}
            elseif($n%5 == 0 ){return false;}
            
            for($i = 3 ; $i< $n ; $i ++){

                if($n % $i == 0  ){
                    return false;
                }
               
                       $i++;
            }
           return true; 
        }

        
        
        function findAllNumbers($bigNumber,$i=1) {
            $counter = 0;
      
            while($counter != $bigNumber){
                if(isThatNumberIsSimple($i)){
                    echo $i.' - ';
                    
                    
                    $counter++;
                    
                }
                
                $i+=2;
        }    
            
            return $i;
            
        }
        
        ////////
        ////////
        if (isset($_GET['number'])) {
           $n= $_GET['number'];
       
//        findAllNumbers($n);
        } 
        ?>
        
    </body>
</html>
