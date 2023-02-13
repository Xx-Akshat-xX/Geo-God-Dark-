function cube() {
  const side = prompt("Side: ");

  let answer = 6 * side * side;
  document.getElementById("total_surface_area").value =
    "Total Surface Area : " + answer + " m^2";

  let answer2 = side * Math.sqrt(3);
  document.getElementById("curved_surface_area").value =
    "Diagonals : " + answer2 + " m^2";

  let answer3 = side * side * side;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  let answer4 = 4 * side * side;
  document.getElementById("lateral_surface_area").value =
    "Lateral Surface Area : " + answer4 + " m^2";

  document.getElementById("playground").value = `
    Total Surface Area: 6 × side × side
                      = 6 × ${side} × ${side}
                      = ${answer}
                      
    Diagonal: √3 side
            = ${side}√3

    Volume: side^3
           = ${side} × ${side} × ${side}
           = ${answer3}
           
    Lateral Surface Area: 4 side^2
                         = 4 × ${side} × ${side}
                         = ${answer4}`;
}

function cuboid() {
  // Total Surface Area
  var l = parseFloat(prompt("Length: "));
  var b = parseFloat(prompt("Breadth: "));
  var h = parseFloat(prompt("Height: "));

  let answer = 2 * (l * b + l * h + b * h);
  document.getElementById("total_surface_area").value =
    "Total Surface Area : " + answer + " m^2";

  let answer2 = Math.sqrt(l * l + b * b + h * h);
  document.getElementById("curved_surface_area").value =
    "Diagonals : " + answer2 + " m^2";

  let answer3 = l * b * h;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  let answer4 = 2 * (l + b) * h;
  document.getElementById("lateral_surface_area").value =
    "Lateral Surface Area : " + answer4 + " m^2";

  document.getElementById("playground").value = `
    Total Surface Area: 2( lb + lh + bh )
                        = 2( ${l} × ${b} + ${l} × ${h} + ${h} × ${b} )
                        = 2( ${l * b + l * h + h * b} ) 
                        = ${answer}
                        
    Diagonal: √l^2 + b^2 + h^2
            = √${l * l} + ${b * b} + ${h * h}
            = ${answer2}
            
    Volume: lbh
        	= ${l} × ${b} × ${h}
            = ${answer3}
            
    Lateral Surface Area: 2 (l+b)h
                        = 2( ${l} + ${b} ) ${h}
                        = ${answer4}`;
}

function cylinder() {
  let r = parseFloat(prompt("Radius: "));
  let h = parseFloat(prompt("Height: "));

  answer1 = ((2 * 22) / 7) * r * (h + r);
  document.getElementById("total_surface_area").value =
    "Total Surface Area : " + answer1 + " m^2";

  answer2 = ((2 * 22) / 7) * r * h;
  document.getElementById("curved_surface_area").value =
    "Curved Surface Area : " + answer2 + " m^2";

  answer3 = (22 / 7) * (r * r) * h;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  document.getElementById("lateral_surface_area").value =
    "Lateral Surface Area : " + answer2 + " m^2";

  document.getElementById("playground").value = `
  Total Surface Area: 2 π r ( h + r )
                    = 2 × 22/7 × ${r} ( ${h} + ${r} )
                    = ${answer1}
  
  Curved Surface Area: 2 πrh
                     = 2 × 22/7 × ${r} × ${h}
                     = ${answer2}
  
  Volume = π r^2 h
         = 22/7 × ${r} × ${r} × ${h}   
         = ${answer3}                
  `
}

function sphere() {
  var r = parseFloat(prompt("Radius: "));

  answer1 = ((4 * 22) / 7) * r * r;
  document.getElementById("total_surface_area").value =
    "Surface Area : " + answer1 + " m^2";

  answer3 = (((4 / 3) * 22) / 7) * r * r * r;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  document.getElementById("lateral_surface_area").value = "...";

  document.getElementById("curved_surface_area").value = "...";

  document.getElementById("playground").value =
    `
    Total Surface Area: 4 π r^2
                      = 4 × 22/7 × ${r}^2
                      = ${answer1}
    
    Volume: 4/3 π r^3
            = 4/3 × 22/7 × ${r}^3
            = ${answer3}`
}

