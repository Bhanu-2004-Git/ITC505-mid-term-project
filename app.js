// ====== Story Graph ======
// Provide images in /images matching these filenames.
// Replace with your own photos/art later.
const IMAGES = {
  campus: "campus.jpeg",
  library: "library.jpg",
  quad: "quad.jpeg",
  cafe: "coffee.jpeg",
  lab: "lab.jpg",
  advisor: "advisor.jpg",
  club: "club_fair.jpg",
  storm: "alert.jpg",
  silentStudy: "desk.jpg" ,
  lost: "lost.jpg",
  notes:"notes.png",
  coffee:"coffee.png",
  chatter:"chatter.jpeg",
  refactor:"refactor.png",
  creep: "creep.jpg",
  test: "CI_test.png",
  bug:"bug.jpeg",
  debug:"debug.png",
  commit:"commit.png",
  snarl:"snarl.jpg",
  entrance:"cafe.jpg",
  tea:"tea.jpg",
  collabRoom:"alarm.gif",
  alarmEvac:"evacuate.jpg",
  security:"security.jpg",



  // Endings (10)
  end_focus_win: "focus.jpg",
  end_usb_lost: "ending1.webp",
  end_coffee_crash: "crash.webp",
  end_team_win: "teamwork.jpg",
  end_alarm_fail: "rules.jpeg",
  end_advisor_shortcut: "shortcut.webp",
  end_club_network: "community.jpg",
  end_snow_delay: "weather.jpeg",
  end_hacker_fix: "Bug-hunter.jpg",
  end_oversleep: "images/ending-oversleep.jpg"
};

