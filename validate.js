function isNum(value){
	return !isNaN(value)
}
function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13) {
    return false;
	if (length==13 & isNum(nid)){
		return true;
	if (length<=13 & isNaN(ind))
		return false;
	}
  } else {
	return true;
	return false;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}