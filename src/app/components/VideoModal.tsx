// components/VideoModal.tsx
'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> {/* ← updated to 50% */}
      <div className="relative w-full max-w-2xl mx-4">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Video Player"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-100 rounded-full px-2"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default VideoModal;