Thinkful Capstone: Periodic Tables
Live app is available here: A full-stack app built using:

HTML
CSS
JavaScript
React
Express
Knex
PostgreSQL API


Available API Endpoints
URL	Method	Description
/reservations?date=YYYY-MM-DD	GET	Lists all reservations for the date specified
/reservations?mobile_number=999-999-9999	GET	Lists all reservations for the phone number specified
/reservations	POST	Creates a new reservation
/reservations/:reservationId	GET	Reads a reservation by reservation_id
/reservations/:reservationId	PUT	Updates a reservation by reservation_id
/reservations/:reservationId/status	PUT	Updates the status of a reservation by reservation_id
/tables	GET	Lists all tables
/tables	POST	Creates a new table
/tables/:table_id/seat	PUT	Seats a reservation at a table
/tables/:table_id/seat	DELETE	Finishes an occupied table
