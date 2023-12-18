import React from "react";
import {
  FaBusinessTime,
  FaCampground,
  FaCarAlt,
  FaCarSide,
  FaHorse,
  FaParking,
  FaPlane,
  FaRunning,
  FaShower,
  FaSmokingBan,
  FaSwimmingPool,
  FaToilet,
  FaTrain,
  FaUniversity,
  FaWater,
  FaWifi,
} from "react-icons/fa";
import { FaKitchenSet, FaUsersViewfinder } from "react-icons/fa6";
import {
  GiArcher,
  GiCoffeeCup,
  GiCooler,
  GiDoubleFish,
  GiFlyingFox,
  GiKidSlide,
  GiPeaks,
  GiPlantsAndAnimals,
  GiSleepingBag,
} from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { IoStorefront } from "react-icons/io5";
import {
  MdBedroomChild,
  MdFreeBreakfast,
  MdLocalLaundryService,
  MdMeetingRoom,
  MdMosque,
  MdOutlineSportsHandball,
  MdOutlineStorage,
  MdSoupKitchen,
  MdTableRestaurant,
} from "react-icons/md";
import { RiLifebuoyFill } from "react-icons/ri";
import { SiGooglehome } from "react-icons/si";
import { PiParkBold, PiTelevisionSimpleFill } from "react-icons/pi";
import { CgGym, CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMassage } from "react-icons/tb";

const renderFacilityIcon = (facilityId) => {
  switch (facilityId) {
    case "1":
      return <FaParking />;
    case "2":
      return <FaToilet />;
    case "3":
      return <FaMosque />;
    case "4":
      return <FaUniversity />;
    case "5":
      return <FaSwimmingPool />;
    case "6":
      return <IoStorefront />;
    case "7":
      return <FaCampground />;
    case "8":
      return <GiFlyingFox />;
    case "9":
      return <GiKidSlide />;
    case "10":
      return <PiMicrophoneStageFill />;
    case "11":
      return <SiGooglehome />;
    case "12":
      return <MdOutlineSportsHandball />;
    case "13":
      return <FaCarAlt />;
    case "14":
      return <FaTrain />;
    case "15":
      return <PiMotorcycleBold />;
    case "16":
      return <MdMosque />;
    case "17":
      return <GiPlantsAndAnimals />;
    case "18":
      return <FaPlane />;
    case "19":
      return <FaUsersViewfinder />;
    case "20":
      return <GiPeaks />;
    case "21":
      return <RiLifebuoyFill />;
    case "22":
      return <FaWater />;
    case "23":
      return <GiArcher />;
    case "24":
      return <GiDoubleFish />;
    case "25":
      return <GiSleepingBag />;
    case "26":
      return <MdFreeBreakfast />;
    case "27":
      return <FaHorse />;
    case "28":
      return <IoMdRestaurant />;
    case "29":
      return <GiCooler />;
    case "30":
      return <FaWifi />;
    case "31":
      return <FaBusinessTime />;
    case "32":
      return <FaSmokingBan />;
    case "33":
      return <MdOutlineStorage />;
    case "34":
      return <GiCoffeeCup />;
    case "35":
      return <MdLocalLaundryService />;
    case "36":
      return <PiParkBold />;
    case "37":
      return <FaRunning />;
    case "38":
      return <MdMeetingRoom />;
    case "39":
      return <CgGym />;
    case "40":
      return <PiTelevisionSimpleFill />;
    case "41":
      return <MdTableRestaurant />;
    case "42":
      return <MdSoupKitchen />;
    case "43":
      return <CgSmartHomeRefrigerator />;
    case "44":
      return <FaShower />;
    case "45":
      return <TbMassage />;
    case "46":
      return <FaCarSide />;
    case "47":
      return <MdBedroomChild />;
    case "48":
      return <FaKitchenSet />;
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
