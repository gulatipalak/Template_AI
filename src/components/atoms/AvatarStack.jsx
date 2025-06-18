const AvatarStack = ({ items }) => {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`size-[56px] rounded-full border-[3px] border-[#16172D] flex items-center justify-center relative overflow-hidden ${index !== 0 ? 'ml-[-15px]' : ''}`}
          style={{ background: item.gradient || item.bg || 'transparent' }}
        >
          {item.img ? (
            <>
            <div className="absolute inset-0 opacity-[15%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download" />
            <img
              className="rounded-full w-full h-full object-cover"
              src={item.img}
              alt={`avatar-${index}`}
            />
            </>
          ) : (
            <div className="absolute top-[23%]">
              {item.icon || null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarStack;
