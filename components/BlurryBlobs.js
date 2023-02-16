import React, { useRef, useEffect } from "react";

const BlurryBlobs = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let blobs = [];

    // function to generate a new blob
    function createBlob() {
      if (blobs.length < 4) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 50 + 200;
        let color = "";
        switch (blobs.length) {
          case 0:
            color = "yellow";
            break;
          case 1:
            color = "lime";
            break;
          case 2:
            color = "pink";
            break;
          case 3:
            color = "teal";
            break;
          default:
            break;
        }
        let dx = Math.random() * 2 - 1;
        let dy = Math.random() * 2 - 1;
        blobs.push({ x, y, radius, color, dx, dy });
      }
    }

    // function to draw the blobs
    function drawBlobs() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < blobs.length; i++) {
        let blob = blobs[i];
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = blob.color;
        ctx.shadowColor = blob.color;
        // ctx.guassianBlur = 20;
        ctx.filter = "blur(20px)";
        ctx.fill();
        blob.x += blob.dx;
        blob.y += blob.dy;
        // bounce back if out of bounds
        if (blob.x < blob.radius || blob.x > canvas.width - blob.radius) {
          blob.dx = -blob.dx;
        }
        if (blob.y < blob.radius || blob.y > canvas.height - blob.radius) {
          blob.dy = -blob.dy;
        }
      }
      setTimeout(createBlob, 2000);
    }

    // set canvas dimensions and call drawBlobs function
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setInterval(drawBlobs, 30);

    // event listener to resize canvas on window resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      clearInterval(drawBlobs);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BlurryBlobs;
