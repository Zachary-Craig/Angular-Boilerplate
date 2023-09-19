import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class AngularBoilerplate2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .wrapper {
    width: 400px;
    border: 2px solid blue;
  }
  .btn-wrapper {
    margin: 24px auto;
  }
  .btn-wrapper button {
    font-sizez: 24px;
    color: blue;
    background-color: white;
  }
  .btn-wrapper button:hover {
    color: white;
    background-color: blue;
  }
  
  @media screen and (max-width: 799px) and (min-width: 501px) {
    .button {
      display: block;
    }
  }
  
  @media screen and (max-width: 500px) {
    .card {
      transform: scale(0.8);
    }
    .card img {
      width: 80%;
    }
  }
  
  .wrapper {
    background-color: gold;
    padding: 20px;
    margin-bottom: 10px;
  }
  
  button {
    margin: 3px;
  }
  
  .dupButton button:hover{
    color: white;
    background-color: blue;
  }
  .dupButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .backgroundColorButton button:hover{
    color: white;
    background-color: blue;
  }
  .backgroundColorButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .headingButton button:hover{
    color: white;
    background-color: blue;
  }
  .headingButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .deleteCard button:hover{
    color: white;
    background-color: blue;
  }
  .deleteCard button:focus{
    color: white;
    background-color: blue;
    
    /*
    */
    
    .wrapper {
    width: 400px;
    border: 6px solid black;
  }
  .btn-wrapper {
    margin: 24px auto;
  }
  .btn-wrapper button {
    font-sizez: 24px;
    color: blue;
    background-color: white;
  }
  .btn-wrapper button:hover {
    color: white;
    background-color: blue;
  }
  
  @media screen and (max-width: 799px) and (min-width: 501px) {
    .button {
      display: block;
    }
  }
  
  @media screen and (max-width: 500px) {
    .card {
      transform: scale(0.8);
    }
    .card img {
      width: 80%;
    }
  }
  
  .wrapper {
    background-color: gray;
    padding: 20px;
    margin-bottom: 10px;
  }
  
  button {
    margin: 3px;
  }
  
  .dupButton button:hover{
    color: white;
    background-color: blue;
  }
  .dupButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .backgroundColorButton button:hover{
    color: white;
    background-color: blue;
  }
  .backgroundColorButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .headingButton button:hover{
    color: white;
    background-color: blue;
  }
  .headingButton button:focus{
    color: white;
    background-color: blue;
  }
  
  .deleteCard button:hover{
    color: white;
    background-color: blue;
  }
  .deleteCard button:focus{
    color: white;
    background-color: blue;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="wrapper">
<img class="image"
  src="https://logos-world.net/wp-content/uploads/2020/05/Pittsburgh-Penguins-symbol.jpg"
  alt="Penguins Logo" width="400" height="225">

<div class="header">
  <h2>Pittsburgh Penguins Hockey Team</h2>
</div>
  <h3>Description</h3>
    <div class="description">
  <h5>The Pittsburgh Penguins are an NHL hockey team from Pittsburgh, known for their championships and star players like Sidney Crosby and Mario Lemieux.</h5>
</div>
<div class="btn-wrapper">
    <button onclick="hideDescription()">Details</button>
</div>
</div>

<div class="dupButton">
  <button>Duplicate</button>
</div>
    
<div class="backgroundColorButton">
  <button onclick="changeBackgroundColor()"> Change Background Color</button>
</div>

<div class="headingButton">
  <button onclick="changeHeading()"> Change Heading</button>
</div>

<div class="deleteCard">
  <button onclick="deleteDupCard()">Delete</button>
</div>
</div>



<div class="wrapper">
<img class="image"
  src="https://brand.psu.edu/images/backgrounds/atheltic-wrong.png"
  alt="Penn State Logo" width="400" height="225">

<div class="header">
  <h2>Penn State Football Nittany Lions</h2>
</div>
  <h3>Description</h3>
    <div class="description">
  <h5>Penn State Football, represented by the famous Nittany Lion logo, is a D1 football program located in State College, PA. Penn State football has won 2 national championships in program history and are predicted to make an apperance in playoffs in 2024. </h5>
</div>
<div class="btn-wrapper">
    <button onclick="hideDescription()">Details</button>
</div>
</div>

<div class="dupButton">
  <button>Duplicate</button>
</div>
    
<div class="backgroundColorButton">
  <button onclick="changeBackgroundColor()"> Change Background Color</button>
</div>

<div class="headingButton">
  <button onclick="changeHeading()"> Change Heading</button>
</div>

<div class="deleteCard">
  <button onclick="deleteDupCard()">Delete</button>
</div>
</div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('angular-boilerplate-2', AngularBoilerplate2);