const emailInput = document.getElementById("email");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();

    if (!email) {
        message.textContent = "Masukkan email dulu.";
        return;
    }

    loginBtn.disabled = true;
    message.textContent = "Mengirim link login...";

    const { error } = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: "https://toko-tinta.vercel.app/admin.html",
            shouldCreateUser: false
        }
    });

    if (error) {
        console.error(error);
        message.textContent = "Gagal mengirim link: " + error.message;
    } else {
        message.textContent =
            "Link login sudah dikirim ke email. Cek inbox kamu.";
    }

    loginBtn.disabled = false;
});