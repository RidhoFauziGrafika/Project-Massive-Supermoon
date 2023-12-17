// import React from "react";
// import {
//   FaCamera,
//   FaSun,
//   FaBed,
//   FaHorse,
//   FaRestroom,
//   FaAirFreshener,
//   FaWifi,
//   FaClock,
//   FaSmokingBan,
//   FaArchive,
//   FaCoffee,
//   FaTshirt,
//   FaBroom,
//   FaSnowplow,
//   FaSpa,
//   FaCarAlt,
//   FaBath,
//   FaUtensils,
//   FaChild,
//   FaRunning,
//   FaChalkboard,
//   FaDumbbell,
//   FaTv,
//   FaTable,
//   FaRefrigerator,
//   FaShower,
// } from "react-icons/fa";

// const FacilityIcons = ({ facilities }) => {
//   const renderFacilityIcon = (id) => {
//     switch (id) {
//       case "18":
//         return <FaCamera className="w-10 h-10" />;
//       case "19":
//         return <FaSun className="w-10 h-10" />;
//       case "20":
//         return <FaBed className="w-10 h-10" />;
//       case "21":
//         return <FaHorse className="w-10 h-10" />;
//       case "22":
//         return <FaRestroom className="w-10 h-10" />;
//       case "23":
//         return <FaAirFreshener className="w-10 h-10" />;
//       case "24":
//         return <FaWifi className="w-10 h-10" />;
//       case "25":
//         return <FaClock className="w-10 h-10" />;
//       case "26":
//         return <FaSmokingBan className="w-10 h-10" />;
//       case "27":
//         return <FaArchive className="w-10 h-10" />;
//       case "28":
//         return <FaCoffee className="w-10 h-10" />;
//       case "29":
//         return <FaTshirt className="w-10 h-10" />;
//       case "30":
//         return <FaBroom className="w-10 h-10" />;
//       case "31":
//         return <FaSnowplow className="w-10 h-10" />;
//       case "32":
//         return <FaSpa className="w-10 h-10" />;
//       case "33":
//         return <FaCarAlt className="w-10 h-10" />;
//       case "34":
//         return <FaBath className="w-10 h-10" />;
//       case "35":
//         return <FaUtensils className="w-10 h-10" />;
//       case "36":
//         return <FaChild className="w-10 h-10" />;
//       case "37":
//         return <FaRunning className="w-10 h-10" />;
//       case "38":
//         return <FaChalkboard className="w-10 h-10" />;
//       case "39":
//         return <FaDumbbell className="w-10 h-10" />;
//       case "40":
//         return <FaTv className="w-10 h-10" />;
//       case "41":
//         return <FaTable className="w-10 h-10" />;
//       case "42":
//         return <FaKitchen className="w-10 h-10" />;
//       case "43":
//         return <FaRefrigerator className="w-10 h-10" />;
//       case "44":
//         return <FaShower className="w-10 h-10" />;
//       case "45":
//         return <FaSpa className="w-10 h-10" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex flex-wrap gap-3">
//       {facilities.map((facility) => (
//         <div key={facility.id} className="flex items-center gap-3">
//           {renderFacilityIcon(facility.id)}
//           <p className="text-neutral-60 rounded-full">{facility.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FacilityIcons;

// import React from "react";
// import {
//   FaCar,
//   FaToilet,
//   FaMosque,
//   FaBuilding,
//   FaSwimmingPool,
//   FaUtensils,
//   FaCampground,
//   FaPlane,
//   FaChild,
//   FaMusic,
//   FaHome,
//   FaGazebo,
//   FaDumbbell,
//   FaCarSide,
//   FaTrain,
//   FaAtv,
//   FaPrayingHands,
//   FaElephant,
//   FaHelicopter,
//   FaCamera,
//   FaMountain,
//   FaLifeRing,
//   FaBowlingBall,
//   FaFish,
//   FaChair,
//   FaBed,
//   FaHorse,
//   FaRunning,
//   FaUtensilSpoon,
//   FaWifi,
//   FaReception4,
//   FaSmokingBan,
//   FaBox,
//   FaCoffee,
//   FaTshirt,
//   FaChild,
//   FaLaptop,
//   FaWarehouse,
//   FaChild,
//   FaSwimmer,
//   FaRunning,
//   FaHotel,
//   FaSnowflake,
//   FaWifi,
//   FaReception4,
//   FaSmokingBan,
//   FaBox,
//   FaCoffee,
//   FaTshirt,
//   FaChild,
//   FaLaptop,
//   FaWarehouse,
//   FaChild,
//   FaSwimmer,
//   FaRunning,
//   FaHotel,
//   FaSnowflake,
//   FaWifi,
//   FaReception4,
//   FaSmokingBan,
//   FaBox,
//   FaCoffee,
//   FaTshirt,
//   FaChild,
//   FaLaptop,
//   FaWarehouse,
//   FaChild,
//   FaSwimmer,
//   FaRunning,
//   FaHotel,
//   FaSnowflake,
//   FaWifi,
//   FaReception4,
//   FaSmokingBan,
//   FaBox,
//   FaCoffee,
//   FaTshirt,
//   FaChild,
//   FaLaptop,
//   FaWarehouse,
//   FaChild,
//   FaSwimmer,
//   FaRunning,
//   FaHotel,
//   FaSnowflake,
//   FaWifi,
// } from "react-icons/fa";

