var header = document.createElement("h2")
header.innerHTML="Youtube Born"
header.className="titlename"
document.body.append(header)

const content = document.createElement("div");
content.className="content";

  const Container = document.createElement("div");
  Container.className="container"
  Container.innerHTML = `
    <div class = "video"><iframe width="880" height="495" src="https://www.youtube.com/embed/P4dT-lW9260" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="details">Title :<p class = "name">How Did YouTube Start?</span></p>
    <p class = "id">Views : <br> 1,464,948 views <br> Created on :  <br>
    Feb 4, 2015</span></p>
    <p class = "created"><description : <br>YouTube is a vibrant, thriving community that has taken over a lot of the internet's video sector. In this video we'll take a look at how large the website really is and how it started.</span></p>
    <p>Soundtrack: <br>

    TAPES - Tried To <br>
    
    Indian Wells - After the Match (Kyson Remix) <br>
    
    Pierce Fulton – Kuaga <br>
    
    Dinka - Faces Of Bengalia (Original Mix) [Unreleased Digital] <br>
    
    D' SOUND - Talkin' Talk <br>
    
    S A L O N & C O U G H - p a r a g o n b o y <br>
    
    Owen - Too Many Moons <br>
    
    Joe Hertz - Tears <br>
</p>    
    </div>
`;
content.append(Container);


document.body.append(content);

