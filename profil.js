document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-btn");
    const inputs = document.querySelectorAll("#profile-form input");
    const nameDisplay = document.querySelector(".profile-card h2");
    const emailDisplay = document.querySelector(".profile-card p");
  
    // Toggle Edit and Save
    editButton.addEventListener("click", function () {
      if (editButton.textContent.trim() === "Edit") {
        inputs.forEach((input) => input.removeAttribute("readonly"));
        editButton.textContent = "Simpan";
      } else {
        inputs.forEach((input) => input.setAttribute("readonly", true));
        editButton.textContent = "Edit";
        nameDisplay.textContent = document.getElementById("fullname").value;
        emailDisplay.textContent = document.getElementById("email").value;
        alert("Perubahan telah disimpan.");
      }
    });
  
    // Show Delete Account Modal
    document.getElementById("delete-btn").addEventListener("click", function () {
      showModal("deleteAccountModal");
    });
  
    // Show Change Password Modal
    document
      .getElementById("change-password")
      .addEventListener("click", function () {
        showModal("changePasswordModal");
      });
  
    // Close modal when clicking on the close button or outside the modal
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.querySelector(".close").addEventListener("click", function () {
        closeModal(modal.id);
      });
    });
  
    window.onclick = function (event) {
      modals.forEach((modal) => {
        if (event.target === modal) {
          closeModal(modal.id);
        }
      });
    };
  });
  
  // Utility function to show a modal
  function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }
  
  // Utility function to close a modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Change Password function inside the modal
  function changePassword() {
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword =
      document.getElementById("confirmNewPassword").value;
  
    if (newPassword === confirmNewPassword) {
      alert("Kata sandi Anda telah diperbarui.");
      closeModal("changePasswordModal");
    } else {
      alert("Kata sandi baru tidak cocok. Coba lagi.");
    }
  }
  
  // Confirm Delete Account function inside the modal
  function confirmDeleteAccount() {
    const passwordConfirmation = document.getElementById(
      "passwordConfirmation"
    ).value;
  
    if (passwordConfirmation) {
      alert("Akun Anda telah dihapus.");
      closeModal("deleteAccountModal");
    } else {
      alert("Harap masukkan kata sandi.");
    }
  }

  