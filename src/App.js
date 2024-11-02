import logo from './logo.svg';
import './App.css';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Player } from 'video-react';
import grocerylist from './videos/GroceryListDemo.mp4'
import timecalc from './videos/TimeCalcDemo.mp4'
import timezoneconvertor from './videos/TimezoneConvertorDemo.mp4'
import teashop from './videos/TeaShopDemo.mp4'

function App() {
  return (
    <div class="app">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oi&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Oi&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/css/video-react.css" />
      </head>
      <section class="one">
        <div>
          <h1>Portfolio</h1>
          <h2 style={{marginLeft: '200px'}}>by olivia</h2>
        </div>
      </section>
      <section class="two">
        <div class="phone">
          <video class="video" autoPlay loop muted>
            <source src={grocerylist}  type="video/mp4"/>
          </video>
        </div>
        <div>
          <div class="row">
            <h1>Grocery List</h1>
            <a href={"https://github.com/oliviamtallent/grocery-list-app"} target={"_blank"}>
              <DoubleArrowIcon style={{width: 40, height: 40, color: '#fff', marginLeft: 20}}/>
            </a>
          </div>
          <h2>about.</h2>
          <p>The Grocery List App is an application to organize all things grocery shopping in any family, household, or community.</p>
          <h2>why?</h2>
          <p>Created to all for organizing of mutliple grocery lists among my family and getting a complete list in the streamlined format needed by our households.</p>
          <h2>how?</h2>
          <p>The React Native CLI was used as the framework for the application. This was used to streamline the cross platform capabilities of the app. Then Firebase was used for the database, including Firebase Firestore and Firebase Authentication for user management and other data storage.</p>
        </div>
      </section>
      <section class="three">
        <div style={{marginLeft: '5%'}}>
          <div class="row">
            <h1>TimeCalc</h1>
            <a href={"https://github.com/oliviamtallent/TimeCalc"} target={"_blank"}>
              <DoubleArrowIcon style={{width: 40, height: 40, color: '#fff', marginLeft: 20}}/>
            </a>
          </div>
          <h2>about.</h2>
          <p>TimeCalc is an application that works as a standard calculator app, but has the additional capacity to use time as an input format.</p>
          <h2>why?</h2>
          <p>Created to simplify the conversion of times and distances for runners, or athletes, such as converting marathon times to time-per-mile or converting 5k times to time-per-kilometer.</p>
          <h2>how?</h2>
          <p>The React Native Expo was used as the framework for the application. The app uses an algorithm that solves the equation in the order of operations, converting all times to seconds. Then at the end of the equation, the value in seconds is reformatted into HH:mm:ss.</p>
        </div>
        <div class="phone">
          <video class="video" autoPlay loop muted>
            <source src={timecalc}  type="video/mp4"/>
          </video>
        </div>
      </section>
      <section class="four">
        <div class="phone">
          <video class="video" autoPlay loop muted>
            <source src={timezoneconvertor}  type="video/mp4"/>
          </video>
        </div>
        <div>
          <h1>Timezone Convertor</h1>
          <h2>about.</h2>
          <p>The Timezone Convertor changes a time from one timezone to another, including the ability to select a location on a map and get the timezone active in that location.</p>
          <h2>why?</h2>
          <p>Created to ease the process of organizing contacting relatives across seas in different timezones. As one of the earlier projects I created, it was used to learn how to use Google Maps API.</p>
          <h2>how?</h2>
          <p>Created using Android Studio with the integrated Google Maps API. Using the map data and the current date, the app converts the returned location value to the timezone in that location. Then the user can select a time to convert and view the time in the selected timezone.</p>
        </div>
      </section>
      <section class="five">
        <div style={{marginLeft: '5%'}}>
          <h1>Tea Shop Game</h1>
          <h2>about.</h2>
          <p>A game that mixes gardening and tea brewing, with both mini games and longer wait times to balance the playing process.</p>
          <h2>why?</h2>
          <p>This game was intended to be an introduction into the Game Development world. It gave me the freedom to draw my own assets and experiment with a new medium while making a fun mobile game.</p>
          <h2>how?</h2>
          <p>This was created with the Godot Game Engine and the assets were designed in Canva. The primary programming language used in the project's creation was GDScript, a Godot specific language with some similarity to Python.</p>
        </div>
        <div class="phone">
          <video class="video" style={{height: '90%', marginTop: '25px'}} autoPlay loop muted>
            <source src={teashop}  type="video/mp4"/>
          </video>
        </div>
      </section>
    </div>
  );
}

export default App;
