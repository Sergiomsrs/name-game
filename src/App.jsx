import { useState } from "react";
// import { NAMES } from "./data/names"; // Descomenta esto cuando lo integres

export const App = () => {
  // Mock data para visualizarlo ahora (luego usa tu import NAMES)
  const [availableNames, setAvailableNames] = useState([
    { id: 1, name: "Lucas" },
    { id: 2, name: "Mateo" },
    { id: 3, name: "Enzo" },
    { id: 4, name: "Leo" },
    { id: 5, name: "Hugo" },
  ]);
  const [favorites, setFavorites] = useState([]);

  // Swipe state
  const [startX, setStartX] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentName = availableNames[0];
  const nextName = availableNames[1]; // Para el efecto visual de "siguiente carta"
  const SWIPE_THRESHOLD = 100;

  /* ============================
       LOGIC
  ============================ */
  const handleAction = (type) => {
    setIsAnimating(true);
    const direction = type === "like" ? 1 : -1;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 500;

    // Animación de salida más larga
    setTranslateX(direction * (screenWidth + 100));

    setTimeout(() => {
      if (type === "like") {
        setFavorites([currentName, ...favorites]);
      }
      setAvailableNames((prev) => prev.slice(1));
      resetCard();
    }, 300);
  };

  const resetCard = () => {
    setIsAnimating(false); // Desactivar transición para reset instantáneo
    setTranslateX(0);
    setStartX(null);
  };

  /* ============================
       TOUCH HANDLERS
  ============================ */
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsAnimating(false);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;
    const currentX = e.touches[0].clientX;
    setTranslateX(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(translateX) > SWIPE_THRESHOLD) {
      handleAction(translateX > 0 ? "like" : "discard");
    } else {
      setIsAnimating(true);
      setTranslateX(0);
    }
  };

  /* ============================
       UI HELPERS
  ============================ */
  const rotation = translateX / 15;
  const likeOpacity = Math.min(translateX / (SWIPE_THRESHOLD * 0.8), 1);
  const nopeOpacity = Math.min(Math.abs(translateX) / (SWIPE_THRESHOLD * 0.8), 1);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC] text-slate-800 font-sans selection:bg-indigo-100">

      {/* FONDO DECORATIVO (Blobs de color) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center h-full min-h-screen max-w-md mx-auto px-6 py-6">

        {/* HEADER */}
        <header className="w-full flex justify-between items-center mb-8 pt-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tighter text-slate-900">
              Baby<span className="text-indigo-600">Name</span>.
            </h1>
            <p className="text-xs font-medium text-slate-400 tracking-wide uppercase">
              Boy Edition
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/50 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600">
              {availableNames.length} restantes
            </span>
          </div>
        </header>

        {/* ZONA DE CARTAS */}
        <main className="flex-1 w-full flex items-center justify-center relative my-4">

          {availableNames.length > 0 ? (
            <div className="relative w-full aspect-[3/4] max-h-[500px]">

              {/* CARTA TRASERA (Efecto de pila) - Solo visible si hay más nombres */}
              {nextName && (
                <div className="absolute inset-0 bg-white rounded-[32px] border border-slate-100 shadow-sm transform scale-95 translate-y-4 opacity-60 pointer-events-none flex flex-col items-center justify-center">
                  <h2 className="text-4xl font-bold text-slate-300 blur-[2px]">{nextName.name}</h2>
                </div>
              )}

              {/* CARTA PRINCIPAL (INTERACTIVA) */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`
                  absolute inset-0 bg-white rounded-[32px] 
                  shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] 
                  border border-slate-50
                  flex flex-col items-center justify-center
                  cursor-grab active:cursor-grabbing touch-none
                  ${isAnimating ? "transition-transform duration-300 ease-out" : ""}
                `}
                style={{
                  transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
                }}
              >
                {/* SELLOS VISUALES AL DESLIZAR */}
                {translateX > 0 && (
                  <div
                    className="absolute top-8 left-8 border-4 border-emerald-500 text-emerald-500 text-2xl font-black px-4 py-1 rounded-lg uppercase tracking-widest -rotate-12 z-20"
                    style={{ opacity: likeOpacity }}
                  >
                    GUSTA
                  </div>
                )}
                {translateX < 0 && (
                  <div
                    className="absolute top-8 right-8 border-4 border-rose-500 text-rose-500 text-2xl font-black px-4 py-1 rounded-lg uppercase tracking-widest rotate-12 z-20"
                    style={{ opacity: nopeOpacity }}
                  >
                    NOPE
                  </div>
                )}

                {/* CONTENIDO DE LA CARTA */}
                <div className="pointer-events-none text-center p-6">
                  <div className="text-7xl mb-6 filter drop-shadow-sm">👶</div>
                  <h2 className="text-5xl font-black text-slate-800 tracking-tight mb-2">
                    {currentName.name}
                  </h2>
                  <p className="text-slate-400 font-medium text-sm">
                    ¿Te imaginas llamarlo así?
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ESTADO VACÍO */
            <div className="text-center p-10 bg-white/50 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm animate-in zoom-in duration-500">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Lista completada!</h3>
              <p className="text-slate-500 text-sm">
                Has revisado los 1000 nombres.<br />Revisa tus favoritos abajo.
              </p>
            </div>
          )}
        </main>

        {/* BOTONES DE ACCIÓN (Más claros y elegantes) */}
        <div className="flex items-center justify-center gap-8 w-full mb-6">
          <button
            onClick={() => handleAction("discard")}
            disabled={!currentName}
            className="group relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-rose-100 border border-rose-50 text-rose-500 transition-all active:scale-90 hover:scale-105 hover:bg-rose-50 disabled:opacity-50"
            aria-label="Descartar nombre"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition-transform group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={() => handleAction("like")}
            disabled={!currentName}
            className="group relative flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full shadow-xl shadow-indigo-200 text-white transition-all active:scale-90 hover:scale-105 hover:shadow-indigo-300 disabled:opacity-50"
            aria-label="Guardar nombre"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 transition-transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* FAVORITOS (Drawer Inferior) */}
        <div className={`w-full transition-all duration-500 ${favorites.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-sm">
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Favoritos guardados</h3>
              <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {favorites.length}
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {favorites.length === 0 ? (
                <p className="text-xs text-slate-400 w-full text-center italic py-2">
                  Desliza a la derecha para guardar
                </p>
              ) : (
                favorites.map((fav, i) => (
                  <div key={`${fav.id}-${i}`} className="flex-shrink-0 bg-white border border-indigo-50 px-3 py-2 rounded-xl shadow-sm animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <span className="text-sm font-bold text-slate-700">{fav.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};