import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Certificate = ({ isFlexShrink, img, title, description, issuedBy, credentialURL }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={`${
        isFlexShrink && "w-[300px] flex-shrink-0"
      } h-full bg-mainColor text-white flex flex-col gap-4 rounded-lg p-3 mb-4 border border-zinc-200 shadow overflow-hidden`}
    >
      <img
        className={`aspect-video rounded-lg select-none ${isLoading ? "skeleton" : ""}`}
        src={img}
        onLoad={()=> setIsLoading(false)}
        alt="Credential-img"
      />
      <strong className="text-xl text-[#fedf89]">{title}</strong>
      <div className="line-clamp-6 ">{description}</div>
      <div className="flex justify-between">
        <div
          className="font-bold cursor-pointer "
          title={`issued by ${issuedBy}`}
        >
          {issuedBy}
        </div>
        <Link
          to={credentialURL}
          className="flex items-center gap-1 hover:text-white/65 transition-colors ease-linear font-semibold"
          title="View Credential"
        >
          <IoEyeSharp className="w-6 h-6" />
          View
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
