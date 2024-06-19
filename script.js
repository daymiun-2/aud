document.addEventListener('DOMContentLoaded', () => {
    const bubbles = [
        { id: 'startBubble', color: 'black', message: "Audrey,\n\nThis week has been hard. \n\nReally hard.\n\nCandidly, I don't usually dwell this much on a person after a break up. I don't usually hurt this much or regret this much or miss them this much. But this has been different. My heads been spinning thinking about all the things I'm gonna be losing out on. Big moments like meeting your parents, or going out of the country together, or getting to get bit by the elderly german shepard you eventually adopt. But also the little stuff. Waking up next to you. Hearing about your new special interests while we walk to get coffee in the morning. Meth Time™ before bed. It's the happiest I've been in a relationship. Ever.\n\nI know things haven't been the easiest lately. \nI haven't been very easy to hang out with. I know that, and I'm truly one-million-percent so sorry about it all. I wish I hadn't been so dense, and noticed how much of a problem this all was earlier. I've been a spirally anxious mess and you've been so patient and amazing about it all. And I'm sorry for how unfair I've been to you. But I also know being sorry doesn't mean anything without action or change. So when I say I'm working on it, I really truly mean it. \n\nI emailed my top 8 therapists today. Christina is gonna refer me to her psychiatrist. I'm starting to run in the mornings again to keep my anxiety down. I'm prioritizing my mental health, and making it a top priority. I'm gonna give you space and time to be your own person and hang with your own friends. I'm going to do the same for myself. And I think that we can work through it. \n\nIs it going to be easy? Of course not. But you're so completely worth it. I want to fight for this and for you and for us. Every relationship I've ever been in has its faults, but this is the only relationship I've been in where I've been so fully incredibly in love that I want to do anything and everything I can to fix them. \n\nYou're the best girlfriend I've ever had. And even if it doesn't work out and we can't patch things up, I want you to really understand how much you mean to me, and how special you are. Because you deserve to know. So I made this gay retarded website to explain how fucking amazing you are. And to show you how many ways you have helped me that I don't think I have ever voiced to you.\n\nMissing you so so much. Whatever you decide, there's no pressure. Just know, you're the best. I love you.\n\nDamian" },
        { id: 'homeBubble', color: 'red', message: "I love how easy it is to be with you. I think it's why we ended up with each other 24/7 so quickly. Just being in the same space as you makes me happy. Even if we aren't talking or doing the same thing, just the fact that you're there makes it infinitely better. Cooking spinach, scrolling on our phones, watching weird YouTube docs. Whatever we are doing, it just feels right.\n\nThings in my life have been weird lately. My parents moved, my childhood home is gone. All the places I considered 'home' have been uprooted. But lately, I've noticed that being around you feels like home. It's comfortable and warm and just feels right. When I've had a bad day, I want to be next to you. When I've had a good day I want to be next to you. When I have good news or bad news or gossip or memes, you are the first person that I think of.\n\nYou've been a source of stability and joy in a very unstable and stressful time in my life—and even though I don't talk about it much, I want you to know how much it means to me, and how much it has helped me.\n\nThanks for existing." },
        { id: 'hahaBubble', color: 'green', message: "I have two friends who I feel the most at ease with. I can make any sort of joke that I want with them. These are people that I’ve known pretty much as long as I've been alive. I met Evan when I was three. I met Nick when I was six.\n\nAnd so far in life, those are the two people I’ve felt the most 'myself' with. The two people that make me feel the most comfortable and that make me genuinely laugh, and that I can be fully open with. In 26 years, those were the only two people that could make me feel that way.\n\nBut then I met you. And suddenly I had a third person that I could make those jokes with. And that I could share those memes with. And that I could laugh about stuff in the same way that I would with Nick and Evan—friends I've had for over two decades.\n\nYou came in and instantly made me feel just as comfortable and happy. I could just be real with you. And I know it seems silly too put this much weight on whay memes I can send a person or what stupid side comments I can make around them, but it’s pretty incredible. It feels incredible. You’re just so fucking funny. And maybe thats really vain to say after this long rant about us having the same humor, but damn—you just know how to make me laugh and smile. And it makes me want to make you laugh.\n\nThe things you think and the things you say and just you the way you are—you just make me so happy and laugh so much. I don’t know, you’re just great :)." },
        { id: 'friendsBubble', color: 'blue', message: "I’ve told you some version of this before, but in the past, I’ve never been able to bring my girlfriends around my family or my friends. And honestly, I never wanted to. My first girlfriend showed no interest in it, my second girlfriend stressed me out and embarrassed me whenever she was around them. And every fling and person in between just never seemed worth even bringing up.\n\nBut you were different. I want to show you to every single person. I want them to meet you and I want them to see how funny and pretty and smart and charming you are. I want them to get to know you, so they can appreciate you the way that I appreciate you. And that’s so special to me. You have no idea how happy it makes me.\n\nEvery single person that meets you, loves you. I know obviously it’s good for us to do our own thing sometimes. And its good for us to be our own people and spend time with our friends alone. But I hope you know how special this is to me. That whenever I’m alone with my friends without you, they always ask about you. Hailey. Qendrim. Maya. All of them always ask where you are and how you are. Because everyone loves you so much, and you get along with everyone so well.\n\nIt’s so easy and it feels so natural, and I know it’s probably a little awkward for you at times, but you do it so gracefully and so enthusiastically—and I’m just so so so glad that I’ve been able to share all these parts of my life with you. No matter what happens, know that meant the world to me." },
        { id: 'betterBubble', color: 'purple', message: "I know this is going to sound insane, but I used to work WAY more. Weekdays were depressing. I'd stay at the office until 11pm everyday looking for things to do, because going home and watching tv or sitting on the couch just felt—sad. I'd work until 11pm, go to the climbing gym for 2 hours, order junkfood on the way home, eat it, sleep, repeat. I wasn't happy with my job, but I was comfortable with it. I missed all my hobbies but I wasn't running or cooking or trying new restaurants.\n\nThen I met you and it all sort of changed. Suddenly not being at work was fun—I wanted to spend time with you. I remembered I loved cooking. I loved going for long aimless walks. I even loved being an art director.\n\nI would have never left Mojo if I hadn't met you. You encouraged and pushed me, and now that's the best choice I've made in a very long time. I know its a lot of work but I am so much more passionate and excited and am growing more than I have in years.\n\nI wouldn't casually run a half marathon if it wasn't for you. Seeing you exercise everyday, and how supportive and excited you are for me when I get back from runs made it so much easier to go further.\n\nI'm a better person because I met you. I hope I've helped you too." },
        { id: 'coffeeBubble', color: 'tan', message: "Going to coffee with you in the morning is one of my favorite things in the entire world. It's often the highlight of my day. Sometimes the highlight of my entire week. Walking and getting coffee and kolaches, or triangles, or cimimiminiiminon rolls is my favorite way to wake up It’s so simple but it's truly the best way to start my day. You always puts me in a really good mood and it always slows me down when I’m stressed or have a busy day at work with 1 million things on my plate. Waking up and knowing that we’re gonna walk, and we’re gonna get a coffee, and maybe a little treat, and sit down and maybe talk about a special interest, or say hi to some little guys—it’s perfect.\n\nIt’s one of those things that you don’t really notice how impactful it is in the moment. But this week without it, my mornings are sadder. And I don’t say that to make you feel bad, and I wonder if you feel it too, but it’s just a little less joyful. It doesn’t ruin the day. But it just feels somehow saddr. Having something so nice striped from your schedule is noticable. And it shows up in other ways too. All the little things. Going to the store and just getting one Topo. Scrolling on Reddit at night. All those little routines were little pockets of joy that made my days so much better. And I've really felt their absence. And with time it can get better, but you should know that even the smallest things you did with me, were important. I love all the moments with you." },
        { id: 'caringBubble', color: 'orange', message: "You've told me before that you think I'm a really good friend, but I've always felt like you were much better at it. I love that you constantly call your friends to catch up. I love that you reach out to Hunter and make sure he’s doing all right and that everyday you check in on him and that you're even gonna go see him while he’s going through literally the worst thing ever. I love that you’re honest with Carly when she’s dating someone who is bad for her. I love that you call your mom and dad so much and I just really appreciate how much you care.\n\nIt inspires me and it makes me want to do the same. I call my parents more. I make more time to check in with my friends. Seeing you interact with the people you love has just made me a more present person. It comes so naturally to you and I think everyone in your life adores you for it. You’re so good at being there for people. You’re especially good at being there for me.\n\nYou’re so supportive in every single way, when I make food you make me feel special and like I am talented. When I work you make me excited about my job, and like I don't suck at it. When I go for a run you motivate me and make me want to keep going. You just have a way of being so genuinely supportive and so thorougly there for the people around you. I don’t know many people like that. I don’t have many people like that. I know it never worked out, but you planning a surprise party is the nicest gift anyone’s ever ever gotten me (or made me or planned for me lol?) I think you're a really important person for a lot of people, and I hope you get told that. Because you make a really big impact on a whole lot of people. Maybe you do know that but I just want to reinforce it. Because idk anyone who cares quite like you." },
        { id: 'brainBubble', color: 'pink', message: "You’re so talented and good at your job, but I also don’t understand how you’re an advertising. You’re way too smart to be in this shit with all of us—but I also know how funny you are...so it also makes really a lot of sense lol. But everything about the thoughts you have, and the things you know, and the stuff you’re interested in—it’s so impressive.\n\nThe way that you just love to learn. The fact that you put effort into learning about the places you travel before you go. And just how invested you get about the most specific topics. I feel like you know something about everything. It makes me want to be more like you. To learn more.\n\nI love hearing you talk about it all. How passionate you are. The wide range of things that you can nerd out on. Even though most of it all kind of goes over my head, its just so fun to listen to. You’re brillian. And you have so many just really smart insightful things to say, and it’s made me more curious about the world.\n\nYou remind me that there’s more to life than learning all the Photoshop hotkeys or how to midjourney an emu into a yellow button up. You are just a genuinely interesting person, and you have things to talk about that are more interesting than really anyone else in my life. And I don’t even know how you get into them. The way I can wake up, and by 9 AM you already have done a deep dive on some niche topic—I love how excited you are. And that you’re not doing it for show, you’re not doing it to try to make people think you’re smart, and you’re not pretentious about it—even though you totally have a right to be. It’s just who you are, and that fucking rules." },
    ];

    const splash = document.getElementById('splash');
    const textBlock = document.getElementById('textBlock');
    const closeBtn = document.querySelector('.close');
    const messageElement = document.getElementById('message');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let currentBackgroundColor = 'white';

    const intro = document.getElementById('intro');
    const continueButton = document.getElementById('continueButton');
    const mainContent = document.getElementById('mainContent');

    continueButton.addEventListener('click', () => {
        intro.style.animation = 'fadeOut 2s forwards';
        intro.addEventListener('animationend', () => {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
            backgroundMusic.play();

            // Fade in bubbles
            document.querySelectorAll('.bubble').forEach(bubble => {
                bubble.style.opacity = 1;
            });
        }, { once: true });
    });

    const bubbleObjects = bubbles.map(bubble => {
        const bubbleElement = document.getElementById(bubble.id);
        const velocity = { x: (Math.random() - 0.5) * 1, y: (Math.random() - 0.5) * 1 }; // Adjusted velocity for smoother movement
        return {
            element: bubbleElement,
            x: window.innerWidth * Math.random(),
            y: window.innerHeight * Math.random(),
            vx: velocity.x,
            vy: velocity.y,
            color: bubble.color,
            message: bubble.message,
            radius: 50
        };
    });

    function checkCollision(bubble1, bubble2) {
        const dx = bubble1.x - bubble2.x;
        const dy = bubble1.y - bubble2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < bubble1.radius + bubble2.radius;
    }

    function resolveCollision(bubble1, bubble2) {
        const dx = bubble1.x - bubble2.x;
        const dy = bubble1.y - bubble2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const nx = dx / distance;
        const ny = dy / distance;

        const kx = (bubble1.vx - bubble2.vx);
        const ky = (bubble1.vy - bubble2.vy);
        const p = 2.0 * (nx * kx + ny * ky) / (1 + 1);

        bubble1.vx = bubble1.vx - p * nx * 0.5; // Added damping effect
        bubble1.vy = bubble1.vy - p * ny * 0.5;
        bubble2.vx = bubble2.vx + p * nx * 0.5;
        bubble2.vy = bubble2.vy + p * ny * 0.5;
    }

    function updateBubbles() {
        bubbleObjects.forEach(bubble => {
            // Ensure the bubbles are always moving
            if (Math.abs(bubble.vx) < 0.1) bubble.vx = (Math.random() - 0.5) * 1.5;
            if (Math.abs(bubble.vy) < 0.1) bubble.vy = (Math.random() - 0.5) * 1.5;

            bubble.x += bubble.vx;
            bubble.y += bubble.vy;

            if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > window.innerWidth) bubble.vx *= -1;
            if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > window.innerHeight) bubble.vy *= -1;

            bubbleObjects.forEach(otherBubble => {
                if (bubble !== otherBubble && checkCollision(bubble, otherBubble)) {
                    resolveCollision(bubble, otherBubble);
                }
            });

            bubble.element.style.left = `${bubble.x - bubble.radius}px`;
            bubble.element.style.top = `${bubble.y - bubble.radius}px`;
        });
    }

    function animate() {
        updateBubbles();
        requestAnimationFrame(animate);
    }

    animate();

    bubbleObjects.forEach(bubble => {
        bubble.element.addEventListener('click', () => {
            splash.style.animation = 'none';
            splash.offsetHeight;
            splash.style.animation = '';

            splash.style.backgroundColor = bubble.color;
            splash.style.animation = 'splashAnimation 1.5s forwards';
            textBlock.style.backgroundColor = bubble.color;

            currentBackgroundColor = bubble.color;

            textBlock.style.animation = 'none';
            textBlock.offsetHeight;
            textBlock.style.animation = 'fadeIn 2s forwards';

            splash.addEventListener('animationend', () => {
                document.body.style.backgroundColor = bubble.color;
                messageElement.textContent = bubble.message;
                textBlock.style.display = 'flex';
            }, { once: true });
        });
    });

    closeBtn.addEventListener('click', () => {
        textBlock.style.animation = 'fadeOut 2s forwards';
        textBlock.addEventListener('animationend', () => {
            textBlock.style.display = 'none';
            splash.style.animation = 'reverseSplashAnimation 1.5s forwards';
            splash.addEventListener('animationend', () => {
                document.body.style.backgroundColor = currentBackgroundColor;
            }, { once: true });
        }, { once: true });
    });

    document.getElementById('startBubble').addEventListener('click', () => {
        backgroundMusic.play();
    });

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        bubbleObjects.forEach(bubble => {
            const bubbleElement = bubble.element;
            const rect = bubbleElement.getBoundingClientRect();
            const bubbleX = rect.left + rect.width / 2;
            const bubbleY = rect.top + rect.height / 2;

            const distX = mouseX - bubbleX;
            const distY = mouseY - bubbleY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            const maxDistance = 300;
            const force = Math.max(0, (maxDistance - distance) / maxDistance);

            const translateX = (distX / distance) * force * 20;
            const translateY = (distY / distance) * force * 20;

            bubbleElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${1 + force * 0.1})`;
        });
    });

    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.addEventListener('mouseleave', () => {
            bubble.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    window.addEventListener('resize', () => {
        bubbleObjects.forEach(bubble => {
            bubble.x = Math.min(bubble.x, window.innerWidth - bubble.radius);
            bubble.y = Math.min(bubble.y, window.innerHeight - bubble.radius);
        });
    });

    // Animate words one by one with overlap and drift up effect
    const words = document.querySelectorAll('.intro-text .word');
    words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.3}s`;
        word.style.animation = `wordFadeIn 1s forwards ${index * 0.3}s, driftUp 1s forwards ${index * 0.3}s`;
    });

    // Show the continue button after the words have animated in
    const totalWordsDuration = (words.length - 1) * 0.3 + 1; // Overlapping animation time
    setTimeout(() => {
        continueButton.classList.remove('hidden');
        continueButton.classList.add('visible');
    }, totalWordsDuration * 1000);
});

