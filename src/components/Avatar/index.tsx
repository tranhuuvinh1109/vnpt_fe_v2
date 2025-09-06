import { UserRound } from "lucide-react";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export const Avatar = ({ src, alt, size, className }: AvatarProps) => {
  if (!src) {
    return (
      <div className={`h-fit w-fit ${className}`}>
        <UserRound size={size} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={` ${className}`} />;
};
