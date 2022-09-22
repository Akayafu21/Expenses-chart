var Local_JSON=[];
var Maximun_value=0;
var Maximun_id = '';

const style = document.createElement("style");
document.head.appendChild(style);

fetch("../data.json")
    .then(response => response.json())
    .then(data => getData(data));

getData = (data) => {
    Local_JSON = data;
}



// run all time
onmouseover =()=>{
    if(Local_JSON.length>0){
        // console.log(Local_JSON)
        Maximun();  
        setMaximun();
        for (let i = 0; i < Local_JSON.length; i++) {
            setBar(Local_JSON[i].day,Local_JSON[i].amount)
            showValue(Local_JSON[i].day,Local_JSON[i].amount)
        }
    }
}






setBar =(id,height)=>{
    let day = document.getElementById(id);
    day.style.height = toPersentage(height)+'%'
    
}

Maximun = () =>{
    for (let i = 0; i < Local_JSON.length; i++) {
        if(Maximun_value < Local_JSON[i].amount){
            Maximun_value = Local_JSON[i].amount;
            Maximun_id = Local_JSON[i].day;
        }
    }
}

toPersentage = (day) =>{
    let pt_day = day/Maximun_value * 100;
    return pt_day.toFixed(0);
}

showValue = (id,value) =>{
    style.innerHTML += "#"+id+":hover::after {content :'$ "+value+"';}"
}

setMaximun = () =>{
    style.innerHTML += "#"+Maximun_id+"{background-color: var(--Cyan);}"
    style.innerHTML += "#"+Maximun_id+":hover {background-color: var(--Cyan-Tran);}"
}