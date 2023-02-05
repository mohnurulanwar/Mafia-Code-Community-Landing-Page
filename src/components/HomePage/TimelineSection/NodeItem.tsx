/* eslint-disable @typescript-eslint/restrict-template-expressions */

type NodeItemProps = {
  title: string;
  icon: JSX.Element;
  liIdx: number;
};

const NodeItem = ({ title, icon, liIdx }: NodeItemProps) => {
  const isEven = (num: number) => num % 2 === 0;
  // const IconTag = `${icon}` as keyof JSX.IntrinsicElements;
  return (
    <>
      <div className={`item-${liIdx}`}>
        {!isEven(liIdx) ? (
          <div className={`flex items-center justify-end`}>
            <div className="mr-4 flex w-20 flex-col-reverse items-center gap-8 md:mr-0 md:w-full md:flex-row md:justify-end md:gap-0 ">
              <p className="pr-0 text-lg font-medium text-white md:pr-3 md:text-2xl xl:text-3xl">
                {title}
              </p>
              <div className="circle-icon">
                {/* <IconTag color="white" size={45} className="absolute" /> */}
                {icon}
              </div>
            </div>

            <div className="from h-[0.2rem] w-8 bg-gradient-to-l from-[#ff1cf7] to-[#8F008E] md:w-12 xl:w-16" />
          </div>
        ) : (
          <div className={`flex  items-center justify-start`}>
            <div
              className={`from h-[0.2rem] w-8 bg-gradient-to-r from-[#ff1cf7] to-[#8F008E] md:w-12 xl:w-16`}
            />
            <div className="ml-4 flex w-20 flex-col items-center gap-8 md:ml-0 md:w-full  md:flex-row md:gap-0">
              <div className="circle-icon">
                {/* <IconTag color="white" size={45} className="absolute" /> */}
                {icon}
              </div>
              <p className="text-lg font-medium text-white md:pl-3 md:text-2xl xl:text-3xl">
                {title}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NodeItem;
