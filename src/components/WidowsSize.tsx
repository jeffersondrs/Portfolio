import { useState, useEffect } from "react";

interface WindowSize {
  width?: number;
  height?: number;
}

interface AppWrapperProps {
  // eslint-disable-next-line no-unused-vars
  children: (windowSize: WindowSize) => React.ReactNode;
}

function AppWrapper({ children }: AppWrapperProps) {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {children(windowSize)}
    </div>
  );
}

interface MeuAppProps {
  windowSize: WindowSize;
}

function MeuApp({ windowSize }: MeuAppProps) {
  const { width, height } = windowSize;

  return (
    <div style={{ width, height }}>
      <form className="flex flex-col items-center justify-center w-full h-full gap-3">
        <input type="text" placeholder="Name" className="w-72 h-10" />
        <input type="text" placeholder="Email" className="w-72 h-10" />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message"
          className="w-72 h-10"
        ></textarea>
        <button className="w-40 rounded-lg h-10 font-bold text-xl bg-gradient-to-bl from-pink-500 to-purple-800  text-gray-200 hover:from-pink-600 hover:to-purple-900 transition-all duration-500 ease-in-out">
          Send
        </button>
      </form>
    </div>
  );
}

function Home() {
  return (
    <AppWrapper>
      {(windowSize) => <MeuApp windowSize={windowSize} />}
    </AppWrapper>
  );
}

export default Home;
