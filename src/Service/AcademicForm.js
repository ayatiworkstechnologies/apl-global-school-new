import { sendApplicationEmail } from './emailService'; // ✅ import it at top

const onSubmit = async (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === "resume" && value.length > 0) {
      formData.append("resume", value[0]);
    } else {
      formData.append(key, value);
    }
  });

  const response = await sendApplicationEmail(formData);

  if (response.success) {
    alert("Form submitted successfully!");
    reset();
    document.getElementById("fileName").textContent = "No file chosen";
  } else {
    console.error("EmailJS Error:", response.error);
    alert("Something went wrong. Please try again.");
  }
};
