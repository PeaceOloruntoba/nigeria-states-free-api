import admin from "firebase-admin";
import serviceAccount from "../nigeria-states-free-api-firebase-adminsdk-fbsvc-05eaa6ce2b.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

const statesData = [
  {
    state: "Abia",
    capital: "Umuahia",
    lgas: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala Ngwa North",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umunneochi",
    ],
  },
  {
    state: "Adamawa",
    capital: "Yola",
    lgas: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South",
    ],
  },
  {
    state: "Akwa Ibom",
    capital: "Uyo",
    lgas: [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanafun",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo",
    ],
  },
];

const uploadData = async () => {
  for (const state of statesData) {
    await db.collection("states").doc(state.state).set({
      capital: state.capital,
      lgas: state.lgas,
    });
    console.log(`Added ${state.state} successfully!`);
  }
};

uploadData()
  .then(() => {
    console.log("All states uploaded!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error uploading data:", error);
    process.exit(1);
  });
