document.addEventListener("DOMContentLoaded", () => {
    // Get all FAQ items
    const faqItems = document.querySelectorAll(".faq-item")
  
    // Add click event listener to each FAQ item
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      const content = item.querySelector(".faq-content")
      const icon = item.querySelector(".faq-icon")
  
      question.addEventListener("click", () => {
        // Toggle the active class on the content
        const isActive = content.classList.toggle("active")
  
        // Change the icon based on the state
        icon.textContent = isActive ? "-" : "+"
  
        // 🔹 Make question blue when active
        question.classList.toggle("active", isActive)

        // Close other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherQuestion = otherItem.querySelector(".faq-question")
            const otherContent = otherItem.querySelector(".faq-content")
            const otherIcon = otherItem.querySelector(".faq-icon")
  
            if (otherContent.classList.contains("active")) {
              otherQuestion.classList.remove("active")
              otherContent.classList.remove("active")
              otherIcon.textContent = "+"
            }
          }
        })
      })
    })
  })
  