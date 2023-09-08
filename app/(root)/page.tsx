import { BiShoppingBag } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl sm:text-8xl md:text-9xl text-center font-bold mt-12">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Brainstorm.
        </span>
        <span className="block">Collaborate.</span>
        Create.
      </h1>
      <p className="text-center text-[#444444] dark:text-[#B1B1B1] mt-5 text-sm mb-10">
        Co-Dev allows developers to collaborate on projects in a more social
        environment.
      </p>
      <div className="xl:px-48 mb-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10">
          Start with an idea
        </h3>
        <div className="grid grid-flow-row md:grid-cols-2 space-y-4 mt-4 text-[#444444] dark:text-[#B1B1B1] gap-x-12 md:space-y-0 mb-8">
          <p className="row-span-1 md:col-span-1">
            Co-Dev allows developers who are interested in your idea help bring
            your dream to reality. Easily communicate through Voice Chat or
            Instant Messaging.
          </p>
          <p className="row-span-1 md:col-span-1">
            Every project starts with an idea. create any project of your
            imagination.
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-2 mt-4 space-y-4 gap-x-12  md:space-y-0">
          <div className="row-span-1 md:col-span-1 bg-zinc-900 rounded-md px-2">
            <div className="flex space-x-2 py-3">
              <div className="bg-red-500 w-5 h-5 rounded-full"></div>
              <div className="bg-yellow-500 w-5 h-5 rounded-full"></div>
              <div className="bg-green-500 w-5 h-5 rounded-full"></div>
            </div>
            <div>
              <div className="flex">
                <div className="p-2  rounded-full bg-black w-fit">
                  <BiShoppingBag className="h-5 w-5 mx-0.5" />
                </div>
                <div className="py-2 px-2">
                  <div className="h-2 bg-white w-14 rounded-lg"></div>
                  <div className="h-2 mt-2 bg-zinc-800 w-20 rounded-lg"></div>
                </div>
              </div>
              <div className="bg-zinc-800 h-10 md:h-20 rounded-md my-2"></div>
            </div>
          </div>
          <div className="row-span-1 md:col-span-1 flex flex-col space-y-2 mt-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Start with an idea
            </h3>
            <p className="text-[#444444] dark:text-[#B1B1B1]">
              Create your dream project with professional developers or help a
              beginner.
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Showcase your idea
            </h3>
            <p className="text-[#444444] dark:text-[#B1B1B1]">
              Easily showcase the amazing project you've built.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
