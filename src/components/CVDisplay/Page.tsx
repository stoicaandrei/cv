type Props = {
  sidebar: React.ReactNode;
  body: React.ReactNode;
};

const Page = ({ sidebar, body }: Props) => {
  return (
    <div className="flex h-[29.7cm] w-[21cm] flex-row text-xs">
      <div className="flex basis-1/3 flex-col justify-start gap-6 bg-gray-700 p-5 align-middle text-gray-300">
        {sidebar}
      </div>
      <div className="basis-2/3 bg-white p-5 pr-10">
        <div className="flex h-full flex-col gap-5 overflow-hidden">{body}</div>
      </div>
    </div>
  );
};

export default Page;
