
CREATE TABLE meeting_bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  meeting_date DATE NOT NULL,
  meeting_time TEXT NOT NULL,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_meeting_bookings_email ON meeting_bookings(email);
CREATE INDEX idx_meeting_bookings_date ON meeting_bookings(meeting_date);
CREATE INDEX idx_meeting_bookings_created_at ON meeting_bookings(created_at);
