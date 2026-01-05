// src/components/MediaGallery.tsx

'use client';


import { useState } from 'react';


interface MediaItem {
type: 'image' | 'video';
src: string;
alt?: string;
}


interface MediaGalleryProps {
items: MediaItem[];
}


export default function MediaGallery({ items }: MediaGalleryProps) {
const [selected, setSelected] = useState<MediaItem | null>(null);


return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{items.map((item, index) => (
<div
key={index}
className="cursor-pointer border border-white/20 rounded overflow-hidden"
onClick={() => setSelected(item)}
>
{item.type === 'image' ? (
<img src={item.src} alt={item.alt || ''} className="w-full h-auto object-cover" />
) : (
<video src={item.src} className="w-full h-auto object-cover" />
)}
</div>
))}


{selected && (
<div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
<div className="relative max-w-[90%] max-h-[90%]">
<button
className="absolute top-2 right-2 text-white text-2xl"
onClick={() => setSelected(null)}
>
×
</button>
{selected.type === 'image' ? (
<img src={selected.src} alt={selected.alt || ''} className="max-w-full max-h-full" />
) : (
<video src={selected.src} controls autoPlay className="max-w-full max-h-full" />
)}
</div>
</div>
)}
</div>
);
}