// Node dictionary: each key is a stage in the story.
const storyNodes = {
  start: {
    text: `It's Mid-Term week. Your project is due at midnight.
You step onto campus with a choice: where to begin your quest?`,
    image: IMAGES.campus,
    choices: [
      { label: "Head to the Library", next: "toLibrary" },
      { label: "Cross the Quad", next: "toQuad" },
      { label: "Grab fuel at the Café", next: "toCafe" }
    ]
  },

  toLibrary: {
    text: `The library is quiet—perfect for focus. A sign points to “Silent Study” and “Collab Rooms.”`,
    image: IMAGES.library,
    choices: [
      { label: "Silent Study (solo grind)", next: "silentStudy" },
      { label: "Reserve a Collab Room", next: "collabRoom" },
      { label: "Back to Campus Entrance", next: "start" }
    ]
  },

  silentStudy: {
    text: `You find a corner desk and dive into code. After an hour, you realize your USB isn’t in your bag...`,
    image: IMAGES.silentStudy,
    choices: [
      { label: "Search lost & found", next: "lostFound" },
      { label: "Rebuild from backups", next: "rebuild" }
    ]
  },

  collabRoom: {
    text: `You book a room. Teammates ping: "On our way!" While waiting, the fire alarm blares.`,
    image: IMAGES.collabRoom,
    choices: [
      { label: "Evacuate immediately", next: "alarmEvac" },
      { label: "Stay to finish one more commit (risky!)", next: "alarmRisk" }
    ]
  },

  toQuad: {
    text: `The quad is lively. A club fair is in full swing, and your advisor’s office hours are nearby.`,
    image: IMAGES.quad,
    choices: [
      { label: "Visit Advisor", next: "advisorOffice" },
      { label: "Check out Club Fair", next: "clubFair" },
      { label: "Head to the CS Lab", next: "toLab" }
    ]
  },

  toCafe: {
    text: `The café smells amazing. Triple-shot latte? Or a calm tea?`,
    image: IMAGES.entrance,
    choices: [
      { label: "Triple-shot latte", next: "latte" },
      { label: "Herbal tea", next: "tea" },
      { label: "Skip drinks, go work", next: "toLibrary" }
    ]
  },

  toLab: {
    text: `You reach the CS Lab. A friend waves: "Wanna pair program?"`,
    image: IMAGES.lab,
    choices: [
      { label: "Pair up", next: "pairProgram" },
      { label: "Solo at a free workstation", next: "soloLab" }
    ]
  },

  advisorOffice: {
    text: `Your advisor reviews your plan: "Refactor the data layer for quick wins."`,
    image: IMAGES.advisor,
    choices: [
      { label: "Refactor now", next: "refactorWin" },
      { label: "Ignore and keep features", next: "featurePush" }
    ]
  },

  clubFair: {
    text: `A tech club is demoing tools for testing and deployment.`,
    image: IMAGES.club,
    choices: [
      { label: "Network & learn their tooling", next: "clubHelp" },
      { label: "Pass and keep moving", next: "toLab" }
    ]
  },

  latte: {
    text: `Caffeine surges. You feel unstoppable... for now.`,
    image: IMAGES.coffee, 
    choices: [
      { label: "Sprint work session", next: "silentStudy" },
      { label: "Chat with friends (time sink)", next: "coffeeCrash" }
    ]
  },

  tea: {
    text: `You feel calm and focused.`,
    image: IMAGES.tea,
    choices: [
      { label: "Library silent study", next: "silentStudy" },
      { label: "Advisor office hours", next: "advisorOffice" }
    ]
  },

  pairProgram: {
    text: `Pairing goes well. You catch a nasty bug in your auth flow.`,
    image: IMAGES.bug,
    choices: [
      { label: "Patch quickly & test", next: "hackerFix" },
      { label: "Leave for later (danger)", next: "alarmRisk" }
    ]
  },

  soloLab: {
    text: `Solo focus yields progress, but a snow alert pops up: “Storm at 6PM.”`,
    image: IMAGES.storm,
    choices: [
      { label: "Push to finish before storm", next: "beatStorm" },
      { label: "Head home early", next: "snowDelay" }
    ]
  },

  // ===== Mid-paths leading to endings =====
  lostFound: {
    text: `The desk returns an identical USB… but it's not yours. Contents: empty.`,
    image: IMAGES.lost,
    choices: [
      { label: "Accept fate", next: "END_USB_LOST" },
      { label: "Rebuild from scratch", next: "rebuild" }
    ]
  },

  rebuild: {
    text: `Thanks to cloud notes and commit history, you reconstruct most work!`,
    image: IMAGES.notes,
    choices: [
      { label: "Deep focus to finish", next: "END_FOCUS_WIN" },
      { label: "Coffee run first", next: "latte" }
    ]
  },

  alarmEvac: {
    text: `You evacuate safely but lose an hour waiting outside.`,
    image: IMAGES.alarmEvac,
    choices: [
      { label: "Regroup and finish strong", next: "END_TEAM_WIN" },
      { label: "Time’s too tight now", next: "END_ALARM_FAIL" }
    ]
  },

  alarmRisk: {
    text: `Security catches you staying during an alarm. Work confiscated for review.`,
    image: IMAGES.security,
    choices: [
      { label: "Accept penalty", next: "END_ALARM_FAIL" }
    ]
  },

  refactorWin: {
    text: `Refactor trims complexity; tests get faster.`,
    image: IMAGES.refactor,
    choices: [
      { label: "Polish & submit", next: "END_ADVISOR_SHORTCUT" }
    ]
  },

  featurePush: {
    text: `Feature creep slows you down.`,
    image: IMAGES.creep,
    choices: [
      { label: "Scope cut late", next: "END_SNOW_DELAY" }
    ]
  },

  clubHelp: {
    text: `Club mentors show you CI tests. You squash bugs rapidly.`,
    image: IMAGES.test,
    choices: [
      { label: "Ship with confidence", next: "END_CLUB_NETWORK" }
    ]
  },

  coffeeCrash: {
    text: `Time slipped away in café chatter. The crash hits hard.`,
    image: IMAGES.chatter,
    choices: [
      { label: "Try to rally", next: "END_COFFEE_CRASH" }
    ]
  },

  beatStorm: {
    text: `You power through, pushing clean commits.`,
    image: IMAGES.commit,
    choices: [
      { label: "Final push", next: "END_FOCUS_WIN" }
    ]
  },

  snowDelay: {
    text: `You went home early. Snow snarled internet for hours…`,
    image: IMAGES.snarl,
    choices: [
      { label: "Accept late submission", next: "END_SNOW_DELAY" }
    ]
  },

  hackerFix: {
    text: `You spot an auth edge-case and patch it before release.`,
    image: IMAGES.debug,
    choices: [
      { label: "Deploy & celebrate", next: "END_HACKER_FIX" }
    ]
  },

  // ===== Endings (10 unique) =====
  END_FOCUS_WIN: {
    isEnding: true,
    endingTitle: "Focus Wins!",
    text: `You submit an on-time, well-tested project. The rubric smiles upon you.`,
    image: IMAGES.end_focus_win
  },
  END_USB_LOST: {
    isEnding: true,
    endingTitle: "USB, You Betrayed Me",
    text: `Your original files were gone. You learned to always sync to cloud.`,
    image: IMAGES.end_usb_lost
  },
  END_COFFEE_CRASH: {
    isEnding: true,
    endingTitle: "The Caffeine Collapse",
    text: `All buzz, no progress. You vow to timebox breaks.`,
    image: IMAGES.end_coffee_crash
  },
  END_TEAM_WIN: {
    isEnding: true,
    endingTitle: "Teamwork FTW",
    text: `Your group re-syncs and ships solid work right before the deadline.`,
    image: IMAGES.end_team_win
  },
  END_ALARM_FAIL: {
    isEnding: true,
    endingTitle: "Rules Are Rules",
    text: `Safety first. Points deducted for poor judgment during the alarm.`,
    image: IMAGES.end_alarm_fail
  },
  END_ADVISOR_SHORTCUT: {
    isEnding: true,
    endingTitle: "Advisor’s Shortcut",
    text: `Refactoring paid off with clarity, speed, and an elegant submission.`,
    image: IMAGES.end_advisor_shortcut
  },
  END_CLUB_NETWORK: {
    isEnding: true,
    endingTitle: "Power of Community",
    text: `New friends, new tools, fewer bugs. You nailed the deliverable.`,
    image: IMAGES.end_club_network
  },
  END_SNOW_DELAY: {
    isEnding: true,
    endingTitle: "Weathered Out",
    text: `Nature had other plans. You submit late but wiser for next time.`,
    image: IMAGES.end_snow_delay
  },
  END_HACKER_FIX: {
    isEnding: true,
    endingTitle: "Bug Hunter",
    text: `Pre-emptive fix prevents a nasty failure. Clean deploy achieved!`,
    image: IMAGES.end_hacker_fix
  },
  END_OVERSLEEP: {
    isEnding: true,
    endingTitle: "Snooze You Lose",
    text: `You overslept after an all-nighter. Schedule management matters.`,
    image: IMAGES.end_oversleep
  }
};

