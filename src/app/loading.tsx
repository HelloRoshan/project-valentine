'use client'
import { useState,useEffect } from "react";
import Heart from './heart';
Heart

export default function LoadingButton() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hideLoadButton, hideloadscreen] = useState(false);
  const styles:  Record<string, React.CSSProperties> = {
    button: {
      position: "relative",
      overflow: "hidden",
      padding: "12px 24px",
      borderRadius: "8px",
      // border: "1px solid white",
      border: 'none',
      background: "#ff746c",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      minWidth: "200px",
      top:'30%',
      // boxShadow: '2px 2px 8px white'
    },
    text: {
      position: "relative",
      zIndex: 2
    },
    progress: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      background: "rgba(255,255,255,0.35)",
      transition: "width 0.3s ease",
      zIndex: 1
    }
  };
  useEffect(() => {
    startLoading();
})
  

  const startLoading = () => {
    if (loading) return;

    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          hideloadscreen(true)
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    
  };

  return (<>
{ !hideLoadButton &&
            <div style={{height: '100%',
                width: '100%',
                backgroundColor: '#f5cdd4',
                position: 'absolute',
                zIndex: '1',
                textAlign: 'center'}}>
                
                

            <button
            disabled={loading}
            style={styles.button}
            >
            <span style={styles.text}>
                {`Loading Feelings ❤️ ${progress}%`}
            </span>

            {loading && (
                <span
                style={{
                    ...styles.progress,
                    width: `${progress}%`
                }}
                />
            )}
            </button>
            <div>
                <Heart progress={progress} />
            </div>
            </div>
            }
            </>
    
  );
}
