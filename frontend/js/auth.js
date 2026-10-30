const API="https://dinehub-backend-mskg.onrender.com/api";

async function post(path, body) {
    const response = await fetch(API + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Request failed");
    }

    return data;
}


// ================= REGISTER =================

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {

    e.preventDefault();

    const msg = document.getElementById("message");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const data = await post("/auth/register", {
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem("dinehub_token", data.token);
        localStorage.setItem("dinehub_user", JSON.stringify(data.user));

        window.location.href = "index.html";

    } catch (error) {

        msg.textContent = error.message;
    }
});


// ================= LOGIN =================

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {

    e.preventDefault();

    const msg = document.getElementById("message");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const data = await post("/auth/login", {
            email: email,
            password: password
        });

        localStorage.setItem("dinehub_token", data.token);
        localStorage.setItem("dinehub_user", JSON.stringify(data.user));

        window.location.href = "index.html";

    } catch (error) {

        msg.textContent = error.message;
    }
});