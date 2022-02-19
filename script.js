function ans()
{
  if(document.getElementById("inputx").value=="" || document.getElementById("inputy").value=="")
  {
    alert("either of x or y is empty");
    return;
  }

  var numOne, numTwo;
  numOne = parseInt(document.getElementById("inputx").value);
  numTwo = parseInt(document.getElementById("inputy").value);

  if(numTwo==0)
  {
    alert("the denominator y cannot be 0");
    return;
  }
  
  quo = parseInt(numOne/numTwo);
  rem= numOne%numTwo;
  document.getElementById("outputx").value=quo;
  document.getElementById("outputy").value=rem;
  

  var sum=numOne+numTwo;
  console.log(sum);
}

function reset()
{
  numOne = document.getElementById("inputx").value="";
  numTwo = document.getElementById("inputy").value="";
  document.getElementById("outputx").value=0;
  document.getElementById("outputy").value=0;
}

function click1()
{
  if(document.getElementById("inputy").focus==true)
  {
    console.log(1);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"1";
  }
  else
  {
    console.log(1);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"1"; 
  }
}

function click2()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(2);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"2";
  }
  else
  {
    console.log(2);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"2"; 
  }
}

function click3()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(3);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"3";
  }
  else
  {
    console.log(3);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"3"; 
  }
}

function click4()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(4);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"4";
  }
  else
  {
    console.log(4);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"4"; 
  }
}

function click5()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(5);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"5";
  }
  else
  {
    console.log(5);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"5"; 
  }
}


function click6()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(6);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"6";
  }
  else
  {
    console.log(6);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"6"; 
  }
}

function click7()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(7);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"7";
  }
  else
  {
    console.log(7);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"7"; 
  }
}

function click8()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(8);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"8";
    
  }
  else
  {
    console.log(8);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"8"; 
  } 
}

function click9()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(9);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"9";
  }
  else
  {
    console.log(9);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"9"; 
  }
}

function click0()
{
  if(document.getElementById("inputx").focus)
  {
    console.log(0);
    document.getElementById("inputx").value=document.getElementById("inputx").value+"0";
    
  }
  else
  {
    console.log(0);
    document.getElementById("inputy").value=document.getElementById("inputy").value+"0"; 
  }
}

