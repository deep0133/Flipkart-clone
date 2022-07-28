import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../autoSlider.css";
export default function Home() {

  let navigate = useNavigate();
  let slideIndex = 1;

  useEffect(() => {
    console.log("useeffeceted :");
    if(slideIndex === 1){

      showSlides();
    }
  }, []);

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    slideIndex++;

  }

  const navigateToProduct = ()=>{
    navigate("/product",{replace:true})
  }


  return (
    <>
      <div className="bg-[#f3f3f3] min-h-full w-[1023px] overflow-hidden lg:w-screen h-auto">
        {/* Header ALL PRODUCTS */}
        <div className="body-head shadow-lg bg-white overflow-hidden">
          <div className="grid grid-cols-9 w-[100%] lg:w-[90%] items-baseline mx-auto h-auto overflow-x-hidden px-3 lg:gap-6  pt-2 pb-1 justify-center">
            <div onClick={navigateToProduct} className="card w-16 lg:w-24 ">
              <img
                src={require("./Images/head1.png")}
                className="w-full mx-auto"
                alt="bg-missing "
              />
              <div className="card-body text-center  mx-auto">
                <a href="#" className="text-sm font-medium  py-2 rounded-md">
                  Top Offers
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24">
              <img
                src={require("./Images/head2.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center  mx-auto">
                <a
                  href="#"
                  className="text-sm font-medium mx-auto  py-2 rounded-md"
                >
                  Grocery
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24 ">
              <img
                src={require("./Images/head3.webp")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center  mx-auto w-24">
                <a href="#" className="text-sm font-medium  py-2 rounded-md">
                  Mobiles
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24">
              <img
                src={require("./Images/head4.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body  text-center mx-auto w-24">
                <a
                  href="#"
                  className="text-sm font-medium flex  py-2 rounded-md"
                >
                  <p className="">Fashion</p>
                  <span className="mt-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24 ">
              <img
                src={require("./Images/head5.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body flex text-center mx-auto w-24">
                <a
                  href="#"
                  className="text-sm font-medium flex py-2 rounded-md"
                >
                  <p className="">Electronics</p>
                  <span className="mt-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24 ">
              <img
                src={require("./Images/head6.webp")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center mx-auto w-24 ">
                <a
                  href="#"
                  className="text-sm flex font-medium py-2 rounded-md"
                >
                  <p className="">Home</p>
                  <span className="mt-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24">
              <img
                src={require("./Images/head7.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center  mx-auto w-24">
                <a href="#" className="text-sm font-medium  py-2 rounded-md">
                  Appliances
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24">
              <img
                src={require("./Images/head8.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center  mx-auto w-24">
                <a href="#" className="text-sm font-medium  py-2 rounded-md">
                  travel
                </a>
              </div>
            </div>
            <div onClick={navigateToProduct} className="card w-16 lg:w-24 ">
              <img
                src={require("./Images/head9.png")}
                className="w-20 mx-auto "
                alt="bg-missing"
              />
              <div className="card-body text-center flex   mx-auto w-24">
                <a href="#" className="text-sm font-medium   py-2 rounded-md">
                  Beauty,Toys & More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Body Header    ::     Thumbnail Slider */}
        <div className="body-slider-1  w-full overflow-hidden mb-3 h-auto">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext ">1 / 4</div>
              <img src={require("./Images/slide1.webp")} alt="slide1" />
            </div>

            <div className="mySlides fade ">
              <div className="numbertext">2 / 4</div>
              <img src={require("./Images/slide2.webp")} alt="slide2" />
            </div>

            <div className="mySlides fade ">
              <div className="numbertext">3 / 4</div>
              <img src={require("./Images/slide3.jpg")} alt="slide3" />
            </div>

            <div className="mySlides fade ">
              <div className="numbertext">4 / 4</div>
              <img src={require("./Images/slide4.webp")} alt="slide4" />
            </div>
          </div>

          <div
            className="text-center mx-auto bg-transparent -mt-6 mix-blend-multiply"
          >
            <span className="dot z-20"></span>
            <span className="dot z-20"></span>
            <span className="dot z-20"></span>
            <span className="dot z-20"></span>
          </div>
        </div>

        {/*  Section ::  Deal of the day:  START*/}
        <div className="body-slider-2 h-80 mx-3">
          <div className="grid grid-cols-12 gap-2">
            {/* First Column   ::   Left Part */}
            <div onClick={navigateToProduct} className="card col-span-9 lg:col-span-10 bg-white">
              {/* Title of Deal */}
              <div className="heading flex  justify-between px-2 py-3 text-black bg-white border-b-2">
                <p className="font-medium px-5 text-2xl">Deals of the day</p>
                <button className="bg-blue-600 px-4 font-medium py-2 rounded-sm text-white">
                  <a href="#">View All</a>
                </button>
              </div>

              {/* Content of Deal   ::   card  */}
              <div className="slides flex space-x-8 overflow-auto">
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="h-48 flex items-center justify-center">
                    <img src={require("./Images/slide2.6.jpeg")} alt="" />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className="flex-shrink-0 font-medium">Rakhi Sets</h3>
                    <p className="flex-shrink-0 first-letter:text-green-600">
                      Upto 80% Off
                    </p>
                    <span className="flex-shrink-0 text-slate-400">
                      Grab or Gone
                    </span>
                  </div>
                </div>

                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.4.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.5.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.6.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white px-4 ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.7.jpeg")}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.1.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.2.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.3.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card flex-shrink-0  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.4.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column  ::  Right Part */}
            <div onClick={navigateToProduct} className="card col-span-3 lg:col-span-2 bg-white items-center flex">
              <img
                src={require("./Images/activa.webp")}
                className="w-full p-1"
                alt=""
              />
            </div>
          </div>
        </div>
        {/*  Section ::  Deal of the day:  END*/}

        {/*  Section ::  Recent View:  START*/}
        <div className="body-slider-3 mx-3 my-20 md:my-16 h-80">
          <div className="grid grid-cols-1 gap-5">
            {/* First Column   ::   Left Part */}
            <div onClick={navigateToProduct} className="card bg-white">
              {/* Title of Deal */}
              <div className="heading flex justify-between px-2 py-3 text-black bg-white border-b-2">
                <p className="font-medium px-5 text-2xl">Recentely viewed</p>
                <button className="bg-blue-600 px-4 font-medium py-2 rounded-sm text-white">
                  <a href="#">View All</a>
                </button>
              </div>

              {/* Content of Deal   ::   card  */}
              <div className="slides flex min-w-full h-72 space-x-8 overflow-x-hidden overflow-y-hidden ">
                <div onClick={navigateToProduct} className="card  w-48 justify-center  bg-white ">
                  <div className="h-48 flex items-center justify-center">
                    <img src={require("./Images/slide2.6.jpeg")} alt="" />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>

                <div onClick={navigateToProduct} className="card  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.4.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
                <div onClick={navigateToProduct} className="card  w-48 justify-center bg-white ">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={require("./Images/slide2.5.jpeg")}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="content text-sm text-center py-2">
                    <h3 className=" font-medium">Rakhi Sets</h3>
                    <p className="text-green-600">Upto 80% Off</p>
                    <span className="text-slate-400">Grab or Gone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Section ::  Recent View:  END*/}

        {/* Brand Directory */}
        <div className="Brand-Directory bg-white pb-8 text-sm">
          <h1 className="font-medium px-4 pt-4 pb-2">
            Top Stories:Brand Directory
          </h1>
          <p className="px-4">
            MOST SEARCHED FOR ON FLIPKART:Sell Old Mobile PhonesASUS TUF Gaming
            F15 Core i5 10th GenElectronics StoreOPPO A16KVivo Y33TOPPO Reno7
            5GBathroom Exhaust FanSamsung Window ACOPPO Reno7 Pro 5GiPhone
            13iPhone 13 ProiPhone 13 Pro MaxiPhone 13 MiniFlipkart
            QuickBooksFlipkart Help CentreOnline Boat StoreFlipkart Track
            OrdersFlipkart Manage OrdersFlipkart Return OrdersFlipkart Gift
            Cards StoreFlipkart Axis Bank Credit CardFlipkart Pay Later
            MOBILES:iPhone 12 64GBiPhone 12 Pro 512GBiPhone 12 128GBVivo
            Y91iVivo Y11Vivo Y15Vivo Y50Vivo Y12Reno2 FOppo A12Oppo F15Oppo
            A31Samsung A71Samsung A51Samsung A31Realme X2iPhone 11iPhone 11
            ProiPhone 11 Pro MaxMobile Offersiphone x4G MobileNokia
            MobileSamsung MobileiphoneOppo MobileVivo Mobile CAMERA:GoPro Action
            CameraNikon CameraCanon CameraSony CameraCanon DSLRNikon DSLR
            LAPTOPS:MacBook Pro M2Infinix X1 Slim Series Core i5 10th GenASUS
            Vivobook S14 OLED (2022)ASUS Zenbook 14 OLED (2022)Realme Book Prime
            Core i5 11th GenMicrosoft Surface Go Pentium 128GBBranded
            LaptopsApple LaptopsAcer LaptopsLenovo LaptopsDell LaptopsAsus
            LaptopsHP LaptopsGaming Laptops2 in 1 LaptopsLaptopsDell latest
            laptops 2022HP latest laptops 2022 TVS:Nokia TVPanasonic TVThomson
            TVVu TVRealme TVMotorola TVOnePlus TVsLG TVTVSony TVSamsung
            TVAndroid TelevisionIffalcon TvMi TV LARGE APPLIANCES:TV &
            Appliances End of Season SaleTelevisionWashing
            MachinesRefrigeratorsAir ConditionersElectric CookersElectric
            Jug(Heater) / Travel KettlesInduction CooktopsInverters /
            stabilizerIrons / Iron BoxMixer Grinder JuicerWet
            GrindersChimneysMicrowave OvensVacuum CleanersWater PurifierFanMarQ
            Customer Care CLOTHING:Men ShirtsKurta PajamaKurtasMen
            T-ShirtsJeansSareeDressesKids DressesDesigner Salwar
            SuitsBraDesigner KurtisTrack PantMen KurtasGym WearParty
            DressesPalazzo SuitsBoys ClothingGlovesNightyMaxi
            DressesAnarkaliGownsCulottesSalwar SuitsKurtisDesigner
            SareesLeggingsShortsGeorgette SareesEthnic WearBriefs & TrunksNike
            WatchesAscot TieCorset Tops TunicsLeather PU SkirtsCorset tops
            camisolesWomen magenta earringsNo collar jacketsGreen dress
            materialBlack patiala kurta setMen camel shoes casualBlack
            pathaniWallets slingKhaki dressesKids formal dressesMauve
            shirtsWomen henleyIndigo trousersLeopard dressesSleeveless shrugs
            FOOTWEAR:ShoesAdidas ShoesReebok ShoesNike ShoesPuma ShoesBootsBata
            ShoesWoodland ShoesSkechers ShoesSneakersWomens BootsSports
            ShoesLoafersSandalsLotto Sports ShoesCasual ShoesWomens Skechers
            ShoesAsics Sports ShoesFormal ShoesSchool Shoes GROCERIES:PhonePe
            Grocery VoucherHand WashSoapCashew NutsSunflower OilEggsToilet
            CleanerHarpic Toilet CleanerDettol SoapMustard
            OilBiscuitsCheesePatanjali AttaFortune OilAashirvaad AttaTea BEST
            SELLING ON FLIPKART:Panasonic Side by Side RefrigeratorBest Gas
            GeyserKitchen GeyserNutri BlendersPortable Air CoolerBest Air
            CoolerBagsHitachi Refrigerator 3 DoorBooksToysCandlesHelmetsWall
            ClocksBaby FoodChocolatesCyclesCalculatorsLipsticksMaskFastrack
            WatchesWalletsEarringsGold CoinsRealme Pad MiniHandbagsconekt SW2
            SmartwatchMivi DuoPods a350boAt Wave Connect with Bluetooth Calling
            FURNITURE:FurnitureSofasBedsDining setsWardrobesMattressesTV
            UnitsTablesChairsShelvesBean BagsOffice ChairsComputer TableOffice
            TablesRed SofaWakefit BedsWhite SofaWakefit MattressGreen SofaBlack
            SofaBrown Sofa BGMH:Whey ProteinHomeopathyKids CameraToysRusOnline
            GuitarBooks StoreMusical Instrument StoreEnergy DrinksToysMilk Drink
            MixesRakhiProtein Supplements
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">
            Flipkart: The One-stop Shopping Destination
          </h1>
          <p className="px-4">
            E-commerce is revolutionizing the way we all shop in India. Why do
            you want to hop from one store to another in search of the latest
            phone when you can find it on the Internet in a single click? Not
            only mobiles. Flipkart houses everything you can possibly imagine,
            from trending electronics like laptops, tablets, smartphones, and
            mobile accessories to in-vogue fashion staples like shoes, clothing
            and lifestyle accessories; from modern furniture like sofa sets,
            dining tables, and wardrobes to appliances that make your life easy
            like washing machines, TVs, ACs, mixer grinder juicers and other
            time-saving kitchen and small appliances; from home furnishings like
            cushion covers, mattresses and bedsheets to toys and musical
            instruments, we got them all covered. You name it, and you can stay
            assured about finding them all here. For those of you with erratic
            working hours, Flipkart is your best bet. Shop in your PJs, at night
            or in the wee hours of the morning. This e-commerce never shuts
            down. What's more, with our year-round shopping festivals and
            events, our prices are irresistible. We're sure you'll find yourself
            picking up more than what you had in mind. If you are wondering why
            you should shop from Flipkart when there are multiple options
            available to you, well, the below will answer your question.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Flipkart Plus</h1>
          <p className="px-4">
            A world of limitless possibilities awaits you - Flipkart Plus was
            kickstarted as a loyalty reward programme for all its regular
            customers at zero subscription fee. All you need is 500 supercoins
            to be a part of this service. For every 100 rupees spent on Flipkart
            order, Plus members earns 4 supercoins & non-plus members earn 2
            supercoins. Free delivery, early access during sales and shopping
            festivals, exchange offers and priority customer service are the top
            benefits to a Flipkart Plus member. In short, earn more when you
            shop more! What's more, you can even use the Flipkart supercoins for
            a number of exciting services, like: An annual Zomato Gold
            membership An annual Hotstar Premium membership 6 months Gaana plus
            subscription Rupees 550 instant discount on flights on ixigo Check
            out https://www.flipkart.com/plus/all-offers for the entire list.
            Terms and conditions apply.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">No Cost EMI</h1>
          <p className="px-4">
            In an attempt to make high-end products accessible to all, our No
            Cost EMI plan enables you to shop with us under EMI, without
            shelling out any processing fee. Applicable on select mobiles,
            laptops, large and small appliances, furniture, electronics and
            watches, you can now shop without burning a hole in your pocket. If
            you've been eyeing a product for a long time, chances are it may be
            up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">EMI on Debit Cards</h1>
          <p className="px-4">
            Did you know debit card holders account for 79.38 crore in the
            country, while there are only 3.14 crore credit card holders? After
            enabling EMI on Credit Cards, in another attempt to make online
            shopping accessible to everyone, Flipkart introduces EMI on Debit
            Cards, empowering you to shop confidently with us without having to
            worry about pauses in monthly cash flow. At present, we have
            partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI
            Bank for this facility. More power to all our shoppers! Terms and
            conditions apply.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Mobile Exchange Offers</h1>
          <p className="px-4">
            Get an instant discount on the phone that you have been eyeing on.
            Exchange your old mobile for a new one after the Flipkart experts
            calculate the value of your old phone, provided it is in a working
            condition without damage to the screen. If a phone is applicable for
            an exchange offer, you will see the 'Buy with Exchange' option on
            the product description of the phone. So, be smart, always opt for
            an exchange wherever possible. Terms and conditions apply.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">
            What Can You Buy From Flipkart?
          </h1>
          <h1 className="font-medium px-4 pt-4 pb-2">Mobile Phones</h1>
          <p className="px-4">
            From budget phones to state-of-the-art smartphones, we have a mobile
            for everybody out there. Whether you're looking for larger, fuller
            screens, power-packed batteries, blazing-fast processors,
            beautification apps, high-tech selfie cameras or just large internal
            space, we take care of all the essentials. Shop from top brands in
            the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and
            Honor to name a few. Rest assured, you're buying from only the most
            reliable names in the market. What's more, with Flipkart's Complete
            Mobile Protection Plan, you will never again find the need to run
            around service centres. This plan entails you to a number of
            post-purchase solutions, starting at as low as Rupees 99 only!
            Broken screens, liquid damage to phone, hardware and software
            glitches, and replacements - the Flipkart Complete Mobile Protection
            covers a comprehensive range of post-purchase problems, with
            door-to-door services.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">
            Electronic Devices and Accessories
          </h1>
          <p className="px-4">
            When it comes to laptops, we are not far behind. Filter among dozens
            of super-fast operating systems, hard disk capacity, RAM, lifestyle,
            screen size and many other criterias for personalized results in a
            flash. All you students out there, confused about what laptop to
            get? Our Back To College Store segregates laptops purpose wise
            (gaming, browsing and research, project work, entertainment, design,
            multitasking) with recommendations from top brands and industry
            experts, facilitating a shopping experience that is quicker and
            simpler. Photography lovers, you couldn't land at a better page than
            ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot
            cameras, millennial favourite instant cameras or action cameras for
            adventure junkies: our range of cameras is as much for beginners as
            it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are
            some big names you'll find in our store. Photography lovers, you
            couldn't land at a better page than ours. Cutting-edge DSLR cameras,
            ever reliable point-and-shoot cameras, millennial favourite instant
            cameras or action cameras for adventure junkies: our range of
            cameras is as much for beginners as it is for professionals. Canon,
            Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in
            our store. Turn your home into a theatre with a stunning surround
            sound system. Choose from our elaborate range of Sony home theatres,
            JBL soundbars and Philips tower speakers for an experience to
            remember. How about jazzing up your phone with our quirky designer
            cases and covers? Our wide-ranging mobile accessories starting from
            headphones, power banks, memory cards, mobile chargers, to selfie
            sticks can prove to be ideal travel companions for you and your
            phone; never again worry about running out of charge or memory on
            your next vacation.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Large Appliances</h1>
          <p className="px-4">
            Sleek TVs, power-saving refrigerators, rapid-cooling ACs,
            resourceful washing machines - discover everything you need to run a
            house under one roof. Our Dependable TV and Appliance Store ensures
            zero transit damage, with a replacement guarantee if anything goes
            wrong; delivery and installation as per your convenience and a
            double warranty (Official Brand Warranty along with an extended
            Flipkart Warranty) - rest assured, value for money is what is
            promised and delivered. Shop from market leaders in the country like
            Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony,
            Daikin, and Hitachi among many others
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Small Home Appliances</h1>
          <p className="px-4">
            Find handy and practical home appliances designed to make your life
            simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
            hand blenders, coffee makers, and many more other time-saving
            appliances that are truly crafted for a quicker lifestyle. Live life
            king size with these appliances at home.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Lifestyle</h1>
          <p className="px-4">
            Flipkart, 'India ka Fashion Capital', is your one-stop fashion
            destination for anything and everything you need to look good. Our
            exhaustive range of Western and Indian wear, summer and winter
            clothing, formal and casual footwear, bridal and artificial
            jewellery, long-lasting make-up, grooming tools and accessories are
            sure to sweep you off your feet. Shop from crowd favourites like
            Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon,
            Mac, and Sephora among dozens of other top-of-the-ladder names. From
            summer staple maxi dresses, no-nonsense cigarette pants, traditional
            Bandhani kurtis to street-smart biker jackets, you can rely on us
            for a wardrobe that is up to date. Explore our in-house brands like
            Metronaut, Anmi, and Denizen, to name a few, for carefully curated
            designs that are the talk of the town. Get ready to be spoiled for
            choice.Festivals, office get-togethers, weddings, brunches, or
            nightwear - Flipkart will have your back each time.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Home and Furniture</h1>

          <p className="px-4">
            Moving to a new place is never easy, especially if you're buying new
            furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
            it's not easy to set up everything again. With the hundreds of
            options thrown at you, the ride could be overwhelming. What place is
            reliable, what furniture will stand the test of time? These are
            questions you must ask before you choose a store. Well, our
            Durability Certified Furniture Store has not only curated a range of
            furniture keeping in mind the modern Indian consumer but furniture
            that comes with a lab certification, ensuring they last you for up
            to 10 years. Yes, all our furniture has gone through 35 stability
            and load tests so that you receive only the best-quality furniture.
            Be FurniSure, always. Names to look out for are Nilkamal, Godrej
            Interio, Urban Ladder, HomeTown, Durian and Perfect Homes. You may
            have your furniture all set up, but they could end up looking flat
            and incomplete without complementary decor. Curtains, cushion
            covers, bed sheets, wall shelves, paintings, floor lamps - find
            everything that turns a house to an inviting home under one roof at
            Flipkart.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Baby and Kids</h1>
          <p className="px-4">
            Your kids deserve only the best. From bodysuits, booties, diapers to
            strollers, if you're an expecting mother or a new mother, you will
            find everything you need to set sail on a smooth parenting journey
            with the help of our baby care collection. When it comes to safety,
            hygiene and comfort, you can rely on us without a second thought.
            Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the
            most-trusted names in the business for your baby.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">
            Books, Sports and Games
          </h1>
          <p className="px-4">
            Work hard and no play? We don't believe in that. Get access to
            best-selling fiction and non-fiction books by your favourite
            authors, thrilling English and Indian blockbusters, most-wanted
            gaming consoles, and a tempting range of fitness and sports gadgets
            and equipment bound to inspire you to get moving.
          </p>
          <h1 className="font-medium px-4 pt-4 pb-2">Grocery/Supermart</h1>
          <p className="px-4">
            Launching into the grocery vertical, Flipkart introduces Supermart
            that is out to bring everyday essentials close to you. From pulses,
            spices, dairy, personal and sanitary care, breakfast essentials,
            health drinks, spreads, ready to cook, grooming to cleaning agents,
            we are happy to present everything you need to run a house. Now buy
            Grocery products for as low as 1 Rupee only - our 1 Rupee Store
            presents new products every day for a nominal price of 1 Rupee only.
            Terms and conditions apply.
          </p>
        </div>
        
      </div>
    </>
  );
}
