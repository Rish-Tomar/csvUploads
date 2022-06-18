function fileValidator(){
    var fileInput = document.getElementById('file');    
    var filePath = fileInput.value;
    var allowedExtensions =
                    /(\.csv)$/i;

    if(!allowedExtensions.exec(filePath)){
        alert('Invalid File Type ');
        fileInput.value ='';
        return false
    }
    
    return true;
}