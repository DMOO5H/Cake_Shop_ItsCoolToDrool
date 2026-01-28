import { useEffect } from 'react';

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <img src={src} alt={alt} className="w-full h-auto object-contain" />
          <div className="p-3 text-right">
            <button
              onClick={onClose}
              className="inline-block px-4 py-2 bg-rose-400 text-white rounded hover:bg-rose-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
