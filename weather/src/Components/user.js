import { useUser } from "@clerk/clerk-react";

function User({weather}) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
return( 
<div className="header-intro">
  <h3>Hello, {user.fullName}! Welcome to your weather account!</h3>
  <h3> Current City you are viewing is {weather?.location?.name}, {weather?.location?.region}, {weather?.location?.country}</h3>
  </div>
)}

export default User
 