// const renderFacilityIcon = (facilityId) => {
//   switch (facilityId) {
//     case "1":
//       return <FaCar />;
//     case "2":
//       return <FaToilet />;
//     case "3":
//       return <FaMosque />;
//     case "4":
//       return <FaBuilding />;
//     case "5":
//       return <FaSwimmingPool />;
//     case "6":
//       return <FaUtensils />;
//     case "7":
//       return <FaCampground />;
//     case "8":
//       return <FaPlane />;
//     case "9":
//       return <FaChild />;
//     case "10":
//       return <FaMusic />;
//     case "11":
//       return <FaHome />;
//     case "12":
//       return <FaDumbbell />;
//     case "13":
//       return <FaCarSide />;
//     case "14":
//       return <FaTrain />;
//     case "15":
//       return <FaAtv />;
//     case "16":
//       return <FaPrayingHands />;
//     case "17":
//       return <FaElephant />;
//     case "18":
//       return <FaHelicopter />;
//     case "19":
//       return <FaCamera />;
//     case "20":
//       return <FaMountain />;
//     case "21":
//       return <FaLifeRing />;
//     case "22":
//       return <FaBowlingBall />;
//     case "23":
//       return <FaFish />;
//     case "24":
//       return <FaChair />;
//     case "25":
//       return <FaBed />;
//     case "26":
//       return <FaHorse />;
//     case "27":
//       return <FaRunning />;
//     case "28":
//       return <FaUtensilSpoon />;
//     case "29":
//       return <FaWifi />;
//     case "30":
//       return <FaReception4 />;
//     case "31":
//       return <FaSmokingBan />;
//     case "32":
//       return <FaBox />;
//     case "33":
//       return <FaCoffee />;
//     case "34":
//       return <FaTshirt />;
//     case "35":
//       return <FaChild />;
//     case "36":
//       return <FaLaptop />;
//     case "37":
//       return <FaWarehouse />;
//     case "38":
//       return <FaChild />;
//     case "39":
//       return <FaSwimmer />;
//     case "40":
//       return <FaRunning />;
//     case "41":
//       return <FaHotel />;
//     case "42":
//       return <FaSnowflake />;
//     case "43":
//       return <FaWifi />;
//     case "44":
//       return <FaReception4 />;
//     case "45":
//       return <FaSmokingBan />;
//     case "46":
//       return <FaBox />;
//     case "47":
//       return <FaCoffee />;
//     case "48":
//       return <FaTshirt />;
//     default:
//       return null;
//   }
// };

// const Facility = ({ facilities }) => {
//   return (
//     <div className="flex flex-wrap gap-3">
//       {facilities.map((facility) => (
//         <div key={facility.id} className="flex items-center gap-3">
//           {renderFacilityIcon(facility.id)}
//           <p className="text-neutral-60 rounded-full">{facility.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Facility;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faToilet,
  faMosque,
  faBuilding,
  faSwimmingPool,
  faUtensils,
  faCampground,
  faPlane,
  faChild,
  faMusic,
  faHome,
  faDumbbell,
  faCarSide,
  faTrain,
  faAtv,
  faPrayingHands,
  faElephant,
  faHelicopter,
  faCamera,
  faMountain,
  faLifeRing,
  faBowlingBall,
  faFish,
  faChair,
  faBed,
  faHorse,
  faRunning,
  faUtensilSpoon,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
  faReception4,
  faSmokingBan,
  faBox,
  faCoffee,
  faTshirt,
  faChild,
  faLaptop,
  faWarehouse,
  faChild,
  faSwimmer,
  faRunning,
  faHotel,
  faSnowflake,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

