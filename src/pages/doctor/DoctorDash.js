import React from "react";

const todaysAppointments = [
  { id: 1, time: "09:00 AM", patientName: "Moe1", reason: "Check-up" },
  { id: 2, time: "10:30 AM", patientName: "Moe2", reason: "Follow-up" },
  {
    id: 3,
    time: "02:00 PM",
    patientName: "mike tyson",
    reason: "Consultation",
  },
];

const appointmentRequests = [
  {
    id: 1,
    date: "2024-11-10",
    time: "11:00 AM",
    patientName: "Mahad",
    reason: "Checkup",
  },
  {
    id: 2,
    date: "2024-11-12",
    time: "03:30 PM",
    patientName: "J",
    reason: "Headache",
  },
  {
    id: 3,
    date: "2024-11-15",
    time: "10:00 AM",
    patientName: "Rohan",
    reason: "Back Pain",
  },
];

export const DoctorDash = () => {
  return (
    <div>
      <header>
        <h1>Doctor Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Today's Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todaysAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.time}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Appointment Requests Section */}
        <section>
          <h2>Appointment Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointmentRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.date}</td>
                  <td>{request.time}</td>
                  <td>{request.patientName}</td>
                  <td>{request.reason}</td>
                  <td>
                    <button>Accept</button>
                    <button>Decline</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};
