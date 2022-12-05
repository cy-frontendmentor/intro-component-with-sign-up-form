import Form from "../components/form/form";

const page = () => {
  return (
    <div className=" max-w-[1110px] px-6 pt-[5.5rem] pb-[4.25rem] md:p-0">
      <div className="grid gap-y-16 md:grid-cols-2 md:content-center md:items-center md:justify-between md:gap-y-0 md:gap-x-[45px]">
        <header className="grid max-w-[525px] gap-y-4 text-center md:self-center md:text-left">
          <h1 className=" text-[28px] font-bold leading-9 -tracking-[0.29px] text-white md:text-[50px] md:leading-[55px] md:-tracking-[0.52px]">
            Learn to code by watching others
          </h1>
          <p className=" text-base font-medium leading-[26px] text-white">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </header>
        <main className="grid max-w-[540px] gap-y-6">
          <div className=" rounded-[10px] bg-blue py-4 px-[66px] drop-shadow-[0_8px_0_rgba(0,0,0,0.1469)] ">
            <h2 className="text-center  text-white ">
              <span className=" font-bold">Try it free 7 days </span>then
              $20/mo. thereafter
            </h2>
          </div>
          <Form></Form>
        </main>
      </div>
    </div>
  );
};

export default page;
