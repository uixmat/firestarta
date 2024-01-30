interface LogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  fill?: string;
}

const MongodbLogo: React.FC<LogoProps> = ({
  fill,
  className,
  ...props
}: LogoProps) => {
  const svgClass = className ? ` ${className}` : "";
  return (
    <svg
      height="1rem"
      viewBox="0 0 18 18"
      className={`${svgClass}`}
      fill={fill}
      {...props}
    >
      <path
        d="M10.7913 2.00623C10.0325 1.1099 9.37911 0.199572 9.24562 0.0105038C9.23157 -0.00350126 9.21049 -0.00350126 9.19644 0.0105038C9.06294 0.199572 8.40953 1.1099 7.65073 2.00623C1.13772 10.2762 8.67652 15.8572 8.67652 15.8572L8.73975 15.8992C8.79596 16.7606 8.93647 18 8.93647 18H9.21751H9.49855C9.49855 18 9.63907 16.7676 9.69528 15.8992L9.7585 15.8503C9.76554 15.8503 17.3043 10.2762 10.7913 2.00623ZM9.21751 15.7312C9.21751 15.7312 8.88027 15.4441 8.78894 15.297V15.283L9.19644 6.27777C9.19644 6.24975 9.2386 6.24975 9.2386 6.27777L9.64609 15.283V15.297C9.55475 15.4441 9.21751 15.7312 9.21751 15.7312Z"
        fill={fill}
      />
    </svg>
  );
};
export default MongodbLogo;