// ====== Game Engine ======
const storyEl = document.getElementById("story");
const choicesEl = document.getElementById("choices");
const imageEl = document.getElementById("stageImage");
const restartBtn = document.getElementById("restartBtn");

let currentKey = "start";

function startGame(){
  currentKey = "start";
  renderNode(currentKey);
}

function renderNode(key){
  const node = storyNodes[key];
  if(!node){
    console.error(`Missing node: ${key}`);
    return;
  }

  currentKey = key;

  // If ending, delegate to endGame.
  if(node.isEnding){
    endGame(node);
    return;
  }

  // Update story text
  storyEl.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = node.text;
  storyEl.appendChild(p);

  // Update image
  setStageImage(node.image, "Scene illustration");

  // Render choices
  choicesEl.innerHTML = "";
  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.type = "button";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => renderNode(choice.next));
    choicesEl.appendChild(btn);
  });

  // Ensure restart is available mid-game
  restartBtn.onclick = () => startGame();
}

function endGame(endingNode){
  // Replace story with ending title + text
  storyEl.innerHTML = "";
  const h = document.createElement("h2");
  h.textContent = endingNode.endingTitle;
  const p = document.createElement("p");
  p.textContent = endingNode.text;
  storyEl.appendChild(h);
  storyEl.appendChild(p);

  // Ending image
  setStageImage(endingNode.image, `Ending: ${endingNode.endingTitle}`);

  // Remove any existing choices; show replay options
  choicesEl.innerHTML = "";

  const again = document.createElement("button");
  again.className = "btn secondary";
  again.type = "button";
  again.textContent = "Play Again";
  again.addEventListener("click", () => startGame());
  choicesEl.appendChild(again);

  const alt = document.createElement("button");
  alt.className = "btn danger";
  alt.type = "button";
  alt.textContent = "Random Start (feeling lucky)";
  alt.addEventListener("click", () => {
    const rand = Math.random();
    // small shuffle between three different openings
    renderNode(rand < 0.34 ? "toLibrary" : rand < 0.67 ? "toQuad" : "toCafe");
  });
  choicesEl.appendChild(alt);

  restartBtn.onclick = () => startGame();
}

function setStageImage(src, alt){
  imageEl.src = src || "";
  imageEl.alt = alt || "";
}

// Optional: Preload images to reduce flicker
(function preload(){
  Object.values(IMAGES).forEach(path => {
    const img = new Image();
    img.src = path;
  });
})();

// Boot
startGame();
