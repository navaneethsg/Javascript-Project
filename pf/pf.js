var detail = ["Name : Navaneeth S Govind" , "Age : 24" , "Place : Cherthala,Kerala,India"]
var name1 = document.getElementById("n")
let index = 0
function showdetails(){
    index++
    console.log(detail[index])
    if(index > detail.length - 1){
        console.log(index)

        index = 0

        
       } 
       console.log(index)
       name1.innerHTML = detail[index]
       
       
       
    


}
