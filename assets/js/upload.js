function fileValidator(data){
    var fileInput = document.getElementById('file');    
    var filePath = fileInput.value;
    var allowedExtensions =
                    /(\.csv)$/i;

    if(!allowedExtensions.exec(filePath)){
        alert('Invalid File Type, use ".csv"');
        return false
    }
    
    return true;
}