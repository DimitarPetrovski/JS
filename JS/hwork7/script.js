

function creatTable(row = 6, col = 6) {
    var table = "<table style ='margin-left: auto;margin-right: auto; border-collapse: collapse; width: 70%; ' >";
    document.write(table);
  
    for (var h = 1; h < parseInt(col); h++) {
  
      th = "<th style='border: 3px solid #ddd;padding: 8px; padding-top: 12px;padding-bottom: 12px;text-align: center;background-color: orange;'>" + "I\'m Header";
      document.write(th);
  
      th += "</th>";
  
    }
  
    for (var i = 1; i < parseInt(row); i++) {
  
      tr = "<tr style='background: ; :hover{background: #ffff99}'>";
      document.write(tr);
  
      tr += "</tr>";
  
      for (var j = 1; j < parseInt(col); j++) {
  
        td = "<td style='border: 3px solid #ddd; padding: 8px;'>" + "Row.Colum/" + i + "," + j;
        document.write(td);
  
        td += "</td>";
  
      }
  
      tr += "</tr>";
    }
  
    table = "</table>";
  
  }
  
  console.log(creatTable())