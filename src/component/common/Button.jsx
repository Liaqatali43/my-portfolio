// const Button = ({
//   Children,
//   variant = "primary",
//   className,
//   onClick,
//   ...props
// }) => {
//   const variants = {
//     primary: "bg-[#8B5CF6] text-white ",
//   };

//   const base = "px-4 py-2 rounded-md font-medium";
//   return (
//     <button
//       onClick={onclick}
//       className={`${variants[variant]} ${base} ${className}`}
//       {...props}
//     >
//       {Children}
//     </button>
//   );
// };

// export default Button;

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  ...props
}) => {
  const base = "px-5 py-3 rounded-lg font-medium";

  const styles = {
    primary: "bg-[#8B5CF6] text-white",
    secondary: "bg-transparent text-white hover:border-[#8B5CF6]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
