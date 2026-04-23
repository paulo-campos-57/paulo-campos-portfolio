import Header from "../components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />

          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-white text-4xl text-center leading-tight text-bold">
              Paulo Campos
            </h1>
            <p className="text-gray-400 text-lg text-center text-semi-bold">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
