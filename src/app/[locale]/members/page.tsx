export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-200 flex items-center justify-center px-6">
      <div className="max-w-md w-full border border-yellow-300/20 p-8 space-y-6 text-center">

        {/* TITLE */}
        <h1 className="text-3xl tracking-widest text-yellow-300/80">
          MEMBERS
        </h1>
        <p className="text-sm text-yellow-200/60 uppercase tracking-wider">
          Strefa klubowa ALFA-CKM
        </p>

        {/* MESSAGE */}
        <p className="text-sm text-yellow-200/60">
          Dostęp wyłącznie dla członków klubu.
        </p>

        {/* LOGIN PLACEHOLDER */}
        <div className="space-y-4 pt-4">
          <input
            type="text"
            placeholder="Login"
            className="w-full bg-black border border-yellow-300/30 px-3 py-2 text-sm text-yellow-200
                       placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-300/70"
          />
          <input
            type="password"
            placeholder="Hasło"
            className="w-full bg-black border border-yellow-300/30 px-3 py-2 text-sm text-yellow-200
                       placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-300/70"
          />
          <button
            className="w-full border-2 border-yellow-300/70 text-yellow-300/70 py-2 text-sm
                       hover:bg-yellow-300 hover:text-black transition"
          >
            Zaloguj
          </button>
        </div>

        {/* INFO */}
        <p className="text-xs text-yellow-200/40 pt-4">
          Funkcja logowania zostanie uruchomiona w kolejnym etapie projektu.
        </p>

      </div>
    </div>
  );
}
