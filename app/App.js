import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Vibration, Image } from 'react-native';
import {useState} from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

let i = 0
console.log(postagensSalvas)
let postagensUm = [
  {image: require('./imagens/guerreiro.jpg'), texto: 'Nósso História começa com um guerreiro, e é você que contará essa história a medidda que as imagens forem aparendo, use sua imaginação.'},
  {image: require('./imagens/guerreira.jpg'), texto: 'Nósso História começa com uma guerreira, e é você que contará essa história a medidda que as imagens forem aparendo, use sua imaginação.'},
  {image: require('./imagens/genero.jpg'), texto: 'Nósso História começa com um heroi a sua escolha, e é você que contará essa história a medidda que as imagens forem aparendo, use sua imaginação.'},  
];
let postagensDois = [
  {image: require('./imagens/castelo.jpg'), texto: ''},
  {image: require('./imagens/caverna.png'), texto: ''},
  {image: require('./imagens/calabouco.jpg'), texto: ''},
];
let postagensTres = [
  {image: require('./imagens/goblin.png'), texto: ''},
  {image: require('./imagens/dragao.png'), texto: ''},
  {image: require('./imagens/malboro.jpg'), texto: ''},
];
let postagensQuatro = [
  {image: require('./imagens/espada.jpg'), texto: ''},
  {image: require('./imagens/machado.jpg'), texto: ''},
  {image: require('./imagens/arcoflecha.jpg'), texto: ''},
];
let postagensCinco = [
  {image: require('./imagens/barbie.jpg'), texto: ''},
  {image: require('./imagens/tesouro.jpeg'), texto: ''},
  {image: require('./imagens/coco.jpg'), texto: 'Parabéns você chegou no pior final e achou um monte de cocô, desfrute..'},
];
let postagensSeis = [
  {image: require('./imagens/fim.jpg'), texto: 'Fim da história'},
 
];
let postagens = [
  

]
let postagensSalvas = [
  
]

export default function App() {

  const[conteudoFeed, setConteudoFeed] = useState(<Feed />);

  function mostrarFeed(){

    setConteudoFeed(<Feed />)

  }
  function mostrarAddFeed(){

    setConteudoFeed(<AddFeed />)

  }
  
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        

      </View>



      <View style={styles.feed}>
        
        <ScrollView>
        {conteudoFeed}
        </ScrollView>

      </View>



     

      <View style={styles.footer}>

      
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome
              name='home'
              size={45}
              color='#ffffff'
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={mostrarAddFeed}>
          <FontAwesome
              name='plus-circle'
              size={45}
              color='#ffffff'
            />
        </TouchableOpacity>

      </View>
      
     
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {

    backgroundColor: '#000000',
    height: 65,
    width: '100%',
    marginTop: 20,

  },
  feed: {

    backgroundColor: '#4682B4',
    flex: 1,
    width: '100%',
    

  },
  footer: {

    backgroundColor: '#000000',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },





});


function Feed(){

  
  return (

    <View style={{alignItems:'center', padding:30}}>

    {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}

    <Text style={{fontSize: 20, padding:10,}}>Aqui aparecem suas histórias!</Text>

    {postagensSalvas.map( (poiu, index) => (

        <Post imagem={poiu.img} texto={poiu.txt} key={index}/>
         
    ) )}

    </View>
        

  )
 

}

function Post(props){
  

  return (
    
    <View style={{alignItems:'center', padding:30}}>

      
     

      <Image style={{height: 300, width: 350, borderRadius: 15,}}
      source={props.imagem}/>
      
      <Text style={{fontSize: 20, padding:20}}>{props.texto}</Text>


    </View>

  )
  

}

function AddFeed(){

  

  const[inputImagem,setImputImagem] = useState(require('./imagens/start.png'));
  const[inputTexto,setImputTexto] = useState('Clique em gerar para começar');
  const[botaoDisable,setbotaoDisable] = useState(false);
  let n = 0

  return (
   


    <View style={{flex: 1, alignItems:'center', padding:30}}>

      <Text style={{fontSize: 30, padding:20}}>Gerar História</Text>
  
      <Image style={{height: 300, width: 350, borderRadius: 15,}}
      source={inputImagem}/>

      <Text style={{fontSize: 20, padding:20}}>{inputTexto}</Text>
 

    <TouchableOpacity style={{height: 50, width: 150, fontSize: 30, borderWidth: 3,borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
     onPress={comecar} disabled = {botaoDisable}>
    <Text>Gerar</Text>


    </TouchableOpacity>
    <TouchableOpacity style={{height: 50, width: 150, fontSize: 30, borderWidth: 3,borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
     onPress={recomecar} >
    <Text>Recomeçar</Text>


    </TouchableOpacity>      

    </View>   
  
  )

  function comecar(){

    let imagem = (inputImagem)
    let text = (inputTexto)
    let tamanhoVetor = 0
    let objeto = {
        img: "",
        txt: "",
    }
   
    
      i++
      if(i==1){
         tamanhoVetor = postagensUm.length
         n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

          imagem = postagensUm[n].image
          text = postagensUm[n].texto

          setImputImagem(imagem)
          setImputTexto(text)

            objeto.img = imagem
            objeto.txt = text
            postagens.push(objeto)

            
      }
      if(i==2){
        tamanhoVetor = postagensDois.length
        n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

         imagem = postagensDois[n].image
         text = postagensDois[n].texto

         setImputImagem(imagem)
         setImputTexto(text)

          objeto.img = imagem
          objeto.txt = text
          postagens.push(objeto)
         
     }
     if(i==3){
      tamanhoVetor = postagensTres.length
      n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

       imagem = postagensTres[n].image
       text = postagensTres[n].texto

       setImputImagem(imagem)
       setImputTexto(text)

       objeto.img = imagem
       objeto.txt = text
       postagens.push(objeto)
       
      

     }
     if(i==4){
      tamanhoVetor = postagensQuatro.length
      n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

       imagem = postagensQuatro[n].image
       text = postagensQuatro[n].texto

       setImputImagem(imagem)
       setImputTexto(text)

       objeto.img = imagem
       objeto.txt = text
       postagens.push(objeto)
       
      

     }
     if(i==5){
      tamanhoVetor = postagensCinco.length
      n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

       imagem = postagensCinco[n].image
       text = postagensCinco[n].texto

       setImputImagem(imagem)
       setImputTexto(text)

       objeto.img = imagem
       objeto.txt = text
       postagens.push(objeto)
       
      

     }
     if(i==6){
      tamanhoVetor = postagensSeis.length
      n = (Math.floor(Math.random() * (0 - tamanhoVetor) + tamanhoVetor))

       imagem = postagensSeis[n].image
       text = postagensSeis[n].texto

       setImputImagem(imagem)
       setImputTexto(text)

       objeto.img = imagem
       objeto.txt = text
       postagens.push(objeto)

       postagensSalvas = postagens
       
      

     }
     if(i == 7){

        i = 0
        setImputImagem(require('./imagens/start.png'))
        setImputTexto('Clique em gerar para começar')
        setbotaoDisable(false)
      }

      
     
     
   }
   
   function recomecar(){

    
    i = 0
    setImputImagem(require('./imagens/start.png'))
    setImputTexto('Clique em gerar para começar')
    setbotaoDisable(false)
    



}
}




  

    
  





