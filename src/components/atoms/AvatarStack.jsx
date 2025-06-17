const AvatarStack = ({ items }) => {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`size-[56px] rounded-full border-[3px] border-[#16172D] flex items-center justify-center ${index !== 0 ? 'ml-[-15px]' : ''}`}
          style={{ background: item.gradient || item.bg || 'transparent' }}
        >
          {item.img ? (
            <img
              className="rounded-full w-full h-full object-cover"
              src={item.img}
              alt={`avatar-${index}`}
            />
          ) : (
            item.icon || null
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarStack;
