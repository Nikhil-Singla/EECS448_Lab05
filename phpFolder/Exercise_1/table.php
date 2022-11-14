<!DOCTYPE html>
<html>
    <?php
        $RowOpen = "    <tr>\n";
        $RowClose = "   </tr>\n";
        $CellOpen = "   <td>";
        $CellClose = "  </td>\n";
        $TableContainer = "";
        $length = 100;
        $firstCell = "  <td class=\"col\">";
        
        echo "<tr class=\"firstRow\">\n<td></td>\n";
        for ($i = 1; $i <= $size; $i++) 
        {
            echo "<td>$i</td>\n";
        }
        echo "</tr>\n";

        for($i = 1; $i<=$length; $i++)
        {
            $TableContainer += $RowOpen;
            $TableContainer += $firstCell + $i + $RowClose;
            
            for($j=1; $j<=$length; $j+=1)
            {
                $TableContainer += $CellOpen + ($i*$j) + $RowClose;
            }
            $TableContainer += $RowClose;
        }
        echo $TableContainer;
    ?>
</html>