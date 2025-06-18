const IconBadge = ({ icon, circleBg, borderColor }) => {
  return (
    <div className="bg-union bg-no-repeat bg-auto p-3 absolute min-w-[85px] min-h-[76px] left-[-32px] top-0 bg-right-center">
      <div
        className={`size-[51px] rounded-full absolute right-[7px] overflow-hidden flex items-center justify-center ${circleBg}`}
        style={{ border: `1px solid ${borderColor}` }}
      >
        <div className="absolute inset-0 opacity-[60%] mix-blend-overlay bg-repeat z-0 pointer-events-none bg-auto bg-general-noise" />
        <div className="absolute inset-0 opacity-[8%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download" />
        {icon}
      </div>
    </div>
  );
};

export default IconBadge;
