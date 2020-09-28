db = db.getSiblingDB("hipages");
db.leads.insert({
  Full_name: "Luke Skywalker",
  Phone_num: "0412345678",
  Email: "luke@mailinator.com",
  Suburb: "Sydney",
  Category: "Plumbing",
  Price: 20.0,
  Status: "Created",
  CreatedDate: new Date(),
  Description:
    "Integer aliquam pulvinar odio et convallis. Integer id tristique ex. Aenean scelerisque massa vel est sollicitudin vulputate. Suspendisse quis ex eu ligula elementum suscipit nec a est. Aliquam a gravida diam. Donec placerat magna posuere massa maximus vehicula. Cras nisl ipsum, fermentum nec odio in, ultricies dapibus risus. Vivamus neque.",
});
db.leads.insert({
  Full_name: "Han Solo",
  Phone_num: "0498765432",
  Email: "han@mailinator.com",
  Suburb: "Manly",
  Category: "Carpentry",
  Status: "Created",
  CreatedDate: new Date(),
  Price: 45.5,
  Description:
    "Aliquam posuere est sit amet libero egestas tempus. Donec ut efficitur sapien. Sed molestie nec lacus malesuada suscipit. Aliquam suscipit nibh at posuere tempor. Etiam a sollicitudin felis. In et enim leo. Morbi vel imperdiet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere auctor elit, id venenatis.",
});
db.leads.insert({
  Full_name: "Darth Vader",
  Phone_num: "0412345678",
  Email: "darth@mailinator.com",
  Suburb: "Bondi",
  Category: "Electrical",
  Status: "Created",
  CreatedDate: new Date(),
  Price: 20.0,
  Description:
    "Praesent elit dui, blandit eget nisl sed, ornare pharetra urna. In cursus auctor tellus. Quisque ligula metus, viverra nec nibh ut, sagittis luctus tellus. Nulla egestas nibh ut diam vehicula, ut auctor lectus pharetra. Aliquam condimentum, erat eget vehicula eleifend, nulla risus consequat augue, quis convallis mi diam et dui.",
});
