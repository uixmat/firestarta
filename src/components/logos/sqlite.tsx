interface LogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  fill?: string;
}

const SqliteLogo: React.FC<LogoProps> = ({
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
      <path d="M16.4227 1.57656C14.2237 -0.619998 10.739 -0.700857 7.5535 2.48113C4.78986 5.2416 5.40967 4.62285 4.53885 5.49262C2.4133 7.61571 2.0642 10.7952 2.3015 12.9166L8.57479 6.64996C8.79486 6.43024 9.15135 6.43024 9.37107 6.64996C9.5908 6.86969 9.5908 7.22582 9.37107 7.44555L0.247324 16.5598C-0.0824414 16.8892 -0.0824414 17.4236 0.247324 17.753C0.57709 18.0824 1.11217 18.0824 1.44193 17.753L3.76576 15.4316C5.60443 15.9839 9.80842 16.0704 12.4434 13.5002H8.99139L14.1794 11.7726C15.9369 10.0172 15.4584 10.5006 15.8075 10.1252H12.3699L16.9944 8.58531C18.5919 5.96758 18.2006 3.35266 16.4227 1.57656Z" />
    </svg>
  );
};
export default SqliteLogo;
