// DOM References
const content = document.getElementById("content");
const loader = document.getElementById("loader");
const doctorModal = document.getElementById("doctorModal");
const closeModal = document.getElementById("closeModal");
const patientModal = document.getElementById("patientModal");
const closePatientModal = document.getElementById("closePatientModal");

// Sidebar & Navbar
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("clearSearch").addEventListener("click", () => {
  document.getElementById("searchBar").value = "";
  showHome();
});

// Loader function
function showLoader() {
  loader.style.display = "flex";
  setTimeout(() => (loader.style.display = "none"), 700);
}

// Doctor Data
const doctors = [
  { name: "Dr. Arjun Mehta", specialty: "Cardiologist", img: "https://cdn-icons-png.flaticon.com/512/607/607414.png", contact: "arjun@hospital.com", experience: "12 years", department: "Heart Department" },
  { name: "Dr. Priya Shah", specialty: "Endocrinologist", img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", contact: "priya@hospital.com", experience: "10 years", department: "Diabetes Center" },
  { name: "Dr. Sameer Kulkarni", specialty: "Pulmonologist", img: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png", contact: "sameer@hospital.com", experience: "8 years", department: "Asthma Unit" }
];

// Patient Data (7 total)
const patients = [
  { name: "Rohit Sharma", age: 45, height: "5'8\"", weight: "70kg", address: "Pune", disease: "Heart Disease", symptoms: "Chest pain, shortness of breath", doctor: "Dr. Arjun Mehta", treatment: "Angioplasty, BP medication" },
  { name: "Neha Desai", age: 50, height: "5'4\"", weight: "65kg", address: "Mumbai", disease: "Diabetes", symptoms: "Fatigue, frequent urination", doctor: "Dr. Priya Shah", treatment: "Insulin therapy, diet plan" },
  { name: "Amit Verma", age: 35, height: "5'7\"", weight: "68kg", address: "Nagpur", disease: "Asthma", symptoms: "Coughing, wheezing", doctor: "Dr. Sameer Kulkarni", treatment: "Inhaler, breathing exercises" },
  { name: "Kiran Joshi", age: 60, height: "5'6\"", weight: "74kg", address: "Nashik", disease: "Heart Disease", symptoms: "Irregular heartbeat, fatigue", doctor: "Dr. Arjun Mehta", treatment: "Pacemaker, medication" },
  { name: "Riya Patil", age: 42, height: "5'3\"", weight: "59kg", address: "Kolhapur", disease: "Diabetes", symptoms: "Weight loss, frequent thirst", doctor: "Dr. Priya Shah", treatment: "Metformin, low-sugar diet" },
  { name: "Vikas Rao", age: 29, height: "5'9\"", weight: "75kg", address: "Aurangabad", disease: "Asthma", symptoms: "Cough, chest tightness", doctor: "Dr. Sameer Kulkarni", treatment: "Steroid inhaler, allergy control" },
  { name: "Sonal Gupta", age: 37, height: "5'5\"", weight: "60kg", address: "Pune", disease: "Heart Disease", symptoms: "Breathing difficulty, chest pain", doctor: "Dr. Arjun Mehta", treatment: "Lifestyle change, beta-blockers" }
];

// Home Page
function showHome() {
  showLoader();
  setTimeout(() => {
    content.innerHTML = `
      <div class="home-section">
        <button class="patient-list-btn" id="patientListBtn">👥 List of Patients</button>

        <!-- Doctors Section -->
        <h2 class="section-header">🩺  Doctors</h2>
        <div class="doctor-container">
          ${doctors.map(doc => `
            <div class="doctor-card">
              <img src="${doc.img}" />
              <h3>${doc.name}</h3>
              <p>${doc.specialty}</p>
            </div>
          `).join("")}
        </div>

       <!-- Patient Section -->
<div class="patient-section" id="patientSection" style="display:none;">
  <h2 class="section-header">🧍‍♂️ Patient List</h2>
  <div class="show-patients">
    ${patients.map(p => `
      <div class="patient-card">
        <h3>${p.name}</h3>
        <p>${p.disease}</p>
      </div>
    `).join("")}
  </div>
</div>

      </div>
    `;
    setupDoctorCards();
    setupPatientCards();
    document.getElementById("patientListBtn").addEventListener("click", togglePatientList);
  }, 400);
}


// Toggle Patient Section
function togglePatientList() {
  const patientSection = document.getElementById("patientSection");
  patientSection.style.display = (patientSection.style.display === "none" || !patientSection.style.display) ? "block" : "none";
}

// Doctor Modal
function setupDoctorCards() {
  const doctorCards = document.querySelectorAll(".doctor-card");
  doctorCards.forEach((card, i) => {
    card.addEventListener("click", () => {
      const doc = doctors[i];
      document.getElementById("modalDoctorImg").src = doc.img;
      document.getElementById("modalDoctorName").textContent = doc.name;
      document.getElementById("modalDoctorSpecialty").textContent = `Specialty: ${doc.specialty}`;
      document.getElementById("modalDoctorContact").textContent = `Contact: ${doc.contact}`;
      document.getElementById("modalDoctorExperience").textContent = `Experience: ${doc.experience}`;
      document.getElementById("modalDoctorDepartment").textContent = `Department: ${doc.department}`;
      doctorModal.style.display = "flex";
    });
  });
}

closeModal.addEventListener("click", () => (doctorModal.style.display = "none"));
window.addEventListener("click", e => { if (e.target === doctorModal) doctorModal.style.display = "none"; });

// Patient Modal
function setupPatientCards() {
  const patientCards = document.querySelectorAll(".patient-card");
  patientCards.forEach(card => {
    card.addEventListener("click", () => {
      const pName = card.querySelector("h3").textContent;
      const p = patients.find(pt => pt.name === pName);
      if (!p) return;

      document.getElementById("patientName").textContent = p.name;
      document.getElementById("patientAge").textContent = `Age: ${p.age}`;
      document.getElementById("patientHeight").textContent = `Height: ${p.height}`;
      document.getElementById("patientWeight").textContent = `Weight: ${p.weight}`;
      document.getElementById("patientAddress").textContent = `Address: ${p.address}`;
      document.getElementById("patientDisease").textContent = `Disease: ${p.disease}`;
      document.getElementById("patientSymptoms").textContent = `Symptoms: ${p.symptoms}`;
      document.getElementById("patientTreatment").textContent = `Treatment: ${p.treatment}`;
      document.getElementById("patientDoctor").textContent = `Doctor: ${p.doctor}`;
      patientModal.style.display = "flex";
    });
  });
}

closePatientModal.addEventListener("click", () => (patientModal.style.display = "none"));
window.addEventListener("click", e => { if (e.target === patientModal) patientModal.style.display = "none"; });

// Disease Filter Pages
document.getElementById("homeBtn").addEventListener("click", showHome);
document.getElementById("heartBtn").addEventListener("click", () => showPatientsByDisease("Heart Disease"));
document.getElementById("diabetesBtn").addEventListener("click", () => showPatientsByDisease("Diabetes"));
document.getElementById("asthmaBtn").addEventListener("click", () => showPatientsByDisease("Asthma"));

// Disease page with stylish info card
function showPatientsByDisease(disease) {
  showLoader();
  setTimeout(() => {
    const filtered = patients.filter(p => p.disease.toLowerCase().includes(disease.toLowerCase()));
    const totalPatients = filtered.length;
    const treatments = [...new Set(filtered.map(p => p.treatment))].join(", ");

    content.innerHTML = `
      <div class="disease-info-card">
        <h2>${disease}</h2>
        <div class="info-grid">
          <div class="info-box patients-box">
            <span>🧍‍♂️</span>
            <div>
              <h3>${totalPatients}</h3>
              <p>Total Patients</p>
            </div>
          </div>
          <div class="info-box treatment-box">
            <span>💊</span>
            <div>
              <h3>${treatments || "N/A"}</h3>
              <p>Common Treatments</p>
            </div>
          </div>
        </div>
      </div>

      <div class="show-patients">
        ${filtered.length ? filtered.map(p => `
          <div class="patient-card">
            <h3>${p.name}</h3>
            <p>${p.disease}</p>
          </div>
        `).join("") : `<p>No patients found for ${disease}</p>`}
      </div>
    `;
    setupPatientCards();
  }, 400);
}

// === 🔍 Search Function (Patients + Highlighting) ===
document.getElementById("searchBar").addEventListener("input", () => {
  const query = document.getElementById("searchBar").value.trim().toLowerCase();
  if (!query) {
    showHome();
    return;
  }

  const matchedPatients = patients.filter(p => p.name.toLowerCase().includes(query));
  if (matchedPatients.length) {
    content.innerHTML = `
      <h2 class="section-header">👨‍⚕️ Search Results (Patients)</h2>
      <div class="show-patients">
        ${matchedPatients.map(p => {
          const highlightedName = p.name.replace(new RegExp(query, "gi"), match => `<b>${match}</b>`);
          return `
            <div class="patient-card">
              <h3>${highlightedName}</h3>
              <p>${p.disease}</p>
            </div>
          `;
        }).join("")}
      </div>
    `;
    setupPatientCards();
  } else {
    content.innerHTML = `<p>No patients found for "${query}".</p>`;
  }
});



// Initialize
showHome();