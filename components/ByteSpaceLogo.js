export default function ByteSpaceLogo({ className = "w-9 h-9", showText = true, textColor = "text-white" }) {
  return (
    <div className="inline-flex items-center space-x-2.5 group cursor-pointer">
      {/* Exact Stylized 'b' Logo Mark from Figma */}
      <svg className={className} viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C5.37258 2 0 7.37258 0 14V38C0 44.6274 5.37258 50 12 50H26C38.1503 50 48 40.1503 48 28C48 15.8497 38.1503 6 26 6H18V14C18 7.37258 15.3268 2 12 2Z"
          fill="#C6FF00"
        />
        {/* Inner Curved Wedge Cutout */}
        <path
          d="M18 18C18 18 36 20 34 34C32 44 22 42 18 42V18Z"
          fill="#C6FF00"
        />
        <path
          d="M18 24C18 24 30 26 26 36C22 40 18 38 18 38V24Z"
          fill="#0052FF"
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
