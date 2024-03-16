const jokes = [
    'Why did the chicken go to the seance? To talk to the other side!',
    'Why don\'t scientists trust atoms? Because they make up everything!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'Why do seagulls fly over the sea? Because if they flew over the bay, they\'d be bagels!',
    'Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!',
    'What do you call fake spaghetti? An impasta!',
    'What do you get when you cross a snowman and a vampire? Frostbite!',
    'Why did the bicycle fall over? Because it was two-tired!',
    'What do you call a fish wearing a crown? A king fish!',
    'Why did the dancer quit her job? Because she did not get a kick out of it!'
  ];
  
  function getRandomJoke() {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
  
  const button = document.getElementById("next");
  button.onclick = function() {
    document.getElementById("joke").innerHTML = getRandomJoke();
  }
  
  