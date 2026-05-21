let https_status_code =404;
console.log( "Page not found");

if(https_status_code >= 200 && https_status_code <= 299){
    console.log(" success");
}

else if(https_status_code >= 300 && https_status_code <= 399){
    console.log("Redirection");
}

else if(https_status_code >= 400 && https_status_code <= 499){
    console.log("Client error");
}
else if(https_status_code >= 500 && https_status_code <= 599){
    console.log("Server error");
}   
else{
    console.log("Invalid status code");
}