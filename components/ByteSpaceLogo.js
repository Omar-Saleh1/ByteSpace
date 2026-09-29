export default function ByteSpaceLogo({ className = "w-9 h-9", showText = true, textColor = "text-white" }) {
  return (
    <div className="inline-flex items-center space-x-2.5 group cursor-pointer select-none">
      {/* Exact Stylized 'b' Logo Mark from Figma (Transparent Cutout) */}
      <svg className={className} viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Stem Leaf */}
        <path
          d="M9 2C4 2 0 6.5 0 13V34C0 39.5 4.5 44 10 44C13.5 44 16 41 16 36V13C16 6.5 13 2 9 2Z"
          fill="#C6FF00"
        />
        {/* Right Bowl with Curved Negative Space Cutout */}
        <path
          d="M16 12C28 12 39 19 39 28.5C39 37.5 28 44 16 44C13 44 10.5 43 8.5 41C15 37 19.5 28 14.5 18C14 16 15 13.5 16 12Z"
          fill="#C6FF00"
        />
      </svg>

      {showText && (
        <span className={`text-2xl font-black tracking-tight ${textColor}`}>
          Byte<span className="font-extrabold">Space</span>
        </span>
      )}
    </div>
  );
}
