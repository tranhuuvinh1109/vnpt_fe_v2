type ContainerProps = {
  children: JSX.Element;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-auto  bg-white ${className}`}>{children}</div>;
};
export default Container;