const renderFacilityIcon = (facilityId) => {
  switch (facilityId) {
    case "1":
      return <FontAwesomeIcon icon={faCar} />;
    case "2":
      return <FontAwesomeIcon icon={faToilet} />;
    case "3":
      return <FontAwesomeIcon icon={faMosque} />;
    case "4":
      return <FontAwesomeIcon icon={faBuilding} />;
    case "5":
      return <FontAwesomeIcon icon={faSwimmingPool} />;
    case "6":
      return <FontAwesomeIcon icon={faUtensils} />;
    case "7":
      return <FontAwesomeIcon icon={faCampground} />;
    case "8":
      return <FontAwesomeIcon icon={faPlane} />;
    case "9":
      return <FontAwesomeIcon icon={faChild} />;
    case "10":
      return <FontAwesomeIcon icon={faMusic} />;
    case "11":
      return <FontAwesomeIcon icon={faHome} />;
    case "12":
      return <FontAwesomeIcon icon={faDumbbell} />;
    case "13":
      return <FontAwesomeIcon icon={faCarSide} />;
    case "14":
      return <FontAwesomeIcon icon={faTrain} />;
    case "15":
      return <FontAwesomeIcon icon={faAtv} />;
    case "16":
      return <FontAwesomeIcon icon={faPrayingHands} />;
    case "17":
      return <FontAwesomeIcon icon={faElephant} />;
    case "18":
      return <FontAwesomeIcon icon={faHelicopter} />;
    case "19":
      return <FontAwesomeIcon icon={faCamera} />;
    case "20":
      return <FontAwesomeIcon icon={faMountain} />;
    case "21":
      return <FontAwesomeIcon icon={faLifeRing} />;
    case "22":
      return <FontAwesomeIcon icon={faBowlingBall} />;
    case "23":
      return <FontAwesomeIcon icon={faFish} />;
    case "24":
      return <FontAwesomeIcon icon={faChair} />;
    case "25":
      return <FontAwesomeIcon icon={faBed} />;
    case "26":
      return <FontAwesomeIcon icon={faHorse} />;
    case "27":
      return <FontAwesomeIcon icon={faRunning} />;
    case "28":
      return <FontAwesomeIcon icon={faUtensilSpoon} />;
    case "29":
      return <FontAwesomeIcon icon={faWifi} />;
    case "30":
      return <FontAwesomeIcon icon={faReception4} />;
    case "31":
      return <FontAwesomeIcon icon={faSmokingBan} />;
    case "32":
      return <FontAwesomeIcon icon={faBox} />;
    case "33":
      return <FontAwesomeIcon icon={faCoffee} />;
    case "34":
      return <FontAwesomeIcon icon={faTshirt} />;
    case "35":
      return <FontAwesomeIcon icon={faChild} />;
    case "36":
      return <FontAwesomeIcon icon={faLaptop} />;
    case "37":
      return <FontAwesomeIcon icon={faWarehouse} />;
    case "38":
      return <FontAwesomeIcon icon={faChild} />;
    case "39":
      return <FontAwesomeIcon icon={faSwimmer} />;
    case "40":
      return <FontAwesomeIcon icon={faRunning} />;
    case "41":
      return <FontAwesomeIcon icon={faHotel} />;
    case "42":
      return <FontAwesomeIcon icon={faSnowflake} />;
    case "43":
      return <FontAwesomeIcon icon={faWifi} />;
    case "44":
      return <FontAwesomeIcon icon={faReception4} />;
    case "45":
      return <FontAwesomeIcon icon={faSmokingBan} />;
    case "46":
      return <FontAwesomeIcon icon={faBox} />;
    case "47":
      return <FontAwesomeIcon icon={faCoffee} />;
    case "48":
      return <FontAwesomeIcon icon={faTshirt} />;
    default:
      return null;
  }
};

const FacilityList = ({ facilities }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {facilities.map((facility) => (
        <div key={facility.id} className="flex items-center gap-3">
          {renderFacilityIcon(facility.id)}
          <p className="text-neutral-60 rounded-full">{facility.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FacilityList;
