function showBackstory(response) {
    new Typewriter("#backstory", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

    let submitButton = document.querySelector('#submit-button')
    submitButton.removeAttribute('disabled');
}

function showInitialBackstory() {
    let backstory = `
    <em> Okay, let's do this one last time, yeah? For real this time. This is it. My name is Miles Morales. I was bitten by a radioactive spider. And for like two days, I've been the one and only Spider-Man. <br />
    I think you know the rest. I finished my essay. I saved a bunch of people. Got hit by a drone. Did this with my dad. Met my roommate finally. Slapped a sticker where my Dad's never going to find it. And when I feel alone, like no one understands what I'm going through, I remember my friends who get it. I never thought I'd be able to do any of this stuff. But I can. Anyone can wear the mask. You can wear the mask. If you didn't know that before, I hope you do now. <br />
    Cuz I'm Spider-Man. <br />
    And I'm not the only one. <br />
    Not by a long shot. 
    </em>`;

    new Typewriter("#backstory", {
        strings: backstory,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generate(event) {
    event.preventDefault();
    let apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
    let context =
    `You are an avid and dedicated comic book writer who has written thousands of comic book characters and their intricate and compelling backstories. Your mission is to generate a short and succinct backstory based on the name you are given in basic HTML. Make sure to follow the user instructions. Do not include a title. Sign off with a friendly saying like "Hope you like it!" in a <strong> element. Make sure to add in related emojis in the backstory to make it more fun. Omit usuing onomatopoeia and make it easy for a 15 year old to read and understand. Use first place pronouns like you and your.`;
    let instructionsInput = document.querySelector("#instructions");
    let prompt = `User instruction: Create a superhero backstory based on the following name: ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;
    let submitButton = document.querySelector('#submit-button')
    submitButton.setAttribute('disabled', 'disabled');

    let backstoryElement = document.querySelector("#backstory");
    backstoryElement.classList.remove("hidden");
    backstoryElement.innerHTML = `<div class="waiting">⏳ Generating a backstory about ${instructionsInput.value}..</div>`;
    axios.get(apiURL).then(showBackstory);
}

let backstoryForm = document.querySelector("#backstory-generator");
backstoryForm.addEventListener("submit", generate);
showInitialBackstory();
