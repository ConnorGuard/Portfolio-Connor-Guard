export default Home;

function Home() {
    return (
        <div id="home-page">
            <div class="grid-home">
                <div class="Title">
                    <h2>Hi, my name is</h2>
                    <h1>Connor Guard.</h1>
                    <h3>
                        I'm a Brisbane-based software Developer.
                    </h3>
                    <button class="toProjects button" onClick={() => { window.location.href = '#proj'; }}>Projects</button>
                </div>
            </div>
        </div>
    );
}