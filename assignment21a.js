let allUsers = [
				{'email' : 'sachin' ,
				'password' : '1234'}]

let email = "sachin"
let password = "1234";

//function for user login
let checkLogin = (email,password,allUsers)=>{
	let isUserFound = false;
	let isPasswordCorrect = false;

	for(currentUser of allUsers){

		if(currentUser.email == email){

			if(currentUser.password == password){
				isUserFound = true;
				isPasswordCorrect = true;
				break;
			}
			else{
				isUserFound = true;
				isPasswordCorrect = false;
				break;
			}
			}
		else{
			isUserFound = false;
		}
		}//end of for

		if(isUserFound == true && isPasswordCorrect == true){
			alert(`You are logged in`);
		}
		else if(isUserFound == true && isPasswordCorrect == false){
			alert(`You have entered the wrong password`);
		}
		else{
			alert(`No user found with that email`)
		}
	}

checkLogin(email,password,allUsers)