let deviceType = "mobile";
let model = "iPhone";
switch (deviceType) {
  case "mobile":
    switch (model) {
      case "iPhone":
        console.log("Apple Iphone: iOS device.");
        break;
      case "Samsung":
        console.log("Samsung Galaxy: Android device.");
        break;
      default:
        console.log("Unknown phone model.");
    }
    break;
  case "laptop":
    switch (model) {
      case "Macbook":
        console.log("Apple MacBook: macOS device.");
        break;
      case "Dell":
        console.log("Dell XPS: Windows device.");
        break;
      default:
        console.log("Unknown laptop model.");
    }
    break;
  case "tablet":
    switch (model) {
      case "iPad":
        console.log("Apple iPad: iOS device.");
        break;
      case "Galaxy Tab":
        console.log("Samsung Galaxy Tab: Android device");
      default:
        console.log("Unknown tablet model");
    }
    break;
  default:
    console.log("Unknown device type.");
}
