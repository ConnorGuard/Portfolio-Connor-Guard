export default Home;

function Home() {
    return (
        <div id ="home-page">
            <div class="grid-home">
                <div class="homePage">
                    <h3>Software Developer at QUT</h3>
                </div>
                <a href="#about"><img class="image connor" src="./connor.jpg" ></img></a>
                <div class="toProjects button">
                    <button onClick={() => { window.location.href = '#proj'; }}>Projects</button>
                </div>
            </div>
        </div>
    );
}