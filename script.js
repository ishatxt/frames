// --- CONFIGURATION ---
const FOLLOW_LIMIT = 100; // The limit you mentioned
const MIN_DELAY = 5000;   // 5 seconds
const MAX_DELAY = 15000;  // 15 seconds

let followCount = 0;

async function autoFollow() {
  // Find all buttons that say "Follow"
  const buttons = Array.from(document.querySelectorAll('button'))
    .filter(btn => btn.innerText === 'Follow');

  for (const btn of buttons) {
    if (followCount >= FOLLOW_LIMIT) {
      console.log("Reached the limit of " + FOLLOW_LIMIT);
      return;
    }

    // Click the button
    btn.click();
    followCount++;
    console.log(Followed: ${followCount});

    // Wait for a random amount of time before the next one
    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY);
    console.log(Waiting ${delay / 1000} seconds...);
    await new Promise(resolve => setTimeout(resolve, delay));

    // Scroll down every 5 follows to load more people
    if (followCount % 5 === 0) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
}

autoFollow();