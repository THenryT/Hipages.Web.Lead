db = db.getSiblingDB("hipages");
db.leads.insert({
  full_name: "Luke Skywalker",
  phone_num: "0412345678",
  email: "luke@mailinator.com",
  suburb: "Sydney",
  category: "Plumbing",
  price: 20.0,
  status: "Created",
  createdDate: new Date(),
  description:
    "Integer aliquam pulvinar odio et convallis. Integer id tristique ex. Aenean scelerisque massa vel est sollicitudin vulputate. Suspendisse quis ex eu ligula elementum suscipit nec a est. Aliquam a gravida diam. Donec placerat magna posuere massa maximus vehicula. Cras nisl ipsum, fermentum nec odio in, ultricies dapibus risus. Vivamus neque.",
});
db.leads.insert({
  full_name: "Han Solo",
  phone_num: "0498765432",
  email: "han@mailinator.com",
  suburb: "Manly",
  category: "Carpentry",
  status: "Created",
  createdDate: new Date(),
  price: 45.5,
  description:
    "Aliquam posuere est sit amet libero egestas tempus. Donec ut efficitur sapien. Sed molestie nec lacus malesuada suscipit. Aliquam suscipit nibh at posuere tempor. Etiam a sollicitudin felis. In et enim leo. Morbi vel imperdiet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere auctor elit, id venenatis.",
});
db.leads.insert({
  full_name: "Darth Vader",
  phone_num: "0412345678",
  email: "darth@mailinator.com",
  suburb: "Bondi",
  category: "Electrical",
  status: "Created",
  createdDate: new Date(),
  price: 20.0,
  description:
    "Praesent elit dui, blandit eget nisl sed, ornare pharetra urna. In cursus auctor tellus. Quisque ligula metus, viverra nec nibh ut, sagittis luctus tellus. Nulla egestas nibh ut diam vehicula, ut auctor lectus pharetra. Aliquam condimentum, erat eget vehicula eleifend, nulla risus consequat augue, quis convallis mi diam et dui.",
});
