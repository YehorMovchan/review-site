import LogInSignIn from "./LogIn_SignIn";
import ProfileButton from "./Profile_button";
import "./../../Styles/main.css"

function Header(props) {
  let status
  if(props.status === true){
    status=<ProfileButton />;
  }
  else{
    status = <LogInSignIn />;
  }
  return <div className="header">
    {status}
    </div>
}

export default Header
