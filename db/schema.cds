namespace sap.fe.cap.travel;

entity Travel {
    key TravelUUID : UUID;
    TravelID       : String(50);
}

entity Booking {
    key BookingUUID : UUID;
    BookingID       : String(50);

    to_Travel : Association to Travel;
}

entity BookingStatus {
    key code : String(20);
    name     : String(100);
}
