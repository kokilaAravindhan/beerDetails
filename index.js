
window.onload=function(){
    var button = document.getElementById("btnfetch");
    button.addEventListener("click",beer,true);
  }

async function beer(){
    
    var datepick=document.getElementById("inputDt").value;

    if(datepick==""){
        alert("Kindly enter the date");
    }
    console.log(datepick.split("-"));
    var date=datepick.split("-");
    var urldate=date[1]+"-"+date[0];
    //console.log(urldate);
    let url=   `https://api.punkapi.com/v2/beers?brewed_before=${urldate}`;
    console.log(url);
    let res=await fetch(url);
    let res1=await res.json();
    //console.log(res1);
    for(var i in res1){
        var div=document.createElement("div");
        div.setAttribute("class","row");
        div.style.textAlign="center";
        div.id="inpRows";
        var div1=document.createElement("div");
        div1.setAttribute("class","col-sm-2");
        div1.innerHTML=res1[i].id;

        //var p1=document.createElement("p");
        //p1.innerHTML=res1[i].id;

        var div2=document.createElement("div");
        div2.setAttribute("class","col-sm-2");
        div2.innerHTML=res1[i].name;

        //var p2=document.createElement("p");
        //p2.innerHTML=res1[i].name;

        var div3=document.createElement("div");
        div3.setAttribute("class","col-sm-2");
        div3.innerHTML=res1[i].first_brewed;

        var div4=document.createElement("div");
        div4.setAttribute("class","col-sm-3");
        div4.innerHTML=res1[i].food_pairing;

        var div5=document.createElement("div");
        div5.setAttribute("class","col-sm-3");
        
        var image=document.createElement("img");
        image.setAttribute("src",res1[i].image_url);
        image.style.width="100px";
        image.style.height="100px";
        

     //   console.log(res1[i].image_url)
        div5.append(image)
        div.append(div1,div2,div3,div4,div5);
        document.body.append(div);    
        
    }

}
//}
