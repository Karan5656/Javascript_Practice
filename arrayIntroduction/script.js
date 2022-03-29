function getPageContent(page){
    const targetDiv = document.getElementById(page)
    let childLength = document.getElementById('content').children.length

    for(i=3;i<childLength*4;i=i+4){
       if(document.getElementById('content').childNodes[i].style.display === 'block'){
        document.getElementById('content').childNodes[i].style.display = 'none'
      }
    }

    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    } else {
      targetDiv.style.display = "block";
    }
  }