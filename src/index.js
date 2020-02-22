module.exports = function toReadable (number) {
    let one = ["one","two","three","four","five","six","seven","eight","nine"];
    let dozens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let hundreds = ["one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"];
    let  arr = (String(number)).split("");
    let str=[];
    if(number==0){
        return "zero";
    }
    if(number==11){
        return "eleven";
    }
    if(number==12){
        return "twelve";
    }
    if(number==13){
        return "thirteen";
    }
    if(number==14){
        return "fourteen";
    }
    if(number==15){
        return "fifteen";
    }
    if(number==16){
        return "sixteen";
    }
    if(number==17){
        return "seventeen";
    }if(number==18){
        return "eighteen";
    }
    if(number==19){
        return "nineteen";
    }
    



    if(arr.length==3){
        str[0]= hundreds[(+arr[0]-1)];
        str[1]= dozens[+arr[1]-1];
        str[2]= one[+arr[2]-1];  
    } else if(arr.length==2) {
        str[0]= dozens[+arr[0]-1];
        str[1]= one[+arr[1]-1];
    } else if(arr.length==1) {
        str[0]= one[+arr[0]-1];
    }
    
    let a =str.join(" ");
    if(a[a.length-1]==" "){
      a= a.slice(0, -1);
    }
    if(a[a.length-1]==" "){
        a= a.slice(0, -1);
    }
    return a;
  
  
}
