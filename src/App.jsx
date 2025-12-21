import { useState } from "react"

export const App = () => {
  /* ============================
     DATA
  ============================ */
  const NAMES = [
    { id: 1, name: "Lucas", origin: "Latín", meaning: "Portador de luz" },
    { id: 2, name: "Sofía", origin: "Griego", meaning: "Sabiduría" },
    { id: 3, name: "Mateo", origin: "Hebreo", meaning: "Regalo de Dios" },
    { id: 4, name: "Valentina", origin: "Latín", meaning: "Valiente" },
    { id: 5, name: "Leo", origin: "Latín", meaning: "León" },
    { id: 6, name: "Emma", origin: "Germánico", meaning: "Fuerza" },
  ]

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
    setFavorites([...favorites, currentName])
    setAvailableNames(availableNames.slice(1))
  }

  const discard = () => {
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
        <h1 className="text-2xl font-extrabold">
          👶 NameSwipe
        </h1>
        <p className="text-sm text-gray-600">
          Desliza para elegir el nombre perfecto
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
              bg-white w-full max-w-xs rounded-3xl shadow-2xl p-8 text-center
              ${isAnimating ? "transition-transform duration-300" : ""}
            `}
            style={{
              transform: `translateX(${translateX}px) rotate(${translateX / 20}deg)`,
            }}
          >
            <h2 className="text-4xl font-bold mb-2">
              {currentName.name}
            </h2>

            <p className="text-xs text-gray-500">
              {currentName.origin}
            </p>

            <p className="mt-4 text-gray-600 italic text-sm">
              “{currentName.meaning}”
            </p>

            {/* SWIPE HINTS */}
            <div className="flex justify-between mt-10 text-2xl opacity-40">
              <span>❌</span>
              <span>❤️</span>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold">
              🎉 No quedan más nombres
            </p>
          </div>
        )}
      </main>

      {/* FAVORITES */}
      <section className="w-full max-w-xs mb-6">
        <h3 className="text-sm font-semibold mb-2">
          Favoritos
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
