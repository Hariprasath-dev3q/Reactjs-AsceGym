import { useEffect, useState } from "react";
import axios from 'axios';

function Schedule() {

  const [schedule, setSchedule] = useState([]);
  const [day, setDay] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/class_schedule')
      .then((res) => setSchedule(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = day ? schedule.filter(s => s.day_of_week === day) : schedule;

  return (
    <div className="container mt-4 mb-4">
      <h3 className="mb-3">Class Schedule</h3>

      <div >
        <select className="mb-3" onChange={(e) => setDay(e.target.value)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      <div className="mt-3 mb-3">
        <table className=" table table-striped table-responsive">
          <thead>
            <tr>
              {/* <th>S.no</th> */}
              <th>Class</th>
              <th>Trainer</th>
              <th>Day</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(cls => (
              <tr key={cls.id}>
                <td className="p-2 border">{cls.class_name}</td>
                <td className="p-2 border">{cls.trainer_name}</td>
                <td className="p-2 border">{cls.day_of_week}</td>
                <td className="p-2 border">{cls.start_time.slice(0, 5)}</td>
                <td className="p-2 border">{cls.end_time.slice(0, 5)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;    