function cone() {
  var l = parseFloat(prompt('Slant Height  (If no type "0"): '));
  var r = parseFloat(prompt("Radius: "));
  var h = parseFloat(prompt("Height (If no type 'x'): "));
  if (h == "x" && l != 0) {
    h = Math.sqrt(r * r + l * l);
  }

  answer1 = (22 / 7) * r * (l + r);
  document.getElementById("total_surface_area").value =
    "Surface Area : " + answer1 + " m^2";

  answer2 = (22 / 7) * r * l;
  document.getElementById("curved_surface_area").value =
    "Curved Surface Area : " + answer2 + " m^2";

  answer3 = (((1 / 3) * 22) / 7) * r * r * h;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  document.getElementById("lateral_surface_area").value = "...";

  document.getElementById("playground").value = `
    Total Surface Area: π r ( l + r )
                       = 22/7 × ${r} (${l} + ${r})
                       = ${answer1}
                       
    Volume: 1/3 π r^2 h
            = 1/3 × 22/7 × ${r} × ${r} × ${h}
            = ${answer3}
    
    Curved Surface Area: π r l
                        = 22/7 × ${r} × ${l}
                        = ${answer2}
    `;
}

function hemisphere() {
  var r = parseFloat(prompt('Radius: '))
  answer1 = ((3 * 22) / 7) * r * r;
  document.getElementById("total_surface_area").value =
    "Surface Area : " + answer1 + " m^2";

  answer2 = ((2 * 22) / 7) * r * r;
  document.getElementById("curved_surface_area").value =
    "Curved Surface Area : " + answer2 + " m^2";

  answer3 = (((2 / 3) * 22) / 7) * r * r * r;
  document.getElementById("volume").value = "Volume : " + answer3 + " m^3";

  document.getElementById("lateral_surface_area").value = "null";

  document.getElementById("playground").value = `
  Total Surface Area: 3 π r2
                    = 3 × 22/7 × ${r}²
                    = ${answer1}
  
  Curved Surface Area: 2 π r2
                      = 2 × 22/7 × ${r}²
                      = ${answer2}
  
  Volume: 2/3 π r^3
         = 2/3 × 22/7 × ${r}^3
         = ${answer3}           `
}

function heron() {
  var a = parseFloat(prompt('Side 1 : '))
  var b = parseFloat(prompt('Side 2 : '))
  var c = parseFloat(prompt('Side 3 : '))
  perimeter = a + b + c
  let semi_perimeter = perimeter / 2
  area = Math.sqrt((semi_perimeter * ((semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c))))

  document.getElementById("playground").value = `
  a = ${a}
  b = ${b}
  c = ${c}
  perimeter = ${a} + ${b} + ${c}
            = ${perimeter}
  
  semi perimeter = ${perimeter} / 2
                = ${semi_perimeter}
  
  area = √s(s-a)(s-b)(s-c)
        = √${semi_perimeter} × (${semi_perimeter}-${a}) × (${semi_perimeter}-${b}) × (${semi_perimeter}-${c})
        = √${semi_perimeter} × (${semi_perimeter - a}) × (${semi_perimeter - b}) × (${semi_perimeter - c})
        = √${semi_perimeter} × ${(semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c)} 
        = √${semi_perimeter * ((semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c))}
        = ${area}
  `

  document.getElementById("total_surface_area").value = "Area = " + (area)
  document.getElementById("volume").value = "...";
  document.getElementById("lateral_surface_area").value = "...";
  document.getElementById("curved_surface_area").value =
  "...";
}
