function bookAppointment() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const list = document.getElementById("appointmentList");

  if (!name || !phone) return;

  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];

  const li = document.createElement("li");
  li.textContent = `${name} – ${phone} (${formattedDate})`;

  list.appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}
