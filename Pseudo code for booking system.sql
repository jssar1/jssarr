START
DISPLAY "Book Now" button
WHEN user clicks "Book Now"
    OPEN booking form
    GET user input (name, email, check-in date, check-out date)
    IF input fields are empty
        DISPLAY "Please fill out all fields"
    ELSE IF check-in date is after check-out date
        DISPLAY "Check-out date must be after check-in date"
    ELSE
        CONFIRM booking
        DISPLAY "Booking successful"
    ENDIF
CLOSE booking form
END
