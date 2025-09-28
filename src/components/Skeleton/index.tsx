type SkeletonProsp = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProsp) => {
  return (
    <div className={`relative min-h-10 w-full overflow-hidden rounded-lg bg-gray-300 ${className}`}>
      <div className="absolute left-[-100px] top-0 h-full w-[100px] animate-reflect bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
};

export default Skeleton;
