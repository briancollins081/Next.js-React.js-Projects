// import { getSession } from "next-auth/client";
// import { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(async () => {
  //   const session = await getSession();
  //   if (!session) {
  //     window.location.href = "/auth";
  //   }else{
  //     setIsLoading(false);
  //   }
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }
  const handleOnChangePassword = async ({ oldpassword, newpassword }) => {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify({ newpassword, oldpassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm handleOnChangePassword={handleOnChangePassword} />
    </section>
  );
}

export default UserProfile;
