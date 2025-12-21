import { useState } from "react"
import { NAMES } from "./data/names" // ajusta la ruta si hace falta

export const App = () => {
  /* ============================
     STATE
  ============================ */
  const [availableNames, setAvailableNames] = useState(NAMES)
  const [favorites, setFavorites] = useState([])

  // swipe state
  const [startX, setStartX] = useState(null)
  const [translateX, setTranslateX] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentName = availableNames[0]
  const SWIPE_THRESHOLD = 120

  /* ============================
     ACTIONS
  ============================ */
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
     TOUCH HANDLERS
  ============================ */
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
    setIsAnimating(false)
  }

  const handleTouchMove = (e) => {
    if (startX === null) return
    const currentX = e.touches[0].clientX
    setTranslateX(currentX - startX)
  }

  const handleTouchEnd = () => {
    if (Math.abs(translateX) > SWIPE_THRESHOLD) {
      setIsAnimating(true)

      if (translateX > 0) {
        // LIKE
        setTranslateX(400)
        setTimeout(() => {
          like()
          resetCard()
        }, 300)
      } else {
        // DISCARD
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
  }

  const resetCard = () => {
    setTranslateX(0)
    setIsAnimating(false)
  }

  /* ============================
     UI
  ============================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center px-4 pt-6">

      {/* HEADER */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          👶 NameSwipe
        </h1>

        <p className="text-sm text-gray-600 mt-1">
          Desliza para elegir el nombre perfecto
        </p>

        {/* MENSAJE BROMA */}
        <div className="mt-3 px-4 py-2 rounded-2xl bg-white/70 shadow-sm inline-block">
          <p className="text-sm font-semibold text-purple-600">
            Vamos Patricia…
          </p>
          <p className="text-xs text-gray-600">
            que no puede ser tan difícil 😅
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Quedan {availableNames.length} nombres
        </p>
      </header>


      {/* CARD AREA */}
      <main className="flex-1 flex items-center justify-center w-full">
        {currentName ? (
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`
              bg-white w-full max-w-xs rounded-3xl shadow-2xl p-10 text-center
              ${isAnimating ? "transition-transform duration-300" : ""}
            `}
            style={{
              transform: `translateX(${translateX}px) rotate(${translateX / 20}deg)`,
            }}
          >
            <h2 className="text-5xl font-bold">
              {currentName.name}
            </h2>

            {/* SWIPE HINTS */}
            <div className="flex justify-between mt-12 text-2xl opacity-40">
              <span>❌</span>
              <span>❤️</span>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold">
              🎉 No quedan más nombres
            </p>
            <p className="text-sm mt-1">
              Has revisado todos los nombres
            </p>
          </div>
        )}
      </main>

      {/* FAVORITES */}
      <section className="w-full max-w-xs mb-6">
        <h3 className="text-sm font-semibold mb-2">
          Favoritos ❤️
        </h3>

        <div className="bg-white/70 rounded-xl shadow p-3">
          {favorites.length === 0 ? (
            <p className="text-gray-400 text-xs">
              Desliza a la derecha para guardar
            </p>
          ) : (
            <ul className="space-y-1">
              {favorites.map((n) => (
                <li key={n.id} className="text-sm font-medium">
                  {n.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
