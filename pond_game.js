<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    
    #pond {
      width: 300px;
      height: 200px;
      background-color: #87CEEB; /* Light blue color for water */
      border: 2px solid #2F4F4F; /* Dark slate gray border */
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    #fish {
      width: 50px;
      height: 30px;
      background-color: #FFD700; /* Gold color for fish */
      position: absolute;
      bottom: 10px;
      left: 10px;
      transition: transform 0.5s ease-in-out;
    }
  </style>
  <title>Pond Game</title>
</head>
<body>
  <div id="pond" onclick="makeRipples(event)">
    <div id="fish"></div>
  </div>

  <script>
    function makeRipples(event) {
      const pond = document.getElementById('pond');
      const fish = document.getElementById('fish');

      // Get the click position relative to the pond
      const x = event.clientX - pond.getBoundingClientRect().left;
      const y = event.clientY - pond.getBoundingClientRect().top;

      // Create a ripple element
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Append the ripple to the pond
      pond.appendChild(ripple);

      // Remove the ripple after a short delay
      setTimeout(() => {
        pond.removeChild(ripple);
      }, 1000);

      // Make the fish jump
      fish.style.transform = 'translateY(-30px)';
      setTimeout(() => {
        fish.style.transform = 'translateY(0)';
      }, 500);
    }
  </script>
</body>
</html>
