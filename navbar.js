// Mobile Menu JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle")
    const mobileMenu = document.getElementById("mobileMenu")
    const navbar = document.querySelector(".navbar")
  
    if (mobileMenuToggle && mobileMenu && navbar) {
      // Get navbar height and set mobile menu top position dynamically
      const updateMenuPosition = () => {
        const navbarHeight = navbar.offsetHeight
        mobileMenu.style.top = `${navbarHeight}px`
        mobileMenu.style.height = `calc(100vh - ${navbarHeight}px)`
      }
  
      // Run on load
      updateMenuPosition()
  
      // Run on window resize
      window.addEventListener("resize", updateMenuPosition)
  
      // Toggle mobile menu when hamburger button is clicked
      mobileMenuToggle.addEventListener("click", function (e) {
        e.stopPropagation() // Prevent event from bubbling up
        mobileMenu.classList.toggle("active")
  
        // Transform hamburger to X
        const spans = this.querySelectorAll("span")
        if (mobileMenu.classList.contains("active")) {
          spans[0].style.transform = "rotate(45deg) translate(5px, 6px)"
          spans[1].style.opacity = "0"
          spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)"
        } else {
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      })
  
      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("active")
  
          // Reset hamburger icon
          const spans = mobileMenuToggle.querySelectorAll("span")
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        })
      })
  
      // Close mobile menu when clicking outside
      document.addEventListener("click", (event) => {
        if (
          !mobileMenuToggle.contains(event.target) &&
          !mobileMenu.contains(event.target) &&
          mobileMenu.classList.contains("active")
        ) {
          mobileMenu.classList.remove("active")
  
          // Reset hamburger icon
          const spans = mobileMenuToggle.querySelectorAll("span")
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      })
    }
  })
  