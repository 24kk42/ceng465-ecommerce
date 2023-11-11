const customersData = [
    {
        "first_name": "Alice",
        "last_name": "Smith",
        "country": "USA",
        "city": "New York",
        "email": "alice.smith@mail.com",
        "birth_date": "07-25-1992",
        "account_date": "2023-11-11"
      },
      {
        "first_name": "Bob",
        "last_name": "Johnson",
        "country": "Canada",
        "city": "Toronto",
        "email": "bob.johnson@mail.com",
        "birth_date": "02-05-1988",
        "account_date": "2021-08-09"
      },
      {
        "first_name": "Charlie",
        "last_name": "Brown",
        "country": "UK",
        "city": "London",
        "email": "charlie.brown@mail.com",
        "birth_date": "06-22-2000",
        "account_date": "2022-12-09"
      },
      {
        "first_name": "Mehmet",
        "last_name": "Yilmaz",
        "country": "Turkiye",
        "city": "Izmir",
        "email": "mehmet.yilmaz@mail.com",
        "birth_date": "04-12-1973",
        "account_date": "2023-07-17"
      },
      {
        "first_name": "Hans",
        "last_name": "Müller",
        "country": "Germany",
        "city": "Münich",
        "email": "hans.muller@mail.com",
        "birth_date": "09-18-1990",
        "account_date": "2023-09-09"
      },
      {
        "first_name": "Monica",
        "last_name": "Maldini",
        "country": "Italy",
        "city": "Milan",
        "email": "monica.maldini@mail.com",
        "birth_date": "12-30-1982",
        "account_date": "2022-01-05"
      },
      {
        "first_name": "Ayşe",
        "last_name": "Demir",
        "country": "Turkiye",
        "city": "Istanbul",
        "email": "ayse.demir@mail.com",
        "birth_date": "05-07-2005",
        "account_date": "2020-05-18"
      },
      {
        "first_name": "Mauricio",
        "last_name": "Fernandez",
        "country": "Spain",
        "city": "Madrid",
        "email": "mauricio.fernandez@mail.com",
        "birth_date": "08-15-1979",
        "account_date": "2023-04-10"
      },
      {
        "first_name": "Charles",
        "last_name": "Laurent",
        "country": "France",
        "city": "Montpellier",
        "email": "charles.laurent@mail.com",
        "birth_date": "03-02-1998",
        "account_date": "2023-06-09"
      },
      {
        "first_name": "Isabella",
        "last_name": "Alvarez",
        "country": "Spain",
        "city": "Sevilla",
        "email": "isabella.alvarez@mail.com",
        "birth_date": "11-10-1985",
        "account_date": "2019-10-10"
      }
]
db.customers.insertMany(customersData);