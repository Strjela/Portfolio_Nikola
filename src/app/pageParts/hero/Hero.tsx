import Navbar from "./components/NavBar";
import Intro from "./components/Intro";

export default function Hero({
  handlePageChange,
}: {
  handlePageChange: (page: number) => void;
}) {
  return (
    <>
      <div className="bg-fixed bg-hero bg-cover max-h-full max-w-full bg-no-repeat bg-center">
        <div className="min-h-screen bg-gradient-to-b from-transparent to-gray-900 z-10 ">
          <Navbar handlePageChange={handlePageChange} />
          <Intro handlePageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
}
