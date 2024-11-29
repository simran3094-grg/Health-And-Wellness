// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
 

// Smooth Scroll for CTA Buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20, // Adjust to avoid covering with sticky navbar
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Validate name field
        const name = document.getElementById('name').value;
        const nameError = document.getElementById('name-error');
        if (!name) {
            valid = false;
            if (!nameError) {
                const nameErrorElement = document.createElement('p');
                nameErrorElement.id = 'name-error';
                nameErrorElement.style.color = 'red';
                nameErrorElement.textContent = 'Full Name is required.';
                form.appendChild(nameErrorElement);
            }
        } else if (nameError) {
            nameError.remove();
        }

        // Validate email field
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email || !emailRegex.test(email)) {
            valid = false;
            if (!emailError) {
                const emailErrorElement = document.createElement('p');
                emailErrorElement.id = 'email-error';
                emailErrorElement.style.color = 'red';
                emailErrorElement.textContent = 'Please enter a valid email address.';
                form.appendChild(emailErrorElement);
            }
        } else if (emailError) {
            emailError.remove();
        }

        // Validate program field
        const program = document.getElementById('program').value;
        const programError = document.getElementById('program-error');
        if (!program) {
            valid = false;
            if (!programError) {
                const programErrorElement = document.createElement('p');
                programErrorElement.id = 'program-error';
                programErrorElement.style.color = 'red';
                programErrorElement.textContent = 'Please select a program.';
                form.appendChild(programErrorElement);
            }
        } else if (programError) {
            programError.remove();
        }

        // Validate payment method
        const payment = document.getElementById('payment').value;
        const paymentError = document.getElementById('payment-error');
        if (!payment) {
            valid = false;
            if (!paymentError) {
                const paymentErrorElement = document.createElement('p');
                paymentErrorElement.id = 'payment-error';
                paymentErrorElement.style.color = 'red';
                paymentErrorElement.textContent = 'Please select a payment method.';
                form.appendChild(paymentErrorElement);
            }
        } else if (paymentError) {
            paymentError.remove();
        }

        // If form is invalid, prevent submission
        if (!valid) {
            event.preventDefault();
        }
    });
});

// Select form and result elements
document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get weight and height inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').textContent = 'Please enter valid positive numbers for weight and height.';
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
});
document.addEventListener("DOMContentLoaded", function() {
document.getElementById('conditions').style.display = 'none';
    // Smooth scrolling for internal anchor links
    const links = document.querySelectorAll('.mental-health a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,  // Adjusted to prevent covering content under fixed header
                behavior: 'smooth'
            });
        });
    });

    // Button hover animation (scale effect)
    const buttons = document.querySelectorAll('.mental-health .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = "scale(1.05)";
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = "scale(1)";
        });
    });

    // Card hover animation (scale effect)
    const cards = document.querySelectorAll('.mental-health .card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = "scale(1.05)";
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = "scale(1)";
        });
    });

    // Scroll animation for elements that appear when scrolling into view
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    const options = {
        threshold: 0.5  // Trigger animation when 50% of the element is in view
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    animateOnScroll.forEach(item => observer.observe(item));

    // Optional: Show a back-to-top button after scrolling
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Add hover glow and click ripple effects
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card) => {
        // Add glow effect on hover
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 12px 20px rgba(42, 157, 143, 0.4)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });

        // Add ripple animation on click
        card.addEventListener("click", (e) => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.left = `${e.clientX - card.offsetLeft}px`;
            ripple.style.top = `${e.clientY - card.offsetTop}px`;
            card.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
// Example JavaScript for Fitness Tips Page

document.addEventListener('DOMContentLoaded', function () {
    // Motivational Quotes - Random Quote Display
    const quotes = [
        "The body achieves what the mind believes.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Fitness is not about being better than someone else. It’s about being better than you used to be.",
        "A one-hour workout is 4% of your day. No excuses.",
        "Your only limit is you."
    ];

    function randomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').innerText = `"${quotes[randomIndex]}"`;
    }

    // Display the first random quote when the page loads
    randomQuote();

    // Set the quote to change every 10 seconds
    setInterval(randomQuote, 10000);

document.addEventListener("DOMContentLoaded", () => {
    // Select the quiz form
    const quizForm = document.querySelector("#fitness-quiz");
    const successMessage = document.querySelector("#success-message");

    // Add an event listener for the form submission
    quizForm.addEventListener("submit", (event) => {
        // Prevent the form from reloading the page on submit
        event.preventDefault();

        // Collect the form data
        const formData = new FormData(quizForm);

        // Convert FormData to a regular object for easier handling
        const userData = {};
        formData.forEach((value, key) => {
            if (userData[key]) {
                // Handle multiple checkbox values
                if (Array.isArray(userData[key])) {
                    userData[key].push(value);
                } else {
                    userData[key] = [userData[key], value];
                }
            } else {
                userData[key] = value;
            }
        });

        // Log the collected data for verification
        console.log("Quiz Submitted:", userData);

        // Provide user feedback
        alert("Thank you for completing the quiz! Your responses have been submitted successfully.");

        // Display success message
        successMessage.style.display = "block"; // Show success message

        // Clear the form after submission
        quizForm.reset();
    });
});
// Select elements for dynamic updates
const wellnessInfo = document.querySelector('.wellness-info');
const resourceButtons = document.querySelectorAll('.resource button');
const darkModeToggle = document.createElement('button');

// Dynamic Greeting Based on Time of Day
function setDynamicGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! Start your day with wellness tips. ☀️";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! Stay inspired and healthy. 🌼";
    } else {
        greeting = "Good Evening! Relax and recharge with us. 🌙";
    }

    wellnessInfo.textContent = greeting;
}

