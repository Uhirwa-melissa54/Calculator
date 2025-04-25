const displayed=document.getElementById('space');

function display(value){
    displayed.value+=value;

}
function clearDisplay(){
    displayed.value="";
}
function calculate(){
    try{
        displayed.value=eval(displayed.value)
    }
    catch{
displayed.value="Sytax Error"
    }
}