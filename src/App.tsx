import { Button } from "@/components/ui/button";
import { Copy, Zap } from "lucide-react";
import { StepData } from "@/data/step-data";
import { TourinWeb, useTourinWeb, type TourinStep } from "tourin-web";

function App() {
  const { isRunning, startTour, stopTour } = useTourinWeb();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="w-100svw bg-gradient-to-b from-[rgba(59,130,246,0.06)] to-[rgba(99,102,241,0.02)] p-6">
        <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary to-indigo-500 shadow-md flex items-center justify-center text-white font-bold">
              TW
            </div>
            <div>
              <div className="text-lg font-semibold">Tourin Web</div>
              <div className="text-xs text-muted-foreground">
                Lightweight web tours library
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button
              className="ml-2"
              size="sm"
              onClick={() =>
                window.open(
                  "https://github.com/firlyafriansyah/tourin-web",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Get Started
            </Button>
            <Button
              className="ml-2"
              size="sm"
              onClick={() =>
                window.open(
                  "https://stackblitz.com/edit/tourin-web",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Stackblitz
              <Zap />
            </Button>
          </nav>
        </header>

        <main className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <section className="relative w-full rounded-2xl overflow-hidden py-16 px-8 bg-gradient-to-b from-white/70 to-white/30 dark:from-card dark:to-card flex flex-col items-center text-center shadow-lg">
            <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-primary/40 to-indigo-200 blur-3xl opacity-70 mix-blend-multiply"></div>
            <div className="pointer-events-none absolute -bottom-20 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-pink-300 to-amber-300 blur-2xl opacity-60 mix-blend-screen"></div>

            <div data-tour="welcome" className="p-8">
              <h1 className="text-6xl md:text-7xl font-extrabold font-poppins mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                Tourin Web
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tourin Web is a lightweight and easy-to-use guided tour library
                for React applications — perfect for onboarding users or
                highlighting features on your web app.
              </p>

              <div className="flex gap-4 mt-8 justify-center">
                <Button
                  className="px-6 py-3 text-lg shadow-lg"
                  size="lg"
                  onClick={() => startTour()}
                >
                  Start Tour
                </Button>
              </div>
            </div>

            <div className="mt-10 w-full gap-4">
              <div
                data-tour="install"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border mb-4"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">
                      INSTALL
                    </p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() => copyToClipboard("npm install tourin-web")}
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">{`npm install tourin-web`}</pre>
                </div>
              </div>

              <div
                data-tour="import"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border mb-4"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">IMPORT</p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() =>
                        copyToClipboard(`
import { TourinWeb, useTourinWeb, type TourinStep } from "tourin-web"
import { StepData } from "step-data.ts"
                        `)
                      }
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">
                    {`
import { TourinWeb, useTourinWeb, type TourinStep } from "tourin-web"
import { StepData } from "step-data.ts"
                    `}
                  </pre>
                </div>
              </div>

              <div
                data-tour="hooks"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border mb-4"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">HOOKS</p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() =>
                        copyToClipboard(
                          "const { isRunning, startTour, stopTour } = useTourinWeb()"
                        )
                      }
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">{`const { isRunning, startTour, stopTour } = useTourinWeb()`}</pre>
                </div>
              </div>

              <div
                data-tour="start"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border mb-4"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">START</p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() =>
                        copyToClipboard(
                          "<button onClick={() => startTour()}>Start Tour</button>"
                        )
                      }
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">{`<button onClick={() => startTour()}>Start Tour</button>`}</pre>
                </div>
              </div>

              <div
                data-tour="usage"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border mb-4"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">USAGE</p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() =>
                        copyToClipboard(`
'''
<div data-tour="target">Target Element</div>
<button data-tour="target-click">Target Click</button>
...

{isRunning && StepData && (
  <TourinWeb
    start
    size="md"
    color="#3b82f6"
    onFinish={stopTour}
    steps={StepData as TourinStep[]}
  />
)}
'''
                        `)
                      }
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">
                    {`
'''
<div data-tour="target">Target Element</div>
<button data-tour="target-click">Target Click</button>
...

{isRunning && StepData && (
  <TourinWeb
    start
    size="md"
    color="#3b82f6"
    onFinish={stopTour}
    steps={StepData as TourinStep[]}
  />
)}
'''
                    `}
                  </pre>
                </div>
              </div>

              <div
                data-tour="step-data"
                className="items-center gap-4 bg-secondary/50 backdrop-blur-sm py-4 px-6 rounded-xl border"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="text-xs font-semibold text-primary">
                      STEP DATA EXAMPLE
                    </p>
                    <button
                      className="opacity-100 transition-opacity hover:bg-primary/20 p-1 rounded-sm"
                      onClick={() =>
                        copyToClipboard(`
export const StepData = [
  {
    selector: "[data-tour='target']",
    title: "Tooltip Title",
    content: "Describe your step here, that easy right?",
  },
  {
    selector: "[data-tour='target-click']",
    title: "You can click you target",
    content: "You need click on you tour, no problem we already preapre for that",
    action: 'click',
    delayed: 'short'
  },
];
                        `)
                      }
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <pre className="font-mono text-sm text-start overflow-x-auto whitespace-pre bg-transparent">
                    {`
export const StepData = [
  {
    selector: "[data-tour='target']",
    title: "Tooltip Title",
    content: "Describe your step here, that easy right?",
  },
  {
    selector: "[data-tour='target-click']",
    title: "You can click you target",
    content: "You need click on you tour, no problem we already preapre for that",
    action: 'click',
    delayed: 'short'
  },
];
                    `}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {isRunning && StepData && (
        <TourinWeb
          start
          onFinish={stopTour}
          steps={StepData as TourinStep[]}
          color="#3b82f6"
          size="md"
        />
      )}
    </>
  );
}

export default App;
