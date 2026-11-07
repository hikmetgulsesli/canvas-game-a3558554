// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play screen - Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayScreenCanvasGameActionId = "start-game-1";

export interface PlayScreenCanvasGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayScreenCanvasGameActionCallbacks = NonNullable<PlayScreenCanvasGameProps["actions"]>;

export function PlayScreenCanvasGame({ actions }: PlayScreenCanvasGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_SCREEN */}
        <div data-surface-id="SURF_PLAY_SCREEN" className="min-h-screen flex flex-col justify-between p-6 lg:p-10 max-w-7xl mx-auto" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_ROUTE_REMAINS_PLAY">
          
          {/* Top Header */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                C
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">Canvas Game</h1>
                <p className="text-xs font-medium text-slate-400">Play Route / Arcade Arena</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Ready to Play
              </span>
            </div>
          </header>
      
          {/* Scoreboards & Status Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {/* High Score Display Surface */}
            <div data-surface-id="SURF_HIGH_SCORE_PANEL" className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between" data-setfarm-element-ref="E000002">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">High score</div>
                <div className="flex items-baseline space-x-2" data-setfarm-element-ref="E000003" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_PERSISTED">
                  <span className="text-4xl font-extrabold tracking-tight text-amber-400">0</span>
                  <span className="text-xs font-medium text-slate-500 uppercase">PTS</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Personal best score recorded</p>
            </div>
      
            {/* Score Display Surface */}
            <div data-surface-id="SURF_SCORE_PANEL" className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between" data-setfarm-element-ref="E000004">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Score</div>
                <div className="flex items-baseline space-x-2" data-setfarm-element-ref="E000005" role="status" aria-label="Score" data-observable-refs="OBS_START_GAME_SCORE_VALUE_ZERO">
                  <span className="text-4xl font-extrabold tracking-tight text-cyan-400">0</span>
                  <span className="text-xs font-medium text-slate-500 uppercase">PTS</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Current game round score</p>
            </div>
      
            {/* Game Status Surface */}
            <div data-surface-id="SURF_STATUS_PANEL" className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between" data-setfarm-element-ref="E000006">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Status</div>
                <div className="flex items-center space-x-2" data-setfarm-element-ref="E000007" role="status" aria-label="Game started" data-observable-refs="OBS_START_GAME_GAME_STARTED_TEXT">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xl font-bold tracking-tight text-white">Game started</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Canvas session active</p>
            </div>
          </section>
      
          {/* Main Interactive Arena Surface */}
          <main className="flex-1 flex flex-col bg-slate-900/60 rounded-3xl border border-slate-800/80 p-6 lg:p-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Arena Header with declared action control */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-4 border-b border-slate-800/60">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">Interactive Arena</h2>
                <p className="text-sm text-slate-400">Press start to initiate the canvas graphics loop</p>
              </div>
              <div>
                {/* Physical control slot: CSLOT_START_GAME_START_BUTTON */}
                <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-colors duration-150 cursor-pointer" data-setfarm-element-ref="E000008" data-observable-refs="OBS_START_GAME_START_BUTTON_ENABLED OBS_START_GAME_START_BUTTON_VISIBLE" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  Start game
                </button>
              </div>
            </div>
      
            {/* Contained Game Canvas Surface */}
            <div data-surface-id="SURF_GAME_CANVAS" className="w-full flex-1 min-h-[440px] rounded-2xl border border-slate-800 bg-slate-950/80 relative flex flex-col items-center justify-center overflow-hidden" data-setfarm-element-ref="E000009">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)", backgroundSize: "24px 24px"}}></div>
              
              {/* Central Graphics Surface Placeholder Graphic */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-sm">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">Interactive Canvas Surface</span>
                <span className="text-xs text-slate-400 mt-1">Render area 1920x1080 resolution virtual viewport</span>
              </div>
      
              {/* Canvas Diagnostic Footer */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 pointer-events-none">
                <span>CANVAS_RENDERER: READY (60 FPS)</span>
                <span>COORD: [0, 0]</span>
              </div>
            </div>
          </main>
      
          {/* Footer Chrome */}
          <footer className="pt-6 mt-4 flex items-center justify-between text-xs text-slate-400">
            <div>Canvas Game Arcade Client</div>
            <div>Route: /play</div>
          </footer>
        </div>
    </>
  );
}
