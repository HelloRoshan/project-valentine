'use client'

export default function Heart({ progress }: { progress: number }) {
    return (
      <svg
        width="50"
        height="300"
        viewBox="0 0 50 10"
        style={{ display: "inline" }}
      >
        {/* Outline */}
        <path
          d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0
             C3.8,0,0,3.8,0,8.4c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2
             C32,3.8,28.2,0,23.6,0z"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        />
  
        {/* Filled part */}
        <clipPath id="heartClip">
          <path
            d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0
               C3.8,0,0,3.8,0,8.4c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2
               C32,3.8,28.2,0,23.6,0z"
          />
        </clipPath>
  
        <rect
          x="0"
          y={`${29.6 - (29.6 * progress) / 100}`}
          width="32"
          height={(29.6 * progress) / 100}
          fill="#ef4444"
          clipPath="url(#heartClip)"
          style={{ transition: "all 0.3s ease" }}
        />
      </svg>
    );
  }
  