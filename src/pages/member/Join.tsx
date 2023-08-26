import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Join() {
  const { register, watch, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleJoin = () => {
    navigate("");
  };
  return (
    <form onSubmit={handleSubmit(handleJoin)}>
      <label htmlFor="join-email-input">Email Address</label>
      <input
        id="join-email-input"
        type="email"
        {...register("email")}
        placeholder="Email Address"
      />
      <label htmlFor="join-nickname-input">Nick Name</label>
      <input
        id="join-nickname-input"
        type="text"
        {...register("nickname")}
        placeholder="Nick Name"
      />
      <label htmlFor="join-password-input">Password</label>
      <div>
        <input
          id="join-password-input"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <button type="button" onClick={handleTogglePassword}>
          {showPassword ? (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-password"
            >
              visibility
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-off-password"
            >
              visibility_off
            </span>
          )}
        </button>
      </div>
      <button
        type="submit"
        disabled={
          !watch("email") ||
          !watch("password") ||
          !watch("nickname") ||
          !watch("passwordCheck")
        }
      >
        Join Us
      </button>
    </form>
  );
}

export default Join;
