import React from "react";

interface WorkingHoursProps {}

const workDays = [
  { day: "ראשון", morning: "09:00-13:30", evening: "16:30-19:00" },
  { day: "שני", morning: "09:00-13:30", evening: "16:30-19:00" },
  { day: "שלישי", morning: "09:00-13:30", evening: "16:30-19:00" },
  { day: "רביעי", morning: "09:00-13:30", evening: "16:30-19:00" },
  { day: "חמישי", morning: "09:00-13:30", evening: "16:30-19:00" },
  { day: "שישי", morning: "09:00-14:00", evening: "" },
  { day: "שבת", morning: "סגור", evening: "" },
];

const WorkingHours: React.FunctionComponent<WorkingHoursProps> = () => {
  return (
    <section className="workingHoursSection" aria-label="שעות פעילות">
      <div className="workingHoursShell">
        <h2 className="workingHoursTitle">שעות פעילות</h2>
        <div className="workingHoursTableWrap">
          <table className="workingHoursTable">
            <tbody>
              {workDays.map(({ day, morning, evening }) => (
                <tr key={day}>
                  <td className="workingHoursDay">{day}</td>
                  <td className="workingHoursTime">{evening || "-"}</td>
                  <td className="workingHoursTime">{morning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
