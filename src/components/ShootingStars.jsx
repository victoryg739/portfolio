import React, { useEffect, useRef } from "react";

function ShootingStars({ children }) {
  // Use the useRef hook to get a reference to the canvas element
  const canvasRef = useRef(null);

  // Use the useEffect hook to set up the animation when the component mounts
  useEffect(() => {
    // Get the canvas and canvas context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the shooting star object
    function ShootingStar() {
      this.x = Math.random() * canvas.width; // Random x position
      this.y = 0; // Start at the top of the canvas
      this.vx = 0; // No initial horizontal velocity
      this.vy = Math.random() * 10 + 5; // Random vertical velocity
      this.radius = Math.random() * 2 + 1; // Random radius
      this.color = "white"; // White color
    }

    // Update the shooting star's position
    ShootingStar.prototype.update = function() {
      this.x += this.vx; // Update the x position
      this.y += this.vy; // Update the y position
    };

    // Draw the shooting star on the canvas
    ShootingStar.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    // Create an array to store the shooting stars
    let shootingStars = [];

    // Animate the shooting stars
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw the shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        shootingStars[i].update();
        shootingStars[i].draw();
      }

      // Create a new shooting star every 10 frames
      if (frame % 10 === 0) {
        shootingStars.push(new ShootingStar());
      }

      // Remove shooting stars that have gone off the bottom of the canvas
      shootingStars = shootingStars.filter(function(shootingStar) {
        return shootingStar.y <= canvas.height;
      });

      // Increment the frame count
      frame++;

      // Animate the next frame
      requestAnimationFrame(animate);
    }

    // Start the animation
    let frame = 0;
    animate();
  }, []); // The empty array ensures that the effect only runs once when the component mounts

  return (
    <div>
      {children}
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ShootingStars;