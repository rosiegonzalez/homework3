window.addEventListener("load", () => {
  const userNameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password_");

  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    const username = userNameInput.value;

    const password = userNameInput.value;

    console.log(`Username: ${username}, Password: ${password}`);

    let message = document.createElement("p");

    message.textContent = ` Welcome User: ${username}`;

    console.log(message);

    document.body.appendChild(message);
  });
});
