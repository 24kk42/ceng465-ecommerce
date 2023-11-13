const customersData = [
  {
    "first_name": "Alice",
    "last_name": "Smith",
    "country": "USA",
    "city": "New York",
    "email": "alice.smith@mail.com",
    "birth_date": "07-25-1992",
    "created_at": "2023-11-11",
    "password": "password123",
    "address": "123 Main St",
    "postal_code": "10001",
    "phone_number": "123-456-7890",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1111 2222 3333 4444",
        "expire_date": "10/2025",
        "security_code": "321",
        "card_name": "Alice's Visa",
        "provider": "Visa"
      },
      {
        "card_no": "5555 6666 7777 8888",
        "expire_date": "05/2024",
        "security_code": "456",
        "card_name": "Alice's Mastercard",
        "provider": "Mastercard"
      }
    ]
  },
  {
    "first_name": "Bob",
    "last_name": "Johnson",
    "country": "Canada",
    "city": "Toronto",
    "email": "bob.johnson@mail.com",
    "birth_date": "02-05-1988",
    "created_at": "2021-08-09",
    "password": "pass123word",
    "address": "456 King St",
    "postal_code": "M5V 1L9",
    "phone_number": "416-789-1234",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "7777 8888 9999 0000",
        "expire_date": "09/2028",
        "security_code": "789",
        "card_name": "Bob's Amex",
        "provider": "American Express"
      }
    ]
  },
  {
    "first_name": "Charlie",
    "last_name": "Brown",
    "country": "UK",
    "city": "London",
    "email": "charlie.brown@mail.com",
    "birth_date": "06-22-2000",
    "created_at": "2022-12-09",
    "password": "abc987xyz",
    "address": "789 High St",
    "postal_code": "EC1A 1BB",
    "phone_number": "44-20-1234-5678",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1234 5678 9012 3456",
        "expire_date": "07/2024",
        "security_code": "234",
        "card_name": "Charlie's Mastercard",
        "provider": "Mastercard"
      },
      {
        "card_no": "9876 5432 1098 7654",
        "expire_date": "03/2026",
        "security_code": "567",
        "card_name": "Charlie's Visa",
        "provider": "Visa"
      }
    ]
  },
  {
    "first_name": "Mehmet",
    "last_name": "Yilmaz",
    "country": "Turkiye",
    "city": "Izmir",
    "email": "mehmet.yilmaz@mail.com",
    "birth_date": "04-12-1973",
    "created_at": "2023-07-17",
    "password": "mehmetPass123",
    "address": "987 Crescent Rd",
    "postal_code": "35040",
    "phone_number": "90-232-123-4567",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1111 2222 3333 4444",
        "expire_date": "05/2026",
        "security_code": "321",
        "card_name": "Mehmet's Visa",
        "provider": "Visa"
      }
    ]
  },
  {
    "first_name": "Hans",
    "last_name": "Müller",
    "country": "Germany",
    "city": "Münich",
    "email": "hans.muller@mail.com",
    "birth_date": "09-18-1990",
    "created_at": "2023-09-09",
    "password": "HansPass789",
    "address": "567 Bergstrasse",
    "postal_code": "80331",
    "phone_number": "49-89-1234-5678",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "7777 8888 9999 0000",
        "expire_date": "08/2025",
        "security_code": "789",
        "card_name": "Hans's Mastercard",
        "provider": "Mastercard"
      }
    ]
  },
  {
    "first_name": "Monica",
    "last_name": "Maldini",
    "country": "Italy",
    "city": "Milan",
    "email": "monica.maldini@mail.com",
    "birth_date": "12-30-1982",
    "created_at": "2022-01-05",
    "password": "moniPass2023",
    "address": "654 Via Garibaldi",
    "postal_code": "20121",
    "phone_number": "39-02-1234-5678",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1234 5678 9012 3456",
        "expire_date": "11/2029",
        "security_code": "234",
        "card_name": "Monica's Mastercard",
        "provider": "Mastercard"
      }
    ]
  },
  {
    "first_name": "Ayşe",
    "last_name": "Demir",
    "country": "Turkiye",
    "city": "Istanbul",
    "email": "ayse.demir@mail.com",
    "birth_date": "05-07-2005",
    "created_at": "2020-05-18",
    "password": "Ayse12345",
    "address": "321 Sultanahmet Sk",
    "postal_code": "34122",
    "phone_number": "90-212-123-4567",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "5555 6666 7777 8888",
        "expire_date": "12/2024",
        "security_code": "456",
        "card_name": "Ayşe's Visa",
        "provider": "Visa"
      }
    ]
  },
  {
    "first_name": "Mauricio",
    "last_name": "Fernandez",
    "country": "Spain",
    "city": "Madrid",
    "email": "mauricio.fernandez@mail.com",
    "birth_date": "08-15-1979",
    "created_at": "2023-04-10",
    "password": "4Mauri5Pass6",
    "address": "432 Calle de Alcala",
    "postal_code": "28017",
    "phone_number": "34-91-123-4567",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "9876 5432 1098 7654",
        "expire_date": "07/2026",
        "security_code": "567",
        "card_name": "Mauricio's Mastercard",
        "provider": "Mastercard"
      }
    ]
  },
  {
    "first_name": "Charles",
    "last_name": "Laurent",
    "country": "France",
    "city": "Montpellier",
    "email": "charles.laurent@mail.com",
    "birth_date": "03-02-1998",
    "created_at": "2023-06-09",
    "password": "ChaCha1899",
    "address": "765 Rue de la Loge",
    "postal_code": "34000",
    "phone_number": "33-4-1234-5678",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1111 2222 3333 4444",
        "expire_date": "02/2025",
        "security_code": "321",
        "card_name": "Charles's Visa",
        "provider": "Visa"
      },
      {
        "card_no": "5555 6666 7777 8888",
        "expire_date": "09/2025",
        "security_code": "456",
        "card_name": "Charles's Mastercard",
        "provider": "Mastercard"
      }
    ]
  },
  {
    "first_name": "Isabella",
    "last_name": "Alvarez",
    "country": "Spain",
    "city": "Sevilla",
    "email": "isabella.alvarez@mail.com",
    "birth_date": "11-10-1985",
    "created_at": "2019-10-10",
    "password": "BellPassLa",
    "address": "876 Avenida de la Constitución",
    "postal_code": "41004",
    "phone_number": "34-955-123-456",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1234 5678 9012 3456",
        "expire_date": "05/2024",
        "security_code": "234",
        "card_name": "Isabella's Visa",
        "provider": "Visa"
      }
    ]
  }
];


db.customers.insertMany(customersData);
db.customers.createIndex({ email: 1 }, { unique: true },{ name: "emailSortedIndex" });

