import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Perfect Storm",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#C5815A", "#924F3E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23057",
    },
    {
      name: "I Main Samus Now",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#0F8BE5", "#FEDDC4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24822",
    },
    {
      name: "Rolling Eyes",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#997A8A", "#45556F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24646",
    },
    {
      name: "Lake Winnipesaukee",
      artist: "Smile High, Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#090D3B", "#468C94"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23343",
    },
    {
      name: "Inside a Saltwater Room",
      artist: "Delayde",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#9DD7A1", "#825BD2"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23193",
    },
    {
      name: "Vitamin D",
      artist: "fantompower",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C7DAE0", "#E5C7E1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22790",
    },
    {
      name: "The Way We Were",
      artist: "Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#EA5F31", "#314657"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22936",
    },
    {
      name: "Places",
      artist: "Ruck P",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CF8991", "#FDAB6E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
    },
  ];
}

export default chillHop;
