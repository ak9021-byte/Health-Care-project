-- Step 1: Create a database
CREATE DATABASE hospital_db;

-- Step 2: Use the database
USE hospital_db;

-- Step 3: Create a table for patient details
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    height VARCHAR(10),
    weight VARCHAR(10),
    address VARCHAR(100),
    disease VARCHAR(100),
    symptoms TEXT,
    treatment TEXT,
    doctor VARCHAR(50)
);

-- Step 4: Insert all your data
INSERT INTO patients (name, age, height, weight, address, disease, symptoms, treatment, doctor)
VALUES
('Rohit Sharma', 45, '5\'8\"', '70kg', 'Pune', 'Heart Disease', 'Chest pain, shortness of breath', 'Angioplasty, BP medication', 'Dr. Arjun Mehta'),
('Neha Desai', 50, '5\'4\"', '65kg', 'Mumbai', 'Diabetes', 'Fatigue, frequent urination', 'Insulin therapy, diet plan', 'Dr. Priya Shah'),
('Amit Verma', 35, '5\'7\"', '68kg', 'Nagpur', 'Asthma', 'Coughing, wheezing', 'Inhaler, breathing exercises', 'Dr. Sameer Kulkarni'),
('Kiran Joshi', 60, '5\'6\"', '74kg', 'Nashik', 'Heart Disease', 'Irregular heartbeat, fatigue', 'Pacemaker, medication', 'Dr. Arjun Mehta'),
('Riya Patil', 42, '5\'3\"', '59kg', 'Kolhapur', 'Diabetes', 'Weight loss, frequent thirst', 'Metformin, low-sugar diet', 'Dr. Priya Shah'),
('Vikas Rao', 29, '5\'9\"', '75kg', 'Aurangabad', 'Asthma', 'Cough, chest tightness', 'Steroid inhaler, allergy control', 'Dr. Sameer Kulkarni'),
('Sonal Gupta', 37, '5\'5\"', '60kg', 'Pune', 'Heart Disease', 'Breathing difficulty, chest pain', 'Lifestyle change, beta-blockers', 'Dr. Arjun Mehta');

-- Step 5: Display all data
SELECT * FROM patients;
