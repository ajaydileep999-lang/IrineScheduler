import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const COLLECTION = "appointments";

// Save appointment
export async function saveAppointment(data) {
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return docRef.id;
}

// Load appointments
export async function loadAppointments() {
  const snapshot = await getDocs(collection(db, COLLECTION));

  let appointments = [];

  snapshot.forEach((d) => {
    appointments.push({
      id: d.id,
      ...d.data()
    });
  });

  return appointments;
}

// Update appointment
export async function updateAppointment(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data);
}

// Delete appointment
export async function deleteAppointment(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}