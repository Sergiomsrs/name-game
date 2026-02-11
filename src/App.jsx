import { useState } from "react"
import { NAMES_BOYS, NAMES_GIRLS } from "./data/names"

export const App = () => {
  /* ============================
     STATE
  ============================ */
  const [gender, setGender] = useState("boy")
  const [availableNames, setAvailableNames] = useState(NAMES_BOYS)
  const [favorites, setFavorites] = useState([])

  // swipe state
  const [startX, setStartX] = useState(null)
  const [translateX, setTranslateX] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const currentName = availableNames[0]
  const SWIPE_THRESHOLD = 80

  /* ============================
     ACTIONS
  ============================ */
  const switchGender = (newGender) => {
    setGender(newGender)
    setAvailableNames(newGender === "boy" ? NAMES_BOYS : NAMES_GIRLS)
    setFavorites([])
  }

  const like = () => {
    if (!currentName) return
    setFavorites([...favorites, currentName])
    setAvailableNames(availableNames.slice(1))
  }

  const discard = () => {
    if (!currentName) return
    setAvailableNames(availableNames.slice(1))
  }

  /* ============================
     HANDLERS
  ============================ */
  const handleStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX)
    setIsAnimating(false)
    setIsDragging(true)
  }

  const handleMove = (e) => {
    if (startX === null || !isDragging) return
    const currentX = e.touches ? e.touches[0].clientX : e.clientX
    setTranslateX(currentX - startX)
  }

  const handleEnd = () => {
    if (!isDragging) return

    if (Math.abs(translateX) > SWIPE_THRESHOLD) {
      setIsAnimating(true)

      if (translateX > 0) {
        // LIKE (derecha)
        setTranslateX(400)
        setTimeout(() => {
          like()
          resetCard()
        }, 300)
      } else {
        // DISCARD (izquierda)
        setTranslateX(-400)
        setTimeout(() => {
          discard()
          resetCard()
        }, 300)
      }
    } else {
      // volver al centro
      setIsAnimating(true)
      setTranslateX(0)
    }

    setStartX(null)
    setIsDragging(false)
  }

  const resetCard = () => {
    setTranslateX(0)
    setIsAnimating(false)
  }

  /* ============================
     UI
  ============================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center px-4 pt-8 pb-8">

      {/* DECORATIVE CIRCLES BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-2xl">

        {/* HEADER */}
        <header className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-6xl drop-shadow-lg">👶</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            NameSwipe
          </h1>

          <p className="text-lg text-gray-600 font-medium mb-6">
            Encuentra el nombre perfecto para tu bebé
          </p>

          {/* GENDER SELECTOR */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => switchGender("boy")}
              className={`group relative px-8 py-3 rounded-2xl font-bold text-lg transition-all duration-300 transform ${gender === "boy"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-300 scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300"
                }`}
            >
              👦 Niño
            </button>
            <button
              onClick={() => switchGender("girl")}
              className={`group relative px-8 py-3 rounded-2xl font-bold text-lg transition-all duration-300 transform ${gender === "girl"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300 scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-pink-300"
                }`}
            >
              👧 Niña
            </button>
          </div>

          {/* PROGRESS INDICATOR */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            <p className="text-sm font-semibold text-gray-600">
              {availableNames.length} nombres disponibles
            </p>
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          </div>
        </header>

        {/* CARD AREA */}
        <main className="relative w-full flex items-center justify-center mb-10" style={{ height: "480px" }}>
          {currentName ? (
            <div className="w-full px-4">
              <div
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                className={`bg-white w-full rounded-3xl shadow-2xl p-8 text-center flex flex-col justify-between items-center cursor-grab active:cursor-grabbing relative overflow-hidden select-none
                  ${isAnimating ? "transition-transform duration-300" : ""}
                `}
                style={{
                  transform: `translateX(${translateX}px) rotate(${translateX / 25}deg)`,
                  minHeight: "400px",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
              >
                {/* DECORATIVE ELEMENTS */}
                <div className={`absolute top-4 right-4 text-4xl transition-opacity duration-200 ${translateX > 50 ? "opacity-100" : "opacity-0"}`}>
                  ❤️
                </div>
                <div className={`absolute top-4 left-4 text-4xl transition-opacity duration-200 ${translateX < -50 ? "opacity-100" : "opacity-0"}`}>
                  ✨
                </div>

                {/* NAME */}
                <div className="flex-1 flex items-center justify-center">
                  <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight break-words px-4">
                    {currentName.name}
                  </h2>
                </div>

                {/* SWIPE HINTS */}
                <div className="w-full">
                  <div className="flex justify-between items-end px-4 mb-4">
                    <div className="text-center">
                      <p className="text-3xl mb-2">✨</p>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Descartar</p>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-full"></div>
                    <div className="text-center">
                      <p className="text-3xl mb-2">❤️</p>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Favorito</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 px-6">
              <p className="text-6xl mb-4">🎉</p>
              <p className="text-3xl font-bold text-gray-800 mb-2">
                ¡Finalizaste!
              </p>
              <p className="text-gray-600 mb-6">
                Has revisado todos los nombres
              </p>
              <button
                onClick={() => {
                  setGender("boy")
                  setAvailableNames(NAMES_BOYS)
                  setFavorites([])
                }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                Comenzar de nuevo
              </button>
            </div>
          )}
        </main>

        {/* FAVORITES SECTION */}
        <section className="w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-white/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">❤️</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Tus Favoritos
              </h3>
              <span className="ml-auto bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {favorites.length}
              </span>
            </div>

            {favorites.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">
                  Desliza a la derecha para guardar nombres que te gusten
                </p>
                <p className="text-gray-300 text-xs mt-2">💡 Tip: Puedes volver a cambiar de género</p>
              </div>
            ) : (
              <div className="space-y-2">
                {favorites.map((n, idx) => (
                  <div
                    key={n.id}
                    className="group bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 rounded-xl p-4 flex items-center justify-between transition-all cursor-pointer border border-pink-100 hover:border-pink-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-pink-500 min-w-6">{idx + 1}.</span>
                      <span className="text-lg font-bold text-gray-800">{n.name}</span>
                    </div>
                    <button
                      onClick={() => setFavorites(favorites.filter((f) => f.id !== n.id))}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
