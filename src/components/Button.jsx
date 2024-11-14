import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, target, type }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
  ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";
  const _blank = `${target ? "_blank" : ""}`

  const renderButton = () => (
    <button className={classes} onClick={onClick} target={_blank} type={type}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderlink = () => (
    <a href={href} className={classes} target={_blank} type={type}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderlink() : renderButton();
};

export default Button;
 