// Smooth Scrolling for Internal Links
function enableSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Download Button Click Event
function handleResourceDownload() {
    resourceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const parent = e.target.closest('.resource');
            const resourceName = parent.querySelector('h3').textContent;
            alert(`Your download for "${resourceName}" will begin shortly!`);
        });
    });
}

// Dark Mode Toggle
function addDarkModeToggle() {
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px 15px";
    darkModeToggle.style.backgroundColor = "#f9d342";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.borderRadius = "8px";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = "Disable Dark Mode";
        } else {
            darkModeToggle.textContent = "Enable Dark Mode";
        }
    });
}

// Initialize all functions
function initializeWellnessPage() {
    setDynamicGreeting();
    enableSmoothScrolling();
    handleResourceDownload();
    addDarkModeToggle();
}

// Call the initializer function
initializeWellnessPage();

// Dark Mode Styling (appended dynamically)
const darkModeStyle = document.createElement('style');
darkModeStyle.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: #f5f5f5;
    }

    .dark-mode h1, .dark-mode h2, .dark-mode h3 {
        background-color: #222;
        color: #f9d342;
    }

    .dark-mode button {
        background-color: #444;
        color: #f5f5f5;
    }

    .dark-mode button:hover {
        background-color: #555;
    }
`;
document.head.appendChild(darkModeStyle);
// Function to handle ingredient search
function searchRecipes() {
    const searchQuery = document.getElementById("ingredient-search-box").value.trim();
    const resultContainer = document.getElementById("recipe-results");

    if (searchQuery === "") {
        resultContainer.innerHTML = "<p>Please enter an ingredient to search.</p>";
        return;
    }

    // Example of how search could work (for demonstration purposes)
    // You could modify this to fetch real data or filter an actual list of recipes
    const mockRecipes = [
        { name: "Avocado Toast", ingredients: ["avocado", "bread", "olive oil", "salt", "pepper"] },
        { name: "Quinoa Salad", ingredients: ["quinoa", "cucumber", "tomato", "olive oil", "lemon"] },
        { name: "Smoothie Bowl", ingredients: ["banana", "berries", "yogurt", "granola"] },
        { name: "Chia Pudding", ingredients: ["chia seeds", "almond milk", "vanilla extract", "honey"] }
    ];

    const filteredRecipes = mockRecipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    if (filteredRecipes.length > 0) {
        resultContainer.innerHTML = "<h3>Recipes Found:</h3><ul>";
        filteredRecipes.forEach(recipe => {
            resultContainer.innerHTML += `<li><strong>${recipe.name}</strong></li>`;
        });
        resultContainer.innerHTML += "</ul>";
    } else {
        resultContainer.innerHTML = `<p>No recipes found with "${searchQuery}". Try again!</p>`;
    }
}

// Smooth scrolling for internal links (like jumping to sections)
document.querySelectorAll('.healthy-recipies a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to highlight recipe cards when hovered
document.querySelectorAll('.healthy-recipies .recipe-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease-in-out";
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll('.blog .post');

    posts.forEach(post => {
        const readMoreButton = post.querySelector('.read-more');
        const readMoreContent = post.querySelector('.read-more-content');

        if (readMoreButton) {
            readMoreButton.addEventListener('click', function () {
                // Toggle the display of the full post content
                readMoreContent.classList.toggle('show');
                // Change button text based on the visibility of the content
                if (readMoreContent.classList.contains('show')) {
                    readMoreButton.textContent = 'Show Less';
                } else {
                    readMoreButton.textContent = 'Read More';
                }
            });
        }
    });
});
// JavaScript for Habit Tracker
function updateTracker() {
    const habits = document.querySelectorAll('.habit input');
    let completed = 0;

    habits.forEach(habit => {
        if (habit.checked) {
            completed++;
        }
    });

    if (completed === habits.length) {
        alert("Great job! You've completed all your habits today!");
    }
}

function resetTracker() {
    const habits = document.querySelectorAll('.habit input');
    habits.forEach(habit => habit.checked = false);
}

// Open event details popup
function openEventDetails(eventId) {
    let eventTitle = '';
    let eventDescription = '';
    let eventLocation = '';

    if (eventId === 'event1') {
        eventTitle = 'Health and Wellness Workshop';
        eventDescription = 'Join us for a full-day workshop where we’ll discuss the importance of mental and physical health, including nutrition and exercise routines. A perfect starting point for anyone looking to improve their lifestyle.';
        eventLocation = 'Health Center, NYC';
    } else if (eventId === 'event2') {
        eventTitle = 'Yoga for Beginners';
        eventDescription = 'This beginner-friendly yoga session will help you understand the basics of yoga poses, breathing exercises, and mindfulness techniques. Suitable for all levels.';
        eventLocation = 'Community Hall, Brooklyn';
    } else if (eventId === 'event3') {
        eventTitle = 'Fitness Bootcamp';
        eventDescription = 'Join our Fitness Bootcamp for an intense workout session designed to push your limits and increase your fitness levels. Trainers will guide you through high-energy exercises.';
        eventLocation = 'Central Park, NYC';
    } else if (eventId === 'event4') {
        eventTitle = 'Meditation Retreat';
        eventDescription = 'Relax, unwind, and reconnect with your inner self at our Meditation Retreat. Located in a peaceful mountain retreat center, this event will offer guided meditations and mindfulness sessions.';
        eventLocation = 'Mountain Retreat Center';
    }

    // Set the event details in the popup
    document.getElementById('event-title').innerText = eventTitle;
    document.getElementById('event-description').innerText = eventDescription;
    document.getElementById('event-location').innerText = 'Location: ' + eventLocation;

    // Show the popup
    document.getElementById('event-popup').style.display = 'flex';
}

// Close the event details popup
function closeEventDetails() {
    document.getElementById('event-popup').style.display = 'none';
}

// Countdown Timer function
function countdownTimer(eventId, targetDate) {
    const countdownElement = document.getElementById(eventId);
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If countdown ends
        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Event Started!";
        }
    }, 1000);
}

// Countdown target dates for each event
const event1Date = new Date('March 25, 2024 10:00:00').getTime();
const event2Date = new Date('April 10, 2024 18:00:00').getTime();
const event3Date = new Date('May 15, 2024 08:00:00').getTime();
const event4Date = new Date('June 20, 2024 09:00:00').getTime();

// Start countdown timers for each event
window.onload = function() {
    countdownTimer('countdown1', event1Date);
    countdownTimer('countdown2', event2Date);
    countdownTimer('countdown3', event3Date);
    countdownTimer('countdown4', event4Date);
};

// Handle form submission
function toggleEventDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === "block" ? "none" : "block";
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const eventSelected = document.getElementById('event-select').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
	


    // Check if an event was selected
    if (eventSelected === "") {
        alert("Please select an event.");
        return;
    }

    // Show a confirmation alert
    alert(`Thank you for registering, ${name}!\nYou have successfully registered for the ${eventSelected} event. We will send more details to ${email}.`);

    // Optionally, you can reset the form after submission
    document.getElementById('registration-form').reset();
}

document.querySelectorAll('.story-images').forEach((container, index) => {
    const images = [`before${index + 1}.jpg`, `after${index + 1}.jpg`]; // Replace with actual image paths
    let currentIndex = 0;

    const imageElement = container.querySelector('.image-slide');
    const prevButton = container.querySelector('.prev-slide');
    const nextButton = container.querySelector('.next-slide');

    // Update displayed image
    const updateImage = () => {
        imageElement.src = images[currentIndex];
    };

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});




