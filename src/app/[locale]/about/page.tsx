import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">O nas</h1>
      <p className="mb-6">
        Alfa-CKM to chrześcijański klub motocyklowy, który łączy pasję do motocykli z wartościami chrześcijańskimi.
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="/members" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Dołącz do nas</Link>
        <Link href="/media" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Zobacz galerię</Link>
      </div>

      {/* Sekcja historii / misji */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Nasza misja</h2>
        <p>
          Celem Alfa-CKM jest integracja pasjonatów motocykli i promowanie wartości chrześcijańskich poprzez wspólne wypady, szkolenia i wydarzenia.
        </p>
      </section>

      {/* Sekcja zdjęcia / video */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/assets/images/photo1.jpg" alt="Wypady motocyklowe" className="w-full h-48 object-cover rounded"/>
        <img src="/assets/images/photo2.jpg" alt="Szkolenia" className="w-full h-48 object-cover rounded"/>
        <video src="/assets/videos/video1.mp4" controls className="w-full h-48 object-cover rounded"/>
      </section>
    </div>
  );
}
