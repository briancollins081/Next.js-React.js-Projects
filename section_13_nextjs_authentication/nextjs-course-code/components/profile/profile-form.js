import { useState } from "react";
import classes from "./profile-form.module.css";

function ProfileForm({ handleOnChangePassword }) {
  const [formState, setFormState] = useState({
    newpassword: "",
    oldpassword: "",
  });
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleOnChangePassword(formState);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={formState.newpassword}
          onChange={({ target: { value: newpassword } }) => {
            setFormState({ ...formState, newpassword });
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input
          type="password"
          id="old-password"
          value={formState.oldpassword}
          onChange={({ target: { value: oldpassword } }) => {
            setFormState({ ...formState, oldpassword });
          }}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
