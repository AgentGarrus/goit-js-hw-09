const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('input', () => {
  localStorage.setItem('feedback-form-state', JSON.stringify({
    email: emailInput.value,
    message: messageInput.value,
  }));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  form.reset();
  localStorage.removeItem('feedback-form-state');
});