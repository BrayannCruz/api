const express = require('express');
const cors =require('cors');

const app = express();

const port = process.env.PORT || 5000;

const personajes=[
    {id:1,nombre:'Kagaya Ubuyashiki',alías:'Oyakata-sama',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:23, genero:'Masculino',especie:'Humano', ocupacion:'Lider del cuerpo de exterminio de demonios',estilocombate:'',imagen:'/personajes/Kagaya.webp'},
    {id:2,nombre:'Hinaki Ubuyashiki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:8, genero:'Masculino',especie:'Humano', ocupacion:'',estilocombate:'',imagen:'/personajes/Hinaki.webp'},
    {id:3,nombre:'Kiriya Ubuyashiki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:8, genero:'Masculino',especie:'Humano', ocupacion:'Lider de la familia Ubuyashiki',estilocombate:'',imagen:'/personajes/Kiriya.webp'},
    {id:4,nombre:'Giyu Tomioka',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tomioka', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar Agua',estilocombate:'Respiración del Agua',grupo:'Pilar',imagen:'/personajes/Giyu.webp'},
    {id:5,nombre:'Mitsuri Kanroji',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kanroji', edad:19, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar Amor',estilocombate:'Respiración del Amor', grupo:'Pilar',imagen:'/personajes/Mitsuri.webp'},
    {id:6,nombre:'Obanai Iguro',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Iguro', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar Serpiente',estilocombate:'Respiración de Serpiente', grupo:'Pilar',imagen:'/personajes/Obanai.webp'},
    {id:7,nombre:'Sanemi Shinazugawa',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Shinazugawa', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar del Viento',estilocombate:'Respiracion de Viento', grupo:'Pilar',imagen:'/personajes/Sanemi.webp'},
    {id:8,nombre:'Gyomei Himejima',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Himejima', edad:27, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Roca',estilocombate:'Respiracion de la roca', grupo:'Pilar',imagen:'/personajes/Gyomei.webp'},
    {id:9,nombre:'Tengen Uzui',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Uzui', edad:23, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Roca',estilocombate:'Respiracion del sonido', grupo:'Pilar',imagen:'/personajes/Tengen.webp'},
    {id:10,nombre:'Muichiro Tokito',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tokito', edad:14, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Niebla',estilocombate:'Respiracion de la niebla', grupo:'Pilar',imagen:'/personajes/Muichiro.webp'},
    {id:11,nombre:'Shinobu Kocho',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kochō', edad:18, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar Insecto / Farmaceutica',estilocombate:'Respiración de los Insectos', grupo:'Pilar',imagen:'/personajes/Shinobu.webp'},
    {id:12,nombre:'Kyojuro Rengoku',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Rengoku', edad:20, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar del Fuego',estilocombate:'Respiración de Fuego', grupo:'Ex Pilar',imagen:'/personajes/Kyojuro.webp'}, 
    {id:13,nombre:'Kanae Kocho',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kochō', edad:17, genero:'Femenino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Flor',estilocombate:'Respiración de la Flor', grupo:'Ex Pilar',imagen:'/personajes/Kanae.webp'},
    {id:14,nombre:'Sakonji Urokodaki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Urokodaki', edad:'Desconocido', genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios Retirado',estilocombate:'', grupo:'Ex Pilar',imagen:'/personajes/Sakonji.webp'},
    {id:15,nombre:'Jigoro Kuwajima',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kuwajima', edad:60, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar del Rayo',estilocombate:'Respiración del Rayo', grupo:'Ex Pilar',imagen:'/personajes/Jigoro.webp'},
    {id:16,nombre:'Kanao Tsuyuri',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tsuyuri', edad:16, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios',estilocombate:'', grupo:'Cazadores de Demonios',imagen:'/personajes/Kanao.webp'},
    {id:17,nombre:'Tanjiro Kamado',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kamado', edad:15, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios',imagen:'/personajes/Tanjiro.webp'},
    {id:18,nombre:'Zenitsu Agatsuma',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Agatsuma', edad:16, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración del Rayo', grupo:'Cazadores de Demonios',imagen:'/personajes/Zenitsu.webp'},
    {id:19,nombre:'Inosuke Hashibira',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Hashibira', edad:15, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración de la Bestia', grupo:'Cazadores de Demonios',imagen:'/personajes/Inosuke.webp'},
    {id:20,nombre:'Genya Shinazugawa',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Shinazugawa', edad:16, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios',imagen:'/personajes/Genya.webp'},
    {id:21,nombre:'Murata',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'', edad:'Desconocido', genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración del Agua', grupo:'Cazadores de Demonios',imagen:'/personajes/Murata.webp'},
    {id:22,nombre:'Ozaki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios',imagen:'/personajes/Ozaki.webp'},
    {id:23,nombre:'Aoi Kanzaki',alías:'',afiliacion: 'Cuerpo de Exterminio de Demonios, Mansión de las mariposas', familia:'Kanzaki', edad:16, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios',estilocombate: 'Respiración del agua', grupo:'',imagen:'/personajes/Aoi.webp'},
    {id:24,nombre:'Sumi Nakahara',alías:'',afiliacion: 'Mansión de las mariposas', familia: 'Nkahara', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate:'', grupo:'',imagen:'/personajes/Sumi.webp'},
    {id:25,nombre:'Kiyo Terauchi',alías:'',afiliacion: 'Mansión de las mariposas', familia:'Kiyo', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate: '', grupo:'',imagen:'/personajes/Kiyo.webp'},
    {id:26,nombre:'Naho Takada',alías:'',afiliacion: 'Mansión de las mariposas', familia:'Takada', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate:'' , grupo:'',imagen:'/personajes/Naho.webp'},
    {id:27,nombre:'Goto',alías:'',afiliacion: 'Cuerpo de Exterminio de Demonios', familia:'Kanzaki', edad:23, genero:'Femenino',especie:'Humano', ocupacion:'kakushi',estilocombate: '', grupo:'',imagen:'/personajes/Goto.webp'},
    {id:28,nombre:'Muzan Kibutsuji',alías:'',afiliacion:'Doce lunas demoníacas', familia:'Kibutsuji', edad:'1000 aproximadamente', genero:'Masculino',especie:'Demonio', ocupacion:'Hombre de negocios(bajo su disfraz humano)',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Muzan.webp'},
    {id:29,nombre:'Nezuko Kamado',alías:'',afiliacion:'Tanjiro Kamado | Cuerpo de Exterminio de Demonios', familia:'Kamado', edad:'14 años(Dejo de envejecer al ser convertida en Demonio)', genero:'Femenino',especie:'Humana(actualmente) Demonio(antes)', ocupacion:'',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Nezuko.webp'},
    {id:30,nombre:'Tamayo',alías:'',afiliacion:'Tanjiro Kamado Cuerpo de Exterminio de Demonios', familia:'', edad:'+400 años (cronológicamente)', genero:'Femenino',especie:'Humana(anteriormente) Demonio', ocupacion:'Medico',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Tamayo.webp'},
    {id:31,nombre:'Yushiro',alías:'',afiliacion:'Tamayo', familia:'', edad:'', genero:'Masculino',especie:'Demonio', ocupacion:'Pintor',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Yushiro.webp'},
    {id:32,nombre:'Susamaru',alías:'',afiliacion:'Muzan Kibutsuji', familia:'', edad:'', genero:'Fermenina',especie:'Demonio Humana(anteriormente)', ocupacion:'',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Susamaru.webp'},
    {id:33,nombre:'Yahaba',alías:'',afiliacion:'Muzan Kibutsuji', familia:'', edad:'', genero:'Fermenina',especie:'Demonio Humano(anteriormente)', ocupacion:'',estilocombate:'', grupo:'Demonios',imagen:'/personajes/Yahaba.webp'},
    {id:34,nombre:'Nakime',alías:'Demonio de biwa o  Luna superior cuatro',afiliacion:'Doce lunas Demoníacas', familia:'Esposo sin nombrar +', edad:'', genero:'Fermenino',especie:'Demonio Humano(anteriormente)', ocupacion:'Cuarta luna creciente',estilocombate:'Técnica de sangre demoníaca', grupo:'Demonios',imagen:'/personajes/Nakime.webp'},
    {id:35,nombre:'Hakuji',alías:'Akaza',afiliacion:'Doce Lunas Demoniacas', familia:'Madre y padre sin nombrar', edad:'18(Físicamente) 131(cronológicamente)', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'Tercera Luna Demoniaca',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Akaza.webp'},
    {id:36,nombre:'Gyutaro',alías:'',afiliacion:'Doce Lunas Demoniacas', familia:'Daki(hermana)', edad:'13(Físicamente) 126(cronológicamente)', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'Sexta Luna Demoniaca',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Gyutaro.webp'},
    {id:37,nombre:'Ume',alías:'Warabihime',afiliacion:'Doce Lunas Demoniacas', familia:'Gyutaro(hermano)', edad:'13(Físicamente) 113(cronológicamente)', genero:'Femenino',especie:'Humana(Anteriormente) Demonio(Actualmente)', ocupacion:'Sexta Luna Demoniaca',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Warabihime.jpg'},
    {id:38,nombre:'Kokushibo',alías:'Luna superior uno',afiliacion:'Doce Lunas Demoniacas', familia:'Tsukiguni(hermano gemelo menor)', edad:'24(Físicamente) 480 a 485(cronológicamente)', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'Luna Demoniaca Uno',estilocombate:'Tecnica de Sangre Demoniaca y Respiracion de la luna', grupo:'Lunas superiores',imagen:'/personajes/kokushibo.webp'},
    {id:39,nombre:'Doma',alías:'Luna superior Dos',afiliacion:'Doce Lunas Demoniacas', familia:'', edad:'20(Físicamente) +133(cronológicamente)', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'Líder del culto de adoradores del paraíso',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Doma.webp'},
    {id:40,nombre:'Hantengu',alías:'',afiliacion:'Doce Lunas Demoniacas', familia:'', edad:'200(cronológicamente)',  genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Hantengu.jpg'},
    {id:41,nombre:'Gyokko',alías:'',afiliacion:'Doce Lunas Demoniacas', familia:'', edad:'113(cronológicamente)', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'Quinta Luna superior ',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/gyokko.webp'},
    {id:42,nombre:'Kaigaku',alías:'',afiliacion:'Doce Lunas Demoniacas y cuerpo de exterminio de Demonios (anteriormente)', familia:'', edad:'', genero:'Masculino',especie:'Humano(Anteriormente) Demonio(Actualmente)', ocupacion:'sexta Luna superior ',estilocombate:'Tecnica de Sangre Demoniaca', grupo:'Lunas superiores',imagen:'/personajes/Kaigaku.jpg'}
];

//#region
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json({
    type:"*/*"
})
);
app.use(cors());

//#endregion

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Definición de la ruta para /api/personajes
app.get('/api/personajes', (req, res) => {
  res.send(personajes);
});

app.get('/personajes', (req, res) => {
    const nombre = req.query.nombre;
    let resultado = personajes;
    if (nombre) {
      resultado = personajes.filter(personaje =>
        personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }
    res.json(resultado);
  });
  

app.get('/',(req,res)=>{
    res.send('Demon Slayer api');
});
app.get('/api/personajes',(req,res)=>{
    res.send(personajes);
});

app.post('/api/personajes/',(req,res)=>{
    const personaje={
        id:personajes.length+1,
        nombre:req.body.nombre,
    };
    personajes.push(personaje);
    res.send(personaje);
});

app.delete('/api/personajes/:id',(req,res)=>{
    const personaje=personajes.find(c=>c.id===parseInt(req.params.id));
    if(!personaje) return res.status(404).send(`Personaje no encontrado`);

    const index=personajes.indexOf(personaje);
    personajes.splice(index,1);
    res.send(personaje);
});


app.listen(port,()=>console.log(`Escuchando en el puerto ${port}...`));