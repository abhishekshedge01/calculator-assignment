$(document).ready(function()
{
    var val1=0;
    var val2=0;
    var val3=0;
    var vala=0;
    $(".value4").text(0);

    $(".type").click(function()
      {
        $(".value4").text("");
        $(".delete").css("pointer-events","auto");
        if($(".value2").text()!="")
        {
          $(".symbie").css("pointer-events","none");
          $(".equals").css("pointer-events","auto");
            val3=$(this).text();
            $(".value3").append(val3);
            val3=$(".value3").text();
            console.log(val3);
        }

        else if($(".value1").text()=="")
        {
            $(".symbie").css("pointer-events","auto");
            vala=$(this).text();
            $(".value1").append(vala);
            val1=$(".value1").text();
            console.log(val1);
        }

        else if($(".value1").text()!="")
        {
            $(".symbie").css("pointer-events","auto");
            vala=$(this).text();
            $(".value1").append(vala);
            val1=$(".value1").text();
            console.log(val1);
        }
    })


    $(".symbie").click(function()
      {
        val2=$(this).text();
        $(".value2").empty().append(val2);
        val2=$(".value2").text();
    })


    $(".delete").click(function()
        {
          if($(".value3").text()!="")
          {
              $(".value3").empty();
              val3=0;
              $(".equals").css("pointer-events","none");
          }
          else if($(".value2").text()!="")
          {
              $(".value2").empty();
              val2=0;
          }
          else if($(".value1").text()!="")
          {
              $(".value1").empty();
              val1=0;
              $(".value4").text(0);
          }
    })

    let ans=0;
    $(".equals").click(function()
        {
          $(".equals").css("pointer-events","none");
            if($(".value2").text()=="+")
            {
              ans=Number($(".value1").text())+Number($(".value3").text());
            }
            else if($(".value2").text()=="-")
            {
              ans=Number($(".value1").text())-Number($(".value3").text());
            }
            else if($(".value2").text()=="*")
            {
              ans=Number($(".value1").text())*Number($(".value3").text());
            }
            else if($(".value2").text()=="/")
            {
              ans=Number($(".value1").text())/Number($(".value3").text());
            }
            $(".value1").empty();
            $(".value2").empty();
            $(".value3").empty();
            $(".value1").text(ans);
            val3=0;
            val2=0;
            val1=$(".value1").text();
            console.log(val1);
            $(".symbie").css("pointer-events","auto");
        })

      $(".classcan").click(function()
      {
        $(".value1").empty();
        $(".value2").empty();
        $(".value3").empty();
        val3=0;
        val2=0;
        val1=0;
        $(".value4").text(0);
        $(".symbie").css("pointer-events","none");
      })
})