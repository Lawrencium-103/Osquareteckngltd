import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const totalFrames = 521;
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const imagePaths: string[] = [];

      // Folder 1: 1-137
      for (let i = 1; i <= 137; i++) {
        imagePaths.push(`/images/1/${i.toString().padStart(4, "0")}.jpg`);
      }
      // Folder 2: 1-192
      for (let i = 1; i <= 192; i++) {
        imagePaths.push(`/images/2/${i.toString().padStart(4, "0")}.jpg`);
      }
      // Folder 3: 1-192
      for (let i = 1; i <= 192; i++) {
        imagePaths.push(`/images/3/${i.toString().padStart(4, "0")}.jpg`);
      }

      const promises = imagePaths.map((path) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = path;
          img.onload = () => resolve(img);
        });
      });

      const results = await Promise.all(promises);
      setImages(results);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    const render = (index: number) => {
      const roundedIndex = Math.round(index);
      const img = images[roundedIndex];
      if (img && canvasRef.current) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Draw image scaled to cover the canvas
        const canvasAspect = canvasRef.current.width / canvasRef.current.height;
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvasRef.current.width;
          drawHeight = canvasRef.current.width / imgAspect;
          offsetX = 0;
          offsetY = (canvasRef.current.height - drawHeight) / 2;
        } else {
          drawWidth = canvasRef.current.height * imgAspect;
          drawHeight = canvasRef.current.height;
          offsetX = (canvasRef.current.width - drawWidth) / 2;
          offsetY = 0;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      render(latest);
    });

    // Initial render
    render(0);

    return () => unsubscribe();
  }, [isLoaded, images, frameIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover opacity-80"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-electric-green font-mono text-xl animate-pulse">
              INITIALIZING SYSTEMS...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
