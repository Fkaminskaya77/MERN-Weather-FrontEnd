import { useUser } from "@clerk/clerk-react";

function User() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
return( 
<div>
  Hello, {user.fullName}! Welcome to your weather account!
  </div>
)}

export default User
