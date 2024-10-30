import './index.scss';

export default function App() {
  return (
    <div className="Home">
      <header>
        <a className='amitaf' href=''><img src="/assets/images/Logo-Amitaf.png" alt="Logo amitaf" /></a>
      
        <nav>
          <a className='links' href="/home">HOME</a>
          <a className='links' href="/servicos">SERVIÇOS</a>
          <a className='links' href="/localizacao">localização</a>
          <a className='links' href="#">SOBRE NÓS</a>
          <a className='links' href="/">VALORES</a>
          <a href=''><img className='login' src='/assets/images/login.png' alt='login'/></a>
        </nav>
      </header>

      <main>
          <img className='mulher' src="/assets/images/mulher.png" alt="" />

          <div className='imagens'>
            <img className='letreiro' src="/assets/images/letreiro.png" alt="" />
            <img className='amitaf' src="/assets/images/Logo-Amitaf.png" alt="" />
          </div>
      </main>

      <div className="transicao">
        <h1>Renove sua AUTOESTIMA com Amitaf</h1>
      </div>
      
      <div className="segunda">
        <img className='mona' src="/assets/images/mona.png" alt="" />
    
        <div className='texto'>
         <h1 >sobre nós</h1>

          <div className='centro'>

            <p className='text'>A empresa Amitaf foi fundada em 2021 para ajudar na autoestima de muitas mulheres, através de procedimentos estéticos, realçando a beleza  natural de cada cliente.</p> 
            <p>A nossa <span>MISSÃO</span> é trazer soluções no segmento da beleza com alta qualidade, dedicação e respeito.</p>
        
          </div>
        </div>
      </div>

      <div className='procedimentos'>

      </div>
      
      <h1 className='nossos-procedimentos'>Nossos Procedimentos</h1>

      <div className='mae'>
        <div className='nail'>
          <div className='imagem'>
            <img className='designer' src="/assets/images/naildesigner.png" alt="" />
          </div>
          
          <h1>Nail designer</h1>

          <p> Especializada em design de unhas, responsável por criar decorações, aplicar técnicas de embelezamento e cuidados com as unhas, além de utilizar uma variedade de materiais, como esmaltes, adesivos e gel, para criar designs artísticos e personalizados.</p>

          <button className='button'>Agende seu horário</button>
        </div>
        
        <div className='design'>
          <div className='imagem'>
            <img src="/assets/images/designersombracelha.png" alt="" />
          </div>
          <h1>Design de sobrancelha</h1>      
          <p>Sobrancelhas perfeitamente modeladas por especialistas de acordo com o modelo do seu rosto.</p>  
          <button className='button'>Agende seu horário</button>
        </div>

        <div className='brown'>
          <div className='imagem'>
            <img src="/assets/images/Browmlaminashion.png" alt="" />
          </div>
          <h1>Brown laminashion</h1>      
          <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>  
          <button className='button'>Agende seu horário</button>
        </div>
        
        <div className='botox'>
          <div className='imagem'>
            <img src="/assets/images/botoxlabial.png" alt="" />
          </div>
              <h1>Botox labial</h1>      
              <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>  
              <button className='button'>Agende seu horário</button>
        </div>
      </div>
     
     
      <div className='pai'>
        <div className='limpeza'>
          < img className='imagem' src="/assets/images/limpeza-pele.png" alt="" />
          <h1>Limpeza de pele</h1>            
          <p>Processo de remoção do excesso de impurezas, manchas e células mortas da pele.</p>
          <button>Agende seu horário</button>
        </div>
       
        <div className='depilacao'>
          < img className='imagem' src="/assets/images/depilacao.png" alt="" />
          <h1>Depilação</h1>      
          <p>Seu corpo sem pelos em procedimentos com a qualidade que só nossos profissionais entregam.</p>  
          <button>Agende seu horário</button>
        </div>
        
        <div className='gloss'>

          <img className='imagem' src="/assets/images/hidra-gloss.png" alt="" />
          <h1>Hidra gloss</h1>      
          <p>Tratamento que torna os lábios mais bonitos, hidratados e contribui para um aspecto jovem.</p>  
          <button>Agende seu horário</button>
        </div>
        <div className='extensao'>
         <h1 img className='imagem-pai' src="/assets/images/extensao-cilios.png" alt="" />
         <h1> Extensão de cilios</h1>      
         <p>Alongamento de cílios realizado com método 100% próprio e de maneira totalmente artesanal.</p>  
         <button>Agende seu horário</button>
        </div>
      </div>
      <div className='localizar'>
      <h1>Nosso Endereço </h1>
      <h2>Rua Fidalga, 193​  Pinheiros  05432-050  São Paulo - SP</h2>

      </div>
    </div>
  ); 
} 
