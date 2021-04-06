export default Home;

function Home(){
    return(
        <div>
        <div class ="homePage">
        <h2>Software<br/> Developer<br/>at QUT</h2>
            <div class="image-cropper">
            <a href = "#about"><img class = "image connor" src="./connor.jpg" ></img></a>
            </div>
        </div>
        <div class ="toProjects">
        <button onClick={() => {window.location.href='#proj';}}>Projects</button>
        <img src="./downArrow.png" onClick={() => {window.location.href='#proj';}} height = "50" widh="50"></img>
        </div>
        </div> 
    );
}