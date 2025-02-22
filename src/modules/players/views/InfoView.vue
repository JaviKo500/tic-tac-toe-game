<template>
  <div class="flex justify-center">
    <div class="p-4">
      <p class="text-2xl font-medium my-4">Tic Tac Toe Game Instructions</p>
      <p class="text-xl font-medium">Initial Setup</p>
      <p class="text-lg">Creating Players</p>
      <ol class="list-decimal px-8">
        <li>When starting the game, you must create a profile for each player</li>
        <li>The following information will be stored for each player:</li>
        <ul class="list-disc px-6">
          <li>Total accumulated points</li>
          <li>Number of games played</li>
          <li>Games won</li>
          <li>Games lost</li>
        </ul>
      </ol>
      <p class="text-lg">Player Selection</p>
      <ol class="list-decimal px-8">
        <li>
          Before each match, select 2 players from the created profiles
        </li>
        <li>
          The selected players will compete against each other
        </li>
      </ol>
      <p class="text-xl font-medium my-4">Game Start</p>
      <p class="text-lg">Symbol Selection</p>
      <ol class="list-decimal px-8">
        <li>Before beginning, each player must choose their symbol:</li>
        <ul class="list-disc px-6">
          <li>X</li>
          <li>O</li>
        </ul>
      </ol>
      <p class="text-lg">Game Rules</p>
      <ol class="list-decimal px-8">
        <li>
          Each player has 5 seconds per turn to make their move
        </li>
        <li>
          When time runs out, the turn automatically passes to the other player
        </li>
        <li>
          Players take turns placing their symbol in an empty square on the board
        </li>
      </ol>
      <p class="text-lg">Scoring System</p>
      <ol class="list-decimal px-8">
        <li>
          Victory: 5 points
        </li>
        <li>
          Draw: 1 point for each player
        </li>
        <li>
          Loss: 0 points
        </li>
      </ol>
      <p class="text-lg">Victory Conditions</p>
      <ol class="list-decimal px-8">
        <li>
          Align three matching symbols:
        </li>
        <ul class="list-disc px-6">
          <li>
            Horizontally
          </li>
          <li>
            Vertically
          </li>
          <li>
            Diagonally
          </li>
        </ul>
      </ol>
      <p class="text-lg">Statistics</p>
      <p>After each match, the following will be automatically updated:</p>
      <ul class="list-disc px-8">
        <li>Games played counter</li>
        <li>Wins/losses for each player</li>
        <li>Total accumulated points</li>
      </ul>
      <p class="text-lg">Important Notes</p>
      <ul class="list-disc px-8">
        <li>
          The 5-second time limit per turn cannot be paused
        </li>
        <li>
          Once a symbol is placed, it cannot be moved
        </li>
        <li>
          The game ends when there's a winner or when the board is full (draw)
        </li>
      </ul>
      <br>
    </div>
  </div>
</template>