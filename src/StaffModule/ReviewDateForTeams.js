import React from 'react';

function ReviewDateForTeams() {
  return (
    <div>
      <div className="schedule-container" style={{ position: 'relative', width: '100%', margin: '0', padding: '10px', height: '150px', marginTop: '8px' }}>
        <div className="datetime-info" style={{marginTop:'35px'}}>
          <p>Your upcoming project review is scheduled for:</p>
          <p>Date: <strong>February 15, 2024</strong></p>
          <p>Time: <strong>10:00 AM</strong></p>
        </div>
        <div style={{ position: 'absolute', top: '0', left: '0', margin: '5px', padding: '5px', backgroundColor: '#007BFF', color: '#FFFFFF', borderRadius: '5px' }}>
          Team: <strong>A01</strong>
        </div>
      </div>
    </div>
  );
}

export default ReviewDateForTeams;
