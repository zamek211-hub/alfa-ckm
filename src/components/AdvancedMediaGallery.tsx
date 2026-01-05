// =============================
// src/components/AdvancedMediaGallery.tsx
// =============================
'use client';

import { useState, useEffect } from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  popular?: boolean;
  likes?: number;
  views?: number;
  category?: string;
  tags?: string[];
}

interface AdvancedMediaGalleryProps {
  items: MediaItem[];
}

export default function AdvancedMediaGallery({ items }: AdvancedMediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(false);
  const [comments, setComments] = useState<Record<number, string[]>>({});
  const [activeTab, setActiveTab] = useState<'all' | 'popular' | 'oldest' | 'newest' | 'image' | 'video'>('all');

  const tabItems = items.filter(item => {
    switch(activeTab){
      case 'popular': return item.popular;
      case 'oldest': return true;
      case 'newest': return true;
      case 'image': return item.type==='image';
      case 'video': return item.type==='video';
      default: return true;
    }
  });

  let sortedItems = [...tabItems];
  if(activeTab==='oldest') sortedItems.sort((a,b)=>a.id-b.id);
  else if(activeTab==='newest') sortedItems.sort((a,b)=>b.id-a.id);
  else if(activeTab==='popular') sortedItems.sort((a,b)=>(b.likes||0)-(a.likes||0));

  useEffect(() => {
    if (!autoplay || selectedIndex === null) return;
    const interval = setInterval(() => {
      setSelectedIndex(prev => (prev! + 1) % sortedItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay, selectedIndex, sortedItems]);

  const handleAddComment = (id: number, text: string) => {
    setComments(prev => ({
      ...prev,
      [id]: [...(prev[id] || []), text]
    }));
  };

  const selected = selectedIndex !== null ? sortedItems[selectedIndex] : null;

  const firstRow = sortedItems.slice(0,4);
  const secondRow = sortedItems.slice(4,8);
  const thumbnails = sortedItems.slice(8);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => setActiveTab('all')} className={`px-3 py-1 ${activeTab==='all'?'bg-black text-white':'bg-white text-black'}`}>Wszystkie</button>
        <button onClick={() => setActiveTab('popular')} className={`px-3 py-1 ${activeTab==='popular'?'bg-black text-white':'bg-white text-black'}`}>Najpopularniejsze</button>
        <button onClick={() => setActiveTab('oldest')} className={`px-3 py-1 ${activeTab==='oldest'?'bg-black text-white':'bg-white text-black'}`}>Najstarsze</button>
        <button onClick={() => setActiveTab('newest')} className={`px-3 py-1 ${activeTab==='newest'?'bg-black text-white':'bg-white text-black'}`}>Najnowsze</button>
        <button onClick={() => setActiveTab('image')} className={`px-3 py-1 ${activeTab==='image'?'bg-black text-white':'bg-white text-black'}`}>Zdjęcia</button>
        <button onClick={() => setActiveTab('video')} className={`px-3 py-1 ${activeTab==='video'?'bg-black text-white':'bg-white text-black'}`}>Wideo</button>
      </div>

      {/* Grid: pierwszy rząd */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {firstRow.map((item, index) => (
          <div key={item.id} className="relative cursor-pointer" onClick={() => setSelectedIndex(index)}>
            {item.type==='image' ? <img src={item.src} alt={item.alt||''} className="w-full h-48 object-cover rounded" loading="lazy"/> :
            <video src={item.src} className="w-full h-48 object-cover rounded"/>}
            {item.popular && <span className="absolute top-2 left-2 text-yellow-400 text-lg">🔥</span>}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 rounded">❤️ {item.likes||0}</div>
          </div>
        ))}
      </div>

      {/* Grid: drugi rząd */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {secondRow.map((item, index) => (
          <div key={item.id} className="relative cursor-pointer" onClick={() => setSelectedIndex(index+4)}>
            {item.type==='image' ? <img src={item.src} alt={item.alt||''} className="w-full h-48 object-cover rounded" loading="lazy"/> :
            <video src={item.src} className="w-full h-48 object-cover rounded"/>}
            {item.popular && <span className="absolute top-2 left-2 text-yellow-400 text-lg">🔥</span>}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 rounded">❤️ {item.likes||0}</div>
          </div>
        ))}
      </div>

      {/* Miniaturki */}
      <div className="grid grid-cols-4 gap-2">
        {thumbnails.map((item, index) => (
          <div key={item.id} className="relative cursor-pointer" onClick={() => setSelectedIndex(index+8)}>
            {item.type==='image' ? <img src={item.src} alt={item.alt||''} className="w-full h-24 object-cover rounded" loading="lazy"/> :
            <video src={item.src} className="w-full h-24 object-cover rounded"/>}
            {item.popular && <span className="absolute top-1 left-1 text-yellow-400 text-sm">🔥</span>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
          <div className="relative max-w-[90%] max-h-[80%]">
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={() => setSelectedIndex(null)}>×</button>
            {selected.type==='image' ? <img src={selected.src} alt={selected.alt||''} className="max-w-full max-h-full mx-auto"/> :
            <video src={selected.src} controls autoPlay className="max-w-full max-h-full mx-auto"/>}

            {/* Autoplay Play/Stop */}
            <button className="absolute top-2 left-2 bg-white text-black px-2 py-1" onClick={()=>setAutoplay(!autoplay)}>{autoplay ? 'Stop' : 'Play'}</button>

            {/* Navigation */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={() => setSelectedIndex((selectedIndex!-1+sortedItems.length)%sortedItems.length)}>‹</button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={() => setSelectedIndex((selectedIndex!+1)%sortedItems.length)}>›</button>

            {/* Miniaturki w lightboxie */}
            <div className="flex gap-2 overflow-x-auto mt-4">
              {sortedItems.map((item,i)=>(
                <img key={item.id} src={item.src} alt={item.alt||''} className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${i===selectedIndex?'border-yellow-400':'border-white/20'}`} onClick={()=>setSelectedIndex(i)} />
              ))}
            </div>

            {/* Infografika: statystyki */}
            <div className="absolute bottom-20 left-2 bg-black/70 text-white p-2 rounded text-sm">
              <p>Odsłony: {selected.views||0}</p>
              <p>Polubienia: {selected.likes||0}</p>
            </div>

            {/* Comments */}
            <div className="mt-4 max-h-48 overflow-y-auto bg-black/70 p-2 rounded text-white text-sm">
              {(comments[selected.id]||[]).length===0 && <p>Brak komentarzy</p>}
              {(comments[selected.id]||[]).map((c,i)=><p key={i}>• {c}</p>)}
              <div className="mt-2 flex gap-2">
                <input type="text" placeholder="Dodaj komentarz" id={`commentInput-${selected.id}`} className="flex-1 p-1 text-black"/>
                <button onClick={()=>{
                  const input=document.getElementById(`commentInput-${selected.id}`) as HTMLInputElement;
                  if(input && input.value){handleAddComment(selected.id,input.value);input.value='';}
                }} className="bg-white text-black px-2">Dodaj</button>
              </div>
            </div>

            {/* Pobierz */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <a href={selected.src} download className="bg-white text-black px-2 py-1">Pobierz</a>
            </div>
          </div>
        </div>
      )}

      {/* Najnowsze wydarzenia */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Najnowsze wydarzenia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sortedItems.slice(0,5).map(item=><img key={item.id} src={item.src} alt={item.alt||''} className="w-full h-32 object-cover rounded" loading="lazy"/>)}
        </div>
      </div>
    </div>
  );
}

