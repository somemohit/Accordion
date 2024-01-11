import Accordion from "./Components/Accordion";
import { questions } from "./dummyData";

function App() {
  return (
    <div className="bg-[#748dad] h-screen p-4 md:p-10 flex justify-center">
      <div className="w-full md:w-8/12 lg:w-7/12">
        <h1 className="text-2xl text-[#dae1eb] font-semibold text-center">
          Accordion
        </h1>

        {questions?.map((data) => (
          <Accordion key={data.id} title={data.title} info={data.info} />
        ))}
      </div>
    </div>
  );
}

export default App;
