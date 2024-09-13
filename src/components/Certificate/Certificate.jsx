import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Certificate = ({isFlexShrink, img, title, description, issuedBy, credentialURL}) => {
  return (
    <div
      className={`${
        isFlexShrink ? "w-80 flex-shrink-0" : "w-auto bedar-sm:w-80"
      } h-full bg-white flex flex-col gap-4 rounded-lg p-3 mb-3 border border-zinc-200 shadow overflow-hidden`}
    >
      <img
        className="aspect-video rounded-lg select-none"
        src={img}
        alt="Credential-img"
      />
      <strong className="text-xl">{title}</strong>
      <div>{description}</div>
      <div className="flex justify-between">
        <div
          className="font-bold cursor-pointer"
          title={`issued by ${issuedBy}`}
        >
          {issuedBy}
        </div>
        <Link
          to={credentialURL}
          className="flex items-center gap-1 hover:text-black/70 font-semibold"
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
