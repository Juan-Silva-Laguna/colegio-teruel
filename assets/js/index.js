// Mobile Menu Toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu")
  const hamburger = document.getElementById("hamburger")

  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const navHeight = 80

  if (element) {
    const elementPosition = element.offsetTop - navHeight
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }

  // Close mobile menu if open
  const navMenu = document.getElementById("navMenu")
  const hamburger = document.getElementById("hamburger")
  navMenu.classList.remove("active")
  hamburger.classList.remove("active")
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in class to elements that should animate
  const animatedElements = document.querySelectorAll(".about-card, .program-card, .news-card, .step, .stat-item")

  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Counter Animation for Stats
  const statNumbers = document.querySelectorAll(".stat-number")

  const animateCounter = (element) => {
    const target = Number.parseInt(element.textContent.replace(/[^\d]/g, ""))
    const increment = target / 100
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }

      // Format the number based on original text
      const originalText = element.textContent
      if (originalText.includes("+")) {
        element.textContent = Math.floor(current) + "+"
      } else if (originalText.includes("%")) {
        element.textContent = Math.floor(current) + "%"
      } else {
        element.textContent = Math.floor(current)
      }
    }, 20)
  }

  // Observe stat numbers for counter animation
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat)
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const navMenu = document.getElementById("navMenu")
  const hamburger = document.getElementById("hamburger")
  const navbar = document.querySelector(".navbar")

  if (!navbar.contains(event.target) && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  }
})

// Prevent menu close when clicking inside navbar
document.querySelector(".navbar").addEventListener("click", (event) => {
  event.stopPropagation()
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Form submission handlers (if you add forms later)
function handleFormSubmission(formId) {
  const form = document.getElementById(formId)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // Add your form submission logic here
      alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.")
    })
  }
}

// Initialize form handlers
document.addEventListener("DOMContentLoaded", () => {
  // Add any form IDs here when you create forms
  // handleFormSubmission('contact-form');
  // handleFormSubmission('admission-form');
})

// Utility function for smooth animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in:not(.visible)")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

// Alternative scroll animation (backup)
window.addEventListener("scroll", animateOnScroll)

// Parallax effect for hero section (optional)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroSection = document.querySelector(".hero-section")

  if (heroSection) {
    const rate = scrolled * -0.5
    heroSection.style.transform = `translateY(${rate}px)`
  }
})

// Add smooth hover effects
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".about-card, .program-card, .news-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})
