import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img className='main-image' src='logo.png' alt='img was not found'></img>
        <div className='social-links'>
          <img src='discord.png' alt='img was not found'></img>
          <img src='instagram.png' alt='img was not found'></img>
          <img src='tiwtter.png' alt='img was not found'></img>
        </div>
        <div className='main'>
          <div>
            <p>
              We are truly honored to introduce you to our Baby Sloth $Fantasy token. $Fantasy is an ERC20 token located on the Ethereum network.
            </p>
            <button>CONNECT WALLET</button>
            <button>WHITEPAPER</button>
          </div>
          <div className='image'>
            <img src='icon.png' alt='img not found'></img>
          </div>
        </div>
        <h1 className='heading-custom'>ABOUT US</h1>
        <div className='main2'>
          <div className='main2-paragraph'>
            <h1>Baby Sloth Club Saga:</h1>
            <p>
              They were no different from their relatives; living typical Baby Sloth lives and munching on leaves and drinking milk. Until a curious and mischievous Baby Sloth ventured beyond the safety of the community into the unknown.

              <br></br>   Following a dreamy, strange scent...traversing in the deepest shadows of the jungle...the curious Baby sloth stumbles upon an other-worldly forest that was surrounded by pungent-smelling plants so high they <br></br><br></br> covered the sun and sky. Caving into temptation, the Baby Sloth touches the plant and is propelled by a vision portraying his true purpose in the universe: To save all the Baby Sloths across all the forests far and wide. With the knowledge acquired, he slowly walks back home<br></br> to spread the good word.

              BEHOLD! The Enlightened One, the first,is born and paves the path for generations to come. Legacies of endless Baby Sloth dance parties from dusk-till-dawn, all-you-can-eat fruit and leaf buffets, and partying to the sounds of adorable squeaking Baby Sloths echoed for decades
            </p>
          </div>
          <img src='baby.png' alt='img not found'></img>
        </div>
        <div className='into-the-project'>
          <h1>INTO THE PROJECT</h1>
          <div>
            <img src='2.png' alt='img not found'></img>
            <p>
              UTOPIA! In the rich soil of the enchanted forest, Baby Sloths gathered to embrace the tree of life. However, all good things come to an end. A cataclysmic storm dispersed all the Baby Sloths away from their paradise and the enchanted tree of life was lost forever. The Elder Sloths still believe the Enlightened One is still alive and residing in the enchanted forest...waiting for a new generation.

              A NEW HOPE! The 10000 newly-born Baby Sloths are destined to return the Baby Sloth community to their former glory. Practicing the ways of their ancestors and determined to find the enchanted tree of life, the newly-born Baby Sloth’s must find the tree of life!
            </p>
            <img src='gold.png' alt='img not found'></img>
          </div>
        </div>
        <div className='nft-collection'> 
          <h1>NFT COLLECTION</h1>
            <h3>10,000 Unique Sloths That Will Animate In Our Game With Many Perks, Accessories & Upgrades Available</h3>
          <div className='nft-collection-card'>
          <img src='sloth-v1.jpeg' alt='No img found'></img>
          <img src='sloth-v2.jpeg' alt='No img found'></img>
          <img src='sloth-v3.jpeg' alt='No img found'></img>
          <img src='sloth-v4.jpeg' alt='No img found'></img>
          </div>
        </div>
        <div className='tokenomics'>
          <h1>TOKENOMICS</h1>
        <div className='tokenomicsItems'> 
          <img src='chart.png' alt='No img found'></img>
          <div className='tokenomicsList'>
            <h3>Play to Earn $Fantasy Cryptocurrency</h3>
            <ul>
              <li>ERC-20 Token on Ethereum Blockchain</li>
              <li>Daily $Fantasy Income</li>
              <li>BSC Metaverse Business</li>
              <li>Stock/Shares Acquiring</li>
              <li>LAND Purchase WL for LAND Minting</li>
              <li>NFT Staking for Additional Income </li>
              <li>NFT Character Trait Upgrades</li>
              <li>In Game Cosmetics/Assets & Perks Development</li>
            </ul>
            <button>WHITEPAPER</button>
          </div>
        </div>
        </div>
        <div className='roadmap'>
        <h1>ROADMAP</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
