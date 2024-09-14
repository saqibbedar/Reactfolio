const PageTitle = ({title}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-2xl font-semibold">{title}</div>
      <hr className="h-[1px] w-full bg-zinc-200 border-none" />
    </div>
  );
};

export default PageTitle;
