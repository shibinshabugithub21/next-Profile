import React, { useState, useEffect } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  required = false,
  passwordValue = "",
  setPasswordMatch,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [localError, setLocalError] = useState("");

  const passwordRules = [
    { regex: /.{8,}/, message: "At least 8 characters long" },
    { regex: /[A-Z]/, message: "At least one uppercase letter" },
    { regex: /[a-z]/, message: "At least one lowercase letter" },
    { regex: /[0-9]/, message: "At least one numeric digit" },
    { regex: /[@$!%*?&]/, message: "At least one special character" },
  ];

  const validateInput = (inputName, inputValue, passwordValue) => {
    switch (inputName) {
      case "name":
        if (!inputValue) return "Name is required";
        if (/\d/.test(inputValue)) {
          return "Name should not contain numbers";
        }
        if (!/^[A-Za-z\s]*$/.test(inputValue)) {
          return "Name should only contain letters and spaces";
        }
        break;

      case "email":
        if (!inputValue) return "Email is required";
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(inputValue)) {
          return "Invalid email format";
        }
        if (/[A-Z]/.test(inputValue)) {
          return "Only lowercase letters are allowed in email";
        }
        break;

      case "phone":
        if (inputValue && !/^\d+$/.test(inputValue)) {
          return "Phone must contain only numbers";
        }
        if (inputValue && inputValue.length < 10) {
          return "Phone number should be at least 10 digits";
        }
        if (inputValue && inputValue.length > 10) {
          return "Phone number cannot be more than 10 digits";
        }
        break;

      case "password":
        if (!inputValue) return "Password is required";
        const failedPasswordRules = passwordRules
          .filter((rule) => !rule.regex.test(inputValue))
          .map((rule) => rule.message);
        return failedPasswordRules.length > 0 ? failedPasswordRules.join(", ") : "";

      case "confirmPassword":
        if (!inputValue) return "Password confirmation is required";
        if (inputValue !== passwordValue) {
          return "Passwords do not match";
        }
        break;

      default:
        return "";
    }
    return "";
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value;

    if (name === "email" && /[A-Z]/.test(newValue)) {
      setLocalError("Only lowercase letters are allowed in email");
    } else {
      setLocalError("");
    }

    const validationError = validateInput(name, newValue, passwordValue);
    setLocalError(validationError);

    if (name === "confirmPassword") {
      if (newValue === passwordValue) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    }

    onChange(e);
  };

  const handlePaste = (e) => {
    if (name === "phone") {
      const pastedText = e.clipboardData.getData("text");
      if (/[^0-9]/.test(pastedText)) {
        e.preventDefault();
        setLocalError("Phone must contain only numbers");
      }
    }
  };

  useEffect(() => {
    if (name === "confirmPassword" && value !== passwordValue) {
      setLocalError("Passwords do not match");
    } else if (name === "confirmPassword" && value === passwordValue) {
      setLocalError("");
    }
  }, [value, passwordValue, name]);

  return (
    <div className="mb-6 relative">
      <label
        className={`absolute transition-all duration-200 ${
          isFocused || value ? "-top-6 left-0 text-xs text-blue-600" : "top-2 left-3 text-gray-500"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={handleInputChange}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={name === "phone" ? 10 : undefined}
          className={`w-full px-3 py-2 bg-transparent border-b-2 outline-none transition-all duration-300
            ${
              error || localError
                ? "border-red-500 focus:border-red-600"
                : isFocused
                ? "border-blue-500"
                : "border-gray-300 hover:border-gray-400"
            }
            ${type === "password" ? "pr-10" : ""}`}
          autoComplete={type === "password" ? "new-password" : "off"}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {name !== "confirmPassword" && (error || localError) && (
        <div className="mt-2 text-red-500 text-sm">
          <AlertCircle size={16} className="mr-1 inline-block" />
          <span>{localError || error}</span>
        </div>
      )}

      {name === "confirmPassword" && value && passwordValue && value === passwordValue && !localError && (
        <div className="mt-2 text-green-500 text-sm">
          <span>Password matches</span>
        </div>
      )}

      {name === "password" && value && (
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-semibold mb-2">Password Requirements:</p>
          <ul className="list-disc pl-5 space-y-1">
            {passwordRules.map((rule, index) => (
              <li key={index} className={value && rule.regex.test(value) ? "text-green-600" : "text-red-600"}>
                {rule.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputField;
