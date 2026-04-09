const maze = [
  [0,1,0,0,0,0,0,1,0,0],
  [0,1,0,1,1,1,0,1,0,1],
  [0,0,0,1,0,0,0,0,0,1],
  [1,1,0,1,0,1,1,1,0,1],
  [0,0,0,0,0,1,0,0,0,0],
  [0,1,1,1,0,1,0,1,1,0],
  [0,0,0,1,0,0,0,1,0,0],
  [0,1,0,1,1,1,0,1,0,1],
  [0,1,0,0,0,0,0,0,0,1],
  [0,1,1,1,1,1,1,1,0,0]
];

const cellSize = 42;
let player = {x: 0, y: 0};
const exit = {x: 9, y: 9};

const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const statusBox = document.getElementById("mazeStatus");

function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "#475569";
      } else {
        ctx.fillStyle = "#0f172a";
      }
      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      ctx.strokeStyle = "#1e293b";
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }

  ctx.fillStyle = "#fbbf24";
  ctx.fillRect(exit.x * cellSize + 8, exit.y * cellSize + 8, cellSize - 16, cellSize - 16);

  ctx.fillStyle = "#34d399";
  ctx.fillRect(player.x * cellSize + 8, player.y * cellSize + 8, cellSize - 16, cellSize - 16);
}

function move(dx, dy) {
  const nx = player.x + dx;
  const ny = player.y + dy;

  if (nx < 0 || ny < 0 || nx >= 10 || ny >= 10) return;
  if (maze[ny][nx] === 1) {
    statusBox.textContent = "Хана мөргөлөө.";
    return;
  }

  player.x = nx;
  player.y = ny;
  drawMaze();

  if (player.x === exit.x && player.y === exit.y) {
    statusBox.textContent = "🎉 Баяр хүргэе! Та төөрдөг байшингаас гарлаа.";
  } else {
    statusBox.textContent = "Үргэлжлүүлээрэй...";
  }
}

function resetMaze() {
  player = {x: 0, y: 0};
  statusBox.textContent = "Тоглоом эхэллээ.";
  drawMaze();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") move(0, -1);
  else if (e.key === "ArrowDown") move(0, 1);
  else if (e.key === "ArrowLeft") move(-1, 0);
  else if (e.key === "ArrowRight") move(1, 0);
});

drawMaze();
window.resetMaze = resetMaze;
