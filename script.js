function bookAppointment() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const list = document.getElementById("appointmentList");

  if (!name || !phone || !date || !time) return;

  const li = document.createElement("li");
  li.textContent = `${name} – ${phone} (${date} v ${time})`;

  list.appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}
